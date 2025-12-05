---
url: "https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/"
title: "Backup Retention Behavior | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [Backup](https://docs.cpanel.net/knowledge-base/backup/)
4. Backup Retention Behavior


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [backups](https://docs.cpanel.net/tags/backups/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/#overview)

* * *

[How backup retention works](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/#how-backup-retention-works)

* * *

[Default backup retention behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/#default-backup-retention-behavior)

* * *

[Standard backup retention behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/#standard-backup-retention-behavior)

* * *

[Backup retention behavior with the Strictly enforce retention setting](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/#backup-retention-behavior-with-the-strictly-enforce-retention-setting)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/#overview)

* * *

[How backup retention works](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/#how-backup-retention-works)

* * *

[Default backup retention behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/#default-backup-retention-behavior)

* * *

[Standard backup retention behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/#standard-backup-retention-behavior)

* * *

[Backup retention behavior with the Strictly enforce retention setting](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/#backup-retention-behavior-with-the-strictly-enforce-retention-setting)

* * *

## Backup Retention Behavior

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)

Last modified: _2025 June 9_

* * *

## Overview

This document explains the retention behavior of cPanel & WHM’s backup system. You can edit this behavior in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM » Home » Backup » Backup Configuration_).

## How backup retention works

The system has two retention modes: the default backup retention behavior and strictly-enforced retention. Both behaviors ensure that the system saves the amount of successful backups that you set in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration) interface ( _WHM » Home » Backup » Backup Configuration_). However, the default backup retention behavior will retain that number of successful backups, along with failed backups, until the next successful backup completes. This means that the system could retain a number of backups larger than the amount that you set in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration) interface ( _WHM » Home » Backup » Backup Configuration_).

When the strictly-enforced retention behavior encounters failed backups, it keeps at least one successful backup, but deletes any backups that surpass the retention limit that you set in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration) interface ( _WHM » Home » Backup » Backup Configuration_). Because the system will not surpass the retention limit, we recommend that you enable strictly-enforced retention if you have limited space on your server. To enable strictly-enforced retention, select the _Strictly enforce retention, regardless of backup success_ setting in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration) interface ( _WHM » Home » Backup » Backup Configuration_).

You can customize whether the system will notify you when a backup succeeds or fails. For more information on how to set up your backup notifications, read our [Contact Manager](https://docs.cpanel.net/whm/server-contacts/contact-manager/) documentation.

### Default backup retention behavior

When cPanel & WHM completes a backup, the system deletes the oldest backup. When the system-generated backup fails, the system will keep the failed backup, it will **not** delete the oldest backup, and will continue to retain the oldest backups. This behavior ensures that the system keeps at least one successfully-completed backup.

After the next backup successfully completes, the system will delete the oldest backups to return to the desired number of backups.

### Standard backup retention behavior

If you run daily backups and retain four of them, the system will retain the latest four backup files.

![Green 1 2 3 4 numbers](https://docs.cpanel.net/img/backup-retention-examples-1-2-3-4.png)

After the system successfully completes the next backup, it deletes the oldest backup.

![Green 2 3 4 5 numbers](https://docs.cpanel.net/img/backup-retention-examples-2-3-4-5.png)

If the next backup fails, the system does not delete the oldest backup.

![Green 2 3 4 5 and red 6f numbers](https://docs.cpanel.net/img/backup-retention-examples-2-3-4-5-6f.png)

If several more backups fail, the system will continue to retain the oldest backups.

![Green 2 3 4 5 and red 6f 7f 8f 9f numbers](https://docs.cpanel.net/img/backup-retention-examples-2-3-4-5-6f-7f-8f-9f.png)

After the next complete backup succeeds, the system deletes the oldest backups so that it only retains four backups.

![Red 7f 8f 9f and green 10 numbers](https://docs.cpanel.net/img/backup-retention-examples-7f-8f-9f-10.png)

### Backup retention behavior with the Strictly enforce retention setting

With strictly-enforced retention, cPanel & WHM will delete the oldest backup when the system completes a backup. However, when the system-generated backup fails, the system will keep the failed backup and delete the oldest backup. Also, it will **not** continue to retain the oldest backup, except for the last successful backup. This behavior ensures that the system keeps at least one successful backup.

After the next backup succeeds, the system will delete the oldest backups to return to the desired number of backups.

If you run daily backups and retain four of them, the system will retain the latest four backup files.

![Green 1 2 3 4 numbers](https://docs.cpanel.net/img/backup-retention-examples-1-2-3-4.png)

After the system successfully completes the next backup, it deletes the oldest backup.

![Green 2 3 4 5 numbers](https://docs.cpanel.net/img/backup-retention-examples-2-3-4-5.png)

After the system generates a partial backup, it deletes the oldest backup.

![Green 2 3 4 5 and red 6f numbers](https://docs.cpanel.net/img/backup-retention-examples-2-3-4-5-6f.png)

After several more partial backups, the system only retains partial backups.

![Top row with green 4 5 and red 6f 7f numbers and bottom row with green 5 and red 6f 7f 8f numbers](https://docs.cpanel.net/img/backup-retention-examples-4-5-6f-7f.png)

After the next partial backup, the system must retain the last successful backup, so it deletes the oldest partial backup in order to retain only four backup files.

![Green 5 and red 7f 8f 9f numbers](https://docs.cpanel.net/img/backup-retention-examples-5-7f-8f-9f.png)

After the next complete backup succeeds, the system can delete the oldest backup so that it only retains four backups, with at least one successful backup.

![Red 7f 8f 9f and green 10 numbers](https://docs.cpanel.net/img/backup-retention-examples-7f-8f-9f-10.png)

#### Additional Documentation

* * *

- [Backup Configuration](https://docs.cpanel.net/whm/backup/backup-configuration/)
- [How to Create a Custom Transport Script for Backups](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/)
- [How to Exclude Files from Backups](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/)
- [How to Resolve CIFS-mounted Backup Drive Permissions Errors](https://docs.cpanel.net/knowledge-base/backup/how-to-resolve-cifs-mounted-backup-drive-permissions-errors/)
- [System Backups](https://docs.cpanel.net/knowledge-base/backup/system-backups/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×