---
url: "https://docs.cpanel.net/cpanel/files/ftp-connections/"
title: "FTP Connections | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/files/ftp-connections/#main-content)

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
4. FTP Connections


[ftp](https://docs.cpanel.net/tags/ftp/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [anonymousftp](https://docs.cpanel.net/tags/anonymousftp/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/files/ftp-connections/#overview)

* * *

[View current FTP sessions](https://docs.cpanel.net/cpanel/files/ftp-connections/#view-current-ftp-sessions)

* * *

[Disconnect users from an FTP session](https://docs.cpanel.net/cpanel/files/ftp-connections/#disconnect-users-from-an-ftp-session)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/files/ftp-connections/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/files/ftp-connections/#overview)

* * *

[View current FTP sessions](https://docs.cpanel.net/cpanel/files/ftp-connections/#view-current-ftp-sessions)

* * *

[Disconnect users from an FTP session](https://docs.cpanel.net/cpanel/files/ftp-connections/#disconnect-users-from-an-ftp-session)

* * *

## FTP Connections

![](https://docs.cpanel.net/img/cpanel-icons/ftp_connections.svg)

_Valid for versions 94 through the latest version_

#### Version:

#### [94](https://docs.cpanel.net/cpanel/files/ftp-connections/)

Last modified: _2024 May 28_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface displays information about current connections to your FTP server and allows you to terminate those connections.

Important:

To connect your local machine to your FTP server, read our [How to Upload Files with FTP](https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/) documentation or your third-party FTP client’s documentation.

Note:

- This interface is **only** available if your hosting provider enables FTP services on the server.
- This interface does **not** appear on servers running the CloudLinux™ operating system.

## View current FTP sessions

The interface includes the following information about connections to your FTP server:

| Column | Description | Example |
| --- | --- | --- |
| _User_ | The username for the authenticated FTP account. | `user` |
| _Logged in From_ | The host through which the user connected to your FTP server. | `ns1.example.com` |
| _Login Time_ | The FTP session’s start time and date. | `Fri Jul 19 13:19:20 2013` |
| _Status_ | The FTP session’s status. | `IDLE` |
| _Process ID_ | The FTP session’s process ID. | `13926` |
| _Actions_ | The actions that you perform with on the FTP session:<br>- _Disconnect_ — Allows you to disconnect the FTP session. |  |

To refresh the list of FTP sessions, click _Reload_.

## Disconnect users from an FTP session

If you suspect malicious activity from a user, or if the user is idle, you can disconnect their FTP session.

To disconnect a user from an FTP session, perform the following steps:

1. Click _Disconnect_ next to the FTP session that you wish to disconnect.
2. To verify that the server disconnected the session, click _Reload_.

#### Additional Documentation

* * *

- [Anonymous FTP](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)
- [Backup for cPanel](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/)
- [Backup Wizard](https://docs.cpanel.net/cpanel/files/backup-wizard/)
- [Directory Privacy](https://docs.cpanel.net/cpanel/files/directory-privacy/)
- [FTP Accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×