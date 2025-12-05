---
url: "https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/"
title: "The manage_mysql_profiles Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/#main-content)

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
4. The manage\_mysql\_profiles Script


[databases](https://docs.cpanel.net/tags/databases/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/#options)

* * *

## The manage\_mysql\_profiles Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/)

Last modified: _2021 June 21_

* * *

## Overview

The `/usr/local/cpanel/scripts/manage_mysql_profiles` allows you to import and export MySQL® profiles.

## Run the script

To use the `/usr/local/cpanel/scripts/manage_mysql_profiles` script to import or export MySQL profiles, run the following command:

```bash
/usr/local/cpanel/scripts/manage_mysql_profiles [options]
```

### Options

When you run the `/usr/local/cpanel/scripts/manage_mysql_profiles` script, you can specify the following options:

| Option | Description | Example |
| --- | --- | --- |
| `--import [/path/to/json/file]` | Import the profiles contained in the specified JSON file. <br>Note:<br>You can specify `--force` to forcibly import and overwrite any existing profiles. | ```bash<br>/usr/local/cpanel/scripts/manage_mysql_profiles –import import.json<br>``` |
| `--export [profile name]` | Export one or more profiles. <br> To export more than one profile, specify multiple switches. <br> To export the list to a file, specify the `export_to` switch or redirect via `STDOUT`. | |     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>codeblocknumbers<br>/usr/local/cpanel/scripts/manage_mysql_profiles --export profile<br>/usr/local/cpanel/scripts/manage_mysql_profiles --export profile1 --export profile2<br>/usr/local/cpanel/scripts/manage_mysql_profiles --export profile1 --export_to export.json <br>``` | |
| `--activate [profile name]` | Activate the specified profile, and mark it as the active profile for the system. | ```bash<br>/usr/local/cpanel/scripts/manage_mysql_profiles –activate profile1<br>``` |
| `--recreate_active_profile` | If no active profile exists on the system, this option creates a profile from the information in the `/root/.my.cnf` file. | ```bash<br>/usr/local/cpanel/scripts/manage_mysql_profiles –recreate_active_profile<br>``` |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The build\_mysql\_conf Script](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/)
- [The dbmaptool Script](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/)
- [The dbstoregrants Script](https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script/)
- [The rebuild\_dbmap Script](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×