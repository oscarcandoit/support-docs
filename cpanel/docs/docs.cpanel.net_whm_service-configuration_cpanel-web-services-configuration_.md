---
url: "https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/"
title: "cPanel Web Services Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/#main-content)

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
4. cPanel Web Services Configuration


[whmui](https://docs.cpanel.net/tags/whmui/) [ssl](https://docs.cpanel.net/tags/ssl/) [encryption](https://docs.cpanel.net/tags/encryption/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/#overview)

* * *

[Defaults](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/#defaults)

* * *

[Edit the cipher list](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/#edit-the-cipher-list)

* * *

[Edit the protocol list](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/#edit-the-protocol-list)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/#overview)

* * *

[Defaults](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/#defaults)

* * *

[Edit the cipher list](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/#edit-the-cipher-list)

* * *

[Edit the protocol list](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/#edit-the-protocol-list)

* * *

## cPanel Web Services Configuration

![](https://docs.cpanel.net/img/whm-icons/cpanel_web_services_configuration.svg)

_Valid for versions 88 through the latest version_

#### Version:

#### [88](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The system uses cipher suites to negotiate security settings for network connections over TLS/SSL. This interface allows you to edit the TLS/SSL Cipher List and TLS/SSL Protocol list for cPanel, WHM, and Webmail.

Warning:

We recommend that **only** advanced users edit the cipher and protocol lists.

Important:

cPanel & WHM supports [Transport Layer Security (TLS) protocol version 1.2](https://tools.ietf.org/html/rfc5246) and [Transport Layer Security (TLS) protocol version 1.3](https://tools.ietf.org/html/rfc8446):

- cPanel & WHM only supports TLSv1.2 or later. The system enables TLSv1.2 by default.
- Not all clients will support TLSv1.3, which requires OpenSSL 1.1.1 or higher.

## Defaults

By default, cPanel & WHM uses the following cipher list for web services:

[Click to view...](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/#click-to-view---1764175702320941473)

```perl
ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384
```

By default, cPanel & WHM uses the following protocol list for web services:

[Click to view...](https://docs.cpanel.net/whm/service-configuration/cpanel-web-services-configuration/#click-to-view---1764175702321435991)

```perl
SSLv23:!SSLv2:!SSLv3:!TLSv1:!TLSv1_1
```

## Edit the cipher list

To edit the cipher list, enter the appropriate cipher in the text box and click _Save_.

Note:

- The default cipher list is PCI compliant. To edit the cipher list to improve the security level on your server, read Apache’s [SSLCipherSuite Directive](http://httpd.apache.org/docs/current/mod/mod_ssl.html#sslciphersuite) documentation.

- We do **not** recommend that you edit the cipher list to lower the security level. Make certain that the cipher suite uses **at least** 128-bit encryption.


## Edit the protocol list

To edit the protocol list, enter the appropriate protocol list in the text box and click _Save_.

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [cPanel Web Disk Configuration](https://docs.cpanel.net/whm/service-configuration/cpanel-web-disk-configuration/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [Exim Configuration Manager](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/)
- [Manage Service SSL Certificates](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×