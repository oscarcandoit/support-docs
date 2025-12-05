---
url: "https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/"
title: "How to Configure Email Filters | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [Email](https://docs.cpanel.net/knowledge-base/email/)
4. How to Configure Email Filters


[filters](https://docs.cpanel.net/tags/filters/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#overview)

* * *

[Filter rules and criteria](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#filter-rules-and-criteria)

* * *

[Operators](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#operators)

* * *

[Spam Score](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#spam-score)

* * *

[Criteria](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#criteria)

* * *

[Multiple rules](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#multiple-rules)

* * *

[Actions](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#actions)

* * *

[Pipe to a Program](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#pipe-to-a-program)

* * *

[Multiple actions](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#multiple-actions)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#overview)

* * *

[Filter rules and criteria](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#filter-rules-and-criteria)

* * *

[Operators](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#operators)

* * *

[Spam Score](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#spam-score)

* * *

[Criteria](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#criteria)

* * *

[Multiple rules](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#multiple-rules)

* * *

[Actions](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#actions)

* * *

[Pipe to a Program](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#pipe-to-a-program)

* * *

[Multiple actions](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#multiple-actions)

* * *

## How to Configure Email Filters

Last modified: _2024 November 13_

* * *

## Overview

Email filters use the criteria that you specify to determine how to handle email messages. The following cPanel interfaces allow you to configure email filters:

- The [_Global Email Filters_](https://docs.cpanel.net/cpanel/email/global-email-filters/) interface ( _cPanel » Home » Email » Global Email Filters_) — Global email filters affect the cPanel account’s email addresses.

- The [_Email Filters_](https://docs.cpanel.net/cpanel/email/email-filters/) interface ( _cPanel » Home » Email » Email Filters_) — User-level filters affect specific email addresses on the cPanel account.


Important:

We **strongly** recommend that you use multiple, simple filters instead of a single large filter. Exim, the server’s mail transfer agent, handles many small rules more efficiently than a single large rule.


Note:

In these interfaces, click `+` to add a rule, or click `-` to remove rules.


## Filter rules and criteria

The first set of options specifies which part of the email message the system examines to determine whether the text matches your filter parameters.

You can choose from the following options:

- _From_ — The message sender’s address.
- _Subject_ — The message’s subject line.
- _To_ — The address to which the sender sent the message.






Note:




Generally, the recipient does **not** receive the BCC field in an email’s header. For this reason, you **cannot** use the BCC field in a filter.


- _Reply Address_ — The address at which the sender receives replies.
- _Body_ — The message’s content.
- _Any Header_ — Any Header refers to any part of the header in an email, including: _To_, _From_, _Envelope-To_, _Content-Type_, etc.
- _Any Recipient_ — Any recipient of the message.
- _Has Not Been Previously Delivered_ — The system **only** examines messages that remain in the queue for delivery.
- _Is an Error Message_ — The system **only** examines error messages that an auto-response system sends.
- _List ID_ — The account’s mailing lists.
- _Spam Status_ — Whether Apache SpamAssassin™ marked the message as spam. The _Spam Status_ line begins with `Yes` or `No`.
- _Spam Bar_ — The content of the _Spam Bar_ header that Apache SpamAssassin generated for this message. The more plus signs (`+`) that Apache SpamAssassin assigns to a message, the greater the likelihood that the system marks the message as spam.
- _Spam Score_ — The total number of plus signs (`+`) in the _Spam Bar_ value, expressed as an integer. For more information about the _Spam Score_ option, read the [Spam Score](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#spam-score) section below.

### Operators

After you select the portion of the email that the system will examine, select the type of comparison between that portion and the [criteria](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#criteria) that you enter.

You can choose from the following operators:

- _equals_ — The text exactly matches a defined string.







[Click to view an example rule that exactly matches a string](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#click-to-view-an-example-rule-that-exactly-matches-a-string1764175697393506356)



Fromequals

example@example.com

This rule will **only** match emails from `example@example.com`.



You could use this rule with the _Redirect to Email_ [action](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#actions) to forward all emails from one address to another address.

- _matches regex_ — The text matches a [regular expression](https://www.regular-expressions.info/) that you define.







[Click to view an example rule that matches a regular expression](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#click-to-view-an-example-rule-that-matches-a-regular-expression1764175697393658931)



Subjectmatches regex

\[Cc\]ongratulations\[!.+\]

This rule matches these example `Subject` lines (among others):



- `Congratulations!`
- `congratulations!`
- `Congratulations!!!!!`
- `congratulations!!!!!!!!!!`

You could use this rule with the _Fail With Message_ [action](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#actions) to bounce emails that contain `Subject` lines that may indicate spam.

Note:

- When you select this option, the filter interprets characters as [Perl-Compatible Regular Expressions](https://www.regular-expressions.info/pcre.html) (PCRE), rather than as literal characters that are part of a string. This includes commonly-used wildcard characters such as the `*` and `?` characters.
- Exim interprets backslashes as escaped characters. As a result, you may need to include additional backslashes in your PCRE. For more information about how Exim interprets backslashes, read [Exim’s documentation](http://www.exim.org/exim-html-3.30/doc/html/filter_20.html).

- _contains_ — The text contains a string that you define.







[Click to view an example rule that contains a string match](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#click-to-view-an-example-rule-that-contains-a-string-match1764175697393879569)



Bodycontains

purchase

This rule matches these example sentences in an email’s body text (among others):



- `I want to purchase a product from you.`
- `There was a problem with my purchase.`
- `This was the best purchase our company has made!`

You could use this rule with the _Deliver to Folder_ [action](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#actions) to direct business-specific emails into a `Business` email folder.

- _does not contain_ — The text does **not** contain the defined string.







[Click to view an example rule that filters out a string](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#click-to-view-an-example-rule-that-filters-out-a-string1764175697393987123)



Subjectdoes not contain

Sale

This rule **matches** emails with the following example `Subject` lines (among others):



- `Let's catch up`
- `Wedding photos`

This rule **does not match** emails with the following example `Subject` lines (among others):

- `Sale! Great purchase opportunity!`
- `Once-In-A-Lifetime Sale`

You could use this rule with the _Redirect to Email_ [action](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#actions) to direct emails that are **not** about sales to a personal email address.

- _begins with_ — The text begins with the defined string.







[Click to view an example rule that matches a beginning string](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#click-to-view-an-example-rule-that-matches-a-beginning-string1764175697394093334)



Frombegins with

example

This rule **matches** emails from the following example addresses (among others):



- `example@example.com`
- `example_user@sample.com`

This rule **does not match** emails from the following example addresses (among others):

- `lindsey_example@sample.com`
- `john_doe@example.com`

You could use this rule with the _Deliver to Folder_ [action](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#actions) to redirect emails from your website’s users to a `Priority` folder.

- _ends with_ — The text ends with the defined string.







[Click to view an example rule that matches an ending string](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#click-to-view-an-example-rule-that-matches-an-ending-string1764175697394192661)



Fromends with

example.com

This rule **matches** emails from the following example addresses (among others):



- `example@different-example.com`
- `any_user@example.com`

This rule **does not match** emails from the following example addresses (among others):

- `example@different-example2.com`
- `any_user@sample.com`

You could use this rule with the _Pipe to a Program_ [action](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#actions) to automatically pipe emails from your website’s users into a ticket program.

- _does not begin_ — The text does **not** begin with the defined string.







[Click to view an example rule that filters out a beginning string](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#click-to-view-an-example-rule-that-filters-out-a-beginning-string1764175697394275374)



Bodydoes not begin

TEST

This rule **matches** emails that **do not** begin the body text with `TEST`.



You could use this rule with the _Fail With Message_ [action](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#actions) to confirm that test emails can reach your email address without cluttering up your inbox.

- _does not end with_ — The text does **not** end with the defined string.







[Click to view an example rule that filters out an ending string](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#click-to-view-an-example-rule-that-filters-out-an-ending-string1764175697394373351)



Bodydoes not end with

This is an automated message, please do not reply

This rule **matches** emails that **do not** end with the sentence `This is an automated message, please do not reply`.



You could use this rule with the _Deliver to Folder_ [action](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#actions) to direct out-of-office emails into an email folder.

- _does not match_ — The text does **not** exactly match the defined string.







[Click to view an example rule that filters out a string](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#click-to-view-an-example-rule-that-filters-out-a-string1764175697394460218)



Subjectdoes not match

sale

This rule **matches** emails with any `Subject` line **except**`sale`.



You could use this rule with the _Stop Processing Rules_ [action](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#actions) to stop a filter from acting on emails with the `Subject` line `sale`.


### Spam Score

The following options are **only** applicable when you select the _Spam Score_ option:

- _is above (#s only)_ — The message’s Spam Score is greater than the number that you define.
- _is not above (#s only)_ — The message’s Spam Score is equal to or less than the number that you define.
- _is below (#s only)_ — The message’s Spam Score is less than the number that you define.
- _is not below (#s only)_ — The message’s Spam Score is greater than or equal to the number that you define.

### Criteria

Enter the criteria to use in the text box under the _Rules_ menus. The type of data that you enter determines the comparison that the system performs.

For example, if you select the _From_ and _Equals_ filters, enter `user@example.com` as the criteria. The system determines that any email from `user@example.com` matches the filter, but does **not** match `seconduser@example.com` because it contains additional letters.

Important:

Exim converts newlines into spaces in the `$message_body` field. Do **not** add `\n` characters to any body filters that you create.


### Multiple rules

To create additional rules for a filter, click the plus symbol to the right of a rule. A new option menu, operator menu, and criteria text box will appear on the interface.

To delete a rule, click the minus symbol to the right of that rule. The system will remove that rule from the interface.

Select how the system processes the list of rules with the _or_ menu to the right of the rules:

- _or_ — Any rule in the list must be true for the system to perform the actions.
- _and_ — All rules in the list must be true for the system to perform the actions.

For example, you could create a filter that checks the following rules:

- The email has a `Subject` line that contains the word `alert`.
- The email comes `From` a website monitoring service.

This filter will return website monitoring alert emails.

#### Operator interactions

When you create a filter that uses multiple rules, the system processes rules that contain `and` operators **before** rules that contain `or` operators. In logical notation:

- The system processes `A or B and C` as `A or (B and C)`.
- It processes `A and B or C` as `(A and B) or C`.

For example, you could create a filter that checks the following rules:

- `From` lines begin with `user` **and** end with `example.com`, **or**
- `Subject` lines begin with `A user from example.com reports`

This filter will match the following emails:

- Emails whose `From` lines begin with `user` and **do not** end with `example.com`, and whose `Subject` lines begin with `A user from example.com reports`.
- Emails whose `From` lines **do not** begin with `user` but end with `example.com`, and whose `Subject` lines begin with `A user from example.com reports`.
- Emails whose `From` lines begin with `user` and end with `example.com`, and whose `Subject` lines **do not** begin with `A user from example.com reports`.

This filter will **not** match the following emails:

- Emails whose `From` lines begin with `user` but **do not** end with `example.com`, and whose `Subject` lines **do not** begin with `A user from example.com reports`.
- Emails whose `From` lines **do not** begin with `user` but end with `example.com`, and whose `Subject` lines **do not** begin with `A user from example.com reports`.

## Actions

When cPanel determines that an email message matches your filter, it handles that message with the any of the following actions that you specify:

- _Discard Message_ — The system discards the incoming message with no failure notice.

- _Redirect to Email_ — The system forwards the message to another email address that you specify.






Note:




This action does **not** retain a copy of the message in the mailbox. To retain a copy of the message in the inbox and forward it to another address, add a _Deliver to Folder_ action to the filter **and** set it to deliver it to the _INBOX_ folder.


- _Fail With Message_ — The system discards the message and automatically send a failure notice to the sender.

- _Stop Processing Rules_ — The system stops performing further actions or applying any remaining filters on this message.

- _Deliver to Folder_ — The system delivers the message to a specified folder.

- _Pipe to a Program_ — The system sends the incoming message to a specified program. For more information, read the [Pipe to a Program](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/#pipe-to-a-program) section below.


### Pipe to a Program

Important:

- Make **certain** that your script uses the proper file permissions (`0700`). To change your script’s file permissions, run the `chmod 0700 myscript.php` command, where `myscript.php` represents your script’s location and file name.
- This option **only** appears if your hosting provider enables it.

Use the _Pipe to a Program_ option to parse and enter email information into a different system. For example, use the _Pipe to a Program_ option to pipe email information to a program that enters email information into a ticket system.

- STDIN pipes email and headers to the program.
- Pipes can accept variables from the `$_SERVER` array and variables on the command line.
- The language or environment that you use may cause memory limit issues.
- If your script produces any output, even a blank line, the system will create a bounce message that contains that output.

When you use the _Pipe to a Program_ option, enter a path that is relative to your home directory. For example, to use the `/home/user/script.pl` script, enter `script.pl` in the _Pipe to a Program_ text box, where `user` represents your username.

Note:

If you use PHP, make certain that you appropriately wrap your code in start and end tags.


### Multiple actions

To create additional actions for a rule, click a plus symbol to the right of an action. A new action menu will appear on the interface. For example, you could add the _Deliver to Folder_ action to ensure that an inbox keeps a copy of all emails sent to it, then add the _Redirect to Email_ action to forward those emails to a new destination address.

To delete an additional action, click the minus symbol to the right of the action. The system will remove that action from the interface.

#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Archive](https://docs.cpanel.net/cpanel/email/archive/)
- [Autoresponders](https://docs.cpanel.net/cpanel/email/autoresponders/)
- [Email Filters](https://docs.cpanel.net/cpanel/email/email-filters/)
- [Global Email Filters](https://docs.cpanel.net/cpanel/email/global-email-filters/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×

![Cookiebot session tracker icon loaded](https://imgsct.cookiebot.com/1.gif?dgi=da52fc49-8e48-42b7-9ad3-c219404f6f92)