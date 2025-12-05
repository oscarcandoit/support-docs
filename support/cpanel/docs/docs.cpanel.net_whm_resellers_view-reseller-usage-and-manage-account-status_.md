---
url: "https://docs.cpanel.net/whm/resellers/view-reseller-usage-and-manage-account-status/"
title: "View Reseller Usage and Manage Account Status | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/resellers/view-reseller-usage-and-manage-account-status/#main-content)

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
3. [Resellers](https://docs.cpanel.net/whm/resellers/)
4. View Reseller Usage and Manage Account Status


[whmui](https://docs.cpanel.net/tags/whmui/) [diskusage](https://docs.cpanel.net/tags/diskusage/) [resellers](https://docs.cpanel.net/tags/resellers/) [bandwidth](https://docs.cpanel.net/tags/bandwidth/) [accountsuspension](https://docs.cpanel.net/tags/accountsuspension/) [accounttermination](https://docs.cpanel.net/tags/accounttermination/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/resellers/view-reseller-usage-and-manage-account-status/#overview)

* * *

[Manage reseller account status](https://docs.cpanel.net/whm/resellers/view-reseller-usage-and-manage-account-status/#manage-reseller-account-status)

* * *

[Usage information](https://docs.cpanel.net/whm/resellers/view-reseller-usage-and-manage-account-status/#usage-information)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/resellers/view-reseller-usage-and-manage-account-status/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/resellers/view-reseller-usage-and-manage-account-status/#overview)

* * *

[Manage reseller account status](https://docs.cpanel.net/whm/resellers/view-reseller-usage-and-manage-account-status/#manage-reseller-account-status)

* * *

[Usage information](https://docs.cpanel.net/whm/resellers/view-reseller-usage-and-manage-account-status/#usage-information)

* * *

## View Reseller Usage and Manage Account Status

![](https://docs.cpanel.net/img/whm-icons/view_reseller_usage_and_manage_account_status.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/resellers/view-reseller-usage-and-manage-account-status/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

These features allow you to view your resellers’ disk space and bandwidth usage. You can also use this set of features to suspend, unsuspend, and terminate reseller accounts.

To view and manage a reseller, select that reseller from the _Select a reseller_ menu and click _Submit_. If only one reseller exists, the interface will automatically select that reseller.

Note:

In the examples below, _user_ represents the reseller’s account name.

## Manage reseller account status

You can perform the following actions to manage resellers from this interface:

- _Suspend All user’s Accounts_ — Click to suspend all of the accounts for this reseller.

  - If you select the _Suspend Reseller’s Main Account_ checkbox, you will also suspend the reseller’s own account.
  - For more information about account suspension, read our [What Happens When You Suspend an Account](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account) documentation.
- _UnSuspend All user’s Accounts_ — Click to unsuspend all of the accounts for this reseller.

  - If you select the _UnSuspend Reseller’s Main Account_ checkbox, you will also unsuspend the reseller’s own account.
- _Terminate All user’s Accounts_ — Click to terminate all of the accounts for this reseller.

  - If you select the _Terminate Reseller’s Main Account_ checkbox, you will also terminate the reseller’s own account.






    Warning:





    When you terminate an account, cPanel & WHM removes that account and **all** of its data. Make **certain** that you wish to completely delete the account **before** you terminate it.

## Usage information

The table at the bottom of the interface displays the current month’s statistics by default. To view other months’ statistics, click _Last Month Bandwidth Usage_ or _Next Month Bandwidth Usage_.

This table displays the following information for the selected reseller:

| Column | Description |
| --- | --- |
| _User_ | The cPanel user account. |
| _Domain_ | The account’s main domain. |
| _Plan_ | The account’s package. |
| _Suspended_ | Whether the account is currently suspended. |
| _Disk Space Used in Meg_ | The current amount of disk space usage, in megabytes (MB). |
| _Disk Space Limit_ | The maximum amount of disk space for the account, in megabytes (MB). |
| _Bandwidth in Meg_ | The amount of bandwidth that the user has used this month, in megabytes (MB). |
| _Monthly Bandwidth Limit in Meg_ | The maximum amount of bandwidth that the user may use per month, in megabytes (MB). |

#### Additional Documentation

* * *

- [Change Ownership of Multiple Accounts](https://docs.cpanel.net/whm/resellers/change-ownership-of-multiple-accounts/)
- [Edit Reseller Nameservers and Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/)
- [Email All Resellers](https://docs.cpanel.net/whm/resellers/email-all-resellers/)
- [List Suspended Accounts](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/)
- [Manage Reseller's IP Delegation](https://docs.cpanel.net/whm/resellers/manage-resellers-ip-delegation/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×