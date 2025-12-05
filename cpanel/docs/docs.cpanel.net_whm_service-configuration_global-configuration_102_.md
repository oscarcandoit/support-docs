---
url: "https://docs.cpanel.net/whm/service-configuration/global-configuration/102/"
title: "Global Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/global-configuration/102/#main-content)

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
3. [Service Configuration](https://docs.cpanel.net/whm/service-configuration/)
4. Global Configuration


[apache](https://docs.cpanel.net/tags/apache/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/global-configuration/102/#overview)

* * *

[Global Configuration](https://docs.cpanel.net/whm/service-configuration/global-configuration/102/#global-configuration)

* * *

[Manually edit Apache features](https://docs.cpanel.net/whm/service-configuration/global-configuration/102/#manually-edit-apache-features)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/global-configuration/102/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/global-configuration/102/#overview)

* * *

[Global Configuration](https://docs.cpanel.net/whm/service-configuration/global-configuration/102/#global-configuration)

* * *

[Manually edit Apache features](https://docs.cpanel.net/whm/service-configuration/global-configuration/102/#manually-edit-apache-features)

* * *

## Global Configuration

![](https://docs.cpanel.net/img/whm-icons/global_configuration.svg)

_Valid for versions 102 through 128_

#### Version:

#### [102](https://docs.cpanel.net/whm/service-configuration/global-configuration/102/)

#### [130](https://docs.cpanel.net/whm/service-configuration/global-configuration/)

Last modified: _2025 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature allows you to adjust several of the Apache® web server’s advanced features. Many of these directives require that you format your entry in a specific way. Click a directive name to view its documentation on the [Apache website](http://apache.org/).

## Global Configuration

Note:

- Some of these settings require that you install Multi-Processing Modules (MPM). For more information, read our [MPM](https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/) documentation.

- Make **certain** that you and your users do **not** require a directive before you disable it.


To configure the advanced features of the Apache web server, use the following directives:

| Directive | Description | Default Settings |
| --- | --- | --- |
| [_SSL Cipher Suite_](http://httpd.apache.org/docs/current/mod/mod_ssl.html#sslciphersuite) | Sets the OpenSSL ciphers that Apache uses. <br>Note:<br>- We recommend that you use this directive's default setting to adjust your server for PCI compliance. For more information about PCI compliance, read our [PCI Compliance and Software Versions](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/) documentation.<br>- If your chosen SSL protocol or the version of OpenSSL that EasyApache 4 uses does **not** support a cipher, the system will display an error message. | By default, cPanel & WHM uses the following cipher list for web services:<br>[Click to view...](https://docs.cpanel.net/whm/service-configuration/global-configuration/102/#click-to-view---1764175702428752451)<br>ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:TLS\_AES\_256\_GCM\_SHA384:TLS\_CHACHA20\_POLY1305\_SHA256:TLS\_AES\_128\_GCM\_SHA256 |
| [_SSL/TLS Protocols_](http://httpd.apache.org/docs/current/mod/mod_ssl.html#sslprotocol) | Determines the SSL and TLS protocols that the client and server negotiate during the SSL/TLS handshake phase.<br>Warning:<br>Most modern browsers only support [Transport Layer Security (TLS) protocol version 1.2](https://tools.ietf.org/html/rfc5246) or later. | _all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1_ |
| [_SSL Use Stapling_](https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslusestapling) | This option enables Online Certificate Status Protocol (OCSP) stapling. If enabled and requested by the client, the TLS handshake will include an OCSP response for its own certificate. This improves performance and security because the client does not need to contact the Certificate Authority (CA). For more information, read Wikipedia’s [OCSP stapling](https://en.wikipedia.org/wiki/OCSP_stapling) article. | _On_ |
| [_Extended Status_](https://httpd.apache.org/docs/current/mod/core.html#extendedstatus) | Shows more details about incoming requests. This information appears in WHM’s [_Apache Status_](https://docs.cpanel.net/whm/server-status/apache-status/) interface ( _WHM » Home » Server Status » Apache Status_). | _On_ |
| [_LogLevel_](http://httpd.apache.org/docs/current/mod/core.html#loglevel) | Sets the verbosity of the error log. | _warn_ |
| [_LogFormat (combined)_](http://httpd.apache.org/docs/current/mod/mod_log_config.html#logformat) | The Apache log file’s [format](http://httpd.apache.org/docs/current/mod/mod_log_config.html#formats), which includes the referrer and user agent strings. <br>Note:<br>The system defaults to this format. | _%h %l %u %t "%r" %>s %b "%{Referer}i" "%{User-Agent}i"_ |
| [_LogFormat (common)_](http://httpd.apache.org/docs/current/mod/mod_log_config.html#logformat) | The Apache log file’s [format](http://httpd.apache.org/docs/current/mod/mod_log_config.html#formats). | _%h %l %u %t "%r" %>s %b_ |
| [_Trace Enable_](http://httpd.apache.org/docs/current/mod/core.html#traceenable) | Allows or disallows TRACE requests. | _Off_ |
| [_Server Signature_](http://httpd.apache.org/docs/current/mod/core.html#serversignature) | Determines whether server information appears in error results and other information that the server generates. | _Off_ |
| [_Server Tokens_](http://httpd.apache.org/docs/current/mod/core.html#servertokens) | Determines the amount of information that Apache provides to visitors in Server HTTP response headers. |  |
| [_File ETag_](http://httpd.apache.org/docs/current/mod/core.html#fileetag) | Determines the amount of information that Apache provides to visitors who request a file via HTTP. <br>- ETags display meta information to visitors who request a file.<br>- This directive can potentially reduce server load and increase load speed. | _None_ |
| [_Directory “/” Options_](http://httpd.apache.org/docs/current/mod/core.html#options) | Sets several options that pertain to the root (/) directory. | - ExecCGI<br>- FollowSymLinks<br>- IncludesNOEXEC<br>- Indexes |
| [_Start Servers_](http://httpd.apache.org/docs/current/mod/mpm_common.html#startservers) | Defines the number of child server processes that Apache creates when it starts. | _5_ |
| [_Minimum Spare Servers_](http://httpd.apache.org/docs/current/mod/prefork.html#minspareservers) | Sets the minimum number of idle child server processes. Only configure this directive for very busy servers. <br>Note:<br>To configure this setting, you must install the MPM Prefork module. | _5_ |
| [_Maximum Spare Servers_](http://httpd.apache.org/docs/current/mod/prefork.html#maxspareservers) | Sets the maximum number of idle child server processes. Only configure this directive for very busy servers. <br>Note:<br>To configure this setting, you must install the MPM Prefork module. | _10_ |
| [_Server Limit_](http://httpd.apache.org/docs/current/mod/mpm_common.html#serverlimit) | Defines the maximum configured value for the [MaxRequestWorkers](http://httpd.apache.org/docs/current/mod/mpm_common.html#maxrequestworkers) directive (the [MaxClients](http://httpd.apache.org/docs/current/mod/mpm_common.html#maxclients) directive in Apache versions earlier than 2.4) for the lifetime of the Apache process. | _256_ |
| [_Max Request Workers_](http://httpd.apache.org/docs/current/mod/mpm_common.html#maxrequestworkers) | Sets the limit on the number of simultaneous requests that Apache serves. For example, use this value to change the maximum number of HTTP connections. You can enter a number equal to or lower than the value of the Server Limit setting (Apache refers to this directive as [Max Clients](http://httpd.apache.org/docs/current/mod/mpm_common.html#maxclients) in versions earlier than 2.4.) <br>Note:<br>To configure this setting, you must install the MPM Event, MPM Worker, or MPM Prefork module. | _150_ |
| [_Max Connections Per Child_](http://httpd.apache.org/docs/current/mod/mpm_common.html#maxconnectionsperchild) | Sets the limit on the number of requests that an individual child server process handles. After the child server processes a MaxConnectionsPerChild number of requests, the child server process terminates. If the MaxConnectionsPerChild setting equals 0, the child server process never expires. (Apache refers to this directive as [Max Requests Per Child](http://httpd.apache.org/docs/current/mod/mpm_common.html#maxrequestsperchild) in versions earlier than 2.4.) <br>Note:<br>To configure this setting, you must install the MPM Prefork module. | _10000_ |
| [_Keep-Alive_](http://httpd.apache.org/docs/current/mod/core.html#keepalive) | Enables long-lived HTTP sessions, which allow you to send multiple requests over the same TCP connection. This directive can reduce load times for HTML documents with many images.<br>Note:<br>If you use [NGINX](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/), this value also applies to your NGINX configuration. | _Off_ |
| [_Keep-Alive Timeout_](http://httpd.apache.org/docs/current/mod/core.html#maxkeepaliverequests) | Defines the number of seconds that Apache waits for another request before Apache closes a connection. <br>Note:<br>If you use [NGINX](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/), this value also applies to your NGINX configuration. | _5_ |
| [_Max Keep-Alive Requests_](http://httpd.apache.org/docs/current/mod/core.html#maxkeepaliverequests) | Limits the number of requests that a TCP connection can make when you enable the KeepAlive directive. If you do not wish to limit KeepAlive directive requests, set this value to 0. <br>Note:<br>If you use [NGINX](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/), this value also applies to your NGINX configuration. | _100_ |
| [_Timeout_](http://httpd.apache.org/docs/current/mod/core.html#timeout) | Defines the amount of time (in seconds) that Apache waits for certain events before Apache fails a request. | _300_ |
| [_Symlink Protection_](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/) | Enables the Symlink Protection patch, which helps improve Apache’s ability to detect a [race condition](https://wikipedia.org/wiki/Symlink_race). | _Off_ |

After you update the desired configuration options, click _Save_. A new interface will appear. Click _Rebuild Configuration and Restart Apache_.

To undo any of your changes, click _Reset_.

## Manually edit Apache features

The server stores the configuration of your Apache web server in the `etc/cpanel/ea4/ea4.conf` file. This file replaced the `/var/cpanel/conf/apache/local` and `/var/cpanel/conf/apache/main` files.

Warning:

We **strongly** recommend that you do **not** directly edit the `/etc/cpanel/ea4/ea4.conf` file. Use the interface instead. Editing the file directly may result in unexpected results, including server instability.

We provide several other methods to customize your system. You can use one of the following methods to create custom configurations:

- Create a custom template file for your Apache configuration. For more information, read our [Custom Templates](https://docs.cpanel.net/ea4/apache/custom-templates/) documentation.

- Add include files for your virtualhosts. For more information, read our [Modify Apache Virtual Hosts with Include Files](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/) documentation.

- Third-party integrators can edit their configuration on the command line with the `Cpanel::EA4::Conf` class. For more information, read our [Guide to Perl in cPanel - Apache Configuration](https://api.docs.cpanel.net/guides/guide-to-perl/guide-to-perl-in-cpanel-apache-configuration/) documentation.


For more information, read our [Advanced Apache Configuration](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/) documentation.

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [Global Configuration](https://docs.cpanel.net/whm/service-configuration/global-configuration/)
- [Include Editor](https://docs.cpanel.net/whm/service-configuration/include-editor/)
- [Log Rotation](https://docs.cpanel.net/whm/service-configuration/log-rotation/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×