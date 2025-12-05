---
url: "https://docs.cpanel.net/knowledge-base/sql/install-or-update-postgresql-on-your-cpanel-server/"
title: "Install or Update PostgreSQL® on Your cPanel & WHM Server | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/sql/install-or-update-postgresql-on-your-cpanel-server/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [SQL](https://docs.cpanel.net/knowledge-base/sql/)
4. Install or Update PostgreSQL® on Your cPanel & WHM Server


[postgresql](https://docs.cpanel.net/tags/postgresql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/sql/install-or-update-postgresql-on-your-cpanel-server/#overview)

* * *

[Back up databases](https://docs.cpanel.net/knowledge-base/sql/install-or-update-postgresql-on-your-cpanel-server/#back-up-databases)

* * *

[Install or upgrade and configure PostgreSQL](https://docs.cpanel.net/knowledge-base/sql/install-or-update-postgresql-on-your-cpanel-server/#install-or-upgrade-and-configure-postgresql)

* * *

[Restore a previous PostgreSQL version](https://docs.cpanel.net/knowledge-base/sql/install-or-update-postgresql-on-your-cpanel-server/#restore-a-previous-postgresql-version)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/sql/install-or-update-postgresql-on-your-cpanel-server/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/sql/install-or-update-postgresql-on-your-cpanel-server/#overview)

* * *

[Back up databases](https://docs.cpanel.net/knowledge-base/sql/install-or-update-postgresql-on-your-cpanel-server/#back-up-databases)

* * *

[Install or upgrade and configure PostgreSQL](https://docs.cpanel.net/knowledge-base/sql/install-or-update-postgresql-on-your-cpanel-server/#install-or-upgrade-and-configure-postgresql)

* * *

[Restore a previous PostgreSQL version](https://docs.cpanel.net/knowledge-base/sql/install-or-update-postgresql-on-your-cpanel-server/#restore-a-previous-postgresql-version)

* * *

## Install or Update PostgreSQL® on Your cPanel & WHM Server

Last modified: _2024 March 1_

* * *

## Overview

This document explains how to install or update PostgreSQL® on a server. However, we **strongly** recommend that you allow an experienced PostgreSQL database administrator to perform this process.

Important:

- We **only** support versions of PostgreSQL that you install with the `/usr/local/cpanel/scripts/installpostgres` script. We do **not** support versions of PostgreSQL that you install via any other method.
- cPanel & WHM functions with the version of PostgreSQL that ships with your operating system.
- This script does **not** run on servers that use the Ubuntu® operating system.

## Back up databases

Before you install or update PostgreSQL on your server, back up your server’s databases. This action allows you to restore your databases after you install or update PostgreSQL.

To back up your databases, log in to your server as the root user via SSH and perform the following steps:

1. Back up the PostgreSQL databases on your server. To do this, run the following command:



```perl
pg_dumpall -U postgres > db.out
```





Note:




In this example, `db.out` represents the database backup file.


2. To revert to your previous version of PostgreSQL, move your current PostgreSQL data directory. To do this, run the following commands:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>systemctl stop postgresql.service<br>mv /var/lib/pgsql /var/lib/directory_file_name<br>``` |







Note:





- In this example, `/directory_file_name` represents the actual directory name.
- If you enabled the Monitor option through WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_), deselect the checkbox in the _Monitor_ column before you run this command. This action prevents an automatic restart of the PostgreSQL service after you stop it.

## Install or upgrade and configure PostgreSQL

To install or upgrade and configure PostgreSQL on your server, perform the following steps:

1. Run the `/usr/local/cpanel/scripts/installpostgres` command to install or upgrade PostgreSQL.

2. Access WHM’s _Configure PostgreSQL_ interface ( _WHM » Home » Database Services » Configure PostgreSQL_).


- In cPanel & WHM version 118 and earlier, we title the [_Configure PostgreSQL_](https://docs.cpanel.net/whm/sql-services/configure-postgresql) interface’s section in the WHM interface [SQL Services](https://docs.cpanel.net/whm/sql-services).
- In cPanel & WHM version 120 and later, we title the [_Configure PostgreSQL_](https://docs.cpanel.net/whm/database-services/configure-postgresql) interface’s section in the WHM interface [Database Services](https://docs.cpanel.net/whm/database-services).

3. Click _Install Config_ if PostgreSQL does not exist on your server.






Warning:




If a PostgreSQL configuration **already** exists on your server, this action **overwrites** your configuration authentication file.


4. Click _Create Users_ to add current cPanel users to PostgreSQL.

5. Enter a new password in the _Enter New Password_ text box.

6. Confirm your new password, and click _Change Password_.






Warning:



**Only** use letters and numbers. Non-alphanumeric characters can cause errors to occur.


7. Import your databases. To do this, run the following command:



```perl
psql -U postgres dbname < dumpfile.sql
```


## Restore a previous PostgreSQL version

If the new installation fails, revert to your previous version of PostgreSQL and restore the earlier PostgreSQL data directory. To do this, run the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br>systemctl stop postgresql.service<br>mv /var/lib/pgsql /var/lib/directory_file_name<br>mv /var/lib/pgsql.old /var/lib/pgsql<br>systemctl restart postgresql.service<br>``` |

For more information about PostgreSQL, visit the [PostgreSQL website](http://www.postgresql.org/).

#### Additional Documentation

* * *

- [Configure PostgreSQL](https://docs.cpanel.net/whm/database-services/configure-postgresql/)
- [Configure PostgreSQL](https://docs.cpanel.net/whm/sql-services/configure-postgresql/)
- [Database Map Tool](https://docs.cpanel.net/whm/database-services/database-map-tool/)
- [Database Map Tool](https://docs.cpanel.net/whm/sql-services/database-map-tool/)
- [PostgreSQL Database Wizard](https://docs.cpanel.net/cpanel/databases/postgresql-database-wizard/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×