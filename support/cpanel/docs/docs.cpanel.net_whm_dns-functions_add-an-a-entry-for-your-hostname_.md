---
url: "https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/"
title: "Add an A Entry for Your Hostname | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/#main-content)

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
4. Add an A Entry for Your Hostname


[hostname](https://docs.cpanel.net/tags/hostname/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/#overview)

* * *

[Create an A entry](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/#create-an-a-entry)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/#overview)

* * *

[Create an A entry](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/#create-an-a-entry)

* * *

## Add an A Entry for Your Hostname

![](https://docs.cpanel.net/img/whm-icons/add_an_a_entry_for_your_hostname.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/)

Last modified: _2025 June 26_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

An A entry, also known as an A record or an address record, is a part of your server’s DNS zone files. The A entry points a hostname or domain to an IP address, which allows other computers to find your server on the internet.

If a DNS zone for the domain does not already exist, the system creates a new DNS zone with the full name of this entry.

Important:

We **strongly** recommend that you create a parent DNS zone for the domain first. Then, add an A entry to the parent DNS zone for the hostname. To add the parent zone, read our [Add a DNS Zone](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/) documentation.

## Create an A entry

To add an A entry, perform the following steps:

1. Enter your server’s IP address in the available text box.

2. Click _Add Entry_.


Your domain name now points to the server’s main IP address.

#### Additional Documentation

* * *

- [Add a DNS Zone](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/)
- [Delete a DNS Zone](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/)
- [DNS Zone Manager](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/)
- [Edit Zone Templates](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/)
- [Email Routing Configuration](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×