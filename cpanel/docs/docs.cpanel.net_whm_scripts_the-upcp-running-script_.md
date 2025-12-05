---
url: "https://docs.cpanel.net/whm/scripts/the-upcp-running-script/"
title: "The upcp-running Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-upcp-running-script/#main-content)

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
4. The upcp-running Script


[updates](https://docs.cpanel.net/tags/updates/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-upcp-running-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-upcp-running-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-upcp-running-script/#options)

* * *

[Returns](https://docs.cpanel.net/whm/scripts/the-upcp-running-script/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-upcp-running-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-upcp-running-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-upcp-running-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-upcp-running-script/#options)

* * *

[Returns](https://docs.cpanel.net/whm/scripts/the-upcp-running-script/#returns)

* * *

## The upcp-running Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-upcp-running-script/)

Last modified: _2021 July 20_

* * *

## Overview

The `/usr/local/cpanel/scripts/upcp-running` script returns whether the [`upcp` script](https://docs.cpanel.net/whm/scripts/the-upcp-script) is running.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/upcp-running [options]
```

### Options

| Option | Description | Example |
| --- | --- | --- |
| `--invert-exit` | Returns a non-zero error value (`-1`) if the `upcp` script is running. | `--invert-exit` |
| `--help` | Display the script’s help documentation. | `--help` |

## Returns

The script will return the following output:

- `upcp is not running.` — The `upcp` script is **not** running.

- `upcp is running.` — The `upcp` script is running.


#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The gather\_update\_log\_stats Script](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/)
- [The gather\_update\_logs\_setupcrontab Script](https://docs.cpanel.net/whm/scripts/the-gather_update_logs_setupcrontab-script/)
- [The upcp Script](https://docs.cpanel.net/whm/scripts/the-upcp-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×