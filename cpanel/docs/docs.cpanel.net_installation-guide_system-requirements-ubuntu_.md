---
url: "https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/"
title: "System Requirements for Ubuntu | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#main-content)

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
3. System Requirements for Ubuntu


[installation](https://docs.cpanel.net/tags/installation/) [dnsonly](https://docs.cpanel.net/tags/dnsonly/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Installation Steps

- [Installation](https://docs.cpanel.net/installation-guide/install/)
- [System Requirements](https://docs.cpanel.net/installation-guide/system-requirements/)
- [System Requirements for AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/)
- [System Requirements for CloudLinux](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/)
- [System Requirements for Rocky Linux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/)
- [System Requirements for Ubuntu](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/)
[Overview](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#overview) [License](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#license) [Networking requirements](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#networking-requirements) [Hardware requirements](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#hardware-requirements) [Ubuntu version](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#ubuntu-version) [Operating state](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#operating-state) [SELinux and AppArmor](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#selinux-and-apparmor) [Perl installation](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#perl-installation) [Filesystems](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#filesystems) [Partitions](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#partitions) [Virtual environments](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#virtual-environments) [Compatible browsers](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#compatible-browsers) [Databases](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#databases) [Nameservers](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#nameservers) - [cPanel DNSOnly® Installation](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/)
- [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation/)
- [WHM](https://docs.cpanel.net/installation-guide/whm/)
- [Troubleshoot Your Installation](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/)
- [Experimental Installation on Unsupported Operating Systems](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/)

Was this helpful?

[**Installation Steps**](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#installation-toggle)

- [Installation](https://docs.cpanel.net/installation-guide/install/)
- [System Requirements](https://docs.cpanel.net/installation-guide/system-requirements/)
- [System Requirements for AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/)
- [System Requirements for CloudLinux](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/)
- [System Requirements for Rocky Linux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/)
- [System Requirements for Ubuntu](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/)
[Overview](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#overview) [License](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#license) [Networking requirements](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#networking-requirements) [Hardware requirements](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#hardware-requirements) [Ubuntu version](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#ubuntu-version) [Operating state](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#operating-state) [SELinux and AppArmor](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#selinux-and-apparmor) [Perl installation](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#perl-installation) [Filesystems](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#filesystems) [Partitions](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#partitions) [Virtual environments](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#virtual-environments) [Compatible browsers](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#compatible-browsers) [Databases](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#databases) [Nameservers](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/#nameservers) - [cPanel DNSOnly® Installation](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/)
- [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation/)
- [WHM](https://docs.cpanel.net/installation-guide/whm/)
- [Troubleshoot Your Installation](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/)
- [Experimental Installation on Unsupported Operating Systems](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/)

## Installation Guide - System Requirements for Ubuntu

* * *

# Overview

This document describes the system requirements for your cPanel & WHM installation on an Ubuntu® server.

You can install cPanel & WHM on Ubuntu version 22.04 LTS.

Important:

We support cPanel & WHM on LTS versions of Ubuntu. We add support for new versions of Ubuntu when we release a new cPanel & WHM LTS version. When we add support for the next version of Ubuntu, we **deprecate** support for the previous version.

An LTS cPanel & WHM version that coincides with a new Ubuntu release will support both versions of Ubuntu throughout its lifecycle. However, the older Ubuntu version will block upgrades to any newer versions of cPanel & WHM.

Before you install cPanel & WHM, make **certain** that your Ubuntu system meets all of our minimum requirements for new installations.

Warning:

- This document lists the **minimum** requirements to install cPanel & WHM. An Ubuntu server that meets only these requirements may not function properly, especially when under a heavy load.
- You **must** log in to the server as the `root` user in order to install cPanel & WHM. If you do not possess `root`-level access, contact your system administrator or hosting provider for assistance.

## License

Each cPanel & WHM server requires its own license. If you do not already own a license for cPanel & WHM, you can obtain one for your server’s IP address. To obtain a cPanel & WHM license, visit the [cPanel Store](http://www.cpanel.net/store).

Warning:

- You **cannot** transfer a single cPanel & WHM license across multiple servers. This action may cause WebPros International, LLC to lock your license. For more information, read our [Legal Agreements](https://cpanel.com/legal-store.html) documentation.
- Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.

Note:

- cPanel & WHM requires a [valid license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). If this is a new installation, you can activate a free 15-day trial license.
- In order to activate a new license, you **must** have a [cPanel Store](https://store.cpanel.net/) account with a verified email address.
- cPanel DNSOnly requires a DNSOnly license, which the server automatically obtains during installation.

## Networking requirements

#### Hostname

Your hostname **must** meet the following requirements:

- Be a registered and fully-qualified domain name.
- Does **not** match any of your server’s domains.
- Be a maximum of 60 characters in length.
- Resolve to a valid IPv4 or IPv6 address.

Note:

If your server does **not** use a resolvable fully-qualified domain name as the hostname, it will automatically receive one from WebPros International, LLC. For more information, read our [Automatically-Issued Hostnames](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/) documentation.

#### IP addresses

Your system **must** meet the following requirements:

- Have a valid IP address.
- Have a [1:1 NAT](https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/) and [NAT loopback](https://en.wikipedia.org/wiki/Network_address_translation#NAT_loopback) configuration if your server resides on a NAT-configured network.

#### Ethernet device

You **must** configure your Ethernet device with a static IP address and fully-qualified hostname. The system will detect and set up the Ethernet device during installation.

Warning:

You **cannot** use an IP address that a DHCP service dynamically assigns to your server.

#### Firewalls

The installer will attempt to open [the necessary ports](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/#ports) during the installation process. We recommend that you disable OS firewalls before you run the cPanel & WHM installation. When the installation process finishes, we recommend that you then configure a firewall with a third-party client such as [APF](https://www.rfxn.com/projects/advanced-policy-firewall/) or [CSF](https://github.com/waytotheweb/scripts/tree/main/csf).

Important:

Ubuntu distributions allow you to disable the firewall for the operating system’s installation configuration. We **strongly** recommend that you use this method.

To deactivate firewalls on Ubuntu, run the following commands, where `~/firewall.rules` represents the firewall rules file:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```text<br>iptables-save > ~/firewall.rules<br>systemctl stop ufw.service<br>systemctl disable ufw.service<br>``` |

## Hardware requirements

| Operating system and version | Processor | RAM | Disk Space | Architecture |
| --- | --- | --- | --- | --- |
| Ubuntu 22.04 LTS | - **Minimum**: 1.1 GHz<br>- **Recommended**: 2 GHz | - **Minimum**: 2 GB<br>- **Recommended**: 4 GB | - **Minimum**: 20 GB<br>- **Recommended**: 40 GB | 64-bit |

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

## Ubuntu version

You can install cPanel & WHM on the following versions of Ubuntu:

- [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/)

Important:

- You **must** use the server install image and select the default installation.
- Do **not** install [SELinux](https://selinuxproject.org/) on your server. SELinux is **not** compatible with cPanel & WHM.

To install Ubuntu, read their [Installing Ubuntu](https://ubuntu.com/server/docs/installation) documentation.

### Operating state

In Linux, the operating system possesses several levels of operating states. Each different level represents a system configuration and allows users to access different processes.

| Operating system | Operating state | Setting | Location |
| --- | --- | --- | --- |
| Ubuntu | Target | `multi-user.target` | `/usr/lib/systemd/system` |

#### Verify and change the operating state

To verify the OS runlevel for Ubuntu, run the following command as the `root` user:

```bash
systemctl get-default
```

To change the OS runlevel for Ubuntu, run the following command as the `root` user, where `TARGET.target` represents the operating state target:

```bash
systemctl set-default TARGET.target
```

For a complete list of targets, visit Ask Ubuntu’s [How do I change the runlevel on systemd?](https://askubuntu.com/questions/788323/how-do-i-change-the-runlevel-on-systemd) article.

### SELinux and AppArmor

Do **not** install [SELinux](https://selinuxproject.org/) on your server. SELinux is **not** compatible with cPanel & WHM.

Ubuntu installations run [AppArmor](https://ubuntu.com/server/docs/security-apparmor) by default. AppArmor is compatible with cPanel & WHM. You do **not** need to disable AppArmor to install cPanel & WHM.

## Perl installation

Perl **must** exist on your server before the installation script for cPanel & WHM can run successfully. If Perl does **not** exist during installation, the cPanel & WHM installer attempts to install Perl via the `apt -y install perl perl-base` command.

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
- **VMware® Server, VMware ESX Server** — No additional restrictions.
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

## Databases

For more information about which database versions we support for Ubuntu, read our [Supported MySQL/MariaDB versions](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/) documentation.

Note:

The cPanel installer automatically installs MariaDB 10.11 during the installation process.

## Nameservers

We **only** support the PowerDNS nameserver on Ubuntu. You **cannot** use any other nameserver.

Note:

The cPanel installer automatically installs PowerDNS during the installation process.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×