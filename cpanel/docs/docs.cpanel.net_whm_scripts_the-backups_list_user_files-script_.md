---
url: "https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/"
title: "The backups_list_user_files Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/#main-content)

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
4. The backups\_list\_user\_files Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [backups](https://docs.cpanel.net/tags/backups/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/#run-the-script)

* * *

[Arguments](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/#arguments)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/#example)

* * *

[Backup file details](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/#backup-file-details)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/#run-the-script)

* * *

[Arguments](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/#arguments)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/#example)

* * *

[Backup file details](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/#backup-file-details)

* * *

## The backups\_list\_user\_files Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/)

Last modified: _2025 June 9_

* * *

## Overview

The `/usr/local/cpanel/scripts/backups_list_user_files` script locates a user’s backup files and returns all of the backup files in the Comma-Separated Value (CSV) format.

## Run the script

To query and return a list of backup files, run the following command as the `root` user:

```bash
/usr/local/cpanel/scripts/backups_list_user_files [arguments]
```

### Arguments

The `/usr/local/cpanel/scripts/backups_list_user_files` script accepts the following arguments:

| Arguments | Description | Input values | Example |
| --- | --- | --- | --- |
| `--user=[username]` | The user whose backup files you wish to query. | The cPanel account’s username. | `--user=username` |
| `--regexp=[string]` | Returns the regular expression search results. <br>Note:<br>This argument **only** accepts one search value. | A valid string. | `--regexp='example'` |

### Example

For example, the following command uses the `--regexp` argument to return results for the username user that match the example value:

```bash
/usr/local/cpanel/scripts/backups_list_user_files --user=username --regexp='example' |tail -n 8
```

The system will return the following output:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```bash<br>"Thu Jan  1 00:00:00 1970",0,incremental,"/nvdata","/backup/weekly/2018-03-26/accounts/username/homedir/nvdata",DIR<br>"Tue Feb 23 21:15:00 2016",183,incremental,"/nvdata.cache","/backup/weekly/2018-03-26/accounts/username/homedir/nvdata.cache",FILE<br>"Tue Feb 23 21:15:00 2016",31,incremental,"/nvdata/icFAA","/backup/weekly/2018-03-26/accounts/username/homedir/nvdata/icFAA",FILE<br>"Mon Aug  7 21:02:00 2017",59,incremental,"/nvdata/optionselect_filemanager","/backup/weekly/2018-03-26/accounts/username/homedir/nvdata/optionselect_filemanager",FILE<br>"Thu Jan  1 00:00:00 1970",0,incremental,"/nvdata","/backup/weekly/2018-04-02/accounts/username/homedir/nvdata",DIR<br>"Tue Feb 23 21:15:00 2016",183,incremental,"/nvdata.cache","/backup/weekly/2018-04-02/accounts/username/homedir/nvdata.cache",FILE<br>"Tue Feb 23 21:15:00 2016",31,incremental,"/nvdata/icFAA","/backup/weekly/2018-04-02/accounts/username/homedir/nvdata/icFAA",FILE<br>"Mon Aug  7 21:02:00 2017",59,incremental,"/nvdata/optionselect_filemanager","/backup/weekly/2018-04-02/accounts/username/homedir/nvdata/optionselect_filemanager",FILE<br>``` |

### Backup file details

The following image displays an example backup file return in CSV format.
![Example backup file return](https://docs.cpanel.net/img/backup-list-user-file-csv-return-details.png)

The backup file return displays the following fields:

- File creation date, in UTC — The file’s creation date in [Universal Time Coordinated (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
- File size — The backup file’s size, in bytes.
- The backup format type — One of these backup format types:
  - `compressed` — A compressed tar file.
  - `uncompressed` — An uncompressed tar file.
  - `incremental` — A full tree of files and directories.
- The matching filename from the backup — The file’s path, relative to the /home/username directory.
- The file’s archive or full path — For compressed and uncompressed backups, the archive path in which the file resides. For incremental backups, the full path to the file.
- The backup file’s type — One of these backup file types:
  - FILE — A file.
  - DIR — A directory.
  - SYMLINK — A symlink.

#### Additional Documentation

* * *

- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The backups\_clean\_metadata\_for\_missing\_backups Script](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/)
- [The backups\_create\_metadata Script](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/)
- [The cpconftool Script](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×