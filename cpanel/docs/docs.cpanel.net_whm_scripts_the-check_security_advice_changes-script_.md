---
url: "https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script/"
title: "The check_security_advice_changes Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script/#main-content)

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
4. The check\_security\_advice\_changes Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script/#options)

* * *

## The check\_security\_advice\_changes Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script/)

Last modified: _2022 June 3_

* * *

## Overview

This script monitors the state of WHM’s [Security Advisor](https://docs.cpanel.net/whm/security-center/security-advisor). If the state changes, the script will send a notification to the system administrator.

Note:

This script runs as part of the nightly maintenance script.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/check_security_advice_changes [options]
```

## Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--notify` | Send a notification to the system administrator if there are changes in the Security Advisor. | `--notify` |
| `--quiet` | Run the script in quiet mode. The script will **not** display output and sets the UNIX exit code. | `--quiet` |
| `--help` | Display the script’s help documentation. | `--help` |

#### Additional Documentation

* * *

- [Manage root's SSH Keys](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/)
- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The securetmp Script](https://docs.cpanel.net/whm/scripts/the-securetmp-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×