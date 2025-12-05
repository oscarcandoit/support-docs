---
url: "https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/"
title: "Filter Incoming Emails by Country | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/#main-content)

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
4. Filter Incoming Emails by Country


[whmui](https://docs.cpanel.net/tags/whmui/) [email](https://docs.cpanel.net/tags/email/) [spam](https://docs.cpanel.net/tags/spam/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/#overview)

* * *

[Countries table](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/#countries-table)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/#overview)

* * *

[Countries table](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/#countries-table)

* * *

## Filter Incoming Emails by Country

![](https://docs.cpanel.net/img/whm-icons/filter_email_by_country.svg)

_Valid for versions 102 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/)

Last modified: _2025 February 19_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to filter your server’s incoming email by the region or country associated with the sending server’s IP address.

For example, you could use this feature to allow mail **only** from servers whose IP addresses are associated with a single country in the [GeoIP](https://en.wikipedia.org/wiki/Geolocation_software) database - for example, Canada. If you do, the server will **block** email messages from servers whose IP addresses have not been registered as Canadian with the [American Registry for Internet Numbers](https://en.wikipedia.org/wiki/American_Registry_for_Internet_Numbers).

Important:

- The server uses this filter and the [_Filter Incoming Emails by Domain_](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/) filter **before** it uses any other filters or settings to process email.

- We update the [GeoIP](https://en.wikipedia.org/wiki/Geolocation_software) database for each [major release cPanel & WHM version](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/). This database includes GeoLite2 data created by [MaxMind](https://www.maxmind.com/).


## Countries table

This table includes a list of countries and regions. To block email messages from servers using IP addresses associated with specific countries or regions, disable the _Allowed_ toggle for that country or region.

- _Country Name_ ⁠— This column lists each country and region from which to block email messages.

- _Allowed_ ⁠— This column lists whether a country can send email messages to your server.
  - Enable the toggle to allow email messages from servers whose IP addresses are associated with that country.

  - Disable the toggle to block email messages from servers whose IP addresses are associated with that country.

To allow or block every country, perform the following steps:

1. Select the _Select All_ checkbox at the top left of the interface.

2. Click _Allow Selected_ to allow the selected countries. Alternatively, click _Block Selected_ to block them.


#### Additional Documentation

* * *

- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [Email Deliverability in WHM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)
- [Filter Incoming Emails by Domain](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/)
- [Greylisting](https://docs.cpanel.net/whm/email/greylisting/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×