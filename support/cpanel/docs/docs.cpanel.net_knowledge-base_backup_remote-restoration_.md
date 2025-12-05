---
url: "https://docs.cpanel.net/knowledge-base/backup/remote-restoration/"
title: "Remote Restoration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/backup/remote-restoration/#main-content)

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
4. Remote Restoration


[backups](https://docs.cpanel.net/tags/backups/) [restore](https://docs.cpanel.net/tags/restore/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/backup/remote-restoration/#overview)

* * *

[How to transfer the backup file](https://docs.cpanel.net/knowledge-base/backup/remote-restoration/#how-to-transfer-the-backup-file)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/backup/remote-restoration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/backup/remote-restoration/#overview)

* * *

[How to transfer the backup file](https://docs.cpanel.net/knowledge-base/backup/remote-restoration/#how-to-transfer-the-backup-file)

* * *

## Remote Restoration

_Valid for versions 88 through the latest version_

#### Version:

#### [88](https://docs.cpanel.net/knowledge-base/backup/remote-restoration/)

Last modified: _2020 May 13_

* * *

## Overview

Important:

To use this feature, you must enable account backups and the _Retain Backups in the Default Backup Directory_ setting in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration) interface ( _WHM » Home » Backup » Backup Configuration_). If you have disabled the _Retain Backups in the Default Backup Directory_ setting, you can restore a remote backup through WHM’s [_Transfer or Restore a cPanel Account_](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account) interface ( _WHM » Home » Transfers » Transfer or Restore a cPanel Account_).

WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration) interface ( _WHM » Home » Backup » Backup Configuration_) allows you and your users to store backup files in locations that you configured with the _Additional Destinations_ options. This includes the following destinations:

- Amazon S3™
- FTP
- Google Drive™
- S3 Compatible
- SFTP
- WebDAV
- A local directory
- Custom locations

To restore backups from these locations, users **must** transfer the backup file to their servers before they can restore the backups.

## How to transfer the backup file

Important:

You **must** manually transfer the backup files from the remote location to your server. However, after you transfer the backup files to the server, WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration) feature handles the actual restoration.

To transfer a backup file from a remote location to your server, perform the following steps:

1. Use your preferred tool to access the additional destination that you created with the _Additional Destinations_ options in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration) interface ( _WHM » Home » Backup » Backup Configuration_). For example, you can use an FTP client to access an FTP destination.
2. Locate your desired backup files and transfer them to your local computer.
3. Place the backup files in the appropriate backup directory on your server.






Note:





The backup directories on your server will resemble the `BACKUPDIR/yyyy-mm-dd/accounts` format, where:



- `BACKUPDIR` is the variable from the `/var/cpanel/backups/config` file.
- `yyyy` is the four-digit year, `mm` is the month, and `dd` is the day of the month.

For example, on a server that stores backups in the `/home/backup` directory, the weekly backup on December 16, 2018 for the example user will exist in the `/home/backup/weekly/2018-12-16/accounts/example.tar.gz` file.

WHM’s [_Backup Restoration_](https://docs.cpanel.net/whm/backup/backup-restoration) interface ( _WHM » Home » Backup » Backup Restoration_) will now display the backup files under the appropriate account and date.

#### Additional Documentation

* * *

- [Backup Configuration](https://docs.cpanel.net/whm/backup/backup-configuration/)
- [Backup Restoration](https://docs.cpanel.net/whm/backup/backup-restoration/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Backup System Migration](https://docs.cpanel.net/whm/backup/backup-system-migration/)
- [File and Directory Restoration for WHM](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×