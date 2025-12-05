---
url: "https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/"
title: "ModSecurity® 3 | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [Experimental Software](https://docs.cpanel.net/knowledge-base/experimental-software/)
4. ModSecurity® 3


[modsecurity](https://docs.cpanel.net/tags/modsecurity/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/#overview)

* * *

[Compatibility](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/#compatibility)

* * *

[Install ModSecurity 3](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/#install-modsecurity-3)

* * *

[Configuration files](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/#configuration-files)

* * *

[ModSecurity Rules](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/#modsecurity-rules)

* * *

[Differences between ModSecurity 2 and ModSecurity 3](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/#differences-between-modsecurity-2-and-modsecurity-3)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/#overview)

* * *

[Compatibility](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/#compatibility)

* * *

[Install ModSecurity 3](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/#install-modsecurity-3)

* * *

[Configuration files](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/#configuration-files)

* * *

[ModSecurity Rules](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/#modsecurity-rules)

* * *

[Differences between ModSecurity 2 and ModSecurity 3](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/#differences-between-modsecurity-2-and-modsecurity-3)

* * *

## ModSecurity® 3

_Valid for versions 112 through the latest version_

#### Version:

#### [92](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/92/)

#### [112](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/)

Last modified: _2023 April 4_

* * *

## Overview

ModSecurity 3 is a web application firewall. You can use ModSecurity on systems that run Apache and NGINX®. ModSecurity 3 is now a library, and you must install a connector for your web server in order for it to function.

## Compatibility

ModSecurity 3 is compatible with systems that run both Apache and NGINX.

Warning:

ModSecurity 3 is **experimental**. You **must** install the [Experimental Repository](https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/) to use it.

## Install ModSecurity 3

You can install ModSecurity 3 in two ways.

#### In the interface

Use the [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM > Home > Software » EasyApache 4_) to install the following packages:

1. Install one of the following connectors:
   - `ea-modsec30-connector-nginx` — Install this package if your system runs NGINX.
   - `ea-modsec30-connector-apache24` — Install this package if your system runs Apache.
2. Install the `ea-modsec30-rules-owasp-crs` package — This installs the OWASP rule set for ModSecurity 3.


#### On the command line

Run the following commands to install ModSecurity 3 on the command line:

1. Install one of the following connectors:
   - If your system runs NGINX, install the NGINX connector with the following command:



     ```bash
     yum install ea-modsec30-connector-nginx
     ```

   - If your system runs Apache, install the Apache connector with the following command:



     ```bash
     yum install ea-modsec30-connector-apache24
     ```
2. Run the following command to install the OWASP rule set:




```bash
yum install ea-modsec30-rules-owasp-crs
```


## Configuration files

Depending on which ModSecurity connector you use, the system uses different configuration file locations.

#### NGINX

If you install the NGINX connector, ModSecurity uses the following configuration files:

| Path | Description |
| --- | --- |
| `/etc/nginx/conf.d/modsec30.conf` | This file contains your ModSecurity default configuration and `Include` directives for the following `modsec30.cpanel.conf` and `modsec30.user.conf` files. |
| `/etc/nginx/conf.d/modsec/modsec30.cpanel.conf` | This file contains the custom configurations and rules you defined in the cPanel & WHM user interface. |
| `/etc/nginx/conf.d/modsec/modsec30.user.conf` | This file contains any ModSecurity settings that you cannot set via cPanel & WHM. You must edit this file manually if you wish to use it.<br>Important:<br>Use caution when you edit the `modsec30.user.conf` file, as unexpected results may occur. |
| `/etc/nginx/conf.d/modsec_vendor_configs/` | This directory contains your ModSecurity vendor configurations. |
| `/var/log/nginx/modsec30_audit/` | This directory contains the ModSecurity log files. |

Note:

ModSecurity uses concurrent logging with NGINX.

#### Apache

If you install the Apache connector, ModSecurity uses the following configuration files:

| Path | Description |
| --- | --- |
| `/etc/apache24/conf.d/modsec30.conf` | This file contains your ModSecurity default configuration and `Include` directives for the following `modsec2.cpanel.conf` and `modsec2.user.conf` files. |
| `/etc/apache2/conf.d/modsec2.cpanel.conf` | This file contains the custom configurations and rules you defined in the cPanel & WHM user interface. |
| `/etc/apache2/conf.d/modsec/modsec2.user.conf` | This file contains any ModSecurity settings that you cannot set via cPanel & WHM. You must edit this file manually if you wish to use it.<br>Important:<br>Use caution when you edit the `modsec2.user.conf` file, as unexpected results may occur. |
| `/etc/apache2/logs/modsec_audit/` | This directory contains the ModSecurity log files. |

Note:

- The Apache configuration file paths use `modsec2` in their naming convention due to limitations on the system.
- ModSecurity logs events concurrently in Apache when `mod_ruid2` or `mod_mpm_itk` are installed. If they are not installed, it uses serial logging.

## ModSecurity Rules

We provide the [OWASP® ModSecurity core rule set](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/) for ModSecurity 3 rules via RPM. You must install the `ea-modsec30-rules-owasp-crs` RPM to use it.

#### Third party rule sets

You can **only** install a third-party rule set if that rule set supports ModSecurity 3.

If you attempt to install an unsupported rule set in WHM’s [_ModSecurity® Vendors_](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/) interface ( _WHM » Home » Security Center » ModSecurity® Vendors_) with ModSecurity 3 installed, the system will disable the rule set and return an error in the interface.

#### Rules format

ModSecurity 3 formats its rules differently than ModSecurity 2.

## Differences between ModSecurity 2 and ModSecurity 3

There are several behavior differences between ModSecurity 2 and ModSecurity 3.

Important:

This list is **not** comprehensive.

#### Directives

ModSecurity 3 does **not** support the `SecDataDir` directive.

ModSecurity 3 with NGINX does **not** support the following directives:

- `SecConnEngine`
- `SecDisableBackendCompression`
- `SecDataDir`
- `SecGsbLookupDb`
- `SecGuardianLog`

#### Response codes

ModSecurity 3 with NGINX may return a [406 response code](https://tools.ietf.org/html/rfc7231#section-6.5.6) in situations where ModSecurity 2.9 would return a [403 response code](https://tools.ietf.org/html/rfc7231#section-6.5.3).

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [ModSecurity® Tools](https://docs.cpanel.net/whm/security-center/modsecurity-tools/)
- [ModSecurity® Vendors](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×