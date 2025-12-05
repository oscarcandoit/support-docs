---
url: "https://docs.cpanel.net/knowledge-base/backup/system-backups/"
title: "System Backups | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/backup/system-backups/#main-content)

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
4. System Backups


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [backups](https://docs.cpanel.net/tags/backups/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/backup/system-backups/#overview)

* * *

[How to enable system backup file saves](https://docs.cpanel.net/knowledge-base/backup/system-backups/#how-to-enable-system-backup-file-saves)

* * *

[System backup files and directories](https://docs.cpanel.net/knowledge-base/backup/system-backups/#system-backup-files-and-directories)

* * *

[Files](https://docs.cpanel.net/knowledge-base/backup/system-backups/#files)

* * *

[Directories](https://docs.cpanel.net/knowledge-base/backup/system-backups/#directories)

* * *

[Custom files](https://docs.cpanel.net/knowledge-base/backup/system-backups/#custom-files)

* * *

[How to configure an additional destination to receive system backups](https://docs.cpanel.net/knowledge-base/backup/system-backups/#how-to-configure-an-additional-destination-to-receive-system-backups)

* * *

[Interface method](https://docs.cpanel.net/knowledge-base/backup/system-backups/#interface-method)

* * *

[Manual configuration method](https://docs.cpanel.net/knowledge-base/backup/system-backups/#manual-configuration-method)

* * *

[API call method](https://docs.cpanel.net/knowledge-base/backup/system-backups/#api-call-method)

* * *

[Log files](https://docs.cpanel.net/knowledge-base/backup/system-backups/#log-files)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/backup/system-backups/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/backup/system-backups/#overview)

* * *

[How to enable system backup file saves](https://docs.cpanel.net/knowledge-base/backup/system-backups/#how-to-enable-system-backup-file-saves)

* * *

[System backup files and directories](https://docs.cpanel.net/knowledge-base/backup/system-backups/#system-backup-files-and-directories)

* * *

[Files](https://docs.cpanel.net/knowledge-base/backup/system-backups/#files)

* * *

[Directories](https://docs.cpanel.net/knowledge-base/backup/system-backups/#directories)

* * *

[Custom files](https://docs.cpanel.net/knowledge-base/backup/system-backups/#custom-files)

* * *

[How to configure an additional destination to receive system backups](https://docs.cpanel.net/knowledge-base/backup/system-backups/#how-to-configure-an-additional-destination-to-receive-system-backups)

* * *

[Interface method](https://docs.cpanel.net/knowledge-base/backup/system-backups/#interface-method)

* * *

[Manual configuration method](https://docs.cpanel.net/knowledge-base/backup/system-backups/#manual-configuration-method)

* * *

[API call method](https://docs.cpanel.net/knowledge-base/backup/system-backups/#api-call-method)

* * *

[Log files](https://docs.cpanel.net/knowledge-base/backup/system-backups/#log-files)

* * *

## System Backups

_Valid for versions 90 through the latest version_

#### Version:

#### [90](https://docs.cpanel.net/knowledge-base/backup/system-backups/)

Last modified: _2025 July 14_

* * *

## Overview

If you enable system backups, your server saves system backup files in the local backup directory (`/backup`) by default. You can also save system backup files to an additional destination. You can do this [manually](https://docs.cpanel.net/knowledge-base/backup/system-backups/#manual-configuration-method), [via API](https://docs.cpanel.net/knowledge-base/backup/system-backups/#api-call-method), or via WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration) interface ( _WHM » Home » Backup » Backup Configuration_).

The [`/usr/local/cpanel/bin/backup`](https://docs.cpanel.net/whm/scripts/the-backup-script) script uploads a `.tar` file that contains all of the system backup files to each destination that you configure to receive system backups. The system **only** sends system backup files to destinations whose files contain a `upload_system_backup` value of `1` (enabled).

Note:

- cPanel & WHM does **not** include an interface to restore system backup files. To restore content from system backup files, you **must** perform the restoration manually.
- The additional destination configuration file uses [YAML](https://yaml.org/) format, which contains a simple associative array.
- For security purposes, ensure that the destination server is on your secure network. If your backups will **not** transfer to a server on your secure network, use a secure method such as SFTP, Amazon S3™, or WebDAV with SSL.

## How to enable system backup file saves

To enable system backup file saves, you can perform one of the following actions:

- Select the _Back up System Files_ checkbox in the _Backup Settings_ tab in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration) interface ( _WHM » Home » Backup » Backup Configuration_).
- Use the WHM API 1 [`backup_config_set`](https://api.docs.cpanel.net/openapi/whm/operation/backup_config_set/) function and set the `backupfiles` value to `1`.

## System backup files and directories

Important:

The server backs up DNSSEC databases as part of the system files backup. The system can corrupt the DNSSEC database if it encounters an Out Of Memory (OOM) or disk full condition. The system administrator can also corrupt this database inadvertently.

The system administrator can restore the database from the system backup files. If they do **not** back up system files, they will need to perform the following steps:

- Rebuild the `PDNS.db` file from scratch.
- Regenerate the DNSSEC keys for each domain that lost its DNSSEC key.
- Tell users to register the **new** DNSSEC keys with their [domain registrar](https://docs.cpanel.net/knowledge-base/dns/how-to-identify-your-registrar).

cPanel & WHM backs up the following files and directories:

### Files

- `/etc/exim.conf`
- `/etc/exim.conf.local`
- `/etc/exim.conf.localopts`
- `/etc/named.conf`
- `/etc/named.conf`
- `/etc/proftpd.conf`
- `/etc/pure-ftpd.conf`
- `/etc/localdomains`
- `/etc/apache2/conf/httpd.conf`
- `/etc/group`
- `/etc/shadow`
- `/etc/passwd`
- `/etc/fstab`
- `/etc/ips`
- `/etc/ips.remotemail`
- `/etc/ips.remotedns`
- `/etc/manualmx`
- `/etc/reservedips`
- `/etc/reservedipreasons`
- `/etc/wwwacct.conf`
- `/etc/remotedomains`
- `/etc/rndc.conf`
- `/etc/secondarymx`
- `/etc/my.cnf`
- `/root/.my.cnf`
- `/etc/apache2/conf/httpd.conf`

### Directories

- `/etc/cpanel`
- `/etc/named`
- `/etc/valiases`
- `/etc/proftpd`
- `/etc/vdomainaliases`
- `/etc/ssl`
- `/etc/vfilters`
- `/usr/local/cpanel/3rdparty/mailman`
- `/var/lib/rpm`
- `/var/named`
- `/var/cpanel`
- `/var/spool/cron`
- `/var/cpanel/bandwidth`
- `/var/cpanel/ssl`
- `/var/lib/mysql`
- `/etc/pki/tls/certs/`

## Custom files

To configure system backups to include custom files or directories, create a new file or directory in the `/var/cpanel/backups/extras` directory (for example, `/var/cpanel/backups/extras/etc`). In that file, enter an absolute path to any files that you wish to back up (for example, `/etc/example.conf`).

Note:

The server administrator can edit the `/etc/my.cnf` file to change the MySQL® data directory location. The system will back up the directory at its new location.

## How to configure an additional destination to receive system backups

To configure an additional destination to receive system backups, perform one of the following procedures:

### Interface method

In WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/#the-additional-destinations-tab) interface, select the _Additional Destinations_ tab and enter the additional destination’s information.

Important:

Make certain that you select the _Transfer System Backups to this Destination_ checkbox.

### Manual configuration method

To manually modify the configuration file of an additional destination, perform the following steps:

1. Identify the configuration file in the `/var/cpanel/backups` directory.

   - Each destination requires its own configuration file.
   - The file name contains the destination name, the User ID (UID) label, and a UID character string. For example:



     ```bash
     myftp_UID_Z6rdq0rko2Z28uWTIN33SeCY.backup_destination
     ```





     Note:





     The UID sequence prevents conflicts with previously-created destinations that share the same name.
2. Open the file with a text editor and add the following line:



```bash
upload_system_backup: 1
```

3. Save the file.

### API call method

To use API calls to modify the configuration file of an additional destination, perform the following steps:

1. Call the WHM API 1 [`backup_destination_list`](https://api.docs.cpanel.net/openapi/whm/operation/backup_destination_list/) function to retrieve the ID of the additional destination to which you wish to send system backups.
2. Call the WHM API 1 [`backup_destination_set`](https://api.docs.cpanel.net/openapi/whm/operation/backup_destination_set/) function and include the following parameters and values:

   - `id` — The ID that the [`backup_destination_list`](https://api.docs.cpanel.net/openapi/whm/operation/backup_destination_list/) function returned.
   - `upload_system_backup` — `1`

## Log files

The system’s backup initialization logs to the `/usr/local/cpanel/logs/error_log` file. The `error_log` file points to the individual account package logs. For more information, read our [cPanel & WHM Log Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/) documentation.

#### Additional Documentation

* * *

- [Backup Configuration](https://docs.cpanel.net/whm/backup/backup-configuration/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [How to Create a Custom Transport Script for Backups](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/)
- [How to Exclude Files from Backups](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/)
- [How to Resolve CIFS-mounted Backup Drive Permissions Errors](https://docs.cpanel.net/knowledge-base/backup/how-to-resolve-cifs-mounted-backup-drive-permissions-errors/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×