---
url: "https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/"
title: "Two-Factor Authentication for WHM | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#main-content)

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
4. Two-Factor Authentication for WHM


[authentication](https://docs.cpanel.net/tags/authentication/) [security](https://docs.cpanel.net/tags/security/) [whmui](https://docs.cpanel.net/tags/whmui/) [2fa](https://docs.cpanel.net/tags/2fa/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#overview)

* * *

[Enable 2FA for logins](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#enable-2fa-for-logins)

* * *

[Failed to set user configuration: The security code is invalid](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#failed-to-set-user-configuration-the-security-code-is-invalid)

* * *

[Enable 2FA for APIs](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#enable-2fa-for-apis)

* * *

[Settings](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#settings)

* * *

[Manage Users](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#manage-users)

* * *

[Remove 2FA on a user account](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#remove-2fa-on-a-user-account)

* * *

[Enable 2FA on a user account](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#enable-2fa-on-a-user-account)

* * *

[Manage My Account](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#manage-my-account)

* * *

[Configure 2FA](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#configure-2fa)

* * *

[Remove 2FA](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#remove-2fa)

* * *

[Reconfigure 2FA](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#reconfigure-2fa)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#overview)

* * *

[Enable 2FA for logins](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#enable-2fa-for-logins)

* * *

[Failed to set user configuration: The security code is invalid](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#failed-to-set-user-configuration-the-security-code-is-invalid)

* * *

[Enable 2FA for APIs](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#enable-2fa-for-apis)

* * *

[Settings](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#settings)

* * *

[Manage Users](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#manage-users)

* * *

[Remove 2FA on a user account](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#remove-2fa-on-a-user-account)

* * *

[Enable 2FA on a user account](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#enable-2fa-on-a-user-account)

* * *

[Manage My Account](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#manage-my-account)

* * *

[Configure 2FA](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#configure-2fa)

* * *

[Remove 2FA](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#remove-2fa)

* * *

[Reconfigure 2FA](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#reconfigure-2fa)

* * *

## Two-Factor Authentication for WHM

![](https://docs.cpanel.net/img/whm-icons/two_factor_authentication.svg)

_Valid for versions 82 through 112_

#### Version:

#### [82](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/)

#### [114](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/)

Last modified: _2025 June 6_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to configure two-factor authentication (2FA), a security measure for the login interfaces of cPanel & WHM. Two-factor authentication requires two forms of identification. After you enter your password, you **must** enter a security code. 2FA **requires** a smartphone with a supported time-based one-time password (TOTP) app to provide this code. We suggest the following apps for Android™ and iOS®:

- [Google Authenticator™](https://support.google.com/accounts/answer/1066447)
- [Duo Mobile](https://guide.duosecurity.com/third-party-accounts)

For more information about 2FA, read Wikipedia’s [Two-Factor Authentication](https://en.wikipedia.org/wiki/Two-factor_authentication) article.

## Enable 2FA for logins

Warning:


This feature may cause some third-party applications to fail. It may also cause applications to improperly store data.



As the `root` user, set the toggle to _On_.

The interface will now display the `The Two-Factor Authentication Security Policy is Enabled` message. cPanel & WHM users can now configure 2FA.

cPanel users can configure 2FA for logins in cPanel’s [_Two-Factor Authentication_](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/) interface ( _cPanel » Home » Security » Two-Factor Authentication_), while the `root` user and resellers with [`create-acct` privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#account-management) can configure it in the [_Manage My Account_](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#manage-my-account) tab.

### Failed to set user configuration: The security code is invalid

If you see the `Failed to set user configuration: The security code is invalid.` error when you try to enable 2FA, your server’s date and time settings could be inaccurate. Run the `ntpdate` command to re-synchronize your server’s internal clock with the Network Time Protocol (NTP) server, then re-enable 2FA.

## Enable 2FA for APIs

To use 2FA for API functions with [username and password authentication](https://api.docs.cpanel.net/guides/guide-to-api-authentication/guide-to-api-authentication-username-and-password-authentication/), enable the _API requests_ option in the _Security Policy Extensions_ section of WHM’s [_Configure Security Policies_](https://docs.cpanel.net/whm/security-center/configure-security-policies/) interface ( _WHM » Home » Security Center » Configure Security Policies_).

## Settings

The _Settings_ tab allows you to configure the 2FA _Issuer_ setting. The _Issuer_ setting determines the name that appears in many authentication apps.

To set the _Issuer_ setting for 2FA, perform the following steps:

1. Click the _Settings_ tab.
2. Enter the desired value for the _Issuer_ setting, or retain the default value. For example, if you want users to search for `My Business Website` in their 2FA phone applications to receive authentication codes for your website, enter `My Business Website` here.





Note:





- If you do not enter a name for the _Issuer_ setting, it defaults to the hostname.
- Some authentication apps may display the hostname or _Account_ value instead of the _Issuer_ value.

3. Click _Save_.

## Manage Users

The _Manage Users_ tab displays the accounts for which you have enabled 2FA. It also allows you to disable 2FA on those accounts.

### Remove 2FA on a user account

To disable 2FA for a single user account on the _Manage Users_ list, click _Disable_ to the right of the user account.

To disable 2FA for multiple user accounts from the _Manage Users_ list, perform the following steps:

1. Select the _Manage Users_ tab.
2. Select the checkboxes to the left of each user account that you want to remove. To select all accounts, select the checkbox to the left of the _User_ heading.
3. Click the gear icon (![gear icon](https://docs.cpanel.net/img/gear-icon-2fa.png)) on the top right of the list, and then select _Disable Selected_.

Note:

- Select _Disable All_ to disable 2FA for every user account from the _Manage Users_ list. This will **not** disable 2FA on your own account.
- If a user loses access to their 2FA application, you can _Disable_ their access, then re-enable it. This will allow them to configure their access again.

### Enable 2FA on a user account

Important:

You **cannot** enable 2FA for a cPanel account through the WHM interface. You **must** enable the _Two-Factor Authentication Security Policy_ on the server in order to enable 2FA for cPanel accounts.

To enable 2FA for a user account, log in to the cPanel interface as the user and navigate to cPanel’s [_Two-Factor Authentication_](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/) interface ( _cPanel » Home » Security » Two-Factor Authentication_).

You can also call API functions to access 2FA functionality. For more information, read our [Guide to API Authentication](https://api.docs.cpanel.net/guides/guide-to-api-authentication/) documentation.

## Manage My Account

The _Manage My Account_ tab allows you to set up 2FA for the `root` user or a reseller account.

Important:

To use 2FA in WHM, a reseller account **must** possess the _Create Accounts_ (`create-acct`) privilege in WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_).


### Configure 2FA

To configure 2FA, perform the following steps in the _Manage My Account_ tab:

1. Click _Set Up Two-Factor Authentication_.
2. Link your cPanel account and your 2FA smartphone app:
   - To automatically create the link, scan the QR code that the _Manage My Account_ tab displays with your 2FA smartphone app.
   - To manually create the link, enter the _Account_ and _Key_ information that the _Manage My Account_ tab displays in your 2FA smartphone app app.
3. Within your 2FA smartphone app, retrieve the six-digit security code.
4. Enter the six-digit security code in the _Security Code_ text box.






Note:




The 2FA smartphone app will generate a new six-digit security code every 30 seconds. You **must** complete this step and Step 5 before the code you used expires.


5. Click _Configure Two-Factor Authentication_.

Note:

2FA supports **only** one concurrent session for any user. If you open several browser windows to cPanel & WHM and log out in one of them, the server will log out the other windows.

### Remove 2FA

To remove 2FA, click _Remove Two-Factor Authentication_.

### Reconfigure 2FA

To reconfigure 2FA, click _Reconfigure_. Then, follow the steps above to [configure 2FA](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/82/#configure-2fa).

Warning:


If you reconfigure 2FA for your account, any existing configurations will no longer produce valid security codes.



#### Additional Documentation

* * *

- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [Manage External Authentications](https://docs.cpanel.net/whm/security-center/manage-external-authentications/)
- [Manage Sudo Group Users](https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/)
- [Manage Wheel Group Users](https://docs.cpanel.net/whm/security-center/manage-wheel-group-users/)
- [Two-Factor Authentication for WHM](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×