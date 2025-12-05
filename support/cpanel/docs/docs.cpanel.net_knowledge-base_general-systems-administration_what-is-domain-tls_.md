---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/what-is-domain-tls/"
title: "What is Domain TLS? | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/what-is-domain-tls/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. What is Domain TLS?


[sni](https://docs.cpanel.net/tags/sni/) [ssl](https://docs.cpanel.net/tags/ssl/) [domains](https://docs.cpanel.net/tags/domains/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/what-is-domain-tls/#overview)

* * *

[How Domain TLS works](https://docs.cpanel.net/knowledge-base/general-systems-administration/what-is-domain-tls/#how-domain-tls-works)

* * *

[Difference with Apache SSL certificate storage](https://docs.cpanel.net/knowledge-base/general-systems-administration/what-is-domain-tls/#difference-with-apache-ssl-certificate-storage)

* * *

[Certificate maintenance](https://docs.cpanel.net/knowledge-base/general-systems-administration/what-is-domain-tls/#certificate-maintenance)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/what-is-domain-tls/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/what-is-domain-tls/#overview)

* * *

[How Domain TLS works](https://docs.cpanel.net/knowledge-base/general-systems-administration/what-is-domain-tls/#how-domain-tls-works)

* * *

[Difference with Apache SSL certificate storage](https://docs.cpanel.net/knowledge-base/general-systems-administration/what-is-domain-tls/#difference-with-apache-ssl-certificate-storage)

* * *

[Certificate maintenance](https://docs.cpanel.net/knowledge-base/general-systems-administration/what-is-domain-tls/#certificate-maintenance)

* * *

## What is Domain TLS?

Last modified: _2024 February 20_

* * *

## Overview

The Domain TLS system stores and manages the server’s verified certificates in a domain-indexed repository. This system also allows faster and more efficient management of SNI services for a user’s domains. The system performs the following actions:

- Looks up the domain.
- Finds the necessary certificate.
- Retrieves that certificate, key, and CA bundle for that domain name.

Important:

cPanel & WHM supports [Transport Layer Security (TLS) protocol version 1.2](https://tools.ietf.org/html/rfc5246) and [Transport Layer Security (TLS) protocol version 1.3](https://tools.ietf.org/html/rfc8446):

- cPanel & WHM **only** supports TLSv1.2 or later. The system also enables TLSv1.2 by default.
- Not all internet browsers or clients will support TLSv1.3, which requires OpenSSL 1.1.1 or higher.
- This feature stores and manages **only** the server’s verified certificates.

## How Domain TLS works

When you install a certificate for Apache, the system also copies the certificate into the Domain TLS for each domain of the Apache virtual host that the certificate secures. If the certificate secures an Apache virtual host with five domains, Domain TLS contains five copies of the certificate.

Domain TLS handles SNI functionality for the following services:

- `cpsrvd` — cPanel, WHM, and Webmail logins and interfaces.
- `cpdavd` — Calendar, Contacts, and Web Disk services.
- `exim` — Mail transfer and receiving services.
- `dovecot` — Mailbox service.

## Difference with Apache SSL certificate storage

Apache’s SSL certificate storage groups domains into virtual hosts, which the cPanel interface refers to as websites.

Domain TLS uses the domain name as a key and the certificate the domain uses as a value.

Also, most of cPanel & WHM classifies the `www.` subdomain as functionally equivalent to its parent domain. For example, the cPanel Store issues certificates for `example.com` that automatically include the `www.example.com` subdomain. Because TLS classifies every domain as a separate entity, Domain TLS classifies the `www.` subdomain and parent domain as separate items. This action causes Domain TLS to store each as a separate entry on the index.

Finally, Domain TLS does not contain any expired or invalid certificates that the Apache SSL certificate storage contains.

## Certificate maintenance

Domain TLS does **not** copy expired or invalid certificates from Apache’s SSL storage. As you install, manage, and delete certificates through cPanel & WHM user interfaces or API calls, the system automatically performs the necessary updates to the Domain TLS index and certificate storage.

We do not currently provide a user interface to manage Domain TLS. However, as more services use this feature for SNI, we may investigate the need for and value of such an interface.

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Install an SSL Certificate on a Domain](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/)
- [Manage SSL Hosts](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×