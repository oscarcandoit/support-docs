---
url: "https://docs.cpanel.net/whm/security-center/shell-fork-bomb-protection/"
title: "Shell Fork Bomb Protection | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/shell-fork-bomb-protection/#main-content)

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
3. [Security Center](https://docs.cpanel.net/whm/security-center/)
4. Shell Fork Bomb Protection


[security](https://docs.cpanel.net/tags/security/) [whmui](https://docs.cpanel.net/tags/whmui/) [ssh](https://docs.cpanel.net/tags/ssh/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/shell-fork-bomb-protection/#overview)

* * *

[How to configure shell fork bomb protection](https://docs.cpanel.net/whm/security-center/shell-fork-bomb-protection/#how-to-configure-shell-fork-bomb-protection)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/shell-fork-bomb-protection/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/shell-fork-bomb-protection/#overview)

* * *

[How to configure shell fork bomb protection](https://docs.cpanel.net/whm/security-center/shell-fork-bomb-protection/#how-to-configure-shell-fork-bomb-protection)

* * *

## Shell Fork Bomb Protection

![](https://docs.cpanel.net/img/whm-icons/shell_fork_bomb_protection.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/security-center/shell-fork-bomb-protection/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Fork bombs start a cascade of small processes on a server that duplicate themselves until the server’s resources are depleted.

This feature helps you protect your server from users with terminal access (SSH or Telnet) who may inadvertently or intentionally cause a fork bomb.

## How to configure shell fork bomb protection

To enable or disable shell fork bomb protection, click _Enable Protection_ or _Disable Protection_.

After you enable shell fork bomb protection, the system runs an [`ulimit`](https://www.ibm.com/docs/en/zos/2.4.0?topic=descriptions-ulimit-set-process-limits) command to limit user actions. You may use the following options to customize your user limits:

| Limit | Option | Description |
| --- | --- | --- |
| `200000` | `-c` | Limits the maximum size of core files that users can create. |
| `200000` | `-d` | Limits the maximum size of a process’s data segment. |
| `200000` | `-m` | Limits the maximum resident set size. |
| `100` | `-n` | Limits the maximum number of open-file descriptors. |
| `8192` | `-s` | Limits the maximum stack size. |
| `35` | `-u` | Limits the maximum number of processes that are available to a single user.<br>Note:<br>This option limits cPanel users with bash shell access, which is the default shell for cPanel users, to 35 processes each. |
| `Unlimited` | `-v` | The amount of virtual memory available for the processes. |

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [Manage Sudo Group Users](https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/)
- [Manage Wheel Group Users](https://docs.cpanel.net/whm/security-center/manage-wheel-group-users/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×