---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/the-quota-file-systems-configuration-file/"
title: "The Quota File Systems Configuration File | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/the-quota-file-systems-configuration-file/#main-content)

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
3. [cPanel Product](https://docs.cpanel.net/knowledge-base/cpanel-product/)
4. The Quota File Systems Configuration File


[quotas](https://docs.cpanel.net/tags/quotas/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/the-quota-file-systems-configuration-file/#overview)

* * *

[Edit the file](https://docs.cpanel.net/knowledge-base/cpanel-product/the-quota-file-systems-configuration-file/#edit-the-file)

* * *

[Example](https://docs.cpanel.net/knowledge-base/cpanel-product/the-quota-file-systems-configuration-file/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/the-quota-file-systems-configuration-file/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/the-quota-file-systems-configuration-file/#overview)

* * *

[Edit the file](https://docs.cpanel.net/knowledge-base/cpanel-product/the-quota-file-systems-configuration-file/#edit-the-file)

* * *

[Example](https://docs.cpanel.net/knowledge-base/cpanel-product/the-quota-file-systems-configuration-file/#example)

* * *

## The Quota File Systems Configuration File

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/knowledge-base/cpanel-product/the-quota-file-systems-configuration-file/)

Last modified: _2024 June 5_

* * *

## Overview

The `/var/cpanel/noquotafs` file allows you to specify file system types that you wish to exclude from cPanel & WHM’s quota system. This is useful if, for example, your setup does not allow certain file system types to use quotas, or you do not wish to use quotas on specific file systems. Each line of the `/var/cpanel/noquotafs` file specifies an excluded file system type.

Note:

This file **only** appears if quotas are enabled on your server.

## Edit the file

Use a text editor to edit the `/var/cpanel/noquotafs` file. List each file system type on a separate line.

Note:

This file is **not** case-sensitive.


### Example

To exclude the NFS and ext3 file system types from the quota system, the `/var/cpanel/noquotafs` file would resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>nfs<br>ext3<br>``` |

#### Additional Documentation

* * *

- [Bandwidth](https://docs.cpanel.net/cpanel/metrics/bandwidth/)
- [Disk Usage](https://docs.cpanel.net/cpanel/files/disk-usage/)
- [Email Disk Usage](https://docs.cpanel.net/cpanel/email/email-disk-usage/)
- [Enable Quotas on a Virtuozzo VPS](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/)
- [FTP Accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×