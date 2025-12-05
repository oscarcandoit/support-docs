---
url: "https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/"
title: "The modify_accounts Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/#main-content)

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
4. The modify\_accounts Script


[accounts](https://docs.cpanel.net/tags/accounts/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/#options)

* * *

## The modify\_accounts Script

_Valid for versions 104 through the latest version_

#### Version:

#### [104](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/)

Last modified: _2022 January 21_

* * *

## Overview

You can use the `/usr/local/cpanel/usr/local/cpanel/scripts/modify_accounts` script to set existing cPanel accounts to use a new theme.

## Run the script

To use this script, run the following command as the `root` user:

```bash
/usr/local/cpanel/scripts/modify_accounts --theme=theme_name [options]
```

Note:

In this example, `theme_name` represents the name of the theme to which you wish to set for the package.

### Options

The `/usr/local/cpanel/scripts/modify_accounts` script accepts the following arguments:

| Options | Description | Example |
| --- | --- | --- |
| `--theme` | **Required**<br>The theme name that you wish to assign to the account. Specify the `jupiter` theme or the name of another valid theme that exists on the server. | ```bash<br>/usr/local/cpanel/scripts/modify_accounts –theme=jupiter<br>``` |
| `--users` | A comma-separated list of the cPanel accounts that you wish to modify. | ```bash<br>/usr/local/cpanel/scripts/modify_accounts –theme=jupiter –users=user1,user2<br>``` |
| `--all-users` | Update all of the cPanel accounts that exist on the server. | ```bash<br>/usr/local/cpanel/scripts/modify_accounts –theme=jupiter –all-users<br>``` |
| `--all-users-from-reseller` | Update all of the cPanel accounts that a specific reseller owns. <br>Note:<br>This argument only accepts one reseller value. | ```bash<br>/usr/local/cpanel/scripts/modify_accounts –theme=jupiter –all-users-from-reseller=reseller<br>``` |

#### Additional Documentation

* * *

- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The removeacct Script](https://docs.cpanel.net/whm/scripts/the-removeacct-script/)
- [The suspendacct Script](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/)
- [The sync\_child\_accounts Script](https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script/)
- [The transfer\_account\_as\_user Script](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×