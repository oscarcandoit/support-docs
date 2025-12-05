---
url: "https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records/"
title: "Synchronize DNS Records | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records/#main-content)

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
4. Synchronize DNS Records


[whmui](https://docs.cpanel.net/tags/whmui/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records/#overview)

* * *

[Synchronize records](https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records/#synchronize-records)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records/#overview)

* * *

[Synchronize records](https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records/#synchronize-records)

* * *

## Synchronize DNS Records

![](https://docs.cpanel.net/img/whm-icons/synchronize_dns_records.svg)

_Valid for versions 130 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records/82/)

#### [130](https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature is useful if you use a DNS cluster, but some servers in the cluster respond to DNS queries with outdated information. This feature compares zone files among servers, recognizes which are the most up-to-date, and updates the servers in the DNS cluster.

Note:

- cPanel & WHM does not support the following features for accounts with [temporary domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain):


  - Editing DNS
  - Email services
  - Search Engine Optimization

- For more information about how to set up a DNS cluster, read our [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster/) documentation.


## Synchronize records

Note:

Before you begin the synchronization, consider the following questions:

- Do you want to synchronize all of the domains’ zone files, or just one zone file?
- Do you want to update all of the servers in the DNS cluster, or just this server?

To synchronize DNS records, perform the following steps:

1. Select the type of synchronization that you wish to perform:
   - _Synchronize one zone to this server only_ — The system will copy one updated zone file to this server. Enter the name of the domain that you wish to synchronize in the associated text box.
   - _Synchronize all zones to this server only_ — The system will copy all updated versions of local zone files from the other servers in the DNS cluster to this server.
   - _Synchronize one zone to all servers_ — The system will copy one updated zone file from one server to all of the other zone files in the DNS cluster. Then, enter the domain name for which you wish to update the zone file in the associated text box.
   - _Synchronize all zones to all servers_ — The system will copy updated versions of all of the local zone files to all of the servers in the DNS cluster.
2. If you selected _Synchronize all zones to this server only_ or _Synchronize all zones to all servers_, select the associated _Synchronize zones that are not configured on this server_ checkbox to copy updated versions of all zone files to this server. The system copies all of the zone files, regardless of whether they are local to this server.

3. Click _Synchronize_.


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