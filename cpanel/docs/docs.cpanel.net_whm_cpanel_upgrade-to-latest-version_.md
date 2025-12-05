---
url: "https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version/"
title: "Upgrade to Latest Version | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version/#main-content)

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
3. [cPanel](https://docs.cpanel.net/whm/cpanel/)
4. Upgrade to Latest Version


[updates](https://docs.cpanel.net/tags/updates/) [versions](https://docs.cpanel.net/tags/versions/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version/#overview)

* * *

[How to update your cPanel software](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version/#how-to-update-your-cpanel-software)

* * *

[Additional software updates](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version/#additional-software-updates)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version/#overview)

* * *

[How to update your cPanel software](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version/#how-to-update-your-cpanel-software)

* * *

[Additional software updates](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version/#additional-software-updates)

* * *

## Upgrade to Latest Version

![](https://docs.cpanel.net/img/whm-icons/upgrade_to_latest_version.svg)

_Valid for versions 90 through the latest version_

#### Version:

#### [90](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature allows you to update your cPanel & WHM software to the most recent build available on your server’s Release Tier. For example, if you selected the _CURRENT_ tier in WHM’s [_Update Preferences_](https://docs.cpanel.net/whm/server-configuration/update-preferences/) interface ( _WHM » Home » Server Configuration » Update Preferences_), this feature will upgrade your server to the latest CURRENT build.

Note:

- WHM displays the server’s cPanel & WHM version in the top right corner of the interface. You can alternately run the `/usr/local/cpanel/cpanel -V` command to view version information.

- To see the latest available cPanel & WHM version in your chosen release tier, visit our [httpupdate](http://httpupdate.cpanel.net/) page.

- If the upgrade process encounters blockers, it will stop and send a warning message. For more information, read our [Upgrade Blockers](https://docs.cpanel.net/knowledge-base/cpanel-product/upgrade-blockers/) documentation.

- If automatic updates are disabled on your server, click _Enable automatic updates_ to reenable them.


## How to update your cPanel software

To update your cPanel & WHM software, perform the following steps:

1. If you wish to force a reinstallation of the software, regardless of whether WHM detects that your system is up-to-date, select the appropriate checkbox. This can be useful if corrupt files exist and you wish to reinstall them.

2. Click _Click to Upgrade_.


Note:

- If you use Safari® on iPad, the browser may display text that is too small to read. To adjust the text size, use the iPad’s zoom gesture.

- You can also run the `/scripts/upcp` script via the command line as the `root` user.


## Additional software updates

The script that this feature runs (`/usr/local/cpanel/scripts/upcp`) calls other scripts in the `/usr/local/cpanel/scripts` directory that will update most of the software on your system.

The following table lists the additional scripts and the software that they update:

| Script Name | WHM Feature | Description |
| --- | --- | --- |
| `/usr/local/cpanel/scripts/rpmup2` | _System Update_ | This script updates your system software. <br>Note:<br>This script is similar to the `yum update` command. |
| `/usr/local/cpanel/scripts/sysup` | [_Update Server Software_](https://docs.cpanel.net/whm/software/update-server-software/) | This script updates software dependencies that the operating system provides and cPanel & WHM requires. |
| The `/usr/local/cpanel/scripts/*up` scripts | _N/A_ | cPanel & WHM contains a number of scripts that update applications which cPanel & WHM installs. For a complete list of `*up` scripts, visit our [WHM Scripts](https://docs.cpanel.net/whm/scripts/whm-scripts/) documentation. |

#### Additional Documentation

* * *

- [Change Log](https://docs.cpanel.net/whm/cpanel/change-log/)
- [Customization](https://docs.cpanel.net/whm/cpanel/customization/)
- [Manage Plugins](https://docs.cpanel.net/whm/cpanel/manage-plugins/)
- [Rebuild RPM Database](https://docs.cpanel.net/whm/software/rebuild-rpm-database/)
- [System Update](https://docs.cpanel.net/whm/software/system-update/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×