---
url: "https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/"
title: "Apps Managed by AppConfig | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [Development](https://docs.cpanel.net/whm/development/)
4. Apps Managed by AppConfig


[whmui](https://docs.cpanel.net/tags/whmui/) [cpanelplugins](https://docs.cpanel.net/tags/cpanelplugins/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/#overview)

* * *

[Interface tables](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/#interface-tables)

* * *

[The Registered Web Host Manager Applications table](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/#the-registered-web-host-manager-applications-table)

* * *

[Non-Web Host Manager application tables](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/#non-web-host-manager-application-tables)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/#overview)

* * *

[Interface tables](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/#interface-tables)

* * *

[The Registered Web Host Manager Applications table](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/#the-registered-web-host-manager-applications-table)

* * *

[Non-Web Host Manager application tables](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/#non-web-host-manager-application-tables)

* * *

## Apps Managed by AppConfig

_Valid for versions 110 through the latest version_

#### Version:

#### [110](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface displays applications that you have installed and registered with [AppConfig](https://api.docs.cpanel.net/guides/guide-to-whm-plugins/guide-to-whm-plugins-the-appconfig-system/). You can also view AppConfig application information if you run the [`/usr/local/cpanel/bin/show_appconfig`](https://api.docs.cpanel.net/guides/guide-to-whm-plugins/guide-to-whm-plugins-appconfig-checks/#list-registered-plugins) script on the command line.

## Interface tables

This interface displays the following tables:

- _Registered Web Host Manager Applications_ — WHM applications registered through AppConfig
- _Registered cPanel Applications_ — cPanel applications registered through AppConfig
- _Registered Webmail Applications_ — Webmail applications registered through AppConfig

If you have installed [WP Squared](https://docs.wpsquared.com/) on your server, this interface also displays the _Registered WP Squared Applications_ table.

### The Registered Web Host Manager Applications table

The _Registered Web Host Manager Applications_ table displays the application information in the following fields:

- _Name_ — The name of the application.
- _ACLS required_ — The [Access Control Lists (ACLs)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#access-control-list-acl) that the application requires to run.
- _System User_ — The user that runs the application.
- _URL(s)_ — The [Uniform Resource Locators (URLs)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#uniform-resource-locator-url) the application uses.
- _Origin_ — The origin of the application. This field displays either _internal_ for cPanel & WHM applications or the configuration file name for non-cPanel & WHM applications.
- _PHP Config_ — The path component of a PHP application’s [`php.ini`](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#the-php-ini-files) file.





Note:





By default, PHP-based AppConfig applications use the `/usr/local/cpanel/3rdparty/etc/php.ini` file.

- _Display Name_ – The name of the application in [the WHM interface](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/).
- _Entry URL_ — The URL to access the application in [the WHM interface](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/).

### Non-Web Host Manager application tables

The tables for non-Web Host Manager applications display the application information in the following fields:

- _Name_ — The name of the application.
- _Features required_ — The [features](https://docs.cpanel.net/whm/packages/feature-manager/) the application requires to run.
- _System User_ — The user that runs the application.
- _URL(s)_ — The [Uniform Resource Locators (URLs)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#uniform-resource-locator-url) the application uses.
- _Origin_ — The origin of the application. This field displays either _internal_ for cPanel & WHM applications or the configuration file name for non-cPanel & WHM applications.
- _PHP Config_ — The path component of a PHP application’s [`php.ini`](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#the-php-ini-files) file.





Note:





By default, PHP-based AppConfig applications use the `/usr/local/cpanel/3rdparty/etc/php.ini` file.


#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [API Shell for WHM](https://docs.cpanel.net/whm/development/api-shell-for-whm/)
- [cPanel Plugin File Generator](https://docs.cpanel.net/whm/development/cpanel-plugin-file-generator/)
- [Manage API Tokens in WHM](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/)
- [Manage Hooks](https://docs.cpanel.net/whm/development/manage-hooks/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×