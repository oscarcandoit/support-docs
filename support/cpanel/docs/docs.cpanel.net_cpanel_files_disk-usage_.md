---
url: "https://docs.cpanel.net/cpanel/files/disk-usage/"
title: "Disk Usage | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/files/disk-usage/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Files](https://docs.cpanel.net/cpanel/files/)
4. Disk Usage


[diskusage](https://docs.cpanel.net/tags/diskusage/) [quotas](https://docs.cpanel.net/tags/quotas/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/files/disk-usage/#overview)

* * *

[Disk Usage](https://docs.cpanel.net/cpanel/files/disk-usage/#disk-usage)

* * *

[Access File Manager](https://docs.cpanel.net/cpanel/files/disk-usage/#access-file-manager)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/files/disk-usage/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/files/disk-usage/#overview)

* * *

[Disk Usage](https://docs.cpanel.net/cpanel/files/disk-usage/#disk-usage)

* * *

[Access File Manager](https://docs.cpanel.net/cpanel/files/disk-usage/#access-file-manager)

* * *

## Disk Usage

![](https://docs.cpanel.net/img/cpanel-icons/disk_usage.svg)

_Valid for versions 84 through the latest version_

#### Version:

#### [84](https://docs.cpanel.net/cpanel/files/disk-usage/)

Last modified: _2024 May 28_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

Important:

- This feature only appears if your hosting provider’s [server profile](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary) enables it.
- To increase your disk quota, you **must** contact your hosting provider.

## Overview

This interface displays information about your files, your directories, and how you use your account’s disk space. This helps you to manage your disk space quota use, because it displays files and directories that use large amounts of hard disk space.

Important:

If you receive a _Write failed: disk quota exceeded_ warning, your account has used the maximum amount of disk space that your quota allows. You **cannot** save any files because no disk space remains.

- Contact your hosting provider if you wish to request a higher disk usage quota.

- The backup process for an account near or over its quota may fail because the system cannot write necessary files, such as a database lock file.


## Disk Usage

This interface displays the following disk space usage summaries:

- Files that your home directory contains.

- Files that exist in hidden subdirectories.

- Mailing lists that Mailman manages.

- Files that your home directory does **not** contain.


Note:

The bars in the graph represent disk usage amounts relative to the largest directory.

### Access File Manager

Click any of the listed directories to open the appropriate subdirectory in the [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_).

Note:

The [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_) does **not** display disk usage information for individual files that your home directory contains.

Some discrepancies may exist between data that the [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_) and this interface display:

- New accounts may use the same UID as previously terminated or deleted accounts. In this case, the new account assumes ownership of the previous account’s files, which may cause the account to appear as though it were over quota.

- Most files occupy slightly more disk space than their actual size. For example, a 300-byte file may occupy 4 KB of actual disk space.

- The disk space usage information does **not** indicate how much space the directory itself uses. Typically, directories themselves occupy a negligible amount of disk space.

- The system includes MySQL® database size and PostgreSQL® database size in an account’s disk usage calculation. However, the system does **not** enforce the account’s disk space quota limit if a database’s size causes the account to exceed its limit. For more information, read our [Quota Modification](https://docs.cpanel.net/whm/account-functions/quota-modification) documentation.

- The figures that this interface displays may not reflect recent changes in your account’s disk space.


#### Additional Documentation

* * *

- [Anonymous FTP](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)
- [Backup for cPanel](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/)
- [Backup Wizard](https://docs.cpanel.net/cpanel/files/backup-wizard/)
- [Email Disk Usage](https://docs.cpanel.net/cpanel/email/email-disk-usage/)
- [FTP Accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×