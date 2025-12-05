---
url: "https://docs.cpanel.net/knowledge-base/sql/how-to-restore-a-user-database-access/"
title: "How to Restore a User's Database Access | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/sql/how-to-restore-a-user-database-access/#main-content)

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
4. How to Restore a User's Database Access


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [databases](https://docs.cpanel.net/tags/databases/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/sql/how-to-restore-a-user-database-access/#overview)

* * *

[The restoregrants script](https://docs.cpanel.net/knowledge-base/sql/how-to-restore-a-user-database-access/#the-restoregrants-script)

* * *

[Update password](https://docs.cpanel.net/knowledge-base/sql/how-to-restore-a-user-database-access/#update-password)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/sql/how-to-restore-a-user-database-access/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/sql/how-to-restore-a-user-database-access/#overview)

* * *

[The restoregrants script](https://docs.cpanel.net/knowledge-base/sql/how-to-restore-a-user-database-access/#the-restoregrants-script)

* * *

[Update password](https://docs.cpanel.net/knowledge-base/sql/how-to-restore-a-user-database-access/#update-password)

* * *

## How to Restore a User's Database Access

Last modified: _2020 September 28_

* * *

## Overview

If a database user loses access to databases, you can restore the user’s grants to the database with the `restoregrants` utility.

## The restoregrants script

To use the `restoregrants` script to restore the user’s database access, run one of the following commands from the command line:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>/usr/local/cpanel/bin/restoregrants --cpuser=$cpuser --db=$type --dbuser=$dbuser<br>/usr/local/cpanel/bin/restoregrants --cpuser=$cpuser --db=$type  --all<br>``` |

The examples above use the following variables:

- `$cpuser` — The cPanel username who lost access to their databases.
- `$dbuser` — The database user whose privileges to restore.

  - If you use the `--dbuser` flag, `$dbuser` represents the database user.
  - If you use the `--all` flag, the script restores grants for all of the database users that belong to the cPanel account.
- `$type` — The type of database:

  - `mysql` — MySQL®.
  - `pg` — PostgreSQL®.

## Update password

In certain circumstances, the `restoregrants` script may fail to restore access to the database.

If the script fails, either the cPanel user or the WHM user who owns the account (the reseller or system administrator) can reset the cPanel account’s password to restore grants.

The cPanel user can restore grants with the following steps:

1. Navigate to cPanel’s [_Password and Security_](https://docs.cpanel.net/cpanel/preferences/password-and-security/)
interface ( _cPanel » Home » Preferences » Password & Security_).

2. Select _Allow MySQL password change_.

3. Enter the old password in the _Old Password_ text box.

4. Enter a new password in the _New Password_ and _New Password (again)_ text boxes.

5. Click _Change your password now_.


The server administrator or reseller can restore grants with the following steps:

1. Navigate to WHM’s [_List Accounts_](https://docs.cpanel.net/whm/account-information/list-accounts/)
interface ( _WHM » Home » Account Information » List Accounts_).

2. Click the _+_ link next to the appropriate account.

3. Select _Sync MySQL password with account password_.

4. Enter a new password in the _Change Password_ text box.

5. Click _Change_.


#### Additional Documentation

* * *

- [The dbmaptool Script](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/)
- [The dbstoregrants Script](https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script/)
- [The manage\_mysql\_profiles Script](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/)
- [The MysqlDump Stream](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/)
- [The rebuild\_dbmap Script](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×