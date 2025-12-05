---
url: "https://docs.cpanel.net/whm/email/view-relayers/"
title: "View Relayers | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/email/view-relayers/#main-content)

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
3. [Email](https://docs.cpanel.net/whm/email/)
4. View Relayers


[whmui](https://docs.cpanel.net/tags/whmui/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/email/view-relayers/#overview)

* * *

[Search for relayers](https://docs.cpanel.net/whm/email/view-relayers/#search-for-relayers)

* * *

[The results table](https://docs.cpanel.net/whm/email/view-relayers/#the-results-table)

* * *

[Mail Delivery Reports](https://docs.cpanel.net/whm/email/view-relayers/#mail-delivery-reports)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/email/view-relayers/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/email/view-relayers/#overview)

* * *

[Search for relayers](https://docs.cpanel.net/whm/email/view-relayers/#search-for-relayers)

* * *

[The results table](https://docs.cpanel.net/whm/email/view-relayers/#the-results-table)

* * *

[Mail Delivery Reports](https://docs.cpanel.net/whm/email/view-relayers/#mail-delivery-reports)

* * *

## View Relayers

![](https://docs.cpanel.net/img/whm-icons/view_relayers.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/email/view-relayers/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface lists users who have relayed mail. Relayed email is email that a user on your server forwards to a remote account.

## Search for relayers

To search for a user who has relayed mail, perform the following steps:

1. Enter a range of dates in _Month/Date/Year_ format in the _Start Date_ and _End Date_ text boxes.






Note:





Larger date ranges require more time to run.

2. Specify the time range in which you wish to search.
3. Click _Run Report_.

## The results table

The interface sorts your query’s results into the following four columns:

| Column | Description |
| --- | --- |
| _User_ | The cPanel username of the account that relayed the message. |
| _Domain_ | The user’s domain. |
| _Successful_ | Whether delivery was successful. A value of `1` represents successful delivery. |
| _Data Sent_ | The total amount of relayed data that the user sent. |

### Mail Delivery Reports

If you wish to view a detailed list of messages that a specific user sent, click that user’s row. The [_Mail Delivery Reports_](https://docs.cpanel.net/whm/email/mail-delivery-reports) interface ( _WHM » Home » Email » Mail Delivery Reports_) will appear with the detailed list.

More:

For more information about how to filter and customize the detailed list, read our [Mail Delivery Reports](https://docs.cpanel.net/whm/email/mail-delivery-reports) documentation.

#### Additional Documentation

* * *

- [Email Deliverability in WHM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)
- [Filter Incoming Emails by Country](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/)
- [Filter Incoming Emails by Domain](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/)
- [Greylisting](https://docs.cpanel.net/whm/email/greylisting/)
- [Mail Delivery Reports](https://docs.cpanel.net/whm/email/mail-delivery-reports/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×