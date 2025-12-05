---
url: "https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/"
title: "SSL/TLS Key Types | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#main-content)

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
4. SSL/TLS Key Types


[ssl](https://docs.cpanel.net/tags/ssl/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#overview)

* * *

[ECDSA keys versus RSA keys](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#ecdsa-keys-versus-rsa-keys)

* * *

[ECDSA](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#ecdsa)

* * *

[RSA](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#rsa)

* * *

[Key length differences](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#key-length-differences)

* * *

[Changing your default key type](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#changing-your-default-key-type)

* * *

[In WHM](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#in-whm)

* * *

[In cPanel](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#in-cpanel)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#overview)

* * *

[ECDSA keys versus RSA keys](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#ecdsa-keys-versus-rsa-keys)

* * *

[ECDSA](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#ecdsa)

* * *

[RSA](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#rsa)

* * *

[Key length differences](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#key-length-differences)

* * *

[Changing your default key type](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#changing-your-default-key-type)

* * *

[In WHM](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#in-whm)

* * *

[In cPanel](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#in-cpanel)

* * *

## SSL/TLS Key Types

_Valid for versions 92 through the latest version_

#### Version:

#### [92](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/)

Last modified: _2022 July 19_

* * *

## Overview

cPanel & WHM offers users the choice of a preferred key type for SSL/TLS. Currently, you can select from [RSA](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#rsa) keys or Elliptic Curve Digital Signature Algorithm ( [ECDSA](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#ecdsa)) keys for your [SSL/TLS](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl) needs. These keys are currently the two most widely-used and recognized algorithms for SSL/TLS public key signing.

When selecting a key type for your certificates, knowing which best serves your site’s security and performance needs is important.

## ECDSA keys versus RSA keys

There are several notable differences between ECDSA and RSA keys:

### ECDSA

In general, ECDSA keys are:

- [Smaller](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/#key-length-differences) than RSA keys of equivalent strength.
- Newer and not currently as widely-adopted as RSA keys.
- Faster than RSA for SSL/TLS signing and handshakes. This helps websites load faster.
- Supports [LiteSpeed Web Server (LSWS)](https://www.litespeedtech.com/products/litespeed-web-server) users that require support for Microsoft® Internet Explorer 11 (IE11) and Windows® 8.1.
- Endorsed by the [National Institute of Standards and Technology (NIST)](https://www.nist.gov/) and [National Security Agency (NSA)](https://www.nsa.gov/).

### RSA

In general, RSA keys are:

- Well-established and widely-recognized as the industry standard.
- Required by Certificate Authorities (CA) to be at **least** 2,048 bits in size.
- Capable of supporting many older systems and client software.
- RSA does **not** support PCI-compliant TLS for IE11 for LiteSpeed Web Servers.

### Key length differences

ECDSA keys are shorter in length than RSA keys in bit size, but can provide the same security levels as RSA keys. For example, a 224-bit ECDSA key provides comparable security to a 2,048-bit RSA key.

The following table compares both key types’ key length and strength, in bits:

| RSA key length | ECDSA key length |
| --- | --- |
| 1024 | 160 |
| 2048 | 224 |
| 3072 | 256 |
| 7680 | 384 |
| 15360 | 512 |

As illustrated above, ECDSA keys scale much better than RSA keys. This can help users with greater security needs effectively secure their servers for less overall size.

## Changing your default key type

You can modify your preferred key type in the following interfaces:

### In WHM

- The [_SSL/TLS Configuration_](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration) interface ( _WHM » Home » SSL/TLS » SSL/TLS Configuration_).
- The _Security_ section of the [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

### In cPanel

- The [_SSL/TLS_](https://docs.cpanel.net/cpanel/security/ssl-tls) interface ( _cPanel » Home » Security » SSL/TLS_).

#### Additional Documentation

* * *

- [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/)
- [How to Configure MySQL SSL Connections](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [SSL/TLS Status](https://docs.cpanel.net/cpanel/security/ssl-tls-status/)
- [SSL/TLS Wizard](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×