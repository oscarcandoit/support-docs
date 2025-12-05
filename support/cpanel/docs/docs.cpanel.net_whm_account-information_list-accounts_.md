---
url: "https://docs.cpanel.net/whm/account-information/list-accounts/"
title: "List Accounts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/account-information/list-accounts/#main-content)

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
4. List Accounts


[accounts](https://docs.cpanel.net/tags/accounts/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/account-information/list-accounts/#overview)

* * *

[Search for accounts](https://docs.cpanel.net/whm/account-information/list-accounts/#search-for-accounts)

* * *

[Account information](https://docs.cpanel.net/whm/account-information/list-accounts/#account-information)

* * *

[Actions](https://docs.cpanel.net/whm/account-information/list-accounts/#actions)

* * *

[Upgrade Opportunities](https://docs.cpanel.net/whm/account-information/list-accounts/#upgrade-opportunities)

* * *

[Download records](https://docs.cpanel.net/whm/account-information/list-accounts/#download-records)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/account-information/list-accounts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/account-information/list-accounts/#overview)

* * *

[Search for accounts](https://docs.cpanel.net/whm/account-information/list-accounts/#search-for-accounts)

* * *

[Account information](https://docs.cpanel.net/whm/account-information/list-accounts/#account-information)

* * *

[Actions](https://docs.cpanel.net/whm/account-information/list-accounts/#actions)

* * *

[Upgrade Opportunities](https://docs.cpanel.net/whm/account-information/list-accounts/#upgrade-opportunities)

* * *

[Download records](https://docs.cpanel.net/whm/account-information/list-accounts/#download-records)

* * *

## List Accounts

![](https://docs.cpanel.net/img/whm-icons/list_accounts.svg)

_Valid for versions 110 through the latest version_

#### Version:

#### [110](https://docs.cpanel.net/whm/account-information/list-accounts/)

Last modified: _2025 June 9_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _List Accounts_ interface displays your server’s accounts and allows you to perform certain actions on them.

Note:

If your hosting provider enables the _Create Accounts_ privilege in WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_), this interface will display a link to WHM’s [_Create a New Account_](https://docs.cpanel.net/whm/account-functions/create-a-new-account) interface ( _WHM » Home » Account Functions » Create a New Account_).

## Search for accounts

The search text box and filters allow you to refine the list of accounts using the following options:

- _Search For_ – To search for accounts using a specific keyword, enter a search term in the search text box.

- _Search By_ – To search for accounts using one the following options, select the corresponding button:
  - _Username/Domain_ — Search for a username or domain name that contains your search term.
  - _Domain_ — Search for a domain name that contains your search term.
  - _Username_ — Search for a username that contains your search term.
  - _Reseller/Owner_ — Search a reseller or owner name that contains your search term.
  - _Package_ — Search for a package name that contains your search term.
  - _IP Address_ — Search for an IP address that contains your search term.
- _Filter By_ — To filter the list of accounts using one the following filters, select the corresponding button:
  - _None_ — Do not apply an additional filter.
  - _Suspended_ — Include only accounts that are currently suspended.
  - _Upgrade Opportunity_ — Include only accounts that have used a high amount of bandwidth or disk space. For more information about the messages in the _Upgrade Opportunities_ column, read the [Upgrade Opportunities](https://docs.cpanel.net/whm/account-information/list-accounts/#upgrade-opportunities) section below.

To list accounts using your entered search term and selected filters, click _Find_ or _Apply Filter_. To clear your search, click _Reset_.

## Account information

The table of accounts lists detailed information about each account on your server, and allows you to perform the following actions on each account:

- Click the plus icon (![Plus](https://docs.cpanel.net/img/plusicon.png)) to view the available actions for the associated account. For more information, read the [_Actions_](https://docs.cpanel.net/whm/account-information/list-accounts/#actions) section below.

- Click a domain name in the _Domain_ column to navigate to that site.

- Click the cPanel logo (![cPanel logo](https://docs.cpanel.net/img/cpanelicon.png)) in the _cPanel_ column to log in to the cPanel interface for that account with the `root` or reseller password.







Note:





- If you disabled `root` or reseller logins to cPanel user accounts, this icon does not display. You can enable this feature in the _System_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM_ » _Home_ » _Server Configuration_ » _Tweak Settings_).

- This feature uses the _Internal Session Tool_ and _Single Sign On_ system to generate a temporary user. For more information, read our [Guide to API Authentication](https://api.docs.cpanel.net/guides/guide-to-api-authentication/) documentation.


- Click the IP address in the _IP Address_ column to view the contents of the user’s home directory in a new browser tab.

- Click the email address in the _Contact Email_ column to send an email to the account’s owner.

- Click the account’s assigned package (for example, _default_) in the _Package_ column to open the [_Edit a Package_](https://docs.cpanel.net/whm/packages/edit-a-package/) interface ( _WHM » Home » Packages » Edit a Package_).







Note:





A red warning icon (![Warn](https://docs.cpanel.net/img/warningicon.png)) and _Unknown_ appear in the _Package_ column if the account does **not** have an assigned package.


## Actions

Note:

When you use any of these actions to navigate to another WHM interface, WHM automatically selects the correct account.

When you expand the information for an account, you can perform the following additional actions:

- _Change Password_ — To change an account’s password, enter the desired password, select the desired options, and click _Change_.
  - Select the _Synchronize MySQL password with account password_ checkbox if you want to use the same password for the user’s MySQL® account.







    Note:





    This option is **only** available for users who possess an installed `.my.cnf` file.

  - Select the _Enable Digest Authentication_ checkbox to enable Digest Authentication support.
- _Change Contact Email_ — To change the contact email address for the account, enter a new address in the text box and click _Change_.







Important:





The Reset Password feature uses this email address to verify the account user’s identity. If you do **not** set the contact email address, the user **cannot** use the Reset Password feature.

- _Suspend Account_ – To suspend an account, enter a reason in the text box and click _Suspend_. To ensure that resellers cannot unsuspend the account, select the _Prevent unsuspending_ checkbox.







Important:





If you suspend a team owner’s account, you will also suspend each team user connected to that account. Once you remove the team owner’s account from suspension, you will return the team users to their previous state before the suspension. For more information on team owners and team users, read our [_Manage Team_](https://docs.cpanel.net/cpanel/preferences/manage-team) documentation.

- _Account Suspended_ — Suspended accounts appear with the following information:
  - _Reason_ — Displays the reason for account suspension, if the WHM user who suspended the account entered a reason.
  - _Suspended_ — The date and time of the suspension.
  - _Suspension Locked_ — Displays whether a system administrator has locked the suspension. Only the `root` user or users with `root`-privileges can unsuspend a locked account.
  - _Unsuspend_ — To unsuspend an account, click _Unsuspend_.
  - _Retain Service Proxying_ — To keep [service proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/), select the _Retain Service Proxying_ checkbox. Most users do not need to select this checkbox.
- _Change IP Address_ — Click _Change IP Address_ to navigate to WHM’s [_Change a Site’s IP Address_](https://docs.cpanel.net/whm/account-functions/change-site-ip-address) interface ( _WHM » Home » IP Functions » Change a Site’s IP Address_), where you can change the account’s IP address.

- _Change Disk Partition_ — Click _Change Disk Partition_ to navigate to WHM’s [_Rearrange an Account_](https://docs.cpanel.net/whm/account-functions/rearrange-an-account) interface ( _WHM » Home » Account Functions » Rearrange an Account_), where you can change which home directory stores the account.

- _Change Quota_ — Click _Change Quota_ to navigate to WHM’s [_Quota Modification_](https://docs.cpanel.net/whm/account-functions/quota-modification) interface ( _WHM » Home » Account Functions » Quota Modification_). You can use this interface to change the maximum amount of disk space that the account can use on your server.







Important:





When you change a quota, we recommend that you first examine the contents of the account to ensure that the account does not already exceed the quota. If this is the case, we recommend that you request the owner of the account to remove files to comply with the new disk quota.

- _Change Plan_ — Click _Change Plan_ to navigate to WHM’s [_Upgrade/Downgrade an Account_](https://docs.cpanel.net/whm/account-functions/upgrade-downgrade-an-account) interface ( _WHM » Home » Account Functions » Upgrade/Downgrade an Account_), where you can change the account’s package.

- _Modify Account_ — Click _Modify Account_ to navigate to WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account) interface ( _WHM » Home » Account Functions » Modify an Account_), where you can make changes to the account.


## Upgrade Opportunities

The following types of messages can appear in the _Upgrade Opportunities_ column:

| Example | Description | Recommended action |
| --- | --- | --- |
| - This account exceeded its bandwidth quota last month.<br>- This account has reached its disk quota. | This cPanel account recently exceeded its bandwidth limits or disk usage limits. | Consider upgrading the cPanel account’s hosting plan. |
| - This account has used X% of its bandwidth quota for this month.<br>- This account has used X% of its disk quota. | This cPanel account recently used most of its bandwidth limits or disk usage limits. | Consider upgrading the cPanel account’s hosting plan. |
| - This account has reached the fixed block count 5120000.<br>- This account has used X% of the block count 5120000. | This cPanel account has recently used a high amount of disk space. | Consider upgrading from a shared hosting plan to a virtual private server (VPS) hosting plan. For more information about VPS hosting plans, contact your hosting provider. |

## Download records

When you click _Download these records to a CSV file_, WHM automatically downloads a `.csv` file. This file displays the information from the _List Accounts_ table as a comma-separated list.

#### Additional Documentation

* * *

- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [Change Multiple Sites' IP Addresses](https://docs.cpanel.net/whm/multi-account-functions/change-multiple-sites-ip-addresses/)
- [Change Ownership of Multiple Accounts](https://docs.cpanel.net/whm/resellers/change-ownership-of-multiple-accounts/)
- [List Suspended Accounts](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/)
- [Show Accounts Over Quota](https://docs.cpanel.net/whm/account-information/show-accounts-over-quota/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×