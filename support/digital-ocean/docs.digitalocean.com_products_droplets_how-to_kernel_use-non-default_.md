---
url: "https://docs.digitalocean.com/products/droplets/how-to/kernel/use-non-default/"
title: "How to Boot into a Specific Kernel Version | DigitalOcean Documentation"
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
- Boot into a Specific Kernel

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Boot into a Specific Kernel Version

Validated on 17 Jul 2019 • Last edited on 17 Jun 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

By default, your Droplet boots into the highest-versioned kernel. If you want to use a different kernel version, you need to:

1. [Verify that your Droplet uses internal kernel management](https://docs.digitalocean.com/products/droplets/how-to/kernel/use-non-default/#kernel-management).
2. [Find and install the kernel version you want](https://docs.digitalocean.com/products/droplets/how-to/kernel/use-non-default/#install-kernel).
3. [Set which kernel the bootloader loads by default](https://docs.digitalocean.com/products/droplets/how-to/kernel/use-non-default/#set-default).

## Verify the Droplet’s Kernel Management Method

Before you can modify your Droplet’s kernel, you need to verify that your Droplet is using internally-managed kernels.

All Droplets created after March 2017 use internal kernels by default, and older Droplets can be configured to support internal kernels with the DigitalOcean GrubLoader kernel.

If you’re not sure whether your Droplet manages its kernels internally, visit its detail page in the control panel and click **Kernel** in the menu. If the kernel management page has the following message, your Droplet is set to use internal kernels natively:

> The kernel for this Droplet is not managed within the control panel. Instead, you can upgrade the kernel from within the Droplet.

If you see a **Select a Kernel** menu with a **Change** button and the following description instead, your Droplet is using legacy external kernel management:

> This will update your configuration. Then power off the server from the command line and boot it from the control panel and the new kernel will be active. To revert, select ‘Original Kernel’ and follow the same process.

If your Droplet is using legacy kernel management, you can [switch to the DigitalOcean GrubLoader kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/grubloader/#switch) to support internal kernels.

## Find and Install the Kernel Package

Once your Droplet is using internal kernel management, you can find and install the kernel package you want to switch to.

### Ubuntu and Debian

Search the `apt` repositories for available kernels.

```shell
sudo apt-get update
apt-cache search --names-only linux-image
```

This returns a list of available kernels similar to this:

```
linux-image-4.4.0-21-generic - Linux kernel image for version 4.4.0 on 64 bit x86 SMP
linux-image-4.4.0-21-lowlatency - Linux kernel image for version 4.4.0 on 64 bit x86 SMP
linux-image-extra-4.4.0-21-generic - Linux kernel extra modules for version 4.4.0 on 64 bit x86 SMP
. . .
```

The package name of the kernel is `linux-image-` followed by the version, like `linux-image-4.4.0-21-generic`. The associated headers file for a kernel has the same package name with `image` replaced by `headers`.

Install the kernel you want, and we recommend installing the headers as well. For example:

```shell
sudo apt-get install linux-image-4.4.0-21-generic linux-headers-4.4.0-21-generic
```

Once the kernel is installed, you need to [modify your Droplet’s bootloader](https://docs.digitalocean.com/products/droplets/how-to/kernel/use-non-default/#set-default) to boot into that kernel version by default.

### CentOS and Fedora

Search the `yum` repositories for available kernels.

```shell
yum list --showduplicates kernel
```

This returns a list of the installed and available kernels similar to this:

```
Installed Packages
kernel.x86_64                 3.10.0-327.22.2.el7                @updates
Available Packages
kernel.x86_64                 3.10.0-327.el7                     base
kernel.x86_64                 3.10.0-327.3.1.el7                 updates
kernel.x86_64                 3.10.0-327.4.4.el7                 updates
. . .
```

The package name of the kernel is `kernel-` with the version from the second column, like `kernel-3.10.0-327-18.3.el7`.

Install the kernel you want. For example:

```shell
sudo yum install kernel-3.10.0-327-18.3.el7
```

Once the kernel is installed, you need to [modify your Droplet’s bootloader](https://docs.digitalocean.com/products/droplets/how-to/kernel/use-non-default/#set-default) to boot into that kernel version by default.

## Setting the Default Kernel in the Bootloader

To override the default kernel selection, you need to modify the kernel that the bootloader loads by default. The procedure to do so depends heavily which bootloader your Droplet uses.

Most distributions on DigitalOcean use the Grub 2 bootloader, including:

- Ubuntu 18.04, 16.04, 14.04, and 12.04
- Debian 9, 8, and 7
- Fedora 28, 27, 26, 25, and 24
- CentOS 7

Note

CentOS 6 and 5 use the legacy Grub 1 bootloader. These distributions only have internal kernel management available via the DigitalOcean GrubLoader kernel, which can only boot to the highest available kernel. As a result, to boot to a different kernel, you must remove all other installed kernels.

You can display a list of all installed kernel packages with `rpm -q kernel`. Because `yum` can’t uninstall kernels packages, you should use `rpm -e` to delete all but the kernel you want to use, and then reboot your Droplet. For example:

```shell
sudo rpm -e kernel-2.6.18-410.el5
sudo rpm -e kernel-2.6.18-409.el5
# repeat for all kernels you want to remove
sudo reboot
```

Your Droplet boots into the remaining kernel.

The appropriate procedure for Grub 2 depends on whether your Droplet uses internal kernels natively or via the DigitalOcean GrubLoader kernel.

### For Grub 2 Droplets using Native Internal Kernel Management

In `/etc/default/grub`, find and modify the following settings that determine how Grub chooses the default kernel. If the settings are not present in your version of the file, add them.

`/etc/default/grub`

```pkgconfig
. . .
GRUB_DEFAULT=saved
GRUB_SAVEDEFAULT=true
GRUB_DISABLE_SUBMENU=y
. . .
```

The `GRUB_DEFAULT` setting allows Grub to use whatever value we save as the default kernel instead of hard-coding a default. The `GRUB_SAVEDEFAULT` tells Grub to set the default kernel to anything we explicitly select in a menu. The `GRUB_DISABLE_SUBMENU` option flattens the menu structure to simplify parsing it. Grub 2 does not include a utility to display its menu on the command line, so you must manually parse the configuration.

There should only be **one** occurrence of each setting in the file. Save and close the file when you are finished.

Next, if you are running a **Debian** or **Ubuntu** Droplet, there is a DigitalOcean-specific Grub file in `/etc/default/grub.d` named `50-cloudimg-settings.cfg`. This file is necessary for the DigitalOcean to boot the image properly, but it contains a default selection that overrides the settings in `/etc/default/grub`.

In `/etc/default/grub.d/50-cloudimg-settings.cfg`, comment out the `GRUB_DEFAULT` line if one is present by adding a `#` to the beginning of the line.

`/etc/default/grub.d/50-cloudimg-settings.cfg`

```pkgconfig
#GRUB_DEFAULT=0
```

The location of the `grub.cfg` file varies based on distribution, so create an environmental variable called `GRUB_CONFIG` that finds it. Commands later in the process use this variable.

```shell
export GRUB_CONFIG=`sudo find /boot -name "grub.cfg"`
```

Rebuild the `grub.cfg` file with the changes you made.

On **Ubuntu** and **Debian**, use `update-grub`:

```shell
sudo update-grub
```

On **CentOS** and **Fedora**, use `grub2-mkconfig`:

```shell
sudo grub2-mkconfig -o $GRUB_CONFIG
```

Now that the configuration is rebuilt and the menu is flattened, we can parse the file for the available entries. The following command displays the entry index number and title. You can use either of these to refer to a specific entry.

```shell
sudo grep 'menuentry ' $GRUB_CONFIG | cut -f 2 -d "'" | nl -v 0
```

This returns all of your available boot options. Take a note of the index number or title of the entry you wish to boot.

```
     0	CentOS Linux (3.10.0-327.22.2.el7.x86_64) 7 (Core)
     1	CentOS Linux (3.10.0-327.18.2.el7.x86_64) 7 (Core)
     2	CentOS Linux (0-rescue-d4c27651599f460481bc723aafe36177) 7 (Core)
     3	CentOS Linux (0-rescue-ce700ac27e6f4161b0730bad2182e0b1) 7 (Core)
```

Grub includes commands to set a new default kernel from the command line. You can use either the index number or the entry title to specify a boot option.

For **Ubuntu** and **Debian** users, use `grub-set-default`. For example, by index:

```shell
sudo grub-set-default 2
```

For **CentOS** and **Fedora** Droplets, use `grub2-set-default`. For example, by entry title:

```shell
sudo grub2-set-default 'CentOS Linux (3.10.0-327.18.2.el7.x86_64) 7 (Core)'
```

You can also choose a temporary boot option which applies to the next boot only.

For **Ubuntu** and **Debian**, use `grub-reboot`:

```shell
sudo grub-reboot 2
```

For **CentOS** and **Fedora**, use `grub2-reboot`:

```shell
sudo grub2-reboot 'CentOS Linux (3.10.0-327.18.2.el7.x86_64) 7 (Core)'
```

Once you’ve selected the kernel to use, reboot the Droplet.

```shell
sudo reboot
```

Your Droplet boots into the kernel you selected.

### For Grub 2 Droplets Using the GrubLoader Kernel

If your Droplet uses the GrubLoader kernel in the control panel to implement internal kernels, you have to follow a different procedure.

In `/etc/default/grub`, find and modify the following settings that determine how Grub chooses the default kernel. If the settings are not present in your version of the file, add them.

`/etc/default/grub`

```pkgconfig
. . .
GRUB_DISABLE_SUBMENU=y
. . .
```

The `GRUB_DISABLE_SUBMENU` option flattens the menu structure to simplify parsing it. Grub 2 does not include a utility to display its menu on the command line, so you must manually parse the configuration.

There should only be **one** occurrence of this setting. Save and close the file when you are finished.

The location of the `grub.cfg` file varies based on distribution, so create an environmental variable called `GRUB_CONFIG` that finds it. Commands later in the process use this variable.

```shell
export GRUB_CONFIG=`sudo find /boot -name "grub.cfg"`
```

Rebuild the `grub.cfg` file with the changes we’ve made.

On **Ubuntu** and **Debian**, use `update-grub`:

```shell
sudo update-grub
```

On **CentOS** and **Fedora**, use `grub2-mkconfig`:

```shell
sudo grub2-mkconfig -o $GRUB_CONFIG
```

Now that the configuration is rebuilt and the menu is flattened, we can parse the file for the available entries. The following command displays the entry index number and title. You can use either of these to refer to a specific entry.

```shell
sudo grep 'menuentry ' $GRUB_CONFIG | cut -f 2 -d "'" | nl -v 0
```

This returns all of your available boot options. Take a note of the index number or title of the entry you wish to boot.

```
     0	CentOS Linux (3.10.0-327.22.2.el7.x86_64) 7 (Core)
     1	CentOS Linux (3.10.0-327.18.2.el7.x86_64) 7 (Core)
     2	CentOS Linux (0-rescue-d4c27651599f460481bc723aafe36177) 7 (Core)
     3	CentOS Linux (0-rescue-ce700ac27e6f4161b0730bad2182e0b1) 7 (Core)
```

In `/etc/default/grub`, look for the `GRUB_DEFAULT` setting. Set this to either the numerical index of the entry you discovered, or the title of the entry:

`/etc/default/grub`

```pkgconfig
. . .
GRUB_DEFAULT=1
. . .
```

Next, if you are running a **Debian** or **Ubuntu** Droplet, there is a DigitalOcean-specific Grub file in `/etc/default/grub.d` named `50-cloudimg-settings.cfg`. This file is necessary for the DigitalOcean to boot the image properly, but it contains a default selection that overrides the settings in `/etc/default/grub`.

In `/etc/default/grub.d/50-cloudimg-settings.cfg`, comment out the `GRUB_DEFAULT` line if one is present by adding a `#` to the beginning of the line.

`/etc/default/grub.d/50-cloudimg-settings.cfg`

```pkgconfig
#GRUB_DEFAULT=0
```

Next, regenerate the `grub.cfg` file using the same procedure as before. This applies the new default selection.

On **Ubuntu** and **Debian**:

```shell
sudo update-grub
```

On **CentOS** and **Fedora**:

```shell
sudo grub2-mkconfig -o $GRUB_CONFIG
```

Finally, reboot the Droplet.

```shell
sudo reboot
```

Your Droplet should now boot into the kernel you selected.

In this article...

- [Verify the Droplet’s Kernel Management Method](https://docs.digitalocean.com/products/droplets/how-to/kernel/use-non-default/#kernel-management)
- [Find and Install the Kernel Package](https://docs.digitalocean.com/products/droplets/how-to/kernel/use-non-default/#install-kernel)
  - [Ubuntu and Debian](https://docs.digitalocean.com/products/droplets/how-to/kernel/use-non-default/#ubuntu-and-debian)
  - [CentOS and Fedora](https://docs.digitalocean.com/products/droplets/how-to/kernel/use-non-default/#centos-and-fedora)
- [Setting the Default Kernel in the Bootloader](https://docs.digitalocean.com/products/droplets/how-to/kernel/use-non-default/#set-default)
  - [For Grub 2 Droplets using Native Internal Kernel Management](https://docs.digitalocean.com/products/droplets/how-to/kernel/use-non-default/#for-grub-2-droplets-using-native-internal-kernel-management)
  - [For Grub 2 Droplets Using the GrubLoader Kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/use-non-default/#for-grub-2-droplets-using-the-grubloader-kernel)

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