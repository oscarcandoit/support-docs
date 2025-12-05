---
url: "https://docs.cpanel.net/knowledge-base/ftp/proftpd-configuration-for-host-access-control/"
title: "ProFTPD Configuration for Host Access Control | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/ftp/proftpd-configuration-for-host-access-control/#main-content)

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
4. ProFTPD Configuration for Host Access Control


[ftp](https://docs.cpanel.net/tags/ftp/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/ftp/proftpd-configuration-for-host-access-control/#overview)

* * *

[System Requirements](https://docs.cpanel.net/knowledge-base/ftp/proftpd-configuration-for-host-access-control/#system-requirements)

* * *

[Create a VirtualHost container](https://docs.cpanel.net/knowledge-base/ftp/proftpd-configuration-for-host-access-control/#create-a-virtualhost-container)

* * *

[VirtualHost container example](https://docs.cpanel.net/knowledge-base/ftp/proftpd-configuration-for-host-access-control/#virtualhost-container-example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/ftp/proftpd-configuration-for-host-access-control/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/ftp/proftpd-configuration-for-host-access-control/#overview)

* * *

[System Requirements](https://docs.cpanel.net/knowledge-base/ftp/proftpd-configuration-for-host-access-control/#system-requirements)

* * *

[Create a VirtualHost container](https://docs.cpanel.net/knowledge-base/ftp/proftpd-configuration-for-host-access-control/#create-a-virtualhost-container)

* * *

[VirtualHost container example](https://docs.cpanel.net/knowledge-base/ftp/proftpd-configuration-for-host-access-control/#virtualhost-container-example)

* * *

## ProFTPD Configuration for Host Access Control

Last modified: _2023 September 15_

* * *

## Overview

This document provides an example of how to configure ProFTPd to utilize the [_Host Access Control_](https://docs.cpanel.net/whm/security-center/host-access-control/) feature from the command line to restrict access by IP address to FTP. ProFTPD does not automatically reference the `/etc/hosts.allow` or `/etc/hosts.deny` files to restrict access to the FTP service.

The information in this document **only** applies to systems that run cPanel & WHM on CentOS 7, [CloudLinux™ 7](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/), and Red Hat® Enterprise Linux® 7 and earlier servers. ProFTPD does **not** use TCP-Wrappers-based access controls on [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/), [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/), and [CloudLinux 8 or higher](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/) servers. Use the functionality available in WHM’s [_Host Access Control_](https://docs.cpanel.net/whm/security-center/host-access-control) interface on these operating systems instead.

Warning:

- This document describes an unsupported workaround that we do **not** guarantee will work in the future.
- After you perform these steps on a server, the system administrator **must** manage and maintain the server’s database software.
- We recommend that **only** experienced system administrators attempt to perform these steps.
- We are **not** responsible for any data loss that an attempt to perform these steps causes.

## System Requirements

To configure ProFTPD, the following software **must** run on your server:

- ProFTPD version 1.3.3 or later.
- The [`mod_wrap`](http://www.proftpd.org/docs/contrib/mod_wrap.html) module.

As the `root` user, run the following command to confirm that you have the correct version of ProFTPD and `mod_wrap` installed on your server:

```go
proftpd -V | awk '/Version/ {print $0}; /mod_wrap/ {print "mod_wrap is installed"}'
```

The output will resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>root@testserver [~]# proftpd -V | awk '/Version/ {print $0}; /mod_wrap/ {print "mod_wrap is installed"}'<br>  Version: 1.3.5rc1 (devel)<br>mod_wrap is installed<br>``` |

## Create a VirtualHost container

To configure ProFTPD, create a Virtual Host container. To do this, perform the following steps as the `root` user:

1. Open the `/etc/proftpd.conf` file with a text editor and add the following lines after the comments:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>TCPAccessFiles /etc/hosts.allow /etc/hosts.deny<br>TCPServiceName ftp<br>``` |







Warning:





- Each Virtual Host that requires Host Access Control needs this entry in the `/etc/proftpd.conf` file.
- You **must** specify both `/etc/hosts.allow` and `/etc/hosts.deny` or you will receive an error.

2. Run the `/usr/local/cpanel/scripts/restartsrv_proftpd` script to restart ProFTPD.

3. Add access deny rules to the `/etc/ftpusers` file. This file lists of all of the users for whom to deny FTP access.

4. Log in to your FTP server to test the new configuration.







Note:





If ProFTPD rejects connections due to Host Access Control configuration, the system will report those failures as authentication failures. For example:







|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```go<br>root@testserver [~]# ftp 10.1.1.1<br>Connected to 10.1.1.1.<br>220 ProFTPD 1.3.5rc1 Server (ProFTPD) [::ffff:10.1.1.1]<br>Name (10.1.1.1:root): cptest<br>331 Password required for cptest<br>Password:<br>530 Access denied<br>ftp: Login failed<br>ftp> quit<br>221 Goodbye.<br>``` |


## VirtualHost container example

The following example resembles a complete VirtualHost container:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```go<br><VirtualHost 10.1.1.1><br> ServerName ftp.testserver.tld<br> AuthUserFile /etc/proftpd/wcraft<br> MaxClients 3 "Sorry, this ftp server has reached its maximum user count (%m). Please try again later"<br> DirFakeGroup On ftpgroup<br> DirFakeUser On ftpuser<br> DefaultRoot ~<br>TCPAccessFiles /etc/hosts.allow /etc/hosts.deny<br> TCPServiceName ftp<br>[truncated]<br>``` |

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