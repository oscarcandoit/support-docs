---
url: "https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/"
title: "IPv6 Server Administration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#main-content)

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
4. IPv6 Server Administration


[ipv6](https://docs.cpanel.net/tags/ipv6/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#overview)

* * *

[Command-line tools and utilities](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#command-line-tools-and-utilities)

* * *

[The iproute2 package](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#the-iproute2-package)

* * *

[IPv6 firewall configuration](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#ipv6-firewall-configuration)

* * *

[IPv4 and IPv6 address retention and volume adjustments](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#ipv4-and-ipv6-address-retention-and-volume-adjustments)

* * *

[IPv6 and Apache](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#ipv6-and-apache)

* * *

[IPv6 and DNS](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#ipv6-and-dns)

* * *

[Userdata files](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#userdata-files)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#overview)

* * *

[Command-line tools and utilities](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#command-line-tools-and-utilities)

* * *

[The iproute2 package](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#the-iproute2-package)

* * *

[IPv6 firewall configuration](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#ipv6-firewall-configuration)

* * *

[IPv4 and IPv6 address retention and volume adjustments](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#ipv4-and-ipv6-address-retention-and-volume-adjustments)

* * *

[IPv6 and Apache](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#ipv6-and-apache)

* * *

[IPv6 and DNS](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#ipv6-and-dns)

* * *

[Userdata files](https://docs.cpanel.net/knowledge-base/ipv6/ipv6-server-administration/#userdata-files)

* * *

## IPv6 Server Administration

Last modified: _2025 February 13_

* * *

## Overview

This document details the specifics of cPanel & WHM’s IPv6 support. This includes information about the cPanel & WHM’s IPv6-supported services, the changes that occur when you add IPv6, and IPv6-related command line tools and utilities.

Warning:

- Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.

- An IPv6 address range **cannot** contain a server’s shared IP address. The system will **not** allow you to set a shared IP address that exists within any configured IPv6 address range.

- If you disable IPv6 on your server at the kernel level, do **not** remove (or blacklist) the kernel modules.
  - To disable IPv6 on your server, run the following command:



    ```perl
    echo 1 > /proc/sys/net/ipv6/conf/all/disable_ipv6
    ```

  - If you remove the kernel modules, your operating system will generate warnings in cPanel & WHM, may prevent account creation, and may cause service failures.

## Command-line tools and utilities

IPv6 requires new command-line tools and scripts that IPv4-only servers do not require.

### The iproute2 package

Traditionally, IPv4 tools (for example, `ifconfig` and `netstat`) used the `net-tools` package. Servers that use IPv6 must include the `iproute2` package. This package adds the `ip` and `ss` tools, which you can use with IPv4 and IPv6.

### IPv6 firewall configuration

Run the `/usr/local/cpanel/scripts/configure_rh_ipv6_firewall_for_cpanel` script to set up your IPv6 firewall.

Important:

If you use IPv6, the `service network restart` command removes the IPv6 addresses that cPanel & WHM added from the network device. You **must** run the `/usr/local/cpanel/scripts/restartsrv_cpipv6` command after you restart the network service, in order to ensure that the system adds those addresses again.

## IPv4 and IPv6 address retention and volume adjustments

When you enable IPv6, each account retains ownership of its IPv4 address and the original IPv4 address remains fully functional in the WHM interface. If you assign an IPv6 address to an account, you essentially double the number of IP addresses that you assigned to that account.

The [IPv6 RFCs](https://tools.ietf.org/html/rfc3513) allow a large number of IP addresses on each server. However, the system’s available resources limit the Linux kernel, userland tools, and daemons, and they cannot handle large assignments of IP addresses. You can bind up to 512 IP addresses (both IPv4 and IPv6 addresses) to a server before the server overloads.

- If you use 512 or fewer IP addresses, use BIND. BIND binds to all IP addresses on a server and does not create excessive entries in the `/etc/named.conf` file.







Warning:





We **strongly** recommend that you use BIND if you assign more than 512 IPv6 addresses, or if you require cached nameservers.

- If you use 2,000 or more IP addresses, you may need to adjust the `sysctl` value in the `/proc/sys/net/ipv6/route/max_size` file.
  - This value defaults to `4096`.
  - To increase this number, run the `sysctl net.ipv6.route.max_size=VALUE` command, where VALUE represents the new maximum value.

## IPv6 and Apache

When you use IPv6 on a server, the system sets the `Listen` directive to `Listen[::]:80`, which listens on all IPv6 addresses on the server. Apache sets a `NameVirtualHost` directive, and then adds the IPv6 address for a domain to the `VirtualHost` directives for each domain. The virtual hosts change from `VirtualHost IPv4 address:port` to `VirtualHost IPv4 address [IPv6 address]:port`.

For example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br><VirtualHost 12.34.54.67:80 [2001:db8:28a0:2004:227:eff:fe1d:f770]:80><br> ServerName: example.com<br> ServerAlias www.example.com<br> ...etc...<br> </VirtualHost><br>``` |

Note:

For more information about the Apache configuration, read our [Apache](https://docs.cpanel.net/ea4/apache/about-apache/) documentation.

## IPv6 and DNS

When you assign an IPv6 address to an account on your server, your DNS zone files retain the account’s IPv4 address, but the system adds an IPv6 AAAA entry to the DNS zone file. For example:

```perl
example.com IN AAAA 2001:db8:28a0:2004:227:eff:fe1d:f770
```

Note:

- BIND and PowerDNS fully support IPv6.
- For more information, read our [Zone Editor](https://docs.cpanel.net/cpanel/domains/zone-editor) documentation.

## Userdata files

Userdata files list the current IPv4 address for each account on the server.

- When you enable IPv6, the system also includes IPv6 addresses in this file.

- When you enable IPv6 for an account, all of the account’s users, resellers, subdomains, and addon domains share the same IPv6 address.


The system uses the `/etc/cpanel/ipv6/range_allocation_data` file to configure the `/var/cpanel/userdata` files.

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