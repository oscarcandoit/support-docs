---
url: "https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client/"
title: "How to Configure Your SFTP Client | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client/#main-content)

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
3. [FTP](https://docs.cpanel.net/knowledge-base/ftp/)
4. How to Configure Your SFTP Client


[ftp](https://docs.cpanel.net/tags/ftp/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client/#overview)

* * *

[Configure your SFTP client](https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client/#configure-your-sftp-client)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client/#overview)

* * *

[Configure your SFTP client](https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client/#configure-your-sftp-client)

* * *

## How to Configure Your SFTP Client

Last modified: _2024 November 21_

* * *

## Overview

This document details the information required to connect to your cPanel account via [SFTP (SSH File Transfer Protocol or Secure File Transfer Protocol)](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol). SFTP provides file access, transfer, and management tools that resemble FTP through a secure SSH connection. SFTP is **not** FTP over SSH. Instead, it is an entirely separate protocol.

## Configure your SFTP client

You should follow your SFTP client’s documentation to learn the specific steps to set up your SFTP client connection. If you do not have an SFTP client installed on your computer, we recommend one of the following clients:

- [Cyberduck®](https://cyberduck.io/download/)
- [CoreFTP](http://www.coreftp.com/)
- [WinSCP](https://winscp.net/)

SFTP clients typically require the following information to connect to a server:

| Item | Description | Example |
| --- | --- | --- |
| **Hostname** | The server’s hostname. | `hostname.example.com` |
| **SSH port number** | The port number on which `sshd` listens. | `22` |
| **Security** | Whether the client combines FTP and SFTP functionality. | FTP or SFTP |
| **Username** | The SSH username that the client uses to connect to the server. The username can be either of the following: <br>- A cPanel account username.<br>- The `root` user.<br>Important:<br>You **cannot** use an FTP account to connect via SFTP. | - `example`<br>- `root` |
| **Password** | The SSH user’s password. | `luggage12345` |
| **Private Key** | The SSH user’s private key. This is the absolute path to a private key on your local computer (for example, `c:\data\id_dsa`). <br>- cPanel users can generate and download a private key via cPanel’s [_SSH Access_](https://docs.cpanel.net/cpanel/security/ssh-access/) interface ( _cPanel » Home » Security » SSH Access_).<br>- The `root` user can generate and download a private key via WHM’s [_Manage root’s SSH Keys_](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/) interface ( _WHM » Home » Security Center » Manage root’s SSH Keys_).<br>Important:<br>The SSH user’s private key is encrypted. The system may prompt you to enter the key’s password when you connect via SFTP. | [Click to view…](https://docs.cpanel.net/knowledge-base/ftp/sftp-example/example.txt) |

If you cannot connect to your cPanel account via SFTP, [open a support ticket](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-open-a-technical-support-ticket/) with cPanel Technical Support.

#### Additional Documentation

* * *

- [Anonymous FTP](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)
- [FTP Accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts/)
- [FTP Connections](https://docs.cpanel.net/cpanel/files/ftp-connections/)
- [FTP Server Configuration](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/)
- [FTP Server Selection](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×