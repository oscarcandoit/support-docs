---
url: "https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration/"
title: "cPanel Log Rotation Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration/#main-content)

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
3. [Service Configuration](https://docs.cpanel.net/whm/service-configuration/)
4. cPanel Log Rotation Configuration


[whmui](https://docs.cpanel.net/tags/whmui/) [logs](https://docs.cpanel.net/tags/logs/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration/#overview)

* * *

[Configure log files](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration/#configure-log-files)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration/#overview)

* * *

[Configure log files](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration/#configure-log-files)

* * *

## cPanel Log Rotation Configuration

![](https://docs.cpanel.net/img/whm-icons/cpanel_log_rotation_configuration.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to select cPanel & WHM log files for the `cpanellogd` daemon to compress and archive. At the end of each month, the `cpanellogd` daemon compresses the selected log files into a single file for each type. The system archives the compressed files in the `/usr/local/cpanel/logs/archive/` directory.

Important:

The system does **not** automatically delete the compressed log files. You **must** manually delete any unnecessary files. For information about cleaning out old log files, read our [How to Clean Unmanaged Log Files](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files) documentation.

Note:

For information about Apache® log rotation, read our Apache [_Log Rotation_](https://docs.cpanel.net/whm/service-configuration/log-rotation) interface ( _WHM » Home » Service Configuration » Apache Configuration » Log Rotation_) documentation.

## Configure log files

To select the log files to compress and archive, perform the following steps:

1. Select the checkboxes for the log files that you wish to archive.
2. Click _Save_.

Note:

For more information about log files that appear in this interface, read [The cPanel & WHM Log Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/) documentation.

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Daily Process Log](https://docs.cpanel.net/whm/server-status/daily-process-log/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [Log Rotation](https://docs.cpanel.net/whm/service-configuration/log-rotation/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×