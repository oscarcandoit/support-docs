---
url: "https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/"
title: "How to Synchronize Calendars and Contacts on Android Devices | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#main-content)

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
4. How to Synchronize Calendars and Contacts on Android Devices


[webmail](https://docs.cpanel.net/tags/webmail/) [calendar](https://docs.cpanel.net/tags/calendar/) [dav](https://docs.cpanel.net/tags/dav/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#overview)

* * *

[Set up your device](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#set-up-your-device)

* * *

[Set up DAVx5](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#set-up-davx5)

* * *

[Set up a calendars and contacts account](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#set-up-a-calendars-and-contacts-account)

* * *

[Synchronize calendars and contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#synchronize-calendars-and-contacts)

* * *

[Potential synchronization issues](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#potential-synchronization-issues)

* * *

[Automatic synchronization not enabled](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#automatic-synchronization-not-enabled)

* * *

[Battery optimization enabled](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#battery-optimization-enabled)

* * *

[Google account as the default](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#google-account-as-the-default)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#overview)

* * *

[Set up your device](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#set-up-your-device)

* * *

[Set up DAVx5](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#set-up-davx5)

* * *

[Set up a calendars and contacts account](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#set-up-a-calendars-and-contacts-account)

* * *

[Synchronize calendars and contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#synchronize-calendars-and-contacts)

* * *

[Potential synchronization issues](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#potential-synchronization-issues)

* * *

[Automatic synchronization not enabled](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#automatic-synchronization-not-enabled)

* * *

[Battery optimization enabled](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#battery-optimization-enabled)

* * *

[Google account as the default](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/#google-account-as-the-default)

* * *

## How to Synchronize Calendars and Contacts on Android Devices

Last modified: _2024 March 15_

* * *

## Overview

This document provides instructions to synchronize your cPanel calendars and contacts on an Android™ device with the third-party [DAVx5 application](https://www.davx5.com/). To synchronize your calendars and contacts on iOS®, read our [How to Set Up Calendars and Contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/#ios) documentation.

Warning:

- This document is only valid for cPanel & WHM version 120 and later. To set up calendars and contacts on Android devices in cPanel & WHM version 118 and earlier, read our [How to Sync Calendars, Contacts, and Email on Android Devices](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/) documentation.
- This functionality is only available if your hosting provider has enabled the [`cpdavd` service](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#cpdavd).
- We created this guide using DAVx5 version 4.3.14 from the [Google Play Store](https://play.google.com/store/apps/details?id=at.bitfire.davdroid) and Android version 10 on a Lenovo® tablet. The process may differ based on the version of DAVx5, Android, and device that you use.
- Because WebPros International, LLC doesn’t develop or ship this application, cPanel Technical Support **cannot** help you set it up.

## Set up your device

To set up calendars and contacts on your Android device, perform the following steps:

### Set up DAVx5

To set up DAVx5 for the first time, perform the following steps:

01. Download and install the [DAVx5 application](https://www.davx5.com/download).
02. Open the application.
03. Tap the right arrow button. The _Tasks support_ interface appears.
04. Select the _I don’t need tasks support.\*_ checkbox.
05. Tap the right arrow button. The _Permissions_ interface appears.
06. Select _All of the below_ to grant permissions to DAVx5. A new interface appears.
07. Tap _ALLOW_ to allow DAVx5 to access your contacts. A new interface appears.
08. Tap _ALLOW_ to allow DAVx5 to access your calendars.
09. Tap the right arrow button.
10. Set the _Regular sync intervals_ toggle to allow DAVx5 to synchronize at regular intervals. A new interface appears.
11. Tap _ALLOW_ to allow DAVx5 to run in the background.
12. Tap the checkmark button.

### Set up a calendars and contacts account

To set up a calendars and contacts account in DAVx5, perform the following steps:

1. On the DAVx5 _Home_ screen, tap the plus sign. The _Add account_ interface appears.
2. Select _Login with email address_.
3. In the _Email address_ field, enter your email address.
4. In the _Password_ field, enter your password.
5. Tap _LOGIN_. A new interface appears that displays the account information.
6. Tap _CREATE ACCOUNT_.

Note:

You can find your account’s settings in the following locations:

- Webmail’s [_Calendars and Contacts_](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/) interface ( _Webmail » Calendars and Contacts_).
- The welcome email that your administrator sent you.

## Synchronize calendars and contacts

To enable synchronization for your calendars and contacts, set the toggles next to the calendar name on the _CALDAV_ tab and the address book name on the _CARDDAV_ tab.

To set the synchronization interval, perform the following steps:

1. Tap the Settings icon. Under _Synchronization_, set the _Contacts sync. interval_ toggle for contacts or the _Calendars sync. interval_ toggle for calendars. A new interface appears.
2. Select the desired synchronization interval.

To manually synchronize calendars and contacts on your device, tap the circular arrows button. Or, tap the back arrow to access the main interface, then tap the circular arrows button.

## Potential synchronization issues

If synchronization does not work on your Android device, it may be due to one or more of the following issues:

### Automatic synchronization not enabled

By default, some Android devices block automatic synchronization, also known as push mode. If updates you create on other devices do not appear on your Android device, follow these steps to enable automatic synchronization or push mode:

1. Go to the _Users & accounts_ menu in your device’s _Settings_ application.
2. Tap your DAVx5 account.
3. Tap _Account sync_.
4. Set the toggles for _Address book_ and _Calendar_ to enable them.

### Battery optimization enabled

You may need to disable battery optimization or allow applications to start in the background for automatic synchronization to work on your device. For more information, read DAVx5’s [synchronization issues](https://davx5.com/faq/synchronization-is-not-run-as-expected) documentation.

### Google account as the default

On Android, the default calendar and address book often belong to the Google account you used when you first set up the device. If an event or contact you create on your Android device does not appear on other synchronized devices, make sure you have added it to the cPanel calendar or address book.

#### Additional Documentation

* * *

- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Calendar Delegation](https://docs.cpanel.net/cpanel/email/calendar-delegation/)
- [Calendars and Contacts Management](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-management/)
- [Calendars and Contacts Sharing](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/)
- [How to Set Up Calendars and Contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×