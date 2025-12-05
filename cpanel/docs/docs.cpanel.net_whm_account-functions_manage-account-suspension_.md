---
url: "https://docs.cpanel.net/whm/account-functions/manage-account-suspension/"
title: "Manage Account Suspension | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/#main-content)

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
4. Manage Account Suspension


[whmui](https://docs.cpanel.net/tags/whmui/) [accounts](https://docs.cpanel.net/tags/accounts/) [accountsuspension](https://docs.cpanel.net/tags/accountsuspension/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/#overview)

* * *

[List of accounts](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/#list-of-accounts)

* * *

[Suspend an account](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/#suspend-an-account)

* * *

[Unsuspend an account](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/#unsuspend-an-account)

* * *

[Limitations](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/#limitations)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/#overview)

* * *

[List of accounts](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/#list-of-accounts)

* * *

[Suspend an account](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/#suspend-an-account)

* * *

[Unsuspend an account](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/#unsuspend-an-account)

* * *

[Limitations](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/#limitations)

* * *

## Manage Account Suspension

![](https://docs.cpanel.net/img/whm-icons/manage_account_suspension.svg)

_Valid for versions 94 through the latest version_

#### Version:

#### [94](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/)

Last modified: _2025 June 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Important:

Suspension and bandwidth limiting are two separate functions. For more information, read our [Account Suspension Versus Bandwidth Limiting and Account Termination](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination) documentation.

This feature allows you to suspend and unsuspend accounts on your server. For example, you may wish to temporarily disable delinquent accounts.

For more information about the effects of account suspension, read our [What Happens When You Suspend an Account](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account) article.

## List of accounts

The interface will display the action the system will take with incoming email for suspended cPanel accounts. You can edit this setting in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/#delivery-behavior-for-suspended-cpanel-accounts) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).

The interface lists all of the accounts on your server. The interface displays active, unsuspended accounts in white, and displays suspended accounts in red. In the image below, the `example1.com` account is suspended:

![list of accounts in the Manage Account Suspension interface](https://docs.cpanel.net/img/manage-account-suspension.png)

## Suspend an account

To suspend an account, perform the following steps:

1. Select the account that you wish to suspend.

2. Enter a reason in the text box.







Note:





We recommend that you **always** specify a reason for account suspension. If a reseller owns the account, the reason may help that reseller to resolve the issue quickly.

3. To ensure that resellers cannot unsuspend the account, select the _Prevent resellers from unsuspending_ checkbox.

4. Click _Suspend_.


## Unsuspend an account

To unsuspend an account, perform the following steps:

1. Select the account that you wish to unsuspend.







Remember:





Only users with `root` privileges can unsuspend a locked account.

2. To keep [service proxying](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#service-proxying), select the _Retain Service Proxying_ checkbox. Most users do not need to select this checkbox.

3. Click _Unsuspend_.


## Limitations

This interface has the following limitations:

- The system will **not** suspend any of the account’s Amazon RDS™ remote databases.
- This feature uses Apache® virtual host include files to redirect incoming web traffic to an Account Suspended interface.
- You cannot change a suspended account’s password.
- When you suspend an account, the system adds a special character to the front of the cPanel user’s password field. This special character creates an invalid hash, which results in an invalid password message to the cPanel user.

#### Additional Documentation

* * *

- [Change Site's IP Address](https://docs.cpanel.net/whm/account-functions/change-site-ip-address/)
- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [Email All Users](https://docs.cpanel.net/whm/account-functions/email-all-users/)
- [List Suspended Accounts](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/)
- [Unsuspend Bandwidth Exceeders](https://docs.cpanel.net/whm/account-functions/unsuspend-bandwidth-exceeders/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×