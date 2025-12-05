---
url: "https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/"
title: "Backup for cPanel | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#main-content)

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
4. Backup for cPanel


[backups](https://docs.cpanel.net/tags/backups/) [restore](https://docs.cpanel.net/tags/restore/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#overview)

* * *

[Full Backup](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#full-backup)

* * *

[Generate a Full Backup](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#generate-a-full-backup)

* * *

[Account Backups](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#account-backups)

* * *

[Partial Backups](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#partial-backups)

* * *

[Download a Home Directory Backup](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#download-a-home-directory-backup)

* * *

[Download a Database Backup](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#download-a-database-backup)

* * *

[Download Email Forwarders](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#download-email-forwarders)

* * *

[Download Email Filters](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#download-email-filters)

* * *

[Restore a partial backup](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#restore-a-partial-backup)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#overview)

* * *

[Full Backup](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#full-backup)

* * *

[Generate a Full Backup](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#generate-a-full-backup)

* * *

[Account Backups](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#account-backups)

* * *

[Partial Backups](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#partial-backups)

* * *

[Download a Home Directory Backup](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#download-a-home-directory-backup)

* * *

[Download a Database Backup](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#download-a-database-backup)

* * *

[Download Email Forwarders](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#download-email-forwarders)

* * *

[Download Email Filters](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#download-email-filters)

* * *

[Restore a partial backup](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#restore-a-partial-backup)

* * *

## Backup for cPanel

![](https://docs.cpanel.net/img/cpanel-icons/backup.svg)

_Valid for versions 120 through 122_

#### Version:

#### [84](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/84/)

#### [120](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/)

#### [124](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/)

Last modified: _2025 July 2_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The _Backup_ interface allows you to download and store your site in a backup file. This interface also allows you to restore your website from a backup file.

Note:

- Newer users may prefer to use the [_Backup Wizard_](https://docs.cpanel.net/cpanel/files/backup-wizard) interface ( _cPanel » Home » Files » Backup Wizard_).
- The system stores backup files as [tarballs](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#tarball) that use the `.tar.gz` file extension. For more information about what backup files contain, read our [Backup Tarball Contents](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents) documentation.
- Some settings only appear if your hosting provider’s [server profile](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#server-profile) enables them.

## Full Backup

In this section, click _Download a Full Account Backup_ to create, download, or store a full backup file. The [_Generate a Full Backup_](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#generate-a-full-backup) interface will appear.

Important:

- You **cannot** automatically restore a [full backup file](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/) in cPanel. This function is **only** available in WHM. To automatically restore a full backup file, contact your hosting provider.
- To manually restore your [`public_html`](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#public_html) folder from a full backup file, uncompress the `tar.gz` file, retrieve the files in the `/homedir` directory’s `public_html` folder, and upload them to your account’s `public_html` folder with cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager/) interface ( _cPanel » Home » Files » File Manager_).
- The backup process for an account near or over its quota may fail because the system cannot write necessary files, such as a database lock file.

### Generate a Full Backup

To create a new full backup, perform the following steps:

1. Select a storage location from the _Backup Destination_ menu:
   - [_Home Directory_](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/120/#download-a-home-directory-backup) — Select this setting to save the backup file on the server. You can access it with SSH or through the [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager/) interface ( _cPanel » Home » Files » File Manager_).
   - _Remote FTP Server_ — Select this setting to use FTP to store the backup file on a remote server.
   - _Remote FTP Server (passive mode transfer)_ — Select this setting to use passive FTP to store the backup file on a remote server.
   - _Secure Copy (SCP)_ — Select this setting to use secure copy protocol (SCP) to store the backup file on a remote server.
2. Select a notification setting:
   - To receive a notification when the backup finishes, enter your email address in the available text box.
   - If you do not wish to receive a notification, select _Do not send email notification of backup completion_.
3. If you selected _Remote FTP Server_, _Remote FTP Server (passive mode transfer)_, or _Secure Copy (SCP)_ from the _Backup Destination_ menu, enter the remote destination’s information in the available text boxes.

4. Click _Generate Backup_.







Note:





If you selected the _Home Directory_, the backup file will also be available in the _Backups Available for Download:_ list. This list will appear in the _Generate a Full Backup_ section.


### Account Backups

To download a full backup file to your computer, select the desired backup file’s filename from the _Account Backups_ menu. The system automatically generates these files if your hosting provider has enabled this feature.

Note:

- The backup file uses the `backup-MM-DD-YYYY` format, where `MM` is the month, `DD` is the day, and `YYYY` is the four-digit year.
- Your hosting provider **must** enable automatic backups to use this feature.

## Partial Backups

Partial backup files store individual parts of your account. To download a specific item, select the backup type that contains that item. The system downloads the backup file as a [`.gz`](https://en.wikipedia.org/wiki/Gzip) file to your computer’s _Downloads_ folder.

### Download a Home Directory Backup

To download a `/home` directory backup, click _Home Directory_. When you back up your `/home` directory, the backup file includes the following files:

- All of the files that you own. This includes your [`public_html`](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/) files, and any email for the domains that belong to your account.
- Files that you do **not** own, but can access.






Note:





Backup files do **not** include files from your `/home` directory that you do not own and cannot access.


To exclude certain files and directories from a backup file, place a configuration file in your `/home` directory. For more information, read our [How to Exclude Files From Backups](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups) documentation.

### Download a Database Backup

To download an account’s database, click the database name under the _Databases_ heading.

### Download Email Forwarders

To download email forwarders for a domain, click the domain name under the _Forwarders_ heading.

### Download Email Filters

To download email filters for an account, click the filter name under the _System Filter Info_ heading.

Important:

The _Email Filters_ backup file **only** stores the account-level email filters from cPanel’s [_Global Email Filters_](https://docs.cpanel.net/cpanel/email/global-email-filters/) interface ( _cPanel » Home » Email » Global Email Filters_). The backup file does **not** store user account-level email filters from cPanel’s [_Email Filters_](https://docs.cpanel.net/cpanel/email/email-filters/) interface ( _cPanel » Home » Email » Email Filters_).

### Restore a partial backup

To use a partial backup to restore a portion of your account, perform the following steps:

1. Click _Choose File_ under the appropriate heading. For example, to restore a database, click _Choose File_ under the _Restore a Database Backup_ heading.
2. Select the backup file from your computer.
3. Click _Upload_ to restore that portion of your account.

#### Additional Documentation

* * *

- [Anonymous FTP](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)
- [Backup for cPanel](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/)
- [Backup Restoration](https://docs.cpanel.net/whm/backup/backup-restoration/)
- [Backup Wizard](https://docs.cpanel.net/cpanel/files/backup-wizard/)
- [File and Directory Restoration for cPanel](https://docs.cpanel.net/cpanel/files/file-and-directory-restoration-for-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×