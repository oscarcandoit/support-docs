---
url: "https://docs.cpanel.net/knowledge-base/sql/how-to-delete-a-mysql-database/"
title: "How to Delete a MySQL® Database | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/sql/how-to-delete-a-mysql-database/#main-content)

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
4. How to Delete a MySQL® Database


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [databases](https://docs.cpanel.net/tags/databases/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/sql/how-to-delete-a-mysql-database/#overview)

* * *

[Delete MySQL database](https://docs.cpanel.net/knowledge-base/sql/how-to-delete-a-mysql-database/#delete-mysql-database)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/sql/how-to-delete-a-mysql-database/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/sql/how-to-delete-a-mysql-database/#overview)

* * *

[Delete MySQL database](https://docs.cpanel.net/knowledge-base/sql/how-to-delete-a-mysql-database/#delete-mysql-database)

* * *

## How to Delete a MySQL® Database

Last modified: _2024 February 8_

* * *

## Overview

This document describes how to manually delete a MySQL® database from a cPanel & WHM server. This is useful if, for example, you converted your MySQL databases to a different database type, such as PostgreSQL® or SQLite.

Important:

- We **strongly** suggest that you first try to delete databases through cPanel’s [_Manage My Databases_](https://docs.cpanel.net/cpanel/databases/manage-my-databases/) interface. If you manually delete a cPanel user’s database, the database map will become corrupt. This will cause errors and failures in backups because the system cannot properly remove outdated backups.

## Delete MySQL database

To delete a MySQL database, perform the following steps:

1. Log in to the WHM interface as the `root` user.

2. Navigate to the _SQL Services_ section ( _WHM » Home » SQL Services_) and click _phpMyAdmin_. The _phpMyAdmin_ interface will appear.

3. In the far-left column, select the database that you wish to delete.

4. At the top of the interface, click _Operations_. A new interface will appear.

5. Under the _Remove database_ heading, click _Drop the database (DROP)_.

6. Click _OK_ to confirm that you wish to delete the database. A success message will appear.

7. If a cPanel user owned the database, navigate to cPanel’s [_Manage My Databases_](https://docs.cpanel.net/cpanel/databases/manage-my-databases/) interface and delete the database’s entry.


For more information about phpMyAdmin, visit the [PhpMyAdmin documentation](https://github.com/phpmyadmin/phpmyadmin/wiki).

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