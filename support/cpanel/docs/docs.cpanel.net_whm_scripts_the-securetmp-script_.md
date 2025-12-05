---
url: "https://docs.cpanel.net/whm/scripts/the-securetmp-script/"
title: "The securetmp Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-securetmp-script/#main-content)

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
4. The securetmp Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-securetmp-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-securetmp-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-securetmp-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-securetmp-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-securetmp-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-securetmp-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-securetmp-script/#options)

* * *

## The securetmp Script

_Valid for versions 130 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-securetmp-script/82/)

#### [130](https://docs.cpanel.net/whm/scripts/the-securetmp-script/)

Last modified: _2025 April 24_

* * *

## Overview

The `/usr/local/cpanel/scripts/securetmp` script lets you mount your server’s `/tmp` partition to a temporary file. Securing this partition provides extra security for your server.

By default, the temporary file only uses 5% of your system’s available disk space in the `/usr` partition, for a minimum of 500MB, up to a maximum of 4GB.

To set a specific amount of space that the `/tmp` partition can use, set the _Size, in MB, for the /tmp partition secured by securetmp_ setting in the _System_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#system) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

For more information about securing your server, read our [Tips to Make Your Server More Secure](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure) documentation.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/securetmp [options]
```

## Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `--auto` | Skip all interactive customization questions. | `--auto` |
| `--daemonize` | Run this script as a background process. <br>Note:<br>The script runs this option by default. | `--daemonize` |
| `--install` | Include this script in the system startup process. | `--install` |
| `--uninstall` | Remove this script from the system startup process. | `--uninstall` |
| `--help` | Display the script’s help documentation. | `--help` |

#### Additional Documentation

* * *

- [Manage root's SSH Keys](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/)
- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The check\_security\_advice\_changes Script](https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×