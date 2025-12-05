---
url: "https://docs.cpanel.net/cpanel/preferences/password-and-security/"
title: "Password & Security | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/preferences/password-and-security/#main-content)

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
3. [Preferences](https://docs.cpanel.net/cpanel/preferences/)
4. Password & Security


[passwords](https://docs.cpanel.net/tags/passwords/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/preferences/password-and-security/#overview)

* * *

[Change your password](https://docs.cpanel.net/cpanel/preferences/password-and-security/#change-your-password)

* * *

[Create a strong password](https://docs.cpanel.net/cpanel/preferences/password-and-security/#create-a-strong-password)

* * *

[Password Generator](https://docs.cpanel.net/cpanel/preferences/password-and-security/#password-generator)

* * *

[External Authentication](https://docs.cpanel.net/cpanel/preferences/password-and-security/#external-authentication)

* * *

[Link your account](https://docs.cpanel.net/cpanel/preferences/password-and-security/#link-your-account)

* * *

[Unlink your account](https://docs.cpanel.net/cpanel/preferences/password-and-security/#unlink-your-account)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/preferences/password-and-security/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/preferences/password-and-security/#overview)

* * *

[Change your password](https://docs.cpanel.net/cpanel/preferences/password-and-security/#change-your-password)

* * *

[Create a strong password](https://docs.cpanel.net/cpanel/preferences/password-and-security/#create-a-strong-password)

* * *

[Password Generator](https://docs.cpanel.net/cpanel/preferences/password-and-security/#password-generator)

* * *

[External Authentication](https://docs.cpanel.net/cpanel/preferences/password-and-security/#external-authentication)

* * *

[Link your account](https://docs.cpanel.net/cpanel/preferences/password-and-security/#link-your-account)

* * *

[Unlink your account](https://docs.cpanel.net/cpanel/preferences/password-and-security/#unlink-your-account)

* * *

## Password & Security

![](https://docs.cpanel.net/img/cpanel-icons/change_password.svg)

_Valid for versions 108 through the latest version_

#### Version:

#### [108](https://docs.cpanel.net/cpanel/preferences/password-and-security/)

Last modified: _2025 April 11_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you to update your cPanel, team owner, or team user password. A strong password helps you to secure your cPanel account.

To learn more about team owners and users, read cPanel’s [_Manage Team_](https://docs.cpanel.net/cpanel/preferences/manage-team/) interface ( _cPanel_ » _Home_ » _Preferences » Manage Team_) documentation.

Note:

Hosting providers can update a cPanel account’s password in WHM’s [_Password Modification_](https://docs.cpanel.net/whm/account-functions/password-modification/) interface ( _WHM » Home » Account Functions » Password Modification_).

## Change your password

Note:

In cPanel & WHM version 130, we added the ability to change your password to the [_Account Preferences_](https://docs.cpanel.net/cpanel/preferences/account-preferences/) interface ( _cPanel » Home » Preferences » Account Preferences_).

To change your password, enter the desired information and click _Change your password now!_, or use the [_Password Generator_](https://docs.cpanel.net/cpanel/preferences/password-and-security/#password-generator) feature.

Note:

You **must** enable Digest Authentication if you use Windows® Vista, Windows® 7, Windows® 8, or Windows® 10 and you access Web Disk over a clear text, unencrypted connection.

### Create a strong password

To ensure your account’s security, make **certain** to create a strong password:

- Use a different password for each of your important accounts (for example, your email accounts).
- Use a combination of letters, numbers, and symbols in your password.

Note:

Manually generated passwords do **not** have character limits.

### Password Generator

This feature generates secure passwords, which are difficult for malicious users to guess. You can use the _Password Generator_ feature in any interface that displays it.

When you click _Password Generator_, a new window appears that contains a generated password in a text box. Click _Generate Password_ until it generates a satisfactory password.

Note:

System-generated passwords have an 18-character limit.

#### Configure security requirements

To set the security requirements of the new password, perform the following steps:

1. Click _Advanced Options_.
2. Enter the desired length of the password in the _Length_ text box.
3. Select whether to include uppercase letters, lowercase letters, numbers, or symbols.
4. Copy the password in a safe place and select the _I have copied this password in a safe place_ checkbox at the bottom of the window.
5. Click _Use Password_ to use the generated password. To reject the password and close the _Password Generator_ window, click _Cancel_.

## External Authentication

Your system administrator may allow users to access cPanel with external authentication credentials (for example, cPanelID, WHMCS, Google® Accounts, Facebook®, or your hosting provider’s portal). This functionality allows you to reduce the number of passwords that you need to remember.

The _External Authentication_ tab lists the credentials for OpenID Connect-compliant identity providers that you can use to log in to cPanel and Webmail. You can also use this section of the interface to link new credentials or unlink existing credentials.

Important:

- This section **only** appears if the server administrator has configured at least one external authentication module.
- This interface **only** displays the external authentication identity providers that your hosting provider selects in WHM’s [_Manage External Authentications_](https://docs.cpanel.net/whm/security-center/manage-external-authentications/) interface ( _WHM » Home » Security Center » Manage External Authentications_).

Note:

- Most identity providers allow you to register for an account as part of the authentication process.
- Your [cPanelID](https://id.cpanel.net/) uses the same username and password that you use for the cPanel Store, the cPanel Tickets system, and the Manage2 billing system. If you do not already use a cPanelID, you can register for one during the authentication process.
- You can link one or more external accounts to one or more cPanel accounts, WHM accounts, or Webmail accounts.
- If you link to an external account through an identity provider that uses two-factor authentication, you **must** also authenticate through that identity provider in addition to any two-factor authentication that you configure on your server.

### Link your account

To link your cPanel or Webmail account to credentials at an external authentication identity provider, perform the following steps:

1. Click the _External Authentication_ tab.
2. Click _Link Account_ next to the name of the appropriate identity provider. A new login interface will appear for that identity provider.
3. Enter the requested username, password, and other credentials for that identity provider. If you are currently logged in to that identity provider, the interface will skip this step.
4. Confirm that you wish to allow the provider to link to your cPanel or Webmail account.
5. Confirm that you wish to link your cPanel account to the provider’s authentication credentials.

### Unlink your account

To unlink external authentication identity provider credentials from your account, click _Unlink Account_ next to the appropriate account. A new interface will appear that asks you to confirm that you wish to unlink your account.

#### Additional Documentation

* * *

- [Webmail — Edit Your Settings](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [Password Modification](https://docs.cpanel.net/whm/account-functions/password-modification/)
- [Password Strength Configuration](https://docs.cpanel.net/whm/security-center/password-strength-configuration/)
- [Two-Factor Authentication for cPanel](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×