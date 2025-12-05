---
url: "https://docs.cpanel.net/whm/sql-services/edit-sql-configuration/104/"
title: "Edit SQL Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/sql-services/edit-sql-configuration/104/#main-content)

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
3. [SQL Services](https://docs.cpanel.net/whm/sql-services/)
4. Edit SQL Configuration


[databases](https://docs.cpanel.net/tags/databases/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/sql-services/edit-sql-configuration/104/#overview)

* * *

[Database Optimization](https://docs.cpanel.net/whm/sql-services/edit-sql-configuration/104/#database-optimization)

* * *

[Configuration Settings for MySQL and MariaDB](https://docs.cpanel.net/whm/sql-services/edit-sql-configuration/104/#configuration-settings-for-mysql-and-mariadb)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/sql-services/edit-sql-configuration/104/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/sql-services/edit-sql-configuration/104/#overview)

* * *

[Database Optimization](https://docs.cpanel.net/whm/sql-services/edit-sql-configuration/104/#database-optimization)

* * *

[Configuration Settings for MySQL and MariaDB](https://docs.cpanel.net/whm/sql-services/edit-sql-configuration/104/#configuration-settings-for-mysql-and-mariadb)

* * *

## Edit SQL Configuration

![](https://docs.cpanel.net/img/whm-icons/wh_sql_config.svg)

_Valid for versions 104 through 112_

#### Version:

#### [104](https://docs.cpanel.net/whm/sql-services/edit-sql-configuration/104/)

#### [114](https://docs.cpanel.net/whm/sql-services/edit-sql-configuration/)

Last modified: _2025 June 6_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to make changes to your MySQL® or MariaDB® configuration. Changes you make in this interface will cause the MySQL or MariaDB services to restart.

Note:

- Not all settings are available in all versions of MySQL or MariaDB.

- This interface accepts values with the following file size units:
  - K — Kilobytes
  - M — Megabytes
  - G — Gigabytes
  - P — Petabytes
  - E — Exabytes
- This interface defaults to bytes if the user does not specify a file size unit.


## Database Optimization

This interface suggests optimized database values for you based on your MySQL or MariaDB usage. You can also manually apply the suggested optimizations to individual settings.

Important:

These optimizations are general suggestions and may not result in increased database performance for all use cases.

Note:

- Click the document (![document icon](https://docs.cpanel.net/img/file-settings-line.png)) icon to restore a setting to its default values.
- Click the arrow (![curved arrow icon](https://docs.cpanel.net/img/arrow-go-back-line.png)) icon to revert a setting to its previous value.

To apply the suggested optimizations for your database, perform the following steps:

1. Click the _Review Suggestions_ button. The _Confirm Changes_ interface will appear.
2. Click the _Save_ button if you are satisfied with the suggested database settings.

To manually apply optimization suggestions to individual settings, perform the following steps:

1. Click the gauge (![gauge icon](https://docs.cpanel.net/img/guage1.png)) icon. The _Optimization_ menu will appear.
2. Click _Apply Optimization_.
3. Click the _Save_ button located at the bottom of the _Edit SQL_ interface.

## Configuration Settings for MySQL and MariaDB

You can use this interface to adjust the following settings:

| Setting | Description | Values | Default |
| --- | --- | --- | --- |
| _General Logging_ | This setting enables or disables the [general query log](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_general_query_log). The query log contains information for data processed by the MySQL server. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_general_log) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#general_log). | - _Enable_<br>- _Disable_ | _Disable_ |
| _General Log File_ | This setting allows you to specify a custom name for the general log file. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_general_log_file) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#general_log_file). | A text string. | `server_hostname.log` |
| _InnoDB Buffer Pool Chunk Size_ | This setting defines the size of the buffer that InnoDB uses to write to the log files on disk. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_buffer_pool_chunk_size) and [MariaDB](https://mariadb.com/kb/en/innodb-system-variables/#innodb_buffer_pool_chunk_size). <br>Note:<br>MariaDB **only** supports this setting on versions 10.2 and later. | - Minimum value: `1M`<br>- Maximum value: `8E` | `128M` |
| _InnoDB Buffer Pool Instances_ | This setting specifies the number of InnoDB buffer pool instances. InnoDB Buffer Pool Instances help reduce contention and improve concurrency. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_buffer_pool_instances) and [MariaDB](https://mariadb.com/kb/en/innodb-system-variables/#innodb_buffer_pool_instances). <br>Note:<br>- This setting **only** takes effect when setting the InnoDB buffer pool size to 1GB or more.<br>- MariaDB deprecated this setting in version 10.5.<br>- MariaDB removed this setting in version 10.6. | - Minimum value: `1`<br>- Maximum value: `64` | `1` |
| _InnoDB Buffer Pool Size_ | This setting defines the InnoDB buffer pool size. The InnoDB buffer pool is the memory area where InnoDB caches table and index data. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_buffer_pool_chunk_size) and [MariaDB](https://mariadb.com/kb/en/innodb-system-variables/#innodb_buffer_pool_chunk_size). | - Minimum value: `5M`<br>- Maximum value: `8E`<br>- A small buffer pool can cause pages to leave and join the buffer pool too often. <br>-  A buffer pool that is too large may cause swapping due to competition for memory. <br>- We recommend keeping the buffer pool size between 50 to 85% of the total physical memory available. | `128M` |
| _InnoDB Log Buffer Size_ | This setting allows you to specify the InnoDB log buffer size. The InnoDB log buffer holds data in memory before the system writes it to the log files. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_log_buffer_size) and [MariaDB](https://mariadb.com/docs/reference/mdb/system-variables/innodb_log_buffer_size/). | - Minimum value: `5M`<br>- Maximum value: `8E` | `16M` |
| _InnoDB Log File Size_ | The InnoDB log file defines the size of each log file. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_log_file) and [MariaDB](https://mariadb.com/kb/en/innodb-system-variables/#innodb_log_file_size). | - Minimum value: `4M`<br>- Maximum value: `16E` | `48M` |
| _InnoDB Sort Buffer Size_ | This setting defines the size of the InnoDB sort buffer. The InnoDB sort buffer sets the following values: <br>- The sort buffer size for [online DDL](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_online_ddl) operations that create or rebuild secondary indexes.<br>- The length of the temporary log file when recording concurrent [DML](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_dml).<br>- The size of the temporary log file read buffer and write buffer.<br> This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_sort_buffer_size) and [MariaDB](https://mariadb.com/kb/en/innodb-system-variables/#innodb_sort_buffer_size). | - Minimum value: `64K`<br>- Maximum value: `64M` | `1M` |
| _Interactive Timeout_ | This setting allows you to specify the number of seconds the server waits for an idle connection before closing it. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_interactive_timeout) and [MariaDB](https://mariadb.com/docs/reference/mdb/system-variables/interactive_timeout/). | - Minimum value: `1`<br>- Maximum value: `31536000` | `28` |
| _Join Buffer Size_ | This setting defines the minimum size of the buffer for plain [index](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_index) scans, range index scans, and [joins](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_join) that perform full [table](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_table) scans. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_join_buffer_size) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#join_buffer_size). | - Minimum value: `128`<br>- Maximum value: `15E` | `256K` |
| _Key Buffer Size_ | The key buffer size is the size of the buffer used for index blocks. The key buffer is also known as the key cache. The key buffer holds the [index](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_index) blocks used by [MyISAM](https://mariadb.com/kb/en/myisam/) tables. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_key_buffer_size) and [MariaDB](https://mariadb.com/kb/en/myisam-system-variables/#key_buffer_size). | - Minimum value: `8`<br>- Maximum value: `3G` | `128M` |
| _Error Log File Name_ | This setting allows you to specify the name of the Error Log. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_log_error) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#log_error). | A text string. | `/var/log/mysqld.log` |
| _Error Log Verbosity_ | This setting allows you to specify the level of verbosity in the error log. <br>Note:<br>This setting is **only** available on MySQL version 5.7 or later. This setting is not available on MariaDB. | - `1`<br>- `2`<br>- `3`<br> For more information, read the [MySQL Log Error Verbosity](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_log_error_verbosity) documentation. | `3` |
| _Log Warnings_ | This setting allows you to specify which additional warnings are logged. Larger numbers increase verbosity. This setting is available in MySQL and MariaDB. | A valid log warning value. For more information about log warning values, read the [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_log_warnings) or [MariaDB](https://mariadb.com/kb/en/server-system-variables/#log_warnings) log warning documentation. | `2` |
| _Log Output_ | This setting allows you to specify the format of the general log and slow query log output. More than one setting can be active. This setting is available in MySQL and MariaDB. | - _File_<br>- _Table_<br>- _None_<br> For more information about log output values, read the [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_log_output) or [MariaDB](https://mariadb.com/kb/en/server-system-variables/#log_output) log out put documentation. | _File_ |
| _Long Query Time_ | This setting specifies the maximum number of seconds a query can run before it is logged to the slow query log file. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_long_query_time) and [MariaDB](https://mariadb.com/docs/reference/mdb/system-variables/long_query_time/). <br>Note:<br>This setting accepts decimal values and has microsecond precision. | - Minimum value: `0`<br>- Maximum value: `30` | `10` |
| _Max Allowed Packet_ | This setting allows you to specify the maximum size of one packet or any generated/intermediate string. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_allowed_packet) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#max_allowed_packet). | - Minimum value: `1K`<br>- Maximum value: `1G` | `256M` |
| _Max Connect Errors_ | This setting allows you to specify the number of failed connection attempts before the server blocks the connection. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_connect_errors) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#max_connect_errors). <br>Note:<br>This setting does not protect against brute force attempts. | - Minimum value: `1`<br>- Maximum value: `4294967295` | `100` |
| _Max Connections_ | This setting allows you to specify the maximum number of concurrent [client](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_client) connections. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_connections) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#max_connections). | - Minimum value: `0`<br>- Maximum value: `100000` | `151` |
| _Max Heap Table Size_ | This setting allows you to specify the maximum size to which user-created [MEMORY](https://mariadb.com/kb/en/memory-storage-engine/) tables are permitted to grow. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_heap_table_size) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#max_heap_table_size). | - Minimum value: `16K`<br>- Maximum value: `3G` | `3G` |
| _Open Files Limit_ | This setting allows you to specify the maximum number of [file descriptors](https://en.wikipedia.org/wiki/File_descriptor) available for use. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_open_files_limit) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#open_files_limit). | - Minimum value: `0`<br>- Maximum value: `4294967295` | `40` |
| _Performance Schema_ | The Performance Schema is a tool to help a database administrator do performance tuning. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/performance-schema.html) and [MariaDB](https://mariadb.com/kb/en/performance-schema-overview/). <br>Note:<br>All MySQL Performance Schema settings also work in MariaDB. | - _Enable_<br>- _Disable_ | _Disable_ |
| _Query Cache Size_ | This setting allows you to specify the amount of memory reserved for caching query results. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_query_cache_size) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#query_cache_size). <br>Note:<br>MySQL deprecated this setting in version 5.7. | - Minimum value: `0`<br>- Maximum value: `16E` | `1M` |
| _Query Cache Type_ | This setting determines query cache behavior for all clients that connect to the server. This setting is available in MySQL and MariaDB. | - `0`<br>- `1`<br>- `2`<br> For more information on query cache type values, read the [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_query_cache_type) or [MariaDB](https://mariadb.com/kb/en/server-system-variables/#query_cache_type) query cache type documentation. | `0` |
| _Read Buffer Size_ | This setting does the following: <br>- Each [thread](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_thread) that does a sequential scan for a [MyISAM](https://mariadb.com/kb/en/myisam/) table allocates a buffer of this size for each table it scans.<br>- Determines the memory block size for [MEMORY](https://dev.mysql.com/doc/refman/5.7/en/memory-storage-engine.html) tables.<br> This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_read_buffer_size) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#read_buffer_size). | - Minimum value: `8K`<br>- Maximum value: `1G` | `128K` |
| _Read Random Buffer Size_ | This setting allows you to specify the size of the read random buffer. The read random buffer reads rows from the [MyISAM](https://mariadb.com/kb/en/myisam/) table in sorted order after a key sort. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_read_rnd_buffer_size) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#read_rnd_buffer_size). | - Minimum value: `8K`<br>- Maximum value: `1G` | `256K` |
| _Slow Query Log_ | This setting allows you to enable or disable the slow query log. Enable the slow query log to find queries that take a long time to execute. The slow query log consists of the following: <br>- SQL statements that take more than the specified [long query time](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_long_query_time) seconds to execute.<br>- Queries that examine fewer than the [min\_examined\_row\_limit](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_min_examined_row_limit) value.<br> This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_slow_query_log) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#slow_query_log). | - _Enable_<br>- _Disable_ | _Disable_ |
| _Slow Query Log File Name_ | This setting allows you to specify the name or full path of the slow query log file. | The name or full path of the slow query log file. | `server_hostname-slow.log` |
| _Sort Buffer Size_ | This setting defines the following: <br>- The sort buffer size for [online DDL](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_online_ddl) operations that create or rebuild secondary indexes.<br>- The amount by which the temporary log file is extended when recording concurrent DML during an online DDL operation, and the size of the temporary log file read buffer and write buffer.<br> For more information about sort buffer size, read the [MySQL](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_sort_buffer_size) or [MariaDB](https://mariadb.com/kb/en/server-system-variables/#sort_buffer_size) documentation. | - Minimum value: `32K`<br>- Maximum value: `16E` | `256K` |
| _SQL Mode_ | MySQL and MariaDB can apply different SQL Modes depending on the value of this setting. | A comma-delimited list of modes to activate. For more information about SQL Mode values, read the [MySQL](https://dev.mysql.com/doc/refman/5.7/en/sql-mode.html) or [MariaDB](https://mariadb.com/kb/en/sql-mode/) SQL Mode documentation. | Click the link to [download the default settings](https://docs.cpanel.net/whm/sql-services/edit-sql-configuration/default_settings.tar.gz). |
| _Thread Cache Size_ | This setting allows you to specify the number of [threads](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_thread) the server stores in a [cache](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_cache) to use. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_thread_cache_size) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#thread_cache_size) | - Minimum value: `0`<br>- Maximum value: `16K` | `256` |
| _Temporary Table Size_ | This setting allows you to specify the size of internal, in-memory, temporary tables. The temporary table size does not apply to user-created [MEMORY](https://mariadb.com/kb/en/memory-storage-engine/) tables. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_tmp_table_size) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#tmp_table_size). <br>Note:<br>The value of `Max Heap Table Size` will override this setting if it is a smaller value. | - Minimum value: `1K`<br>- Maximum value: `3G` | `16M` |
| _Wait Timeout_ | This setting allows you to specify the maximum number of seconds the server waits on an idle connection before closing it. This setting is available in [MySQL](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_wait_timeout) and [MariaDB](https://mariadb.com/kb/en/server-system-variables/#wait_timeout) | - Minimum value: `1`<br>- Maximum value: `31536000` | `28800` |

#### Additional Documentation

* * *

- [Additional MySQL Access Hosts](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/)
- [Change MySQL User Password](https://docs.cpanel.net/whm/sql-services/change-mysql-user-password/)
- [Configure PostgreSQL](https://docs.cpanel.net/whm/sql-services/configure-postgresql/)
- [Database Map Tool](https://docs.cpanel.net/whm/sql-services/database-map-tool/)
- [Edit SQL Configuration](https://docs.cpanel.net/whm/sql-services/edit-sql-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×