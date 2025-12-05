---
url: "https://docs.cpanel.net/knowledge-base/security/more-about-tls-and-ssl/"
title: "More About TLS and SSL | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/more-about-tls-and-ssl/#main-content)

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
4. More About TLS and SSL


[ssl](https://docs.cpanel.net/tags/ssl/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/more-about-tls-and-ssl/#overview)

* * *

[TLS and SSL](https://docs.cpanel.net/knowledge-base/security/more-about-tls-and-ssl/#tls-and-ssl)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/more-about-tls-and-ssl/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/more-about-tls-and-ssl/#overview)

* * *

[TLS and SSL](https://docs.cpanel.net/knowledge-base/security/more-about-tls-and-ssl/#tls-and-ssl)

* * *

## More About TLS and SSL

Last modified: _2023 March 27_

* * *

## Overview

This document explains the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols and how servers use them.

Important:

cPanel & WHM supports [Transport Layer Security (TLS) protocol version 1.2](https://tools.ietf.org/html/rfc5246) and [Transport Layer Security (TLS) protocol version 1.3](https://tools.ietf.org/html/rfc8446):

- Beginning in cPanel and WHM version 86, cPanel & WHM **only** supports TLSv1.2 or later. The system also enables TLSv1.2 by default.
- In cPanel and WHM version 84 or earlier, cPanel & WHM **strongly** recommends that you enable TLSv1.2 on your server.
- Not all internet browsers or clients will support TLSv1.3, which requires OpenSSL 1.1.1 or higher.

## TLS and SSL

TLS and SSL are two cryptographic protocols that clients and servers use for secure communication over the internet. Systems frequently use them for email and web browsing.

Both of these protocols initiate a “handshake,” during which your server and the user’s computer agree upon specific conditions. These conditions include, most importantly, a set of public and private keys that they will use to encrypt and decrypt messages during the secure session.

As a web server, your server will identify itself with a certificate when it receives a secure request from a user. These certificates are either self-signed or verified through a certificate authority (CA).

Servers generate and sign their own self-signed certificates. We do not recommend self-signed certificates because they do not use a third-party verification system, and any server can spoof your server. To remedy this issue, we recommend that you use a certificate that you obtain through a CA. The CA verifies the identity of your server to secure user requests.

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