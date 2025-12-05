---
url: "https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/"
title: "How to Set Up Calendars and Contacts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#main-content)

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
4. How to Set Up Calendars and Contacts


[webmail](https://docs.cpanel.net/tags/webmail/) [calendar](https://docs.cpanel.net/tags/calendar/) [dav](https://docs.cpanel.net/tags/dav/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#overview)

* * *

[Other operating systems](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#other-operating-systems)

* * *

[Configuration information](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#configuration-information)

* * *

[Set up calendars and contacts applications](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#set-up-calendars-and-contacts-applications)

* * *

[iOS®](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#ios)

* * *

[macOS®](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#macos)

* * *

[Linux](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#linux)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#overview)

* * *

[Other operating systems](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#other-operating-systems)

* * *

[Configuration information](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#configuration-information)

* * *

[Set up calendars and contacts applications](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#set-up-calendars-and-contacts-applications)

* * *

[iOS®](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#ios)

* * *

[macOS®](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#macos)

* * *

[Linux](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#linux)

* * *

## How to Set Up Calendars and Contacts

_Valid for versions 120 through the latest version_

#### Version:

#### [110](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/)

#### [120](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/)

Last modified: _2025 March 10_

* * *

## Overview

This document describes how to set up calendars and contacts via CalDAV and CardDAV on the Apple® and Linux® desktop operating systems and on Apple mobile devices.

In this document, `user` represents the webmail user, and `example.com` represents the user’s domain name.

Warning:

- Because WebPros International, LLC doesn’t develop or ship these applications, cPanel Technical Support **cannot** help you set them up.
- You **cannot** add calendars or address books directly in Roundcube. To add calendars and address books that you can access in Roundcube, use cPanel’s or Webmail’s [_Calendars and Contacts Management_](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-management/) interface ( _cPanel » Home » Email » Calendars and Contacts Management_ or _Webmail » Calendars and Contacts Management_).

## Other operating systems

Important:

We have **only** tested the steps in this document on Apple-distributed products and the Thunderbird® email application. These applications natively support CalDAV and CardDAV. If you use other calendars or contacts applications that support CalDAV and CardDAV, you **may** be able to access your calendars and contacts from those applications. Your application **must** support the CalDAV and CardDAV protocols.

Microsoft Outlook® users can use the third-party [Outlook CalDAV Synchronizer](https://caldavsynchronizer.org/) plugin to access their calendars and contacts on the Windows® operating system.

On Android™ devices, we recommend using the third-party [DAVx5 application](https://www.davx5.com/) to set up calendars and contacts. For more information, read our [How to Synchronize Calendars and Contacts on Android Devices](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/) documentation.

## Configuration information

Important:

Do **not** use your web browser to navigate to the URLs that Webmail’s [_Calendars and Contacts Configuration_](https://docs.cpanel.net/webmail/calendars-and-contacts-in-webmail/) interface ( _Webmail » Calendars and Contacts Configuration_) displays. They do **not** contain human-readable information.

You can find your cPanel calendar (CalDAV) and contacts (CardDAV) setup information in Webmail’s [_Calendars and Contacts Configuration_](https://docs.cpanel.net/webmail/calendars-and-contacts-in-webmail/) interface ( _Webmail » Calendars and Contacts Configuration_). For example:

- _User Name_ — `user@example.com`
- _Password_ — Enter the same password that you use for your webmail login.
- _Server URL_ — `https://example.com:2080`
- _Alternate Server URL_ — `https://example.com:2080/principals/user@example.com/`


Note:





Some applications may not support [Autodiscover](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/). If the _Server URL_ does not work, use the _Alternate Server URL_ to bypass Autodiscover.


You can also reference calendars and contacts via their direct URLs in the _Direct CalDAV and CardDAV URLs for Calendars and Contacts_ section of the interface. For example:

- _Calendar_ — `https://example.com:2080/calendars/user@example.com/calendar`
- _Address Book_ — `https://example.com:2080/addressbooks/user@example.com/addressbook`

You can also have the system email you scripts that automatically configure the cPanel calendars and contacts on your local system. For more information, read the _Set up email on your device_ section of our [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/#set-up-email-on-your-device) documentation.

## Set up calendars and contacts applications

Important:

Specific attributes of these tutorials may vary with future Apple or Thunderbird product versions.

Perform the following steps for your operating system to set up cPanel calendars (CalDAV) and contacts (CardDAV):

### iOS®

Note:

If your server uses a self-signed SSL certificate, the following caveats apply:

- When you set up calendars and contacts, you will get a message that your local system cannot verify the server’s identity. Tap _Continue_ to complete the setup process.
- The iOS Reminders application will **not** function with the calendars you set up.

#### Access the configuration screen

Perform the following steps to access the calendars (CalDAV) and contacts (CardDAV) account configuration screen on your iOS device:

1. Tap _Settings_.
2. Tap _Mail_.
3. Tap _Accounts_.
4. Tap _Add Account_.
5. Tap _Other_.
6. Tap the option for the type of account to add:
   - To add a calendar account, tap _Add CalDAV Account_ under _CALENDARS_.
   - To add a contacts account, tap _Add CardDAV Account_ under _CONTACTS_.

#### Enter your account information

To complete the setup of your account, perform the following steps:

1. Enter your information in the appropriate text boxes. For example:
   - _Server_ — `example.com:2080`


     Important:




     You **must** add `:2080` at the end of the server name for the setup to work correctly.


   - _User Name_ — `user@example.com`
   - _Password_ — Enter the same password that you use for your webmail login.
   - _Description_ — `My Calendar Account`
2. Tap _Next_.
3. Set the _Calendars_ toggle to enable the calendar.
4. The _Existing Local Calendars_ interface will appear. Tap _Keep on My iPhone_ to keep your existing local calendars, or tap _Delete_ to remove them.
5. Tap _Save_.

### macOS®

Perform the following steps to access the calendars (CalDAV) or contacts (CardDAV) account configuration menu on your Apple computer:

#### Access the account configuration menu

To access the account configuration menu, perform the following steps:

1. Click _Launchpad_, and then click _System Settings_.
2. Click _Internet Accounts_.
3. Click _Add Other Account…_.
4. Click _CalDAV Account_ to add a calendar account, or _CardDAV Account_ to add a contacts account.

#### Enter your account information

To complete the setup of your CalDAV or CardDAV account, use one of the following methods:

##### Automatic

Important:

- You **cannot** use the _Automatic_ method to set up your contacts.
- You **cannot** set up calendars with the _Automatic_ method if your domain uses a self-signed certificate.
- If you experience issues with the _Automatic_ method, use either the [Manual](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#manual) or [Advanced](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#advanced) methods instead.

To automatically complete the setup of your calendar account, perform the following steps:

1. Select _Automatic_ in the _Account Type_ menu.
2. Enter your email address in the _Email Address_ text box.
3. Enter your password in the _Password_ text box.
4. Click _Sign In_ to save your changes.

##### Manual

To manually complete the setup of your account, perform the following steps:

1. Select _Manual_ in the _Account Type_ menu.
2. Enter your email address in the _User Name_ text box.
3. Enter your password in the _Password_ text box.
4. In the _Server Address_ text box, enter the server name, and add `:2080` at the end.






Important:





You **must** add `:2080` at the end of the server name for the setup to work correctly.

5. Click _Sign In_ to save your changes.

##### Advanced

To complete setup of your account using the _Advanced_ option, perform the following steps:

1. Select _Advanced_ in the _Account Type_ menu.
2. Enter your email address in the _User Name_ text box.
3. Enter your password in the _Password_ text box.
4. Enter the server name in the _Server Address_ text box.
5. Enter the server path in the _Server Path_ text box.






Note:





- You can locate the CardDAV and CalDAV _Server Path_ information in Webmail’s [_Calendars and Contacts Configuration_](https://docs.cpanel.net/webmail/calendars-and-contacts-in-webmail/) interface. Use the URL provided in the _Secure SSL/TLS URLs_ table for the calendar or address book you wish to add.
- The _Server Path_ text box only requires the information **after** the server’s port address. For example, to add a CalDAV _Server Path_, use the `/calendars/user@example.com/calendar` format.

6. Enter `2080` in the _Port_ text box.
7. Click _Sign In_ to save your changes.

### Linux

We recommend the use of [Thunderbird](https://www.thunderbird.net/) to access calendars and contacts on Linux desktop systems.

#### Set up calendars in Thunderbird

Perform the following steps to set up your calendars (CalDAV) account in Thunderbird on a Linux desktop computer:

1. Click the Calendars icon (![Thunderbird calendars icon](https://docs.cpanel.net/img/thunderbird-calendars.png)).
2. Click _New Calendar…_. The _Create New Calendar_ interface appears.
3. Select _On the Network_, then click _Next_.
4. Enter your email-account username in the _Username_ text box.
5. Enter your domain in the _Location_ text box in the following format:
`https://example.com:2080`


Important:




You **must** add `:2080` at the end of the domain name for the setup to work correctly.


6. Click _Find Calendars_.
7. The _Authentication Required - Mozilla Thunderbird_ interface appears. Enter your email-account password in the text box, then click _OK_. The _Create New Calendar_ interface appears.
8. Make sure that _CalDAV_ is selected in the _Calendar Type_ menu and the _cPanel CalDAV Calendar_ checkbox is selected.
9. Click _Subscribe_. The _cPanel CalDAV Calendar_ now appears in the _Calendars_ menu.

#### Set up contacts in Thunderbird

Perform the following steps to set up your contacts (CardDAV) account in Thunderbird on a Linux desktop computer:

1. Click the Address book icon (![Thunderbird contacts icon](https://docs.cpanel.net/img/thunderbird-contacts.png)).
2. Click the Create a new address book icon (![Thunderbird add new address book icon](https://docs.cpanel.net/img/thunderbird-add-new-address-book.png)).
3. Select _Add CardDAV Address Book_. The _New CardDAV Address Book_ interface appears.
4. Enter your email-account username in the _Username_ text box.
5. Enter your domain in the _Location_ text box in the following format:
`https://example.com:2080`


Important:




You **must** add `:2080` at the end of the server name for the setup to work correctly.


6. Click _Continue_. The _Authentication Required - Mozilla Thunderbird_ interface appears.
7. Enter your email-account password in the _Password_ text box, then click _OK_. The _New CardDAV Address Book_ interface appears.
8. Make sure the _cPanel CardDAV Address Book_ checkbox is selected.
9. Click _Continue_. The _cPanel CardDAV Address Book_ now appears in the _All Address Books_ section.

#### Additional Documentation

* * *

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Calendar Delegation](https://docs.cpanel.net/cpanel/email/calendar-delegation/)
- [Calendars and Contacts Management](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-management/)
- [Calendars and Contacts Sharing](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×