---
url: "https://docs.cpanel.net/whm/scripts/the-slurp_exim_mainlog-script/"
title: "The slurp_exim_mainlog Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-slurp_exim_mainlog-script/#main-content)

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
4. The slurp\_exim\_mainlog Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [exim](https://docs.cpanel.net/tags/exim/) [logs](https://docs.cpanel.net/tags/logs/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-slurp_exim_mainlog-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-slurp_exim_mainlog-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-slurp_exim_mainlog-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-slurp_exim_mainlog-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-slurp_exim_mainlog-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-slurp_exim_mainlog-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-slurp_exim_mainlog-script/#options)

* * *

## The slurp\_exim\_mainlog Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-slurp_exim_mainlog-script/)

Last modified: _2022 March 11_

* * *

## Overview

The `/usr/local/cpanel/scripts/slurp_exim_mainlog` script imports all unarchived Exim `exim_mainlog` files in the `/var/log/` directory into the `eximstats` database. Imports of the `exim_mainlog` files can only occur once every seven days. The script only imports files newer than Exim’s log retention setting. The default for this setting is 90 days.

Note:

This script ignores files without the `.gz` file extension.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/slurp_exim_mainlog [options]
```

## Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `--reimport` | Import the `exim_mainlog` files after a seven day waiting period. Use this option when you rebuild the `eximstats` database. | `--reimport` |
| `--force` | Run the script regardless of the seven day waiting period. | `--force` |
| `--help` | Display the script’s help documentation. | `--help` |

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