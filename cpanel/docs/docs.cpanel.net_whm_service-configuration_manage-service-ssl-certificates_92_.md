---
url: "https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/"
title: "Manage Service SSL Certificates | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#main-content)

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

[Overview](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#overview)

* * *

[Free cPanel-signed certificate](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#free-cpanel-signed-certificate)

* * *

[Service SSL Certificates](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#service-ssl-certificates)

* * *

[Service](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#service)

* * *

[Certificate Domains](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#certificate-domains)

* * *

[Certificate Expiration](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#certificate-expiration)

* * *

[Certificate Key](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#certificate-key)

* * *

[Actions](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#actions)

* * *

[Install a New Certificate](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#install-a-new-certificate)

* * *

[iOS Mail push notifications](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#ios-mail-push-notifications)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#overview)

* * *

[Free cPanel-signed certificate](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#free-cpanel-signed-certificate)

* * *

[Service SSL Certificates](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#service-ssl-certificates)

* * *

[Service](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#service)

* * *

[Certificate Domains](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#certificate-domains)

* * *

[Certificate Expiration](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#certificate-expiration)

* * *

[Certificate Key](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#certificate-key)

* * *

[Actions](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#actions)

* * *

[Install a New Certificate](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#install-a-new-certificate)

* * *

[iOS Mail push notifications](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#ios-mail-push-notifications)

* * *

## Manage Service SSL Certificates

![](https://docs.cpanel.net/img/whm-icons/manage_services_ssl_certificates.svg)

_Valid for versions 92 through 116_

#### Version:

#### [92](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/)

#### [118](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/118/)

#### [126](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/)

Last modified: _2024 November 4_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to manage certificates for your server’s services. For example, you can manage certificates for the following services:

- Exim (SMTP).

- POP3 and IMAP.

- The cPanel services (cPanel & WHM and Webmail).

- Your FTP server.

- iOS Mail Push Notifications (APNs).


SSL certificates allow your web server to identify itself to the computers that access it.

You can use any of the following types of certificates to secure your server’s services:

- A free cPanel-signed hostname certificate.

- A certificate that you obtained from a certificate authority (CA).

- A self-signed certificate.







Warning:




We recommend that you **do not use** self-signed certificates. They provide less security than certificates from a CA. Any server could claim to be your server with a self-signed certificate because they do not use a third-party verification system. To remedy this, use certificates from a CA, which verifies that users securely connect to your server.


- [PKCS #12 (iOS APNs **only**)](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/92/#ios-mail-push-notifications).


For more information about how to generate or purchase a certificate, read our [Generate an SSL Certificate and Signing Request](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request) documentation.

### Free cPanel-signed certificate

Note:

cPanel users may see a `There is a problem with this website's security certificate.` message when they log in. To resolve this issue, replace the self-signed certificate with a certificate that you purchase from WHM’s [_Purchase and Install an SSL Certificate_](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/) interface ( _WHM » Home » SSL/TLS » Purchase and Install an SSL Certificate_).


WebPros International, LLC offers valid cPanel & WHM license holders a free signed certificate for the services on your server’s hostname. This offer replaces the certificates for these services that meet any of the following conditions:

- Maintains a weak signature algorithm.

- Revoked.

- Self-signed.

- Invalid (For example, your server’s hostname must be valid and resolve in DNS).

- Will expire soon, based on the following criteria:
  - cPanel-provided certificates that expire in less than 25 days.

  - Certificates issued by any other provider that expire in less than 3 days.

When the existing certificate meets any of these conditions, the server will order a replacement certificate when the `/usr/local/cpanel/scripts/upcp` maintenance runs. The system will download and install that certificate when available. If the existing certificate expires before the replacement certificate is available, the system will install a self-signed certificate, and then replace it with the ordered certificate when available.

Note:

If you create the `/var/cpanel/ssl/disable_auto_hostname_certificate` touch file, the system will no longer order, download, and install a free cPanel-signed hostname certificate.


Important:

- Your server **must** possess a valid hostname that points to the server’s main IP address.

- Your server’s hostname **must** resolve in DNS.

- Your server **must** possess a valid cPanel & WHM license.

- The system will replace certificates issued by any other provider with cPanel-provided certificates. For example, the Dovecot service’s custom certificate expires in less than three days. The system will install a cPanel-provided hostname certificate to replace the old one.
  - If you create the `/var/cpanel/ssl/disable_service_certificate_management` touch file, the system disables all automatic replacement of expired service certificates. The system also disables notifications about expired or expiring service certificates.
- The system will replace certificates issued by any other provider with cPanel-provided certificates.

- Certificate Authority Authentication (CAA) records in the domain’s zone file restrict which Certificate Authorities (CA) may issue certificates for that domain. If no CAA records exist for a domain, all CAs can issue certificates for that domain. If conflicting CAA records already exist, remove the existing CAA records or add one for the desired CA.
  - For example, a CAA record for Let’s Encrypt™ would resemble the following example, where `example.com` represents the domain name: `example.com. 86400 IN CAA 0 issue "letsencrypt.org"`
    - You can manage CAA records through WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/) interface ( _WHM » Home » DNS Functions » DNS Zone Manager_) or through cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home » Domains » Zone Editor_).

For more information about a CA’s requirements, read their documentation.

## Service SSL Certificates

The interface displays the following table, which lists the services on your server and the certificates for each service:

### Service

The service that the certificate secures.

### Certificate Domains

The domain of the service that the certificate secures.

### Certificate Expiration

The date on which the certificate expires.

Note:

- Before the certificate expires, WHM sends a warning to the system administrator’s email address to reset or replace the certificates. A warning will also appear in WHM’s _Home_ interface.

- When a certificate expires, your server installs a self-signed certificate. If your server meets the requirements to obtain a free cPanel-signed certificate, the server automatically orders one the next time that the `upcp` maintenance script runs. When the signed certificate becomes available, the server downloads and installs it.


### Certificate Key

The type of key that the system used to generate the certificate.

### Actions

#### Reset a Certificate

This option uninstalls the current certificate for the service and replaces it with a new self-signed certificate.

To reset a certificate, perform the following steps:

1. Click _Reset Certificate_ next to the service for which to reset the certificate.

2. Click _Proceed_ to generate and automatically install the certificate.


Warning:

- This option automatically erases an existing certificate from the service. If you replace a certificate from a CA with a self-signed certificate, users may see warnings because their client applications do **not** trust self-signed certificates.

- If your server meets the requirements to obtain a free cPanel-signed certificate, the server automatically orders one the next time that the upcp maintenance script runs. When the signed certificate becomes available, the server downloads and installs it.


#### Certificate Details

This option displays details about the installed certificate for the service:

- _Domains_ — The domain of the service that the certificate secures.

- _Issuer_ — Information about the CA that issued the certificate.







Note:




This column displays a warning message for self-signed certificates.


- _Key_ — The type of key that the system used to generate the certificate.

- _Expiration_ — The date on which the certificate expires.







Note:





- Before the certificate expires, WHM sends a warning to the system administrator’s email address to reset or replace the certificates. A warning also appears in WHM’s _Home_ interface.
- If your server meets the requirements to obtain a free cPanel-signed certificate, the server automatically orders one the next time that the `upcp` maintenance script runs. When the signed certificate becomes available, the server downloads and installs it.

#### Apply Certificate to Another Service

This option allows you to apply a certificate to multiple services. This is useful, for example, when you wish to apply a signed certificate for your server’s main domain to other services on your server.

To apply a certificate to another service, perform the following steps:

1. Click the appropriate _Apply Certificate to Another Service_ link.

2. The interface will scroll down to the _Install a New Certificate_ section. Select the checkboxes for the services for which to apply this certificate.







Note:




WHM automatically enters the details of the _Install a New Certificate_ text boxes with the certificate’s information.


3. Click _Install_ to install the certificate to the selected services, or click _Cancel_ to cancel the operation.







Warning:




If you replace a certificate from a CA with a self-signed one, users may see warnings because their client applications do **not** trust self-signed certificates.



## Install a New Certificate

This form allows you to install a new certificate that you can use to secure the services on your server.

To install a new certificate on your server, perform the following steps:

1. To use a certificate that already exists on your server, click _Browse Certificates_. Select the services that you wish for the certificate to secure.
1. Click _Browse Account_ and select the username from the menu, or click _Browse Apache_.

2. Select the certificate that you wish to use from the menu.

3. Click _Use Certificate_ to use the certificate, or click _Cancel_ to cancel the operation.







      Note:




      WHM automatically enters the certificate’s information into the _Install a New Certificate_ form.
2. Paste the contents of the Certificate file (`.crt`) into the _Certificate_ text box.







Note:




Click _Autofill by certificate_ to search for the appropriate private key and CA bundle from cPanel’s public CA bundle repository.


3. Paste the contents of the Private Key file (`.key`) into the _Private Key_ text box.

4. If you have a CA bundle, paste the contents of that bundle (`.cab`) into the _Certificate Authority Bundle_ text box.

5. Click _Install_ to install the certificate, or click _Cancel_ to cancel the operation.

6. If you selected the `cpsrvd` daemon, and the certificate has installed correctly, the interface will prompt you to restart the `cpsrvd` daemon. Click _Restart cpsrvd_ to restart the cPanel service daemon.


Important:

You **must** restart the `cpsrvd` daemon each time that you install a new SSL certificate for a service.


## iOS Mail push notifications

Warning:

We **no longer** support iOS Mail push notifications due to the following changes by Apple®:

- As of November 2020, Apple [no longer supports](https://developer.apple.com/news/?id=11042019a) the Apple Push Notification service (APNs) legacy API for sending push notifications.
- As of April 21, 2022, Apple has [discontinued macOS Server](https://support.apple.com/en-us/HT208312).

Use this interface to manage the certificate and key that your server uses to communicate with APNs.

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [cPanel Web Disk Configuration](https://docs.cpanel.net/whm/service-configuration/cpanel-web-disk-configuration/)
- [cPanel Web Services Configuration](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/)
- [Manage Service SSL Certificates](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/)
- [SSL/TLS Configuration](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×