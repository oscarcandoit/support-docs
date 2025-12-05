---
url: "https://docs.cpanel.net/whm/scripts/the-unsuspendacct-script/"
title: "The unsuspendacct Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-unsuspendacct-script/#main-content)

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
4. The unsuspendacct Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [accounts](https://docs.cpanel.net/tags/accounts/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-unsuspendacct-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-unsuspendacct-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-unsuspendacct-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-unsuspendacct-script/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-unsuspendacct-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-unsuspendacct-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-unsuspendacct-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-unsuspendacct-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-unsuspendacct-script/#example)

* * *

## The unsuspendacct Script

_Valid for versions 96 through the latest version_

#### Version:

#### [96](https://docs.cpanel.net/whm/scripts/the-unsuspendacct-script/)

Last modified: _2024 March 27_

* * *

## Overview

The `/usr/local/cpanel/scripts/unsuspendacct` script lets you unsuspend an account from the command line. You can also use WHM’s [_Manage Account Suspension_](https://docs.cpanel.net/whm/account-functions/manage-account-suspension) interface ( _WHM » Home » Account Functions » Manage Account Suspension_) to unsuspend an account.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/unsuspendacct [account] [options]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `account` | **Required.**<br> The cPanel account that you wish to unsuspend. | `username` |
| `--child-ok` | Force the script to unsuspend a [distributed cPanel account](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#distributed-cpanel-account) via a [child node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#child-node). <br>Warning:<br>You should **always** unsuspend accounts from the [parent node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#parent-node). **Only** use this option in an emergency. | `--child-ok` |
| `--retain-service-proxies` | Keep the account’s current [service proxy](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#service-proxying) settings. If you do **not** use this option, the script disables service proxying by default. | `--retain-service-proxies` |
| `--help` | Display the help text for this script. | `--help` |

### Example

The following example unsuspends the `username` account and retains its service proxies:

```bash
/usr/local/cpanel/scripts/unsuspendacct username --retain-service-proxies
```

When the script succeeds, the output will resemble the following:

```bash
Unsuspending outgoing email....Done
Unsuspending email account logins for example.com .... Done
Unsuspending websites...
Unsuspending FTP accounts...
username's account is now active
Unsuspending mysql users
Keep service proxying settings for this account...Done
username's account has been unsuspended
```

#### Additional Documentation

* * *

- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The modify\_accounts Script](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/)
- [The removeacct Script](https://docs.cpanel.net/whm/scripts/the-removeacct-script/)
- [The suspendacct Script](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/)
- [The sync\_child\_accounts Script](https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×