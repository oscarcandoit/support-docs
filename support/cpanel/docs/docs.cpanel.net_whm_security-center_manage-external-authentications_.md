---
url: "https://docs.cpanel.net/whm/security-center/manage-external-authentications/"
title: "Manage External Authentications | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/manage-external-authentications/#main-content)

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
3. [Security Center](https://docs.cpanel.net/whm/security-center/)
4. Manage External Authentications


[authentication](https://docs.cpanel.net/tags/authentication/) [security](https://docs.cpanel.net/tags/security/) [whmui](https://docs.cpanel.net/tags/whmui/) [pluggable](https://docs.cpanel.net/tags/pluggable/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/manage-external-authentications/#overview)

* * *

[Configure an identity provider](https://docs.cpanel.net/whm/security-center/manage-external-authentications/#configure-an-identity-provider)

* * *

[Manage credentials](https://docs.cpanel.net/whm/security-center/manage-external-authentications/#manage-credentials)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/manage-external-authentications/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/manage-external-authentications/#overview)

* * *

[Configure an identity provider](https://docs.cpanel.net/whm/security-center/manage-external-authentications/#configure-an-identity-provider)

* * *

[Manage credentials](https://docs.cpanel.net/whm/security-center/manage-external-authentications/#manage-credentials)

* * *

## Manage External Authentications

![](https://docs.cpanel.net/img/whm-icons/manage_external_authentication.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/security-center/manage-external-authentications/)

Last modified: _2025 July 29_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Manage External Authentications_ interface allows you to manage your server’s OpenID® Connect™-compliant identity providers. Once enabled, your users can use third-party authentication from these identity providers to log in to [cPanel](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/), [WHM](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/), or [Webmail](https://docs.cpanel.net/webmail/the-webmail-interface/). For example, if you enable [cPanelID](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/) external authentication from Google®, your users will be able to log into their cPanel servers using their Google credentials.

Important:

To use an external authentication method, you **must** access your WHM, cPanel, and Webmail accounts via an SSL connection. If you do **not** access your accounts via an SSL connection, the authentication button for the identity provider will **not** appear on your accounts’ _Login_ interfaces. For more information, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/) documentation.

Note:

- You can link one or more external accounts to one or more cPanel accounts, WHM accounts, or Webmail accounts.
- For external accounts with two-factor authentication enabled, you **must** authenticate through that identity provider **and** through any two-factor authentication that you configure on your server.
- Use the [`add_authn_link`](https://api.docs.cpanel.net/openapi/cpanel/operation/add_authn_link/) UAPI function to add additional accounts. Once you add more than one account, you can link additional accounts in the login interface.

## Configure an identity provider

The _Configure_ tab allows `root` users to configure the system’s identity provider settings for **all** users. You can also customize the look of an identity provider.

Note:

- This tab is **only** available to resellers with the _all_ privilege. A reseller without this privilege **cannot** access it. For more information, read our [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_) documentation.
- When you perform a cPanel Update (`upcp`), your server will automatically configure the [cPanelID](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/) External Authentication identity provider. It will also populate the necessary _Client ID_ and _Client Secret_ information from the license server.
- You **must** own an active cPanel license to configure cPanelID. For more information, read our [How to Purchase a cPanel License](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/) documentation.

To add a new identity provider, perform the following steps:

1. In the desired identity provider’s row, click _Configure_. A new interface will appear.
2. Enter the identity provider’s configuration settings in the appropriate text boxes.
   - Enter your desired colors for the Button color and Button text color text boxes in [hexadecimal color format](https://en.wikipedia.org/wiki/Web_colors) without the number sign symbol (`#`). For example, `ff0000` represents the color red.
   - Enter a Base64-encoded image in the _Button icon_ text box, and then enter the image format for that button icon.
   - Most OpenID Connect-compliant identity providers require _Client ID_, _Client Secret_, and _Redirect URI_ entries.
3. Select the _To ensure that the system works correctly, confirm that you have used the above URLs when you configure the provider._ checkbox.
4. Click _Save_. The list of identity providers will appear.
5. Set the toggle to the appropriate identity provider for a service from _Disabled_ to _Enabled_.

To disable an identity provider for a service, click the appropriate switch to toggle the provider from _Enabled_ to _Disabled_.

Important:

- If you remove an identity provider, the system will revoke access for **all** credentials that require that method.
- The system will automatically **disable** missing or misconfigured identity provider modules.
- If you change your server’s hostname, you **must** update the Redirect URI settings in the configuration settings at the identity provider’s site to reflect the new hostname.

## Manage credentials

The _Credentials_ section of the interface lists cPanel service accounts and their external authentication credentials. Resellers can also use this to manage their users’ settings.

To unlink an account from an external authentication provider, perform the following steps:

1. In the _Manage Users_ tab, click _Manage_ in the appropriate row for that user and service.
2. Click _Unlink_ next to the appropriate account.
3. Click _Unlink_ to confirm that you wish to revoke the account.

To associate a local server account with credentials through an authentication method, read our [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/) documentation.

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Manage Sudo Group Users](https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/)
- [Manage Wheel Group Users](https://docs.cpanel.net/whm/security-center/manage-wheel-group-users/)
- [Two-Factor Authentication for WHM](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×