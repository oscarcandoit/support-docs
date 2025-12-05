---
url: "https://docs.cpanel.net/whm/backup/backup-user-selection/"
title: "Backup User Selection | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/backup/backup-user-selection/#main-content)

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
4. Backup User Selection


[backups](https://docs.cpanel.net/tags/backups/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/backup/backup-user-selection/#overview)

* * *

[Backup user selection](https://docs.cpanel.net/whm/backup/backup-user-selection/#backup-user-selection)

* * *

[Legacy backups](https://docs.cpanel.net/whm/backup/backup-user-selection/#legacy-backups)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/backup/backup-user-selection/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/backup/backup-user-selection/#overview)

* * *

[Backup user selection](https://docs.cpanel.net/whm/backup/backup-user-selection/#backup-user-selection)

* * *

[Legacy backups](https://docs.cpanel.net/whm/backup/backup-user-selection/#legacy-backups)

* * *

## Backup User Selection

![](https://docs.cpanel.net/img/whm-icons/backup_user_selection.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/backup/backup-user-selection/)

Last modified: _2025 July 14_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Backup User Selection_ interface allows you to exclude cPanel accounts from your scheduled backups.

## Backup user selection

When you configure a backup in the [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM_ » _Home_ » _Backup_ » _Backup Configuration_), your backups include cPanel account information by default. To exclude a cPanel account from your backups, set the _Enable_ toggle to _Disable_. The system saves your changes automatically.

To disable or enable all cPanel account backups, click _Account Actions_ and select the appropriate action.

## Legacy backups

Important:

We **strongly recommend** that you migrate your legacy backups to the current account backup system. For more information, read the [_Backup System Migration_](https://docs.cpanel.net/whm/backup/backup-system-migration) documentation.

If your system still contains legacy backups, the _Legacy_ column appears in the _Backup User Selection_ interface. cPanel accounts that use legacy backups will have the _Enable_ toggle set by default. A cPanel account may have both legacy and account backups enabled at the same time.

To exclude a cPanel account from using legacy backups, set the _Enable_ toggle to _Disable_.

Note:

When you exclude a cPanel account from using legacy backups, the action only prevents a cPanel user from creating new legacy backups. To migrate all legacy backups in your server to account backups, use the [_Backup System Migration_](https://docs.cpanel.net/whm/backup/backup-system-migration) interface.

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