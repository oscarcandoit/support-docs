---
url: "https://docs.cpanel.net/manage2/users/add-user/"
title: "Add User | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/users/add-user/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [Manage2](https://docs.cpanel.net/manage2/)
3. [Users](https://docs.cpanel.net/manage2/users/)
4. Add User


[manage2](https://docs.cpanel.net/tags/manage2/) [m2accounts](https://docs.cpanel.net/tags/m2accounts/)

#### Table of Contents

[Overview](https://docs.cpanel.net/manage2/users/add-user/#overview)

* * *

[Why create additional users?](https://docs.cpanel.net/manage2/users/add-user/#why-create-additional-users)

* * *

[Add a user](https://docs.cpanel.net/manage2/users/add-user/#add-a-user)

* * *

[The Options section](https://docs.cpanel.net/manage2/users/add-user/#the-options-section)

* * *

[The Privileges table](https://docs.cpanel.net/manage2/users/add-user/#the-privileges-table)

* * *

[Edit user privileges](https://docs.cpanel.net/manage2/users/add-user/#edit-user-privileges)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/users/add-user/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/manage2/users/add-user/#overview)

* * *

[Why create additional users?](https://docs.cpanel.net/manage2/users/add-user/#why-create-additional-users)

* * *

[Add a user](https://docs.cpanel.net/manage2/users/add-user/#add-a-user)

* * *

[The Options section](https://docs.cpanel.net/manage2/users/add-user/#the-options-section)

* * *

[The Privileges table](https://docs.cpanel.net/manage2/users/add-user/#the-privileges-table)

* * *

[Edit user privileges](https://docs.cpanel.net/manage2/users/add-user/#edit-user-privileges)

* * *

## Add User

Last modified: _2024 July 31_

* * *

## Overview

The _Add User_ interface allows you to create additional Manage2 user accounts, each with their own Manage2 login information and permissions.

## Why create additional users?

You may find it useful to offer individual user accounts to your users, as opposed to a single account with multiple users.

If you create additional users, you can increase the security of your primary Manage2 account and use the following features:

- Restrict access based on the needs of specific users.
- Limit each user’s notifications to those that are relevant to the user’s access level and account status.
- Remove access for terminated employees without any changes to the main account or other user accounts.

## Add a user

To create a user account, perform the following steps:

1. [Log in](https://manage2.cpanel.net/) to Manage2. The [_Dashboard_](https://docs.cpanel.net/manage2/admin/the-manage2-dashboard/) interface will appear.
2. In the _User_ menu, click _Add user_. The _Options_ form will appear.
3. Enter the new user’s account information in the [_Options_ section.](https://docs.cpanel.net/manage2/users/add-user/#the-options-section)
4. Add privileges in the [_Privileges_ table.](https://docs.cpanel.net/manage2/users/add-user/#the-privileges-table)
5. Click _Add_.

### The Options section

Set your new user’s account information in the _Options_ section. You may enter the following information:

| Option | Description |
| --- | --- |
| `Company` | WebPros International, LLC enters this information. |
| `User Name` | **Required**<br> The new account’s username. <br>Important:<br>You **must** enter an email address in the _User Name_ text box. |
| `Department` | The new account’s department in your company. |
| `Password` | **Required**<br> The new account’s password. |
| `Password Confirmation` | **Required**<br> The new account’s password. This **must** match the text you entered in the _Password_ text box. |
| `Email` | A contact email address for the new account. |
| `Name` | **Required**<br> A name for the account. |
| `Phone Extension` | A contact phone extension for the new account, if applicable. |
| `Phone Number` | A contact phone number. <br>Important:<br>WebPros International, LLC will **never** reach out to ask for sensitive information about your account. |
| `Secondary Phone Number` | A secondary contact phone number. |
| `AIM` | **Deprecated**<br> An AOL Instant Messenger (AIM) username. As AOL [discontinued AIM](https://en.wikipedia.org/wiki/AIM_(software)#Usage_decline_and_product_sunset) in 2017, we no longer use this option. |
| `Jabber` | A [Jabber](https://www.jabber.org/) username. |

### The Privileges table

To add privileges to a new user, select the privileges you want to assign from the left-side menu, then use the arrows to add privileges as follows:

- (![right arrow](https://docs.cpanel.net/img/rightarrow.png)) Click the right arrow to add a privilege.
- (![left arrow](https://docs.cpanel.net/img/leftarrow.png)) Click the left arrow to remove a privilege.

Important

Make **certain** to assign privileges to the user. If you do **not** add any privileges, the user can only access the following features by default:

- _Change Password_
- _Manage Ip Access_
- _Security Setup_
- _Wire Transfer & Check Payment Information_
- _Change Preferences_
- _Update My Information_
- _Submit a New Priority Support Request_

Choose your new user’s privileges from the following options:

| Privilege | Description | Feature access |
| --- | --- | --- |
| _supportall_ | Allows the user to access all of your support tickets. |  |
| _growthtrack_ | Allows the user to view your account history. | _Account History Tracker_ |
| _addlicense_ | Allows the user to add new licenses. | _Add License_ |
| _addaccessip_ | Allows the user to add new access IP addresses. | _Add an access IP_ |
| _editpartnerdir_ | Allows the user to log in to the [cPanel Partner Directory](http://partners.cpanel.net/) and modify your company’s public profile. |  |
| _explisc_ | Allows the user to view expired and suspended licenses. | _List Expired/Suspended Licenses_ |
| _partner\_onetimeext_ | Allows the user to an existing one-time license.<br>Note:<br>We no longer offer one-time licenses. This option only affects users with existing one-time licenses. | _Extend One Time License Updates_ |
| _listdirect_ | Allows the user to view all direct licenses. | _Direct section_ |
| _listlicenses_ | Allows the user to view all licenses. | _List Licenses and List Active Licenses_ |
| _paypalpayment_ | Allows the user to make payments via PayPal®. | _Make a Paypal Payment_ |
| _manageauthkeys_ | Allows the user to manage your API authorization keys. | _API Authorization Keys and API Pickup Passphrases_ |
| _managecards_ | Allows the user to manage the saved credit cards and make payments with credit cards. | _Manage and Pay with Credit Cards_ |
| _modlisc_ | Allows the user to modify and transfer licenses. | _Transfer a license_ |
| _subsupport_ | Allows the user to view your open and closed support requests. | _View Open/Closed Requests_ |
| _liscreact_ | Allows the user to view expired and suspended licenses. | _List Expired/Suspended Licenses_ |
| _reviewxfers_ | Allows the user to view pending license transfers. | _Review Pending Transfers_ |
| _search_ | Allows the user to search for a license. | _Search for a license_ |
| _secverify_ | Allows the user to verify a license’s IP address risk data. | _Security Verification System_ |
| _badrequests_ | Allows the user to view rejected licenses. | _Rejected License Requests_ |
| _viewinvoice_ | Allows the user to view your account history. | _Account History_ |
| _viewdocs_ | Allows the user to view your contracts and agreements with WebPros International, LLC. | View Contracts and Agreements |

## Edit user privileges

To edit an account’s privileges, perform the following steps:

1. [Log in](https://manage2.cpanel.net/) to Manage2. The [_Dashboard_](https://docs.cpanel.net/manage2/admin/the-manage2-dashboard/) interface will appear.
2. In the _Users_ menu, click _Edit user_. The [_Options_](https://docs.cpanel.net/manage2/users/add-user/#the-options-section) and [_Privileges_](https://docs.cpanel.net/manage2/users/add-user/#the-privileges-section) sections will appear.
3. Use the arrows to add or remove privileges.
4. Click _Add_.

#### Additional Documentation

* * *

- [API Authorization Keys](https://docs.cpanel.net/manage2/admin/api-authorization-keys/)
- [API Pickup Passphrases](https://docs.cpanel.net/manage2/admin/api-pickup-passphrases/)
- [Edit Users](https://docs.cpanel.net/manage2/users/edit-users/)
- [Manage Users](https://docs.cpanel.net/manage2/users/manage-users/)
- [Update My Information](https://docs.cpanel.net/manage2/users/update-my-information/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×