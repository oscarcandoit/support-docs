---
url: "https://docs.cpanel.net/whm/account-information/list-suspended-accounts/"
title: "List Suspended Accounts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/#main-content)

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
3. [Account Information](https://docs.cpanel.net/whm/account-information/)
4. List Suspended Accounts


[accounts](https://docs.cpanel.net/tags/accounts/) [whmui](https://docs.cpanel.net/tags/whmui/) [accountsuspension](https://docs.cpanel.net/tags/accountsuspension/) [accounttermination](https://docs.cpanel.net/tags/accounttermination/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/#overview)

* * *

[Suspended domains](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/#suspended-domains)

* * *

[How to suspend and unsuspend accounts](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/#how-to-suspend-and-unsuspend-accounts)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/#overview)

* * *

[Suspended domains](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/#suspended-domains)

* * *

[How to suspend and unsuspend accounts](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/#how-to-suspend-and-unsuspend-accounts)

* * *

## List Suspended Accounts

![](https://docs.cpanel.net/img/whm-icons/list_suspended_accounts.svg)

_Valid for versions 92 through the latest version_

#### Version:

#### [92](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature lists your server’s suspended accounts and allows you to unsuspend or terminate an account. You can suspend both users and individual domains.

When you suspend an account or domain, the system disables their passwords. This feature is useful if a user fails to comply with your terms of service or they fail to pay their bill for service.

## Suspended domains

The table of accounts displays the following columns:

- _Domain_ — Displays the suspended domain.
- _User_ — Displays the cPanel account that owns the domain.
- _Owner_ — Displays the reseller who owns the account. This column may display root if no reseller accounts exist on the server.
- _Date Suspended_ — Displays the date and time of the account’s suspension.
- _Reason_ — Displays the reason for account suspension, if the WHM user who suspended the account entered a reason.
- _Locked_ — Displays whether a system administrator has locked the suspension. Only the `root` user or users with `root`-level privileges can unsuspend a locked account.

## How to suspend and unsuspend accounts

Click one of the following options to unsuspend or terminate an account:

- _Unsuspend_ — To unsuspend an account, click _Unsuspend_. To keep [service proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/), select the _Retain Service Proxying_ checkbox. Most users do not need to select this checkbox.

- _Terminate_ — To terminate an account, click _Terminate_. For more information, read our [_Terminate Accounts_](https://docs.cpanel.net/whm/account-functions/terminate-accounts) documentation.







Warning:





If you terminate an account, the system **permanently** removes it. Be sure that you wish to **permanently** delete the account and all the account’s data.


For more information about how to suspend and unsuspend accounts, read our [_Manage Account Suspension_](https://docs.cpanel.net/whm/account-functions/manage-account-suspension) documentation.

#### Additional Documentation

* * *

- [Manage Account Suspension](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/)
- [Terminate Accounts](https://docs.cpanel.net/whm/account-functions/terminate-accounts/)
- [Unsuspend Bandwidth Exceeders](https://docs.cpanel.net/whm/account-functions/unsuspend-bandwidth-exceeders/)
- [View Reseller Usage and Manage Account Status](https://docs.cpanel.net/whm/resellers/view-reseller-usage-and-manage-account-status/)
- [What Happens When You Suspend an Account](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×