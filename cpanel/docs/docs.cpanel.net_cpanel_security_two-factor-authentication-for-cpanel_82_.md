---
url: "https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/"
title: "Two-Factor Authentication for cPanel | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#main-content)

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
4. Two-Factor Authentication for cPanel


[authentication](https://docs.cpanel.net/tags/authentication/) [login](https://docs.cpanel.net/tags/login/) [passwords](https://docs.cpanel.net/tags/passwords/) [security](https://docs.cpanel.net/tags/security/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [2fa](https://docs.cpanel.net/tags/2fa/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#overview)

* * *

[2FA smartphone apps](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#2fa-smartphone-apps)

* * *

[Set up 2FA](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#set-up-2fa)

* * *

[Reconfigure 2FA](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#reconfigure-2fa)

* * *

[2FA authentication status tracking](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#2fa-authentication-status-tracking)

* * *

[Disable 2FA](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#disable-2fa)

* * *

[Lost access to 2FA](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#lost-access-to-2fa)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#overview)

* * *

[2FA smartphone apps](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#2fa-smartphone-apps)

* * *

[Set up 2FA](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#set-up-2fa)

* * *

[Reconfigure 2FA](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#reconfigure-2fa)

* * *

[2FA authentication status tracking](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#2fa-authentication-status-tracking)

* * *

[Disable 2FA](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#disable-2fa)

* * *

[Lost access to 2FA](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#lost-access-to-2fa)

* * *

## Two-Factor Authentication for cPanel

![](https://docs.cpanel.net/img/cpanel-icons/two_factor_authentication.svg)

_Valid for versions 82 through 112_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/)

#### [114](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/)

Last modified: _2025 July 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Two-factor authentication (2FA) is a popular security measure. When you [set up 2FA](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#set-up-2fa), you must provide two identification factors to log in to cPanel: your password and a six-digit security code. You can get this security code from a smartphone with a [a smartphone authenticator app](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#2fa-smartphone-apps).

Important:

To use this feature, your hosting provider **must** enable 2FA in WHM’s [_Two-Factor Authentication_](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/) interface ( _WHM » Home » Security Center » Two-Factor Authentication_).

## 2FA smartphone apps

Depending on your smartphone’s operating system, we suggest the following apps:

- Android™ — [Google Authenticator™](https://support.google.com/accounts/answer/1066447)
- iOS® — [Duo Mobile](https://guide.duosecurity.com/third-party-accounts)

## Set up 2FA

To set up 2FA, you **must** first install a [smartphone app](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#2fa-smartphone-apps) to generate your security code. Then, perform the following steps:

1. Click _Set Up Two-Factor Authentication_.
2. Link your cPanel account and your 2FA app with one of the following methods:
   - To automatically create the link, scan the displayed QR code with your app.
   - To manually create the link, enter the provided _Account_ and _Key_ information in your app.
3. Within your 2FA app, retrieve the six-digit security code.
4. In the _Security Code_ text box, enter the security code **before** it expires.
5. Click _Configure Two-Factor Authentication_.






Note:





If you see a _Failed to set user configuration: The security code is invalid._ error, a problem may exist with the date and time settings on your server. To fix the issue, contact your hosting provider.


Now, when you log in with your password, cPanel will ask for a security code. You **must** use your smartphone’s password app to find this security code, then use it to log into cPanel **before** the code expires. Without your smartphone, you **cannot** log in.

### Reconfigure 2FA

To reconfigure 2FA, click _Reconfigure_. Then, [follow the steps](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#set-up-2fa) to set up 2FA again with a new configuration.

Warning:

This action will **overwrite** your account’s existing 2FA configuration. As a result, any existing 2FA app configurations will **not** provide valid security codes. Additionally, the system will [log you out](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#2fa-authentication-status-tracking) of any other cPanel browser windows.

### 2FA authentication status tracking

2FA tracks your authentication status across browser windows. If you open cPanel in several browser windows, the following actions will cause all other windows to log out:

- Logging out of cPanel in your current browser window.
- [Setting up](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#set-up-2fa) 2FA.
- [Reconfiguring](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#reconfigure-2fa) 2FA.

## Disable 2FA

To disable 2FA, click _Remove Two-Factor Authentication_. Now when you log in with your password, cPanel will **not** ask for a security code.

## Lost access to 2FA

If you lose access to your existing 2FA application and are unable to log in, [contact your hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) to **disable** your account’s 2FA access. This will allow you to [set up 2FA](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/82/#set-up-2fa) again.

#### Additional Documentation

* * *

- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [Two-Factor Authentication for cPanel](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×