---
url: "https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/120/"
title: "Tweak Settings — Notifications | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/120/#main-content)

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
4. Tweak Settings — Notifications


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

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/120/#installation-toggle)

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

## Tweak Settings — Notifications

![](https://docs.cpanel.net/img/whm-icons/tweak_settings.svg)

_Valid for versions 120 through 122_

#### Version:

#### [110](https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/110/)

#### [112](https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/112/)

#### [116](https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/116/)

#### [118](https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/118/)

#### [120](https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/120/)

#### [124](https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/)

Last modified: _2024 October 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

The _Notifications_ section includes the following settings:

| Setting | Description | Values | Default |
| --- | --- | --- | --- |
| _System disk space usage warnings_ | This setting allows you to enable disk space usage warnings. When you enable disk space usage warnings, these settings become available:<br>- _Account system disk usage “warn” percentage_<br>- _Account system disk usage “critical” percentage_ | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Account system disk usage “warn” percentage_ | This setting allows you to specify the threshold at which a system’s disk usage enters the _warn_ state, or to disable this notification. | - _Disable this notification_ — This option disables the setting.<br>- _82.55%_ — Enter the _warn_ state at 82.55% used.<br>- Select the text box and enter a value. This option accepts a minimum value of `1`. | _82.55%_ |
| _Account system disk usage “critical” percentage_ | This setting allows you to specify the threshold at which a system’s disk usage enters the _critical_ state, or to disable this notification. | - _Disable this notification_ — This option disables the setting.<br>- _92.55%_ — Enter the _critical_ state at 92.55% used.<br>- Select the text box and enter a value. This option accepts a minimum value of `1`. | _92.55%_ |
| _Disk quota usage warnings_ | This setting allows you to enable disk quota usage warnings. The system sends these warnings to cPanel users who approach their disk space quota. After you enable disk space usage warnings, these disk quota usage settings become available:<br>- _Account disk quota “warn” percentage_<br>- _Notify admin or reseller when disk quota reaches “warn” state_<br>- _Account disk quota “critical” percentage_<br>- _Notify admin or reseller when disk quota reaches “critical” state_<br>- _Account disk quota “full” percentage_<br>- _Notify admin or reseller when disk quota reaches “full” state_ | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Out of memory warnings_ | This setting allows you to enable out of memory warnings. The system sends these warnings to cPanel users whose processes run out of sufficient memory space. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Account disk quota “warn” percentage_ | This setting allows you to specify the threshold at which a user’s disk quota usage enters the _warn_ state, or to disable this notification. | - _Disabled_ — This option disables the setting.<br>- _80%_ — Enter the _warn_ state at 80% used.<br>- Select the text box and enter a value. This option accepts a minimum value of `1`. | _80%_ |
| _Notify admin or reseller when disk quota reaches “warn” state_ | This setting allows you to specify whether the server sends a notification to the owner of the cPanel account when it reaches the _warn_ state. | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |
| _Account disk quota “critical” percentage_ | This setting allows you to specify the threshold at which a user’s disk quota usage enters the _critical_ state, or to disable this notification. | - _Disabled_ — This option disables the setting.<br>- _90%_ — Enter the _critical_ state at 90% used.<br>- Select the text box and enter a value. This option accepts a minimum value of `1`. | _90%_ |
| _Notify admin or reseller when disk quota reaches “critical” state_ | This setting allows you to specify whether the server sends a notification to the owner of the cPanel account when it reaches the _critical_ state. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Account disk quota “full” percentage_ | This setting allows you to specify the threshold at which a user’s disk quota usage enters the _full_ state, or to disable this notification. | - _Disabled_ — This option disables the setting.<br>- _98%_ — Enter the _critical_ state at 98% used.<br>- Select the text box and enter a value. This option accepts a minimum value of `1`. | _98%_ |
| _Notify admin or reseller when disk quota reaches “full” state_ | This setting allows you to specify whether the server sends a notification to the owner of the cPanel account when it reaches the _full_ state. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Enable mailbox usage warnings_ | This setting allows you to enable mailbox usage warnings. The system sends these warnings to cPanel users whose mailboxes are almost full.<br>After you enable mailbox usage warnings, these settings become available:<br>- _Mailbox disk quota “warn” percentage_<br>- _Mailbox disk quota “critical” percentage_<br>- _Mailbox disk quota “full” percentage_<br>This setting controls whether the _Any of my account’s email accounts approaches or is over quota_ setting appears in cPanel’s [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information) interface ( _cPanel » Home » Preferences » Contact Information_). | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |
| _Mailbox disk quota “warn” percentage_ | This setting allows you to specify the threshold at which a user’s mailbox enters the _warn_ state. The system sends this notification to the email account. | - _Disable this notification_ — This option disables the setting.<br>- _80%_ — Enter the _warn_ state at 80% used.<br>- Select the text box and enter a value. This option accepts a minimum value of `1`. | _80%_ |
| _Mailbox disk quota “critical” percentage_ | This setting allows you to specify the threshold at which a user’s mailbox enters the _critical_ state. The system sends this notification to the email account. | - _Disable this notification_ — This option disables the setting.<br>- _90%_ — Enter the _critical_ state at 90% used.<br>- Select the text box and enter a value. This option accepts a minimum value of `1`. | _90%_ |
| _Mailbox disk quota “full” percentage_ | This setting allows you to specify the threshold at which a user’s mailbox enters the _full_ state. The system sends this notification to the cPanel [default email account](https://docs.cpanel.net/cpanel/email/email-accounts/). | - _Disable this notification_ — This option disables the setting.<br>- _98%_ — Enter the _full_ state at 98% used.<br>- Select the text box and enter a value. This option accepts a minimum value of `1`. | _98%_ |
| _Bandwidth limit check_ | This setting allows you to select whether to automatically suspend HTTP service for accounts that exceed their bandwidth limit. If you disable this option, the system will cease all bandwidth notifications and handle all accounts as though they possess unlimited bandwidth. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Send notifications when certificates approach expiry._ | This setting allows you to specify whether the server sends a notification when an SSL certificate approaches expiry. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Send bandwidth limit notification emails_ | This setting allows you to specify whether the server sends notification emails to accounts that approach their bandwidth limits.<br>After you enable this setting, these settings become available:<br>- _Bandwidth usage warning: 70%_<br>- _Bandwidth usage warning: 75%_<br>- _Bandwidth usage warning: 80%_<br>- _Bandwidth usage warning: 85%_<br>- _Bandwidth usage warning: 90%_<br>- _Bandwidth usage warning: 95%_<br>- _Bandwidth usage warning: 97%_<br>- _Bandwidth usage warning: 98%_<br>- _Bandwidth usage warning: 99%_ | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Bandwidth usage warning: 70%_ | This setting allows you to specify whether to send an email notification to users who have used 70% of their bandwidth. | - _On_ — Send.<br>- _Off_ — Don’t send. | _Off_ |
| _Bandwidth usage warning: 75%_ | This setting allows you to specify whether to send an email notification to users who have used 75% of their bandwidth. | - _On_ — Send.<br>- _Off_ — Don’t send. | _Off_ |
| _Bandwidth usage warning: 80%_ | This setting allows you to specify whether to send an email notification to users who have used 80% of their bandwidth. | - _On_ — Send.<br>- _Off_ — Don’t send. | _On_ |
| _Bandwidth usage warning: 85%_ | This setting allows you to specify whether to send an email notification to users who have used 85% of their bandwidth. | - _On_ — Send.<br>- _Off_ — Don’t send. | _Off_ |
| _Bandwidth usage warning: 90%_ | This setting allows you to specify whether to send an email notification to users who have used 90% of their bandwidth. | - _On_ — Send.<br>- _Off_ — Don’t send. | _Off_ |
| _Bandwidth usage warning: 95%_ | This setting allows you to specify whether to send an email notification to users who have used 95% of their bandwidth. | - _On_ — Send.<br>- _Off_ — Don’t send. | _Off_ |
| _Bandwidth usage warning: 97%_ | This setting allows you to specify whether to send an email notification to users who have used 97% of their bandwidth. | - _On_ — Send.<br>- _Off_ — Don’t send. | _Off_ |
| _Bandwidth usage warning: 98%_ | This setting allows you to specify whether to send an email notification to users who have used 98% of their bandwidth. | - _On_ — Send.<br>- _Off_ — Don’t send. | _Off_ |
| _Bandwidth usage warning: 99%_ | This setting allows you to specify whether to send an email notification to users who have used 99% of their bandwidth. | - _On_ — Send.<br>- _Off_ — Don’t send. | _Off_ |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×