---
url: "https://docs.cpanel.net/whm/security-center/modsecurity-configuration/"
title: "ModSecurity® Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/modsecurity-configuration/#main-content)

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
4. ModSecurity® Configuration


[modsecurity](https://docs.cpanel.net/tags/modsecurity/) [apache](https://docs.cpanel.net/tags/apache/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/modsecurity-configuration/#overview)

* * *

[Configure Global Directives](https://docs.cpanel.net/whm/security-center/modsecurity-configuration/#configure-global-directives)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/modsecurity-configuration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/modsecurity-configuration/#overview)

* * *

[Configure Global Directives](https://docs.cpanel.net/whm/security-center/modsecurity-configuration/#configure-global-directives)

* * *

## ModSecurity® Configuration

![](https://docs.cpanel.net/img/whm-icons/modsecurity_configuration.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/security-center/modsecurity-configuration/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to configure ModSecurity’s global settings.

Note:

The system loads the `/etc/apache2/conf.d/modsec/modsec2.user.conf` file as an include.

- In previous versions of cPanel & WHM, EasyApache used this file as the default ruleset.
- This file’s rules may still affect the way in which ModSecurity functions, which may result in false positives on your system.
- If you see many false positives, check this file for custom rules.

## Configure Global Directives

Note:

- For more information about a setting or directive, click the directive name.
- After you make the desired changes, click _Save_ at the bottom of the interface.

In this interface, you can configure the following settings:

| Setting | Directive | Description |
| --- | --- | --- |
| _Audit Log Level_ | [SecAuditEngine](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#secauditengine) | This setting determines how the audit engine logs transactions. You can choose from the following options: <br>- Only log noteworthy transactions.<br>- Do not log any transactions.<br>- Log all transactions.<br>Warning:<br>We strongly recommend that you do **not** select this option. This option causes Apache to log every transaction, including your users’ and clients’ private data. The resulting log files will fill your system’s partitions quickly. Use this option **only** to debug your server. |
| _Connections Engine_ | [SecConnEngine](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#secconnengine) | This setting determines how the connections engine processes rules. You can choose from the following options:<br>- Process the rules.<br>- Do not process the rules.<br>- Process the rules in verbose mode, but do not execute disruptive actions. |
| _Rules Engine_ | [SecRuleEngine](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#secruleengine) | This setting determines how the rules engine processes rules. You can choose from the following options:<br>- Process the rules.<br>- Do not process the rules.<br>- Process the rules in verbose mode, but do not execute disruptive actions. |
| _Backend Compression_ | [SecDisableBackendCompression](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#secdisablebackendcompression) | This setting enables or disables backend compression, but does not affect frontend compression. This setting defaults to _Enabled_. |
| _Geolocation Database_ | [SecGeoLookupDb](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#secgsblookupdb) | This setting allows you to specify the geolocation database’s path. Enter the desired path in the _Geolocation Database_ text box. |
| _Google Safe Browsing Database_ | [SecGsbLookupDb](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#secgsblookupdb) | This setting allows you to specify the Google Safe Browsing™ Database’s path. Enter the desired path in the _Google Safe Browsing Database_ text box. |
| _Guardian Log_ | [SecGuardianLog](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual-%28v2.x%29#SecGuardianLog) | This setting allows you to pipe transaction log information to an external application for additional analysis. Enter the path to the desired application in the _Guardian Log_ text box. |
| _Project Honey Pot Http:BL API Key_ | [SecHttpBlKey](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#sechttpblkey) | This setting allows you to supply a Project Honey Pot API Key to use with the `@rbl` operator. Enter the API key in the _Project Honey Pot Http:BL API Key_ text box. |
| _Perl Compatible Regular Expressions Library Match Limit_ | [SecPcreMatchLimit](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#secpcrematchlimit) | This setting determines the match limit for the PCRE library. This setting defaults to `1500`. |
| _Perl Compatible Regular Expressions Library Match Limit Recursion_ | [SecPcreMatchLimitRecursion](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#secpcrematchlimitrecursion) | This setting determines the match limit recursion for the PCRE library. This setting defaults to `1500`. |

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Apache Status](https://docs.cpanel.net/whm/server-status/apache-status/)
- [ModSecurity® Tools](https://docs.cpanel.net/whm/security-center/modsecurity-tools/)
- [ModSecurity® Vendors](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×