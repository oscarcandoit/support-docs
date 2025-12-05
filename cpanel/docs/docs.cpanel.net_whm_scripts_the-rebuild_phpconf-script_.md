---
url: "https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/"
title: "The rebuild_phpconf Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/#main-content)

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
4. The rebuild\_phpconf Script


[php](https://docs.cpanel.net/tags/php/) [ea4](https://docs.cpanel.net/tags/ea4/) [phphandlers](https://docs.cpanel.net/tags/phphandlers/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/#run-the-script)

* * *

[Arguments](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/#arguments)

* * *

[Examples](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/#examples)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/#run-the-script)

* * *

[Arguments](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/#arguments)

* * *

[Examples](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/#examples)

* * *

## The rebuild\_phpconf Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/)

Last modified: _2020 September 29_

* * *

## Overview

The `/usr/local/cpanel/bin/rebuild_phpconf` script manages your server’s default PHP version and PHP handlers in EasyApache 4. You can use this script to set your system default PHP version or change the PHP handler for a PHP version. You can also make these changes in WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM_ » _Home_ » _Software_ » _MultiPHP Manager_).

## Run the script

To use the `/bin/rebuild_phpconf` script, run the following script:

```bash
/usr/local/cpanel/bin/rebuild_phpconf [arguments]
```

Note:

When you run the `/bin/rebuild_phpconf` script, the system writes to the `/etc/cpanel/ea4/php.conf` file. The system backs up any changes made to this file to the `/etc/cpanel/ea4/php.conf.bak/TIME.PID` file, where `TIME` represents the time the system made the change and `PID` represents the process PID. The system **only** keeps the 20 most recent `php.conf` file changes.

### Arguments

The `/usr/local/cpanel/bin/rebuild_phpconf` script accepts the following arguments:

| Argument | Description | Example |
| --- | --- | --- |
| `--default=version` | Set the default version of PHP that Apache uses. In this argument, `version` represents the name of the PHP package that you wish to set as the default PHP version. | `/usr/local/cpanel/bin/rebuild_phpconf --default=ea-php71` |
| `--version=handler` | Set the PHP handler that the specified PHP version uses. In this argument, `version` represents the name of the PHP package that you wish to set the PHP handler for, and `handler` represents the name of the PHP handler that you wish to use. | `/usr/local/cpanel/bin/rebuild_phpconf --ea-php71=suphp` |
| `--current` | Display the current PHP handler settings. | `/usr/local/cpanel/bin/rebuild_phpconf --current` |
| `--available` | Display the available handlers and PHP versions. | `/usr/local/cpanel/bin/rebuild_phpconf --available` |
| `--help` | Display a help message. | `/usr/local/cpanel/bin/rebuild_phpconf --help` |
| `--dryrun` | Dispay the changes that a set of arguments would make to Apache. | `/usr/local/cpanel/bin/rebuild_phpconf --dryrun` |
| `--no-restart` | Do **not** restart Apache after you make changes. | `/usr/local/cpanel/bin/rebuild_phpconf --no-restart` |
| `--errors` | Print errors to `STDERR` as well as the log file. | `/usr/local/cpanel/bin/rebuild_phpconf --errors` |
| `--no-users` | Do **not** update user settings when you update a PHP version’s handler. | `/usr/local/cpanel/bin/rebuild_phpconf --no-users` |

## Examples

The following example sets the default PHP version to PHP 7.1 and the PHP handler to `cgi`:

```bash
/usr/local/cpanel/bin/rebuild_phpconf --default=ea-php71 --ea-php71=cgi
```

The following example displays the requested changes, but does **not** apply them:

```bash
/usr/local/cpanel/bin/rebuild_phpconf --dryrun --ea-php71=cgi --ea-php72=suphp
```

The following example changes the handler for PHP 7.1 to `dso`, but does **not** change the PHP handler for the users that use PHP 7.1:

```bash
/usr/local/cpanel/bin/rebuild_phpconf --ea-php71=dso --no-users
```

#### Additional Documentation

* * *

- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [MultiPHP Manager for WHM — System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [MultiPHP Manager for WHM — User Domain Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×