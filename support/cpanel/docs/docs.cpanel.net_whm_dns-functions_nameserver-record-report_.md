---
url: "https://docs.cpanel.net/whm/dns-functions/nameserver-record-report/"
title: "Nameserver Record Report | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/dns-functions/nameserver-record-report/#main-content)

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
4. Nameserver Record Report


[nameservers](https://docs.cpanel.net/tags/nameservers/) [whmui](https://docs.cpanel.net/tags/whmui/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/dns-functions/nameserver-record-report/#overview)

* * *

[Nameserver Record Report](https://docs.cpanel.net/whm/dns-functions/nameserver-record-report/#nameserver-record-report)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/dns-functions/nameserver-record-report/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/dns-functions/nameserver-record-report/#overview)

* * *

[Nameserver Record Report](https://docs.cpanel.net/whm/dns-functions/nameserver-record-report/#nameserver-record-report)

* * *

## Nameserver Record Report

![](https://docs.cpanel.net/img/whm-icons/nameserver_record_report.svg)

_Valid for versions 90 through the latest version_

#### Version:

#### [90](https://docs.cpanel.net/whm/dns-functions/nameserver-record-report/)

Last modified: _2025 July 14_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Nameserver Record Report_ interface lists the server’s nameserver information.

Note:

The displayed data updates nightly. If you need to force an update, run the `/usr/local/cpanel/scripts/updatenameserverips` script.


## Nameserver Record Report

The interface lists information in the following columns:

- _Nameserver_ — The name of your system’s authoritative nameserver.

- _IP Addresses_ — Your nameserver’s IPv4 and IPv6 addresses.







Warning:





Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.

- _Zones_ — The number of DNS zones that the nameserver hosts.






Note:




You **must** properly configure the DNS entry for the nameserver’s hostname before the report can accurately supply the nameserver’s IP address information.


- _Actions_ — The actions that you can perform for each of your system’s nameservers. When you click _Edit Zones_, the [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager) interface ( _WHM » Home » DNS Functions » DNS Zone Manager_) will appear.







Note:





This information does **not** always reflect the status of your server’s functional and in-use nameservers or domains. This report returns information based on the server’s local DNS zones, as well as localhost lookups of those records.


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