---
url: "https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/"
title: "How to Set Up Calendars and Contacts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#main-content)

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


[webmail](https://docs.cpanel.net/tags/webmail/) [calendar](https://docs.cpanel.net/tags/calendar/) [dav](https://docs.cpanel.net/tags/dav/) [roundcube](https://docs.cpanel.net/tags/roundcube/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#overview)

* * *

[Configuration information](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#configuration-information)

* * *

[Set up calendar and contact applications](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#set-up-calendar-and-contact-applications)

* * *

[iOS®](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#ios)

* * *

[macOS®](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#macos)

* * *

[Other operating systems](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#other-operating-systems)

* * *

[Roundcube](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#roundcube)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#overview)

* * *

[Configuration information](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#configuration-information)

* * *

[Set up calendar and contact applications](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#set-up-calendar-and-contact-applications)

* * *

[iOS®](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#ios)

* * *

[macOS®](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#macos)

* * *

[Other operating systems](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#other-operating-systems)

* * *

[Roundcube](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#roundcube)

* * *

## How to Set Up Calendars and Contacts

_Valid for versions 110 through 118_

#### Version:

#### [110](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/)

#### [120](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/)

Last modified: _2025 June 10_

* * *

## Overview

Warning:

Because WebPros International, LLC doesn’t develop or ship these applications, cPanel Technical Support can’t help you set this up.

This document describes how to set up calendars and contacts on Apple® desktop and mobile-device operating systems and in Roundcube using CalDAV and CardDAV.

On Android™ devices, we recommend using Exchange ActiveSync to set up calendars, contacts, and email. For more information, read our [How to Sync Calendars, Contacts, and Email on Android Devices](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/) documentation.

In this document, `user` represents the webmail user, and `example.com` represents the user’s domain name.

## Configuration information

Important:

- Webmail’s [_Configure Calendar and Contacts Client_](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail#configure-calendars-and-contacts-client) interface **only** appears if the server administrator installs the [_Calendar and Contacts Server_](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/) plugin.
- Do **not** use your web browser to navigate to the URLs that Webmail’s [_Configure Calendar and Contacts Client_](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail#configure-calendars-and-contacts-client) interface displays. They do not contain human-readable information.

You can find your cPanel calendar (CalDAV) and contacts (CardDAV) setup information in Webmail’s [_Configure Calendar and Contacts Client_](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail#configure-calendars-and-contacts-client) interface. For example:

- _User Name_ — `user@example.com`
- _Password_ — Enter the same password that you use for your webmail login.
- _Server URL_ — `https://example.com:2080`
- _Alternate Server URL_ — `https://example.com:2080/principals/__uids__/132E0D5F-77F2-4A15-B888-B0741C57F938/`


Note:





- Replace `132E0D5F-77F2-4A15-B888-B0741C57F938` with the corresponding UID from the _Alternate Server URL_ in the interface.
- Some applications may not support [Autodiscover](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/). If the _Server URL_ does not work, use the _Alternate Server URL_ to bypass Autodiscover.

You can also reference calendars and contacts via their direct URLs in the _Direct CalDAV and CardDAV URLs for Calendars and Contacts_ section of the interface. For example:

- _Calendar_ — `https://example.com:2080/calendars/__uids__/132E0D5F-77F2-4A15-B888-B0741C57F938/calendar`
- _Address Book_ — `https://example.com:2080/addressbooks/__uids__/132E0D5F-77F2-4A15-B888-B0741C57F938/addressbook`


Note:





Replace `132E0D5F-77F2-4A15-B888-B0741C57F938` with the UID from the corresponding entry in the interface.


You can also have the system email you scripts that automatically configure the cPanel calendars and contacts on your local system. For more information, read the _Set up email on your device_ section of our [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/#set-up-email-on-your-device) documentation.

## Set up calendar and contact applications

Important:

Specific attributes of this tutorial may vary with future Apple product versions.

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

1. Click _Launchpad_, and then click _System Preferences_.
2. Click _Internet Accounts_.
3. Click _Add Other Account…_.
4. Click _CalDAV Account_ to add a calendar account, or _CardDAV Account_ to add a contacts account.

#### Enter your account information

To complete the setup of your CalDAV or CardDAV account, use one of the following methods:

##### Automatic

Important:

- You **cannot** set up calendars and contacts with the _Automatic_ account type if your domain uses a self-signed certificate.
- To use the _Automatic_ account type, your hosting provider **must** enable the _Thunderbird and Outlook autodiscover and autoconfig support (enables service subdomain and SRV record creation)_ setting in the _Domains_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#domains) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

To automatically complete the setup of your account, perform the following steps:

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





- You can locate the CardDAV and CalDAV _Server Path_ information in Webmail’s [_Configure Calendar and Contacts Client_](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail#configure-calendars-and-contacts-client) interface. Use the URL provided in the _Secure SSL/TLS URLs_ table’s _Address Book_ or _Calendar_ rows, respectively.
- The _Server Path_ text box only requires the information **after** the server’s port address. For example, to add a CalDAV _Server Path_, use the `/calendars/__uids__/132E0D5F-77F2-4A15-B888-B0741C57F938/calendar` format, and replace `132E0D5F-77F2-4A15-B888-B0741C57F938` with the corresponding UID (Unique Identifier) from the URL in Webmail’s [_Configure Calendar and Contacts Client_](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail#configure-calendars-and-contacts-client) interface.

6. Enter `2080` in the _Port_ text box.
7. Click _Sign In_ to save your changes.

### Other operating systems

Important:

- We have only tested these steps on Apple®-distributed products. These clients natively support CalDAV and CardDAV. If you use other calendar or contacts applications that support these protocols, you **may** be able to access your calendars and contacts from those applications. Your application **must** support the CalDAV and CardDAV protocols.
- On Android devices, we recommend using Exchange ActiveSync to set up calendars, contacts, and email. For more information, read our [How to Sync Calendars, Contacts, and Email on Android Devices](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/) documentation.

#### Access your application’s configuration interface

Perform the necessary steps to access the calendars (CalDAV) or contacts (CardDAV) account configuration interface for your application. These steps vary between applications. For more information, read your application’s documentation.

#### Enter your account’s information

Enter the following information for your webmail account. For example:

- _Username_ — The webmail username — `user@example.com`
- _Password_ — The webmail user’s password.
- _Server_ — The full URL for the webmail user’s calendar or contacts.

  - Autodiscover — `example.com`
  - Non-Autodiscover — `https://example.com:2080/calendars/__uids__/132E0D5F-77F2-4A15-B888-B0741C57F938/calendar`


    Note:





- Replace `132E0D5F-77F2-4A15-B888-B0741C57F938` with the corresponding UID from the URL in Webmail’s [_Configure Calendar and Contacts Client_](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail#configure-calendars-and-contacts-client) interface.
- Some applications may not support [Autodiscover](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/). If the _Server URL_ does not work, use the _Alternate Server URL_ to bypass Autodiscover.

### Roundcube

Roundcube’s database stores the internal calendar’s data. You can also add a CalDAV calendar from a remote cPanel server to Roundcube.

#### Log in to Webmail

To add a remote cPanel calendar to Roundcube, first log in to Webmail with one of the following methods:

- Navigate to `https://example.com:2096` in your browser. For more information, read our [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/) documentation.
- Navigate to cPanel’s [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts) interface ( _cPanel » Home » Email » Email Accounts_). Then, locate the email account in the table and click or tap _Check Email_. The _Webmail_ interface will open in a new browser tab.

After you log in, the _Webmail_ interface will appear.

#### Access Roundcube

The [Roundcube webmail client](https://docs.cpanel.net/webmail/webmail-clients#roundcube) is cPanel & WHM’s default webmail client. Roundcube includes a mobile-responsive theme.

If Roundcube is not your current webmail client, click or tap Roundcube’s logo or text description in the _Open your inbox_ section of the _Webmail_ interface.

#### Navigate to the Roundcube Calendar interface

In the Roundcube interface, click _Calendar_ on the left menu, or in the mobile interface, tap the menu icon (![menu icon](https://docs.cpanel.net/img/roundcube-mobile-hamburger-menu.png)) to open the main menu, then tap _Calendar_. The _Calendar_ interface will appear.

#### Add the cPanel calendar to Roundcube

1. In the Roundcube _Calendar_ interface, navigate to _Calendars_ at the top of the interface, or in the mobile interface, tap the folder icon ( ![folder icon](https://docs.cpanel.net/img/roundcube-folder-icon.png) ).
2. Click or tap the menu icon ( ![menu icon](https://docs.cpanel.net/img/roundcube-calendar-menu.png) ). A menu will appear.
3. Select ![Add Calender plus icon](https://docs.cpanel.net/img/roundcube-calendar-add-button.png)_Add Calendar_ from the menu. The _Create new calendar_ interface will appear.
4. In the _Properties_ section, enter a calendar name in the _Name_ text box.
5. Paste the calendar URL from the remote cPanel server into the _CalDAV URL_ text box. You can find the calendar URL in the [_Direct CalDAV and CardDAV URLs for Calendars and Contacts_](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/110/#configuration-information) section of Webmail’s [_Configure Calendar and Contacts Client_](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail#configure-calendars-and-contacts-client) interface on the remote server.
6. Adjust the calendar color and whether to show reminders in the _Settings_ section.
7. Under _Authentication_, enter the username and password for the remote cPanel email account.
8. Click or tap _Save_. The Roundcube _Calendar_ interface will automatically upload the calendar.






Note:




You will see calendar events for the current week.



To add an event to the calendar, double-click or double-tap anywhere on the calendar. A _New event_ interface will appear.

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