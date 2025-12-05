---
url: "https://docs.cpanel.net/whm/scripts/the-transfer_accounts_as_root-script/"
title: "The transfer_accounts_as_root Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-transfer_accounts_as_root-script/#main-content)

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
3. [Scripts](https://docs.cpanel.net/whm/scripts/)
4. The transfer\_accounts\_as\_root Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [transfers](https://docs.cpanel.net/tags/transfers/) [accounts](https://docs.cpanel.net/tags/accounts/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-transfer_accounts_as_root-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-transfer_accounts_as_root-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-transfer_accounts_as_root-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-transfer_accounts_as_root-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-transfer_accounts_as_root-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-transfer_accounts_as_root-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-transfer_accounts_as_root-script/#options)

* * *

## The transfer\_accounts\_as\_root Script

_Valid for versions 94 through the latest version_

#### Version:

#### [94](https://docs.cpanel.net/whm/scripts/the-transfer_accounts_as_root-script/)

Last modified: _2022 July 28_

* * *

## Overview

The `/usr/local/cpanel/scripts/transfer_accounts_as_root` script transfers one or more cPanel accounts from a remote (source) server to the local server.

Important:

- When using this script, the system **disables** the [_Live Transfer_](https://docs.cpanel.net/whm/transfers/transfer-tool#live-transfer) feature in WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool) interface ( _WHM » Home » Transfers » Transfer Tool_) by default. To enable the _Live Transfers_ feature, use the `--enqueue=live_transfer=1` option with the script.
- To transfer as a authenticated cPanel account on the remote server, use the [`/usr/local/cpanel/scripts/transfer_account_as_user`](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script) script.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/transfer_accounts_as_root [options]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--host` | **Required**<br> The remote (source) hostname or IP address. | `--host=example.com` |
| `--user` | **Required**<br> The name of the cPanel account to transfer from the remote server to the local server. <br>Warning:<br>Make certain that you input the correct username. The script will enqueue a transfer for a cPanel account that does not exist on the source server. | `--user=username` |
| `--sshkey` | The `root` user’s SSH key to log in to the remote server. The system prompts for the SSH key’s passphrase via [STDIN](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)). <br>Note:<br>If you do **not** use this option, the system will prompt for the `root` user password via STDIN. | `--sshkey=12345ABCDE` |
| `--enqueue` | Pass a parameter to the WHM API 1 [`enqueue_transfer_item`](https://api.docs.cpanel.net/openapi/whm/operation/enqueue_transfer_item/) function. You can use this option multiple times. | `--enqueue=live_transfer=1` |
| `--help` | Print the script’s help information. | `--help` |
| `--session` | Pass a parameter to the WHM API 1 function [`create_remote_root_transfer_session`](https://api.docs.cpanel.net/openapi/whm/operation/create_remote_root_transfer_session/). You can enter this option multiple times. | `--session=comm_transport=ssh` |

#### Additional Documentation

* * *

- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The modify\_accounts Script](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/)
- [The removeacct Script](https://docs.cpanel.net/whm/scripts/the-removeacct-script/)
- [The suspendacct Script](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/)
- [The transfer\_account\_as\_user Script](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×