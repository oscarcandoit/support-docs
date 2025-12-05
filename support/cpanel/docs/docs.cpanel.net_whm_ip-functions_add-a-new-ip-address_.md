---
url: "https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/"
title: "Add a New IP Address | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/#main-content)

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
4. Add a New IP Address


[ip](https://docs.cpanel.net/tags/ip/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/#overview)

* * *

[Add a New IP Address (or Addresses)](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/#add-a-new-ip-address-or-addresses)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/#overview)

* * *

[Add a New IP Address (or Addresses)](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/#add-a-new-ip-address-or-addresses)

* * *

## Add a New IP Address

![](https://docs.cpanel.net/img/whm-icons/add_a_new_ip_address.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to add an IP address to your IP address pool. Use this pool, for example, when you assign a static IP address to a new account.

Note:

Please contact your hosting or network provider for an IP address or range of IP addresses. They can also provide you with a subnet mask for the address or addresses.

To add multiple IP addresses simultaneously, use any of the following formats:

| Format | Example |
| --- | --- |
| Class C CIDR | `192.168.0.128/25` |
| IP/Netmask | `192.168.0.128/255.255.255.128` |
| IP Range | `192.168.0.128-255` |

Warning:

You **must** add an IP address through this interface for cPanel & WHM to recognize the IP address.


## Add a New IP Address (or Addresses)

To add one or more IP addresses in the _Add a New IP Address_ table, perform the following steps:

1. Enter the IP address or addresses in the _New IP or IP range to add_ text box.







Note:





- If you are in [1:1 NAT Mode](https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/), enter the **local IP address**, not the **public IP address**.

- If the _New IP and IP range to add value_ uses Class C CIDR format, you **must** use a mask range between 24 through 30.


2. Enter the subnet mask in the _Select a subnet mask for the IP or IPs above to use:_ text box.







Note:




An incorrect subnet mask may cause networking issues for your server or other servers on your network. If you do not know the correct subnet mask for this IP address or IP address range, ask your hosting or networking provider.


3. Enter any IP addresses to exclude in the IPs and IP ranges to exclude from the range of new IPs text box.

4. Click _Submit_ to add the IP address or addresses.


When you add an IP address, the system attempts to add an alias of that IP address to the main network interface. This process [rebuilds the IP address pool](https://docs.cpanel.net/whm/ip-functions/rebuild-the-ip-address-pool/), which resides in the `/etc/ipaddrpool` file. The system stores IP addresses within the `/etc/ips` file. The `ipaliases` service activates those IP addresses when the server starts.

For more information about the `ipaliases` service, read our [The cPanel & WHM Service Daemons](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-service-daemons/) documentation.

#### Additional Documentation

* * *

- [Assign IPv6 Address](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/)
- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [Rebuild the IP Address Pool](https://docs.cpanel.net/whm/ip-functions/rebuild-the-ip-address-pool/)
- [Show IP Address Usage](https://docs.cpanel.net/whm/ip-functions/show-ip-address-usage/)
- [Show/Edit Reserved IPs](https://docs.cpanel.net/whm/ip-functions/show-edit-reserved-ips/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×