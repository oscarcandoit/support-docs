---
url: "https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/"
title: "The dbmaptool Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/#main-content)

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
3. [Scripts](https://docs.cpanel.net/whm/scripts/)
4. The dbmaptool Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [databases](https://docs.cpanel.net/tags/databases/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/#example)

* * *

## The dbmaptool Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/)

Last modified: _2021 January 29_

* * *

## Overview

The `/usr/local/cpanel/bin/dbmaptool` script grants ownership of databases and database users to a cPanel account.

Note:

This script does not map a virtual user to a database.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/bin/dbmaptool [user] [options]
```

### Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `user` | **Required.**<br> The cPanel username to grant database ownership to. | `username` |
| `--dbs` | A comma-separated list of the database names that the account will own. | `--dbs 'db1, db2'` |
| `--dbusers` | A comma-separated list of the database users that the account will own. | `--dbusers 'virt1, virt2'` |
| `--type` | The database type: <br>- `mysql` — MySQL® database.<br>- `pg` — PostgreSQL® database. | `--type 'mysql'` |
| `--help` | Display the script’s help documentation. | `--help` |

### Example

To grant ownership of the `db1` and `db2` MySQL databases and the `virt1` and `virt2` database users to the `username` cPanel account, run the following command:

```bash
/usr/local/cpanel/bin/dbmaptool username --type 'mysql' --dbs 'db1, db2' --dbusers 'virt1, virt2'
```

If the script succeeds, it will **not** return output.

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The dbstoregrants Script](https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script/)
- [The manage\_mysql\_profiles Script](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/)
- [The rebuild\_dbmap Script](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×