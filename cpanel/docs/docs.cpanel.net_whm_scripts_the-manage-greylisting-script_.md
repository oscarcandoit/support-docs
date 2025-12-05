---
url: "https://docs.cpanel.net/whm/scripts/the-manage-greylisting-script/"
title: "The manage_greylisting Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-manage-greylisting-script/#main-content)

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
4. The manage\_greylisting Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [greylisting](https://docs.cpanel.net/tags/greylisting/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-manage-greylisting-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-manage-greylisting-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-manage-greylisting-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-manage-greylisting-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-manage-greylisting-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-manage-greylisting-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-manage-greylisting-script/#options)

* * *

## The manage\_greylisting Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-manage-greylisting-script/)

Last modified: _2021 June 21_

* * *

## Overview

The `/usr/local/cpanel/scripts/manage_greylisting` manages the cPanel Greylisting service.

## Run the script

To use the `/manage_greylisting` script to manage the Greylisting service, run the following command:

```bash
/usr/local/cpanel/scripts/manage_greylisting [options]
```

### Options

When you run the `/manage_greylisting` script, you can specify the following options:

| Option | Description | Example |
| --- | --- | --- |
| `--init` | Initialize the SQLite database with the basic data structure. <br>Note:<br>The SQLite database resides in the `/var/cpanel/greylist/greylist.sqlite` file. | ```bash<br>/usr/local/cpanel/scripts/manage_greylisting –init<br>``` |
| `--reset` | Forcibly reset the SQLite database. <br> This option attempts to preserve the [Trusted Hosts](https://docs.cpanel.net/whm/email/greylisting/) list if the Greylisting service runs on the server. | ```bash<br>/usr/local/cpanel/scripts/manage_greylisting –reset<br>``` |
| `--trust` | Trust the IP addresses for the common specified email services. Specify this option more than once to trust multiple services at the same time. <br> This script recognizes the following common email services: <br>- aol<br>- apple<br>- att<br>- bank\_of\_america<br>- chase\_bank<br>- comcast<br>- cpanel<br>- firstdata<br>- google<br>- hotmail<br>- mcafee\_email\_saas<br>- microsoft<br>- microsoft\_eop<br>- office365<br>- outlook<br>- roadrunner<br>- sbcglobalnet<br>- symantec\_messagelabs<br>- tucows\_opensrs<br>- verizon<br>- wellsfargo<br>- yahoo | ```bash<br>/usr/local/cpanel/scripts/manage_greylisting –trust cpanel<br>``` |
| `--import` | Import the [Trusted Hosts](https://docs.cpanel.net/whm/email/greylisting/) list that the specified JSON file contains. | ```bash<br>/usr/local/cpanel/scripts/manage_greylisting –import /path/to/json/file<br>``` |
| `--export` | Export the current [Trusted Hosts](https://docs.cpanel.net/whm/email/greylisting/) list.<br> To export the list to a file, specify the `export_to` option or redirect via `STDOUT`. | |     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>/usr/local/cpanel/scripts/manage_greylisting --export<br>/usr/local/cpanel/scripts/manage_greylisting --export --export_to export.json<br>/usr/local/cpanel/scripts/manage_greylisting --export > export.json <br>``` | |
| `--update_common_mail_providers` | Update the common mail providers data in the database. <br>Note:<br>You can specify the `--force` flag with this option to forcibly update the IP address data in the database. | ```bash<br>/usr/local/cpanel/scripts/manage_greylisting –update_common_mail_providers<br>``` |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The setup\_greylist\_db Script](https://docs.cpanel.net/whm/scripts/the-setup_greylist_db-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×