---
url: "https://docs.cpanel.net/webmail/webmail-clients/"
title: "Webmail Clients | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/webmail/webmail-clients/#main-content)

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
3. Webmail Clients


[webmail](https://docs.cpanel.net/tags/webmail/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [email](https://docs.cpanel.net/tags/email/) [roundcube](https://docs.cpanel.net/tags/roundcube/)

#### Table of Contents

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
- [Webmail Clients](https://docs.cpanel.net/webmail/webmail-clients/)
[Overview](https://docs.cpanel.net/webmail/webmail-clients/#overview) [Roundcube](https://docs.cpanel.net/webmail/webmail-clients/#roundcube) [Other clients](https://docs.cpanel.net/webmail/webmail-clients/#other-clients) - [Manage Your Inbox](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/)
- [Calendars and Contacts](https://docs.cpanel.net/webmail/calendars-and-contacts-in-webmail/)
- [Edit Your Settings](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail/)
- [Fight Spam](https://docs.cpanel.net/webmail/fight-spam-in-webmail/)
- [Other Features](https://docs.cpanel.net/webmail/other-webmail-features/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/webmail/webmail-clients/#installation-toggle)

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
- [Webmail Clients](https://docs.cpanel.net/webmail/webmail-clients/)
[Overview](https://docs.cpanel.net/webmail/webmail-clients/#overview) [Roundcube](https://docs.cpanel.net/webmail/webmail-clients/#roundcube) [Other clients](https://docs.cpanel.net/webmail/webmail-clients/#other-clients) - [Manage Your Inbox](https://docs.cpanel.net/webmail/manage-your-inbox-in-webmail/)
- [Calendars and Contacts](https://docs.cpanel.net/webmail/calendars-and-contacts-in-webmail/)
- [Edit Your Settings](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail/)
- [Fight Spam](https://docs.cpanel.net/webmail/fight-spam-in-webmail/)
- [Other Features](https://docs.cpanel.net/webmail/other-webmail-features/)

## Webmail Clients

_Valid for versions 108 through the latest version_

#### Version:

#### [108](https://docs.cpanel.net/webmail/webmail-clients/)

Last modified: _2024 October 25_

* * *

## Overview

Webmail clients provide access to your Webmail email account. They may also include features like calendars and other Webmail services.

Important:

cPanel & WHM ships with the Roundcube Webmail client. If you have installed [other third-party Webmail clients](https://docs.cpanel.net/webmail/webmail-clients/#other-clients), they may also appear in the [_Webmail_](https://docs.cpanel.net/webmail/the-webmail-interface) interface.

### Roundcube

![Roundcube logo](https://docs.cpanel.net/img/roundcube-logo.png)

Use the Roundcube Webmail client to sort, view, and send email. It’s useful if you need a friendly-to-use interface with additional spam-related features. Roundcube also includes mobile email access.

#### Automatically open inbox

Select the _Open my inbox when I log in_ checkbox in the _Webmail_ interface to automatically open Roundcube when you log in to Webmail.

#### Roundcube features

The information below offers new Webmail users a brief overview of the features available in Roundcube. For a full list of features, visit [the Roundcube website](http://roundcube.net/).

| Feature type | Features |
| --- | --- |
| Interface type | - Three-pane format with view pane<br>- [Light or dark color schemas](https://docs.cpanel.net/webmail/webmail-clients/#interface-mode)<br>- Mobile access |
| Composition features | - Attachments<br>- HTML composition<br>- Spell check |
| Organization features | - Drag-and-drop organization<br>- Email archiving<br>- Folder manipulation<br>- Message flags<br>- Search mail<br>- Threaded conversation view |
| Additional features | - Address book<br>- Bulk spam-removal<br>- Calendar<br>- Sender identities<br>- Spam marking/unmarking<br>- System administrators can use plugins to add custom features. |

#### Interface mode

Roundcube supports the `light` and `dark` interface modes.

Initially, Roundcube uses the interface mode set by your web browser. If the browser sets the `dark` interface mode, Roundcube displays the `dark` mode. If the browser does not set an interface mode, Roundcube displays the `light` mode.

You can also set the interface mode via the `Dark mode` (![Roundcube Dark mode](https://docs.cpanel.net/img/roundcube-dark-mode.png)) or `Light mode` (![Roundcube Light mode](https://docs.cpanel.net/img/roundcube-light-mode.png)) icon in the lefthand menu bar. The browser remembers the setting the next time you log in to Roundcube.

### Other clients

Use other third-party clients by using the _Mail Client Manual Settings_. To automatically open your third-party client when you log in to Webmail, perform the following steps:

1. Select _Configure Mail Client_ from the _Other Webmail Features_ section in the _Webmail_ interface.
2. Check for an automatic configuration script in the _Mail Client Automatic Configuration Scripts_ section. Currently, cPanel provides automatic configuration scripts for the following applications:

   - iOS for iPhone/iPad/iPod
   - MacOS Mail®
   - Windows Live Mail®
3. If an automatic configuration script is available, click your selected security protocol to proceed.
4. If your intended Webmail client does **not** come with an automatic configuration script, proceed to the _Mail Client Manual Settings_ interface and use the secure SSL/TLS settings to add the client. Alternatively, you may email the configuration information for your Webmail client to yourself using the _Email Instructions_ text box.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×