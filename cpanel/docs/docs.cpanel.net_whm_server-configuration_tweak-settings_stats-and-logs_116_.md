---
url: "https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/116/"
title: "Tweak Settings — Stats and Logs | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/116/#main-content)

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
4. Tweak Settings — Stats and Logs


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

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/116/#installation-toggle)

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

## Tweak Settings — Stats and Logs

![](https://docs.cpanel.net/img/whm-icons/tweak_settings.svg)

_Valid for version 116_

#### Version:

#### [110](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/110/)

#### [112](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/112/)

#### [116](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/116/)

#### [118](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/118/)

#### [120](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/120/)

#### [124](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/)

Last modified: _2024 October 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

The _Stats and Logs_ section includes the following settings:

| Setting | Description | Values | Default |
| --- | --- | --- | --- |
| _Allow users to update Awstats from cPanel_ | This setting controls whether cPanel users may update their AWStats software. | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |
| _Delete each domain’s access logs after statistics are gathered_ | This setting controls whether the system deletes each domain’s access log after it processes statistics. Enable this setting to help conserve disk space. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Archive logs in the user’s home directory at the end of each stats run unless configured by the user._ | This setting archives logs in the user’s home directory. The system archives the logs at the end of each statistics cycle. If you disable this option, the system will **not** archive logs unless the user has configured their settings to archive the logs. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Remove the previous month’s archived logs from the user’s home directory at the end of each month unless configured by the user._ | This setting controls whether the system removes the archived log files from the user’s home directory at the end of each month. If you disable this option, the system retains archived logs unless the user has configured their settings to remove the logs. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Extra CPUs for server load_ | This setting allows you to specify a value to add to the number of physical CPUs in your server. The sum of these two numbers becomes the value at which the `cpuwatch`, `cpanellogd`, `backups`, and CPU statistics daemons consider the system to be in a critical load state. | - _0_ — Don’t add the value.<br>- Select the text box and enter a value. | _0_ |
| _Keep master FTP log file_ | This setting controls whether the system deletes the `/usr/local/apache/domlogs/ftpxferlog` file whenever the system parses FTP logs. | - _On_ — Keep the file.<br>- _Off_ — Delete the file. | _Off_ |
| _Keep log files at the end of the month_ | This setting allows you to keep domain log files at the end of each month in the `/home/user/logs` directory. If you disable this option, the system deletes these log files.<br>Note:<br>- We **strongly** recommend that you disable this setting. Log files can quickly consume your server’s disk space.<br>- You **must** set the _Delete each domain’s access logs after statistics are gathered_ setting to _Off_ to toggle this setting. | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |
| _Keep stats logs_ | This setting allows you to retain the statistics log (`/usr/local/cpanel/logs/stats_log`) between cPanel & WHM restarts. If you use WHM’s [_cPanel Log Rotation Configuration_](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration/) interface ( _WHM » Home » Service Configuration » cPanel Log Rotation Configuration_) to archive the log on a monthly basis, the system may delete the log after it archives the log. | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |
| _Apache log file chmod value_ | This setting allows you to set the `chmod` value for the files that reside in the `/etc/apache2/domlogs` directory. The `chmod` value sets permissions for who can read, write to, and execute a file.<br>- For more information about the files that reside in the `/etc/apache2/domlogs` directory, read our [The cPanel & WHM Log Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files) documentation.<br>- For more information on the `chmod` command, run the `man chmod` command from the command line interface.<br>- For more information about file permissions, read [Wikipedia’s File-system permissions](https://en.wikipedia.org/wiki/File_system_permissions) article. | - _0640_ — A `chmod` value of `0640`.<br>- Select the text box and enter a value. | _0640_ |
| _Show bandwidth usage in megabytes by default in WHM_ | This setting allows you to specify whether WHM displays bandwidth usage in Megabytes (MB). | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |
| _Stats log level_ | This setting allows you to specify how much information the server should include in the `/usr/local/cpanel/logs/stats_log` file. Higher numbers indicate **greater** detail. | - _1_<br>- Select the text box and enter a value between `1` and `10`. | _1_ |
| _Log rotation size threshold_ | This setting allows you to specify a threshold above which the `cpanellogd` daemon rotates log files. This setting does **not** apply to the Apache `domlogs`. | - _300 MB_<br>- Select the text box and enter a value of `10` or greater. | _300 MB_ |
| _The interval, in days, to retain Exim stats in the database_ | This setting allows you to specify the number of days during which you wish to keep Exim statistics.<br>Note:<br>If you set this to a high value and your server has a high volume of email traffic, the _Mail Delivery Reports_ page in WHM may hang or load slowly. | - _10_<br>- Select the text box and enter a value between `1` and `365,000`. | _10_ |
| _The number of days to keep records of ModSecurity® rule hits. (Use zero to keep forever)._ | This setting allows you to specify the number of days that you wish to maintain your hits records in the `modsec` database. | - _7_<br>- Select the text box and enter a value.<br> If you set this option to `0`, the system will **not** purge hits records from the `modsec` database. | _7_ |
| _Number of days to retain upcp logs before purging them_ | This setting allows you to specify the number of days that you wish to retain logs from the nightly `upcp` maintenance script. | - _45_<br>- Select the text box and enter a value that is between `3` and `999`. | _45_ |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×