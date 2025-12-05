---
url: "https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/"
title: "Apparent Discrepancies in Bandwidth Usage Statistics | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [Accounts](https://docs.cpanel.net/knowledge-base/accounts/)
4. Apparent Discrepancies in Bandwidth Usage Statistics


[bandwidth](https://docs.cpanel.net/tags/bandwidth/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#overview)

* * *

[Where to find bandwidth data](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#where-to-find-bandwidth-data)

* * *

[Summary file data](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#summary-file-data)

* * *

[Database data](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#database-data)

* * *

[Causes for bandwidth discrepancies](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#causes-for-bandwidth-discrepancies)

* * *

[Differences in measuring daily bandwidth statistics](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#differences-in-measuring-daily-bandwidth-statistics)

* * *

[Overall differences in measuring bandwidth](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#overall-differences-in-measuring-bandwidth)

* * *

[Which report should I use?](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#which-report-should-i-use)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#overview)

* * *

[Where to find bandwidth data](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#where-to-find-bandwidth-data)

* * *

[Summary file data](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#summary-file-data)

* * *

[Database data](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#database-data)

* * *

[Causes for bandwidth discrepancies](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#causes-for-bandwidth-discrepancies)

* * *

[Differences in measuring daily bandwidth statistics](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#differences-in-measuring-daily-bandwidth-statistics)

* * *

[Overall differences in measuring bandwidth](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#overall-differences-in-measuring-bandwidth)

* * *

[Which report should I use?](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/#which-report-should-i-use)

* * *

## Apparent Discrepancies in Bandwidth Usage Statistics

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/)

Last modified: _2020 May 13_

* * *

## Overview

Often, when users compare bandwidth usage statistics that log analysis programs provide (for example, AWStats, Analog, Logaholic, and Webalizer) to bandwidth statistics that cPanel & WHM provide, they are surprised to find apparent discrepancies. These apparent discrepancies result from the way in which different programs measure bandwidth.

The purpose of this document is to explain the differences in measurement methods. Our goal is to help web hosting providers and website owners understand how to obtain the most accurate bandwidth report.

## Where to find bandwidth data

Bandwidth data in cPanel & WHM comes from a combination of summary files and databases.

### Summary file data

The following cPanel & WHM interfaces display (mainly numeric) bandwidth usage information in summary files:

- WHM’s [_View Bandwidth Usage_](https://docs.cpanel.net/whm/account-information/view-bandwidth-usage) interface ( _WHM » Home » Account Information » View Bandwidth Usage_).

- WHM’s [_Limit Bandwidth Usage_](https://docs.cpanel.net/whm/account-functions/limit-bandwidth-usage) interface ( _WHM » Home » Account Functions » Limit Bandwidth Usage_).

- The _Bandwidth_ statistic in the _Statistics_ section of cPanel’s _Home_ interface.

- cPanel’s [_Bandwidth_](https://docs.cpanel.net/cpanel/metrics/bandwidth) interface ( _cPanel » Home » Metrics » Bandwidth_).







Note:





The _Bandwidth_ interface includes this information in the monthly bandwidth usage pie charts, and in the _Bandwidth by Day_ table when you select a domain.


The same bandwidth monitoring tool generates all of the information in these interfaces.

In contrast, AWStats, Analog, and Webalizer use a different method to process bandwidth. This is why it sometimes appears that there is no correlation between the data that the bandwidth usage information interfaces show and the data that AWStats, Analog, and Webalizer show.

### Database data

Databases generate the following bandwidth graphs in cPanel’s [_Bandwidth_](https://docs.cpanel.net/cpanel/metrics/bandwidth) interface ( _cPanel » Home » Metrics » Bandwidth_):

- _Past 24 hours_
- _Past week_
- _Past year_

The system uses a different method to calculate these graphs than it does to calculate summary file data.

## Causes for bandwidth discrepancies

### Differences in measuring daily bandwidth statistics

The information that cPanel & WHM presents may differ from the day’s usage in log processing programs, such as AWStats, Analog, or Webalizer. There are three possible reasons for this:

1. The server administrator can set log processing and bandwidth processing cycles independently. This means that the system may generate the two statistics several hours apart, in which case, they may vary widely.

2. Even if the server administrator attempts to synchronize log and bandwidth processing cycles, the system always processes the statistics **at least** eight minutes apart.

3. The system holds the usage data for the five minutes prior to processing time until the next processing cycle. Therefore, those statistics appear in a later report.


Daily bandwidth usage numbers are far too volatile for the bandwidth and log processing results to match.

### Overall differences in measuring bandwidth

There are further differences between the methods that log programs and cPanel & WHM use to process bandwidth usage.

#### How log processing programs measure bandwidth

Log processing programs extract the amount of bytes that the Apache combined access log transfers. The Apache combined access log records incoming data requests, which includes the size of the requested file, in bytes.

- This size **only** includes the full size of the content of the requested file. It does not reflect the actual number of bytes that the system transferred.

- This size measures the content of the file only. It does **not** include the size of the headers of the response.

- This size does not include the size of the request.


Log processing programs measure bandwidth by the size of the data that visitors **requested**, not the amount the data that the system **actually transferred**.

#### How cPanel & WHM measures bandwidth

To measure bandwidth, cPanel & WHM combines the amount of bytes of an incoming data request with the outgoing **transferred** data (the response to that request). cPanel & WHM obtains this data from the Apache logs.

These logs include the following amounts of bandwidth:

- The total bandwidth that the incoming request that solicited the content used.

- The total bandwidth that the **complete response** used (the sum of the size of the content plus the header).


#### How this affects the results

For most websites, these differences are relatively small. The headers are a few hundred bytes; the request itself is usually much less. Given reasonably sized output content, this overhead works out to a few percentage points’ difference.

Certain types of request and response combinations, however, cause these differences to make a significant impact on the bandwidth measurement:

1. **Large numbers of non-success responses** — Because redirects and errors have virtually no content, and mainly contain headers, the bandwidth usage that the log processing programs report is much smaller than the bandwidth usage that cPanel & WHM reports.

2. **Large numbers of very small responses** — For transferred content that is smaller than 1 KB, the log processing programs report less bandwidth usage than cPanel & WHM reports. This is because the combined size of the response headers and the request is often larger than 1 KB.

3. **Large requests that the user cancelled** — To measure bandwidth, log processing programs show the size of the requested data, not the amount the data that the system _actually_ transferred. This means that these programs do **not** make a distinction between completed and cancelled requests. Therefore, a high number of requests that users cancelled may cause cPanel & WHM to report a substantially smaller amount of bandwidth usage than log processing programs report.


- This situation often occurs with sites that serve a large number of video or audio streaming requests.
- For example, 100 people request a 1 GB video, but cancel the request after only 10% of the video has downloaded. cPanel & WHM would report that the system transferred less than 10 GB of data. However, because of how they obtain their information, the log processing programs would report that the system transferred 100 GB.

## Which report should I use?

We **strongly** recommend that you use the complete bandwidth measurement that cPanel & WHM provides. For example, use cPanel’s [_Bandwidth_](https://docs.cpanel.net/cpanel/metrics/bandwidth) interface ( _cPanel » Home » Metrics » Bandwidth_) or WHM’s [_View Bandwidth Usage_](https://docs.cpanel.net/whm/account-information/view-bandwidth-usage) interface ( _WHM » Home » Account Information » View Bandwidth Usage_).

- Log analysis programs, while not as accurate, are useful for information about page view statistics, referrals, and other information.

- Set bandwidth processing cycles in WHM’s [_Statistics Software Configuration_](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration) interface ( _WHM » Home » Server Configuration » Statistics Software Configuration_). This interface allows you to balance server performance with latency reports, and provides the most accurate bandwidth usage statistics possible.

- For up-to-date usage information, process an individual user’s statistics on demand in the _Process Statistics for User_ section of WHM’s [_Statistics Software Configuration_](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration) interface ( _WHM » Home » Server Configuration » Statistics Software Configuration_).


#### Additional Documentation

* * *

- [Bandwidth](https://docs.cpanel.net/cpanel/metrics/bandwidth/)
- [Hotlink Protection](https://docs.cpanel.net/cpanel/security/hotlink-protection/)
- [How to Create a Demo cPanel Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-demo-cpanel-account/)
- [How to Create a WHM Reseller Without an Associated Domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/)
- [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×