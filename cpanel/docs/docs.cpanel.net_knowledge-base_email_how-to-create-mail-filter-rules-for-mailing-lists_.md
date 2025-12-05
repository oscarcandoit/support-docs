---
url: "https://docs.cpanel.net/knowledge-base/email/how-to-create-mail-filter-rules-for-mailing-lists/"
title: "How to Create Mail Filter Rules For Mailing Lists | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/how-to-create-mail-filter-rules-for-mailing-lists/#main-content)

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
4. How to Create Mail Filter Rules For Mailing Lists


[spamassassin](https://docs.cpanel.net/tags/spamassassin/) [filters](https://docs.cpanel.net/tags/filters/) [mailman](https://docs.cpanel.net/tags/mailman/) [spam](https://docs.cpanel.net/tags/spam/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-create-mail-filter-rules-for-mailing-lists/#overview)

* * *

[Create a mail filter rule](https://docs.cpanel.net/knowledge-base/email/how-to-create-mail-filter-rules-for-mailing-lists/#create-a-mail-filter-rule)

* * *

[Legacy anti-spam filters](https://docs.cpanel.net/knowledge-base/email/how-to-create-mail-filter-rules-for-mailing-lists/#legacy-anti-spam-filters)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/how-to-create-mail-filter-rules-for-mailing-lists/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-create-mail-filter-rules-for-mailing-lists/#overview)

* * *

[Create a mail filter rule](https://docs.cpanel.net/knowledge-base/email/how-to-create-mail-filter-rules-for-mailing-lists/#create-a-mail-filter-rule)

* * *

[Legacy anti-spam filters](https://docs.cpanel.net/knowledge-base/email/how-to-create-mail-filter-rules-for-mailing-lists/#legacy-anti-spam-filters)

* * *

## How to Create Mail Filter Rules For Mailing Lists

Last modified: _2025 May 15_

* * *

## Overview

This document explains how to create mail filter rules in cPanel’s [_Mailing Lists_](https://docs.cpanel.net/cpanel/email/mailing-lists) interface ( _cPanel » Home » Email » Mailing Lists_). Mail filters allow you to control which email messages your server delivers.

## Create a mail filter rule

Important:

- Mailman’s _Spam Filters_ feature **requires** that you enable [spam filters](https://docs.cpanel.net/cpanel/email/spam-filters). To enable Apache SpamAssassin™ for your cPanel account, select _Enable Apache SpamAssassin_ in cPanel’s [_Spam Filters_](https://docs.cpanel.net/cpanel/email/spam-filters) interface ( _cPanel » Home » Email » Spam Filters_).
- Generally, the recipient does **not** receive the `BCC` field in an email’s header. For this reason, you **cannot** use the `BCC` field in a filter.

To control which email messages your server delivers to your mailing lists, use Mailman’s _Spam filters_ interface. To create a mail filter rule with the _Header filters_ section of the _Spam filters_ interface, perform the following steps:

1. Access Mailman’s _Spam filters_ interface. To do this, perform the follow steps:

2. Navigate to cPanel’s [_Mailing Lists_](https://docs.cpanel.net/cpanel/email/mailing-lists) interface ( _cPanel » Home » Email » Mailing Lists_).

3. Click _Manage_ for the mailing list that you wish to edit. A new interface will appear.

4. In the _Configuration Categories_ section at the top, click _Privacy options_.

5. Click _Spam filters_.

6. In the _Spam Filter Rule 1_ text box, enter a [regular expression (regex)](http://en.wikipedia.org/wiki/Regular_expression) that matches the messages to which to apply an action. For example:


```
^(X-Spam-Status:\s*Yes|X-Spam-Level:\s*(?:\*|\+){5,})
```

Notes:

- This example filter applies to any message that SpamAssassin scores `5` or higher, or marks as spam with the `Yes` tag. Filters that require lower scores will mark more emails as spam, because those emails have to meet fewer requirements to qualify as spam.
- Individual users generally use `5` as a spam score, while ISPs can use a higher score to prevent filtering out non-spam emails.
- The `+` character here corresponds to the `*` character.
- Apache SpamAssassin adds information to the header of each mail message that it reviews. You can use this information to determine which mail filter rules to use.

3. Next to _Action:_, select the action for Mailman to perform on the messages that match the filter. You can select the following settings:
   - _Defer_ — Disable the filter rule.
   - _Hold_ — Hold the messages that match the filter rule until a moderator approves it.
   - _Reject_ — Reject the messages that match the filter rule.
   - _Discard_ — Delete the messages that match the filter rule.
   - _Accept_ — Accept the messages that match the filter rule.
4. Click _Submit Your Changes_.


## Legacy anti-spam filters

Note:

A moderator of the mailing list **must** approve the messages that match any spam filters in the _Legacy anti-spam filters_ section of the _Spam filters_ interface.

To create a mail filter rule with the _Legacy anti-spam filters_ section of Apache SpamAssassin’s _Spam filters_ interface, perform the following steps:

1. In the _Legacy anti-spam filters_ text box, enter the header information to filter.
2. Click _Submit Your Changes_.

#### Additional Documentation

* * *

- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [Email Filters](https://docs.cpanel.net/cpanel/email/email-filters/)
- [Global Email Filters](https://docs.cpanel.net/cpanel/email/global-email-filters/)
- [Spam Filters](https://docs.cpanel.net/cpanel/email/spam-filters/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×