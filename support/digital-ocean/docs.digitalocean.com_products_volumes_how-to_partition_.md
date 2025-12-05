---
url: "https://docs.digitalocean.com/products/volumes/how-to/partition/"
title: "How to Create Partitions on DigitalOcean Volumes Block Storage | DigitalOcean Documentation"
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
- Partition Volumes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create Partitions on DigitalOcean Volumes Block Storage

Validated on 20 Jun 2025 • Last edited on 14 Nov 2025

Volumes are network-attached block storage. You can use them with Droplets or Kubernetes clusters, move or resize them, and create snapshots at any time.

Partitioning lets you divide a single storage device into smaller units that you can manage independently. You can write multiple filesystems to one device to segment space along functional lines.

To use partitions with a volume, first you must [create the partition(s)](https://docs.digitalocean.com/products/volumes/how-to/partition/#create) and then [format each partition](https://docs.digitalocean.com/products/volumes/how-to/partition/#format).

## Create Partitions

The two most common partitioning systems are the legacy [master boot record (MBR)](https://en.wikipedia.org/wiki/Master_boot_record) and the contemporary [GUID Partition Table (GPT)](https://en.wikipedia.org/wiki/GUID_Partition_Table).

MBR partitions have significant limitations, like restrictions on the number and size of partitions you can create. As a result, most contemporary computers use GPT, which also provides limited backwards compatibility support for MBRs.

We recommend only using GPT partitions. To work with GPT partitions, we recommend using `parted` for non-interactive partitioning or `gdisk` for interactive, menu-based partitioning. Both `parted` and `gdisk` are installed by default on most Linux distributions.

Non-interactive partitioning with parted

First, open the `parted` command prompt by specifying the block device:

```shell
sudo parted /dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01
```

This brings you to a prompt that begins with `(parted)` where you can run `parted` commands on that block device without having to specify the path again.

Write a bare GPT partition table to your volume:

```bash
mklabel gpt
```

Next, you can write your GPT partitions with `mkpart <partlabel> <start> <end>`:

- `partlabel` is the name of the partition entry. Choose a name or omit the name by using an empty string (`""`).

- `start` and `end` are the start and end positions of the partition. These support a variety of units, but we recommend using percentages to let `parted` align the partitions to the underlying sectors for the best performance.


For example, `mkpart "" 0% 100%`
creates a single partition with no partition label that spans the entire volume.

Similarly, `mkpart example1 0% 50%`
and `mkpart example2 50% 100%`
create two equally-sized partitions labeled “example1” and “example2”.

Interactive partitioning with gdisk

To start, use the volume identifier as an argument to `gdisk` to scan the device and locate existing structures.

```shell
sudo gdisk /dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01
```

This enters you into an interactive prompt:

Output

```
GPT fdisk (gdisk) version 1.0.1

Partition table scan:
MBR: not present
BSD: not present
APM: not present
GPT: not present

Creating new GPT entries.

Command (? for help):
```

To write a new partition table to the disk, use the **o** option:

```text
o
```

Confirm the operation by entering **y** at the confirmation prompt:

Output

```
This option deletes all partitions and creates a new protective MBR.
Proceed? (Y/N):
```

Next, create partitions by using the **n** option:

```text
n
```

`gdisk` takes you through a series of prompts for the partition number, the first sector, the last sector or size, and the GUID for the partition type:

Output

```
Partition number (1-128, default 1):
First sector (34-209715166, default = 2048) or {+-}size{KMGTP}:
Last sector (2048-209715166, default = 209715166) or {+-}size{KMGTP}: +10G
Current type is 'Linux filesystem'
Hex code or GUID (L to show codes, Enter = 8300):
Changed type of partition to 'Linux filesystem'
```

You can press `ENTER` to accept the suggested default values, which is typically the right choice. For the last sector or size prompt, you can use `+` to indicate relative sizing. This means that you can pass the partition size directly (instead of calculating the end position, as with `parted`).

You can display the partitions by using the **p** option:

```text
p
```

Output

```
Disk /dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01: 209715200 sectors, 100.0 GiB
Logical sector size: 512 bytes
Disk identifier (GUID): 19252774-25E2-4899-96CD-DCFE3B846DCC
Partition table holds up to 128 entries
First usable sector is 34, last usable sector is 209715166
Partitions will be aligned on 2048-sector boundaries
Total free space is 188743613 sectors (90.0 GiB)

Number  Start (sector)    End (sector)  Size       Code  Name
1            2048        20973567   10.0 GiB    8300  Linux filesystem
```

To write the table to the volume and exit the utility, use the **w** option, which prompts you to confirm the changes.

```text
w
```

Output

```
Final checks complete. About to write GPT data. THIS WILL OVERWRITE EXISTING
PARTITIONS!!

Do you want to proceed? (Y/N):
```

When you are certain of your changes, type **Y** to write the partitions to the volume.

## Format the Partitions

After partitioning, you must format the partitions by writing a filesystem to each one. The filesystem is responsible for managing file-level interactions and providing reliable methods of writing and retrieving information on the disk.

There are many different types of Linux-compatible filesystems, like ext4, [XFS](https://en.wikipedia.org/wiki/XFS), [Btrfs](https://en.wikipedia.org/wiki/Btrfs), and [ZFS](https://en.wikipedia.org/wiki/ZFS). Distributions usually promote ext4 or XFS as the default choice for general purpose computing. The tooling for these two filesystems is usually installed by default, which means that formatting and managing these filesystems is straightforward.

Most Linux filesystems are formatted using tools that begin with `mkfs.` followed by the name of the filesystem in lowercase, like `mkfs.ext4` or `mkfs.xfs`. By default, this creates a filesystem that fills the entire block device passed to it.

Warning

When formatting with `mkfs`, use the identifier for the partition, not the identifier for the whole volume. Formatting the volume overwrites the partitions you created.

When using the `/dev/disk/by-id` identifiers, partitions end in `-part#`. You can use `mkfs`’s `-L` option to label the partition, which gives it a persistent name to use as an alternative to the `/dev/disk/by-id` identifiers.

Format with ext4

To format a partition with an ext4 filesystem, use `mkfs.ext4` on the partition (not the whole volume):

```shell
sudo mkfs.ext4 /dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01-part1
```

Output

```
mke2fs 1.42.13 (17-May-2015)
Discarding device blocks: done
Creating filesystem with 2621440 4k blocks and 655360 inodes
Filesystem UUID: 37858ba9-c2f3-4afe-9013-83111111e862
Superblock backups stored on blocks:
    32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632

Allocating group tables: done
Writing inode tables: done
Creating journal (32768 blocks): done
Writing superblocks and filesystem accounting information: done
```

Format with XFS

To format a partition with an XFS partition, use `mkfs.xfs` on the partition (not the whole volume):

```shell
sudo mkfs.xfs /dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01-part1
```

Output

```
meta-data=/dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01-part1 isize=512    agcount=4, agsize=5898175 blks
        =                       sectsz=512   attr=2, projid32bit=1
        =                       crc=1        finobt=1, sparse=0
data     =                       bsize=4096   blocks=23592699, imaxpct=25
        =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0 ftype=1
log      =internal log           bsize=4096   blocks=11519, version=2
        =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
```

Once you’ve formatted each partition, you can [mount the volume](https://docs.digitalocean.com/products/volumes/how-to/mount/) and begin using it.

In this article...

- [Create Partitions](https://docs.digitalocean.com/products/volumes/how-to/partition/#create)
- [Format the Partitions](https://docs.digitalocean.com/products/volumes/how-to/partition/#format)

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