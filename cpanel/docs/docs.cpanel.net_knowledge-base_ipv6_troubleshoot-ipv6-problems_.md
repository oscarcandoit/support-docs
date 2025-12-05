---
url: "https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/"
title: "Troubleshoot IPv6 Problems | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#main-content)

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
3. [IPv6](https://docs.cpanel.net/knowledge-base/ipv6/)
4. Troubleshoot IPv6 Problems


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ipv6](https://docs.cpanel.net/tags/ipv6/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#overview)

* * *

[Confirm that IPv6 functions on the server](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#confirm-that-ipv6-functions-on-the-server)

* * *

[Ping another server from the IPv6 server](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#ping-another-server-from-the-ipv6-server)

* * *

[Ping the IPv6 server from another server](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#ping-the-ipv6-server-from-another-server)

* * *

[Netmask misconfiguration](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#netmask-misconfiguration)

* * *

[Neighbor Delivery Protocol problems](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#neighbor-delivery-protocol-problems)

* * *

[Check the IPv6 addresses on your server](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#check-the-ipv6-addresses-on-your-server)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#overview)

* * *

[Confirm that IPv6 functions on the server](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#confirm-that-ipv6-functions-on-the-server)

* * *

[Ping another server from the IPv6 server](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#ping-another-server-from-the-ipv6-server)

* * *

[Ping the IPv6 server from another server](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#ping-the-ipv6-server-from-another-server)

* * *

[Netmask misconfiguration](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#netmask-misconfiguration)

* * *

[Neighbor Delivery Protocol problems](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#neighbor-delivery-protocol-problems)

* * *

[Check the IPv6 addresses on your server](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/#check-the-ipv6-addresses-on-your-server)

* * *

## Troubleshoot IPv6 Problems

Last modified: _2025 February 13_

* * *

## Overview

Warning:

Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.

This documentation lists common IPv6 problems, and steps to resolve them.

## Confirm that IPv6 functions on the server

To confirm whether IPv6 functions on your server, use the `ping6` command to ping another server, and to ping the IPv6 server.

Note:

If the `ping6` command fails, we recommend that you use the `traceroute` command to begin your investigation. This command displays detailed information about the path that information travels between one server and another, and lists the associated routers.


### Ping another server from the IPv6 server

To confirm that your server can reach other servers via IPv6, run the following command as the `root` user on your IPv6 server:

```perl
ping6 ipv6.google.com
```

If IPv6 functions on your server, this command’s output resembles the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br>PING ipv6.google.com(2001:4860:b002::68) 56 data bytes<br>64 bytes from 2001:4860:b002::68: icmp_seq=0 ttl=59 time=58.4 ms<br>64 bytes from 2001:4860:b002::68: icmp_seq=1 ttl=59 time=56.4 ms<br>64 bytes from 2001:4860:b002::68: icmp_seq=2 ttl=59 time=62.1 ms<br>``` |

Important:

If the command’s output does **not** resemble this example, IPv6 does **not** function on your server. You **must** resolve this issue before you can use cPanel & WHM with IPv6.


### Ping the IPv6 server from another server

To confirm that other servers can reach your server via IPv6, run the following command as the `root` user on another server:

```perl
ping6 2001:db8:10fe::5000
```

Note:

In this example, replace 2`001:db8:10fe::5000` with your server’s IPv6 address.

If IPv6 functions on your server, this command’s output resembles the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br>PING 2001:0db8:85a3::8a2e:0370:7334 56 data bytes<br>64 bytes from 2001:db8:10fe::5000: icmp_seq=1 ttl=62 time=0.847 ms<br>64 bytes from 2001:db8:10fe::5000: icmp_seq=2 ttl=62 time=0.994 ms<br>64 bytes from 2001:db8:10fe::5000: icmp_seq=3 ttl=62 time=0.909 ms<br>``` |

Important:

If the command’s output does **not** resemble this example, IPv6 does **not** function on your server. You **must** resolve this issue before you can use cPanel & WHM with IPv6.


## Netmask misconfiguration

IPv6 uses the same netmask as IPv4, but expresses it in CIDR notation. Typically, interfaces display this netmask and the IPv6 address together.

Make **certain** that you enter the correct netmask for your network when you add IPv6 addresses to your server. For example, IPv6 networks can use a `/128` CIDR mask to route single addresses and ranges, but recommended rollout procedures typically use the `/64` netmask instead. If you enter an incorrect netmask for your network, your server may not function correctly.

## Neighbor Delivery Protocol problems

IPv6 replaces IPv4’s Address Resolution Protocol (ARP) and Internet Control Message Protocol (ICMP) with the [Neighbor Discovery Protocol](https://en.wikipedia.org/wiki/Neighbor_Discovery_Protocol) (NDP). NDP uses multicast to solicit responses from the router and other network devices. Some configurations of hardware, VLANs, and software bridges can interfere with NDP and may cause network issues. For example, KVM-based virtualization uses the Linux software bridge, which filters superfluous traffic and may therefore interfere with NDP.

To resolve these issues, upgrade to a newer Linux kernel. If the problems persist, you may need to make additional changes to your configuration for IPv6 to function correctly.

For steps to resolve this issue on a KVM server, read the following posts:

- [CentOS-virt mailing list’s Issues with routing IPv6 to KVM Guests thread](https://lists.centos.org/pipermail/centos-virt/2012-September/003021.html)
- [Patchwork’s Patchwork bridge is not forwarding ICMP6 neighbor solicitation to KVM guest post](http://patchwork.ozlabs.org/patch/326048/)
- [Launchpad’s Multicast snooping on bridge breaks ICMP6 neighbor solicitation for KVM guests post](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1310586)

## Check the IPv6 addresses on your server

In some cases, you may need to check the assigned IPv6 addresses on your server. To do this, use the following command:

```perl
ip -6 addr show
```

This command displays all of the server’s IPv6 addresses, network devices, and their configurations.

Note:

This command’s output includes local link and non-global addresses. To display global addresses, run the following command:
`ip -6 addr show scope global`

#### Additional Documentation

* * *

- [Assign IPv6 Address](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [How to Configure Reverse DNS in WHM](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×