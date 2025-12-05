---
url: "https://docs.digitalocean.com/products/droplets/how-to/resize/"
title: "How to Resize Droplets for Vertical Scaling | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/droplets.f4877fc574e6b07f8fb9608e252be4160ebecd65569acea11775a046b9370c6f.svg)Droplets](https://docs.digitalocean.com/products/droplets/)
- [Getting Started](https://docs.digitalocean.com/products/droplets/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/droplets/getting-started/quickstart/)
  - [Recommended Droplet Setup](https://docs.digitalocean.com/products/droplets/getting-started/recommended-droplet-setup/)
  - [Recommended GPU Setup](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/)
- [How-Tos](https://docs.digitalocean.com/products/droplets/how-to/)
  - [Create Droplets](https://docs.digitalocean.com/products/droplets/how-to/create/)
  - [Use GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/)
  - [Provide User Data](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/)
  - [Connect with SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/)
  - [Add SSH Keys to Droplets](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/)
  - [Connect with the Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/)
  - [Transfer Files with FileZilla](https://docs.digitalocean.com/products/droplets/how-to/transfer-files/)
  - [Tag Droplets](https://docs.digitalocean.com/products/droplets/how-to/tag/)
  - [Track Performance](https://docs.digitalocean.com/products/droplets/how-to/track-performance/)
  - [Resize Droplets](https://docs.digitalocean.com/products/droplets/how-to/resize/)
  - [Use Autoscale Pools](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/)
  - [Access Metadata](https://docs.digitalocean.com/products/droplets/how-to/access-metadata/)
  - [Rebuild Droplets](https://docs.digitalocean.com/products/droplets/how-to/rebuild/)
  - [Manage the Droplet Agent](https://docs.digitalocean.com/products/droplets/how-to/manage-agent/)
  - [Manage the Kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/)
  - [Recover Access or Data](https://docs.digitalocean.com/products/droplets/how-to/recovery/)
  - [Destroy Droplets](https://docs.digitalocean.com/products/droplets/how-to/destroy/)
- [Reference](https://docs.digitalocean.com/products/droplets/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Droplets)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/)
- [Concepts](https://docs.digitalocean.com/products/droplets/concepts/)
  - [Choosing a Plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/)
  - [Tips on Downsizing Droplets](https://docs.digitalocean.com/products/droplets/concepts/downsizing-considerations/)
  - [Autoscale Pools](https://docs.digitalocean.com/products/droplets/concepts/autoscale-pools/)
  - [Glossary](https://docs.digitalocean.com/glossary/droplets/)
- [Details](https://docs.digitalocean.com/products/droplets/details/)
  - [Features](https://docs.digitalocean.com/products/droplets/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/droplets/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/droplets/details/availability/)
  - [Images](https://docs.digitalocean.com/products/droplets/details/images/)
  - [Limits](https://docs.digitalocean.com/products/droplets/details/limits/)
  - [Image Deprecation Policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/)
  - [Droplet Policies](https://docs.digitalocean.com/products/droplets/details/policies/)
  - [Live Migrations](https://docs.digitalocean.com/products/droplets/details/live-migration/)
  - [CPU Droplet SLA](https://www.digitalocean.com/sla/cpu-droplets)
  - [GPU Droplet SLA](https://www.digitalocean.com/sla/gpu-droplets)
  - [GPU Droplets](https://docs.digitalocean.com/products/gpu-droplets/)
- [Support](https://docs.digitalocean.com/products/droplets/support/)

- [How-Tos](https://docs.digitalocean.com/products/droplets/how-to/)
- Resize Droplets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Resize Droplets for Vertical Scaling

Validated on 1 Aug 2024 • Last edited on 15 May 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

Resizing a Droplet changes the resources (CPU, RAM, and disk) that the Droplet has. There are two resizing options for Droplets:

- **CPU and RAM only**. This option increases or decreases the amount of CPU and RAM available to a Droplet.

- **Disk, CPU, and RAM**. This option increases or decreases the amount of CPU and RAM available to a Droplet and permanently increases the size of a Droplet’s disk.


Increasing a Droplet’s memory and CPU improves its performance. Increasing the size of its disk increases the amount of data you can store.

You can resize to any Droplet plan that has an equal or greater amount of disk space as the original Droplet.

## Considerations Before Resizing

- **Allow for about one minute of downtime per GB of used disk space**, though the actual time necessary is typically shorter. You can check the **d** isk storage on the **f** ilesystem with `df / -h`.

Estimated downtime depends on disk usage even for resizes that don’t change the amount of disk space. This is because the Droplet may move to a new hypervisor, which transfers disk data over the network.

- **We strongly recommend [taking a snapshot](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-droplets/) of the Droplet before resizing**.

Droplets may change hypervisors during a resize, and any changes to a filesystem can lead to data loss if something goes wrong. We strongly recommend backing up the Droplet’s data before resizing. If you use snapshots, you can delete the snapshot after [confirming that the resize was successful](https://docs.digitalocean.com/products/droplets/how-to/resize/#verifying-disk-resizes).

- **You cannot decrease the size of a Droplet’s disk.**

Data is not always sequentially written in memory, so reducing the available space would risk data loss and filesystem corruption. For more flexibility, you can use [volumes](https://docs.digitalocean.com/products/volumes/) for additional data storage, which lets you [detach](https://docs.digitalocean.com/products/volumes/how-to/detach/) or [delete](https://docs.digitalocean.com/products/volumes/how-to/delete/) the volume if you no longer need the space.


## Resizing Droplets with the Control Panel, API, or CLI

You can resize Droplets from the control panel, using the DigitalOcean API, or using `doctl`, the DigitalOcean CLI.

### Using the Control Panel

Before you can resize a Droplet in the control panel, you need to power it off. We recommend you do this from the command line to avoid data corruption, so SSH to your Droplet and issue the shutdown command:

```shell
sudo shutdown -h now
```

Next, go to the [DigitalOcean Control Panel](https://cloud.digitalocean.com/droplets). On the **Droplets** page, click the name of the Droplet you want to resize, then click the **Resize** option in the Droplet-specific menu.

![The Droplet Resize page](https://docs.digitalocean.com/screenshots/droplets/pages/resize.b959b32afe0ed466b4d6db46731f842c5cde06105232581cd8a60e108844d67d.png)

Alternatively, you can click the **Upgrade** button next to the Droplet name or at the top of the Droplet detail page, if it is available.

The current Droplet size is highlighted. Choose **CPU and RAM only** or **Disk, CPU, and RAM** resizing, then select the new Droplet size. If a plan is unavailable for resizing, the control panel displays the reason.

Note
If the Droplet isn’t powered off, you see a **Turn off Droplet** warning window open up. This lets you power down the Droplet from the control panel, but because this risks data corruption, we recommend shutting down from the command line.

Once the Droplet is powered down and you’ve chosen its new plan, click **Resize**. A progress bar displays as the resize takes place.

When the resize event is finished, click the **On/Off** button to power the Droplet back on.

![Power On](https://docs.digitalocean.com/screenshots/droplets/switch-on.ff337f00913f223f83a0b8d6f5c3098ef9ec49da1ec5cc77314c10138f03d377.png)

The new size is visible below the Droplet name. Once the Droplet is booted, you can begin verifying that your services are working as expected. If you took a snapshot of the Droplet before doing the resize, you can now [delete the snapshot](https://docs.digitalocean.com/products/snapshots/how-to/delete/) to avoid further billing for it.

### Using the API

When resizing a Droplet via API, you need to specify the `resize` action type and specify a slug for `size`. To view a list of slugs, you can use the [`/v2/size` API endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/sizes_list).

Resizing via API automatically powers down the Droplet first.

How to Resize a Droplet Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/droplets/{droplet_id}/actions`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/dropletActions_post).

### cURL

Using cURL:

```shell
# Enable Backups
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"enable_backups"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Disable Backups
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"disable_backups"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Reboot a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"reboot"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Power cycle a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"power_cycle"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Shutdown and Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"shutdown"}' \
  "https://api.digitalocean.com/v2/droplets/3067649/actions"

# Power off a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"power_off"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Power on a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"power_on"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Restore a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"restore", "image": 12389723 }' \
  "https://api.digitalocean.com/v2/droplets/3067649/actions"

# Password Reset a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"password_reset"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Resize a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"resize","size":"1gb"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Rebuild a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"rebuild","image":"ubuntu-16-04-x64"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Rename a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"rename","name":"nifty-new-name"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Change the Kernel
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"change_kernel","kernel":991}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Enable IPv6
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"enable_ipv6"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Enable Private Networking
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"enable_private_networking"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Snapshot a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"snapshot","name":"Nifty New Snapshot"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Acting on Tagged Droplets
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"enable_backups"}' \
  "https://api.digitalocean.com/v2/droplets/actions?tag_name=awesome"

# Retrieve a Droplet Action
curl -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/droplets/3164444/actions/36804807"
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
// Enable Backups
    action, _, err := client.DropletActions.EnableBackups(ctx, 3164450)

// Disable Backups
//  action, _, err := client.DropletActions.DisableBackups(ctx, 3164450)

// Reboot a Droplet
//  action, _, err := client.DropletActions.Reboot(ctx, 3164450)

// Power Cycle a Droplet
//  action, _, err := client.DropletActions.PowerCycle(ctx, 3164450)

// Shutdown a Droplet
//  action, _, err := client.DropletActions.Shutdown(ctx, 3067649)

// Power Off a Droplet
//  action, _, err := client.DropletActions.PowerOff(ctx, 3164450)

// Power On a Droplet
//  action, _, err := client.DropletActions.PowerOn(ctx, 3164450)

// Restore a Droplet
//  action, _, err := client.DropletActions.Restore(ctx, 3164449, 12389723)

// Password Reset a Droplet
//  action, _, err := client.DropletActions.PasswordReset(ctx, 3164450)

// Resize a Droplet
//  action, _, err := client.DropletActions.Resize(ctx, 3164450, "1gb", true)

// Rebuild a Droplet
//  action, _, err := client.DropletActions.RebuildByImageSlug(ctx, 3164450, "ubuntu-16-04-x64")

// Rename a Droplet
//  action, _, err := client.DropletActions.Rename(ctx, 3164450, "nifty-new-name")

// Change the Kernel
//  action, _, err := client.DropletActions.ChangeKernel(ctx, 3164450, 991)

// Enable IPv6
//  action, _, err := client.DropletActions.EnableIPv6(ctx, 3164450)

// Enable Private Networking
//  action, _, err := client.DropletActions.EnablePrivateNetworking(ctx, 3164450)

// Snapshot a Droplet
//  action, _, err := client.DropletActions.Snapshot(ctx, 3164450, "Nifty New Snapshot")

// Retrieve a Droplet Action
//  action, _, err := client.DropletActions.Get(ctx, 3164450, 36804807)

}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

# Enable Backups
client.droplet_actions.enable_backups(droplet_id: 3164450)

# Disable Backups
# client.droplet_actions.disable_backups(droplet_id: 3164450)

# Reboot a Droplet
# client.droplet_actions.reboot(droplet_id: 3164450)

# Power Cycle a Droplet
# client.droplet_actions.power_cycle(droplet_id: 3164450)

# Shutdown a Droplet
# client.droplet_actions.shutdown(droplet_id: 3067649)

# Power Off a Droplet
# client.droplet_actions.power_off(droplet_id: 3164450)

# Power On a Droplet
# client.droplet_actions.power_on(droplet_id: 3164450)

# Restore a Droplet
# client.droplet_actions.restore(droplet_id: 3067649, image: 12389723)

# Password Reset a Droplet
# client.droplet_actions.password_reset(droplet_id: 3164450)

# Resize a Droplet
# client.droplet_actions.resize(droplet_id: 3164450, size: '1gb')

# Rebuild a Droplet
# client.droplet_actions.rebuild(droplet_id: 3164450, image: 'ubuntu-16-04-x64')

# Rename a Droplet
# client.droplet_actions.rename(droplet_id: 3164450, name: 'nifty-new-name')

# Change the Kernel
# client.droplet_actions.change_kernel(droplet_id: 3164450, kernel: 991)

# Enable IPv6
# client.droplet_actions.enable_ipv6(droplet_id: 3164450)

# Enable Private Networking
# client.droplet_actions.enable_private_networking(droplet_id: 3164450)

# Snapshot a Droplet
# client.droplet_actions.snapshot(droplet_id: 3164450, name: 'Nifty New Snapshot')
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

# enable back ups example
req = {
  "type": "enable_backups"
}

resp = client.droplet_actions.post(droplet_id=346652, body=req)
```

After the resize is complete, [power on the Droplet](https://docs.digitalocean.com/reference/api/digitalocean/#operation/dropletActions_post_byTag).

### Using the CLI

When resizing a Droplet via the CLI, you need to provide a slug to pass to the `--size` flag. To view a list of slugs, you can use [`doctl compute size list`](https://docs.digitalocean.com/reference/doctl/reference/compute/size/list/).

You also need to power off the Droplet by calling [`doctl compute droplet-action power-off`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/power-off/) before resizing.

How to Resize a Droplet Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute droplet-action resize`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/resize/) for more details:




```shell
doctl compute droplet-action resize <droplet-id> [flags]
```



The following example resizes a Droplet with the ID `386734086` to a Droplet with two CPUs, two GiB of RAM, and 60 GBs of disk space. The 60 GBs of disk space is the defined amount for the `s-2vcpu-2gb` plan:




```shell
doctl compute droplet-action resize 386734086 --size s-2vcpu-2gb --resize-disk=true
```


After the resize is complete, [power on the Droplet](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/power-on/).

## Verifying Disk Resizes

In certain cases, a disk resize fails to resize the Droplet’s partition or filesystem. If you rerun `df -h` after a disk resize and the output is unchanged, this usually indicates a problem. Use `gdisk` to get more information:

```shell
gdisk -l /dev/vda
```

The output looks like this:

```text
GPT fdisk (gdisk) version 1.0.3
Partition table scan:
  MBR: protective
  BSD: not present
  APM: not present
  GPT: present
Found valid GPT with protective MBR; using GPT.
Disk /dev/vda: 104857600 sectors, 50.0 GiB
Sector size (logical/physical): 512/512 bytes
Disk identifier (GUID): C1E73477-225B-4585-8BB5-C9291E473CE4
Partition table holds up to 128 entries
Main partition table begins at sector 2 and ends at sector 33
First usable sector is 34, last usable sector is 52428766
Partitions will be aligned on 2048-sector boundaries
Total free space is 2014 sectors (1007.0 KiB)
Number  Start (sector)    End (sector)  Size       Code  Name
   1          227328        52428766   24.9 GiB    8300
```

Some operating systems, like CentOS, don’t come with `gdisk` by default. You can either install `gdisk` using the package manager (for example, `sudo yum install gdisk`) or use `fdisk`:

```shell
fdisk -l /dev/vda
```

The output looks like this:

```
Disk /dev/vda: 50.0 GB, 53687091200 bytes, 104857600 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk label type: dos
Disk identifier: 0x000b956b

   Device Boot      Start         End      Blocks   Id  System
/dev/vda1   *        2048    52428766    52426718   83  Linux
```

In both of the above cases, the partition is still 25 GB even though the disk is 50 GB. To resize the partition, use the `growpart` command. In this command, `/dev/vda` is the name of the disk, separated by a space, and followed by the number of the partition to resize, `1`.

```shell
growpart /dev/vda 1
```

The command to resize the filesystem depends on the filesystem type. If you don’t know what filesystem you’re using, check with `df`:

```shell
df -Th /dev/vda1
```

You can see the filesystem type in the second column of the output. The following example output shows the filesystem type is `ext4`.

```
Filesystem     Type  Size  Used Avail Use% Mounted on
/dev/vda1      ext4   50G  4.0G   45G  10% /
```

For ext3/4 filesystems, use `resize2fs` to resize the filesystem.

```shell
resize2fs /dev/vda1
```

For XFS, use `xfs_growfs` to resize the filesystem.

```shell
xfs_growfs /dev/vda1
```

If there is more than one partition on the disk, you may have to modify the above commands to more closely match the Droplet’s partition table. Partitions are numbered, so if you want to grow a specific partition, use its number in the `growpart /dev/vda` command. For example, `growpart /dev/vda 2` grows the second partition.

In this article...

- [Considerations Before Resizing](https://docs.digitalocean.com/products/droplets/how-to/resize/#considerations-before-resizing)
- [Resizing Droplets with the Control Panel, API, or CLI](https://docs.digitalocean.com/products/droplets/how-to/resize/#resizing-droplets-with-the-control-panel-api-or-cli)
  - [Using the Control Panel](https://docs.digitalocean.com/products/droplets/how-to/resize/#using-the-control-panel)
  - [Using the API](https://docs.digitalocean.com/products/droplets/how-to/resize/#using-the-api)
  - [Using the CLI](https://docs.digitalocean.com/products/droplets/how-to/resize/#using-the-cli)
- [Verifying Disk Resizes](https://docs.digitalocean.com/products/droplets/how-to/resize/#verifying-disk-resizes)

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