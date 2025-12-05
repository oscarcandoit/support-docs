---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/"
title: "How to Configure Your Firewall for cPanel & WHM Services | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. How to Configure Your Firewall for cPanel & WHM Services


[ports](https://docs.cpanel.net/tags/ports/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#overview)

* * *

[Ports](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#ports)

* * *

[The License Callback Mechanism](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#the-license-callback-mechanism)

* * *

[Example configurations](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#example-configurations)

* * *

[AlmaLinux, Rocky Linux, and CloudLinux 8 or higher firewall management](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#almalinux-rocky-linux-and-cloudlinux-8-or-higher-firewall-management)

* * *

[Ubuntu firewall management](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#ubuntu-firewall-management)

* * *

[Adding rules with the CSF and APF utilities](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#adding-rules-with-the-csf-and-apf-utilities)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#overview)

* * *

[Ports](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#ports)

* * *

[The License Callback Mechanism](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#the-license-callback-mechanism)

* * *

[Example configurations](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#example-configurations)

* * *

[AlmaLinux, Rocky Linux, and CloudLinux 8 or higher firewall management](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#almalinux-rocky-linux-and-cloudlinux-8-or-higher-firewall-management)

* * *

[Ubuntu firewall management](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#ubuntu-firewall-management)

* * *

[Adding rules with the CSF and APF utilities](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#adding-rules-with-the-csf-and-apf-utilities)

* * *

## How to Configure Your Firewall for cPanel & WHM Services

_Valid for version 112_

#### Version:

#### [102](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/102/)

#### [112](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/)

#### [114](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/114/)

#### [116](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/116/)

#### [118](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/118/)

#### [120](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/120/)

#### [124](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/124/)

#### [126](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/)

Last modified: _2025 September 2_

* * *

## Overview

cPanel & WHM installs and manages many different services on your system, most of which require an external connection in order to function properly. Because of this, your firewall **must** allow cPanel & WHM to open the ports on which these services run.

This document lists the ports that cPanel & WHM uses, and which services use each of these ports, to allow you to better configure your firewall.

Warning:

- We **strongly** recommend that you **only** open ports for services that you use.
- When you work with firewall rules, **always** make certain to include a way to log back in to your server, and **always** maintain console access to your server.
- When you install a new third-party firewall on a system using [`nftables`](https://wiki.nftables.org/wiki-nftables/index.php/Main_Page), the system will **ignore** rules you add with the [_Host Access Control_](https://docs.cpanel.net/whm/security-center/host-access-control/) interface ( _WHM » Home » Security Center » Host Access Control_).

## Ports

Warning:

We **strongly** recommend that you use the SSL version of each service whenever possible:

- The use of non-SSL services can allow attackers to intercept sensitive information, such as login credentials.
- Always ensure that valid SSL certificates exist for your services in WHM’s [_Manage Service SSL Certificates_](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/) interface ( _WHM » Home » Service Configuration » Manage Service SSL Certificates_).

Note:

For more information on how to access cPanel & WHM services, read our [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/) documentation.

cPanel & WHM uses the following ports:

| Port | Service | TCP | UDP | Inbound | Outbound | Localhost | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `1` | CPAN | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | ![](https://docs.cpanel.net/img/checkbox.png) |  | The _Show Available Modules_ setting in cPanel’s [_Perl Modules_](https://docs.cpanel.net/cpanel/software/perl-modules/) interface ( _cPanel » Home » Software » Perl Modules_) uses this port to improve the speed with which it appears. |
| `7` | Razor | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | ![](https://docs.cpanel.net/img/checkbox.png) |  | SpamAssassin uses the collaborative [Razor](https://wiki.apache.org/spamassassin/UsingRazor) spam-tracking database. |
| `20` | FTP | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  | Instead of FTP, we recommend that you use the more-secure [SFTP service via SSH](https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client/). |
| `21` | FTP | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  | Instead of FTP, we recommend that you use the more-secure [SFTP service via SSH](https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client/). |
| `22` | SSH | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | You must open this port **before** you use WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool/) interface ( _WHM » Home » Transfers » Transfer Tool_) when you authenticate `root` users with SSH keys. |
| `25` | SMTP | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |
| `26` | SMTP | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  | cPanel & WHM **only** uses this port if you specify it in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) interface ( _WHM » Home » Service Configuration » Service Manager_). |
| `37` | `rdate` | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |
| `43` | `whois` | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |
| `53` | DNS | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  | cPanel & WHM uses this port for the following functions:<br>- Public DNS services.<br>- Communication with `root` nameservers for AutoSSL.<br>- Other functions that require name resolution. |
| `80` | `httpd` | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  | This port serves the HTTP needs of services on the server. <br>Important:<br>- We **strongly** recommend that your users configure their websites on port `443`, which uses the more secure SSL/TLS security protocol. For more information, read our [More about TLS and SSL](https://docs.cpanel.net/knowledge-base/security/more-about-tls-and-ssl/) documentation.<br>- The cPanel Server Daemon (`cpsrvd`) listens on this port when you **disable** the Web Server role. This daemon monitors cPanel & WHM services. |
| `110` | POP3 | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |  |
| `113` | `ident` | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |
| `143` | IMAP | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |  |
| `443` | `httpd` | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  | This port serves the HTTPS needs of services on the server. <br>Note:<br>- This port can allow users to access cPanel or WHM via certain subdomains. For more information, read our [Service and Proxy Subdomains](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/) documentation.<br>- The cPanel Server Daemon (`cpsrvd`) listens on this port when you **disable** the Web Server role.<br>- WHM’s [_Manage AutoSSL_](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/) interface ( _WHM » Home » SSL/TLS » Manage AutoSSL_) requires outbound access to the `store.cpanel.net` server on this port. |
| `465` | SMTP, SSL/TLS | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  | Important:<br>cPanel & WHM **strongly** recommends that you enable [Transport Layer Security (TLS) protocol version 1.2](https://tools.ietf.org/html/rfc5246) on your server. |
| `579` | cPHulk | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |  |  | This port should **only** accept connections on the `127.0.0.x IPv4` address. Your system does **not** require that this port accept external traffic. |
| `587` | Exim | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |
| `783` | Apache SpamAssassin™ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |
| `873` | rsync | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |
| `953` | PowerDNS |  |  |  |  | ![](https://docs.cpanel.net/img/checkbox.png) | This port should **only** accept connections on the `127.0.0.1 IPv4` address. Your system does **not** require that this port accept external traffic. <br>Note:<br>You **must** use this port when you run PowerDNS nameservers. |
| `993` | IMAP SSL | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |  |
| `995` | POP3 SSL | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |  |
| `2077` | WebDAV | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  | cPanel’s [_Web Disk_](https://docs.cpanel.net/cpanel/files/web-disk) interface ( _cPanel » Home » Files » Web Disk_) uses these ports. |
| `2078` | WebDAV SSL | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |
| `2079` | CalDAV and CardDAV | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |
| `2080` | CalDAV and CardDAV (SSL) | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |
| `2082` | cPanel and cPanel Licensing | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | Note:<br>To disable insecure logins via this port and only allow SSL logins, set the _Choose the closest matched domain for which that the system has a valid certificate when redirecting from non-SSL to SSL URLs_. Formerly known as _“Always redirect to SSL/TLS”_ setting to _On_ in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_). This will redirect users to secure ports with the `/cpanel`, `/whm`, and `/webmail` aliases. |
| `2083` | cPanel SSL and cPanel Licensing | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |  |
| `2086` | WHM and cPanel Licensing | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | Note:<br>To disable insecure logins via this port and only allow SSL logins, set the _Choose the closest matched domain for which that the system has a valid certificate when redirecting from non-SSL to SSL URLs. Formerly known as “Always redirect to SSL/TLS”_ setting to _On_ in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_). This will redirect users to secure ports with the `/cpanel`, `/whm`, and `/webmail` aliases. |
| `2087` | WHM SSL and cPanel Licensing | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |  |
| `2089` | cPanel Licensing | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | ![](https://docs.cpanel.net/img/checkbox.png) |  | Important:<br>You **must** configure your system to permit outbound TCP connections from source ports `4` and `1020` to destination port `2089`. This will allow the server to contact the WebPros International, LLC license servers. |
| `2091` | Exchange ActiveSync (EAS) SSL/TLS | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | This port allows users of Android™ devices to [synchronize their calendars, contacts, and email via the EAS protocol](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/). <br>Note:<br>This functionality is only available if you install both the [_Calendars and Contacts Server_](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/) and [_Z-Push - ActiveSync Support_](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/#z-push-activesync-support) plugins. |
| `2095` | Webmail | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | Note:<br>To disable insecure logins via this port and only allow SSL logins, set the _Choose the closest matched domain for which that the system has a valid certificate when redirecting from non-SSL to SSL URLs. Formerly known as “Always redirect to SSL/TLS”_ setting to _On_ in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_). This will redirect users to secure ports with the `/cpanel`, `/whm`, and `/webmail` aliases. |
| `2096` | Webmail SSL and cPanel Licensing | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  |  |
| `2195` | Apple Push Notification service (APNs) | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | ![](https://docs.cpanel.net/img/checkbox.png) |  | cPanel & WHM only uses this port for the Apple® Push Notification Service (APNs). |
| `2703` | Razor | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | ![](https://docs.cpanel.net/img/checkbox.png) |  | SpamAssassin uses the collaborative [Razor](https://wiki.apache.org/spamassassin/UsingRazor) spam-tracking database. |
| `3306` | MySQL® | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | MySQL uses this port for remote database connections. |
| `6277` | DCC | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  | For more information, read the Apache® [DCC](https://cwiki.apache.org/confluence/display/spamassassin/UsingDcc) and [NetTestFirewallIssues](https://cwiki.apache.org/confluence/display/spamassassin/NetTestFirewallIssues) documentation. |
| `11371` | apt | ![](https://docs.cpanel.net/img/checkbox.png) |  |  | ![](https://docs.cpanel.net/img/checkbox.png) |  | Servers running the Ubuntu® operating system use this port to download `apt` repository GPG keys. |
| `24441` | Pyzor | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |  | ![](https://docs.cpanel.net/img/checkbox.png) |  | For more information, read Apache’s [Pyzor](https://cwiki.apache.org/confluence/display/spamassassin/UsingPyzor) and [NetTestFirewallIssues](https://cwiki.apache.org/confluence/display/spamassassin/NetTestFirewallIssues) documentation. |

### The License Callback Mechanism

The [License Callback Mechanism](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-license-callback-mechanism) immediately updates a server after the license changes in either Manage2 or the cPanel Store. It cannot make any changes to the server. It **only** alerts the server that a change as been made to the license. The license callback mechanism tries the following ports until one succeeds:

| Service | Port | Inbound | Outbound |
| --- | --- | --- | --- |
| cPanel | `2082` | ![](https://docs.cpanel.net/img/checkbox.png) |  |
| cPanel SSL | `2083` | ![](https://docs.cpanel.net/img/checkbox.png) |  |
| WHM | `2086` | ![](https://docs.cpanel.net/img/checkbox.png) |  |
| WHM SSL | `2087` | ![](https://docs.cpanel.net/img/checkbox.png) |  |
| Webmail SSL | `2096` | ![](https://docs.cpanel.net/img/checkbox.png) |  |

Note:

At least one port in the above table **must** be open for the license callback mechanism to work. The server only accepts requests to this API from cPanel & WHM. The license system does **not** send any other information to the customer’s server.

## Example configurations

Important:

- We do **not** recommend that you use these examples for your personal configurations. Instead, make **certain** that your firewall rules match the way in which you use cPanel & WHM’s services.
- [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/), [CloudLinux 8 or higher](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/), and [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/) servers have additional requirements. For more information, read the [AlmaLinux, Rocky Linux, and CloudLinux 8 or higher firewall management section](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#almalinux-rocky-linux-and-cloudlinux-8-or-higher-firewall-management) below.
- We recommend the `nftables` utility for servers that run the [AlmaLinux OS 8, Rocky Linux 8, or CloudLinux 8 operating systems](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#almalinux-os-8-rocky-linux-8-and-cloudlinux-8-or-higher-firewall-management). We recommend the `iptables` utility on servers that run the [Ubuntu operating system](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#ubuntu-firewall-management).

### AlmaLinux, Rocky Linux, and CloudLinux 8 or higher firewall management

Important:

We **strongly** recommend that you use the `nftables` framework for the firewall of servers that run the Rocky Linux, CloudLinux 8 or higher, or AlmaLinux operating systems.

Use the `nftables` framework instead of the `iptables` utility or legacy services in those operating systems. You can configure `nftables` with the `nft` command line tool. You will find the `nftables` ruleset for your server in the `/etc/sysconfig/nftables.conf` file.

For example, to block traffic for a single IPv4 address, run the following command, where `198.51.100.1` is the IPv4 address that you wish to block:

```perl
nft add rule filter INPUT ip saddr 198.51.100.1 drop
```

To block traffic for a single IPv6 address, run the following command, where `2001:0db8:0:0:1:0:0:1` is the IPv6 address that you wish to block:

```perl
nft add rule ip6 filter INPUT ip6 saddr [2001:0db8:0:0:1:0:0:1] drop
```

For more information about the `nftables` framework and the `nft` tool, read Red Hat’s [Getting Started with nftables](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_networking/getting-started-with-nftables_configuring-and-managing-networking) documentation.

#### The cpanel service

Important:

The `/usr/local/cpanel/scripts/configure_firewall_for_cpanel` script clears all existing rule entries from your server’s `iptables` utility. If you use custom rules for your firewall, export those rules **before** you run the script and then re-add them afterward.

cPanel & WHM also includes the `cpanel` service, which manages all of the rules in the `/etc/firewalld/services/cpanel.xml` file. This allows TCP access for the server’s ports.

To replace your server’s existing `iptables` rules with the rules in the `/etc/firewalld/services/cpanel.xml` file, perform the following steps:

1. Run the `yum install firewalld` command to ensure that you have installed the `firewalld` service daemon on your system.
2. Run the `systemctl start firewalld.service` command to start the `firewalld` service.
3. Run the `systemctl enable firewalld` command to start the `firewalld` service when the server starts.
4. Run the `iptables-save > backupfile` command to save your existing firewall rules.
5. Run the `/usr/local/cpanel/scripts/configure_firewall_for_cpanel` script.
6. Run the `iptables-restore < backupfile` command to incorporate your old firewall rules into the new firewall rules file.

### Ubuntu firewall management

We recommend that servers that run the Ubuntu operating systems use the `iptables` utility instead of the `ufw` utility that Ubuntu installs by default. The `iptables` utility offers more customization settings for your packet-filtering rules.

Note:

This utility requires that you understand the TCP/IP stack. For more information about the use of `iptables`, [visit the iptables site](https://netfilter.org/projects/iptables/index.html), or run the `man iptables` command from the command line.

For example, to block traffic for a single IPv4 address, run the following command, where `198.51.100.1` is the IPv4 address that you wish to block:

```perl
iptables -I INPUT -s 198.51.100.1 -j DROP
```

To block traffic for a single IPv6 address, run the following command, where `2001:0db8:0:0:1:0:0:1` is the IPv6 address that you wish to block:

```perl
ip6tables -I INPUT -s 2001:0db8:0:0:1:0:0:1 -j DROP
```

### Adding rules with the CSF and APF utilities

The following examples explain how to add rules with ConfigServer Security & Firewall (CSF) and Advanced Policy Firewall (APF).

Warning:

CSF and APF do **not** function with the `firewalld` utility. If you install CSF or APF, you **must** remove the `firewalld` utility. To do this, run the `yum remove firewalld` command.

Remember:

We recommend the `nftables` utility for servers that run the [AlmaLinux OS 8, Rocky Linux 8, or CloudLinux 8 operating systems](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#almalinux-os-8-rocky-linux-8-and-cloudlinux-8-firewall-management). We recommend the `iptables` utility on servers that run the [Ubuntu operating system](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/112/#ubuntu-firewall-management).

#### ConfigServer Security & Firewall (CSF)

ConfigServer Security & Firewall (CSF) is a free, third-party plugin that allows you to modify your server’s `iptables` rules in WHM. For information about how to install and configure CSF, read our [Additional Security Software](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#configserver-security--firewall-csf) documentation.

#### Advanced Policy Firewall

[APF](https://www.rfxn.com/projects/advanced-policy-firewall/) acts as a front-end interface for the `iptables` utility, and allows you to open or close ports without the use of the `iptables` syntax.

The following example provides two rules that you can add to the `/etc/apf/conf.apf` file to allow HTTP and HTTPS access to your system:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```perl<br># Common ingress (inbound) TCP ports<br>IG_TCP_CPORTS="80,443"<br>EG_TCP_CPORTS="80"<br>``` |

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×