---
url: "https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script/"
title: "The dbstoregrants Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script/#main-content)

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
4. The dbstoregrants Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [databases](https://docs.cpanel.net/tags/databases/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script/#overview)

* * *

[Call the script](https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script/#call-the-script)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script/#overview)

* * *

[Call the script](https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script/#call-the-script)

* * *

## The dbstoregrants Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script/)

Last modified: _2020 May 13_

* * *

## Overview

Sometimes, you must make changes directly to a MySQL® user’s grants in the YAML and JSON files in the `/var/cpanel/databases/` directory through the command line. Use the `/usr/local/cpanel/bin/dbstoregrants` script to synchronize changes to those grants.

This will ensure that cPanel & WHM contains changes that you make on the command line.

## Call the script

To run this script at the command line, run the following command as the root user:

```bash
/usr/local/cpanel/bin/dbstoregrants username
```

Note:

In this example, username represents the user for whom you wish to synchronize the MySQL grants changes.


To run this script for all cPanel users, run the following command as the root user:

```bash
for i in `ls -I \. -I \.\. -A /var/cpanel/users` ; do /usr/local/cpanel/bin/dbstoregrants $i ; done
```

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The dbmaptool Script](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/)
- [The manage\_mysql\_profiles Script](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/)
- [The rebuild\_dbmap Script](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×