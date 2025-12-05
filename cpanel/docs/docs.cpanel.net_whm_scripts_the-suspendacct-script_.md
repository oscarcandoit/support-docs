---
url: "https://docs.cpanel.net/whm/scripts/the-suspendacct-script/"
title: "The suspendacct Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/#main-content)

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
4. The suspendacct Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [accounts](https://docs.cpanel.net/tags/accounts/) [accountsuspension](https://docs.cpanel.net/tags/accountsuspension/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/#example)

* * *

## The suspendacct Script

_Valid for versions 96 through the latest version_

#### Version:

#### [96](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/)

Last modified: _2024 August 6_

* * *

## Overview

The `/usr/local/cpanel/scripts/suspendacct` script lets you to suspend **one** cPanel account at a time from the command line. You can also use WHM’s [_Manage Account Suspension_](https://docs.cpanel.net/whm/account-functions/manage-account-suspension) interface ( _WHM » Home » Account Functions » Manage Account Suspension_) to suspend an account.

For more information about the effects of account suspension, read our [What Happens When You Suspend an Account](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account) documentation.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/suspendacct [account] [options]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `account` | **Required.**<br> The cPanel account that you want to suspend. <br> You can **only** suspend one account at a time with this script. If you enter multiple accounts, the script will **only** suspend the first account. <br>Important:<br>You **cannot** suspend a [reserved username](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username#reserved-usernames) (for example, `root` or `nobody`). | `username` |
| `reason` | The reason for suspension, surrounded by quotes. The script adds the given reason to the account’s `/var/cpanel/suspended/username` file, where `username` is the account’s username. | `"Failure to pay monthly fee."` |
| `disallow` | Whether to allow only the `root` user to unsuspend the account. <br>Important:<br>You **must** include the `reason` option if you wish to use the `disallow` option. | `disallow` |
| `--child-ok` | Force the script to suspend a [distributed cPanel account](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#distributed-cpanel-account) via a [child node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#child-node). <br>Warning:<br>You should **always** suspend accounts from the [parent node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#parent-node). **Only** use this option in an emergency. | `--child-ok` |
| `--force` | Force the script to suspend the account, even if it is a suspended account. | `--force` |
| `--leave-ftp-accts-enabled` | Whether to skip suspension of the account’s FTP accounts. <br>Warning:<br>Enabling this option may cause security issues. We **strongly** recommend that you do **not** use it. | `--leave-ftp-accts-enabled` |
| `--help` | Display the help text for this script. | `--help` |

### Example

The following example suspends the `username` account and skips suspension of the account’s FTP accounts:

```bash
/usr/local/cpanel/scripts/suspendacct username "Failure to pay monthly fee." --leave-ftp-accts-enabled
```

The script’s output will resemble the following:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```bash<br>Changing Shell to /bin/false...Done<br>Locking Password...Done<br>Suspending email account logins for example.com .... Done<br>Suspending mysql users<br>Suspending websites...<br>Suspending outgoing email....Done<br>username's account has been suspended<br>``` |

#### Additional Documentation

* * *

- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The modify\_accounts Script](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/)
- [The removeacct Script](https://docs.cpanel.net/whm/scripts/the-removeacct-script/)
- [The sync\_child\_accounts Script](https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script/)
- [The transfer\_account\_as\_user Script](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×