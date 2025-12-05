---
url: "https://docs.cpanel.net/whm/scripts/the-cleandns-script/"
title: "The cleandns Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-cleandns-script/#main-content)

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
4. The cleandns Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-cleandns-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-cleandns-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-cleandns-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-cleandns-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-cleandns-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-cleandns-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-cleandns-script/#options)

* * *

## The cleandns Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-cleandns-script/)

Last modified: _2025 June 4_

* * *

## Overview

The `/usr/local/cpanel/scripts/cleandns` script removes duplicate DNS zone definitions and checks for invalid syntax in the `/etc/named.conf` file. This script only supports BIND and PowerDNS servers.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/cleandns [options]
```

## Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `--help` | Display the script’s help documentation. | `--help` |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The dnssec-cluster-keys Script](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/)
- [The enable\_spf\_dkim\_globally Script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/)
- [The servicedomains Script](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×