---
url: "https://docs.cpanel.net/whm/scripts/the-ccs-check-script/"
title: "The ccs-check Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-ccs-check-script/#main-content)

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
4. The ccs-check Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [calendar](https://docs.cpanel.net/tags/calendar/) [dav](https://docs.cpanel.net/tags/dav/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-ccs-check-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-ccs-check-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-ccs-check-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-ccs-check-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-ccs-check-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-ccs-check-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-ccs-check-script/#options)

* * *

## The ccs-check Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-ccs-check-script/)

Last modified: _2022 January 4_

* * *

## Overview

The `/usr/local/cpanel/scripts/ccs-check` script lets the [Calendar and Contacts Server (CCS) plugin](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/) run using your server’s SSL certificate. The script copies the server’s SSL certificate data to the `/opt/cpanel-ccs/conf` CCS directory and allows the server to read that directory.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/ccs-check --run --ssl [options]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--run` | **Required.**<br> Run the script. | `--run` |
| `--ssl` | **Required.**<br> Copy the SSL certificate data into the `/opt/cpanel-ccs/conf` CCS directory. | `--ssl` |
| `--force` | Copy the SSL certificate data into into the `/opt/cpanel-ccs/conf` CCS directory. The script will **not** check if CCS is already installed on the server. | `--force` |
| `--norestart` | Update the SSL certificate information without performing a CCS restart. | `--norestart` |
| `--help` | Display the script’s help documentation. | `--help` |

#### Additional Documentation

* * *

- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Calendar Delegation](https://docs.cpanel.net/cpanel/email/calendar-delegation/)
- [Calendars and Contacts Sharing](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/)
- [The build\_maxemails\_config Script](https://docs.cpanel.net/whm/scripts/the-build_maxemails_config-script/)
- [The convert\_maildir\_to\_mdbox Script](https://docs.cpanel.net/whm/scripts/the-convert_maildir_to_mdbox-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×