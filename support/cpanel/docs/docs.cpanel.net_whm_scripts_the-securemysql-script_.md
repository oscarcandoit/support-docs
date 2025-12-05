---
url: "https://docs.cpanel.net/whm/scripts/the-securemysql-script/"
title: "The securemysql Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-securemysql-script/#main-content)

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
4. The securemysql Script


[mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-securemysql-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-securemysql-script/#run-the-script)

* * *

[Arguments](https://docs.cpanel.net/whm/scripts/the-securemysql-script/#arguments)

* * *

[Actions](https://docs.cpanel.net/whm/scripts/the-securemysql-script/#actions)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-securemysql-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-securemysql-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-securemysql-script/#run-the-script)

* * *

[Arguments](https://docs.cpanel.net/whm/scripts/the-securemysql-script/#arguments)

* * *

[Actions](https://docs.cpanel.net/whm/scripts/the-securemysql-script/#actions)

* * *

## The securemysql Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-securemysql-script/)

Last modified: _2024 June 3_

* * *

## Overview

The `/usr/local/cpanel/scripts/securemysql` script secures a cPanel account’s MySQL® configuration. To do this, the script performs the following actions:

- Confirms that MySQL’s `root` password exists.

- Changes the `var/db/mysql` and `var/lib/mysql` directories’ ownership to the `mysql` user.

- Removes the `anonymous` and remote `root` users.

- Removes the test database.

- Removes the database’s `LOCK TABLES` and `TMP TABLES` privileges.


To undo any changes that this script performs, create the `/etc/securemysqldisable` touch file.

## Run the script

To use this script, run the following command as the root user:

```bash
/usr/local/cpanel/scripts/securemysql [arguments] [actions]
```

### Arguments

The `/usr/local/cpanel/scripts/securemysql` script accepts the following arguments:

- `-a` — Specify additional actions in a comma-separated list. For example:




```bash
  -a removeanon, removeremoteroot
```





Note:





To perform all actions on a MySQL database, pass the `-a` argument without any additional actions.





For a list of additional actions, view the [_Actions_](https://docs.cpanel.net/whm/scripts/the-securemysql-script/#actions) section below.

- `-F` — Execute the script and do not display the help text.

- `-h` — Display the help message.

- `-q` — Execute the script in silent mode.


### Actions

You can specify any of the following options in a comma-separated list with the `-a` argument:

- `chowndatadir` — Change the MySQL data directory owner to the `mysql` user.

- `removeanon` — Remove any anonymous MySQL users.

- `removehordeallhosts` — Remove insecure Horde login credentials and privileges.







Note:





cPanel & WHM uses SQLite databases to store MySQL user data instead of Horde databases.

- `removehordeblankpass` — Remove Horde database users that possess blank login passwords.







Note:





cPanel & WHM uses SQLite databases to store MySQL user data instead of Horde databases.

- `removelockntmp` — Remove global `LOCK TABLES` permissions and create `TMP TABLES` privileges.

- `removepublicgrants` — Remove default privileges for MariaDB users.







Note:





In MariaDB 10.11 and later, MariaDB automatically creates a `test` database and grants users [all privileges](https://mariadb.org/grant-to-public-in-mariadb/) for it and **any** database whose name starts with `test_`. This action **removes** these privileges, preventing potential security concerns.

- `removeremoteroot` — Remove remote `root` user login privileges.

- `removetestdb` — Remove test database.


#### Additional Documentation

* * *

- [Additional MySQL Access Hosts](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/)
- [Change Database Root Password](https://docs.cpanel.net/whm/database-services/change-database-root-password/)
- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The build\_mysql\_conf Script](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/)
- [The manage\_mysql\_profiles Script](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×