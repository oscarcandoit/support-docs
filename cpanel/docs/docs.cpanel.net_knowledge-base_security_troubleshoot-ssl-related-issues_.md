---
url: "https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/"
title: "Troubleshoot SSL-Related Issues | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#main-content)

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
4. Troubleshoot SSL-Related Issues


[ssl](https://docs.cpanel.net/tags/ssl/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#overview)

* * *

[Installation issues](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#installation-issues)

* * *

[Certificate and key mismatch](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#certificate-and-key-mismatch)

* * *

[Dedicated IP addresses](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#dedicated-ip-addresses)

* * *

[Warnings](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#warnings)

* * *

[Certificate mismatch warnings](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#certificate-mismatch-warnings)

* * *

[Domain mismatch warnings](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#domain-mismatch-warnings)

* * *

[Self-signed certificates](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#self-signed-certificates)

* * *

[Other issues](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#other-issues)

* * *

[Visitors cannot access other sites on a shared certificate](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#visitors-cannot-access-other-sites-on-a-shared-certificate)

* * *

[System failures](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#system-failures)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#overview)

* * *

[Installation issues](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#installation-issues)

* * *

[Certificate and key mismatch](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#certificate-and-key-mismatch)

* * *

[Dedicated IP addresses](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#dedicated-ip-addresses)

* * *

[Warnings](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#warnings)

* * *

[Certificate mismatch warnings](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#certificate-mismatch-warnings)

* * *

[Domain mismatch warnings](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#domain-mismatch-warnings)

* * *

[Self-signed certificates](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#self-signed-certificates)

* * *

[Other issues](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#other-issues)

* * *

[Visitors cannot access other sites on a shared certificate](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#visitors-cannot-access-other-sites-on-a-shared-certificate)

* * *

[System failures](https://docs.cpanel.net/knowledge-base/security/troubleshoot-ssl-related-issues/#system-failures)

* * *

## Troubleshoot SSL-Related Issues

Last modified: _2025 March 24_

* * *

## Overview

This document outlines some common SSL-related issues and how you can troubleshoot and resolve them. For more information about SSL, read our [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl) documentation.

Important:

cPanel & WHM supports [Transport Layer Security (TLS) protocol version 1.2](https://tools.ietf.org/html/rfc5246) and [Transport Layer Security (TLS) protocol version 1.3](https://tools.ietf.org/html/rfc8446):

- Beginning in cPanel and WHM version 86, cPanel & WHM **only** supports TLSv1.2 or later. The system also enables TLSv1.2 by default.
- In cPanel and WHM version 84 or earlier, cPanel & WHM **strongly** recommends that you enable TLSv1.2 on your server.
- Not all internet browsers or clients will support TLSv1.3, which requires OpenSSL 1.1.1 or higher.

## Installation issues

The following sections describe some common certificate installation issues and how to fix them:

### Certificate and key mismatch

If your SSL certificate and key did not pair correctly, Apache **cannot** start with SSL enabled. To check whether they paired correctly, run the following commands, where `filename` represents the certificate name:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>openssl x509 -noout -in filename.crt<br>openssl rsa -noout -text -in filename.key<br>``` |

If the modulus number and exponent that each file returns match, the certificate and key paired correctly.

If you receive the `modulus mismatch` or `key file does not match the certificate` error messages, the private key that you entered did not generate the certificate that you wished to install. The correct private key may exist in a different file.

WHM may automatically complete the _Private Key_ text box when you attempt to install a certificate. To properly install the certificate, paste the private key in the _Private Key_ text box in WHM’s [_Install an SSL Certificate on a Domain_](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain) interface ( _WHM_ » _Home_ » _SSL/TLS_ » _Install an SSL Certificate on a Domain_).

### Dedicated IP addresses

Without Server Name Indication (SNI) enabled, SSL only allows one certificate per IP address. Because each cPanel account uses a single IP address, you can only assign one certificate per account. If you experience problems with a subdomain, assign a dedicated IP address to it, or enable SNI on the server.

## Warnings

The following sections describe some common post-installation warnings and how to fix them:

### Certificate mismatch warnings

Your web host likely uses a self-signed certificate, or a signed certificate that does not match your domain name. This warning exists to notify you that the name on the certificate does not match the name of the domain that you wish to visit.

Ensure that the SSL certificate matches a domain that belongs to your web host before you proceed, and contact your hosting provider with any additional security concerns.

### Domain mismatch warnings

If your visitors see a warning about a domain mismatch, your SSL certificate likely does not match your domain name.

Domain mismatches are unlikely to be a security issue when you log in to your cPanel account. You can contact your hosting provider for any additional security concerns.

### Self-signed certificates

Most browsers do not trust self-signed certificates because the certificate only encrypts data and does not verify identity. Because of this, most browsers will display a warning about the self-signed certificate to your visitors.

If you do not want visitors to encounter this warning, purchase an SSL certificate from an SSL provider. However, when you purchase an SSL certificate, do **not** remove the installed self-signed certificate. Instead, purchase and install the additional certificate in WHM’s [_Install an SSL Certificate on a Domain_](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain) interface ( _WHM_ » _Home_ » _SSL/TLS_ » _Install an SSL Certificate on a Domain_).

## Other issues

The following sections describe other common SSL-related issues and how to fix them:

### Visitors cannot access other sites on a shared certificate

If multiple sites share an IP address but only one has an installed SSL certificate, visitors to other domains on the server may experience problems. Apache cannot serve unsecured websites through a secure protocol.

Warning:

If you enter `https://` before a domain name, the browser uses the secure HTTPS protocol. If you enter `http://` before a domain name, the browser uses the **not** secure HTTP protocol.

For example, your server could use the following setup:

| IP address | Domain | SSL status |
| --- | --- | --- |
| `1.2.3.4` | `example.com` | Insecure |
| `1.2.3.4` | `domain.com` | Secure |
| `9.8.7.6` | `example2.com` | Insecure |
| `9.8.7.6` | `domain2.com` | Insecure |

If this configuration resembles your shared IP address’ domain structure, expect the following behavior:

| Protocol | IP address or domain | Apache will serve: |
| --- | --- | --- |
| `https://` | `1.2.3.4` | `domain.com` |
| `http://` | `1.2.3.4` | The default page redirect or `example.com`. |
| `https://` | `9.8.7.6` | An error message. <br>Note:<br>Because Apache cannot serve an unsecured website with a secure protocol and no secure sites exist on the shared IP address, Apache serves an error message. |
| `http://` | `9.8.7.6` | `domain2.com` |
| `https://` | `example.com` | `domain.com`<br>Note:<br>Because Apache cannot serve an unsecured site with a secure protocol, Apache defaults to the secure website on the shared IP address. |
| `http://` | `example.com` | `example.com` |
| `https://` | `domain.com` | `domain.com` |
| `http://` | `domain.com` | `domain.com` |

To allow visitors to visit an unsecured domain regardless of which type of protocol they enter, perform the following steps:

#### Basic users

1. Navigate to WHM’s [_Install an SSL Certificate on a Domain_](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain) interface ( _WHM_ » _Home_ » _SSL/TLS_ » _Install an SSL Certificate on a Domain_).
2. Click _Browse Certificates_.
3. In the _Browse Account_ menu, select `root`.
4. In the _Certificate_ list, select the option for the server’s hostname certificate.
5. Click _Use Certificate_.
6. In the _IP Address (non-user domains only)_ menu, select the server’s shared IP address.
7. Click _Install_.
8. Navigate to WHM’s [_Manage SSL Hosts_](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts) interface ( _WHM_ » _Home_ » _SSL/TLS_ » _Manage SSL Hosts_).
9. In the _Installed SSL Hosts_ table, click _Make Primary_ in the appropriate row for the server’s hostname.

#### Advanced users

1. Navigate to WHM’s [_Include Editor_](https://docs.cpanel.net/whm/service-configuration/include-editor) interface ( _WHM_ » _Home_ » _Service Configuration_ » _Apache Configuration_ » _Include Editor_).
2. Select the _Pre Virtual Host Include_ option.
3. Select the Apache version from the menu. We recommend that you select _All Versions_.
4. Enter the following text in the available text box:





|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```go<br><VirtualHost IPADDRESS:443><br>  ServerName HOSTNAME<br>  DocumentRoot /usr/local/apache/htdocs<br>  ServerAdmin EMAIL<br>  <IfModule mod_suphp.c><br>    suPHP_UserGroup nobody nobody<br>  </IfModule><br>    SSLEngine on<br>    SSLCertificateFile SSLCERTIFICATEFILE<br>    SSLCertificateKeyFile YOUR-SSLCERTIFICATEKEYFILE<br>  </VirtualHost><br>``` |







Note:





This example uses the following values:



- `IPADDRESS` represents your server’s IP address.
- `HOSTNAME` represents your server’s hostname.
- `EMAIL` represents your contact email address.
- `SSLCERTIFICATEFILE` represents the full file path to your SSL certificate.
- `SSLCERTIFICATEKEYFILE` represents the full file path to your SSL certificate’s key.

5. Click _Proceed_.
6. Click _Update_.

### System failures

If you have suffered a serious drive failure and you do not use Trustwave authentication, you may lose some or all of your SSL data.

If you are able to access the old drive, the system stores your authentication data in the `/root/.trustwavereqs` file.

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