---
url: "https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/"
title: "Transfer or Restore a cPanel Account | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [Transfers](https://docs.cpanel.net/whm/transfers/)
4. Transfer or Restore a cPanel Account


[transfers](https://docs.cpanel.net/tags/transfers/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#overview)

* * *

[Archive file requirements](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#archive-file-requirements)

* * *

[Restricted Restore](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#restricted-restore)

* * *

[Warnings about the Restricted Restore feature](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#warnings-about-the-restricted-restore-feature)

* * *

[Transfer Options](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#transfer-options)

* * *

[Restore from a local cpmove file](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#restore-from-a-local-cpmove-file)

* * *

[Upload a file to restore](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#upload-a-file-to-restore)

* * *

[Transfer from Remote cPanel Account](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#transfer-from-remote-cpanel-account)

* * *

[Linked Nodes Options](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#linked-nodes-options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#overview)

* * *

[Archive file requirements](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#archive-file-requirements)

* * *

[Restricted Restore](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#restricted-restore)

* * *

[Warnings about the Restricted Restore feature](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#warnings-about-the-restricted-restore-feature)

* * *

[Transfer Options](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#transfer-options)

* * *

[Restore from a local cpmove file](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#restore-from-a-local-cpmove-file)

* * *

[Upload a file to restore](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#upload-a-file-to-restore)

* * *

[Transfer from Remote cPanel Account](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#transfer-from-remote-cpanel-account)

* * *

[Linked Nodes Options](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/#linked-nodes-options)

* * *

## Transfer or Restore a cPanel Account

![](https://docs.cpanel.net/img/whm-icons/transfer_cpanel_account.svg)

_Valid for versions 94 through the latest version_

#### Version:

#### [94](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account/)

Last modified: _2025 July 14_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Transfer or Restore a cPanel Account_ interface lets you transfer a cPanel account or restore one from an account archive file. An archive file is a cPanel account’s backup file or a [cpmove](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#cpmove) file.

Important:

- When you transfer or restore an account, make **certain** your server has at least **double** the archive file’s size available in disk space. The system requires the available disk space to extract the file.
- If you possess `root` access or privileges to the source and destination servers, use WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool) interface ( _WHM » Home » Transfers » Transfer Tool_). **Only** use the _Transfer or Restore a cPanel Account_ interface as a last resort.
- This feature does **not** transfer [Two-Factor Authentication (2FA)](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/) configuration information for an account. The user will need to reconfigure 2FA on the new server.

Warning:

Do **not** use the `skip-name-resolve` setting in your server’s MySQL® configuration. This setting **will** cause **serious** issues with server operations. If you are **not** an advanced MySQL administrator, expect issues with this setting. For example, you will see issues with account transfers and restorations. This setting will also cause issues with [phpMyAdmin](https://docs.cpanel.net/cpanel/databases/phpmyadmin).

### Archive file requirements

If you transfer or restore an account from an archive file, the file must meet certain criteria. The archive filename **must** use one of the following formats:

- `cpmove-{USER}`
- `cpmove-{USER}.tar`
- `cpmove-{USER}.tar.gz`
- `{USER}.tar`
- `{USER}.tar.gz`
- `backup-{MM.DD.YYYY}{HH-MM-SS}{USER}.tar`
- `backup-{MM.DD.YYYY}{HH-MM-SS}{USER}.tar.gz`
- `backup-{MM.DD.YYYY}_{HH-MM-SS}_{USER}.tar`
- `backup-{MM.DD.YYYY}_{HH-MM-SS}_{USER}.tar.gz`

The file must **also** reside in one of the following directories:

- `/home`
- `/home2`
- `/home3`
- `/root`
- `/usr`
- `/usr/home`
- `/web`

## Restricted Restore

Warning:

This feature is **experimental**. Do **not** consider it an effective security control. Exercise **extreme** caution when using the _Restricted Restore_ feature.

The _Restricted Restore_ feature lets the system perform extra security checks on the archive file. If part of the file has a security issue, the system will **not** restore that part of the archive file. This helps mitigate the risk of transfers from unfamiliar sources. The system enables this feature by default.

### Warnings about the Restricted Restore feature

If you use the _Restricted Restore_ feature, be advised that:

- When you restore an account with this feature, the system may leave behind unnecessary account data. This can cause conflicts and leave the account in a broken state. You must remove the account and then restore it **without** using the _Restricted Restore_ feature.
- This feature will **not** restore parked (aliased) or addon domains.
- This feature **only** allows restored accounts to use `noshell` or [`jailshell`](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell) environments. If the restored account uses another shell, the system will set the account to use `noshell` environment.
- If you use this feature to restore an account that contains PostgreSQL® databases, the target server **must** use PostgreSQL version 8.4 or later.

## Transfer Options

You can select from one of the following options:

### Restore from a local cpmove file

The _Restore from a local cpmove file_ option lets you restore an account with an existing `cpmove` file on the server.

To restore a cPanel account from a local `cpmove` file, select the _Restore from a local cpmove file_ option and perform the following steps:

1. In the _Select a File_ menu, enter the name of or select the `cpmove` file on the server to use for the restoration.

   - Check the _Overwrite if the cPanel user already exists_ setting to overwrite any cPanel accounts with the same username. This is optional.
2. In the _A records_ section, select one of the following settings:

   - _Replace All Matching A Records_ — The system will replace all instances of the source server’s IP address with the destination server’s IP address. For example, a custom [A record](https://en.wikipedia.org/wiki/List_of_DNS_record_types#A). This is the default setting.
   - _cPanel-provided A Records_ — Only replace the basic cPanel-provided A records in the cPanel account’s zone files.
3. Click _Restore_. The [_Account Restore_](https://docs.cpanel.net/whm/transfers/account-restore) interface will appear. The system begins the account restoration process. You can use this interface to monitor the restoration progress.

### Upload a file to restore

The _Upload a file to restore_ option lets you upload a `cpmove` file to the server.

To restore a cPanel account with an uploaded `cpmove` file, select the _Upload a file to restore_ option and perform the following steps:

1. In the _Upload File_ section, click _Choose File_. A new window will appear.
2. Locate and select the `cpmove` file that you want to upload to the server.

   - Check the _Overwrite if the cPanel user already exists_ setting to overwrite any cPanel accounts with the same username. This is optional.
3. In the _A records_ section, select one of the following settings:

   - _Replace All Matching A Records_ — The system will replace all instances of the source server’s IP address with the destination server’s IP address. For example, a custom [A record](https://en.wikipedia.org/wiki/List_of_DNS_record_types#A). This is the default setting.
   - _cPanel-provided A Records_ — Only replace the basic cPanel-provided A records in the cPanel account’s zone files.
4. In the _IP Address_ section, select whether to assign a dedicated IP address to the cPanel account on your server. Your server **must** have at least one available IP address to perform this action.
5. Click _Restore_. The [_Account Restore_](https://docs.cpanel.net/whm/transfers/account-restore) interface will appear. The system begins the account restoration process. You can use this interface to monitor the restoration progress.

### Transfer from Remote cPanel Account

The _Transfer from Remote cPanel Account_ option lets you transfer a cPanel account from a remote server’s archive file. To perform a remote transfer, select the _Transfer from Remote cPanel Account_ option and perform the following steps:

1. In the _Remote Server_ section, enter the server’s IP address or hostname. If you use a hostname, you must include a valid top level domain (TLD) in the domain’s name.
2. In the _Remote username_ section, enter cPanel account’s username on the remote server.
3. In the _Remote password_ section, enter the cPanel account’s password on the remote server.
4. In the _IP Address_ section, select whether to assign a dedicated IP address to the cPanel account on your server. Your server **must** have at least one available IP address to assign a dedicated IP address.
5. Click _Transfer_. The [_Remote User Account Transfer_](https://docs.cpanel.net/whm/transfers/account-transfer) interface will appear. The system begins the account restoration process. You can use this interface to monitor the restoration progress.

## Linked Nodes Options

Important:

The _Linked Nodes Options_ section is **only** available if your server uses cPanel & WHM linked server nodes.

If your server uses [linked cPanel & WHM server nodes](https://docs.cpanel.net/whm/server-configuration/link-server-nodes), the _Linked Nodes Options_ section lets you link the cPanel account to a child node. You can select from the following settings:

- _Use the archive file’s stored configuration_ — This setting uses an archive file’s stored configuration. If the file indicates the use of one of the local server’s linked cPanel & WHM server nodes, the system will attempt to use that linked node. Otherwise, the account restores to the local server.
- _Use only this server. Transfer or restore locally_ — This setting will transfer or restore the account to the local server.
- _example-alias (servernode.example.com)_ — The alias and hostname of a [linked cPanel & WHM server node](https://docs.cpanel.net/whm/server-configuration/link-server-nodes). This will transfer or restore the account to the selected cPanel & WHM server node.

#### Additional Documentation

* * *

- [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool/)
- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [Convert Addon Domain to Account](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/)
- [Review Transfers and Restores](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×