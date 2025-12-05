---
url: "https://docs.cpanel.net/whm/server-status/daily-process-log/"
title: "Daily Process Log | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-status/daily-process-log/#main-content)

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
4. Daily Process Log


[whmui](https://docs.cpanel.net/tags/whmui/) [logs](https://docs.cpanel.net/tags/logs/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-status/daily-process-log/#overview)

* * *

[Select the Day](https://docs.cpanel.net/whm/server-status/daily-process-log/#select-the-day)

* * *

[Usage by User](https://docs.cpanel.net/whm/server-status/daily-process-log/#usage-by-user)

* * *

[Top Processes](https://docs.cpanel.net/whm/server-status/daily-process-log/#top-processes)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-status/daily-process-log/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-status/daily-process-log/#overview)

* * *

[Select the Day](https://docs.cpanel.net/whm/server-status/daily-process-log/#select-the-day)

* * *

[Usage by User](https://docs.cpanel.net/whm/server-status/daily-process-log/#usage-by-user)

* * *

[Top Processes](https://docs.cpanel.net/whm/server-status/daily-process-log/#top-processes)

* * *

## Daily Process Log

![](https://docs.cpanel.net/img/whm-icons/daily_process_log.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/server-status/daily-process-log/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface displays information about your server’s consumption of processing power and memory. The processes that run on your server depend on the following factors:

- Your WHM configuration.
- Your installed daemons and applications.
- Your users’ installed daemons and applications.

## Select the Day

The top of the interface displays yesterday’s, today’s, and tomorrow’s dates. To view information for a date, click the appropriate link.

## Usage by User

The _Usage by User_ table displays usage for each user on the server. This allows you to check which users use the most resources on your server.

This table includes the following columns:

- _User_ — The name of the user.

- _Domain_ — The primary domain for the user.






Note:




The column **only** displays domains for users that are cPanel accounts. The column is empty when the user is a daemon or a system user.


- _%CPU_ — The average daily percentage of the CPU’s processing power that the user consumes.

- _%MEM_ — The average daily percentage of RAM that the user consumes.

- _MySQL_ — Processes The average number of MySQL® processes for the user.


Note:

The `ps uxaww` command collects the above information about the user, CPU, and MEM.

- This command runs every five minutes as part of the `/usr/local/cpanel/bin/dcpumon` cron job, as the `root` user.
- The system stores the process’s data in the `/var/log/dcpumon` log file in ASCII format.

## Top Processes

The Top Processes table shows the individual processes that consumed the most CPU that day. This table displays processes that have, at one time, used a large number of resources (top processes). Top process may only run for a few seconds, or for much longer. As a result, a top process may not actually consume a significant percentage of the resources on the server for a specified day.

This table includes the following columns:

- _User_ — The name of the user who runs the process. For example, if you log in to your server as the `root` user, this column displays _root_ for any processes that you initiate.

- _Domain_ — The user’s primary domain. The column **only** displays domains for users that are cPanel accounts. The column is empty when the user is a daemon or a system user.

- _%CPU_ — The highest percentage of the CPU that this process used. For example, this column displays 19% CPU for a process that ran for three seconds and used the following amounts of processing power:
  - 1% CPU in the first second.
  - 19% CPU in the second second.
  - 3% CPU in the third second.
- _Process_ — The process, as it appears in the process list.


#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Apache Status](https://docs.cpanel.net/whm/server-status/apache-status/)
- [Log Rotation](https://docs.cpanel.net/whm/service-configuration/log-rotation/)
- [Raw Apache Log Download](https://docs.cpanel.net/whm/account-functions/raw-apache-log-download/)
- [Raw FTP Log Download](https://docs.cpanel.net/whm/account-functions/raw-ftp-log-download/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×