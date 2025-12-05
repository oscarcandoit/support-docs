---
url: "https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/"
title: "How to Get Started With IPv6 | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#main-content)

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
4. How to Get Started With IPv6


[ipv6](https://docs.cpanel.net/tags/ipv6/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#overview)

* * *

[Get started with IPv6](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#get-started-with-ipv6)

* * *

[Acquire an IPv6 range](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#acquire-an-ipv6-range)

* * *

[Add a single IPv6 address to your server](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#add-a-single-ipv6-address-to-your-server)

* * *

[Ping the IPv6 server from another server](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#ping-the-ipv6-server-from-another-server)

* * *

[Ensure that the cpsrvd daemon listens on IPv6](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#ensure-that-the-cpsrvd-daemon-listens-on-ipv6)

* * *

[Configure the server’s shared IPv6 address](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#configure-the-servers-shared-ipv6-address)

* * *

[Add IPv6 ranges to the server’s available IP addresses](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#add-ipv6-ranges-to-the-servers-available-ip-addresses)

* * *

[Assign dedicated IPv6 addresses to individual accounts](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#assign-dedicated-ipv6-addresses-to-individual-accounts)

* * *

[Configure additional IPv6 settings on the server](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#configure-additional-ipv6-settings-on-the-server)

* * *

[Troubleshoot issues](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#troubleshoot-issues)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#overview)

* * *

[Get started with IPv6](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#get-started-with-ipv6)

* * *

[Acquire an IPv6 range](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#acquire-an-ipv6-range)

* * *

[Add a single IPv6 address to your server](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#add-a-single-ipv6-address-to-your-server)

* * *

[Ping the IPv6 server from another server](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#ping-the-ipv6-server-from-another-server)

* * *

[Ensure that the cpsrvd daemon listens on IPv6](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#ensure-that-the-cpsrvd-daemon-listens-on-ipv6)

* * *

[Configure the server’s shared IPv6 address](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#configure-the-servers-shared-ipv6-address)

* * *

[Add IPv6 ranges to the server’s available IP addresses](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#add-ipv6-ranges-to-the-servers-available-ip-addresses)

* * *

[Assign dedicated IPv6 addresses to individual accounts](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#assign-dedicated-ipv6-addresses-to-individual-accounts)

* * *

[Configure additional IPv6 settings on the server](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#configure-additional-ipv6-settings-on-the-server)

* * *

[Troubleshoot issues](https://docs.cpanel.net/knowledge-base/ipv6/how-to-get-started-with-ipv6/#troubleshoot-issues)

* * *

## How to Get Started With IPv6

Last modified: _2025 September 15_

* * *

## Overview

Warning:

Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. Your server **must** have at least one IPv4 address.

To use IPv6 on your cPanel & WHM server, you **must** acquire IPv6 addresses and add them to your server. You can then assign the server’s shared IPv6 address and assign IPv6 addresses to the desired users.

## Get started with IPv6

### Acquire an IPv6 range

To acquire an IPv6 address range, contact your Internet Service Provider (ISP). Most ISPs assign IPv6 addresses in large blocks or ranges.

We recommend that you request IPv6 addresses for the following purposes:

- A single IPv6 address for the server itself, which you can assign to individual accounts as a shared IP address. Make **certain** that you request an IPv6 address that does not exist within the requested IPv6 range. The system blocks shared IPv6 addresses that exist within IPv6 ranges.
- An IPv6 range to use to assign individual dedicated IPv6 addresses to accounts.

Important:

You **must** reserve the single IPv6 address in WHM’s [_IPv6 Address Ranges_](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges) interface ( _WHM » Home » IP Functions » IPv6 Address Ranges_).

We recommend that you request an IPv6 address range with a `/64` network portion, the most common network portion for the shared hosting industry. However, network portions may be as low as `/48`, or as high as `/128`, which represents a single IPv6 address.

When you acquire the IPv6 addresses, update your Reverse DNS entries. Some ISPs will update these entries for you, while others require you to maintain them.

### Add a single IPv6 address to your server

Warning:

- WebPros International, LLC recommends that **only** experienced system administrators attempt to perform the steps in this section.
- WebPros International, LLC is **not** responsible for any data loss that an attempt to perform these steps causes.

When you acquire IPv6 addresses, select one IPv6 address to assign to your server. Then, perform the following actions in your CentOS server:

1. From the command line as the `root` user:

1. Edit the `/etc/sysconfig/network` file to add the following line:


      ```perl
       NETWORKING_IPV6=yes
      ```

2. Edit the `/etc/sysconfig/network-scripts/ifcfg-eth0` file to add the following IPv6 values:





      |     |     |
      | --- | --- |
      | ```<br>1<br>2<br>3<br>``` | ```perl<br>IPV6INIT=yes<br>IPV6ADDR=[add the assigned IPv6 address here]<br>IPV6_DEFAULTGW=[add the IPv6 gateway address here]<br>``` |

3. Return to the command line. Restart the network with the `/usr/bin/systemctl restart network` command.
2. In WHM’s interface:
1. Enter the IPv6 address in the _The IPv6 address (only one address) to use to set up shared IPv6 virtual hosts._ setting in WHM’s [_Basic Webhost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager® Setup_). You can find this setting in the _Basic Config_ section.
2. Enter the IPv6 resolver in the [_Resolver Configuration_](https://docs.cpanel.net/whm/networking-setup/resolver-configuration) interface ( _WHM » Home » Networking Setup » Resolver Configuration_). Enter at least one IPv6 DNS resolver in this interface and click _Continue_. The interface will indicate whether the configuration succeeded. This step adds the IPv6 resolver to the `/etc/resolv.conf` file.
3. To verify your configuration, ping another IPv6 server with the following command:


```bash
ping6 ipv6.google.com
```



   - If IPv6 functions on your server, this command’s output resembles the following example:





     |     |     |
     | --- | --- |
     | ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>PING ipv6.google.com(2001:4860:b002::68) 56 data bytes<br>64 bytes from 2001:4860:b002::68: icmp_seq=0 ttl=59 time=58.4 ms<br>64 bytes from 2001:4860:b002::68: icmp_seq=1 ttl=59 time=56.4 ms<br>64 bytes from 2001:4860:b002::68: icmp_seq=2 ttl=59 time=62.1 ms<br>``` |

   - If the command’s output does not resemble this example, IPv6 is not functioning on your server. You must resolve this issue before you can use cPanel & WHM with IPv6.

### Ping the IPv6 server from another server

To confirm that other servers can reach your server via IPv6, run the following command as the `root` user on another server, where `2001:db8:10fe::5000` represents your server’s IPv6 address:

```bash
ping6 2001:db8:10fe::5000
```

If IPv6 functions on your server, this command’s output resembles the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>PING 2001:0db8:85a3::8a2e:0370:7334 56 data bytes<br>64 bytes from 2001:db8:10fe::5000: icmp_seq=1 ttl=62 time=0.847 ms<br>64 bytes from 2001:db8:10fe::5000: icmp_seq=2 ttl=62 time=0.994 ms<br>64 bytes from 2001:db8:10fe::5000: icmp_seq=3 ttl=62 time=0.909 ms<br>``` |

If the command’s output does not resemble this example, IPv6 is not functioning on your server. You must resolve this issue before you can use cPanel & WHM with IPv6.

### Ensure that the cpsrvd daemon listens on IPv6

Navigate to the _System_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_) and select _On for the Listen on IPv6 Addresses_ setting.

This setting ensures that the `cpsrvd` daemon listens on IPv6 in addition to IPv4.

### Configure the server’s shared IPv6 address

To configure the server’s shared IPv6 address, perform the following steps:

1. Navigate to WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager Setup_).
2. Enter the desired shared IPv6 address in the _The IPv6 address (only one address) to use to set up shared IPv6 virtual hosts._ text box. After you configure this setting, BIND automatically begins to listen for DNS requests via IPv6.
3. Click _Save Changes_ at the bottom of the interface. A confirmation message will appear.

Important:

In cPanel & WHM version 124 and earlier, an IPv6 address range **cannot** contain a server’s shared IP address. The system will **not** allow you to set a shared IP address that exists within any configured IPv6 address range.

To assign a shared IPv6 address to the server, add the address in WHM’s [_IPv6 Address Ranges_](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges) interface ( _WHM » Home » IP Functions » IPv6 Address Ranges_). If you perform this action, the system will **not** block the shared IPv6 address, even if it exists within an IPv6 range.

### Add IPv6 ranges to the server’s available IP addresses

To add IPv6 address ranges from which you can assign dedicated IPv6 addresses, use WHM’s [_IPv6 Address Ranges_](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges) interface ( _WHM » Home » IP Functions » IPv6 Address Ranges_).

To add a range of IPv6 addresses, perform the following steps:

1. Click _Add Range_.
2. Enter a name for the IPv6 address range in the _Range Name_ text box. This name **must** contain 64 characters or fewer.
3. Enter the IPv6 address range in the _Range_ text box. IPv6 address ranges consist of a shortened IPv6 address, a slash (`/`), and a number that indicates the network portion of the IPv6 address range. For example:



```text
2001:0db8:1a34:56cf::/64
```



   - Do **not** add an IPv6 address range that contains the main IPv6 address that you set in WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager® Setup_).
   - You **must** add your gateway individually before you add the full gateway range and set the gateway to `RESERVED` so that the system does not assign this IP address to an account. For example:





     |     |     |
     | --- | --- |
     | ```<br>1<br>2<br>``` | ```text<br>2001:0db8:1a34:56cf::/128 RESERVED<br>2001:0db8:1a34:56cf::1/128 RESERVED<br>``` |
4. Select one of the following range types from the _Range Type_ menu:

   - _Available_ — You can distribute the addresses in this range to the users on your server.
   - _Reserved_ — You **cannot** distribute the addresses in this range to the users on your server. If you select _Reserved_, WHM’s [_Assign IPv6 Address_](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address) interface ( _WHM » Home » IP Functions » Assign IPv6 Address_) will **not** list the range.
5. Enter a description of the IPv6 address range in the _Range Notes_ text box. This description **must** contain 256 characters or fewer.
6. Click _Add Range_ to add the IPv6 address range, or click _Cancel_ to close the form.

### Assign dedicated IPv6 addresses to individual accounts

To assign addresses to individual users, navigate to WHM’s [_Assign IPv6 Address_](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address) interface ( _WHM » Home » IP Functions » Assign IPv6 Address_) and select the desired cPanel account.

To assign an IPv6 address to the selected account, perform the following steps:

1. Select the desired IPv6 address range from the _Enable this account with an IPv6 address from the selected range_ menu.

   - You **must** select a range that includes available addresses.
   - To assign the server’s shared IPv6 address to an account, select _The server’s shared IPv6 address_. This address functions as a shared, rather than dedicated, address. Your server may use a Stateless Autoconfigured Address (SLAAC) address that your MAC address determines. This address changes if your hardware changes. For example, if you replace your Ethernet card, the new card receives a new IPv6 address. This causes the old address’s `VirtualHosts` entry in `httpd.conf` to use the wrong IPv6 address.
2. Click _Enable Account_. When you enable IPv6 on an account, the system performs the following actions:

   - Binds that IPv6 address to your server.
   - Adds an AAAA record for the account to the primary DNS zone.

An enabled account maintains its IPv6 address information even if you enable it again with a different IPv6 address range.

### Configure additional IPv6 settings on the server

We recommend that you configure the following additional IPv6-related settings on your cPanel & WHM server:

- Add IPv6 addresses to any other desired Exim configuration settings in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).
- Enable the _Enable IPv6_ setting in WHM’s [_Mailserver Configuration_](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration) interface ( _WHM » Home » Service Configuration » Mailserver Configuration_).
- Add any remote mail servers that use IPv6 addresses in WHM’s [_Configure Remote Service IPs_](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips) interface ( _WHM » Home » IP Functions » Configure Remote Service IPs_).

### Troubleshoot issues

For help with IPv6 problems, read our [Troubleshoot IPv6 Problems](https://docs.cpanel.net/knowledge-base/ipv6/troubleshoot-ipv6-problems/) documentation.

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