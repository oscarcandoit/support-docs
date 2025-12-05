---
url: "https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/"
title: "How to Sync Calendars, Contacts, and Email on Android™ Devices | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#main-content)

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
4. How to Sync Calendars, Contacts, and Email on Android™ Devices


[webmail](https://docs.cpanel.net/tags/webmail/) [calendar](https://docs.cpanel.net/tags/calendar/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#overview)

* * *

[Global address lists](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#global-address-lists)

* * *

[Set up your device](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#set-up-your-device)

* * *

[Troubleshooting](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#troubleshooting)

* * *

[The port field contents changed back from 2091 to 443](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#the-port-field-contents-changed-back-from-2091-to-443)

* * *

[Cannot connect to server or port related errors](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#cannot-connect-to-server-or-port-related-errors)

* * *

[Calendar events created on your device do not show up on other devices](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#calendar-events-created-on-your-device-do-not-show-up-on-other-devices)

* * *

[Updates created elsewhere take longer than expected to show up on your device](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#updates-created-elsewhere-take-longer-than-expected-to-show-up-on-your-device)

* * *

[Duplicate events appear on the calendar](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#duplicate-events-appear-on-the-calendar)

* * *

[Samsung® device specific issues](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#samsung-device-specific-issues)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#overview)

* * *

[Global address lists](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#global-address-lists)

* * *

[Set up your device](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#set-up-your-device)

* * *

[Troubleshooting](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#troubleshooting)

* * *

[The port field contents changed back from 2091 to 443](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#the-port-field-contents-changed-back-from-2091-to-443)

* * *

[Cannot connect to server or port related errors](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#cannot-connect-to-server-or-port-related-errors)

* * *

[Calendar events created on your device do not show up on other devices](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#calendar-events-created-on-your-device-do-not-show-up-on-other-devices)

* * *

[Updates created elsewhere take longer than expected to show up on your device](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#updates-created-elsewhere-take-longer-than-expected-to-show-up-on-your-device)

* * *

[Duplicate events appear on the calendar](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#duplicate-events-appear-on-the-calendar)

* * *

[Samsung® device specific issues](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/#samsung-device-specific-issues)

* * *

## How to Sync Calendars, Contacts, and Email on Android™ Devices

Last modified: _2025 June 10_

* * *

## Overview

Warning:

- This document is only valid for cPanel & WHM version 118 and earlier. To set up calendars and contacts on Android™ devices in cPanel & WHM version 120 and later, read our [How to Synchronize Calendars and Contacts on Android Devices](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/) documentation.
- This functionality is only available if your hosting provider has enabled both the [_Calendars and Contacts Server_](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/) and [_Z-Push - ActiveSync Support_](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/#z-push-activesync-support) plugins.
- EAS is unable to support [_Calendar Delegation_](https://docs.cpanel.net/cpanel/email/calendar-delegation/).

This article provides instructions to sync email, calendar, and contacts on an Android device using EAS.

We **only** recommend using EAS to sync accounts on your Android device if you want to sync an account’s calendars, contacts, **and** email. If you only want to sync an account’s email, we recommend still using [IMAP](https://docs.cpanel.net/knowledge-base/email/how-to-set-up-a-cpanel-email-account-on-ios-and-android/#android).

If you want to sync your accounts on iOS®, read our [calendars and contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#ios) and [email](https://docs.cpanel.net/knowledge-base/email/how-to-set-up-a-cpanel-email-account-on-ios-and-android/#ios) documentation.

### Global address lists

EAS also allows you to access Global Address Lists (GAL). A GAL is a list of users that you can access from email and calendar clients. If you want to send an email to someone on that GAL, as you start typing their name or email, the GAL will suggest email addresses. With this you do not have to manually type the whole email address out. What shows in your GAL will depend on what type of account you sync on your device:

- [System default email account](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#manage-the-system-default-email-account) — If you set up a system default email account on your device using EAS, GAL will list all users for **all** domains and subdomains on that cPanel account. For example, say your cPanel account has the domains `example.com` and `example.net` as well as a subdomain named `subdomain.example.com`. You will see users from all three domains and subdomains.

- Any other email account — If you set up an email account that is **not** a system default email account on your device using EAS, GAL will list the other users of that domain. You will not see users on other domains or subdomains. For example, if you set up `user@example.com` on your device, you will see all other users on `example.com`.


## Set up your device

Note:

We created this guide using Android version 11 on a Google Pixel™ 4a and Android version 8 on a Samsung Galaxy™ S7 and Samsung Galaxy Tab A. The process will slightly differ depending on what version of Android and what device you are using.

1. Navigate to the _Settings_ menu.

![An Android menu that displays the Settings icon](https://docs.cpanel.net/img/activesync1.png)

2. In the _Settings_ menu, tap on _Accounts_. The _Accounts_ interface will appear.

![The Accounts icon in the Android Settings menu](https://docs.cpanel.net/img/activesync2.png)



Note:





On some devices and versions of Android, you will find _Accounts_ within another menu such as _Cloud and Accounts_ or _Accounts and backup_.



For example:

![The Cloud and Accounts icon in the Android Settings menu](https://docs.cpanel.net/img/activesync3.png)

3. Tap on _Add Account_. The _Add an account_ interface will appear.

![The Add account option in the Android Accounts interface](https://docs.cpanel.net/img/activesync4.png)

4. In the _Add an account_ interface, tap _Microsoft Exchange ActiveSync_.

![The Microsoft Exchange ActiveSync option in the Android Add an Account interface](https://docs.cpanel.net/img/activesync6.png)



Warning:





If you do **not** see _Microsoft Exchange ActiveSync_ and **only** _Exchange_, then tap _Exchange_. However, if you see both, make sure you tap _Microsoft Exchange ActiveSync_.

5. In the _Email_ text box, enter your full email address. Then, tap _Set up manually_.

![An Enter your email address interface with the Set up manually button highlighted](https://docs.cpanel.net/img/activesync7.png)

6. Enter your password in the _Password_ text box. Then, enter your server settings.







Note:





If your hosting provider has enabled the _Calendar and Contacts Server_ and _Z-Push - ActiveSync Support_ plugins, you can find your account’s settings in the _ActiveSync SSL/TLS Settings (for Android)_ box. You can find this box in the following locations:



- cPanel’s [_Set Up Mail Client_](https://docs.cpanel.net/cpanel/email/set-up-mail-client/) interface ( _cPanel » Home » Email » Email Accounts_).
- cPanel’s [_Calendars and Contacts_](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/) interface ( _cPanel » Home » Email » Calendars and Contacts_).
- Webmail’s [_Calendars and Contacts_](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/) interface ( _Webmail » Configure Calendars and Contacts_).
- The welcome email that your administrator sent you.

![An Email setup menu with example information](https://docs.cpanel.net/img/activesync8.png)

Note:

- If you are setting up a system default email account, enter the cPanel account’s name in the _Domain/username_ field.
- If your device **does** have the _Port_ text box, enter the port from your email account’s settings.
- If your device **does not** have the _Port_ text box, enter the port with the domain in the _Exchange server_ text box. For example: `example.com:2091`.

![The Exchange server settings interface, where the Exchange server text box highlights the email username, domain, and port number as user and example.com:2091.](https://docs.cpanel.net/img/activesync9.png)

7. Tap _Next_. Your mail client should now be ready.

![A success message](https://docs.cpanel.net/img/activesync10.png)


## Troubleshooting

Here are some solutions to common issues you may encounter with using EAS to sync your device.

### The port field contents changed back from 2091 to 443

Sometimes the Android operating system resets the port field back to the default: 443. This occurs either when an error occurs or sometimes when you make edits in the settings. To counter this, we recommend setting the port last.

We also recommend rechecking the port if you encounter a failure.

### Cannot connect to server or port related errors

Your device or mail client may not connect through the port you specify. This can occur if you entered your port information as `hostname:port` and your client does not support that syntax. This can also occur if the network blocks traffic on that specific port.

To resolve this, omit the port information during setup. If you do not specify a port, your account will connect using proxying rather than the specified port.

Warning:

Proxying only works if:

- Your hosting provider is running [Apache](https://docs.cpanel.net/ea4/apache/about-apache/).

- Your hosting provider has enabled the [_Service Subdomains_ tweak setting](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#domains).


### Calendar events created on your device do not show up on other devices

On Android, the default calendar for events you create often belongs to the Google account you used to initially set up the device. When creating an event, check that you have selected the desired calendar from the menu.

### Updates created elsewhere take longer than expected to show up on your device

Some Android devices do not automatically enable auto-syncing or push mode for EAS accounts. To enable auto-syncing or push mode:

1. Go to the _Accounts_ menu within your device’s _Settings_.

2. Tap your EAS account.

3. Tap _Account Settings_.

4. Set _Sync Frequency_ to _Automatic (Push)_.


Not all Android devices have _Sync Frequency_ or a similar setting. If your account seems to be taking an excessive amount of time to sync and you cannot find this setting, do one of the following:

- Go to the _Accounts_ menu within your device’s _Settings_. Enable _Auto sync data_.

- Go to the _Accounts_ menu within your device’s _Settings_. Tap your EAS account. Tap _Sync account_. Enable syncing for one or more parts of your account.


### Duplicate events appear on the calendar

If you see duplicate events on your device’s calendar there are two potential causes:

- If you sync your account in two or more email apps, each app will add a copy of the event to your calendar. If you see duplicate events marked by different colors, this is likely the cause. To resolve this issue, unsync or sign out of the account in all but one email app.

- Very rarely, if your account’s disk is over quota you may see multiple duplicate events on your calendar. You can only resolve this by bringing the account’s disk space back under quota.


### Samsung® device specific issues

Sometimes Samsung devices encounter issues that we have not encountered on other Android devices:

- Sometimes instead of listing email addresses in an event or contact, the device will only display a UID. This is a known issue with no solution at this time. You can still view the correct email addresses in the [_Webmail_](https://docs.cpanel.net/webmail/the-webmail-interface/) interface.

- Events on the Samsung calendar app do **not** accurately show attending status. This is a known issue with no solution at this time. You can still view attendee responses in calendar events in the [_Webmail_](https://docs.cpanel.net/webmail/the-webmail-interface/) interface.

- You cannot change attending status via the event on the Samsung calendar app. This is a known issue with no solution at this time.

- On older Android operating systems, once you respond to an event invitation, the event invitation may remain in the device’s email. The attendance options will no longer be functional after the initial response. Usually, once you sync your email account again, the invitation will go away.


#### Additional Documentation

* * *

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
- [Webmail Clients](https://docs.cpanel.net/webmail/webmail-clients/)
- [Webmail — Calendars and Contacts](https://docs.cpanel.net/webmail/calendars-and-contacts-in-webmail/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [How to Set Up Calendars and Contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×