---
url: "https://docs.cpanel.net/cpanel/email/manage-email-accounts/"
title: "Manage Email Accounts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#main-content)

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
4. Manage Email Accounts


[email](https://docs.cpanel.net/tags/email/) [accounts](https://docs.cpanel.net/tags/accounts/) [webmail](https://docs.cpanel.net/tags/webmail/)

#### Table of Contents

- [Email Accounts](https://docs.cpanel.net/cpanel/email/email-accounts/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [Manage Email Accounts](https://docs.cpanel.net/cpanel/email/manage-email-accounts/)
[Overview](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#overview) [Manage the system user email account](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#manage-the-system-user-email-account) [Manage Email Accounts](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#manage-email-accounts) [Manage an Email Account](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#manage-an-email-account) [Security](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#security) [Storage](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#storage) [Restrictions](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#restrictions) [Plus Addressing](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#plus-addressing) [Save or cancel your changes](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#save-or-cancel-your-changes) [Delete Email Account](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#delete-email-account) - [Set Up Mail Client](https://docs.cpanel.net/cpanel/email/set-up-mail-client/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#installation-toggle)

- [Email Accounts](https://docs.cpanel.net/cpanel/email/email-accounts/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [Manage Email Accounts](https://docs.cpanel.net/cpanel/email/manage-email-accounts/)
[Overview](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#overview) [Manage the system user email account](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#manage-the-system-user-email-account) [Manage Email Accounts](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#manage-email-accounts) [Manage an Email Account](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#manage-an-email-account) [Security](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#security) [Storage](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#storage) [Restrictions](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#restrictions) [Plus Addressing](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#plus-addressing) [Save or cancel your changes](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#save-or-cancel-your-changes) [Delete Email Account](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#delete-email-account) - [Set Up Mail Client](https://docs.cpanel.net/cpanel/email/set-up-mail-client/)

## Manage Email Accounts

![](https://docs.cpanel.net/img/cpanel-icons/email_accounts.svg)

_Valid for versions 120 through the latest version_

#### Version:

#### [108](https://docs.cpanel.net/cpanel/email/manage-email-accounts/108/)

#### [120](https://docs.cpanel.net/cpanel/email/manage-email-accounts/)

Last modified: _2025 June 26_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This feature lets you edit an existing email account. In addition to standard email accounts, you can use the cPanel account’s system user email account to receive mail for nonexistent or invalid addresses for your domains.

To access this interface, locate the email address that you want to edit in cPanel’s [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts) interface ( _cPanel » Home » Email » Email Accounts_) and click _Manage_.

Note:

- To update the email address where you receive cPanel & WHM password reset emails and account notifications, use the [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information/) interface ( _cPanel » Home » Preferences » Contact Information_).
- To get IMAP settings and other information to set up your email account on your local system, use the [_Set Up Mail Client_](https://docs.cpanel.net/cpanel/email/set-up-mail-client/) interface ( _cPanel » Home » Email » Email Accounts » Set Up Mail Client_).
- For information on how to troubleshoot your email account, read our [cPanel Common Questions - Email](https://docs.cpanel.net/knowledge-base/q-and-a-with-cpanel-support/cpanel-common-questions/#email) documentation.

## Manage the system user email account

The system creates the cPanel account’s system user email account when your hosting provider creates your cPanel account. It uses the `account@domain.com` format, where `account` is your cPanel account name and `domain` is your main domain. The username and password are the same as your cPanel account’s.

You should keep the following tips in mind for managing your cPanel account’s email and the system user email account:

- Check your account’s default address **often** for missing messages. The account default address may receive messages for your existing email addresses if they contain typos or other issues. For example, if your email address is `corgis_sploot@example.com` but a sender uses `corgi_splot@example.com`, the system user email account will receive it.
- If you have configured a domain default address for any of your domains, the system will send mail with invalid recipients to **that** address. You can configure default addresses for domains in cPanel’s [_Default Address_](https://docs.cpanel.net/cpanel/email/default-address) interface ( _cPanel » Home » Email » Default Address_).
- If you cannot access the system user email account, contact your hosting provider for assistance.
- You cannot rename, delete, or set a quota on the account’s system user email account. We recommend that you create a separate email account for daily use.
- You cannot rename an email account or change its address. However, you can use cPanel’s [_Forwarders_](https://docs.cpanel.net/cpanel/email/forwarders/) interface ( _cPanel » Home » Email » Forwarders_) to create a new address that forwards all mail from the existing account. For example, if you cannot access your account’s system user email account, you can create a forwarder that forwards the system user emails to another email address.
- The system uses the default email address for the `From` and `Reply-to` addresses on outgoing email that your account’s PHP scripts send.
- Because of the way the `maildir` mailbox format calculates disk usage, a discrepancy between reported and actual disk usage may exist for the default email account. For more information about mailbox formats, read our [Mailbox Conversion](https://docs.cpanel.net/whm/email/mailbox-conversion) documentation.

* * *

When you click _Manage_ for this account, the system directs you to the _Manage Email Accounts_ interface. It displays the following information:

| Item | Description |
| --- | --- |
| _Email Account_ | The name of the email account. |
| _Current Storage Usage_ | The amount of used storage space, in bytes. |

* * *

Use the _More Actions_ section of this interface to select one of the following settings:

| Setting | Description |
| --- | --- |
| _Check Email_ | Click to check the system user email account’s mail. A new interface will appear that displays the account in [Webmail](https://docs.cpanel.net/webmail/the-webmail-interface/). |
| _Free up Email Storage_ | Click to delete old messages from your mailbox. The system will direct you to cPanel’s [_Email Disk Usage_](https://docs.cpanel.net/cpanel/email/email-disk-usage/) interface ( _cPanel » Home » Email » Email Disk Usage_). |
| _Manage Default Address_ | Click to manage a domain’s default address’s unrouted mail settings. The system will direct you to the [_Default Address_](https://docs.cpanel.net/cpanel/email/default-address/) interface ( _cPanel » Home » Email » Default Address_). <br>Note:<br>The cPanel account’s default address is **not** synonymous with a domain default address. You **must** configure the domain default address separately. |

### Manage Email Accounts

You can modify the following settings in this section of the interface:

| Setting | Description |
| --- | --- |
| _Share the System-managed Address Book_ | This setting lets you use the system-managed address book. It serves as a user directory and allows for collaboration. Set the _With all email accounts_ toggle to share this address book with the other email accounts on this account. When you disable it, only the system user email account has access to the system-managed address book. <br>- Set the _With all email accounts_ toggle to share this address book with the other email accounts on this account.<br>- If you disable the toggle, **only** the default email account can access the system-managed address book.<br>Note:<br>We do **not** support the system-managed address book in Roundcube. |
| _UTF-8 Mailbox Names_ | This setting lets you enable UTF-8-encoded mailbox names. By default, new accounts encode mailbox names with UTF-8. The system will save mailboxes to the filesystem as unencoded strings. This can break some types of email filters. Set the toggle to enable or disable this setting. <br>Note:<br>If you transfer or restore an account using the default setting, it will continue to use the default. |
| _Automatically Create Folders for Plus Addressing_ | This setting allows you configure how the system handles plus addressing for the mailbox. Plus addressing (or subaddressing) adds a plus character and string after an email account username. For example, the `user@example.com` email address could use the `user+list@example.com` plus address. The email account would recognize these messages and place them in the `list` mailbox. Set the toggle to one of the following settings: <br>- _Automatically Create Folders._ — When you receive an email that uses plus addressing and the folder does not already exist, the system will create a new folder. The system will deliver the message to that new folder.<br>- _Do Not Automatically Create Folders._ — When you receive an email that uses plus addressing and the folder does _not_ already exist, the system will _not_ create a new folder. Instead, the system will deliver the message to the `INBOX` folder. |

## Manage an Email Account

When you click _Manage_ for an email account, the system directs you to the _Manage an Email Account_ interface. This interface lets you manage an email account. You can also select from the following account management settings:

* * *

Use the _I Want To…_ section of the interface to select one of the following settings:

| Setting | Description |
| --- | --- |
| _Free up Email Storage_ | This lets you view all of your mailboxes and remove old or large messages. The system will direct you to cPanel’s [_Email Disk Usage_](https://docs.cpanel.net/cpanel/email/email-disk-usage/) interface ( _cPanel » Home » Email » Email Disk Usage_). |
| _Manage Email Filters_ | This lets you to create rules to filter the email that arrives in the account. The system will direct you to cPanel’s [_Email Filters_](https://docs.cpanel.net/cpanel/email/email-filters/) interface ( _cPanel » Home » Email » Email Filters_). |
| _Send Automated Responses_ | This lets you configure your email account’s automated responses. The system will direct you to cPanel’s [_Autoresponders_](https://docs.cpanel.net/cpanel/email/autoresponders/) interface ( _cPanel » Home » Email » Autoresponders_). |

* * *

Use the _Configure_ section of the interface to select one of the following settings:

| Setting | Description |
| --- | --- |
| _Connect Devices_ | This lets you configure your mail client to access your cPanel email address. The system will direct you to a new interface. For more information, read our [Set Up Mail Client](https://docs.cpanel.net/cpanel/email/set-up-mail-client/) documentation. |
| _Configure Calendars and Contacts_ | This lets you access your calendars and contacts on your personal devices. The system will direct you to cPanel’s _Calendars and Contacts Configuration_ interface ( _cPanel » Home » Email » Calendars and Contacts Configuration_). For more information, read our [How to Set Up Calendars and Contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts) documentation. <br>Note:<br>This setting is available if your hosting provider has enabled the _Calendars and Contacts_ feature in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager/) interface ( _WHM » Home » Packages » Feature Manager_). |

* * *

Use the _Authentication_ section of the interface to select the following setting:

_Manage External Authentication_ — This lets a user access cPanel with external authentication credentials. The system will direct you to a new interface. For more information, read our [Password and Security](https://docs.cpanel.net/cpanel/preferences/password-and-security/) documentation.

Note:

If you do not see this setting, your hosting provider has **not** configured it. Contact them and ask them to enable this feature in WHM’s [Manage External Authentications](https://docs.cpanel.net/whm/security-center/manage-external-authentications/) interface ( _WHM » Home » Security Center » Manage External Authentications_).

### Security

Use this feature to change the account’s password. Enter a secure password in the _New Password_ text box. A secure password does **not** contain a dictionary word. It **must** also contain uppercase and lowercase letters, numbers, and symbols. The system will evaluate the password that you enter on a scale of `100`. A weak password has a `0` value, while a very secure password has a `100` value.

Note:

- Some hosting providers require a minimum password strength value. You **must** enter a password that meets this value.
- You **cannot** retrieve passwords. If a user loses or forgets a password, you **must** create a new password.

You can perform the following actions with this feature:

- Click the reveal (![Reveal](https://docs.cpanel.net/img/revealicon.png)) icon to display the entered password.
- Click _Generate_ to let the system create a secure password for you. The system will reveal this password.
- Click the more icon (![More](https://docs.cpanel.net/img/moreicon.png)) to select password complexity settings. The system will use these settings when it generates a new password.

### Storage

The quota for an email account defines the amount of mail that the account can store. When the account exceeds this limit, the system returns any incoming mail to the sender. It also sends a message that states that the recipient’s mailbox is full. The system administrator can change this behavior in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).

Use the _Storage_ feature to manage the following settings:

| Setting | Description |
| --- | --- |
| _Current Storage Use_ | The amount of space that the email account currently uses. |
| _Allocated Storage Space_ | The amount of disk space that the account can use to store email. If an account has reached the allocated storage space, or you set it to an amount below what is currently being used, then when an email is sent to the address, you will receive a bounce back email similar to [below](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#bounce-back-email-example). |

##### Bounce back email example

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```bash<br>This message was created automatically by mail delivery software.<br>A message that you sent could not be delivered to one or more of its<br>recipients. This is a permanent error. The following address(es) failed:<br>  "user+Subject"@example.com<br>    (ultimately generated from susie1@test.com)<br>    LMTP error after RCPT TO:<"user+Subject"@example.com>:<br>    552 5.2.2 <susie1+Test@test.com> Mailbox is full / Blocks limit exceeded / Inode limit exceeded<br>``` |

You can select one of the following settings for allocating storage space:

| Setting | Description |
| --- | --- |
| Specify Storage Space | Enter a custom mailbox quota storage size. This value must be a whole number. You can also select different file sizes. For example, MB, GB, TB, and PB. <br>- Due to mail server constraints, you cannot assign quotas **greater** than 4096 TB (4 PB). You **must** assign the _Unlimited_ value for quotas that exceed this amount.<br>- Make certain that you track your quota usage. A mailbox with a full quota **cannot** receive mail.<br>- The system calculates a mailbox’s quota use when a user logs in to that mailbox.<br>- Your mailbox’s trash folder does not count in the quota calculation. |
| _Unlimited_ | There is no storage space limit. <br> If this setting appears as the _Maximum_ setting, your hosting provider does **not** allow unlimited mailbox quota. If you assign a custom quota, it **cannot** exceed this value. |

### Restrictions

Use this feature to enable or disable a user’s ability to log in, receive mail, or send mail. You can also hold outgoing mail. Select _Allow_, _Suspend_, or _Hold_ for the applicable setting.

| Options | _Allow_ | _Suspend_ | _Hold_ |
| --- | --- | --- | --- |
| _Receiving Incoming Mail_ | The server will accept any incoming messages for the account. | The server will reject any incoming messages for the account. | N/A |
| _Sending Outgoing Mail_ | The server will accept any outgoing messages for the account. | The server will reject any outgoing messages for the account. | The system will retain all outgoing messages in a queue. |
| _Logging In_ | The server will enable login for a user. | The server will disable login for a user. | N/A |

You should keep the following tips in mind when using this feature:

- When you suspend an email account, the system also **disables** any aliases or forwarders that redirect email to the account.
- When you change the _Sending Outgoing Email_ setting from _Hold_ to _Allow_, the server will deliver all queued messages.

### Plus Addressing

Plus addressing (or subaddressing) adds a plus character and string after an email account username. For example, the `user@example.com` email address could use the `user+list@example.com` plus address. The email account would recognize these messages and place them in the `list` mailbox.

Note:

- Plus-addressing is **case-sensitive**. For example, to send an email to the system user email’s `INBOX` folder, use the plus address `user+INBOX@example.com`.
- Plus-addressing is **not** the same as a wildcard redirect, which redirects all emails whose addresses match a regular expression (regex) pattern. To learn more about wildcard redirects, includng how to set one up, read our [Global Email Filters](https://docs.cpanel.net/cpanel/email/global-email-filters/#create-a-wildcard-redirect) documentation. To learn more about email filters as a whole, read our [How to Configure Email Filters](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/) documentation.

You can configure how the system handles plus addresses when the appropriate folder does not already exist. Select one of the following settings:

| Setting | Description |
| --- | --- |
| _Automatically Create Folders._ | When you receive an email that uses plus addressing and the folder does not already exist, the system will create a new folder for the message. The system will deliver the message to that new folder. |
| _Do Not Automatically Create Folders._ | When you receive an email that uses plus addressing and the folder does **not** already exist, the system will **not** create a new folder. Instead, the system will deliver the message to the `INBOX` folder. |

### Save or cancel your changes

At the bottom of the interface, you can perform the following actions:

| Action | Description |
| --- | --- |
| _Stay on this page after I click Update Email Settings_ | Select this to remain on this interface after you click _Update Email Settings_. |
| _Go Back_ | Cancel any of your current changes. This will return you to the [_Email Accounts_](https://docs.cpanel.net/cpanel/email/) interface. |
| _Update Email Settings_ | Update the account with your changes. This will return you to the [_Email Accounts_](https://docs.cpanel.net/cpanel/email/) interface. |

### Delete Email Account

Use this feature to **permanently** remove the email account and its data. When you click _Delete Email Account_, a confirmation message will appear. Click _Delete_ to remove the account.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×