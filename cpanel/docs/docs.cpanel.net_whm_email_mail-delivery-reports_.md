---
url: "https://docs.cpanel.net/whm/email/mail-delivery-reports/"
title: "Mail Delivery Reports | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/email/mail-delivery-reports/#main-content)

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
4. Mail Delivery Reports


[exim](https://docs.cpanel.net/tags/exim/) [email](https://docs.cpanel.net/tags/email/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/email/mail-delivery-reports/#overview)

* * *

[Search for emails](https://docs.cpanel.net/whm/email/mail-delivery-reports/#search-for-emails)

* * *

[Results](https://docs.cpanel.net/whm/email/mail-delivery-reports/#results)

* * *

[The Search and Advanced Search features](https://docs.cpanel.net/whm/email/mail-delivery-reports/#the-search-and-advanced-search-features)

* * *

[Additional results columns](https://docs.cpanel.net/whm/email/mail-delivery-reports/#additional-results-columns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/email/mail-delivery-reports/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/email/mail-delivery-reports/#overview)

* * *

[Search for emails](https://docs.cpanel.net/whm/email/mail-delivery-reports/#search-for-emails)

* * *

[Results](https://docs.cpanel.net/whm/email/mail-delivery-reports/#results)

* * *

[The Search and Advanced Search features](https://docs.cpanel.net/whm/email/mail-delivery-reports/#the-search-and-advanced-search-features)

* * *

[Additional results columns](https://docs.cpanel.net/whm/email/mail-delivery-reports/#additional-results-columns)

* * *

## Mail Delivery Reports

![](https://docs.cpanel.net/img/whm-icons/mail_delivery_reports.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/email/mail-delivery-reports/)

Last modified: _2025 June 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to search for emails that users on your system sent and received.

Important:

- **Only** users with `root`-level privileges can access emails for all accounts.

- Resellers can **only** access emails that belong to accounts that they own.


## Search for emails

Use the _Report Inquiry_ section of the interface to define your search parameters.

To search for emails, perform the following steps:

1. Enter the text for which you wish to search in the _Search…_ text box.






Note:




Search terms are **optional**.


2. Select the part of the email that you wish to query. This menu defaults to _Recipient_.

3. Select a _Search Type_ button.






Important:



_Partial_ searches may require more time to complete than other search types.


4. Select a _Delivery Type_ button.

5. Enter a date range in the _Start Date_ and _End Date_ text boxes or click the calendar icons to select dates.






Important:





- Enter dates in the `MM/DD/YYYY` format, where `MM` represents the two-digit month, `DD` represents the two-digit day, and `YYYY` represents the four-digit year.

- A large date range drastically increases query time for busy mail servers.


6. Enter a time range in the _Start Time_ and _End Time_ text boxes. Select _AM_ or _PM_ next to each text box.

7. Click _Run Report_.


## Results

By default, results for your query appear in the following columns:

- _Event_ — An icon that indicates the email’s delivery status:
  - ![success icon](https://docs.cpanel.net/img/success.jpeg) — The system delivered the email successfully.

  - ![filtered email icon](https://docs.cpanel.net/img/filtered.jpeg) — The system filtered the email successfully.
    - ![unknown status icon](https://docs.cpanel.net/img/unknown.jpeg) — The email’s status is unknown, or delivery is in progress.

    - ![deferred email icon](https://docs.cpanel.net/img/deferred.jpeg) — The system deferred the email.

    - ![delivery error icon](https://docs.cpanel.net/img/error.jpeg) — The email encountered a delivery error.

    - ![rejected email icon](https://docs.cpanel.net/img/blacklist.jpeg) — The system rejected the email at SMTP time. This typically occurs because an RBL contains the sender’s server or that server contains an insecure configuration.
- _From Address_ — The email address that sent the email.

- _Sender_ — The system user that sent the email.

- _Sent Time_ — The date and time when the user sent the email.

- _Spam Score_ — A score that the system bases on the number of spam-related traits that the email contains.

- _Recipient_ — The email address to which the user sent the email.

- _ID_ — The unique identifier for the outgoing email.

- _Result_ — The result of the email transaction.

- _Actions_ — Click the magnifying glass icon (![magnifying glass icon](https://docs.cpanel.net/img/magnifying-glass.jpeg)) to view and print information about the selected email. This information includes the email’s sender, recipient, and username.


### The Search and Advanced Search features

You can further refine your results in the results table’s _Search…_ text box.

Note:

The interface will continue to filter the results until you clear the search box.


The results table also features an _Advanced Search_ option. Click _Advanced Search_ to access the four available checkboxes:

- _Show Deferrals_ — Select this checkbox to view the emails that the system deferred.

- _Show Deliveries_ — Select this checkbox to view the emails that the system delivered successfully.

- _Show Failures_ — Select this checkbox to view the emails that the system has not yet delivered.

- _Show In-Progress_ — Select this checkbox to view the emails that the mail transport agent received, but the system has not yet processed (for example, _succeeded_, _failed_, or _deferred_).


You may deselect checkboxes to remove the email types from the results table.

### Additional results columns

You may add columns to the results table to view more information. To add columns, perform the following steps:

- Click the hamburger icon (![menu icon](https://docs.cpanel.net/img/hamburger-icon.png)) in the top right corner of the results table, and then select the checkbox for the information that you wish to view in the table. To hide information from the table, deselect the checkbox.

- To automatically select the default columns, click _Reset to Default_.


You can choose the following additional columns:

- _Sender User_ — The sender’s cPanel username.

- _Sender Domain_ — The sender’s domain.

- _Sender Host_ — The sender’s hostname.

- _Sender IP_ — The sender’s IP address.

- _Authentication_ — The sender’s authentication type.

- _Delivered To_ — The recipient’s email address.

- _Delivery User_ — The username that owns the recipient’s email address.

- _Delivery Domain_ — The recipient’s domain.

- _Router_ — The internal router that the mail server uses to determine the email’s destination.

- _Transport_ — The recipient’s SMTP type.

- _Out Time_ — The date and time at which the intended recipient received the email.

- _Delivery Host_ — The recipient mail exchanger’s hostname.

- _Delivery IP_ — The recipient mail exchanger’s IP address.

- _Size_ — The size of the outgoing email, in bytes.


#### Additional Documentation

* * *

- [Email Deliverability in WHM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)
- [Filter Incoming Emails by Country](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/)
- [Filter Incoming Emails by Domain](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/)
- [Greylisting](https://docs.cpanel.net/whm/email/greylisting/)
- [Mail Queue Manager](https://docs.cpanel.net/whm/email/mail-queue-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×