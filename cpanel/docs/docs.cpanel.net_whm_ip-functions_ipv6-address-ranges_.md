---
url: "https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/"
title: "IPv6 Address Ranges | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/#main-content)

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
4. IPv6 Address Ranges


[ip](https://docs.cpanel.net/tags/ip/) [ipv6](https://docs.cpanel.net/tags/ipv6/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/#overview)

* * *

[Getting started](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/#getting-started)

* * *

[Add Range](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/#add-range)

* * *

[IPv6 Address Ranges table](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/#ipv6-address-ranges-table)

* * *

[IP Range Details](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/#ip-range-details)

* * *

[Actions](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/#actions)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/#overview)

* * *

[Getting started](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/#getting-started)

* * *

[Add Range](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/#add-range)

* * *

[IPv6 Address Ranges table](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/#ipv6-address-ranges-table)

* * *

[IP Range Details](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/#ip-range-details)

* * *

[Actions](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/#actions)

* * *

## IPv6 Address Ranges

![](https://docs.cpanel.net/img/whm-icons/ipv6_ranges.svg)

_Valid for versions 126 through the latest version_

#### Version:

#### [124](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/124/)

#### [126](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/)

Last modified: _2025 September 15_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Warning:

Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.

This interface adds or deletes an IPv6 address range from the server. Use this interface to add at least one IPv6 address range before you assign dedicated IPv6 addresses to a user in WHM’s [_Assign IPv6 Address_](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address) interface ( _WHM » Home » IP Functions » Assign IPv6 Address_).

## Getting started

Before you use this interface, you **must** ensure that IPv6 functions properly on your server:

- For IPv6 to function on a cPanel & WHM server, the `cpsrvd daemon` **must** listen on IPv6 addresses. To enable this functionality, select _On_ for the _Listen on IPv6 Addresses_ setting in the _System_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).
- Use the steps in our [Guide to IPv6](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6) documentation to check whether IPv6 functions properly.






Note:




Your hosting provider may require that you reserve IPv6 address ranges for their use.



## Add Range

To add a range of IPv6 addresses, perform the following steps:

1. Click _Add Range_.
2. Enter a name for the IPv6 address range in the _Range Name_ text box. This name **must** contain 64 characters or fewer.
3. Enter the IPv6 address range in the _Range_ text box. IPv6 address ranges consist of a shortened IPv6 address, a slash (`/`), and a number that indicates the network portion of the IPv6 address range. For example:



```bash
2001:0db8:1a34:56cf::/64
```





Important:





- Do **not** add an IPv6 address range that contains the main IPv6 address that you set in WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager® Setup_).
- You **must** add your gateway individually before you add the full gateway range and set the gateway to `RESERVED` so that the system does not assign this IP address to an account. For example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>2001:0db8:1a34:56cf::/128 RESERVED<br>2001:0db8:1a34:56cf::1/128 RESERVED<br>``` |

4. Select one of the following range types from the _Range Type_ menu:

   - _Available_ — You can distribute the addresses in this range to the users on your server.
   - _Reserved_ — You **cannot** distribute the addresses in this range to the users on your server.






     Note:





     If you select _Reserved_, WHM’s [_Assign IPv6 Address_](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address) interface ( _WHM » Home » IP Functions » Assign IPv6 Address_) will **not** list the range.
5. Enter a description of the IPv6 address range in the _Range Notes_ text box. This description **must** contain 256 characters or fewer.
6. Click _Add Range_ to add the IPv6 address range, or click _Cancel_ to close the form.

## IPv6 Address Ranges table

The _IPv6 Address Ranges_ table lists information about each IPv6 address range on the server.

### IP Range Details

This column lists the following information for each IPv6 address range on the server:

- The range name.
- The address range.
- The range notes.
- _RESERVED_, if you selected _Reserved_ as the address range’s type.

### Actions

To delete an IPv6 address range, click _Delete Range_ for that range in the _IPv6 Address Ranges_ table, and then click _OK_.

Note:

You **cannot** delete a range that currently belongs to a user on your server. To remove an IPv6 address range from an account, use WHM’s [_Assign IPv6 Address_](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address) interface ( _WHM » Home » IP Functions » Assign IPv6 Address_).

#### Additional Documentation

* * *

- [Add a New IP Address](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/)
- [Assign IPv6 Address](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/)
- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [How to Configure Reverse DNS in WHM](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/)
- [IP Migration Wizard](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×