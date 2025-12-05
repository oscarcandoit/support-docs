---
url: "https://docs.cpanel.net/cpanel/email/email-disk-usage/"
title: "Email Disk Usage | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/email-disk-usage/#main-content)

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
4. Email Disk Usage


[diskusage](https://docs.cpanel.net/tags/diskusage/) [email](https://docs.cpanel.net/tags/email/) [quotas](https://docs.cpanel.net/tags/quotas/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [webmail](https://docs.cpanel.net/tags/webmail/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/email-disk-usage/#overview)

* * *

[Account](https://docs.cpanel.net/cpanel/email/email-disk-usage/#account)

* * *

[Search](https://docs.cpanel.net/cpanel/email/email-disk-usage/#search)

* * *

[The mailboxes table](https://docs.cpanel.net/cpanel/email/email-disk-usage/#the-mailboxes-table)

* * *

[Remove messages](https://docs.cpanel.net/cpanel/email/email-disk-usage/#remove-messages)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/email-disk-usage/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/email-disk-usage/#overview)

* * *

[Account](https://docs.cpanel.net/cpanel/email/email-disk-usage/#account)

* * *

[Search](https://docs.cpanel.net/cpanel/email/email-disk-usage/#search)

* * *

[The mailboxes table](https://docs.cpanel.net/cpanel/email/email-disk-usage/#the-mailboxes-table)

* * *

[Remove messages](https://docs.cpanel.net/cpanel/email/email-disk-usage/#remove-messages)

* * *

## Email Disk Usage

![](https://docs.cpanel.net/img/cpanel-icons/email_disk_usage.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/email/email-disk-usage/)

Last modified: _2025 June 26_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you to view all of your mailboxes and remove old or large messages.

## Account

Select the account to modify from the _Account_ menu.

Note:

The _Account_ menu **only** appears for cPanel accounts. It will **not** appear in [Webmail](https://docs.cpanel.net/webmail/the-webmail-interface/) accounts.


## Search

Use the _Search_ text box to search for specific mailbox names.

## The mailboxes table

The mailbox table contains a list of mailboxes. You can sort this information by the name, number of messages, or disk usage.

| Item | Description |
| --- | --- |
| _Mailbox Name_ | The name of the mailbox. |
| _\# of Messages_ | The number of messages for the address or in the mailbox folder. |
| _Disk Usage_ | The disk usage for each address or mailbox in bytes, kilobytes (KB), megabytes (MB), or gigabytes (GB).<br>Note:<br>Due to system caching, these values may not reflect recent changes in your account’s disk space. |
| _Actions_ | The actions available for the mailbox. |

## Remove messages

To remove messages, perform the following steps:

1. Click _Manage_.
2. Select one of the following removal options from the menu:
   - _1 year old or more_
   - _30MB in size or more_
   - _Previously viewed_
   - _All messages_
   - _Custom query…_ — This option allows you to customize your removal option with the Dovecot mailbox command format. For example, to remove all messages larger than 10MB, select this option and enter `LARGER 10M` in the text box. Or, to remove all messages from before November 4, 2024, select this option and enter `BEFORE 04-Nov-2024` in the text box. For more information about how to use the Dovecot mailbox commands, read Dovecot’s [Overview of search queries for doveadm mailbox commands](https://doc.dovecot.org/main/core/man/doveadm-search-query.7.html) documentation.
3. Click _Delete Permanently_.

#### Additional Documentation

* * *

- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [Email Filters](https://docs.cpanel.net/cpanel/email/email-filters/)
- [Spam Filters](https://docs.cpanel.net/cpanel/email/spam-filters/)
- [Track Delivery](https://docs.cpanel.net/cpanel/email/track-delivery/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×