---
url: "https://docs.cpanel.net/whm/account-functions/password-modification/"
title: "Password Modification | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/account-functions/password-modification/#main-content)

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
3. [Account Functions](https://docs.cpanel.net/whm/account-functions/)
4. Password Modification


[passwords](https://docs.cpanel.net/tags/passwords/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/account-functions/password-modification/#overview)

* * *

[Change password](https://docs.cpanel.net/whm/account-functions/password-modification/#change-password)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/account-functions/password-modification/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/account-functions/password-modification/#overview)

* * *

[Change password](https://docs.cpanel.net/whm/account-functions/password-modification/#change-password)

* * *

## Password Modification

![](https://docs.cpanel.net/img/whm-icons/password_modification.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/account-functions/password-modification/)

Last modified: _2025 January 8_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to change the passwords for your reseller and cPanel accounts. Administrators can set a new password without the original password. This becomes useful when users lose, forget, or compromise their password.

Note:

- You **cannot** retrieve passwords. If a user loses or forgets a password, you **must** create a new password.

- cPanel users can reset their account password in cPanel’s [_Password and Security_](https://docs.cpanel.net/cpanel/preferences/password-and-security/) interface ( _cPanel » Home » Preferences » Password and Security_)


## Change password

To change an account’s password, perform the following steps:

1. Select the account for which to change the password.
2. Enter and confirm the new password in the appropriate text boxes.
3. Select _Enable Digest Authentication_ to enable [digest authentication](https://en.wikipedia.org/wiki/Digest_access_authentication) support. This option allows you to access your Web Disk through a clear text connection or an unencrypted connection. You **must** select this checkbox if you run Microsoft® Windows Vista®, Windows® 7, Windows 8, or Windows 10, and you access Web Disk over a clear text, unencrypted connection.
4. Click _Change Password_.

Note:

- Manually generated passwords do **not** have a character limit.
- System-generated passwords have an 18-character limit.

#### Additional Documentation

* * *

- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [Force Password Change](https://docs.cpanel.net/whm/account-functions/force-password-change/)
- [Password & Security](https://docs.cpanel.net/cpanel/preferences/password-and-security/)
- [Password Strength Configuration](https://docs.cpanel.net/whm/security-center/password-strength-configuration/)
- [Two-Factor Authentication for cPanel](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×