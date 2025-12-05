---
url: "https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/"
title: "How to Update Ciphers and TLS Protocols | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#main-content)

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
4. How to Update Ciphers and TLS Protocols


[encryption](https://docs.cpanel.net/tags/encryption/) [openssl](https://docs.cpanel.net/tags/openssl/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#overview)

* * *

[About OpenSSL](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#about-openssl)

* * *

[Cipher settings](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#cipher-settings)

* * *

[Configure service ciphers and protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#configure-service-ciphers-and-protocols)

* * *

[cPanel, WHM, and Webmail](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#cpanel-whm-and-webmail)

* * *

[Web Disk](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#web-disk)

* * *

[Dovecot](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#dovecot)

* * *

[Apache](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#apache)

* * *

[Exim](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#exim)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#overview)

* * *

[About OpenSSL](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#about-openssl)

* * *

[Cipher settings](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#cipher-settings)

* * *

[Configure service ciphers and protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#configure-service-ciphers-and-protocols)

* * *

[cPanel, WHM, and Webmail](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#cpanel-whm-and-webmail)

* * *

[Web Disk](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#web-disk)

* * *

[Dovecot](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#dovecot)

* * *

[Apache](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#apache)

* * *

[Exim](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/#exim)

* * *

## How to Update Ciphers and TLS Protocols

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/)

Last modified: _2023 March 27_

* * *

## Overview

Most cPanel & WHM-managed services use OpenSSL to provide secure connections between client software and the server. This document lists the interfaces in cPanel & WHM in which you can adjust OpenSSL’s protocols and cipher stacks for those services.

## About OpenSSL

Note:

cPanel & WHM uses the base operating system-provided version of OpenSSL.

OpenSSL defaults to settings that maximize compatibility at the expense of security. OpenSSL allows two primary settings: ciphers and protocols.

- A cipher refers to a specific encryption algorithm. This setting allows the user to enable or disable ciphers individually or by category.
- A protocol refers to the way in which the system uses ciphers. This setting allows the user to enable or disable individual protocols or categories of protocols.

Most attacks against SSL modify data as it travels between the client and the server in order to target weaknesses in specific ciphers. For example, the POODLE attack ( [CVE-2014-3566](https://nvd.nist.gov/vuln/detail/CVE-2014-3566)) targets weaknesses in the SSLv3 protocol.

## Cipher settings

Important:

- cPanel & WHM supports [Transport Layer Security (TLS) protocol version 1.2](https://tools.ietf.org/html/rfc5246) and [Transport Layer Security (TLS) protocol version 1.3](https://tools.ietf.org/html/rfc8446):
  - Beginning in cPanel and WHM version 86, cPanel & WHM **only** supports TLSv1.2 or later. The system also enables TLSv1.2 by default.
  - Not all internet browsers or clients will support TLSv1.3, which requires OpenSSL 1.1.1 or higher.
- We **strongly** recommend that you do **not** adjust the cipher and protocol settings for the Exim and Dovecot services if you use Windows® 7 or MacOS® version 10.8 and earlier. Servers on these operating system fail PCI compliance scans because of unpatched security vulnerabilities that exist in the following mail clients:
  - Outlook® 2007
  - Outlook 2010
  - MacMail®

You can find cPanel & WHM’s default cipher settings and SSL protocols in WHM’s [_cPanel Web Services Configuration_](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/) interface ( _WHM » Home » Service Configuration » cPanel Web Services Configuration_). If your configuration cannot use the default settings for the SSL protocol and cipher lists, you can override them on a service-by-service basis.

## Configure service ciphers and protocols

The following section lists the interfaces and options in cPanel & WHM that allow you to configure the protocol and cipher lists for services that use OpenSSL. For information about a specific service, read our [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) documentation.

Note:

Some services use the string `SSLv23` to represent what other services call `ALL` for the protocol list. The example settings below demonstrate this difference on a service-by-service basis.

### cPanel, WHM, and Webmail

You can configure the cPanel, WHM, and Webmail interfaces’ (`cpsrvd`) service cipher and protocols lists with WHM’s [_cPanel Web Services Configuration_](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration) interface ( _WHM » Home » Service Configuration » cPanel Web Services Configuration_).

This interface uses the `SSLv23:!SSLv2:!SSLv3:!TLSv1:!TLSv1_1` style protocol syntax.

### Web Disk

You can configure the [Web Disk](https://docs.cpanel.net/cpanel/files/web-disk/) service (`cpdavd`) cipher and protocol lists with WHM’s [_cPanel Web Disk Configuration_](https://docs.cpanel.net/whm/service-configuration/cpanel-web-disk-configuration) interface ( _WHM » Home » Service Configuration » cPanel Web Disk Configuration_).

This interface uses the `SSLv23:!SSLv2:!SSLv3:!TLSv1:!TLSv1_1` style protocol syntax.

### Dovecot

You can configure the Dovecot mail service (`imap` and `pop3`) cipher and protocol lists with WHM’s [_Mailserver Configuration_](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration) interface ( _WHM » Home » Service Configuration » Mailserver Configuration_).

For protocols, this interface accepts a string that implies `ALL` by default. For example, the `!SSLv2 !SSLv3` string.

### Apache

You can configure the Apache® web service (`httpd`) cipher and protocol WHM’s [_Global Configuration_](https://docs.cpanel.net/whm/service-configuration/global-configuration) interface ( _WHM » Home » Service Configuration » Apache Configuration » Global Configuration_).

This interface accepts a protocol that resembles the `All -SSLv2 -SSLv3` string.

Note:

If the selected SSL protocol or the version of OpenSSL that EasyApache 4 uses does **not** support a cipher, the system will display an error message.

### Exim

You can configure the Exim service (`exim`) cipher and protocol lists with the _Basic Editor_ section of the [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager#basic-editor) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).

- For ciphers, use the _SSL/TLS Cipher Suite List_ text box.
- For protocols, use the _Options for OpenSSL_ text box. The protocol list accepts Exim-specific settings. For example, `+no_sslv2 +no_sslv3`.

#### Additional Documentation

* * *

- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [Security Policy](https://docs.cpanel.net/cpanel/security/security-policy/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [SSL/TLS Wizard](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×