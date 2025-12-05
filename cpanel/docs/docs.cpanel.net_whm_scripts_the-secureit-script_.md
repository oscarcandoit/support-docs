---
url: "https://docs.cpanel.net/whm/scripts/the-secureit-script/"
title: "The secureit Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-secureit-script/#main-content)

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
4. The secureit Script


[security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-secureit-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-secureit-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-secureit-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-secureit-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-secureit-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-secureit-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-secureit-script/#options)

* * *

## The secureit Script

_Valid for versions 98 through the latest version_

#### Version:

#### [98](https://docs.cpanel.net/whm/scripts/the-secureit-script/)

Last modified: _2022 January 27_

* * *

## Overview

The `/usr/local/cpanel/scripts/secureit` script secures permissions on your server.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/secureit [options]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `dryrun` | Display the changes that would occur when you run this script. | `--dryrun` |
| `fast` | Retrieve the file permissions list from the package manager database. This option is useful when you install cPanel & WHM. | `--fast` |
| `help` | Displays additional information. | `--help` |

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [The check\_security\_advice\_changes Script](https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script/)
- [The securetmp Script](https://docs.cpanel.net/whm/scripts/the-securetmp-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×