---
url: "https://docs.cpanel.net/whm/backup/backup-restoration/"
title: "Backup Restoration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/backup/backup-restoration/#main-content)

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
3. [Backup](https://docs.cpanel.net/whm/backup/)
4. Backup Restoration


[backups](https://docs.cpanel.net/tags/backups/) [restore](https://docs.cpanel.net/tags/restore/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/backup/backup-restoration/#overview)

* * *

[The Backup Restoration interface](https://docs.cpanel.net/whm/backup/backup-restoration/#the-backup-restoration-interface)

* * *

[The Select User list](https://docs.cpanel.net/whm/backup/backup-restoration/#the-select-user-list)

* * *

[The Available Backup Dates calendar](https://docs.cpanel.net/whm/backup/backup-restoration/#the-available-backup-dates-calendar)

* * *

[The Options list](https://docs.cpanel.net/whm/backup/backup-restoration/#the-options-list)

* * *

[The Restoration Queue table](https://docs.cpanel.net/whm/backup/backup-restoration/#the-restoration-queue-table)

* * *

[The Restore by Account tab](https://docs.cpanel.net/whm/backup/backup-restoration/#the-restore-by-account-tab)

* * *

[The Restore by Date tab](https://docs.cpanel.net/whm/backup/backup-restoration/#the-restore-by-date-tab)

* * *

[The Give Dedicated IP Address option behavior](https://docs.cpanel.net/whm/backup/backup-restoration/#the-give-dedicated-ip-address-option-behavior)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/backup/backup-restoration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/backup/backup-restoration/#overview)

* * *

[The Backup Restoration interface](https://docs.cpanel.net/whm/backup/backup-restoration/#the-backup-restoration-interface)

* * *

[The Select User list](https://docs.cpanel.net/whm/backup/backup-restoration/#the-select-user-list)

* * *

[The Available Backup Dates calendar](https://docs.cpanel.net/whm/backup/backup-restoration/#the-available-backup-dates-calendar)

* * *

[The Options list](https://docs.cpanel.net/whm/backup/backup-restoration/#the-options-list)

* * *

[The Restoration Queue table](https://docs.cpanel.net/whm/backup/backup-restoration/#the-restoration-queue-table)

* * *

[The Restore by Account tab](https://docs.cpanel.net/whm/backup/backup-restoration/#the-restore-by-account-tab)

* * *

[The Restore by Date tab](https://docs.cpanel.net/whm/backup/backup-restoration/#the-restore-by-date-tab)

* * *

[The Give Dedicated IP Address option behavior](https://docs.cpanel.net/whm/backup/backup-restoration/#the-give-dedicated-ip-address-option-behavior)

* * *

## Backup Restoration

![](https://docs.cpanel.net/img/whm-icons/backup_restoration.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/backup/backup-restoration/)

Last modified: _2025 June 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface restores cPanel accounts from local backups or backups on a remote FTP destination. You can restore one or many backups by account name or by date.

Important:

- To use this feature, you **must** enable account backups in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM » Home » Backup » Backup Configuration_).
- To use a remote FTP destination as a source, it **must** already exist in the _Additional Destinations_ section of WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM » Home » Backup » Backup Configuration_).
- To restore a `cpmove` file, use WHM’s [_Transfer or Restore a cPanel Account_](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account) interface ( _WHM » Home » Transfers » Transfer or Restore a cPanel Account_).
- To create and restore backups within cPanel, use cPanel’s [_Backups_](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/) interface ( _cPanel » Home » Files » Backup_). You can also use cPanel’s [_Backup Wizard_](https://docs.cpanel.net/cpanel/files/backup-wizard/) interface ( _cPanel » Home » Files » Backup Wizard_) if you are a newer user.

## The _Backup Restoration_ interface

This interface contains two tabs, the _Restore by Account_ tab and the _Restore by Date_ tab. In each tab, the interface marks the step that you’ll need to complete with a blue border. The interface does not mark the _Options_ section since you can customize your selections.

In the image below, the blue border highlights the calendar. The selection indicates that the user should select a date from the _Available Backup Dates_ calendar.

![the Backup Restoration interface showing the calendar to select a date for the backup](https://docs.cpanel.net/img/backuprestoration.png)

### The _Select User_ list

The _Select User_ list includes the cPanel accounts that own at least one backup. To select an account, click on the account’s name. To filter the list, enter an account name in the _Filter Accounts_ text box.

Note:

- You may **only** add one account to the queue at a time. After you add an account to the queue, the account name appears in gray and you cannot select it again.

- You **must** wait for the restoration process to finish before you can add that account to the _Restoration Queue_ list again.


### The _Available Backup Dates_ calendar

This calendar shows the dates when a backup is available for the selected cPanel account. The interface marks the available calendar days’ numbers in blue. You can select one of the dates. Calendar days with no backups for that account appear in gray, and you cannot select them.

### The _Options_ list

This list allows you to control how much of the account’s information you wish to restore. The system enables the _Restore Subdomains_, _Restore Mail Configuration_, and _Restore MySQL_ options by default.

The list contains the following options:

- _Restore Subdomains_ — Restores any subdomains that appear in the account’s backup archive.

- _Restore Mail Configuration_ — Restores the account’s email configuration.

- _Restore MySQL_ — Restores the account’s MySQL® databases.

- _Restore from_ — From the menu, select a backup destination from which to restore your backup.

- _Give Dedicated IP Address_ — Assigns the account a dedicated IP address during the restoration process.


Note:

- If you disable the _Restore Subdomains_ option, the system restores aliases but not subdomains.

- The interface enables the _Restore from_ menu when a local and a remote directory contain backups for the selected account. You can configure backup destinations in the _Additional Destinations_ tab in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM » Home » Backup » Backup Configuration_).

- If an account owns a dedicated IP address at the time of restoration, it maintains that same IP address. For more information, see [The Give IP Dedicated IP Address](https://docs.cpanel.net/whm/backup/backup-restoration#the-give-dedicated-ip-address-option-behavior) behavior section below.


### The _Restoration Queue_ table

The _Restoration Queue_ table lists the restoration status of the accounts that you selected to restore. This table contains the following columns:

- _Account_ — The cPanel account’s name.

- _Restoration Date_ — The date of the backup archive.

- _Source_ — The backup storage location’s name.

- _Status_ — This column has the following options:
  - _Pending_ — The account can begin the restoration process.

  - _Restoring Account_ — The restoration is in progress. You **cannot** remove an account from the queue during the restoration process.

  - _Completed_ — The restoration finished with no errors. The system moves completed restorations to the bottom of the _Restoration Queue_ table.

  - _Completed with warnings_ — The restoration finished but encountered errors. Click _View Log_ under the gear icon (![Gear](https://docs.cpanel.net/img/cog.jpg)) column for more information.

  - _Failed_ — The restoration failed. The red failure notice box includes the reason for the failure. Click _View Log_ under the gear icon (![Gear](https://docs.cpanel.net/img/cog.jpg)) column for more information.
- ![Gear](https://docs.cpanel.net/img/cog.jpg) — Select from the following options:
  - _Clear pending accounts_ — Clears all _Pending_ restorations from the queue.

  - _Clear completed accounts_ — Clears all _Complete_ and _Failed_ restorations from the queue.

  - _Clear all error notices_ — Clears all error notices from the queue.

  - _Clear all accounts_ — Clears all the restorations from the queue, except for restorations with the Restoring Account status.

  - Accounts with the _Completed_, _Completed with warnings_, and _Failed status messages_ will show the following options in this column:
    - _Clear_ — Clears the entry from the queue.

    - _View Log_ — Opens the restoration log file, in a new browser tab, to correct any errors or warnings.

## The _Restore by Account_ tab

The interface in the _Restore by Account_ tab allows you to choose which cPanel accounts to restore.

To restore a cPanel account, perform the following steps:

1. Select one or more cPanel accounts to restore from the _Select User_ list.

2. Select an available day (blue-colored number) from the _Available Backup Dates_ calendar.

3. Select any desired options from the _Options_ list.

4. Click _Add Account to Queue_. The cPanel account name will appear in the _Restoration Queue_ table below with a _Pending_ status. This table displays the status of the restoration.

5. Click _Restore_ to start the restoration process. You may add more accounts to the queue while the restoration is in progress.


## The _Restore by Date_ tab

The interface in the _Restore by Date_ tab allows you to restore accounts with backup archives from a specific date.

To restore a cPanel account’s backup archives from a specific date, perform the following steps:

1. Select the desired available day (blue-colored number) from the _Available Restoration Dates_ calendar.

2. Select one or more cPanel accounts to restore from the _Select User_ list.

3. Select any desired options from the _Options_ list.

4. Click _Add Account to Queue_. The cPanel account name will appear in the _Restoration Queue_ table below with a _Pending_ status. This table shows the status of the restoration.

5. Click _Restore_ to start the restoration process. You may add more accounts to the queue while the restoration is in progress.


## The _Give Dedicated IP Address option_ behavior

The following table shows the behavior of the _Give Dedicated IP Address_ option under certain conditions:

| The account exists at the time of the restoration | The account had a dedicated IP address at the time of the backup | You selected the Give Dedicated IP Address Option | Result |
| --- | --- | --- | --- |
| Yes | Yes | No | The system assigns the account the same dedicated IP address. |
| Yes | No | Yes | The system assigns the account a dedicated IP address. |
| No | Yes | Yes | The system assigns the account a new dedicated IP address. The new IP address may or may not match the account’s IP address that you used when you performed the backup. The system behaves as if the account lacks a dedicated IP address. |

#### Additional Documentation

* * *

- [Backup Configuration](https://docs.cpanel.net/whm/backup/backup-configuration/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Backup System Migration](https://docs.cpanel.net/whm/backup/backup-system-migration/)
- [File and Directory Restoration for WHM](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/)
- [Remote Restoration](https://docs.cpanel.net/knowledge-base/backup/remote-restoration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×