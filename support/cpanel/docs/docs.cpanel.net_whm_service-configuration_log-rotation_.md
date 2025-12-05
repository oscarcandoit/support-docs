---
url: "https://docs.cpanel.net/whm/service-configuration/log-rotation/"
title: "Log Rotation | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/log-rotation/#main-content)

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
4. Log Rotation


[logs](https://docs.cpanel.net/tags/logs/) [whmui](https://docs.cpanel.net/tags/whmui/) [apache](https://docs.cpanel.net/tags/apache/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/log-rotation/#overview)

* * *

[Configure log files](https://docs.cpanel.net/whm/service-configuration/log-rotation/#configure-log-files)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/log-rotation/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/log-rotation/#overview)

* * *

[Configure log files](https://docs.cpanel.net/whm/service-configuration/log-rotation/#configure-log-files)

* * *

## Log Rotation

![](https://docs.cpanel.net/img/whm-icons/log_rotation.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/service-configuration/log-rotation/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Note:

This document discusses using **Apache’s _Log Rotation_** interface ( _Home » Service Configuration » Apache Configuration » Log Rotation_) to manage the rotation and archiving of Apache log files.

For information about managing the rotation and archiving of **WHM & cPanel log files**, read our [cPanel Log Rotation Configuration](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration/) interface ( _Home » Service Configuration » cPanel Log Rotation Configuration_) documentation.

This interface allows you to select Apache log files for the `cpanellogd` daemon to compress and archive. The `cpanellogd` daemon compresses the selected log files into a single file for each type.

Archiving happens either when the log file grows larger than the log rotation size threshold or at the end of the month. The default log rotation size threshold is 300 MB. You can change it in the _Stats and Logs_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

The system stores the compressed files in the `/home/username/logs` directory, where username represents the name of the cPanel account. If you disable the _Archive logs in the user’s home directory at the end of each stats run unless configured by the user_ option in the _Stats and Logs_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_), the system will not store logs in each user’s directory.

Important:

The system does **not** automatically delete the compressed log files. You **must** manually delete any unnecessary files.

## Configure log files

To select the log files that the `cpanellogd` daemon will archive, perform the following steps:

1. Select the appropriate checkboxes next to the log files that you wish to archive.
   - `error_log` — This log file contains errors that Apache encounters when it tries to process a request.
   - `access_log` — This log file contains all requests that Apache processes.
   - `modsec_debug_log` — This log file contains errors that ModSecurity® encounters when it tries to block a request.
   - `suexec_log` — This file contains information about suEXEC audit logs. This is useful, for example, to diagnose internal server errors that do not produce relevant information in the error log.
2. Click _Save_.

Note:

For more information about log files that appear in this interface, read our [The cPanel & WHM Log Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/) documentation.

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [Global Configuration](https://docs.cpanel.net/whm/service-configuration/global-configuration/)
- [Include Editor](https://docs.cpanel.net/whm/service-configuration/include-editor/)
- [Memory Usage Restrictions](https://docs.cpanel.net/whm/service-configuration/memory-usage-restrictions/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×