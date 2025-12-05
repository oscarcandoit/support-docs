---
url: "https://docs.cpanel.net/cpanel/email/spam-filters/"
title: "Spam Filters | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/spam-filters/#main-content)

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
4. Spam Filters


[spamassassin](https://docs.cpanel.net/tags/spamassassin/) [spam](https://docs.cpanel.net/tags/spam/) [email](https://docs.cpanel.net/tags/email/) [webmail](https://docs.cpanel.net/tags/webmail/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/spam-filters/#overview)

* * *

[Process New Emails and Mark them as Spam](https://docs.cpanel.net/cpanel/email/spam-filters/#process-new-emails-and-mark-them-as-spam)

* * *

[Spam Threshold score](https://docs.cpanel.net/cpanel/email/spam-filters/#spam-threshold-score)

* * *

[Move New Spam to a Separate Folder (Spam Box)](https://docs.cpanel.net/cpanel/email/spam-filters/#move-new-spam-to-a-separate-folder-spam-box)

* * *

[Empty the Spam Box folder](https://docs.cpanel.net/cpanel/email/spam-filters/#empty-the-spam-box-folder)

* * *

[POP3 client users](https://docs.cpanel.net/cpanel/email/spam-filters/#pop3-client-users)

* * *

[The Spam Box feature is unavailable](https://docs.cpanel.net/cpanel/email/spam-filters/#the-spam-box-feature-is-unavailable)

* * *

[Automatically Delete New Spam (Auto-Delete)](https://docs.cpanel.net/cpanel/email/spam-filters/#automatically-delete-new-spam-auto-delete)

* * *

[Configure Auto-Delete Settings](https://docs.cpanel.net/cpanel/email/spam-filters/#configure-auto-delete-settings)

* * *

[Additional Configurations (For Advanced Users)](https://docs.cpanel.net/cpanel/email/spam-filters/#additional-configurations-for-advanced-users)

* * *

[Whitelist (Emails Always Allowed)](https://docs.cpanel.net/cpanel/email/spam-filters/#whitelist-emails-always-allowed)

* * *

[Blacklist (Emails Never Allowed)](https://docs.cpanel.net/cpanel/email/spam-filters/#blacklist-emails-never-allowed)

* * *

[Calculated Spam Score Settings](https://docs.cpanel.net/cpanel/email/spam-filters/#calculated-spam-score-settings)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/spam-filters/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/spam-filters/#overview)

* * *

[Process New Emails and Mark them as Spam](https://docs.cpanel.net/cpanel/email/spam-filters/#process-new-emails-and-mark-them-as-spam)

* * *

[Spam Threshold score](https://docs.cpanel.net/cpanel/email/spam-filters/#spam-threshold-score)

* * *

[Move New Spam to a Separate Folder (Spam Box)](https://docs.cpanel.net/cpanel/email/spam-filters/#move-new-spam-to-a-separate-folder-spam-box)

* * *

[Empty the Spam Box folder](https://docs.cpanel.net/cpanel/email/spam-filters/#empty-the-spam-box-folder)

* * *

[POP3 client users](https://docs.cpanel.net/cpanel/email/spam-filters/#pop3-client-users)

* * *

[The Spam Box feature is unavailable](https://docs.cpanel.net/cpanel/email/spam-filters/#the-spam-box-feature-is-unavailable)

* * *

[Automatically Delete New Spam (Auto-Delete)](https://docs.cpanel.net/cpanel/email/spam-filters/#automatically-delete-new-spam-auto-delete)

* * *

[Configure Auto-Delete Settings](https://docs.cpanel.net/cpanel/email/spam-filters/#configure-auto-delete-settings)

* * *

[Additional Configurations (For Advanced Users)](https://docs.cpanel.net/cpanel/email/spam-filters/#additional-configurations-for-advanced-users)

* * *

[Whitelist (Emails Always Allowed)](https://docs.cpanel.net/cpanel/email/spam-filters/#whitelist-emails-always-allowed)

* * *

[Blacklist (Emails Never Allowed)](https://docs.cpanel.net/cpanel/email/spam-filters/#blacklist-emails-never-allowed)

* * *

[Calculated Spam Score Settings](https://docs.cpanel.net/cpanel/email/spam-filters/#calculated-spam-score-settings)

* * *

## Spam Filters

![](https://docs.cpanel.net/img/cpanel-icons/apache_spam_assassin.svg)

_Valid for versions 96 through the latest version_

#### Version:

#### [96](https://docs.cpanel.net/cpanel/email/spam-filters/)

Last modified: _2025 June 26_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The _Spam Filters_ interface ( _cPanel » Home » Email » Spam Filters_) allows you to configure the spam filter settings (powered by Apache SpamAssassin™) for your account. Spam filters identify and sort or delete unsolicited email, commonly known as spam. You can also use this interface to configure your [whitelist](https://docs.cpanel.net/cpanel/email/spam-filters/#whitelist-emails-always-allowed) and [blacklist](https://docs.cpanel.net/cpanel/email/spam-filters/#blacklist-emails-never-allowed) settings.

For more information, read Apache SpamAssassin’s [overview](https://spamassassin.apache.org/) documentation.

Note:

You may experience issues when you use [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper) and Apache SpamAssassin simultaneously. For more information, contact your hosting provider.

## Process New Emails and Mark them as Spam

Set this toggle to enabled to identify potential spam. Apache SpamAssassin examines every message for spam characteristics and assigns them a calculated spam score. This calculated spam score helps determine the likelihood that a message contains spam. The [Spam Box](https://docs.cpanel.net/cpanel/email/spam-filters/#move-new-spam-to-a-separate-folder-spam-box) and [Auto-Delete](https://docs.cpanel.net/cpanel/email/spam-filters/#automatically-delete-new-spam-auto-delete) features require that you enable Apache SpamAssassin first.

Note:

You **cannot** disable Apache SpamAssassin if your hosting provider enables the _Apache SpamAssassin™: Forced Global ON setting_ in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).

### Spam Threshold score

If the system calculates a spam score for a message that meets or exceeds the _Spam Threshold Score_ setting, the system marks the message as spam. A lower spam threshold score, such as a one, is aggressive and labels many messages as spam, including messages that may **not** be spam. However, a higher value, such as a ten, is passive and only labels messages that are obviously spam.

To set the spam threshold value, perform the following steps:

1. Click _Spam Threshold Score_. The system directs you to the _Adjust Spam Threshold Score_ interface.

2. Select the desired value from the menu.







Note:





Select _Custom_ from the menu to enter a custom value.

3. Click _Update Scoring Options_ to save your changes.


## Move New Spam to a Separate Folder (Spam Box)

Set this toggle to enabled to configure the Exim service to create a `spam` folder the next time that you receive spam mail. Spam Box sends any message with a calculated spam score that **exceeds** the spam threshold score to this folder. This feature preserves email that Apache SpamAssassin may mistakenly classify as spam mail.

Note:

We recommend that you use Spam Box because you can still view the messages. However, you should occasionally empty this folder because the space that it uses counts towards your email quota limit.

### Empty the Spam Box folder

To empty the spam folder or remove selected messages, click _Configure Spam Box Settings_. The system directs you to the _Spam Box_ interface with the following settings:

- Enable the _Spam Box is enabled._ toggle in this interface to activate the Spam Box feature if you did not do so in the _Spam Filters_ interface.

- Click _Empty the Spam Box folder for “username”_ to delete all messages in the `spam` folder for the system user email account, where _username_ represents the system user email account’s name.

- Click _Empty all Spam Box folders_ to delete all messages in the Spam Box for **every** email address on this account, including the system user email account.







Important:





This setting deletes the `spam` folder contents for **all** email addresses on the account.

- Click _Manage Disk Usage_ to select which messages you want to remove. The system directs you to the _Email Disk Usage_ interface ( _cPanel » Home » Email » Email Disk Usage_).


### POP3 client users

If you check your email through a POP3 client, access and empty your `spam` folder with the `youraddress@example.com/spam` username and your email account password. If you do not delete messages in this folder frequently, spam may accumulate and cause you to reach your email account quota.

Note:

- You **cannot** use this method to access other folders on your account. Some webmail clients may require additional steps. For more information, read our [How to Manage Webmail Folders](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders) documentation.
- If you are unsure whether you use POP3 or IMAP to receive mail, search for this information in your email application’s _Preferences_ interface.

### The Spam Box feature is unavailable

Important:

If you **don’t** enable the Spam Box feature but you **enable** Apache SpamAssassin, Apache SpamAssassin delivers the message to the email account’s inbox as normal. However, the message’s subject line will contain the phrase _**SPAM**_ if your hosting provider enables the _Apache SpamAssassin™: X-Spam-Subject/Subject header prefix for spam emails_ setting in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).

For the Spam Box feature to appear, your hosting provider **must** enable the _Enable Apache SpamAssassin™ Spam Box delivery for messages marked as spam_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

Note:

You can create filters for spam messages for all of your email accounts in cPanel’s [_Global Email Filters_](https://docs.cpanel.net/cpanel/email/global-email-filters) interface ( _cPanel » Home » Email » Global Email Filters_), or for individual accounts in the [_Email Filters_](https://docs.cpanel.net/cpanel/email/email-filters) interface ( _cPanel » Home » Email » Email Filters_). Use email filters to direct spam if the Spam Box feature does not appear in your interface.

## Automatically Delete New Spam (Auto-Delete)

Set this toggle to enabled to automatically delete messages that **meet or exceed** the _Auto-Delete Threshold Score_ value.

Important:

Make certain that you properly configure the _Auto-Delete Threshold Score_ value. This permanently deletes **all** messages with a calculated spam score that **meets or exceeds** the _Auto-Delete Threshold Score_ value. This could include **non-spam** messages, which would cause you to lose those messages.

### Configure Auto-Delete Settings

Click _Configure Auto-Delete Settings_ to configure the _Auto-Delete Threshold Score_ value. The system directs you to the _Auto-Delete_ interface with the following settings:

- Enable the _Spam Auto-Delete is enabled._ toggle in this interface to activate the Auto-Delete feature if you did not do so in the _Spam Filter_ interface.

- Select the desired _Auto-Delete Threshold Score_ value. Click _Update Auto-Delete Score_ to save your changes.







Note:





The _Auto-Delete Threshold Score_ value does **not** affect the _Spam Threshold Score_ value.


## Additional Configurations (For Advanced Users)

This section allows you to customize the whitelist, blacklist, and individual test scores.

Important:

Only advanced users should configure these settings.

Click _Show Additional Configurations_ to display the additional configuration settings.

### Whitelist (Emails Always Allowed)

This section displays the account’s current number of whitelisted items. Whitelists allow you to receive email from an email address that Apache SpamAssassin falsely marks as spam.

Click _Edit Spam Whitelist Settings_ to configure the _Spam Filters_ whitelist settings. The system directs you to the _Whitelist_ interface.

Note:

When you add addresses to the whitelist, use `*` as a wildcard to represent multiple characters and `?` to represent a single-character wildcard. The following examples demonstrate how to properly use wildcards in the whitelist:

- `user@example.com` — Whitelists a single email address.
- `*@example.com` — Whitelists all of the addresses at `example.com`.
- `?ser@example.com` — Whitelists a single character in an address at `example.com` (for example, `user@example.com`, but not `Auser@example.com`).

To add an email address to the whitelist, perform the following steps:

1. Click _Add A New “whitelist\_from” Item_ to add an email address.
2. Enter the email address in the _whitelist\_from_ text box.

   - Click the cancel icon (![Cancel](https://docs.cpanel.net/img/x.png)) to remove a _whitelist\_from_ entry.
3. Click _Update Whitelist (whitelist\_from)_ to save your changes.

### Blacklist (Emails Never Allowed)

This section displays the account’s current number of blacklisted items. Blacklists allow you to mark emails that Apache SpamAssassin falsely marks as non-spam as spam mail.

Click _Edit Spam Blacklist Settings_ to configure the _Spam Filters_ blacklist settings. The system directs you to the _Blacklist_ interface.

Note:

When you add addresses to the blacklist, use `*` as a wildcard to represent multiple characters and `?` to represent a single-character wildcard. The following examples demonstrate how to properly use wildcards in the blacklist:

- `user@example.com` — Blacklists a single email address.
- `*@example.com` — Blacklists all of the addresses at `example.com`.
- `?ser@example.com` — Blacklists a single character in an address at `example.com` (for example, `user@example.com`, but not `Auser@example.com`).

To add an email address to the blacklist, perform the following steps:

1. Click _Add A New “blacklist\_from” Item_ to add an email address.
2. Enter the email address in the _blacklist\_from_ text box.

   - Click the cancel icon (![Cancel](https://docs.cpanel.net/img/x.png)) to remove a _blacklist\_from_ entry.
3. Click _Update Blacklist (blacklist\_from)_ to save your changes.

Note:

To blacklist email addresses on multiple accounts, use the [Exim System Filter File](https://docs.cpanel.net/knowledge-base/email/how-to-customize-the-exim-system-filter-file).

### Calculated Spam Score Settings

Warning:

We **strongly** recommend that **only** advanced users edit the spam testing scores. Improper configurations will create unintended consequences.

Click _Configure Calculated Spam Score_ to configure the individual test scores. The system directs you to the _Calculated Spam Score Settings_ interface.

Apache SpamAssassin uses hundreds of tests, and you can assign scores to individual tests to configure Apache SpamAssassin for your server. Use this interface to modify the individual test scores that Apache SpamAssassin uses to mark a message as spam. You can increase the score of a test that incorrectly allows spam messages to pass through. Conversely, you can disable or reduce the score of a test that falsely marks messages as spam. For example, disable tests that mark bankruptcy emails as spam for a user who is a bankruptcy lawyer.

To update an individual test score, perform the following steps:

1. Click _Add A New “scores” Item_ to enter a new customized test score.
2. Select a test from the _scores_ menu.
3. Enter a new value in the text box that contains up to three decimal places.






Note:





Set the score value to `0` to disable a test.

4. Click _Update Scoring Options_ to save your changes.

Note:

To review the default scores, run the following command:

```bash
grep -R score /var/lib/spamassassin/* | less
```

#### Additional Documentation

* * *

- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [Email Disk Usage](https://docs.cpanel.net/cpanel/email/email-disk-usage/)
- [Email Filters](https://docs.cpanel.net/cpanel/email/email-filters/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×