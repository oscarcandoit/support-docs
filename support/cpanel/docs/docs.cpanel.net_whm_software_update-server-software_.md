---
url: "https://docs.cpanel.net/whm/software/update-server-software/"
title: "Update Server Software | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/software/update-server-software/#main-content)

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
3. [Software](https://docs.cpanel.net/whm/software/)
4. Update Server Software


[whmui](https://docs.cpanel.net/tags/whmui/) [server](https://docs.cpanel.net/tags/server/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/software/update-server-software/#overview)

* * *

[Update Server Software](https://docs.cpanel.net/whm/software/update-server-software/#update-server-software)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/software/update-server-software/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/software/update-server-software/#overview)

* * *

[Update Server Software](https://docs.cpanel.net/whm/software/update-server-software/#update-server-software)

* * *

## Update Server Software

![](https://docs.cpanel.net/img/whm-icons/update_server_software.svg)

_Valid for versions 86 through the latest version_

#### Version:

#### [86](https://docs.cpanel.net/whm/software/update-server-software/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to manually update software dependencies that your operating system installed and which cPanel & WHM requires in order to run.

Important:

- You **can’t** use this feature to update cPanel & WHM. To update cPanel & WHM manually, use WHM’s [_Upgrade to Latest Version_](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version) interface ( _WHM » Home » cPanel » Upgrade to Latest Version_).
- This feature **doesn’t** update your operating system’s kernel. To update your operating system kernel, run the `yum update` command as the `root` user from the command line and then reboot your server.
- To update software dependencies from the command line, use the `/usr/local/cpanel/scripts/sysup` script.

## Update Server Software

To begin the update, click _Proceed_.

#### Additional Documentation

* * *

- [Background Process Killer](https://docs.cpanel.net/whm/system-health/background-process-killer/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Configuration Cluster](https://docs.cpanel.net/whm/clusters/configuration-cluster/)
- [Rebuild RPM Database](https://docs.cpanel.net/whm/software/rebuild-rpm-database/)
- [System Update](https://docs.cpanel.net/whm/software/system-update/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×

![Cookiebot session tracker icon loaded](https://imgsct.cookiebot.com/1.gif?dgi=da52fc49-8e48-42b7-9ad3-c219404f6f92)