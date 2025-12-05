---
url: "https://docs.cpanel.net/whm/service-configuration/reserved-ip-address-editor/"
title: "Reserved IP Address Editor | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/reserved-ip-address-editor/#main-content)

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
4. Reserved IP Address Editor


[ip](https://docs.cpanel.net/tags/ip/) [whmui](https://docs.cpanel.net/tags/whmui/) [apache](https://docs.cpanel.net/tags/apache/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/reserved-ip-address-editor/#overview)

* * *

[Add an IP address](https://docs.cpanel.net/whm/service-configuration/reserved-ip-address-editor/#add-an-ip-address)

* * *

[Restart Apache](https://docs.cpanel.net/whm/service-configuration/reserved-ip-address-editor/#restart-apache)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/reserved-ip-address-editor/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/reserved-ip-address-editor/#overview)

* * *

[Add an IP address](https://docs.cpanel.net/whm/service-configuration/reserved-ip-address-editor/#add-an-ip-address)

* * *

[Restart Apache](https://docs.cpanel.net/whm/service-configuration/reserved-ip-address-editor/#restart-apache)

* * *

## Reserved IP Address Editor

![](https://docs.cpanel.net/img/whm-icons/reserved_ips_editor.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/service-configuration/reserved-ip-address-editor/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

By default, your system configures Apache to respond to any request on any IP address that you add to the server. The _Reserved IP Address Editor_ interface allows you to configure Apache to ignore HTTP requests on certain IP addresses. Also, the system will not assign those IP addresses to new accounts.

Note:

In order to reserve an IP address, the IP address **must** already exist on the server. You can add IP addresses to your server with WHM’s [_Add a New IP Address_](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/) interface ( _WHM » Home » IP Functions » Add a New IP Address_).

## Add an IP address

To add an IP address to, or remove an IP address from, the reserved IP address list, perform the following steps:

1. Select the _Reserved checkbox_ for to the IP address that you wish to reserve.

2. Click _Save_.


Apache will **not** use the IP addresses that you select.

## Restart Apache

After you add an IP address to the reserved IP address list, you **must** rebuild and restart Apache in order for the changes to take effect.

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