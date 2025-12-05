---
url: "https://docs.cpanel.net/ea4/php/php-8/"
title: "PHP 8 | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/php/php-8/#main-content)

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
3. [PHP](https://docs.cpanel.net/ea4/php/)
4. PHP 8


[php](https://docs.cpanel.net/tags/php/) [ea4](https://docs.cpanel.net/tags/ea4/) [phpoptions](https://docs.cpanel.net/tags/phpoptions/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/php/php-8/#overview)

* * *

[Benefits of PHP 8](https://docs.cpanel.net/ea4/php/php-8/#benefits-of-php-8)

* * *

[Currently unavailable in PHP 8](https://docs.cpanel.net/ea4/php/php-8/#currently-unavailable-in-php-8)

* * *

[Incompatible with PHP 8](https://docs.cpanel.net/ea4/php/php-8/#incompatible-with-php-8)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/php/php-8/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/php/php-8/#overview)

* * *

[Benefits of PHP 8](https://docs.cpanel.net/ea4/php/php-8/#benefits-of-php-8)

* * *

[Currently unavailable in PHP 8](https://docs.cpanel.net/ea4/php/php-8/#currently-unavailable-in-php-8)

* * *

[Incompatible with PHP 8](https://docs.cpanel.net/ea4/php/php-8/#incompatible-with-php-8)

* * *

## PHP 8

Last modified: _2024 August 30_

* * *

## Overview

This document discusses the key changes and limitations of PHP 8 in EasyApache 4. PHP 8 is the most recent major version released by [php.net](https://php.net/). It provides a number of updates and improvements over previous versions of PHP.

Note:

PHP 8 is **only** available on servers that run the CentOS 7, [Ubuntu®](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/), [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/), or [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/) operating systems.

For a complete list of changes, including the new features and any breaking changes, read PHP’s [Upgrade Notes](https://github.com/php/php-src/blob/master/UPGRADING).

## Benefits of PHP 8

PHP 8 adds the following features:

- Support for Union types — Union types allow you to assign multiple types to a parameter, property, or return.
- The Just in Time (JIT) compiler — The JIT compiler will compile parts of your code at runtime, in order to improve the response time of your web pages.
- [Named arguments](https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments) — Named arguments allow you to assign a name to input data and call that in your code, rather than the order of the argument.
- Attributes — Attributes act as an annotation in your PHP code, which allows you to add metadata.

## Currently unavailable in PHP 8

The following extensions and modules are **not** currently available for PHP 8:

- [PHP-PSR](https://github.com/jbboehr/php-psr)
- [Snuffleupagus](https://snuffleupagus.readthedocs.io/)
- [Phalcon 4](https://docs.phalcon.io/4.1/en/introduction)
- [ionCube 10](https://www.ioncube.com/php_encoder.php)
- [ionCube 11](https://www.ioncube.com/php_encoder.php)
- [Memcache](https://www.php.net/manual/en/book.memcache.php)

## Incompatible with PHP 8

The following software currently does **not** work with PHP 8. This list is **not** comprehensive.

- [DSO](https://docs.cpanel.net/ea4/php/php-handlers/#dso) — cPanel & WHM does **not** support the DSO handler with PHP 8.0 and higher.
- The [XMLRPC](https://www.php.net/manual/en/book.xmlrpc.php) extensions — This extension moved to PECL.
- The [JSON](https://www.php.net/manual/en/book.json.php) extension — This functionality is included in PHP 8 by default.

#### Additional Documentation

* * *

- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)
- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [PHP Extensions and Applications Package](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/)
- [The rebuild\_phpconf Script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×