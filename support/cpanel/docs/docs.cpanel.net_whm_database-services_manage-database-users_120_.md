---
url: "https://docs.cpanel.net/whm/database-services/manage-database-users/120/"
title: "Manage Database Users | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/database-services/manage-database-users/120/#main-content)

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
3. [Database Services](https://docs.cpanel.net/whm/database-services/)
4. Manage Database Users


[databases](https://docs.cpanel.net/tags/databases/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/database-services/manage-database-users/120/#overview)

* * *

[Database users](https://docs.cpanel.net/whm/database-services/manage-database-users/120/#database-users)

* * *

[Rename a database user](https://docs.cpanel.net/whm/database-services/manage-database-users/120/#rename-a-database-user)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/database-services/manage-database-users/120/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/database-services/manage-database-users/120/#overview)

* * *

[Database users](https://docs.cpanel.net/whm/database-services/manage-database-users/120/#database-users)

* * *

[Rename a database user](https://docs.cpanel.net/whm/database-services/manage-database-users/120/#rename-a-database-user)

* * *

## Manage Database Users

![](https://docs.cpanel.net/img/whm-icons/manage_database_users.svg)

_Valid for versions 120 through 130_

#### Version:

#### [120](https://docs.cpanel.net/whm/database-services/manage-database-users/120/)

#### [132](https://docs.cpanel.net/whm/database-services/manage-database-users/)

Last modified: _2025 July 22_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows server administrators to retrieve a list of MySQL and MariaDB database users, each user’s database, and which account owns each database user. The server administrator can use this interface to rename database users.

Note:

In cPanel & WHM version 118 and earlier, we titled this interface’s section in the WHM interface [SQL Services](https://docs.cpanel.net/whm/sql-services/).

## Database users

This interface provides a table of all of the database users on the server.

Click each column heading to sort the list by that column. Search for a particular user with the _Search_ text box.

### Rename a database user

To rename a database user, perform the following steps:

1. Click the pencil icon in the row that corresponds to the database user.
2. Enter the new name for the database user in the Rename to text box. To learn more about database username limits, click your database type:







[MySQL 5.6 and earlier](https://docs.cpanel.net/whm/database-services/manage-database-users/120/#mysql-5-6-and-earlier1764175699702599662)





MySQL 5.6 limits the database username to 16 characters. The system includes the database prefix (the first eight characters of the cPanel account’s username plus an underscore for a total of nine characters) in the character count for the username.



For example:



- A MySQL database with the `db_` prefix allows usernames that contain up to 13 characters.
- A MySQL database with the `example_` prefix allows usernames that contain up to eight characters.

[MySQL 5.7 and later](https://docs.cpanel.net/whm/database-services/manage-database-users/120/#mysql-5-7-and-later1764175699702769107)

MySQL 5.7 limits the database username to 32 characters. The system includes the database prefix (the first sixteen characters of the cPanel account’s username plus an underscore for a total of seventeen characters) in the character count for the username.

For example:

- A MySQL database with the `db_` prefix allows usernames that contain up to 29 characters.
- A MySQL database with the `example_` prefix allows usernames that contain up to 24 characters.

[MariaDB](https://docs.cpanel.net/whm/database-services/manage-database-users/120/#mariadb1764175699702839192)

MariaDB limits the database username to 47 characters. The system includes the database prefix (all of the cPanel account’s username and an underscore character) in the character count for the username.

For example:

- A MariaDB database with the `db_` prefix allows usernames that contain up to 44 characters.
- A MariaDB database with the `example_` prefix allows usernames that contain up to 39 characters.

3. Enter a new password for the user in the _Set Password_ text box.






Note:




This step is optional.


4. Click _Submit_ to confirm that you wish to rename the database user. To cancel the action, click _Close_.

#### Additional Documentation

* * *

- [Change Database Root Password](https://docs.cpanel.net/whm/database-services/change-database-root-password/)
- [Change Database User Password](https://docs.cpanel.net/whm/database-services/change-database-user-password/)
- [Configure PostgreSQL](https://docs.cpanel.net/whm/database-services/configure-postgresql/)
- [Database Map Tool](https://docs.cpanel.net/whm/database-services/database-map-tool/)
- [Edit Database Configuration](https://docs.cpanel.net/whm/database-services/edit-database-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×