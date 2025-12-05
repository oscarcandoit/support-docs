---
url: "https://docs.cpanel.net/whm/server-status/task-queue-monitor/"
title: "Task Queue Monitor | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-status/task-queue-monitor/#main-content)

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
3. [Server Status](https://docs.cpanel.net/whm/server-status/)
4. Task Queue Monitor


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [taskqueue](https://docs.cpanel.net/tags/taskqueue/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-status/task-queue-monitor/#overview)

* * *

[Server information](https://docs.cpanel.net/whm/server-status/task-queue-monitor/#server-information)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-status/task-queue-monitor/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-status/task-queue-monitor/#overview)

* * *

[Server information](https://docs.cpanel.net/whm/server-status/task-queue-monitor/#server-information)

* * *

## Task Queue Monitor

![](https://docs.cpanel.net/img/whm-icons/task_queue_monitor.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/server-status/task-queue-monitor/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface displays information about cPanel & WHM’s task queue in real time.

## Server information

When a task runs or the system queues a task to run, the name of the task and any relevant information display in this interface.

- _Processing_ — The task is processing.
- _Pending_ — The task will run after the Processing queue finishes.
- _Scheduled_ — The associated module will assign a specific time in the future for the task to run.
- _Deferred_ — The task will run at a time that the module specifies.

Select the Show Task Details checkbox to display additional information.

| Process | Description | Example |
| --- | --- | --- |
| _Command_ | The command that the task executes. | _\_build\_apache\_conf_ |
| _Enqueue Time_ | The time that the task entered the task queue. | _Dec 29, 2017 8:00:00 AM_ |
| _Process ID_ | The in-progress process number. <br>Note:<br>This does **not** refer to the task itself, since a process can perform multiple tasks. | _11873_ |
| _Remaining Retries_ | The number of times that the task will attempt to retry if it fails. | _1_ |
| _Child Timeout_ | The amount of time in which the task must run, otherwise the task will time out. | _3,600 seconds_ |
| _Task ID_ | The task’s unique identification number. | _TQ:TaskQueue:1657_ |

#### Additional Documentation

* * *

- [The servers\_queue Script](https://docs.cpanel.net/whm/scripts/the-servers-queue-script/)
- [Apache Status](https://docs.cpanel.net/whm/server-status/apache-status/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×