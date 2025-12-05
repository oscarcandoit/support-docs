---
url: "https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/"
title: "How to View a Delegated Calendar in Roundcube | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/#main-content)

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
3. [Webmail](https://docs.cpanel.net/knowledge-base/webmail/)
4. How to View a Delegated Calendar in Roundcube


[webmail](https://docs.cpanel.net/tags/webmail/) [roundcube](https://docs.cpanel.net/tags/roundcube/) [calendar](https://docs.cpanel.net/tags/calendar/) [dav](https://docs.cpanel.net/tags/dav/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/#overview)

* * *

[Prerequisites](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/#prerequisites)

* * *

[How to View a Delegated Calendar in Roundcube](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/#how-to-view-a-delegated-calendar-in-roundcube)

* * *

[Get the calendar owner’s calendar URL](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/#get-the-calendar-owners-calendar-url)

* * *

[Add the calendar owner’s calendar to the delegate’s Roundcube calendar](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/#add-the-calendar-owners-calendar-to-the-delegates-roundcube-calendar)

* * *

[How to test the calendar delegation](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/#how-to-test-the-calendar-delegation)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/#overview)

* * *

[Prerequisites](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/#prerequisites)

* * *

[How to View a Delegated Calendar in Roundcube](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/#how-to-view-a-delegated-calendar-in-roundcube)

* * *

[Get the calendar owner’s calendar URL](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/#get-the-calendar-owners-calendar-url)

* * *

[Add the calendar owner’s calendar to the delegate’s Roundcube calendar](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/#add-the-calendar-owners-calendar-to-the-delegates-roundcube-calendar)

* * *

[How to test the calendar delegation](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/#how-to-test-the-calendar-delegation)

* * *

## How to View a Delegated Calendar in Roundcube

Last modified: _2025 June 10_

* * *

## Overview

This document explains how to set up a delegated calendar in Roundcube.

Warning:

This document is only valid for cPanel & WHM version 118 and earlier. In cPanel & WHM version 120, we removed the ability to add and delegate calendars in Roundcube and added this functionality to other interfaces. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan#deprecated-and-removed-features) documentation.

## Prerequisites

- This guide assumes that you have already set up at least one calendar delegate in cPanel’s [_Calendar Delegation_](https://docs.cpanel.net/cpanel/email/calendar-delegation) interface ( _cPanel » Home » Email » Calendar Delegation_).

- The _Calendar Delegation_ feature only appears if your hosting provider installs the [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server) plugin and enables the _Calendar Delegation_ feature.

- This feature is not available for [Exchange ActiveSync](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices).


## How to View a Delegated Calendar in Roundcube

In order to view a delegated calendar in Roundcube, you must add the calendar owner’s calendar to the delegate’s Roundcube account. To do so, perform the following steps:

### Get the calendar owner’s calendar URL

1. [Log in to the calendar owner’s Webmail account](https://docs.cpanel.net/webmail/the-webmail-interface#access-webmail).

2. Ensure that you are in the [_Webmail_](https://docs.cpanel.net/webmail/the-webmail-interface/) interface.
   - If this is the first log in, the _Webmail_ interface will appear.
   - If you are in the Roundcube interface, click _cPanel Webmail Home_. The _Webmail_ interface will appear.
3. Under the _Edit Your Settings_ section in the _Webmail_ interface, click _Configure Calendar and Contacts Client_. The _Calendar and Contacts_ interface will appear.

4. Scroll to the _Direct URLs for Calendars and Contacts_ section. Find the _Calendar_ row in the _Secure SSL/TLS URLs_ table.

5. Copy the URL under the _URL_ column for the _Calendar_ item in the table.
![The Direct URL for Calendars and Contacts section with the Calender item's URL highlighted](https://docs.cpanel.net/img/calendars-and-contacts-direct-urls.jpg)


### Add the calendar owner’s calendar to the delegate’s Roundcube calendar

01. [Log in to the calendar delegate’s Webmail account](https://docs.cpanel.net/webmail/the-webmail-interface#access-webmail).

02. Ensure that you are in the Roundcube interface.
    - If this is the first log in, the _Webmail_ interface will appear. If Roundcube is your default Webmail client, you can click the Roundcube logo under the _Open your inbox_ section. Otherwise, you can select the Roundcube logo from the _Change your webmail client_ section. The Roundcube interface will appear.

      - To open your inbox every time that you log in to Webmail, select the _Open my inbox when I log in_ checkbox.
03. In the Roundcube interface, click _Calendar_ on the left menu. The Roundcube Calendar interface will appear.
    ![The Roundcube interface with with the Calender icon highlighted](https://docs.cpanel.net/img/roundcube-calendar-button.png)

04. In the Roundcube Calendar interface, navigate to _Calendars_ at the top of the interface. Click the menu icon (![Roundcube Calender menu icon](https://docs.cpanel.net/img/roundcube-calendar-menu.png)). A menu will appear.

05. Select ![Roundcube Calender add icon](https://docs.cpanel.net/img/roundcube-calendar-add-button.png)_Add Calendar_ from the menu. The _Create new calendar_ interface will appear.
    ![The Roundcube Calendar interface](https://docs.cpanel.net/img/roundcube-calendar-add.png)

06. In the _Properties_ section, enter the calendar owner’s calendar name in the _Name_ text box.

07. In the _CalDAV URL_ text box, enter the calendar owner’s calendar URL that you copied in step five of our [Get the calendar owner’s calendar URL](https://docs.cpanel.net/knowledge-base/webmail/how-to-view-a-delegated-calendar-in-roundcube/#get-the-calendar-owner-s-calendar-url) documentation.

08. Adjust the calendar color and whether to show reminders in the _Settings_ section.

09. Under _Authentication_, enter the username and password of the **calendar delegate** CalDAV digest. This is the same as their Webmail username and password.
    ![The Create new calendar interface with the Name and CalDAV URL text boxes highlighted](https://docs.cpanel.net/img/roundcube-calendar-properties.png)

10. Click _Save_. The Roundcube Calendar interface will automatically upload the calendar owner’s calendar.







    Note:





    You will see calendar events for the current week.


## How to test the calendar delegation

To test the delegation, perform the following steps:

1. Have the calendar owner create an event on their calendar. The calendar delegate should be able to view the event from their own Roundcube Calendar interface.

2. Calendar delegates with permission to edit the calendar can perform the following actions:
   - **Edit an event** — Click the event. A window will appear with the event details. Click _Edit_ to edit the event.

   - **Add an event** — Double-click anywhere on the calendar. A _New event_ interface will appear. Fill out the relevant information. Ensure that the user selects the calendar owner’s calendar from the _Calendar_ menu in that window. Once completed, click _Save_. The event will appear in both the calendar delegate’s and calendar owner’s Roundcube Calendar interface.

#### Additional Documentation

* * *

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
- [Webmail Clients](https://docs.cpanel.net/webmail/webmail-clients/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Calendar Delegation](https://docs.cpanel.net/cpanel/email/calendar-delegation/)
- [How to Set Up Calendars and Contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×