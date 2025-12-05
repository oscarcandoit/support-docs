---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/interface-lock-scripts/"
title: "Interface Lock Scripts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/interface-lock-scripts/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [cPanel Product](https://docs.cpanel.net/knowledge-base/cpanel-product/)
4. Interface Lock Scripts


[updates](https://docs.cpanel.net/tags/updates/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/interface-lock-scripts/#overview)

* * *

[Interface lock names](https://docs.cpanel.net/knowledge-base/cpanel-product/interface-lock-scripts/#interface-lock-names)

* * *

[Scripts](https://docs.cpanel.net/knowledge-base/cpanel-product/interface-lock-scripts/#scripts)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/interface-lock-scripts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/interface-lock-scripts/#overview)

* * *

[Interface lock names](https://docs.cpanel.net/knowledge-base/cpanel-product/interface-lock-scripts/#interface-lock-names)

* * *

[Scripts](https://docs.cpanel.net/knowledge-base/cpanel-product/interface-lock-scripts/#scripts)

* * *

## Interface Lock Scripts

Last modified: _2024 February 19_

* * *

## Overview

We added scripts to manage the Interface Lock System. We created the Interface Lock System to block user changes to various features during cPanel & WHM upgrades. The Interface Lock System can manage global or user-specific blocks. This document contains the scripts that you can use to mange the Interface Lock System.

Warning:

- You should **only** use the scripts provided in this article for maintenance purposes.
- Do **not** use these scripts unless cPanel support instructs you to do so.

## Interface lock names

- `UpdateHostname`
  - _Global_ — cPanel & WHM uses this lock to block hostname change requests while the system processes a hostname update.
  - _User_ — cPanel & WHM uses this lock to prevent user access to the Horde webmail interface and the CalDAV/CardDAV protocols during a hostname change.

## Scripts

`/usr/local/cpanel/bin/is_interface_locked` — Use this script to check whether an interface lock exists.

Options:

- `--help` — Displays the help information.
- `--version` — Displays the script version.
- `--name` — The WHM or cPanel interface lock name.
- `--user` — The cPanel user.

`/usr/local/cpanel/bin/lock_interface` — Use this script to lock an interface.

Options:

- `--help` — Displays the help information.
- `--version` — Displays the script version.
- `--name` — The WHM or cPanel Interface lock name.
- `--user` — The cPanel user.
- `--all` — All cPanel users.





Note:




The `--all` option does **not** indicate a global lock.



`/usr/local/cpanel/bin/unlock_interface` — Use this script to unlock an interface.

Options:

- `--help` — Displays the help information.
- `--version` — Displays the script version.
- `--name` — The WHM or cPanel interface lock name.
- `--user` — The cPanel user.
- `--all` — All cPanel users.





Note:




The `--all` option does **not** indicate a global lock.



#### Additional Documentation

* * *

- [Change Log](https://docs.cpanel.net/whm/cpanel/change-log/)
- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [Onboarding Assistant](https://docs.cpanel.net/knowledge-base/cpanel-product/onboarding-assistant/)
- [Rebuild RPM Database](https://docs.cpanel.net/whm/software/rebuild-rpm-database/)
- [System Update](https://docs.cpanel.net/whm/software/system-update/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×