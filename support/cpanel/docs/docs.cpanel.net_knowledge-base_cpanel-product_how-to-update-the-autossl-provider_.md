---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-update-the-autossl-provider/"
title: "How to update the AutoSSL provider | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-update-the-autossl-provider/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [cPanel Product](https://docs.cpanel.net/knowledge-base/cpanel-product/)
4. How to update the AutoSSL provider


[ssl](https://docs.cpanel.net/tags/ssl/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-update-the-autossl-provider/#overview)

* * *

[Update your AutoSSL provider via WHM](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-update-the-autossl-provider/#update-your-autossl-provider-via-whm)

* * *

[Update your AutoSSL provider via the terminal](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-update-the-autossl-provider/#update-your-autossl-provider-via-the-terminal)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-update-the-autossl-provider/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-update-the-autossl-provider/#overview)

* * *

[Update your AutoSSL provider via WHM](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-update-the-autossl-provider/#update-your-autossl-provider-via-whm)

* * *

[Update your AutoSSL provider via the terminal](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-update-the-autossl-provider/#update-your-autossl-provider-via-the-terminal)

* * *

## How to update the AutoSSL provider

Last modified: _2025 May 22_

* * *

## Overview

This document explains how to update your server’s AutoSSL provider via the WHM interface or the terminal.

Note:

In cPanel & WHM version 120 and later, the Let’s Encrypt™ provider is the **only** AutoSSL provider. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/) documentation.

## Update your AutoSSL provider via WHM

To update your AutoSSL provider, perform the following steps:

1. [Log in to WHM](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/).
2. Navigate to WHM’s [_Manage AutoSSL_](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/) interface ( _WHM » Home » SSL/TLS » Manage AutoSSL_).
3. In the _AutoSSL Providers_ section, select the _Let’s Encrypt™_ radio button.
4. Select the _I agree to these terms of service._ and _Recreate my current registration with “Let’s Encrypt™”._ checkboxes.
5. Click _Save_.

## Update your AutoSSL provider via the terminal

To update your AutoSSL provider via the terminal, run the following commands as the root user:

```bash
whmapi1 set_autossl_provider provider=LetsEncrypt x_terms_of_service_accepted='https://letsencrypt.org/documents/LE-SA-v1.5-February-24-2025.pdf'
```

#### Additional Documentation

* * *

- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [Generate an SSL Certificate and Signing Request](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/)
- [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/)
- [How to Configure MySQL SSL Connections](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/)
- [Manage AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×