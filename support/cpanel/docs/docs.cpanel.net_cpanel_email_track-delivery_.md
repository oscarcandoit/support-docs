---
url: "https://docs.cpanel.net/cpanel/email/track-delivery/"
title: "Track Delivery | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/track-delivery/#main-content)

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
4. Track Delivery


[email](https://docs.cpanel.net/tags/email/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [webmail](https://docs.cpanel.net/tags/webmail/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/track-delivery/#overview)

* * *

[Search](https://docs.cpanel.net/cpanel/email/track-delivery/#search)

* * *

[Delivery Report](https://docs.cpanel.net/cpanel/email/track-delivery/#delivery-report)

* * *

[Event icons and troubleshooting](https://docs.cpanel.net/cpanel/email/track-delivery/#event-icons-and-troubleshooting)

* * *

[Delivery Report table options](https://docs.cpanel.net/cpanel/email/track-delivery/#delivery-report-table-options)

* * *

[Email Address Trace](https://docs.cpanel.net/cpanel/email/track-delivery/#email-address-trace)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/track-delivery/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/track-delivery/#overview)

* * *

[Search](https://docs.cpanel.net/cpanel/email/track-delivery/#search)

* * *

[Delivery Report](https://docs.cpanel.net/cpanel/email/track-delivery/#delivery-report)

* * *

[Event icons and troubleshooting](https://docs.cpanel.net/cpanel/email/track-delivery/#event-icons-and-troubleshooting)

* * *

[Delivery Report table options](https://docs.cpanel.net/cpanel/email/track-delivery/#delivery-report-table-options)

* * *

[Email Address Trace](https://docs.cpanel.net/cpanel/email/track-delivery/#email-address-trace)

* * *

## Track Delivery

![](https://docs.cpanel.net/img/cpanel-icons/track_delivery.svg)

_Valid for versions 84 through the latest version_

#### Version:

#### [84](https://docs.cpanel.net/cpanel/email/track-delivery/)

Last modified: _2025 June 26_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface displays a report about email message deliveries from your account. You can also use this interface to trace an email’s delivery route and to find delivery problems.

## Search

The _Recipient Email (optional)_ text box lets you to filter the [_Delivery Report_](https://docs.cpanel.net/cpanel/email/track-delivery/#delivery-report) table results to a specific email address. To do so, perform the following steps:

1. Enter an email address in the _Recipient Email (optional)_ text box.
2. Click _Run Report_. The system will filter the _Delivery Report_ table to **only** display results for the recipient email address. It will also display the [_Email Address Trace_](https://docs.cpanel.net/cpanel/email/track-delivery/#email-address-trace) diagram.

To reset the _Delivery Report_ table’s results, perform the following steps:

1. Remove the email address from the _Recipient Email (optional)_ text box.
2. Click _Run Report_. This will remove the filter from the _Delivery Report_ table and display all email message results.






Note:





This will **not** reset the _Email Server Trace_ diagram.


You can use the following options to filter the results of the _Delivery Report_ table:

| Options | Description |
| --- | --- |
| _Show Blocked & Failed_ | This option will filter the table to only display delivery failures. |
| _Show All_ | Display all deliveries. This will also update the _Recipient Email (optional)_ search results. |

## Delivery Report

Note:

- If the server uses a third-party mail service, such as MailScanner, this feature will return invalid results. If you experience issues when you use this feature, contact your hosting provider.
- If you do **not** see messages displayed in this table, your hosting provider has **not** enabled this feature. Contact your provider and ask them to enable the feature in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM_ » _Home_ » _Service Configuration_ » _Service Manager_).
- The table **only** displays messages for which the `eximstats` database stores data.

By default, the table lists the 250 most recent messages sent to and from your cPanel account’s mailboxes. This includes every delivery success and failure. The table sorts the data into the following columns by default:

| Column | Description |
| --- | --- |
| _Event_ | An [icon](https://docs.cpanel.net/cpanel/email/track-delivery/#event-icons-and-troubleshooting) that indicates the message’s delivery status. |
| _From Address_ | The email address on your system that sent the message. |
| _Sender_ | The sender’s cPanel username. |
| _Sent Time_ | The date and time when the user sent the message. This report uses your browser’s timezone setting. |
| _Spam Score_ | The message’s [Apache SpamAssassin™](https://docs.cpanel.net/cpanel/email/spam-filters) score. |
| _Recipient_ | The email address to which the user sent the message. |
| _Result_ | A message that describes the delivery results. |
| _Actions_ | Click the information icon (![Info](https://docs.cpanel.net/img/trackdeliveryinformation84.png)) to view and print information about the selected message. This includes information such as a message’s sender, recipient, and username. |

The system retains this data for the amount of days that your hosting provider specifies for the _The interval, in days, to retain Exim stats in the database (Minimum: 1; Maximum: 365,000)_ option in the _Stats and Logs_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM_ » _Home_ » _Server Configurations_ » _Tweak Settings_).

### Event icons and troubleshooting

The icons in the _Event_ column can show potential problems with message delivery. Follow the recommended actions to troubleshoot problems, and contact your hosting provider if you need more help.

| Event Icon | Description | Possible reason | Recommended action |
| --- | --- | --- | --- |
| ![Success](https://docs.cpanel.net/img/trackdeliverysuccess84.png) | The system delivered the message. | N/A | N/A |
| ![Unknown](https://docs.cpanel.net/img/trackdeliveryunknown84.png) | The message’s status is unknown, or delivery is in progress. | The remote server may be slow. | Check the _Result_ column for timeout or connection errors. |
| ![Deferred](https://docs.cpanel.net/img/trackdeliverydeferred84.png) | The system deferred the message and will try again to send it. | The remote server may not be accessible. | Check the _Result_ column for timeout errors. |
| ![Error](https://docs.cpanel.net/img/trackdeliverydeliveryerror84.png) | The message encountered a delivery error. | The domain may not exist. | Check the email address for spelling errors. |
| ![Archived](https://docs.cpanel.net/img/trackdeliveryarchived84.png) | The system archived the message. | You or your hosting provider have enabled archiving. | Read our [Archive](https://docs.cpanel.net/cpanel/email/archive) documentation. |
| ![Rejected](https://docs.cpanel.net/img/trackdeliveryrejected84.png) | The system rejected and discarded the message at Simple Mail Transfer Protocol (SMTP) time. | The sender’s server may not use a secure configuration or may be on a [blacklist](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#blacklist). | Check the [Real-time Blackhole List (RBL)](https://mxtoolbox.com/blacklists.aspx) for the server’s IP address. |
| ![Filtered](https://docs.cpanel.net/img/trackdeliveryfiltered84.png) | The mail server accepted the message but it did not deliver the message to the recipient’s inbox. | Spam software may have filtered the message, or the recipient may have custom email filters. | Check the recipient’s [`spam` folder](https://docs.cpanel.net/knowledge-base/email/how-to-log-in-to-the-sent-and-spam-mail-folders-directly/) for the message. |

### Delivery Report table options

You can filter your search results with the following options:

#### Record selection

To filter the records:

1. Select any of the following checkboxes:
   - _Show Successes_
   - _Show Deferred_
   - _Show Failures_
   - _Show In-Progress_
2. Select the maximum number of results to display from the _Max Results/Type_ menu.

#### Column selection

To select the columns that you wish to display or hide in the _Delivery Report_ table, click the table options icon (![Options](https://docs.cpanel.net/img/trackdeliveryoptions84.png)). A new window will appear. In this window, select or deselect the checkboxes for the following column headers:

| Header | Description |
| --- | --- |
| _Select All_ | Select all of the available options. |
| _Event_ | An [icon](https://docs.cpanel.net/cpanel/email/track-delivery/#event-icons-and-troubleshooting) that indicates the message’s delivery status. |
| _User_ | The cPanel username of the sender. |
| _Domain_ | The sender’s domain. |
| _From Address_ | The email address on your system that sent the message. |
| _Sender_ | The sender’s cPanel email address. |
| _Sent Time_ | The date and time when the user sent the message. This report uses your browser’s timezone setting. |
| _Sender Host_ | The sender’s host’s IP address. |
| _Sender IP Address_ | The sender’s IP address. |
| _Authentication_ | A type of SMTP authentication. |
| _Spam Score_ | The email’s [Apache SpamAssassin](https://docs.cpanel.net/cpanel/email/spam-filters) score. |
| _Recipient_ | The email address to which the user sent the message. |
| _Delivery User_ | The cPanel username that owns the recipient’s email address. |
| _Delivery Domain_ | The domain of the recipient. |
| _Delivered To_ | The email address of the recipient. |
| _Router_ | The internal router that handled the delivery of the message. |
| _Transport_ | The recipient’s SMTP method type. |
| _Out Time_ | The date and time when the intended recipient received the message. This report uses your browser’s timezone setting. |
| _ID_ | The outgoing message’s ID. |
| _Delivery Host_ | The hostname of the recipient’s email exchanger. |
| _Delivery IP Address_ | The recipient email exchanger’s IP address. |
| _Size_ | The size of the outgoing message, in bytes. |
| _Result_ | A message that describes the delivery results. |
| _Actions_ | Displays the information icon (![Info](https://docs.cpanel.net/img/trackdeliveryinformation84.png)). This lets you view and print information about a message. |

## Email Address Trace

This diagram displays how the system sent or would send an email message to the given email address. It traces how the local system routes a message.

Each of the following icons in the diagram displays information about the message’s delivery path:

Note:

These icons may vary from those that your system uses.

| Icon | Description |
| --- | --- |
| ![Local](https://docs.cpanel.net/img/trackdeliverytracelocal84.png) | The system delivered the message to a local inbox. |
| ![Remote](https://docs.cpanel.net/img/trackdeliverytraceremote84.png) | The system delivered the message to a remote mailbox. |
| ![Defer](https://docs.cpanel.net/img/trackdeliverytracedefer84.png) | The system deferred the message. |
| ![Reject](https://docs.cpanel.net/img/trackdeliverytracereject84.png) | The system rejected the message. |
| ![Error](https://docs.cpanel.net/img/trackdeliverytraceerror84.png) | The system encountered a delivery error. |
| ![Command](https://docs.cpanel.net/img/trackdeliverytracecommand84.png) | The system received the message. |
| ![Discard](https://docs.cpanel.net/img/trackdeliverytracediscard84.png) | The system discarded the message. |

#### Additional Documentation

* * *

- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [Email Disk Usage](https://docs.cpanel.net/cpanel/email/email-disk-usage/)
- [Email Filters](https://docs.cpanel.net/cpanel/email/email-filters/)
- [Spam Filters](https://docs.cpanel.net/cpanel/email/spam-filters/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×