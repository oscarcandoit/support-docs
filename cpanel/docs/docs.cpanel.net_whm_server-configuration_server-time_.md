---
url: "https://docs.cpanel.net/whm/server-configuration/server-time/"
title: "Server Time | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/server-time/#main-content)

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
3. [Server Configuration](https://docs.cpanel.net/whm/server-configuration/)
4. Server Time


[whmui](https://docs.cpanel.net/tags/whmui/) [server](https://docs.cpanel.net/tags/server/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-configuration/server-time/#overview)

* * *

[Set the time zone for your server](https://docs.cpanel.net/whm/server-configuration/server-time/#set-the-time-zone-for-your-server)

* * *

[Synchronize the time for your server](https://docs.cpanel.net/whm/server-configuration/server-time/#synchronize-the-time-for-your-server)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/server-time/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-configuration/server-time/#overview)

* * *

[Set the time zone for your server](https://docs.cpanel.net/whm/server-configuration/server-time/#set-the-time-zone-for-your-server)

* * *

[Synchronize the time for your server](https://docs.cpanel.net/whm/server-configuration/server-time/#synchronize-the-time-for-your-server)

* * *

## Server Time

![](https://docs.cpanel.net/img/whm-icons/server_time.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/server-configuration/server-time/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature allows you to set your server’s time zone and synchronize its time with your network’s time server.

Warning:

To validate your cPanel & WHM license, you **must** set your server to the correct time.

## Set the time zone for your server

To set the time zone on your server, perform the following steps:

1. Select the appropriate time zone from the menu.



Note:





We recommend that you set your server’s time zone to Universal Time, Coordinated (UTC). This allows servers that run in different time zones to interact, helping prevent Daylight Savings Time errors.

2. Click _Change TimeZone_.



Note:





To set your time zone from the command line, use the `timedatectl` command. For more information about the `timedatectl` command, read the [`timedatectl` command’s `man` page.](https://www.freedesktop.org/software/systemd/man/latest/timedatectl.html) cPanel users **cannot** use this command even if they have shell access.

3. Reboot the server to ensure that the time change is consistent throughout the server. The [System Reboot](https://docs.cpanel.net/whm/system-reboot/system-reboot) interface will allow you to reboot the server.


## Synchronize the time for your server

You may synchronize your server to your network’s time server, as determined by your hosting provider. This is useful if your server’s time is incorrect.

To synchronize your server’s time with the network time server, click _Sync Time with Time Server_.

#### Additional Documentation

* * *

- [Background Process Killer](https://docs.cpanel.net/whm/system-health/background-process-killer/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Link Server Nodes](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/)
- [Server Profile](https://docs.cpanel.net/whm/server-configuration/server-profile/)
- [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×