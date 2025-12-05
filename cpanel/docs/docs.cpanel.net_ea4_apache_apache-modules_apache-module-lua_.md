---
url: "https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/"
title: "Apache Module — Lua | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/#main-content)

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
5. Apache Module — Lua


[apache](https://docs.cpanel.net/tags/apache/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/) [apachemodule](https://docs.cpanel.net/tags/apachemodule/)

#### Table of Contents

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
[Usage](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/#usage) [Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/#compatibility) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/#how-to-install-or-uninstall-the-module) - [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/#installation-toggle)

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
[Usage](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/#usage) [Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/#compatibility) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/#how-to-install-or-uninstall-the-module) - [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

## Apache Module — Lua

Last modified: _2025 February 19_

* * *

This module provides Lua hooks for `httpd` request processing.

## Usage

Use the `mod_lua` Apache module to extend your server with scripts in the Lua programming language.

Warning:

We strongly recommend that you do **not** use the `mod_lua` Apache module because it poses significant security risks.

* * *

### Requirements

This module has no requirements.

### Compatibility

This module has no known compatibility issues.

* * *

## How to install or uninstall the module

To install the `mod_lua` Apache module in EasyApache 4, run the following command:

| Operating System | Command |
| --- | --- |
| CentOS 7 | `yum install ea-apache24-mod_lua` |
| AlmaLinux OS and Rocky Linux™ | `dnf install ea-apache24-mod_lua` |
| Ubuntu® | `apt install --purge ea-apache24-mod-lua` |

Note:

EasyApache 4 disables the `mod_lua` Apache module by default. If you wish to enable this module, you **must** uncomment the `LoadModule` directive.

To uninstall the `mod_lua` Apache module in EasyApache 4, run the following command:

| Operating System | Command |
| --- | --- |
| CentOS 7 | `yum uninstall ea-apache24-mod_lua` |
| AlmaLinux OS and Rocky Linux™ | `dnf uninstall ea-apache24-mod_lua` |
| Ubuntu® | `apt purge ea-apache24-mod-lua` |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×