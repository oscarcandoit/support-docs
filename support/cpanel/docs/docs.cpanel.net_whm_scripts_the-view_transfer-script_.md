---
url: "https://docs.cpanel.net/whm/scripts/the-view_transfer-script/"
title: "The view_transfer Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/#main-content)

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
4. The view\_transfer Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [restore](https://docs.cpanel.net/tags/restore/) [transfers](https://docs.cpanel.net/tags/transfers/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/#example)

* * *

## The view\_transfer Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/)

Last modified: _2022 August 15_

* * *

## Overview

The `/usr/local/cpanel/bin/view_transfer` script lets you view the logs for a transfer or restore session. These logs include the sessions for transfers and restored backups run via WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool) interface ( _WHM » Home » Transfers » Transfer Tool_). You can also restore backups with WHM’s [_Backup Restoration_](https://docs.cpanel.net/whm/backup/backup-restoration) interface ( _WHM » Home » Backup » Backup Restoration_) or by running the [`restorepkg`](https://docs.cpanel.net/whm/scripts/the-restorepkg-script) script.

Important:

You **must** run this script as the `root` user.

Note:

- To view the previous sessions, use the `view_transfer` script with those sessions’ session IDs. You can also use WHM’s [_Review Transfers and Restores_](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores) interface ( _WHM » Home » Transfers » Review Transfers and Restores_).
- The WHM API 1 [`fetch_transfer_session_log`](https://api.docs.cpanel.net/openapi/whm/operation/fetch_transfer_session_log/) function produces a similar output.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/bin/view_transfer sessionID [options]
```

Note:

In this example, [`sessionID`](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/#sessionid) is a transfer session’s ID.

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `sessionID` | **Required.**<br> The transfer session’s ID. | `10138174noroo20210208141143HpwEjUkwe` |
| `logfile` | A transfer session’s log file. When you use this option, the script prints the log file’s contents in a human-readable format. This option accepts the following log file formats: <br>- The transfer session’s log file name.<br>- `master.log` — The transfer session’s master log file.<br>- `master.error_log` — The transfer session’s the error log file. | `item-TRANSFER_AccountRemoteUser_username` |
| `--overview` | Only return an overview of the transfer’s progress. The script will **not** output the transfer’s progress status details. <br>Note:<br>This option does **not** change the script’s output if you run the script with a [log file](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/#logfile). | `--overview` |

### Example

To view a transfer session ID and its log file’s contents, use the following format:

```bash
/usr/local/cpanel/bin/view_transfer 10138174noroo20210208141143HpwEjUkwe item-TRANSFER_AccountRemoteUser_username
```

The script’s output will resemble the following example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>``` | ```bash<br>The transfer for session ID “10138174noroo20210208141143HpwEjUkwe” is complete.<br>Progress: 0% (2021-02-08 08:11:45 -0600)<br>Starting “TRANSFER” for “Account” “username”.<br>Attempting to copy “username” from “10.1.38.174”.<br>Trying to fetch cpmove file via cPanel API!<br>Fetching current backups from remote server …    0 backups found.<br> … done.<br>Starting the backup …<br>Invalid log entry: [debug: Established cpanel session<br>]<br>Remote backup started (PID 15272)<br>Progress: 20% (2021-02-08 08:11:46 -0600)<br> … done.<br>Checking remote server for backups …    1 backup found.<br>The remote server is creating the backup file “backup-2.8.2021_08-11-46_username.tar.gz”.<br>Progress: 25% (2021-02-08 08:11:51 -0600)<br>Progress: 35% (2021-02-08 08:11:51 -0600)<br>Downloading “backup-2.8.2021_08-11-46_username.tar.gz” …<br> … done.<br>extract dir name is: backup-2.8.2021_08-11-46_username<br>Progress: 80% (2021-02-08 08:11:52 -0600)<br>Progress: 100% (2021-02-08 08:11:52 -0600)<br>Success.<br>``` |

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Move All cPanel Accounts from One Server to Another](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/)
- [The transfer\_account\_as\_user Script](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/)
- [The transfer\_accounts\_as\_root Script](https://docs.cpanel.net/whm/scripts/the-transfer_accounts_as_root-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×