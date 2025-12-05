---
url: "https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script/"
title: "The sync_child_accounts Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script/#main-content)

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
4. The sync\_child\_accounts Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [accounts](https://docs.cpanel.net/tags/accounts/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script/#options)

* * *

## The sync\_child\_accounts Script

_Valid for versions 94 through the latest version_

#### Version:

#### [94](https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script/)

Last modified: _2020 December 15_

* * *

## Overview

The `/usr/local/cpanel/scripts/sync_child_accounts` script lets you synchronize the user configuration of a [distributed cPanel account](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#distributed-cpanel-account). You can use this script when a cPanel account’s user configuration falls out of sync between the [parent node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#parent-node) and its [child nodes](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#child-node). In most cases, you should not need to run this script. However, running this script for a synchronized account will **not** make any unwanted changes to a cPanel account.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/sync_child_accounts [options]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--user` | Run the script for a distributed cPanel account. | `--user=username` |
| `--all` | Run the script for all distributed cPanel accounts. <br>Note:<br>You cannot pass both this option and the `user` option. | `--all` |
| `--help` | Print the script’s help information. | `--help` |

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