---
url: "https://docs.cpanel.net/cpanel/databases/database-wizard/120/"
title: "Database Wizard | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/databases/database-wizard/120/#main-content)

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
4. Database Wizard


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [databases](https://docs.cpanel.net/tags/databases/) [mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/databases/database-wizard/120/#overview)

* * *

[Set up a database](https://docs.cpanel.net/cpanel/databases/database-wizard/120/#set-up-a-database)

* * *

[Additional options](https://docs.cpanel.net/cpanel/databases/database-wizard/120/#additional-options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/databases/database-wizard/120/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/databases/database-wizard/120/#overview)

* * *

[Set up a database](https://docs.cpanel.net/cpanel/databases/database-wizard/120/#set-up-a-database)

* * *

[Additional options](https://docs.cpanel.net/cpanel/databases/database-wizard/120/#additional-options)

* * *

## Database Wizard

![](https://docs.cpanel.net/img/cpanel-icons/mysql_database_wizard.svg)

_Valid for versions 120 through 130_

#### Version:

#### [120](https://docs.cpanel.net/cpanel/databases/database-wizard/120/)

#### [132](https://docs.cpanel.net/cpanel/databases/database-wizard/)

Last modified: _2025 July 22_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This wizard guides you through the setup of a MySQL® or MariaDB® database, user accounts, and user privileges. We recommend that you use this wizard to create your first database and user.

Note:

- In cPanel & WHM version 118 and earlier, we titled this interface [_MySQL® Database Wizard_](https://docs.cpanel.net/cpanel/databases/mysql-database-wizard).
- To create additional databases or users, you can also use the [_Manage My Databases_](https://docs.cpanel.net/cpanel/databases/manage-my-databases/) interface ( _cPanel » Home » Databases » Manage My Databases_).
- To change your server’s version of MySQL or MariaDB, contact your system administrator.

## Set up a database

To set up a database, perform the following steps:

1. In the _New Database_ text box, enter a name for the database and click _Next Step_. The system limits the database name to 64 characters. However, due to the method that cPanel & WHM uses to store MySQL database names, each underscore character requires **two** characters of that limit. Therefore, if your hosting provider enabled database prefixing, the underscore character in the database prefix will use two characters of the 64-character database name limit. Each other character in the database prefix will only use one character of the limit. You may name a database with any ASCII characters **except** the following:
   - `/`
   - `"`
   - `'`
   - `````
2. In the _Username_ text box, enter a name for the user who you wish to allow to manage the database. You may **only** enter alphanumeric characters. To limit the database prefix to eight characters, use the _Force short prefix for MySQL and MariaDB databases_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM_ » _Home_ » _Server Configuration_ » _Tweak Settings_).







Warning:





Enabling the _Force short prefix for MySQL and MariaDB databases_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM_ » _Home_ » _Server Configuration_ » _Tweak Settings_) will prevent you from creating new accounts that share the same first eight characters of their usernames. For more information about MySQL and MariaDB® prefix settings, read our [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#sql) documentation.







To learn more about database username limits, click your database type:








[MySQL 5.6 and earlier](https://docs.cpanel.net/cpanel/databases/database-wizard/120/#mysql-5-6-and-earlier1764175694884196336)





MySQL 5.6 limits the database username to 16 characters. The system includes the database prefix (the first eight characters of the cPanel account’s username plus an underscore for a total of nine characters) in the character count for the username.



For example:



- A MySQL database with the `db_` prefix allows usernames that contain up to 13 characters.

- A MySQL database with the `example_` prefix allows usernames that contain up to eight characters.


[MySQL 5.7 and later](https://docs.cpanel.net/cpanel/databases/database-wizard/120/#mysql-5-7-and-later1764175694884318193)

MySQL 5.7 limits the database username to 32 characters. The system includes the database prefix (the first 16 characters of the cPanel account’s username plus an underscore for a total of 17 characters) in the character count for the username.

For example:

- A MySQL database with the `db_` prefix allows usernames that contain up to 29 characters.

- A MySQL database with the `example_` prefix allows usernames that contain up to 24 characters.


[MariaDB](https://docs.cpanel.net/cpanel/databases/database-wizard/120/#mariadb1764175694884375238)

MariaDB limits the database username to 47 characters. The system includes the database prefix (all of the cPanel account’s username and an underscore character) in the character count for the username.

For example:

- A MariaDB database with the `db_` prefix allows usernames that contain up to 44 characters.

- A MariaDB database with the `example_` prefix allows usernames that contain up to 39 characters.


3. Enter and confirm the new password in the appropriate text boxes. Some web hosts require a minimum password strength. The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password. A green password _Strength_ meter indicates that the password is equal to or greater than the required password strength. You may click _Password Generator_ to generate a strong password. For more information, read our [_Password & Security_](https://docs.cpanel.net/cpanel/preferences/password-and-security) documentation.

4. Click _Create User_.

5. Select the checkboxes that correspond to the privileges that you want to grant the user, or select _ALL PRIVILEGES._ For more information about user privileges, read the [MySQL](http://dev.mysql.com/doc/) or [MariaDB](https://mariadb.com/kb/en/documentation/) documentation.

6. Click _Next Step_.


The system displays a message that states that you successfully set up the database and user account.

## Additional options

After you complete the database setup process, select one of the following options:

- _Add another database._ — Click to return to the beginning of the _Database Wizard_ interface to add more databases.

- _Add another user for your database._ — Click to open the [_Manage My Databases_](https://docs.cpanel.net/cpanel/databases/manage-my-databases/) interface ( _cPanel » Home » Databases » Manage My Databases_) to create additional user accounts and assign them to a database.

- _Return to Manage My Databases._ — Click to open the [_Manage My Databases_](https://docs.cpanel.net/cpanel/databases/manage-my-databases/) interface ( _cPanel » Home » Databases » Manage My Databases_).

- _Return Home_ — Click to return to the cPanel _Home_ interface.


Note:

When you use the _Database Wizard_ interface to add a user and a database, the system automatically grants the user access to the database. You do **not** need to use the _Add User to Database_ feature in the [_Manage My Databases_](https://docs.cpanel.net/cpanel/databases/manage-my-databases/) interface ( _cPanel » Home » Databases » Manage My Databases_).

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