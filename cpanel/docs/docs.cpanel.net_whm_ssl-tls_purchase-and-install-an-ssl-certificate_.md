---
url: "https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/"
title: "Purchase and Install an SSL Certificate | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/#main-content)

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
4. Purchase and Install an SSL Certificate


[ssl](https://docs.cpanel.net/tags/ssl/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/#overview)

* * *

[CAA records](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/#caa-records)

* * *

[Purchase a certificate](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/#purchase-a-certificate)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/#overview)

* * *

[CAA records](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/#caa-records)

* * *

[Purchase a certificate](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/#purchase-a-certificate)

* * *

## Purchase and Install an SSL Certificate

![](https://docs.cpanel.net/img/whm-icons/purchase_and_install_an_ssl_certificate.svg)

_Valid for versions 90 through the latest version_

#### Version:

#### [90](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/)

Last modified: _2025 June 6_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to log in to a user’s cPanel interface to purchase an SSL certificate for them through cPanel’s [_SSL/TLS Wizard_](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard) interface ( _cPanel » Home » Security » SSL/TLS Wizard_). The interface displays a list of cPanel accounts on the server and their primary domain names.

This interface automatically enables the following required features to purchase and install SSL certificates from cPanel’s _SSL/TLS Wizard_ interface ( _cPanel_ » _Home_ » _Security_ » _SSL/TLS Wizard_) for the user:

- cPanel Market — `market`
- SSL Host Installer — `sslinstall`
- SSL/TLS Wizard — `tls_wizard`

For more information, read WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) documentation.

### CAA records

Certificate Authority Authentication (CAA) records in the domain’s zone file restrict which Certificate Authorities (CA) may issue certificates for that domain. If no CAA records exist for a domain, all CAs can issue certificates for that domain. If conflicting CAA records already exist, remove the existing CAA records or add one for the desired CA.

For example, a CAA record for Let’s Encrypt™ would resemble the following example, where `example.com` represents the domain name:

```go
CODEexample.com. 86400 IN CAA 0 issue "letsencrypt.org"
```

You can manage CAA records through WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager) ( _WHM » Home » DNS Functions » DNS Zone Manager_) or through cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor) interface ( _cPanel » Home » Domains » Zone Editor_).

For more information about a CA’s requirements, read their documentation.

## Purchase a certificate

To purchase a certificate, perform the following steps:

1. Locate the domain for which to purchase an SSL certificate and click _Go to cPanel_. A message will appear in the upper right corner of the interface.
2. In the message, click _Purchase SSL_. The system will redirect you to cPanel’s [_SSL/TLS Wizard_](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard) interface ( _cPanel » Home » Security » SSL/TLS Wizard_).
3. Follow the directions in our [_SSL/TLS Wizard_](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard) documentation to purchase and install the SSL certificate.

Note:

- Use your own credentials to log in to the cPanel Store, **not** the cPanel user’s credentials.
- The system sends the purchase notices to the cPanel user’s contact address. If the site owner did **not** configure a contact address, the system will send the notice to the purchaser.
- To learn more about how to install an SSL certificate, read our [Install an SSL Certificate on a Domain](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/) documentation.

#### Additional Documentation

* * *

- [Generate an SSL Certificate and Signing Request](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/)
- [Install an SSL Certificate on a Domain](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/)
- [Manage AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/)
- [Manage SSL Hosts](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/)
- [SSL/TLS Configuration](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×