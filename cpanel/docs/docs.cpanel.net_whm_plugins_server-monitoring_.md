---
url: "https://docs.cpanel.net/whm/plugins/server-monitoring/"
title: "Server Monitoring (Powered by 360 Monitoring) | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/plugins/server-monitoring/#main-content)

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
3. [Plugins](https://docs.cpanel.net/whm/plugins/)
4. Server Monitoring (Powered by 360 Monitoring)


[whmui](https://docs.cpanel.net/tags/whmui/) [servermonitoring](https://docs.cpanel.net/tags/servermonitoring/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/plugins/server-monitoring/#overview)

* * *

[Enable Home Screen Dashboard](https://docs.cpanel.net/whm/plugins/server-monitoring/#enable-home-screen-dashboard)

* * *

[Create a 360 Monitoring account](https://docs.cpanel.net/whm/plugins/server-monitoring/#create-a-360-monitoring-account)

* * *

[Upgrade a 360 Monitoring account](https://docs.cpanel.net/whm/plugins/server-monitoring/#upgrade-a-360-monitoring-account)

* * *

[The Monitoring dashboard](https://docs.cpanel.net/whm/plugins/server-monitoring/#the-monitoring-dashboard)

* * *

[Date range](https://docs.cpanel.net/whm/plugins/server-monitoring/#date-range)

* * *

[Overview tab](https://docs.cpanel.net/whm/plugins/server-monitoring/#overview-tab)

* * *

[Network tab](https://docs.cpanel.net/whm/plugins/server-monitoring/#network-tab)

* * *

[Memory tab](https://docs.cpanel.net/whm/plugins/server-monitoring/#memory-tab)

* * *

[CPU tab](https://docs.cpanel.net/whm/plugins/server-monitoring/#cpu-tab)

* * *

[Disk tab](https://docs.cpanel.net/whm/plugins/server-monitoring/#disk-tab)

* * *

[Processes tab](https://docs.cpanel.net/whm/plugins/server-monitoring/#processes-tab)

* * *

[Alerts tab](https://docs.cpanel.net/whm/plugins/server-monitoring/#alerts-tab)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/plugins/server-monitoring/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/plugins/server-monitoring/#overview)

* * *

[Enable Home Screen Dashboard](https://docs.cpanel.net/whm/plugins/server-monitoring/#enable-home-screen-dashboard)

* * *

[Create a 360 Monitoring account](https://docs.cpanel.net/whm/plugins/server-monitoring/#create-a-360-monitoring-account)

* * *

[Upgrade a 360 Monitoring account](https://docs.cpanel.net/whm/plugins/server-monitoring/#upgrade-a-360-monitoring-account)

* * *

[The Monitoring dashboard](https://docs.cpanel.net/whm/plugins/server-monitoring/#the-monitoring-dashboard)

* * *

[Date range](https://docs.cpanel.net/whm/plugins/server-monitoring/#date-range)

* * *

[Overview tab](https://docs.cpanel.net/whm/plugins/server-monitoring/#overview-tab)

* * *

[Network tab](https://docs.cpanel.net/whm/plugins/server-monitoring/#network-tab)

* * *

[Memory tab](https://docs.cpanel.net/whm/plugins/server-monitoring/#memory-tab)

* * *

[CPU tab](https://docs.cpanel.net/whm/plugins/server-monitoring/#cpu-tab)

* * *

[Disk tab](https://docs.cpanel.net/whm/plugins/server-monitoring/#disk-tab)

* * *

[Processes tab](https://docs.cpanel.net/whm/plugins/server-monitoring/#processes-tab)

* * *

[Alerts tab](https://docs.cpanel.net/whm/plugins/server-monitoring/#alerts-tab)

* * *

## Server Monitoring (Powered by 360 Monitoring)

![](https://docs.cpanel.net/img/whm-icons/server_monitoring.svg)

Last modified: _2025 June 9_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

Note:

WebPros International, LLC currently provides this feature in a limited release, with plans to expand its availability in future updates.

## Overview

The _Server Monitoring (Powered by [360 Monitoring](https://360monitoring.com/))_ interface ( _WHM » Plugins » Server Monitoring_) provides real-time insights into the performance, availability, and health of your websites, servers, and applications. It tracks key metrics like uptime, response times, and server resources to spot issues before they affect users. This interface helps businesses maintain optimal performance by providing clear reports and alerts, allowing them to fix problems quickly.

### Enable Home Screen Dashboard

To enable and disable the _Server monitoring_ panel in the [WHM _Home_ interface](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/), use the _Enable Home Screen Dashboard_ toggle. If you enable this feature, the WHM _Home_ interface will display _CPU_ usage, _CPU load average_, and _Top processes_ for your server.

## Create a 360 Monitoring account

Signing up for an account is free. To sign up, complete the following steps:

1. Click _Sign up_.
2. Enter your email in the _Email_ text box and agree to the processing of your personal data. Then, click _Create account_.
3. Check your email for the verification code and click _Continue with the OTP code_.
4. Enter a password for your account. Then, enter the OTP code found in your verification email. Then, click _Next_.
5. Enter your name and last name in the text boxes. Optionally, you can allow personalized offers and newsletters by selecting the checkbox under _Marketing consent_. Then, click _Finish_.

### Upgrade a 360 Monitoring account

When you sign up for an account, you receive a two-week free trial of the following monitoring capabilities:

- The ability to monitor all of your cPanel & WHM servers, as well as one non-WHM server.
- The ability to monitor unlimited websites per server for functionality and responsiveness in ten-minute intervals.
- The ability to set up email alerts.

After the two-week trial, you receive the `Lite` plan, which allows you to monitor **one** server and **five** websites in ten-minute intervals with email alerts.

To upgrade your monitoring capabilities, click your primary domain’s name in the [_Monitoring_ dashboard](https://docs.cpanel.net/whm/plugins/server-monitoring/#the-monitoring-dashboard) to open your website menu. Then, click _Go to 360 Monitoring_. You will be able to upgrade your account to use any of 360 Monitoring’s [plans](https://360monitoring.com/pricing/).

## The Monitoring dashboard

The _Monitoring_ dashboard displays statistics and metrics for your server’s performance.

Note:

If you have not created a 360 Monitoring account, only the _Overview_ tab will display server statistics. To create a 360 Monitoring account, read our [How to Create a 360 Monitoring Account](https://docs.cpanel.net/whm/plugins/server-monitoring/#create-a-360-monitoring-account) documentation above.

### Date range

The right side of the page’s heading displays the date range used for statistics. Click the calendar icon (![calendar icon](https://docs.cpanel.net/img/360-cal-icon.png)) to select the start and end time for the date range.

### Overview tab

The _Overview_ tab displays graphs for _CPU_, _Memory_, _Disk_, _Load average_, _Network traffic_, and the _Top processes_ that run on the server. You can display exact measurements on a graph by moving your cursor over it.

### Network tab

The _Network_ tab displays graphs about your server’s network traffic. These tables include _Ping response times_, _Bits per second_, _Packets total_, and graphs with detailed statistics for each network adapter.

You can display exact measurements on a graph by moving your cursor over it.

### Memory tab

The _Memory_ tab displays the following information about memory usage on your server:

- The _Memory_ graph shows memory use on the server.
- The _Active and inactive memory_ graph shows the active memory use compared to inactive memory.

You can display exact measurements on a graph by moving your cursor over it.

### CPU tab

The _CPU_ tab displays information about CPU usage on your server:

- The _Overall CPU usage_ graph shows the average usage on all CPUs and cores on the server.
- The _Top processes_ graph shows the top processes and how much of the CPUs each uses.
- Any graphs below display detailed statistics for each CPU and core.

You can display exact measurements on a graph by moving your cursor over it.

### Disk tab

The _Disk_ tab displays the following information about the storage devices on your server:

- The _Overall disk usage_ graph displays how much data each mount point stores on the server.
- The _Overall I/O transactions_ graph displays the number of transactions on a drive.
- The _Overall I/O data_ graph displays how much data is written and read.

You can display exact measurements on a graph by moving your cursor over it.

### Processes tab

The _Processes_ tab lists all the processes running on your server and valuable details about each.You can sort the table by clicking on a column header.

Click a _Parent process ID_, _PID_, _User_, or _Program_ to open the 360 Monitoring app. The 360 Monitoring app will display the total amount of _CPU_, _Memory_, _Process counts_, and _Disk I/O_ the process uses.

### Alerts tab

The _Alerts_ tab displays alerts for your account.

You can filter alerts by _Status_ and _Severity_. The filtered alerts are listed in the _Alert history_ table. To manage alerts and maintenance on the [360 Monitoring](https://360monitoring.com/) app, click the _Manage alerts_ link.

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [API Shell for WHM](https://docs.cpanel.net/whm/development/api-shell-for-whm/)
- [Configure ClamAV Scanner](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/)
- [WP Toolkit for WHM](https://docs.cpanel.net/whm/plugins/wp-toolkit-for-whm/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×