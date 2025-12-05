---
url: "https://docs.cpanel.net/whm/scripts/the-post_snapshot-script/"
title: "The post_snapshot Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script/#main-content)

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
4. The post\_snapshot Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [images](https://docs.cpanel.net/tags/images/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script/#options)

* * *

## The post\_snapshot Script

_Valid for versions 106 through the latest version_

#### Version:

#### [106](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script/)

Last modified: _2022 June 2_

* * *

## Overview

The `/usr/local/cpanel/scripts/post_snapshot` script updates configurations on a system created from an image. This script automatically runs upon the first boot for images created using the [`snapshot_prep` script](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script).

Note:

In most cases, this script is run automatically.

For images created using the `--no-post-service` option for the [`snapshot_prep` script](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script), you must run this script manually.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/post_snapshot [options]
```

## Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `--help` | Display the script’s help documentation. | `--help` |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The snapshot\_prep Script](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×