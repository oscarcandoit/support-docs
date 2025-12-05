---
url: "https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/"
title: "The gather_update_log_stats Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/#main-content)

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
4. The gather\_update\_log\_stats Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [updates](https://docs.cpanel.net/tags/updates/) [analytics](https://docs.cpanel.net/tags/analytics/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/#options)

* * *

[Related settings](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/#related-settings)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/#options)

* * *

[Related settings](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/#related-settings)

* * *

## The gather\_update\_log\_stats Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/)

Last modified: _2025 June 10_

* * *

## Overview

Important:

For more information about the cPanel Analytics data that we gather and how we use it, read our [cPanel Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics) documentation and our [Server Usage Analysis Data Collection Policy](http://cpanel.com/assets/docs/legal-agreements/server-usage-analysis-data-collection-policy.html).

The `/usr/local/cpanel/scripts/gather_update_log_stats` script gathers your server’s update logs and sends them to WebPros International, LLC for analysis. Whenever the `gather_update_log_stats` script runs, it creates a tarball file to send. This tarball contains all of the update log data that the system stored since your last update.

- The `/var/cpanel/updatelogs` directory contains the system’s uncompressed update log files.
- The `/usr/local/cpanel/logs/update_analysis` directory stores the `.tar.gz` files that the system will send.

Note:

- If you run this script while the `upcp` script is running, the system will schedule this script to run when the `upcp` script finishes.
- If you run this script, but update log gathering is disabled, the server will **only** send system data.
- The [`gather_update_logs_setupcrontab`](https://docs.cpanel.net/whm/scripts/the-gather_update_logs_setupcrontab-script) script sets up a cron job to run the `gather_update_log_stats` script.
- For more information about these log files, read our [The cPanel Log Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files) documentation.

## Run the script

To run this script on the command line, use the following format:

```
/usr/local/cpanel/scripts/gather_update_log_stats --upload --logfile /var/cpanel/updatelogs/2021-11-07T08:15:06Z.log
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--upload` | Whether to send the specified tarball. | `--upload` |
| `--logfile` | The full path to a upcp logfile to analyze. If you do not use this option, the script will create a tarball based on the current system date. | `--logfile /var/cpanel/updatelogs/2021-11-07T08:15:06Z.log` |
| `--help` | Display the script’s help documentation. | `--help` |

### Related settings

Several settings exist in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_) to enable, disable, or customize this functionality. We **disable** these settings by default.

- To set the number of days to retain log files before deletion, use the _Update analysis retention interval_ setting in the _Support_ section.
- To set whether the system sends anonymized data about your server configuration, use the _Send error reports to cPanel for analysis_ setting in the _Support_ section.
- To set whether the system sends anonymized data about how you and your users use cPanel & WHM, use the _Send information about server usage to cPanel for analysis_ setting in the _Support_ section.
- To change the number of days to retain these logs, use the _Number of days to retain upcp logs before purging them_ setting in the _Stats and Logs_ section.

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The gather\_update\_logs\_setupcrontab Script](https://docs.cpanel.net/whm/scripts/the-gather_update_logs_setupcrontab-script/)
- [The upcp Script](https://docs.cpanel.net/whm/scripts/the-upcp-script/)
- [The upcp-running Script](https://docs.cpanel.net/whm/scripts/the-upcp-running-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×