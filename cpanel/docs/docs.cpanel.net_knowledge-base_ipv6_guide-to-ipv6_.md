---
url: "https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/"
title: "Guide to IPv6 | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/#main-content)

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
4. Guide to IPv6


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ipv6](https://docs.cpanel.net/tags/ipv6/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/#overview)

* * *

[What is IPv6?](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/#what-is-ipv6)

* * *

[Services with IPv6 support](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/#services-with-ipv6-support)

* * *

[IPv4 and IPv6](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/#ipv4-and-ipv6)

* * *

[IPv6 address formatting](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/#ipv6-address-formatting)

* * *

[About IPv6](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/#about-ipv6)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/#overview)

* * *

[What is IPv6?](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/#what-is-ipv6)

* * *

[Services with IPv6 support](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/#services-with-ipv6-support)

* * *

[IPv4 and IPv6](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/#ipv4-and-ipv6)

* * *

[IPv6 address formatting](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/#ipv6-address-formatting)

* * *

[About IPv6](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/#about-ipv6)

* * *

## Guide to IPv6

Last modified: _2025 February 13_

* * *

## Overview

Warning:

Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.

cPanel & WHM currently offers selective support of IPv6, to facilitate the hosting industry’s movement toward full IPv6 use. This guide offers a beginner’s guide to IPv6, and describes how to work with IPv6 on cPanel & WHM servers.

## What is IPv6?

Internet Protocol (IP) is the communications protocol that routes traffic across the internet. Currently, IPv4 (Internet Protocol version 4) carries the vast majority of internet traffic. However, a shortage of IPv4 addresses exists because IPv4 only allows approximately four billion addresses. Prices for dedicated IPv4 addresses have risen due to this shortage, and the Internet Assigned Numbers Authority (IANA) requires justification and audits of IPv4 addresses to avoid waste. IPv6 (Internet Protocol version 6) addresses the problem of IPv4 address exhaustion, because the limit to the number of IPv6 addresses is exponentially higher than the IPv4 limit.

## Services with IPv6 support

Note:

Currently, when you use IPv6 on your server, the server uses both an IPv6 address and an IPv4 address. Most browsers attempt to access the IPv6 address first, but implement a very short fail time. If the page does not load in that time, the browser accesses the IPv4 address for the site.


The following cPanel & WHM services support IPv6:

- Apache®
- BIND
- Dovecot
- Exim
- PowerDNS
- ProFTPD
- Pure-FTPd

## IPv4 and IPv6

The following table compares IPv4 and IPv6:

| Characteristic | IPv4 | IPv6 |
| --- | --- | --- |
| Format | A 32-bit address that consists of four period-separated octets. | A 128-bit address that consists of eight colon-separated groups of four hexadecimal digits. <br>Note:<br>For more information, read the IPv6 address formatting section below. |
| Address example | `192.0.2.27` | `2001:0db8:85a3:0042:1000:8a2e:0370:7334` |
| Availability | 4.2 billion possible addresses. | 340 undecillion possible addresses. This is equivalent to 3.4 x 1038 addresses, or 2128 possible addresses. |
| Accessibility | Anyone can access an IPv4 address. | You can **only** access an IPv6 address if you use an IPv6-enabled network and server. |

## IPv6 address formatting

IPv6 addresses are 128-bit addresses that consist of eight colon-separated groups of four digits each. Unlike IPv4 addresses, which only consist of integers, IPv6 addresses use hexadecimal digits (the numerals `0` through `9` and the letters `A` through `F` ).

Often, IP addresses collapse (hide) `0`’s that start an octet, or completely collapse octets that only include the digit `0`. In collapsed IPv6 addresses, a double colon (`::`) indicates a collapsed section. However, IPv6 addresses **cannot** contain more than one double colon.

The following table lists several correct formats for the same IPv6 address:

| Address | Description |
| --- | --- |
| `2001:0db8:85a3:0042:1000:0000:0000:7334` | The fully-expanded version of the IPv6 address. |
| `2001:0db8:85a3:0042:1000::7334` | The same IPv6 address, partially collapsed to hide octets that only contain 0. |
| `2001:db8:85a3:42:1000::7334` | The same IPv6 address, fully collapsed to hide octets that only contain 0 and 0s that begin an octet. |

## About IPv6

For more information about IPv6, read the following third-party resources:

- [Wikipedia](http://en.wikipedia.org/wiki/IPv6) provides an in-depth explanation of IPv6. This article includes a brief history of IPv6, some comparisons between IPv4 and IPv6, and a technical explanation of IPv6 implementation.
- [Google®](http://www.google.com/intl/en/ipv6/) provides a brief history and the logic behind IPv6.
- You can test your [current IPv4 and IPv6 status and availability.](http://test-ipv6.com/)

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