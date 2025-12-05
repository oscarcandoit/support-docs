---
url: "https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/"
title: "How to Upload Files with FTP | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/#main-content)

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
4. How to Upload Files with FTP


[ftp](https://docs.cpanel.net/tags/ftp/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/#overview)

* * *

[Connect to an FTP server with a third-party client](https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/#connect-to-an-ftp-server-with-a-third-party-client)

* * *

[Connect to an FTP server from the command line](https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/#connect-to-an-ftp-server-from-the-command-line)

* * *

[Upload a file to an FTP server from the command line](https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/#upload-a-file-to-an-ftp-server-from-the-command-line)

* * *

[Download a file from an FTP server from the command line](https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/#download-a-file-from-an-ftp-server-from-the-command-line)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/#overview)

* * *

[Connect to an FTP server with a third-party client](https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/#connect-to-an-ftp-server-with-a-third-party-client)

* * *

[Connect to an FTP server from the command line](https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/#connect-to-an-ftp-server-from-the-command-line)

* * *

[Upload a file to an FTP server from the command line](https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/#upload-a-file-to-an-ftp-server-from-the-command-line)

* * *

[Download a file from an FTP server from the command line](https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/#download-a-file-from-an-ftp-server-from-the-command-line)

* * *

## How to Upload Files with FTP

Last modified: _2022 December 1_

* * *

## Overview

This document explains how to use the command-line interface (CLI) or a third-party client to store files on your File Transfer Protocol (FTP) server.

## Connect to an FTP server with a third-party client

If you open another program to connect to your FTP server, you are using a third-party FTP client. To connect to your FTP server with a third-party client, follow these steps:

1. Create the FTP account in cPanel’s [_FTP Accounts_](https://docs.cpanel.net/cpanel/files/ftp-accounts/) interface ( _cPanel » Home » Files » FTP Accounts_).
2. Click [_Configure FTP Client_](https://docs.cpanel.net/cpanel/files/ftp-accounts/#configure-ftp-client) next to the FTP account you want to connect to your third-party client.
3. If we provide a configuration file for your third-party client, like [Cyberduck®](https://trac.cyberduck.io/wiki/help/) or [WinSCP](https://winscp.net/docs/), download it from the _Configuration Files_ section and open it on your local machine to configure your third-party client. If we do not provide a configuration file, you must configure the client manually.

Third-party clients have their own documentation for manual configuration, but will require the following information:

- Server Protocol: FTP (File Transfer Protocol).
- Server Name: Either your primary domain name or your site’s IP address.
- User/Username: Your account name.






Important:





The username formatting must **exactly** match the information in the _FTP Accounts_ interface ( _cPanel » Home » Files » FTP Accounts_) for the third-party client to work. For example, if `example.com` is your primary domain name, your username will be formatted `account-name@example.com`. You can copy your formatted username from the _Manual Settings_ section of the [_Configure FTP Client_](https://docs.cpanel.net/cpanel/files/ftp-accounts/#configure-ftp-client) section.

- Password: Your FTP password.






Note:





The FTP server’s port number defaults to 21, but is not always required. You can verify your FTP server’s port number in the _Manual Settings_ section of the [_Configure FTP Client_](https://docs.cpanel.net/cpanel/files/ftp-accounts/#configure-ftp-client) section in cPanel’s _FTP Accounts_ interface ( _cPanel » Home » Files » FTP Accounts_).


## Connect to an FTP server from the command line

To connect to the FTP server from the CLI, follow these steps:

1. Open a CLI window on your local machine.
2. Enter the `ftp` command to open the File Transfer Protocol.
3. Enter `open` to open a connection between your local machine and your FTP server. Your CLI window will look something like this:


```bash
[example@0.0.0.0 ~]: ftp
ftp> open
(to)
```

4. In the `(to)` prompt, enter your server’s IP address. Depending on which FTP daemon you are using, your CLI window will now look something like this:


```bash
[example@0.0.0.0 ~]: ftp
ftp> open
(to) 0.0.0.0
220———- Welcome to Pure-FTPd [privsep] [TLS] ———-
220-You are user number 1 of 50 allowed.
220-Local time is now 15:34. Server port: 21.
220-This is a private system - No anonymous login
220-IPv6 connections are also welcome on this server.
220 You will be disconnected after 15 minutes of inactivity.
Name (0.0.0.0:example):
```

5. Enter your FTP account’s username into the `Name(0.0.0.0:example)` prompt.
6. Enter your FTP account’s password into the `Password:` prompt.

If you have entered the correct login information, the system will return a message similar to the following:

```bash
230 OK. Current restricted directory is /.
```

Important:

If you have entered the incorrect login information, the system will return a message similar to the following:

```bash
530 Login authentication failed
```

### Upload a file to an FTP server from the command line

To upload a file to your FTP server using the CLI, follow the documentation above to [connect to an FTP server from the command line](https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/#connect-to-an-ftp-server-from-the-command-line) and then:

- If you are not in the file’s desired **destination** folder, navigate there using the `cd` command. For example, to move a file to a server’s `public_html` folder so that it is visible to the site users, `cd` to `public_html`.
- Use the `put` command to transfer the file from its current path. For example, to move the `finalized-doc.txt` file from the local machine’s `unfinished-documents` folder to your FTP server’s `public_html` folder to make it visible to site users, enter:


```bash
ftp> cd public_html
ftp> put localmachine:\unfinished-documents\finalized-doc.txt
```





Important:





Your site’s root directory is set to the `public_html` folder. Uploading files into the `/` directory will **not** let site users view these files. Instead, to make files visible to your site’s users, you **must**`put` these files into the `public_html` folder.


### Download a file from an FTP server from the command line

To download a file to your FTP server using the CLI, follow the documentation above to [connect to an FTP server from the command line](https://docs.cpanel.net/knowledge-base/ftp/how-to-upload-files-with-ftp/#connect-to-an-ftp-server-from-the-command-line) and then:

- If you are not in the file’s current location on the FTP server, navigate there using the `cd` command. For example, files that are visible to site users will be stored in the `public_html` folder, so to download a file from there, `cd` to `public_html`.
- Use the `get` command to transfer the file from its current path. For example, to download the `document-with-a-mistake.txt` file from the FTP server’s `finalized-documents` subfolder in the `public_html` folder, enter:


```bash
ftp> cd public_html/finalized-documents
ftp> get document-with-a-mistake.txt
```


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