---
url: "https://docs.digitalocean.com/products/volumes/how-to/create/"
title: "How to Create and Set Up Volumes for Use with Droplets | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/volumes.9c13d8bb9aee0348ee1af5d72d4c795b4eea86db85fa161806e73d12c0b756d3.svg)Volumes Block Storage](https://docs.digitalocean.com/products/volumes/)
- [Getting Started](https://docs.digitalocean.com/products/volumes/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/volumes/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/volumes/how-to/)
  - [Create and Set Up Volumes](https://docs.digitalocean.com/products/volumes/how-to/create/)
  - [Delete Volumes](https://docs.digitalocean.com/products/volumes/how-to/delete/)
  - [Increase the Size of Volumes](https://docs.digitalocean.com/products/volumes/how-to/increase-size/)
  - [Detach Volumes](https://docs.digitalocean.com/products/volumes/how-to/detach/)
  - [Move Volumes between Droplets](https://docs.digitalocean.com/products/volumes/how-to/move-between-droplets/)
  - [Mount Volumes](https://docs.digitalocean.com/products/volumes/how-to/mount/)
  - [Unmount Volumes](https://docs.digitalocean.com/products/volumes/how-to/unmount/)
  - [Partition Volumes](https://docs.digitalocean.com/products/volumes/how-to/partition/)
  - [Expand Partitions](https://docs.digitalocean.com/products/volumes/how-to/expand-partitions/)
- [Reference](https://docs.digitalocean.com/products/volumes/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Block-Storage)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/volume/)
- [Details](https://docs.digitalocean.com/products/volumes/details/)
  - [Features](https://docs.digitalocean.com/products/volumes/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/volumes/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/volumes/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/volumes/details/limits/)
  - [Naming Conventions](https://docs.digitalocean.com/products/volumes/details/naming-conventions/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/volumes)
- [Support](https://docs.digitalocean.com/products/volumes/support/)

- [How-Tos](https://docs.digitalocean.com/products/volumes/how-to/)
- Create and Set Up Volumes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create and Set Up Volumes for Use with Droplets

Validated on 6 Oct 2023 • Last edited on 14 Nov 2025

Volumes are network-attached block storage. You can use them with Droplets or Kubernetes clusters, move or resize them, and create snapshots at any time.

To create and use a new volume with a Droplet, you need to create the volume itself, and then format and mount it to prepare it for use. Formatting and mounting is automatic by default for Droplets with supported operating systems, and you can choose to format and mount manually.

## Create Volumes Using Automation

How to Create a Volume Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute volume create`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/volume/create/) for more details:




```shell
doctl compute volume create <volume-name> [flags]
```



The following example creates a 4TiB volume named `example-volume` in the `nyc1` region. The command also applies two tags to the volume:




```shell
doctl compute volume create example-volume --region nyc1 --size 4TiB --tag frontend,backend
```


How to Create a Volume Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/volumes`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/volumes_create).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"size_gigabytes":10, "name": "example", "description": "Block store for examples", "region": "nyc1", "filesystem_type": "ext4", "filesystem_label": "example"}' \
  "https://api.digitalocean.com/v2/volumes"
```

### Go

Using [Godo](https://github.com/digitalocean/godo), the official DigitalOcean API client for Go:

```go
import (
    "context"
    "os"

    "github.com/digitalocean/godo"
)

func main() {
    token := os.Getenv("DIGITALOCEAN_TOKEN")

    client := godo.NewFromToken(token)
    ctx := context.TODO()

    createRequest := &VolumeCreateRequest{
        Region:        "nyc1",
        Name:          "example",
        Description:   "Block store for examples",
        SizeGigaBytes: 10,
    }

    volume, _, err := client.Storage.CreateVolume(ctx, createRequest)
}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

volume = DropletKit::Volume.new(
  size_gigabytes: 10,
  name: 'Example',
  description: 'Block store for examples',
  region: 'nyc1'
)
client.volumes.create(volume)
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "size_gigabytes": 10,
  "name": "ext4-example",
  "description": "Block store for examples",
  "region": "nyc1",
  "filesystem_type": "ext4",
  "filesystem_label": "ext4_volume_01"
}

resp = client.volumes.create(body=req)
```

## Create Volumes Using the Control Panel

To start creating a volume from the [control panel](https://cloud.digitalocean.com/), open the **Create** menu and select **Volumes**. You can also create and attach a new volume as you create a new Droplet, in the [Droplet create page’s **Add block storage** section](https://docs.digitalocean.com/products/droplets/how-to/create/#add-block-storage).

![Create menu](https://docs.digitalocean.com/screenshots/create.88f76a2e0fbab47d46467cfdb31a9a9396d289032523120cfbdf1b695f0aac34.png)

## Select Volume Size

In the **Select Volume Size** section, choose the size of the volume, either by selecting a preset size or entering a size in gigabytes.

![The select volume size section of the volume creation window](https://docs.digitalocean.com/screenshots/volumes/create/select-volume-size.668441f1665aee79646835e89a7bdc39feec20f298e80958a5b7168d42c519d9.png)

Some teams may be limited to creating volumes below a certain size. To access larger sizes, you can request an increase in the amount of available storage by contacting support. This option is available on the volumes creation page, by clicking the **Request** button on top of an unavailable size.

You can [increase the size of a volume](https://docs.digitalocean.com/products/volumes/how-to/increase-size/) after you create it.

## Select Droplet to Attach To and Name Volume

In the next section, choose the Droplet that you want to attach the volume to and enter a name for the volume. Volumes are located in the same datacenter and project as their associated Droplets.

![The select Droplet to attach to and name volume sections of the volume creation window](https://docs.digitalocean.com/screenshots/volumes/create/select-droplet-name-volume.7319b0af7c923f8b67d71804f5b3edb954b552e3470938e3201911302029ff1f.png)

You can create a volume while creating a new Droplet, in the [**Add block storage** section](https://docs.digitalocean.com/products/droplets/how-to/create/#add-block-storage) of the Droplet create page. Volumes you create this way have automatically generated names and are attached to the new Droplet, so the **Select Droplet to Attach To** and **Name Volume** sections do not display from the Droplet create page.

## Choose Configuration Options

In the **Choose Configuration Options** section, you choose how you want to format and mount the new volume.

![The choose configuration options section of the volume creation window](https://docs.digitalocean.com/screenshots/volumes/create/choose-configuration-options.0dd6423bb4be33da3d18815efd32b1dcf517a97091ee1d8fcd5a1484dea78cfc.png)

A newly-created volume has no filesystem, which is what lets a Droplet’s operating system read and write files to it. Formatting a volume creates a filesystem on it (and erases any existing data). You only need to format a volume once, when you first create it. Mounting a formatted volume makes its filesystem accessible to its Droplet. You need to mount the volume every time you attach it to a Droplet.

You can automatically format and mount volumes to Droplets with supported operating systems, and this option is selected by default when it is available. You can always choose to manually format and mount volumes.

### Automatically Format & Mount

When you automatically format and mount a volume, you also **choose a filesystem**. ext4 is the default because of its stability, backwards compatibility, and mature support and tooling. XFS, which specializes in performance for large data files, is also available.

Automatic mounting uses [systemd](https://www.freedesktop.org/software/systemd/man/systemd.mount.html) on distributions that support it. The mount unit files are `/etc/systemd/system/mnt-volume_*.mount`. The udev rules that control the configuration are in `/etc/udev/rules.d/99-digitalocean-automount.rules`.

On non-systemd distributions, automatic mounting uses `fstab`, following the same commands and options provided in the control panel’s instructions for manual formatting and mounting.

Volumes are auto-mounted into the `/mnt` directory with the options `defaults,nofail,discard,noatime`.

Note
When automatically creating mount points, we replace hyphens with underscores in the volume name. This is because systemd mount unit files use hyphens as separators instead of forward slashes, and for consistency, we match this behavior even on older distributions without systemd.

### Manually Format & Mount

If you choose to manually format and mount your volume, you can use the Droplet-specific directions in the volume’s **More** menu under **Config instructions**.

![Volume more menu](https://docs.digitalocean.com/screenshots/volumes/more-menu-attached.7a2fe22a5c7846e6eccf794c1555161f15cac8cf73da48e079705cc908cb8e01.png)

The instructions include three customized commands that you can copy and paste into a terminal from your local machine:

1. **SSH to your Droplet**, which includes the SSH command with the Droplet’s IP address filled in. If you disabled `root` logins, you need to substitute the appropriate user for `root`.

2. **Format the volume: One time only**, which includes the commands to set up a filesystem with the Droplet’s IP address and the SCSI ID of the volume pre-filled. This command specifies ext4 for the filesystem. To use XFS, If you prefer, change `mkfs.ext4` to `mkfs.xfs`.

3. **Mount the volume**, which includes the commands to create a mount point, mount the volume, and set the volume to automatically mount when you reboot. The specific SCSI ID of the volume is pre-filled.


## Create Volume

After you’ve chosen all necessary settings, click **Create Volume** to create the volume. Once the volume is formatted and mounted, it is ready to use.

If a Droplet is in a volume-supported datacenter, the Droplet’s **Volumes** page lets you create and manage its volumes. You can manage all the volumes associated with your account on the **Volumes** page:

![Volumes overview page in the control panel](https://docs.digitalocean.com/screenshots/volumes/main-page.99c05b61f6a9b0e0eb8fca2389223b111f05e3e332444a7c734e26bec4a4f039.png)

After creation, you can [move volumes between Droplets](https://docs.digitalocean.com/products/volumes/how-to/move-between-droplets/) and [increase the size of volumes](https://docs.digitalocean.com/products/volumes/how-to/increase-size/).

## Add, Move, or Delete Files

After mounting the volume, it is accessible on your Droplet at `/mnt/your-volume-name`. You can use this path to do any file operations you would do with a native volume, including creating, moving, or deleting files.

If you do not change the volume name at creation time, it receives a default name based on the volume’s datacenter, making the path something like `/mnt/volume-nyc3-01`. You can run `ls /mnt` to get a list of attached volumes and their paths.

In this article...

- [Create Volumes Using Automation](https://docs.digitalocean.com/products/volumes/how-to/create/#create-volumes-using-automation)
- [Create Volumes Using the Control Panel](https://docs.digitalocean.com/products/volumes/how-to/create/#create-volumes-using-the-control-panel)
- [Select Volume Size](https://docs.digitalocean.com/products/volumes/how-to/create/#select-volume-size)
- [Select Droplet to Attach To and Name Volume](https://docs.digitalocean.com/products/volumes/how-to/create/#select-droplet-to-attach-to-and-name-volume)
- [Choose Configuration Options](https://docs.digitalocean.com/products/volumes/how-to/create/#choose-configuration-options)
  - [Automatically Format & Mount](https://docs.digitalocean.com/products/volumes/how-to/create/#automatically-format--mount)
  - [Manually Format & Mount](https://docs.digitalocean.com/products/volumes/how-to/create/#manual-mount)
- [Create Volume](https://docs.digitalocean.com/products/volumes/how-to/create/#create-volume)
- [Add, Move, or Delete Files](https://docs.digitalocean.com/products/volumes/how-to/create/#add-move-or-delete-files)

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