---
url: "https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/"
title: "How to Configure Reverse DNS in WHM | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/#main-content)

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
3. [DNS](https://docs.cpanel.net/knowledge-base/dns/)
4. How to Configure Reverse DNS in WHM


[ipv6](https://docs.cpanel.net/tags/ipv6/) [ip](https://docs.cpanel.net/tags/ip/) [nameservers](https://docs.cpanel.net/tags/nameservers/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/#overview)

* * *

[Configure reverse DNS](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/#configure-reverse-dns)

* * *

[System requirements](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/#system-requirements)

* * *

[Add the reverse DNS zone](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/#add-the-reverse-dns-zone)

* * *

[Edit the reverse DNS zone file](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/#edit-the-reverse-dns-zone-file)

* * *

[Test your records](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/#test-your-records)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/#overview)

* * *

[Configure reverse DNS](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/#configure-reverse-dns)

* * *

[System requirements](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/#system-requirements)

* * *

[Add the reverse DNS zone](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/#add-the-reverse-dns-zone)

* * *

[Edit the reverse DNS zone file](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/#edit-the-reverse-dns-zone-file)

* * *

[Test your records](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/#test-your-records)

* * *

## How to Configure Reverse DNS in WHM

_Valid for versions 86 through the latest version_

#### Version:

#### [86](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/)

Last modified: _2024 September 18_

* * *

## Overview

[Reverse DNS](https://en.wikipedia.org/wiki/Reverse_DNS_lookup) uses pointer records (PTR) to convert IP addresses to domain names. Forward DNS uses [A records](https://en.wikipedia.org/wiki/List_of_DNS_record_types) to convert domain names to IP addresses.

Mail servers use Reverse DNS information to help validate a message’s source domain. System administrators use Reverse DNS information to help identify inbound connections trying to get past a firewall or other security.

If your cPanel & WHM server is authoritative, you can use your DNS server to update your server’s PTR records. However, most cPanel & WHM users do **not** have the authority edit their PTR record directly. Instead, some hosting providers offer reverse DNS management in a client interface. For more information, contact your hosting provider.

Important:

- Changes to your server’s DNS [nameservers](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#nameserver) do **not** take effect if your server’s DNS nameservers are **not** authoritative for your IP address.
- Many hosting providers do not allow their customers to modify their nameserver PTR records. Contact your hosting provider to delegate authority to your nameservers or set up your nameserver PTR records.
- If you are updating PTR records for mail purposes, it is only necessary to update the records for IP addresses that your sites use to send mail.
- PowerDNS is the default nameserver and is fully compatible with serving Reverse DNS records.

## Configure reverse DNS

In the following examples:

- `example.com` represents your domain.
- `192.168.0.1` represents your main IP address.
- `0.168.192.in-addr.arpa` represents your server’s main IP address, in [PTR record format](https://en.wikipedia.org/wiki/Reverse_DNS_lookup#IPv4_reverse_resolution).

If your hosting provider delegates you a [byte boundary](https://en.wikipedia.org/wiki/Data_structure_alignment) that is **greater** than `25`, separate the network range and byte boundary with a dash (`–`) character. Do **not** use a forward slash (`/`) character. For example, `128-24.0.168.192.in-addr.arpa` represents a server’s main IP address with a byte boundary that is greater than `25` in PTR record format. For more information, read the [RFC 2317](http://www.ietf.org/rfc/rfc2317.txt) documentation.

Note:

This interface does **not** currently support IPv6.

### System requirements

PTR records **require** authoritative DNS nameservers before they can function properly. To find the authoritative DNS nameservers of your server’s main IP address, trace the [Start Of Authority (SOA) record](https://en.wikipedia.org/wiki/SOA_record). To do this, run the following command:

```bash
dig +nssearch 0.168.192.in-addr.arpa
```

### Add the reverse DNS zone

Navigate to WHM’s [_Add a DNS Zone_](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone) interface ( _WHM » Home » DNS Functions » Add a DNS Zone_) and enter the following information:

1. Enter your server’s IP address in the _IPv4 Address_ text box.
2. Enter the reverse DNS zone’s name in the _Domain_ text box.
3. Create a reverse DNS zone name for an IPv4 address. To do this, perform the following steps:
4. Drop the last octet from the IP address.
5. Reverse the order of the remaining octets.
6. Append `.in-addr.arpa` to the end of the octets.

A reverse DNS zone _name_ for an IPv4 address will resemble `0.168.192.in-addr.arpa`.

### Edit the reverse DNS zone file

After creating your zone file, create the reverse DNS zone file’s PTR record in WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager) interface ( _WHM » Home » DNS Functions » DNS Zone Manager_).

Note:

Your zone file already contains a Nameserver (NS) record for each of your server’s authoritative nameservers.

To add the DNS zone’s PTR record, perform the following steps:

1. In WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager) interface, click _Manage_ next to the domain you want to modify. The system will direct you to an interface that displays the domain’s current list of zone records.
2. Click _Add Record_. The system will create a new record entry row in the table.
3. Select _PTR_ from the _Type_ menu.
4. Enter the name that you created with WHM’s [_Add a DNS Zone_](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone) interface ( _WHM » Home » DNS Functions » Add a DNS Zone_) into the _Name_ text box.
5. Enter the remainder of the reverse DNS zone address in the _Record_ text box. In this example that would be either `1` or `128-24` depending on the server’s byte boundary.
6. Click _Add Record_.

### Test your records

After your domain’s DNS information propagates, confirm that you properly configured reverse DNS. To confirm that you properly configured reverse DNS, run the following command:

```bash
host 192.168.0.1
```

If you correctly configured reverse DNS, the output will resemble the following example:

```bash
1.0.168.192.in-addr.arpa domain name pointer www.example.com.
```

#### Additional Documentation

* * *

- [Add a New IP Address](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/)
- [Assign IPv6 Address](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/)
- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [IPv6 Address Ranges](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/)
- [The swapip Script](https://docs.cpanel.net/whm/scripts/the-swapip-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×