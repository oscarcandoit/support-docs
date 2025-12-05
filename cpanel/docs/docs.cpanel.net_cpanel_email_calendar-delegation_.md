---
url: "https://docs.cpanel.net/cpanel/email/calendar-delegation/"
title: "Calendar Delegation | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/calendar-delegation/#main-content)

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
4. Calendar Delegation


[calendar](https://docs.cpanel.net/tags/calendar/) [dav](https://docs.cpanel.net/tags/dav/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/calendar-delegation/#overview)

* * *

[The Calendar Delegates table](https://docs.cpanel.net/cpanel/email/calendar-delegation/#the-calendar-delegates-table)

* * *

[Delegate a calendar](https://docs.cpanel.net/cpanel/email/calendar-delegation/#delegate-a-calendar)

* * *

[Add calendar editing rights](https://docs.cpanel.net/cpanel/email/calendar-delegation/#add-calendar-editing-rights)

* * *

[Remove delegation](https://docs.cpanel.net/cpanel/email/calendar-delegation/#remove-delegation)

* * *

[Remove calendar editing rights](https://docs.cpanel.net/cpanel/email/calendar-delegation/#remove-calendar-editing-rights)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/calendar-delegation/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/calendar-delegation/#overview)

* * *

[The Calendar Delegates table](https://docs.cpanel.net/cpanel/email/calendar-delegation/#the-calendar-delegates-table)

* * *

[Delegate a calendar](https://docs.cpanel.net/cpanel/email/calendar-delegation/#delegate-a-calendar)

* * *

[Add calendar editing rights](https://docs.cpanel.net/cpanel/email/calendar-delegation/#add-calendar-editing-rights)

* * *

[Remove delegation](https://docs.cpanel.net/cpanel/email/calendar-delegation/#remove-delegation)

* * *

[Remove calendar editing rights](https://docs.cpanel.net/cpanel/email/calendar-delegation/#remove-calendar-editing-rights)

* * *

## Calendar Delegation

![](https://docs.cpanel.net/img/cpanel-icons/manage_calendar_access.svg)

_Valid for versions 104 through the latest version_

#### Version:

#### [104](https://docs.cpanel.net/cpanel/email/calendar-delegation/)

Last modified: _2024 May 28_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

Note:

- In cPanel & WHM version 120, we renamed this interface to the [_Calendars and Contacts Sharing_](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing) interface ( _cPanel » Email » Calendars and Contacts Sharing_) and added additional functionality to it.
- This feature only appears if your hosting provider installs the [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server) plugin and enables the _Calendar Delegation_ feature in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager/) interface ( _WHM » Home » Packages » Feature Manager_).
- This feature is not available for [Exchange ActiveSync](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices).

## Overview

The _Calendar Delegation_ interface allows you to delegate access rights for a user’s calendar to other users. This is useful for people needing to manage other people’s calendars or manage resources such as conference rooms.

## The Calendar Delegates table

The _Calendar Delegates_ table lists the following information about calendar delegations on the account:

- _Calendar Owner_ — The owner of the calendar.
- _Delegate_ — The user that the owner grants calendar rights to.
- _Permissions_ — Whether the delegate has read-write or read-only access to the calendar.
- _Actions_ — A list of actions that you can perform on this delegation.

  - _Delete_ — Remove delegate’s rights to the calendar.
  - _Allow Editing_ — Grant write access to the delegate.
  - _Disallow Editing_ — Remove write access from the delegate. The delegate will still have read access.

Note:

You can only assign calendar rights when your cPanel account has two or more email accounts. If your account has only one email address, the interface will display the _No Additional Email Account Exists_ message. Click _Create Email Account_ to create a new email account. A new window with the [_Create an Email Account_](https://docs.cpanel.net/cpanel/email/create-an-email-account) interface will appear.

### Delegate a calendar

To delegate a calendar, perform the following steps:

1. In the _Select Calendar Owner_ menu, select the user whose calendar you wish to delegate.
2. In the _Select Delegate_ menu, select the user to whom you wish to grant access.
3. Select the _Allow Editing_ checkbox to allow the user to edit the calendar. Otherwise, the user will have read-only access to the calendar.
4. Click _Create_.

The interface will refresh, and the delegation will appear in the _Calendar Delegates_ table.

Refer to your mail application’s documentation for instructions on how calendar delegates can view the delegated calendar. Roundcube users can view our [_How to View a Delegated Calendar in Roundcube_](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube) documentation.

### Add calendar editing rights

To give calendar-editing access to a delegate, locate the delegate in the _Calendar Delegates_ table and click _Allow Editing_.

### Remove delegation

To remove a user’s access rights to another user’s calendars, perform the following steps:

1. Locate the user in the _Calendar Delegates_ table and click _Delete_.
2. Click _Confirm Delete_ to delete the delegation.

   - Click _Cancel_ to cancel.

### Remove calendar editing rights

To remove a user’s rights to edit another user’s calendars, locate the user in the _Calendar Delegates_ table and click _Disallow Editing_.

#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Archive](https://docs.cpanel.net/cpanel/email/archive/)
- [Calendars and Contacts Management](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-management/)
- [Calendars and Contacts Sharing](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/)
- [The ccs-check Script](https://docs.cpanel.net/whm/scripts/the-ccs-check-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×