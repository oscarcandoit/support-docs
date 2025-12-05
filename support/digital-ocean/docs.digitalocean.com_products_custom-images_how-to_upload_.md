---
url: "https://docs.digitalocean.com/products/custom-images/how-to/upload/"
title: "How to Upload Custom Images | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/custom-images.18f81d068bba467745996fcd3b0f4b004a425f0203fdc37728497614b9531dbf.svg)Custom Images](https://docs.digitalocean.com/products/custom-images/)
- [Getting Started](https://docs.digitalocean.com/products/custom-images/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/custom-images/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/custom-images/how-to/)
  - [Upload Custom Images](https://docs.digitalocean.com/products/custom-images/how-to/upload/)
  - [Add Additional Regions](https://docs.digitalocean.com/products/custom-images/how-to/add-regions/)
  - [Delete Custom Images](https://docs.digitalocean.com/products/custom-images/how-to/delete/)
  - [Create Droplets](https://docs.digitalocean.com/products/custom-images/how-to/create-droplets/)
- [Reference](https://docs.digitalocean.com/products/custom-images/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Images)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/image/)
- [Details](https://docs.digitalocean.com/products/custom-images/details/)
  - [Features](https://docs.digitalocean.com/products/custom-images/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/custom-images/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/custom-images/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/custom-images/details/limits/)

- [How-Tos](https://docs.digitalocean.com/products/custom-images/how-to/)
- Upload Custom Images

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Upload Custom Images

Validated on 25 Aug 2020 • Last edited on 17 Jun 2025

Custom images are Linux and Unix-like images you import to DigitalOcean. You can create Droplets based custom images, which lets you migrate and scale your workloads without spending time recreating your environment from scratch.

## Image Requirements

Images you upload to DigitalOcean must meet the following requirements:

- **Operating system**. Images must have a Unix-like OS.

- **File format**. Images must be in one of the following file formats:
  - [Raw (`.img`)](https://en.wikipedia.org/wiki/IMG_(file_format)) with an MBR or GPT partition table
  - qcow2
  - [VHDX](https://en.wikipedia.org/wiki/VHD_(file_format)#Virtual_Hard_Disk_(VHDX))
  - VDI
  - VMDK
- **Size**. Images must be 100 GB or less when uncompressed, including the filesystem.

- **Filesystem**. Images must support the ext3 or ext4 filesystems.

- **`cloud-init`**. Images must have cloud-init 0.7.7 or higher, cloudbase-init, coreos-cloudinit, ignition, or bsd-cloudinit installed and configured correctly. If your image’s default `cloud-init` configuration lists the `NoCloud` data source before the `ConfigDrive` data source, Droplets created from your image will not function properly.

Click here to display detailed cloud-init instructions.

If your image’s default `cloud-init` configuration lists the `NoCloud` data source before the `ConfigDrive` data source, Droplets created from your image will not function properly. We have detailed instructions on [reconfiguring `cloud-init` for Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-create-a-digitalocean-droplet-from-an-ubuntu-iso-format-image#step-3-%E2%80%94-reconfiguring-cloud-init).



The process for fixing this in general is to edit the `cloud-init` config file either using a text editor or with `dpkg-reconfigure` to order the data sources correctly. The actual line in the file should look similar to this when you’re done:



```
datasource_list: [ ConfigDrive, OpenNebula, DigitalOcean, Azure, AltCloud, OVF, MAAS, GCE, OpenStack, CloudSigma, SmartOS, None, NoCloud ]
```



After you edit the file, you need to purge the previous `cloud-init` data so `cloud-init` runs using the proper data source when your Droplet boots. You can do this using `cloud-init clean` or by manually cleaning out `/var/lib/cloud`. You should also verify the networking configuration, the details of which vary by distribution.

- **SSH configuration**. Images must have `sshd` installed and configured to run on boot. If your image does not have `sshd` set up, you will not have SSH access to Droplets created from that image unless you [recover access using the Recovery Console](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/).


You can also upload a custom image that meets the above criteria as a compressed [gzip](https://en.wikipedia.org/wiki/Gzip) or [bzip2](https://en.wikipedia.org/wiki/Bzip2) file.

Warning
You must add an SSH key when creating Droplets from a custom image. These Droplets have password authentication disabled by default and you cannot use the control panel to reset the root password.

You can find [cloud-friendly official Unix-like OS images on OpenStack](https://docs.openstack.org/image-guide/obtain-images.html).

## Upload a Custom Image using Automation

How to Upload a Custom Image Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute image create`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/image/create/) for more details:




```shell
doctl compute image create <image-name> [flags]
```



The following example creates a custom image named `Example Image` from a URL and stores it in the `nyc1` region:




```shell
doctl compute image create "Example Image" --image-url "https://example.com/image.iso" --region nyc1
```


How to Upload a Custom Image Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/images`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/images_create_custom).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"name": "ubuntu-18.04-minimal", "url": "http://cloud-images.ubuntu.com/minimal/releases/bionic/release/ubuntu-18.04-minimal-cloudimg-amd64.img", "distribution": "Ubuntu", "region": "nyc3", "description": "Cloud-optimized image w/ small footprint", "tags":["base-image", "prod"]}' \
  "https://api.digitalocean.com/v2/images"
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "name": "ubuntu-18.04-minimal",
  "url": "http://cloud-images.ubuntu.com/minimal/releases/bionic/release/ubuntu-18.04-minimal-cloudimg-amd64.img",
  "distribution": "Ubuntu",
  "region": "nyc3",
  "description": "Cloud-optimized image w/ small footprint",
  "tags": [\
    "base-image",\
    "prod"\
  ]
}

resp = client.images.create_custom(body=req)
```

## Upload a Custom Image using the Control Panel

To upload an image via the [control panel](https://cloud.digitalocean.com/), in the left menu, click **Backups & Snapshots**, then click the **Custom Images** tab.

![Custom Images tab in the control panel](https://docs.digitalocean.com/screenshots/custom-images/custom-image-tab.f3b0a1bf92d80f100eef7cc9caf6d014dbc7e329f76486f71d6beeb4e1dbc022.png)

Here, you can upload a custom image in two ways:

- You can upload an image file directly by clicking the **Upload Image** button, which opens a file selector, or by dragging and dropping the image file into the window.
Note
Some browsers have file size limitations. If you’re unable to upload a large file via your browser, you can host the file somewhere and upload it by URL. For example, you can upload your image to [Spaces](https://docs.digitalocean.com/products/spaces/) and [make the file public](https://docs.digitalocean.com/products/spaces/how-to/set-file-permissions/) or use a file sharing tool like [Dropbox](https://www.dropbox.com/). Make sure the URL ends in the file extension (like `example.com/file.raw` instead of `example.com/file.raw?dl=0`).

- You can enter the URL to an image file by clicking the **Import via URL** button. In the **Upload an Image** window that opens, enter the URL of the image you want to use in the text field, then click **Next**. The control panel supports uploads from HTTP, HTTPS, and FTP URLs.
Note
Importing a custom image by URL fails if the image is served by a CDN that doesn’t support HEAD requests. If you have trouble importing an image via a URL, try downloading the file and uploading it directly.


Using either upload method, the next window that opens prompts you to enter details about your image.

![Upload an image window](https://docs.digitalocean.com/screenshots/custom-images/upload-image.f63c90aa4112ad41f15325db0216f4a9632406e30bbc1ee69da95e7664958375.png)

- **Edit Image Name**: This field is pre-filled with the name of the file you uploaded, but you can customize it if you like.

- **Distribution**: You can choose from Arch Linux, Fedora, Ubuntu, CentOS, Debian, or Unknown.

- **Choose a datacenter region**: Your image is located in a single datacenter of your choice at first, and you can [transfer custom images to different datacenters](https://docs.digitalocean.com/products/custom-images/how-to/add-regions/) after uploading.

- **Tags** (optional): Custom images support [tagging](https://docs.digitalocean.com/products/droplets/how-to/tag/). You can add tags to your custom image here or at any time after uploading.

- **Notes** (optional): This is a plain text field you can use to enter any additional notes about your custom image for your use.


After you’ve entered these details, click **Upload Image**. A progress bar appears on the control panel next to the **Upload Image** button. If you click **Details** above this progress bar, a window appears listing all of your current uploads.

![Custom image upload progress window](https://docs.digitalocean.com/screenshots/custom-images/uploading-image-progress.47a059ec46d49d750fc5d49fb9eeeb11a8a289a2573d2c8ee8f799a6f3726626.png)

You can click the **X** next to any in-progress upload to cancel it, or click **Cancel Uploads** to cancel all current uploads.

Once you have at least one custom image added to your account, you can [create a Droplet from a custom image](https://docs.digitalocean.com/products/custom-images/how-to/create-droplets/).

In this article...

- [Image Requirements](https://docs.digitalocean.com/products/custom-images/how-to/upload/#image-requirements)
- [Upload a Custom Image using Automation](https://docs.digitalocean.com/products/custom-images/how-to/upload/#upload-a-custom-image-using-automation)
- [Upload a Custom Image using the Control Panel](https://docs.digitalocean.com/products/custom-images/how-to/upload/#upload-a-custom-image-using-the-control-panel)

##### Company

- [About](https://www.digitalocean.com/about)
- [Careers](https://www.digitalocean.com/careers)
- [Blog](https://www.digitalocean.com/blog)

##### Docs

- [Docs Home](https://docs.digitalocean.com/)
- [API Reference](https://docs.digitalocean.com/reference/api)
- [CLI Reference](https://docs.digitalocean.com/reference/doctl)
- [Release Notes](https://docs.digitalocean.com/release-notes)
- [Trust Platform](https://www.digitalocean.com/trust)

##### Community

- [Tutorials](https://www.digitalocean.com/community/tutorials)
- [Q&A](https://www.digitalocean.com/community/questions)
- [Write for DOnations](https://www.digitalocean.com/community/pages/write-for-digitalocean)
- [Currents Research](https://www.digitalocean.com/currents)
- [Legal](https://www.digitalocean.com/legal)
- [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

##### Support

- [Support Center](https://docs.digitalocean.com/support)
- [Report Abuse](https://www.digitalocean.com/company/contact/abuse)

* * *

Cookie Preferences

© 2025 DigitalOcean, LLC. All rights reserved

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

Loading...

## Product Docs

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

## Marketplace

## DigitalOcean Blog

## Community

navigategoexit

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices