---
url: "https://docs.cpanel.net/knowledge-base/sql/how-to-enable-the-slow-query-log-in-mysql-or-mariadb/"
title: "How to Enable the Slow Query Log in MySQL® or MariaDB | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/sql/how-to-enable-the-slow-query-log-in-mysql-or-mariadb/#main-content)

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
3. [SQL](https://docs.cpanel.net/knowledge-base/sql/)
4. How to Enable the Slow Query Log in MySQL® or MariaDB


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [databases](https://docs.cpanel.net/tags/databases/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/sql/how-to-enable-the-slow-query-log-in-mysql-or-mariadb/#overview)

* * *

[Enable the Slow Query Log](https://docs.cpanel.net/knowledge-base/sql/how-to-enable-the-slow-query-log-in-mysql-or-mariadb/#enable-the-slow-query-log)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/sql/how-to-enable-the-slow-query-log-in-mysql-or-mariadb/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/sql/how-to-enable-the-slow-query-log-in-mysql-or-mariadb/#overview)

* * *

[Enable the Slow Query Log](https://docs.cpanel.net/knowledge-base/sql/how-to-enable-the-slow-query-log-in-mysql-or-mariadb/#enable-the-slow-query-log)

* * *

## How to Enable the Slow Query Log in MySQL® or MariaDB

Last modified: _2023 May 31_

* * *

## Overview

Enabling the Slow Query Log for MySQL® or MariaDB can be a useful tool to diagnose performance and efficiency issues affecting your server. By identifying queries that are particularly slow in their execution, you can address them by restructuring the application that triggers your queries. You can also rebuild the queries themselves to ensure that they are constructed as efficiently as possible.

For more information about the MySQL slow query log, read the [MySQL 5.7 Reference Manual: The Slow Query Log](https://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html) documentation.

## Enable the Slow Query Log

To enable the Slow Query Log for MySQL or MariaDB:

1. Log in to your server as the `root` user via SSH.
2. Open the `my.cnf` file with a text editor and add the following block of code under the `mysqld` section:


```bash
slow_query_log = 1
slow-query_log_file = /var/log/mysql-slow.log
long_query_time = 2
```



   - In MySQL 5.6 and older, use the `log-slow-queries` variable instead of the `slow-query_log_file` variable.
   - In MariaDB 10.11 and later, they renamed the `slow_query_log` variable to the [`log_slow_query`](https://mariadb.com/kb/en/server-system-variables/#log_slow_query) variable.
   - In MariaDB 10.11 and later, they renamed the `long_query_time` variable to the [`log_slow_query_time`](https://mariadb.com/kb/en/server-system-variables/#log_slow_query_time) variable.
3. Create the `/var/log/mysql-slow.log` file and set its user as the `mysql` user. To do this, run the following commands:


```bash
touch /var/log/mysql-slow.log
chown mysql:mysql /var/log/mysql-slow.log
```

4. Restart MySQL or MariaDB. To do this, run the following command:


```bash
/usr/local/cpanel/scripts/restartsrv_mysql
```

5. Start monitoring the slow query logfile. To analyze and print the file’s summary, run the `mysqldumpslow` command. For example, to print all slow queries that the system previously recorded, run the following command:


```bash
mysqldumpslow -a /var/log/mysql-slow.log
```


For a complete list of options to use with the `mysqldumpslow` command, read MySQL’s [mysqldumpslow](https://dev.mysql.com/doc/refman/5.7/en/mysqldumpslow.html) article.

#### Additional Documentation

* * *

- [The dbmaptool Script](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/)
- [The dbstoregrants Script](https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script/)
- [The manage\_mysql\_profiles Script](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/)
- [The MysqlDump Stream](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/)
- [The rebuild\_dbmap Script](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×