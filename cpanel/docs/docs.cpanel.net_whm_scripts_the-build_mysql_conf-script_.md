---
url: "https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/"
title: "The build_mysql_conf Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/#main-content)

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
4. The build\_mysql\_conf Script


[mysql](https://docs.cpanel.net/tags/mysql/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [server](https://docs.cpanel.net/tags/server/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/#options)

* * *

## The build\_mysql\_conf Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/)

Last modified: _2021 July 1_

* * *

## Overview

The `/usr/local/cpanel/bin/build_mysql_conf` script builds the default MySQL® configuration file. You can specify startup options on the command line or in a configuration file. MySQL client programs look for a configuration file when they start.

Note:

Command-line options take precedence over settings defined in a configuration file.


## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/bin/build_mysql_conf [options]
```

## Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `--daemonize` | Run the script in the background as a daemon. | `/usr/local/cpanel/bin/build_mysql_conf --daemonize` |
| `--fix-my-cnf` | Only fix the `my.cnf` file. This option will not run SELinux changes, the `mysql_upgrade` command, service restarts, or connection checks. | `/usr/local/cpanel/bin/build_mysql_conf --fix-my-cnf` |
| `--no-upgrade` | Do not run the `mysql_upgrade` command. | `/usr/local/cpanel/bin/build_mysql_conf --no-upgrade` |
| `--no-restart` | Do not restart the `mysql` service. | `/usr/local/cpanel/bin/build_mysql_conf --no-restart` |
| `--no-selinux` | Do not set SELinux context for MySQL binaries. | `/usr/local/cpanel/bin/build_mysql_conf --no-selinux` |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The balance\_linked\_node\_quotas Script](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/)
- [The manage\_mysql\_profiles Script](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/)
- [The modsec\_vendor Script](https://docs.cpanel.net/whm/scripts/the-modsec_vendor-script/)
- [The onboot\_handler Script](https://docs.cpanel.net/whm/scripts/the-onboot_handler-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×