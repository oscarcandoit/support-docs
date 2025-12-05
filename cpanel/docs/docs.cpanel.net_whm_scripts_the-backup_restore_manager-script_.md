---
url: "https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/"
title: "The backup_restore_manager Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#main-content)

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
4. The backup\_restore\_manager Script


[backups](https://docs.cpanel.net/tags/backups/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#options)

* * *

[Add an account to the queue](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#add-an-account-to-the-queue)

* * *

[Remove an account from the queue](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#remove-an-account-from-the-queue)

* * *

[Additional options](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#additional-options)

* * *

[Examples](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#examples)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#options)

* * *

[Add an account to the queue](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#add-an-account-to-the-queue)

* * *

[Remove an account from the queue](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#remove-an-account-from-the-queue)

* * *

[Additional options](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#additional-options)

* * *

[Examples](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#examples)

* * *

## The backup\_restore\_manager Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)

Last modified: _2022 July 28_

* * *

## Overview

The `/usr/local/cpanel/bin/backup_restore_manager` script manages the [backup restoration queue](https://docs.cpanel.net/whm/backup/backup-restoration). You can use this script to [add](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#add) or [remove](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/#remove) users from the queue.

This script also lets you:

- View which cPanel account backups the system is restoring.
- Display the current state of the backup restoration process.
- Remove finished backup restorations from the queue.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/bin/backup_restore_manager [options]
```

## Options

The script accepts the following options, depending the chosen operation:

### Add an account to the queue

Use the following options with this script when adding a cPanel account to the backup restoration queue:

| Option | Description | Example |
| --- | --- | --- |
| `user` | **Required.**<br> The cPanel account’s username. | `user=username` |
| `add` | **Required.**<br> Add an account to the queue. | `add` |
| `restore_point` | **Required.**<br> Queue the account’s backup restoration for a specific date, in `YYYY-MM-DD` format. | `restore_point=2021-01-25` |
| `destid` | The backup source’s destination ID. This option defaults to `local`. | `destid=0BRL4p7lZnfoCsaH8xj6821P` |
| `give_ip` | Assign the account a dedicated IP address during the backup restoration process. <br>- `1` — Assign a dedicated IP address.<br>- `0` — Do **not** assign a dedicated IP address.<br>This option defaults to `0`. | `give_ip=1` |
| `mail_config` | Restores the account’s email configuration that appear in the account’s backup file. <br>- `1` — Restore the account’s email configuration.<br>- `0` — Do **not** restore the account’s email configuration.<br>This option defaults to `0`. | `mail_config=1` |
| `mysql` | Restore the account’s MySQL® databases that appear in the account’s backup file. <br>- `1` — Restore the account’s MySQL databases.<br>- `0` — Do **not** restore the account’s MySQL databases.<br>This option defaults to `0`. | `mysql=1` |
| `subdomains` | Restores any subdomains that appear in the account’s backup file. <br>- `1` — Restore the account’s subdomains.<br>- `0` — Do **not** restore the account’s subdomains.<br>This option defaults to `0`. | `subdomains=1` |

### Remove an account from the queue

Use the following options with this script when deleting a cPanel account from the backup restoration queue:

| Option | Description | Example |
| --- | --- | --- |
| `user` | **Required.**<br> The cPanel account’s username. | `user=username` |
| `delete` | **Required.**<br> Remove the account from the queue. | `delete` |
| `delete_finished` | Remove the account from the `completed` queue. | `delete_finished` |
| `start_time` | The time at which to remove the account from the `completed` queue, in [Epoch Unix Time format](https://en.wikipedia.org/wiki/Unix_time). <br>Important:<br>You must use this option with the `delete_finished` option. | `start_time=1611595457` |

### Additional options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `activate` | Process the current `pending` queue. | `activate` |
| `delete_all_failed` | Delete all failed entries in the `completed` queue. | `delete_all_failed` |
| `delete_all_finished` | Delete all entries in the `completed` queue. | `delete_all_finished` |
| `delete_all_pending` | Delete all entries in the `pending` queue. | `delete_all_pending` |
| `delete_all_regardless` | Delete all entries in the `pending`, `active`, and `completed` queues, regardless of their status. | `delete_all_regardless` |
| `is_active` | Display if the restoration process currently in progress. | `is_active` |
| `list` | Display all entries in the backup restoration queue. | `list` |
| `list_active` | Display all backup restorations currently in progress. | `list_active` |
| `list_finished` | Display all completed backup restorations. | `list_finished` |
| `state` | Display the queue status of all backup restorations (`pending`, `active`, and `completed`) and whether the system finished the process (`start` or `end`). | `state` |

## Examples

Add an account to the backup restoration queue with a destination ID and include the backup file’s MySQL, email configuration, and subdomain settings:

```bash
/usr/local/cpanel/bin/backup_restore_manager add user=username restore_point=2021-01-25 destid=0BRL4p7lZnfoCsaH8xj6821P mysql=1 mail_config=1 subdomains=1
```

Display all entries in the queue:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```bash<br>/usr/local/cpanel/bin/backup_restore_manager list<br>``` |

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```bash<br>======[ username ]==============================<br>destid = 0BRL4p7lZnfoCsaH8xj6821P<br>give_ip = 0<br>mail_config = 1<br>mysql = 1<br>subdomains = 1<br>restore_point = 2021-01-25<br>result = 1<br>reason = OK<br>``` |

Display the current state of the backup restoration queue:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```bash<br>/usr/local/cpanel/bin/backup_restore_manager state<br>``` |

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>``` | ```bash<br>is_active=0<br>start [pending]<br>======[ username ]==============================<br>destid = 0BRL4p7lZnfoCsaH8xj6821P<br>give_ip = 0<br>mail_config = 0<br>mysql = 0<br>subdomains = 0<br>restore_point = 2021-01-25<br>end [pending]<br>start [completed]<br>end [completed]<br>start [active]<br>end [active]<br>result = 1<br>reason = OK<br>``` |

Delete an account from the `completed` queue:

```bash
/usr/local/cpanel/bin/backup_restore_manager delete_finished user=username start_time=1611619200
```

#### Additional Documentation

* * *

- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backups\_clean\_metadata\_for\_missing\_backups Script](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/)
- [The backups\_create\_metadata Script](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/)
- [The backups\_list\_user\_files Script](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/)
- [The cpconftool Script](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×