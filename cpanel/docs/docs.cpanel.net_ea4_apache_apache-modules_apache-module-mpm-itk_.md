---
url: "https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/"
title: "Apache Module — MPM ITK | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/#main-content)

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
5. Apache Module — MPM ITK


[apache](https://docs.cpanel.net/tags/apache/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/) [apachemodule](https://docs.cpanel.net/tags/apachemodule/)

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
[Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/#compatibility) [setuid() and setgid() restrictions](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/#setuid-and-setgid-restrictions) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/#how-to-install-or-uninstall-the-module) - [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/#installation-toggle)

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
[Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/#compatibility) [setuid() and setgid() restrictions](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/#setuid-and-setgid-restrictions) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/#how-to-install-or-uninstall-the-module) - [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

## Apache Module — MPM ITK

Last modified: _2025 February 19_

* * *

The `mod_mpm_itk` Apache module causes the Apache process to switch to the domain owner’s user identifier (UID) and group identifier (GID) before it responds to the request. This allows each user to isolate their files from others with the standard file permission settings.

Note:

- To query all of the `SETUID` and `SETGID` values on a server, run the following command:



```bash
find / \( -path /proc -o -path /sys \) -prune -o -type f \( -perm -04000 -o -perm -02000 \) -exec ls -lg {} \;
```

- **Only** use this module if you run modules that do **not** require thread-aware code.

* * *

## Requirements

This module requires EasyApache 4, Apache 2.4, MPM Prefork, and the CGI PHP handler.

We **strongly** recommend that you **only** install the `mod_mpm_itk` Apache module on systems with Secure Computing Mode (seccomp v2) enabled in the kernel. You can run the following command to determine whether it’s enabled:

```bash
grep CONFIG_SECCOMP /boot/config-$(uname -r)
```

If Secure Computing Mode is enabled, the command should return an output similar to the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>/boot/config-4.18.0-553.8.1.el8_10.x86_64:CONFIG_SECCOMP_FILTER=y<br>/boot/config-4.18.0-553.8.1.el8_10.x86_64:CONFIG_SECCOMP=y<br>``` |

## Compatibility

The MPM ITK module is **not** compatible with the following functions:

- [`mod_http2`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2)
- [`mod_ruid2`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2)
- [`mod_fcgid`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid)
- `mod_userdir`
- `mod_suPHP`
- CloudLinux’s™ [PHP Selector](http://docs.cloudlinux.com/php_selector.html) feature
- cPanel’s [_Leech Protection_](https://docs.cpanel.net/cpanel/security/leech-protection) interface ( _cPanel » Home » Security » Leech Protection_)

Note:

If you select the _MPM ITK_ option, we **strongly** recommend that you remove the Leech Protection feature from your users’ feature lists. Use WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM » Home » Packages » Feature Manager_) to change your users’ feature lists.

### setuid() and setgid() restrictions

The MPM ITK Apache module implements restrictions on the use of the `setuid()` function and the `setgid()` function. As a result, scripts that depend on these functions may encounter problems. This includes scripts that use the `mail()` function, the `shell_exec` function, or the `sudo` command.

You can resolve these restrictions with one of the following methods:

- Don’t use the MPM ITK Apache module.
- Update your script to no longer require escalated privileges.
- Turn off security and allow users to execute scripts as the `root` user. You can allow users with UID or GID between `0` and `4294496296` to bypass security if you add the following code to your `/etc/apache2/conf.d/includes/pre_virtualhost_global.conf` file:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br><IfModule mpm_itk.c><br>LimitUIDRange 0 4294496296<br>LimitGIDRange 0 4294496296<br></IfModule><br>``` |


Warning:

We **strongly** recommend that you do **not** enable `root` privileges for your users. This action has major security implications and could endanger your server.

## How to install or uninstall the module

You can install and uninstall the `mod_mpm_itk` Apache module in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_).

Note:

The _cPanel Default + MPM ITK_ EasyApache 4 profile contains the `mod_mpm_itk` Apache module by default.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×