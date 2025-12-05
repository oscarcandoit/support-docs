---
url: "https://docs.cpanel.net/whm/networking-setup/resolver-configuration/"
title: "Resolver Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/networking-setup/resolver-configuration/#main-content)

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
3. [Networking Setup](https://docs.cpanel.net/whm/networking-setup/)
4. Resolver Configuration


[nameservers](https://docs.cpanel.net/tags/nameservers/) [networking](https://docs.cpanel.net/tags/networking/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/networking-setup/resolver-configuration/#overview)

* * *

[Configure resolvers](https://docs.cpanel.net/whm/networking-setup/resolver-configuration/#configure-resolvers)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/networking-setup/resolver-configuration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/networking-setup/resolver-configuration/#overview)

* * *

[Configure resolvers](https://docs.cpanel.net/whm/networking-setup/resolver-configuration/#configure-resolvers)

* * *

## Resolver Configuration

![](https://docs.cpanel.net/img/whm-icons/resolver_configuration.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/networking-setup/resolver-configuration/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Resolver Configuration_ interface allows you to use a configuration wizard to edit the `/etc/resolv.conf` file. This file contains the nameservers that your server queries to resolve domain names into IPv4 or IPv6 addresses.

Warning:

If you do not configure these resolvers correctly, your server will **not** connect to the internet.


After you navigate to this interface, click _Proceed_ to continue to the next interface.

## Configure resolvers

Your server requires at least two resolver IP addresses. You can also add an optional third address.

Note:

While cPanel & WHM does not require a third resolver IP address, we recommend that you use a third resolver IP address. An additional resolver helps to ensure your server’s uptime if you experience problems with either of your other resolvers.


To configure your resolvers, perform the following steps:

1. Enter the desired IPv4 or IPv6 addresses in the _Primary Resolver_ and _Secondary Resolver_ text boxes.






Note:




Contact your Internet Service Provider (ISP) to obtain resolver IP addresses.


2. To configure a third resolver, enter that IP address in the _Tertiary Resolver_ text box.

3. Click _Continue_. A confirmation message will appear.


Important:

If you use a open DNS resolver (such as Google®, CloudFlare® or OpenDNS®), Spamhaus and other public DNSBL servers may return a `"not listed" (NXDOMAIN)` message. Your system will fail to properly mark the site as a source of spam. If you use any blacklist in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/#rbls) interface, we recommend that you use your hosting provider’s or network provider’s resolvers. If you **must** use an open DNS resolver, be aware that this issue may occur.


Note:

If your server **cannot** connect to the internet after you configure your resolvers, check the `/etc/resolv.conf` file to ensure that it contains the IP addresses that you specified.


#### Additional Documentation

* * *

- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Change Hostname](https://docs.cpanel.net/whm/networking-setup/change-hostname/)
- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [Edit Reseller Nameservers and Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/)
- [Getting Started in WHM](https://docs.cpanel.net/whm/the-whm-interface/getting-started/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×