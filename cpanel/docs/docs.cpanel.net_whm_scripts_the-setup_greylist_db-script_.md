---
url: "https://docs.cpanel.net/whm/scripts/the-setup_greylist_db-script/"
title: "The setup_greylist_db Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-setup_greylist_db-script/#main-content)

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
4. The setup\_greylist\_db Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [greylisting](https://docs.cpanel.net/tags/greylisting/) [sqlite](https://docs.cpanel.net/tags/sqlite/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-setup_greylist_db-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-setup_greylist_db-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-setup_greylist_db-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-setup_greylist_db-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-setup_greylist_db-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-setup_greylist_db-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-setup_greylist_db-script/#options)

* * *

## The setup\_greylist\_db Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-setup_greylist_db-script/)

Last modified: _2020 May 13_

* * *

## Overview

The `/usr/local/cpanel/scripts/setup_greylist_db` script sets up the SQLite database for the cPanel Greylisting service. This script also allows you to add the IP address ranges for common email services.

## Run the script

To run this script on the command line, use the following format:

```
/usr/local/cpanel/scripts/setup_greylist_db [options]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--init` | Initialize the database with the basic data structure. | `/usr/local/cpanel/scripts/ --init` |
| `--reset` | Force the database to reset. <br>Note:<br>This option attempts to preserve the Trusted Hosts list if the server has the Greylisting service enabled. | `/usr/local/cpanel/scripts/ --reset` |
| `--trust` | Add the IP address ranges for the specified email service. Specify this option more than once to trust multiple hosts at the same time. This script recognizes the following common email services:<br>- aol<br>- apple<br>- comcast<br>- cpanel<br>- google<br>- hotmail<br>- microsoft<br>- outlook<br>- roadrunner<br>- verizon<br>- yahoo | `/usr/local/cpanel/scripts/ --trust aol` |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The manage\_greylisting Script](https://docs.cpanel.net/whm/scripts/the-manage-greylisting-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×