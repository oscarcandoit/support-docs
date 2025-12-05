---
url: "https://docs.cpanel.net/whm/email/mail-queue-manager/"
title: "Mail Queue Manager | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/email/mail-queue-manager/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [Email](https://docs.cpanel.net/whm/email/)
4. Mail Queue Manager


[exim](https://docs.cpanel.net/tags/exim/) [whmui](https://docs.cpanel.net/tags/whmui/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/email/mail-queue-manager/#overview)

* * *

[View queued emails](https://docs.cpanel.net/whm/email/mail-queue-manager/#view-queued-emails)

* * *

[The results table](https://docs.cpanel.net/whm/email/mail-queue-manager/#the-results-table)

* * *

[Customize output results](https://docs.cpanel.net/whm/email/mail-queue-manager/#customize-output-results)

* * *

[Delete messages](https://docs.cpanel.net/whm/email/mail-queue-manager/#delete-messages)

* * *

[Deliver messages](https://docs.cpanel.net/whm/email/mail-queue-manager/#deliver-messages)

* * *

[Unfreeze an email](https://docs.cpanel.net/whm/email/mail-queue-manager/#unfreeze-an-email)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/email/mail-queue-manager/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/email/mail-queue-manager/#overview)

* * *

[View queued emails](https://docs.cpanel.net/whm/email/mail-queue-manager/#view-queued-emails)

* * *

[The results table](https://docs.cpanel.net/whm/email/mail-queue-manager/#the-results-table)

* * *

[Customize output results](https://docs.cpanel.net/whm/email/mail-queue-manager/#customize-output-results)

* * *

[Delete messages](https://docs.cpanel.net/whm/email/mail-queue-manager/#delete-messages)

* * *

[Deliver messages](https://docs.cpanel.net/whm/email/mail-queue-manager/#deliver-messages)

* * *

[Unfreeze an email](https://docs.cpanel.net/whm/email/mail-queue-manager/#unfreeze-an-email)

* * *

## Mail Queue Manager

![](https://docs.cpanel.net/img/whm-icons/mail_queue_manager.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/email/mail-queue-manager/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The Mail Queue Manager allows you to view, delete, and attempt to deliver queued messages that the system has **not** yet delivered to their destinations. For example, the system places messages in your mail queue if the sender addressed the messages to invalid hosts or addresses.

## View queued emails

To view messages queued on your server, perform the following steps:

1. Enter the search term conditions for your query.
2. Enter your search criteria into the _Search…_ text box.
3. In the _Select Query_ menu, select the portion of the message to query.

   - If you do not wish to restrict your search to a specific filter, select _No Filter_.
4. In the Search Type menu, select how the search function matches your criteria.





Note:



_Partial_ matches require more time to run than _Begins With_ and _Exact_ matches.


5. Enter the _Start Date_, _Start Time_, _End Date_, and _End Time_ values to specify the date range for which you wish to view sent mail.
6. Click _Run Report_.





Note:





- The search feature does **not** search the body of the queued messages.
- The results remain filtered until you clear the search box.

## The results table

By default, the system sorts results for your query into seven columns.

- _Time Received_ — The time at which the email message arrived at the destination server.
- _Sender_ — The email address that sent the message.
- _Message ID_ — The message’s unique identifier.
- _Recipient(s)_ — The email address to which the user sent the message.
- _Size_ — The size of the message.
- _Status_ — The status of the message.
- _Action_ — Click the icon to view information about the selected message. When this report displays, you can also perform the following actions:

  - _Delete Message_
  - _Deliver Message Now_
  - _Return to Mail Queue._

Read the sections below for more information about the _Delete_ and _Deliver_ actions.

Note:

If an email has several invalid destination addresses (To, CC, and BCC addresses), the message only appears once in the table.


### Customize output results

You may add columns to the results table to view more information. To add columns, perform the following steps:

- Click the icon in the top right corner of the results table, and select the checkbox for the information that you wish to view in the table. To hide information from the table, deselect the checkbox.
- To automatically select the default columns, click _Reset to Default_.

### Delete messages

The **system** cannot send emails that users send to incorrect addresses. You **must** delete these messages from the _Mail Queue Manager_ list.

To delete emails, perform the following steps:

1. Select the checkbox for each email that you wish to delete.
2. Click _Delete Selected_.
3. A new window will display. Click _OK_.

To delete all of the emails in the list, perform the following steps:

Warning:

This function deletes **all** emails, both from the filtered list and mail queue. Only use this if you wish to delete **all** emails from your mail queue.


1. Click _Delete All_. A new window will display.
2. Click _OK_ to confirm that you wish to delete all emails.
3. A new window will display. Click _OK_ .

### Deliver messages

To attempt to deliver queued emails, perform the following steps:

1. Select the checkbox for each email that you wish to send.
2. Click _Deliver Selected_.
3. A new window will display. Click _OK_.

   - The system will confirm that it attempted to deliver the message.
   - Under _Delivering Messages in Queue_, a delivery report indicates whether this attempt succeeded or failed.

To attempt to deliver all of the server’s queued mail, perform the following steps:

Warning:

This function attempts to deliver **all** of the queued mail on the server, both from the filtered list and mail queue.


1. Click _Deliver All_.
2. A new window will display. Click _OK_.

   - The system will confirm that it attempted to deliver the message.
   - Under _Delivering Messages in Queue_, a delivery report indicates whether this attempt succeeded or failed.

### Unfreeze an email

After several attempts, if a message fails to deliver, the system freezes that message. This practice helps to conserve system resources, increase queue runs, and reduce chances that the target mail transfer agent treats your message as spam.

The system will not attempt to deliver the message again until you manually unfreeze the message, or the system reaches a timeout.

To unfreeze a message, click the unfreeze icon that corresponds to the desired message. A new window will open to confirm that the system has unfrozen your message.

Note:

- This icon only appears when the status of the message is labeled frozen.
- You can unfreeze only one message at a time.

If several frozen messages appear in your _Mail Queue Manager_, examine the log file (`/var/log/exim_mainlog`) to find the cause and troubleshoot Exim.

#### Additional Documentation

* * *

- [Email Deliverability in WHM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)
- [Filter Incoming Emails by Country](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/)
- [Filter Incoming Emails by Domain](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/)
- [Greylisting](https://docs.cpanel.net/whm/email/greylisting/)
- [Mail Delivery Reports](https://docs.cpanel.net/whm/email/mail-delivery-reports/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×