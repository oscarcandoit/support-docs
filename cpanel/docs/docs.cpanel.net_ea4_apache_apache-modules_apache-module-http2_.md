---
url: "https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/"
title: "Apache Module — HTTP2 | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/#main-content)

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
5. Apache Module — HTTP2


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
[Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/#compatibility) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/#how-to-install-or-uninstall-the-module) - [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/#installation-toggle)

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
[Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/#compatibility) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/#how-to-install-or-uninstall-the-module) - [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

## Apache Module — HTTP2

Last modified: _2025 February 20_

* * *

The `mod_http2` Apache module provides HTTP/2 support for the Apache HTTP server.

Important:

- Most browsers **only** support HTTP/2 via encrypted (https) connections.
- This module **only** works if you call it directly via Apache. Install the `ea-nginx-http2` package to use HTTP/2 with NGINX.
- HTTP/2 is resource intensive and can increase your server’s memory usage.

This module can increase the loading speed and security of your web pages.

* * *

### Requirements

This module requires EasyApache 4 and Apache 2.4.

### Compatibility

The `mod_http2` Apache module is **not** compatible with the [DSO PHP handler](https://docs.cpanel.net/ea4/php/php-handlers).
Also, the `mod_http2` Apache module is **not** compatible with these other Apache modules:

- `mod_mpm_itk`
- `mod_mpm_prefork`
- `mod_ruid2`

On new installations of cPanel & WHM, the system installs the `mod_mpm_prefork` module by default. To check the MPMs that your system uses, run the following command:

```bash
rpm -qa | grep mpm
```

The output may resemble the following example:

```bash
ea-apache24-mod_mpm_prefork-2.4.34-3.el7.cloudlinux.x86_64
```

* * *

## How to install or uninstall the module

You can install or uninstall the `mod_http2` Apache module in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_). If your server requires that you run websites as the user, you must also install the `mod_suexec` Apache module.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×