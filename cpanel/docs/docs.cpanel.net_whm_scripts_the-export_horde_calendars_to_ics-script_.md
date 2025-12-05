---
url: "https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/"
title: "The export_horde_calendars_to_ics Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/#main-content)

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
4. The export\_horde\_calendars\_to\_ics Script


[webmail](https://docs.cpanel.net/tags/webmail/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [roundcube](https://docs.cpanel.net/tags/roundcube/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/#options)

* * *

## The export\_horde\_calendars\_to\_ics Script

_Valid for versions 108 through the latest version_

#### Version:

#### [108](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/)

Last modified: _2024 March 19_

* * *

## Overview

The `/usr/local/cpanel/scripts/export_horde_calendars_to_ics` script exports Horde calendars to files in `.ics` format. You can then import these files into [Roundcube](https://docs.cpanel.net/webmail/webmail-clients/#roundcube).

Warning:

- We **removed** this script in cPanel & WHM version 120. This script **only** exists in cPanel & WHM version 118 and earlier. For more information, read the _Horde webmail interface_ section of our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan) documentation.
- Only the `root` user can run this script.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/export_horde_calendars_to_ics [options]
```

## Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `--user` | **Required**<br>Export calendars for the cPanel user(s) you specify. <br>Note:<br>- The script also exports the calendars of all email accounts under the cPanel user into separate files.<br>- For multiple cPanel users, specify this option for each user. | `--user=cptest --user=cptest2` |
| `--out` | Specify a directory for the `.ics` files.<br>Note:<br>If you do **not** use this option, the script only outputs the calendar data to the screen. | `--out=/home/cptest/roundcube` |

#### Additional Documentation

* * *

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [How to Manually Migrate Horde Data to Roundcube](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/)
- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The export\_horde\_contacts\_to\_vcf Script](https://docs.cpanel.net/whm/scripts/the-export_horde_contacts_to_vcf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×