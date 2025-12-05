---
url: "https://docs.digitalocean.com/products/volumes/how-to/mount/"
title: "How to Mount Volumes | DigitalOcean Documentation"
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
- Mount Volumes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Mount Volumes

Validated on 8 Apr 2021 • Last edited on 14 Nov 2025

Volumes are network-attached block storage. You can use them with Droplets or Kubernetes clusters, move or resize them, and create snapshots at any time.

When you first create a new volume, you need to format it. Formatting a volume creates a filesystem on the volume, erasing any existing data. You only need to format a volume once when you first create it because new volumes don’t have a filesystem.

Every time you attach a volume to a Droplet, including the first time, you need to mount it. [Mounting a formatted volume](https://docs.digitalocean.com/products/volumes/how-to/mount/#mount) adds the volume’s filesystem to the Droplet’s existing file hierarchy. You need to mount a volume every time you attach it to a Droplet to make it accessible to that Droplet’s operating system.

Only during a volume’s initial creation, you can choose to automatically format and mount it to a Droplet with a supported operating system.

Note

We cannot automatically mount volumes for you at any time other than when you first create the volume.

We automatically format and mount newly-created volumes by writing some metadata to the volume for the Droplet to read and perform the setup. Once the volume is mounted, this metadata is deleted. For privacy and security reasons, we can’t write to a volume after it’s fully created, so we can’t automatically mount volumes after their initial creation.

You can [set up persistent mounting](https://docs.digitalocean.com/products/volumes/how-to/mount/#persistent) to tell the operating system to mount certain filesystems on boot, which lets volumes remain accessible after reboots.

## Mounting a Formatted Volume

To mount a formatted volume, first choose a mount point, which is the directory where the volume’s filesystem should be attached. This is where you access the volume’s files after it’s mounted.

We recommend creating a new directory in `/mnt` to use as a mount point:

```shell
sudo mkdir /mnt/example_mount_point
```

Next, use `mount` to mount the volume’s filesystem to the mount point. We recommend using the same options as automatic mounting, which are `defaults,nofail,discard,noatime`:

```shell
sudo mount -o defaults,nofail,discard,noatime /dev/disk/by-id/scsi-example /mnt/example_mount_point
```

These options include read/write access, executing programs, error suppression for nonexistent devices, and continuous TRIM. `mount`’s man page (`man mount`) explains these and all other mount options in detail.

You can check that the mount itself was successful by passing the mount point to `findmnt`:

```shell
findmnt /mnt/use_your_mount_point
```

You should see output indicating that it is currently mounted:

```
TARGET                   SOURCE    FSTYPE OPTIONS
/mnt/example_mount_point /dev/sda1 ext4   rw,noatime,discard,data=ordered
```

## Setting Up Persistent Mounting

The `/etc/fstab` file contains static information about filesystems that the operating system can mount, including which ones to mount automatically at boot. You can add a line to this file for the volume’s filesystem to make it mount automatically when the Droplet boots. This keeps the volume’s filesystem persistent through reboots.

Each line in `/etc/fstab` represents one filesystem and consists of six space-separated fields:

1. `fs_spec`, the block device to mount. Use the `/dev/disk/by-id` identifier for the volume or partition.

2. `fs_file`, the mount point for the filesystem.

3. `fs_vfstype`, the type of filesystem in lowercase, like `ext4` or `xfs`.

4. `fs_mntops`, the mount options. We recommend the same options as automatic mounting, `defaults,nofail,discard,noatime`. `nofail` in particular lets the OS continue its boot sequence if the filesystem can’t be found, which is helpful if you detach the volume in the future without removing its `fstab` entry.

5. `fs_freq`, whether `dump` should operate on the filesystem. Use 0 to disable this functionality unless you know you need it.

6. `fs_passno`, the order that `fsck` should check filesystems in. Use `2` to enable checking. The root filesystem should be `1`, and `0` disables checking.


Ultimately, the line you add to `/etc/fstab` should look like this, with your volume’s identifier and mount point:

Example `/etc/fstab` entry

```text
/dev/disk/by-id/scsi-example /mnt/example-mount-point ext4 defaults,nofail,discard,noatime 0 2
```

After you edit the file, check that `/etc/fstab` is parsable and usable:

```shell
findmnt --verify --verbose
```

This lists any parsing errors, execution errors, and warnings. Once you resolve all errors, you can use `mount -a` to mount the volume.

In this article...

- [Mounting a Formatted Volume](https://docs.digitalocean.com/products/volumes/how-to/mount/#mount)
- [Setting Up Persistent Mounting](https://docs.digitalocean.com/products/volumes/how-to/mount/#persistent)

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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)