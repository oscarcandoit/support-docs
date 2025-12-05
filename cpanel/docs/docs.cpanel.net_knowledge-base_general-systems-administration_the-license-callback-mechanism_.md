---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/the-license-callback-mechanism/"
title: "The License Callback Mechanism | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-license-callback-mechanism/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. The License Callback Mechanism


[ports](https://docs.cpanel.net/tags/ports/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-license-callback-mechanism/#overview)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-license-callback-mechanism/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-license-callback-mechanism/#overview)

* * *

## The License Callback Mechanism

Last modified: _2021 June 17_

* * *

## Overview

The license callback mechanism immediately updates a server after the license changes in either Manage2 or the cPanel Store. It cannot make any changes to the server. It **only** alerts the server that a change as been made to the license.

Note:

At least one port in the following table **must** be open for the license callback mechanism to work. The server only accepts requests to this API from cPanel & WHM. The license system does **not** send any other information to the customer’s server.

The license callback mechanism tries the following ports until one succeeds:

| Service | Port | Inbound | Outbound |
| --- | --- | --- | --- |
| cPanel | `2082` | ![](https://docs.cpanel.net/img/checkbox.png) |  |
| cPanel SSL | `2083` | ![](https://docs.cpanel.net/img/checkbox.png) |  |
| WHM | `2086` | ![](https://docs.cpanel.net/img/checkbox.png) |  |
| WHM SSL | `2087` | ![](https://docs.cpanel.net/img/checkbox.png) |  |
| Webmail SSL | `2096` | ![](https://docs.cpanel.net/img/checkbox.png) |  |

The license callback mechanism uses the following IP addresses to perform the license check:

- `208.74.121.0/24`
- `208.74.123.0/24`

More:

For more information on how to configure your firewall for cPanel & WHM service, read our [documentation](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/).

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×