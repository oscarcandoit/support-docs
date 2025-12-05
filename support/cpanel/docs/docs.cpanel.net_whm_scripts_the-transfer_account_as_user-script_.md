---
url: "https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/"
title: "The transfer_account_as_user Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/#main-content)

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
4. The transfer\_account\_as\_user Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [transfers](https://docs.cpanel.net/tags/transfers/) [accounts](https://docs.cpanel.net/tags/accounts/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/#options)

* * *

## The transfer\_account\_as\_user Script

_Valid for versions 94 through the latest version_

#### Version:

#### [94](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/)

Last modified: _2022 July 28_

* * *

## Overview

The `/usr/local/cpanel/scripts/transfer_account_as_user` script transfers a cPanel account from a remote (source) server to the local server. When you run the script, it authenticates as the cPanel account on the remote server.

Important:

- This script only supports password-based authentication.
- To transfer a cPanel account as the `root` user, use the [`/usr/local/cpanel/scripts/transfer_accounts_as_root`](https://docs.cpanel.net/whm/scripts/the-transfer_accounts_as_root-script) script.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/transfer_account_as_user [options]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--host` | **Required**<br> The remote (source) hostname or IP address. | `--host=example.com` |
| `--user` | **Required**<br> The name of the cPanel account to transfer from the remote server to the local server. | `--user=username` |
| `--enqueue` | Pass a parameter to the WHM API 1 [`enqueue_transfer_item`](https://api.docs.cpanel.net/openapi/whm/operation/enqueue_transfer_item/) function. You can use this option multiple times. | `--enqueue=mail_location=.local` |
| `--help` | Print the script’s help information. | `--help` |
| `--session` | Pass a parameter to the WHM API 1 function [`create_remote_user_transfer_session`](https://api.docs.cpanel.net/openapi/whm/operation/create_remote_user_transfer_session/). You can use this option multiple times. | `--session=unrestricted_restore=1` |

#### Additional Documentation

* * *

- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The modify\_accounts Script](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/)
- [The removeacct Script](https://docs.cpanel.net/whm/scripts/the-removeacct-script/)
- [The suspendacct Script](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/)
- [The transfer\_accounts\_as\_root Script](https://docs.cpanel.net/whm/scripts/the-transfer_accounts_as_root-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×