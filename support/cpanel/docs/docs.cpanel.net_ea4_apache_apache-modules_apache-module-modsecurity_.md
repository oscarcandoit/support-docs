---
url: "https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/"
title: "Apache Module — ModSecurity® | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#main-content)

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
5. Apache Module — ModSecurity®


[modsecurity](https://docs.cpanel.net/tags/modsecurity/) [apache](https://docs.cpanel.net/tags/apache/) [ea4](https://docs.cpanel.net/tags/ea4/) [apachemodule](https://docs.cpanel.net/tags/apachemodule/)

#### Table of Contents

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
[Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#compatibility) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#how-to-install-or-uninstall-the-module) [Configuration](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#configuration) [Configuration details](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#configuration-details) [ModSecurity utilities](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#modsecurity-utilities) [ModSecurity SDBM](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#modsecurity-sdbm) [ModSecurity Audit Log Collector (mlogc)](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#modsecurity-audit-log-collector-mlogc) - [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#installation-toggle)

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
[Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#compatibility) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#how-to-install-or-uninstall-the-module) [Configuration](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#configuration) [Configuration details](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#configuration-details) [ModSecurity utilities](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#modsecurity-utilities) [ModSecurity SDBM](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#modsecurity-sdbm) [ModSecurity Audit Log Collector (mlogc)](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#modsecurity-audit-log-collector-mlogc) - [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

## Apache Module — ModSecurity®

Last modified: _2025 February 19_

* * *

The `mod_security2` Apache module provides the ModSecurity web application firewall for Apache.

Warning:

If your ruleset contains rule ID conflicts or syntactical errors, ModSecurity will fail and Apache will **not** start. For more information about how EasyApache handles issues with your ModSecurity rules, read the [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/#compatibility) section.

Use the `mod_security2` Apache module to install the ModSecurity web application firewall. You can configure this module to protect your Apache web applications from various attacks. The ModSecurity web application firewall also provides additional tools to monitor your Apache web server.

* * *

## Requirements

This module possesses no additional requirements.

## Compatibility

Major versions of the `mod_security2` Apache module use different syntaxes for ModSecurity rules.

Warning:

- No conversion utility exists to rewrite rules between versions.
- Minor versions of ModSecurity may also include syntactical changes that are incompatible with older rulesets.

* * *

## How to install or uninstall the module

You can install or uninstall the `mod_security2` Apache module in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).

Important:

After you install the `mod_security2` Apache module, you **must** configure the application in WHM’s [_ModSecurity® Configuration_](https://docs.cpanel.net/whm/security-center/modsecurity-configuration/) interface ( _WHM » Home » Security Center » ModSecurity® Configuration_).

## Configuration

EasyApache 4 enables the `mod_security2` Apache module for all virtual hosts by default, **except** for the default virtual host. You can configure your ModSecurity installation in WHM’s [_ModSecurity® Configuration_](https://docs.cpanel.net/whm/security-center/modsecurity-configuration/) interface ( _WHM » Home » Security Center » ModSecurity® Configuration_).

### Configuration details

When the `mod_ruid2` and `mod_mpm_itk` Apache modules are **not** installed, the `mod_security2` Apache module stores its log file in the `/etc/apache2/logs/modsec_audit.log` file.

Important:

- ModSecurity adds information to the log files as the user when the `mod_ruid2` and `mod_mpm_itk` Apache modules are installed. This action causes the system to use more disk space. The system logs this information concurrently to the following directory, where `username` represents the user’s username:



```bash
/etc/apache2/logs/modsec_audit/username
```

- EasyApache 4 installs the `mod_security2` Apache module with several include files.

When you install the `mod_security2` package, the installation places the following files into your `/etc/apache2/conf.d/` directory:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>/etc/apache2/conf.d<br>modsec2.user.conf<br>modsec2.cpanel.conf<br>``` |

When the system loads, it uses the `conf.d/*.conf` glob file to pull the files into your configuration.

The `/etc/apache2/conf.d/modsec2.conf` file contains the basic directives for the `mod_security2` Apache module, and the following `Include` directives:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>Include "/etc/apache2/conf.d/modsec/modsec2.user.conf"<br>Include "/etc/apache2/conf.d/modsec/modsec2.cpanel.conf"<br>``` |

The `/etc/apache2/conf.d/modsec/modsec2.user.conf` file contains the ModSecurity firewall application rules that you define.

Warning:

We strongly recommend that you do **not** use `Include` directives in the `modsec2.user.conf` file.

## ModSecurity utilities

### ModSecurity SDBM

cPanel & WHM provides the ModSecurity SDBM utility to purge expired entries from the `/var/cpanel/secdatadir/users/username/ip.pag` cache file, where `username` represents the cPanel username. For more information, read our [ModSecurity SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility) documentation.

### ModSecurity Audit Log Collector (mlogc)

cPanel & WHM includes the ModSecurity Audit Log Collector (mlogc) with the ModSecurity installation. Mlogc implements remote logging of your ModSecurity audit logs. For more information, read the [mlogc documentation](https://github.com/SpiderLabs/modsecurity-mlogc-ng).

You can also install or uninstall the `mlogc` module in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×