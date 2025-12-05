---
url: "https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/124/"
title: "Email DNS Record Manager | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/124/#main-content)

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
4. Email DNS Record Manager


[dkim](https://docs.cpanel.net/tags/dkim/) [spf](https://docs.cpanel.net/tags/spf/) [whmui](https://docs.cpanel.net/tags/whmui/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/124/#overview)

* * *

[Enable DMARC records](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/124/#enable-dmarc-records)

* * *

[Customize DMARC records](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/124/#customize-dmarc-records)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/124/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/124/#overview)

* * *

[Enable DMARC records](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/124/#enable-dmarc-records)

* * *

[Customize DMARC records](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/124/#customize-dmarc-records)

* * *

## Email DNS Record Manager

![](https://docs.cpanel.net/img/whm-icons/email_dns_record_manager.svg)

_Valid for versions 124 through 128_

#### Version:

#### [124](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/124/)

#### [130](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Use this interface to add a default [DMARC](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#dmarc) policy to your server’s domains.

cPanel & WHM allows you to set a default DMARC policy when you create a new account. This interface sets the default DMARC policy for existing accounts on the server.

Important:

DMARC requires valid [Sender Policy Framework (SPF)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#spf) and [DomainKeys Identified Mail (DKIM)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#dkim) records. To enable SPF and DKIM records for all domains on the server, use WHM’s [_Enable DKIM/SPF Globally_](https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/) interface ( _WHM » Home » DNS Functions » Enable DKIM/SPF Globally_).

## Enable DMARC records

To enable DMARC records for your server’s domains, click _Apply DMARC Policy_. The server will provision the records in a background task.

Important:

- The system will **not** modify existing DMARC records.
- Do **not** edit any nameserver configuration files during this process.

## Customize DMARC records

The system uses the following default policy:

```bash
v=DMARC1; p=none;
```

To customize the DMARC record for a domain, use WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/) interface ( _WHM » Home » DNS Functions » DNS Zone Manager_).

#### Additional Documentation

* * *

- [Email Deliverability in cPanel](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/)
- [Email Deliverability in WHM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)
- [Email DNS Record Manager](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/)
- [Email Routing Configuration](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/)
- [Enable DKIM/SPF Globally](https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×