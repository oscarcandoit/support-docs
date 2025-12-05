---
url: "https://docs.cpanel.net/cpanel/databases/postgresql-database-wizard/"
title: "PostgreSQL Database Wizard | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/databases/postgresql-database-wizard/#main-content)

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
4. PostgreSQL Database Wizard


[databases](https://docs.cpanel.net/tags/databases/) [postgresql](https://docs.cpanel.net/tags/postgresql/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/databases/postgresql-database-wizard/#overview)

* * *

[Set up a database](https://docs.cpanel.net/cpanel/databases/postgresql-database-wizard/#set-up-a-database)

* * *

[Additional options](https://docs.cpanel.net/cpanel/databases/postgresql-database-wizard/#additional-options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/databases/postgresql-database-wizard/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/databases/postgresql-database-wizard/#overview)

* * *

[Set up a database](https://docs.cpanel.net/cpanel/databases/postgresql-database-wizard/#set-up-a-database)

* * *

[Additional options](https://docs.cpanel.net/cpanel/databases/postgresql-database-wizard/#additional-options)

* * *

## PostgreSQL Database Wizard

![](https://docs.cpanel.net/img/cpanel-icons/postgresql_database_wizard.svg)

_Valid for versions 120 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/databases/postgresql-database-wizard/82/)

#### [120](https://docs.cpanel.net/cpanel/databases/postgresql-database-wizard/)

Last modified: _2024 May 20_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This wizard guides you through the setup of a PostgreSQL® database, user accounts, and user privileges. We recommend that you use this wizard to create your first database and user. To create additional databases or users, use the [_PostgreSQL Databases_](https://docs.cpanel.net/cpanel/databases/postgresql-databases) interface ( _cPanel » Home » Databases » PostgreSQL Databases_).

Important:

This interface **only** appears in your cPanel account if your hosting provider installs and configures PostgreSQL in WHM’s [_Configure PostgreSQL_](https://docs.cpanel.net/whm/database-services/configure-postgresql/) interface ( _WHM » Home » Database Services » Configure PostgreSQL_).

## Set up a database

Note:

The maximum length of a database name or username is 63 characters. If your hosting provider enabled database prefixing, this length includes the database prefix and underscore character (`_`).

To set up a database, perform the following steps:

1. In the _New Database_ text box, enter a name for the database and click _Create Database_.

2. In the _Username_ text box, enter a name for the user who you wish to allow to manage the database.

3. Enter and confirm the new password in the appropriate text boxes.







Note:





- The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password.
- Some web hosts require a minimum password strength. A green password _Strength_ meter indicates that the password is equal to or greater than the required password strength.
- Click _Password & Security_ to generate a strong password. For more information, read our [Password & Security](https://docs.cpanel.net/cpanel/preferences/password-and-security) documentation.

4. Click _Create User._

5. Review the _User_ and _Database_ names and click _Submit_ to add the new user to the new database.


The system displays a message that states that the system set up the database and user account successfully.

## Additional options

After you complete the database setup process, select one of the following options:

- _Add another database_ — Click to return to the start of the _PostgreSQL Database Wizard_ to add more databases.

- _Add another PostgreSQL Databases User_ — Click to open the [_PostgreSQL Databases_](https://docs.cpanel.net/cpanel/databases/postgresql-databases) interface ( _cPanel » Home » Databases » PostgreSQL Databases_) to create additional user accounts and assign them to a database.

- _Return to Home_ — Returns you to the cPanel Home interface.







Note:





When you use the _PostgreSQL Database Wizard_ interface to add a user and a database, the system automatically grants the user access to the database. You do **not** need to use the _Add User to Database_ section in the [_PostgreSQL Databases_](https://docs.cpanel.net/cpanel/databases/postgresql-databases) interface ( _cPanel » Home » Databases » PostgreSQL Databases_).


#### Additional Documentation

* * *

- [Database Wizard](https://docs.cpanel.net/cpanel/databases/database-wizard/)
- [Manage My Databases](https://docs.cpanel.net/cpanel/databases/manage-my-databases/)
- [MySQL® Database Wizard](https://docs.cpanel.net/cpanel/databases/mysql-database-wizard/)
- [phpPgAdmin](https://docs.cpanel.net/cpanel/databases/phppgadmin/)
- [PostgreSQL Databases](https://docs.cpanel.net/cpanel/databases/postgresql-databases/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×