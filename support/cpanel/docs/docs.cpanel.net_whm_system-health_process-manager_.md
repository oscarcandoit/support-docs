---
url: "https://docs.cpanel.net/whm/system-health/process-manager/"
title: "Process Manager | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/system-health/process-manager/#main-content)

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
4. Process Manager


[server](https://docs.cpanel.net/tags/server/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/system-health/process-manager/#overview)

* * *

[Displayed columns](https://docs.cpanel.net/whm/system-health/process-manager/#displayed-columns)

* * *

[Kill processes by user](https://docs.cpanel.net/whm/system-health/process-manager/#kill-processes-by-user)

* * *

[Kill the process](https://docs.cpanel.net/whm/system-health/process-manager/#kill-the-process)

* * *

[Trace the process](https://docs.cpanel.net/whm/system-health/process-manager/#trace-the-process)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/system-health/process-manager/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/system-health/process-manager/#overview)

* * *

[Displayed columns](https://docs.cpanel.net/whm/system-health/process-manager/#displayed-columns)

* * *

[Kill processes by user](https://docs.cpanel.net/whm/system-health/process-manager/#kill-processes-by-user)

* * *

[Kill the process](https://docs.cpanel.net/whm/system-health/process-manager/#kill-the-process)

* * *

[Trace the process](https://docs.cpanel.net/whm/system-health/process-manager/#trace-the-process)

* * *

## Process Manager

![](https://docs.cpanel.net/img/whm-icons/process_manager.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/system-health/process-manager/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface displays your server’s active processes, and allows you to trace and kill any processes.

## Displayed columns

- _Pid_ — The process ID. The system automatically assigns a unique number to active processes on your server.
- _Owner_ — The user or system account that started and owns the process.
- _Priority_ — A number between _-20_ and _19_ that describes the order in which the system will execute the process. A process with a priority value of _-20_ will run before a process with a priority value of _19_.
- _CPU%_ — The percentage of your server’s processing power that the process uses.
- _Memory%_ — The percentage of your server’s RAM (memory) that the process uses.
- _Command_ — The directory from which the CPU receives instructions.

## Kill processes by user

To kill all of processes that run under a certain user, perform the following steps:

1. Select the user from the _Kill all processes by user_ menu.
2. Click _Kill user’s processes_.

If you kill a process, it forcefully closes the daemon. This is necessary if, for example, the process consumes too many resources or attackers have exploited the process.

## Kill the process

To kill a process, click the _kill_ link that corresponds to the process.

## Trace the process

To trace a process, click the _Trace_ link that corresponds to the process. If you trace a process, you can observe and control the process as it executes.

#### Additional Documentation

* * *

- [Background Process Killer](https://docs.cpanel.net/whm/system-health/background-process-killer/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Configuration Cluster](https://docs.cpanel.net/whm/clusters/configuration-cluster/)
- [Show Current Disk Usage](https://docs.cpanel.net/whm/system-health/show-current-disk-usage/)
- [Show Current Running Processes](https://docs.cpanel.net/whm/system-health/show-current-running-processes/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×