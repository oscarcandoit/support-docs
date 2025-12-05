---
url: "https://docs.cpanel.net/cpanel/security/modsecurity/"
title: "ModSecurity® | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/security/modsecurity/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Security](https://docs.cpanel.net/cpanel/security/)
4. ModSecurity®


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [modsecurity](https://docs.cpanel.net/tags/modsecurity/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/security/modsecurity/#overview)

* * *

[Enable for all domains](https://docs.cpanel.net/cpanel/security/modsecurity/#enable-for-all-domains)

* * *

[Disable for all domains](https://docs.cpanel.net/cpanel/security/modsecurity/#disable-for-all-domains)

* * *

[Configure Individual Domains](https://docs.cpanel.net/cpanel/security/modsecurity/#configure-individual-domains)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/security/modsecurity/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/security/modsecurity/#overview)

* * *

[Enable for all domains](https://docs.cpanel.net/cpanel/security/modsecurity/#enable-for-all-domains)

* * *

[Disable for all domains](https://docs.cpanel.net/cpanel/security/modsecurity/#disable-for-all-domains)

* * *

[Configure Individual Domains](https://docs.cpanel.net/cpanel/security/modsecurity/#configure-individual-domains)

* * *

## ModSecurity®

![](https://docs.cpanel.net/img/cpanel-icons/mod_security.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/security/modsecurity/)

Last modified: _2024 July 3_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Warning:

We **strongly** recommend that you enable ModSecurity for **all** of your domains. **Only** disable ModSecurity while you troubleshoot ModSecurity-related problems.

This interface allows you to enable or disable ModSecurity for your domains. If you disable ModSecurity for a domain, that domain will **not** have any ModSecurity rules applied to it. For more information about ModSecurity rules, read our [OWASP® ModSecurity CRS](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/) documentation.

Note:

If you **cannot** access this interface from your cPanel account, ask your hosting provider to perform the following steps in WHM:

- Install the _mod\_security2_ module in the _Apache Modules_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface)
interface ( _WHM » Home » Software » EasyApache 4_).

- Enable the _ModSecurity Domain Manager_ feature in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager)
interface ( _WHM » Home » Packages » Feature Manager_).


## Enable for all domains

To enable ModSecurity for all of your domains, click _Enable_.

## Disable for all domains

To disable ModSecurity for all of your domains, click _Disable_. A confirmation message will appear. Click _Disable All_ to disable
ModSecurity.

## Configure Individual Domains

Note:

You **must** enable ModSecurity under _Configure All Domains_ before you can configure ModSecurity for individual domains.

To enable or disable ModSecurity for a specific domain, select _On_ or _Off_.

#### Additional Documentation

* * *

- [Security Policy](https://docs.cpanel.net/cpanel/security/security-policy/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [SSL/TLS Wizard](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/)
- [Two-Factor Authentication for cPanel](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×