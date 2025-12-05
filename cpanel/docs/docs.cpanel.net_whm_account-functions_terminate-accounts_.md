---
url: "https://docs.cpanel.net/whm/account-functions/terminate-accounts/"
title: "Terminate Accounts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/account-functions/terminate-accounts/#main-content)

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
4. Terminate Accounts


[accounts](https://docs.cpanel.net/tags/accounts/) [whmui](https://docs.cpanel.net/tags/whmui/) [accounttermination](https://docs.cpanel.net/tags/accounttermination/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/account-functions/terminate-accounts/#overview)

* * *

[Terminate accounts](https://docs.cpanel.net/whm/account-functions/terminate-accounts/#terminate-accounts)

* * *

[Keep the DNS zones](https://docs.cpanel.net/whm/account-functions/terminate-accounts/#keep-the-dns-zones)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/account-functions/terminate-accounts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/account-functions/terminate-accounts/#overview)

* * *

[Terminate accounts](https://docs.cpanel.net/whm/account-functions/terminate-accounts/#terminate-accounts)

* * *

[Keep the DNS zones](https://docs.cpanel.net/whm/account-functions/terminate-accounts/#keep-the-dns-zones)

* * *

## Terminate Accounts

![](https://docs.cpanel.net/img/whm-icons/terminate_accounts.svg)

_Valid for versions 110 through the latest version_

#### Version:

#### [110](https://docs.cpanel.net/whm/account-functions/terminate-accounts/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to simultaneously terminate multiple accounts. If you terminate an account, the system will completely remove it from your server.

Warning:

- You **cannot** undo account termination. When you terminate an account, the system permanently deletes that account’s data, including [team users](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#team-user) and their data, from the server.
- You **must** remove the account’s backups manually or move the backups to another server. This action prevents an account collision if you add a new account with a previous account user’s username.

## Terminate accounts

The interface provides a table that lists all of the server’s accounts.

- Use the _Search_ text box and the navigation controls to search for a particular account or accounts.
- Click a column heading to sort the table by that column.
- To display only suspended accounts, select the _Show only suspended accounts_ checkbox.

To terminate an individual account, perform the following steps:

1. To keep a domain’s DNS zone on your server, select the associated checkbox in the _Keep DNS Zone_ column.
2. Click _Remove_ in the associated checkbox in that account’s row.
3. Click _Yes, delete this account_ to confirm that you wish to remove the account.

To terminate multiple accounts from your server, perform the following steps:

1. Select the checkboxes that correspond to the accounts that you wish to remove.

- To keep a domain’s DNS zone on your server, select the associated checkbox in the _Keep DNS Zone_ column.

2. Click _Remove selected accounts_.
3. Click _Yes, delete these accounts_.

## Keep the DNS zones

When you terminate an account, you can keep the domain’s zone file in the DNS server. This is useful, for example, if you move an account to a different server that is a part of the same DNS cluster as the previous server, and you want to delete the account information from the original server. To keep the DNS zones for an account that you wish to terminate, select the associated checkbox in the _Keep DNS Zone_ column.

#### Additional Documentation

* * *

- [Change Site's IP Address](https://docs.cpanel.net/whm/account-functions/change-site-ip-address/)
- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [Email All Users](https://docs.cpanel.net/whm/account-functions/email-all-users/)
- [List Suspended Accounts](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/)
- [Manage Account Suspension](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×