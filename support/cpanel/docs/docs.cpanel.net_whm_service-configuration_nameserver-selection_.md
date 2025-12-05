---
url: "https://docs.cpanel.net/whm/service-configuration/nameserver-selection/"
title: "Nameserver Selection | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/nameserver-selection/#main-content)

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
4. Nameserver Selection


[nameservers](https://docs.cpanel.net/tags/nameservers/) [whmui](https://docs.cpanel.net/tags/whmui/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/nameserver-selection/#overview)

* * *

[What is a nameserver?](https://docs.cpanel.net/whm/service-configuration/nameserver-selection/#what-is-a-nameserver)

* * *

[Select or disable the nameserver](https://docs.cpanel.net/whm/service-configuration/nameserver-selection/#select-or-disable-the-nameserver)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/nameserver-selection/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/nameserver-selection/#overview)

* * *

[What is a nameserver?](https://docs.cpanel.net/whm/service-configuration/nameserver-selection/#what-is-a-nameserver)

* * *

[Select or disable the nameserver](https://docs.cpanel.net/whm/service-configuration/nameserver-selection/#select-or-disable-the-nameserver)

* * *

## Nameserver Selection

![](https://docs.cpanel.net/img/whm-icons/nameserver_selection.svg)

_Valid for versions 106 through the latest version_

#### Version:

#### [106](https://docs.cpanel.net/whm/service-configuration/nameserver-selection/)

Last modified: _2025 April 16_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to select your server’s nameserver software or to disable DNS services.

Important:

We recommend that you do **not** start nameservers unless you plan to use them.

### What is a nameserver?

Nameservers match domain names to IP addresses. When a visitor attempts to find a website that your server hosts, their computer asks a nameserver for the IP address of the domain that they wish to view. The nameserver returns the IP address for your web server and directs the visitor to the correct page.

You must publish records for your domain names to nameservers so that visitors can reach those sites. These nameservers communicate with other nameservers to distribute the records of sites that your server hosts. The propagation period is the amount of time that it takes for a domain’s DNS records to spread across the internet.

Note:

A website’s record may require up to one week to propagate.

## Select or disable the nameserver

To select your server’s nameserver software, perform the following steps:

1. Select one of the following options:
   - _BIND_


     Important:





     You **cannot** select _BIND_ on servers running the Ubuntu® operating system.

   - _PowerDNS_


     Note:





- The system defaults to _PowerDNS_.
- PowerDNS will **not** work if you use a recursive nameserver. A recursive nameserver finds the IP address of a domain name by searching its memory cache, then querying other servers.

   - _Disabled_
2. Click _Save_.

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [DNS Cluster](https://docs.cpanel.net/whm/clusters/dns-cluster/)
- [Nameserver Record Report](https://docs.cpanel.net/whm/dns-functions/nameserver-record-report/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×