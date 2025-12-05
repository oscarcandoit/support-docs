---
url: "https://docs.cpanel.net/cpanel/email/create-an-email-account/98/"
title: "Create an Email Account | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/create-an-email-account/98/#main-content)

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
4. Create an Email Account


[email](https://docs.cpanel.net/tags/email/) [accounts](https://docs.cpanel.net/tags/accounts/) [webmail](https://docs.cpanel.net/tags/webmail/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

- [Email Accounts](https://docs.cpanel.net/cpanel/email/email-accounts/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
[Overview](https://docs.cpanel.net/cpanel/email/create-an-email-account/98/#overview) [Create a new email account](https://docs.cpanel.net/cpanel/email/create-an-email-account/98/#create-a-new-email-account) [Optional Settings](https://docs.cpanel.net/cpanel/email/create-an-email-account/98/#optional-settings) [Using this interface](https://docs.cpanel.net/cpanel/email/create-an-email-account/98/#using-this-interface) - [Manage Email Accounts](https://docs.cpanel.net/cpanel/email/manage-email-accounts/)
- [Set Up Mail Client](https://docs.cpanel.net/cpanel/email/set-up-mail-client/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/create-an-email-account/98/#installation-toggle)

- [Email Accounts](https://docs.cpanel.net/cpanel/email/email-accounts/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
[Overview](https://docs.cpanel.net/cpanel/email/create-an-email-account/98/#overview) [Create a new email account](https://docs.cpanel.net/cpanel/email/create-an-email-account/98/#create-a-new-email-account) [Optional Settings](https://docs.cpanel.net/cpanel/email/create-an-email-account/98/#optional-settings) [Using this interface](https://docs.cpanel.net/cpanel/email/create-an-email-account/98/#using-this-interface) - [Manage Email Accounts](https://docs.cpanel.net/cpanel/email/manage-email-accounts/)
- [Set Up Mail Client](https://docs.cpanel.net/cpanel/email/set-up-mail-client/)

## Create an Email Account

![](https://docs.cpanel.net/img/cpanel-icons/email_accounts.svg)

_Valid for versions 98 through 128_

#### Version:

#### [98](https://docs.cpanel.net/cpanel/email/create-an-email-account/98/)

#### [130](https://docs.cpanel.net/cpanel/email/create-an-email-account/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

To create a new email account, click _Create_ in cPanel’s [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts) interface ( _cPanel » Home » Email » Email Accounts_). This interface will appear. It allows you to create a new email account and displays the account creation settings.

## Create a new email account

To create a new email account, perform the following steps:

1. Use the _Domain_ menu to select the domain on which you want to create the email account. If you only have one domain on your account, this option will not appear.
2. Enter a new email address in the _Username_ text box.
3. In the _Password_ section, perform one of the following actions:

   - Select _Set password now._ and enter a secure password in the _Password_ text box. Or, to automatically create a password, click _Generate_.

     - Click the reveal icon (![Reveal](https://docs.cpanel.net/img/revealicon.png)) to display the entered password.
     - Click the more icon (![More](https://docs.cpanel.net/img/moreicon.png)) to select the _Generate_ option’s password complexity settings.
   - Select _Send login link to alternate email address_ and enter an email address. The system will send a password creation link to this address.
4. Select the _Stay on this page after I click Create_ checkbox to create another email account after you create this one.
5. Click _Create_ to create the account and return to the _Email Accounts_ interface. You can click _Go Back_ to cancel this action and return to the _Email Accounts_ interface.

Note:

- Your hosting provider can customize the options this interface displays. For more information, read this document’s [Using this interface](https://docs.cpanel.net/cpanel/email/create-an-email-account/#using-this-interface) section.
- You can create email forwarders to forward messages between email addresses in cPanel’s [_Forwarders_](https://docs.cpanel.net/cpanel/email/forwarders/) interface ( _cPanel » Home » Email » Forwarders_).

## Optional Settings

The section manages _Optional Settings_ for your email account.

1. In the _Storage Space_ section, perform one of the following actions:

   - Enter a custom disk storage size to limit the account’s email quota size.
   - Select _Unlimited_ if you do not want to limit the account’s email quota size.
2. In the _Automatically Create Folders for Plus Addressing_ section, select one of the following settings:

   - _Automatically Create Folders_ — When you receive an email that uses [plus addressing](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#plus-addressing) , the system **will** create a new folder. The server moves a message that uses plus addressing to a designated folder if the folder exists. For example, the system would place a message to `user+plusaddress@example.com` in the `plusaddress` folder.






     Note:





     Plus-addressing is **not** the same as a wildcard redirect, which redirects all emails whose addresses match a regular expression (regex) pattern. To learn more about wildcard redirects, includng how to set one up, read our [Global Email Filters](https://docs.cpanel.net/cpanel/email/global-email-filters/#create-a-wildcard-redirect) documentation. To learn more about email filters as a whole, read our [How to Configure Email Filters](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/) documentation.

   - _Do Not Automatically Create Folders._ — When you receive an email that uses plus addressing, the system will **not** create a new folder. Instead, it delivers the message to the `INBOX` folder.
3. Select the _Send welcome email with instructions to set up a mail client_ checkbox to send the user mail client set up instructions. The user can access this message via Webmail. This message contains the mail client details and [the `.mobileconfig` file](https://fileinfo.com/extension/mobileconfig) for Apple® devices.






Note:





If you selected _Send login link to alternate email_, the system will **not** send a message.


## Using this interface

Your hosting provider can customize the options in this interface. Keep the follow tips in mind when you create your email account:

- You **cannot** enter `cpanel` as an account name when you create an email account.
- You **cannot** rename an email account or change its address after you create it. However, you can use cPanel’s [_Forwarders_](https://docs.cpanel.net/cpanel/email/forwarders/) interface ( _cPanel » Home » Email » Forwarders_) to create a new address that forwards all mail to the existing account.
- The _Domain_ setting **only** appears if you have more than one domain on your account. To see this menu, click [_Manage Domains_](https://docs.cpanel.net/cpanel/domains/domains) to check your account’s domain configuration. A new interface will appear. You can find the links to these interfaces in the _Missing a Domain?_ menu on the right side of the interface.
- Some hosting providers require a minimum password strength value. You **must** enter a password that meets this value.
- The _Send login link to alternate email address_ setting **only** appears if your hosting provider has enabled it.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×