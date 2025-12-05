---
url: "https://docs.cpanel.net/cpanel/files/anonymous-ftp/"
title: "Anonymous FTP | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/files/anonymous-ftp/#main-content)

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
3. [Files](https://docs.cpanel.net/cpanel/files/)
4. Anonymous FTP


[ftp](https://docs.cpanel.net/tags/ftp/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [anonymousftp](https://docs.cpanel.net/tags/anonymousftp/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/files/anonymous-ftp/#overview)

* * *

[Anonymous FTP settings](https://docs.cpanel.net/cpanel/files/anonymous-ftp/#anonymous-ftp-settings)

* * *

[Anonymous FTP Welcome Message](https://docs.cpanel.net/cpanel/files/anonymous-ftp/#anonymous-ftp-welcome-message)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/files/anonymous-ftp/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/files/anonymous-ftp/#overview)

* * *

[Anonymous FTP settings](https://docs.cpanel.net/cpanel/files/anonymous-ftp/#anonymous-ftp-settings)

* * *

[Anonymous FTP Welcome Message](https://docs.cpanel.net/cpanel/files/anonymous-ftp/#anonymous-ftp-welcome-message)

* * *

## Anonymous FTP

![](https://docs.cpanel.net/img/cpanel-icons/anonymous_ftp.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)

Last modified: _2024 May 28_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface lets you define how anonymous users interact with your FTP server. Anonymous FTP users can connect to your FTP server without a password. You can use this feature to make content publicly available for download.

When users log in to FTP anonymously, they must use the `anonymous@example.com` username, where `example.com` represents your domain’s name. This requirement directs the server to the correct `public_ftp` directory.

Note:

- This interface is only available if your hosting provider enables FTP services **and** anonymous FTP.
- If an anonymous user does **not** include the domain name, one of the following errors will appear:

  - If the server uses the Pure-FTP FTP server, users receive a _421 Can’t change directory to /var/ftp/_ error message.
  - If the server uses the ProFTP FTP server, users receive a _530 Login Authentication Failed_ error message.
- For information about your FTP accounts, read our [FTP Accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts) documentation.

## Anonymous FTP settings

Warning:

We **strongly** recommend that you do **not** allow anonymous users the ability to upload files to your FTP server. This will prevent malicious software uploads, which can harm your website.

To configure the _Anonymous FTP_ feature’s settings, perform the following steps:

1. Select or deselect the checkboxes for the permissions that you wish to allow or deny.
2. Click _Save_.

## Anonymous FTP Welcome Message

You can set a message that anonymous FTP users see when they connect to your FTP server.

To set a message, perform the following steps:

1. Enter your message in the _Anonymous FTP Welcome Message_ text box.
2. Click _Save_.

#### Additional Documentation

* * *

- [Backup for cPanel](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/)
- [Backup Wizard](https://docs.cpanel.net/cpanel/files/backup-wizard/)
- [Directory Privacy](https://docs.cpanel.net/cpanel/files/directory-privacy/)
- [FTP Accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts/)
- [FTP Connections](https://docs.cpanel.net/cpanel/files/ftp-connections/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×