---
url: "https://docs.cpanel.net/whm/scripts/the-hook-script/"
title: "The hook Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-hook-script/#main-content)

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
4. The hook Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [hooks](https://docs.cpanel.net/tags/hooks/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-hook-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-hook-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-hook-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-hook-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-hook-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-hook-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-hook-script/#options)

* * *

## The hook Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-hook-script/)

Last modified: _2022 July 28_

* * *

## Overview

The `/usr/local/cpanel/scripts/hook` script executes [standardized hooks](https://api.docs.cpanel.net/guides/guide-to-standardized-hooks/). Normally, only the system would execute these.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/hook [options]
```

### Options

Note:

For more information about each event, read our [Guide to Standardized Hooks - Hookable Events](https://api.docs.cpanel.net/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/) documentation.

The `/usr/local/cpanel/scripts/hook` script accepts the following options:

| Option | Description | Example |
| --- | --- | --- |
| `--category` | **Required** — The hook’s category. | `--category=System` |
| `--event` | **Required** — The event that triggers the hook. | `--event=upcp` |
| `--stage` | **Required** — The stage of the event. | `--stage=pre` |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The backups\_clean\_metadata\_for\_missing\_backups Script](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×