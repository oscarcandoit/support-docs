---
url: "https://docs.cpanel.net/webmail/fight-spam-in-webmail/"
title: "Webmail — Fight Spam | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/webmail/fight-spam-in-webmail/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [Webmail](https://docs.cpanel.net/webmail/)
3. Webmail — Fight Spam


[webmail](https://docs.cpanel.net/tags/webmail/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [email](https://docs.cpanel.net/tags/email/) [spam](https://docs.cpanel.net/tags/spam/)

#### Table of Contents

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
- [Webmail Clients](https://docs.cpanel.net/webmail/webmail-clients/)
- [Manage Your Inbox](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/)
- [Calendars and Contacts](https://docs.cpanel.net/webmail/calendars-and-contacts-in-webmail/)
- [Edit Your Settings](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail/)
- [Fight Spam](https://docs.cpanel.net/webmail/fight-spam-in-webmail/)
[Overview](https://docs.cpanel.net/webmail/fight-spam-in-webmail/#overview) [Spam Filters](https://docs.cpanel.net/webmail/fight-spam-in-webmail/#spam-filters) [BoxTrapper](https://docs.cpanel.net/webmail/fight-spam-in-webmail/#boxtrapper) [Enable BoxTrapper in Webmail](https://docs.cpanel.net/webmail/fight-spam-in-webmail/#enable-boxtrapper-in-webmail) [BoxTrapper Configuration](https://docs.cpanel.net/webmail/fight-spam-in-webmail/#boxtrapper-configuration) - [Other Features](https://docs.cpanel.net/webmail/other-webmail-features/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/webmail/fight-spam-in-webmail/#installation-toggle)

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
- [Webmail Clients](https://docs.cpanel.net/webmail/webmail-clients/)
- [Manage Your Inbox](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/)
- [Calendars and Contacts](https://docs.cpanel.net/webmail/calendars-and-contacts-in-webmail/)
- [Edit Your Settings](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail/)
- [Fight Spam](https://docs.cpanel.net/webmail/fight-spam-in-webmail/)
[Overview](https://docs.cpanel.net/webmail/fight-spam-in-webmail/#overview) [Spam Filters](https://docs.cpanel.net/webmail/fight-spam-in-webmail/#spam-filters) [BoxTrapper](https://docs.cpanel.net/webmail/fight-spam-in-webmail/#boxtrapper) [Enable BoxTrapper in Webmail](https://docs.cpanel.net/webmail/fight-spam-in-webmail/#enable-boxtrapper-in-webmail) [BoxTrapper Configuration](https://docs.cpanel.net/webmail/fight-spam-in-webmail/#boxtrapper-configuration) - [Other Features](https://docs.cpanel.net/webmail/other-webmail-features/)

## Webmail — Fight Spam

_Valid for versions 84 through the latest version_

#### Version:

#### [84](https://docs.cpanel.net/webmail/fight-spam-in-webmail/)

Last modified: _2024 November 1_

* * *

## Overview

This section includes features that help you manage and protect your inbox from spam.

## Spam Filters

Use this interface to filter unwanted spam email before it reaches your inbox.

| Feature | Description |
| --- | --- |
| _Spam Auto Delete Threshold_ | Set this score to automatically delete messages that meet or exceed the _Set a custom threshold_ score. <br>Warning:<br>Make certain that you properly configure the score. It **permanently deletes** any message that **meets or exceeds** the score. This could include **non-spam** messages. |
| _Configure Auto Delete Settings_ | To enable and customize the _Set a custom threshold_ score: <br>1. Select _Set a custom threshold_.<br>2. Enter a number in the _Set a custom threshold_ text box. <br>   <br>   <br>   <br>   <br>   <br>   Note:<br>   <br>   <br>   <br>   <br>   The lower the threshold, the more emails the server will discard.<br>    <br>   <br>3. Click _Submit_.<br> To disable the Auto-Delete feature, select _Disable Spam Auto-Delete_. Then, click _Submit_. |

## BoxTrapper

Use BoxTrapper to filter spam from your inbox. It uses a challenge-response method to verify the sender. BoxTrapper-enabled accounts respond to incoming emails with a verification email. The sender must finish the process before the email goes to your inbox.

Note:

To use BoxTrapper, your hosting provider **must** enable the _Enable BoxTrapper spam trap_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

### Enable BoxTrapper in Webmail

To enable BoxTrapper for your Webmail account, click _Enable_.

To enable BoxTrapper, click _Enable_. When you enable BoxTrapper, it automatically whitelists the addresses you send email to. The system does this **even if** you disable automatic whitelisting.

### BoxTrapper Configuration

Use the following options to edit BoxTrapper settings:

#### Configure Settings

To configure BoxTrapper settings, perform the following steps:

1. Click _Configure Settings_.
2. Enter a comma-separated list of email addresses that forward mail to the account in the _Email addresses for this account_ text box.
3. Enter your name in the _Your Name_ text box.
4. Enter the number of days for which you wish to keep logs and messages in the _The number of days that you wish to keep logs and messages in the queue._ text box.
5. Enter the desired minimum spam score in the _Minimum SpamAssassin Spam Score required to bypass BoxTrapper_ text box.






Note:





When BoxTrapper receives an email with a spam score that is lower than the _Minimum SpamAssassin Spam Score required to bypass BoxTrapper_ value, it automatically delivers the message. The default value for this option is `-2.5`.

6. To enable or disable automatic whitelisting, select the appropriate checkbox.






Remember:





BoxTrapper will automatically whitelist any email address to which you send a message.

7. Select the _Automatically whitelist the To and From lines from whitelisted senders (whitelist by association)_ checkbox to automatically whitelist addresses in the _To_ and _CC_ lines of incoming whitelisted emails.
8. Click _Save_.

#### Edit Confirmation Messages

To configure your BoxTrapper messages, perform the following steps:

1. Click _Edit Confirmation Messages_. BoxTrapper automatically responds to email with messages that the system builds from the following templates:



| Variable | Description |
| --- | --- |
| `blacklist` | BoxTrapper responds with this message when a blacklisted address sends an email. |
| `returnverify` | BoxTrapper responds with this message when the verification process fails. |
| `verifyreleased` | BoxTrapper responds with this message when a person responds to the verify message with an email or a click on the verification link. |
| `verify` | BoxTrapper responds with this message when an address that does not exist on the whitelist or blacklist sends an email. This message requests a response to confirm that the sender is legitimate. |

2. To customize the verification and blacklist message templates, click _Edit_. (To restore the default message templates, click _Reset to Default_.) A new interface will appear. These templates use the following variables:



| Variable | Description |
| --- | --- |
| `%email%` | The sender’s email address. |
| `%fromname%` | The recipient’s name. |
| `%subject%` | The subject of the sender’s email. |
| `%acct%` | The recipient’s username. |
| `%msgid%` | The message ID of the sender’s email. |
| `%headers%` | The heading information of the sender’s email. |
| `%if can_verify_web%` and `%endif%` | These tags enclose a section that allows BoxTrapper to verify senders through a web link.<br>Warning:<br>Do **not** alter `verify#%msgid%` in the subject line of the verify message template. BoxTrapper requires that specific code to function properly. |


#### Edit White/Black/Ignore Lists

To edit the white, black, or ignore lists, perform the following steps:

1. Click _Edit White/Black/Ignore_ lists.
2. Click the list that you want to modify.
3. Enter any messages, subjects, or email addresses to filter.
4. Click _Save_.

##### BoxTrapper lists

The system compares every new message that you receive against the following three lists:

| List | Description |
| --- | --- |
| Whitelist | The system delivers messages directly to your inbox. |
| Ignore list | The system deletes messages without a notification. |
| Blacklist | The system deletes messages, and the sender receives a reply that indicates that the system blocked the message. |

#### Forward List

Click _Forward List_ to update the account’s forward list. Enter email addresses that you wish to add to the forward list, and click _Save_. The system will automatically forward whitelisted emails to these addresses.

#### Review Log

The system organizes this log by day and displays any activity for an email address that uses BoxTrapper. Use this log, for example, to isolate problems with email delivery.

#### Review Queue

Click _Review Queue_ to view any unverified BoxTrapper mail.

To deliver or delete messages, perform the following steps:

1. Select the checkbox for the desired day.
2. Select _Delete_ to delete the messages. Select _Whitelist and Deliver_ to whitelist the address deliver the messages.
3. Click _Submit_.

To see the contents of a message, perform the following steps:

1. Click the email’s sender, subject, or date to see the entire message, headers, and more delivery options. For example, you can ignore or blacklist a sender.
2. Select the option for which you wish to filter.
3. Click _Go_.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×