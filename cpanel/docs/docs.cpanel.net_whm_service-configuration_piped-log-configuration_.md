---
url: "https://docs.cpanel.net/whm/service-configuration/piped-log-configuration/"
title: "Piped Log Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/piped-log-configuration/#main-content)

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
4. Piped Log Configuration


[whmui](https://docs.cpanel.net/tags/whmui/) [apache](https://docs.cpanel.net/tags/apache/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/piped-log-configuration/#overview)

* * *

[Enable Piped Log Configuration](https://docs.cpanel.net/whm/service-configuration/piped-log-configuration/#enable-piped-log-configuration)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/piped-log-configuration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/piped-log-configuration/#overview)

* * *

[Enable Piped Log Configuration](https://docs.cpanel.net/whm/service-configuration/piped-log-configuration/#enable-piped-log-configuration)

* * *

## Piped Log Configuration

![](https://docs.cpanel.net/img/whm-icons/piped_log_configuration.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/service-configuration/piped-log-configuration/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface configures Apache to use a single target for all virtual host access and bandwidth logs. The system then pipes the combined logs to a helper application (the `splitlogs` binary), which splits them into separate domain logs. This option reduces the number of log files that Apache manages, which requires less system resources.

Note:

We recommend this option for systems with a large number of domains.


## Enable Piped Log Configuration

This feature’s setting defaults to _Enabled_.

To disable this feature, perform the following steps:

1. Deselect the _Enable Piped Apache Logs_ checkbox.
2. Click _Save_.

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [Global Configuration](https://docs.cpanel.net/whm/service-configuration/global-configuration/)
- [Include Editor](https://docs.cpanel.net/whm/service-configuration/include-editor/)
- [Log Rotation](https://docs.cpanel.net/whm/service-configuration/log-rotation/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×