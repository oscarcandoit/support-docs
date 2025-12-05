---
url: "https://docs.cpanel.net/manage2/users/edit-users/"
title: "Edit Users | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/users/edit-users/#main-content)

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
4. Edit Users


[m2accounts](https://docs.cpanel.net/tags/m2accounts/) [m2accountpackages](https://docs.cpanel.net/tags/m2accountpackages/) [manage2](https://docs.cpanel.net/tags/manage2/)

#### Table of Contents

[Overview](https://docs.cpanel.net/manage2/users/edit-users/#overview)

* * *

[Account settings](https://docs.cpanel.net/manage2/users/edit-users/#account-settings)

* * *

[Privileges](https://docs.cpanel.net/manage2/users/edit-users/#privileges)

* * *

[Privilege types](https://docs.cpanel.net/manage2/users/edit-users/#privilege-types)

* * *

[Groups and packages](https://docs.cpanel.net/manage2/users/edit-users/#groups-and-packages)

* * *

[Package Limited option](https://docs.cpanel.net/manage2/users/edit-users/#package-limited-option)

* * *

[Info](https://docs.cpanel.net/manage2/users/edit-users/#info)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/users/edit-users/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/manage2/users/edit-users/#overview)

* * *

[Account settings](https://docs.cpanel.net/manage2/users/edit-users/#account-settings)

* * *

[Privileges](https://docs.cpanel.net/manage2/users/edit-users/#privileges)

* * *

[Privilege types](https://docs.cpanel.net/manage2/users/edit-users/#privilege-types)

* * *

[Groups and packages](https://docs.cpanel.net/manage2/users/edit-users/#groups-and-packages)

* * *

[Package Limited option](https://docs.cpanel.net/manage2/users/edit-users/#package-limited-option)

* * *

[Info](https://docs.cpanel.net/manage2/users/edit-users/#info)

* * *

## Edit Users

Last modified: _2024 February 22_

* * *

## Overview

This interface allows you to modify the information for a specific user, and the account’s privileges. To edit the user’s information, modify any option and click _Save_. To discard any changes that you make, click _Cancel_.

Note:

You **cannot** modify a user’s _Company_ or _Type_.


## Account settings

The _Account Settings_ field allows you to modify the following information:

- _User Name_ — The account user name.
- _Department_ — A menu with the available departments.
- _Name_ — The user’s name.
- _Email_ — The user’s email address.
- _Password_ — The user’s password.






Note:




If you **do not** want to change the user’s password, leave this text box empty.


- _Password Confirmation_ — The user’s password re-entered for change confirmation.






Note:




If you **do not** want to change the user’s password, leave this text box empty.


- _Admin Level_ — The admin level to assign the user’s account.

  - Enter `0` to set the user as the administrative user for the account. This allows the user access to **all** features in Manage2.
  - The default value for sub-users is `-10`. A user with this admin level has access the following features by default, plus any additional privileges that you add in the [_Privileges_](https://docs.cpanel.net/manage2/users/edit-users/#privilege-types) section:

    - Announcements that WebPros International, LLC posts.
    - The _Public Partner Directory Brand_ link in the Manage2 _Profile_ menu.
    - The [_Change Password_](https://docs.cpanel.net/manage2/security/change-password) interface ( _Dashboard_ » _Security_ » _Change Password_)
    - The _Manage IP Access_ interface ( _Dashboard_ » _Security_ » _Manage IP Access_)
    - The [_Security Setup_](https://docs.cpanel.net/manage2/security/security-setup) interface ( _Dashboard_ » _Security_ » _Security Setup_)
    - The _Wire Transfer & Check Payment Information_ interface ( _Dashboard_ » _Billing_ » _Wire Transfer & Check Payment Information_)
    - The [_Change Preferences_](https://docs.cpanel.net/manage2/users/change-preferences) interface ( _Dashboard_ » _Users_ » _Change Preferences_)
    - The [_Update My Information_](https://docs.cpanel.net/manage2/users/update-my-information) interface ( _Dashboard_ » _Users_ » _Update My Information_)
    - The [_Submit a New Priority Support Request_](https://docs.cpanel.net/manage2/support/submit-a-new-priority-support-request) interface ( _Dashboard_ » _Support_ » _Submit a New Priority Support Request_)
- _Primary Number_ — A contact phone number.
- _Phone Extension_ — The _Primary Number_’s extension, if applicable.
- _Secondary Phone_ — A secondary contact phone number.
- _AIM_ — The user’s AIM account name.
- _Jabber_ — The user’s Jabber account name.
- _Support Purchases_ — Whether the user can purchase support.

## Privileges

To add a privilege, select the desired privilege from the left-side menu and click the bottom arrow (![Right Arrow](https://docs.cpanel.net/img/arrow-right.png)) to add it to the right-side menu.

To remove a privilege, select it in the right-side menu and click the top arrow (![Left Arrow](https://docs.cpanel.net/img/arrow-left.png)) to move it to the left-side menu.

### Privilege types

The following table describes each of the available privileges:

| Privilege | Description | Feature access |
| --- | --- | --- |
| _supportall_ | Allows the user to access all of your support tickets. |  |
| _growthtrack_ | Allows the user to view your account history. | _Account History Tracker_ |
| _addlicense_ | Allows the user to add new licenses. | _Add License_ |
| _addaccessip_ | Allows the user to add new access IP addresses. | _Add an access IP_ |
| _editpartnerdir_ | Allows the user to log in to the [cPanel Partner Directory](http://partners.cpanel.net/) and modify your company’s public profile. |  |
| _explisc_ | Allows the user to view expired and suspended licenses. | _List Expired/Suspended Licenses_ |
| _partner\_onetimeext_ | Allows the user to an existing one-time license. <br>Note:<br>We no longer offer one-time licenses. This option only affects users with existing one-time licenses. | _Extend One Time License Updates_ |
| _listdirect_ | Allows the user to view all direct licenses. | _Direct_ section |
| _listlicenses_ | Allows the user to view all licenses. | _List Licenses_ and _List Active Licenses_ |
| _paypalpayment_ | Allows the user to make payments via PayPal®. | _Make a Paypal Payment_ |
| _manageauthkeys_ | Allows the user to manage your API authorization keys. | _API Authorization Keys_ and _API Pickup Passphrases_ |
| _managecards_ | Allows the user to manage the saved credit cards and make payments with credit cards. | _Manage and Pay with Credit Cards_ |
| _modlisc_ | Allows the user to modify and transfer licenses. | _Transfer a license_ |
| _subsupport_ | Allows the user to view your open and closed support requests. | _View Open/Closed Requests_ |
| _liscreact_ | Allows the user to view expired and suspended licenses. | _List Expired/Suspended Licenses_ |
| _reviewxfers_ | Allows the user to view pending license transfers. | _Review Pending Transfers_ |
| _search_ | Allows the user to search for a license. | _Search for a license_ |
| _secverify_ | Allows the user to verify a license’s IP address risk data. | _Security Verification System_ |
| _badrequests_ | Allows the user to view rejected licenses. | _Rejected License Requests_ |
| _viewinvoice_ | Allows the user to view your account history. | _Account History_ |
| _viewdocs_ | Allows the user to view your contracts and agreements with WebPros International, LLC. | _View Contracts and Agreements_ |

## Groups and packages

To limit a user’s access to groups, select the _Group Limited_ checkbox. When you select this option, the interface will display a list of groups.

- To grant access to a group, select the group from the left menu and click the bottom arrow (![Right Arrow](https://docs.cpanel.net/img/arrow-right.png)) to add it to the right-side menu.
- To remove access to a group, select the group from the right menu and click the top arrow (![Left Arrow](https://docs.cpanel.net/img/arrow-left.png)) to move it to the left-side menu.

Note:

By default, if the user can access the _Add a new license_ feature, that user can access all of the groups and packages on the account.


### Package Limited option

To limit a user’s access to packages, select the _Package Limited_ checkbox. When you select this option, the interface will display a list of packages.

- To grant the user access to a package, select the package from the left menu and click the bottom arrow (![Right Arrow](https://docs.cpanel.net/img/arrow-right.png)) to add it to the menu on the right.
- To remove access to a package, select the package from the right menu and click the top arrow (![Left Arrow](https://docs.cpanel.net/img/arrow-left.png)) to move it to the menu on the left.

Note:

By default, if the user can access the _Add a new license_ feature, that user can access all of the groups and packages on the account.


## Info

The _info_ section displays the account’s last modification date and whether the system has linked the account to the [cPanel Ticket system](https://tickets.cpanel.net/).

#### Additional Documentation

* * *

- [Add User](https://docs.cpanel.net/manage2/users/add-user/)
- [API Authorization Keys](https://docs.cpanel.net/manage2/admin/api-authorization-keys/)
- [Change Preferences](https://docs.cpanel.net/manage2/users/change-preferences/)
- [Manage Users](https://docs.cpanel.net/manage2/users/manage-users/)
- [Update My Information](https://docs.cpanel.net/manage2/users/update-my-information/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×