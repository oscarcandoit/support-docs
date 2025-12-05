---
url: "https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/"
title: "How to Troubleshoot a Remote Transport Pruning Failure | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#main-content)

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
4. How to Troubleshoot a Remote Transport Pruning Failure


[backups](https://docs.cpanel.net/tags/backups/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#overview)

* * *

[Transport error](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#transport-error)

* * *

[Troubleshooting](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#troubleshooting)

* * *

[The directory size is too large](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#the-directory-size-is-too-large)

* * *

[Manually delete the directory from the remote destination](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#manually-delete-the-directory-from-the-remote-destination)

* * *

[Disable the account’s backup](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#disable-the-accounts-backup)

* * *

[Change the backup type from incremental to compressed](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#change-the-backup-type-from-incremental-to-compressed)

* * *

[The backup drive is too slow](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#the-backup-drive-is-too-slow)

* * *

[Network error](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#network-error)

* * *

[Permission denied error](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#permission-denied-error)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#overview)

* * *

[Transport error](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#transport-error)

* * *

[Troubleshooting](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#troubleshooting)

* * *

[The directory size is too large](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#the-directory-size-is-too-large)

* * *

[Manually delete the directory from the remote destination](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#manually-delete-the-directory-from-the-remote-destination)

* * *

[Disable the account’s backup](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#disable-the-accounts-backup)

* * *

[Change the backup type from incremental to compressed](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#change-the-backup-type-from-incremental-to-compressed)

* * *

[The backup drive is too slow](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#the-backup-drive-is-too-slow)

* * *

[Network error](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#network-error)

* * *

[Permission denied error](https://docs.cpanel.net/knowledge-base/backup/how-to-troubleshoot-a-remote-transport-pruning-failure/#permission-denied-error)

* * *

## How to Troubleshoot a Remote Transport Pruning Failure

Last modified: _2024 February 19_

* * *

## Overview

Users who store remote backups may encounter an issue where the remote pruning process (deletion) does not complete within the system-allotted time limit. The maximum time limit is 300 seconds per transport process. This document offers solutions to troubleshoot the timeout problem.

Warning:

- Make **certain** that your FTP server supports the MLSD (Machine List Directory) or LIST commands. If the FTP server does **not** support these commands, the backup system **cannot** use the FTP server as a remote FTP server.
  - Unix-supported FTP servers, such as [ProFTP](http://www.proftpd.org/docs/) and [Pure-FTPd](https://www.pureftpd.org/project/pure-ftpd/doc), support these commands.
  - For more information about these commands, read Wikipedia’s [List of FTP commands](https://en.wikipedia.org/wiki/List_of_FTP_commands) documentation and [ietf.org](http://ietf.org/)’s [RCF 3659](https://tools.ietf.org/html/rfc3659#section-7) documentation.
- Make certain that any hidden files (files that begin with a period (`.`)) on the FTP server have write permissions. The backup system can **only** prune data from files with these permissions.

- We **strongly** recommend that you use Pure-FTPd or ProFTPD on remote FTP servers. Unexpected results may occur with some FTP server software.
  - If you use Pure-FTPd, ensure that the `DisplayDotFiles yes` statement resides in the `/etc/pure-ftpd.conf` file.
  - If you use ProFTPD, ensure that the `ListOptions -a` statement resides in the `/etc/proftpd.conf` file
- If you use the Very Secure FTP daemon (`vsftpd`), ensure that you set the `force_dot_files` setting to `yes` in the `/etc/vsftpd.conf` file. For more information about `vsftpd`, read the [vsftpd documentation](https://security.appspot.com/vsftpd.html).


## Transport error

Based on your iNotify settings, the system will send an email notification when it encounters a transport error. The email notification shows a preview of the transport error log and includes an attached copy of the transport error log.

The following example represent transport error code messages in the transport error log, where the directory name `/home/username/backups/2018-05-24` represents the directory name:

```go
The system could not prune the "home/username/backups/2018-05-24" directory due to an error. Read the go.cpanel.net/directorypruning documentation for solutions to successfully prune the directory.
```

## Troubleshooting

Several different situations may cause a transport error. You will have to diagnose your configuration to determine the appropriate solution.

### The directory size is too large

The remote transport process may time out if it tries to prune a very large directory. The following options can help you to solve this issue:

### Manually delete the directory from the remote destination

The transport may produce an error if it is unable to prune the directory due to its size. You can manually delete the directory from the remote backup location to troubleshoot this error.

Use the `rm` command to delete the directory from the remote destination. For example, if you wanted to delete the `/home/username/backups/2018-05-24` directory run the following command:

```go
rm -rf home/username/backups/2018-05-24
```

### Disable the account’s backup

Some accounts may be too large to back up to a remote backup location. You can disable an account’s backup in WHM’s [_Backup User Selection_](https://docs.cpanel.net/whm/backup/backup-user-selection/) interface ( _WHM_ » _Home_ » _Backup_ » _Backup User Selection_). You can also use the WHM API 1 [`toggle_user_backup_state`](https://api.docs.cpanel.net/openapi/whm/operation/toggle_user_backup_state/) function to disable the account’s backup.

### Change the backup type from incremental to compressed

If you are saving the backups for the large-sized account as an incremental backup type, you can change the backup type to compressed to use less disk space.

Note:

The rsync backup transport does **not** accept compressed backup files. If you enable backup compression, you **must** also change the destination type in your backup configuration to a destination that accepts compressed backup files.

You can change the backup type and the destination type in WHM’s [_Backup User Selection_](https://docs.cpanel.net/whm/backup/backup-user-selection/) interface ( _WHM_ » _Home_ » _Backup_ » _Backup User Selection_). You can also use the following WHM API 1 functions to update your backup configuration:

- [`backup_config_set`](https://api.docs.cpanel.net/openapi/whm/operation/backup_config_set/) — Sets the backup configuration options (use this to update the backup type).

- [`backup_destination_add`](https://api.docs.cpanel.net/openapi/whm/operation/backup_destination_add/) — Adds a backup destination.

- [`backup_destination_delete`](https://api.docs.cpanel.net/openapi/whm/operation/backup_destination_delete/) — Removes a backup destination.


### The backup drive is too slow

The transport may produce an error if your remote backup location is too slow to process the transport pruning within the system-allotted time of 300 seconds. We recommend that you replace the existing remote backup location with a faster-processing remote backup location.

### Network error

The transport may produce an error if network issues occur. If this was the case, you can run the backup transport process again manually when the network works properly.

To manually run a backup, run the following command as the `root` user:

```go
/usr/local/cpanel/bin/backup
```

### Permission denied error

The transport may produce an error if the following conditions exist on the server:

- A non-`root` user authenticates to an rsync backup destination.
- Files that the user does not possess write privileges to resides in a cPanel user’s directory.

We recommend that you manually delete the files that the system could not remove from the remote destination’s backup.

Note:

You may need to allow write privileges to a file before you delete it. To do this, run the `chmod +w` file command, where `file` represents the file for which to update permissions.

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