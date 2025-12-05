---
url: "https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/"
title: "The Experimental Repository | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [EasyApache4](https://docs.cpanel.net/ea4/)
3. [Git Repositories](https://docs.cpanel.net/ea4/git-repositories/)
4. The Experimental Repository


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/) [versioncontrol](https://docs.cpanel.net/tags/versioncontrol/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/#overview)

* * *

[Purpose of the EasyApache 4 Experimental repository](https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/#purpose-of-the-easyapache-4-experimental-repository)

* * *

[Install the Experimental repository](https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/#install-the-experimental-repository)

* * *

[List available packages](https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/#list-available-packages)

* * *

[Change Log](https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/#change-log)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/#overview)

* * *

[Purpose of the EasyApache 4 Experimental repository](https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/#purpose-of-the-easyapache-4-experimental-repository)

* * *

[Install the Experimental repository](https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/#install-the-experimental-repository)

* * *

[List available packages](https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/#list-available-packages)

* * *

[Change Log](https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/#change-log)

* * *

## The Experimental Repository

Last modified: _2024 September 16_

* * *

## Overview

Note:

The Experimental [repository](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#repository) is **only** available on systems that run CentOS 7, AlmaLinux OS 8, or Rocky Linux™ 8.


The Experimental repository exists as a collaborative, experimental area for development. Migration of software from the Experimental to Production repositories will happen **solely** at WebPros International, LLC’s discretion.

Warning:

cPanel & WHM does not guarantee the functionality of software in the Experimental repository, and we provide it on an experimental basis only. You assume all risk for any software that you install from the Experimental repository. Installation of this software could cause significant functionality failures, even for experienced administrators.

## Purpose of the EasyApache 4 Experimental repository

The EasyApache 4 Experimental repository contains software in an early stage of development. We made the repository available to the public in order to achieve the following goals:

- Allow advanced users to use software early in the development cycle and contribute to its evolution and improvement.

- Provide access to the latest applications and updates before they are ready for a stable EasyApache release.


## Install the Experimental repository

Warning:

When you install the Experimental repository, or any software contained in it, you understand and agree to the following:

- Applications in the Experimental repository may impact server performance in unexpected ways.

- Applications in the Experimental repository may conflict, or be otherwise incompatible, with other software installed on your server, including cPanel & WHM and EasyApache 4.

- Applications in the Experimental repository can change quickly or be removed without notice.

- You have the ability to troubleshoot problems. Use of this repository requires a strong understanding of all aspects of `yum` and RPMs.

- You will report bugs and gather the information that WebPros International, LLC may need to resolve them.

- Software in the Experimental repository does **not** qualify for our security bounty.


To access the EasyApache 4 Experimental repository on a system that runs EasyApache 4, run the following command:

```bash
yum install ea4-experimental
```

## List available packages

Important:

If you install any packages from the EasyApache 4 Experimental repository, we recommend that you do **not** disable the repository. If you do, the system will **not** update any packages installed via this repository.

To list the available packages on a system that runs EasyApache 4, run one of the following commands:

- CentOS 7:




```bash
yum --disablerepo="*" --enablerepo="EA4-experimental-c7" list available
```

- AlmaLinux or Rocky Linux 8:




```bash
dnf --disablerepo="*" --enablerepo="EA4-experimental-c8" list available
```


## Change Log

We maintain a [Change Log](https://docs.cpanel.net/changelogs/experimental-repository-change-log) for the Experimental repository.

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Configure cPanel Cron Jobs](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/)
- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×