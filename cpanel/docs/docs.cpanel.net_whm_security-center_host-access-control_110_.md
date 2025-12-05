---
url: "https://docs.cpanel.net/whm/security-center/host-access-control/110/"
title: "Host Access Control | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/host-access-control/110/#main-content)

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
3. [Security Center](https://docs.cpanel.net/whm/security-center/)
4. Host Access Control


[security](https://docs.cpanel.net/tags/security/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/host-access-control/110/#overview)

* * *

[Host Access Control for CloudLinux 8, AlmaLinux, and Rocky Linux](https://docs.cpanel.net/whm/security-center/host-access-control/110/#host-access-control-for-cloudlinux-8-almalinux-and-rocky-linux)

* * *

[Add a rule](https://docs.cpanel.net/whm/security-center/host-access-control/110/#add-a-rule)

* * *

[Host Access Control for CloudLinux 7, CentOS 7, and Ubuntu](https://docs.cpanel.net/whm/security-center/host-access-control/110/#host-access-control-for-cloudlinux-7-centos-7-and-ubuntu)

* * *

[Allow or deny access](https://docs.cpanel.net/whm/security-center/host-access-control/110/#allow-or-deny-access)

* * *

[Example](https://docs.cpanel.net/whm/security-center/host-access-control/110/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/host-access-control/110/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/host-access-control/110/#overview)

* * *

[Host Access Control for CloudLinux 8, AlmaLinux, and Rocky Linux](https://docs.cpanel.net/whm/security-center/host-access-control/110/#host-access-control-for-cloudlinux-8-almalinux-and-rocky-linux)

* * *

[Add a rule](https://docs.cpanel.net/whm/security-center/host-access-control/110/#add-a-rule)

* * *

[Host Access Control for CloudLinux 7, CentOS 7, and Ubuntu](https://docs.cpanel.net/whm/security-center/host-access-control/110/#host-access-control-for-cloudlinux-7-centos-7-and-ubuntu)

* * *

[Allow or deny access](https://docs.cpanel.net/whm/security-center/host-access-control/110/#allow-or-deny-access)

* * *

[Example](https://docs.cpanel.net/whm/security-center/host-access-control/110/#example)

* * *

## Host Access Control

![](https://docs.cpanel.net/img/whm-icons/host_access_control.svg)

_Valid for version 110_

#### Version:

#### [110](https://docs.cpanel.net/whm/security-center/host-access-control/110/)

#### [112](https://docs.cpanel.net/whm/security-center/host-access-control/)

Last modified: _2024 November 18_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Use the _Host Access Control_ interface ( _WHM » Home » Security Center » Host Access Control_) to allow, reject, or drop access to the following services for specific IP addresses:

- cPanel (`cpaneld`)
- WHM (`whostmgrd`)
- Webmail (`webmaild`)
- Web Disk (`cpdavd`)
- FTP (`ftpd`)
- SSH (`sshd`)
- SMTP (`smtp`)
- POP3 (`pop3`)
- IMAP (`imap`)

Note:

- If your server uses [`nftables`](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/), rules that you add in this interface will be **ignored** if you install another firewall application.
- This document uses the following examples for networks:
  - `192.168.0.0/24` — IPv4 network
  - `2001:0db8:0:0:1:0:0:1/64` — IPv6 network

## Host Access Control for CloudLinux 8, AlmaLinux, and Rocky Linux

Servers that run CloudLinux™ 8, AlmaLinux OS, or Rocky Linux™ control service access by port number. For a list of ports and their related services, read the _Ports_ section of the [How to Configure Your Firewall for cPanel Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/#ports) documentation.

Warning:

If you accidentally lock yourself out of WHM when you use this interface, [edit the `nft` rules](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/#almalinux-rocky-linux-and-cloudlinux-firewall-management) through the command line to regain access.

### Add a rule

Important:

You **must** enter your `ACCEPT` rules before your `DROP` or `REJECT` rules.

To allow or deny a single IP address or [CIDR](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#classless-inter-domain-routing-cidr) subnet access to a service, perform the following steps:

1. Enter the port number in the _Port_ text box.
2. Enter the IP address or CIDR subnet in the _IP Address/CIDR_ text box.

   - You may enter wildcards in this text box.
   - You do **not** need to enclose IPv6 addresses in square brackets ( `[ ]` ).
   - You may apply your rule to multiple IP addresses by entering a CIDR subnet mask. To add a CIDR subnet mask, add `/NUMBER` to your IP address, where `NUMBER` is the number of network bits that an IP address must match to be affected by your rule.

     - IPv4 example: `192.168.0.0/24` means the first 24 bits of the requesting IP address (the first, second, and third numbers in the IP address) must match the rule IP address. This will result in all IP addresses in the range of `192.168.0.1 - 192.168.0.254` meeting the rule.
     - IPv6 example: `2001:0db8:0:0:1:0:0:1/64` means that the first 64 bits of the requesting IP address must match the rule IP address. Because IPv6 uses 128-bit addresses, this will result in all IP addresses in the range of `2001:db8:abcd:0012:0000:0000:0000:0000 - 2001:db8:abcd:0012:ffff:ffff:ffff:ffff` meeting the rule.
3. Select the _TCP_ protocol or the _UDP_ protocol from the _Protocol_ menu.
4. Select which action to take for the port from the _Action_ menu.

   - Use the _ACCEPT_ action to allow the IP addresses in the range to access the port.
   - Use the _DROP_ action to block the IP addresses in the range without a rejection message.
   - Use the _REJECT_ action to block the IP addresses in the range with a rejection message.
5. Click _Add Rule_ to add the rule. The rule will appear in the _Current Rules_ table and apply.

## Host Access Control for CloudLinux 7, CentOS 7, and Ubuntu

Servers that run CloudLinux™ 7, CentOS 7, or Ubuntu® control access by service via the `/etc/hosts.allow` and `/etc/hosts.deny` files.

Warning:

If you accidentally lock yourself out of WHM when you use this interface, edit the `/etc/hosts.allow` file through the command line to regain access.

Note:

- The [_Create Support Ticket_](https://docs.cpanel.net/whm/support/create-support-ticket/) interface ( _WHM » Home » Support » Create Support Ticket_) automatically adds cPanel Support’s IP addresses to the server’s `/etc/hosts.allow file`. For more information, read our [Create Support Ticket](https://docs.cpanel.net/whm/support/create-support-ticket/) documentation.
- To control access to the `ftpd` daemon, you **must** use the ProFTPD FTP server. Pure-FTP does **not** support TCP wrappers.

  - To choose an FTP server, use WHM’s [_FTP Server Selection_](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/) interface ( _WHM » Home » Service Configuration » FTP Server Selection_).
  - For more information, read our [ProFTPD Configuration for Host Access Control](https://docs.cpanel.net/knowledge-base/ftp/proftpd-configuration-for-host-access-control/) documentation.

### Allow or deny access

Important:

You **must** enter your `allow` rules before your `deny` rules.

To allow or deny a single IP address, comma-separated list of IP addresses, hostname, or CIDR subnet access to a service, perform the following steps:

1. Enter the service name in the _daemon_ text box.
2. Enter the IP address, CIDR subnet, comma-separated list of IP addresses, or hostname in the _Access List_ text box.

   - You may enter wildcards in this text box.
   - You **must** enclose IPv6 addresses in square brackets ( `[ ]` ).
   - To add a CIDR subnet mask, add `/NUMBER` to your IP address, where `NUMBER` is the number of network bits that an IP address must match for your rule to affect it.

     - IPv4 example: `192.168.0.0/24` means the first 24 bits of the requesting IP address (the first, second, and third numbers in the IP address) must match the rule IP address. This will result in all IP addresses in the range of `192.168.0.1 - 192.168.0.254` meeting the rule.
     - IPv6 example: `2001:0db8:0:0:1:0:0:1/64` means that the first 64 bits of the requesting IP address must match the rule IP address. Because IPv6 uses 128-bit addresses, this will result in all IP addresses in the range of `2001:db8:abcd:0012:0000:0000:0000:0000 - 2001:db8:abcd:0012:ffff:ffff:ffff:ffff` meeting the rule.
3. Enter the desired action in the _Action_ text box.

   - Enter `allow` to allow access.
   - Enter `deny` to deny access.
4. Describe the rule in the _Comment_ text box.
5. Click _Save Host Access List_, or click _Reload_ to delete any changes. Any saved rules apply.

Note:

You can also enter `ALL EXCEPT IP address` in the _Access List_ text box. When you enter `allow` as your action, the system will allow all of the addresses **except** for addresses that you entered in the _Access List_ text box.

## Example

To allow access from IP addresses on a specific network and deny access from all other addresses, use either of the following methods:

| Method | Description |
| --- | --- |
| Two separate rules | Create one rule that allows `192.168.0.0/24` or `2001:0db8:0:0:1:0:0:1/64`. Then, create a second rule that denies access to `ALL` addresses. |
| One rule | Create one rule that denies access to `all except 192.168.0.0/24` or `all except 2001:0db8:0:0:1:0:0:1/64`. |

Once you have added these rules, they will appear in the _Current Rules_ table and apply.

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [Host Access Control](https://docs.cpanel.net/whm/security-center/host-access-control/)
- [Manage External Authentications](https://docs.cpanel.net/whm/security-center/manage-external-authentications/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×