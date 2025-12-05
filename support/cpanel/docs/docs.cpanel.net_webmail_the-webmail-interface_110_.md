---
url: "https://docs.cpanel.net/webmail/the-webmail-interface/110/"
title: "The Webmail Interface | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/webmail/the-webmail-interface/110/#main-content)

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
3. The Webmail Interface


[webmail](https://docs.cpanel.net/tags/webmail/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [email](https://docs.cpanel.net/tags/email/) [roundcube](https://docs.cpanel.net/tags/roundcube/)

#### Table of Contents

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
[Overview](https://docs.cpanel.net/webmail/the-webmail-interface/110/#overview) [Navigation bar](https://docs.cpanel.net/webmail/the-webmail-interface/110/#navigation-bar) [Webmail sections](https://docs.cpanel.net/webmail/the-webmail-interface/110/#webmail-sections) [Additional webmail sections](https://docs.cpanel.net/webmail/the-webmail-interface/110/#additional-webmail-sections) - [Webmail Clients](https://docs.cpanel.net/webmail/webmail-clients/)
- [Manage Your Inbox](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/)
- [Calendars and Contacts](https://docs.cpanel.net/webmail/calendars-and-contacts-in-webmail/)
- [Edit Your Settings](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail/)
- [Fight Spam](https://docs.cpanel.net/webmail/fight-spam-in-webmail/)
- [Other Features](https://docs.cpanel.net/webmail/other-webmail-features/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/webmail/the-webmail-interface/110/#installation-toggle)

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
[Overview](https://docs.cpanel.net/webmail/the-webmail-interface/110/#overview) [Navigation bar](https://docs.cpanel.net/webmail/the-webmail-interface/110/#navigation-bar) [Webmail sections](https://docs.cpanel.net/webmail/the-webmail-interface/110/#webmail-sections) [Additional webmail sections](https://docs.cpanel.net/webmail/the-webmail-interface/110/#additional-webmail-sections) - [Webmail Clients](https://docs.cpanel.net/webmail/webmail-clients/)
- [Manage Your Inbox](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/)
- [Calendars and Contacts](https://docs.cpanel.net/webmail/calendars-and-contacts-in-webmail/)
- [Edit Your Settings](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail/)
- [Fight Spam](https://docs.cpanel.net/webmail/fight-spam-in-webmail/)
- [Other Features](https://docs.cpanel.net/webmail/other-webmail-features/)

## The Webmail Interface

_Valid for versions 110 through 112_

#### Version:

#### [110](https://docs.cpanel.net/webmail/the-webmail-interface/110/)

#### [114](https://docs.cpanel.net/webmail/the-webmail-interface/114/)

#### [120](https://docs.cpanel.net/webmail/the-webmail-interface/120/)

#### [126](https://docs.cpanel.net/webmail/the-webmail-interface/126/)

#### [128](https://docs.cpanel.net/webmail/the-webmail-interface/128/)

#### [130](https://docs.cpanel.net/webmail/the-webmail-interface/)

Last modified: _2025 September 8_

* * *

## Overview

The _Webmail_ interface allows you to access your email account through any browser or mobile device and manage your Webmail settings.

#### Access webmail

To log in to Webmail, you can use either of the following methods:

- Navigate to `https://example.com:2096` in your browser. In this example, replace `example.com` with your email address’s domain. For more information about logging in to your account, read our [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/) documentation.
- Navigate to cPanel’s [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts) interface ( _cPanel » Home » Email » Email Accounts_). Then, locate the email account in the table and click _Check Email_. The _Webmail_ interface will open in a new browser tab.

After you first log in, the _Webmail_ interface will appear.

#### cPanel Analytics

Note:

- This section **only** appears if your hosting provider enables it.
- WebPros International, L.L.C. values your privacy. For more information about how we collect and use cPanel Analytics data, read our [cPanel Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics) documentation.

If this is the first time you have logged in to Webmail, the _Consent and Privacy_ form will appear. To enable cPanel Analytics, select the _By checking this box, you agree that we may collect your usage statistics._ checkbox and click _Save_ to enable cPanel Analytics for your account.

When a user has **not** set the analytics consent, the system will continue to prompt the user to provide these preferences after login until the user saves the settings.

## Navigation bar

The navigation bar contains the following features:

| Feature | Description |
| --- | --- |
| Manage Disk usage | Your current disk usage appears in the navigation bar. To navigate to Webmail’s _Manage Disk Usage_ interface, click your current disk usage value. You can use this interface to ensure that you do not exceed your disk quota. |
| User Preferences | The email address for the Webmail account appears in the navigation bar. To access the _User Preferences_ menu, click your email address. You can use this interface set a default interface when you log in to Webmail. For example, click the star icon (![star icon](https://docs.cpanel.net/img/webmail-star-icon.png)) for the option in the menu. Webmail will automatically display the interface when you log in. |
| _Logout_ | To log out of the Webmail interface, click _Logout_ in the navigation bar. |

## Webmail sections

You can find the following sections in the interface’s main navigation:

| Section | Description |
| --- | --- |
| _Open your inbox_ | This section allows you to open your Webmail client’s inbox. Click _Open_ to open the inbox of the selected mail client. To open your Inbox every time that you log in to Webmail, select the _Open my inbox when I log in_ checkbox. |
| _Change your webmail client_ | If your Webmail provider has more than one webmail client, you may change your Webmail client in this section. cPanel & WHM ships with the [Roundcube webmail client](https://docs.cpanel.net/webmail/webmail-clients). <br>1. If you are in the Roundcube interface, click _cPanel Webmail Home_. The _Webmail_ interface will appear.<br>2. In the _Change your webmail_ client section, click the Roundcube logo or text description. Your selected client logo or text description will appear in the _Open your inbox_ section.<br>3. If you do **not** want to use a supported webmail client, you can use a third-party web-based client like Gmail™ or Yahoo!® Mail to connect to your mailbox using the [_Mail Client Manual Settings_](https://docs.cpanel.net/webmail/webmail-clients/#other-clients) interface. |
| _Set up email on your device_ | This section allows you to set up your Webmail account, calendars, and contacts on any electronic device with email apps. To send an email with setup instructions and scripts that automatically configure your device, perform the following steps: <br>1. Select your device from the _Select the device you will use:_ menu.<br>2. Enter your email address in the _Enter an email address that you can access from your device:_ text box.<br>3. Select one or more of these configurations from the _Select the configurations that you would like to set up:_ checkboxes:<br>   - _Email_<br>   - _Calendar_<br>   - _Contacts_<br>Note:<br>The system selects all three configurations by default.<br> <br>6. Click _Send_ to email the setup instructions and scripts to the address you entered.<br> You can also download the mail-configuration scripts to automatically set up your email. To access these scripts, click _Automatically configure my device_ in this section. <br>Important:<br>The mail-configuration scripts that you download **only** configure email. They do **not** configure calendars and contacts. <br>To automatically configure calendars and contacts, perform the above steps to email the scripts. Make certain to select the _Calendar_ and _Contacts_ checkboxes. |
| _General Information_ | The General Information section displays the following information: <br>- Your email account username.<br>- The Universally Unique Identifier ( [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)) associated with your email account. If you log in with your [system user email account](https://docs.cpanel.net/cpanel/email/email-accounts/#additional-actions), the UUID associated with your cPanel user account appears in this section. For more information, read our [cPanel Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/) documentation. |

## Additional webmail sections

The _Webmail_ interface includes additional features that help you customize your webmail experience. You will find these options below the _Change your webmail client_ section. You can also access these features from the _User Preferences_ menu.

Note:

Some of these features only appear if your hosting provider enables them.

| Section | Description |
| --- | --- |
| _Manage Your Inbox_ | This section includes features that help you manage your email. <br>- _Autoresponders_<br>- _Email Filters_<br>- _Forwarders_<br> For more information, read our [Manage Your Inbox in Webmail](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail) documentation. |
| _Edit Your Settings_ | This section in the _Webmail_ interface includes features that edit your settings. <br>- _Password and Security_<br>- _Contact Information_<br>- _Configure Calendars and Contacts Client_<br>- _Two-Factor Authentication_<br>- _Account Preferences_<br> For more information, read our [Edit Your Settings in Webmail](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail) documentation. |
| _Fight Spam_ | This section includes features that help you manage and protect your inbox from spam. <br>- _Spam Filters_<br>- _BoxTrapper_<br> For more information, read our [Fight Spam in Webmail](https://docs.cpanel.net/webmail/fight-spam-in-webmail) documentation. |
| _Other Webmail Features_ | The features in this section perform different actions in Webmail: <br>- _Configure Mail Client_<br>- _Manage Disk Usage_<br>- _Mailing Lists_<br>- _Search Index_<br>- _Track Delivery_<br> For more information, read our [Other Webmail Features](https://docs.cpanel.net/webmail/other-webmail-features) documentation. |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×