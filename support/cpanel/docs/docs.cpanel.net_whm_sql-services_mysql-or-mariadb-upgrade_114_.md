---
url: "https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/"
title: "MySQL/MariaDB Upgrade | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#main-content)

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
4. MySQL/MariaDB Upgrade


[mariadb](https://docs.cpanel.net/tags/mariadb/) [whmui](https://docs.cpanel.net/tags/whmui/) [mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#overview)

* * *

[Before installation](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#before-installation)

* * *

[Installation limitations](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#installation-limitations)

* * *

[CloudLinux’s MySQL Governor](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#cloudlinuxs-mysql-governor)

* * *

[The phpinfo file](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#the-phpinfo-file)

* * *

[Amazon Relational Database Service](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#amazon-relational-database-service)

* * *

[Available versions](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#available-versions)

* * *

[Upgrade or reinstall MySQL or MariaDB](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#upgrade-or-reinstall-mysql-or-mariadb)

* * *

[The MySQL Upgrade Checker Utility](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#the-mysql-upgrade-checker-utility)

* * *

[MySQL upgrade log](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#mysql-upgrade-log)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#overview)

* * *

[Before installation](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#before-installation)

* * *

[Installation limitations](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#installation-limitations)

* * *

[CloudLinux’s MySQL Governor](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#cloudlinuxs-mysql-governor)

* * *

[The phpinfo file](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#the-phpinfo-file)

* * *

[Amazon Relational Database Service](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#amazon-relational-database-service)

* * *

[Available versions](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#available-versions)

* * *

[Upgrade or reinstall MySQL or MariaDB](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#upgrade-or-reinstall-mysql-or-mariadb)

* * *

[The MySQL Upgrade Checker Utility](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#the-mysql-upgrade-checker-utility)

* * *

[MySQL upgrade log](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/#mysql-upgrade-log)

* * *

## MySQL/MariaDB Upgrade

![](https://docs.cpanel.net/img/whm-icons/mysql_mariadb_upgrade.svg)

_Valid for versions 114 through 116_

#### Version:

#### [102](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/102/)

#### [114](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/114/)

#### [118](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows the `root` user or resellers with `root`-level privileges to manage MySQL® or MariaDB® version upgrades (for example, when you upgrade from MySQL 5.7 to 8.0). After you select your server’s MySQL or MariaDB version, WHM automatically keeps your database engine up-to-date. This means, for example, that whenever the vendor releases a new patch for your server’s version of MySQL or MariaDB, WHM automatically applies the patch to your installation.

## Before installation

Back up your server’s databases before you upgrade its database version or change to MariaDB.

### Installation limitations

When upgrading or installing MySQL or MariaDB, the following limitations apply:

- The system considers MariaDB to be an upgrade from MySQL. If you change the database engine to MariaDB, you **cannot** change back to MySQL.
- We do **not** support the use of MySQL’s [sha256\_password](https://dev.mysql.com/doc/refman/5.7/en/sha256-pluggable-authentication.html) plugin for MySQL 5.7, MySQL 8, MariaDB 10.2, or MariaDB 10.3.
- This feature does not support downgrades of database engine versions. We **strongly** recommend that you do not attempt to downgrade MySQL or MariaDB.

### CloudLinux’s MySQL Governor

If CloudLinux’s™ MySQL Governor exists on your server, MySQL upgrades will **not** work via this interface. If you wish to remove MySQL Governor, read CloudLinux’s [MySQL Governor](https://docs.cloudlinux.com/cloudlinux_os_components/#mysql-governor) documentation and research how this affects you.

### The phpinfo file

The `phpinfo` file may display a different version of MySQL than the version that you select.

- The API version that you see in the `phpinfo` file is the built-in MySQL API that PHP includes.
- If the `buildapache` application uses the MySQL libraries and headers on the server itself, and you change the MySQL version, Apache cannot function correctly. Because cPanel & WHM updates MySQL RPMs whenever Red Hat releases updates, this could automatically break thousands of servers within a few hours. For this reason, WebPros International, LLC always builds Apache and PHP with the `-builtin` option.

### Amazon Relational Database Service

You can use MySQL version 5.7 or 8.0 on Amazon Relational Database™ Service (RDS) servers. We do **not** support MariaDB on Amazon RDS servers.

## Available versions

The following versions of MySQL are available:

- MySQL 8.0

The following versions of MariaDB are available:

- MariaDB 10.3
- MariaDB 10.5
- MariaDB 10.6
- MariaDB 10.11

Note:

We will **only** support long-term release versions of MariaDB starting after MariaDB 10.6. For more information on MariaDB release cycles, read the [MariaDB](https://mariadb.com/kb/en/mariadb-server-release-dates/) documentation.

## Upgrade or reinstall MySQL or MariaDB

Warning:

- You **cannot** upgrade MySQL 8 to MariaDB 10.x due to [incompatibilities between these versions](https://mariadb.com/kb/en/incompatibilities-and-feature-differences-between-mariadb-105-and-mysql-80/#incompatibilities). For more information, read [MariaDB’s](https://mariadb.com/kb/en/upgrading-from-mysql-to-mariadb/) documentation.
- System administrators can choose either MySQL or MariaDB before starting the cPanel & WHM installation process. For more information, read our [Installation Guide](https://docs.cpanel.net/installation-guide/customize-your-installation/#the-mysql-version-key).

To upgrade or reinstall your server’s version of MySQL or MariaDB, perform the following steps:

1. Select the version of MySQL or MariaDB that you wish to upgrade or reinstall.
2. Click _Continue_. A new interface will appear with warning messages, and the system will validate the `/etc/my.cnf` file.
3. Select the checkbox next to each warning to acknowledge that you are aware of the potential consequences of the upgrade.
4. Click _Continue_.
5. Select the type of upgrade that you wish to perform:
   - _Unattended Upgrade_ — This option automatically upgrades MySQL or MariaDB.
   - _Interactive Upgrade_ — This option steps you through the MySQL or MariaDB upgrade process.
6. Click _Continue_. The upgrade process interface will appear.

   - Select or deselect the _Autoscroll output_ checkbox to change whether the output display scrolls as the upgrade runs.
   - If you selected the _Interactive Upgrade_ type on the previous screen, the interface will prompt you to continue through each step as the upgrade progresses. The interface may also provide instructions for additional tasks that you may need to complete before continuing through the upgrade.
7. When the upgrade finishes, the interface will display a message. The message will say whether the upgrade succeeded or errors exist that you will need to address to complete the upgrade.

### The MySQL Upgrade Checker Utility

The _MySQL Upgrade Checker Utility_ tool checks whether a MySQL database upgrade will work on the current MySQL version.

To run the _MySQL Upgrade Checker Utility_ tool, perform the following steps:

1. Click _Install and Run Checker_. A progress window will appear, and it will display the results of the upgrade check.
2. Resolve any upgrade check issues.
3. Click _Re-Run Checker_ to run the _MySQL Upgrade Checker_ utility again.
4. Continue your MySQL upgrade if there are no new issues.

## MySQL upgrade log

The system stores the MySQL and MariaDB log files in the `/var/cpanel/logs` directory. The log files use the `mysql_upgrade_log.YYYYMMDD-hhmmss` naming convention with the following designators:

- `YYYY` — Four-digit year.

- `MM` — Two-digit month.

- `DD` — Two-digit day.

- `hh` — Two-digit hour.

- `mm` — Two-digit minute.

- `ss` — Two-digit second.


#### Additional Documentation

* * *

- [Additional MySQL Access Hosts](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/)
- [Change MySQL User Password](https://docs.cpanel.net/whm/sql-services/change-mysql-user-password/)
- [Database Map Tool](https://docs.cpanel.net/whm/sql-services/database-map-tool/)
- [Manage MySQL® Profiles](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/)
- [MySQL/MariaDB Upgrade](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×