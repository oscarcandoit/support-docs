---
url: "https://docs.digitalocean.com/products/nfs/getting-started/quickstart/"
title: "Network File Storage Quickstart | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/nfs.2125812c526e200f3956d48d6e70344c85c156cbeb56103ff278169fd7bcb40f.svg)Network File Storage](https://docs.digitalocean.com/products/nfs/)
  - [Getting Started](https://docs.digitalocean.com/products/nfs/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/nfs/getting-started/quickstart/)
  - [How-Tos](https://docs.digitalocean.com/products/nfs/how-to/)
    - [Create Share](https://docs.digitalocean.com/products/nfs/how-to/create/)
    - [Delete Share](https://docs.digitalocean.com/products/nfs/how-to/delete/)
    - [Mount Share](https://docs.digitalocean.com/products/nfs/how-to/mount/)
    - [Resize Share](https://docs.digitalocean.com/products/nfs/how-to/resize/)
    - [Create Snapshot](https://docs.digitalocean.com/products/nfs/how-to/create-snapshot/)
    - [Change VPC](https://docs.digitalocean.com/products/nfs/how-to/change-vpc/)
  - [Reference](https://docs.digitalocean.com/products/nfs/reference/)
  - [Details](https://docs.digitalocean.com/products/nfs/details/)
    - [Features](https://docs.digitalocean.com/products/nfs/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/nfs/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/nfs/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/nfs/details/limits/)

- [Network File Storage](https://docs.digitalocean.com/products/nfs/)
- [Getting Started](https://docs.digitalocean.com/products/nfs/getting-started/)
- Quickstart

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Network File Storage Quickstart

Validated on 13 Oct 2025 • Last edited on 20 Oct 2025

Network File Storage is a fully managed, POSIX-compliant file storage solution built for demanding workloads like AI/ML pipelines, containerized applications, and DigitalOcean Kubernetes (DOKS) clusters. It provides scalable, high-throughput shared storage that simplifies storage management for distributed applications.

## Create Share

To [create a Network File Storage](https://docs.digitalocean.com/products/nfs/how-to/create/) share from the [control panel](https://cloud.digitalocean.com/), click the **Create** menu, then click **Network File Storage**.

Configure the new share:

- **Choose a datacenter region**: Select the region to create the share in.
- **VPC network**: Select the VPC network to attach the share to.
- **Choose a storage size**: Enter the share size in GiB.
- **Finalize**: Enter a name for your share.

Review your configuration in the **Summary** section, then click **Create Network File Storage** to create your share.

## Mount Share

[Log in](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) to your Droplet.

Check that you have the `mount.nfs` command installed:

```shell
which mount.nfs
```

If `which` returns nothing, install the `nfs-common` package on Ubuntu and Debian, or the `nfs-utils` package on DNF-based systems:

```shell
sudo apt-get install nfs-common
```

```shell
sudo dnf install nfs-utils
```

Make the mount point directory:

```shell
sudo mkdir -p /mnt/example-nfs-share
```

You may choose any directory name and location.

Use `mount` to mount the share:

```shell
sudo mount -t nfs <your_share_ip:and_path> /mnt/example-nfs-share
```

Replace `<your_share_ip:and_path>` with the share information listed in the control panel. Replace `/mnt/example-nfs-share` with your mount point directory.

The share is now mounted. To make the share persistent across reboots, add the following line to `/etc/fstab`:

```shell
<your_share_ip:and_path> /mnt/example-nfs-share nfs _netdev,nofail,x-systemd.automount,x-systemd.idle-timeout=600,vers=4.2 0 0
```

Replace `<your_share_ip:and_path>` with the share information listed in the control panel. Replace `/mnt/example-nfs-share` with your mount point directory.

## Resize Share

To [resize a share](https://docs.digitalocean.com/products/nfs/how-to/resize/), click its **…** “more” menu, then click **Resize**. Choose the new, larger size, then click **Increase Storage Size**. You can not reduce the size of a share.

## Delete Share

Deleting a share permanently destroys all data in it. Recovery is not possible. Back up critical data before deleting your NFS share.

To [delete a share](https://docs.digitalocean.com/products/nfs/how-to/delete/), click its **…** “more” menu, then click **Delete**. Enter the share name in the confirmation dialog, then click **Delete**.

In this article...

- [Create Share](https://docs.digitalocean.com/products/nfs/getting-started/quickstart/#create-share)
- [Mount Share](https://docs.digitalocean.com/products/nfs/getting-started/quickstart/#mount-share)
- [Resize Share](https://docs.digitalocean.com/products/nfs/getting-started/quickstart/#resize-share)
- [Delete Share](https://docs.digitalocean.com/products/nfs/getting-started/quickstart/#delete-share)

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