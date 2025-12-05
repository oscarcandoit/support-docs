---
url: "https://docs.cpanel.net/whm/dns-functions/setup-edit-domain-forwarding/"
title: "Setup/Edit Domain Forwarding | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/dns-functions/setup-edit-domain-forwarding/#main-content)

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
4. Setup/Edit Domain Forwarding


[whmui](https://docs.cpanel.net/tags/whmui/) [domains](https://docs.cpanel.net/tags/domains/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/dns-functions/setup-edit-domain-forwarding/#overview)

* * *

[Create a domain forwarder](https://docs.cpanel.net/whm/dns-functions/setup-edit-domain-forwarding/#create-a-domain-forwarder)

* * *

[Disable domain forwarding](https://docs.cpanel.net/whm/dns-functions/setup-edit-domain-forwarding/#disable-domain-forwarding)

* * *

[File locations](https://docs.cpanel.net/whm/dns-functions/setup-edit-domain-forwarding/#file-locations)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/dns-functions/setup-edit-domain-forwarding/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/dns-functions/setup-edit-domain-forwarding/#overview)

* * *

[Create a domain forwarder](https://docs.cpanel.net/whm/dns-functions/setup-edit-domain-forwarding/#create-a-domain-forwarder)

* * *

[Disable domain forwarding](https://docs.cpanel.net/whm/dns-functions/setup-edit-domain-forwarding/#disable-domain-forwarding)

* * *

[File locations](https://docs.cpanel.net/whm/dns-functions/setup-edit-domain-forwarding/#file-locations)

* * *

## Setup/Edit Domain Forwarding

![](https://docs.cpanel.net/img/whm-icons/setup_edit_domain_forwarding.svg)

_Valid for versions 130 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/dns-functions/setup-edit-domain-forwarding/82/)

#### [130](https://docs.cpanel.net/whm/dns-functions/setup-edit-domain-forwarding/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature allows you to redirect one domain to another domain. For example, you can use this feature to temporarily redirect visitors while you disable a website for maintenance.

When you configure a domain forwarder, the system assigns the next available address in the IP address pool as the forwarding IP address. After the system configures the forwarding IP address, you **must** properly configure the domain’s DNS records. To do this, enter the forwarding IP address in the zone file’s A record. Then, use this interface to redirect traffic from one domain to another.

Note:

- cPanel & WHM does not support the following features for accounts with [temporary domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain):


  - Editing DNS
  - Email services
  - Search Engine Optimization

- Any server can host the forwarding domain. However, the domain’s A record **must** point to the IP address of your domain forwarder.

- To park a domain, or create a permanent redirect that returns a website from one domain when a visitor accesses another, use WHM’s [_Park a Domain_](https://docs.cpanel.net/whm/dns-functions/park-a-domain/) interface ( _WHM » Home » DNS Functions » Park a Domain_).


## Create a domain forwarder

To set up a domain forwarder, perform the following steps:

1. Click _Click to Create_.
2. Click _Setup Forwards_.
3. In the _Domain_ column, enter the domain whose visitors you wish to redirect.
4. In the _Redirection URL_ column, enter the domain or subdomain to which you wish to redirect visitors.
5. Click _Save Map_. A confirmation message will appear.

## Disable domain forwarding

To disable domain forwarding, click _Click to remove domain forwarder_.

## File locations

The system stores forwarding IP addresses in the `/var/cpanel/domainfwdip` file, and it stores the forwarding map in the `/var/cpanel/domainmap` file.

Warning:

We **strongly** recommend that you use this interface to manage domain forwarding and do **not** edit these two files directly.

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