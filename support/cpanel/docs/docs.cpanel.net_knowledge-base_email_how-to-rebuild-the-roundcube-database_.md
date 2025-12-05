---
url: "https://docs.cpanel.net/knowledge-base/email/how-to-rebuild-the-roundcube-database/"
title: "How to Rebuild the Roundcube Database | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/how-to-rebuild-the-roundcube-database/#main-content)

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
3. [Email](https://docs.cpanel.net/knowledge-base/email/)
4. How to Rebuild the Roundcube Database


[roundcube](https://docs.cpanel.net/tags/roundcube/) [webmail](https://docs.cpanel.net/tags/webmail/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-rebuild-the-roundcube-database/#overview)

* * *

[Path and filename for the database](https://docs.cpanel.net/knowledge-base/email/how-to-rebuild-the-roundcube-database/#path-and-filename-for-the-database)

* * *

[Rebuild a Roundcube database](https://docs.cpanel.net/knowledge-base/email/how-to-rebuild-the-roundcube-database/#rebuild-a-roundcube-database)

* * *

[MySQL database](https://docs.cpanel.net/knowledge-base/email/how-to-rebuild-the-roundcube-database/#mysql-database)

* * *

[SQLite database](https://docs.cpanel.net/knowledge-base/email/how-to-rebuild-the-roundcube-database/#sqlite-database)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/how-to-rebuild-the-roundcube-database/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-rebuild-the-roundcube-database/#overview)

* * *

[Path and filename for the database](https://docs.cpanel.net/knowledge-base/email/how-to-rebuild-the-roundcube-database/#path-and-filename-for-the-database)

* * *

[Rebuild a Roundcube database](https://docs.cpanel.net/knowledge-base/email/how-to-rebuild-the-roundcube-database/#rebuild-a-roundcube-database)

* * *

[MySQL database](https://docs.cpanel.net/knowledge-base/email/how-to-rebuild-the-roundcube-database/#mysql-database)

* * *

[SQLite database](https://docs.cpanel.net/knowledge-base/email/how-to-rebuild-the-roundcube-database/#sqlite-database)

* * *

## How to Rebuild the Roundcube Database

Last modified: _2024 April 17_

* * *

## Overview

If your Roundcube database fails to restart or becomes corrupt, you can rebuild the Roundcube database to repair it. This document explains how to rebuild a Roundcube database.

## Path and filename for the database

The SQLite database uses the following path and filename, where `username` represents a cPanel account username and `domain` represents a domain name:

```perl
/home/username/etc/domain/username.rcube.db
```

Additionally, the database applies the following naming conventions, where `username` represents a cPanel account username:

| Name | Description | Example |
| --- | --- | --- |
| `/home/username/etc/domain/username.rcube.db.1495814375` | A backup file with a Unix timestamp. | `username.rcube.db.1495814375` |
| `/home/username/etc/domain/username.rcube.db.latest` | A symlink to the latest Roundcube backup. | `username.rcube.db.latest` |
| `/home/username/etc/domain/username.rcube.db.datestamp.sqlite2` | An SQLite v2 backup file. | `username.rcube.db.20170523105040.sqlite2` |

## Rebuild a Roundcube database

To update a Roundcube database, run one of the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>/usr/local/cpanel/bin/update-roundcube-db<br>/usr/local/cpanel/bin/update-roundcube-sqlite-db<br>``` |

Note:

The `/usr/local/cpanel/bin/update-roundcube-db` script will update your database whether you use MySQL® or SQLite. The script recognizes whether you use SQLite and automatically runs the `/usr/local/cpanel/bin/update-roundcube-sqlite-db` script.


### MySQL database

Use the `/usr/local/cpanel/bin/update-roundcube-db` script to rebuild a Roundcube MySQL database.

To rebuild a Roundcube database, run the following command:

```perl
/usr/local/cpanel/bin/update-roundcube-db
```

If the script succeeds, you will receive a message that resembles the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```go<br>info [update-roundcube-db] Roundcube update from 1.1.4-7.cp1162 to 1.1.4-7.cp1162 in progress.<br>info [update-roundcube-db] Roundcube will be locked out during this process.<br>info [update-roundcube-db] Archiving current Roundcube data to /var/cpanel/roundcube/roundcube.backup.sql.1479139688<br>info [update-roundcube-db] Roundcube DB successfully archived<br>info [update-roundcube-db] Cleaning old Roundcube data archives<br>info [update-roundcube-db] Removing old backup: roundcube.backup.sql.1467293128<br>info [update-roundcube-db] Schema update to 1.1.4-7.cp1162 was successful<br>info [update-roundcube-db] Roundcube updated to 1.1.4-7.cp1162<br>``` |

### SQLite database

Use the `/usr/local/cpanel/bin/update-roundcube-sqlite-db` script to rebuild a Roundcube SQLite database.

To rebuild a Roundcube database, run the following command:

```perl
/usr/local/cpanel/bin/update-roundcube-sqlite-db
```

If the script succeeds, you will receive a message that resembles following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```go<br>info [update-roundcube-db] Roundcube update from 1.1.4-7.cp1162 to 1.1.4-7.cp1162 in progress.<br>info [update-roundcube-db] Roundcube will be locked out during this process.<br>info [update-roundcube-db] Archiving current Roundcube data to /var/cpanel/roundcube/roundcube.backup.sql.1479139822<br>info [update-roundcube-db] Roundcube DB successfully archived<br>info [update-roundcube-db] Cleaning old Roundcube data archives<br>info [update-roundcube-db] Removing old backup: roundcube.backup.sql.1469194482<br>info [update-roundcube-db] Schema update to 1.1.4-7.cp1162 was successful<br>info [update-roundcube-db] Roundcube updated to 1.1.4-7.cp1162<br>``` |

#### Additional Documentation

* * *

- [Email Accounts](https://docs.cpanel.net/cpanel/email/email-accounts/)
- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Calendars and Contacts Management](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-management/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [Email Disk Usage](https://docs.cpanel.net/cpanel/email/email-disk-usage/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×