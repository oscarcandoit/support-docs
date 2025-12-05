---
url: "https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/"
title: "How to Prevent Spam with Mail Limiting Features | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#main-content)

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
4. How to Prevent Spam with Mail Limiting Features


[mailman](https://docs.cpanel.net/tags/mailman/) [spam](https://docs.cpanel.net/tags/spam/) [email](https://docs.cpanel.net/tags/email/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#overview)

* * *

[Total emails sent by a domain per hour options](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#total-emails-sent-by-a-domain-per-hour-options)

* * *

[Max hourly emails per domain](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#max-hourly-emails-per-domain)

* * *

[Count mailman deliveries towards a domain’s Max hourly emails](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#count-mailman-deliveries-towards-a-domains-max-hourly-emails)

* * *

[The percentage of email messages (above the account’s hourly maximum) to queue and retry for delivery](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#the-percentage-of-email-messages-above-the-accounts-hourly-maximum-to-queue-and-retry-for-delivery)

* * *

[Total emails sent by an email account per hour options](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#total-emails-sent-by-an-email-account-per-hour-options)

* * *

[Number of unique recipients per hour to trigger potential spammer notification.](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#number-of-unique-recipients-per-hour-to-trigger-potential-spammer-notification)

* * *

[Failed and deferred outgoing message options](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#failed-and-deferred-outgoing-message-options)

* * *

[Number of failed or deferred messages a domain may send before protections can be triggered](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#number-of-failed-or-deferred-messages-a-domain-may-send-before-protections-can-be-triggered)

* * *

[Maximum percentage of failed or deferred messages a domain may send per hour](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#maximum-percentage-of-failed-or-deferred-messages-a-domain-may-send-per-hour)

* * *

[Error message](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#error-message)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#overview)

* * *

[Total emails sent by a domain per hour options](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#total-emails-sent-by-a-domain-per-hour-options)

* * *

[Max hourly emails per domain](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#max-hourly-emails-per-domain)

* * *

[Count mailman deliveries towards a domain’s Max hourly emails](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#count-mailman-deliveries-towards-a-domains-max-hourly-emails)

* * *

[The percentage of email messages (above the account’s hourly maximum) to queue and retry for delivery](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#the-percentage-of-email-messages-above-the-accounts-hourly-maximum-to-queue-and-retry-for-delivery)

* * *

[Total emails sent by an email account per hour options](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#total-emails-sent-by-an-email-account-per-hour-options)

* * *

[Number of unique recipients per hour to trigger potential spammer notification.](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#number-of-unique-recipients-per-hour-to-trigger-potential-spammer-notification)

* * *

[Failed and deferred outgoing message options](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#failed-and-deferred-outgoing-message-options)

* * *

[Number of failed or deferred messages a domain may send before protections can be triggered](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#number-of-failed-or-deferred-messages-a-domain-may-send-before-protections-can-be-triggered)

* * *

[Maximum percentage of failed or deferred messages a domain may send per hour](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#maximum-percentage-of-failed-or-deferred-messages-a-domain-may-send-per-hour)

* * *

[Error message](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#error-message)

* * *

## How to Prevent Spam with Mail Limiting Features

Last modified: _2021 September 22_

* * *

## Overview

The _Mail_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_) contains five options that allow you to limit outgoing mail. The limits that these options set apply to all domains on the server. Use the options to help limit bandwidth consumption and prevent potential spammers.

Important:

You **must** enable the Eximstats driver in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_) to use the following features.

## Total emails sent by a domain per hour options

The following options apply to the total number of outgoing messages that a domain sends per hour.

Important:

The account package’s [resource option](https://docs.cpanel.net/whm/packages/edit-a-package/#resource-options) _Maximum Hourly Email by Domain Relayed_ also determines the limit. A specific limit set in the package will overwrite any changes made in _Tweak Settings_.

### Max hourly emails per domain

The _Max hourly emails per domain_ option limits the number of messages that a domain can send per hour.

#### Attributes

- `cpanel.config` entry: `maxemailsperhour`

- Default value: `Unlimited` (no value)

- Minimum value: `1`

- Maximum value: `Unlimited` (no value)

- Permissions: — A user with either of the following permissions can access this option:
  - A reseller account, if you enable the _Allow Creation of Packages with non-default Email Limits_ option in WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_)
  - A user with `root`-level privileges.

Note:

- To define a maximum number of emails that the server allows for an account package, use WHM’s [_Edit a Package_](https://docs.cpanel.net/whm/packages/edit-a-package) interface ( _WHM » Home » Packages » Edit a Package_).

- To define a maximum number of emails that the server allows for an individual cPanel account, use WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account) interface ( _WHM » Home » Account Functions » Modify an Account_).


### Count mailman deliveries towards a domain’s Max hourly emails

This setting allows you to specify whether to count messages sent to _Mailman mailing lists against an account’s Max hourly emails per domain_ limit.

- Set this option’s value to _On_ to include Mailman deliveries in the total value that a domain’s _Max hourly emails per domain_ option uses.

- Set this option’s value to _Off_ to exclude Mailman deliveries from the total value.


#### Attributes

- `cpanel.config` entry: `email_send_limits_count_mailman`

- Default value: _Off_

- Permissions: A user with `root`-level permissions can access this option.


### The percentage of email messages (above the account’s hourly maximum) to queue and retry for delivery

This option defines how the mail server handles outgoing messages for a domain that reaches the value of the _Max hourly emails per domain_ option. The mail server will attempt to deliver any queued messages in the next hour, by default.

- To discard all additional outgoing messages for a domain after the domain reaches the value of the _Max hourly emails per domain_ option, enter `100` in the _The percentage of email messages (above the account’s hourly maximum) to queue and retry for delivery_ text box.

- To queue outgoing messages for a domain after the domain reaches the value of the _Max hourly emails per domain_ option, enter a value larger than `100` in the _The percentage of email messages (above the account’s hourly maximum) to queue and retry for delivery_ text box.


Important:

The mail server evaluates the value that you enter in the _The percentage of email messages (above the account’s hourly maximum) to queue and retry for delivery_ text box as a percentage of the value that you set for the _Max hourly emails per domain_ option.

#### Attributes

- `cpanel.config` entry: `email_send_limits_defer_cutoff`

- Default value: `125`

- Minimum value: `100`

- Maximum value: `10000`

- Permissions: A user with `root`-level permissions can access this option.


#### Example

You set the _Max hourly emails per domain_ option to `100`, and you set the _The percentage of email messages (above the account’s hourly maximum) to queue and retry for delivery_ option to `200`. The mail server applies the following rules to the outgoing messages from each domain:

- The mail server sends the first 100 outgoing messages from the domain.

- The mail server queues the next 100 outgoing messages from the domain.

- The mail server discards any additional outgoing messages from the domain.

- In the following hour, the mail server attempts to send all queued outgoing messages from the domain.


## Total emails sent by an email account per hour options

The following options apply to the total number of outgoing messages that an individual email account sends per hour.

### Number of unique recipients per hour to trigger potential spammer notification.

The _Number of unique recipients per hour to trigger potential spammer notification._ setting specifies the number of emails that any account may send in one hour before the system sends an alert notification.

If an email account exceeds this threshold and the system administrator has enabled the _Large Amount of Outbound Email Detected_ alert in WHM’s [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager) interface ( _WHM » Home » Server Contacts » Contact Manager_), the system will send an alert to the system administrator.

## Failed and deferred outgoing message options

The _Maximum percentage of failed or deferred messages a domain may send per hour option and the Number of failed or deferred messages a domain may send before protections can be triggered_ option specifies when the server will temporarily block outgoing mail from a domain. The system examines **all** outgoing and local mail over the previous hour to determine whether these conditions are true.

Important:

Your server will temporarily block outgoing mail from a domain if **both** of the following conditions are true:

- The percentage of failed or deferred messages, out of the total number of messages that the domain sent, is **equal to or greater than** the percentage that you specify for the _Maximum percentage of failed or deferred messages a domain may send per hour_ option.

- The domain has sent **at least** the number of failed or deferred messages that you specify for the _Number of failed or deferred messages a domain may send before protections can be triggered_ option.


#### Example

[Click to view...](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features/#click-to-view---1764175697479948690)

If you set the following values, the server functions in the manner that the table below describes:

- _Maximum percentage of failed or deferred messages a domain may send per hour_ — `55%`

- _Number of failed or deferred messages a domain may send before protections can be triggered_ — `7`


| Deferred or failed (past hour) | Successful (past hour) | % deferred or failed | Domain’s outgoing mail status |
| --- | --- | --- | --- |
| 1 | 0 | 100% | OK — The domain reached the **percentage** of failed or deferred messages, but did **not** reach the **number** of failed or deferred messages. |
| 2 | 0 | 100% | OK — The domain reached the **percentage** of failed or deferred messages, but did **not** reach the **number** of failed or deferred messages. |
| 2 | 1 | 67% | OK — The domain reached the **percentage** of failed or deferred messages, but did **not** reach the **number** of failed or deferred messages. |
| 2 | 2 | 50% | OK — The domain did **not** reach either condition. |
| 3 | 2 | 60% | OK — The domain reached the **percentage** of failed or deferred messages, but did **not** reach the **number** of failed or deferred messages. |
| 4 | 2 | 67% | OK — The domain reached the **percentage** of failed or deferred messages, but did **not** reach the **number** of failed or deferred messages. |
| 5 | 2 | 71% | OK — The domain reached the **percentage** of failed or deferred messages, but did **not** reach the **number** of failed or deferred messages. |
| 6 | 2 | 75% | OK — The domain reached the **percentage** of failed or deferred messages, but did **not** reach the **number** of failed or deferred messages. |
| 6 | 3 | 67% | OK — The domain reached the **percentage** of failed or deferred messages, but did **not** reach the **number** of failed or deferred messages. |
| 6 | 4 | 60% | OK — The domain reached the **percentage** of failed or deferred messages, but did **not** reach the **number** of failed or deferred messages. |
| 6 | 5 | 55% | OK — The domain reached the **percentage** of failed or deferred messages, but did **not** reach the **number** of failed or deferred messages. |
| 6 | 6 | 50% | OK — The domain did **not** reach either condition. |
| 6 | 7 | 46% | OK — The domain did **not** reach either condition. |
| 7 | 7 | 50% | OK — The domain reached the **number** of failed or deferred messages, but did **not** reach the **percentage** of failed or deferred messages. |
| 8 | 7 | 53% | OK — The domain reached the **number** of failed or deferred messages, but did **not** reach the **percentage** of failed or deferred messages. |
| 9 | 7 | 56% | **OUTGOING MAIL BLOCKED** — The domain reached **both** conditions. |

### Number of failed or deferred messages a domain may send before protections can be triggered

Remember:

Use the _Number of failed or deferred messages a domain may send before protections can be triggered_ option with the _Maximum percentage of failed or deferred messages a domain may send per hour_ option. Your server does **not** temporarily block outgoing mail from a domain until the domain reaches **both** limits.

This option defines how many failed or deferred messages that a domain can send before the mail server checks whether the _Maximum percentage of failed or deferred messages a domain may send per hour_ value was met.

#### Attributes

- `cpanel.config` entry: `email_send_limits_min_defer_fail_to_trigger_protection`

- Default value: `5`

- Minimum value: `1`

- Maximum value: `1000000000000000000`

- Permissions: A user with `root` permissions can access this option.


### Maximum percentage of failed or deferred messages a domain may send per hour

Remember:

Use the _Maximum percentage of failed or deferred messages a domain may send per hour_ option with the _Number of failed or deferred messages a domain may send before protections can be triggered_ option. Your server does **not** temporarily block outgoing mail from a domain until the domain reaches **both** limits.

This option specifies the maximum percentage of failed or deferred messages that a domain may send per hour. This option **only** applies after the number of failed or deferred messages reaches the _Number of failed or deferred messages a domain may send before protections can be triggered_ option’s value.

#### Attributes

- `cpanel.config` entry: `email_send_limits_max_defer_fail_percentage`

- Default value: `Unlimited`

- Minimum value: `1`

- Maximum value: `Unlimited`

- Permissions: A user with `root` permissions can access this option.


### Error message

If a domain reaches the limits set in the _Maximum percentage of failed or deferred messages a domain may send per hour_ and _Number of failed or deferred messages a domain may send before protections can be triggered_ options set, then your error log will contain entries that resemble the following example:

```bash
R=enforce_mail_permissions: Domain example.com has exceeded the max defers and failures per hour (7/5 (20%)) allowed. Message discarded.
```

The number of failed and deferred outgoing messages affect the values in the error message in the following ways:

- `7` — The number of failed or deferred outgoing messages from the domain in the hour.

- `5` — The number of failed or deferred messages the mail server allows the domain to send in an hour, before it checks the percentage of failed or deferred outgoing messages that the mail server allows the domain to send. To set this value, use the _Number of failed or deferred messages a domain may send before protections can be triggered_ option.

- `20` — The current percentage of deferred or failed outgoing messages for the domain. This percentage is based on the total messages sent compared to the number of failed or deferred outgoing messages per hour for the domain.


#### Additional Documentation

* * *

- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [Filter Incoming Emails by Country](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/)
- [Filter Incoming Emails by Domain](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/)
- [Mailing Lists](https://docs.cpanel.net/cpanel/email/mailing-lists/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×