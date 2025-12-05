---
url: "https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/"
title: "Enable DKIM/SPF Globally | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/#main-content)

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
4. Enable DKIM/SPF Globally


[dkim](https://docs.cpanel.net/tags/dkim/) [spf](https://docs.cpanel.net/tags/spf/) [whmui](https://docs.cpanel.net/tags/whmui/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/#overview)

* * *

[Enable DKIM and SPF records](https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/#enable-dkim-and-spf-records)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/#overview)

* * *

[Enable DKIM and SPF records](https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/#enable-dkim-and-spf-records)

* * *

## Enable DKIM/SPF Globally

![](https://docs.cpanel.net/img/whm-icons/enable_dkim_and_spf_globally.svg)

_Valid for versions 130 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/82/)

#### [130](https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The system automatically provisions DKIM (DomainKeys Identified Mail) and SPF (Sender Policy Framework) records for all new accounts. However, it does **not** automatically provision these DNS records for existing accounts on the server.

This feature creates DKIM and SPF records for all accounts on the server.

Note:

- If a domain currently possesses an SPF record, the system will append the appropriate IP address from the `/var/cpanel/mainip` file to the existing record.
- The system will **not** modify existing DKIM records.
- To manage the DKIM or SPF record for a specific domain, use cPanel’s [_Email Deliverability_](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/) interface ( _cPanel » Home » Email » Email Deliverability_).
- cPanel & WHM does not support the following features for accounts with [temporary domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain):
  - Editing DNS
  - Email services
  - Search Engine Optimization

## Enable DKIM and SPF records

To enable DKIM and SPF records for all accounts on the server, click _Proceed_.

The server will provision DKIM and SPF records for all accounts on the server as a background task.

Warning:

Do **not** edit any nameserver configuration files during this process.


#### Additional Documentation

* * *

- [Delete a DNS Zone](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/)
- [DNS Zone Manager](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/)
- [Edit Zone Templates](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/)
- [Email Deliverability in WHM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)
- [Email DNS Record Manager](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×