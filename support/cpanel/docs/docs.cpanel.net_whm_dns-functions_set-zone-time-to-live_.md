---
url: "https://docs.cpanel.net/whm/dns-functions/set-zone-time-to-live/"
title: "Set Zone Time to Live (TTL) | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/dns-functions/set-zone-time-to-live/#main-content)

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
3. [DNS Functions](https://docs.cpanel.net/whm/dns-functions/)
4. Set Zone Time to Live (TTL)


[whmui](https://docs.cpanel.net/tags/whmui/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/dns-functions/set-zone-time-to-live/#overview)

* * *

[Set Zone TTL](https://docs.cpanel.net/whm/dns-functions/set-zone-time-to-live/#set-zone-ttl)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/dns-functions/set-zone-time-to-live/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/dns-functions/set-zone-time-to-live/#overview)

* * *

[Set Zone TTL](https://docs.cpanel.net/whm/dns-functions/set-zone-time-to-live/#set-zone-ttl)

* * *

## Set Zone Time to Live (TTL)

![](https://docs.cpanel.net/img/whm-icons/set_zone_time_to_live_ttl.svg)

_Valid for versions 130 through the latest version_

#### Version:

#### [98](https://docs.cpanel.net/whm/dns-functions/set-zone-time-to-live/98/)

#### [130](https://docs.cpanel.net/whm/dns-functions/set-zone-time-to-live/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to set the value for time to live (TTL) in your server’s DNS zones. The TTL specifies how long a DNS server caches a record before it requests an update from the authoritative nameserver, measured in seconds.

Important:

- If you change the TTL for a zone(s), the system will change the TTL for **all** records in the selected zone(s), including the SOA and NS records.
- cPanel & WHM does not support the following features for accounts with [temporary domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain):
  - Editing DNS
  - Email services
  - Search Engine Optimization

## Set Zone TTL

To set the value for TTL, perform the following steps:

1. Select the zone(s) that you wish to update from the menu.
2. Enter the TTL in the text box.






Note:




This value **must** be a positive integer. The default TTL is 14,400 seconds.


3. If you have multiple DNS servers and do **not** want the TTL to synchronize across your cluster, select the _Do not sync changes across the DNS cluster_ checkbox.
4. Click _Set TTLs_.

The system will update the TTL values for the selected zone(s).

#### Additional Documentation

* * *

- [Delete a DNS Zone](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/)
- [DNS Zone Manager](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/)
- [Edit Zone Templates](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/)
- [Email Routing Configuration](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/)
- [Enable DKIM/SPF Globally](https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×