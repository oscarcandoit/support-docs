---
url: "https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/"
title: "The migrate_legacy_wordpress_to_modern_wordpress Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/#main-content)

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
4. The migrate\_legacy\_wordpress\_to\_modern\_wordpress Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [wordpress](https://docs.cpanel.net/tags/wordpress/) [cpaddons](https://docs.cpanel.net/tags/cpaddons/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/#run-the-script)

* * *

[User and installation options](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/#user-and-installation-options)

* * *

[Other options](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/#other-options)

* * *

[Examples](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/#examples)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/#run-the-script)

* * *

[User and installation options](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/#user-and-installation-options)

* * *

[Other options](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/#other-options)

* * *

[Examples](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/#examples)

* * *

## The migrate\_legacy\_wordpress\_to\_modern\_wordpress Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/)

Last modified: _2021 July 28_

* * *

## Overview

The `/usr/local/cpanel/scripts/migrate_legacy_wordpress_to_modern_wordpress` script converts legacy [cPAddon WordPress® installations](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software) to use the RPM-based WordPress cPAddon. When you run this script, the system creates a log file in the `/var/cpanel/logs/migrate_legacy_wordpress_to_modern_wordpress` directory.

Important:

- This script is **only** available to the `root` user.
- This script is only available on systems with the [cPAddon WordPress](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software) installed.

The script performs the following actions for each specified WordPress installation:

1. Scans the cPanel account’s home directory for the `cPanel::Blogs::WordPress.yaml` file.
2. Verifies that the WordPress version is greater than 3.7.
3. Removes the `cpaddons-site-software` WordPress plugin.
4. Updates the WordPress installation to use the RPM-based WordPress cPAddon.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/migrate_legacy_wordpress_to_modern_wordpress [--user] [--instance] [options]
```

### User and installation options

Use the following options to target the installations to convert:

| Option | Description | Example |
| --- | --- | --- |
| `--all` | **Required**. <br> Convert all legacy cPAddon WordPress installations to the RPM-based WordPress cPAddon. <br>Note:<br>You cannot call both the `--all` and `--user` options. | `--all` |
| `--user` | **Required**. <br> Convert all legacy cPAddon WordPress installations for a cPanel account to the RPM-based WordPress cPAddon. <br>Note:<br>- You cannot call both the \`--all\` and \`--user\` options.<br>- Use this option multiple times for more than one account. | `--user username` |
| `--instance` | Convert a legacy cPAddon WordPress installation for the specified cPanel account instance to the RPM-based WordPress cPAddon. The instance file resides in the cPanel account’s home directory. <br>Note:<br>- This option \*\*requires\*\* the \`user\` option.<br>- This option \*\*only\*\* accepts a single cPanel account. You cannot call this option with multiple \`user\` options.<br>- Use this option multiple times for more than one instance file for a cPanel account. | `--instance /home/username/.cpaddons/cPanel::Blogs::WordPress.1.yaml` |

### Other options

This script also accepts the following options:

| Option | Description | Example |
| --- | --- | --- |
| `--no-color` | Remove the colorized script output. | `--no-color` |
| `--dryrun` | Only report information about the currently installed legacy WordPress installations. | `--dryrun` |
| `--help` | Display the script’s help documentation. | `--help` |
| `--verbose` | Return additional information in the script’s output. | `--verbose` |

### Examples

To convert all legacy WordPress sites on the server, run the following command:

```bash
/usr/local/cpanel/scripts/migrate_legacy_wordpress_to_modern_wordpress --all
```

To convert all the legacy WordPress sites for the `username` cPanel account, run the following command:

```bash
/usr/local/cpanel/scripts/migrate_legacy_wordpress_to_modern_wordpress --user username
```

To convert all the legacy WordPress sites for the `username`, `username1`, and `username2` cPanel accounts, run the following command:

```bash
/usr/local/cpanel/scripts/migrate_legacy_wordpress_to_modern_wordpress --user username --user username1 --user username2
```

To convert a specific legacy WordPress site for the `username` cPanel account, run the following command:

```bash
/usr/local/cpanel/scripts/migrate_legacy_wordpress_to_modern_wordpress --user username --instance /home/username/.cpaddons/cPanel::Blogs::WordPress.1.yaml
```

To convert multiple legacy WordPress sites for the `username` cPanel account, run the following command:

```bash
/usr/local/cpanel/scripts/migrate_legacy_wordpress_to_modern_wordpress --user username --instance /home/username/.cpaddons/cPanel::Blogs::WordPress.1.yaml --instance /home/username/.cpaddons/cPanel::Blogs::WordPress.2.yaml
```

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [How to Install WordPress® With cPanel](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/)
- [WP Toolkit](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/)
- [WP Toolkit Command Line Interface](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×