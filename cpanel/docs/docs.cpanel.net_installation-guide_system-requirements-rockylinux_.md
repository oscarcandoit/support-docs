---
url: "https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/"
title: "System Requirements for Rocky Linux | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [Installation Guide](https://docs.cpanel.net/installation-guide/)
3. System Requirements for Rocky Linux


[installation](https://docs.cpanel.net/tags/installation/) [dnsonly](https://docs.cpanel.net/tags/dnsonly/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Installation Steps

- [Installation](https://docs.cpanel.net/installation-guide/install/)
- [System Requirements](https://docs.cpanel.net/installation-guide/system-requirements/)
- [System Requirements for AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/)
- [System Requirements for CloudLinux](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/)
- [System Requirements for Rocky Linux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/)
[Overview](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#overview) [License](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#license) [Networking requirements](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#networking-requirements) [Hardware requirements](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#hardware-requirements) [Rocky Linux versions](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#rocky-linux-versions) [Operating state](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#operating-state) [Disable SELinux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#disable-selinux) [Perl installation](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#perl-installation) [Filesystems](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#filesystems) [Partitions](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#partitions) [Virtual environments](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#virtual-environments) [Compatible browsers](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#compatible-browsers) - [System Requirements for Ubuntu](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/)
- [cPanel DNSOnly® Installation](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/)
- [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation/)
- [WHM](https://docs.cpanel.net/installation-guide/whm/)
- [Troubleshoot Your Installation](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/)
- [Experimental Installation on Unsupported Operating Systems](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/)

Was this helpful?

[**Installation Steps**](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#installation-toggle)

- [Installation](https://docs.cpanel.net/installation-guide/install/)
- [System Requirements](https://docs.cpanel.net/installation-guide/system-requirements/)
- [System Requirements for AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/)
- [System Requirements for CloudLinux](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/)
- [System Requirements for Rocky Linux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/)
[Overview](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#overview) [License](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#license) [Networking requirements](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#networking-requirements) [Hardware requirements](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#hardware-requirements) [Rocky Linux versions](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#rocky-linux-versions) [Operating state](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#operating-state) [Disable SELinux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#disable-selinux) [Perl installation](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#perl-installation) [Filesystems](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#filesystems) [Partitions](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#partitions) [Virtual environments](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#virtual-environments) [Compatible browsers](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#compatible-browsers) - [System Requirements for Ubuntu](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/)
- [cPanel DNSOnly® Installation](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/)
- [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation/)
- [WHM](https://docs.cpanel.net/installation-guide/whm/)
- [Troubleshoot Your Installation](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/)
- [Experimental Installation on Unsupported Operating Systems](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/)

## Installation Guide - System Requirements for Rocky Linux

* * *

## Overview

This document describes the system requirements for your cPanel & WHM installation on a Rocky Linux™ server.

You can install cPanel & WHM versions 110 and later on the [Rocky Linux 8](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system) operating system and cPanel & WHM versions 114 and later on the [Rocky Linux 9](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system) operating system.

Before you install cPanel & WHM or [cPanel DNSOnly®](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation), make certain that your Rocky Linux system meets all of our minimum requirements for new installations.

Warning:

- We only test cPanel & WHM against the official Rocky Linux upstream releases. Pre-built images and templates may have issues installing cPanel.

- This document lists the **minimum** requirements to install cPanel & WHM. A Rocky Linux server that meets only these requirements may not function properly, especially when the server runs certain high-demand functions.

- You **must** log in to the server as the `root` user in order to install cPanel & WHM. If you do not possess `root`-level access, contact your system administrator or hosting provider for assistance.

- Servers on an IP address with an active CloudLinux license **will automatically convert** to CloudLinux. To stop the conversion and keep Rocky Linux on your server, add the `--skip-cloudlinux` [installation option](https://docs.cpanel.net/installation-guide/customize-your-installation/#installation-options) to the end of your installation command.


## License

Each cPanel & WHM server requires its own license. If you do not already own a license for cPanel & WHM, you can obtain one for your server’s IP address. To obtain a cPanel & WHM license, visit the [cPanel Store](http://www.cpanel.net/store).

Warning:

- You **cannot** transfer a single cPanel & WHM license across multiple servers. This action may cause WebPros International, LLC to lock your license. For more information, read our [Legal Agreements](https://cpanel.com/legal-store.html) documentation.

- Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.


Note:

- cPanel & WHM requires a [valid license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). If this is a new installation, you can activate a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).

- In order to activate a new license, you **must** have a [cPanel Store](https://store.cpanel.net/) account with a verified email address.

- cPanel DNSOnly requires a DNSOnly license, which the server automatically obtains during installation. If this does not occur, contact [cPanel Customer Service](https://tickets.cpanel.net/review/login.cgi).


## Networking requirements

#### Hostname

Your hostname **must** meet the following requirements:

- Be a registered and fully-qualified domain name.
- Does **not** match any of your server’s domains.
- Be a maximum of 60 characters in length.
- Resolves to a valid IPv4 or IPv6 address.

Note:

If your server does **not** use a resolvable fully-qualified domain name as the hostname, it will automatically receive one from WebPros International, LLC. For more information, read our [Automatically-Issued Hostnames](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/) documentation.


#### IP addresses

Your IP address **must** meet the following requirements:

- Be a valid IP address.
- Be a [1:1 NAT](https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/) and [NAT loopback](https://en.wikipedia.org/wiki/Network_address_translation#NAT_loopback) configuration if your server resides in a NAT-configured network.

#### Ethernet device

You **must** configure your Ethernet device with a static IP address and fully-qualified hostname. The system attempts to detect and set the Ethernet device during the installation process.

Warning:

You **cannot** use an IP address that a DHCP service dynamically assigns to your server.

#### Firewalls

The installer will attempt to open [the necessary ports](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/#ports) during the installation process. We recommend that you disable OS firewalls before you run the cPanel & WHM installation. When the installation process finishes, we recommend that you then configure a firewall with a third-party client such as [APF](https://www.rfxn.com/projects/advanced-policy-firewall/) or [CSF](https://github.com/waytotheweb/scripts/tree/main/csf).

Important:

- Rocky Linux distributions allow you to disable the firewall for the operating system’s installation configuration. We **strongly** recommend that you use this method.
- The `firewalld` package must be present and the `firewalld` service running before you can disable the firewall. You can use the following commands if you are unsure whether or not `firewalld` is running:


```bash
systemctl status firewalld.service
```

- If the `firewalld` service is not running, you can skip the following steps to deactivate firewalls on Rocky Linux servers.

To deactivate firewalls on Rocky Linux servers, run the following commands where `~/firewall.rules` represents the firewall rules file:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```text<br>iptables-save > ~/firewall.rules<br>systemctl stop firewalld.service<br>systemctl disable firewalld.service<br>``` |

#### Utilities

On Rocky Linux 8 systems, the cPanel & WHM installer automatically disables the Network Manager service and enables the `network.service` service. On Rocky Linux 9 systems, the installer does not disable Network Manager, and you do **not** need to disable it on these systems.

## Hardware requirements

| Operating system and version | Processor | RAM | Disk Space | Architecture |
| --- | --- | --- | --- | --- |
| Rocky Linux 9 | 1.1 GHz | - **Minimum**: 2 GB<br>- **Recommended**: 4 GB | - **Minimum**: 20 GB<br>- **Recommended**: 40 GB | 64-bit |
| Rocky Linux 8 | 1.1 GHz | - **Minimum**: 2 GB<br>- **Recommended**: 4 GB | - **Minimum**: 20 GB<br>- **Recommended**: 40 GB | 64-bit |

Warning:

- We **strongly** recommend that you install at least 3 GB of RAM if you want to install the [Clam AntiVirus Scanner (ClamAV) antivirus software](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner).

- We do **not** support Advanced RISC Machines (ARM) architecture systems.


#### Hardware considerations

When you choose a server, consider the following questions:

##### How many sites do you plan to host?

Servers that host a large number of websites with associated email addresses and databases require more processing power, disk space, and RAM.

##### What kind of web hosting do you plan to do?

You can run cPanel & WHM with the minimum requirements in the table above. However, servers that host videos, music, or high-volume applications require more processing power, disk space, and RAM.

If you plan to host CPU-intensive applications on a virtual machine, we recommend that you evaluate your CPU load usage. You may need to assign additional CPU cores to satisfy the processing requirements of high-performance applications.

Note:

- The cPanel & WHM installation and upgrade processes require **at least** 5 GB of additional disk space in the `/usr/local/cpanel` directory.

- Before the installation process begins, the system checks to ensure that your server meets these minimum memory requirements. If your server does **not** meet these requirements, the installation process will return an error message and then exit.


## Rocky Linux versions

WebPros International, LLC supports all of the official production release kernels for the Rocky Linux 8 operating system on cPanel & WHM versions 110 and later. We support all of the official production release kernels for the Rocky Linux 9 operating system on cPanel & WHM versions 114 and later.

Important:

- We recommend that you use the **minimal** installer.
- If you are using an operating system source that WebPros International, LLC did not provide, you **must** [disable SELinux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#disable-selinux).

To install the Rocky Linux operating system, read the [Rocky Linux installation guides](https://docs.rockylinux.org/guides/installation/).

### Operating state

In Linux, the operating system possesses several levels of operating states. Each different level represents a system configuration and allows users to access different processes.

| Operating system | Operating state | Setting | Location |
| --- | --- | --- | --- |
| Rocky Linux 9 | Target | `multi-user.target` | `/usr/lib/systemd/system` |
| Rocky Linux 8 | Target | `multi-user.target` | `/usr/lib/systemd/system` |

### Disable SELinux

SELinux is disabled by default in Rocky Linux. If you have enabled SELinux, you **must** disable it prior to installing cPanel & WHM.

To disable SELinux security features, use one of the following methods:

- Use the graphical interface to disable SELinux while you configure your operating system, and then reboot the server.

- Edit the `/etc/selinux/config` file to set the `SELINUX` parameter to `disabled`, and then reboot the server. The contents of the `/etc/selinux/config` file should resemble the following example:






|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```text<br># This file controls the state of SELinux on the system.<br># SELINUX= can take one of these three values:<br># enforcing - SELinux security policy is enforced.<br># permissive - SELinux prints warnings instead of enforcing.<br># disabled - No SELinux policy is loaded.<br>SELINUX=disabled<br># SELINUXTYPE= can take one of these two values:<br># targeted - Only targeted network daemons are protected.<br># strict - Full SELinux protection.<br>SELINUXTYPE=targeted<br>``` |







Important:





Make **certain** that the number sign (`#`) **does not** precede `SELINUX=disabled`. If a `#` precedes this configuration option, the system ignores the option.


Warning:

- To run cPanel & WHM on your server, SELinux **must remain disabled**.

  - SELinux in `enforcing` mode does **not** allow cPanel & WHM to function properly. For more information about SELinux modes, read the [SELinux Mode](http://selinuxproject.org/page/Guide/Mode) documentation.
  - While cPanel & WHM can function with SELinux in **permissive** mode, we recommend that you do **not** use it. **Permissive** mode generates a large number of log entries.
  - To check the status of SELinux on your server, run the `sestatus` command.
- Do **not** transfer the SELinux configuration file between computers. It may destroy the file’s integrity.

## Perl installation

Perl **must** exist on your server before the installation script for cPanel & WHM can run successfully. If Perl does **not** exist during installation, the cPanel & WHM installer attempts to install Perl via the `yum -y install perl` command.

- If you see errors during this step of the installation process, read our [Troubleshoot Your Installation](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation) documentation.

- For more information about Perl on your server, and which versions of Perl ship with specific operating systems, read our [Guide to Perl in cPanel & WHM](https://api.docs.cpanel.net/guides/guide-to-perl/) documentation. cPanel & WHM servers use multiple Perl environments.


Note:

We **strongly** recommend that you allow your operating system’s distribution to control the system Perl installation. Do **not** customize this Perl installation.

## Filesystems

When you install your operating system (OS), we recommend that you use the XFS® or `ext4` filesystems.

Note:

We **only** develop and test cPanel & WHM on filesystems that support [flock](http://linux.die.net/man/2/flock). Some network filesystems (for example, NFS) may require additional configuration in order to function properly. However, these configurations are difficult to implement successfully and we do **not** support them.

### Partitions

Note:

- Your system’s applications may require additional swap space. Consult your application’s software developers or documentation for their swap space recommendations.

- Additional partitions improve performance for some servers, especially servers with high email volume. The OS can only access a limited number of files per partition.


| Partition | RAM and minimum size |
| --- | --- |
| `/` | N/A — Grow to fill disk (40 GB recommended, 20 GB minimum). <br>Note:<br>To host a greater number of accounts, allocate more disk space to this partition. |
| swap | - 2 GB or less — Two times the amount of RAM on the server.<br>- 2 GB to 4 GB — The same as the amount of RAM on the server.<br>- 4 GB or more — 4 GB |

#### Inodes

In Linux, an inode is a filesystem object that contains the owner, permissions, and other important metadata. Every file, image, directory, email, and symbolic link on your server requires an inode.

- On average, files on webservers are usually smaller than on other types of servers. Therefore, we recommend that you allocate more than the default number of inodes on your server’s partitions.

- If you install everything on a single partition, the base cPanel & WHM or cPanel DNSOnly installation requires **at least** 1,000,000 inodes, **plus at least** 50,000 inodes per cPanel account that you plan to host.


## Virtual environments

cPanel products support the following virtual environments with the following restrictions:

- **KVM** — No additional restrictions.







Note:





If you use a Linux bridge on a KVM server, you may experience problems with multicast routing.



- These problems affect the server’s ability to resolve nodes on the network. For example, IPv6 Stateless Address Autoconfiguration (SLAAC) addresses may drop off intermittently, or the server may experience problems when it attempts to find the router.

- To resolve this issue, set the `multicast_router` system knob value to `2`. For more information, read the [CentOS-virt mailing list thread](https://lists.centos.org/pipermail/centos-virt/2012-September/003021.html).


- **Linux Containers** — cPanel & WHM requires additional configuration to run inside a Linux Container. For more information, read our [Linux Containers](https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers) documentation.

- **Linux-VServer** — No additional restrictions.

- **Microsoft Server® 2008 Hyper-V, Microsoft Server 2012 Hyper-V** — cPanel **only** supports the drivers and configurations that Microsoft® provides.

- **OpenVZ**
  - cPanel **only** supports stable releases.
- **Oracle VM VirtualBox, VirtualBox OSE** — No additional restrictions.

- **QEMU** — No additional restrictions.

- **SmartOS** — cPanel & WHM detects this virtual environment and reports as functional, but we do **not** officially support it.

- **Virtuozzo™**
  - We support Virtuozzo version 7 and earlier.
  - We **only** support Virtuozzo KVM and container environments.
- **VMware ESXi™ Server** — No additional restrictions.

- **Xen, XenEnterprise™, XenExpress™, XenServer™** — No additional restrictions.


## Compatible browsers

We specifically test cPanel & WHM with certain browsers to ensure compatibility. Other browsers will likely function, but may appear differently or experience issues with certain features.

We develop and test cPanel & WHM to function with the latest versions of the following browsers:

- Chrome™ (MacOS®, Microsoft® Windows®, Linux)

- Firefox (MacOS, Windows, Linux)

- Microsoft Edge (Windows)

- Safari® (MacOS)


Mobile versions of Firefox, Chrome, and Safari are also compatible with cPanel & WHM.

Note:

These browsers support some email features. The interfaces in cPanel & WHM will likely function, but you may notice minor defects or inconveniences that relate to specific functionality.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×

consentcdn.cookiebot.com

# consentcdn.cookiebot.com is blocked

This page has been blocked by an extension

- Try disabling your extensions.

ERR\_BLOCKED\_BY\_CLIENT

Reload


This page has been blocked by an extension

![](<Base64-Image-Removed>)![](<Base64-Image-Removed>)

![Cookiebot session tracker icon loaded](https://imgsct.cookiebot.com/1.gif?dgi=da52fc49-8e48-42b7-9ad3-c219404f6f92)