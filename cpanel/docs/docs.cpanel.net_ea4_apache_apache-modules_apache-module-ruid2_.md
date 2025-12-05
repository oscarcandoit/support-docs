---
url: "https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/"
title: "Apache Module — Ruid2 | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/#main-content)

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
5. Apache Module — Ruid2


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)
[Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/#compatibility) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/#how-to-install-or-uninstall-the-module)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/#installation-toggle)

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)
[Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/#compatibility) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/#how-to-install-or-uninstall-the-module)

## Apache Module — Ruid2

Last modified: _2025 February 19_

* * *

The `mod_ruid2` Apache module is a per-request module that allows a domain’s HTTP requests to run as the owner of that domain. This module is similar to `suEXEC` and `suPHP`, but it applies to all HTTP requests.

The EasyApache 4 _Default_ profile installs this module by default with the [`mod_cgid` Apache module](https://docs.cpanel.net/ea4/php/php-handlers/#cgi).

* * *

## Requirements

This module does not possess any specific requirements.

## Compatibility

The `mod_ruid2` Apache module uses a complex security model and may introduce security issues if it is used with some other modules.

When you use this module, EasyApache **disables** the following Apache modules:

- `mod_cache`
- `mod_cache_disk`
- [`mod_fcgid`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid)
- `mod_lsapi`
- `mod_memcache`
- `mod_mpm_event`
- [`mod_mpm_itk`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk)
- `mod_mpm_worker`
- `mod_suphp`
- `mod_userdir`

#### Other considerations

If you use the `mod_ruid`2 Apache module, you **must** understand the following caveats:

- This module works with all PHP Handlers **except** the `mod_fcgid` Apache module. If you enable `mod_ruid2` while using `mod_fcgid`, the system will change your [PHP Hander](https://docs.cpanel.net/ea4/php/php-handlers/) to suPHP. If you enable the `mod_ruid2` Apache module, your PHP handler will **not** change unless you use the FCGId PHP handler.
- We recommend that you use this module if you use the CGI or DSO PHP handlers.
- For security reasons, the system **disables** the POSIX PHP extension when you use `mod_ruid2`.


* * *

## How to install or uninstall the module

You can install and uninstall the `mod_ruid2` Apache module in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×