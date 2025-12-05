---
url: "https://docs.cpanel.net/whm/sql-services/database-map-tool/"
title: "Database Map Tool | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/sql-services/database-map-tool/#main-content)

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
4. Database Map Tool


[databases](https://docs.cpanel.net/tags/databases/) [whmui](https://docs.cpanel.net/tags/whmui/) [postgresql](https://docs.cpanel.net/tags/postgresql/) [mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/sql-services/database-map-tool/#overview)

* * *

[Grant ownership to database objects](https://docs.cpanel.net/whm/sql-services/database-map-tool/#grant-ownership-to-database-objects)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/sql-services/database-map-tool/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/sql-services/database-map-tool/#overview)

* * *

[Grant ownership to database objects](https://docs.cpanel.net/whm/sql-services/database-map-tool/#grant-ownership-to-database-objects)

* * *

## Database Map Tool

![](https://docs.cpanel.net/img/whm-icons/database_map_tool.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/sql-services/database-map-tool/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature allows server administrators to grant ownership of database objects (databases and database users) to a cPanel user. The cPanel user who owns a database can access and manage it through the cPanel interface.

Note:

- You can **only** use this feature to grant ownership of databases that no cPanel account currently owns. You **cannot** use it to transfer ownership of a database between two cPanel accounts.
- This feature **only** grants access to databases objects that are already in cPanel’s database management system.
- In cPanel & WHM version 120 and later, we renamed this interface’s section in the WHM interface to [Database Services](https://docs.cpanel.net/whm/database-services/).

## Grant ownership to database objects

To grant ownership of a database object or objects to a cPanel user, perform the following steps:

1. From the _Account Selection_ menus, select either the domain or username of the cPanel user who will own the databases objects that you specify. You can also use the _Account Search By_ text boxes to search the list by domain or username.
2. Click _Select_. The _Update Database Map_ interface will appear.
3. If your server displays multiple options, select the database type for which you wish to grant ownership from the _Database type_ menu.
4. In the _Database users_ text box, enter a comma-separated list of database users that you wish for the cPanel user to own.
5. In the _Database names_ text box, enter a comma-separated list of databases that you wish for the cPanel user to own.
6. Click _Submit_.

#### Additional Documentation

* * *

- [Additional MySQL Access Hosts](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/)
- [Change MySQL User Password](https://docs.cpanel.net/whm/sql-services/change-mysql-user-password/)
- [Configure PostgreSQL](https://docs.cpanel.net/whm/sql-services/configure-postgresql/)
- [Database Map Tool](https://docs.cpanel.net/whm/database-services/database-map-tool/)
- [Manage MySQL® Profiles](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×