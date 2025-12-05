---
url: "https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/"
title: "The auto-adjust-mysql-limits Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/#main-content)

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
4. The auto-adjust-mysql-limits Script


[mysql](https://docs.cpanel.net/tags/mysql/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/#options)

* * *

## The auto-adjust-mysql-limits Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)

Last modified: _2021 June 21_

* * *

## Overview

The `/usr/local/cpanel/scripts/auto-adjust-mysql-limits` script updates MySQL® configuration values for the following cPanel & WHM settings:

- _Allow cPanel & WHM to determine the best value for your MySQL `open_files_limit` configuration?_
- _Allow cPanel & WHM to determine the best value for your MySQL `max_allowed_packet` configuration?_
- _Allow cPanel & WHM to determine the best value for your MySQL `innodb_buffer_pool_size` configuration?_

You can configure these settings in the _SQL_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

This script runs when whenever you update the MySQL-related tweak settings and when you transfer or restore an account.

Important:

You **must** run this script as the `root` user.


## Run the script

To run this script on the command line, use the following format:

```perl
/usr/local/cpanel/scripts/auto-adjust-mysql-limits [options]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--verbose` | Display messages about these limits when the script runs. | `/usr/local/cpanel/scripts/auto-adjust-mysql-limits --verbose` |
| `--debug` | Do **not** update MySQL. | `/usr/local/cpanel/scripts/auto-adjust-mysql-limits --debug` |
| `--help` | Display a help message. | `/usr/local/cpanel/scripts/auto-adjust-mysql-limits --help` |
| `--no-restart` | Do **not** restart MySQL after the script runs. | `/usr/local/cpanel/scripts/auto-adjust-mysql-limits --no-restart` |

#### Additional Documentation

* * *

- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The build\_mysql\_conf Script](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/)
- [The manage\_mysql\_profiles Script](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/)
- [The MysqlDump Stream](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×