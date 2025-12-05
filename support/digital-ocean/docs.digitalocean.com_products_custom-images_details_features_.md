---
url: "https://docs.digitalocean.com/products/custom-images/details/features/"
title: "Custom Images Features | DigitalOcean Documentation"
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

- [Details](https://docs.digitalocean.com/products/custom-images/details/)
- Features

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Custom Images Features

Validated on 25 Sep 2018 • Last edited on 17 Jun 2025

Custom images are Linux and Unix-like images you import to DigitalOcean. You can create Droplets based custom images, which lets you migrate and scale your workloads without spending time recreating your environment from scratch.

Once you upload a custom image to your DigitalOcean account, you can create Droplets based on that image. When you upload a custom image, you select a region for it to be available in. You can create Droplets based on a custom image in that region, and you can make your custom image available in additional regions at any time.

You can find [cloud-friendly official Unix-like OS images on OpenStack](https://docs.openstack.org/image-guide/obtain-images.html) or create your own with your preferred VM software.

### Image Requirements

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

In this article...

- [Image Requirements](https://docs.digitalocean.com/products/custom-images/details/features/#image-requirements)

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