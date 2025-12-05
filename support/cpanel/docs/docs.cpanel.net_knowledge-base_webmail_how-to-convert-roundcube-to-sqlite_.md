---
url: "https://docs.cpanel.net/knowledge-base/webmail/how-to-convert-roundcube-to-sqlite/"
title: "How to Convert Roundcube to SQLite | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/webmail/how-to-convert-roundcube-to-sqlite/#main-content)

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
3. [Webmail](https://docs.cpanel.net/knowledge-base/webmail/)
4. How to Convert Roundcube to SQLite


[roundcube](https://docs.cpanel.net/tags/roundcube/) [sqlite](https://docs.cpanel.net/tags/sqlite/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-convert-roundcube-to-sqlite/#overview)

* * *

[Path and filename for the SQLite database](https://docs.cpanel.net/knowledge-base/webmail/how-to-convert-roundcube-to-sqlite/#path-and-filename-for-the-sqlite-database)

* * *

[Convert Roundcube to SQLite database](https://docs.cpanel.net/knowledge-base/webmail/how-to-convert-roundcube-to-sqlite/#convert-roundcube-to-sqlite-database)

* * *

[Migrate a Roundcube MySQL database to a SQLite database](https://docs.cpanel.net/knowledge-base/webmail/how-to-convert-roundcube-to-sqlite/#migrate-a-roundcube-mysql-database-to-a-sqlite-database)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/webmail/how-to-convert-roundcube-to-sqlite/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-convert-roundcube-to-sqlite/#overview)

* * *

[Path and filename for the SQLite database](https://docs.cpanel.net/knowledge-base/webmail/how-to-convert-roundcube-to-sqlite/#path-and-filename-for-the-sqlite-database)

* * *

[Convert Roundcube to SQLite database](https://docs.cpanel.net/knowledge-base/webmail/how-to-convert-roundcube-to-sqlite/#convert-roundcube-to-sqlite-database)

* * *

[Migrate a Roundcube MySQL database to a SQLite database](https://docs.cpanel.net/knowledge-base/webmail/how-to-convert-roundcube-to-sqlite/#migrate-a-roundcube-mysql-database-to-a-sqlite-database)

* * *

## How to Convert Roundcube to SQLite

Last modified: _2024 February 8_

* * *

## Overview

The `/usr/local/cpanel/scripts/convert_roundcube_mysql2sqlite` script updates the Roundcube configuration to use individual SQLite databases instead of a single MySQL® database. This document explains how to use that script.

Warning:

If you change Roundcube’s database to a SQLite database, you **cannot** revert back to a MySQL database.


The SQLite database provides the following benefits over a MySQL database:

- You can restore Roundcube data more easily. The system stores each email user’s Roundcube data in a separate SQLite database. This behavior allows you to restore data for a single user and not the entire system.
- You can track disk usage properly because the system stores the Roundcube data within a cPanel user’s `/home` directory.
- You can locate problematic accounts more easily because the Roundcube PHP processes run as the cPanel user.
- A single point of failure does not exist, and database corruptions only impact a single user, not the entire system.

## Path and filename for the SQLite database

The SQLite database uses the following path and filename, where `username` represents your cPanel account username and `domain` represents your domain name:

```perl
/home/username/etc/domain/username.rcube.db
```

## Convert Roundcube to SQLite database

To convert the Roundcube database in cPanel & WHM from MySQL to SQLite, run the following command:

```perl
/usr/local/cpanel/scripts/convert_roundcube_mysql2sqlite
```

After you convert the system to a SQLite database, you can use this script to troubleshoot issues with specific users.

To convert the Roundcube data for a single cPanel user from MySQL to SQLite, run the same command with the `user` parameter, where `user` represents the database user:

```perl
/usr/local/cpanel/scripts/convert_roundcube_mysql2sqlite user
```

## Migrate a Roundcube MySQL database to a SQLite database

To migrate a Roundcube database from one cPanel & WHM server to another and convert the data from a MySQL database to a SQLite database, perform the following steps:

1. On the source cPanel & WHM server, create a backup of the Roundcube database. To do this, run the following command, where `roundcube` represents the Roundcube database:



```perl
mysqldump roundcube > roundcube.dump
```

2. On the destination cPanel & WHM server, create a temporary MySQL database. To do this, follow the directions in our [_Manage My Databases_](https://docs.cpanel.net/cpanel/databases/manage-my-databases/) documentation.

3. On the destination cPanel & WHM server, open the `/usr/local/cpanel/scripts/convert_roundcube_mysql2sqlite` script and convert the following code snippet to a comment:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br>--><br>                unless ( defined $opt_dbname ) {<br>                    Cpanel::Email::RoundCube::archive_and_drop_mysql_roundcube($logger);<br>                }<br><--<br>``` |

4. On the destination cPanel & WHM server, import the Roundcube data to the database and convert the data to SQLite. Run the following command on the destination cPanel & WHM server, where `user` represents the database user and `exampledatabase` represents the database for which to import the Roundcube data:



```perl
/usr/local/cpanel/scripts/convert_roundcube_mysql2sqlite user exampledatabase
```

5. The server will attempt to convert the Roundcube mailbox. If it encounters any errors, it will repeat the process until the conversion is successful.


#### Additional Documentation

* * *

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
- [Webmail Clients](https://docs.cpanel.net/webmail/webmail-clients/)
- [How to Manually Migrate Horde Data to Roundcube](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/)
- [How to Set Up Calendars and Contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/)
- [The export\_horde\_calendars\_to\_ics Script](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×