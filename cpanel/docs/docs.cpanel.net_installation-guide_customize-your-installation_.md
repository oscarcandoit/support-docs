---
url: "https://docs.cpanel.net/installation-guide/customize-your-installation/"
title: "Customize Your Installation | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/installation-guide/customize-your-installation/#main-content)

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
3. Customize Your Installation


[installation](https://docs.cpanel.net/tags/installation/) [dnsonly](https://docs.cpanel.net/tags/dnsonly/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Installation Steps

- [Installation](https://docs.cpanel.net/installation-guide/install/)
- [System Requirements](https://docs.cpanel.net/installation-guide/system-requirements/)
- [System Requirements for AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/)
- [System Requirements for CloudLinux](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/)
- [System Requirements for Rocky Linux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/)
- [System Requirements for Ubuntu](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/)
- [cPanel DNSOnly® Installation](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/)
- [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation/)
[Overview](https://docs.cpanel.net/installation-guide/customize-your-installation/#overview) [Installation methods](https://docs.cpanel.net/installation-guide/customize-your-installation/#installation-methods) [Installation options](https://docs.cpanel.net/installation-guide/customize-your-installation/#installation-options) [Basic server setup](https://docs.cpanel.net/installation-guide/customize-your-installation/#basic-server-setup) [Configuration values](https://docs.cpanel.net/installation-guide/customize-your-installation/#configuration-values) [Configuration settings](https://docs.cpanel.net/installation-guide/customize-your-installation/#configuration-settings) [The mysql-version key](https://docs.cpanel.net/installation-guide/customize-your-installation/#the-mysql-version-key) [Account restoration](https://docs.cpanel.net/installation-guide/customize-your-installation/#account-restoration) [Release tiers](https://docs.cpanel.net/installation-guide/customize-your-installation/#release-tiers) [The cpsources file](https://docs.cpanel.net/installation-guide/customize-your-installation/#the-cpsources-file) [Invalid data](https://docs.cpanel.net/installation-guide/customize-your-installation/#invalid-data) [yum](https://docs.cpanel.net/installation-guide/customize-your-installation/#yum) [Exclude packages](https://docs.cpanel.net/installation-guide/customize-your-installation/#exclude-packages) [Remove yum groups](https://docs.cpanel.net/installation-guide/customize-your-installation/#remove-yum-groups) [apt](https://docs.cpanel.net/installation-guide/customize-your-installation/#apt) [Exclude packages](https://docs.cpanel.net/installation-guide/customize-your-installation/#exclude-packages) [Apache](https://docs.cpanel.net/installation-guide/customize-your-installation/#apache) - [WHM](https://docs.cpanel.net/installation-guide/whm/)
- [Troubleshoot Your Installation](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/)
- [Experimental Installation on Unsupported Operating Systems](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/)

Was this helpful?

[**Installation Steps**](https://docs.cpanel.net/installation-guide/customize-your-installation/#installation-toggle)

- [Installation](https://docs.cpanel.net/installation-guide/install/)
- [System Requirements](https://docs.cpanel.net/installation-guide/system-requirements/)
- [System Requirements for AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/)
- [System Requirements for CloudLinux](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/)
- [System Requirements for Rocky Linux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/)
- [System Requirements for Ubuntu](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/)
- [cPanel DNSOnly® Installation](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/)
- [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation/)
[Overview](https://docs.cpanel.net/installation-guide/customize-your-installation/#overview) [Installation methods](https://docs.cpanel.net/installation-guide/customize-your-installation/#installation-methods) [Installation options](https://docs.cpanel.net/installation-guide/customize-your-installation/#installation-options) [Basic server setup](https://docs.cpanel.net/installation-guide/customize-your-installation/#basic-server-setup) [Configuration values](https://docs.cpanel.net/installation-guide/customize-your-installation/#configuration-values) [Configuration settings](https://docs.cpanel.net/installation-guide/customize-your-installation/#configuration-settings) [The mysql-version key](https://docs.cpanel.net/installation-guide/customize-your-installation/#the-mysql-version-key) [Account restoration](https://docs.cpanel.net/installation-guide/customize-your-installation/#account-restoration) [Release tiers](https://docs.cpanel.net/installation-guide/customize-your-installation/#release-tiers) [The cpsources file](https://docs.cpanel.net/installation-guide/customize-your-installation/#the-cpsources-file) [Invalid data](https://docs.cpanel.net/installation-guide/customize-your-installation/#invalid-data) [yum](https://docs.cpanel.net/installation-guide/customize-your-installation/#yum) [Exclude packages](https://docs.cpanel.net/installation-guide/customize-your-installation/#exclude-packages) [Remove yum groups](https://docs.cpanel.net/installation-guide/customize-your-installation/#remove-yum-groups) [apt](https://docs.cpanel.net/installation-guide/customize-your-installation/#apt) [Exclude packages](https://docs.cpanel.net/installation-guide/customize-your-installation/#exclude-packages) [Apache](https://docs.cpanel.net/installation-guide/customize-your-installation/#apache) - [WHM](https://docs.cpanel.net/installation-guide/whm/)
- [Troubleshoot Your Installation](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/)
- [Experimental Installation on Unsupported Operating Systems](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/)

## Installation Guide - Customize Your Installation

* * *

## Overview

Before you begin the installation process, you can customize the configuration for certain portions of cPanel & WHM.

## Installation methods

New installations of cPanel & WHM use the fast installation method by default. This method handles certain aspects of cPanel & WHM differently to drastically reduce installation time. For example, the fast installation method:

- Uses tarballs to download certain code cPanel & WHM files.
- Uses system RPMs or `.deb` packages, if they are available, to set up the Perl `local::lib` library.

  - Red-Hat-based systems, like AlmaLinux OS, Rocky Linux™, or CloudLinux™, use RPMs.
  - Debian-based systems, like Ubuntu®, use `.deb` packages.

### Installation options

You can use the following options to customize cPanel & WHM’s installation process:

- `--confirm` — Require confirmation before the installation script runs.
- `--force` — Force installation on an unrecommended configuration.
- `--keep` — Do not delete the target directory after installation.
- `--nochown` — Do not assign permissions for the extracted files to the current user.
- `--noexec` — Do not run the installation script.
- `--nox11` — Do not spawn an X terminal input terminal.
- `--skip-cloudlinux` — Skip the automatic CloudLinux conversion process even if a license exists.






Important:





If you do **not** use this option, and you install cPanel & WHM on a [Red Hat® Enterprise Linux® (RHEL)-based](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#rhel) server with a CloudLinux license, the installer will automatically convert the server to CloudLinux.

- `--skip-wptoolkit` — Skip the automatic installation of WP Toolkit.
- `--skip-imunifyav` — Skip the automatic installation of ImunifyAV.
- `--target NewDirectory` — Extract the cPanel & WHM installation files to the `NewDirectory` directory.
- `--tar arg1 [arg2 ...]` — Access the contents of the `arg1` archive through the `tar` command.

## Basic server setup

The `/etc/wwwacct.conf` file contains the basic setup information for cPanel & WHM. After you install cPanel & WHM, you can find and edit this information in WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager® Setup_).

To customize this configuration, perform the following steps:

1. As the `root` user, create the `/etc/wwwacct.conf` file.
2. Enter all of the `wwwacct.conf` file’s parameters, with one entry per line:






Note:





Separate each parameter and its value with a space.









|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>``` | ```text<br>ADDR 192.0.2.0<br>NS2 ns2.domain.tld<br>CONTACTPAGER user@examplesms.com<br>LOGSTYLE combined<br>CONTACTEMAIL user@example.com<br>HOMEMATCH home<br>TTL 14400<br>NSTTL 86400<br>NS ns1.domain.tld<br>ETHDEV eth0<br>ADDR6<br>HOST<br>NS4<br>DEFMOD jupiter<br>HOMEDIR /home<br>NS3<br>SCRIPTALIAS y<br>``` |

3. Define the **required**`ADDR` or `ADDR6`, `DEFMOD`, `HOMEDIR`, `LOGSTYLE`, `NS`, `NS2`, and `SCRIPTALIAS` values.






Important:





If you do not define these values, account creation will fail.





For example:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```text<br>ADDR 192.0.2.0<br>DEFMOD jupiter<br>HOMEDIR /home<br>LOGSTYLE combined<br>NS ns1.domain.tld<br>NS2 ns2.domain.tld<br>SCRIPTALIAS y<br>``` |







Note:





In this example, `ns1.domain.tld` and `ns2.domain.tld` are your nameservers’ identities.

4. Specify values for any other parameters that you wish to configure. Refer to the configuration values table for a complete list of available parameters.

### Configuration values

You can configure the following values in the `/etc/wwwacct.conf` file:

| Value | Description | Example |
| --- | --- | --- |
| `ADDR` | **Required**<br> The server’s shared IPv4 address. If you do not specify this value, you must specify an `ADDR6` value. <br>Note:<br>- If you will run the server in NAT mode, use the internal IP address for this value.<br>- Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address. | `192.0.2.0` |
| `ADDR6` | **Required**<br> The server’s shared IPv6 address. If you do not specify this value, you must specify the `ADDR` value. | `2001:0db8:0:0:1:0:0:1` |
| `CONTACTEMAIL` | The system administrator’s contact email address. | `user@example.com` |
| `CONTACTPAGER` | The number to which the server sends Short Message Service (SMS) notifications. | `user@examplesms.com` |
| `DEFMOD` | **Required**<br> The default cPanel theme that you wish to use for newly-created accounts. This value does not impact cPanel theme behavior for existing accounts. | `jupiter` |
| `ETHDEV` | The default ethernet device. <br>- This parameter defaults to the `eth0` value.<br>- Specify `venet0:0` if the server runs Virtuozzo®. | `eth0` |
| `HOMEDIR` | **Required**<br> The path to the default home directory. | `/home` |
| `HOMEMATCH` | A string that determines which partitions to use as home directories for new accounts. (For example, a value of users matches system mounts of `users`, `users1`, or `users3`.) | `home` |
| `HOST` | The server’s hostname. | `hostname` |
| `LOGSTYLE` | **Required**<br> The Apache log format to use. You **must** define this value as combined. | `combined` |
| `NS` | **Required**<br> The primary nameserver to add to DNS zones by default. | `ns1.domain.tld` |
| `NS2` | **Required**<br> A second nameserver to add to DNS zones by default. | `ns2.domain.tld` |
| `NS3` | An additional nameserver to add to DNS zones by default. | `ns3.domain.tld` |
| `NS4` | An additional nameserver to add to DNS zones by default. | `ns4.domain.tld` |
| `NSTTL` | The default time to live (TTL) value that DNS zones will use. | `86400` |
| `SCRIPTALIAS` | **Required**<br> Whether the system aliases a `/cgi-bin/` directory on account creation. This value **only** accepts `y` or `n`. | `y` |
| `TTL` | The default time to live value. | `14400` |

## Configuration settings

When you install cPanel & WHM, the system reads the `/root/cpanel_profile/cpanel.config` file. This file stores the settings that WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _Home » Server Configuration » Tweak Settings_) contains, as well as various configuration settings for other cPanel & WHM features. The system uses these settings to set the values in the `/var/cpanel/cpanel.config` file.

Warning:

Some of the values that the `/root/cpanel_profile/cpanel.config` file contains are dynamic, or require specific values.

To set these parameters, perform the following steps:

1. As the `root` user, create the `/root/cpanel_profile/cpanel.config` file.
2. With one entry per line, list the parameters and values that you wish to configure in `key=value` format.

For example, to preconfigure your server to deny the nobody user the ability to send email to a remote address, add the `nobodyspam=1` line to the `/root/cpanel_profile/cpanel.config` file before you install cPanel & WHM.

### The mysql-version key

You can configure the version of MySQL® or MariaDB® to use in the `/root/cpanel_profile/cpanel.config` file’s `mysql-version` key before you install cPanel & WHM. To ensure that your cPanel & WHM installation uses your intended database version, your `mysql-version` key must meet the following requirements:

- Your `mysql-version` key requires a **single** decimal point. We do not support the configuration of specific database build versions: for example, MySQL 8.0.29.
- Your `mysql-version` key **cannot** contain strings. For example, if you install cPanel & WHM with a `mysql-version` key of `MySQL 8.0`, the installation process will fail. To configure a cPanel & WHM installation to use MySQL 8.0, instead enter a `mysql-version` key of `8.0`.
- To install MariaDB instead of MySQL, enter a supported MariaDB version for the `mysql-version` key.
- If you set the `mysql-version` key to an unsupported database version (for example, `mysql-version=5.1`), the installation process will fail. For more information about supported database versions, read our [Supported MySQL/MariaDB versions](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/) documentation.

Important:

We do **not** support the `mysql-version` configuration of existing cPanel & WHM installations.

## Account restoration

The `/etc/cpanelacctrestore` file contains a list of accounts to automatically restore during the cPanel & WHM installation process. You can use this file to restore accounts to a freshly-installed server.

Note:

When you create a backup file, you **must** use one of the following formats:

- `cpmove-{USER}`
- `cpmove-{USER}.tar`
- `cpmove-{USER}.tar.gz`
- `{USER}.tar`
- `{USER}.tar.gz`
- `backup-{MM.DD.YYYY}{HH-MM-SS}{USER}.tar`
- `backup-{MM.DD.YYYY}{HH-MM-SS}{USER}.tar.gz`

To restore a list of cPanel accounts during the cPanel & WHM installation process, perform the following steps:

1. As the `root` user, use a text editor to create the `/etc/cpanelacctrestore` file.
2. List the user account names, one entry per line.
3. Upload the backup file or files to one of the following directories:
   - `/home`
   - `/home2`
   - `/home3`
   - `/root`
   - `/usr`
   - `/usr/home`
   - `/web`

### Release tiers

The `/etc/cpupdate.conf` file determines the product version for your installation of cPanel & WHM. This file also controls when your server performs the automatic upgrades to new major versions of cPanel & WHM.

When you preconfigure this file, cPanel & WHM will install the specified version or the major version that corresponds to the specified release tier.

Note:

- For more information about our release tiers, read our [Product Versions and the Release Process](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process) documentation.
- For more information about the `/etc/cpupdate.conf` file, read our [cPanel & WHM Update Configuration File - cpupdate.conf](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf) documentation.

To preconfigure the cPanel & WHM release tier, perform the following steps:

1. As the `root` user, create the `/etc/cpupdate.conf` file.
2. In the `/etc/cpupdate.conf` file, use the `CPANEL` parameter to set your desired release tier.

For example, to configure your server to use the `STABLE` tier, add the `CPANEL=stable` value to the `/etc/cpupdate.conf` file.

## The cpsources file

Warning:

Invalid modifications to this file may cause **serious** problems. We **strongly** recommend that you do **not** modify this file unless you understand the full technical ramifications of your actions and can maintain these customizations.

The `/etc/cpsources.conf` file determines the locations from which your server downloads updates. By default, cPanel & WHM servers retrieve updates directly from WebPros International, LLC through our `httpupdate.cpanel.net` pool of update servers.

### Invalid data

If you see the following error in your server’s logs, the `/etc/cpsources.conf` file likely contains invalid data:

```bash
[2015-12-08 14:12:54 +0200] ***** FATAL: Unable to retrieve tier version info: timeout
```

To resolve this issue, move the `/etc/cpsources.conf` file to another location, then run the `/usr/local/cpanel/scripts/upcp` script. The system will automatically restore a valid cPanel-supplied version of the `/etc/cpsources.conf` file.

Note:

To disable FastUpdate on your server, use SSH to connect to your server as the `root` user and run the following command:

```bash
touch /var/cpanel/never_ever_use_fast_update_not_even_a_check
```

To reenable FastUpdate on your server, use SSH to connect to your server as the `root` user and run the following command:

```bash
rm /var/cpanel/never_ever_use_fast_update_not_even_a_check
```

## yum

Yellowdog Updater, Modified (yum) is an RPM package management tool for [RHEL-based](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#rhel) servers that automatically installs with your operating system.

The `yum` tool and commands do **not** work on Debian-based Linux servers, like Ubuntu®. Debian-based systems use the `apt` tool. For more information, read the [apt](https://docs.cpanel.net/installation-guide/customize-your-installation/#apt) section below.

Warning:

When you install cPanel & WHM, you must **only** use vendor-provided repositories. Third-party repositories may replace vital parts of the system and cause unexpected results.

### Exclude packages

Because cPanel & WHM handles its own installation of services through the `rpm.versions` system, the installer automatically configures the `/etc/yum.conf` file to exclude the following packages:

#### AlmaLinux, Rocky Linux, and CloudLinux 8

- `bind-chroot`
- `dovecot*`
- `exim*`
- `filesystem`
- `p0f`
- `php*`
- `proftpd*`
- `pure-ftpd*`

#### CloudLinux 9

- `bind-chroot`
- `cloud-init-18*`
- `dovecot*`
- `exim*`
- `filesystem`
- `one-context*`
- `p0f`
- `php*`
- `proftpd*`
- `pure-ftpd*`

### Remove yum groups

Note:

To obtain a list of yum groups, run the `yum grouplist` command.

Before you install cPanel & WHM, make certain that the following yum groups are **not** installed on your server:

- FTP Server
- GNOME Desktop Environment
- KDE (K Desktop Environment)
- Mail Server or E-mail Server
- Mono
- Web Server
- X Window System

To remove a yum group, run the `yum groupremove` command. For example, to remove the Mono and Mail Server groups, run the following command:

```bash
yum groupremove "Mono" "Mail Server"
```

## apt

apt is a package management tool for [Ubuntu-based](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#ubuntu) servers that automatically installs with your operating system.

Warning:

When you install cPanel & WHM, you must **only** use vendor-provided sources. Third-party sources may replace vital parts of the system and cause unexpected results.

### Exclude packages

Because cPanel & WHM handles its own installation of services, the installer automatically configures the `/etc/apt/preferences.d/99-cpanel-exclude-packages` file to exclude the following packages:

#### Ubuntu

- `base-files`
- `dovecot*`
- `exim*`
- `nsd`
- `p0f`
- `php*`
- `proftpd*`
- `pure-ftpd*`

## Apache

Note:

cPanel & WHM installs [EasyApache 4](https://docs.cpanel.net/ea4/) by default.

EasyApache 4 allows you to preconfigure your profile before you install cPanel & WHM on your server. To preconfigure your profile before installation you will need to create the `/etc/cpanel_initial_install_ea4_profile.json` file. If you create this file ahead of time then the installation process installs and copies this profile to the `/etc/cpanel/ea4/profiles/custom/` directory.

Note:

- The `/etc/cpanel_initial_install_ea4_profile.json` file **must** exist as both a valid JSON file and a valid EasyApache 4 profile. If your JSON file contains errors, no data, or the installation fails, the system installs the default EasyApache 4 profile.
- If your selected version of EasyApache fails to build, the installation process continues and you **must** troubleshoot the issue manually.
- If your system runs CloudLinux, the system installs the CloudLinux EasyApache 4 repository and the default CloudLinux profile.
- Systems that do **not** run CloudLinux install cPanel & WHM’s EasyApache 4 repository and the default profile.

For information about how to create an EasyApache 4 profile, read our [EasyApache 4 - Create a Profile](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/) documentation.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×