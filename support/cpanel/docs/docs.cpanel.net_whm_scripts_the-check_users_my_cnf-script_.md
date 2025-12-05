---
url: "https://docs.cpanel.net/whm/scripts/the-check_users_my_cnf-script/"
title: "The check_users_my_cnf Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-check_users_my_cnf-script/#main-content)

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
4. The check\_users\_my\_cnf Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-check_users_my_cnf-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-check_users_my_cnf-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-check_users_my_cnf-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-check_users_my_cnf-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-check_users_my_cnf-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-check_users_my_cnf-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-check_users_my_cnf-script/#options)

* * *

## The check\_users\_my\_cnf Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-check_users_my_cnf-script/)

Last modified: _2022 February 1_

* * *

## Overview

The `/usr/local/cpanel/scripts/check_users_my_cnf` script checks cPanel accounts for any invalid `~/.my.cnf` files and renames them. This lets you view any settings in the invalid files that you may want to copy to new files. By default, the script checks all cPanel accounts. The script only returns output when it detects an invalid file.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/check_users_my_cnf [options]
```

## Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--dryrun` | Run the script, but do **not** disable any invalid `.my.cnf` files. | `--dryrun` |
| `--perm-only` | Only perform a file permission and file ownership check. This option ignores whether the MySQL database is online. | `--perm-only` |
| `--user` | Run the script for a specific user. To run the script for multiple users, pass this option for each user. | `--user=username`<br>`--user=userA``--user=userB` |
| `--verbose` | Run the script in verbose mode. | `--verbose` |
| `--help` | Display the script’s help documentation. | `--help` |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The backups\_clean\_metadata\_for\_missing\_backups Script](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×