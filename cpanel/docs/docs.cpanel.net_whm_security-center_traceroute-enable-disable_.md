---
url: "https://docs.cpanel.net/whm/security-center/traceroute-enable-disable/"
title: "Traceroute Enable/Disable | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/traceroute-enable-disable/#main-content)

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
4. Traceroute Enable/Disable


[networking](https://docs.cpanel.net/tags/networking/) [security](https://docs.cpanel.net/tags/security/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/traceroute-enable-disable/#overview)

* * *

[How to enable or disable traceroute](https://docs.cpanel.net/whm/security-center/traceroute-enable-disable/#how-to-enable-or-disable-traceroute)

* * *

[Traceroute file permissions](https://docs.cpanel.net/whm/security-center/traceroute-enable-disable/#traceroute-file-permissions)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/traceroute-enable-disable/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/traceroute-enable-disable/#overview)

* * *

[How to enable or disable traceroute](https://docs.cpanel.net/whm/security-center/traceroute-enable-disable/#how-to-enable-or-disable-traceroute)

* * *

[Traceroute file permissions](https://docs.cpanel.net/whm/security-center/traceroute-enable-disable/#traceroute-file-permissions)

* * *

## Traceroute Enable/Disable

![](https://docs.cpanel.net/img/whm-icons/traceroute_enable_disable.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/security-center/traceroute-enable-disable/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Traceroute is a command-line network tool that determines the route that information packets travel across the internet. This interface allows you to discover possible weaknesses that attackers might exploit, or to troubleshoot problems with the network.

Note:

The traceroute network tool is **not** related to cPanel’s [_Track Delivery_](https://docs.cpanel.net/cpanel/email/track-delivery/) interface ( _cPanel » Home » Email » Track Delivery_).

## How to enable or disable traceroute

Click _Enable_ to enable traceroute, or click _Disable_ to disable traceroute.

Traceroute is disabled by default.

## Traceroute file permissions

The system uses the permissions of the `/bin/traceroute` file to determine whether traceroute is enabled or disabled:

- `755` indicates that traceroute is enabled.

- `700` indicates that traceroute is disabled.


Advanced users can change the permissions for the `/bin/traceroute` file manually; however, the interface may not indicate these changes.

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