---
url: "https://docs.cpanel.net/whm/account-functions/rearrange-an-account/"
title: "Rearrange an Account | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/account-functions/rearrange-an-account/#main-content)

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
4. Rearrange an Account


[accounts](https://docs.cpanel.net/tags/accounts/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/account-functions/rearrange-an-account/#overview)

* * *

[Rearrange an account](https://docs.cpanel.net/whm/account-functions/rearrange-an-account/#rearrange-an-account)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/account-functions/rearrange-an-account/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/account-functions/rearrange-an-account/#overview)

* * *

[Rearrange an account](https://docs.cpanel.net/whm/account-functions/rearrange-an-account/#rearrange-an-account)

* * *

## Rearrange an Account

![](https://docs.cpanel.net/img/whm-icons/rearrange_an_account.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/account-functions/rearrange-an-account/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to change which home directory stores an account. You can use this feature when, for example, a hard drive begins to run out of space and your server contains an additional hard drive.

Warning:

If a script relies on a hardcoded path to a resource that you move, you **must** update that path to use the new location or the script will fail.


## Rearrange an account

To change an account’s hard drive, perform the following steps:

1. Select a domain from the _Domains_ menu or select a user from the _Users_ menu.

2. Click _Rearrange_.

3. Select the home directory in which you wish to store the account.







Note:





The new home directory **must** exist in one of the following settings in WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager Setup_):



- _Additional home directories matching the following value will also be used for new home directory creations._

- _Enter the location where you wish for new users’ home directories to be created. settings_


4. Click _Move Account_.


#### Additional Documentation

* * *

- [Change Site's IP Address](https://docs.cpanel.net/whm/account-functions/change-site-ip-address/)
- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [Email All Users](https://docs.cpanel.net/whm/account-functions/email-all-users/)
- [Manage Account Suspension](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/)
- [Terminate Accounts](https://docs.cpanel.net/whm/account-functions/terminate-accounts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×