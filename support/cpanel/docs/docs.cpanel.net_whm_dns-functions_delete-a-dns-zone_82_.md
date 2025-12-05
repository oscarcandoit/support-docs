---
url: "https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/82/"
title: "Delete a DNS Zone | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/82/#main-content)

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
4. Delete a DNS Zone


[whmui](https://docs.cpanel.net/tags/whmui/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/82/#overview)

* * *

[Delete one zone](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/82/#delete-one-zone)

* * *

[Delete multiple zones](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/82/#delete-multiple-zones)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/82/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/82/#overview)

* * *

[Delete one zone](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/82/#delete-one-zone)

* * *

[Delete multiple zones](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/82/#delete-multiple-zones)

* * *

## Delete a DNS Zone

![](https://docs.cpanel.net/img/whm-icons/delete_a_dns_zone.svg)

_Valid for versions 82 through 128_

#### Version:

#### [82](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/82/)

#### [130](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature allows you to delete DNS zones from your server. This is useful, for example, if you no longer host a domain on your server or another DNS server is authoritative for the domain.

Warning:

- DNS zones that reside on other Write-only DNS servers in a DNS cluster will **not** appear in this interface.
- If you delete a DNS zone, the cPanel user **must** configure that domain’s email addresses to use the local mail exchanger. They can configure this setting in cPanel’s [_Email Routing_](https://docs.cpanel.net/cpanel/email/email-routing) interface ( _cPanel » Home » Email » Email Routing_).

## Delete one zone

To delete a single DNS zone, perform the following steps:

1. Select a domain name from the _Choose Zones to Delete_ menu.
2. Click _Delete_.
3. Click _Delete_ on the next interface to confirm that you wish to delete the selected zone.

## Delete multiple zones

To select multiple zones, use command-click in macOS® or control-click in Windows® to select the zones from the menu.

If the zones that you wish to delete are together in the list, click the first desired zone and then shift-click the last zone to select all of the zones in between.

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