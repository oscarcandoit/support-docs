---
url: "https://docs.digitalocean.com/products/nfs/how-to/mount/"
title: "How to Mount a Network File Storage Share | DigitalOcean Documentation"
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
- [How-Tos](https://docs.digitalocean.com/products/nfs/how-to/)
- Mount Share

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Mount a Network File Storage Share

Validated on 13 Oct 2025 • Last edited on 20 Oct 2025

Network File Storage is a fully managed, POSIX-compliant file storage solution built for demanding workloads like AI/ML pipelines, containerized applications, and DigitalOcean Kubernetes (DOKS) clusters. It provides scalable, high-throughput shared storage that simplifies storage management for distributed applications.

To mount a Network File Storage share to a Droplet, [connect to your Droplet using SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) or the [Droplet console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/)), then either use the `mount` command for a temporary mount, or edit the `fstab` file to mount the share permanently.

## Check for NFS Support

Log in to your Droplet, then check if NFS client support is already installed by looking for the `mount.nfs` command:

```shell
which mount.nfs
```

If `which` returns a path to `mount.nfs` (for example: `/usr/sbin/mount.nfs`), proceed to [Create the Mount Target](https://docs.digitalocean.com/products/nfs/how-to/mount/#create-the-mount-target). Otherwise, follow the installation instructions in the next section.

## Install Packages

On Ubuntu and Debian, update the package list:

```shell
sudo apt update
```

Then install the `nfs-common` package:

```shell
sudo apt install nfs-common
```

For distributions that use DNF for package management, such as Fedora, Rocky Linux, and Alpine Linux, install the `nfs-utils` package:

```shell
sudo dnf install nfs-utils
```

## Create the Mount Target

Create a directory to mount the NFS share to:

```shell
sudo mkdir -p /mnt/example-nfs-share
```

This can be any directory, it does not need to match the share name or path, and it doesn’t not need to be in the `/mnt` directory.

## Mount the Share Temporarily

Use the `mount` command to mount the NFS share temporarily. This method does not persist across reboots. To make a persistent mount, read the next section, [Mount the Share Permanently](https://docs.digitalocean.com/products/nfs/how-to/mount/#mount-the-share-permanently).

```shell
sudo mount -t nfs <your_share_ip:and_path> /mnt/example-nfs-share
```

Replace `<your_share_ip:and_path>` with the mount information shown in the control panel, and replace `/mnt/example-nfs-share` with the directory created in [Create the Mount Target](https://docs.digitalocean.com/products/nfs/how-to/mount/#create-the-mount-target).

The share is now mounted to the specified directory.

## Mount the Share Permanently

To mount the share permanently, first update the `/etc/fstab` file with the mount information. Open `/etc/fstab` with your preferred text editor:

```shell
sudo nano /etc/fstab
```

Add the following line to the end of the file, replacing `<your_share_ip:and_path>` with the mount information shown in the control panel, and replace `/mnt/example-nfs-share` with the directory created in [Create the Mount Target](https://docs.digitalocean.com/products/nfs/how-to/mount/#create-the-mount-target):

```
<your_share_ip:and_path> /mnt/example-nfs-share nfs _netdev,nofail,x-systemd.automount,x-systemd.idle-timeout=600,vers=4.2 0 0
```

Save and close the file.

Use the `mount` command with the `-a` option to mount all the shares listed in `/etc/fstab`.

```shell
sudo mount -a
```

The share is now mounted to the specified directory.

## Verify the Mount

To verify that the share is mounted, use the `df` command to show the mounted filesystems:

```shell
df -hT
```

This command displays the filesystems that are currently mounted, including their types (`-T`) and human-readable sizes (`-h`). Look for **nfs4** in the **Type** column:

```
Filesystem                                               Type      Size  Used Avail Use% Mounted on
. . .
10.128.0.2:/2559851/363bdd82-968a-4aa6-8234-b6edf725c72a nfs4       50G     0   50G   0% /mnt/example-nfs-share
```

In this article...

- [Check for NFS Support](https://docs.digitalocean.com/products/nfs/how-to/mount/#check-for-nfs-support)
- [Install Packages](https://docs.digitalocean.com/products/nfs/how-to/mount/#install-packages)
- [Create the Mount Target](https://docs.digitalocean.com/products/nfs/how-to/mount/#create-the-mount-target)
- [Mount the Share Temporarily](https://docs.digitalocean.com/products/nfs/how-to/mount/#mount-the-share-temporarily)
- [Mount the Share Permanently](https://docs.digitalocean.com/products/nfs/how-to/mount/#mount-the-share-permanently)
- [Verify the Mount](https://docs.digitalocean.com/products/nfs/how-to/mount/#verify-the-mount)

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