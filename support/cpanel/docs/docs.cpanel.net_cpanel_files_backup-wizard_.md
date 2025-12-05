---
url: "https://docs.cpanel.net/cpanel/files/backup-wizard/"
title: "Backup Wizard | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/files/backup-wizard/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Files](https://docs.cpanel.net/cpanel/files/)
4. Backup Wizard


[backups](https://docs.cpanel.net/tags/backups/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [restore](https://docs.cpanel.net/tags/restore/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/files/backup-wizard/#overview)

* * *

[Back Up](https://docs.cpanel.net/cpanel/files/backup-wizard/#back-up)

* * *

[Create a full backup](https://docs.cpanel.net/cpanel/files/backup-wizard/#create-a-full-backup)

* * *

[Create a partial backup](https://docs.cpanel.net/cpanel/files/backup-wizard/#create-a-partial-backup)

* * *

[Restore](https://docs.cpanel.net/cpanel/files/backup-wizard/#restore)

* * *

[Home Directory backup file contents](https://docs.cpanel.net/cpanel/files/backup-wizard/#home-directory-backup-file-contents)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/files/backup-wizard/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/files/backup-wizard/#overview)

* * *

[Back Up](https://docs.cpanel.net/cpanel/files/backup-wizard/#back-up)

* * *

[Create a full backup](https://docs.cpanel.net/cpanel/files/backup-wizard/#create-a-full-backup)

* * *

[Create a partial backup](https://docs.cpanel.net/cpanel/files/backup-wizard/#create-a-partial-backup)

* * *

[Restore](https://docs.cpanel.net/cpanel/files/backup-wizard/#restore)

* * *

[Home Directory backup file contents](https://docs.cpanel.net/cpanel/files/backup-wizard/#home-directory-backup-file-contents)

* * *

## Backup Wizard

![](https://docs.cpanel.net/img/cpanel-icons/backup_wizard.svg)

_Valid for versions 84 through the latest version_

#### Version:

#### [84](https://docs.cpanel.net/cpanel/files/backup-wizard/)

Last modified: _2025 July 14_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

Important:

This feature only appears if your hosting provider’s [server profile](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary) enables it.

## Overview

The _Backup Wizard_ interface allows you to back up all or part of your website, or to restore it from the most recent partial backup file.

Note:

- Experienced users may prefer to use the [_Backup_](https://docs.cpanel.net/cpanel/files/backup-for-cpanel) interface ( _cPanel » Home » Files » Backup_).
- The system stores backup files as [tarballs](https://en.wikipedia.org/wiki/Tar_(computing)) that use the `.tar.gz` file extension. For more information about what backup files contain, read our [Backup Tarball Contents](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents) documentation.
- You **cannot** automatically restore a full backup file in cPanel. This function is **only** available in WHM. To automatically restore a full backup file, contact your hosting provider.

## Back Up

You can choose to create a full backup file or a partial backup file.

Important:

- To manually restore your [`public_html`](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#public_html) folder from a [full backup file](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/), uncompress the `tar.gz` file, retrieve the files in the `/homedir` directory’s `public_html` folder, and upload them to your account’s `public_html` folder with cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager/) interface ( _cPanel » Home » Files » File Manager_).
- The backup process for an account near or over its quota may fail because the system cannot write necessary files, such as a database lock file.

### Create a full backup

To create a full backup file, perform the following steps:

1. From the main _Backup Wizard_ interface, click _Back Up_. The _Full or Partial Backup_ section of the interface will appear.
2. Click _Full Backup_. The _Download_ section of the interface will appear.
3. Select one of the following destinations from the _Backup Destination_ menu:

   - [_Home Directory_](https://docs.cpanel.net/cpanel/files/backup-wizard/#home-directory-backup-file-contents) — Select this setting to save the backup file on the server. The server saves the file in the `home/username` directory.
   - _Remote FTP Server_ — Select this setting to use FTP to store the backup file on a remote server.
   - _Remote FTP Server (passive mode transfer)_ — Select this setting to use passive FTP to store the backup file on a remote server.
   - _Secure Copy (SCP)_ — Select this setting to use SCP to store the backup file on a remote server.






     Important:





     Only advanced users should select the _Remote FTP Server_, _Remote FTP Server (passive mode transfer)_, or _SCP destination_ settings.
4. Perform one of the following actions to configure notifications for this backup file:
   - To receive a notification when the backup process finishes, enter your email address in the _Email Address_ text box.
   - To disable notifications, select the _Do not send email notification of backup completion._ checkbox.
5. If you selected the _Remote FTP Server_, _Remote FTP Server (passive mode transfer)_, or _Secure Copy (SCP)_ destinations, enter the remote destination’s information in the available text boxes.
6. Click _Generate Backup_. A confirmation message will appear. Click _Go Back_ to return to the _Download_ section of the interface.

Note:

If you selected the _Home Directory_ setting in step 3, click the filename in the _Download_ section of the interface to download the backup file.

- The backup file is in `backup-MM-DD-YYYY` format, where `MM` is the month, `DD` is the date, and `YYYY` is the four-digit year.
- The system stores full backup files as [tarballs](https://en.wikipedia.org/wiki/Tar_(computing)) that use the `.tar.gz` file extension.

### Create a partial backup

To back up a portion of your site, perform the following steps:

1. From the main _Backup Wizard_ interface, click _Back Up_. The _Full or Partial Backup_ section of the interface will appear.
2. Select which portion of your website that you wish to back up. The _Download_ section of the interface will appear.
3. Click the desired backup file to download it.

Note:

When you create a partial backup, the backup type determines the backup file’s extension.

- [_Home Directory_](https://docs.cpanel.net/cpanel/files/backup-wizard/#home-directory-backup-file-contents) — `*.tar.gz`.
- _Email Forwarders & Filters_ — `*.net`, `*.com`
- _MySQL Databases_ — `*.sql`

## Restore

To restore a portion of your site from an existing backup, perform the following steps:

1. Click _Restore_. The _Select Restore Type_ section of the interface will appear.
2. Select which portion of your website that you wish to restore. The _Restore_ section of the interface will appear.
3. Click _Choose File_ and select the desired backup file.






Remember:





The backup file’s extension depends on the portion of your site that you backed up.

4. Click _Upload_ to begin the restoration process.

## Home Directory backup file contents

When you back up your `/home` directory, the backup file includes the following files:

- All of the files that you own. This includes your [`public_html`](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#public_html) files, and any email for the domains that belong to your account.
- Files that you do **not** own, but can access.





Note:





Backup files do **not** include files from your `/home` directory that you do **not** own and **cannot** access.


To exclude certain files and directories from a backup file, place a configuration file in your home directory. For more information, read our [How to Exclude Files From Backups](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups) documentation.

#### Additional Documentation

* * *

- [Anonymous FTP](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)
- [Backup for cPanel](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/)
- [Backup Restoration](https://docs.cpanel.net/whm/backup/backup-restoration/)
- [Directory Privacy](https://docs.cpanel.net/cpanel/files/directory-privacy/)
- [File and Directory Restoration for cPanel](https://docs.cpanel.net/cpanel/files/file-and-directory-restoration-for-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×