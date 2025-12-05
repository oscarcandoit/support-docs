---
url: "https://docs.cpanel.net/whm/scripts/the-removeacct-script/"
title: "The removeacct Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-removeacct-script/#main-content)

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
4. The removeacct Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [accounts](https://docs.cpanel.net/tags/accounts/) [accounttermination](https://docs.cpanel.net/tags/accounttermination/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-removeacct-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-removeacct-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-removeacct-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-removeacct-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-removeacct-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-removeacct-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-removeacct-script/#options)

* * *

## The removeacct Script

_Valid for versions 96 through the latest version_

#### Version:

#### [96](https://docs.cpanel.net/whm/scripts/the-removeacct-script/)

Last modified: _2021 February 18_

* * *

## Overview

The `/usr/local/cpanel/scripts/removeacct` script terminates a cPanel account from the command line. You can also use WHM’s [_Terminate Accounts_](https://docs.cpanel.net/whm/account-functions/terminate-accounts/) interface ( _WHM » Home » Multi Account Functions » Terminate Accounts_) to terminate an account.

Warning:

- This script removes **all** of the information for an account. Make **certain** that you wish to completely remove the account from your server before you run this script.
- After you use this script to terminate an account, you **cannot** recreate the account immediately (for example, to restore the account from a backup). A short delay occurs while the system removes the account’s MySQL® users.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/removeacct [account] [options]
```

### Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `account` | **Required.**<br> The cPanel account that you want to terminate. | `username` |
| `--child-ok` | Force the script to terminate a [distributed cPanel account](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#distributed-cpanel-account) via a [child node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#child-node). <br>Warning:<br>You should **always** terminate accounts from the [parent node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#parent-node). **Only** use this option in an emergency. | `--child-ok` |
| `--force` | Skip the script’s confirmation prompt and terminate the account. | `--force` |
| `--keep-remote-databases` | Keep the account’s remote databases and users on the server after account termination, if any exist. | `--keep-remote-databases` |
| `--keepdns` | Keep the account’s zone files on the DNS server after account termination. | `--keepdns` |
| `--help` | Display the script’s help documentation. | `--help` |

#### Additional Documentation

* * *

- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The modify\_accounts Script](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/)
- [The suspendacct Script](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/)
- [The sync\_child\_accounts Script](https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script/)
- [The transfer\_account\_as\_user Script](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×