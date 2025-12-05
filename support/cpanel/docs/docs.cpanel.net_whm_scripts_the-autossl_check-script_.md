---
url: "https://docs.cpanel.net/whm/scripts/the-autossl_check-script/"
title: "The autossl_check Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/#main-content)

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
4. The autossl\_check Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [accounts](https://docs.cpanel.net/tags/accounts/) [ssl](https://docs.cpanel.net/tags/ssl/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/#options)

* * *

## The autossl\_check Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)

Last modified: _2020 May 13_

* * *

## Overview

The `/usr/local/cpanel/bin/autossl_check` script allows you to manually check the SSL status for a single user, or for all users. The script can help you troubleshoot any AutoSSL issues via the command line. The script checks whether a user’s certificates have expired, and if there is SSL coverage for a user’s domains. The system uses this script when you select the _Run AutoSSL for All Users_ setting in WHM’s [_Manage AutoSSL_](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) interface ( _WHM » Home » SSL/TLS » Manage AutoSSL_).

The system calls this script daily via a cron job in the `/etc/cron.d` file.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/bin/autossl_check [options]
```

## Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `--user` | Perform an AutoSSL check for a specific user. | `--user=username` |
| `--all` | Perform an AutoSSL check for all users. | `--all` |
| `--help` | Display the script’s help information. | `--help` |

#### Additional Documentation

* * *

- [The checkallsslcerts Script](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/)
- [The modify\_accounts Script](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/)
- [The removeacct Script](https://docs.cpanel.net/whm/scripts/the-removeacct-script/)
- [The set-tls-settings Script](https://docs.cpanel.net/whm/scripts/the-set-tls-settings-script/)
- [The suspendacct Script](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×