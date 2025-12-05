---
url: "https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script/"
title: "The is_script_stuck Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script/#main-content)

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
4. The is\_script\_stuck Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script/#options)

* * *

## The is\_script\_stuck Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script/)

Last modified: _2020 May 13_

* * *

## Overview

In some rare cases, a long process may hang indefinitely and be difficult for system administrators to detect. The `/usr/local/cpanel/bin/is_script_stuck` script checks how long a script’s current PID has run, and can notify a WHM user or kill the process.

For example, if you experience problems with hung backup processes, you could use this script in a cron job to monitor backup processes.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/bin/is_script_stuck [options]
```

### Options

You can use the following options with this script:

- `--script` — The absolute path to the script that you wish to check.







Note:




This option is required, unless you instead use the –help option.


- `time` — The amount of time that the specified script can run before the `/usr/local/cpanel/bin/is_script_stuck` script determines that it is stuck.


You can append one of the following units of measure:


  - `d` — Days.
  - `h` — Hours.
  - `m` — Minutes.
  - `s` — Seconds.

If you do not append a unit of measure, the script treats this value as a number of seconds. For example, specify `--time=60` for 60 seconds, or `--time=4d` for four days.

Note:

This option is required, unless you instead use the –help option.


- `--notify` — The WHM username to which you wish to send a notification of the script’s results.

- `--kill` — Use this option if you want the script to stop (kill) the specified script if it runs longer than the specified time.

- `--help` — Print help information for this script.


#### Additional Documentation

* * *

- [The find\_outdated\_services Script](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/)
- [The restartsrv Script](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/)
- [The servicedomains Script](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/)
- [The try-later Script](https://docs.cpanel.net/whm/scripts/the-try-later-script/)
- [WHM Scripts](https://docs.cpanel.net/whm/scripts/whm-scripts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×