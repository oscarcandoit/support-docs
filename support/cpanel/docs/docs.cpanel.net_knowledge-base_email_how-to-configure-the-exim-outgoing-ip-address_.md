---
url: "https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address/"
title: "How to Configure the Exim Outgoing IP Address | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address/#main-content)

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
3. [Email](https://docs.cpanel.net/knowledge-base/email/)
4. How to Configure the Exim Outgoing IP Address


[exim](https://docs.cpanel.net/tags/exim/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address/#overview)

* * *

[Modify Exim preferences for outgoing mail](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address/#modify-exim-preferences-for-outgoing-mail)

* * *

[Enable automatic configuration of the server IPv4 address for outgoing mail](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address/#enable-automatic-configuration-of-the-server-ipv4-address-for-outgoing-mail)

* * *

[Manually configure Exim outgoing IP addresses](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address/#manually-configure-exim-outgoing-ip-addresses)

* * *

[The mailhelo file](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address/#the-mailhelo-file)

* * *

[The mailips file](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address/#the-mailips-file)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address/#overview)

* * *

[Modify Exim preferences for outgoing mail](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address/#modify-exim-preferences-for-outgoing-mail)

* * *

[Enable automatic configuration of the server IPv4 address for outgoing mail](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address/#enable-automatic-configuration-of-the-server-ipv4-address-for-outgoing-mail)

* * *

[Manually configure Exim outgoing IP addresses](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address/#manually-configure-exim-outgoing-ip-addresses)

* * *

[The mailhelo file](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address/#the-mailhelo-file)

* * *

[The mailips file](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address/#the-mailips-file)

* * *

## How to Configure the Exim Outgoing IP Address

Last modified: _2025 February 13_

* * *

## Overview

By default, Exim sends mail from the server’s primary IPv4 address. To decrease the chance that spam filters mark your mail as spam, verify that the reverse DNS (rDNS) entry of Exim’s outgoing IP address matches the DNS response of your server’s hostname.

Note:

The steps in this document require `root`-level privileges on the server.

## Modify Exim preferences for outgoing mail

cPanel & WHM offers two ways by which to modify Exim’s default preferences for outgoing mail’s IP address:

### Enable automatic configuration of the server IPv4 address for outgoing mail

To automatically configure Exim to send mail from each domain’s dedicated IPv4 address, perform the following steps:

1. Modify the rDNS for each IPv4 address to point to the desired domain.







Important:





- An incorrect rDNS configuration may cause mail servers to reject your server’s mail.
- For more information, read our [How to Configure Reverse DNS in WHM](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/) documentation.

2. Enable the _Send mail from account’s dedicated IP address_ setting in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).







Warning:





If you select this setting, cPanel & WHM uses the `/usr/local/cpanel/scripts/updateuserdomains` script to automatically configure Exim, and overrides any manual changes in the following files:



- `/etc/mailhelo`
- `/etc/mailips`

### Manually configure Exim outgoing IP addresses

Important:

- We do **not** recommend that you modify your Exim files.
- To modify your Exim configuration files, you **must** possess `root`-level privileges.

To use a custom Exim configuration, you **must** enable the following settings in the _Basic Editor_ section of WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_):

- _Reference /etc/mailhelo for outgoing SMTP HELO_
- _Reference /etc/mailips for outgoing SMTP connections_

Important:

- If you disable the _Reference /etc/mailhelo for outgoing SMTP HELO_ setting, the system **will** overwrite any changes that you make to the `/etc/mailhelo` file.
- If you disable the _Reference /etc/mailips for outgoing SMTP connections_ setting, the system **will** overwrite any changes that you make to the `/etc/mailips` file.

If you change the outgoing IP address to a non-cPanel main IP address, the cPanel user **must** update that email address’ SPF record. They can configure the SPF record in cPanel’s [_Email Deliverability_](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel) interface ( _cPanel » Home » Email » Email Deliverability_).

### The mailhelo file

The `/etc/mailhelo` file contains Exim’s configuration for the `HELO` command, which initiates dialog between a mail server and a client. This file governs which domain sends the `HELO` command.

Use your preferred text editor to create an `/etc/mailhelo` file that resembles the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br>example.com: example.com<br>sub.example.com: example.com<br>example.net: example.net<br>addon.example.net: example.net<br>*: hostname.example.com<br>``` |

### The mailips file

The `/etc/mailips` file controls the IP address from which each domain sends mail.

Use your preferred text editor to create an `/etc/mailips` file that resembles one of the following examples:

#### IPv4

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br>example.com: 192.0.2.0<br>sub.example.com: 192.0.2.1<br>example.net: 192.0.2.2<br>addon.example.net: 192.0.2.3<br>*: 192.0.2.4<br>``` |

Note:

- In the example above, the system uses the asterisk (`*`) entry to direct outbound mail for domains without entries within this file. In this case, this is your server’s main shared IPv4 address. You can set this value to another IP address if you ensure that the asterisk entry in the `/etc/mailhelo` file uses the appropriate domain name.
- **Only** use valid, publicly-accessible IP addresses.
- Do **not** separate multiple IP addresses with commas. Instead, use semicolons.

#### IPv4 with NAT

NAT (Network Address Translation) transforms your private IPv4 address into a public IPv4 address. This process helps to preserve the limited number of IPv4 IP addresses available.

Exim sends mail from the server’s primary IPv4 address. You **must** use your private IP address, and not your public NAT IP address, when configuring the Exim service.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br>example.com: 192.168.0.2<br>sub.example.com: 192.168.0.2<br>example.net: 192.168.0.3<br>addon.example.net: 192.168.0.3<br>*: 192.168.0.1<br>``` |

Note:

- **Only** use private IPv4 addresses on a NAT system.
- Do **not** separate multiple IPv4 addresses with commas. Instead, use semicolons.

#### IPv6

IPv6 does **not** utilize NAT technology due to the large number of IPv6 addresses available. For more information about IPv6, read our [Guide to IPv6](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/) documentation.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br>example.com: 2001:db8:3c4d:15::7334<br>sub.example.com: 2001:db8:3c4d:15::7334<br>example.net: 2001:db8:3c4d:15::7334<br>addon.example.net: 2001:db8:3c4d:15::7334<br>*: 2001:db8:3c4d:15::7334<br>``` |

Note:

- **Only** use valid, publicly-accessible IPv6 addresses.
In the example above, the system uses two colons (`::`) to indicate a collapsed section.
- Do **not** separate multiple IPv6 addresses with commas. Instead, use semicolons.

#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Mail Delivery Reports](https://docs.cpanel.net/whm/email/mail-delivery-reports/)
- [Mail Queue Manager](https://docs.cpanel.net/whm/email/mail-queue-manager/)
- [View Mail Statistics Summary](https://docs.cpanel.net/whm/email/view-mail-statistics-summary/)
- [View Sent Summary](https://docs.cpanel.net/whm/email/view-sent-summary/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×