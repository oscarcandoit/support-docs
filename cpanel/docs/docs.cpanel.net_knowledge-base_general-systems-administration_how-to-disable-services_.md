---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-services/"
title: "How to Disable Services | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-services/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. How to Disable Services


[server](https://docs.cpanel.net/tags/server/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-services/#overview)

* * *

[Disable Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-services/#disable-services)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-services/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-services/#overview)

* * *

[Disable Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-services/#disable-services)

* * *

## How to Disable Services

Last modified: _2020 June 23_

* * *

## Overview

This document describes how to disable a service.

The `/usr/local/cpanel/scripts/maintenance` script runs during the [nightly cPanel & WHM update process](https://docs.cpanel.net/whm/scripts/the-upcp-script). The script provides security updates and automatically restarts services. However, automatic restarts may cause essential services to lose connection to the server. If these services lose connection to the server, that server may become inaccessible.

Disabled services reside in the `/var/cpanel/disabled` directory.

## Disable Services

To disable a service, log in to your server’s command line as the `root` user and add one of the following touch files to the `/var/cpanel/disabled` directory:

| File | Description |
| --- | --- |
| `secureit` | Disables the [`/usr/local/cpanel//scripts/secureit`](https://docs.cpanel.net/whm/scripts/the-secureit-script) script, which secures permissions on your server. |
| `securetmp` | Disables the [`securetmp`](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#harden-your-tmp-partition) service, which secures your `/tmp` partition. |
| `terminal-colors` | Disables the color output in WHM’s [_Terminal_](https://docs.cpanel.net/whm/server-configuration/terminal-in-whm) interface ( _WHM » Home » Server Configuration » Terminal_). |
| `cloudlinux` | Prevents CloudLinux™’s installation on the server. |
| `auto-restart-services` | Disables any services that the system automatically restarts. |

#### Additional Documentation

* * *

- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Service Proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/)
- [Supported MySQL/MariaDB Versions](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/)
- [The try-later Script](https://docs.cpanel.net/whm/scripts/the-try-later-script/)
- [WHM Scripts](https://docs.cpanel.net/whm/scripts/whm-scripts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×