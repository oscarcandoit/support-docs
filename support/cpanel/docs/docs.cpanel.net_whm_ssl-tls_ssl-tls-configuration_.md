---
url: "https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/"
title: "SSL/TLS Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/#main-content)

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
3. [SSL-TLS](https://docs.cpanel.net/whm/ssl-tls/)
4. SSL/TLS Configuration


[security](https://docs.cpanel.net/tags/security/) [ssl](https://docs.cpanel.net/tags/ssl/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/#overview)

* * *

[Default SSL/TLS Key Type](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/#default-ssltls-key-type)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/#overview)

* * *

[Default SSL/TLS Key Type](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/#default-ssltls-key-type)

* * *

## SSL/TLS Configuration

![](https://docs.cpanel.net/img/whm-icons/ssl_tls_configuration.svg)

_Valid for versions 92 through the latest version_

#### Version:

#### [92](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface lets you modify your server’s SSL/TLS-related configurations.

### Default SSL/TLS Key Type

Use this feature to select a default SSL/TLS key type for your server. The system uses the selected key type when it provisions all users’ SSL/TLS certificates and signing requests. It also uses this key to generate `root`’s SSL/TLS keys. By default, the system uses the _RSA, 2,048-bit_ key type. For more information about the available key types, read the [SSL/TLS Key Types](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types) documentation.

After you select your preferred key type, click _Save_ to update your server’s settings.

Note:

- You can also change this setting in the _Security_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) interface ( _WHM » Home » Server Configuration » Tweak Settings_).
- cPanel users can set their own preferred SSL/TLS key type in cPanel’s [_SSL/TLS_](https://docs.cpanel.net/cpanel/security/ssl-tls) interface ( _cPanel » Home » Security » SSL/TLS_). The user’s selected setting will **supersede** the system-level setting.

Important:

When you update this setting, the system will perform an [AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) run. This updates **all** installed AutoSSL-issued certificates to use the new key type.

#### Additional Documentation

* * *

- [Generate an SSL Certificate and Signing Request](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/)
- [Install an SSL Certificate on a Domain](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/)
- [Manage AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/)
- [Manage Service SSL Certificates](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/)
- [Manage SSL Hosts](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×