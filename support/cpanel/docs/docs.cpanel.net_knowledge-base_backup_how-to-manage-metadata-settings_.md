---
url: "https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/"
title: "How to Manage Metadata Settings | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#main-content)

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
4. How to Manage Metadata Settings


[backups](https://docs.cpanel.net/tags/backups/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#overview)

* * *

[Metadata databases](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#metadata-databases)

* * *

[Metadata database tables](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#metadata-database-tables)

* * *

[The master meta file](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#the-master-meta-file)

* * *

[The backup directory structure](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#the-backup-directory-structure)

* * *

[Disable metadata creation](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#disable-metadata-creation)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#overview)

* * *

[Metadata databases](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#metadata-databases)

* * *

[Metadata database tables](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#metadata-database-tables)

* * *

[The master meta file](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#the-master-meta-file)

* * *

[The backup directory structure](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#the-backup-directory-structure)

* * *

[Disable metadata creation](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#disable-metadata-creation)

* * *

## How to Manage Metadata Settings

_Valid for versions 76 through the latest version_

#### Version:

#### [76](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/)

Last modified: _2025 June 9_

* * *

## Overview

WHM administrators can manage metadata creation with WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM » Home » Backup » Backup Configuration_) or the [`backups_create_metadata`](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/) script.

By default, every time that cPanel & WHM creates a backup, it creates metadata for that backup. You may want to disable metadata creation for testing, before an upgrade, or if your server experiences performance issues.

Note:

- The `backups_create_metadata` script will generate metadata for all directories under the `/home/username` directory, except for the `/mail` and `/.cpanel` directories.
- You **must** create at least one backup and metadata entry on a local disk for the following interfaces to appear:

  - cPanel’s [_File and Directory Restoration_](https://docs.cpanel.net/cpanel/files/file-and-directory-restoration-for-cpanel/) interface ( _cPanel » Home » Files » File and Directory Restoration_).
  - WHM’s [_File and Directory Restoration_](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/) interface ( _WHM » Home » Backups » File and Directory Restoration_).

## Metadata databases

Every time that cPanel & WHM creates a backup, it creates metadata for that backup. The system stores that metadata as entries in a `username.db` database, where `username` represents the cPanel account’s username.

Then, the system saves the `username.db` database to the `.meta` directory under your configured backup directory. These metadata databases store the indexed information of their related backups in smaller, more easily-searched files. This lets you retrieve information from them faster than from the larger backup files.

### Metadata database tables

The following tables describe fields in the metadata databases:

- [`backup_paths`](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#the-backup_paths-table) — This table backup file locations.
- [`backups`](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#the-backups-table) — This table lists the backup files on the local disk.
- [`file_changes`](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#the-file_changes-table) — This table tracks specific backup file changes.
- [`metadata`](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#the-metadata-table) — This table stores the metadata’s schema type and code version number.
- [`seen_files`](https://docs.cpanel.net/knowledge-base/backup/how-to-manage-metadata-settings/#the-seen_files-table) — This table tracks the files a backup file contains.

#### The backup\_paths table

The `backup_paths` table lists the backup files’ paths.

| Field | Type | Description | Possible values | Example |
| --- | --- | --- | --- | --- |
| `backup_path` | _string_ | The backup files’s filepath, relative to the configured backup directory. | A string value. | `/backup/2018-04-12/accounts` |
| `backup_id` | _integer_ | The backup file’s identification number. | A positive integer. This value references the `backup_id` value in the `backups` table. | `1` |

#### The backups table

The `backups` table lists the backup files on the disk.

| Field | Type | Description | Possible values | Example |
| --- | --- | --- | --- | --- |
| `backup_id` | _integer_ | The backup file’s identification number. | An automatically-incrementing positive integer. | `1` |
| `timestamp` | _timestamp_ | The backup files’ creation date in [Universal Time Coordinated (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time%20format). | An integer. | `1523642274` |
| `does_exist` | _Boolean_ | Whether the backup file exists. | - `1` — Exists.<br>- `0` — Does **not** exist. | `1` |

#### The file\_changes table

The `file_changes` table lists backup file changes when any of the following actions occur:

- The **first time** the system backs up the file.
- The user modifies the file.
- The user removes the file.

| Field | Type | Description | Possible values | Example |
| --- | --- | --- | --- | --- |
| `seen_files_id` | _integer_ | The filepath’s identification number. | A positive integer. This value references the `file_id` value in the `seen_files` table. | `1` |
| `backup_id` | _integer_ | The backup file’s identification number. | A positive integer. This value references the `backup_id` value in the `backups` table | `1` |
| `size` | _integer_ | The backup file’s size in bytes. | A positive integer. <br>Note:<br>A directory or a symlink displays a `0` file size. | `660` |
| `mtime` | _integer_ | The date when the user last modified the file, in [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) format. | An integer. | `1523642274` |
| `operation` | _integer_ | The change type. | - `0` — The user created the backup file.<br>- `1` — The user changed the file.<br>- `2` — The user removed the file. | `0` |
| `type` | _integer_ | The backup file’s type. | - `0` — A file.<br>- `1` — A directory.<br>- `2` — A symlink | `0` |

#### The metadata table

This table stores metadata keys and values.

| Field | Type | Description | Possible values | Example |
| --- | --- | --- | --- | --- |
| `key` | _string_ | The metadata code type. | `schema_version` — The metadata schema’s type. | `schema_version` |
| `value` | _string_ | The metadata code’s version number. | A string value. | `3.1` |

#### The seen\_files table

This table stores filenames.

| Field | Type | Description | Possible values | Example |
| --- | --- | --- | --- | --- |
| `file_id` | _integer_ | The file’s identification number. | An automatically-incrementing positive integer. | `1` |
| `path` | _string_ | The file’s filepath, relative to the `/home/username` directory. | A string value. | `/public_html/` |

### The master meta file

The `.master.meta` file stores relevant data about cPanel user backups that is not stored in the metadata database tables. This information, unlike the information in the tables, doesn’t change.

Every accounts directory inside the daily, weekly, and monthly backup directories contains a `.master.meta` file.

## The backup directory structure

The system stores backups inside the `/backup` directory in one of three different formats: compressed, uncompressed, and incremental. Each format uses a different filename extension.

| Backup format | Filename extension | Example |
| --- | --- | --- |
| Compressed | `.tar.gz` | `username.tar.gz` |
| Uncompressed | `.tar` | `username.tar` |
| Incremental | None | `username` |

The system distinguishes each backup by its filepath, even if the system stores the backup information under the same name. The filepath includes the backup directory where the backup resides. The following example shows the layout and structure of a `/backup` directory.

![Backup directory file structure](https://docs.cpanel.net/img/backup-folder-tree.png)

This directory includes daily, monthly, and weekly compressed backups. You can distinguish each backup type by its complete filepath. This filepath is the file’s full path. The system stores the metadata for this path in the `backup_paths` table, under the `backup_path` field.

The system also stores metafiles in the `/backup` directory and distinguished by their filepath. The system stores metafiles inside the `/backup` directory as entries in a `username.db` database, where `username` represents the cPanel account’s username.

## Disable metadata creation

You can manually disable metadata with WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM » Home » Backup » Backup Configuration_). The following table shows which settings affect the management of metadata manually and the _Backup Configuration_ interface. These settings function independently from one another.

Note:

- When you configure any of these settings to disable metadata creation, the following actions occur:
  - The system disables cPanel’s [_File and Directory Restoration_](https://docs.cpanel.net/cpanel/files/file-and-directory-restoration-for-cpanel) interface ( _cPanel » Home » Files » File and Directory Restoration_) and WHM’s [_File and Directory Restoration_](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm) interface ( _WHM » Home » Backups » File and Directory Restoration_). The interfaces display a notification that explains why the feature is unavailable.
- You can disable metadata with the WHM API 1 [`backup_config_set`](https://api.docs.cpanel.net/openapi/whm/operation/backup_config_set/) function.

| Backup configuration file setting | _Backup Configuration_ interface setting | Type | Description | Possible values |
| --- | --- | --- | --- | --- |
| `DISABLE_METADATA` | **None**. You must manually configure this setting with the WHM API 1 [`backup_config_set`](https://api.docs.cpanel.net/openapi/whm/operation/backup_config_set/) function. | _string_ | Whether the Backup system creates metadata when a backup runs. | - `yes` — Disables metadata creation.<br>- `no` — Enables metadata creation. |
| `BACKUPACCTS` | _Backup Accounts_ | _string_ | Whether the system includes cPanel user accounts in the backup. <br>Note:<br>WHM administrators can select which cPanel user accounts they wish to include in the backup through the [_Backup User Selection_](https://docs.cpanel.net/whm/backup/backup-user-selection/) interface ( _WHM » Home » Backup » Backup User Selection_). | - `yes` or selected checkbox — Include the cPanel user accounts in the backup and **enable** metadata creation.<br>- `no` or deselected checkbox — Do **not** include the cPanel user accounts in the backup and **disable** metadata creation. |
| `BACKUPENABLE` | _Backup Status_ | _string_ | Whether the WHM administrator wants backups enabled. | - `yes` or set toggle to _Enable_ — Enables backup and metadata creation.<br>- `no` or set toggle to _Disable_ — Disables backup and metadata creation. |
| `BACKUPMOUNT` | _Mount Backup Drive as Needed_ | _Boolean_ | Whether the system mounts the backup directory as a mount point before a backups runs, then unmounts it when the run completes. | - `1` or selected checkbox —Mount the backup directory and **disable** metadata creation.<br>- `0` or deselected checkbox — Do **not** mount the backup directory and **enable** metadata creation. |
| `KEEPLOCAL` | _Retain backups in the default backup directory_ | _Boolean_ | Whether the system retains backups in the default local backup directory. | - `1` or selected checkbox — Retains the backup and **enable** metadata creation.<br>- `0` or deselected checkbox – Does **not** retain the backup and **disable** metadata creation. |

#### Additional Documentation

* * *

- [Backup Configuration](https://docs.cpanel.net/whm/backup/backup-configuration/)
- [Backup Restoration](https://docs.cpanel.net/whm/backup/backup-restoration/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Backup System Migration](https://docs.cpanel.net/whm/backup/backup-system-migration/)
- [Backup Tarball Contents](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×