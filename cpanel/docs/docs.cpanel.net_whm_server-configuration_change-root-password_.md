---
url: "https://docs.cpanel.net/whm/server-configuration/change-root-password/"
title: "Change Root Password | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/change-root-password/#main-content)

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
3. [Server Configuration](https://docs.cpanel.net/whm/server-configuration/)
4. Change Root Password


[passwords](https://docs.cpanel.net/tags/passwords/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-configuration/change-root-password/#overview)

* * *

[How to change your root password](https://docs.cpanel.net/whm/server-configuration/change-root-password/#how-to-change-your-root-password)

* * *

[Password strength](https://docs.cpanel.net/whm/server-configuration/change-root-password/#password-strength)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/change-root-password/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-configuration/change-root-password/#overview)

* * *

[How to change your root password](https://docs.cpanel.net/whm/server-configuration/change-root-password/#how-to-change-your-root-password)

* * *

[Password strength](https://docs.cpanel.net/whm/server-configuration/change-root-password/#password-strength)

* * *

## Change Root Password

![](https://docs.cpanel.net/img/whm-icons/change_root_password.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/server-configuration/change-root-password/)

Last modified: _2025 June 6_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Change Root Password_ interface ( _WHM » Home » Server Configuration » Change Root Password_) allows you to change the `root` user’s password. You do **not** need to use the old password.

Important:

- This interface **only** appears if you are logged in as the `root` user or [a reseller with `root` privileges](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/).
- This interface **only** lets you change the `root` user’s password. To change a cPanel user or reseller’s password, use the [_Password Modification_](https://docs.cpanel.net/whm/account-functions/password-modification/) interface ( _WHM » Home » Account Functions » Password Modification_). cPanel users can also reset their own passwords in cPanel’s [_Password & Security_](https://docs.cpanel.net/whm/account-functions/password-modification/) interface ( _cPanel » Home » Preferences » Password & Security_).

We **strongly** recommend that you use a secure password. A secure password is **not** a dictionary word, and it contains the following:

- Uppercase and lowercase letters.

- Numbers.

- Symbols.


If you logged in as the `root` user, you can also access this interface by clicking your WHM account icon (![WHM account icon](https://docs.cpanel.net/img/jupiter-user-icon.png)) and clicking _Password Modification_.

## How to change your root password

To change the `root` user’s password, perform the following steps:

1. Enter a new password in the _New root Password_ text box. You can also click [_Generate_](https://docs.cpanel.net/cpanel/preferences/password-and-security/#password-generator).

2. Enter the same password in the _Confirm Password_ text box.

3. Click _Change Password_.


## Password strength

A green password _Strength_ meter will show you whether you meet the minimum requirements. `0` indicates a weak password, while `100` indicates a very secure password. You can set the minimum password strength for the `root` user with the _System/cPanel Accounts_ setting in WHM’s [_Password Strength Configuration_](https://docs.cpanel.net/whm/security-center/password-strength-configuration) interface ( _WHM » Home » Security Center » Password Strength Configuration_).

#### Additional Documentation

* * *

- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Change Database User Password](https://docs.cpanel.net/whm/database-services/change-database-user-password/)
- [Change MySQL User Password](https://docs.cpanel.net/whm/sql-services/change-mysql-user-password/)
- [CloudLinux Manager](https://docs.cpanel.net/whm/server-configuration/cloudlinux-manager/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×