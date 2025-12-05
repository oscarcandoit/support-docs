---
url: "https://docs.cpanel.net/knowledge-base/security/how-to-mitigate-slowloris-attacks/"
title: "How to Mitigate Slowloris Attacks | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/how-to-mitigate-slowloris-attacks/#main-content)

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
3. [Security](https://docs.cpanel.net/knowledge-base/security/)
4. How to Mitigate Slowloris Attacks


[modsecurity](https://docs.cpanel.net/tags/modsecurity/) [security](https://docs.cpanel.net/tags/security/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-mitigate-slowloris-attacks/#overview)

* * *

[The mod\_reqtimeout and mod\_qos modules](https://docs.cpanel.net/knowledge-base/security/how-to-mitigate-slowloris-attacks/#the-modreqtimeout-and-modqos-modules)

* * *

[Module installation and configuration](https://docs.cpanel.net/knowledge-base/security/how-to-mitigate-slowloris-attacks/#module-installation-and-configuration)

* * *

[mod\_reqtimeout example explanation](https://docs.cpanel.net/knowledge-base/security/how-to-mitigate-slowloris-attacks/#modreqtimeout-example-explanation)

* * *

[mod\_qos example explanation](https://docs.cpanel.net/knowledge-base/security/how-to-mitigate-slowloris-attacks/#modqos-example-explanation)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/how-to-mitigate-slowloris-attacks/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-mitigate-slowloris-attacks/#overview)

* * *

[The mod\_reqtimeout and mod\_qos modules](https://docs.cpanel.net/knowledge-base/security/how-to-mitigate-slowloris-attacks/#the-modreqtimeout-and-modqos-modules)

* * *

[Module installation and configuration](https://docs.cpanel.net/knowledge-base/security/how-to-mitigate-slowloris-attacks/#module-installation-and-configuration)

* * *

[mod\_reqtimeout example explanation](https://docs.cpanel.net/knowledge-base/security/how-to-mitigate-slowloris-attacks/#modreqtimeout-example-explanation)

* * *

[mod\_qos example explanation](https://docs.cpanel.net/knowledge-base/security/how-to-mitigate-slowloris-attacks/#modqos-example-explanation)

* * *

## How to Mitigate Slowloris Attacks

Last modified: _2024 February 8_

* * *

## Overview

This document provides several methods to mitigate the impact of Slowloris attacks.

A Slowloris attack is a denial-of-service attack that attempts to open a large number of connections on a web server. The attacker then holds those connections open for as long as possible. A web server can only serve data to a finite number of clients. Once the attack consumes all of the available connections, no other clients can reach the site.

For more information about Slowloris attacks, read [Wikipedia’s Slowloris article](https://en.wikipedia.org/wiki/Slowloris_(computer_security)).

## The mod\_reqtimeout and mod\_qos modules

We provide two Apache modules that help mitigate Slowloris attacks:

- [`mod_reqtimeout`](https://httpd.apache.org/docs/current/mod/mod_reqtimeout.html) \- We recommend this module.
- [`mod_qos`](http://mod-qos.sourceforge.net/)

## Module installation and configuration

To install either module, use WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_). Once the you have installed your preferred module, perform the following steps to create the configuration include file:

1. Log in to your server via SSH as the `root` user.
2. Create the appropriate include file with the following command:
   - For the `mod_reqtimeout` module:


     ```bash
     touch /etc/apache2/conf.d/mod_reqtimeout.conf
     ```

   - For the `mod_qos` module:


     ```bash
     touch /etc/apache2/conf.d/qos.conf
     ```
3. With your preferred text editor, add the following example in the include file:
   - For the `/etc/apache2/conf.d/mod_reqtimeout.conf` include file:





     |     |     |
     | --- | --- |
     | ```<br>1<br>2<br>3<br>``` | ```bash<br><IfModule mod_reqtimeout.c><br>  RequestReadTimeout header=20-40,MinRate=500 body=20-40,MinRate=500<br></IfModule><br>``` |

   - For the `/etc/apache2/conf.d/qos.conf` include file:





     |     |     |
     | --- | --- |
     | ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>``` | ```bash<br><IfModule qos_module><br>  # handle connections from up to 100000 different IPs<br>  QS_ClientEntries 100000<br>  # allow only 50 connections per IP<br>  QS_SrvMaxConnPerIP 50<br>  # Some examples for mod qos show MaxClients/MaxRequestWorkers. Do not set those here,<br>  # instead set MaxRequestWorkers in WHM<br>  # disables keep-alive when 180 (70%) TCP connections are occupied<br>  QS_SrvMaxConnClose 180<br>  # minimum request/response speed<br>  # (deny slow clients blocking the server, keeping connections open without requesting anything)<br>  QS_SrvMinDataRate 150 1200<br></IfModule><br>``` |

### mod\_reqtimeout example explanation

In the `/etc/apache2/conf.d/mod_reqtimeout.conf` file example in the previous section, we provided the following configuration:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br><IfModule mod_reqtimeout.c><br>  RequestReadTimeout header=20-40,MinRate=500 body=20-40,MinRate=500<br></IfModule><br>``` |

In this example, the `mod_reqtimeout` module will enforce the following behavior:

- The system will wait up to 20 seconds for header data. As long as the client sends header data at a rate of 500 bytes per second, the server will wait up to 40 seconds for the headers to complete.
- The system will wait up to 20 seconds for body data. As long as the client sends header data at a rate of 500 bytes per second, the server will wait up to 40 seconds for the body of the request to complete.

For more information, read [Apache’s ModReqtimeout documentation](https://httpd.apache.org/docs/current/mod/mod_reqtimeout.html).

### mod\_qos example explanation

In the `/etc/apache2/conf.d/qos.conf` file example in the previous section, we provided the following configuration:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>``` | ```bash<br><IfModule qos_module><br>   # handle connections from up to 100000 different IPs<br>   QS_ClientEntries 100000<br>   # allow only 50 connections per IP<br>   QS_SrvMaxConnPerIP 50<br>   # Some examples for mod qos show MaxClients/MaxRequestWorkers. Do not set those here,<br>   # instead set MaxRequestWorkers in WHM<br>   # disables keep-alive when 180 (70%) TCP connections are occupied<br>   QS_SrvMaxConnClose 180<br>   # minimum request/response speed<br>   # (deny slow clients blocking the server, keeping connections open without requesting anything)<br>  QS_SrvMinDataRate 150 1200<br></IfModule><br>``` |

In this example, the `mod_qos` module will enforce the following behavior:

| Directive | Description |
| --- | --- |
| `QS_ClientEntries` | This setting handles connections from a maximum of 100,000 IP addresses. |
| `QS_SrvMaxConnPerIP` | This setting limits each IP address to a maximum number of 50 connections. |
| `QS_SrvMaxConnClose` | This setting disables the [KeepAlive](https://httpd.apache.org/docs/current/mod/core.html#keepalive) function when at least 180 connections exist. |
| `QS_SrvMinDataRate` | This setting requires a minimum of 150 bytes per second per connection, and limits the connection to 1200 bytes per second when the server reaches the `MaxRequestWorkers` limit. |

For more information, read the [mod\_qos](http://mod-qos.sourceforge.net/) documentation.

#### Additional Documentation

* * *

- [How to Update Ciphers and TLS Protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [ModSecurity® 3](https://docs.cpanel.net/knowledge-base/experimental-software/modsecurity-3/)
- [ModSecurity® Tools](https://docs.cpanel.net/whm/security-center/modsecurity-tools/)
- [ModSecurity® Vendors](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×