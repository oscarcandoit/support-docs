---
url: "https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/"
title: "The rebuild_dbmap Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/#main-content)

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
4. The rebuild\_dbmap Script


[databases](https://docs.cpanel.net/tags/databases/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/#options)

* * *

[Examples](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/#examples)

* * *

[Files](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/#files)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/#options)

* * *

[Examples](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/#examples)

* * *

[Files](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/#files)

* * *

## The rebuild\_dbmap Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/)

Last modified: _2022 December 7_

* * *

## Overview

If the database map is corrupt for a cPanel user, you can use the `/usr/local/cpanel/scripts/rebuild_dbmap` script to rebuild that user’s database map.

Important:

- Only the `root` user can run this script.
- The system treats each option individually. If you pass an invalid value with an option, the script will fail.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/rebuild_dbmap dbuser
```

## Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `dbuser` | **Required**<br>The cPanel user for whom to rebuild map information. | `example` |
| `--noop` | Display the results of a test run of the script, but do not perform any changes. | `--noop` |
| `--help` | Display the script’s help documentation. | `--help` |

## Examples

The following example displays the results for the `example` user but does not perform any changes:

```bash
/usr/local/cpanel/scripts/rebuild_dbmap example --noop
```

If the script succeeds, the output will resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>Operating in no-op mode; no changes will be made to your system.<br>Reading access rights for the cPanel user "example" from live data:<br> MariaDB/MySQL ... PostgreSQL ... Done.<br>``` |

The following example generates and installs the database map data for the `example` user:

```bash
/usr/local/cpanel/scripts/rebuild_dbmap example
```

If the script succeeds, the output will resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```bash<br>Reading access rights for the cPanel user "example" from live data:<br> MariaDB/MySQL ... PostgreSQL ... Done.<br>Old DB map file backed up at:<br>    /var/cpanel/databases/example_backup_2015-07-14_17:17:49_31314.json<br>Old DB map file removed.<br>Saving: MariaDB/MySQL ... PostgreSQL ... Done!<br>Rebuild complete.<br>``` |

## Files

This script writes to database map files in the `/var/cpanel/databases/` directory. In the example given above, the script rebuilds the `/var/cpanel/databases/example.json` file, which will resemble the following example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>``` | ```bash<br>---<br>MYSQL:<br>  example_database:<br>    - example_test<br>  example_test:<br>    - example_test<br>  example_test123xxxxxxxxxxxxmxmxmxmxmxmxmxmxmxmxmxmxmxmxmxmxmxmx: []<br>  example_test2:<br>    - example_test4<br>  example_wp: []<br>PGSQL:<br>  example_test: []<br>``` |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The dbmaptool Script](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/)
- [The dbstoregrants Script](https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script/)
- [The manage\_mysql\_profiles Script](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×