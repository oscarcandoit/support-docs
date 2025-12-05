---
url: "https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/118/"
title: "Tweak Settings — SQL | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/118/#main-content)

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
4. Tweak Settings — SQL


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

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/118/#installation-toggle)

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

## Tweak Settings — SQL

![](https://docs.cpanel.net/img/whm-icons/tweak_settings.svg)

_Valid for version 118_

#### Version:

#### [110](https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/110/)

#### [112](https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/112/)

#### [116](https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/116/)

#### [118](https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/118/)

#### [120](https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/120/)

#### [124](https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/)

Last modified: _2024 October 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

The _SQL_ section includes the following settings:

| Setting | Description | Values | Default |
| --- | --- | --- | --- |
| _Include databases in disk usage calculations_ | If you enable this setting, your server will include databases in disk usage calculations. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Use INFORMATION\_SCHEMA to acquire MySQL disk usage_ | This setting uses MySQL’s `INFORMATION_SCHEMA` view to include MySQL table disk usage when it calculates disk usage totals. This setting causes MySQL to become unresponsive until data collection finishes, which may degrade your system’s performance.<br>If you disable this setting, cPanel & WHM queries the filesystem for MySQL’s disk usage information. Table type usage and local configuration may cause inaccuracy in the disk usage totals. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Allow cPanel & WHM to determine the best value for your MySQL open\_files\_limit configuration?_ | This setting allows cPanel & WHM to determine the best value for your MySQL `open_files_limit` setting in the `/etc/systemd/system/` MySQL file. The system uses the total number of open tables in your databases to determine this value.<br>Newer versions of MySQL require additional file descriptors for each open table. A server with a large number of open tables (for example, servers with multiple installations of WordPress®) may require an `open_files_limit` value that is greater than the default value of `2048`. However, an extremely large `open_files_limit` setting requires more memory, and may cause performance issues.<br>We recommend that you do **not** manually adjust the `open_files_limit` setting in the `/etc/systemd/system/` MySQL file. If you manually adjust this setting and add more databases and tables, the system will **not** increase the limit. When you surpass the limit, you will receive an error. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Allow cPanel & WHM to determine the best value for your MySQL max\_allowed\_packet configuration?_ | This setting allows cPanel to determine the best value for your MySQL `max_allowed_packet` setting in your server’s `my.cnf` configuration file. The `max_allowed_packet` setting determines the maximum size of a single packet for any generated or intermediate string. The value of this setting must be large enough to properly handle very long `BLOB` columns or long strings. However, an extremely large `max_allowed_packet` setting may catch unnecessarily large packets, and may cause performance issues.<br>We recommend that you do **not** manually adjust the `max_allowed_packet` setting in your server’s `my.cnf` file. If you manually adjust this setting and add more databases and tables, the system will **not** increase the limit. When the system surpasses the limit, you will receive an error. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Allow cPanel & WHM to determine the best value for your MySQL innodb\_buffer\_pool\_size configuration?_ | This setting allows cPanel & WHM to determine the best value for your MySQL `innodb_buffer_pool_size` setting in your server’s `my.cnf` configuration file. The `innodb_buffer_pool_size` setting determines the size of the memory buffer in bytes that the InnoDB storage engine uses to cache data and indexes of its tables. However, an extremely large `innodb_buffer_pool_size` setting requires more memory and may cause performance issues. <br> We recommend that you do **not** manually adjust the `innodb_buffer_pool_size` setting in your server’s `my.cnf` file. If you manually adjust this setting and add more databases and tables, the system will **not** increase the limit. When you surpass the limit, you will receive an error. | - _On_ — Enable.<br>  <br>  If you select _On_ for this setting, the system uses the following defaults:<br>  - For servers with less than 512 Megabytes (MB) of RAM, the system sets the `innodb_buffer_pool_size` setting to 8 MB.<br>  - For servers with between 512 MB and 4 Gigabytes (GB) of RAM, the system sets the `innodb_buffer_pool_size` setting to a proportional value that is between 8 and 128 MB.<br>  - For servers with more than 4 GB of RAM, the system sets the `innodb_buffer_pool_size` setting to 128 MB.<br>- _Off_ — Disable. | _Off_ |
| _Require a username prefix on names of new databases and database users_ | When you enable database prefixing, the system prefixes database names and database usernames with a portion of the system username and an underscore.<br>- MySQL and PostgreSQL — The prefix uses the first eight characters of the system username and an underscore.<br>- MariaDB — The prefix uses the entire system username and an underscore.<br>This setting makes it easier for you to determine which user owns a given database. However, it reduces the number of characters that users can use for names of databases and database users.<br>- If you change the system account name, database names and database usernames that the account owns **do not** change.<br>- This setting is **global** and you **cannot** require prefixing selectively. However, you can create individual databases that do not require prefixing. To do this, disable this setting, create the desired databases, then enable this setting again. | - _On_ — Enable.<br>- _Off_ — Disable. This allows cPanel users to create individual databases without prefixes. After they create the databases, you can reenable the setting for your users’ accounts. | _On_ |
| _Force short prefix for MySQL and MariaDB databases_ | If you enable this setting, your server will limit MySQL and MariaDB database prefixes to eight characters. | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×