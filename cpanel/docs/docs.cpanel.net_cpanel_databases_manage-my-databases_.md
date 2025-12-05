---
url: "https://docs.cpanel.net/cpanel/databases/manage-my-databases/"
title: "Manage My Databases | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#main-content)

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
4. Manage My Databases


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [databases](https://docs.cpanel.net/tags/databases/) [mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#overview)

* * *

[Create a database](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#create-a-database)

* * *

[Remote Database Host](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#remote-database-host)

* * *

[Modify Databases](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#modify-databases)

* * *

[Check a database](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#check-a-database)

* * *

[Repair a database](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#repair-a-database)

* * *

[Current Databases](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#current-databases)

* * *

[Rename a database](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#rename-a-database)

* * *

[Delete a database](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#delete-a-database)

* * *

[Add a user](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#add-a-user)

* * *

[Add a user to a database](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#add-a-user-to-a-database)

* * *

[Current Users](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#current-users)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#overview)

* * *

[Create a database](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#create-a-database)

* * *

[Remote Database Host](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#remote-database-host)

* * *

[Modify Databases](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#modify-databases)

* * *

[Check a database](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#check-a-database)

* * *

[Repair a database](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#repair-a-database)

* * *

[Current Databases](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#current-databases)

* * *

[Rename a database](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#rename-a-database)

* * *

[Delete a database](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#delete-a-database)

* * *

[Add a user](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#add-a-user)

* * *

[Add a user to a database](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#add-a-user-to-a-database)

* * *

[Current Users](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#current-users)

* * *

## Manage My Databases

![](https://docs.cpanel.net/img/cpanel-icons/mysql_databases.svg)

_Valid for versions 132 through the latest version_

#### Version:

#### [120](https://docs.cpanel.net/cpanel/databases/manage-my-databases/120/)

#### [132](https://docs.cpanel.net/cpanel/databases/manage-my-databases/)

Last modified: _2025 July 22_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Use this interface to create, manage, and delete MySQL® or MariaDB® databases and database users.

Note:

In cPanel & WHM version 118 and earlier, we titled this interface [_MySQL® Databases_](https://docs.cpanel.net/cpanel/databases/mysql-databases).

A database name may contain a maximum of 64 characters.

- Due to the method that cPanel & WHM uses to store MySQL database names, each underscore character requires **two** characters of that limit.
- If you enable database prefixing, a database name may contain a maximum of **63 characters**, which includes the database prefix and the underscore character. Each additional underscore requires another **two** characters of that limit.

Note:

Use the _Force short prefix for MySQL and MariaDB databases_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM_ » _Home_ » _Server Configuration_ » _Tweak Settings_) to limit the database prefix to eight characters. For more information about MySQL and MariaDB® prefix settings, read our [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#sql) documentation.

Warning:

Enabling the _Force short prefix for MySQL and MariaDB databases_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM_ » _Home_ » _Server Configuration_ » _Tweak Settings_) will prevent you from creating new accounts that share the same first eight characters of their usernames.

To add or delete information in existing databases, copy a database, or run database queries and scripts, use cPanel’s [_phpMyAdmin_](https://docs.cpanel.net/cpanel/databases/phpmyadmin/) interface ( _cPanel » Home » Databases » phpMyAdmin_).

Warning:

**Don’t** use phpMyAdmin to create databases or database users. phpMyAdmin **doesn’t** [map databases](https://docs.cpanel.net/whm/sql-services/database-map-tool), which causes backups and restorations to not function.

Note:

We recommend that you use cPanel’s [_Database Wizard_](https://docs.cpanel.net/cpanel/databases/database-wizard) interface ( _cPanel » Home » Databases » Database Wizard_) to create your **first** database and user.

## Create a database

To create a database, perform the following steps:

1. In the _New Database_ text box, enter a name for the database.






Note:





If your hosting provider has enabled database prefixing, a prefix based on your account username and underscore character ( `_` ) will precede the _New Database_ text box. The system automatically prepends this prefix to the database name.

2. Click _Create Database_. A new interface will appear.
3. Click _Go Back_. The new database appears in the _Current Databases_ table.

To access and manage databases that you create, use the [_phpMyAdmin_](https://docs.cpanel.net/cpanel/databases/phpmyadmin/) interface ( _cPanel » Home » Databases » phpMyAdmin_). For information about how to use phpMyAdmin, visit the [phpMyAdmin website](http://www.phpmyadmin.net/home_page/docs.php).

## Remote Database Host

Note:

This section **only** appears if a remote MySQL or MariaDB configuration exists.

This section provides the remote database server’s address configured by your hosting provider. You can use this host to connect to the database server.

## Modify Databases

If you experience problems with a database, check your databases for errors.

### Check a database

To check a database for errors, perform the following steps:

1. In the _Check Database_ menu, select the database that you wish to check.
2. Click _Check Database_. A new interface will appear, and the system will check whether the database functions correctly.

   - If the system detects a problem in the database, it displays the name of the corrupt table.
   - If the _Check Complete_ message displays, the database functions correctly.
3. Click _Go Back_ to return to the main interface.

## Repair a database

If one of your databases becomes corrupt, you can attempt to repair it.

To repair a database, perform the following steps:

1. In the _Repair Database_ menu, select the database that you wish to repair.
2. Click _Repair Database_. A new interface will appear, and the system will attempt to automatically repair the database.

   - If the system cannot repair the database, it will attempt to determine the source of the corrupt data.
   - If the _Repair Complete_ message displays, the system successfully repaired the database.
3. Click _Go Back_ to return to the main interface.

## Current Databases

The _Current Databases_ table lists the following information for each database in your account:

- _Database_ — The name of the database. This is also the `DB_HOST` value.
- _Size_ — The size of the database.
- _Privileged Users_ — The users who can manipulate the database. These names are also `DB_USERNAME` values.






Note:





When you modify database users, make **certain** that you modify the user’s access to the correct database. Users may have access to more than one database.





  - To remove a user from a database, click the trash can icon (![trash can icon](https://docs.cpanel.net/img/trash.png)) for the desired user, and then click _Revoke User Privileges from Database_.
  - To modify a user’s [MySQL](http://dev.mysql.com/doc/) or [MariaDB](https://mariadb.com/kb/en/documentation/) privileges for a specific database, click the desired username, select and deselect checkboxes to configure the desired privileges, and then click _Make Changes_.
- _Actions_ — The available actions for this database. Click the appropriate icon in this column to rename or delete a database.

### Rename a database

Warning:

- It is potentially dangerous to rename a MySQL database. We **strongly** recommend that you perform a backup of the MySQL database in cPanel’s [Backup](https://docs.cpanel.net/cpanel/files/backup-for-cpanel) interface ( _cPanel » Home » Files » Backup_) before you attempt to rename it.
- When you rename a database, the system terminates all active connections to the database.
- You **must** manually update configuration files and applications to use the new database name.
- The system requires more time to rename larger and more complex databases.

To rename a database, perform the following steps:

1. In the _Current Databases_ table, click _Rename_ for the desired database.
2. Enter the new database name in the _New name_ text box.
3. Click _Proceed_.

MySQL does **not** allow you to rename a database. When cPanel & WHM “renames” a database, the system performs the following steps:

1. The system creates a new database.
2. The system moves data from the old database to the new database.
3. The system recreates grants and stored code in the new database.
4. The system deletes the old database and its grants.

Warning:

- If **any** of the first three steps fail, the system returns an error and attempts to restore the database’s original state. If the restoration process fails, the API function’s error response describes these additional failures.
- In rare cases, the system creates the second database successfully, but fails to delete the old database or grants. The system treats the rename action as a success; however, the API function returns warnings that describe the failure to delete the old database or grants.

### Delete a database

To delete a database, perform the following steps:

1. In the _Current Databases_ table, click _Delete_ for the desired database.
2. To permanently delete the database, click _Delete Database_.
3. Click _Go Back_ to return to the main interface.

## Add a user

After you create a database, add users to the database and configure their privileges.

Note:

- You **must** create MySQL user accounts separately from mail and web administrator accounts.
- You **must** create a user before you can add the user to an existing database.

To create a new user account, perform the following steps:

1. Enter a username in the _Username_ text box. To learn more about database username limits, click your database type:


```








           MySQL 5.7 and later



               MySQL 5.7 limits the database username to 32 characters. The system includes the database prefix (the first sixteen characters of the cPanel account’s username plus an underscore for a total of seventeen characters) in the character count for the username.

For example:



A MySQL database with the db_ prefix allows usernames that contain up to 29 characters.




A MySQL database with the example_ prefix allows usernames that contain up to 24 characters.



















           MariaDB



               MariaDB limits the database username to 47 characters. The system includes the database prefix (all of the cPanel account’s username and an underscore character) in the character count for the username.

For example:



A MariaDB database with the db_ prefix allows usernames that contain up to 44 characters.




A MariaDB database with the example_ prefix allows usernames that contain up to 39 characters.








```

2. Enter and confirm the new password in the appropriate text boxes.







Note:





- This value corresponds to the user’s `DB_PASSWORD` value. However, cPanel & WHM does **not** reveal this value. If you forget the value, you must [change the user’s password](https://docs.cpanel.net/cpanel/databases/manage-my-databases/#current-users).
- The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password.
- Some web hosts require a minimum password strength. A green _Strength_ meter indicates that the password is equal to or greater than the required password strength.
- Click _Password Generator_ to generate a strong password. For more information, read our [_Password & Security_](https://docs.cpanel.net/cpanel/preferences/password-and-security) documentation.

3. Click _Create User_.

4. Click _Go Back_ to return to the main interface.


## Add a user to a database

To add a user to a database, perform the following steps:

1. In the _Add User To Database_ section of the interface, select the desired user and database from the menus.
2. Click _Add_. The _MySQL Account Maintenance_ interface will appear.
3. Select the checkboxes that correspond to the privileges that you wish to grant to the user.






Note:





To grant all of the available privileges to the user, select the _ALL PRIVILEGES_ checkbox.

4. Click _Make Changes_.
5. Click _Go Back_ to return to the main interface.

For more information about user privileges, read the [MySQL](http://dev.mysql.com/doc/) or [MariaDB](https://mariadb.com/kb/en/documentation/) documentation.

## Current Users

The _Current Users_ table lists all of your database users, and allows you to perform the following actions:

- _Change Password_ — Click to modify a database user’s password. Enter and confirm the desired password, and then click _Change Password_.
- _Rename_ — Click to rename a database user. Enter the desired username, and then click _Change Username_.
- _Delete_ — Click to permanently delete a database user, and then click _Delete User_ to continue.

#### Additional Documentation

* * *

- [Database Wizard](https://docs.cpanel.net/cpanel/databases/database-wizard/)
- [MySQL® Database Wizard](https://docs.cpanel.net/cpanel/databases/mysql-database-wizard/)
- [MySQL® Databases](https://docs.cpanel.net/cpanel/databases/mysql-databases/)
- [MySQL® Manager](https://docs.cpanel.net/cpanel/databases/mysql-manager/)
- [Remote Database Access](https://docs.cpanel.net/cpanel/databases/remote-database-access/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×