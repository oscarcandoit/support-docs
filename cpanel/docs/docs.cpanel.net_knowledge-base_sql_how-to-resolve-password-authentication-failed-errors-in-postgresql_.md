---
url: "https://docs.cpanel.net/knowledge-base/sql/how-to-resolve-password-authentication-failed-errors-in-postgresql/"
title: "How to Resolve Password Authentication Failed Errors in PostgreSQL® | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/sql/how-to-resolve-password-authentication-failed-errors-in-postgresql/#main-content)

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
4. How to Resolve Password Authentication Failed Errors in PostgreSQL®


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [postgresql](https://docs.cpanel.net/tags/postgresql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/sql/how-to-resolve-password-authentication-failed-errors-in-postgresql/#overview)

* * *

[Solution](https://docs.cpanel.net/knowledge-base/sql/how-to-resolve-password-authentication-failed-errors-in-postgresql/#solution)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/sql/how-to-resolve-password-authentication-failed-errors-in-postgresql/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/sql/how-to-resolve-password-authentication-failed-errors-in-postgresql/#overview)

* * *

[Solution](https://docs.cpanel.net/knowledge-base/sql/how-to-resolve-password-authentication-failed-errors-in-postgresql/#solution)

* * *

## How to Resolve Password Authentication Failed Errors in PostgreSQL®

Last modified: _2020 April 6_

* * *

## Overview

If your server returns a Password authentication failed for user error when you try to access MySQL® resources, the most likely culprit is an invalid or missing PostgreSQL® user password.

## Solution

Check the `/root/.pgpass` password file to confirm that the password exists in `::*:postgres:PASSWORD` format.

If the password does not exist, you must edit the `/var/lib/pgsql/data/pg_hba.conf` file directly. To do this:

1. Stop Tailwatch. To do this, run the following commands:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>touch /etc/tailwatchddisable<br>killall tailwatchd<br>``` |

2. Edit the `/var/lib/pgsql/data/pg_hba.conf` file and change the `md5` value to the `trust` value.

3. Restart PostgreSQL. To do this, run the `/usr/local/cpanel/scripts/restartsrv_postgresql` command.

4. Change the PostgreSQL password. To do this, run the following command, where `new_pass` represents the new password:


```bash
postgres=# alter user postgres with encrypted password =new_pass postgres=# \q
```

5. Edit the `/var/lib/pgsql/data/pg_hba.conf` file and change the `trust` value to the `md5` value.

6. Remove the Tailwatch touch file and restart the service. To do this, run the following commands:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>rm /etc/tailwatchddisable<br>/usr/local/cpanel/scripts/restartsrv_tailwatchd<br>``` |


Previously, the system stored passwords in the `/var/lib/pgsql/.pgpass` file.

If the `/root/.pgpass` file does not exist, the system copies the `.pgpass` file to the `/root/.pgpass` file.

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Configure PostgreSQL](https://docs.cpanel.net/whm/sql-services/configure-postgresql/)
- [The MysqlDump Stream](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×