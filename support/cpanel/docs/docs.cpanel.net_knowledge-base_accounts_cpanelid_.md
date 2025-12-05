---
url: "https://docs.cpanel.net/knowledge-base/accounts/cpanelid/"
title: "cPanelID | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/#main-content)

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
3. [Accounts](https://docs.cpanel.net/knowledge-base/accounts/)
4. cPanelID


[pluggable](https://docs.cpanel.net/tags/pluggable/) [authentication](https://docs.cpanel.net/tags/authentication/) [login](https://docs.cpanel.net/tags/login/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/#overview)

* * *

[What is cPanelID?](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/#what-is-cpanelid)

* * *

[Obtain a cPanelID](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/#obtain-a-cpanelid)

* * *

[cPanelID and external authentication](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/#cpanelid-and-external-authentication)

* * *

[cPanelID and cPanel Store referral fees](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/#cpanelid-and-cpanel-store-referral-fees)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/#overview)

* * *

[What is cPanelID?](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/#what-is-cpanelid)

* * *

[Obtain a cPanelID](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/#obtain-a-cpanelid)

* * *

[cPanelID and external authentication](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/#cpanelid-and-external-authentication)

* * *

[cPanelID and cPanel Store referral fees](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/#cpanelid-and-cpanel-store-referral-fees)

* * *

## cPanelID

Last modified: _2025 July 29_

* * *

## Overview

cPanelID is an integrated set of credentials that customers can use to log in to various cPanel websites and services. This reduces the number of usernames and passwords to remember for systems such as the [cPanel Store](https://store.cpanel.net/), the [cPanel Tickets system](https://tickets.cpanel.net/), or the [Manage2 billing system](https://manage2.cpanel.net/).

To request additional cPanelID functionality, create a [Feature Request](https://features.cpanel.net/).

## What is cPanelID?

cPanelID uses OpenID® standards to allow cross-platform authentication and logins. For information about OpenID® Connect™, read OpenID’s [How OpenID Connect Works](https://openid.net/connect/) documentation.

You can use cPanelID to log in to the following resources:

- [The cPanel Store](https://store.cpanel.net/).
- [The cPanel Tickets system](https://tickets.cpanel.net/).
- [The Manage2 billing system](https://manage2.cpanel.net/).
- cPanelID-linked cPanel, WHM, or Webmail accounts on servers that use External Authentication.

Note:

cPanel & WHM does **not** currently allow you to navigate from your server to the cPanel Store without the need to log in again.

### Obtain a cPanelID

All cPanel & WHM license owners possess a cPanelID by default. cPanel, WHM, or Webmail users **must** register to obtain a cPanelID.

You can use either of the following methods to obtain a cPanelID:

- In the cPanel, WHM, or Webmail login interface, click _Log in Via cPanelID_ and then click _Register_.
- Navigate to the [cPanel Tickets System Registration page](https://tickets.cpanel.net/review/register.cgi) and enter your email address. The system will email a confirmation link to that address.

Notes:

- To add your name, address, and other information to your cPanelID account, log in to the cPanel Store and update your profile.
- To recover a cPanelID password, navigate to the [cPanel Tickets System Registration page](https://tickets.cpanel.net/review/register.cgi) and enter the account’s email address. The system will email a password reset link to that address.

### cPanelID and external authentication

External Authentication through cPanelID allows better integration between cPanel & WHM and other systems, such as purchases and installation of products and licenses through the cPanel Store. For more information about External Authentication, read our [Guide to External Authentication](https://api.docs.cpanel.net/guides/guide-to-external-authentication/) documentation.

- To use an external authentication method, you **must** access your WHM, cPanel, and Webmail accounts via an SSL connection.

  - If you do **not** access your accounts via SSL connection, the _Log in via cPanelID_ option will **not** display in the login interface.
  - For more information, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services) documentation.
- cPanelID is **not** the cPanelID External Authentication identity provider.

  - cPanelID is a username and password combination, while the cPanelID External Authentication identity provider allows you to link that cPanelID to your cPanel, WHM, or Webmail account and then log in.
  - For more information about External Authentication providers, read our [Guide to External Authentication](https://api.docs.cpanel.net/guides/guide-to-external-authentication/) documentation.

System administrators can disable the cPanelID External Authentication identity provider in WHM’s [_Manage External Authentications_](https://docs.cpanel.net/whm/security-center/manage-external-authentications) interface ( _WHM » Home » Security Center » Manage External Authentications_). If you disable this provider, users can continue to log in to your server, purchase and install SSL certificates, and perform administrative and user tasks through the existing functions.

Notes:

- Accounts can use Two-Factor Authentication (2FA) and External Authentication simultaneously.
  - When users log in, the system will request the one-time 2FA code after authentication via the External Authentication account.
  - If the External Authentication account also uses 2FA, you _must_ authenticate through that provider in addition to any 2FA that you can configure on your server.
- Users can use the cPanelID username and password to purchase SSL certificates through cPanel’s [_SSL/TLS Wizard_](https://docs.cpanel.net/cpanel/security/ssl-tls) interface ( _cPanel » Home » SSL/TLS » SSL/TLS Wizard_) without the need to link cPanelID to your cPanel account.

### cPanelID and cPanel Store referral fees

A customer’s reseller earns the referral fee for certificates that a customer buys through the cPanel Store. If you do not wish to connect your `root` user to cPanelID, you **must** transfer those customers to a reseller (or reseller with `root`-level privileges).

To do this, perform the following steps:

1. Use WHM’s [_Create a New Account_](https://docs.cpanel.net/whm/account-functions/create-a-new-account) interface ( _WHM » Home » Account Functions » Create a New Account_) to create the account (and select the Make the account a reseller option).
2. Use WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM » Home » Resellers > Edit Reseller Nameservers and Privileges_) to set the appropriate permissions for the new reseller.
3. Use WHM’s [_Reseller Center_](https://docs.cpanel.net/whm/resellers/reseller-center) interface ( _WHM » Home » Resellers » Reseller Center_) to transfer customers to the reseller account.

   - Be aware of reseller resources when you transfer accounts between resellers, such as shared IP addresses, nameservers, packages unique to resellers, etc.

#### Additional Documentation

* * *

- [Apparent Discrepancies in Bandwidth Usage Statistics](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/)
- [Manage External Authentications](https://docs.cpanel.net/whm/security-center/manage-external-authentications/)
- [Two-Factor Authentication for cPanel](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×