---
url: "https://docs.cpanel.net/whm/scripts/the-pkgacct-script/"
title: "The pkgacct Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/#main-content)

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
3. [Scripts](https://docs.cpanel.net/whm/scripts/)
4. The pkgacct Script


[migrations](https://docs.cpanel.net/tags/migrations/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/#overview)

* * *

[Server requirements](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/#server-requirements)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/#options)

* * *

[Use a custom pkgacct script](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/#use-a-custom-pkgacct-script)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/#overview)

* * *

[Server requirements](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/#server-requirements)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/#options)

* * *

[Use a custom pkgacct script](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/#use-a-custom-pkgacct-script)

* * *

## The pkgacct Script

_Valid for versions 132 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/102/)

#### [124](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/124/)

#### [132](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/)

Last modified: _2025 November 5_

* * *

## Overview

You can use the `/usr/local/cpanel/scripts/pkgacct` script to [create a `cpmove` archive](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/#use-a-custom-pkgacct-script) for an account. After you create the archive, you can then restore the account on any cPanel & WHM servers. By default, this script compresses the `cpmove` archive.

Important:

- This script does not use the `/etc/cpbackup-exclude.conf` file to [exclude files or directories from backups](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups).
- The system won’t transfer any email addresses from Plesk® to cPanel & WHM that contain a plus sign (`+`) in the email username.
- You can’t back up the `root` user.
- You can’t back up a [WHM reseller account without an associated domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#known-limitations-for-a-whm-reseller-account-without-an-associated-domain).
- This feature does **not** transfer [Two-Factor Authentication (2FA)](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/) configuration information for an account. The user will need to reconfigure 2FA on the new server.
- We do **not** recommend that you transfer accounts with calendars or contacts data from a server that runs cPanel & WHM version 120 or later to a server that runs cPanel & WHM version 118 or earlier. If you do this, you will need to manually copy and import the accounts’ calendars and contacts data once the transfer has completed.

### Server requirements

When you package an account for transfer, the source and destination servers must contain free disk space **greater** than twice the size of the largest account. Both servers also require an additional 1 GB of free disk space. The package and restore processes use the free space to store temporary files.

## Run the script

To use this script, run the following command as the `root` user:

```bash
/usr/local/cpanel/scripts/pkgacct [options] USERNAME DIRECTORY
```

Note:

This script uses strict argument/option matching. For example, `--userba` no longer automatically expands to match `--userbackup`. The system will display the help text for this script if you use an incomplete option name.

### Options

This script accepts the following options:

| Option | Description | Example |
| --- | --- | --- |
| `USERNAME` | **Required**<br> The cPanel account username for which to create a `cpmove` archive. You must pass this option **after** any options, but **before** the `DIRECTORY` option. | `example` |
| `DIRECTORY` | - The directory path in which to store the archive. <br>- By default, the script uses the users’ home directory with the most free storage space. You can review and edit your users’ home directories in WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager Setup_).<br>- You must pass this option **after** the `USERNAME` option. | `/usr/local/cpanel/backups` |
| `--allow-override` | Use the `/var/cpanel/lib/Whostmgr/Pkgacct/pkgacct` file to package the account, if it exists. <br>Note:<br>You must pass this option **before** any other options. | `--allow-override` |
| `--mysql=VERSION` | The archive’s required minimum version of MySQL®. | `--mysql=5.1.1` |
| `--roundcube=VERSION` | The archive’s required minimum version of Roundcube. | `--roundcube=3.0` |
| `--dbbackup=TYPE` | The type of database backup to perform: <br>- `all` — The script backs up all of the database information. This is the default option. <br>- `schema` — The script only backs up the database schemas. Only use this option to track a database’s users if you back up your databases through a different method. <br>- `name` — The script only backs up the database names. MySQL databases transfer as placeholders containing a [`CREATE TABLE` statement](https://dev.mysql.com/doc/refman/8.0/en/create-table.html). PostgreSQL® databases transfer as empty `.tar` placeholder files. | `--dbbackup=all` |
| `--dbbackup_mysql=TYPE` | An override of the `--dbbackup` option for MySQL **only**. This option accepts the same values as the `--dbbackup` option. <br>Note:<br>- If you pass \*\*both\*\* this option and the \`--dbbackup\` option, the system applies the \`--dbbackup\_mysql\` option to MySQL and the \`--dbbackup\` option to PostgreSQL. <br>- This option has no effect on PostgreSQL backups. | `--dbbackup_mysql=all` |
| `--get_version` | Display the version of the `pkgacct` script. | `--get_version` |
| `--use_backups` | Use the account’s last known successful backup as a template when the script creates the archive. Use this option to speed up the backup process. | `--use_backups` |
| `--incremental` | Update the destination file with any new content since the previous backup. This option also removes any content that no longer exists on the account. If the destination file does **not** exist, the script creates a new file in that location. <br>Note:<br>This option will pass the `--nocompress` option to create an uncompressed archive. | `--incremental` |
| `--split` | Create the archive in smaller data files. This option reduces the overall load on the system and makes it easier to transfer the files. The system creates these files in the `cpmove-USERNAME.tar.gz.part00001` format, where `USERNAME` is the user’s account and `part00001` is the file’s incremental ID. | `--split` |
| `--nocompress` | Do not compress the archive. | `--nocompress` |
| `--userbackup` | Allow the user to use the archive as a backup file for the account (for example, `backup-3.18.2020_09-16-55_USERNAME`). The system creates the file in the `/home` directory. This file is compatible with WHM’s [_Transfer or Restore a cPanel Account_](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account) interface ( _WHM » Home » Transfers » Transfer or Restore a cPanel Account_). <br>Important:<br>The system also creates two ASCII files for internal use in the `/home/USERNAME` directory, where `USERNAME` is the cPanel account name. You **must** remove these ASCII files after the system creates them. To create a backup file without the ASCII files, use UAPI’s [`fullbackup_to_homedir`](https://api.docs.cpanel.net/openapi/cpanel/operation/fullbackup_to_homedir/) function. | `--userbackup` |
| `--backup` | Use the archive as a backup for the account at the given file path. This option creates the `username.tar.gz` file, where `username` represents the account’s username. | `--backup` |
| `--serialized_output` | Encodes each line of the script’s output in JSON format in order to allow the `live_tail_log.cgi` script to stream it. | `--serialized_output` |
| `--skipacctdb` | Exclude the account’s MySQL and PostgreSQL databases from the archive. | `--skipacctdb` |
| `--skipapitokens` | Exclude the account’s API tokens from the archive. | `--skipapitokens` |
| `--skipauthnlinks` | Exclude the account’s external authentication credentials from the archive. | `--skipauthnlinks` |
| `--skipbwdata` | Exclude the account’s bandwidth data from the archive. | `--skipbwdata` |
| `--skipcron` | Exclude the account’s [cron](https://en.wikipedia.org/wiki/Cron) data from the archive. | `--skipcron` |
| `--skipcustomdmarc` | Exclude the account’s custom DMARC records from the archive. | `--skipcustomdmarc` |
| `--skipdnszones` | Exclude the account’s DNS zone file information from the archive. | `--skipdnszones` |
| `--skipdomains` | Exclude the account’s subdomains, parked domains (aliases), and addon domains from the archive. | `--skipdomains` |
| `--skipdomainkeys` | Exclude the account’s DKIM keys from the archive. | `--skipdomainkeys` |
| `--skipftpusers` | Exclude the account’s FTP user accounts from the archive. | `--skipftpusers` |
| `--skiphomedir` | Exclude the account’s `/home` directory from the archive. Use this option if you will save or transfer the `/home` directory with another method, such as the `rsync` command. | `--skiphomedir` |
| `--skipintegrationlinks` | Exclude the account’s integration links from the archive. | `--skipintegrationlinks` |
| `--skiplinkednodes` | Exclude the account’s server node linkages from the archive. | `--skiplinkednodes` |
| `--skiplocale` | Exclude the account’s locale information or customized locale from the archive. | `--skiplocale` |
| `--skiplogs` | Exclude the account’s log files from the archive. | `--skiplogs` |
| `--skipmail` | Exclude the account’s mail directory from the archive. | `--skipmail` |
| `--skipmailconfig` | Exclude the account’s mail configuration information from the archive. | `--skipmailconfig` |
| `--skipmailman` | Exclude the account’s [Mailman](https://www.list.org/) mailing lists from the archive. | `--skipmailman` |
| `--skipmysql` | Exclude the account’s MySQL databases, database users, and database grants from the archive. | `--skipmysql` |
| `--skippasswd` | Exclude the account’s password from the archive. | `--skippasswd` |
| `--skippgsql` | Exclude the account’s PostgreSQL databases, database users, and database grants from the archive. | `--skippgsql` |
| `--skippublichtml` | Exclude the account’s `/public_html` directory. | `--skippublichtml` |
| `--skipquota` | Exclude the account’s disk quota limits from the archive. | `--skipquota` |
| `--skipresellerconfig` | Exclude the account’s reseller privileges from the archive. | `--skipresellerconfig` |
| `--skipshell` | Exclude the account’s shell information and privileges from the archive. | `--skipshell` |
| `--skipssl` | Exclude the server’s SSL certificates and files in the Apache® configuration. This option does **not** exclude the SSL files in the account’s `/home` directory. | `--skipssl` |
| `--skipuserdata` | Exclude the account’s subaccount information. You create these accounts in cPanel’s [_User Manager_](https://docs.cpanel.net/cpanel/preferences/user-manager) interface ( _cPanel » Home » Preferences » User Manager_). | `--skipuserdata` |
| `--help` | Display a brief help message. | `--help` |
| `--man` | Display the script’s full documentation. | `--man` |

### Use a custom pkgacct script

To create a custom `pkgacct` script, perform the following steps:

1. As the `root` user, copy the `/usr/local/cpanel/scripts/pkgacct` file and modify it.
2. Store the modified `pkgacct` file in the `/var/cpanel/lib/Whostmgr/Pkgacct/pkgacct` directory.
3. Run the `/usr/local/cpanel/bin/backup --allow-override` command.

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The backups\_clean\_metadata\_for\_missing\_backups Script](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×