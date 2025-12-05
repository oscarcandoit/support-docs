---
url: "https://docs.digitalocean.com/products/volumes/how-to/increase-size/"
title: "How to Increase the Size of DigitalOcean Volumes Block Storage | DigitalOcean Documentation"
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
- Increase the Size of Volumes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Increase the Size of DigitalOcean Volumes Block Storage

Validated on 4 Jan 2023 • Last edited on 14 Nov 2025

Volumes are network-attached block storage. You can use them with Droplets or Kubernetes clusters, move or resize them, and create snapshots at any time.

If you need more storage space than your current volume provides, you can [attach additional volumes to the same Droplet](https://docs.digitalocean.com/products/volumes/how-to/create/) or expand the size of a current volume.

Increasing the size of a volume has two steps:

1. [**Resize the volume**](https://docs.digitalocean.com/products/volumes/how-to/increase-size/#resize-the-volume) to make its disk larger.
2. [**Expand the filesystem**](https://docs.digitalocean.com/products/volumes/how-to/increase-size/#expand-the-filesystem) on the volume to use the new space, then reboot your Droplet if necessary.

## Considerations Before Resizing

- **You cannot decrease the size of a volume.** In other words, volume resizes are irreversible.

Data is not always sequentially written in memory, so reducing the available space would risk data loss and filesystem corruption. To decrease the size of a volume, create a smaller volume and transfer the contents of an existing volume to it using a tool like [SnapShooter](https://docs.digitalocean.com/products/snapshooter/) or [rsync](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories-on-a-vps).

- **We strongly recommend [taking a snapshot](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-volumes/) of the volume before resizing**.

Any changes to a filesystem can lead to data loss if something goes wrong. We strongly recommend backing up the volume’s data before resizing. If you use snapshots, you can delete the snapshot after confirming that the resize was successful.


## Resize the Volume Using Automation

Before detaching a volume, [unmount it](https://docs.digitalocean.com/products/volumes/how-to/unmount/) to avoid data loss.

How to Resize a Volume Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute volume-action resize`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/volume-action/resize/) for more details:




```shell
doctl compute volume-action resize <volume-id> [flags]
```



The following example resizes a volume with the UUID `f81d4fae-7dec-11d0-a765-00a0c91e6bf6` to 120 GiB in the `nyc1` region:




```shell
doctl compute volume-action resize f81d4fae-7dec-11d0-a765-00a0c91e6bf6 --size 120 --region nyc1
```


To resize a volume using the API, use the volume actions endpoints and set the `type` field to `resize` and the `size_gigabytes` field to the number of GiB you want the volume to be.

How to Resize a Volume Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/volumes/{volume_id}/actions`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/volumeActions_post_byId).

### cURL

Using cURL:

```shell
# Attach a Volume to a Droplet by ID
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type": "attach", "droplet_id": 11612190, "region": "nyc1", "tags":["aninterestingtag"]}' \
  "https://api.digitalocean.com/v2/volumes/7724db7c-e098-11e5-b522-000f53304e51/actions"

# Remove a Volume from a Droplet by ID
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type": "detach", "droplet_id": "11612190", "region": "nyc1"}' \
  "https://api.digitalocean.com/v2/volumes/7724db7c-e098-11e5-b522-000f53304e51/actions"

# Resize a Volume
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"resize","size_gigabytes": 100, "region":"nyc1"}' \
  "https://api.digitalocean.com/v2/volumes/7724db7c-e098-11e5-b522-000f53304e51/actions"
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

  // Attach a Volume to a Droplet by ID
    action, _, err := client.StorageActions.Attach(ctx, "7724db7c-e098-11e5-b522-000f53304e51", 11612190)

  // Remove a Volume from a Droplet by ID
  // action, _, err := client.StorageActions.Detach(ctx, "7724db7c-e098-11e5-b522-000f53304e51")

  // Resize a Volume
  // action, _, err := client.StorageActions.Resize(ctx, "7724db7c-e098-11e5-b522-000f53304e51", 100, "nyc1")
}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

# Attach a Volume to a Droplet by ID
client.volume_actions.attach(volume_id:'7724db7c-e098-11e5-b522-000f53304e51', droplet_id: 11612190, region: 'nyc1'

# Remove a Volume from a Droplet by ID
# client.volume_actions.detach(volume_id:'7724db7c-e098-11e5-b522-000f53304e51', droplet_id: 11612190, region: 'nyc1'
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "type": "attach",
  "droplet_id": 11612190,
  "region": "nyc1",
  "tags": [\
    "aninterestingtag"\
  ]
}

resp = client.volume_actions.post_by_id(volume_id="7724db7c", body=req)
```

## Resize the Volume Using the Control Panel

After you create a backup of the volume, you can increase the volume’s size in the control panel. From the volume’s **More** menu, choose **Increase size**.

![Volumes more menu](https://docs.digitalocean.com/screenshots/volumes/more-menu-detached.4b08a50675e039344340c614898c81eaa28d51b946aec75d5d63a734c37ba461.png)

In the window that opens, select a new size for the volume. You can choose any size at least 1 GB larger than the volume’s current size.

![Increase volume size window](https://docs.digitalocean.com/screenshots/volumes/increase-volume-size.54874016b03664fd5f6f308677f2b8b4e8083afa9ac62f421a76dabd3bd9c552.png)

Click **Resize volume** to change the volume to the selected size.

## Expand the Filesystem

To use the additional space, you need to expand the volume’s filesystem. You can check which kind of filesystem is on the volume with `df -T /mnt/your_mount_point`.

Warning
Volumes are unpartitioned by default, but if you [manually partitioned your volume](https://docs.digitalocean.com/products/volumes/how-to/partition/) when you created it, you need to [expand the final partition](https://docs.digitalocean.com/products/volumes/how-to/expand-partitions/) before expanding the filesystem.

Expand ext4 filesystems

For unpartitioned volumes using the ext4 filesystem, pass the [`/dev/disk/by-id` volume identifier](https://docs.digitalocean.com/products/volumes/details/naming-conventions/) to `resize2fs`:

```shell
sudo resize2fs /dev/disk/by-id/scsi-0DO_example
```

The output looks like this:

```
resize2fs 1.42.13 (17-May-2015)
Filesystem at /dev/disk/by-id/scsi-0DO_example is mounted on /mnt/volume-example; on-line resizing required
old_desc_blocks = 25, new_desc_blocks = 32
The filesystem on /dev/disk/by-id/scsi-0DO_example is now 131072000 (4k) blocks long.
```

Expand XFS filesystems

For unpartitioned volumes using the XFS filesystem, pass the mount point to the `xfs_growfs` tool:

```shell
sudo xfs_growfs /mnt/your_mount_point
```

The output looks like this:

```
meta-data=/dev/sda               isize=512    agcount=4, agsize=32768000 blks
        =                       sectsz=512   attr=2, projid32bit=1
        =                       crc=1        finobt=1 spinodes=0
data     =                       bsize=4096   blocks=131072000, imaxpct=25
        =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0 ftype=1
log      =internal               bsize=4096   blocks=64000, version=2
        =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
data blocks changed from 131072000 to 157286400
```

If you receive the error `open: No such file or directory while opening /dev/disk/by-id/scsi-0DO_example`, [make sure that the volume is mounted](https://docs.digitalocean.com/products/volumes/how-to/mount/) and then retry the command.

Verify that the larger filesystem is available with `df`:

```shell
df -h -x tmpfs -x devtmpfs
```

The output of `df` looks like this:

```text
Filesystem      Size  Used Avail Use% Mounted on
/dev/vda1        20G  1.1G   18G   6% /
/dev/sda        197G   60M  187G   1% /mnt/volume-nyc1-01
```

Some operating systems require a reboot to see the volume’s new size. If you do not see the volume’s new size, reboot your Droplet.

If the size or available space doesn’t match what you expected, read [our support article on why filesystem tools may report your volume as smaller than expected](https://docs.digitalocean.com/support/why-is-my-resized-volume-smaller-than-i-expected/).

In this article...

- [Considerations Before Resizing](https://docs.digitalocean.com/products/volumes/how-to/increase-size/#considerations-before-resizing)
- [Resize the Volume Using Automation](https://docs.digitalocean.com/products/volumes/how-to/increase-size/#resize-the-volume-using-automation)
- [Resize the Volume Using the Control Panel](https://docs.digitalocean.com/products/volumes/how-to/increase-size/#resize-the-volume-using-the-control-panel)
- [Expand the Filesystem](https://docs.digitalocean.com/products/volumes/how-to/increase-size/#expand-the-filesystem)

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