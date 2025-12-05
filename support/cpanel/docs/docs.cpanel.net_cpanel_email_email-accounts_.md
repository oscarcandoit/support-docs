---
url: "https://docs.cpanel.net/cpanel/email/email-accounts/"
title: "Email Accounts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/email-accounts/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Email](https://docs.cpanel.net/cpanel/email/)
4. Email Accounts


[email](https://docs.cpanel.net/tags/email/) [accounts](https://docs.cpanel.net/tags/accounts/) [webmail](https://docs.cpanel.net/tags/webmail/)

#### Table of Contents

- [Email Accounts](https://docs.cpanel.net/cpanel/email/email-accounts/)
[Overview](https://docs.cpanel.net/cpanel/email/email-accounts/#overview) [Email account quota status](https://docs.cpanel.net/cpanel/email/email-accounts/#email-account-quota-status) [Create an email account](https://docs.cpanel.net/cpanel/email/email-accounts/#create-an-email-account) [Email accounts table](https://docs.cpanel.net/cpanel/email/email-accounts/#email-accounts-table) - [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [Manage Email Accounts](https://docs.cpanel.net/cpanel/email/manage-email-accounts/)
- [Set Up Mail Client](https://docs.cpanel.net/cpanel/email/set-up-mail-client/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/email-accounts/#installation-toggle)

- [Email Accounts](https://docs.cpanel.net/cpanel/email/email-accounts/)
[Overview](https://docs.cpanel.net/cpanel/email/email-accounts/#overview) [Email account quota status](https://docs.cpanel.net/cpanel/email/email-accounts/#email-account-quota-status) [Create an email account](https://docs.cpanel.net/cpanel/email/email-accounts/#create-an-email-account) [Email accounts table](https://docs.cpanel.net/cpanel/email/email-accounts/#email-accounts-table) - [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [Manage Email Accounts](https://docs.cpanel.net/cpanel/email/manage-email-accounts/)
- [Set Up Mail Client](https://docs.cpanel.net/cpanel/email/set-up-mail-client/)

## Email Accounts

![](https://docs.cpanel.net/img/cpanel-icons/email_accounts.svg)

_Valid for versions 130 through the latest version_

#### Version:

#### [98](https://docs.cpanel.net/cpanel/email/email-accounts/98/)

#### [130](https://docs.cpanel.net/cpanel/email/email-accounts/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Use this interface to [create](https://docs.cpanel.net/cpanel/email/create-an-email-account), manage, and delete email accounts for your cPanel account’s domains. You can use an email account to send and receive email messages from your domains.

Note:

- cPanel & WHM does not support the following features for accounts with [temporary domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain):


  - Editing DNS
  - Email services
  - Search Engine Optimization

- For more information about Webmail, including checking email in your browser and selecting a webmail application, read our [Webmail](https://docs.cpanel.net/webmail) documentation.

- For more information on how to set up a default (catch-all) email address, read our [Default Address](https://docs.cpanel.net/cpanel/email/default-address/) documentation.

- For more information on how to troubleshoot your email account, read our [cPanel Common Questions - Email](https://docs.cpanel.net/knowledge-base/q-and-a-with-cpanel-support/cpanel-common-questions/#email) documentation.

- To update the email address where you receive cPanel & WHM password reset emails and account notifications, use the [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information/) interface ( _cPanel » Home » Preferences » Contact Information_).


* * *

![The Email Accounts interface](https://docs.cpanel.net/img/emailaccountui98.png)

This interface consists of the following:

1. [Email account quota status](https://docs.cpanel.net/cpanel/email/email-accounts/#email-account-quota-status).
2. [The search bar and its filters](https://docs.cpanel.net/cpanel/email/email-accounts/#additional-actions).
3. [_Create an Email Account_](https://docs.cpanel.net/cpanel/email/create-an-email-account/).
4. [_Email Accounts_ table](https://docs.cpanel.net/cpanel/email/email-accounts/#the-email-accounts-table).

* * *

## Email account quota status

This area of the interface provides details about your email account quotas. It displays the total number of email accounts you can create. It also lists the current number of created email accounts.

- The infinity icon (`∞`) indicates that your account has an **unlimited** quota.
- The total number of accounts does **not** include the cPanel account’s system user email account.
- Your hosting provider manages your email account quotas. Some hosting providers allow their users to purchase quota increases. When this is available, the interface will display _Buy More_ in this section.

## Create an email account

To create a new email account, click _Create_. A new interface will appear. It displays the account creation settings, as well as your account’s quota status. For more information, read our [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account) documentation.

## Email accounts table

This table lists all the email accounts on your cPanel account, and lets you perform the following actions:

| Item | Description |
| --- | --- |
| Checkbox (![empty checkbox icon](https://docs.cpanel.net/img/selection.png)) | Select the checkbox (![empty checkbox icon](https://docs.cpanel.net/img/selection.png)) to select an email account for bulk actions. You can also select all email accounts using the checkbox at the top of this table. For example, use this to select several email accounts, and then click _Delete_ to remove them. <br>Note:<br>You cannot use this action to select the cPanel account’s system user email account. |
| More (![more icon](https://docs.cpanel.net/img/columnmore.png)) | Click the more icon (![more icon](https://docs.cpanel.net/img/columnmore.png)) to display more information about an email account. This will display the following information and actions: <br>- _Restrictions_ — The account’s restrictions, if any exist.<br>- _Delete_ — Click to **permanently** delete all mail and data for the account. After you click _Delete_, a confirmation message will appear. Click _Delete_ to remove the account.<br>  <br>  <br>  <br>  <br>  <br>  Warning:<br>  <br>  <br>  <br>  <br>  <br>- You **cannot** undo this action. <br>- You **cannot** delete the cPanel account's system user email account. |
| _Account @ Domain_ | Click to perform the following actions: <br>- Click _Account_ to sort the list alphabetically by account name.<br>- Click _Domain_ to sort the list alphabetically by domain name. |
| _Restrictions_ | Whether there is a restriction for the account. |
| _Storage: Used / Allocated / %_ | Click _Used_, _Allocated_, or the percent symbol ( _%_) to sort the table by that item. These labels are the amount, the limit, and the percentage of disk space data quota usage. |
| The actions column | Click an [action](https://docs.cpanel.net/cpanel/email/email-accounts/#actions) to perform the desired task. |

#### Actions

| Action | Description |
| --- | --- |
| _Check Email_ | Click to check an email account’s mail. A new interface will appear that displays the account in [Webmail](https://docs.cpanel.net/webmail). |
| _Manage_ | Click to edit an existing email account’s quota, password, and other properties in cPanel’s [_Manage Email Accounts_](https://docs.cpanel.net/cpanel/email/manage-email-accounts) interface ( _cPanel » Home » Email » Manage Email Accounts_). A new interface will appear. <br>- There are two types of email accounts: the _Default_ system user email account, and all other email accounts.<br>- There are separate interfaces for both types of email accounts. |
| _Connect Devices_ | Click to configure mail client access in cPanel’s [_Set Up Mail Client_](https://docs.cpanel.net/cpanel/email/set-up-mail-client) interface ( _cPanel » Home » Email » Set Up Mail Client_). A new interface will appear. |

#### Additional actions

You can perform several additional actions while you use the email accounts table:

- Use the search bar to find a specific email account. You can also filter the table’s results by one of the following settings:



| Setting | Description |
| --- | --- |
| _Restricted_ | Display only the accounts with restrictions. |
| _System User Email Account_ | Display only the cPanel system user email account. The system identifies this account with the _Default_ icon (![Default icon](https://docs.cpanel.net/img/default-email-icon.png)). <br>- This account’s name is the same as the username that your hosting provider used to create your account.<br>- For more information about the cPanel account system user email account, read our [Manage Email Accounts](https://docs.cpanel.net/cpanel/email/manage-email-accounts) documentation |
| _Exceeded Storage_ | Display only the accounts that are over their storage quotas. |

- Click a column’s heading to sort the results of the table by that heading. The table will sort the list in ascending or descending order.
- Click the gear icon (![Gear icon](https://docs.cpanel.net/img/gear.png)) to select the number of entries you want to display per page. You can also refresh the table results.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×