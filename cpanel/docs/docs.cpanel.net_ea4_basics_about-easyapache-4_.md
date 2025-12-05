---
url: "https://docs.cpanel.net/ea4/basics/about-easyapache-4/"
title: "About EasyApache 4 | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [EasyApache4](https://docs.cpanel.net/ea4/)
3. [Basics](https://docs.cpanel.net/ea4/basics/)
4. About EasyApache 4


[ea4](https://docs.cpanel.net/tags/ea4/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#overview)

* * *

[EasyApache 4 benefits](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#easyapache-4-benefits)

* * *

[Requirements](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#requirements)

* * *

[Run EasyApache 4](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#run-easyapache-4)

* * *

[Apache](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#apache)

* * *

[PHP](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#php)

* * *

[MultiPHP support](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#multiphp-support)

* * *

[Other available packages in EasyApache 4](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#other-available-packages-in-easyapache-4)

* * *

[AlmaLinux OS and Rocky Linux](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#almalinux-os-and-rocky-linux)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#overview)

* * *

[EasyApache 4 benefits](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#easyapache-4-benefits)

* * *

[Requirements](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#requirements)

* * *

[Run EasyApache 4](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#run-easyapache-4)

* * *

[Apache](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#apache)

* * *

[PHP](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#php)

* * *

[MultiPHP support](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#multiphp-support)

* * *

[Other available packages in EasyApache 4](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#other-available-packages-in-easyapache-4)

* * *

[AlmaLinux OS and Rocky Linux](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#almalinux-os-and-rocky-linux)

* * *

## About EasyApache 4

Last modified: _2024 September 26_

* * *

## Overview

EasyApache 4 installs, configures, updates, and validates your web server and its components, including PHP. It provides a interface for package management.

We do **not** require that you use EasyApache, but it provides an easy and convenient way to modify your web server. Your cPanel & WHM license includes EasyApache.

## EasyApache 4 benefits

EasyApache 4 provides the following benefits:

- Updates to PHP, Apache, and the modules that you select.
- Multiple concurrent versions of PHP.
- Decreased security vulnerabilities due to automatic updates.
- A simplified method to add, remove, or install components of your web server.
- Recommendations about compatibility.
- Easy access to information about the options you select.

## Requirements

We **only** support EasyApache functionality on currently-supported versions of cPanel & WHM.

Important:

We **strongly** recommend that you update your server’s cPanel & WHM version before you run EasyApache 4.

We **only** support EasyApache 4 on currently-supported [operating systems](https://docs.cpanel.net/installation-guide/system-requirements/)

For more information, read our [Product Versions and the Release Process](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/) documentation.

## Run EasyApache 4

To run EasyApache, use WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_).

We recommend that you update EasyApache 4 whenever we release an update for software that you use.

EasyApache provides some preconfigured [profiles](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/) with recommendations for their use. The _cPanel Default_ profile fulfills the requirements of most servers.

To automatically update your installed packages, use a cron job or select _Run System Update_ in the [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_). You can also update your packages manually with your [package manager](https://docs.cpanel.net/ea4/basics/package-manager-basics/).

## Apache

EasyApache 4 **only** supports Apache 2.4. You **cannot** install an older version of Apache.

For more information about Apache and EasyApache, read our [About Apache](https://docs.cpanel.net/ea4/apache/about-apache/) documentation.

## PHP

EasyApache 4 supports PHP version 7.4 and [PHP 8.1](https://docs.cpanel.net/ea4/php/php-8/) through 8.4.

The cPanel default profile includes PHP versions 8.1 and 8.2.
You can install additional PHP versions with WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).

If you require a version of PHP that EasyApache 4 does **not** provide, we recommend that you use [CloudLinux™](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-cloudlinux/) and the [CloudLinux PHP Selector](https://docs.cloudlinux.com/legacy/cloudlinux_os_components/#php-selector).

For more information about PHP and EasyApache, read our \[ [About PHP](https://docs.cpanel.net/ea4/php/about-php/) documentation.\
\
### MultiPHP support\
\
EasyApache 4 supports multiple versions of PHP. The MultiPHP system allows you to assign different PHP versions to each of your domains.\
\
The EasyApache 4 MultiPHP system also recognizes PHP packages with prefixes other than `ea-`. This allows you to use vendor-provided packages. For more information, read our [About PHP](https://docs.cpanel.net/ea4/php/about-php/) documentation.\
\
## Other available packages in EasyApache 4\
\
You can view other available packages in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).\
\
The EasyApache options that you select will determine what EasyApache builds into your web server. For each option that you select, make **certain** that you understand the functionality of the option and any security vulnerabilities that may come with it.\
\
You can also install your packages on the command line if you prefer. For more information, read our [Package Manager Basics](https://docs.cpanel.net/ea4/basics/package-manager-basics/) documentation.\
\
### AlmaLinux OS and Rocky Linux\
\
The following packages are **not** provided by EasyApache 4 for AlmaLinux and Rocky Linux. However, if a system library for these packages exist, EasyApache 4 will use the system-provided one.\
\
[Click to view...](https://docs.cpanel.net/ea4/basics/about-easyapache-4/#click-to-view---1764175696273362010)\
\
- Memcache after AlmaLinux 8 and Rocky Linux 8\
- OpenSSL\
- OpenSSL 1.1\
- Phalcon after PHP 7.4\
- PHP versions prior to version 7.2\
- Ruby 2.4\
- Snuffleupagus after PHP 7.4\
- Suhosin\
- Zend Guard Loader™\
\
#### Additional Documentation\
\
* * *\
\
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)\
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)\
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)\
- [Configure cPanel Cron Jobs](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/)\
- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)\
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)\
\
[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")\
\
© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")\
\
cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.\
\
×