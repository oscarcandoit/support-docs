---
url: "https://docs.cpanel.net/whm/service-configuration/memory-usage-restrictions/"
title: "Memory Usage Restrictions | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/memory-usage-restrictions/#main-content)

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
4. Memory Usage Restrictions


[apache](https://docs.cpanel.net/tags/apache/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/memory-usage-restrictions/#overview)

* * *

[Set a memory usage limit](https://docs.cpanel.net/whm/service-configuration/memory-usage-restrictions/#set-a-memory-usage-limit)

* * *

[Restart Apache](https://docs.cpanel.net/whm/service-configuration/memory-usage-restrictions/#restart-apache)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/memory-usage-restrictions/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/memory-usage-restrictions/#overview)

* * *

[Set a memory usage limit](https://docs.cpanel.net/whm/service-configuration/memory-usage-restrictions/#set-a-memory-usage-limit)

* * *

[Restart Apache](https://docs.cpanel.net/whm/service-configuration/memory-usage-restrictions/#restart-apache)

* * *

## Memory Usage Restrictions

![](https://docs.cpanel.net/img/whm-icons/memory_usage_restrictions.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/service-configuration/memory-usage-restrictions/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface calculates and sets a new memory limit for Apache processes. This limit only applies to each individual Apache process. For more information, read Apache’s [RLimitMEM](http://httpd.apache.org/docs/2.0/mod/core.html#rlimitmem) documentation.

Note:

A process memory limit increases the stability of your server, but may reduce process performance.


## Set a memory usage limit

To set a new limit for Apache processes, perform the following steps:

1. Select _Enabled_ under _RLimitMEM_ Settings.

2. Enter a value in the text box.







Note:




The RLimitMEM value must be an integer greater than 1.


3. Click _Save_.


## Restart Apache

After you set a new memory limit, you must restart Apache in order for the change to take effect.

- To rebuild and restart Apache now, click _Rebuild Configuration and Restart Apache_.
- To rebuild and restart Apache later, use WHM’s _HTTP Server (Apache)_ interface ( _WHM » Home » Restart Services » HTTP Server (Apache)_).

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