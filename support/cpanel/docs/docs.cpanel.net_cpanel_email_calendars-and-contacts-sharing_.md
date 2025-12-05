---
url: "https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/"
title: "Calendars and Contacts Sharing | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/#main-content)

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
4. Calendars and Contacts Sharing


[calendar](https://docs.cpanel.net/tags/calendar/) [dav](https://docs.cpanel.net/tags/dav/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/#overview)

* * *

[Share a calendar or address book](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/#share-a-calendar-or-address-book)

* * *

[The Shared Collections table](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/#the-shared-collections-table)

* * *

[Add editing rights](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/#add-editing-rights)

* * *

[Remove editing rights](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/#remove-editing-rights)

* * *

[Remove a collection](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/#remove-a-collection)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/#overview)

* * *

[Share a calendar or address book](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/#share-a-calendar-or-address-book)

* * *

[The Shared Collections table](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/#the-shared-collections-table)

* * *

[Add editing rights](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/#add-editing-rights)

* * *

[Remove editing rights](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/#remove-editing-rights)

* * *

[Remove a collection](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/#remove-a-collection)

* * *

## Calendars and Contacts Sharing

![](https://docs.cpanel.net/img/cpanel-icons/manage_calendar_access.svg)

_Valid for versions 120 through the latest version_

#### Version:

#### [120](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/)

Last modified: _2025 June 26_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Note:

- This feature replaces cPanel’s [_Calendar Delegation_](https://docs.cpanel.net/cpanel/email/calendar-delegation) interface.
- This feature also appears in the [Webmail interface](https://docs.cpanel.net/webmail/the-webmail-interface/).

The _Calendars and Contacts Sharing_ interface allows you to grant access rights on an email user’s calendar(s) or address book(s). This is useful if you need to manage other people’s calendars or set up shared resources such as conference rooms.

In this interface, a [collection](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#collection) is a set of either events in a calendar or contacts in an address book. A collection may be either standalone or shared with other email users of the cPanel account.

## Share a calendar or address book

Note:

- You can **only** share a calendar or address book with other email users of the **same** cPanel account.
- Your cPanel account **must** have at least two email accounts. If your cPanel account has only one email account, the interface will display a _No Additional Email Account Exists_ message. To create a new email account, click _Create Email Account_. The [_Create an Email Account_](https://docs.cpanel.net/cpanel/email/create-an-email-account) interface will appear.
- In a shared calendar, you can **only** invite others to an event if you created it, and you can **only** accept a calendar invitation if the person who created it invited you directly.

To share a calendar or address book, perform the following steps in the _Share Collection_ section:

1. In the _Select User_ menu, select the email user whose calendar or address book you wish to share.
2. In the _Select Collection_ menu, select the calendar or address book you wish to share.
3. In the _Share with_ menu, select the email user to whom you wish to grant access.
4. Select the _Allow Editing_ checkbox to allow the email user to edit the calendar or address book. If you do **not** select this checkbox, the user will **only** have read access to the calendar or address book.
5. Click _Create_. The interface will refresh, and the collection will appear in the _Shared Collections_ table.

Refer to your mail application’s documentation for instructions on how email users can view the shared calendar or address book.

## The Shared Collections table

Remember:

In this interface, a [collection](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#collection) is a set of either events in a calendar or contacts in an address book.

The _Shared Collections_ table lists the following information about calendar and address book collections for the account:

| Column | Description |
| --- | --- |
| _Owner_ | The owner of the calendar or address book. |
| _Name_ | The name of the calendar or address book. |
| _Path_ | The relative path on the server to the calendar or address book. |
| _Shared with_ | The email user to whom the owner grants calendar or address book rights. |
| _Permissions_ | Whether the email user has read-write or read-only access to the calendar or address book. |
| _Actions_ | Actions that you can perform on the collection:<br>- _Delete_ — Remove the email user’s rights to the calendar or address book.<br>- _Allow Editing_ — Grant write access to the email user. This button **only** appears when the user does **not** have write access.<br>- _Disallow Editing_ — Remove write access from the email user, but maintain read access. This button **only** appears when the user has write access. |

### Add editing rights

To add edit rights to another user’s calendar or address book, locate the entry for the collection in the _Shared Collections_ table and click _Allow Editing_.

### Remove editing rights

To remove an email user’s rights to edit another user’s calendar or address book, locate the entry for the collection in the _Shared Collections_ table and click _Disallow Editing_.

### Remove a collection

To remove an email user’s rights from another user’s calendar or address book, perform the following steps:

1. Locate the entry for the collection in the _Shared Collections_ table and click _Delete_.
2. Click _Confirm Delete_ to delete the collection, or click _Cancel_ to cancel.

#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Archive](https://docs.cpanel.net/cpanel/email/archive/)
- [Calendar Delegation](https://docs.cpanel.net/cpanel/email/calendar-delegation/)
- [Calendars and Contacts Management](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-management/)
- [The ccs-check Script](https://docs.cpanel.net/whm/scripts/the-ccs-check-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×