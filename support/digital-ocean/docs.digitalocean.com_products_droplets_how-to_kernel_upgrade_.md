---
url: "https://docs.digitalocean.com/products/droplets/how-to/kernel/upgrade/"
title: "How to Upgrade to the Latest Kernel | DigitalOcean Documentation"
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
    - [Switch to an Internal Kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/grubloader/)
    - [Upgrade to the Latest Kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/upgrade/)
    - [Boot into a Specific Kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/use-non-default/)
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
- [Manage the Kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/)
- Upgrade to the Latest Kernel

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Upgrade to the Latest Kernel

Validated on 14 May 2019 • Last edited on 17 Jun 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

To upgrade a Droplet’s kernel to the latest supported version, you need to do three things:

1. Verify that the Droplet uses internal kernel management.

2. Upgrade the kernel using a package manager.

3. Power off the Droplet, then power it back on.


## Verify the Droplet’s Kernel Management Method

Before you can upgrade your Droplet’s kernel, you need to verify that your Droplet is using internal kernel management.

All Droplets created after March 2017 use internal kernels by default, and older Droplets can be configured to support internal kernels with the DigitalOcean GrubLoader kernel.

If you’re not sure whether your Droplet manages its kernels internally, visit its detail page in the control panel and click **Kernel** in the menu. If the kernel management page has the following message, your Droplet is set to use internal kernels natively:

> The kernel for this Droplet is not managed within the control panel. Instead, you can upgrade the kernel from within the Droplet.

If you see a **Select a Kernel** menu with a **Change** button and the following description instead, your Droplet is using legacy external kernel management:

> This will update your configuration. Then power off the server from the command line and boot it from the control panel and the new kernel will be active. To revert, select ‘Original Kernel’ and follow the same process.

If your Droplet is using legacy kernel management, you can [switch to the DigitalOcean GrubLoader kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/grubloader/#switch) to support internal kernels.

## Upgrade the Kernel

Once your Droplet is using internal kernel management, you can upgrade its kernel.

Before upgrading your kernel, you can use the command `uname -ir` to get the version of the kernel that your Droplet is currently using and your system’s architecture (32-bit or 64-bit). The output looks similar to `3.13.0-43-generic x86_64`. The first section (`3.13.0-43-generic` in this example) is your Droplet’s current kernel version and the second is its architecture (`x86_64` in this example, that is, 64-bit).

If you want to upgrade your Droplet to the latest kernel version, there are two ways to do it:

- **Update all packages**. Applying all available package upgrades to your server pulls in the latest stable kernel if available.

- **Update kernel only**. Targeting only the kernel for update does not modify any other packages on your server.


The commands you need to run for either option depends on your Droplet’s operating system:

| OS | Upgrade all packages | Upgrade kernel only |
| --- | --- | --- |
| Ubuntu | `sudo apt-get update`<br>`sudo apt-get dist-upgrade` | `sudo apt-get update`<br>`sudo apt-get install linux-virtual` |
| Debian (64-bit) | `sudo apt-get update`<br>`sudo apt-get dist-upgrade` | `sudo apt-get update`<br>`sudo apt-get install linux-image-amd64 linux-headers-amd64` |
| Debian (32-bit) | `sudo apt-get update`<br>`sudo apt-get dist-upgrade` | `sudo apt-get update`<br>`sudo apt-get install linux-image-686-pae linux-headers-686-pae` |
| CentOS | `sudo yum update` | `sudo yum update kernel` |
| Fedora | `sudo dnf update` | `sudo dnf update kernel` |

## Power Off the Droplet

Completely powering off the Droplet rather than rebooting it makes sure it gets the latest virtualization improvements from the hypervisor. Power cycling is necessary for the Droplet to be able to take advantage of all the updates after a kernel upgrade.

To ensure data integrity, shut down your Droplet from the command line with this command:

```shell
sudo poweroff
```

To power the Droplet on, log in to the [control panel](https://cloud.digitalocean.com/droplets). Click the Droplet’s name to go to its detail page, then click the **OFF** switch to turn the Droplet back on.

![Power on Droplet](https://docs.digitalocean.com/screenshots/droplets/switch-on.ff337f00913f223f83a0b8d6f5c3098ef9ec49da1ec5cc77314c10138f03d377.png)

After your Droplet boots, you can use `uname -ir` again to confirm the new kernel version.

In this article...

- [Verify the Droplet’s Kernel Management Method](https://docs.digitalocean.com/products/droplets/how-to/kernel/upgrade/#verify-the-droplets-kernel-management-method)
- [Upgrade the Kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/upgrade/#upgrade-the-kernel)
- [Power Off the Droplet](https://docs.digitalocean.com/products/droplets/how-to/kernel/upgrade/#power-off-the-droplet)

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