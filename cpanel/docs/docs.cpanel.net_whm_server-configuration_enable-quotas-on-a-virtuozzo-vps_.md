---
url: "https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/"
title: "Enable Quotas on a Virtuozzo VPS | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/#main-content)

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
4. Enable Quotas on a Virtuozzo VPS


[quotas](https://docs.cpanel.net/tags/quotas/) [virtualization](https://docs.cpanel.net/tags/virtualization/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/#overview)

* * *

[Virtuozzo disk quotas](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/#virtuozzo-disk-quotas)

* * *

[First-level quotas](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/#first-level-quotas)

* * *

[Second-level quotas](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/#second-level-quotas)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/#overview)

* * *

[Virtuozzo disk quotas](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/#virtuozzo-disk-quotas)

* * *

[First-level quotas](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/#first-level-quotas)

* * *

[Second-level quotas](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/#second-level-quotas)

* * *

## Enable Quotas on a Virtuozzo VPS

![](https://docs.cpanel.net/img/whm-icons/initial_quota_setup.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Warning:

Your server’s quotas will **not** function unless you enable both first- and second-level Virtuozzo® quotas.

Note:

These commands **only** work if you run cPanel & WHM on a Virtuozzo VPS.

If you run cPanel & WHM on a Virtuozzo Virtual Private Server (VPS), and you disable quotas, you **must** perform extra steps to reenable quotas.

## Virtuozzo disk quotas

Virtuozzo servers use the following types of disk quotas:

1. Per-container, or first-level, quotas allow system administrators to limit the amount of disk space and the number of inodes that a Virtual Server (Container) can use. This helps to control the sizes of VPS file systems.

2. Per-user and per-group, or second-level, quotas allow the Virtual Server administrator to limit the amount of disk space and the number of inodes that users and groups in the VPS can use.


Important:

If your Virtuozzo server uses the [Ploop](https://wiki.openvz.org/Ploop) storage format, disk use calculations may appear large. This is because the filesystem reports its disk usage from within the container and **not** at the node level.

### First-level quotas

The Container (VPS) start-up process enables first-level quotas.

To determine whether first-level quotas are already enabled, run the following command, where `Container_ID` represents the container ID of the container that you wish to check:

```bash
vzquota show Container_ID
```

### Second-level quotas

The `QUOTAUGIDLIMIT` parameter in the Container configuration file controls second-level disk quotas. This parameter defaults to `0`, which disables per-user and per-group quotas.

To view the parameter and its value, run the following command:

```bash
grep -i QUOTAUGIDLIMIT /etc/sysconfig/vz-scripts/CT_ID.conf
```

Note:

- If this command returns an empty result, or a result of `0`, this environment does **not** support second-level quotas.

- A non-zero value in the `QUOTAUGIDLIMIT` parameter limits the number of file owners to the number that you assign to this parameter.

- The number of file owners includes Linux system users and groups that are within the Container. You can create additional VPS users beyond this number, but these extra users **cannot** own files.


#### Enable second-level quotas

To enable second-level quotas for the Container, perform the following steps:

1. Set the `QUOTAUGIDLIMIT` parameter to a value that is greater than zero.

2. Run the following command to enable second-level quotas, where `Container_ID` represents the container ID of the container that you wish enable second-level quotas on.




```bash
vzquota on Container_ID -s 1
```

3. Restart the Container.


Note:

For more information, read Parallels’® [second-level quota](http://download.parallels.com/doc/psbm/en/Parallels_Server_Bare_Metal_Users_Guide/29176.htm) and [vzquota](http://download.parallels.com/doc/psbm/v5/rtm/Parallels_Command_Line_Reference_Guide/375.htm) documentation.

#### Additional Documentation

* * *

- [Bandwidth](https://docs.cpanel.net/cpanel/metrics/bandwidth/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Change Root Password](https://docs.cpanel.net/whm/server-configuration/change-root-password/)
- [Initial Quota Setup](https://docs.cpanel.net/whm/server-configuration/initial-quota-setup/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×