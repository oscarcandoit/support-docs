---
url: "https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/"
title: "How to Access the Command Line | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/#main-content)

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
3. [General Server Administration](https://docs.cpanel.net/knowledge-base/general-server-administration/)
4. How to Access the Command Line


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ssh](https://docs.cpanel.net/tags/ssh/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/#overview)

* * *

[Access the command line interface](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/#access-the-command-line-interface)

* * *

[Connect to cPanel & WHM with the CLI](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/#connect-to-cpanel--whm-with-the-cli)

* * *

[Verify your successful connection](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/#verify-your-successful-connection)

* * *

[Limitations](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/#limitations)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/#overview)

* * *

[Access the command line interface](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/#access-the-command-line-interface)

* * *

[Connect to cPanel & WHM with the CLI](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/#connect-to-cpanel--whm-with-the-cli)

* * *

[Verify your successful connection](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/#verify-your-successful-connection)

* * *

[Limitations](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/#limitations)

* * *

## How to Access the Command Line

Last modified: _2025 February 13_

* * *

## Overview

While cPanel & WHM automates many server administration tasks, familiarity with the Linux command line interface (CLI) can prove useful for both WHM and cPanel users. This documentation describes how to access the CLI.

- cPanel & WHM requires the `root` user to use [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) by default. System administrators can modify the shell program and command language for other users.
- cPanel account users can use cPanel’s [_Terminal_](https://docs.cpanel.net/cpanel/advanced/terminal-in-cpanel) interface ( _cPanel » Home » Advanced » Terminal_) to access the command line from within the interface.

  - Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager/) interface ( _WHM » Home » Packages » Feature Manager_).
- The `root` user and WHM Reseller account users can use WHM’s [_Terminal_](https://docs.cpanel.net/whm/server-configuration/terminal-in-whm) interface ( _WHM » Home » Advanced » Terminal_) to access the command line from within the interface.

  - For WHM reseller accounts, you hosting provider can enable or disable this interface for resellers in WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_).

## Access the command line interface

You can access the CLI through any of the following methods:

| Operating system | CLI application name | Access steps |
| --- | --- | --- |
| Microsoft Windows® | Command Prompt | In Windows, click _Start_ and enter `Command Prompt` in the _Search_ text box. Double-click _Command Prompt_ in the list that appears. |
| macOS® | Terminal | Click the _Applications_ icon in your macOS dock, then click the _Utilities_ icon. Click the _Terminal_ icon that appears. |
| Ubuntu® | Terminal | Press the `Ctrl`, `Alt`, and `T` keys at the same time. |

Remember:

- cPanel account users can use cPanel’s [_Terminal_](https://docs.cpanel.net/cpanel/advanced/terminal-in-cpanel) interface ( _cPanel » Home » Advanced » Terminal_) to access the command line from within the interface.

  - Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager/) interface ( _WHM » Home » Packages » Feature Manager_).
- The `root` user and WHM reseller account users can use WHM’s [_Terminal_](https://docs.cpanel.net/whm/server-configuration/terminal-in-whm) interface ( _WHM » Home » Advanced » Terminal_) to access the command line from within the interface.

  - For WHM reseller accounts, you hosting provider can enable or disable this interface for resellers in WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_).

## Connect to cPanel & WHM with the CLI

Your CLI application opens with access to the local computer. You **must** use SSH to access the cPanel & WHM server. To do this, enter the following command in your CLI and press `Enter` to run it:

```bash
ssh username@hostname
```

In this command, `username` is your account’s username and `hostname` is the server’s hostname. For example, to log in as the `root` user on the `example.com` server, run the following command:

```bash
ssh root@example.com
```

Then, the CLI will prompt you for the account’s password. Enter it and press `Enter` to connect.

## Verify your successful connection

When you have successfully connected to your cPanel & WHM server, the CLI’s output will appear similar to the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>Last login: Fri Feb  6 12:52:33 2015 from 10.1.4.202<br>username@example [~]#<br>``` |

This output means that you can now navigate the server’s file system and run commands.

### Limitations

The commands you can run could be limited by your account’s permissions and privileges. For example, if you receive an error message that appears similar to the following example, your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) may **not** have enabled SSH privileges for your account:

```bash
Last login: Tue Nov 26 19:44:18 2024 from 10.3.5.236
Shell access is not enabled on your account!
If you need shell access please contact support.
Connection to IPADDRESS closed.
```

Because command line access (shell access) has certain security implications, many hosting providers restrict it. Contact your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) for more information.

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [How to Manage Your Hard Drive Space](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/)
- [Manage root's SSH Keys](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×

![Cookiebot session tracker icon loaded](https://imgsct.cookiebot.com/1.gif?dgi=da52fc49-8e48-42b7-9ad3-c219404f6f92)