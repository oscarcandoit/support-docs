---
url: "https://docs.cpanel.net/knowledge-base/backup/how-to-run-backups-on-locally-mounted-remote-file-systems/"
title: "How to Run Backups on Locally-Mounted Remote Filesystems | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/backup/how-to-run-backups-on-locally-mounted-remote-file-systems/#main-content)

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
4. How to Run Backups on Locally-Mounted Remote Filesystems


[backups](https://docs.cpanel.net/tags/backups/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/backup/how-to-run-backups-on-locally-mounted-remote-file-systems/#overview)

* * *

[Configure the filesystem](https://docs.cpanel.net/knowledge-base/backup/how-to-run-backups-on-locally-mounted-remote-file-systems/#configure-the-filesystem)

* * *

[Remount a backup disk](https://docs.cpanel.net/knowledge-base/backup/how-to-run-backups-on-locally-mounted-remote-file-systems/#remount-a-backup-disk)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/backup/how-to-run-backups-on-locally-mounted-remote-file-systems/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/backup/how-to-run-backups-on-locally-mounted-remote-file-systems/#overview)

* * *

[Configure the filesystem](https://docs.cpanel.net/knowledge-base/backup/how-to-run-backups-on-locally-mounted-remote-file-systems/#configure-the-filesystem)

* * *

[Remount a backup disk](https://docs.cpanel.net/knowledge-base/backup/how-to-run-backups-on-locally-mounted-remote-file-systems/#remount-a-backup-disk)

* * *

## How to Run Backups on Locally-Mounted Remote Filesystems

Last modified: _2025 July 14_

* * *

## Overview

This document describes how to run backups on locally-mounted remote filesystems.

To mount or unmount a partition, you must place the partition in the `/etc/fstab` file. This file contains a list of mountable file systems and their configuration options. The backup utility only mounts or unmounts partitions that appear in the `/etc/fstab` file.

Warning:

- We **strongly** recommend that you do not perform backups to remote filesystems (for example, NFS, CIFS, smbfs, or other types of network drive systems). While you can store a backup directly to a remote filesystem, cPanel & WHM does **not** support this configuration.
- We **strongly** recommend that you work with a qualified system administrator to manage this custom backup path to avoid potential risks.
- We are **not** responsible for any data loss that an attempt to perform the steps in this document causes.

## Configure the filesystem

If you use a mounted filesystem to store backups, we **strongly** recommend that you mount the system with the `noexec` option. To do this, open the `/etc/fstab` file with a text editor and edit its entry to resemble the following example:

```go
/dev/sda5 /backup ext3 defaults,noexec 0 0
```

The example above describes the following configuration options:

- `/dev/sda5` — The device.
- `/backup` — The default mount point.
- `ext3` — The file system type.
- `defaults,noexec` — The mount options.
- `0` — The dump options.
- `0` — The `fsck` order.

## Remount a backup disk

To remount a backup disk while the system reboots, run the following command:

```go
mount -o remount,noexec /backup
```

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