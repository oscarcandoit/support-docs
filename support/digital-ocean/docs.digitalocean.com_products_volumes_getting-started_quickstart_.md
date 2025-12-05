---
url: "https://docs.digitalocean.com/products/volumes/getting-started/quickstart/"
title: "Volume Quickstart | DigitalOcean Documentation"
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

- [Getting Started](https://docs.digitalocean.com/products/volumes/getting-started/)
- Quickstart

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Volume Quickstart

Validated on 3 Oct 2019 • Last edited on 14 Nov 2025

Volumes are network-attached block storage. You can use them with Droplets or Kubernetes clusters, move or resize them, and create snapshots at any time.

## Add New Volumes to Droplets

You can add a new volume to an existing Droplet or while creating a new Droplet.

1. From the **Create** menu in the top right of the [control panel](https://cloud.digitalocean.com/), click **Volumes**, then choose an existing Droplet to attach the volume to in **Select Droplet to attach to**.

Alternatively, on the [Droplet create page](https://cloud.digitalocean.com/droplets/new), in the **Add block storage** section, click **Add Volume**.

2. Choose the size of your volume, which can be from 1 GB to 16 TiB (16,384 GB).

3. [Format and mount the volume](https://docs.digitalocean.com/products/volumes/how-to/create/#format-and-mount-volumes). This is automatic for supported operating systems. Instructions for manual formatting and mounting are in the volume’s **More** menu under **Config instructions**.

Automatic and manual setup both format the volume with ext4, mount it into `/mnt` with the options `defaults,nofail,discard,noatime`, and update `/etc/fstab` for persistent mounting across reboots.


## Move Volumes to Different Droplets

You can [move volumes between different Droplets](https://docs.digitalocean.com/products/volumes/how-to/move-between-droplets/) in the same datacenter.

1. [Unmount the volume](https://docs.digitalocean.com/products/volumes/how-to/unmount/) to prevent OS-level errors.
2. Open the volume’s **More** menu and choose **Detach from Droplet**. Detaching a volume removes the volume from its current Droplet.
3. In the same **More** menu, attach the volume to a different Droplet by choosing **Attach to Droplet**, then selecting the Droplet you want to use.
4. [Mount the volume](https://docs.digitalocean.com/products/volumes/how-to/mount/) to make it accessible to the new Droplet.

## Increase the Size of Volumes

If you need more storage space, you can [increase the size of a volume](https://docs.digitalocean.com/products/volumes/how-to/increase-size/).

1. Resize the volume itself. In the volume’s **More** menu, choose **Increase size**.
2. In the **Increase volume size** window, enter a new size in GB (at least 1 GB larger than the current size) and click **Resize volume**.
3. Expand the filesystem to use the additional space. For ext4, use `resize2fs`. For XFS, use `xfs_growfs`.

Volumes are unpartitioned by default, but if you [manually partitioned your volume](https://docs.digitalocean.com/products/volumes/how-to/partition/) when you created it, you need to [expand the final partition](https://docs.digitalocean.com/products/volumes/how-to/expand-partitions/) before expanding the filesystem.

You cannot decrease the size of a volume because of the risk of data loss and filesystem corruption.

## Delete Volumes

[Deleting a volume](https://docs.digitalocean.com/products/volumes/how-to/delete/) permanently and irreversibly destroys the volume and its contents.

1. Open the volume’s **More** menu and choose **Delete**.
2. In the **Delete volume** window that opens, confirm the deletion.

In this article...

- [Add New Volumes to Droplets](https://docs.digitalocean.com/products/volumes/getting-started/quickstart/#add-new-volumes-to-droplets)
- [Move Volumes to Different Droplets](https://docs.digitalocean.com/products/volumes/getting-started/quickstart/#move-volumes-to-different-droplets)
- [Increase the Size of Volumes](https://docs.digitalocean.com/products/volumes/getting-started/quickstart/#increase-the-size-of-volumes)
- [Delete Volumes](https://docs.digitalocean.com/products/volumes/getting-started/quickstart/#delete-volumes)

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