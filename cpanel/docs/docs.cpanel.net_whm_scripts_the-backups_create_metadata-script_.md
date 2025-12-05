---
url: "https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/"
title: "The backups_create_metadata Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/#main-content)

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
4. The backups\_create\_metadata Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [backups](https://docs.cpanel.net/tags/backups/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/#options)

* * *

## The backups\_create\_metadata Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/)

Last modified: _2022 December 1_

* * *

## Overview

The `/usr/local/cpanel/scripts/backups_create_metadata` script allows a user to create [metadata files](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/) for all account backup types.

Note:

The script will generate metadata for all directories under the `/home/username` directory, except for the `/mail` and `/.cpanel` directories.


## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/backups_create_metadata
```

## Options

Note:

You **must** provide at least one option to execute this script.


Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--all` | Creates metadata files for all backups.<br>Note:<br>You **cannot** combine the `--all` option with other options. | `/scripts/backups_create_metadata --all` |
| `--backup=[backup filename]` | Creates metadata files for the specified backup file. <br>Combine this option with the `--user` option to create metadata for the specified user in the specified backup directory. | - `/scripts/backups_create_metadata --backup=monthly/YYYY-MM-DD`<br>- `/scripts/backups_create_metadata --backup=monthly/YYYY-MM-DD --user=username` |
| `--fix_corrupt` | Scans the metadata databases for corrupt files, then repairs them.<br> Combine this option with the `--schedule_rebuild` option to rebuild the metadata in a background task. | - `/scripts/backups_create_metadata --fix_corrupt`<br>- `/scripts/backups_create_metadata --fix_corrupt --schedule_rebuild` |
| `--schedule_rebuild` | Same as the `--all` option, but runs the script in the background. <br>Combine this option with the `--fix_corrupt` option to rebuild the metadata in a background task. | - `/scripts/backups_create_metadata --schedule_rebuild`<br>- `/scripts/backups_create_metadata --schedule_rebuild --fix_corrupt` |
| `--user=[user]` | Creates metadata files for the specified user. <br>Combine this option with the `--backup=[backup filename]` option to create metadata for the specified user in the specified backup directory. | - `/scripts/backups_create_metadata --user=username`<br>- `/scripts/backups_create_metadata --user=username --backup=monthly/YYYY-MM-DD` |
| `--vacuum` | Defragments the metadata SQL database and frees unused space.<br>Note:<br>- The `-–vacuum` option will only free space if the database has unused space. If you have already used the `--vacuum` option to free database space, you cannot use it again to clear additional space.<br>- You **cannot** combine the `--vacuum` option with other options. | `/scripts/backups_create_metadata --vacuum` |

#### Additional Documentation

* * *

- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The backups\_clean\_metadata\_for\_missing\_backups Script](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/)
- [The backups\_list\_user\_files Script](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/)
- [The cpconftool Script](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×