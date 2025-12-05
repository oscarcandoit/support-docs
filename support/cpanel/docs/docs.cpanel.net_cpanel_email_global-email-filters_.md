---
url: "https://docs.cpanel.net/cpanel/email/global-email-filters/"
title: "Global Email Filters | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/global-email-filters/#main-content)

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
4. Global Email Filters


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [filters](https://docs.cpanel.net/tags/filters/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/global-email-filters/#overview)

* * *

[Create a filter](https://docs.cpanel.net/cpanel/email/global-email-filters/#create-a-filter)

* * *

[Create a wildcard redirect](https://docs.cpanel.net/cpanel/email/global-email-filters/#create-a-wildcard-redirect)

* * *

[Current Filters](https://docs.cpanel.net/cpanel/email/global-email-filters/#current-filters)

* * *

[Edit a filter](https://docs.cpanel.net/cpanel/email/global-email-filters/#edit-a-filter)

* * *

[Delete a filter](https://docs.cpanel.net/cpanel/email/global-email-filters/#delete-a-filter)

* * *

[Test a filter](https://docs.cpanel.net/cpanel/email/global-email-filters/#test-a-filter)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/global-email-filters/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/global-email-filters/#overview)

* * *

[Create a filter](https://docs.cpanel.net/cpanel/email/global-email-filters/#create-a-filter)

* * *

[Create a wildcard redirect](https://docs.cpanel.net/cpanel/email/global-email-filters/#create-a-wildcard-redirect)

* * *

[Current Filters](https://docs.cpanel.net/cpanel/email/global-email-filters/#current-filters)

* * *

[Edit a filter](https://docs.cpanel.net/cpanel/email/global-email-filters/#edit-a-filter)

* * *

[Delete a filter](https://docs.cpanel.net/cpanel/email/global-email-filters/#delete-a-filter)

* * *

[Test a filter](https://docs.cpanel.net/cpanel/email/global-email-filters/#test-a-filter)

* * *

## Global Email Filters

![](https://docs.cpanel.net/img/cpanel-icons/global_email_filters.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/email/global-email-filters/)

Last modified: _2025 June 26_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you to configure how your server filters all of the email that your domains’ email accounts receive.

Note:

- We **strongly** recommend that you use multiple, simple filters instead of a single large filter. Exim, the server’s mail transfer agent, handles many small rules more efficiently than a single large rule.
- Email filters will **not** process any email messages that are discarded before delivery. The system may discard some email messages before delivery if you select the _Discard the email while your server processes it by SMTP time with an error message_ setting in cPanel’s [_Default Address_](https://docs.cpanel.net/cpanel/email/default-address/#default-address-maintenance) interface ( _cPanel » Home » Email » Default Address_). interface.
- Generally, the recipient does **not** receive the `BCC` field in an email’s header. For this reason, you **cannot** use the `BCC` field in a filter.

For more information about cPanel’s email filter rules and actions, read our [How to Configure Mail Filters](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters) documentation.

## Create a filter

To create a new filter, perform the following steps:

1. Click _Create a New Filter_.
2. Enter the filter’s name in the _Filter Name_ text box.
3. Configure your filter’s rules and actions. For more information about configuring your filter, read our [How to Configure Mail Filters](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters) documentation.
4. Click _Create_.

### Create a wildcard redirect

A wildcard redirect will redirect all emails whose addresses match a regular expression (regex) pattern.

Important:

Forwarders deliver copies of a forwarded email to both the original and the destination address, while redirects **only** deliver emails to the destination address. For example, redirecting an email from `sample-email@example.com` to `correct-sample-email@example.com` will result in it **only** being available in the `correct-sample-email@example.com` inbox.

To create a wildcard redirect, perform the following steps:

1. Click _Create a New Filter_.
2. Enter the wildcard filter’s name in the _Filter Name_ text box.
3. Select _From_ from the _Rules_ menu to apply your new filter to the sending email address.
4. Select _matches regex_ from the _Operators_ menu to compare the sending email address to your regex pattern.
5. Enter your regex pattern in the _Criteria_ text box.






Note:





- The regex pattern **must** have a `.+` notation where wildcard characters are expected. For example, to forward `test_user1@example.com` and `test_user2@example.com` to the same address, set the regex pattern to `test_user.+@example\.com`.

- A sending email address **must** have wildcard characters in the expected place to be caught by the wildcard filter. For example, a wildcard filter tracking the regex pattern `test_user.+@example.com` will catch `test_user45@example.com` and `test_user_SHOSHANA@example.com`, but will **not** catch `test_user@example.com`.


## Current Filters

The _Current Filters_ section lists all of the account-level filters for your cPanel account.

### Edit a filter

To edit an existing filter, perform the following steps:

1. Click _Edit_ next to the appropriate filter name.
2. Make the desired changes to the filter.
3. Click _Create_.

### Delete a filter

To delete a filter, perform the following steps:

1. Click _Delete_ next to the appropriate filter name.
2. Click _Delete Filter_.

## Test a filter

Important:

To learn more about your filter’s rules and actions, read our [How to Configure Mail Filters](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters) documentation.

To test your filter, perform the following steps:

1. Enter a test email message in the _Filter Test_ text box. Include the characters, words, and conditions that you configured for your filter.
2. Click _Test Filter_. The _Filter Trace Results_ interface will appear.

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

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Archive](https://docs.cpanel.net/cpanel/email/archive/)
- [Autoresponders](https://docs.cpanel.net/cpanel/email/autoresponders/)
- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Email Filters](https://docs.cpanel.net/cpanel/email/email-filters/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×