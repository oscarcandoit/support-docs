---
url: "https://docs.cpanel.net/knowledge-base/security/the-ssl-installation-and-precedence-logic/"
title: "The SSL Installation and Precedence Logic | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/the-ssl-installation-and-precedence-logic/#main-content)

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
3. [Security](https://docs.cpanel.net/knowledge-base/security/)
4. The SSL Installation and Precedence Logic


[apache](https://docs.cpanel.net/tags/apache/) [ssl](https://docs.cpanel.net/tags/ssl/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/the-ssl-installation-and-precedence-logic/#overview)

* * *

[Name-based and virtual host match](https://docs.cpanel.net/knowledge-base/security/the-ssl-installation-and-precedence-logic/#name-based-and-virtual-host-match)

* * *

[Service-default SSL certificates](https://docs.cpanel.net/knowledge-base/security/the-ssl-installation-and-precedence-logic/#service-default-ssl-certificates)

* * *

[Apache SSL certificates](https://docs.cpanel.net/knowledge-base/security/the-ssl-installation-and-precedence-logic/#apache-ssl-certificates)

* * *

[Troubleshooting SSL certificates](https://docs.cpanel.net/knowledge-base/security/the-ssl-installation-and-precedence-logic/#troubleshooting-ssl-certificates)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/the-ssl-installation-and-precedence-logic/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/the-ssl-installation-and-precedence-logic/#overview)

* * *

[Name-based and virtual host match](https://docs.cpanel.net/knowledge-base/security/the-ssl-installation-and-precedence-logic/#name-based-and-virtual-host-match)

* * *

[Service-default SSL certificates](https://docs.cpanel.net/knowledge-base/security/the-ssl-installation-and-precedence-logic/#service-default-ssl-certificates)

* * *

[Apache SSL certificates](https://docs.cpanel.net/knowledge-base/security/the-ssl-installation-and-precedence-logic/#apache-ssl-certificates)

* * *

[Troubleshooting SSL certificates](https://docs.cpanel.net/knowledge-base/security/the-ssl-installation-and-precedence-logic/#troubleshooting-ssl-certificates)

* * *

## The SSL Installation and Precedence Logic

Last modified: _2025 March 24_

* * *

## Overview

This document outlines how cPanel & WHM processes Secure Sockets Layer (SSL) certificate requests and how Apache processes SSL requests. We recommend this document for experienced systems administrators **only**.

Note:

- This document refers to other services’ domain-indexed SSL storage as [Domain TLS](https://docs.cpanel.net/knowledge-base/general-systems-administration/what-is-domain-tls/).
- To purchase and install an SSL certificate, follow the directions in our [Purchase and Install an SSL Certificate](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/) documentation.

## Name-based and virtual host match

Most SSL-enabled services that WebPros International, LLC deploys support simple name-based SSL. When a client requests an SSL certificate for a specific domain, the service performs one of the following actions:

- If the certificate exists, the service responds with a certificate that matches the requested domain.
- If no certificate exists, the the system uses the service’s default SSL certificate.

Note:

FTP is the **only** service that does not support name-based SSL.

## Service-default SSL certificates

Non-Apache services use default SSL certificates that administrators can manage via WHM. These services **only** serve the default SSL certificate to the client if no certificate in Domain TLS matches the client’s requested domain.

When the administrator installs a service-default SSL certificate, the system compares this certificate with the contents of Domain TLS. For each domain on the default certificate, the system installs that new certificate to Domain TLS. The system only performs this action if an SSL certificate with higher-grade identity assurance does **not** already exist on Domain TLS. This ensures that the system serves the highest-grade SSL certificate for each request for every non-Apache service.

## Apache SSL certificates

Apache does **not** follow this logic. When a client requests an SSL certificate for a specific domain, Apache performs the following actions:

1. It establishes the virtual host that hosts the domain.
2. It responds with the certificate for that virtual host.

Note:

Apache **cannot** match a certificate directly with a domain, and offers the virtual host’s certificate even if the certificate does **not** match the domain. Apache serves the same certificate for any request that matches a given virtual host. Because of this limitation, Apache’s domain-indexed SSL storage differs from that of the other services.


For simplicity, cPanel & WHM only exposes a single set of API functions to install and remove SSL certificates. When a user or administrator installs an SSL certificate, that installation only applies to a specific Apache virtual host. This behavior impacts both Apache **and** services that support name-based SSL. After the Apache installation finishes, the system copies the certificate to Domain TLS for each domain on the virtual host that matches the certificate.

- The system **only** copies the certificate to Domain TLS if the certificate passes OpenSSL’s validity check. This check occurs daily.
- The system removes certificates from Domain TLS if they fail validation or are set to expire within one day.
- Certificate removal follows the same pattern. The system removes Domain TLS entries for all domains on the virtual host that match the certificate.

## Troubleshooting SSL certificates

If you experience issues with your SSL certificates, use our [Troubleshoot SSL-Related Issues](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/) document to help solve those issues.

#### Additional Documentation

* * *

- [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/)
- [How to Configure MySQL SSL Connections](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [SSL/TLS Key Types](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/)
- [SSL/TLS Status](https://docs.cpanel.net/cpanel/security/ssl-tls-status/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×