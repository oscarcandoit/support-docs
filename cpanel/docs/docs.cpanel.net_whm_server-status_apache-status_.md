---
url: "https://docs.cpanel.net/whm/server-status/apache-status/"
title: "Apache Status | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-status/apache-status/#main-content)

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
3. [Server Status](https://docs.cpanel.net/whm/server-status/)
4. Apache Status


[apache](https://docs.cpanel.net/tags/apache/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-status/apache-status/#overview)

* * *

[Heading information](https://docs.cpanel.net/whm/server-status/apache-status/#heading-information)

* * *

[Scoreboard](https://docs.cpanel.net/whm/server-status/apache-status/#scoreboard)

* * *

[Apache dummy requests](https://docs.cpanel.net/whm/server-status/apache-status/#apache-dummy-requests)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-status/apache-status/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-status/apache-status/#overview)

* * *

[Heading information](https://docs.cpanel.net/whm/server-status/apache-status/#heading-information)

* * *

[Scoreboard](https://docs.cpanel.net/whm/server-status/apache-status/#scoreboard)

* * *

[Apache dummy requests](https://docs.cpanel.net/whm/server-status/apache-status/#apache-dummy-requests)

* * *

## Apache Status

![](https://docs.cpanel.net/img/whm-icons/apache_status.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/server-status/apache-status/)

Last modified: _2025 October 9_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface displays information about the Apache software on your server. Use this interface to check traffic and requests handled by your server.

Apache is a web server daemon (`httpd`). It responds to HTTP requests, and subsequently serves web pages. For example, if one of your visitors requests your domain, `www.example.com`, from a web browser, Apache serves the index page for `www.example.com`.

Important:

The [LiteSpeed Web Server](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/) is **not** compatible with the [`mod_status` Apache module](https://httpd.apache.org/docs/2.4/mod/mod_status.html), which this interface uses. When you install LiteSpeed Web Server, this interface will recommend that you use the _LiteSpeed Web Console_ interface to check the server’s status. Also, the system will report `file not found` errors in the Apache log file.


## Heading information

This interface displays the following heading information:

| Item | Description |
| --- | --- |
| _Server Version_ | The version of Apache that runs on the server. |
| _Server Built_ | The time and date at which you installed Apache. |
| _Current Time_ | The current time and date. |
| _Restart Time_ | The time and date at which you last restarted the server. |
| _Parent Server Generation_ | The number of times that you have restarted Apache gracefully, which causes it to re-read its configuration file. This occurs, for example, whenever you add domains to your server. |
| _Server uptime_ | The amount of time over which the server has run. |
| _Total accesses_ | The total number of requests for your server. |
| _Total Traffic_ | The total amount of traffic for your server, in megabytes (MB). |
| _CPU Usage_ | The total CPU usage and current load percentage (the percentage of the server’s currently-used processing power). Under the CPU usage, the interface displays the following additional information:<br>- The number of requests per second, bytes per second, and kilobytes per request that the server transfers.<br>- The number of Apache sub-servers (workers or children) that serve requests.<br>- The number of idle workers. |

## Scoreboard

The _Scoreboard_ section displays the following information about each worker on your server:

| Item | Description |
| --- | --- |
| _Srv_ | The worker’s server number. |
| _PID_ | The operating system’s process ID number. |
| _Acc_ | The number of requests that this worker has served for this connection, this child, and this slot, separated by forward slashes (`/`). For example, _0/2055/7670_ indicates the following request data:<br>- 0 requests for this connection.<br>- 2055 requests for this child.<br>- 7670 requests for this slot. |
| _M_ | The mode of operation. This column displays the following modes:<br>- \_\_\_ — The server is waiting for the connection.<br>- _S_ — The server is starting.<br>- _R_ — The server is reading the request.<br>- _W_ — The server is sending a reply.<br>- _K_ — The server is in keep alive (read) mode.<br>- _D_ — The server received a DNS request.<br>- _C_ — The server is closing the connection.<br>- _I_ — Idle worker cleanup.<br>- _._ — Idle worker. |
| _CPU_ | The worker’s CPU usage. |
| _SS_ | The number of seconds since the start of the most recent request. |
| _Req_ | The amount of time that the worker required to process the most recent request, in milliseconds. |
| _Conn_ | The amount of information that the worker transferred to the visitor, in kilobytes (KB). |
| _Child_ | The total amount of information that the worker transferred, in kilobytes (KB). |
| _Slot_ | The total amount of information that the slot transferred, in megabytes (MB). |
| _Client_ | The IP address of the user who requested the data. |
| _VHost_ | The domain name of the server that requested the data. |
| _Request_ | The type of request that the server received.<br>- _GET_ — indicates that Apache downloaded data.<br>- _POST_ — indicates that Apache sent information to the server. |

## Apache dummy requests

Apache uses dummy requests to wake processes that listen for new connections. A dummy request is an HTTP request that Apache sends to itself. These requests, when Apache uses them without SSL, appear in access log files with the remote address set to the local host (`127.0.0.1` for IPv4 or `::1` for IPv6). These dummy requests are a normal part of Apache’s functionality, which you can safely ignore.

Apache’s dummy requests **cannot** use SSL. It is possible that servers with hosts that use SSL can receive noise in the log file that resembles the following:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br>[info] [client ::1] Connection to child 6 established (server localhost:443)<br>[info] Seeding PRNG with 656 bytes of entropy<br>[info] [client ::1] SSL library error 1 in handshake (server localhost:443)<br>[info] SSL Library Error: 336027900 error:140760FC:SSL routines:SSL23_GET_CLIENT_HELLO:unknown protocol speaking not SSL to HTTPS port!?<br>[info] [client ::1] Connection closed to child 6 with abortive shutdown (server localhost:443)<br>``` |

On a lightly loaded server, this interface frequently shows a high number of dummy connections. This occurs because the feature displays the last request to a worker slot, which is typically a dummy request.

It may also appear that Apache currently handles a high number of `OPTIONS` requests when in fact the workers are simply idle.

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Daily Process Log](https://docs.cpanel.net/whm/server-status/daily-process-log/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [Global Configuration](https://docs.cpanel.net/whm/service-configuration/global-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×