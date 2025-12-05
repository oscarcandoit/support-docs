---
url: "https://docs.cpanel.net/knowledge-base/dns/the-alias-dns-record/"
title: "The ALIAS DNS Record | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/dns/the-alias-dns-record/#main-content)

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
4. The ALIAS DNS Record


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/dns/the-alias-dns-record/#overview)

* * *

[About the ALIAS DNS record](https://docs.cpanel.net/knowledge-base/dns/the-alias-dns-record/#about-the-alias-dns-record)

* * *

[Enable access to the ALIAS DNS record](https://docs.cpanel.net/knowledge-base/dns/the-alias-dns-record/#enable-access-to-the-alias-dns-record)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/dns/the-alias-dns-record/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/dns/the-alias-dns-record/#overview)

* * *

[About the ALIAS DNS record](https://docs.cpanel.net/knowledge-base/dns/the-alias-dns-record/#about-the-alias-dns-record)

* * *

[Enable access to the ALIAS DNS record](https://docs.cpanel.net/knowledge-base/dns/the-alias-dns-record/#enable-access-to-the-alias-dns-record)

* * *

## The ALIAS DNS Record

Last modified: _2024 June 20_

* * *

## Overview

You can use the ALIAS DNS record to resolve a domain name to the IP addresses of a different fully qualified domain name (FQDN).

Warning:

- We strongly recommend that you do **not** use this function. Using the ALIAS DNS record may result in unexpected behavior, including website downtimes outside of your control, inconsistency in the handling of the record, and security vulnerabilities.
- This record is only available if you [enable access](https://docs.cpanel.net/knowledge-base/dns/the-alias-dns-record/#enable-access-to-the-alias-dns-record) to it and use [PowerDNS](https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns/).

## About the ALIAS DNS record

ALIAS DNS records are often used to point a domain name to an external service, such as an SaaS provider or front-end load balancer.

This usage is not recommended for a variety of reasons. This record is **not** RFC-compliant. For example, if the external site your alias points changes its IP address, your site will be inaccessible. Also, usage is not standardized between different implementations of this record. As a result, existing A or AAAA records may also conflict with your ALIAS record, or they may work correctly. They can also cause security issues and break DNSSEC calls. Because this record is not based off of an RFC, its behavior is not consistent between providers and it may also lose support without warning.

## Enable access to the ALIAS DNS record

To enable access to the ALIAS DNS record, your system administrator must run the following command as the `root` user to create the touch file:

```bash
touch /etc/pdns/danger-danger-danger-server-owners-understand-the-severe-risk-and-accept-responsibility-for-any-consequences-of-using-experimental-alias-records
```

You must also add the following entry to the `/etc/pdns/pdns.conf` file, where `192.0.2.3` is your domain’s resolver address or addresses:

```bash
expand-alias=yes
resolver=192.0.2.3
```

Then, restart PowerDNS with the following command:

```bash
/scripts/restartsrv_pdns
```

This will enable access to the ALIAS DNS record in WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager) interface ( _WHM » Home » DNS Functions » DNS Zone Manager_).

To enable access for the ALIAS DNS record for cPanel users, the system administrator must also add the _Zone Editor (AAAA, CAA, SRV, TXT)_ feature to the user’s feature list in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM » Home » Packages » Feature Manager_).

To see if ALIAS records are enabled on your server, use WHM API 1’s `is_alias_available` function.

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