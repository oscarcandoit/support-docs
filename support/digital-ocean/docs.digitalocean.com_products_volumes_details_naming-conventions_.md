---
url: "https://docs.digitalocean.com/products/volumes/details/naming-conventions/"
title: "Naming Conventions for DigitalOcean Volumes Block Storage | DigitalOcean Documentation"
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

- [Details](https://docs.digitalocean.com/products/volumes/details/)
- Naming Conventions

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Naming Conventions for DigitalOcean Volumes Block Storage

Validated on 22 Sep 2022 • Last edited on 14 Nov 2025

Volumes are network-attached block storage. You can use them with Droplets or Kubernetes clusters, move or resize them, and create snapshots at any time.

DigitalOcean volumes have some platform-specific naming conventions for volume device files, automatic mount points, and systemd unit files:

| Volume Name | `/dev/disk/by-id` Link | Automatic Mount Point | Mount Unit File in `/etc/systemd/system` |
| --- | --- | --- | --- |
| `example` | `scsi-0DO_Volume_example` | `/mnt/example` | `mnt-example.mount` |
| `volume-nyc1-01` | `scsi-0DO_Volume_volume-nyc-01` | `/mnt/volume_nyc_01` | `mnt-volume_nyc_01.mount` |

Each section below goes into more detail about these naming conventions.

## Volume Identifiers

In Linux, hardware devices are typically represented by special [device files](https://en.wikipedia.org/wiki/Device_file) within the `/dev` directory with names like `sda` and `sdb`. Subdirectories in `/dev/disk` contain symbolic links with more descriptive names to make it easier to identify devices.

`/dev/sd*` names can change between boots, so we recommend using the links in `/dev/disk/by-id` for DigitalOcean volumes (and any partitions on them) because they are predictable and reliable across reboots.

### `/dev/disk/by-id` Links

Links in the `/dev/disk/by-id` subdirectory are conventionally associated with hardware serial numbers, but the `/dev/disk/by-id` identifiers for DigitalOcean volumes are composed of these parts in order:

1. The string `scsi-0DO_Volume_`
2. The name of the volume, like `volume-nyc1-01`
3. The partition suffix, like `-part1`, if the volume is partitioned

The full identifier for a volume named `volume-nyc1-01` would be `/dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01`. The first partition on that volume would be `/dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01-part1`.

Tip
You can use `mkfs`’s `-L` option to label a filesystem. These labels are persistent names that can be easier to remember as an alternative to the `/dev/disk/by-id` links.

The `/dev/disk/by-id` link for a volume is visible in its config instructions in the control panel (click the volume’s **More** menu, then **Config instructions**).

### Mapping `/dev/disk/by-id` links to `/dev/sd*` Names

Most tools can take `/dev/disk/by-id` identifiers as input but use the traditional `/dev/sd*` names in their output.

To see the mapping between `/dev/disk/by-id` links and `/dev/sd*` names, read the link targets with `file`:

```shell
file /dev/disk/by-id/*
```

```
/dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01:       symbolic link to ../../sda
/dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01-part1: symbolic link to ../../sda1
```

## Automatic Mounting

| Volume Name | Automatic Mount Point | Mount Unit File |
| --- | --- | --- |
| `example` | `/mnt/example` | `/etc/systemd/system/mnt-example.mount` |
| `volume-nyc1-01` | `/mnt/volume_nyc_01` | `/etc/systemd/system/mnt-volume_nyc_01.mount` |

### Unit Files

When you create a new volume, you can [automatically format and mount it](https://docs.digitalocean.com/products/volumes/how-to/create/#automatically) to Droplets with supported operating systems. Automatic mounting uses systemd on distributions that support it.

The systemd mount unit files are named `/etc/systemd/system/path-to-mount-point.mount`. The path to the mount point uses hyphens as separators instead of forward slashes.

### Mount Points

We automatically mount volumes to `/mnt` in a directory with the same name as the volume, so a volume named `example` would have the mount point `/mnt/example`.

However, because of the systemd mount unit file naming, we cannot automatically mount a volume at a path that includes hyphens. If there are hyphens in the volume name, we replace the hyphens with underscores, so a volume named `volume-nyc-01` would have the mount point `/mnt/volume_nyc_01`.

For consistency, we match this behavior even on distributions without systemd.

In this article...

- [Volume Identifiers](https://docs.digitalocean.com/products/volumes/details/naming-conventions/#volume-identifiers)
  - [`/dev/disk/by-id` Links](https://docs.digitalocean.com/products/volumes/details/naming-conventions/#devdiskby-id-links)
  - [Mapping `/dev/disk/by-id` links to `/dev/sd*` Names](https://docs.digitalocean.com/products/volumes/details/naming-conventions/#mapping-devdiskby-id-links-to-devsd-names)
- [Automatic Mounting](https://docs.digitalocean.com/products/volumes/details/naming-conventions/#automatic-mounting)
  - [Unit Files](https://docs.digitalocean.com/products/volumes/details/naming-conventions/#unit-files)
  - [Mount Points](https://docs.digitalocean.com/products/volumes/details/naming-conventions/#mount-points)

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