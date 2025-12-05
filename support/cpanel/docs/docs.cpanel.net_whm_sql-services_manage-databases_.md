---
url: "https://docs.cpanel.net/whm/sql-services/manage-databases/"
title: "Manage Databases | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/sql-services/manage-databases/#main-content)

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
4. Manage Databases


[databases](https://docs.cpanel.net/tags/databases/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/sql-services/manage-databases/#overview)

* * *

[Databases](https://docs.cpanel.net/whm/sql-services/manage-databases/#databases)

* * *

[Rename a database](https://docs.cpanel.net/whm/sql-services/manage-databases/#rename-a-database)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/sql-services/manage-databases/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/sql-services/manage-databases/#overview)

* * *

[Databases](https://docs.cpanel.net/whm/sql-services/manage-databases/#databases)

* * *

[Rename a database](https://docs.cpanel.net/whm/sql-services/manage-databases/#rename-a-database)

* * *

## Manage Databases

![](https://docs.cpanel.net/img/whm-icons/manage_databases.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/sql-services/manage-databases/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to list cPanel-managed databases on your server, each database’s engine, and which user owns each database. You can also use this interface to rename databases.

Note:

In cPanel & WHM version 120 and later, we renamed this interface’s section in the WHM interface to [Database Services](https://docs.cpanel.net/whm/database-services/).

Warning:

- The maximum length of the database name is 64 characters. However, due to the method that cPanel & WHM uses to store MySQL database names, each underscore character requires **two** characters of that limit. Therefore, if you enable database prefixing, the maximum length of the database name is **63 characters**, which includes both the database prefix and the underscore character. Each additional underscore requires another **two** characters of that limit.
- It is potentially dangerous to rename a MySQL® database. We **strongly** recommend that you create a backup of a MySQL database that you wish to rename.
- If you rename a database, the process terminates all active connections to the database.
- You **must** manually update configuration files and applications to use the new database name.
- Larger and more complex databases require additional time to rename.

## Databases

This interface provides a table that lists all of the databases on the server.

Click each column heading to sort the list by that column. Search for a particular database with the _Search_ text box.

### Rename a database

To rename a database, perform the following steps:

1. Click the pencil icon in the row that corresponds to the database.

2. In the _Rename_ to text box, enter the new name for the database.






Warning:




If database prefixing is enabled, this parameter **must** include the database prefix for the account.


3. Click _Submit_.


#### How cPanel & WHM renames a MySQL database

MySQL does **not** allow you to rename a database. When cPanel & WHM “renames” a database, the system performs the following steps:

1. The system creates a new database.
2. The system moves data from the old database to the new database.
3. The system recreates grants and stored code in the new database.
4. The system deletes the old database and its grants.

Warning:

- If any of the first three steps fail, the system returns an error and attempts to restore the database’s original state. If the restoration process fails, the API function’s error response describes these additional failures.
- In rare cases, the system creates the second database successfully, but fails to delete the old database or grants. The system treats the rename action as a success; however, the API function returns warnings that describe the failure to delete the old database or grants.

#### Additional Documentation

* * *

- [Additional MySQL Access Hosts](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/)
- [Change MySQL User Password](https://docs.cpanel.net/whm/sql-services/change-mysql-user-password/)
- [Configure PostgreSQL](https://docs.cpanel.net/whm/sql-services/configure-postgresql/)
- [Database Map Tool](https://docs.cpanel.net/whm/sql-services/database-map-tool/)
- [Edit SQL Configuration](https://docs.cpanel.net/whm/sql-services/edit-sql-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×