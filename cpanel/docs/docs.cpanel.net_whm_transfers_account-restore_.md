---
url: "https://docs.cpanel.net/whm/transfers/account-restore/"
title: "Account Restore | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/transfers/account-restore/#main-content)

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
3. [Transfers](https://docs.cpanel.net/whm/transfers/)
4. Account Restore


[transfers](https://docs.cpanel.net/tags/transfers/) [restore](https://docs.cpanel.net/tags/restore/) [whmui](https://docs.cpanel.net/tags/whmui/) [logs](https://docs.cpanel.net/tags/logs/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/transfers/account-restore/#overview)

* * *

[In Progress](https://docs.cpanel.net/whm/transfers/account-restore/#in-progress)

* * *

[Completed](https://docs.cpanel.net/whm/transfers/account-restore/#completed)

* * *

[Summary](https://docs.cpanel.net/whm/transfers/account-restore/#summary)

* * *

[Restricted Restore errors](https://docs.cpanel.net/whm/transfers/account-restore/#restricted-restore-errors)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/transfers/account-restore/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/transfers/account-restore/#overview)

* * *

[In Progress](https://docs.cpanel.net/whm/transfers/account-restore/#in-progress)

* * *

[Completed](https://docs.cpanel.net/whm/transfers/account-restore/#completed)

* * *

[Summary](https://docs.cpanel.net/whm/transfers/account-restore/#summary)

* * *

[Restricted Restore errors](https://docs.cpanel.net/whm/transfers/account-restore/#restricted-restore-errors)

* * *

## Account Restore

![](https://docs.cpanel.net/img/whm-icons/transfer_cpanel_account.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/transfers/account-restore/)

Last modified: _2025 June 6_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Account Restore_ interface displays the status and progress of your account restoration as well as any warnings.

This interface **only** appears when you initiate an account restoration from WHM’s [_Transfer or Restore a cPanel Account_](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account) interface ( _WHM » Home » Transfers » Transfer or Restore a cPanel Account_).

Warning:

Do **not** use the `skip-name-resolve` setting in your server’s MySQL® configuration. This setting **will** cause **serious** issues with server operations. If you are **not** an advanced MySQL administrator, expect issues with this setting. For example, you will see issues with account transfers and restorations. This setting will also cause issues with [phpMyAdmin](https://docs.cpanel.net/cpanel/databases/phpmyadmin).

## In Progress

To pause this process, click _Pause_.

Note:

If you accidentally close this interface, navigate to the [_Review Transfers and Restores_](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/) interface ( _WHM » Home » Transfers » Review Transfers and Restores_) and click _View_.

Use the [`/usr/local/cpanel/bin/view_transfer`](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/) script to watch the process’s progress via the command line. The correct command appears at the bottom of the WHM interface:

```perl
You may close this window and view the transfer on the command line: /usr/local/cpanel/bin/view_transfer DHGfWHNIu8STwNfZ3ywIOLLSGiCQtS
```

## Completed

After the transfer and restoration process is complete, the top of the interface displays a _Completed_ message.

The links below the _Restore_ section allow you to review the account’s restoration log, which can help you identify and resolve any warnings or skipped items. The total number of warnings and skipped items appears below each account’s link.

| Status | Description |
| --- | --- |
| ![success icon](https://docs.cpanel.net/img/greenicon.png)**Success** | A successful transfer or restoration. |
| ![warning icon](https://docs.cpanel.net/img/yellowicon.png)**Altered** | Items that the system modified during the restoration process. For example, this may indicate conflicts between MySQL® or PostgreSQL® users and databases. |
| ![warning icon](https://docs.cpanel.net/img/yellowicon.png)**Failed** | Items that failed to transfer. For example, this may indicate that no available IP addresses exist on your system, or you do not have permission to use more IP addresses. |
| ![warning icon](https://docs.cpanel.net/img/yellowicon.png)**Dangerous** | Items that the system marked as dangerous and which it will **not** restore. For example, this may indicate:<br>- Symlinks inside the archive that do **not** exist in the home directory.<br>- `setuid` binaries.<br>- Items that a user or domain owns, and which the system will **not** restore. |
| ![danger icon](https://docs.cpanel.net/img/redicon.png)**Skipped** | Items that the system did **not** mark as dangerous, but do **not** meet the current security context. For example, this may indicate: <br>- `vhost` includes.<br>- Reseller privileges. |
| ![danger icon](https://docs.cpanel.net/img/redicon.png)**Warning** | Non-fatal problems during the restoration process that do **not** fit any of the above categories. For example, this may indicate that the system cannot read the reseller privileges file. |

To view a log file, click the appropriate link to the log file.

Note:

To confirm that the system added the newly-transferred account to your backup configuration, navigate to WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM » Home » Backup » Backup Configuration_).

## Summary

In addition to the transfer and restoration logs, the _Summary_ section provides a list of severe warnings:

- Invalid log files that the system rejected.
- Renamed databases.
- Renamed database users.
- Skipped database grant tables.

You can click _Rename_ to change the names of accounts, databases, and usernames.

## Restricted Restore errors

If a component of the backup file experiences an issue (for example, a MySQL grant table is compromised, or a symbolic link attack occurs), the system will **not** restore that portion of the backup file, and the interface will issue a warning.

For more information about this feature, read our [_Transfer or Restore a cPanel Account_](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account) documentation.

#### Additional Documentation

* * *

- [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool/)
- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [How to Transfer Accounts and Configurations Between cPanel & WHM Servers](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/)
- [Review Transfers and Restores](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/)
- [Transfer or Restore a cPanel Account](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×