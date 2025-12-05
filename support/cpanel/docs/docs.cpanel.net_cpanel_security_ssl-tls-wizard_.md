---
url: "https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/"
title: "SSL/TLS Wizard | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#main-content)

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
4. SSL/TLS Wizard


[ssl](https://docs.cpanel.net/tags/ssl/) [security](https://docs.cpanel.net/tags/security/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#overview)

* * *

[Verification Process](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#verification-process)

* * *

[Purchase certificates in the Simple interface](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#purchase-certificates-in-the-simple-interface)

* * *

[Purchase certificates in the Advanced interface](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#purchase-certificates-in-the-advanced-interface)

* * *

[Pending Certificates](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#pending-certificates)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#overview)

* * *

[Verification Process](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#verification-process)

* * *

[Purchase certificates in the Simple interface](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#purchase-certificates-in-the-simple-interface)

* * *

[Purchase certificates in the Advanced interface](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#purchase-certificates-in-the-advanced-interface)

* * *

[Pending Certificates](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#pending-certificates)

* * *

## SSL/TLS Wizard

![](https://docs.cpanel.net/img/cpanel-icons/tls_wizard.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/)

Last modified: _2025 June 6_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The _SSL/TLS Wizard_ interface allows you to easily purchase and install SSL certificates for domains on your account. It also lists purchased certificates that an SSL certificate provider has yet to deliver.

Note:

- In order for this interface to appear, your hosting provider **must** enable the [_cPanel Store_](https://store.cpanel.net/) provider in WHM’s [Market Provider Manager](https://docs.cpanel.net/whm/market/market-provider-manager/) interface ( _WHM » Home » Market » Market Provider Manager_).
- This interface **automatically** installs SSL certificates you purchase through it. To install certificates manually, use the _Install and Manage SSL for your Site_ section of cPanel’s [_SSL/TLS_](https://docs.cpanel.net/cpanel/security/ssl-tls/#install-and-manage-ssl-for-your-site-https) interface ( _cPanel » Home » Security » SSL/TLS_).

Important:

- A cPanelID is necessary for SSL certificates provided by cPanel through the [cPanel Store](https://store.cpanel.net/). Your cPanelID is the username and password combination for the cPanel Store, the [cPanel Tickets system](https://tickets.cpanel.net/), and our [Manage2 billing system](https://manage2.cpanel.net/). For more information about cPanelID, read our [cPanelID](https://docs.cpanel.net/knowledge-base/accounts/cpanelid) documentation.
- You can **only** purchase certificates for domains that resolve to an IP address on your server.
- [Linked mail nodes](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/) **must** use DNS Domain Control Validation [(DCV)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#domain-control-validation).
- If you are using [AutoSSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/) or SSL certificates purchased via your cPanel account to secure a [linked mail node](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/), your cPanel & WHM nodes **must** be able to manage the authoritative DNS server.

## Verification Process

The validation process for Organization Validated (OV) certificates and Extended Validation (EV) certificates requires between three and 30 days. The certificate issuer requires this time to validate the information about your business. EV certificates require more time to issue than OV certificates due to more stringent requirements. To expedite the validation process, click the associated information message for each certificate, if the message exists.

Important:

Your [Certificate Authority (CA)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#ca) will send you an email with additional validation instructions. Complete these instructions **as soon as possible** to avoid delays.

Although WebPros International, LLC will instantly issue a Domain-validated certificate (DV), the validation process may require up to 24 hours before the certificate is available for installation.

## Purchase certificates in the Simple interface

The default interface combines all domains on your account into a single list called the Simple purchase workflow. Then, it automatically determines the necessary number and arrangement of certificates to secure the domains that you select.

Note:

You **must** use the default interface to purchase wildcard certificates.

To purchase certificates for domains on your account using the default interface, perform the following steps:

[Select the domains](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#select-the-domains1764175696022017583)

Select the checkbox next to each domain name that you wish to secure with a certificate.

- Lines with domains that begin with an asterisk character (`*`) represent wildcard certificates. If you select a wildcard certificate, the interface will automatically select all of the domains that the wildcard certificate will secure.
- The interface displays a lock icon and an _An SSL certificate currently secures this domain_ message with each domain that a certificate already secures.
- The interface will not allow you to purchase a certificate for a domain if a certificate is pending for that domain. Click _View_ to view the pending certificate’s information.

Your server will attempt a Domain Control Validation (DCV) check of each domain that you select.

- Gray domains have not yet passed a DCV check.
- Green domains passed the DCV check.
- Red domains failed the DCV check.
- Certificates that you purchased through the [cPanel Store](https://store.cpanel.net/) automatically include, for no additional cost, each of the domain’s corresponding `www.` subdomains that pass a DCV check.

The interface will **not** allow you to purchase a domain for a website if the list contains a domain with an IP address that does not resolve to your server.

- To remove a domain from a website list, deselect the appropriate checkbox.
- To remove all domains that did not validate from a website list, click _Remove all domains that did not validate_.
- To add a domain back to a website list, select the appropriate checkbox.

Click _Done_ to continue.

[Select the certificate's product](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#select-the-certificates-product1764175696022093760)

Click _Continue_ to display a list of certificates that are available for purchase. Select the desired certificate.

- The list of certificates depends on the certificate providers that your hosting provider selects for the cPanel Market.
- The interface displays a price for each domain on a certificate, and it displays a description when you select it.
- The interface displays an order subtotal in the upper-right corner of the table. This allows you to compare the wildcard certificate price to individual certificate prices.

[Resolve issues and confirm selections](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#resolve-issues-and-confirm-selections1764175696022166274)

The interface lists any domain and certificate selection issues that it detects.

- You **must** resolve red critical warnings.
- We **strongly** recommend that you resolve yellow alerts.

After you resolve the critical issues, the interface will display your domain and certificate selections for confirmation. To edit the domain list or select a different certificate, click the appropriate green edit icon.

[Extended Validation (EV) or Organizational Validation (OV)](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#extended-validation-ev-or-organizational-validation-ov1764175696022222004)

If you selected an EV or OV certificate in the previous step, a new tab will appear, in which you must enter information about your organization. The certificate authority (CA) will use this information to validate your organization.

- Use the _address_ text boxes to enter information about your organization’s physical or mailing address.
- Use the _where incorporated_ (JOI) text boxes to enter information about where your organization registered as a company.

[Check out from the cPanel Store](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#check-out-from-the-cpanel-store1764175696022422234)

Click _Check Out_ to proceed to the [cPanel Store](https://store.cpanel.net/). Then, log in to the cPanel Store with your cPanelID account.

Important:

You **must** possess a cPanelID user account in order to purchase SSL certificates through this interface. cPanelID is the username and password combination for the [_cPanel Store_](https://store.cpanel.net/), the cPanel Tickets system, and our Manage2 billing system. For more information about cPanelID, read our [cPanelID](https://docs.cpanel.net/knowledge-base/accounts/cpanelid) documentation.


- If you already possess an account at the _cPanel Store_, the cPanel Tickets system, or the Manage2 billing system, use it as your cPanelID.
- If you do **not** already have a cPanelID account, click _Create Account_, enter your email address in the new interface, and click _Create Account_.

[Confirm the shopping cart contents](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#confirm-the-shopping-cart-contents1764175696022488846)

Your server will upload your shopping cart to the cPanel Store, and your browser will redirect you to the [cPanel Store](https://store.cpanel.net/).

- The left side of the interface displays your desired certificates, their cost, estimated tax, and the total price.
- The right side of the interface displays your payment information and options.

[Confirm payment information](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#confirm-payment-information1764175696022539857)

Confirm your payment information, or make any necessary changes.

- Click _Pay Now_ to confirm that you wish to purchase the certificates.
- Click _Cancel Transaction_ to cancel the transaction.

[Return to the cPanel interface](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#return-to-the-cpanel-interface1764175696022633521)

The [_cPanel Store_](https://store.cpanel.net/) will process your purchase, and your browser will return you to this interface. Click _View Pending Certificates_ to display a list of certificates that you have purchased.

The [_cPanel Store_](https://store.cpanel.net/) will automatically email a copy of the certificate to the user. If the _cPanel Store_ fails to redirect the user back to this interface, the user can install the certificate manually.

## Purchase certificates in the Advanced interface

The _Advanced_ interface organizes the account’s domains, subdomains, and aliased domains by their website. cPanel’s configuration of the Apache web server only allows you to secure one virtual host’s (website’s) domains per certificate. For example, the system treats an addon domain as its corresponding subdomain. Because each subdomain exists in its own website, an addon domain exists in its own website.

Click _Create Advanced (No Wildcard)_ while in the _Simple_ interface and the _Advanced_ interface will appear.

Note:

You **cannot** purchase a wildcard certificate through the _Advanced_ interface.

To purchase a certificate or certificates for domains on your account from the _Advanced_ interface, perform the following steps:

[Select the domains](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#select-the-domains1764175696022910232)

Select the checkbox next to each domain name that you wish to add to a website list’s certificate.

- The interface will not allow you to purchase a certificate for a domain if a certificate is pending for that domain. Click _View_ to view the pending certificate’s information.
- Select the checkbox at the top of a website list to add all of its domains to the certificate.

Your server will attempt a Domain Control Validation (DCV) check of each domain that you select.

- Green domains with a checkmark pass the DCV check.
- Red domains with a blue warning triangle fail the DCV check. The interface will display the error message below the domain.
- Certificates that you purchased through the [cPanel Store](https://store.cpanel.net/) automatically include each domain’s corresponding `www.` subdomain (that pass a DCV check) for no additional cost.

The interface will **not** allow you to purchase a domain for a website if the list contains a domain with an IP address that does not resolve to your server.

- To remove a domain from a website list, deselect the appropriate checkbox.
- To remove all domains that did not validate from a website list, click _Remove all domains that did not validate_.
- To add a domain back to a website list, select the appropriate checkbox.

[Select the certificates](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#select-the-certificates1764175696022991696)

Click _Continue_ to display a list of certificates that are available for purchase on that website list. Select the desired certificate for each website.

- The list of certificates depends on the certificate providers that your hosting provider selects for the cPanel Market.
- The interface displays a price for each domain on a certificate, and displays a description when you select it.
- The interface displays an order subtotal in the upper-right corner of the table.

You cannot purchase wildcard certificates through the _Advanced_ interface.

[Extended Validation (EV) or Organizational Validation (OV)](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#extended-validation-ev-or-organizational-validation-ov1764175696023052906)

If you selected an EV or OV certificate in the previous step, a new tab will appear, in which you must enter information about your organization. The certificate authority (CA) will use this information to validate your organization.

- Use the _address_ text boxes to enter information about your organization’s physical or mailing address.
- Use the _where incorporated_ (JOI) text boxes to enter information about where your organization registered as a company.

[Add certificates to cart](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#add-certificates-to-cart1764175696023099963)

Click _Add to Cart_ to add a website list’s certificate to your shopping cart. To edit the domain list or select a different certificate, click the appropriate green edit icon and make your changes.

[Check out from the cPanel Store](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#check-out-from-the-cpanel-store1764175696023332796)

Click _Check Out_ to proceed to the _cPanel Store_. Then, log in to the _cPanel Store_ with your cPanelID account.

Important:

You **must** possess a cPanelID user account in order to purchase SSL certificates through this interface. cPanelID is the username and password combination for the _cPanel Store_, the cPanel Tickets system, and our Manage2 billing system. For more information about cPanelID, read our [cPanelID](https://docs.cpanel.net/knowledge-base/accounts/cpanelid) documentation.


- If you already possess an account at the [_cPanel Store_](https://store.cpanel.net/), the cPanel Tickets system, or the Manage2 billing system, use it as your cPanelID.
- If you do **not** already have a cPanelID account, click _Create Account_, enter your email address in the new interface, and click _Create Account_.

[Confirm the shopping cart contents](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#confirm-the-shopping-cart-contents1764175696023412555)

Your server will upload your shopping cart to the [_cPanel Store_](https://store.cpanel.net/), and your browser will redirect you to the _cPanel Store_ interface.

- The left side of the interface displays your desired certificates, their cost, estimated tax, and the total price.
- The right side of the interface displays your payment information and options.

[Confirm payment information](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#confirm-payment-information1764175696023460384)

Confirm your payment information, or make any necessary changes.

Click _Pay Now_ to confirm that you wish to purchase the certificates, or click _Cancel Transaction_ to cancel the transaction.

[Return to the cPanel interface](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/#return-to-the-cpanel-interface1764175696023514050)

The _cPanel Store_ will process your purchase, and your browser will return you to this interface. Click _View Pending Certificates_ to display a list of certificates that you have purchased.

The _cPanel Store_ will automatically email a copy of the certificate to the user. If the _cPanel Store_ fails to redirect the user back to this interface, the user can install the certificate manually.

## Pending Certificates

The _Pending Certificates_ section of the interface lists all of the SSL certificates that you have purchased from the [_cPanel Store_](https://store.cpanel.net/). The system will automatically poll the certificate provider to determine whether each pending certificate is ready. Refresh the page to display the most current results.

When a certificate is ready, the system will download that certificate and automatically install it on the website.

- To manually check the pending certificate queue, click _Check Pending Certificates_.
- To show the details of a certificate, click _Show Details_.
- To hide the details of a certificate, click _Hide Details_.
- To cancel a purchase, click _Cancel_ and confirm that you wish to cancel the transaction.
- To contact the _cPanel Market_ provider about a certificate order, click _Get Help With This Order_.

The interface may display the following status messages:

- _CSR Status_ — Whether the server has finished the [certificate signing requests](https://docs.cpanel.net/cpanel/security/ssl-tls) (CSR). The server submits a CSR to the Certificate Authority (CA) to start the validation process.
- _DCV Status_ — Whether the server has finished the DCV check. Often, this finishes automatically when you select a domain.
- _Free DV Up Status_ — Whether the server has installed a temporary Domain Validated (DV) certificate. A DV certificate secures the domain during the OV or EV certificate validation.
- _EV Click-Through Status_ — A list of items for either you or the CA to finish. The CA cannot issue the EV certificate if any uncompleted items remain. For more information, read Sectigo’s [What is required for validation?](https://support.sectigo.com/Com_KnowledgeDetailPage?Id=kA01N000000zFOr) documentation.






Remember:





If a URL to expedite the validation process exists, the interface will display it in this section.

- _OV Callback Status_ — Whether the CA has verified the organization’s validity via a phone call.






Remember:





If a URL to expedite the validation process exists, the interface will display it in this section.

- _OV Status_ — A list of items for either you or the CA to finish. The CA cannot issue the OV certificate if any uncompleted items remain.
- _Validation Status_ — Whether the validation process is finished.

#### Additional Documentation

* * *

- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [Security Policy](https://docs.cpanel.net/cpanel/security/security-policy/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [SSL/TLS Status](https://docs.cpanel.net/cpanel/security/ssl-tls-status/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×