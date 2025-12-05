---
url: "https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/"
title: "Apache Module — Brotli | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/#main-content)

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
5. Apache Module — Brotli


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
[Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/#compatibility) [Configuration](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/#configuration) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/#how-to-install-or-uninstall-the-module) - [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/#installation-toggle)

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
[Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/#compatibility) [Configuration](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/#configuration) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/#how-to-install-or-uninstall-the-module) - [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

## Apache Module — Brotli

Last modified: _2025 February 19_

* * *

The `mod_brotli` Apache module provides compression for the Apache HTTP server. For more information about using Brotli with NGINX®, read our [NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/#compression) documentation.

This module can increase the loading speed and security of your web pages.

Important:

If you install this module, it applies to all virtual hosts.

* * *

### Requirements

This module requires EasyApache 4, a secure (`https`) connection, and Apache 2.4.

### Compatibility

This module has no known compatibility issues.

* * *

### Configuration

cPanel & WHM sets the following configuration settings for the `mod_brotli` Apache module by default:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>AddOutputFilterByType BROTLI_COMPRESS text/plain text/css text/html application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript<br>SetOutputFilter BROTLI_COMPRESS<br>SetEnvIfNoCase Request_URI \.(?:gif|jpe?g|png)$ no-brotli<br>``` |

You can edit the `mod_brotli` Apache module’s `.conf` file in the `/etc/apache2/conf.d/brotli.conf` file. For more configuration information, read Apache’s [`mod_brotli`](https://httpd.apache.org/docs/current/mod/mod_brotli.html) documentation.

## How to install or uninstall the module

You can install or uninstall the `mod_brotli` Apache module in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×