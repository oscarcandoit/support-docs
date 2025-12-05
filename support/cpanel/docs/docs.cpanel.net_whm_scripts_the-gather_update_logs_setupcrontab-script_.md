---
url: "https://docs.cpanel.net/whm/scripts/the-gather_update_logs_setupcrontab-script/"
title: "The gather_update_logs_setupcrontab Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-gather_update_logs_setupcrontab-script/#main-content)

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
4. The gather\_update\_logs\_setupcrontab Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [updates](https://docs.cpanel.net/tags/updates/) [analytics](https://docs.cpanel.net/tags/analytics/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-gather_update_logs_setupcrontab-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-gather_update_logs_setupcrontab-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-gather_update_logs_setupcrontab-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-gather_update_logs_setupcrontab-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-gather_update_logs_setupcrontab-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-gather_update_logs_setupcrontab-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-gather_update_logs_setupcrontab-script/#options)

* * *

## The gather\_update\_logs\_setupcrontab Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-gather_update_logs_setupcrontab-script/)

Last modified: _2025 June 10_

* * *

## Overview

Important:

For more information about the cPanel Analytics data that we gather and how we use it, read our [cPanel Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics) documentation and our [Server Usage Analysis Data Collection Policy](http://cpanel.com/assets/docs/legal-agreements/server-usage-analysis-data-collection-policy.html).

The `/usr/local/cpanel/scripts/gather_update_logs_setupcrontab` script schedules a cron job to run the [`gather_update_log_stats`](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script) script. The `gather_update_log_stats` script sends your server’s update logs to WebPros International, LLC for analysis.

Whenever the `gather_update_log_stats` script runs, it creates a tarball file to send. This tarball contains all of the update log data that the system stored since your last update.

- The `/var/cpanel/updatelogs` directory contains the system’s uncompressed update log files.
- The `/usr/local/cpanel/logs/update_analysis` directory stores the `.tar.gz` files that the system will send.

Note:

For more information about these log files, read our [The cPanel Log Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files) documentation.

## Run the script

To run this script on the command line, use the following format:

```
/usr/local/cpanel/scripts/gather_update_logs_setupcrontab [off]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `off` | The script will remove the cron entry. | `off` |
| `--help` | Display the script’s help documentation. | `--help` |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The gather\_update\_log\_stats Script](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/)
- [The upcp Script](https://docs.cpanel.net/whm/scripts/the-upcp-script/)
- [The upcp-running Script](https://docs.cpanel.net/whm/scripts/the-upcp-running-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×