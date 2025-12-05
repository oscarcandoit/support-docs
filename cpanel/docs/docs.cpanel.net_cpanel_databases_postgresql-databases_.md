---
url: "https://docs.cpanel.net/cpanel/databases/postgresql-databases/"
title: "PostgreSQL Databases | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#main-content)

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
4. PostgreSQL Databases


[databases](https://docs.cpanel.net/tags/databases/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [postgresql](https://docs.cpanel.net/tags/postgresql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#overview)

* * *

[Create a database](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#create-a-database)

* * *

[Current Databases](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#current-databases)

* * *

[Remove a user](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#remove-a-user)

* * *

[Rename a database](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#rename-a-database)

* * *

[Delete a database](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#delete-a-database)

* * *

[Add a PostgreSQL user](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#add-a-postgresql-user)

* * *

[Add a user to a database](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#add-a-user-to-a-database)

* * *

[Current Users](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#current-users)

* * *

[Change a PostgreSQL user password](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#change-a-postgresql-user-password)

* * *

[Change a PostgreSQL user name](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#change-a-postgresql-user-name)

* * *

[Delete a PostgreSQL user](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#delete-a-postgresql-user)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#overview)

* * *

[Create a database](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#create-a-database)

* * *

[Current Databases](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#current-databases)

* * *

[Remove a user](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#remove-a-user)

* * *

[Rename a database](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#rename-a-database)

* * *

[Delete a database](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#delete-a-database)

* * *

[Add a PostgreSQL user](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#add-a-postgresql-user)

* * *

[Add a user to a database](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#add-a-user-to-a-database)

* * *

[Current Users](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#current-users)

* * *

[Change a PostgreSQL user password](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#change-a-postgresql-user-password)

* * *

[Change a PostgreSQL user name](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#change-a-postgresql-user-name)

* * *

[Delete a PostgreSQL user](https://docs.cpanel.net/cpanel/databases/postgresql-databases/#delete-a-postgresql-user)

* * *

## PostgreSQL Databases

![](https://docs.cpanel.net/img/cpanel-icons/postgresql_databases.svg)

_Valid for versions 120 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/databases/postgresql-databases/82/)

#### [120](https://docs.cpanel.net/cpanel/databases/postgresql-databases/)

Last modified: _2024 May 20_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Use this interface to create, manage, and delete PostgreSQL® databases and database users.

To add or delete information in existing databases, copy a database, or run PostgreSQL queries and scripts, use cPanel’s [_phpPgAdmin_](https://docs.cpanel.net/cpanel/databases/phppgadmin/) interface ( _cPanel » Home » Databases » phpPgAdmin_).

Important:

Do **not** use _phpPgAdmin_ to create databases or database users.

Note:

- This interface **only** appears in your cPanel account if your hosting provider installs and configures PostgreSQL in WHM’s [_Configure PostgreSQL_](https://docs.cpanel.net/whm/database-services/configure-postgresql/) interface ( _WHM » Home » Database Services » Configure PostgreSQL_).

- To create your **first** database and user, we recommend that you use the [_PostgreSQL Database Wizard_](https://docs.cpanel.net/cpanel/databases/postgresql-database-wizard) interface ( _cPanel » Home » Databases » PostgreSQL Database Wizard_).

- The maximum length of a database name is 63 characters. If you enable database prefixing, this length includes the database prefix and underscore character (`_`).

- To enter information in a database, use the _phpPgAdmin_ interface ( _cPanel » Home » Databases » phpPgAdmin_).


## Create a database

To create the database, perform the following steps:

1. In the _Database Name_ text box, enter a name for the database.

2. Click _Create Database_.

3. Click _Go Back_. The new database will appear in the _Current Databases_ table.


## Current Databases

The Current Databases table lists the following information for each database in your account:

- _Database_ — The name of the database.

- _Size_ — The size of the database.

- _Privileged Users_ — Users who can manipulate the database.

- _Actions_ — Click the appropriate icon in this column to perform an action on the corresponding user or database.


### Remove a user

To remove a user from a database, perform the following steps:

1. In the _Current Databases_ table, click _Delete_ next to the user that you want to delete.

2. To remove the user’s privileges to manage the database, click _Yes_.


### Rename a database

Warning:

- When you rename a database, the system terminates all active connections to the database.

- You **must** manually update configuration files and applications to use the new database name.

- The system requires more time to rename larger and more complex databases.


To rename a database, perform the following steps:

1. Click _Rename_ in the _Actions_ column next to the database that you wish to rename.

2. Enter the new database name in the _New name_ text box.

3. Click _Proceed_.


### Delete a database

To delete a database, perform the following steps:

1. Click _Delete_ in the _Actions_ column next to the database that you wish to delete.

2. To permanently delete the database, click _Delete Database_.


## Add a PostgreSQL user

After you create the database, add users to the database.

Note:

- You **must** create a user before you can add the user to an existing database.
- You **must** create PostgreSQL user accounts separately from mail and administrator accounts.

To create a new user account, perform the following steps:

1. Enter a username in the _Username_ text box.







Note:





The maximum length of a database username is 63 characters. If you enable database prefixing, this length includes the `database` prefix and underscore character (`_`).

2. Enter and confirm the new password in the appropriate text boxes.







Warning:





The password **must** contain at least five characters.







Note:





- The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password.
- Some web hosts require a minimum password strength. A green password _Strength_ meter indicates that the password is equal to or greater than the required password strength.
- Click _Password Generator_ to generate a strong password. For more information, read our [Password & Security](https://docs.cpanel.net/cpanel/preferences/password-and-security) documentation.

3. Click _Create User_.







Warning:





Some versions of PostgreSQL are ANSI SQL-92 compliant and do not support recursive grants, wildcard grants, or future grants. To ensure that users continue to have access the information in your PostgreSQL tables, _click Synchronize Grants_.



We recommend that you synchronize the grants after you take the following actions:



- Add a new user.
- Add an existing user to a database.
- Create a new table manually in phpPGAdmin.

## Add a user to a database

To add a user to a database, perform the following steps:

1. Select the appropriate user and the database you want to add the user to from the _User_ and _Database_ menus.

2. Click _Submit_.


## Current Users

The _Current Users_ table lists all of your PostgreSQL users. Use the functions in this table to change user passwords and usernames, or to delete users.

### Change a PostgreSQL user password

To change a PostgreSQL user’s password, perform the following steps:

1. In the _Current Users_ table, click _Change Password_ in the _Actions_ column next to the user that you wish to change.

2. Enter and confirm the new password in the appropriate text boxes.







Warning:





The password **must** contain at least five characters.







Note:





- The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password.
- Some web hosts require a minimum password strength. A green password _Strength_ meter indicates that the password is equal to or greater than the required password strength.
- Click _Password Generator_ to generate a strong password. For more information, read our [Password & Security](https://docs.cpanel.net/cpanel/preferences/password-and-security) documentation.

3. Click _Change Password_.


### Change a PostgreSQL user name

To change a PostgreSQL user’s username, perform the following steps:

1. Click _Rename_ in the _Actions_ column for the user that you wish to rename.

2. Enter the new username for the account in the _New name_ text box.

3. Click _Proceed_.


Warning:

When you rename a PostgreSQL user, the _Change Password_ interface automatically appears so you can reset the password for the database user. The md5 hash that PostgreSQL creates to store user passwords requires this step.

### Delete a PostgreSQL user

To delete a PostgreSQL user account, perform the following steps:

1. Click _Delete_ in the row next to the user that you wish to delete.

2. To permanently delete the account, click _Remove User_.


#### Additional Documentation

* * *

- [Database Wizard](https://docs.cpanel.net/cpanel/databases/database-wizard/)
- [Manage My Databases](https://docs.cpanel.net/cpanel/databases/manage-my-databases/)
- [MySQL® Database Wizard](https://docs.cpanel.net/cpanel/databases/mysql-database-wizard/)
- [phpPgAdmin](https://docs.cpanel.net/cpanel/databases/phppgadmin/)
- [PostgreSQL Database Wizard](https://docs.cpanel.net/cpanel/databases/postgresql-database-wizard/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×