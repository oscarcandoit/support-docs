---
url: "https://docs.cpanel.net/whm/scripts/the-upcp-script/"
title: "The upcp Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-upcp-script/#main-content)

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
4. The upcp Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [updates](https://docs.cpanel.net/tags/updates/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-upcp-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-upcp-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-upcp-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-upcp-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-upcp-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-upcp-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-upcp-script/#options)

* * *

## The upcp Script

_Valid for versions 84 through the latest version_

#### Version:

#### [84](https://docs.cpanel.net/whm/scripts/the-upcp-script/)

Last modified: _2022 July 28_

* * *

## Overview

The `/usr/local/cpanel/scripts/upcp` script lets you update cPanel & WHM on the command line.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/upcp [options]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `bg` | Run the update as a background process. The system stores the output of the update in a log file in the `/var/cpanel/updatelogs` directory. The file uses the `update.DATE` format, where `DATE` is a timestamp, in [Unix time format](https://en.wikipedia.org/wiki/Unix_time). | `--bg` |
| `cron` | Configure the system to update using the settings in the `/etc/cpupdate.conf` file. For more information, read our [cPanel & WHM Update Configuration File](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf) documentation. | `--cron` |
| `force` | Force the system to reinstall **all** files, even if the system is up to date. <br>Note:<br>You **cannot** pass this option with the `sync` option. | `--force` |
| `log` | Override the default log file and use log file in the defined file path. | `--log=/path/to/file` |
| `sync` | Update the system’s installed version of cPanel & WHM and do **not** download a newer version. This option ensures that the current version installed has the correct files. <br>Note:<br>You **cannot** pass this option with the `force` option. | `--sync` |
| `help` | Displays additional information. | `--help` |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The gather\_update\_log\_stats Script](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/)
- [The gather\_update\_logs\_setupcrontab Script](https://docs.cpanel.net/whm/scripts/the-gather_update_logs_setupcrontab-script/)
- [The upcp-running Script](https://docs.cpanel.net/whm/scripts/the-upcp-running-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×