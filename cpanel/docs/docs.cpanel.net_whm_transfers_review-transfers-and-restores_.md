---
url: "https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/"
title: "Review Transfers and Restores | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/#main-content)

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
4. Review Transfers and Restores


[transfers](https://docs.cpanel.net/tags/transfers/) [restore](https://docs.cpanel.net/tags/restore/) [whmui](https://docs.cpanel.net/tags/whmui/) [logs](https://docs.cpanel.net/tags/logs/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/#overview)

* * *

[Transfer logs](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/#transfer-logs)

* * *

[Log rotation](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/#log-rotation)

* * *

[The xferdebug touch file](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/#the-xferdebug-touch-file)

* * *

[Session information](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/#session-information)

* * *

[Account interfaces](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/#account-interfaces)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/#overview)

* * *

[Transfer logs](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/#transfer-logs)

* * *

[Log rotation](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/#log-rotation)

* * *

[The xferdebug touch file](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/#the-xferdebug-touch-file)

* * *

[Session information](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/#session-information)

* * *

[Account interfaces](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/#account-interfaces)

* * *

## Review Transfers and Restores

![](https://docs.cpanel.net/img/whm-icons/review_transfers_and_restores.svg)

_Valid for versions 88 through the latest version_

#### Version:

#### [88](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to review your server’s transfer and restore logs.

## Transfer logs

This interface displays transfers that use the current transfer system in the _Transfer Session Logs_ section. The interface displays transfers that use WHM’s [_Transfer or Restore a cPanel Account_](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account) interface ( _WHM » Home » Transfers » Transfer or Restore a cPanel Account_). The _Completed Sessions_ section contains the finished transfer sessions, while the _Pending Sessions_ section contains in progress or stalled sessions.

Note:

- The `/usr/local/cpanel/logs/backup_restore_manager_log` file is the restoration process’s log file.
- The `/usr/local/cpanel/logs/backup_restore_manager_error_log` file is the restoration process’s error log.

### Log rotation

If no activity occurs in a pending transfer for two hours, the system sets the transfer to _failed_.

The `/usr/local/cpanel/scripts/expunge_expired_transfer_sessions` script removes session logs after 30 days. It runs during nightly maintenance.

### The xferdebug touch file

If you cannot resolve your transfers’ issues via the standard transfer and restore logs, read our [Touch File for Additional Transfer and Restore Log Diagnostic Entries](https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries) documentation.

## Session information

The session transfer tables display the following attributes:

- _Session_ — The transfer’s session ID.
- _Initiator_ — The process that initiated the transfer.
- _Source Host_ — The server hostname from which the system transferred the account.
- _Start Time_ — The transfer session’s start time in the [Universal Time Coordinated (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)`YYYY-MM-DD-hh-mm-ss` format:

  - `YYYY` represents the year.
  - `MM` represents the month
  - `DD` represents the day.
  - `hh` represents the hour.
  - `mm` represents the minute.
  - `ss` represents the second.
- _End Time_ — The transfer session’s end time in the UTC `YYYY-MM-DD-hh-mm-ss` format:

  - `YYYY` represents the year.
  - `MM` represents the month
  - `DD` represents the day.
  - `hh` represents the hour.
  - `mm` represents the minute.
  - `ss` represents the second.
- _Actions_ — You can perform the following actions:

  - _Review_ — Look for a completed transfer or restoration. This will include links to the transfer and restore logs.
  - _View_ — Examine the log file for a transfer or restoration that is pending or in progress. This can help you diagnose and resolve issues.
  - _Cancel_ — Cancel a pending transfer or restoration.

## Account interfaces

Click _Review_ or _View_ to navigate to the appropriate interface for the transfer or restoration.

#### Additional Documentation

* * *

- [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool/)
- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [How to Transfer Accounts and Configurations Between cPanel & WHM Servers](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/)
- [Transfer or Restore a cPanel Account](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×