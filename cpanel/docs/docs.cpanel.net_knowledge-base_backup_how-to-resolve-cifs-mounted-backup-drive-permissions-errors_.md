---
url: "https://docs.cpanel.net/knowledge-base/backup/how-to-resolve-cifs-mounted-backup-drive-permissions-errors/"
title: "How to Resolve CIFS-mounted Backup Drive Permissions Errors | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/backup/how-to-resolve-cifs-mounted-backup-drive-permissions-errors/#main-content)

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
4. How to Resolve CIFS-mounted Backup Drive Permissions Errors


[backups](https://docs.cpanel.net/tags/backups/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/backup/how-to-resolve-cifs-mounted-backup-drive-permissions-errors/#overview)

* * *

[Resolve the error](https://docs.cpanel.net/knowledge-base/backup/how-to-resolve-cifs-mounted-backup-drive-permissions-errors/#resolve-the-error)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/backup/how-to-resolve-cifs-mounted-backup-drive-permissions-errors/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/backup/how-to-resolve-cifs-mounted-backup-drive-permissions-errors/#overview)

* * *

[Resolve the error](https://docs.cpanel.net/knowledge-base/backup/how-to-resolve-cifs-mounted-backup-drive-permissions-errors/#resolve-the-error)

* * *

## How to Resolve CIFS-mounted Backup Drive Permissions Errors

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/knowledge-base/backup/how-to-resolve-cifs-mounted-backup-drive-permissions-errors/)

Last modified: _2022 July 12_

* * *

## Overview

When you attempt to perform a backup to a [Common Internet File System (CIFS)-mounted](http://cifs.com/) drive, you may receive errors that resemble the following example:

```bash
/bin/cp: failed to preserve ownership for `': Permission denied /bin/cp: failed to preserve ownership for `': Permission denied
```

These `Permission denied` errors may result from missing extended attributes on the CIFS-mounted drive.

More:

For more information about CIFS, read our [Backup Configuration](https://docs.cpanel.net/whm/backup/backup-configuration) documentation.

## Resolve the error

To resolve the permission denied errors for the CIFS-mounted drive, perform the following steps:

1. Edit the `/etc/fstab` file so that the CIFS-mounted drive uses the `user_xattr` option. This will resemble the following example:







|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br>/dev/mapper/centos_centos--7--clone-root /                       xfs     defaults        1 1<br>UUID=01c6e08e-bbd1-4046-af48-beaf233746d4 /boot                   xfs     defaults        1 2<br>/dev/mapper/centos_centos--7--clone-swap swap                    swap    defaults        0 0<br>//192.0.2.0/mybackup /backup cifs user,uid=500,rw,suid,credentials=/root/.cifs,user_xattr 0 0<br>``` |





In this example, line 4 displays the CIFS-mounted drive entry.

   - The local user owns the mounted files.
   - The CIFS drive’s access credentials reside in the `/root/.cifs` file.






     Important:





     We **strongly** recommend that you store your CIFS-mounted drive’s access credentials in a separate, secure file.
2. Run the `remount mount` command to remount the CIFS-mounted drive.

3. Run the `lsattr /CIFS_mount` command to add the extended attributes.







Important:





The mount does **not** support extended attributes if the `lsattr /CIFS_mount` command returns the following error:





```bash
Error means not available: lsattr: Inappropriate ioctl for device While reading flags on ...
```





A mount that does not support extended attributes will not function with cPanel & WHM backups.


#### Additional Documentation

* * *

- [Backup Configuration](https://docs.cpanel.net/whm/backup/backup-configuration/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [How to Create a Custom Transport Script for Backups](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/)
- [How to Exclude Files from Backups](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/)
- [System Backups](https://docs.cpanel.net/knowledge-base/backup/system-backups/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×