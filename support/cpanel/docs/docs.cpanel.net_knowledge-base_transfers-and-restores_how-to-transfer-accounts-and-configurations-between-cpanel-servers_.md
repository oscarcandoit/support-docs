---
url: "https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/"
title: "How to Transfer Accounts and Configurations Between cPanel & WHM Servers | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#main-content)

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
4. How to Transfer Accounts and Configurations Between cPanel & WHM Servers


[whmui](https://docs.cpanel.net/tags/whmui/) [transfers](https://docs.cpanel.net/tags/transfers/) [accounts](https://docs.cpanel.net/tags/accounts/) [restore](https://docs.cpanel.net/tags/restore/) [backups](https://docs.cpanel.net/tags/backups/)

#### Table of Contents

[Introduction](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#introduction)

* * *

[Accounts](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#accounts)

* * *

[Full migration method](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#full-migration-method)

* * *

[Transfer Tool method](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#transfer-tool-method)

* * *

[Remote account transfer](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#remote-account-transfer)

* * *

[Configurations](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#configurations)

* * *

[IP Addresses](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#ip-addresses)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#table-of-contents-toggle)

[Introduction](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#introduction)

* * *

[Accounts](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#accounts)

* * *

[Full migration method](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#full-migration-method)

* * *

[Transfer Tool method](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#transfer-tool-method)

* * *

[Remote account transfer](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#remote-account-transfer)

* * *

[Configurations](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#configurations)

* * *

[IP Addresses](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/#ip-addresses)

* * *

## How to Transfer Accounts and Configurations Between cPanel & WHM Servers

_Valid for versions 88 through the latest version_

#### Version:

#### [88](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/)

Last modified: _2025 July 14_

* * *

## Introduction

This document lists methods that you can use to transfer accounts and configurations between cPanel & WHM servers.

Important:

We do **not** recommend that you transfer accounts with calendars or contacts data from a server that runs cPanel & WHM version 120 or later to a server that runs cPanel & WHM version 118 or earlier. If you do this, you will need to manually copy and import the accounts’ calendars and contacts data once the transfer has completed.

## Accounts

You can transfer accounts with the following methods:

### Full migration method

To transfer all of the cPanel accounts from one server to a new server as part of a full server migration, read our [How to Move All cPanel Accounts from One Server to Another](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another) documentation. This method also lets you migrate your SSL certificates and main server IP address to the new server.

### Transfer Tool method

To transfer multiple accounts from one server to another, use WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool) interface ( _WHM » Home » Transfers » Transfer Tool_). This interface copies multiple accounts from a remote server to your cPanel & WHM server. You can also use this interface to select multiple configuration options to transfer along with the accounts.

Note:

This method **requires** that you possess SSH access and `root`-level privileges through the `su` or `sudo` commands on the remote server.

### Remote account transfer

You can use WHM’s [_Transfer or Restore a cPanel Account_](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account) interface ( _WHM » Home » Transfers » Transfer or Restore a cPanel Account_) to transfer individual accounts from one server to another.

## Configurations

To transfer configurations from one server to another, use WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool) interface ( _WHM » Home » Transfers » Transfer Tool_). This interface copies multiple accounts from a remote server to your cPanel & WHM server. You can also use this interface to select multiple configuration options to transfer along with the accounts.

Note:

This method **requires** that you possess SSH access and `root`-level privileges through the `su` or `sudo` commands on the remote server.

## IP Addresses

To transfer IP addresses from one server to another, use WHM’s [_IP Migration Wizard_](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard) interface ( _WHM » Home » IP Function » IP Migration Wizard_).

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [File and Directory Restoration for WHM](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/)
- [How to Move All cPanel Accounts from One Server to Another](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/)
- [How to Restore Your cPanel Account - A Guide for New System Administrators](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×