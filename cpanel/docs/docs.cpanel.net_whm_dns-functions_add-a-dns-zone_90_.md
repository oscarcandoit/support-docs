---
url: "https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/90/"
title: "Add a DNS Zone | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/90/#main-content)

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
4. Add a DNS Zone


[dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/90/#overview)

* * *

[Create a DNS zone](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/90/#create-a-dns-zone)

* * *

[Troubleshoot DNS zone issues](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/90/#troubleshoot-dns-zone-issues)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/90/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/90/#overview)

* * *

[Create a DNS zone](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/90/#create-a-dns-zone)

* * *

[Troubleshoot DNS zone issues](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/90/#troubleshoot-dns-zone-issues)

* * *

## Add a DNS Zone

![](https://docs.cpanel.net/img/whm-icons/add_a_dns_zone.svg)

_Valid for versions 90 through 128_

#### Version:

#### [90](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/90/)

#### [130](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature allows you to set up a DNS zone on your server. A DNS zone is an administrative space or portion of the domain name system. The records in that space direct traffic to the correct locations.

The system creates zone files from a template. To edit the templates that the system uses to create zone files, use WHM’s [_Edit Zone Templates_](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates) interface ( _WHM » Home » DNS Functions » Edit Zone Templates_).

When you add a domain to your server, WHM automatically configures its DNS zone. You can also use this interface to add DNS zones for remote domains.

Warning:

Exercise caution when you add a DNS zone. Incorrect DNS data can prevent a visitor’s access to a domain.

## Create a DNS zone

To add a DNS zone, perform the following steps:

1. Under _Domain Selection_, enter the IP address in the _IPv4 Address_ text box.

2. Enter the domain name in the _Domain_ text box.

3. If you wish to associate the DNS zone with a specific account, select that account from the _Associate with Account_ list. To search the list, enter a partial domain or username in the _Search_ text box under the _Account Search_ heading.







Note:





- You **cannot** add multiple DNS zones for a single domain.
- If an account appears in the _Account Selection_ section, do **not** enter that domain in the _Domain_ text box. Use WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/) interface ( _WHM » Home » DNS Functions » DNS Zone Manager_) to modify an existing zone file.

4. Click _Add Zone_.


## Troubleshoot DNS zone issues

If you experience difficulties when you add DNS zones through this interface, run the following script from the command line as the `root` user:

```go
/usr/local/cpanel/scripts/autorepair io_compress_gzip
```

#### Additional Documentation

* * *

- [Add a DNS Zone](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/)
- [Add an A Entry for Your Hostname](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/)
- [Delete a DNS Zone](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/)
- [DNS Zone Manager](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/)
- [Edit Zone Templates](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×