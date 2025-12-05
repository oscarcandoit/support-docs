---
url: "https://docs.cpanel.net/whm/account-functions/limit-bandwidth-usage/"
title: "Limit Bandwidth Usage | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/account-functions/limit-bandwidth-usage/#main-content)

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
3. [Account Functions](https://docs.cpanel.net/whm/account-functions/)
4. Limit Bandwidth Usage


[quotas](https://docs.cpanel.net/tags/quotas/) [bandwidth](https://docs.cpanel.net/tags/bandwidth/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/account-functions/limit-bandwidth-usage/#overview)

* * *

[Change the bandwidth limit](https://docs.cpanel.net/whm/account-functions/limit-bandwidth-usage/#change-the-bandwidth-limit)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/account-functions/limit-bandwidth-usage/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/account-functions/limit-bandwidth-usage/#overview)

* * *

[Change the bandwidth limit](https://docs.cpanel.net/whm/account-functions/limit-bandwidth-usage/#change-the-bandwidth-limit)

* * *

## Limit Bandwidth Usage

![](https://docs.cpanel.net/img/whm-icons/limit_bandwidth_usage.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/account-functions/limit-bandwidth-usage/)

Last modified: _2025 June 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Important:

Suspension and bandwidth limiting are two separate functions. For more information about each function, read our [Account Suspension Versus Bandwidth Limiting and Account Termination](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/) documentation.


This interface enables you to change the allotted bandwidth for an account. Bandwidth measures the amount of data that your server transfers. Set appropriate bandwidth limits for each account on your server. For example, users who wish to host video content need more bandwidth than a user who only hosts a blog.

Note:

You may notice discrepancies between the bandwidth information that WHM provides and the information that log processing programs (such as [AWStats](https://docs.cpanel.net/cpanel/metrics/awstats), [Webalizer](https://docs.cpanel.net/cpanel/metrics/webalizer), or [Analog Stats](https://docs.cpanel.net/cpanel/metrics/analog-stats)) provide. For more information, read our Apparent Discrepancies in Bandwidth Usage Statistics documentation.

## Change the bandwidth limit

To change the bandwidth limit for an account, select the account that you want to modify. When you select an account, WHM displays a table with the account’s IP address, owner, email addresses, start date, theme, package, and disk usage.

![bandwidth limit table](https://docs.cpanel.net/img/limitbandwidthusage.png)

Note:

The _Disk Limit_ setting refers to the account’s quota, which the account’s package determines.


To change the bandwidth limit for the account, perform the following steps:

1. Click _Limit_.

2. Enter the new bandwidth limit in the available text box.

3. Click _Change_.


Note:

The system only checks bandwidth limits **once** per day, between midnight and 6:00 am. Therefore, changes that you make to the bandwidth limit may not take effect until that time.


#### Additional Documentation

* * *

- [Bandwidth](https://docs.cpanel.net/cpanel/metrics/bandwidth/)
- [Change Site's IP Address](https://docs.cpanel.net/whm/account-functions/change-site-ip-address/)
- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [Reset Account Bandwidth Limit](https://docs.cpanel.net/whm/account-functions/reset-account-bandwidth-limit/)
- [Unsuspend Bandwidth Exceeders](https://docs.cpanel.net/whm/account-functions/unsuspend-bandwidth-exceeders/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×