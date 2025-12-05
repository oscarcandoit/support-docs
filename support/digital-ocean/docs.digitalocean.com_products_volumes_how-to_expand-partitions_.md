---
url: "https://docs.digitalocean.com/products/volumes/how-to/expand-partitions/"
title: "How to Expand Partitions After Resizing a Volume | DigitalOcean Documentation"
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
- Expand Partitions

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Expand Partitions After Resizing a Volume

Validated on 3 Oct 2019 • Last edited on 14 Nov 2025

Volumes are network-attached block storage. You can use them with Droplets or Kubernetes clusters, move or resize them, and create snapshots at any time.

If you [manually partitioned your volume](https://docs.digitalocean.com/products/volumes/how-to/partition/) when you created it, the process for increasing the size of the volume has additional steps.

However, volumes are unpartitioned by default. If you automatically formatted and mounted your volume or used the **Config instructions** in the control panel, your volume is unpartitioned, and you should follow the less complicated steps to [resize an unpartitioned volume](https://docs.digitalocean.com/products/volumes/how-to/increase-size/).

Tip

If you’re not sure if your volume is partitioned, you can check with `lsblk --fs`:

```shell
sudo lsblk --fs /dev/disk/by-id/use_your_volume_identifier
```

```
NAME FSTYPE LABEL UUID                                 MOUNTPOINT
sda  ext4         18efad39-6b7c-44d3-ba21-b0778911c4ed /mnt/volume-nyc1-01
```

The `FSTYPE` column lists a filesystem like `ext4` for unpartitioned volumes and a variant like `sda1` for partitioned volumes.

To increase the size of a partitioned volume, after you [resize the volume itself](https://docs.digitalocean.com/products/volumes/how-to/increase-size/#resize-the-volume), you need to expand the last partition to use the new space by [rewriting the partition table](https://docs.digitalocean.com/products/volumes/how-to/expand-partitions/#rewrite-the-partition-table) and then [resizing the last partition’s filesystem](https://docs.digitalocean.com/products/volumes/how-to/expand-partitions/#expand-filesystem).

## Rewrite the Partition Table

We recommend `gdisk` to rewrite partition tables. It supports backups of the existing table, explicitly moves GPT recovery data to the end of the disk, and works with partitions of any size. Tools like `growpart` are straightforward, but the versions shipped with most distributions can only resize partitions up to 2 TB.

First, unmount all partitions. This is the same process as [unmounting an unpartitioned volume](https://docs.digitalocean.com/products/volumes/how-to/unmount/) repeated for each of the partitions on the volume.

Change to a writable directory so you can successfully write the partition table backup file, then start `gdisk` with the volume identifier.

```shell
cd ~
sudo gdisk /dev/disk/by-id/use_your_volume_identifier
```

For safety, use the `b` command to back up the current partition, and enter a filename for the backup when prompted.

```text
b
Enter backup filename to save: partition_table.bak
```

Switch to the experts menu with `x`, which changes the prompt to reflect the new context. Use `e` to move the backup GPT data structures to the end of the volume, which changed when you expanded the volume, and exit back to the main menu with `m`.

```text
Command (? for help): x
Expert command (? for help): e
Relocating backup data structures to the end of the disk
Expert command (? for help): m
Command (? for help):
```

To use the new space on the volume, you need to expand the last partition into the free area by removing the existing partition and recreating it.

You can use `p` to display the current partition table first to note the **Number**, **Start (sector)**, **Code**, and **Name** values of the last partition. You can use these to verify the correct values when you create the new partition.

```text
p
Disk /dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01: 419430400 sectors, 200.0 GiB
Logical sector size: 512 bytes
Disk identifier (GUID): 016F1E0A-83C5-4CF2-A78B-150F689CC45A
Partition table holds up to 128 entries
First usable sector is 34, last usable sector is 419430366
Partitions will be aligned on 2048-sector boundaries
Total free space is 209719229 sectors (100.0 GiB)

Number  Start (sector)    End (sector)  Size       Code  Name
   1            2048       209713151   100.0 GiB   8300  primary
```

Use `d` to remove the partition. If the volume has multiple partitions, `d` prompts for a partition number, so choose the last partition.

```text
d
Using 1
```

Use `n` to start creating a new partition, which prompts you for information about the partition you’re creating. The suggested values are usually correct, but verify them with the values of the partition you deleted. For the **Last sector** prompt, accept the default to expand the partition to the end of the disk.

```text
n
Partition number (1-128, default 1):
First sector (34-419430366, default = 2048) or {+-}size{KMGTP}:
Last sector (2048-419430366, default = 419430366) or {+-}size{KMGTP}:
Current type is 'Linux filesystem'
Hex code or GUID (L to show codes, Enter = 8300):
Changed type of partition to 'Linux filesystem'
```

The partition creation process does not prompt for an internal GPT partition name, but you can use the `c` command to set the name to its previous value. You can verify the new partition table you’ve created with the `p` command again.

When you’re ready, use the `w` command to write the partition data to the volume and confirm the write with `Y`:

```text
w
Final checks complete. About to write GPT data. THIS WILL OVERWRITE EXISTING
PARTITIONS!!
Do you want to proceed? (Y/N): Y
OK; writing new GUID partition table (GPT) to /dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01.
The operation has completed successfully.
```

This expands the last partition to consume the rest of the available space on the volume.

## Expand the Filesystem of the Last Partition

Next, you need to expand the filesystem on the last partition to use the extra available space.

First, unmount the disk:

```shell
sudo umount /mnt/use_your_mount_point
```

The procedure used to grow the last partition’s filesystem depends on the filesystem type.

You can check the filesystems written to your partitions by using the `lsblk` utility. Most modern variants have a `--fs` option which displays filesystem-related information:

```shell
sudo lsblk --fs
```

```
NAME   FSTYPE LABEL  UUID                                 MOUNTPOINT
sda
├sda1 ext4          37858ba9-c2f3-4afe-9013-83111111e862
└sda2 xfs           5d141215-7473-4100-a0e2-e69d23d89ec5
vda
└vda1 ext4   DOROOT bc8ce2bd-8c5f-430d-9ae3-0b874736e7e4 /
```

Expand ext4 partitions

The ext4 resize tool requires that you check the partition for inconsistencies that may have happened during repartitioning before you can expand it. The `e2fsck` command can safely check unmounted filesystems.

Pass the last partition on the volume to the `e2fsck` program and use the `-f` option to force the check:

```shell
sudo e2fsck -f /dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01-part1
```

```
e2fsck 1.42.13 (17-May-2015)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01-part1: 13/6553600 files (0.0% non-contiguous), 459351/26213888 blocks
```

If the `/dev/disk/by-id` identifier is not available, you can use the `/dev/sd*` identifier instead.

After checking the filesystem, expand it to fill the partition by passing it to `resize2fs`:

```shell
sudo resize2fs /dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01-part1
```

```
resize2fs 1.42.13 (17-May-2015)
Resizing the filesystem on /dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01-part1 to 52428539 (4k) blocks.
The filesystem on /dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01-part1 is now 52428539 (4k) blocks long.
```

Expand XFS partitions

We recommend using the `xfs_repair` utility to check the filesystem for inconsistencies introduced by repartitioning before expanding XFS filesystems. Pass in the last partition on the volume:

```shell
sudo xfs_repair /dev/disk/by-id/scsi-0DO_Volume_volume-nyc1-01-part1
```

```
Phase 1 - find and verify superblock...
Phase 2 - using internal log
        - zero log...
. . .
Phase 7 - verify and correct link counts...
done
```

XFS filesystems must be mounted before they can be expanded, so once the disk is checked, mount the filesystem:

```shell
sudo mount -a
```

Use the `xfs_growfs` command to expand the filesystem by passing the mount point as an argument:

```shell
sudo xfs_growfs /mnt/volume-nyc1-01-part1
```

```
meta-data=/dev/sda1              isize=512    agcount=4, agsize=6553472 blks
        =                       sectsz=512   attr=2, projid32bit=1
        =                       crc=1        finobt=1 spinodes=0
data     =                       bsize=4096   blocks=26213888, imaxpct=25
        =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0 ftype=1
log      =internal               bsize=4096   blocks=12799, version=2
        =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
data blocks changed from 26213888 to 52428539
```

You can now mount the new filesystem and use the expanded space in the volume. If you want to verify the available space, use `df -h -x tmpfs -x devtmpfs` to list information about the filesystems and their size.

In this article...

- [Rewrite the Partition Table](https://docs.digitalocean.com/products/volumes/how-to/expand-partitions/#rewrite-the-partition-table)
- [Expand the Filesystem of the Last Partition](https://docs.digitalocean.com/products/volumes/how-to/expand-partitions/#expand-filesystem)

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