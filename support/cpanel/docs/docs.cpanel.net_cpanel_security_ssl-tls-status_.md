---
url: "https://docs.cpanel.net/cpanel/security/ssl-tls-status/"
title: "SSL/TLS Status | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/security/ssl-tls-status/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Security](https://docs.cpanel.net/cpanel/security/)
4. SSL/TLS Status


[ssl](https://docs.cpanel.net/tags/ssl/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/security/ssl-tls-status/#overview)

* * *

[Purchase certificates banner](https://docs.cpanel.net/cpanel/security/ssl-tls-status/#purchase-certificates-banner)

* * *

[Search and filter](https://docs.cpanel.net/cpanel/security/ssl-tls-status/#search-and-filter)

* * *

[AutoSSL selection](https://docs.cpanel.net/cpanel/security/ssl-tls-status/#autossl-selection)

* * *

[The Domains table](https://docs.cpanel.net/cpanel/security/ssl-tls-status/#the-domains-table)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/security/ssl-tls-status/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/security/ssl-tls-status/#overview)

* * *

[Purchase certificates banner](https://docs.cpanel.net/cpanel/security/ssl-tls-status/#purchase-certificates-banner)

* * *

[Search and filter](https://docs.cpanel.net/cpanel/security/ssl-tls-status/#search-and-filter)

* * *

[AutoSSL selection](https://docs.cpanel.net/cpanel/security/ssl-tls-status/#autossl-selection)

* * *

[The Domains table](https://docs.cpanel.net/cpanel/security/ssl-tls-status/#the-domains-table)

* * *

## SSL/TLS Status

![](https://docs.cpanel.net/img/cpanel-icons/tls_status.svg)

_Valid for versions 92 through the latest version_

#### Version:

#### [92](https://docs.cpanel.net/cpanel/security/ssl-tls-status/)

Last modified: _2025 June 6_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface lets you view, upgrade, or renew your domains’ Secure Sockets Layer (SSL) certificates. You can also view a domain’s certificate details.

Warning:

- cPanel & WHM supports [Transport Layer Security (TLS) protocol version 1.2](https://tools.ietf.org/html/rfc5246) and [Transport Layer Security (TLS) protocol version 1.3](https://tools.ietf.org/html/rfc8446):
  - cPanel & WHM only supports TLSv1.2 or later. The system enables TLSv1.2 by default.
  - Not all clients will support TLSv1.3, which requires OpenSSL 1.1.1 or higher.
- If you are using [AutoSSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/) or [SSL certificates purchased via your cPanel account](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/) to secure a [linked mail node](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/), your cPanel & WHM nodes **must** be able to manage the authoritative DNS server.


For more information about how SSL/TLS verifies server identities to protect your websites, read our [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl).

#### CAA records in zone files

Certificate Authority Authentication (CAA) records in a domain’s zone file restrict which Certificate Authorities (CA) may issue certificates for that domain.

- If no CAA records exist for a domain, **all** CAs can issue certificates for that domain.

- If conflicting CAA records exist, remove the existing CAA records or add one for the desired CA.


You can manage your CAA records in the [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor) interface ( _cPanel » Home » Domains » Zone Editor_). For more information about a CA’s requirements, read their documentation.

## Purchase certificates banner

The banner at the top of the interface lets you to perform the following actions:

- _Purchase Certificates_ — When you select this setting, the system directs you to the [_SSL/TLS Wizard_](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard) interface ( _cPanel » Home » Security » SSL/TLS Wizard_).

- _Show Unsecured Domains_ — The system filters the list of domains in the [_Domains_ table](https://docs.cpanel.net/cpanel/security/ssl-tls-status/#the-domains-table) to only display unsecured domains.







Warning:





We **strongly** recommend that you secure all of the domains that your visitors may view.


## Search and filter

The _Search_ text box lets you filter the [_Domains_ table](https://docs.cpanel.net/cpanel/security/ssl-tls-status/#the-domains-table) by a domain name.

- Enter all or part of a domain name to update the table.
- Click the filter icon (![Gear icon](https://docs.cpanel.net/img/filter.png)) to display all available filter settings.

You can select from the following filters:

#### Domain Types

- _All_ — Display all domains, regardless of type. This is the default search filter.
- _Main_ — Display main domains. For example:

  - `example.com`
  - `www.example.com`
- _Subdomain_ — Display subdomains. For example:

  - `store.example.com`
  - `www.store.example.com`
- _Addon Domains_ — Display addon domains. For example:

  - `addon.com`
  - `www.addon.com`
- _Parked Domains_ — Display parked domains. For example:

  - `parked.com`
  - `www.parked.com`
- _www and mail domain_ — Display `www` and `mail` subdomains. For example:

  - `www.example.com`
  - `mail.example.com`
- _Service subdomains_ — Display [service subdomains](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains). For example:

  - `cpanel.example.com`
  - `whm.example.com`
  - `webmail.example.com`
  - `webdisk.example.com`
- _DDNS Domains_ — Display [dynamic DNS domains](https://docs.cpanel.net/cpanel/domains/dynamic-dns). For example:

  - `home.example.com`
  - `office.example.com`

#### SSL Types

- _All_ — Display all domains, regardless of the certificate type. This is the default search filter.
- _Unsecured_ — Display domains do not have a certificate.
- _Self-Signed_ — Display domains that you have secured with a self-signed certificate. **No** CAs secure self-signed certificates.
- _AutoSSL DV Certificate_ — Display domains that you have secured with an [AutoSSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/#autossl)-issued [Domain-Validated (DV) certificate](https://en.wikipedia.org/wiki/Domain-validated_certificate).
- _DV Certificate_ — Display domains that you have secured with a DV certificate.
- _OV Certificate_ — Display domains that you have secured with an [Organizational Validation (OV) certificate](https://en.wikipedia.org/wiki/Public_key_certificate#Organization_validation).
- _EV Certificate_ — Display domains that you have secured with an [Extended Validation (EV)](https://en.wikipedia.org/wiki/Extended_Validation_Certificate) certificate.

#### SSL Statuses

- _All_ — Display all domains, regardless of certificate status. This is the default search filter.
- _Active_ — Display domains that you have secured by active certificates.
- _Expired_ — Display domains with an expired certificate.
- _Expiring Soon_ — Display domains whose certificates will expire soon.
- _Unsecured_ — Display domains that do not have a certificate.
- _Has AutoSSL Problems_ — Display domains with AutoSSL problems. For example, display a domain that does not resolve to an IPv4 address on the internet.

#### AutoSSL Statuses

- _All_ — Display all domains, regardless of AutoSSL status. This is the default search filter.
- _Included_ — Display domains that AutoSSL includes when it runs.
- _Excluded_ — Display domains that AutoSSL does not include when it runs.

## AutoSSL selection

To control whether AutoSSL includes an individual domain, select one of the following settings:

- _Include during AutoSSL_ — Select the checkbox of each domain to include when AutoSSL runs, then click _Include during AutoSSL_.
- _Exclude during AutoSSL_ — Select the checkbox of each domain to exclude when AutoSSL runs, then click _Exclude during AutoSSL_.
- _Run AutoSSL_ — Force the system to perform an immediate AutoSSL run. The system will display the _AutoSSL is in progress …_ message for the duration of the run. The _SSL/TLS Status_ interface will reload when AutoSSL completes its run.






Note:





You may see the _AutoSSL is in progress …_ message if you load this interface and an AutoSSL run is currently in progress.


## The Domains table

The _Domains_ table lists your domains and their certificates. You can use the table to view or upgrade a domain’s certificate. This table displays the following information:

#### Domain

This column displays a complete or filtered list of all domains on the cPanel account. The column will also display an icon that represents the following certificates:

- ![Usecured certificate icon](https://docs.cpanel.net/img/cert-unsecure.png) — _Unsecured_

- ![Self-signed certificate icon](https://docs.cpanel.net/img/cert-ss.png) — _Self-Signed_

- ![AutoSSL DV certificate icon](https://docs.cpanel.net/img/cert-adv.png) — _AutoSSL DV certficiate_

- ![DV certificate icon](https://docs.cpanel.net/img/cert-dv.png) — _DV certificate_

- ![OV certificate icon](https://docs.cpanel.net/img/cert-ov.png) — _OV certificate_

- ![EV certificate icon](https://docs.cpanel.net/img/cert-ev.png) — _EV certificate_


#### Certificate Status

This column displays a domain’s certificate information. If an error exists for the domain in the `/var/cpanel/logs/autossl/` directory, the system displays that error in this column. The column also displays the last time the system ran AutoSSL for the domain. You can also select from the following settings:

- _View Certificate_ — View the domain’s certificate. The system will direct you to the _Install and Manage SSL for your site (HTTPS)_ section of the [_SSL/TLS_](https://docs.cpanel.net/cpanel/security/ssl-tls) interface ( _cPanel » Home » Security » SSL/TLS_).






Note:





This setting is only available for domains with a certificate.

- _Upgrade Certificate_ or _Purchase Certificate_ — Upgrade or purchase a certificate for the domain. The system will direct you to the [_SSL/TLS Wizard_](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard) interface ( _cPanel » Home » Security » SSL/TLS Wizard_). This interface displays the domain and the available types of certificates.






Note:





These settings are only available for applicable domains.

- _Include during AutoSSL_ or _Exclude from AutoSSL_ — Include or exclude [AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) from this domain.






Note:





If you have installed a non-AutoSSL certificate and haven’t configured AutoSSL to use that certificate, you will not see these settings.


#### Additional Documentation

* * *

- [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/)
- [Hotlink Protection](https://docs.cpanel.net/cpanel/security/hotlink-protection/)
- [How to Configure MySQL SSL Connections](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [SSL/TLS Wizard](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×