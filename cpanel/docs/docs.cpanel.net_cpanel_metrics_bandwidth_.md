---
url: "https://docs.cpanel.net/cpanel/metrics/bandwidth/"
title: "Bandwidth | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/metrics/bandwidth/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Metrics](https://docs.cpanel.net/cpanel/metrics/)
4. Bandwidth


[quotas](https://docs.cpanel.net/tags/quotas/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [bandwidth](https://docs.cpanel.net/tags/bandwidth/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/metrics/bandwidth/#overview)

* * *

[Time zone](https://docs.cpanel.net/cpanel/metrics/bandwidth/#time-zone)

* * *

[Past 24 hours](https://docs.cpanel.net/cpanel/metrics/bandwidth/#past-24-hours)

* * *

[Past week](https://docs.cpanel.net/cpanel/metrics/bandwidth/#past-week)

* * *

[Past year](https://docs.cpanel.net/cpanel/metrics/bandwidth/#past-year)

* * *

[Monthly pie charts](https://docs.cpanel.net/cpanel/metrics/bandwidth/#monthly-pie-charts)

* * *

[The Bandwidth Transfer Detail interface](https://docs.cpanel.net/cpanel/metrics/bandwidth/#the-bandwidth-transfer-detail-interface)

* * *

[All Traffic (monthly)](https://docs.cpanel.net/cpanel/metrics/bandwidth/#all-traffic-monthly)

* * *

[Monthly traffic graphs for services](https://docs.cpanel.net/cpanel/metrics/bandwidth/#monthly-traffic-graphs-for-services)

* * *

[All Traffic (daily)](https://docs.cpanel.net/cpanel/metrics/bandwidth/#all-traffic-daily)

* * *

[Daily traffic graphs by service](https://docs.cpanel.net/cpanel/metrics/bandwidth/#daily-traffic-graphs-by-service)

* * *

[Bandwidth by Day](https://docs.cpanel.net/cpanel/metrics/bandwidth/#bandwidth-by-day)

* * *

[Non-recorded bandwidth information](https://docs.cpanel.net/cpanel/metrics/bandwidth/#non-recorded-bandwidth-information)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/metrics/bandwidth/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/metrics/bandwidth/#overview)

* * *

[Time zone](https://docs.cpanel.net/cpanel/metrics/bandwidth/#time-zone)

* * *

[Past 24 hours](https://docs.cpanel.net/cpanel/metrics/bandwidth/#past-24-hours)

* * *

[Past week](https://docs.cpanel.net/cpanel/metrics/bandwidth/#past-week)

* * *

[Past year](https://docs.cpanel.net/cpanel/metrics/bandwidth/#past-year)

* * *

[Monthly pie charts](https://docs.cpanel.net/cpanel/metrics/bandwidth/#monthly-pie-charts)

* * *

[The Bandwidth Transfer Detail interface](https://docs.cpanel.net/cpanel/metrics/bandwidth/#the-bandwidth-transfer-detail-interface)

* * *

[All Traffic (monthly)](https://docs.cpanel.net/cpanel/metrics/bandwidth/#all-traffic-monthly)

* * *

[Monthly traffic graphs for services](https://docs.cpanel.net/cpanel/metrics/bandwidth/#monthly-traffic-graphs-for-services)

* * *

[All Traffic (daily)](https://docs.cpanel.net/cpanel/metrics/bandwidth/#all-traffic-daily)

* * *

[Daily traffic graphs by service](https://docs.cpanel.net/cpanel/metrics/bandwidth/#daily-traffic-graphs-by-service)

* * *

[Bandwidth by Day](https://docs.cpanel.net/cpanel/metrics/bandwidth/#bandwidth-by-day)

* * *

[Non-recorded bandwidth information](https://docs.cpanel.net/cpanel/metrics/bandwidth/#non-recorded-bandwidth-information)

* * *

## Bandwidth

![](https://docs.cpanel.net/img/cpanel-icons/bandwidth.svg)

_Valid for versions 84 through the latest version_

#### Version:

#### [84](https://docs.cpanel.net/cpanel/metrics/bandwidth/)

Last modified: _2025 June 5_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

Important:

This feature only appears if your hosting provider’s [server profile](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary) enables it.

## Overview

The _Bandwidth_ interface displays bandwidth usage information in several sets of graphs. Each graph contains information about bandwidth usage over a specific period of time.

The graphs display bandwidth information in six categories:

- _HTTP_ — Web traffic.
- _POP3_ — Email that you retrieved from your accounts on the server.
- _IMAP_ — Email that you retrieved from your accounts on the server.
- _FTP_ — File transfers.
- _SMTP_ — Email that your accounts sent.
- _Total (all services)_

Note:

- The _Total (all services)_ category provides the combined total of all of the other categories.
- The system **only** records bandwidth for SMTP (sent) messages. The system does **not** include POP3 or IMAP (received) messages in bandwidth calculation.

This information allows you to monitor the heaviest traffic times for your website, and helps you to decide whether to purchase additional bandwidth.

## Time zone

The interface displays the server’s time zone setting as follows:

```perl
All times are in the "America/Chicago" time zone
```

If the system detects that your browser’s time zone does not match the server’s time zone, the interface will contain a notice that resembles the following:

```perl
Set the time to "America/Chicago" time zone and reload.
```

Click the link to reset the time zone and reload the interface.

## Past 24 hours

The _Past 24_ hours graph displays the data-transfer rate in bits per second for the current day, averaged into five-minute intervals.

![example graph that shows HTTP, IMAP, POP3, SMTP, and FTP traffic in KB (kilobytes) per minute for the past 24 hours](https://docs.cpanel.net/img/bandwidth24hours.png)

By default, this graph updates every two hours. However, if your hosting provider adjusts the bandwidth data process interval in WHM’s [_Statistics Software Configuration_](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration) interface ( _WHM » Home » Server Configuration » Statistics Software Configuration_), this affects the amount of bandwidth data that the system displays.

Use this graph to view the following information:

- Small-scale trends (for example, quick spikes in traffic at specific times).
- Changes over the course of the day (for example, increases and decreases in traffic).

## Past week

The _Past week_ graph displays the data-transfer rate, in bits per second, over the past seven days, averaged into five-minute intervals.

![example graph that shows HTTP, IMAP, POP3, SMTP, and FTP traffic in KB (kilobytes) per minute for the past week](https://docs.cpanel.net/img/bandwidthpastweek.png)

Use this graph to view the following information:

- Larger-scale trends (for example, spikes in traffic at the same time each day for the past three days).
- Changes from the past week (for example, increases or decreases in traffic over a period of two to seven days).

## Past year

The _Past year_ graph displays the total amount of data that the system transferred over a period of 12 months (one year).

![example graph that shows HTTP, IMAP, POP3, SMTP, and FTP traffic in KB (kilobytes) per minute for the past 12 months](https://docs.cpanel.net/img/bandwidthpastyear.png)

Use this graph to find long-term trends over an entire year. For example, this graph might indicate that your account receives a heavy burst of traffic at mid-month every month.

## Monthly pie charts

The monthly pie charts display the relative amounts of data that your cPanel account’s various services and domains use in each month.

![example pie charts that show HTTP, IMAP, POP3, SMTP, FTP, and total traffic for a specific month](https://docs.cpanel.net/img/bandwidthpiecharts.png)

Use the pie charts to view the following information:

- The total amount of data that the system transferred for the month.
- Changes in the relationships between services from month to month. For example, SMTP total bandwidth increased from 5% to 50% in one month, while HTTP bandwidth decreased.
- Changes in the bandwidth usage of one domain relative to another domain. For example, the domain `example1.com` accounts for 50% of the overall traffic of all sites, and `example2.com` accounts for about 25%.

To view the _Bandwidth Transfer Detail_ interface for a month, click that month’s pie chart.

Note:

Click a _usage_ link for a month to look up the usage information for an individual website or service. A new interface will display detailed monthly traffic information for that particular service or website.

## The Bandwidth Transfer Detail interface

To view the bandwidth transfer information for a particular month, click _Total (all services)_ for that month.

This interface contains a series of bandwidth usage graphs for the following types of traffic:

- HTTP
- SMTP
- FTP
- POP3
- IMAP

### All Traffic (monthly)

The _All Traffic_ monthly graph displays the hourly average bytes that the system transferred for the month. It provides a detailed version of the data that the _Past year_ graph displays.

![example graph that shows hourly average HTTP, IMAP, POP3, SMTP, and FTP traffic in kilobytes (KB) per minute for a specific month](https://docs.cpanel.net/img/bandwidthalltrafficmonthly.png)

Use this graph to find trends over a period of several days or weeks. For example, this graph might indicate that your account receives heavier traffic on a specific day of the month.

### Monthly traffic graphs for services

The monthly traffic graphs serve the same purpose as the _All Traffic_ graph, but the system separates the data for individual services.

### All Traffic (daily)

The _All Traffic_ daily graph displays 30-minute averages of bits that the system transferred per second. It is a more detailed version of the _All Traffic_ monthly graph.

### Daily traffic graphs by service

Under the _All Traffic_ graph is a series of one or more bar graphs for specific services. These serve the same purpose as the _All Traffic_ graph, but the system separates the data for individual services.

### Bandwidth by Day

The _Bandwidth by Day_ table lists the total amount of the cPanel account’s data that the system transferred on a specific day of the month, in megabytes (MB).

Click a day in the table to view more information about that day’s traffic.

![example table that shows total, HTTP, SMTP, FTP, POP3, and IMAP traffic in megabytes (MB) or gigabytes (GB) by day](https://docs.cpanel.net/img/bandwidthbyday.png)

Note:

We recommend that you view the _Bandwidth by Day_ table at least 24-48 hours **after** the last day of the period for which you wish to obtain data. This allows the system to gather and process the traffic data.

## Non-recorded bandwidth information

The _Bandwidth_ displays information about your website, rather than about your cPanel & WHM server. As a result, the system does **not** count the following processes towards your bandwidth usage or allotment:

- Protocols such as file manager uploads and downloads.
- Incoming mail that other servers deliver.
- POP/IMAP bytes received for tasks such as polling for new email.
- SMTP (received) mail.
- DNS activity.
- Any user processes spawned by cron jobs that perform network activity.

Your systems administrator can monitor your cPanel & WHM server’s bandwidth via the _Munin_ plugin, which they can download in WHM’s [_Manage Plugins_](https://docs.cpanel.net/whm/cpanel/manage-plugins) interface ( _WHM » Home » cPanel » Manage Plugins_).

#### Additional Documentation

* * *

- [Analog Stats](https://docs.cpanel.net/cpanel/metrics/analog-stats/)
- [Awstats](https://docs.cpanel.net/cpanel/metrics/awstats/)
- [CPU and Concurrent Connection Usage](https://docs.cpanel.net/cpanel/metrics/cpu-and-concurrent-connection-usage/)
- [Disk Usage](https://docs.cpanel.net/cpanel/files/disk-usage/)
- [Email Disk Usage](https://docs.cpanel.net/cpanel/email/email-disk-usage/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×