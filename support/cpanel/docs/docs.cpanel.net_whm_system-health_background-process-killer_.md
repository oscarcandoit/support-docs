---
url: "https://docs.cpanel.net/whm/system-health/background-process-killer/"
title: "Background Process Killer | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/system-health/background-process-killer/#main-content)

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
3. [System Health](https://docs.cpanel.net/whm/system-health/)
4. Background Process Killer


[server](https://docs.cpanel.net/tags/server/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/system-health/background-process-killer/#overview)

* * *

[Setup the process killer](https://docs.cpanel.net/whm/system-health/background-process-killer/#setup-the-process-killer)

* * *

[Processes that this feature can kill](https://docs.cpanel.net/whm/system-health/background-process-killer/#processes-that-this-feature-can-kill)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/system-health/background-process-killer/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/system-health/background-process-killer/#overview)

* * *

[Setup the process killer](https://docs.cpanel.net/whm/system-health/background-process-killer/#setup-the-process-killer)

* * *

[Processes that this feature can kill](https://docs.cpanel.net/whm/system-health/background-process-killer/#processes-that-this-feature-can-kill)

* * *

## Background Process Killer

![](https://docs.cpanel.net/img/whm-icons/background_process_killer.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/system-health/background-process-killer/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to select processes that the system will terminate when the `upcp` script calls the system maintenance script (`/scripts/maintenance`) every night. After the system terminates a process, it will send you a notification via email.

Note:

The background process killer does **not** terminate processes that run from the `/usr/bin` directory because the system assumes that the system administrator intentionally installed programs into that directory (for example, the system administrator installed `BitchX` via package).

## Setup the process killer

1. Select the checkbox that corresponds to the processes that you wish to automatically terminate.






Note:





We recommend that you select **all** of the available processes.

2. If you wish to allow specific users to run any of the processes that you have selected, enter their names in the _Trusted users_ text box.

   - For example, if you add `username` to the list, the user `username` can run the processes that you select.
   - You do not need to add users with a UID below 99.
3. Click _Save_.

## Processes that this feature can kill

The processes in the following list often result in denial of service attacks (DoS or DDoS) that launch from or against your server.

Note:

Malicious users often rename the process so that it is difficult to find. However, this WHM feature detects the process no matter what name it uses, and it automatically shuts the program down.

| Process | Description |
| --- | --- |
| `BitchX` | This is a popular command line IRC (Internet Relay Chat) client. |
| `bnc` | This is a common IRC bouncer. Bouncers allow users to hide the source of their connection and route traffic through secondary locations. Hackers often use these in denial of service attacks. |
| `eggdrop` | This is a popular IRC bot. A bot is an automated system that will execute a set of commands. In this case, the bot executes sets of IRC commands to moderate IRC channels (chat rooms). However, attackers can use this program to create botnets for denial of service attacks. |
| `generic-sniffers` | Third parties use sniffers to collect and analyze packets of information as they transmit between computers. Often, hackers use sniffers to analyze the data for encryption methods and gain access to networks to which they should not have access. |
| `guardservices` | This is an IRC bot. For more information, see the definition of `eggdrop` above. |
| `ircd` | This is the daemon that enables IRC. IRC is an attractive target for malicious users, because the server typically runs for a long period of time. This allows hackers to use packet sniffers to extract information and launch attacks. |
| `psyBNC` | This is a popular IRC network bouncer. For more information, see the definition for `bnc` above for more information. |
| `ptlink` | This is an IRC server. For more information, see the definition of `ircd` above. |
| `services` | This is an IRC bot. For more information, see the definition of `eggdrop` above. |

#### Additional Documentation

* * *

- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Configuration Cluster](https://docs.cpanel.net/whm/clusters/configuration-cluster/)
- [Link Server Nodes](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/)
- [Show Current Disk Usage](https://docs.cpanel.net/whm/system-health/show-current-disk-usage/)
- [Show Current Running Processes](https://docs.cpanel.net/whm/system-health/show-current-running-processes/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×