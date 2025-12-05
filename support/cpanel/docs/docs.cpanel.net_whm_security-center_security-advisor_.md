---
url: "https://docs.cpanel.net/whm/security-center/security-advisor/"
title: "Security Advisor | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/security-advisor/#main-content)

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
4. Security Advisor


[whmui](https://docs.cpanel.net/tags/whmui/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/security-advisor/#overview)

* * *

[Scan your server](https://docs.cpanel.net/whm/security-center/security-advisor/#scan-your-server)

* * *

[Resolve the issues](https://docs.cpanel.net/whm/security-center/security-advisor/#resolve-the-issues)

* * *

[Scan your server again](https://docs.cpanel.net/whm/security-center/security-advisor/#scan-your-server-again)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/security-advisor/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/security-advisor/#overview)

* * *

[Scan your server](https://docs.cpanel.net/whm/security-center/security-advisor/#scan-your-server)

* * *

[Resolve the issues](https://docs.cpanel.net/whm/security-center/security-advisor/#resolve-the-issues)

* * *

[Scan your server again](https://docs.cpanel.net/whm/security-center/security-advisor/#scan-your-server-again)

* * *

## Security Advisor

![](https://docs.cpanel.net/img/whm-icons/ico-security-advisor.svg)

_Valid for versions 84 through the latest version_

#### Version:

#### [84](https://docs.cpanel.net/whm/security-center/security-advisor/)

Last modified: _2025 June 5_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface runs a security scan on your server, and it advises you
about how to resolve any security issues that it finds.

Important:

If your system runs within a VPS environment, such as QEMU/KVM or
Virtuozzo, options that affect the operating system may be unavailable.
Contact your VPS hosting provider for assistance.

## Scan your server

The scan automatically begins when you open the interface. A list of
issues will appear in the following colors:

| Color | Type of alert | Description |
| --- | --- | --- |
| **Red** | Warning | This indicates a severe security issue. We **strongly** recommend that you address this issue immediately. |
| **Yellow** | Possible Issue | This indicates an issue that is critical, and we recommend that you investigate and resolve this issue as soon as possible. |
| **Blue** | Information | This indicates an optional way to improve the security of your server. |
| **Green** | Resolved | This indicates that an issue has been resolved. |

## Resolve the issues

Most alert boxes contain links to the appropriate WHM interface that
allows you to resolve the issue.

For example, you may get a _No brute force protection detected_ warning with a link to WHM’s [_cPHulk Brute Force Protection_](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/) interface ( _WHM » Home » Security Center » cPHulk Brute Force Protection_). To resolve this issue, click the link. This allows you to configure your server’s brute force protection.

## Scan your server again

After you resolve the issues, click _Scan Again_ to confirm that you
resolved the issues.

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [Host Access Control](https://docs.cpanel.net/whm/security-center/host-access-control/)
- [Manage External Authentications](https://docs.cpanel.net/whm/security-center/manage-external-authentications/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×