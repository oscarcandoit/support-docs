---
url: "https://docs.cpanel.net/whm/server-configuration/initial-quota-setup/"
title: "Initial Quota Setup | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/initial-quota-setup/#main-content)

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
3. [Server Configuration](https://docs.cpanel.net/whm/server-configuration/)
4. Initial Quota Setup


[whmui](https://docs.cpanel.net/tags/whmui/) [quotas](https://docs.cpanel.net/tags/quotas/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-configuration/initial-quota-setup/#overview)

* * *

[Quota setup](https://docs.cpanel.net/whm/server-configuration/initial-quota-setup/#quota-setup)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/initial-quota-setup/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-configuration/initial-quota-setup/#overview)

* * *

[Quota setup](https://docs.cpanel.net/whm/server-configuration/initial-quota-setup/#quota-setup)

* * *

## Initial Quota Setup

![](https://docs.cpanel.net/img/whm-icons/initial_quota_setup.svg)

_Valid for versions 112 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/whm/server-configuration/initial-quota-setup/102/)

#### [112](https://docs.cpanel.net/whm/server-configuration/initial-quota-setup/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Warning:

This feature requires kernel support for quotas on your server. If your server uses a custom kernel that does **not** include quota support, the initial quota setup process may result in an unbootable system.

The _Initial Quota Setup_ interface scans your server to confirm that it uses disk space quotas on the directories in which your cPanel users store their files. We recommend that you use quota support, and we enable it by default on new installation of cPanel & WHM. Without quota support, the server will **not** display disk space usage for users and it will **not** enforce quota limits.

- Quotas do **not** limit updates that a user can make to a MySQL®, MariaDB®, or PostgreSQL® database.
- Quotas that include databases only affect cPanel-related functions.
- Processes that the system runs, such as PHP scripts that create files, can create user-owned files until the number of files reaches the quota. This situation occurs because the kernel-enforced quota does not access cPanel settings.
- The backup process for an account near or over its quota may fail because the system cannot write necessary files (for example, a database lock file).

If you run a Virtuozzo® Virtual Private Server (VPS), read our [Enable Quotas on a Virtuozzo VPS](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps) documentation.

For more information about quota-related issues, read our [How to Fix Quotas](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas) documentation.

## Quota setup

To perform the quota scan, click _Proceed_.

When you click _Proceed_, the system runs the `/scripts/initquotas` script. This script ignores `/home` directory mount points that use the following options:

- `no`
- `no auto`
- `loop`

To troubleshoot this issue, check the `/etc/fstab` file for these options.

Warning:

- We enable quotas by default on new installations.

- If you disable and then reenable quotas on servers that use the XFS® filesystem, you must perform **one** of the following actions for quotas to function properly:
  - **WHM interface** — Use WHM’s [_Initial Quota Setup_](https://docs.cpanel.net/whm/server-configuration/initial-quota-setup) interface ( _WHM » Home » Server Configuration » Initial Quota Setup_) to configure quotas.
  - **Command line** — Run the `/usr/local/cpanel/scripts/fixquotas` script and then remount the file system.
  - **Manually fix quotas via command line** — For instructions on how to perform the `/usr/local/cpanel/scripts/fixquotas` script’s actions manually, read the Red Hat [XFS](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/Storage_Administration_Guide/ch-xfs.html) and [XFS Quota Management](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/Storage_Administration_Guide/xfsquota.html) documentation.
- If you have enabled the [_Reboot To Enable Filesystem Quotas Reminder_ and _Filesystem Quotas Ready_](https://docs.cpanel.net/whm/server-contacts/contact-manager) notifications, the system sends notifications when it is ready to reboot **and** when the quota scan finishes and quotas are functional.

- Updates to CloudLinux™ may break quotas. For this reason, after each update of CloudLinux, you **must** run the `/usr/local/cpanel/scripts/fixquotas` script and then remount the file system.


#### Additional Documentation

* * *

- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Change Root Password](https://docs.cpanel.net/whm/server-configuration/change-root-password/)
- [CloudLinux Manager](https://docs.cpanel.net/whm/server-configuration/cloudlinux-manager/)
- [Configure cPanel Analytics](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-analytics/)
- [Enable Quotas on a Virtuozzo VPS](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×