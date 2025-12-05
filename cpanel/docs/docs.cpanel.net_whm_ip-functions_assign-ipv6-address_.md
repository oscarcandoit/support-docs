---
url: "https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/"
title: "Assign IPv6 Address | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/#main-content)

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
3. [IP Functions](https://docs.cpanel.net/whm/ip-functions/)
4. Assign IPv6 Address


[ip](https://docs.cpanel.net/tags/ip/) [ipv6](https://docs.cpanel.net/tags/ipv6/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/#overview)

* * *

[Getting started](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/#getting-started)

* * *

[Select an Account](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/#select-an-account)

* * *

[Account information](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/#account-information)

* * *

[Enable IPv6](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/#enable-ipv6)

* * *

[Disable IPv6](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/#disable-ipv6)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/#overview)

* * *

[Getting started](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/#getting-started)

* * *

[Select an Account](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/#select-an-account)

* * *

[Account information](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/#account-information)

* * *

[Enable IPv6](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/#enable-ipv6)

* * *

[Disable IPv6](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/#disable-ipv6)

* * *

## Assign IPv6 Address

![](https://docs.cpanel.net/img/whm-icons/assign_ipv6_address.svg)

_Valid for versions 96 through the latest version_

#### Version:

#### [96](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/)

Last modified: _2025 June 5_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Warning:

Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.

Users with `root`-level privileges can assign IPv6 addresses to the server’s accounts. For more information about IPv6, read our [Guide to IPv6](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6) documentation.

## Getting started

Before you use this interface to assign dedicated IPv6 addresses, you **must** perform the following:

- Enable IPv6 on the server and use WHM’s [_IPv6 Address Ranges_](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges) interface ( _WHM_ » _Home_ » _IP Functions_ » _IPv6 Address Ranges_) to add IPv6 ranges. If you have not added IPv6 ranges to the server, the interface displays a _No IPv6 ranges have been added._ message.
- For IPv6 to function on a cPanel & WHM server, the cpsrvd daemon **must** listen on IPv6 addresses. To enable this functionality, select _On_ for the _Listen on IPv6 Addresses_ setting in the _System_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM_ » _Home_ » _Server Configuration_ » _Tweak Settings_).

To use this interface to assign a shared IPv6 address to one or more users, you **must** configure a shared IPv6 address in WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) interface ( _WHM_ » _Home_ » _Server Configuration_ » _Basic WebHost Manager Setup_). Do **not** assign or configure a shared IPv6 address that exists within an IPv6 range. The system will block any shared IPv6 addresses that exist within this range.

Warning:

- When you use this interface to assign IPv6 ranges, the system erases any IPv6 addresses that you assigned to the selected users via other methods.
- If you see an _Apache must be recompiled or Apache should be recompiled_ warning at the top of this interface, recompile [EasyApache 4](https://docs.cpanel.net/ea4).

## Select an Account

Note:

**Do not** select an account that is, or will be, distributed to a [mail child node](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide).

To review IPv6 information for a specific account, select the desired account username from the _Select an Account_ menu. The interface displays the account’s IPv6 information.

- To search for a specific username or primary domain, enter the username or primary domain in the _Filter Accounts_ text box.
- Click the _Select All_ icon (![Select All icon](https://docs.cpanel.net/img/bluestar.png)) to select all of the accounts on the server.

### Account information

If you already assigned an IPv6 address range to the selected account, the interface displays the following information:

- _IPv6 Address_ — The account’s IPv6 address.
- _Primary Domain_ — The account’s main domain.
- _IPv6 Subdomain_ — A link to the account’s IPv6 subdomain. Click this link to navigate to `ipv6.example.com`, where `example.com` represents the account’s main domain. This address resolves to the assigned IPv6 address.

### Enable IPv6

To assign an IPv6 address to the selected account, perform the following steps:

1. Select the desired IPv6 address range from the _Enable this account with an IPv6 address from the selected range_ menu.

   - You **must** select a range that includes available addresses.
   - To assign the server’s shared IPv6 address to an account, select _The server’s shared IPv6 address_. This address functions as a shared, rather than dedicated, address.






     Note:





     Your server may use a Stateless Autoconfigured Address (SLAAC) address that your MAC address determines. This address changes if your hardware changes. For example, if you replace your ethernet card, the new card receives a new IPv6 address. This causes the old address’s VirtualHosts to use the wrong IPv6 address.
2. Click _Enable Account_. When you enable IPv6 on an account, the system performs the following actions:

   - Binds that IPv6 address to your server.
   - Adds a AAAA record for the DNS zone on the domains that the account owns.






     Note:





     An enabled account maintains its IPv6 address information even if you enable it again with a different IPv6 address range.

### Disable IPv6

Click _Disable Account_ to remove the IPv6 address from the selected account.

Note:

When you disable IPv6 on an account, the system unbinds that IPv6 address from your server and the account loses the address. If you enable IPv6 on that account again, the system assigns it a different IPv6 address.


#### Additional Documentation

* * *

- [Add a New IP Address](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/)
- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [How to Configure Reverse DNS in WHM](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/)
- [IP Migration Wizard](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/)
- [IPv6 Address Ranges](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×