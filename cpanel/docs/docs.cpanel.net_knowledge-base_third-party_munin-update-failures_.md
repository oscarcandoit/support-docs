---
url: "https://docs.cpanel.net/knowledge-base/third-party/munin-update-failures/"
title: "Munin Update Failures | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/third-party/munin-update-failures/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [Third Party](https://docs.cpanel.net/knowledge-base/third-party/)
4. Munin Update Failures


[whmplugins](https://docs.cpanel.net/tags/whmplugins/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/third-party/munin-update-failures/#overview)

* * *

[Troubleshooting Munin](https://docs.cpanel.net/knowledge-base/third-party/munin-update-failures/#troubleshooting-munin)

* * *

[Does Munin run during maintenance](https://docs.cpanel.net/knowledge-base/third-party/munin-update-failures/#does-munin-run-during-maintenance)

* * *

[Confirm Munin owns the files](https://docs.cpanel.net/knowledge-base/third-party/munin-update-failures/#confirm-munin-owns-the-files)

* * *

[Run Munin manually](https://docs.cpanel.net/knowledge-base/third-party/munin-update-failures/#run-munin-manually)

* * *

[Check the results](https://docs.cpanel.net/knowledge-base/third-party/munin-update-failures/#check-the-results)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/third-party/munin-update-failures/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/third-party/munin-update-failures/#overview)

* * *

[Troubleshooting Munin](https://docs.cpanel.net/knowledge-base/third-party/munin-update-failures/#troubleshooting-munin)

* * *

[Does Munin run during maintenance](https://docs.cpanel.net/knowledge-base/third-party/munin-update-failures/#does-munin-run-during-maintenance)

* * *

[Confirm Munin owns the files](https://docs.cpanel.net/knowledge-base/third-party/munin-update-failures/#confirm-munin-owns-the-files)

* * *

[Run Munin manually](https://docs.cpanel.net/knowledge-base/third-party/munin-update-failures/#run-munin-manually)

* * *

[Check the results](https://docs.cpanel.net/knowledge-base/third-party/munin-update-failures/#check-the-results)

* * *

## Munin Update Failures

Last modified: _2019 August 20_

* * *

## Overview

The Munin cPanel plugin displays information about CPU, Exim, Apache®, MySQL® usage, and other information with the `rrdtool` logging system. If Munin fails to update, this document provides the steps to resolve the issue.

## Troubleshooting Munin

To troubleshoot this problem, perform the following steps:

### Does Munin run during maintenance

Confirm that the nightly cron maintenance runs and that a crontab entry for Munin exists.

The `crontab -u munin -l` command should return output that resembles the following:

```perl
*/5 * * * * /usr/local/cpanel/3rdparty/perl/526/bin/munin-cron
```

### Confirm Munin owns the files

Confirm that `munin:munin` owns the files in the `/var/lib/munin` and `/var/log/munin` directories.

Important:

If `munin:munin` does **not** own the files in the `/var/log/munin` directory, the service will update the log files, but it will **not** update the graphs that Munin displays.


To set the correct ownership, run the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>chown -R munin:munin /var/log/munin<br>chown -R munin:munin /var/lib/munin<br>``` |

### Run Munin manually

To run Munin manually, run the `sudo -u munin munin-cron` command.

### Check the results

New entries will appear in the `/var/log/munin/munin-update` log file with no errors. To update the daily graphs, refresh the Munin interface.

Note:

Munin’s weekly graphs will display updates after the time that you configured in the crontab entry for Munin.


#### Additional Documentation

* * *

- [How to Install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/)
- [How to Install WordPress® With cPanel](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/)
- [Manage Plugins](https://docs.cpanel.net/whm/cpanel/manage-plugins/)
- [The Let's Encrypt Plugin](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×