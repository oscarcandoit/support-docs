---
url: "https://docs.cpanel.net/whm/scripts/the-onboot_handler-script/"
title: "The onboot_handler Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-onboot_handler-script/#main-content)

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
4. The onboot\_handler Script


[server](https://docs.cpanel.net/tags/server/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-onboot_handler-script/#overview)

* * *

[The on\_boot directory](https://docs.cpanel.net/whm/scripts/the-onboot_handler-script/#the-onboot-directory)

* * *

[The cron job](https://docs.cpanel.net/whm/scripts/the-onboot_handler-script/#the-cron-job)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-onboot_handler-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-onboot_handler-script/#overview)

* * *

[The on\_boot directory](https://docs.cpanel.net/whm/scripts/the-onboot_handler-script/#the-onboot-directory)

* * *

[The cron job](https://docs.cpanel.net/whm/scripts/the-onboot_handler-script/#the-cron-job)

* * *

## The onboot\_handler Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-onboot_handler-script/)

Last modified: _2020 July 9_

* * *

## Overview

When the system boots, it runs the `/usr/local/cpanel/bin/onboot_handler` script. This script runs all of the scripts that exist in the `/var/cpanel/on_boot` and `/usr/local/cpanel/libexec/on_boot` directories. This allows a system administrator to easily manage scripts that they wish to run after the system starts.

## The on\_boot directory

System administrators should save scripts that they wish to run when the system boots in the `/var/cpanel/on_boot` directory.

If the directory does not already exist, run the following command as the `root` user to create it:

```bash
mkdir -p /var/cpanel/on_boot
```

Important:

cPanel & WHM saves any internal or development scripts to run on boot in the `/usr/local/cpanel/libexec/on_boot` directory. Do **not** save any scripts in this directory.

## The cron job

The system uses the following entry in the `root` user’s crontab file to run the `/usr/local/cpanel/bin/onboot_handler` script:

```bash
@reboot /usr/local/cpanel/bin/onboot_handler
```

#### Additional Documentation

* * *

- [The balance\_linked\_node\_quotas Script](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/)
- [The build\_mysql\_conf Script](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/)
- [The modsec\_vendor Script](https://docs.cpanel.net/whm/scripts/the-modsec_vendor-script/)
- [The try-later Script](https://docs.cpanel.net/whm/scripts/the-try-later-script/)
- [WHM Scripts](https://docs.cpanel.net/whm/scripts/whm-scripts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×