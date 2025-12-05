---
url: "https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/"
title: "Apache Modules | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/#main-content)

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
4. Apache Modules


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
[Overview](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/#overview) - [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/#installation-toggle)

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
[Overview](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/#overview) - [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

## Apache Modules

Last modified: _2025 February 19_

* * *

## Overview

Apache modules add functionality to your apache web server. This guide contains documentation for the following modules:

| Module | Description |
| --- | --- |
| [`mod_brotli`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/) | The `mod_brotli` Apache module provides compression for the Apache HTTP server. |
| [`mod_cpanel`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/) | The `mod_cpanel` Apache module replaces the _Optimize .htaccess (AllowOverride)_ feature. |
| [`mod_evasive`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/) | The `mod_evasive` Apache module provides DoS, DDoS, and brute force attack protection. |
| [`mod_fcgid`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/) | The `mod_fcgid` Apache module provides an alternative module to the mod\_cgi Apache module. |
| [`mod_http2`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/) | The `mod_http2` Apache module provides HTTP/2 support for the Apache HTTP server. |
| [`mod_lua`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/) | The `mod_http2` Apache module provides Lua hooks for `httpd` request processing. |
| [`mod_security2`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/) | The `mod_security2` Apache module provides the ModSecurity web application firewall for Apache. |
| [`modsec-sdbm-util`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/) | The ModSecurity SDBM utility module provides the ability to purge expired entries from the `/var/cpanel/secdatadir/ip.pag` cache file. |
| [`mod_mpm_itk`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/) | The` mod_mpm_itk` Apache module causes the Apache process to switch to the domain owner’s user identifier (UID) and group identifier (GID) before it responds to the request. |
| [`mod_ruid2`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/) | The `mod_ruid2` Apache module is a per-request module that allows a domain’s HTTP requests to run as the owner of that domain. |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×

![Cookiebot session tracker icon loaded](https://imgsct.cookiebot.com/1.gif?dgi=da52fc49-8e48-42b7-9ad3-c219404f6f92)