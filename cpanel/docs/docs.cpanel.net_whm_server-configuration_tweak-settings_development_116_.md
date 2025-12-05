---
url: "https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/116/"
title: "Tweak Settings — Development | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/116/#main-content)

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
4. Tweak Settings — Development


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

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/116/#installation-toggle)

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

## Tweak Settings — Development

![](https://docs.cpanel.net/img/whm-icons/tweak_settings.svg)

_Valid for version 116_

#### Version:

#### [110](https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/110/)

#### [112](https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/112/)

#### [116](https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/116/)

#### [118](https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/118/)

#### [120](https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/120/)

#### [124](https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/)

Last modified: _2024 October 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

The _Development_ section includes the following settings:

| Setting | Description | Values | Default |
| --- | --- | --- | --- |
| _Standardized Hooks - Debug Mode_ | The Standardized Hooks system’s debug mode helps to troubleshoot hook issues. For more information, read our [Guide to Standardized Hooks - Debug Mode](https://api.docs.cpanel.net/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-debug-mode/) documentation.<br>- If instead of this setting, you use the `/var/cpanel/debughooks` file to enable debug mode, your locale may revert to the English defaults for JavaScript elements. To fix this problem, run the `echo -n > /var/cpanel/debughooks` and `/scripts/restartsrv_cpsrvd` commands to disable debug mode and restart the `cpsrvd` daemon.<br>Important:<br>If you enable this setting, it also enables debug mode in the cPanel interface. This **severely** impacts the loading and performance of the cPanel interface. We recommend that you **disable** this setting when you do not need it. | - _Debug mode is off._ — The system does not display debug information or log it to the error log. <br>- _Debug mode is on. The system displays information about a hook while it executes, but does not log debug data to the error log._<br>- _Debug mode is on. The system displays information about a hook while it executes and logs debug data to the error log._ — This setting outputs a **large** amount of data.<br>- _Debug mode is on. The system displays information about every stage for every hookable event, even if no hooks exist for that stage._ — This setting outputs a **large** amount of data. | _Debug mode is off._ |
| _User Interface - Debug Mode_ | This setting changes the way the system generates user interfaces. For example, it disables optimizations such as minifications and cache-busting. | - _Debug mode is off._ — The system does **not** display debug information or log it to the error log. <br>- _Debug mode is on._ — The system displays information and logs it to the error log. | _Debug mode is off._ |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×