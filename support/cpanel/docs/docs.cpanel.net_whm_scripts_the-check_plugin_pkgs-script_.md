---
url: "https://docs.cpanel.net/whm/scripts/the-check_plugin_pkgs-script/"
title: "The check_plugin_pkgs Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-check_plugin_pkgs-script/#main-content)

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
4. The check\_plugin\_pkgs Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [cpanelplugins](https://docs.cpanel.net/tags/cpanelplugins/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-check_plugin_pkgs-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-check_plugin_pkgs-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-check_plugin_pkgs-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-check_plugin_pkgs-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-check_plugin_pkgs-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-check_plugin_pkgs-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-check_plugin_pkgs-script/#options)

* * *

## The check\_plugin\_pkgs Script

_Valid for versions 112 through the latest version_

#### Version:

#### [112](https://docs.cpanel.net/whm/scripts/the-check_plugin_pkgs-script/)

Last modified: _2023 March 15_

* * *

## Overview

This script verifies the integrity of installed plugin packages. If it finds an altered package, the script will replace it with an unaltered version. If the package is **not** installed, the script will install it.

Note:

This script runs as part of the nightly maintenance script.

## Run the script

To use this script on the command line, run the following command as the `root` user:

```bash
/usr/local/cpanel/scripts/check_plugin_pkgs [options]
```

## Options

| Options | Description | Example |
| --- | --- | --- |
| `--pkg` | **Required**. <br> The plugin package that you wish to check. <br>Note:<br>To check more than one plugin package, pass this option multiple times. | `--pkg=plugin1 --pkg=plugin2` |
| `--help` | Display the script’s help text. | `--help` |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The install\_plugin Script](https://docs.cpanel.net/whm/scripts/the-install_plugin-script/)
- [The uninstall\_plugin Script](https://docs.cpanel.net/whm/scripts/the-uninstall_plugin-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×