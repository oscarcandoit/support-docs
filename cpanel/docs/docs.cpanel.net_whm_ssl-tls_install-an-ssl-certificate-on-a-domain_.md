---
url: "https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/"
title: "Install an SSL Certificate on a Domain | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/#main-content)

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
4. Install an SSL Certificate on a Domain


[whmui](https://docs.cpanel.net/tags/whmui/) [ssl](https://docs.cpanel.net/tags/ssl/) [domains](https://docs.cpanel.net/tags/domains/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/#overview)

* * *

[SNI and multiple certificates](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/#sni-and-multiple-certificates)

* * *

[Install an SSL certificate](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/#install-an-ssl-certificate)

* * *

[Browse Certificates](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/#browse-certificates)

* * *

[Install by the certificate’s domain](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/#install-by-the-certificates-domain)

* * *

[Install an SSL certificate on the ServerName](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/#install-an-ssl-certificate-on-the-servername)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/#overview)

* * *

[SNI and multiple certificates](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/#sni-and-multiple-certificates)

* * *

[Install an SSL certificate](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/#install-an-ssl-certificate)

* * *

[Browse Certificates](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/#browse-certificates)

* * *

[Install by the certificate’s domain](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/#install-by-the-certificates-domain)

* * *

[Install an SSL certificate on the ServerName](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/#install-an-ssl-certificate-on-the-servername)

* * *

## Install an SSL Certificate on a Domain

![](https://docs.cpanel.net/img/whm-icons/install_an_ssl_certificate_on_a_domain.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/)

Last modified: _2025 June 6_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Use this interface to install an SSL certificate on a domain, subdomain, addon domain, or the server hostname. Before you can use this feature, you **must** [create](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/) or [purchase](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate) a certificate, and you **must** possess the [certificate’s key](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/).

Remember:

You can automatically install and renew SSL certificates on your server’s domains with WHM’s [_Manage AutoSSL_](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/) interface ( _WHM » Home » SSL/TLS » Manage AutoSSL_). By default, the system uses the [Let’s Encrypt™](http://letsencrypt.org/) provider. Your cPanel license includes this **free** provider. For more information, read our [Let’s Encrypt Plugin](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/) documentation.

- For more information about SSL, read our [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/) documentation.
- For more information about Domain TLS, read our [What is Domain TLS?](https://docs.cpanel.net/knowledge-base/general-systems-administration/what-is-domain-tls) documentation.
- For more information about how cPanel & WHM processes Secure Sockets Layer (SSL) certificate requests and how Apache processes SSL requests, read our [SSL Installation and Precedence Logic](https://docs.cpanel.net/knowledge-base/security/the-ssl-installation-and-precedence-logic/) documentation.

### SNI and multiple certificates

Server Name Indication (SNI) allows a server to install multiple certificates to the same IP address.

- **Multi-domain** (UCC/SAN) certificates secure multiple domains that share the same IP address and match the certificate’s domains list.
- **Wildcard** certificates secure a domain and an unlimited number of subdomains. For example, to secure `store.example.com` and `blog.example.com`, use a single wildcard certificate.

## Install an SSL certificate

Use either of the methods below to install certificates on your server.

- If the installation succeeds, WHM displays a confirmation message.
- If the installation fails, WHM displays an error message to indicate the problem.

Important:

When you install a certificate, this interface indicates whether your certificate is self-signed. Self-signed certificates are easy targets for attackers and generate security warnings in your users’ web browsers. **Only** install a self-signed certificate temporarily, until you can replace the certificate with a certificate from a valid certificate authority (CA).

### Browse Certificates

To find and select a certificate on your server, and install it, perform the following steps:

1. Click _Browse Certificates_. The _SSL Certificate List_ will appear.
2. Select an account from the _Browse Account_ menu, or select _Browse Apache_.






Note:




The menu’s certificates correspond to the account that you select. This menu does **not** indicate that the system will install the selected certificate to the selected account.


3. Select the desired certificate.
4. Click _Use Certificate_. The system automatically populates the text boxes.

   - If the domain does not use a specific dedicated IP address, select an IP address from the _IP Address_ menu.






     Note:




     You may only select IP addresses that the menu labels as _shared_ or _available_.


   - If you selected a purchased SSL certificate, you may need to complete the _Certificate Authority Bundle (optional)_ text box. If the system does not populate this text box with information, contact the organization from which you purchased the certificate.
5. Click _Install_.

### Install by the certificate’s domain

To use the domain name to find and install the certificate, perform the following steps:

1. Enter your domain in the _Domain_ text box. The _Autofill by Domain_ button will appear.
2. Enter the certificate’s information in the appropriate text boxes, or click _Autofill by Domain_ to automatically populate the certificate information text boxes.






Note:




If multiple certificates exist for the same domain, the server attempts to choose the best certificate. In this scenario, to avoid potential issues, use the _Browse Certificates_ method.


3. Click _Install_.

### Install an SSL certificate on the ServerName

A ServerName is the main address or hostname, of your server. To install an SSL certificate on the ServerName, perform the following steps:

1. Enter your ServerName in the _Domain_ text box. The _Autofill by Domain_ button will appear.
2. Enter the certificate’s information in the appropriate text boxes, or click _Autofill by Domain_ to automatically populate the certificate information text boxes.
3. Click _Install_.

#### Additional Documentation

* * *

- [Convert Addon Domain to Account](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/)
- [Manage AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/)
- [Manage SSL Hosts](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/)
- [SSL Storage Manager](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/)
- [SSL/TLS Configuration](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×