---
url: "https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/"
title: "The remote_log_transfer Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/#main-content)

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
4. The remote\_log\_transfer Script


[logs](https://docs.cpanel.net/tags/logs/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/#options)

* * *

[The transfer option](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/#the-transfer-option)

* * *

[Log paths](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/#log-paths)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/#options)

* * *

[The transfer option](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/#the-transfer-option)

* * *

[Log paths](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/#log-paths)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/#example)

* * *

## The remote\_log\_transfer Script

_Valid for versions 108 through the latest version_

#### Version:

#### [108](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/)

Last modified: _2024 March 27_

* * *

## Overview

Use the `/usr/local/cpanel/scripts/remote_log_transfer` script to copy the main system and user logs from a server to a backup destination you set in WHM. The script uses the destination from the _Additional Destinations_ tab in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/#the-additional-destinations-tab) interface ( _WHM » Home » Backups » Backup Configuration_).

## Run the script

To run this script on the command line, use the following format:

```perl
/usr/local/cpanel/scripts/remote_log_transfer --action=[command] [options]
```

## Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--action` | **Required**<br>Use with one of these commands:<br>- `list` — List all log paths whose files the script transfers<br>- `transfer` — Transfer logs to the remote server | `/usr/local/cpanel/scripts/remote_log_transfer --action=list` |
| `--help` | Display the script’s help documentation. | `--help` |
| `--morehelp` | Display the script’s verbose help documentation. | `--morehelp` |

## The transfer option

Use the following options with the `--action=transfer` option:

| Options | Description | Example |
| --- | --- | --- |
| `--debug` | Show verbose debug output. | `--debug` |
| `--destid` | **Required**<br>The `Destination ID` from the _Additional Destinations_ tab in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/#the-additional-destinations-tab) interface ( _WHM » Home » Backups » Backup Configuration_). To back up to more than one destination, separate the `Destination IDs` with commas. | `--destid=TAMdl6LZCxQELuUAVO20SjQm` |
| `--keep` | Do not delete the local log file backup after transfer to the remote destination(s). | `--keep` |
| `--local_dir` | The local directory where the script stores the compressed log files’ [tarball](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#tarball) before transfer to the remote destination. This option defaults to the `/backup` directory.<br>Note:<br>- If the local directory is on a mounted drive, you **must** mount it before you use this option.<br>- The script uses the local directory path, the server’s hostname, and the backup timestamp to create the tarball filename. The timestamp is in the `YYYY-MM-DD:HH:MI:SS` format, where:<br>  <br>  - `YYYY` is the year.<br>  - `MM` is the month.<br>  - `DD` is the date.<br>  - `HH` is the hour.<br>  - `MI` is the minute.<br>  - `SS` is the second.<br>For example, if the local directory is `/mnt/backups`, and you run the script at `14:54:00` on `05/10/2022`, the script will create the `/mnt/backups/log_backup_server.cpanel.net_2022-05-10-14:54:00.tar.bz2` tarball file. | `/mnt/backups` |
| `--remote_dir` | The path the system uses to store the backups on the remote server. The path can be either relative or absolute to meet the transfer destination’s requirements. This option defaults to the `log_backups` directory. | `--remote_dir=backups/logs/Atlanta` |

## Log paths

The script transfers log files from these directories:

- `/var/log`
- `/usr/local/cpanel/logs`
- `/var/cpanel/logs`
- `/var/cpanel/updatelogs`
- `/$home/$user/logs`, where `$home` is the user’s home directory and `$user` is the cPanel account username.

You can add additional custom log paths in the `/var/cpanel/config/extra_remote_transfer_paths.txt` file. You must use the absolute path to the file, for example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>/etc/apache2/logs<br>/var/cpanel/analytics/logs<br>/usr/local/cpanel/3rdparty/mailman/logs<br>``` |

## Example

The following example transfers the logs to the backup destination with the `Destination ID` of `TAMdl6LZCxQELuUAVO20SjQm`. It stores the logs in the remote `/backups/logs/Atlanta` directory and keeps the local backup file in the `/mnt/backups` directory:

```bash
/usr/local/cpanel/scripts/remote_log_transfer --action=transfer --destid=TAMdl6LZCxQELuUAVO20SjQm --remote_dir=/backups/logs/Atlanta --local_dir=/mnt/backups --keep
```

If the script succeeds, it will return output similar to the following example:

```bash
Successful transfer of /mnt/backups/log_backup_server.cpanel.net_2022-05-10-14:54:00.tar.bz2 to /backups/logs/Atlanta/log_backup_server.cpanel.net_2022-05-10-14:54:00.tar.bz2 for destination backupsrv
```

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Daily Process Log](https://docs.cpanel.net/whm/server-status/daily-process-log/)
- [Errors](https://docs.cpanel.net/cpanel/metrics/errors/)
- [Log Rotation](https://docs.cpanel.net/whm/service-configuration/log-rotation/)
- [The slurp\_exim\_mainlog Script](https://docs.cpanel.net/whm/scripts/the-slurp_exim_mainlog-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×