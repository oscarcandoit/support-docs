---
url: "https://docs.cpanel.net/cpanel/security/ssl-tls/"
title: "SSL/TLS | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/security/ssl-tls/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Security](https://docs.cpanel.net/cpanel/security/)
4. SSL/TLS


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [ssl](https://docs.cpanel.net/tags/ssl/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/security/ssl-tls/#overview)

* * *

[Available features](https://docs.cpanel.net/cpanel/security/ssl-tls/#available-features)

* * *

[Default SSL/TLS Key Type](https://docs.cpanel.net/cpanel/security/ssl-tls/#default-ssltls-key-type)

* * *

[Private Keys (KEY)](https://docs.cpanel.net/cpanel/security/ssl-tls/#private-keys-key)

* * *

[Certificate Signing Requests (CSR)](https://docs.cpanel.net/cpanel/security/ssl-tls/#certificate-signing-requests-csr)

* * *

[Certificates (CRT)](https://docs.cpanel.net/cpanel/security/ssl-tls/#certificates-crt)

* * *

[Install and Manage SSL for your site (HTTPS)](https://docs.cpanel.net/cpanel/security/ssl-tls/#install-and-manage-ssl-for-your-site-https)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/security/ssl-tls/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/security/ssl-tls/#overview)

* * *

[Available features](https://docs.cpanel.net/cpanel/security/ssl-tls/#available-features)

* * *

[Default SSL/TLS Key Type](https://docs.cpanel.net/cpanel/security/ssl-tls/#default-ssltls-key-type)

* * *

[Private Keys (KEY)](https://docs.cpanel.net/cpanel/security/ssl-tls/#private-keys-key)

* * *

[Certificate Signing Requests (CSR)](https://docs.cpanel.net/cpanel/security/ssl-tls/#certificate-signing-requests-csr)

* * *

[Certificates (CRT)](https://docs.cpanel.net/cpanel/security/ssl-tls/#certificates-crt)

* * *

[Install and Manage SSL for your site (HTTPS)](https://docs.cpanel.net/cpanel/security/ssl-tls/#install-and-manage-ssl-for-your-site-https)

* * *

## SSL/TLS

![](https://docs.cpanel.net/img/cpanel-icons/ssl_tls.svg)

_Valid for versions 92 through the latest version_

#### Version:

#### [92](https://docs.cpanel.net/cpanel/security/ssl-tls/)

Last modified: _2025 June 6_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The features in this interface allow you to generate and manage SSL certificates, signing requests, and keys, which enhance your website’s security. They are useful for websites that regularly work with sensitive information, such as login credentials and credit card numbers. Encryption protects visitors’ communications from malicious users.

Important:

- cPanel & WHM supports [Transport Layer Security (TLS) protocol version 1.2](https://tools.ietf.org/html/rfc5246) and [Transport Layer Security (TLS) protocol version 1.3](https://tools.ietf.org/html/rfc8446):
  - cPanel & WHM only supports TLSv1.2 or later. The system enables TLSv1.2 by default.
  - Not all clients will support TLSv1.3, which requires OpenSSL 1.1.1 or higher.
- If you are using [AutoSSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/) or SSL certificates purchased via your cPanel account to secure a [linked mail node](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/), your cPanel & WHM nodes **must** be able to manage the authoritative DNS server.

- You can also purchase and install SSL certificates in cPanel’s [_SSL/TLS Wizard_](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/) interface ( _cPanel » Home » Security » SSL/TLS Wizard_).


Note:

CAA (Certificate Authority Authentication) records in the domain’s zone file restrict which CAs (Certificate Authority) may issue certificates for that domain.

- If no CAA records exist for a domain, all CAs can issue certificates for that domain.
- If conflicting CAA records already exist, remove the existing CAA records or add one for the desired CA. For example, a CAA record for Let’s Encrypt™ would resemble the following example, where `example.com` represents the domain name:



```bash
example.com. 86400 IN CAA 0 issue "letsencrypt.org"
```


You can manage CAA records through cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor) interface ( _cPanel » Home » Domains » Zone Editor_). For more information about a CA’s requirements, read their documentation.

## Available features

This interface contains the following features:

- _Default SSL/TLS Key Type_ — Select the type of key the system uses by default for SSL/TLS certificates and certificate signing requests.
- _Private Keys (KEY)_ — Generate, view, upload, or delete private keys.
- _Certificate Signing Requests (CSR)_ — Generate, view, or delete SSL certificate signing requests.
- _Certificates (CRT)_ — Set up an SSL certificate for the site.
- _Install and Manage SSL for your site (HTTPS)_ — Generate, view, upload, or delete SSL certificates.

### Default SSL/TLS Key Type

The _Default SSL/TLS Key Type_ section of this interface lets you select a preferred default SSL/TLS key type. The system uses the selected key when it provisions all SSL/TLS certificates and signing requests. When you set a new default key type, this supersedes the server’s set default key type. For more information about the available key types, read the [SSL/TLS Key Types](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types) documentation.

After you select a preferred key type, click _Save_ to update your settings.

Important:

When you update your preferred key type, the system will perform an [AutoSSL](https://docs.cpanel.net/cpanel/security/ssl-tls-status) run. This updates **all** installed AutoSSL-issued certificates to use the new key type.

### Private Keys (KEY)

When you set up an SSL certificate for your site, you **must** first add a private key.

To access this interface, click _Generate, view, upload, or delete your private keys_.

This interface allows you to perform any of the following actions:

- Generate a new private key.
- Upload an existing private key.
- Edit a current private key.
- Remove a current private key.

You can generate a new key or upload an existing key through a `*.key` file.

Important:

- We **strongly** recommend that you save a copy of your private key in a safe location. You **cannot** recover a lost private key.
- We **strongly** recommend that you use SSL certificates if your visitors submit sensitive information to your website.

#### Keys on Server

The _Keys on Server_ table contains the following information:

| Column | Description |
| --- | --- |
| _Description_ | The private key’s description. |
| _ID_ | The private key’s ID. |
| _Key Type_ | The type of private key. |
| _Actions_ | - _Edit_ — Edit the private key.<br>- _Delete_ — Delete the private key. |

##### Edit and view details about a private key

To edit a key’s description or view a key, perform the following steps:

1. Locate the key that you wish to edit in the _Keys on Server_ table in the _Private Keys (KEY)_ interface.
2. Click _Edit_ in the _Actions_ column next to the key that you wish to edit. A new interface will appear that displays the description, the encoded private key, and the decoded private key.
3. Edit the _Description_ text box.
4. Click _Update_. A success or failure message will appear next to the _Description_ text box.

##### Delete a private key

To delete a private key, perform the following steps:

1. Locate the key that you wish to delete in the _Keys on Server_ table in the _Private Keys (KEY)_ interface.
2. Click _Delete_ in the _Actions_ column next to the key that you wish to remove. The system will redirect you to the _Private Key_ interface.
3. Click _Delete Key_. A success or failure message will appear.

#### Generate a new private key

To generate a private key, perform the following steps:

1. Select the desired key from the _Key Type_ menu. Optionally, in the _Description_ text box, enter a brief description about this private key.
2. Click _Generate_. A new interface will appear that displays the requested key in an encoded and decoded format.
3. Copy the desired key.
4. Click _Return to Private Keys_. The new key displays in the _Keys on Server_ table.
5. Upload the new key to the server. To do this, use either the [paste a private key](https://docs.cpanel.net/cpanel/security/ssl-tls/#paste-a-private-key) or [browse for a private key](https://docs.cpanel.net/cpanel/security/ssl-tls/#browse-for-a-private-key) methods.

#### Upload a new private key

Perform either of the following actions to upload a private key:

- Paste the key in the text box.
- Browse for the key.

##### Paste a private key

To paste a private key, perform the following steps:

1. Paste a key in the _Paste the key into the following text box:_ text box.
2. Optionally, in the _Description_ text box, enter a brief description about this private key.
3. Click _Save_ to upload your private key. A new interface will appear that displays a success or failure message.

##### Browse for a private key

To browse for a private key, perform the following steps:

1. Click _Choose File_ to upload a `*.key` file.
2. Optionally, in the _Description_ text box, enter a brief description for this private key.
3. Click _Upload_. A new interface will appear that displays a success or failure message.

### Certificate Signing Requests (CSR)

This interface allows you to generate, view, or delete a certificate signing request (CSR). You can also view and edit current descriptions and encoded private keys and decoded private keys.

To access this interface, click _Generate, view, or delete SSL certificate signing requests_.

#### Certificate Signing Requests on Server

The _Certificate Signing Requests on Server_ table contains the following information:

| Column | Description |
| --- | --- |
| _Domains_ | The CSR’s domain. |
| _Created_ | The time that you created the CSR, in Universal Time, Coordinated (UTC). |
| _Description_ | The CSR’s description. |
| _Actions_ | - _Edit_ — Edit the CSR.<br>- _Delete_ — Delete the CSR. |

##### Edit and view details about a CSR

To edit a description or view a CSR, perform the following steps:

1. Locate the CSR that you with to edit in the _Certificate Signing Requests on Server_ table in the _Certificate Signing Requests (CSR)_ interface.
2. Click _Edit_ in the _Actions_ column. A new interface will appear that displays the description, the encoded CSR, and the decoded CSR.
3. Enter any desired changes in the _Description_ text box.
4. Click _Update Name_. A message of success or failure will appear next to the _Description_ text box.

##### Delete a CSR

To delete a CSR, perform the following steps:

1. Locate the CSR that you wish to delete in the _Certificate Signing Requests on Server_ table in the _Certificate Signing Requests (CSR)_ interface.
2. Click _Delete_ in the _Actions_ column. A new interface will appear.
3. Click _Delete CSR_ to confirm.

   - A message of success or failure will appear.
   - If you do **not** wish to delete the CSR, click _Cancel_.

#### Generate a new CSR

Warning:

You **must** have or generate a key before you generate a signing request.

To generate a CSR, perform the following steps:

1. Under the _Generate a New Certificate Signing Request (CSR)_ heading, select the key from the _Key_ menu.

   - When you select a key, the _Edit_ option appears. Click _Edit_ to view and edit the information for your private key.
   - If the desired key does **not** appear in the menu, select the type of key you wish to generate from the _Key_ menu. You can also add a new private key to the [_Private Key_](https://docs.cpanel.net/cpanel/security/ssl-tls/#private-keys-key) section of the interface.
2. Enter the required information in the text boxes below the _Key_ menu.






Note:





If you do not need the CSR for a business, you can enter your legal name in the _Company_ text box.

3. Click _Generate_.

Note:

Your hosting provider may require additional information.

### Certificates (CRT)

This interface allows you to generate, view, upload, or delete SSL certificates.

To access this interface, click _Generate, view, upload, or delete SSL certificates_.

#### Certificates on Server

The _Certificates on Server_ table contains the following information:

| Column | Description |
| --- | --- |
| _Domains_ | The private key’s description. |
| _Issuer_ | The Certificate Authority (CA) that issues the certificate. |
| _Expiration_ | The time that the certificate expires, in Universal Time, Coordinated (UTC). |
| _Key Type_ | The type of private key. |
| _Description_ | The certificate’s description. |
| _Actions_ | - _Edit_ — Edit the SSL certificate.<br>- _Delete_ — Delete the SSL certificate.<br>- _Install_ — Install the SSL certificate. |

##### Edit and view details about a certificate

To edit a description or view a certificate, perform the following steps:

1. Locate the certificate that you wish to edit in the _Certificates on Server_ table in the _Certificates (CRT)_ interface.
2. Click _Edit_. A new interface will appear that displays the description, the encoded certificate, and the decoded certificate.
3. In the _Description:_ text box, enter your changes, and then click _Update Description_. A success or error message will appear.

To delete the certificate you are viewing, click _Delete Certificate_ at the bottom of the interface.

##### Delete a certificate

To delete a certificate, perform the following steps:

1. Locate the certificate that you wish to delete in the _Certificates on Server_ table in the _Certificates (CRT)_ interface..
2. Click _Delete_ for that certificate. A new interface will appear.
3. Click _Delete Certificates_. A success or error message will appear.

##### Install a certificate

To install a certificate, click _Install_ in the _Actions_ column under the _Certificates on Server_ heading in the _Certificates (CRT)_ interface..

#### Upload a New Certificate

To paste a certificate, perform the following steps:

1. Under the _Upload a New Certificate_ heading, paste the text of the certificate in _Paste the certificate into the following text box:_ text box.
2. Optionally, in the _Description:_ text box, enter a brief description for this certificate.
3. Click _Save Certificate_ to upload your certificate.
4. A success or error message will appear on a new screen.

To browse for a certificate, perform the following steps:

1. Under the _Choose a certificate file (_.crt)\* heading, click _Choose File_.
2. Optionally, in the _Description:_ text box, write a brief description about this certificate.
3. Click _Upload Certificate_.
4. A success or error message will appear.

#### Generate a New Certificate

To generate a self-signed SSL certificate, perform the following steps:

1. Under the _Generate a New Certificate_ heading, select the key from the _Key_ menu. If the desired key does **not** appear in the menu, use the _Private Keys_ feature to add a new private key.
2. Enter the appropriate information in the _Domains_, _City_, _State_, _Company_, _Company Division_, _Email_, and _Description_ text boxes and the _Country_ menu. You **must** enter the _Domains_, _City_, _State_, _Country_, and _Company_ information.
3. Click _Generate_.

Important:

We reserve self-signed certificates for intranet uses. To secure a public website, we recommend that you purchase and install a certificate from a trusted CA.

### Install and Manage SSL for your site (HTTPS)

In WHM, system administrators can [create](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/) and [install](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/) SSL certificates for their users’ cPanel accounts. cPanel users can manage the certificates that correspond to their domains.

To access this interface, click _Manage SSL sites_.

This interface allows you to perform the following actions:

- Change the primary domain on a shared IP address.
- Update a certificate.
- Uninstall a certificate.
- View a certificate’s details.
- Use a certificate for another site.

Warning:

- Mail SNI is **not** compatible with Webmail and will **not** function for any Webmail connection. Webmail connections use the cPanel service SSL certificate.
- We **only** support DNS Domain Control Validation [(DCV)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#domain-control-validation) for [linked mail nodes](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/).

#### The Manage Installed SSL Websites table

If a SSL certificate already exists on a domain with a dedicated IP address, the interface displays the _Manage Installed SSL Websites_ table below the introductory text.

| Column | Description |
| --- | --- |
| _FQDN_ | The website’s domain name. |
| _Certificate Expiration_ | The date when the certificate expires. |
| _Document Root_ | The location of the domain’s website files. |
| _Actions_ | You can perform the following actions: <br>- _Make Primary_ — Make this website the main domain on the shared IP address.<br>  - A success or failure message will appear above the table.<br>  - This action **only** appears for non-primary websites.<br>- _Uninstall_ — Uninstall the SSL certificate. A message will appear to confirm the action. Click _Proceed_ to continue, or click _Cancel_ to return to the _Manage Installed SSL Hosts_ section.<br>- _Update Certificate_ — Update the SSL certificate. The _Install an SSL Host_ section will appear below the table where you modify the form.<br>- _Certificate Details_ — View additional information about the certificate.<br>- _Use Certificate for New Site_ — Use the certificate for another website, addon domain, or subdomain. The _Install an SSL Host_ section will appear below the table where you can modify the form to change the _Domain_ menu. |

#### Install an SSL Website

Use the form in the _Install an SSL Website_ section to install a certificate. You can use three different methods to install a certificate:

- Click _Browse Certificates_.
- Search by domain.
- Manually enter the information.

##### Browse Certificates

To use _Browse Certificates_ to install a certificate, perform the following steps:

1. Click _Browse Certificates_.
2. Click the button that corresponds to the desired certificate. Only certificates that correspond to a domain appear in the list.
3. Click _Use Certificate_ to return to the _Install an SSL Host_ section. The certificate’s information will appear in the text boxes.
4. Optionally, enter the appropriate information in the _Certificate Authority Bundle: (CABUNDLE)_ text box.
5. Click _Install Certificate_. A success or failure message will appear.

##### Search by domain

To search by domain to install a certificate, perform the following steps:

1. Select the desired domain in the _Domain_ menu.
2. Click _Autofill by Domain_. The interface will attempt to retrieve and enter the certificate information.

   - If this step succeeds, the available text boxes will contain the appropriate information.
   - If this step does **not** succeed, the text boxes will remain empty.
3. Click _Install Certificate_. A success or failure message will appear.

##### Manually enter information

To manually enter the information to install a certificate, perform the following steps:

1. Select the desired domain in the _Domain_ menu.
2. Enter the certificate information in the _Certificate (CRT)_ text box.
3. Enter the private key information in the _Private Key (KEY)_ text box.
4. Optionally, enter the certificate authority information in the _Certificate Authority Bundle (CABUNDLE)_ text box.
5. Click _Install Certificate_. A success or failure message will appear.

#### Additional Documentation

* * *

- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [Security Policy](https://docs.cpanel.net/cpanel/security/security-policy/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS Status](https://docs.cpanel.net/cpanel/security/ssl-tls-status/)
- [SSL/TLS Wizard](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×