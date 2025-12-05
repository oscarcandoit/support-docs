---
url: "https://docs.cpanel.net/whm/scripts/the-backup-script/"
title: "The backup Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-backup-script/#main-content)

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
4. The backup Script


[backups](https://docs.cpanel.net/tags/backups/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-backup-script/#overview)

* * *

[Run a manual backup](https://docs.cpanel.net/whm/scripts/the-backup-script/#run-a-manual-backup)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-backup-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-backup-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-backup-script/#overview)

* * *

[Run a manual backup](https://docs.cpanel.net/whm/scripts/the-backup-script/#run-a-manual-backup)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-backup-script/#options)

* * *

## The backup Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-backup-script/)

Last modified: _2025 July 14_

* * *

## Overview

Use the `/usr/local/cpanel/bin/backup` script to run a manual backup in WHM via the command line. The system reads the backup configuration file and then performs the actions defined in the file. By default, the system performs this process in the background. You can review the log file in the `/usr/local/cpanel/logs/cpbackup` directory.

## Run a manual backup

To run a backup manually, log in to the command line via SSH as the `root` user and run the following command:

```bash
/usr/local/cpanel/bin/backup
```

### Options

The `/usr/local/cpanel/bin/backup` script accepts the following options:

| Option | Description | Example |
| --- | --- | --- |
| `debug` | Runs the backup in the foreground and prints its progress on the command line. | `--debug` |
| `force` | Performs an additional backup, even if the system already contains up-to-date backup files. | `--force` |
| `allow-override` | When the system performs the backup, use the [pkgacct script](https://docs.cpanel.net/whm/scripts/the-pkgacct-script) in the the `/var/cpanel/lib/Whostmgr/Pkgacct/pkgacct` directory. | `--allow-override` |
| `help` | Displays additional information. | `--help` |

#### Additional Documentation

* * *

- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The backups\_clean\_metadata\_for\_missing\_backups Script](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/)
- [The backups\_create\_metadata Script](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/)
- [The backups\_list\_user\_files Script](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/)
- [The cpconftool Script](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×