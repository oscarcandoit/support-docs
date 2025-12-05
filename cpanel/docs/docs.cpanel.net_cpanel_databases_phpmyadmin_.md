---
url: "https://docs.cpanel.net/cpanel/databases/phpmyadmin/"
title: "phpMyAdmin | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/databases/phpmyadmin/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Databases](https://docs.cpanel.net/cpanel/databases/)
4. phpMyAdmin


[databases](https://docs.cpanel.net/tags/databases/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/databases/phpmyadmin/#overview)

* * *

[MySQL 8.0 and higher caching](https://docs.cpanel.net/cpanel/databases/phpmyadmin/#mysql-80-and-higher-caching)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/databases/phpmyadmin/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/databases/phpmyadmin/#overview)

* * *

[MySQL 8.0 and higher caching](https://docs.cpanel.net/cpanel/databases/phpmyadmin/#mysql-80-and-higher-caching)

* * *

## phpMyAdmin

![](https://docs.cpanel.net/img/cpanel-icons/php_my_admin.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/databases/phpmyadmin/)

Last modified: _2024 November 8_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

phpMyAdmin is a third-party tool that you can use to manipulate MySQL® or MariaDB® databases. For example, you can use phpMyAdmin to add or delete records in a MySQL database. For more information about how to use phpMyAdmin, visit the [phpMyAdmin website](http://www.phpmyadmin.net/home_page/docs.php).

## MySQL 8.0 and higher caching

MySQL 8.0 and higher enables stats caching by default. This means that unless you configure MySQL, changes to your tables and their metadata may take up to 24 hours to appear in the phpMyAdmin tool. For example, if you remove data from a table, the table’s size will decrease, but the phpMyAdmin tool may continue to display the original table size for up to 24 hours.

To configure MySQL caching, use the `information_schema_stats_expiry` variable. For more information about how to use this variable, read MySQL’s [7.1.8 Server System Variables](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_information_schema_stats_expiry) documentation.

#### Additional Documentation

* * *

- [Database Wizard](https://docs.cpanel.net/cpanel/databases/database-wizard/)
- [Manage My Databases](https://docs.cpanel.net/cpanel/databases/manage-my-databases/)
- [MySQL® Database Wizard](https://docs.cpanel.net/cpanel/databases/mysql-database-wizard/)
- [MySQL® Databases](https://docs.cpanel.net/cpanel/databases/mysql-databases/)
- [MySQL® Manager](https://docs.cpanel.net/cpanel/databases/mysql-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×