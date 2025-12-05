---
url: "https://docs.cpanel.net/whm/dns-functions/park-a-domain/90/"
title: "Park a Domain | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/dns-functions/park-a-domain/90/#main-content)

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
4. Park a Domain


[whmui](https://docs.cpanel.net/tags/whmui/) [domains](https://docs.cpanel.net/tags/domains/) [aliases](https://docs.cpanel.net/tags/aliases/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/dns-functions/park-a-domain/90/#overview)

* * *

[Add a parked domain](https://docs.cpanel.net/whm/dns-functions/park-a-domain/90/#add-a-parked-domain)

* * *

[Secure a parked domain](https://docs.cpanel.net/whm/dns-functions/park-a-domain/90/#secure-a-parked-domain)

* * *

[Troubleshoot DNS errors](https://docs.cpanel.net/whm/dns-functions/park-a-domain/90/#troubleshoot-dns-errors)

* * *

[Disallow parked domains on a domain](https://docs.cpanel.net/whm/dns-functions/park-a-domain/90/#disallow-parked-domains-on-a-domain)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/dns-functions/park-a-domain/90/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/dns-functions/park-a-domain/90/#overview)

* * *

[Add a parked domain](https://docs.cpanel.net/whm/dns-functions/park-a-domain/90/#add-a-parked-domain)

* * *

[Secure a parked domain](https://docs.cpanel.net/whm/dns-functions/park-a-domain/90/#secure-a-parked-domain)

* * *

[Troubleshoot DNS errors](https://docs.cpanel.net/whm/dns-functions/park-a-domain/90/#troubleshoot-dns-errors)

* * *

[Disallow parked domains on a domain](https://docs.cpanel.net/whm/dns-functions/park-a-domain/90/#disallow-parked-domains-on-a-domain)

* * *

## Park a Domain

![](https://docs.cpanel.net/img/whm-icons/park_a_domain.svg)

_Valid for versions 90 through 128_

#### Version:

#### [90](https://docs.cpanel.net/whm/dns-functions/park-a-domain/90/)

#### [130](https://docs.cpanel.net/whm/dns-functions/park-a-domain/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Parked domains (or [_aliases_](https://docs.cpanel.net/cpanel/domains/domains) in the cPanel interface) are secondary domains that points to the user’s primary domain. If users visit the parked domain’s website, the primary website appears.

For example, `cpanel.com` is a parked domain that points to `http://www.cpanel.net/`. When you access `http://www.cpanel.com`, your browser returns the `http://www.cpanel.net` website.

## Add a parked domain

To add a parked domain, first [register](http://wikipedia.org/wiki/Domain_name_registrar) it, then perform the following steps:

1. In the _Domain to park_ text box, enter the domain name that you wish to park.
2. Select the domain that you wish to park on top of from the _Domain to park on top of_ menu.
3. Click _Park_.

## Secure a parked domain

When you create an addon domain, parked domain, subdomain, or main domain, the system will attempt to automatically secure that domain with the best-available existing [certificate](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/#ssl-certificates). If no certificate exists, the system will create a self-signed certificate to secure the new domain. You can update this SSL certificate [at any time](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/).

If you have enabled [AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/) for the account that owns the new domain, the system will submit a request for an AutoSSL certificate. The system will install the certificate when it is available.

## Troubleshoot DNS errors

If your registered domain’s DNS zone file contains errors, you may receive the following message: _Could not determine the nameserver IP addresses for “subdomain.example.com”. Please make sure that the domain is registered with a valid domain registrar._ If you see this message, the system has **not** added your parked domain.

Use WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/) interface ( _WHM » Home » DNS Functions » DNS Zone Manager_) to check your DNS zone records and correct any errors, then [add the parked domain again](https://docs.cpanel.net/whm/dns-functions/park-a-domain/90/#add-a-parked-domain).

## Disallow parked domains on a domain

If you do not want users to park domains on a specific protected domain, add the domain to the `/usr/local/cpanel/etc/commondomains` file.

#### Additional Documentation

* * *

- [Convert Addon Domain to Account](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/)
- [List Parked Domains](https://docs.cpanel.net/whm/account-information/list-parked-domains/)
- [List Subdomains](https://docs.cpanel.net/whm/account-information/list-subdomains/)
- [Park a Domain](https://docs.cpanel.net/whm/dns-functions/park-a-domain/)
- [Setup/Edit Domain Forwarding](https://docs.cpanel.net/whm/dns-functions/setup-edit-domain-forwarding/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×