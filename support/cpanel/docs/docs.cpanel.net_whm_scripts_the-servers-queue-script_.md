---
url: "https://docs.cpanel.net/whm/scripts/the-servers-queue-script/"
title: "The servers_queue Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-servers-queue-script/#main-content)

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
3. [Scripts](https://docs.cpanel.net/whm/scripts/)
4. The servers\_queue Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [taskqueue](https://docs.cpanel.net/tags/taskqueue/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-servers-queue-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-servers-queue-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-servers-queue-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-servers-queue-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-servers-queue-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-servers-queue-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-servers-queue-script/#options)

* * *

## The servers\_queue Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-servers-queue-script/)

Last modified: _2024 February 22_

* * *

## Overview

This script allows you to manage the task queue system. The task queue system allows cPanel & WHM to execute tasks as a background process to improve server response time. You can use WHM’s [_Task Queue Monitor_](https://docs.cpanel.net/whm/server-status/task-queue-monitor/) interface ( _WHM » Home » Server Status » Task Queue Monitor_) to view tasks in real time.

Warning:

- This script is for advanced users **only**. Modifying a task queue process may render your server nonfunctional.
- You should **always** use WebPros International, LLC’s documented API functions for the appropriate task.
- The name of modules monitored by the task queue system are subject to change.

Note:

- The `queueprocd` daemon in the `/usr/local/cpanel/libexec` directory periodically processes the task queue. The cPanel & WHM startup process starts this daemon. To restart it, use the `/usr/local/cpanel/scripts/restartsrv_queueprocd` script.
- The `chksrvd` daemon monitors the `queueprocd` daemon.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/bin/servers_queue [options]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `queue` | Use this option to add a subprocess to the task queue. When you queue a task, the system returns a unique task ID. For example:<br>`TQ:TaskQueue-Scheduler:5912`<br> In this example, `5912` is the assigned task ID. | `/usr/local/cpanel/bin/servers_queue queue apache_restart` |
| `unqueue` | Use this option to dequeue a task from the task queue. <br>Note:<br>When you use this option, you **must** provide the task’s unique task ID with it. The system outputs this unique ID when you queue a task. You can also locate the task ID number in the `/var/cpanel/taskqueue/servers_queue.json` file. | `/usr/local/cpanel/bin/servers_queue unqueue TQ:TaskQueue-Scheduler:5912` |
| `schedule` | Use this option to specify a wait time, in seconds, and add a subprocess to the task queue. The task queue will **not** process the command until **after** the wait time passes. | `/usr/local/cpanel/bin/servers_queue schedule 600 apache_restart` |
| `unschedule` | Use this option to remove a task from the task queue. <br>Note:<br>When you use this option, you **must** provide the task’s unique task ID with it. The system outputs this unique ID when you queue a task. You can also locate the task ID number in the `/var/cpanel/taskqueue/servers_queue.json` file. | `/usr/local/cpanel/bin/servers_queue unschedule TQ:TaskQueue-Scheduler:5912` |
| `run` | Use this option to perform a synchronous flush of the task queue. This runs all the task queue’s queued jobs immediately. This argument does **not** return output. | `/usr/local/cpanel/bin/servers_queue run` |
| `help` | Use this option to display usage information for the script. | `/usr/local/cpanel/bin/servers_queue help` |

#### Additional Documentation

* * *

- [Task Queue Monitor](https://docs.cpanel.net/whm/server-status/task-queue-monitor/)
- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×