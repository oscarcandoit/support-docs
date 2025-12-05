---
url: "https://docs.cpanel.net/ea4/basics/easyapache-4-file-system-layout/"
title: "EasyApache 4 File System Layout | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/basics/easyapache-4-file-system-layout/#main-content)

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
4. EasyApache 4 File System Layout


[ea4](https://docs.cpanel.net/tags/ea4/) [apache](https://docs.cpanel.net/tags/apache/) [php](https://docs.cpanel.net/tags/php/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/basics/easyapache-4-file-system-layout/#overview)

* * *

[EasyApache 4](https://docs.cpanel.net/ea4/basics/easyapache-4-file-system-layout/#easyapache-4)

* * *

[Apache](https://docs.cpanel.net/ea4/basics/easyapache-4-file-system-layout/#apache)

* * *

[PHP](https://docs.cpanel.net/ea4/basics/easyapache-4-file-system-layout/#php)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/basics/easyapache-4-file-system-layout/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/basics/easyapache-4-file-system-layout/#overview)

* * *

[EasyApache 4](https://docs.cpanel.net/ea4/basics/easyapache-4-file-system-layout/#easyapache-4)

* * *

[Apache](https://docs.cpanel.net/ea4/basics/easyapache-4-file-system-layout/#apache)

* * *

[PHP](https://docs.cpanel.net/ea4/basics/easyapache-4-file-system-layout/#php)

* * *

## EasyApache 4 File System Layout

Last modified: _2024 September 26_

* * *

## Overview

This document provides an abridged list of the main EasyApache 4 file locations, and contains links to documentation with extended lists for specific use cases.

## EasyApache 4

You can find the EasyApache 4 files in the following locations:

- `/etc/cpanel/ea4/` — This directory contains EasyApache 4’s files and directories.
- `/etc/cpanel/ea4/profiles/custom/` — This directory contains custom EasyApache 4 profiles. For more information, read our [EasyApache 4 Create a Profile](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile) documentation.

## Apache

You can the find the main Apache® files in the following locations:

- `/usr/sbin/httpd` — The Apache binary file.
- `/etc/apache2/` — This directory contains Apache configuration files. It also contains include files and modules. This directory does **not** contain log files. It contains the following directory and file:

  - `/etc/apache2/conf.d/` — The main Apache configuration file directory.
  - `/etc/apache2/conf/httpd.conf` — The primary Apache configuration file.
- `/var/log/apache2/` — This directory contains the log files for the `/etc/apache2` directory, including access logs.
- `/var/www/html/` — This directory contains the document root for the server. It contains the default pages that users can see.

For a full list of Apache file locations, read our [About Apache](https://docs.cpanel.net/ea4/apache/about-apache/) documentation. You can find additional information in our [Advanced Apache Configuration](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration) documentation.

## PHP

You can find key PHP files and executables in the following locations:

- `/usr/bin/php` — This executable calls the `php-cgi` binary for the configured PHP version. This allows you to configure PHP for web servers.
- `/usr/local/bin/php` — This executable calls the `php-cli` binary for the configured PHP version. This allows you to use PHP on the command line.
- `/usr/bin/lsphp` — This executable calls the `LSPHP` binary for the configured PHP version. This allows Litespeed to interact with PHP.
- `/usr/local/bin/ea-php##` — This symlink calls a specific `php-cli` binary, where `##` represents the two-digit PHP version.
- `/usr/bin/ea-php##` — This symlink calls a specific `php-cgi` binary, where `##` represents the two-digit PHP version.
- `/etc/cpanel/ea4/php.conf` — This file contains the details of your PHP configuration. We **strongly** recommend that you do **not** edit this file manually, and instead use WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM » Home » Software » MultiPHP Manager_) or [the `rebuild_phpconf` script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/).
- `/opt/cpanel/ea-php##/root/etc/php.d/` — The system scans this directory for PHP `.ini` files. In this example, `##` represents the two-digit PHP version.

For more information about PHP in EasyApache 4, read our [About PHP](https://docs.cpanel.net/ea4/php/about-php/), [Advanced PHP Configuration](https://docs.cpanel.net/ea4/php/advanced-php-configuration), and [EasyApache 4 and the ea-php-cli Package](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package) documentation. For more information about PHP inheritance, read our [PHP Inheritance](https://docs.cpanel.net/ea4/php/php-inheritance) documentation.

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [The rebuild\_phpconf Script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×