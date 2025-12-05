---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/"
title: "How to Update Your System | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. How to Update Your System


[updates](https://docs.cpanel.net/tags/updates/) [installation](https://docs.cpanel.net/tags/installation/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#overview)

* * *

[Update cPanel and WHM](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#update-cpanel-and-whm)

* * *

[In the WHM interface](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#in-the-whm-interface)

* * *

[Manually](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#manually)

* * *

[Update Apache](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#update-apache)

* * *

[Update software and services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#update-software-and-services)

* * *

[cPAddons](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#cpaddons)

* * *

[MySQL](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#mysql)

* * *

[Operating system kernels](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#operating-system-kernels)

* * *

[Perl](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#perl)

* * *

[PHP](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#php)

* * *

[Packages](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#packages)

* * *

[Ruby Gems](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#ruby-gems)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#overview)

* * *

[Update cPanel and WHM](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#update-cpanel-and-whm)

* * *

[In the WHM interface](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#in-the-whm-interface)

* * *

[Manually](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#manually)

* * *

[Update Apache](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#update-apache)

* * *

[Update software and services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#update-software-and-services)

* * *

[cPAddons](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#cpaddons)

* * *

[MySQL](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#mysql)

* * *

[Operating system kernels](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#operating-system-kernels)

* * *

[Perl](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#perl)

* * *

[PHP](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#php)

* * *

[Packages](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#packages)

* * *

[Ruby Gems](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/#ruby-gems)

* * *

## How to Update Your System

_Valid for versions 120 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/102/)

#### [120](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)

Last modified: _2024 March 1_

* * *

## Overview

This document describes the steps to update various parts of your cPanel & WHM server.

## Update cPanel and WHM

We **strongly** recommend that you regularly update cPanel & WHM on all of your servers. WHM displays the server’s current version in the upper right corner of the interface.

### In the WHM interface

To update cPanel & WHM via the interface, use WHM’s [_Upgrade to Latest Version_](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version) interface ( _WHM » Home » cPanel » Upgrade to Latest Version_).

Note:

- You can use WHM’s [_Update Preferences_](https://docs.cpanel.net/whm/server-configuration/update-preferences) interface ( _WHM » Home » Server Configuration » Update Preferences_) to update your server’s release tier. For an explanation of our release tiers, read our [Product Versions and the Release Process](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process) documentation.
- If cPanel & WHM will not update, [submit a ticket](https://tickets.cpanel.net/submit) to cPanel Technical Support.

### Manually

Note:

You can run the `/usr/local/cpanel/cpanel -V` command to verify the current cPanel & WHM version.

To update cPanel & WHM from the command line, use the `/usr/local/cpanel/scripts/upcp` script as the `root` user. This script handles most of the updates on your cPanel & WHM system.

This script also calls a number of other scripts within the `/usr/local/cpanel/scripts` directory to update most of the software on your system. The` /usr/local/cpanel/scripts/upcp` script also runs the following scripts:

- `/usr/local/cpanel/scripts/updates-packages` — Updates system software. You can run this script instead of the `yum update` command.

- `/usr/local/cpanel/scripts/sysup` — Updates required operating system (OS) software dependencies.


## Update Apache

Important:

EasyApache 4 updates Apache®, as well as other applications and libraries. We **strongly** recommend that you run EasyApache when a new Apache build becomes available.

To update EasyApache via the interface, click _Run System Update_ in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_).

## Update software and services

You can update many services and third-party software through both the WHM interface and manually.

### cPAddons

To update cPAddons, use WHM’s [_Manage cPAddons Site Software_](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software) interface ( _WHM » Home » cPanel » Manage cPAddons Site Software_).

Note:

This feature allows you to select the cPAddons that you wish to update automatically.

### MySQL

Warning:

Compatibility problems may exist with any software that you choose to install manually. For that reason, we **only** support MySQL® versions that we supply with cPanel & WHM.

To update MySQL via the interface, use WHM’s [_Upgrade Database Version_](https://docs.cpanel.net/whm/database-services/upgrade-database-version/) interface ( _WHM » Home » Database Services » Upgrade Database Version_).

### Operating system kernels

Note:

After you update the kernel, you **must** reboot your server.

To update the kernel:

- Via the interface, select the _Include kernel packages_ checkbox when you update your system with WHM’s _System Update_ interface ( _WHM » Home » Software » System Update_).
- Manually, run the `yum update` command.

### Perl

Warning:

- We **strongly** recommend that you allow your operating system’s distribution to control updates to both the system and cPanel Perl installations. Do **not** customize either Perl installation.

- WebPros International, LLC does **not** support updates of Perl beyond the operating system’s or cPanel’s distribution.

- We also do not support Perl downgrades. Your system will return Perl to the currently-supported version during the next system update.

- Neither your system Perl or cPanel-included Perl are likely to become corrupt. However, if you suspect that either instance of Perl is corrupt, a greater system issue may exist on your server. We recommend that you [open a cPanel support ticket](https://tickets.cpanel.net/).


You can use the following methods to update Perl and Perl modules:

- Run the `yum update` command.

- Run the `/usr/local/cpanel/scripts/upcp` script, which causes WHM to run the `/usr/local/cpanel/scripts/check_cpanel_pkgs` script, which updates Perl.

- Run the `/usr/local/cpanel/scripts/update_local_rpm_versions` script to update custom modules.


Note:

Instances of Perl on your server rely on packages for installation and maintenance.

### PHP

You can use the following methods to update the Apache or system PHP installations:

#### Apache PHP

To update Apache’s PHP via the interface, use WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_).

#### System PHP

To update the system PHP manually, run the `/usr/local/cpanel/scripts/upcp` script.

#### PHP extensions and applications

Important:

You **must** manually update any PHP extensions that you installed manually.

To update extensions and applications:

- Via the interface, use WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_).
- Manually, run the `/usr/local/cpanel/scripts/upcp` script.

Note:

To update cPAddons that you have installed, use WHM’s [_Manage cPAddons Site Software_](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software) interface ( _WHM » Home » cPanel » Manage cPAddons Site Software_).

### Packages

Warning:

Third-party repositories can cause problems with cPanel & WHM and updates from the OS repository. Be aware of the risks before you use a third-party repository.

To update packages, run the `/usr/local/cpanel/scripts/upcp` script.

Note:

You **must** manually update any manually-installed packages that cPanel & WHM’s default installation does not include. These packages will **only** receive an update if you have added them to the system repository.

### Ruby Gems

Warning:

In cPanel & WHM version 66, we [**deprecated** the legacy Ruby codebase](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/) and plan to remove it in a future release. This legacy Ruby codebase includes Ruby Gems.

When you install Ruby, cPanel & WHM **only** installs the **required** modules. To update these modules, run the `/usr/local/cpanel/scripts/upcp` script.

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Change Log](https://docs.cpanel.net/whm/cpanel/change-log/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×