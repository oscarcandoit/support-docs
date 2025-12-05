---
url: "https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/"
title: "Apache Module — cPanel | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/#main-content)

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
5. Apache Module — cPanel


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
[Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/#compatibility) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/#how-to-install-or-uninstall-the-module) - [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/#installation-toggle)

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
[Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/#compatibility) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/#how-to-install-or-uninstall-the-module) - [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

## Apache Module — cPanel

Last modified: _2025 February 19_

* * *

Important:

- The `mod_cpanel` Apache module has reached End-of-Life (EOL).
- This module is **not** available on systems that run the Ubuntu® operating system.

The `mod_cpanel` Apache module **replaces** the _Optimize .htaccess (AllowOverride)_ feature that existed in the [_Global Configuration_](https://docs.cpanel.net/whm/service-configuration/global-configuration) section of WHM’s [_Apache Configuration_](https://docs.cpanel.net/whm/service-configuration/apache-configuration) interface ( _WHM » Home » Service Configuration » Apache Configuration_). We **removed** the _Optimize .htaccess_ feature with the release of [TSR-2018-0002](https://forums.cpanel.net/threads/cpanel-tsr-2018-0002-full-disclosure.624723/). This module also redirects any requests sent to a suspended user’s files.

Use the `mod_cpanel` Apache module to improve how Apache processes requests. This module caches requests for `.htaccess` files that do not exist, which allows Apache to skip these files when it processes later requests.

* * *

### Requirements

This module requires EasyApache 4 and Apache 2.4 or later.

### Compatibility

- The `mod_cpanel` Apache module has reached End-of-Life (EOL).
- This module is **not** available on systems that run the Ubuntu® operating system.

* * *

## How to install or uninstall the module

You can install or uninstall the `mod_cpanel` Apache module in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×