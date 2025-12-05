---
url: "https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/"
title: "How to Manage Mailman Mailing Lists | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/#main-content)

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
4. How to Manage Mailman Mailing Lists


[mailman](https://docs.cpanel.net/tags/mailman/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/#overview)

* * *

[Access the Mailman interface](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/#access-the-mailman-interface)

* * *

[Add addresses to a mailing list](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/#add-addresses-to-a-mailing-list)

* * *

[Remove addresses from a mailing list](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/#remove-addresses-from-a-mailing-list)

* * *

[Enable spam filters for a mailing list](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/#enable-spam-filters-for-a-mailing-list)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/#overview)

* * *

[Access the Mailman interface](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/#access-the-mailman-interface)

* * *

[Add addresses to a mailing list](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/#add-addresses-to-a-mailing-list)

* * *

[Remove addresses from a mailing list](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/#remove-addresses-from-a-mailing-list)

* * *

[Enable spam filters for a mailing list](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/#enable-spam-filters-for-a-mailing-list)

* * *

## How to Manage Mailman Mailing Lists

Last modified: _2025 July 8_

* * *

## Overview

This document describes how to use the third-party [Mailman application](https://www.list.org/index.html) to manage mailing lists that [you create](https://docs.cpanel.net/cpanel/email/mailing-lists/#create-a-mailing-list) in cPanel’s [_Mailing Lists_](https://docs.cpanel.net/cpanel/email/mailing-lists/) interface ( _cPanel » Home » Email » Mailing Lists_). For more information on managing Mailman mailing lists, read the [Mailman documentation](https://www.list.org/mailman-admin/index.html).

### Access the Mailman interface

To manage a Mailman mailing list, you must first access its administration interface. Perform the following steps to go to the Mailman administration interface:

1. In cPanel’s [_Mailing Lists_](https://docs.cpanel.net/cpanel/email/mailing-lists/) interface ( _cPanel » Home » Email » Mailing Lists_), find the name of the mailing list you want to manage in the _Current Lists_ section of the interface. Or, enter part of the mailing list name in the _Search_ box and click _Go_.
2. In the _Functions_ column, click _Manage_ next to the name of the mailing list. The system automatically logs you in to the Mailman application. The Mailman administration interface for that list will appear.

Note:

You can also go directly to the Mailman administration URL for the list in the format of `https://example.com/mailman/admin/list_example.com`, where `example.com` is your domain name and `list` is the list name. However, you **must** enter the list password to log in via the Mailman URL.

### Add addresses to a mailing list

Perform the following steps to add email addresses to a Mailman mailing list:

1. Go to the [Mailman administration interface](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/#access-the-mailman-interface).
2. Click _Membership Management…_, then click _Mass Subscription_. The _Mass Subscriptions_ section will appear.
3. Select _Subscribe_ in the _Subscribe these users now or invite them?_ row.
4. If you want to send a welcome message to the addresses you add, select _Yes_ in the _Send welcome messages to new subscribers?_ row. Otherwise, select _No_ in that row.
5. If you want the system to notify you when you add the new addresses to the list, select _Yes_ in the _Send notifications of new subscriptions to the list owner?_ row. Otherwise, select _No_ in that row.
6. In the _Enter one address per line below…_ text box, enter the addresses you want to add, one per line. Or, click the button next to _…or specify a file to upload:_ to upload a text file that contains the addresses, one per line.






Important:





Each address you enter, either in the interface or from a file, **must** be on a separate line.

7. Optionally, add a message in the _Below, enter additional text to be added to the top of your invitation or the subscription notification. Include at least one blank line at the end…_ text box. If you selected _Yes_ in the _Send welcome messages to new subscribers?_ row,
Mailman will include this message at the top of the welcome message to the addresses you entered.
8. Click _Submit Your Changes_.

### Remove addresses from a mailing list

Perform the following steps to remove email addresses from a Mailman mailing list:

1. Go to the [Mailman administration interface](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/#access-the-mailman-interface).
2. Click _Membership Management…_, then click _Mass Removal_. The _Mass Removals_ section will appear.
3. If you want to send a notification to the addresses you remove, select _Yes_ in the _Send unsubscription acknowledgement to the user?_ row. Otherwise, select _No_.
4. If you want the system to notify you when you remove the addresses from the list, select _Yes_ in the _Send notifications to the list owner?_ row. Otherwise, select _No_.
5. In the _Enter one address per line below…_ text box, enter the addresses you want to remove, one per line. Or, click the button next to _…or specify a file to upload:_ to upload a text file that contains the addresses, one per line.






Important:





Each address you enter, either in the interface or from a file, **must** be on a separate line.

6. Click _Submit Your Changes_.

### Enable spam filters for a mailing list

Note:

To use Mailman’s _Spam Filters_ feature, you **must** first enable Apache SpamAssassin™ for your cPanel account. To enable Apache SpamAssassin, select _Enable Apache SpamAssassin_ in cPanel’s [_Spam Filters_](https://docs.cpanel.net/cpanel/email/spam-filters) interface ( _cPanel » Home » Mail » Spam Filters_).

To enable spam filters for a mailing list, perform the following steps:

1. Go to the [Mailman administration interface](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists/#access-the-mailman-interface).
2. Click _Privacy options…_, then click _Spam filters_. The _Privacy options…_ section will appear.
3. Enter the filter rules that you wish to apply. For more information, read our [How to Create Mail Filter Rules For Mailing Lists](https://docs.cpanel.net/knowledge-base/email/how-to-create-mail-filter-rules-for-mailing-lists/) documentation.
4. Click _Submit Your Changes_.

#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Archive](https://docs.cpanel.net/cpanel/email/archive/)
- [Autoresponders](https://docs.cpanel.net/cpanel/email/autoresponders/)
- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Mailing Lists](https://docs.cpanel.net/cpanel/email/mailing-lists/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×