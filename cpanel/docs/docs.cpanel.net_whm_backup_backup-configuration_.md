---
url: "https://docs.cpanel.net/whm/backup/backup-configuration/"
title: "Backup Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/backup/backup-configuration/#main-content)

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
4. Backup Configuration


[backups](https://docs.cpanel.net/tags/backups/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/backup/backup-configuration/#overview)

* * *

[The Backup Settings tab](https://docs.cpanel.net/whm/backup/backup-configuration/#the-backup-settings-tab)

* * *

[Backup Status](https://docs.cpanel.net/whm/backup/backup-configuration/#backup-status)

* * *

[Global Settings](https://docs.cpanel.net/whm/backup/backup-configuration/#global-settings)

* * *

[Scheduling and Retention](https://docs.cpanel.net/whm/backup/backup-configuration/#scheduling-and-retention)

* * *

[Files](https://docs.cpanel.net/whm/backup/backup-configuration/#files)

* * *

[Configure the Backup Directory](https://docs.cpanel.net/whm/backup/backup-configuration/#configure-the-backup-directory)

* * *

[Save Configuration](https://docs.cpanel.net/whm/backup/backup-configuration/#save-configuration)

* * *

[The Additional Destinations tab](https://docs.cpanel.net/whm/backup/backup-configuration/#the-additional-destinations-tab)

* * *

[The current backup destination table](https://docs.cpanel.net/whm/backup/backup-configuration/#the-current-backup-destination-table)

* * *

[The Validation Results tab](https://docs.cpanel.net/whm/backup/backup-configuration/#the-validation-results-tab)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/backup/backup-configuration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/backup/backup-configuration/#overview)

* * *

[The Backup Settings tab](https://docs.cpanel.net/whm/backup/backup-configuration/#the-backup-settings-tab)

* * *

[Backup Status](https://docs.cpanel.net/whm/backup/backup-configuration/#backup-status)

* * *

[Global Settings](https://docs.cpanel.net/whm/backup/backup-configuration/#global-settings)

* * *

[Scheduling and Retention](https://docs.cpanel.net/whm/backup/backup-configuration/#scheduling-and-retention)

* * *

[Files](https://docs.cpanel.net/whm/backup/backup-configuration/#files)

* * *

[Configure the Backup Directory](https://docs.cpanel.net/whm/backup/backup-configuration/#configure-the-backup-directory)

* * *

[Save Configuration](https://docs.cpanel.net/whm/backup/backup-configuration/#save-configuration)

* * *

[The Additional Destinations tab](https://docs.cpanel.net/whm/backup/backup-configuration/#the-additional-destinations-tab)

* * *

[The current backup destination table](https://docs.cpanel.net/whm/backup/backup-configuration/#the-current-backup-destination-table)

* * *

[The Validation Results tab](https://docs.cpanel.net/whm/backup/backup-configuration/#the-validation-results-tab)

* * *

## Backup Configuration

![](https://docs.cpanel.net/img/whm-icons/backup_configuration.svg)

_Valid for versions 108 through the latest version_

#### Version:

#### [108](https://docs.cpanel.net/whm/backup/backup-configuration/)

Last modified: _2025 July 14_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Backup Configuration_ interface allows system administrators to customize their scheduled backups.

Note:

The system applies the current _Backup Configuration_ settings to accounts that you create or transfer.

## The Backup Settings tab

Use the _Backup Settings_ tab to enable and set up your backup configuration.

### Backup Status

Select _Enable Backups_ to enable system-scheduled backups of your WHM account files, including cPanel user account files that you select. This setting is disabled by default.

#### Backup Status and restoration interfaces

When you have taken at least one backup on your local disk and created at least one metadata entry, the following cPanel & WHM interfaces will appear:

- cPanel’s [_File and Directory Restoration_](https://docs.cpanel.net/cpanel/files/file-and-directory-restoration-for-cpanel/) interface ( _cPanel » Home » Files » File and Directory Restoration_).
- WHM’s [_File and Directory Restoration_](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/) interface ( _WHM » Home » Backups » File and Directory Restoration_).

When you **deselect** the _Enable Backups_ checkbox, you **disable** these interfaces.

For more information about this interaction and how scheduled backups create metadata, read our [How to Manage Metadata Settings](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings) documentation.

### Global Settings

You can configure the following global backup settings for your WHM account in the _Backup Settings_ tab:

#### Backup Type

Select one of the following _Backup Type_ settings to determine how the system stores backup files:

| Setting | Effect | Notes |
| --- | --- | --- |
| _Compressed_ | Select this setting to save all of your information in a compressed format. | This setting uses less disk space but requires more time to finish a backup. |
| _Uncompressed_ | Select this setting to save all of your information in an uncompressed format. | This setting uses more disk space but runs faster than _Compressed_ backups. |
| _Incremental_ | Select this setting to save all of your files in the directory tree. | This setting uses a combination of hard links and files for speed and to save disk space. |

You can also configure the following additional settings:

| Setting | Effect | Notes |
| --- | --- | --- |
| _Check the Available Disk Space_ | Select this checkbox to enable the system to check whether the server contains the minimum free disk space available to create local backups. | The system enables this setting by default, though you can also configure it yourself. <br>To do so, enter the **minimum** amount of free disk space you want the system to check for before to performing a scheduled backup in the setting’s text box. Then, select `%` to let the amount represent a percent of available disk space, or `MB` to let the amount represent a quantity of megabytes. For example, to require the backup system to check if there is more than 500 MB of disk space available before performing a backup, enter _500_ and select `MB`. <br>Warning:<br>- If the server runs out of free disk space, critical services may no longer function until you create more available space.<br>- If you do not select this setting, the server will run backups regardless of the amount of free disk space available. |
| _Maximum Destination Backup Timeout_ | Enter the maximum number of seconds to allow a backup process to upload a single backup file to a destination. | **Ensure** that the number of seconds that you enter will provide enough time for the system to upload your **largest** backup file. |
| _Maximum Backup Restoration Timeout_ | Enter the maximum number of seconds to allow a backup process to restore a single backup file. | **Ensure** that the number of seconds that you enter will provide enough time for the system to restore your **largest** backup file. |

### Scheduling and Retention

The _Scheduling and Retention_ settings allow you to specify when to run the backup process. You can run backups on a daily, weekly, or monthly basis, or any combination thereof. Select the checkboxes that correspond to the timing settings that you wish to use.

You **must** select at least one of the following settings in the _Backup Settings_ tab:

| Setting | Effect | Further configuration |
| --- | --- | --- |
| _Daily Backup_ | Your system creates a new backup on each of the days of the week that you select. | Select which days to run backups, then configure [retention settings](https://docs.cpanel.net/whm/backup/backup-configuration/#retention-settings) when they appear. |
| _Weekly Backup_ | Your system creates a new backup once each week on the day that you select. | Select which days of the week to run backups, then configure [retention settings](https://docs.cpanel.net/whm/backup/backup-configuration/#retention-settings) when they appear. |
| _Monthly Backup_ | Your system creates a new backup either once or twice per month, on the first and/or 15th day of each month. | Select the days to run backups, then configure [retention settings](https://docs.cpanel.net/whm/backup/backup-configuration/#retention-settings) when they appear. |

Note:

If you run daily and monthly backups on the same day, the daily backup runs first. When the daily backup completes, the monthly backup copies the daily backup.

#### Retention settings

When you configure your [scheduling](https://docs.cpanel.net/whm/backup/backup-configuration/#scheduling-and-retention) settings, you must also configure your retention settings as well. These settings determine how long the system keeps your backups. You can configure the following settings for daily, weekly, and monthly backup files:

In the _Retention_ text box, enter the maximum number of daily, weekly, or monthly backup files to store on your system at any given time. The system stores these backups after a backup completes successfully. Enter any number between `1` and `9999`.

To remove successful **and** unsuccessful backups when the number of backup files exceeds the _Retention_ number, select the _Strictly enforce retention, regardless of backup success_ checkbox. The system will remove all backups that are over the number you set in the daily, weekly, or monthly _Retention_ text box.

For more information, read our [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior) documentation.

### Files

Warning:

- Although you do not need to back up your system files to back up account data, we **strongly** recommend that you back up your system files.
- The backup process for an account near or over its quota may fail because the system cannot write necessary files, such as a database lock file.

The _Files_ settings allow you to configure which information you wish to back up. You can use the checkboxes to enable or disable your preferred settings, though you **must** select the _Back up User Accounts_ checkbox and/or the _Back up System Files_ checkbox in order to run backups. The following settings are available:

| Setting | Effect |
| --- | --- |
| _Back up User Accounts_ | Select the _Back up User Accounts_ checkbox to create backups for cPanel accounts. <br> Click _Select Users_ to select individual cPanel accounts to back up. This action opens the [_Backup User Selection_](https://docs.cpanel.net/whm/backup/backup-user-selection) interface ( _WHM » Home » Backup » Backup User Selection_). |
| _Back up Suspended Accounts_ | Select the checkbox to back up suspended accounts. <br>Warning:<br>- If you do not enable this setting, your server will **not** back up suspended accounts, regardless of the setting in the [_Backup User Selection_](https://docs.cpanel.net/whm/backup/backup-user-selection) interface ( _WHM » Home » Backup » Backup User Selection_).<br>- If you do **not** enable the _Back up User Accounts_ setting, you will disable WHM’s [_File and Directory Restoration_](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm) interface ( _WHM » Home » Backups » File and Directory Restoration_) and hide cPanel’s [_File and Directory Restoration_](https://docs.cpanel.net/cpanel/files/file-and-directory-restoration-for-cpanel) interface ( _cPanel » Home » Files » File and Directory Restoration_). For more information, read the [How to Manage Metadata Settings](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings) documentation.<br>- The system **cannot** back up the contents of a suspended user’s `public_ftp` directory. For more information, read our [What Happens When You Suspend an Account](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/) documentation. |
| _Back up Access Logs_ | Select the checkbox to back up your server’s access logs and the `/usr/local/apache/domlogs` file. |
| _Back up Bandwidth Data_ | Select the checkbox to back up your server’s bandwidth data. |
| _Use Local DNS_ | Select the method to back up the Domain Name System (DNS) information: <br>- _Deselect the checkbox_ — The system backs up DNS information from the DNS cluster.<br>- _Select the checkbox_ — The system backs up DNS information from the server that hosts the domain. |
| _Back up System Files_ | Select the checkbox to back up your server’s system files. <br>Note:<br>- The system stores many of these files in the `/etc` directory.<br>- You **must** enable this setting for server restoration. For more information, read our [System Backups](https://docs.cpanel.net/knowledge-base/backup/system-backups/) documentation.<br>- We **strongly** recommend that you enable this setting. |

#### Back up SQL Databases

The _Back up SQL Databases_ settings determine how to back up MariaDB® and MySQL® databases, but **not** [PostgreSQL](https://docs.cpanel.net/whm/backup/backup-configuration/#postgresql) databases.

| Setting | Effect |
| --- | --- |
| _Per Account Only_ | Use the [`mysqldump`](https://dev.mysql.com/doc/refman/8.4/en/mysqldump.html) utility to create backup files with the `.sql` file extension for each account. <br>Note:<br>The _Per Account Only_ setting will **only** create backups when the _Back up User Accounts_ setting is enabled and **only** for users enabled in [_Backup User Selection_](https://docs.cpanel.net/whm/backup/backup-user-selection/) ( _WHM » Home » Backup » Backup User Selection_). To back up MySQL without backing up cPanel accounts, select the _Entire MySQL Directory_ setting instead. |
| _Entire MySQL Directory_ | Back up all files in the MySQL data directory. This directory is located at `/var/lib/mysql/` by default. |
| _Per Account and Entire MySQL Directory_ | Back up all files in the MySQL data directory. This directory is located at `/var/lib/mysql/` by default. Use the [`mysqldump`](https://dev.mysql.com/doc/refman/8.4/en/mysqldump.html) utility to create backup files with the `.sql` extension for each account. <br>Warning:<br>- Exercise **extreme** caution if you select the _Entire MySQL Directory_ or _Per Account and Entire MySQL Directory_ options. The system attempts to back up the MySQL directory without stopping MySQL, which may cause InnoDB issues in the backup file. You **cannot** restore backup files with InnoDB issues.<br>- You **cannot** restore the _Entire MySQL Directory_ backup files through the cPanel & WHM interface. The system administrator **must** restore these files manually. |

#### PostgreSQL

By default, the system does **not** back up users’ PostgreSQL databases. You **must** back up these databases manually.

To manually configure your server to back up users’ PostgreSQL databases, perform the following steps:

1. Log in to your server as the `root` user.
2. On the command line, open the `/var/cpanel/backups/config` file with your preferred editor.
3. Locate the `PSQLBACKUP` setting.
4. Set the `PSQLBACKUP` setting to `'yes'` instead of `'no'`. For example:


```perl
PSQLBACKUP: 'yes'
```

5. Save the changes.

### Configure the Backup Directory

Warning:

- We **strongly** recommend that you also save your backups to a remote _Additional Destinations_ location.
- The backup process and the transfer process use separate queues. If each backup completes much faster than each transfer, backup files can accumulate on the server and fill the hard drive.
- We **strongly** recommend that you do **not** perform backups to remote filesystems (for example, NFS, CIFS, smbfs, or other types of network drive systems). While you can back up directly to a remote filesystem, cPanel & WHM does not support this configuration. We **strongly** recommend that you work with a qualified system administrator to manage this custom backup path and avoid potential risks.
- We **strongly** recommend that you use unique filepaths when you store multiple-server backups in a shared filesystem. This action prevents backup file conflicts.
- To prevent performance degradation, the system automatically disables quotas on non-`root` filesystems that contain a backup destination.

The following settings allow you to specify where to save your backups in the _Backup Settings_ tab:

| Setting | Description |
| --- | --- |
| _Default Backup Directory_ | To change the default backup directory, enter the absolute path to the desired directory location. <br> By default, the system saves backup files locally to the `/backup` directory. |
| _Backup Staging Directory_ | To change the backup staging directory path, enter an absolute path to update the backup staging directory.

The system uses the backup staging directory when restoring backups from a remote server. The backup staging directory stores the remote backup’s files and directories during a backup restoration. The system empties the directory after the system restores the backup.

By default, the system stages remote backup files locally in the `/backup` directory.

- You **cannot** use the following paths:




|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br> /etc<br>/dev<br>/sys<br>/proc<br>/run<br>/boot<br>``` |

- You **cannot** use the following paths, but you can use a subdirectory within these paths:




|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br> /<br>/home<br>/var<br>/usr<br>``` |

- You **cannot** use any front slash characters (`\`) in the path.
- You **cannot** use any path which contains two consecutive periods (`..`).
- The system restores backups one at a time. The backup staging directory **must** be large enough to contain the largest remote backup file that you wish to restore. For example, if you wish to restore three backups, sized 1.5 GB, 528 MB, and 950 MB each, your backup staging directory must be able to hold at least 1.5 GB. |
| _Retain Backups in the Default Backup Directory_ | Select this checkbox to retain each account backup in the `/backup` directory after the backups transfer to another destination. <br>Warning:<br>If you do **not** select the _Retain Backups in the Default Backup Directory_ setting, you will disable WHM’s [_File and Directory Restoration_](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm) interface ( _WHM » Home » Backups » File and Directory Restoration_) and hide cPanel’s [_File and Directory Restoration_](https://docs.cpanel.net/cpanel/files/file-and-directory-restoration-for-cpanel) interface ( _cPanel » Home » Files » File and Directory Restoration_). For more information, read the [How to Manage Metadata Settings](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings) documentation.<br> If you do not select this setting, your server deletes account backup files from the `/backup` directory only after the following events occur:<br>- The system successfully transfers the backup file to at least one additional destination.<br>- The system attempts, successfully or unsuccessfully, to transfer the backup file to all of your additional destinations.<br> This setting does **not** cause the system to remove system backup files, directories, or other files.<br> You **must** select at least one destination for your backup. If you do **not** select the _Retain Backups in the Default Backup Directory_ setting and do **not** specify a destination in the _Additional Destinations_ section, the system will return the following error: `Error: Nowhere to back up: no enabled destinations found and retaining local copies is disabled.` |
| _Mount Backup Drive as Needed_ | Select the checkbox to mount a backup drive. This setting requires a separate mount point and causes the _Backup Configuration_ process to check the `/etc/fstab` file for a backup mount. If a mount exists with the same name as the staging directory, the _Backup Configuration_ process mounts the drive and backs up the information to the mount. <br>Warning:<br>- When you select the checkbox, you will disable WHM’s [_File and Directory Restoration_](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm) interface ( _WHM » Home » Backups » File and Directory Restoration_) and hide cPanel’s [_File and Directory Restoration_](https://docs.cpanel.net/cpanel/files/file-and-directory-restoration-for-cpanel) interface ( _cPanel » Home » Files » File and Directory Restoration_). For more information, read the [How to Manage Metadata Settings](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings) documentation.<br>- If you deselect the checkbox, the _Backup Configuration_ process does **not** check the `/etc/fstab` file for a mounted backup drive.<br> After the backup process finishes, the system dismounts the drive. <br> The location that you specify in the _Default Backup Directory_ text box must **exactly** match the mount point in the `/etc/fstab` file. Otherwise, the backup will fail and the system will log an error similar to the following message: <br>```bash<br> You have enabled BACKUPMOUNT in the<br>/var/cpanel/backups/config file, but there<br>is no mount point that matches /mnt/disk/backupMAIN<br>in the /etc/fstab file.<br>``` |

### Save Configuration

After you configure the desired settings in the _Backup Settings_ tab, click _Save Configuration_ at the bottom of the _Backup Settings_ form. To reset all of the settings in the form to the previously saved settings, click _Reset_.

## The Additional Destinations tab

Use the _Additional Destinations_ tab to store your backups in a remote destination.

You **must** select **at least** one remote destination for your backup if you do not enable the [_Retain Backups in the Default Backup Directory_ setting](https://docs.cpanel.net/#configure-the-backup-directory), or the backup will fail and return the following error:

```perl
Error: Nowhere to back up: no enabled destinations found and retaining local copies is disabled.
```

We recommend that you both enable this setting **and** specify a remote destination.

To specify a remote destination, select a destination type from the menu and click _Create New Destination_. A form for the selected destination type will appear.

Note:

- Each additional destination transfer will increase the amount of time that the backup process requires. If the process runs too long, it may interfere with the next backup process.
- If you use the _Incremental_ backup type, you can **only** use _Rsync_ additional destinations.

Select one of the tabs below to view information for that destination type.

[Additional Local Directory](https://docs.cpanel.net/whm/backup/backup-configuration/#additional-local-directory1764175699579771055)

This setting allows you to save backup files to another local filesystem.

| Setting | Description |
| --- | --- |
| _Destination Name_ | **Required** — Enter a destination name for your backup file. This name appears in your destination table. |
| _Transfer System Backups to this Destination_ | Select this checkbox to transfer system backups to this additional destination. To use this setting, you **must** also select the _Back up System Files_ checkbox in the _Backup Settings_ tab. |
| _Only use this destination for log file transfers_ | Select this checkbox to **only** transfer log files to the remote destination. Do **not** select this checkbox if you will use this destination for all backups. If you select this setting, you **cannot** use this destination for account and/or system backups. |
| _Backup Directory_ | **Required** — Enter the directory path, relative to the account’s home directory, in which you wish to store backups. |
| _Mount Backup Drive as Needed_ | Select the checkbox to mount a backup drive. This setting requires a separate mount point and causes the _Backup Configuration_ process to check the `/etc/fstab` file for a backup mount. If a mount exists with the same name as the staging directory, the _Backup Configuration_ process mounts the drive and backs up the information to the mount. After the backup process completes, the system dismounts the drive. If you deselect the checkbox, the _Backup Configuration_ process does not check the `/etc/fstab` file for a mount. |

[Amazon S3™](https://docs.cpanel.net/whm/backup/backup-configuration/#amazon-s31764175699580033987)

To use this destination type, you **must** possess an Amazon S3 account. To create an account, follow the directions in Amazon’s [Sign Up for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/gsg/SigningUpforS3.html) documentation.

| Setting | Description |
| --- | --- |
| _Destination Name_ | **Required** — Enter a destination name for your backup files. This name appears in your destination table. |
| _Transfer System Backups to this Destination_ | Select this checkbox to transfer system backups to this additional destination. To use this setting, you **must** also select the _Back up System Files_ checkbox in the _Backup Settings_ tab. |
| _Only use this destination for log file transfers_ | Select this checkbox to **only** transfer log files to the remote destination. Do **not** select this checkbox if you will use this destination for all backups. If you select this setting, you **cannot** use this destination for account and/or system backups. |
| _Folder_ | Enter the name of the directory where you wish to store backups. |
| _Bucket_ | **Required** — Enter the name of a currently-existing bucket in which you wish to store your backup. |
| _Access Key ID_ | **Required** — Enter the access key ID in this text box. Your server uses the access key to authenticate with the Amazon S3 account. For more information about access keys for Amazon S3, read Amazon’s [Managing Access Keys](https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html) documentation. |
| _Secret Access Key_ | **Required** — Enter the secret access key in this text box. For more information about secret access keys for Amazon S3, read Amazon’s [Managing Access Keys](https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html) documentation. |
| _Timeout_ | **Required** — The maximum amount of time, in seconds, that you want the server to wait for a response from the remote server before it generates errors.<br>- You **must** enter a number between `30` and `300`.<br>- If the server does not respond before the time expires, it makes two additional attempts to contact the server.<br>- If the server does not respond after those attempts, the system administrator receives an email that notes the failed attempts. The system will retry the transfer when it runs the backup process again. |

[Backblaze B2](https://docs.cpanel.net/whm/backup/backup-configuration/#backblaze-b21764175699580269627)

After cPanel & WHM deletes the oldest backup retention in Backblaze B2 remotely, the [Backblaze B2](https://www.backblaze.com/) website will not reflect the deletion until five to ten minutes after the action occurs.

| Setting | Description |
| --- | --- |
| _Destination Name_ | **Required** — Enter a destination name for your backup files. This name appears in your destination table. |
| _Transfer System Backups to this Destination_ | Select this checkbox to transfer system backups to this additional destination. To use this setting, you **must** also select the _Back up System Files_ checkbox in the _Backup Settings_ tab. |
| _Only use this destination for log file transfers_ | Select this checkbox to **only** transfer log files to the remote destination. Do **not** select this checkbox if you will use this destination for all backups. If you select this setting, you **cannot** use this destination for account and/or system backups. |
| _Backup Directory_ | Enter the directory’s path, where you wish to store backups. |
| _Bucket ID_ | **Required** — Enter the bucket’s identification number. You **must** first create the bucket through your Backblaze B2 account. |
| _Bucket Name_ | **Required** — Enter the bucket’s name where you wish to store your backup. You **must** first create the bucket name through your Backblaze B2 account. |
| _Application Key ID_ | **Required** — Enter the application key ID in this text box. Your server uses the access key to authenticate with the Backblaze B2 account. You **must** first generate an application key ID through your Backblaze B2 account. |
| _Application Key_ | **Required** — Enter the application key in this text box. You **must** first generate an application key through your Backblaze B2 account. |
| _Timeout_ | **Required** — The maximum amount of time, in seconds, that you want the server to wait for a response from the remote server before it generates errors.<br>- You **must** enter a number between `30` and `300`.<br>- If the server does not respond before the time expires, it makes two additional attempts to contact the server.<br>- If the server does not respond after those attempts, the system administrator receives an email that notes the failed attempts. The system will retry the transfer when it runs the backup process again. |

[Custom](https://docs.cpanel.net/whm/backup/backup-configuration/#custom1764175699580544820)

We **strongly** recommend that only advanced users create custom backup destinations. We also **strongly** recommend that you **only** transfer system backup files over encrypted connections.

| Setting | Description |
| --- | --- |
| _Destination Name_ | **Required** — Enter a destination name for your backup files. This name appears in your destination table. |
| _Transfer System Backups to this Destination_ | Select this checkbox to transfer system backups to this additional destination. To use this setting, you **must** also select the _Back up System Files_ checkbox in the _Backup Settings_ tab. |
| _Only use this destination for log file transfers_ | Select this checkbox to **only** transfer log files to the remote destination. Do **not** select this checkbox if you will use this destination for all backups. If you select this setting, you **cannot** use this destination for account and/or system backups. |
| _Script_ | **Required** — Enter your custom transport script’s absolute path. For more information on custom transport scripts, read the [How to Create a Custom Transport Script for Backups](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/) documentation. |
| _Backup Directory_ | **Required** — Enter the directory path, relative to the account’s home directory, in which you wish to store backups. |
| _Remote Host_ | **Required** — Enter the hostname or IP address of the remote server.<br>- Do **not** include `http://`, `https://`, a trailing port, or path information.<br>- Do **not** use local hosts or loopback addresses. |
| _Remote Account Username_ | **Required** — The username of the account on the remote server. |
| _Remote Password_ | **Required** — The password for the account on the remote server. Unless you specify a new password, your server will use the existing password. |
| _Timeout_ | **Required** — The maximum amount of time, in seconds, that you want the server to wait for a response from the remote server before it generates errors.You **must** enter a number between `30` and `300`.<br>- If the server does not respond before the time expires, it makes two additional attempts to contact the server.<br>- If the server does not respond after those attempts, the system administrator receives an email that notes the failed attempts. The system will retry the transfer when it runs the backup process again. |

[FTP](https://docs.cpanel.net/whm/backup/backup-configuration/#ftp1764175699580901991)

- We **strongly** recommend that you **only** transfer system backup files over encrypted connections. For example, you could use SFTP instead of FTP.

- Make **certain** that your FTP server supports the MLSD (Machine List Directory) or LIST commands. If the FTP server does **not** support these commands, the backup system **cannot** use the FTP server as a remote FTP server.

- Unix-supported FTP servers, such as [ProFTP](http://www.proftpd.org/docs/) and [Pure-FTPd](https://www.pureftpd.org/project/pure-ftpd/doc/), support these commands.

- For more information about these commands, read Wikipedia’s [List of FTP commands](https://en.wikipedia.org/wiki/List_of_FTP_commands) documentation and itef.org’s [RCF 3659](https://tools.ietf.org/html/rfc3659#section-7) documentation.

- Make certain that any hidden files, or files that begin with a period (`.`), have write permissions on the FTP server. The backup system can **only** prune data from files with these permissions.

- We **strongly** recommend that you use Pure-FTPd or ProFTPD on remote FTP servers. Unexpected results may occur with some FTP server software.

- If you use Pure-FTPd, ensure that the `DisplayDotFiles yes` statement resides in the `/etc/pure-ftpd.conf` file.

- If you use ProFTPD, ensure that the `Listsettings -a` statement resides in the `/etc/proftpd.conf` file

- If you use the Very Secure FTP daemon (`vsftpd`), ensure that you set the `force_dot_files` setting to `yes` in the `/etc/vsftpd.conf` file. For more information about `vsftpd`, read the [vsftpd](https://security.appspot.com/vsftpd.html) documentation.


| Setting | Description |
| --- | --- |
| _Destination Name_ | **Required** — Enter a destination name for your backup files. This name appears in your destination table. |
| _Transfer System Backups to this Destination_ | Select this checkbox to transfer system backups to this additional destination. To use this setting, you **must** also select the _Back up System Files_ checkbox in the _Backup Settings_ tab. |
| _Only use this destination for log file transfers_ | Select this checkbox to **only** transfer log files to the remote destination. Do **not** select this checkbox if you will use this destination for all backups. If you select this setting, you **cannot** use this destination for account and/or system backups. |
| _Backup Directory_ | Enter the directory path, relative to the account’s home directory, in which you wish to store backups. |
| _Remote Host_ | **Required** — Enter the hostname or IP address of the remote server.<br>- Do **not** include `http://`, `https://`, a trailing port, or path information.<br>- Do **not** use local hosts or loopback addresses. |
| _Port_ | Enter the port to use to communicate with the remote server. By default, FTP destinations use port `21`. |
| _Remote Account Username_ | **Required** — Enter the username of the account on the remote server. |
| _Remote Password_ | **Required** — Enter the password for the account on the remote server. |
| _Timeout_ | **Required** — The maximum amount of time, in seconds, that you want the server to wait for a response from the remote server before it generates errors.<br>- You **must** enter a number between `30` and `300`.<br>- If the server does not respond before the time expires, it makes two additional attempts to contact the server.<br>- If the server does not respond after those attempts, the system administrator receives an email that notes the failed attempts. The system will retry the transfer when it runs the backup process again. |
| _Passive FTP_ | Select whether to use passive FTP. FTP servers behind NAT firewalls require this setting. |

[Google Drive™](https://docs.cpanel.net/whm/backup/backup-configuration/#google-drive1764175699581113618)

To use this destination type, you must possess a Google Drive account. To create a Google Drive account, visit the [Google® Create your Google Account](https://accounts.google.com/signup) page.

For more information about how to use Google Drive for backup transfers, read our [How to Configure Google Drive as a Backup Additional Destination](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/) documentation.

| Setting | Description |
| --- | --- |
| _Destination Name_ | **Required** — Enter a destination name for your backup files. This name appears in your destination table. |
| _Transfer System Backups to this Destination_ | Select this checkbox to transfer system backups to this additional destination. To use this setting, you **must** also select the _Back up System Files_ checkbox in the _Backup Settings_ tab. |
| _Only use this destination for log file transfers_ | Select this checkbox to **only** transfer log files to the remote destination. Do **not** select this checkbox if you will use this destination for all backups. If you select this setting, you **cannot** use this destination for account and/or system backups. |
| _Folder_ | Enter a directory where you would like to store backups, relative to the remote account’s directory root. The system will store backups under this directory in subdirectories which use a date-based naming convention. |
| _Client ID_ | **Required** — Enter the client ID for the access credentials. |
| _Client secret_ | **Required** — Enter the client secret for the access credentials. |
| _Generate Credentials_ | Click this button to generate the necessary credentials from your client ID and client secret. |
| _Timeout_ | **Required** — The maximum amount of time, in seconds, that you want the server to wait for a response from the remote server before it generates errors.<br>- You **must** enter a number between `30` and `300`.<br>- If the server does not respond before the time expires, it makes two additional attempts to contact the server.<br>- If the server does not respond after those attempts, the system administrator receives an email that notes the failed attempts. The system will retry the transfer when it runs the backup process again. |

[Rsync](https://docs.cpanel.net/whm/backup/backup-configuration/#rsync1764175699581441001)

| Setting | Description |
| --- | --- |
| _Destination Name_ | **Required** — Enter a destination name for your backup files. This name appears in your destination table. |
| _Transfer System Backups to this Destination_ | Select this checkbox to transfer system backups to this additional destination. To use this setting, you **must** also select the _Back up System Files_ checkbox in the _Backup Settings_ tab. |
| _Only use this destination for log file transfers_ | Select this checkbox to **only** transfer log files to the remote destination. Do **not** select this checkbox if you will use this destination for all backups. If you select this setting, you **cannot** use this destination for account and/or system backups. |
| _Backup Directory_ | Enter the directory path, relative to the account’s home directory, in which you wish to store backups. |
| _Remote Host_ | **Required** — Enter the hostname or IP address of the remote server.<br>- Do **not** include `http://`, `https://`, a trailing port, or path information.<br>- Do **not** use local hosts or loopback addresses. |
| _Port_ | **Required** \- The port to use to communicate with the remote server. By default, Rsync destinations use port `22`. |
| _Remote Account Username_ | **Required** — The username for the account on the remote server. |
| _Authentication Type_ | **Required** — Select how you wish to authenticate to the remote server:<br>- _Key Authentication_ — Select this setting to use key-based authentication. We **strongly** recommend that you use this method.<br>- _Password Authentication_ — Select this setting to use password-based authentication. |
| _Key Authentication settings_ | If you selected _Key Authentication_ for the _Authentication Type_ setting, perform the following actions: <br>- Enter the full path of the private key on this server in the _Private Key_ text box.<br>  1. Click on a key’s name in the _Private Keys_ list to add that private key’s filepath to the _Private Key_ text box.<br>  2. To generate a new private key, click _Generate a New Key_ and then _Generate Key_. A success message will appear at the bottom of the interface.<br>  3. The private key resides in the `/root/.ssh/keyname` file, where `keyname` represents the key’s name. The private key’s corresponding public key resides in the `/root/.ssh/keyname.pub` file.<br>- Enter the passphrase for this server in the _Passphrase_ text box. |
| _Password Authentication settings_ | If you selected _Password Authentication_ for the _Authentication Type_ setting, enter the password for the account on the remote server in the _Remote Password_ text box. |
| _Timeout_ | **Required** — The maximum amount of time, in seconds, that you want the server to wait for a response from the remote server before it generates errors.<br>- You **must** enter a number between `30` and `300`.<br>- If the server does not respond before the time expires, it makes two additional attempts to contact the server.<br>- If the server does not respond after those attempts, the system administrator receives an email that notes the failed attempts. The system will retry the transfer when it runs the backup process again.The interface currently **only** recognizes the default value of 30 seconds. |

[S3 Compatible](https://docs.cpanel.net/whm/backup/backup-configuration/#s3-compatible1764175699581688340)

We **strongly** recommend that you **only** transfer system backup files over encrypted connections.

| Setting | Description |
| --- | --- |
| _Destination Name_ | **Required** — Enter a destination name for your backup files. This name appears in your destination table. |
| _Transfer System Backups to this Destination_ | Select this checkbox to transfer system backups to this additional destination. To use this setting, you **must** also select the _Back up System Files_ checkbox in the _Backup Settings_ tab. |
| _Only use this destination for log file transfers_ | Select this checkbox to **only** transfer log files to the remote destination. Do **not** select this checkbox if you will use this destination for all backups. If you select this setting, you **cannot** use this destination for account and/or system backups. |
| _Folder_ | Enter the name of the directory where you wish to store your backup. |
| _S3 Endpoint_ | **Required** — Enter the fully qualified domain name (FQDN) for the remote server where your bucket resides. <br>- The system backs up files to the destination server through a secured connection via SSL/TLS. <br>- The FQDN that you enter **must** be the same as the FQDN on the server’s SSL/TLS certificate, or the connection will fail.<br>- The S3 Endpoint server **must** use [virtual-hosted-style URIs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html). |
| _Bucket_ | **Required** — Enter the name of the bucket where you wish to store your backup. You must first create the bucket through your S3-compatible provider. |
| _Access Key ID_ | **Required** — Enter the access key ID in this text box. Your server uses the access key to authenticate with your S3-compatible account. You **must** first generate an access key ID through your S3-compatible provider. |
| _Secret Access Key_ | **Required** — Enter the secret access key in this text box. You **must** first generate a secret access key ID through your S3-compatible provider. |
| _Timeout_ | **Required** — The maximum amount of time, in seconds, that you want the server to wait for a response from the remote server before it generates errors.<br>- You **must** enter a number between `30` and `300`.<br>- If the server does not respond before the time expires, it makes two additional attempts to contact the server.<br>- If the server does not respond after those attempts, the system administrator receives an email that notes the failed attempts. The system will retry the transfer when it runs the backup process again. |

[SFTP](https://docs.cpanel.net/whm/backup/backup-configuration/#sftp1764175699581983499)

| Setting | Description |
| --- | --- |
| _Destination Name_ | **Required** — Enter a destination name for your backup files. This name appears in your destination table. |
| _Transfer System Backups to this Destination_ | Select this checkbox to transfer system backups to this additional destination. To use this setting, you **must** also select the _Back up System Files_ checkbox in the _Backup Settings_ tab. |
| _Only use this destination for log file transfers_ | Select this checkbox to **only** transfer log files to the remote destination. Do **not** select this checkbox if you will use this destination for all backups. If you select this setting, you **cannot** use this destination for account and/or system backups. |
| _Backup Directory_ | **Required** — Enter the directory path, relative to the account’s home directory, in which you wish to store backups. |
| _Remote Host_ | **Required** \- Enter the hostname or IP address of the remote server.<br>- Do **not** include `http://`, `https://`, a trailing port, or path information.<br>- Do **not** use local hosts or loopback addresses. |
| _Port_ | Enter the port to use to communicate with the remote server. By default, SFTP destinations use port 22. |
| _Remote Account Username_ | **Required** — Enter the username of the account on the remote server. |
| _Authentication Type_ | **Required** — Select how you wish to authenticate to the remote server:_Key Authentication_ — Select this setting to use key-based authentication. We **strongly** recommend that you use this method.<br>_Password Authentication_ — Select this setting to use password-based authentication. |
| _Key Authentication settings_ | If you selected _Key Authentication_ for the _Authentication Type_ setting, perform the following actions: <br>- Enter the full path of the private key on this server in the _Private Key_ text box.<br>  1. Click on a key’s name in the _Private Keys_ list to add that private key’s filepath to the _Private Key_ text box.<br>  2. To generate a new private key, click _Generate a New Key_ and then _Generate Key_. A success message will appear at the bottom of the interface. The private key resides in the `/root/.ssh/keyname` file, where `keyname` represents the key’s name. The private key’s corresponding public key resides in the `/root/.ssh/keyname.pub` file.<br>- Enter the passphrase for this server in the _Passphrase_ text box. |
| _Password Authentication settings_ | If you selected _Password Authentication_ for the _Authentication Type_ setting, enter the password for the account on the remote server in the _Remote Password_ text box. |
| _Timeout_ | **Required** — The maximum amount of time, in seconds, that you want the server to wait for a response from the remote server before it generates errors.<br>- You **must** enter a number between `30` and `300`.<br>- If the server does not respond before the time expires, it makes two additional attempts to contact the server.<br>- If the server does not respond after those attempts, the system administrator receives an email that notes the failed attempts. The system will retry the transfer when it runs the backup process again. |

[WebDAV](https://docs.cpanel.net/whm/backup/backup-configuration/#webdav1764175699582212525)

We **strongly** recommend that you **only** transfer system backup files over encrypted connections. For WebDAV, we recommend that you enable the _SSL Enabled_ setting.

| Setting | Description |
| --- | --- |
| _Destination Name_ | **Required** — Enter a destination name for your backup files. This name appears in your destination table. |
| _Transfer System Backups to this Destination_ | Select this checkbox to transfer system backups to this additional destination. To use this setting, you **must** also select the _Back up System Files_ checkbox in the _Backup Settings_ tab. |
| _Only use this destination for log file transfers_ | Select this checkbox to **only** transfer log files to the remote destination. Do **not** select this checkbox if you will use this destination for all backups. If you select this setting, you **cannot** use this destination for account and/or system backups. |
| _Backup Directory_ | **Required** — Enter the directory path, relative to the account’s home directory, in which you wish to store backups. |
| _Remote Host_ | **Required** \- Enter the hostname or IP address of the remote server.<br>- Do **not** include `http://`, `https://`, a trailing port, or path information.<br>- Do **not** use local hosts or loopback addresses. |
| _Port_ | **Required** \- The port to use to communicate with the remote server. By default, WebDAV destinations use port 80. Secure connections use port 443. cPanel & WHM uses port 2077 for non-SSL connections and port 2078 for SSL connections. |
| _SSL Enabled_ | Select this checkbox to enable SSL. WebDAV destinations **require** that you enable SSL encryption. |
| _Remote Account Username_ | **Required** — The username for the account on the remote server. |
| _Remote Password_ | **Required** — The password for the account on the remote server. |
| _Timeout_ | **Required** — The maximum amount of time, in seconds, that you want the server to wait for a response from the remote server before it generates errors.<br>- You **must** enter a number between `30` and `300`.<br>- If the server does not respond before the time expires, it makes two additional attempts to contact the server.<br>- If the server does not respond after those attempts, the system administrator receives an email that notes the failed attempts. The system will retry the transfer when it runs the backup process again.The interface currently only recognizes the default value of 30 seconds. |

After you complete the form, click _Save Destination_ to save your updated destination but **not** validate your changes.

To automatically validate your information after you save your changes, click _Save and Validate Destination_. The current backup destination table will appear.

### The current backup destination table

The table in the _Additional Destinations_ tab lists your existing backup transport destinations and the following information:

| Column | Description | Possible values |
| --- | --- | --- |
| _Destination_ | The user-generated destination name. | A string value. |
| _Transport_ | The user-generated destination name. | Any of the transport types listed in the _Destination Type_ menu. |
| _System Backup_ | Whether you enabled or disabled system backups transfers to this destination. | - _Enabled_ — You enabled transfers.<br>- _Disabled_ — You did not enable transfers. |
| _Destination ID_ | The system-generated unique identifier for the destination. | A string value. |
| _Status_ | Whether the system has enabled or disabled the transport connection. | - _Enabled_ — Your system is connected to the destination.<br>- _Disabled_ — Your system is not connected to the destination. |
| _Information icon_ | Whether the last validation succeeded or failed. | - _Green check mark_ — The last validation succeeded.<br>- _Red letter X_ — The last validation failed. |
| _Actions_ | Allow you to manage the destination’s settings. | - _Edit_ — Opens the destination editor.<br>- _Delete_ — Deletes the destination transport from your local disk.<br>- _Validate_ — Tests and verifies the destination’s connection.<br>- _Enable/Disable_ — Sets the toggle to enable or disable the transport. |

To restore backups that exist in the additional destinations that you create, perform a remote restoration. For more information, read our [Remote Restoration](https://docs.cpanel.net/knowledge-base/backup/remote-restoration/) documentation.

## The Validation Results tab

The _Validation Results_ tab appears after a user verifies the connection to one or more destinations. The tab shows a table that lists the following information:

| Column | Description | Possible values |
| --- | --- | --- |
| _Destination ID_ | The system-generated unique identifier for the destination. | A string value. |
| _Name_ | The user-generated destination name. | A string value. |
| _Transport_ | The transport type. | Any of the transport types listed in the _Destination Type_ menu. |
| _Status_ | Whether the last validation succeeded or failed. | - _Green check mark_ \- The last validation succeeded<br>- _Red letter X_ \- The last validation failed.<br>- _Blue hourglass_ \- The system is validating the connection. |
| _Start Time_ | The time when the system began the validation process. | A timestamp in `HH:MM:SS` format, where: <br>- `HH` represents the hour.<br>- `MM` represents the minutes.<br>- `SS` represents the seconds.<br>The letters `AM` or `PM` follow the timestamp to show the 12-hour clock time convention. |
| _Elapsed Time_ | How long the validation process lasted. <br>Note:<br>This text box appears when the validation completes. | A numeric value that represents seconds. |
| _Message_ | A success or failure validation message. <br>Note:<br>This text box appears when the validation completes. | A string value. |

The _Validation Results_ tab disappears when you navigate away from the _Backup Configuration_ interface. Verify any connection to reveal it again.

#### Additional Documentation

* * *

- [Backup Restoration](https://docs.cpanel.net/whm/backup/backup-restoration/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Backup System Migration](https://docs.cpanel.net/whm/backup/backup-system-migration/)
- [Backup Tarball Contents](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/)
- [File and Directory Restoration for WHM](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×