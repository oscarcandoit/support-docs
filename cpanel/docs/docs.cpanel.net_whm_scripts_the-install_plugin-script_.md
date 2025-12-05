---
url: "https://docs.cpanel.net/whm/scripts/the-install_plugin-script/"
title: "The install_plugin Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-install_plugin-script/#main-content)

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
4. The install\_plugin Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [cpanelplugins](https://docs.cpanel.net/tags/cpanelplugins/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-install_plugin-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-install_plugin-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-install_plugin-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-install_plugin-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-install_plugin-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-install_plugin-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-install_plugin-script/#options)

* * *

## The install\_plugin Script

_Valid for versions 100 through the latest version_

#### Version:

#### [100](https://docs.cpanel.net/whm/scripts/the-install_plugin-script/)

Last modified: _2022 July 28_

* * *

## Overview

The `/usr/local/cpanel/scripts/install_plugin` script installs a cPanel plugin to a cPanel theme. When you run this script, it uses the archive file’s `install.json` file to install a plugin to the [`dynamicui.conf` file](https://api.docs.cpanel.net/guides/guide-to-whm-dynamicui-files/). The cPanel _Home_ interface uses the `dynamicui.conf` file to display icons and groups.

To uninstall a plugin, use the [`/usr/local/cpanel/scripts/uninstall_plugin`](https://docs.cpanel.net/whm/scripts/the-uninstall_plugin-script) script.

Important:

- Only the `root` user can run this script.
- If the plugin installation file does **not** contain a `install.json` file, the installation process will fail.
- This script does **not** extract the plugin from the archive file.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/install_plugin /filepath [options]
```

## Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `filepath` | **Required.**<br> The cPanel plugin’s installation archive file. The file must be one of the following formats: <br>- `.tar.gz`<br>- `.bzip2`<br>- `.zip`<br>- An uncompressed directory. | `/path/to/plugin.tar.gz` |
| `--theme` | The cPanel theme to install the plugin to. This option defaults to the `jupiter` theme. | `--theme=jupiter` |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The check\_plugin\_pkgs Script](https://docs.cpanel.net/whm/scripts/the-check_plugin_pkgs-script/)
- [The uninstall\_plugin Script](https://docs.cpanel.net/whm/scripts/the-uninstall_plugin-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×