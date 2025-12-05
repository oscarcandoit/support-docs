---
url: "https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/"
title: "How to Enable FTP Passive Mode | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#main-content)

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
3. [FTP](https://docs.cpanel.net/knowledge-base/ftp/)
4. How to Enable FTP Passive Mode


[ftp](https://docs.cpanel.net/tags/ftp/) [anonymousftp](https://docs.cpanel.net/tags/anonymousftp/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#overview)

* * *

[Active and passive mode sessions](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#active-and-passive-mode-sessions)

* * *

[Active](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#active)

* * *

[Passive](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#passive)

* * *

[Configure FTP servers](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#configure-ftp-servers)

* * *

[Pure-FTPd servers](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#pure-ftpd-servers)

* * *

[ProFTPD servers](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#proftpd-servers)

* * *

[Configure the firewall](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#configure-the-firewall)

* * *

[ConfigServer Security & Firewall (CSF)](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#configserver-security--firewall-csf)

* * *

[nftables](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#nftables)

* * *

[firewalld](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#firewalld)

* * *

[iptables](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#iptables)

* * *

[SolusVM and Xen](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#solusvm-and-xen)

* * *

[Troubleshoot FTP passive mode](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#troubleshoot-ftp-passive-mode)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#overview)

* * *

[Active and passive mode sessions](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#active-and-passive-mode-sessions)

* * *

[Active](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#active)

* * *

[Passive](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#passive)

* * *

[Configure FTP servers](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#configure-ftp-servers)

* * *

[Pure-FTPd servers](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#pure-ftpd-servers)

* * *

[ProFTPD servers](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#proftpd-servers)

* * *

[Configure the firewall](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#configure-the-firewall)

* * *

[ConfigServer Security & Firewall (CSF)](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#configserver-security--firewall-csf)

* * *

[nftables](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#nftables)

* * *

[firewalld](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#firewalld)

* * *

[iptables](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#iptables)

* * *

[SolusVM and Xen](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#solusvm-and-xen)

* * *

[Troubleshoot FTP passive mode](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#troubleshoot-ftp-passive-mode)

* * *

## How to Enable FTP Passive Mode

Last modified: _2025 September 2_

* * *

## Overview

This document explains how to use the active or passive mode to connect to a File Transfer Protocol (FTP) server.

Important:

The system enables passive ports `49152` through `65534` for Pure-FTPd servers and ProFTPD servers by default. If you use the ConfigServer Security & Firewall (CSF) firewall plugin, the system **also** adds passive port ranges to your server’s firewall by default.

If you use the `nftables`, `firewalld`, or `iptables` applications for your firewall, you **must** [enable firewall settings](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#configure-the-firewall) for the passive ports manually. For more information about firewalls, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services) documentation.

## Active and passive mode sessions

FTP uses a data port and a command port to transfer information between a client and a server. During a typical active mode session, the command port uses port `21` and the data port uses port `20`. When you use a passive mode session, however, the data port does not always use port `20`.

### Active

In active mode, the FTP server responds to the connection attempt and returns a connection request from a different port to the FTP client. [Network Address Translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation) configurations block this connection request.

![active ftp without firewall](https://docs.cpanel.net/img/activeftp.png)![active ftp with firewall](https://docs.cpanel.net/img/activeftpfirewall.png)

The firewall blocks the server’s attempt to communicate with the client because the server uses a different port than the first connection.

### Passive

In passive mode, the FTP client initiates **both** connection attempts. NAT configurations **do not** block this connection request.

![passive ftp with firewall](https://docs.cpanel.net/img/passiveftp.png)

The firewall does **not** block the server’s attempt to communicate with the client because the client initiated the communication both times.

Note:

If FTP users exist on the private network side of a NAT configuration, you **must** enable FTP’s passive mode, and open the passive port range in your FTP server’s configuration file. You may also need to open the passive port range on your firewall.


## Configure FTP servers

The sections below explain how to edit the default configurations for a [Pure-FTPd](https://www.pureftpd.org/project/pure-ftpd/) server and a [ProFTPD](http://www.proftpd.org/) server.

Note:

- A local file contains your desired settings which **overwrite** any default settings from the main file.
- The system enables passive ports `49152` through `65534` for Pure-FTPd servers and ProFTPD servers by default.

### Pure-FTPd servers

To edit the FTP configuration for a PureFTP server, perform the following steps:

1. Log in to the server as the `root` user via SSH.
2. Open the `/var/cpanel/conf/pureftpd/local` file, if it already exists, with a text editor. If it does not already exist, create the `/var/cpanel/conf/pureftpd/local` file.
3. Add the desired changes to the file. If your FTP server exists behind a NAT configuration, set the `ForcePassiveIP` option to the FTP server’s public IP address, as in the following example:



```bash
ForcePassiveIP: 203.0.113.0
```



    If your server does not exist in a NAT configuration, set the \`ForcePassiveIP\` option to the following entry:



```bash
ForcePassiveIP: ~
```





Important:




Only one `ForcePassiveIP` entry can exist in a configuration file.


4. If you want to change your server’s default passive port range, run the following commands:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```text<br>echo "PassivePortRange: 49152 65534" >> /var/cpanel/conf/pureftpd/local<br>/usr/local/cpanel/scripts/setupftpserver pure-ftpd --force <br>``` |

5. Configure your server to allow the passive port range to pass through the firewall. To do this, follow the directions in the [Configure the firewall](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#configure-the-firewall) section below.
6. Restart the PureFTP service with the following command:

```bash
/usr/local/cpanel/scripts/setupftpserver pure-ftpd --force
```

### ProFTPD servers

To edit the FTP configuration for a ProFTPD server, perform the following steps:

1. Log in to the server as the `root` user via SSH.
2. Open the `/var/cpanel/conf/proftpd/local` file, if it already exists, with a text editor. If it does not already exist, create the `/var/cpanel/conf/proftpd/local` file.
3. Add the desired changes to the file. If your FTP server exists behind a NAT configuration, set the `MasqueradeAddress` option to the FTP server’s public IP address, as in the following example:



```bash
MasqueradeAddress: 203.0.113.0
```



    If your server \*\*does not\*\* exist in a NAT configuration, set the \`MasqueradeAddress\` option to the following entry:



```bash
MasqueradeAddress: ~
```





Important:




Only **one**`MasqueradeAddress` entry can exist in a configuration file.


4. If you want to change your server’s default passive port range, run the following commands:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```text<br>echo "PassivePorts: 49152 65534" >> /var/cpanel/conf/proftpd/local<br>/usr/local/cpanel/scripts/setupftpserver proftpd --force <br>``` |

5. Configure your server to allow the passive port range to pass through the firewall. To do this, follow the directions in the [Configure the firewall](https://docs.cpanel.net/knowledge-base/ftp/how-to-enable-ftp-passive-mode/#configure-the-firewall) section below.
6. Restart the ProFTP service with the following command:



```bash
/usr/local/cpanel/scripts/setupftpserver proftpd --force
```


### Configure the firewall

Note:

The system enables passive ports `49152` through `65534` for Pure-FTPd servers and ProFTPD servers by default.


You may need to add your FTP server’s passive port range to the firewall manually.

### ConfigServer Security & Firewall (CSF)

If you use the CSF plugin to manage your server’s firewall, open the `/etc/csf/csf.conf` file, and confirm that the passive port range exists at the end of the `TCP_IN` line. The system adds your FTP server’s passive port range to the firewall by default. For more information on how to use CSF, read CSF’s [readme file](https://github.com/waytotheweb/scripts/blob/main/csf/readme.txt).

Warning:

- As of August 31, 2025, the developers of CSF [no longer maintain or support it](https://configserver.com/). They have released CSF under the [GPLv3 license](https://www.gnu.org/licenses/gpl-3.0.en.html). New and existing CSF installations will continue to function as long as they use the [latest GPLv3 version](https://github.com/waytotheweb/scripts/tree/main/csf).
- CSF does **not** function with the `firewalld` utility. If you install CSF, you **must** remove the `firewalld` utility. To do this, run the `yum remove firewalld` command.

### nftables

If you use the `nftables` framework for your [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/), [CloudLinux™ 8 or higher](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/), or [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/) server, run the following commands to add the passive port range to your server’s firewall:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```text<br>nft add rule filter INPUT tcp dport 49152-65534 accept<br>nft -s list ruleset | tee /etc/sysconfig/nftables.conf # to save the ruleset post reboot<br>``` |

You will find the `nftables` ruleset for your server in the `/etc/sysconfig/nftables.conf` file.

### firewalld

If you use the `firewalld` application for your CentOS 7, [CloudLinux 7](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/), or Red Hat® Enterprise Linux® (RHEL) 7 server, run the following commands to add the passive port range to your server’s firewall:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```text<br>firewall-cmd --permanent --zone=public --add-service=ftp<br>firewall-cmd --permanent --add-port=49152-65534/tcp<br>firewall-cmd --reload<br>``` |

### iptables

Important:

Red Hat Enterprise Linux (RHEL) 8 deprecated the `iptables` utility. While WebPros International, LLC does not support this version of RHEL, this change affects all [cPanel-supported operating systems](https://docs.cpanel.net/installation-guide/system-requirements/). We recommend the `nftables` utility for servers that run the [AlmaLinux OS, Rocky Linux, or CloudLinux 8 or higher operating systems](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/#almalinux-rocky-linux-and-cloudlinux-firewall-management). We recommend the `firewalld` utility for servers that run the [CentOS 7, CloudLinux 7, or RHEL 7 operating systems](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/102/#centos-7-cloudlinux-7-and-rhel-7-firewall-management). For more information, read Red Hat’s [When to use firewalld, nftables, or iptables](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_networking/getting-started-with-nftables_configuring-and-managing-networking#when-to-use-firewalld-nftables-or-iptables_getting-started-with-nftables) documentation.

If you use the `iptables` application for your FTP server’s firewall, perform the following steps to add the passive port range to your server’s firewall:

1. Install the `iptables-services` package if it does not already exist on your server. This package provides the `iptables` and `ip6tables` services, which are not included in the `iptables` application. To install this package, run the following command:



```bash
yum install iptables-services
```

2. Run the following commands to add the rules to the firewall and save the configuration:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```text<br>iptables -I INPUT -p tcp --dport 49152:65534 -j ACCEPT<br>service iptables save<br>``` |


## SolusVM and Xen

If you use [SolusVM](https://solusvm.com/) and [Xen®](https://xenproject.org/) on a CloudLinux server, you may experience problems with Passive FTP. These problems may resemble a firewall or other connection issue, even when no firewall exists.

To resolve these issues, perform the following steps:

1. Replace the `IPTABLES_MODULES=ip_conntrack_netbios_ns` line in the `/etc/sysconfig/iptables-config` file on the VPS node with the following line:


```bash
IPTABLES_MODULES=ipt_REJECT ipt_tos ipt_TOS ipt_LOG ip_conntrack ipt_limit ipt_multiport iptable_filter iptable_mangle ipt_TCPMSS ipt_tcpmss ipt_ttl ipt_length ipt_state iptable_nat ip_nat_ftp ipt_owner ipt_REDIRECT
```

2. Run the `service iptables restart` command to restart the `iptables` service.

## Troubleshoot FTP passive mode

If your NAT-configured server cannot execute Passive FTP connections to other IP addresses on the server, set the `ForcePassiveIP` option with a tilde (`~`) character. The system interprets this character as an undefined directive and prevents automatic changes to the `/etc/pure-ftpd.conf` or `/etc/proftpd.conf` files.

#### Additional Documentation

* * *

- [Anonymous FTP](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)
- [FTP Accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts/)
- [FTP Connections](https://docs.cpanel.net/cpanel/files/ftp-connections/)
- [FTP Server Configuration](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/)
- [FTP Server Selection](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×