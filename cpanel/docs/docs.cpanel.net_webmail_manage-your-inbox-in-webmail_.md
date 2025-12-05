---
url: "https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/"
title: "Webmail — Manage Your Inbox | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [Webmail](https://docs.cpanel.net/webmail/)
3. Webmail — Manage Your Inbox


[webmail](https://docs.cpanel.net/tags/webmail/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [email](https://docs.cpanel.net/tags/email/) [filters](https://docs.cpanel.net/tags/filters/) [forwarders](https://docs.cpanel.net/tags/forwarders/)

#### Table of Contents

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
- [Webmail Clients](https://docs.cpanel.net/webmail/webmail-clients/)
- [Manage Your Inbox](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/)
[Overview](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/#overview) [Autoresponders](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/#autoresponders) [Email Filters](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/#email-filters) [Forwarders](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/#forwarders) - [Calendars and Contacts](https://docs.cpanel.net/webmail/calendars-and-contacts-in-webmail/)
- [Edit Your Settings](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail/)
- [Fight Spam](https://docs.cpanel.net/webmail/fight-spam-in-webmail/)
- [Other Features](https://docs.cpanel.net/webmail/other-webmail-features/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/#installation-toggle)

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
- [Webmail Clients](https://docs.cpanel.net/webmail/webmail-clients/)
- [Manage Your Inbox](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/)
[Overview](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/#overview) [Autoresponders](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/#autoresponders) [Email Filters](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/#email-filters) [Forwarders](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/#forwarders) - [Calendars and Contacts](https://docs.cpanel.net/webmail/calendars-and-contacts-in-webmail/)
- [Edit Your Settings](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail/)
- [Fight Spam](https://docs.cpanel.net/webmail/fight-spam-in-webmail/)
- [Other Features](https://docs.cpanel.net/webmail/other-webmail-features/)

## Webmail — Manage Your Inbox

_Valid for versions 84 through the latest version_

#### Version:

#### [84](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/)

Last modified: _2024 October 25_

* * *

## Overview

This section in Webmail includes features that help you manage your email.

## Autoresponders

Use the [_Autoresponders_](https://docs.cpanel.net/cpanel/email/autoresponders/) interface to configure an email account to send automated emails. This can be useful if you’re on vacation, unavailable, or have a a standard response for every sender.

#### Add an autoresponder

Important:

You can only add one autoresponder for each email address. If you attempt to add multiple autoresponders, an error message will appear.

To add an autoresponder, perform the following steps:

01. Click _Add Autoresponder_. A new interface will appear.

02. Select a character set from the _Character Set_ menu. We recommend that you use the default _Character Set_ value of _utf-8_.

03. Enter the interval, in hours, to wait between responses to the same email address.
    - For example, you could create an autoresponder with an interval of `24`. If it receives an email at 8:00 AM on Monday, it immediately responds to the message. It doesn’t respond again to the same email address until 8:00 AM on Tuesday.
    - If you set the interval to `0`, the system sends an automatic response to every email.
04. In the _From_ text box, enter the username to appear in the response.

05. In the _Subject_ text box, enter the subject to appear in the response.

06. If the response message includes HTML tags, select the _HTML_ checkbox.

07. In the _Body_ text box, enter the text of the response, for example:



    ```text
    I am out of the office until July 2nd. You can reach me on my cell phone in case of emergencies.
    ```




    - You can use the following tags in the message. They represent information, such as the incoming email’s sender or subject:
      - `%subject%` — The subject of the message that the autoresponder received.
      - `%from%` — The name of the sender of the message that the autoresponder received. If the sender’s name was not in the original email’s header, the `%from%` tag prints the sender’s email address.
      - `%email%` — The sender’s email address.
    - Tags use percentage signs (`%`) as markers.
08. Select a start time. You can select _Immediately_ or _Custom_.
    - If you select _Custom_, a small calendar will appear. Use the calendar to configure your start time. Click anywhere outside of the calendar to save the configuration and close the calendar. Your chosen date and time will replace the _Custom_ text.
    - The system bases the time on the user’s local computer’s time setting and translates it into it.
    - This feature uses 12-hour notation and reformats times in 24-hour notation. For example, if you select `18:30` as the start time, the system automatically reformats the time as `6:30 PM`.
09. Select a stop time. You can select _Never_ or _Custom_.







    Note:





    You **must** select a stop time that is later than the start time.

10. Click _Create_ to create the autoresponder. Click _Modify_ to update the current autoresponder.


#### Current autoresponders

This section lists any autoresponders that you create.

To find an autoresponder’s specific email address, enter a keyword in the _Search_ text box and click _Go_.

Important:

The autoresponders you create will ignore messages with a score of _5_ or higher.

## Email Filters

Use this interface to create and manage [email filters](https://docs.cpanel.net/cpanel/email/email-filters/) for your main email account.

An email filter allows you to set a rule for incoming messages (for example, a message from desired sender). If a message matches that rule, then the system can automatically perform an action on that message (for example, deleting the message).

Important:

We recommend using many simple filters instead of a single large filter. The system handles this more efficiently.

#### Create a filter

To create a new filter, perform the following steps:

1. Click _Create a New Filter_.
2. Enter a name for the filter in the _Filter Name_ text box.
3. Configure your filter’s rules and actions.






More:





For detailed information on how to configure your filter, read our [How to Configure Email Filters](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/) documentation.

4. Click _Create_.

#### Current Filters

To list an email account’s filters, click _Manage Filters_ in the row of the appropriate email account. The _Current Filters_ table lists all of the filters for the selected email account.

Filters appear in the order they run (top to bottom). You can drag and drop the filters to change the order the filters will be run in.

#### Edit a filter

To edit an existing filter, perform the following steps:

1. Click _Edit_ next to the appropriate filter name.
2. Make the desired changes to the filter.
3. Click _Save_.

#### Delete a filter

To delete a filter, perform the following steps:

1. Click _Delete_ for the appropriate filter name.
2. Click _Delete Filter_.

#### Test a filter

To test a filter, perform the following steps:

1. In the _Filters by Users_ table, click _Manage Filters_ next to the desired email account.
2. Enter a test email message in the _Filter Test_ text box.






Note:





Include the characters or words that you applied to configure the filter.

3. Click _Test Filter_.

## Forwarders

Use the [_Forwarders_](https://docs.cpanel.net/cpanel/email/forwarders/) interface to forward incoming emails from one address to another. This is useful if, for example, you want to use one email account to receive emails addressed to multiple addresses without having an account for each. Additionally, multiple email addresses can receive the same email. You can also set the server to discard email or send (pipe) email to a program.

Note:

To manage forwarders for email accounts that use the _BoxTrapper_ feature, use the _BoxTrapper_ interface. For more information, read our [Fight Spam in Webmail](https://docs.cpanel.net/webmail/fight-spam-in-webmail) documentation.

#### Add Forwarder

To add a mail forwarder, perform the following steps:

1. Click _Add Forwarder_. A new tab will appear. Your email address will appear in the _Forwarding_ section.
2. Enter the address to forward email to in the text box.
3. Click _Add Forwarder_.

#### Email Account Forwarders

The _Email Account Forwarders_ table lists the email addresses that your account redirects to.

- To quickly find a specific email address, enter a keyword in the _Search_ text box and click _Go_.
- To view the route that a forwarded email takes, click _Trace_ under the _Actions_ column for that email address.
- To delete a forwarder, click _Delete_ under the _Actions_ column for that email address. Then, click _Delete Forwarder_ to confirm.

Important:

- If you do **not** delete the Webmail account that uses email forwarding, **both** accounts will receive email.
- You can forward all incoming mail from one account to another without receiving email at the first account. To do this, create a forwarder from an address that does not have an account.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×