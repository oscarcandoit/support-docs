---
url: "https://docs.cpanel.net/whm/multi-account-functions/modify-upgrade-multiple-accounts/"
title: "Modify/Upgrade Multiple Accounts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/multi-account-functions/modify-upgrade-multiple-accounts/#main-content)

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
3. [Multi Account Functions](https://docs.cpanel.net/whm/multi-account-functions/)
4. Modify/Upgrade Multiple Accounts


[accounts](https://docs.cpanel.net/tags/accounts/) [packages](https://docs.cpanel.net/tags/packages/) [whmui](https://docs.cpanel.net/tags/whmui/) [jupiter](https://docs.cpanel.net/tags/jupiter/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/multi-account-functions/modify-upgrade-multiple-accounts/#overview)

* * *

[Modify an account’s specifications](https://docs.cpanel.net/whm/multi-account-functions/modify-upgrade-multiple-accounts/#modify-an-accounts-specifications)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/multi-account-functions/modify-upgrade-multiple-accounts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/multi-account-functions/modify-upgrade-multiple-accounts/#overview)

* * *

[Modify an account’s specifications](https://docs.cpanel.net/whm/multi-account-functions/modify-upgrade-multiple-accounts/#modify-an-accounts-specifications)

* * *

## Modify/Upgrade Multiple Accounts

![](https://docs.cpanel.net/img/whm-icons/modify_upgrade_multiple_accounts.svg)

_Valid for versions 106 through the latest version_

#### Version:

#### [106](https://docs.cpanel.net/whm/multi-account-functions/modify-upgrade-multiple-accounts/)

Last modified: _2024 November 5_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to simultaneously change the attributes of multiple accounts to use the same settings.

Important:

When you modify an account, the system overrides any custom settings that you assign to the account. For example, if you directly assigned a bandwidth quota to an account and then use this interface to modify the bandwidth quota for multiple accounts, the system overwrites the account’s bandwidth setting. You **must** directly assign the amount of bandwidth again.


## Modify an account’s specifications

To modify an account’s specifications, perform the following steps:

1. Select the accounts that you wish to modify.





Note:




The section on the right side of the interface allows you to search for accounts by user, domain, reseller or owner, package, theme, or locale. Enter the search criteria in the available text box on the right, and then click _Select Matching Users_ to select users or _DeSelect Matching Users_ to deselect users.


2. Select the configuration options that you wish to change from the menus below.
   - _Reseller_ — Specifies the owner or reseller who owns the account.
   - _Theme_ — Specifies the account’s cPanel theme.
   - _Start Date_ — Specifies the account’s creation date.
   - _Language_ — Specifies the account’s display language.






     Note:





- If the cPanel user selects a language through cPanel’s [_Change Language_](https://docs.cpanel.net/cpanel/preferences/change-language/) interface ( _cPanel » Home » Preferences » Change Language_), you **cannot** change the language here. To change the language, you **must** log in to the cPanel account.

   - _Package_ — Specifies the hosting package. Packages set the account’s limitations for bandwidth, disk space, and other resources.
3. Click _Change_.

#### Additional Documentation

* * *

- [Add a Package](https://docs.cpanel.net/whm/packages/add-a-package/)
- [Change Multiple Sites' IP Addresses](https://docs.cpanel.net/whm/multi-account-functions/change-multiple-sites-ip-addresses/)
- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [Edit a Package](https://docs.cpanel.net/whm/packages/edit-a-package/)
- [Upgrade/Downgrade an Account](https://docs.cpanel.net/whm/account-functions/upgrade-downgrade-an-account/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×