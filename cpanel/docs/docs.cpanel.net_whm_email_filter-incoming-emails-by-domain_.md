---
url: "https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/"
title: "Filter Incoming Emails by Domain | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/#main-content)

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
4. Filter Incoming Emails by Domain


[whmui](https://docs.cpanel.net/tags/whmui/) [email](https://docs.cpanel.net/tags/email/) [spam](https://docs.cpanel.net/tags/spam/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/#overview)

* * *

[Blocked Domains](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/#blocked-domains)

* * *

[Wildcard characters](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/#wildcard-characters)

* * *

[Internationalized Domain Name](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/#internationalized-domain-name)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/#overview)

* * *

[Blocked Domains](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/#blocked-domains)

* * *

[Wildcard characters](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/#wildcard-characters)

* * *

[Internationalized Domain Name](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/#internationalized-domain-name)

* * *

## Filter Incoming Emails by Domain

![](https://docs.cpanel.net/img/whm-icons/filter_incoming_emails_by_domain.svg)

_Valid for versions 84 through the latest version_

#### Version:

#### [84](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Use this interface to specify certain domains. Your server will block email messages from those domains. Your server rejects email messages when the `From` address matches a blocked domain.

This feature is useful, for example, to block all email messages from a domain that sends only spam.

Important:

The server uses [_Filter Incoming Emails by Domain_](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain) and [_Filter Incoming Emails by Country_](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/) filters before it uses any other filters or settings on your system to process email.


## Blocked Domains

To block a domain, perform the following steps:

1. Enter a domain in the _Blocked Domains_ text box.







Note:





- For multiple domains, use a new line for each domain.
- To view an [Internationalized Domain Name (IDN)](https://en.wikipedia.org/wiki/Internationalized_domain_name) as ASCII characters, select the _Show domains as ASCII (relevant for IDNs)_ checkbox.

2. Click _Save_.


### Wildcard characters

To reject all subdomains of a given domain, prefix the domain name with an asterisk (`*`) character. The asterisk represents a wildcard character. For example, if you were to enter the `*.example.com` domain. Your server will reject **any** email message from any subdomain of the `example.com` domain.

### Internationalized Domain Name

You can also enter an IDN. This interface converts an IDN into [Punycode](https://en.wikipedia.org/wiki/Punycode). Punycode uses multiple ASCII characters to represent a single Unicode IDN character. For example, Punycode would represent the IDN `스타벅스코리아.com` domain as the `xn--oy2b35ckwhba574atvuzkc.com` domain.

#### Additional Documentation

* * *

- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [Email Deliverability in WHM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)
- [Filter Incoming Emails by Country](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/)
- [Greylisting](https://docs.cpanel.net/whm/email/greylisting/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×