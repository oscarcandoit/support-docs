---
url: "https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/"
title: "File and Directory Restoration for WHM | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/#main-content)

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
4. File and Directory Restoration for WHM


[backups](https://docs.cpanel.net/tags/backups/) [restore](https://docs.cpanel.net/tags/restore/) [whmui](https://docs.cpanel.net/tags/whmui/) [files](https://docs.cpanel.net/tags/files/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/#overview)

* * *

[The File and Directory Restoration interface](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/#the-file-and-directory-restoration-interface)

* * *

[Enter a direct path to restore a file or directory](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/#enter-a-direct-path-to-restore-a-file-or-directory)

* * *

[Browse your home directory to restore a file or directory](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/#browse-your-home-directory-to-restore-a-file-or-directory)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/#overview)

* * *

[The File and Directory Restoration interface](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/#the-file-and-directory-restoration-interface)

* * *

[Enter a direct path to restore a file or directory](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/#enter-a-direct-path-to-restore-a-file-or-directory)

* * *

[Browse your home directory to restore a file or directory](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/#browse-your-home-directory-to-restore-a-file-or-directory)

* * *

## File and Directory Restoration for WHM

![](https://docs.cpanel.net/img/whm-icons/file_and_directory_restoration.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/)

Last modified: _2025 July 2_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Important:

To use this feature, you **must** enable account backups in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration) interface ( _WHM » Home » Backup » Backup Configuration_). Additionally, several settings exist that will disable the _File and Directory Restoration_ interfaces in cPanel & WHM under certain conditions. For more information, read the [How to Manage Metadata Settings](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings) document.

The _File and Directory Restoration_ interface allows you to restore items from the local backups of your cPanel account users.

Note:

- This interface allows you to restore items from **only** local backup files. If you wish to restore items from remote backup files, you **must** transfer the desired remote backup files to the local server.
- This interface does **not** allow you to restore a cPanel account’s `.cpanel` and `mail` directories. To restore these directories, you **must** perform a full account backup restoration.
- The system will restore deleted files and will overwrite existing files.

## The File and Directory Restoration interface

To begin, select a cPanel account name from the list and click _View Backups_. The next interface contains two sections, _Files and Directories_ and _Backups_. The _Files and Directories_ section shows the files and directories that contain backups. The backups will appear in the _Backups_ section.

You can access backups from this interface in two ways. You can enter a direct path to the file or directory, or you can browse through files and directories to find the file that you wish to restore.

Note:

You can set the number of backups that the local disk stores in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM » Home » Backup » Backup Configuration_). Edit the _Retention_ setting under the Scheduling and Retention section.

### Enter a direct path to restore a file or directory

Note:

Select _Browse files and directories_ to view a directory’s contents. The system will **not** show a directory’s contents when you select _Enter a path_.


You can restore a file or directory from a direct path through your cPanel account’s home directory. To do so, perform the following steps:

1. In the _Files and Directories_ section, select _Enter a path_.
2. Enter the direct path to the file or directory in the text box. The text box’s path is the cPanel account user’s home directory path. For example, enter `public_html` in the text box for the direct path to the `/home/user/public_html` directory. In this directory path, user represents the cPanel account’s username.
3. Click _Show Backups_ to list the backups for that file or directory. The backups will appear in the _Backups_ section of the interface.
4. In the _Backups_ section, choose the backup that you wish to restore and click _Restore_.
5. The system will ask you to confirm the restoration. Click _Restore_ to confirm. A success or failure message will appear.

### Browse your home directory to restore a file or directory

You can browse through the home directory to find the file or directory that you wish to restore. To do so, perform the following steps:

1. In the _Files and Directories_ section, select _Browse files and directories_. The contents of the cPanel account user’s home directory will appear.

   - To see a directory’s contents, click on the directory’s name.
2. Click _Show Backups_ to list the backups for that file or directory. The backups will appear in the _Backups_ section of the interface.
3. In the _Backups_ section, choose the backup that you wish to restore and click _Restore_.
4. The system will ask you to confirm the restoration. Click _Restore_ to confirm. A success or failure message will appear.

Files and directories that you successfully restore will now appear in the cPanel account user’s home directory.

#### Additional Documentation

* * *

- [Backup Configuration](https://docs.cpanel.net/whm/backup/backup-configuration/)
- [Backup Restoration](https://docs.cpanel.net/whm/backup/backup-restoration/)
- [Backup System Migration](https://docs.cpanel.net/whm/backup/backup-system-migration/)
- [How to Transfer Accounts and Configurations Between cPanel & WHM Servers](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/)
- [Remote Restoration](https://docs.cpanel.net/knowledge-base/backup/remote-restoration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×