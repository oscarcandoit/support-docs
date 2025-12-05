---
url: "https://docs.cpanel.net/cpanel/databases/mysql-manager/106/"
title: "MySQL® Manager | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#main-content)

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
4. MySQL® Manager


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [databases](https://docs.cpanel.net/tags/databases/) [mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#overview)

* * *

[Enable the MySQL Manager interface](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#enable-the-mysql-manager-interface)

* * *

[The Databases tab](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#the-databases-tab)

* * *

[The Database Users tab](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#the-database-users-tab)

* * *

[The Configuration tab](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#the-configuration-tab)

* * *

[Disable the MySQL Manager interface](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#disable-the-mysql-manager-interface)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#overview)

* * *

[Enable the MySQL Manager interface](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#enable-the-mysql-manager-interface)

* * *

[The Databases tab](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#the-databases-tab)

* * *

[The Database Users tab](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#the-database-users-tab)

* * *

[The Configuration tab](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#the-configuration-tab)

* * *

[Disable the MySQL Manager interface](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#disable-the-mysql-manager-interface)

* * *

## MySQL® Manager

![](https://docs.cpanel.net/img/cpanel-icons/mysql_manager.svg)

_Valid for versions 106 through 130_

#### Version:

#### [106](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/)

#### [132](https://docs.cpanel.net/cpanel/databases/mysql-manager/)

Last modified: _2025 July 22_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Use this interface to create, manage, and delete MySQL® databases and database users.

Experimental:

This interface is [experimental](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#experimental) and is **not** fully functional.

The cPanel & WHM implementation of MySQL and MariaDB® uses modified character limits for database names and database usernames:

Important:

- Use the _Force short prefix for MySQL and MariaDB databases_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM_ » _Home_ » _Server Configuration_ » _Tweak Settings_) to limit the database prefix to eight characters. For more information about MySQL and MariaDB prefix settings, read our [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#sql) documentation.
- Enabling the _Force short prefix for MySQL and MariaDB databases_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM_ » _Home_ » _Server Configuration_ » _Tweak Settings_) will **prevent** you from creating new accounts that share the same first eight characters of their usernames.

[MySQL 5.6 and earlier](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#mysql-5-6-and-earlier1764175694916337906)

MySQL 5.6 limits the database username to 16 characters. The system includes the database prefix (the first eight characters of the cPanel account’s username plus an underscore for a total of nine characters) in the character count for the username.

For example:

- A MySQL database with the `db_` prefix allows usernames that contain up to 13 characters.

- A MySQL database with the `example_` prefix allows usernames that contain up to eight characters.


[MySQL 5.7 and later](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#mysql-5-7-and-later1764175694916418313)

MySQL 5.7 limits the database username to 32 characters. The system includes the database prefix (the first sixteen characters of the cPanel account’s username plus an underscore for a total of seventeen characters) in the character count for the username.

For example:

- A MySQL database with the `db_` prefix allows usernames that contain up to 29 characters.

- A MySQL database with the `example_` prefix allows usernames that contain up to 24 characters.


[MariaDB](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#mariadb1764175694916475159)

MariaDB limits the database username to 47 characters. The system includes the database prefix (all of the cPanel account’s username and an underscore character) in the character count for the username.

For example:

- A MariaDB database with the `db_` prefix allows usernames that contain up to 44 characters.

- A MariaDB database with the `example_` prefix allows usernames that contain up to 39 characters.


## Enable the MySQL Manager interface

To use this feature, your hosting provider **must** enable it for you. Ask them to perform the following steps in WHM based on your cPanel & WHM version number:

[cPanel & WHM version 114 and later](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#cpanel-whm-version-114-and-later1764175694921890859)

1. Connect to WHM with SSH as the `root` user.
2. In your command-line interface, run the following commands:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```perl<br>/usr/local/cpanel/3rdparty/bin/perl -e '<br>use Cpanel::FeatureFlags ();<br>Cpanel::FeatureFlags::enable('mysql_manager');<br>'<br>``` |


[cPanel & WHM version 112 and earlier](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#cpanel-whm-version-112-and-earlier1764175694922543876)

1. Connect to WHM with SSH as the `root` user.
2. In your command-line interface, run the following commands:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```perl<br>mkdir /var/cpanel/experimental<br>touch /var/cpanel/experimental/mysql_manager<br>/scripts/upcp<br>``` |


## The Databases tab

The _Databases_ tab lists the databases owned by your cPanel account. To sort the database, click _Database Name_, _Size_, or _Database User_ to reorder the Database table.

#### Create a Database and a Database User

Warning:

Do **not** use [phpMyAdmin](https://docs.cpanel.net/cpanel/databases/phpmyadmin/) to create databases or database users. phpMyAdmin does **not** [map databases](https://docs.cpanel.net/whm/sql-services/database-map-tool), which causes backups and restorations to **not** function.

The _MySQL Manager_ interface will load the _Create Database_ interface if your account does **not** have a database.

If your cPanel account already has a database, click _Create Database_ to open the _Create Database_ interface.

To create a database and database user, perform the following steps:

1. In the _Database Name_ text box, enter a name for the database.
2. Click the _Create Database user_ toggle to create a database user.

   - The interface will automatically enter a database username in the _Database Username_ text box.

     - You can change the username in the _Database Username_ text box. However, the system’s character modified limits still apply.
     - The interface will automatically assign the _Select_, _Insert_, _Update_, and _Delete_ database privileges.
     - For more information about user privileges, read the [MySQL documentation](http://dev.mysql.com/doc/).
3. Click _Create_.

   - If you wish to create multiple databases, click the _Stay on this page to create another database_ checkbox.
   - Otherwise, the system will load the Databases table and your database will appear in the table.

#### View

The database table displays the following information for each database:

- _Database Name_ — The name of the database.
- _Size_ — The size of the database in bytes.
- _Database Users_ — The database users that you assigned permissions for the database.

#### Actions

You can use the following features for each database:

- _Manage_ — Change a database name.

  - To rename a database, click _Manage_. A new interface will appear. In the _Database Name_ text box, enter the new database name and click _Update_ to update the database name or _Go Back_ to cancel.
- _Delete_ — Delete the database.

  - To delete a database, click _Delete_. A confirmation message will appear. Click _Delete_ to delete the database or click _Cancel_.

## The Database Users tab

This function is not yet implemented.

## The Configuration tab

This function is not yet implemented.

## Disable the MySQL Manager interface

To disable this feature, your hosting provider **must** perform the following steps in WHM based on your cPanel & WHM version number:

[cPanel & WHM version 114 and later](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#cpanel-whm-version-114-and-later1764175694923206506)

1. Connect to WHM with SSH as the `root` user.
2. In your command-line interface, run the following commands:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```perl<br>/usr/local/cpanel/3rdparty/bin/perl -e '<br>use Cpanel::FeatureFlags ();<br>Cpanel::FeatureFlags::disable('mysql_manager');<br>'<br>``` |


[cPanel & WHM version 112 and earlier](https://docs.cpanel.net/cpanel/databases/mysql-manager/106/#cpanel-whm-version-112-and-earlier1764175694923329796)

1. Connect to WHM with SSH as the `root` user.
2. Delete the `mysql_manager` file from the `/var/cpanel/experimental` directory.
3. In your command-line interface, run the [`/scripts/upcp`](https://docs.cpanel.net/whm/scripts/the-upcp-script/) script.

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

![Cookiebot session tracker icon loaded](https://imgsct.cookiebot.com/1.gif?dgi=da52fc49-8e48-42b7-9ad3-c219404f6f92)