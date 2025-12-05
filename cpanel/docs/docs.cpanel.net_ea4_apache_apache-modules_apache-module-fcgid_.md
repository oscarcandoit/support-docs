---
url: "https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/"
title: "Apache Module — FCGId | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/#main-content)

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
3. [Apache](https://docs.cpanel.net/ea4/apache/)
4. [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/)
5. Apache Module — FCGId


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/) [apachemodule](https://docs.cpanel.net/tags/apachemodule/)

#### Table of Contents

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
[Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/#compatibility) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/#how-to-install-or-uninstall-the-module) - [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/#installation-toggle)

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
[Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/#compatibility) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/#how-to-install-or-uninstall-the-module) - [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

## Apache Module — FCGId

Last modified: _2025 February 19_

* * *

The `mod_fcgid` Apache module provides an alternative module to the `mod_cgi` Apache module.

Warning:

We **only** recommend the `mod_fcgid` Apache module for advanced system administrators who understand how to modify the module’s performance.

FCGId serves PHP applications through the `mod_fcgid` Apache module. This module launches multiple instances of a program to enable the system to handle multiple concurrent requests. EasyApache 4 supports FCGId on system without a PHP-FPM implementation.

* * *

### Requirements

This module has no known compatibility issues.

### Compatibility

You **cannot** use the `mod_fcgid` Apache module with the following features:

- The [`mod_ruid2`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2) Apache module
- The [`mod_mpm_itk`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk) Apache module.


* * *

## How to install or uninstall the module

You can install or uninstall the `mod_fcgid` Apache module in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×