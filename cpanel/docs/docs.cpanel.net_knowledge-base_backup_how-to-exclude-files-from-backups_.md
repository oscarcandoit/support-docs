---
url: "https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/"
title: "How to Exclude Files from Backups | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/#main-content)

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
4. How to Exclude Files from Backups


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [backups](https://docs.cpanel.net/tags/backups/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/#overview)

* * *

[Global exclude file](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/#global-exclude-file)

* * *

[Local exclude file](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/#local-exclude-file)

* * *

[Example](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/#overview)

* * *

[Global exclude file](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/#global-exclude-file)

* * *

[Local exclude file](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/#local-exclude-file)

* * *

[Example](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/#example)

* * *

## How to Exclude Files from Backups

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/)

Last modified: _2023 April 17_

* * *

## Overview

To exclude files or directories from your user backups, perform either of the following actions:

- Exclude the files from all users’ backups

- Exclude the files from an individual user’s backups.


The global and local exclude files apply to the account backups that you manage in WHM’s [_Backup_](https://docs.cpanel.net/whm/backup) section ( _WHM » Home » Backup_) and the _Download a Full Website Backup_ feature in cPanel’s [_Backup_](https://docs.cpanel.net/cpanel/files/backup-for-cpanel) interface ( _cPanel » Home » Files » Backup_).

Note:

- If you initiate a _Home Directory_ backup in cPanel’s [_Backup_](https://docs.cpanel.net/cpanel/files/backup-for-cpanel) interface ( _cPanel » Home » Files » Backup_), the global and local exclude files do **not** affect the contents of the backup file.

- If you perform a backup with the `/scripts/pkgacct` script, the global and local exclude files do **not** affect the contents of the backup file.

- The `backup-exclude.conf` files **only** apply to files or directories in a user’s home directory. They do **not** apply to files or directories outside of a user’s home directory.


## Global exclude file

To exclude files or directories from your backups for all user accounts, add those files or directories to the `/etc/cpbackup-exclude.conf` file. The `/etc/cpbackup-exclude.conf` file excludes the files that you specify relative to any location from which the backup script runs.

The backup system excludes the following files and directories for all users’ backups by default:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```go<br>*/.wysiwygPro_*<br>*/core.[0-9]<br>.MirrorSearch<br>.cpan<br>.cpanel/caches<br>.cpanel/datastore<br>.cpcpan<br>.sqmailattach<br>access-logs<br>public_ftp/.ftpquota<br>``` |

## Local exclude file

To exclude files or directories from an individual user’s backups, add the desired paths (relative to the user’s home directory) to the `cpbackup-exclude.conf` file in the user’s home directory, with one entry per line.

If the file does not already exist, you **must** create it. To do this, run the following command:

```bash
touch /home/username/cpbackup-exclude.conf
```

Note:

- In this example, `username` represents the name of the user who owns the files or directories.

- If you enter a directory name, the backup system excludes all of the files that exist in the directory.

- When you specify files, do **not** include leading or trailing characters of any kind, such as slashes (`/`) or periods (`.`).


## Example

For example, to exclude the `/home/username/example/` directory and the `/home/username/dir/example.php` file from the `username` user’s backups, create the following `/home/username/cpbackup-exclude.conf` file:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>example<br>dir/example.php<br>``` |

#### Additional Documentation

* * *

- [Backup Configuration](https://docs.cpanel.net/whm/backup/backup-configuration/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [How to Create a Custom Transport Script for Backups](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/)
- [How to Resolve CIFS-mounted Backup Drive Permissions Errors](https://docs.cpanel.net/knowledge-base/backup/how-to-resolve-cifs-mounted-backup-drive-permissions-errors/)
- [System Backups](https://docs.cpanel.net/knowledge-base/backup/system-backups/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×