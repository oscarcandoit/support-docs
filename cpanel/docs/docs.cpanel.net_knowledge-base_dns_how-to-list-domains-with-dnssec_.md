---
url: "https://docs.cpanel.net/knowledge-base/dns/how-to-list-domains-with-dnssec/"
title: "How to List Domains with DNSSEC | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/dns/how-to-list-domains-with-dnssec/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [DNS](https://docs.cpanel.net/knowledge-base/dns/)
4. How to List Domains with DNSSEC


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [dns](https://docs.cpanel.net/tags/dns/) [dnssec](https://docs.cpanel.net/tags/dnssec/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/dns/how-to-list-domains-with-dnssec/#overview)

* * *

[List domains](https://docs.cpanel.net/knowledge-base/dns/how-to-list-domains-with-dnssec/#list-domains)

* * *

[Output](https://docs.cpanel.net/knowledge-base/dns/how-to-list-domains-with-dnssec/#output)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/dns/how-to-list-domains-with-dnssec/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/dns/how-to-list-domains-with-dnssec/#overview)

* * *

[List domains](https://docs.cpanel.net/knowledge-base/dns/how-to-list-domains-with-dnssec/#list-domains)

* * *

[Output](https://docs.cpanel.net/knowledge-base/dns/how-to-list-domains-with-dnssec/#output)

* * *

## How to List Domains with DNSSEC

Last modified: _2024 February 19_

* * *

## Overview

This document describes how to list domains with DNS Security Extensions (DNSSEC) on a server.

## List domains

To list the domains with DNSSEC on a server, login to the server as the `root` user via SSH. Then, run the command:

```
pdnsutil list-secure-zones
```

### Output

The output will resemble the following example:

```
Aug 24 12:28:29 [bindbackend] Done parsing domains, 0 rejected, 443 new, 0 removed
example.com
All secure zonecount:1
```

Note:

`example.com` represents a domain on your server.

#### Additional Documentation

* * *

- [How to Configure Reverse DNS in WHM](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/)
- [How to Rotate a DNSSEC Key](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/)
- [The cleandns Script](https://docs.cpanel.net/whm/scripts/the-cleandns-script/)
- [The dnssec-cluster-keys Script](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/)
- [The enable\_spf\_dkim\_globally Script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×