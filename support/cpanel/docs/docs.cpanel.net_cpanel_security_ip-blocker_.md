---
url: "https://docs.cpanel.net/cpanel/security/ip-blocker/"
title: "IP Blocker | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/security/ip-blocker/#main-content)

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
4. IP Blocker


[ip](https://docs.cpanel.net/tags/ip/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/security/ip-blocker/#overview)

* * *

[Block an IP address](https://docs.cpanel.net/cpanel/security/ip-blocker/#block-an-ip-address)

* * *

[Currently-Blocked IP Addresses](https://docs.cpanel.net/cpanel/security/ip-blocker/#currently-blocked-ip-addresses)

* * *

[Unblock an IP address](https://docs.cpanel.net/cpanel/security/ip-blocker/#unblock-an-ip-address)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/security/ip-blocker/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/security/ip-blocker/#overview)

* * *

[Block an IP address](https://docs.cpanel.net/cpanel/security/ip-blocker/#block-an-ip-address)

* * *

[Currently-Blocked IP Addresses](https://docs.cpanel.net/cpanel/security/ip-blocker/#currently-blocked-ip-addresses)

* * *

[Unblock an IP address](https://docs.cpanel.net/cpanel/security/ip-blocker/#unblock-an-ip-address)

* * *

## IP Blocker

![](https://docs.cpanel.net/img/cpanel-icons/ip_blocker.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/security/ip-blocker/)

Last modified: _2024 June 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The _IP Blocker_ interface allows you to block access to your website for one or more Internet Protocol (IP) Addresses or Fully Qualified Domain Names (FQDN).

Note:

This interface **only** blocks access to your website, not other services like the [Webmail](https://docs.cpanel.net/webmail/the-webmail-interface/) interface. WHM users or your hosting provider can block IP addresses at the server level via the [_Host Access Control_](https://docs.cpanel.net/whm/security-center/host-access-control) interface ( _WHM » Home » Security Center » Host Access Control_).

## Block an IP address

Note:

If you enter IP addresses directly into the .htaccess file, enter them in CIDR format **only**.

To deny access to an IP address or range of IP addresses, perform the following steps:

1. Enter the IP address or range in the _IP Address or Domain_ text box. You can enter IP addresses in any of the following formats:

   - Single IP address (for example, `10.5.3.33`).
   - Range (for example, `10.5.3.3-10.5.3.40`).
   - Implied range (for example, `10.5.3.3-40`).
   - CIDR format (for example, `10.5.3.3/32`).
   - Implied IP address (for example, `10.`).
2. Click _Add_.

Warning:

`10.` as an implied IP address represents `10.*.*.*`, where each asterisk (`*`) represents a positive whole number. If you enter `10.`, the system blocks access to any IP address that begin with `10`.

## Currently-Blocked IP Addresses

The system separates the IP address ranges that you enter into subnets in CIDR format. Then, the system adds the addresses to the `.htaccess` file.

The interface lists blocked IP addresses and ranges in the table in CIDR format, where:

- _Server Setting_ represents the CIDR-formatted IP address range.
- _Beginning IP_ represents the begging of the range.
- _Ending IP_ represents the end of the range.

For example, if you enter the range `208.74.124.96-208.74.124.128`, the _Currently-Blocked IP Addresses_ table will appear similar to the following example:

![Currently blocked IP addresses](https://docs.cpanel.net/img/ipblockercurrently.png)

## Unblock an IP address

To remove an IP address from the list of blocked IP addresses, perform the following steps:

1. Click _Delete_ in the _Actions_ column for the appropriate IP address.

2. Click _Remove IP_.


#### Additional Documentation

* * *

- [Hotlink Protection](https://docs.cpanel.net/cpanel/security/hotlink-protection/)
- [Leech Protection](https://docs.cpanel.net/cpanel/security/leech-protection/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×