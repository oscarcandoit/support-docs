---
url: "https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/"
title: "Generate an SSL Certificate and Signing Request | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/#main-content)

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
4. Generate an SSL Certificate and Signing Request


[ssl](https://docs.cpanel.net/tags/ssl/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/#overview)

* * *

[Contact Information](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/#contact-information)

* * *

[Private Key Options](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/#private-key-options)

* * *

[Certificate information](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/#certificate-information)

* * *

[Shared Secrets](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/#shared-secrets)

* * *

[Create](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/#create)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/#overview)

* * *

[Contact Information](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/#contact-information)

* * *

[Private Key Options](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/#private-key-options)

* * *

[Certificate information](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/#certificate-information)

* * *

[Shared Secrets](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/#shared-secrets)

* * *

[Create](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/#create)

* * *

## Generate an SSL Certificate and Signing Request

![](https://docs.cpanel.net/img/whm-icons/generate_an_ssl_certificate_and_signing_request.svg)

_Valid for versions 92 through the latest version_

#### Version:

#### [92](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature allows you to simultaneously generate both a self-signed SSL certificate and a certificate signing request (CSR) for a domain. You can also use this interface to generate private keys, which are essential for self-signed certificates and purchased certificates. To purchase a certificate, submit the CSR to your chosen certificate authority (CA). They will provide you with a certificate, typically in a `.zip` file via email.

For more information, read our [Purchase and Install an SSL Certificate](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/) documentation.

## Contact Information

To receive the SSL certificate, private key, and CSR in an email, enter an email address in the _Email Address_ text box.

Select the _When complete, email me the certificate, key, and CSR._ checkbox to receive a copy of the request that this interface generates.

Important:

Do **not** select this checkbox if your email service provider does not support secure mail via SSL/TLS.


## Private Key Options

Select the desired key from the _Key Type_ menu. You can select from the following keys:

- _RSA, 2,048-bit - (default)_

- _ECDSA, P-384 (secp384r1)_

- _ECDSA, P-256 (prime256v1)_

- _RSA, 4,096-Deliverability_


For information about each of these keys, read our [SSL/TLS Key Types](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/) documentation.

## Certificate information

To generate an SSL certificate and CSR, perform the following steps:

1. In the _Domains_ text box, enter the domain name of the website that the certificate will secure.

   - You can enter a wildcard-formatted domain name to install the same certificate on any number of subdomains if they share an IP address. For example, you can use a wildcard certificate for `*.example.com` to securely connect to the `mail.example.com` and `www.example.com` domains.
   - You can also enter multiple domains, with one domain per line.
   - For more information about how to share SSL certificates, read our [Manage SSL Hosts](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/) documentation.
2. In the _City_ text box, enter the complete name of the city in which your servers are located.
3. In the _State_ text box, enter the complete name of the state in which your servers are located.
4. In the _Country_ text box, select the country of origin for the certificate.
5. In the _Company Name_ text box, enter your business’s complete name.






Note:




Some certificate authorities may not accept special characters in the _Company Name and Company Division_ text boxes. If your company name includes symbols other than a period or a comma, ask your CA to confirm whether you can use these characters.


6. In the _Company Division_ section, enter the name of the department or group within the company. This information is optional.
7. In the _Email_ text box, enter a secure contact email address that your CA can use to verify domain ownership.

## Shared Secrets

Enter a passphrase in the _Passphrase_ text box if your certificate authority requires one for verification purposes.

## Create

After you enter the correct information, click _Create_. WHM will display the CSR with its SSL certificate and private key.

- Copy and paste these items into the correct directories.
- If you provided an email address, the system also sends the information to that email address.
- You can view the keys, certificates, and CSRs that you create in WHM’s [_SSL Storage Manager_](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/) interface ( _WHM_ » _Home_ » _SSL/TLS_ » _SSL Storage Manager_).

Note:

The system saves this information in the following directories on your servers:

- CSR — `/var/cpanel/ssl/system/csrs`
- SSL certificates — `/var/cpanel/ssl/system/certs`
- Private keys — `/var/cpanel/ssl/system/keys`

If you purchased an SSL certificate, provide the CSR to the company from which you purchased the SSL certificate.

If you used a self-signed certificate, navigate to WHM’s [_Install an SSL Certificate on a Domain_](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/) interface ( _WHM_ » _Home_ » _SSL/TLS_ » _Install an SSL Certificate on a Domain_) to install the certificate.

#### Additional Documentation

* * *

- [Install an SSL Certificate on a Domain](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/)
- [Manage AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/)
- [Manage SSL Hosts](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/)
- [Purchase and Install an SSL Certificate](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/)
- [SSL/TLS Configuration](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×