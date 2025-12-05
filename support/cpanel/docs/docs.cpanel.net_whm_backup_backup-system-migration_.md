---
url: "https://docs.cpanel.net/whm/backup/backup-system-migration/"
title: "Backup System Migration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/backup/backup-system-migration/#main-content)

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
4. Backup System Migration


[whmui](https://docs.cpanel.net/tags/whmui/) [backups](https://docs.cpanel.net/tags/backups/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/backup/backup-system-migration/#overview)

* * *

[Backup system conversion](https://docs.cpanel.net/whm/backup/backup-system-migration/#backup-system-conversion)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/backup/backup-system-migration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/backup/backup-system-migration/#overview)

* * *

[Backup system conversion](https://docs.cpanel.net/whm/backup/backup-system-migration/#backup-system-conversion)

* * *

## Backup System Migration

![](https://docs.cpanel.net/img/whm-icons/backup_system_migration.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/backup/backup-system-migration/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

Important:

The _Backup System Migration_ interface **only** appears when backups exist under the legacy backup configuration. We **strongly** recommend the following actions:

1. Set up and **only** use the [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM » Home » Backup » Backup Configuration_) to configure your server backups.
2. After you complete the above step, use the _Backup System Migration_ interface to migrate existing legacy backups to the Backup system.

For additional information about backup configurations, read our [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) documentation.

## Overview

The _Backup System Migration_ interface automatically converts and migrates any Legacy Backup system files to the current Backup system. The Backup system offers the same features as the Legacy Backup system and increases efficiency and performance for your system.

Note:

We plan to remove the _Legacy Backup Configuration_ interface ( _WHM » Home » Backup » Backup Configuration_) from WHM in a future release.

## Backup system conversion

To convert and migrate your Legacy Backup system files to the Backup system, click _Migrate_.

Important:

The Legacy Backup system **only** allows you to retain one retention point for incremental backups. The Backup system grants multiple retention points for incremental backups. When you migrate to the Backup system, you **must** update your retention point value in the [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration) interface ( _WHM » Home » Backup » Backup Configuration_) or you will lose your existing backup. You can set this value in the _Retention_ box under the Scheduling and Retention section in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration) interface ( _WHM » Home » Backup » Backup Configuration_).

If you wish to use the maximum number of retention points, set your retention point value to `9999`.

The system performs the following actions when you click _Migrate_:

1. The conversion and migration process creates the new `/var/cpanel/backups/config` file for the Backup system. This file duplicates the existing Legacy Backup configuration.
2. After the system converts the Legacy Backup system files to the Backup system files, the system renames the Legacy Backup configuration file.
   - The new Legacy Backup configuration filename resembles the filename format `/etc/cpbackup.conf-1234567891234`, where the `1234567891234` value represents the number of seconds, in [Unix epoch time](https://en.wikipedia.org/wiki/Unix_time).

#### Additional Documentation

* * *

- [Backup Configuration](https://docs.cpanel.net/whm/backup/backup-configuration/)
- [Backup Restoration](https://docs.cpanel.net/whm/backup/backup-restoration/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Backup Tarball Contents](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/)
- [File and Directory Restoration for WHM](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×