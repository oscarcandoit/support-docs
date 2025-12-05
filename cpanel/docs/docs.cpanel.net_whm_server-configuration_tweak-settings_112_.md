---
url: "https://docs.cpanel.net/whm/server-configuration/tweak-settings/112/"
title: "Tweak Settings | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/tweak-settings/112/#main-content)

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
3. [Server Configuration](https://docs.cpanel.net/whm/server-configuration/)
4. Tweak Settings


[server](https://docs.cpanel.net/tags/server/) [whmui](https://docs.cpanel.net/tags/whmui/) [jupiter](https://docs.cpanel.net/tags/jupiter/)

#### Table of Contents

- [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/)
- [Compression](https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/)
- [cPAddons Site Software](https://docs.cpanel.net/whm/server-configuration/tweak-settings/cpaddons-site-software/)
- [Development](https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/)
- [Display](https://docs.cpanel.net/whm/server-configuration/tweak-settings/display/)
- [Domains](https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/)
- [Logging](https://docs.cpanel.net/whm/server-configuration/tweak-settings/logging/)
- [Mail](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/)
- [Notifications](https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/)
- [Packages](https://docs.cpanel.net/whm/server-configuration/tweak-settings/packages/)
- [PHP](https://docs.cpanel.net/whm/server-configuration/tweak-settings/php/)
- [Redirection](https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/)
- [Security](https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/)
- [Software](https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/)
- [SQL](https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/)
- [Stats and Logs](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/)
- [Stats Programs](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-programs/)
- [Status](https://docs.cpanel.net/whm/server-configuration/tweak-settings/status/)
- [Support](https://docs.cpanel.net/whm/server-configuration/tweak-settings/support/)
- [System](https://docs.cpanel.net/whm/server-configuration/tweak-settings/system/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/tweak-settings/112/#installation-toggle)

- [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/)
- [Compression](https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/)
- [cPAddons Site Software](https://docs.cpanel.net/whm/server-configuration/tweak-settings/cpaddons-site-software/)
- [Development](https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/)
- [Display](https://docs.cpanel.net/whm/server-configuration/tweak-settings/display/)
- [Domains](https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/)
- [Logging](https://docs.cpanel.net/whm/server-configuration/tweak-settings/logging/)
- [Mail](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/)
- [Notifications](https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/)
- [Packages](https://docs.cpanel.net/whm/server-configuration/tweak-settings/packages/)
- [PHP](https://docs.cpanel.net/whm/server-configuration/tweak-settings/php/)
- [Redirection](https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/)
- [Security](https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/)
- [Software](https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/)
- [SQL](https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/)
- [Stats and Logs](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/)
- [Stats Programs](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-programs/)
- [Status](https://docs.cpanel.net/whm/server-configuration/tweak-settings/status/)
- [Support](https://docs.cpanel.net/whm/server-configuration/tweak-settings/support/)
- [System](https://docs.cpanel.net/whm/server-configuration/tweak-settings/system/)

## Tweak Settings

![](https://docs.cpanel.net/img/whm-icons/tweak_settings.svg)

_Valid for versions 112 through 114_

#### Version:

#### [110](https://docs.cpanel.net/whm/server-configuration/tweak-settings/110/)

#### [112](https://docs.cpanel.net/whm/server-configuration/tweak-settings/112/)

#### [116](https://docs.cpanel.net/whm/server-configuration/tweak-settings/116/)

#### [118](https://docs.cpanel.net/whm/server-configuration/tweak-settings/118/)

#### [120](https://docs.cpanel.net/whm/server-configuration/tweak-settings/120/)

#### [124](https://docs.cpanel.net/whm/server-configuration/tweak-settings/124/)

#### [130](https://docs.cpanel.net/whm/server-configuration/tweak-settings/)

Last modified: _2024 October 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to configure many cPanel & WHM settings. Tabs at the top of the interface categorize the settings, and the _All_ tab displays all of the settings.

Note:

- These settings exist in the [`/var/cpanel/cpanel.config`](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file) file. However, we recommend that system administrators use this interface to make changes.

- Some settings may not appear if your server does not use the _Standard_ server profile. For more information, read our [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/) documentation.

- Click the question mark next to each setting’s description to learn more about the setting.

- The interface displays a warning icon (![yellow warning icon](https://docs.cpanel.net/img/yellow-warning.png)) next to any setting for which you have not specified a value. This includes settings that are new, settings that WHM has set to a default value, and settings that your server selected dynamically.


This interface contains the following sections:

- [Compression](https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/112)
- [cPAddons Site Software](https://docs.cpanel.net/whm/server-configuration/tweak-settings/cpaddons-site-software/112)
- [Development](https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/)
- [Display](https://docs.cpanel.net/whm/server-configuration/tweak-settings/display/112)
- [Domains](https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/112)
- [Logging](https://docs.cpanel.net/whm/server-configuration/tweak-settings/logging/112)
- [Mail](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/112)
- [Notifications](https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/112)
- [Packages](https://docs.cpanel.net/whm/server-configuration/tweak-settings/packages/112)
- [PHP](https://docs.cpanel.net/whm/server-configuration/tweak-settings/php/112)
- [Redirection](https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/112)
- [Security](https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/112)
- [Software](https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/112)
- [SQL](https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/112)
- [Stats and Logs](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/112)
- [Stats Programs](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-programs/112)
- [Status](https://docs.cpanel.net/whm/server-configuration/tweak-settings/status/112)
- [Support](https://docs.cpanel.net/whm/server-configuration/tweak-settings/support/112)
- [System](https://docs.cpanel.net/whm/server-configuration/tweak-settings/system/112)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×