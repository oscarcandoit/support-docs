---
url: "https://docs.cpanel.net/whm/email/view-sent-summary/"
title: "View Sent Summary | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/email/view-sent-summary/#main-content)

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
4. View Sent Summary


[exim](https://docs.cpanel.net/tags/exim/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/email/view-sent-summary/#overview)

* * *

[View information about sent emails](https://docs.cpanel.net/whm/email/view-sent-summary/#view-information-about-sent-emails)

* * *

[The results table — Historical View](https://docs.cpanel.net/whm/email/view-sent-summary/#the-results-table-historical-view)

* * *

[The results table — Current View](https://docs.cpanel.net/whm/email/view-sent-summary/#the-results-table-current-view)

* * *

[View all outgoing mail sent by a specific user](https://docs.cpanel.net/whm/email/view-sent-summary/#view-all-outgoing-mail-sent-by-a-specific-user)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/email/view-sent-summary/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/email/view-sent-summary/#overview)

* * *

[View information about sent emails](https://docs.cpanel.net/whm/email/view-sent-summary/#view-information-about-sent-emails)

* * *

[The results table — Historical View](https://docs.cpanel.net/whm/email/view-sent-summary/#the-results-table-historical-view)

* * *

[The results table — Current View](https://docs.cpanel.net/whm/email/view-sent-summary/#the-results-table-current-view)

* * *

[View all outgoing mail sent by a specific user](https://docs.cpanel.net/whm/email/view-sent-summary/#view-all-outgoing-mail-sent-by-a-specific-user)

* * *

## View Sent Summary

![](https://docs.cpanel.net/img/whm-icons/view_sent_summary.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/email/view-sent-summary/)

Last modified: _2025 June 5_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature displays the total number of message delivery attempts that each domain on your server made within a specified time and date range. You can view the number of successful attempts, failed attempts, and the total number of bytes that each domain sent.

## View information about sent emails

To view information about emails that domains on your server sent within a specific time and date range, perform the following steps:

1. Enter the _Start Date_, _Start Time_, _End Date_, and _End Time_ values to specify the date range for which you wish to view mail.







Note:




The larger the date range, the longer your query requires to process.


2. Click _Run Report_.


### The results table — Historical View

To display how many messages and how much data each account sent within the date range that you specified, click _Historical View_. By default, the interface displays the following eight columns in the table:

- _Domain_ — The domain from which users sent messages.

- _User_ — The cPanel user who owns the domain.

- _Successful_ — The number of successful mail deliveries that originated from the domain.

- _Deferrals_ — The number of deferred mail deliveries that originated from the domain.

- _Failures_ — The number of failed mail deliveries that originated from the domain.

- _Failed and Deferred_ — The sum of failed and deferred mail deliveries that originated from the domain.

- _Total Messages_ — The total number of messages that originated from the domain.

- _Data Sent_ — The total amount of data that the domain sent.


Click the _Table Options_ icon (![Table Options icon](https://docs.cpanel.net/img/tableoptions.png)) to select which information appears in the results table.

- To add a column to the results table, select the checkbox that corresponds to the column that you wish to add.

- To remove a column from the results table, deselect the checkbox that corresponds to the column that you wish to remove.


### The results table — Current View

To view each account’s current status, click _Current View_. By default, the interface includes the following four columns in the table:

- _Relay per Hour_ — A green select icon indicates that the domain is within the limit for relayed messages for the current hour (from the beginning of the hour until now). A red X icon indicates that the domain exceeded its limit.







Note:





- The date range that you specify does not apply to this column.
- The server owner can change the server-wide relay limit with the Max hourly emails per domain option in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » System Configuration » Tweak Settings_). The server owner can also change a specific account’s limit for mail that the server relays per hour in WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account) interface ( _WHM » Home » Account Functions » Modify an Account_).

- _Defer+Fail per Hour_ — A green select icon indicates that the domain is within the limit for deferred and failed messages for the current hour (from the beginning of the hour until now). A red X icon indicates that the domain exceeded its limit.







Note:





- The date range that you specify does not apply to this column.
- The server owner can change the server-wide limit for deferred and failed mail for all accounts with the _Maximum percentage of failed or deferred messages a domain may send per hour_ option in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » System Configuration » Tweak Settings_). The server owner can also change the limit for a specific account in WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account) interface ( _WHM » Home » Account Functions » Modify an Account_).

- _Domain_ — The domain from which messages originated.

- _User_ — The cPanel user who owns the domain.


Click the _Table Options_ icon (![Table Options icon](https://docs.cpanel.net/img/tableoptions.png)) to select which information appears in the results table.

- To add a column to the results table, select the checkbox that corresponds to the column that you wish to add.

- To remove a column from the results table, deselect the checkbox that corresponds to the column that you wish to remove.


To narrow the list of senders, enter your search criteria in the _Search…_ text box. The results remain filtered until you clear the _Search…_ text box.

### View all outgoing mail sent by a specific user

To view more information about all of the messages a specific user sent, click the row in the table that contains the user’s name. WHM will redirect you to the [_Mail Delivery Reports_](https://docs.cpanel.net/whm/email/mail-delivery-reports/) interface ( _WHM_ » _Home_ » _Email_ » _Mail Delivery Reports_).

#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Archive](https://docs.cpanel.net/cpanel/email/archive/)
- [Mail Delivery Reports](https://docs.cpanel.net/whm/email/mail-delivery-reports/)
- [Mail Queue Manager](https://docs.cpanel.net/whm/email/mail-queue-manager/)
- [View Mail Statistics Summary](https://docs.cpanel.net/whm/email/view-mail-statistics-summary/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×