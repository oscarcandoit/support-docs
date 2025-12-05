---
url: "https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/118/"
title: "Tweak Settings — Compression | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/118/#main-content)

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
4. Tweak Settings — Compression


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

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/118/#installation-toggle)

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

## Tweak Settings — Compression

![](https://docs.cpanel.net/img/whm-icons/tweak_settings.svg)

_Valid for version 118_

#### Version:

#### [110](https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/110/)

#### [112](https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/112/)

#### [116](https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/116/)

#### [118](https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/118/)

#### [120](https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/120/)

#### [124](https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/)

Last modified: _2024 October 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

The _Compression_ section includes the following settings:

| Setting | Description | Values | Default |
| --- | --- | --- | --- |
| _gzip compression level_ | This setting allows you to set the gzip compression level for pigz, which is a gzip-compatible program that uses multiple CPU cores simultaneously. Higher settings provide greater compression, but compress more slowly. | - Minimum value: `1`<br>- Maximum value: `9` | `6` |
| _Number of pigz processes_ | This setting allows you to set how many independent pigz processes the system uses to perform gzip compression. For the best performance, we recommend that you set this value to match the number of processor cores that are available on your server. | - Minimum value: `1`<br>- Maximum value: `128` | This setting defaults to the number of processor cores on your server. |
| _Number of kilobyte chunks per compression work unit_ | This setting allows you to control the size, in `1024`-byte chunks, of compression work units that the system distributes to each pigz process. | - Minimum value: `128`<br>- Maximum value: `524,288` | `4096` |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×