---
url: "https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/"
title: "The Let's Encrypt Plugin | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/#main-content)

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
3. [Third Party](https://docs.cpanel.net/knowledge-base/third-party/)
4. The Let's Encrypt Plugin


[ssl](https://docs.cpanel.net/tags/ssl/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/#overview)

* * *

[Wildcard domains](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/#wildcard-domains)

* * *

[Recreate your registration](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/#recreate-your-registration)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/#overview)

* * *

[Wildcard domains](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/#wildcard-domains)

* * *

[Recreate your registration](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/#recreate-your-registration)

* * *

## The Let's Encrypt Plugin

_Valid for versions 118 through the latest version_

#### Version:

#### [108](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/108/)

#### [114](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/114/)

#### [118](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/)

Last modified: _2025 April 30_

* * *

## Overview

This plugin allows the AutoSSL feature to issue certificates from the [Let’s Encrypt™](https://letsencrypt.org/) provider, cPanel & WHM’s default AutoSSL provider. Let’s Encrypt allows you to secure [wildcard domains](https://en.wikipedia.org/wiki/Wildcard_DNS_record). Let’s Encrypt imposes [rate and domain limits](https://letsencrypt.org/docs/rate-limits). For more information, read our [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl) documentation.

Important:

- Let’s Encrypt provides all future SSL and Wildcard SSL certificates as your default provider. For more information on generating SSL certificates, read our [Generate an SSL Certificate and Signing Request](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/) documentation.
- The Common Name (CN) entry of an SSL certificate is cosmetic and does **not** affect the security of a certificate.
- An SSL certificate’s CN does **not** need to be the main domain. The certificate covers **all** domains listed in the certificate’s Subject Alternative Name (SAN) field. This includes subdomains, addon domains, and aliases.

### Wildcard domains

The Let’s Encrypt provider allows AutoSSL to use wildcard domains to reduce the number of domains included in each certificate. The certificate request will include a wildcard domain (`*.example.com`) if multiple subdomains are included. The request will also include any domains not covered by the wildcard domain such as third-level subdomains (`test.www.example.com`) or main domains (`example.com`).

The use of wildcard domains reduces the size of SSL certificates, which reduces the time of the [SSL/TLS handshake](https://docs.cpanel.net/knowledge-base/security/more-about-tls-and-ssl/) process. This also allows users to secure more domains without reaching [Let’s Encrypt’s domain limits](https://letsencrypt.org/docs/rate-limits/).

For example, your `example.com`, `www.example.com`, and `mail.example.com` domains share a website. The Let’s Encrypt provider lets AutoSSL acquire a certificate for only the `example.com` and `*.example.com` domains. When the issued certificate contains the `*.example.com` wildcard domain, that certificate also matches all first-level subdomains of `example.com`. In this example, this includes the `www.example.com` and `mail.example.com` domains.

#### Limitations

If you use the Let’s Encrypt plugin to issue certificates for wildcard domains, be aware that:

- This plugin cannot use HTTP DCV challenges to issue certificates for wildcard domains. This is because Let’s Encrypt does not support this type of challenge. For more information, read Let’s Encrypt’s [HTTP-01 challenge type](https://letsencrypt.org/docs/challenge-types/) documentation.

- You cannot use this plugin to obtain certificates for wildcard domains if you use third-party DNS hosting. You **must** host DNS on your local cPanel & WHM server or within the server’s DNS cluster.


## Recreate your registration

If your Let’s Encrypt registration is corrupted or expired, you may need to recreate your registration.

To recreate your registration, perform the following steps:

1. Navigate to WHM’s [_Manage AutoSSL_](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) ( _WHM » Home » SSL/TLS » Manage AutoSSL_) interface.

2. Select the _Let’s Encrypt™_ option for your AutoSSL provider.

3. Check the _Recreate my current registration with “Let’s Encrypt™”._ box after you accept the terms of service to recreate your provider registration.


This replaces your current registration with a new one. This is optional and **not** required to use the Let’s Encrypt provider.

#### Additional Documentation

* * *

- [Generate an SSL Certificate and Signing Request](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/)
- [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/)
- [How to Configure MySQL SSL Connections](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/)
- [How to Install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/)
- [How to Install WordPress® With cPanel](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×