---
url: "https://docs.cpanel.net/whm/account-information/view-bandwidth-usage/"
title: "View Bandwidth Usage | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/account-information/view-bandwidth-usage/#main-content)

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
3. [Account Information](https://docs.cpanel.net/whm/account-information/)
4. View Bandwidth Usage


[bandwidth](https://docs.cpanel.net/tags/bandwidth/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/account-information/view-bandwidth-usage/#overview)

* * *

[Bandwidth Usage](https://docs.cpanel.net/whm/account-information/view-bandwidth-usage/#bandwidth-usage)

* * *

[Bandwidth records](https://docs.cpanel.net/whm/account-information/view-bandwidth-usage/#bandwidth-records)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/account-information/view-bandwidth-usage/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/account-information/view-bandwidth-usage/#overview)

* * *

[Bandwidth Usage](https://docs.cpanel.net/whm/account-information/view-bandwidth-usage/#bandwidth-usage)

* * *

[Bandwidth records](https://docs.cpanel.net/whm/account-information/view-bandwidth-usage/#bandwidth-records)

* * *

## View Bandwidth Usage

![](https://docs.cpanel.net/img/whm-icons/view_bandwidth_usage.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/account-information/view-bandwidth-usage/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Bandwidth is the amount of information that your server transfers and receives. For example, if your domain sends 5 MB of information to a visitor’s computer, you use 5 MB of bandwidth.

This interface monitors traffic from HTTP (browser traffic), FTP (files transferred), SMTP (sent mail), and POP3/IMAP (received mail). This may cause some discrepancies between the information that WHM provides and the information that log processing programs (such as AWStats, Webalizer, or Analog) provide. For more information, read our [Apparent Discrepancies in Bandwidth Usage Statistics](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/) documentation.

Note:

The main domain’s bandwidth measurements include parked domain (alias) bandwidth.

## Bandwidth Usage

This list, sorted by month, displays information about bandwidth in a form that is easily readable. This list includes the following columns:

- _User_ — The account name.

- _Domain_ — The main domain name of the account.

- _Xfer_ — The consumed bandwidth.

- _Limit_ — The limit on bandwidth consumption for a particular user.

- _Usage_ — The percentage of used bandwidth that the system allocated to a user.


Note:

- Refer to the _Legend_ section at the bottom of the interface for help to interpret the information.

- The list does **not** display subdomains that have not transferred information.


## Bandwidth records

This section of the interface allows you to navigate through the bandwidth records, month by month, when you click the two links at the top of the interface. The _Last Month_ link on the left of the interface accesses last month’s bandwidth consumption records. You can use the _Next Month_ link to navigate forward through the records.

To display your bandwidth consumption records in megabytes, rather than by best fit, click _Show Units in Megabytes_ at the top of the interface. To return to the previous view, which the system displays as it best fits the chart (the default setting), click _Show Units with Best Fit_.

To sort accounts, click the header of any column in the list. For example, you can list accounts alphabetically by domain when you click _Domain_. To reverse the list, click _Domain_ again.

- To view only accounts that belong to a particular reseller, click the check mark (![Check](https://docs.cpanel.net/img/check-icon.jpg)) next to the reseller’s name.
- To edit an account’s bandwidth limit, click the edit icon (![Edit](https://docs.cpanel.net/img/edit-icon.jpg)).

#### Additional Documentation

* * *

- [Apparent Discrepancies in Bandwidth Usage Statistics](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/)
- [Bandwidth](https://docs.cpanel.net/cpanel/metrics/bandwidth/)
- [Hotlink Protection](https://docs.cpanel.net/cpanel/security/hotlink-protection/)
- [Leech Protection](https://docs.cpanel.net/cpanel/security/leech-protection/)
- [Limit Bandwidth Usage](https://docs.cpanel.net/whm/account-functions/limit-bandwidth-usage/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×