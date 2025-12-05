---
url: "https://docs.cpanel.net/whm/system-health/show-current-disk-usage/"
title: "Show Current Disk Usage | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/system-health/show-current-disk-usage/#main-content)

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
3. [System Health](https://docs.cpanel.net/whm/system-health/)
4. Show Current Disk Usage


[whmui](https://docs.cpanel.net/tags/whmui/) [diskusage](https://docs.cpanel.net/tags/diskusage/) [server](https://docs.cpanel.net/tags/server/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/system-health/show-current-disk-usage/#overview)

* * *

[The Current Disk Usage Information Table](https://docs.cpanel.net/whm/system-health/show-current-disk-usage/#the-current-disk-usage-information-table)

* * *

[The IO Statistics Table](https://docs.cpanel.net/whm/system-health/show-current-disk-usage/#the-io-statistics-table)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/system-health/show-current-disk-usage/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/system-health/show-current-disk-usage/#overview)

* * *

[The Current Disk Usage Information Table](https://docs.cpanel.net/whm/system-health/show-current-disk-usage/#the-current-disk-usage-information-table)

* * *

[The IO Statistics Table](https://docs.cpanel.net/whm/system-health/show-current-disk-usage/#the-io-statistics-table)

* * *

## Show Current Disk Usage

![](https://docs.cpanel.net/img/whm-icons/show_current_disk_usage.svg)

_Valid for versions 94 through the latest version_

#### Version:

#### [94](https://docs.cpanel.net/whm/system-health/show-current-disk-usage/)

Last modified: _2025 January 14_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature displays your server’s current partition and hard disk usage.

Note:

- To monitor disk space usage, enable the _System disk space usage warnings_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#notifications) interface ( _WHM » Home » Server Configruation » Tweak Settings_).
- To disable notifications for specific mount points, add them to the [`/var/cpanel/chkservd_ignored_mounts`](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-disk-space-warnings-with-files/#the-varcpanelchecksrvd_ignored_mounts-file) file.
- To bypass disk space warnings, create the [`/var/cpanel/disablediskfreecheck`](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-disk-space-warnings-with-files/#the-varcpaneldisablediskfreecheck-file) file.

## The Current Disk Usage Information Table

This table displays how the system stores information on your partition or hard disk.

| Column | Description |
| --- | --- |
| _Device_ | The device name of the partition or hard disk. |
| _Size_ | The total size of the partition or hard disk. |
| _Used_ | The amount of space that the system uses on the partition or hard disk. |
| _Available_ | The amount of available space on the partition or hard disk. |
| _Percent Used_ | The percentage of space that the system uses on the partition or hard disk. |
| _Mount Point_ | The location of the partition or hard disk in the server’s directory structure. |

## The IO Statistics Table

The _IO_ (input/output) _Statistics_ table displays information from [the iostat tool](http://en.wikipedia.org/wiki/Iostat) about how the system writes and reads files on your server’s partitions and hard drives.

The system calculates these statistics from data since last time that server restarted.

| Column | Description |
| --- | --- |
| _Device_ | The name of the partition or hard disk. |
| _Trans./Sec_ | The number of blocks that the systems writes and reads per second on the partition or hard disk. This measures the partition’s or hard drive’s ability to manipulate information. |
| _Blocks Read/sec_ | The number of blocks that the system reads per second from the partition or hard disk. This measures the partition’s or hard drive’s rate of output. |
| _Blocks Written/Sec_ | The number of blocks that the system writes per second to the partition or hard disk. This measures the partition’s or hard drive’s rate of input. |
| _Total Blocks Read_ | The total number of blocks that the system has read from the partition or hard drive. This measures how much information your hard drive has read. |
| _Total Blocks Written_ | The total number of blocks that the system has written to the partition or hard drive. This measures how much information your hard drive has written. |

#### Additional Documentation

* * *

- [Background Process Killer](https://docs.cpanel.net/whm/system-health/background-process-killer/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Configuration Cluster](https://docs.cpanel.net/whm/clusters/configuration-cluster/)
- [Link Server Nodes](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/)
- [Show Current Running Processes](https://docs.cpanel.net/whm/system-health/show-current-running-processes/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×