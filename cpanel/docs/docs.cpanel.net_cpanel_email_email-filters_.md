---
url: "https://docs.cpanel.net/cpanel/email/email-filters/"
title: "Email Filters | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/email-filters/#main-content)

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
4. Email Filters


[filters](https://docs.cpanel.net/tags/filters/) [email](https://docs.cpanel.net/tags/email/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [webmail](https://docs.cpanel.net/tags/webmail/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/email-filters/#overview)

* * *

[Create a filter](https://docs.cpanel.net/cpanel/email/email-filters/#create-a-filter)

* * *

[Current Filters](https://docs.cpanel.net/cpanel/email/email-filters/#current-filters)

* * *

[Edit a filter](https://docs.cpanel.net/cpanel/email/email-filters/#edit-a-filter)

* * *

[Delete a filter](https://docs.cpanel.net/cpanel/email/email-filters/#delete-a-filter)

* * *

[Test a filter](https://docs.cpanel.net/cpanel/email/email-filters/#test-a-filter)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/email-filters/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/email-filters/#overview)

* * *

[Create a filter](https://docs.cpanel.net/cpanel/email/email-filters/#create-a-filter)

* * *

[Current Filters](https://docs.cpanel.net/cpanel/email/email-filters/#current-filters)

* * *

[Edit a filter](https://docs.cpanel.net/cpanel/email/email-filters/#edit-a-filter)

* * *

[Delete a filter](https://docs.cpanel.net/cpanel/email/email-filters/#delete-a-filter)

* * *

[Test a filter](https://docs.cpanel.net/cpanel/email/email-filters/#test-a-filter)

* * *

## Email Filters

![](https://docs.cpanel.net/img/cpanel-icons/email_filters.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/email/email-filters/)

Last modified: _2025 June 26_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you to create, edit, and remove email filters for a selected email account.

An email filter allows you to set a rule for incoming messages (for example, a message from desired sender). If a message matches that rule, then the system can automatically perform an action on that message (for example, deleting the message).

Important:

We **strongly** recommend that you use multiple, simple filters instead of a single large filter. Exim, the server’s mail transfer agent, handles many small rules more efficiently than a single large rule.


## Create a filter

To create a new filter, perform the following steps:

1. In the _Filters by Users_ table, click _Manage Filters_ for the appropriate email account.






Note:




If you access this interface from cPanel’s Webmail interface, proceed to step 2.


2. Click _Create a New Filter_.

3. Enter a name for the filter in the _Filter Name_ text box.

4. Configure your filter’s rules and actions.






Note:




For detailed information on how to configure your filter, read our [How to Configure Email Filters](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/) article.


5. Click _Create_.


## Current Filters

To list an email account’s filters, click _Manage Filters_ in the row of the appropriate email account. The _Current Filters_ table lists all of the filters for the selected email account in the order the filters run.

New filters are appended to the _Current Filters_ list, meaning they will run after pre-existing filters. You may drag and drop the filters to change the order in which the filters will run.

### Edit a filter

To edit an existing filter, perform the following steps:

1. Click _Edit_ next to the appropriate filter name.

2. Make the desired changes to the filter.

3. Click _Save_.


### Delete a filter

To delete a filter, perform the following steps:

1. Click _Delete_ for the appropriate filter name.

2. Click _Delete Filter_.


## Test a filter

To test a filter, perform the following steps:

1. In the _Filters by Users_ table, click _Manage Filters_ next to the desired email account.

2. Enter a test email message in the _Filter Test_ text box.






Note:




Include the characters, words, and conditions that you configured for your filter.


3. Click _Test Filter_. The _Filter Trace Results_ interface will appear.


#### The Filter Trace Results interface

The _Filter Trace Results_ interface will display results similar to the following:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```go<br>Sub-condition is false: not first_delivery<br>Condition is false: not first_delivery and error_message<br>Condition is false: $message_body contains Keyword<br>Return-path copied from sender<br>Sender      = username@hostname.example.com<br>Recipient   = username@hostname.example.com<br>Testing Exim filter file "/home/example/etc/example.com/filtertest/filter"<br>Headers charset "UTF-8"<br>Filtering did not set up a significant delivery.<br>Normal delivery will occur.<br>``` |

The results contain the following information:

- Each condition in the filter, and whether it returned a _true_ or _false_ result.
- The _Sender_ and the _Recipient_ of the test message.
- The filter file’s name.
- The character set of the message.
- Whether the filter triggers a change in delivery or if it will deliver normally.
  - `Filtering did not set up a significant delivery. Normal delivery will occur.` — The system will deliver the message to the mailbox.
  - `Filtering set up at least one significant delivery or other action. No other deliveries will occur.` — The system will deliver the message to another mailbox or folder, or it will not deliver the message.

#### Additional Documentation

* * *

- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [Email Disk Usage](https://docs.cpanel.net/cpanel/email/email-disk-usage/)
- [Global Email Filters](https://docs.cpanel.net/cpanel/email/global-email-filters/)
- [Spam Filters](https://docs.cpanel.net/cpanel/email/spam-filters/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×