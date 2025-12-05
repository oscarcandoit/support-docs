---
url: "https://docs.cpanel.net/whm/scripts/the-try-later-script/"
title: "The try-later Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-try-later-script/#main-content)

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
4. The try-later Script


[server](https://docs.cpanel.net/tags/server/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-try-later-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-try-later-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-try-later-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-try-later-script/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-try-later-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-try-later-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-try-later-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-try-later-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-try-later-script/#example)

* * *

## The try-later Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-try-later-script/)

Last modified: _2022 July 28_

* * *

## Overview

The `/usr/local/cpanel/scripts/try-later` script runs a user-defined `check` command at a specified interval to verify if it can run a user-defined action command. If the user-defined `check` command returns an error, the script will retry the command a specified number of times. When the user-defined `check` command succeeds, the script will run the user-defined `action` command. If the user-defined `check` command fails the maximum number of retries, the script will perform an `act-finally` command.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/3rdparty/bin/perl /usr/local/cpanel/scripts/try-later [options]
```

Important:

- You **must** call the `/usr/local/cpanel/3rdparty/bin/perl` Perl directory **before** the script command.
- You can use Bash commands with this script (for example, the `-x` executable command).
- For an example of this command, see the [_Example_](https://docs.cpanel.net/whm/scripts/the-try-later-script/#example) section below.

## Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `--action` | **Required.**<br> When the `check` command succeeds, the script will run the `action` command. | `--action /usr/local/cpanel/scripts/enable_spf_dkim_globally` |
| `--check` | **Required.**<br> The script runs this command to determine whether to perform the `action` command. | `--check /bin/sh` |
| `--act-finally` | If the `check` command fails the maximum number of retries, the script performs this command. | `--act-finally 0` |
| `--at` | The script will run the `check` command at the specified time. For more information, read Linux’s [`at` manual entry](https://linux.die.net/man/1/at). | `--at now + 12 minutes` |
| `--delay` | The script will pause for this number of minutes before it performs each `check` and `action` command. <br>Note:<br>This option overrides the `--at` option.<br> <br> This value defaults to `5`. | `--delay 1` |
| `--has-jobs` | The script will indicate whether its queue is empty or not. | `--has-jobs` |
| `--max-retries` | The script will attempt to run the `check` command this number of times. | `--max-retries 1` |
| `--skip-first` | The script will skip the first `check` command. | `--skip-first` |
| `--help` | Display the script’s help documentation. | `--help` |

## Example

The following example calls the [`/usr/local/cpanel/scripts/enable_spf_dkim_globally`](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script) script with this script at the `now + 1 minute` interval. If it succeeds, it will run the `/usr/local/cpanel/scripts/enable_spf_dkim_globally` script:

```bash
/usr/local/cpanel/3rdparty/bin/perl /usr/local/cpanel/scripts/try-later --action /usr/local/cpanel/scripts/enable_spf_dkim_globally -x --max-retries 1 --delay 1 --check /bin/sh -c exit 1 --at now + 1 minute --act-finally 0
```

#### Additional Documentation

* * *

- [The balance\_linked\_node\_quotas Script](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/)
- [The build\_mysql\_conf Script](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/)
- [The find\_outdated\_services Script](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/)
- [The is\_script\_stuck Script](https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script/)
- [WHM Scripts](https://docs.cpanel.net/whm/scripts/whm-scripts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×