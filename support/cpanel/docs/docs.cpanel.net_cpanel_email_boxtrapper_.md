---
url: "https://docs.cpanel.net/cpanel/email/boxtrapper/"
title: "BoxTrapper | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/boxtrapper/#main-content)

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
4. BoxTrapper


[spam](https://docs.cpanel.net/tags/spam/) [email](https://docs.cpanel.net/tags/email/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [webmail](https://docs.cpanel.net/tags/webmail/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/boxtrapper/#overview)

* * *

[Enable BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/#enable-boxtrapper)

* * *

[BoxTrapper Configuration](https://docs.cpanel.net/cpanel/email/boxtrapper/#boxtrapper-configuration)

* * *

[Configure BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/#configure-boxtrapper)

* * *

[SpamAssassin spam score](https://docs.cpanel.net/cpanel/email/boxtrapper/#spamassassin-spam-score)

* * *

[Edit confirmation messages](https://docs.cpanel.net/cpanel/email/boxtrapper/#edit-confirmation-messages)

* * *

[Edit whitelists, blacklists, and ignore lists](https://docs.cpanel.net/cpanel/email/boxtrapper/#edit-whitelists-blacklists-and-ignore-lists)

* * *

[Forward List](https://docs.cpanel.net/cpanel/email/boxtrapper/#forward-list)

* * *

[Review Log](https://docs.cpanel.net/cpanel/email/boxtrapper/#review-log)

* * *

[Review Queue](https://docs.cpanel.net/cpanel/email/boxtrapper/#review-queue)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/boxtrapper/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/boxtrapper/#overview)

* * *

[Enable BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/#enable-boxtrapper)

* * *

[BoxTrapper Configuration](https://docs.cpanel.net/cpanel/email/boxtrapper/#boxtrapper-configuration)

* * *

[Configure BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/#configure-boxtrapper)

* * *

[SpamAssassin spam score](https://docs.cpanel.net/cpanel/email/boxtrapper/#spamassassin-spam-score)

* * *

[Edit confirmation messages](https://docs.cpanel.net/cpanel/email/boxtrapper/#edit-confirmation-messages)

* * *

[Edit whitelists, blacklists, and ignore lists](https://docs.cpanel.net/cpanel/email/boxtrapper/#edit-whitelists-blacklists-and-ignore-lists)

* * *

[Forward List](https://docs.cpanel.net/cpanel/email/boxtrapper/#forward-list)

* * *

[Review Log](https://docs.cpanel.net/cpanel/email/boxtrapper/#review-log)

* * *

[Review Queue](https://docs.cpanel.net/cpanel/email/boxtrapper/#review-queue)

* * *

## BoxTrapper

![](https://docs.cpanel.net/img/cpanel-icons/boxtrapper.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/email/boxtrapper/)

Last modified: _2025 June 26_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The _BoxTrapper_ feature filters spam from your inbox through challenge-response verification. When an account with BoxTrapper enabled receives an email, BoxTrapper automatically sends a verification email in response. The sender **must** complete the verification process before the email can pass to your inbox. If the sender does not verify the email, the verification fails and BoxTrapper never clears the message for delivery. After a period of time, the system automatically deletes the spam.

## Enable BoxTrapper

To enable BoxTrapper, perform the following steps:

1. Click _Manage_ for the account that you wish to modify.
2. Click _Enable_.

Note:

When you enable BoxTrapper, it whitelists any email address to which you send email.

## BoxTrapper Configuration

To edit BoxTrapper settings, click _Manage_ next to the account that you wish to modify. The _BoxTrapper Configuration_ interface will appear.

### Configure BoxTrapper

To configure BoxTrapper settings, perform the following steps:

1. Click _Configure Settings_.
2. Enter a comma-separated list of email addresses that forward mail to the account in the _Email addresses_ for this account text box.
3. Enter your name in the _Your Name_ text box.
4. Enter the number of days for which you wish to keep logs and messages in the _The number of days that you wish to keep logs and messages in the queue._ text box.
5. Enter the desired minimum spam score in the _Minimum SpamAssassin Spam Score required to bypass BoxTrapper_ text box.





Note:




When BoxTrapper receives an email with a spam score that is lower than the _Minimum SpamAssassin Spam Score required to bypass BoxTrapper_ value, it automatically delivers the message. You may set a low value for this option to cause BoxTrapper to respond to more messages, or a high value to cause BoxTrapper to automatically deliver more messages. For example, a minimum spam score of `5` will cause BoxTrapper to respond to more messages than a minimum spam score of `10`. The default value for this option is `-2.5`. For more information on SpamAssassin spam scores, read the [SpamAssassin spam score](https://docs.cpanel.net/cpanel/email/boxtrapper/#spamassassin-spam-score) section of this document.


6. To enable or disable automatic whitelisting, select the appropriate checkbox. When you enable whitelisting, BoxTrapper whitelists any email address to which you send email.
7. Select the _Automatically whitelist the To and From lines from whitelisted senders (whitelist by association)_ checkbox to automatically whitelist addresses in the _To_ and _CC_ lines of incoming whitelisted emails.
8. Click _Save_.

### SpamAssassin spam score

SpamAssassin works by analyzing an email and giving it a spam score. Emails with higher scores are more likely to be spam. SpamAssassin also supports negative scores. Emails with negative scores are typically not spam. SpamAssassin uses a variety of techniques and tests to determine spam including, [Bayesian filtering](https://en.wikipedia.org/wiki/Naive_Bayes_spam_filtering), blocklists, DNS (Domain Name System), and online databases. For more information on SpamAssassin tests, read the [SpamAssassin](https://spamassassin.apache.org/old/tests_3_3_x.html) documentation. There is no limit to how low or high an email’s score value can be.

### Edit confirmation messages

BoxTrapper automatically responds to email with messages that the system builds from the following templates:

| Template | Description |
| --- | --- |
| _verify_ | BoxTrapper responds with this message when an address that does not exist on the whitelist or blacklist sends an email. This message requests a response to confirm that the sender is legitimate. |
| _verifyreleased_ | BoxTrapper responds with this message when a person responds to the verify message with an email or a click on the verification link. |
| _returnverify_ | BoxTrapper responds with this message when the verification process fails. |
| _blacklist_ | BoxTrapper responds with this message when a blacklisted address sends an email. |

Click _Edit_ to customize the verification and blacklist message templates.

These templates use the following variables:

| Variable | Description |
| --- | --- |
| `%email%` | The sender’s email address. |
| `%fromname%` | The recipient’s name. |
| `%subject%` | The subject of the sender’s email. |
| `%acct%` | The recipient’s username. |
| `%msgid%` | The message ID of the sender’s email. |
| `%headers%` | The heading information of the sender’s email. |
| - `%if can_verify_web%`<br>- `%endif%` | These tags enclose a section that allows BoxTrapper to verify senders through a web link. |

Warning:

Do **not** alter `verify#%msgid%` in the subject line of the _verify_ message template. BoxTrapper requires that specific code to function properly.

To restore the default message templates, click _Reset to Default_.

### Edit whitelists, blacklists, and ignore lists

To edit lists, perform the following steps:

1. Click _Edit White/Black/Ignore lists_.
2. Select the list that you want to modify.
3. Enter any messages, subjects, or email addresses for which you wish to filter.
4. Click _Save_.

#### BoxTrapper lists

The system compares every new message that you receive against the following three lists:

| List Type | Description |
| --- | --- |
| _Whitelist_ | The system delivers messages directly to your inbox. <br>Note:<br>The Ignore list overrides the Whitelist. For example, the system will delete a message from a whitelisted address if the message contains a word from the Ignore list. |
| _Ignore list_ | The system deletes messages without a notification. |
| _Blacklist_ | The system deletes messages, and the sender receives a reply that indicates that the system blocked the message. |

### Forward List

Click _Forward List_ to update the account’s forward list. Enter email addresses that you wish to add to the forward list, and click _Save_. The system will automatically forward whitelisted emails to these addresses.

### Review Log

The system organizes this log by day, and displays any activity for an email address that uses BoxTrapper. Use this log, for example, to isolate problems with email delivery.

### Review Queue

Click _Review Queue_ to view any unverified BoxTrapper mail.

To deliver or delete emails, perform the following steps:

1. Select the checkbox for the desired day.
2. Select _Delete_ or _Whitelist and Deliver_.
3. Click _Submit_.

To see the contents of a message, perform the following steps:

1. Click the email’s sender, subject, or date to see the entire message, headers, and more delivery options. For example, you can ignore or blacklist a sender.
2. Select the option for which you wish to filter.
3. Click _Go_.

#### Additional Documentation

* * *

- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [Email Disk Usage](https://docs.cpanel.net/cpanel/email/email-disk-usage/)
- [Email Filters](https://docs.cpanel.net/cpanel/email/email-filters/)
- [Spam Filters](https://docs.cpanel.net/cpanel/email/spam-filters/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×