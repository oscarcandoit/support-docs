---
url: "https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-run-the-traceroute-and-ping-commands/"
title: "How to Run the traceroute and ping Commands | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-run-the-traceroute-and-ping-commands/#main-content)

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
3. [General Server Administration](https://docs.cpanel.net/knowledge-base/general-server-administration/)
4. How to Run the traceroute and ping Commands


[networking](https://docs.cpanel.net/tags/networking/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-run-the-traceroute-and-ping-commands/#overview)

* * *

[Traceroute](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-run-the-traceroute-and-ping-commands/#traceroute)

* * *

[Ping](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-run-the-traceroute-and-ping-commands/#ping)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-run-the-traceroute-and-ping-commands/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-run-the-traceroute-and-ping-commands/#overview)

* * *

[Traceroute](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-run-the-traceroute-and-ping-commands/#traceroute)

* * *

[Ping](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-run-the-traceroute-and-ping-commands/#ping)

* * *

## How to Run the traceroute and ping Commands

Last modified: _2025 February 13_

* * *

## Overview

This document describes how to run the `traceroute` and `ping` utilities on different operating systems. The `traceroute` utility determines the route that a network packet travels from your local machine to reach the target destination. The `ping` command allows you to test the latency between your local machine and the target IP address.

More:

For more information about the `ping` and `traceroute` utilities, read the following documentation:

- Wikipedia’s [Ping (network utility)](https://wikipedia.org/wiki/Ping_(networking_utility)) article.
- Wikipedia’s [Traceroute](https://wikipedia.org/wiki/Traceroute) article.

## Traceroute

#### macOS or Linux

Note:

Some servers may restrict the `traceroute` command. If so, connect to the server via SSH as a privileged user, such as the `root` user.


To run the `traceroute` utility on a macOS® or Linux® server, perform the following steps:

1. Log in to the server via SSH.

2. Run the `traceroute example.com` command, where `example.com` represents the target host to test. Successful output will resemble the following example:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br>traceroute to example.com (192.168.0.20), 30 hops max, 60 byte packets<br> 1  gateway (192.168.0.20)  0.868 ms  0.856 ms  0.728 ms<br> 2  10.1.0.1 (192.168.0.20)  0.664 ms  0.629 ms  0.595 ms<br> 3  vl118.ss-core.example.com (192.168.0.20)  1.041 ms  1.011 ms  0.974 ms<br>``` |


#### Microsoft Windows

Note:

Use the `tracert` command to run the `traceroute` utility on a Microsoft Windows® server.


To run the `tracert` command on a Microsoft Windows server, perform the following steps:

1. From the Windows _Start_ menu, enter `cmd` in the Search text box.
2. Double-click _Command Prompt_ in the list that appears. The Windows command prompt will appear.
3. Run the `tracert example.com` command, where `example.com` represents the target host to test. Successful output will resemble the following example:




|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br>Tracing route to example.com [192.168.0.20]<br> 1  2ms  1ms  1ms 192.168.0.20<br> 2  7ms  7ms  9ms 192.168.0.20 gateway (192.168.0.20)  0.868 ms  0.856 ms  0.728 ms<br> 3  11ms  11ms  11ms 192.168.0.20<br>``` |


## Ping

#### macOS or Linux

To run the `ping` utility on a macOS or Linux server, perform the following steps:

1. Log in to the server via SSH.

2. Run the `ping example.com` command, where `example.com` represents the target host to test. Successful output will resemble the following example:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br> PING example.com (192.168.0.20): 56 data bytes<br> 64 bytes from 192.168.0.20: icmp_seq=0 ttl=45 time=22.122 ms<br> 64 bytes from 192.168.0.20: icmp_seq=1 ttl=45 time=21.327 ms<br> 64 bytes from 192.168.0.20: icmp_seq=2 ttl=45 time=24.583 ms <br>``` |


#### Microsoft Windows

To run the `ping` utility on a Microsoft Windows server, perform the following steps:

1. From the Windows _Start_ menu, enter cmd in the Search text box.
2. Double-click _Command Prompt_ in the list that appears.
3. Run the `ping example.com` command, where `example.com` represents the target host to test. Successful output will resemble the following example:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br>PING example.com (192.168.0.20) with 56 bytes of data:<br>Reply from 192.168.0.20: bytes=64 ttl=45 time=22.921 ms<br>Reply from 192.168.0.20: bytes=64 ttl=45 time=22.921 ms<br>Reply from 192.168.0.20: bytes=64 ttl=45 time=22.921 ms<br>``` |


#### Additional Documentation

* * *

- [Change Hostname](https://docs.cpanel.net/whm/networking-setup/change-hostname/)
- [How to Manage Your Hard Drive Space](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/)
- [Resolver Configuration](https://docs.cpanel.net/whm/networking-setup/resolver-configuration/)
- [The set\_hostname Utility](https://docs.cpanel.net/whm/scripts/the-set_hostname-utility/)
- [Traceroute Enable/Disable](https://docs.cpanel.net/whm/security-center/traceroute-enable-disable/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×