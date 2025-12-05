---
url: "https://docs.cpanel.net/whm/scripts/the-modify_packages-script/"
title: "The modify_packages Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-modify_packages-script/#main-content)

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
4. The modify\_packages Script


[packages](https://docs.cpanel.net/tags/packages/) [themes](https://docs.cpanel.net/tags/themes/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-modify_packages-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-modify_packages-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-modify_packages-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-modify_packages-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-modify_packages-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-modify_packages-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-modify_packages-script/#options)

* * *

## The modify\_packages Script

_Valid for versions 100 through the latest version_

#### Version:

#### [100](https://docs.cpanel.net/whm/scripts/the-modify_packages-script/)

Last modified: _2021 September 15_

* * *

## Overview

You can use the `/usr/local/cpanel/scripts/modify_packages` script to set existing packages to use a new cPanel theme.

Note:

To set a new theme for current cPanel accounts, use the `/usr/local/cpanel/scripts/modify_accounts` script.

## Run the script

To use this script, run the following command as the `root` user:

```bash
/usr/local/cpanel/scripts/modify_packages --theme=theme_name [options]
```

Note:

In this example, `theme_name` represents the name of the theme that you wish to set for the package.

### Options

The `/usr/local/cpanel/scripts/modify_package` script accepts the following options:

| Option | Description | Example |
| --- | --- | --- |
| `--theme` | **Required**<br> The theme name that you wish to assign to the package. Specify the `jupiter` theme or the name of another valid theme that exists on the server. | ```bash<br>/usr/local/cpanel/scripts/modify_packages –theme=jupiter<br>``` |
| `--packages` | A comma-separated list of packages that you wish to modify. | ```bash<br>/usr/local/cpanel/scripts/modify_packages –theme=jupiter –packages=my_pkg,another_pkg<br>``` |
| `--all-packages` | Update all of the packages that exist on the server. | ```bash<br>/usr/local/cpanel/scripts/modify_packages –theme=jupiter –all-packages<br>``` |

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