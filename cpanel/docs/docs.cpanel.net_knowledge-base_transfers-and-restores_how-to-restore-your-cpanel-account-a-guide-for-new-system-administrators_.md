---
url: "https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/"
title: "How to Restore Your cPanel Account - A Guide for New System Administrators | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/#main-content)

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
3. [Transfers and Restores](https://docs.cpanel.net/knowledge-base/transfers-and-restores/)
4. How to Restore Your cPanel Account - A Guide for New System Administrators


[transfers](https://docs.cpanel.net/tags/transfers/) [migrations](https://docs.cpanel.net/tags/migrations/) [restore](https://docs.cpanel.net/tags/restore/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/#overview)

* * *

[About cPanel](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/#about-cpanel)

* * *

[How do I access cPanel?](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/#how-do-i-access-cpanel)

* * *

[What is the root user?](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/#what-is-the-root-user)

* * *

[How do I restore my old cPanel account?](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/#how-do-i-restore-my-old-cpanel-account)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/#overview)

* * *

[About cPanel](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/#about-cpanel)

* * *

[How do I access cPanel?](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/#how-do-i-access-cpanel)

* * *

[What is the root user?](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/#what-is-the-root-user)

* * *

[How do I restore my old cPanel account?](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/#how-do-i-restore-my-old-cpanel-account)

* * *

## How to Restore Your cPanel Account - A Guide for New System Administrators

_Valid for versions 88 through the latest version_

#### Version:

#### [88](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/)

Last modified: _2025 July 14_

* * *

## Overview

This document explains how to restore your website in WHM.

Note:

This document is intended for cPanel users who have recently become system administrators.

## About cPanel

The cPanel & WHM product package contains two distinct interfaces. Each interface controls a different aspect of web hosting. It is important that you understand the differences between the two interfaces:

- **WHM (WebHost Manager)** — WHM allows you to manage your server and the websites on it. It also allows you to manage your server’s settings and configuration. WHM is often considered our product package’s “backend.”

- **cPanel** — cPanel allows website owners to manage their sites. Website owners can use cPanel to create their websites’ email addresses, FTP accounts, web applications, and databases. cPanel is often considered our product package’s “frontend.”


Important:

If you plan to restore your cPanel account, do **not** create the account in WHM before you attempt to restore it.

## How do I access cPanel?

To access cPanel & WHM services through a web browser, follow the directions in our [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/) documentation.

## What is the root user?

The `root` user is the highest-level system user. As the `root` user, you can access and make changes to anything on the system.

Important:

We **strongly** recommend that you do not share or expose your `root` password.

## How do I restore my old cPanel account?

Warning:

Do **not** use the `skip-name-resolve` setting in your server’s MySQL® configuration. This setting **will** cause **serious** issues with server operations. If you are **not** an advanced MySQL administrator, expect issues with this setting. For example, you will see issues with account transfers and restorations. This setting will also cause issues with [phpMyAdmin](https://docs.cpanel.net/cpanel/databases/phpmyadmin).

To restore your cPanel account, obtain a backup archive or a `cpmove` file of the old account. Either generate the backup archive in cPanel’s [_Backup_](https://docs.cpanel.net/cpanel/files/backup-for-cpanel) interface ( _cPanel » Home » Files » Backup_), or obtain a `cpmove` archive from your hosting provider.

Important:

- Do **not** create the cPanel account that you plan to restore. WHM’s [_Transfer or Restore a cPanel Account_](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account) interface ( _WHM » Home » Backup » Transfer or Restore a cPanel Account_) creates the cPanel account for you.
- Do **not** change the name of your cPanel backup archive or `cpmove` file.

To begin, place your backup archive or `cpmove` file in the `/home` directory. Use an SFTP client to transfer the file to your server.

For more information about SFTP, read our [How to Configure Your SFTP Client](https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client/) documentation.

Note:

If you do **not** already have an SFTP client, you can download [Cyberduck™](https://cyberduck.io/download/) for evaluation purposes.

After you install your SFTP client, open an SFTP connection to your server with your root login information. For example, if you use Cyberduck, perform the following steps to open an SFTP connection:

1. Select _SFTP (SSH File Transfer Protocol)_ from the top menu.

2. Enter your server’s IP address or hostname in the _Server_ text box.

3. If your server uses a port other than `22` for SSH, enter it in the _Port_ text box.

4. Enter `root` in the _Username_ text box.

5. Enter the `root` user’s password in the _Password_ text box.

6. Click _Connect_ to open an SFTP connection to your server.


After you open an SFTP connection to your server, transfer the backup archive or `cpmove` file to the server’s `/home` directory.

To transfer the file with Cyberduck, perform the following steps:

1. Navigate to the `/` directory.

2. Double-click the _home_ folder.

3. Click _Action_.

4. Click _Upload_.

5. Navigate to the directory with the backup archive file and select it. The system will transfer your file to the server’s `/home` directory.


Note:

The amount of time that the SFTP client requires to transfer a file depends on the file’s size and your connection speed.

After you move your backup archive or `cpmove` file to the correct location, access WHM’s [_Transfer or Restore a cPanel Account_](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account) interface ( _WHM » Home » Transfers » Transfer or Restore a cPanel Account_). You can use this interface to restore the backup archive or `cpmove` file with the _Restore from a local cpmove file._ setting.

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [How to Move All cPanel Accounts from One Server to Another](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/)
- [How to Transfer Accounts and Configurations Between cPanel & WHM Servers](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/)
- [Review Transfers and Restores](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/)
- [The view\_transfer Script](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×