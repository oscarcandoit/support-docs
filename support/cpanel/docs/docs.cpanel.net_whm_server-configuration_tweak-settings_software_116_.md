---
url: "https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/116/"
title: "Tweak Settings — Software | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/116/#main-content)

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
4. Tweak Settings — Software


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

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/116/#installation-toggle)

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

## Tweak Settings — Software

![](https://docs.cpanel.net/img/whm-icons/tweak_settings.svg)

_Valid for version 116_

#### Version:

#### [110](https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/110/)

#### [112](https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/112/)

#### [116](https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/116/)

#### [118](https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/118/)

#### [120](https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/120/)

#### [124](https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/)

Last modified: _2024 October 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

The _Software_ section includes the following settings:

| Setting | Description | Values | Default |
| --- | --- | --- | --- |
| _Dormant services_ | This setting configures the system to unload idle services from memory after up to ten minutes of inactivity. Then the system unloads listening devices that correspond to those services. This setting reduces memory usage, but delays responses from dormant services.<br>- If you enable this setting for a service, that service will immediately enter dormant mode whenever you reboot your server or restart the service.<br>- Tailwatch checks do **not** prevent or interrupt dormant mode. | You can enable this behavior for the following services:<br>- _cpdavd_ — cPanel’s WebDAV daemon.<br>- _cphulkd_ — cPanel’s brute force protection daemon.<br>- _cpsrvd_ — The cPanel & WHM service manager daemon.<br>- _dnsadmin_ — cPanel’s DNS management daemon. If your server uses a custom dnsadmin plugin, you **must** disable dormant mode for _dnsadmin_.<br>- _spamd_ — The Apache SpamAssassin™ daemon. | The system **enables** this setting for each service by default. |
| _Maintenance cPanel RPM Check_ | This setting allows you to specify whether the system runs the `/scripts/check_cpanel_pkgs` script to check cPanel RPMs for problems during nightly maintenance. If these checks encounter problems, the system sends a notification to the administrator. For more information, read our [The check\_cpanel\_pkgs Script](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script) documentation. | - _On_ — Enable.<br>- _Off_ — Disable. We **strongly** recommend that you **do not disable** this setting. If you disable this setting, the system does **not** check existing RPMs for problems during updates or maintenance. This could leave your system vulnerable to unnoticed tampering or other risks. | _On_ |
| _Maintenance cPanel RPM Digest Check_ | This setting allows you to specify whether the system runs a digest check against existing RPMs during nightly maintenance. This check ensures that RPM files are **not** corrupt and that nothing has tampered with them.<br>- This setting **only** appears if you enable the _Maintenance cPanel RPM Check_ setting.<br>- If you disable this setting, the system runs the `/scripts/check_cpanel_pkgs script` with the `--no-digest` option. For more information, read our [The check\_cpanel\_pkgs Script](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script) documentation.<br>- We strongly recommend that you enable this setting. If you disable this setting, the `/scripts/check_cpanel_pkgs` script only validates file sizes, so files may change without detection. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Enable phpMyAdmin information schema searches_ | This setting enables information schema searches by phpMyAdmin in MySQL.<br>- If between 100 and 1,000 databases exist on your server, you can disable this option to attempt to increase performance. However, you **must** log in to cPanel again to allow phpMyAdmin to display newly created databases.<br>- If more than 1,000 databases exist on your server, we recommend that you enable this setting. A system with a large number of databases may experience performance issues if you disable this setting. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×