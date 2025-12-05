---
url: "https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/"
title: "Manage SSL Hosts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/#main-content)

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
3. [SSL-TLS](https://docs.cpanel.net/whm/ssl-tls/)
4. Manage SSL Hosts


[security](https://docs.cpanel.net/tags/security/) [ssl](https://docs.cpanel.net/tags/ssl/) [domains](https://docs.cpanel.net/tags/domains/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/#overview)

* * *

[Installed SSL Hosts](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/#installed-ssl-hosts)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/#overview)

* * *

[Installed SSL Hosts](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/#installed-ssl-hosts)

* * *

## Manage SSL Hosts

![](https://docs.cpanel.net/img/whm-icons/manage_ssl_hosts.svg)

_Valid for versions 92 through the latest version_

#### Version:

#### [92](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Manage SSL Hosts_ interface allows you to manage your installed SSL certificates.

Note:

If the interface does not list any certificates, you **must** create and install a new SSL certificate. To create and install a new SSL certificate, use WHM’s [_Generate an SSL Certificate and Signing Request_](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request) interface ( _WHM » Home » SSL/TLS » Generate an SSL Certificate and Signing Request_) and WHM’s [_Install an SSL Certificate on a Domain_](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain) interface ( _WHM » Home » SSL/TLS » Install a SSL Certificate on a Domain_).

## Installed SSL Hosts

Important:

When you disable `httpd` services, the system disables the _IP Address_, _IP Address Type_, _Is Primary Website on IP Address?_, and _Is SNI Required?_ columns.

The Installed SSL Hosts table displays the virtual web hosts with installed SSL certificates as well as each domain’s information:

- _Expires_ — The certificate’s expiration date.







Note:





Expired certificates display a warning (![Warning](https://docs.cpanel.net/img/warningicon.png)) icon.

- _Key Type_ — The key’s algorithm and strength. For example, if the key’s algorithm is [RSA](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#rsa), this column displays the key’s modulus length.

- _Actions_ — Select one of the following actions:
  - _Delete_ — Click this link to delete the certificate.
  - _Make Primary_ — Click this link to make the website the main domain on the shared IP address.






    Important:





    When you disable `httpd` services, this option is **unavailable**.
- _Domains_ — The domain or domains that use the certificate. To verify that an SSL certificate secures a particular domain, click the domain name. Each domain or subdomain displays either a red or green lock icon:
  - (![Red Lock](https://docs.cpanel.net/img/managesslhostsredlock.png)) — Indicates that the SSL certificate does **not** secure this domain.
  - (![Green Lock](https://docs.cpanel.net/img/managesslhostsgreenlock.png)) — Indicates that the SSL certificate secures this domain.
- _IP Address_ — The IP address of the SSL virtual host.

- _IP Address Type_ — The type of IP address, either:
  - `dedicated` — Only one user is assigned to this IP address.
  - `shared` — Multiple users are assigned to this IP address.
- _Is Primary Website on IP Address?_ — Whether the website is the IP address’s designated primary website for HTTPS.

- _Is SNI Required?_ — Whether validated access to the SSL website requires [Server Name Indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication). Most SSL websites that are **not** primary websites on an IP address **require** SNI.







Important:





The system does **not** update SNI for accounts without a corresponding email address.

- _Document Root_ — The directory that contains the site’s content.

- _Owner_ — The cPanel account that owns the website.

- _Issuer_ — The certificate’s creation organization. If your domain uses a self-signed certificate, this column displays _Self Signed_ and a notice (![Notice](https://docs.cpanel.net/img/managesslhostsyellowtriangle.png)) icon.


#### Additional Documentation

* * *

- [Generate an SSL Certificate and Signing Request](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/)
- [Install an SSL Certificate on a Domain](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/)
- [Manage AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/)
- [Purchase and Install an SSL Certificate](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/)
- [SSL/TLS Configuration](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×