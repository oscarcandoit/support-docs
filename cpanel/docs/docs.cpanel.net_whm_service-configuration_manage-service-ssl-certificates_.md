---
url: "https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/"
title: "Manage Service SSL Certificates | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#main-content)

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
3. [Service Configuration](https://docs.cpanel.net/whm/service-configuration/)
4. Manage Service SSL Certificates


[ssl](https://docs.cpanel.net/tags/ssl/) [security](https://docs.cpanel.net/tags/security/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#overview)

* * *

[Service SSL Certificates](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#service-ssl-certificates)

* * *

[Reset a Certificate](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#reset-a-certificate)

* * *

[Certificate Details](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#certificate-details)

* * *

[Apply Certificate to Another Service](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#apply-certificate-to-another-service)

* * *

[Install a New Certificate](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#install-a-new-certificate)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#overview)

* * *

[Service SSL Certificates](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#service-ssl-certificates)

* * *

[Reset a Certificate](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#reset-a-certificate)

* * *

[Certificate Details](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#certificate-details)

* * *

[Apply Certificate to Another Service](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#apply-certificate-to-another-service)

* * *

[Install a New Certificate](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#install-a-new-certificate)

* * *

## Manage Service SSL Certificates

![](https://docs.cpanel.net/img/whm-icons/manage_services_ssl_certificates.svg)

_Valid for versions 126 through the latest version_

#### Version:

#### [92](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/)

#### [118](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/118/)

#### [126](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/)

Last modified: _2025 August 1_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

SSL certificates allow your web server to identify itself to the computers that access it. This interface allows you to manage SSL certificates for your server’s services. For example, you can manage certificates for the following services:

- Exim (SMTP).
- POP3 and IMAP.
- The cPanel services (cPanel & WHM and Webmail).
- Your FTP server.

You can use any of the following types of SSL certificates to secure your server’s services:

- A free [Let’s Encrypt™](https://letsencrypt.org/) certificate.
- A certificate that you obtained from a certificate authority (CA).
- A self-signed certificate.






Warning:





If you server uses a self-signed certificate, we recommend that you install a certificate from a Certificate Authority (CA). For more information about assigning a hostname to your server, read our [Automatic Hostname SSL Certificate Replacement](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/) documentation.


For more information about how to generate or purchase a certificate, read our [Generate an SSL Certificate and Signing Request](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request) documentation.

## Service SSL Certificates

The interface displays the following table, which lists the services on your server and the certificates for each service:

| Section | Description |
| --- | --- |
| _Service_ | The non-Apache service that the certificate secures. |
| _Certificate Domains_ | The domain of the service that the certificate secures. |
| _Certificate Expiration_ | The date on which the certificate expires. <br>Note:<br>- Before the certificate expires, WHM sends a warning to the system administrator’s email address to reset or replace the certificates. A warning will also appear in WHM’s [_Home_](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/) interface.<br>- When a certificate expires, your server installs a self-signed certificate. If your server meets the requirements to obtain a [free certificate](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement), the server automatically orders one the next time that the `upcp` maintenance script runs. When the signed certificate becomes available, the server downloads and installs it. |
| _Certificate Key_ | The type of key that the system used to generate the certificate. |
| _Actions_ | - [_Reset Certificate_](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#reset-a-certificate) — This option uninstalls the current certificate for the service and replaces it with a new self-signed certificate. <br>- [_Certificate Details_](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#certificate-details) — This option displays details about the service’s certificate. <br>- [_Apply Certificate to Another Service_](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#apply-certificate-to-another-service) — This option lets you apply a certificate to multiple services. |

If you do not see any SSL certificates in this list, [create](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/) or [purchase](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate) a certificate, then [install](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#install-a-new-certificate) it.

If you see a service that needs an SSL certificate and does not have one, you can install a new certificate or [apply one of your existing certificates](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/#apply-certificate-to-another-service) to that service.

### Reset a Certificate

This option uninstalls the current certificate for the service and replaces it with a new self-signed certificate.

To reset a certificate, perform the following steps:

1. Click _Reset Certificate_ next to the service for which to reset the certificate.
2. Click _Proceed_ to generate and automatically install the certificate.

Warning:

- This option automatically **erases** an existing certificate from the service. If you replace a certificate from a CA with a self-signed certificate, users may see warnings because their client applications do **not** trust self-signed certificates.
- If your server meets the requirements to obtain a [free certificate](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/), the server automatically orders one the next time that the `upcp` maintenance script runs. When the signed certificate becomes available, the server downloads and installs it.

### Certificate Details

This option displays the following details about the installed certificate for the service:

| Section | Description |
| --- | --- |
| _Domains_ | The domain of the service that the certificate secures. |
| _Issuer_ | Information about the CA that issued the certificate. <br>Note:<br>This column displays a warning message for self-signed certificates. |
| _Key_ | The type of key that the system used to generate the certificate. |
| _Expiration_ | The date on which the certificate expires. <br>Note:<br>- Before the certificate expires, WHM sends a warning to the system administrator’s email address to reset or replace the certificates. A warning also appears in WHM’s _Home_ interface.<br>- If your server meets the requirements to obtain a [free certificate](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/), the server automatically orders one the next time that the `upcp` maintenance script runs. When the signed certificate becomes available, the server downloads and installs it. |

### Apply Certificate to Another Service

This option allows you to apply a certificate to multiple services. This is useful, for example, when you wish to apply a signed certificate for your server’s hostname to other services on your server.

To apply a certificate to another service, perform the following steps:

1. Click the appropriate _Apply Certificate to Another Service_ link. The interface will scroll down to the _Install a New Certificate_ section.
2. Select the checkboxes for the services for which to apply this certificate.






Note:





WHM automatically enters the details of the _Install a New Certificate_ text boxes with the certificate’s information.

3. Click _Install_ to install the certificate to the selected services, or click _Cancel_ to cancel the operation.






Warning:





If you replace a certificate from a CA with a self-signed one, users may see warnings because their client applications do **not** trust self-signed certificates.


## Install a New Certificate

This form allows you to install a new certificate that you [created](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/) or [purchased](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate) to secure the services on your server.

To install a new certificate on your server, perform the following steps:

1. To use a certificate that already exists on your server, click _Browse Certificates_. Select the services that you wish for the certificate to secure.
2. Click _Browse Account_ and select the username from the menu, or click _Browse Apache_.
3. Select the certificate that you wish to use from the menu.
4. Click _Use Certificate_ to use the certificate, or click _Cancel_ to cancel the operation.






Note:





WHM automatically enters the certificate’s information into the _Install a New Certificate_ form.

5. Paste the contents of the certificate file (`.crt`) into the _Certificate_ text box.






Note:





Click _Autofill by certificate_ to search for the appropriate private key and CA bundle from cPanel’s public CA bundle repository.

6. Paste the contents of the private key file (`.key`) into the _Private Key_ text box.
7. If you have a CA bundle, paste the contents of that bundle (`.cab`) into the _Certificate Authority Bundle_ text box.
8. Click _Install_ to install the certificate, or click _Cancel_ to cancel the operation.
9. If you selected the `cpsrvd` daemon, and the certificate has installed correctly, the interface will prompt you to restart the `cpsrvd` daemon. Click _Restart cpsrvd_ to restart the cPanel service daemon.






Important:





You **must** restart the `cpsrvd` daemon each time that you install a new SSL certificate for a service.


#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [cPanel Web Disk Configuration](https://docs.cpanel.net/whm/service-configuration/cpanel-web-disk-configuration/)
- [cPanel Web Services Configuration](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/)
- [SSL/TLS Configuration](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×