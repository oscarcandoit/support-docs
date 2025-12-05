---
url: "https://docs.cpanel.net/knowledge-base/scripts-and-utilities/how-to-restore-database-grants/"
title: "How to Restore Database Grants | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/how-to-restore-database-grants/#main-content)

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
3. [Scripts and Utilities](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/)
4. How to Restore Database Grants


[databases](https://docs.cpanel.net/tags/databases/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/how-to-restore-database-grants/#overview)

* * *

[Restore the user’s database access](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/how-to-restore-database-grants/#restore-the-users-database-access)

* * *

[How to update the cPanel user’s password to restore database access](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/how-to-restore-database-grants/#how-to-update-the-cpanel-users-password-to-restore-database-access)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/how-to-restore-database-grants/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/how-to-restore-database-grants/#overview)

* * *

[Restore the user’s database access](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/how-to-restore-database-grants/#restore-the-users-database-access)

* * *

[How to update the cPanel user’s password to restore database access](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/how-to-restore-database-grants/#how-to-update-the-cpanel-users-password-to-restore-database-access)

* * *

## How to Restore Database Grants

Last modified: _2025 February 13_

* * *

## Overview

If a database user loses access to databases, you can restore the user’s grants to the database with the `restoregrants` utility.

## Restore the user’s database access

Execute either of the following commands from the command line:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>    /usr/local/cpanel/bin/restoregrants --cpuser=$cpuser --db={mysql, pg} --dbuser=$dbuser<br>    /usr/local/cpanel/bin/restoregrants --cpuser=$cpuser --db={mysql, pg} --all<br>``` |

The following table describes the variables in the example above:

| Variable | Description |
| --- | --- |
| `$cpuser` | The cPanel username that has lost access to databases. |
| `{mysql, pg}` | The type of database: `mysql` for MySQL® or `pg` for PostgreSQL®. |
| `$dbuser` | The database user whose privileges you that wish to restore. If you use the `--dbuser` flag, the `$dbuser` variable will consist of the database user’s name. If you use the `--all` flag, the script will restore grants for all of the database users that the cPanel account owns. |

## How to update the cPanel user’s password to restore database access

In certain circumstances, the `restoregrants` script may fail to restore database access. If this occurs, either the cPanel user or the WHM user who owns the account can reset the cPanel account’s password to restore grants.

- cPanel users can reset their account passwords in cPanel’s [_Password & Security_](https://docs.cpanel.net/cpanel/preferences/password-and-security/) interface _(cPanel » Home » Preferences » Password & Security)_.
- WHM users can reset the password in WHM’s [_List Accounts_](https://docs.cpanel.net/whm/account-information/list-accounts/) interface _(WHM » Home » Account Information » List Accounts)_.

#### Additional Documentation

* * *

- [Additional MySQL Access Hosts](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/)
- [The dbmaptool Script](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/)
- [The dbstoregrants Script](https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script/)
- [The manage\_mysql\_profiles Script](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/)
- [The rebuild\_dbmap Script](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×