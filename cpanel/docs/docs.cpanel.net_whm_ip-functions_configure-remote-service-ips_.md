---
url: "https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/"
title: "Configure Remote Service IPs | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/#main-content)

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
3. [IP Functions](https://docs.cpanel.net/whm/ip-functions/)
4. Configure Remote Service IPs


[ip](https://docs.cpanel.net/tags/ip/) [nameservers](https://docs.cpanel.net/tags/nameservers/) [services](https://docs.cpanel.net/tags/services/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/#overview)

* * *

[Remote mail server IP addresses](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/#remote-mail-server-ip-addresses)

* * *

[Add mail server IP addresses](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/#add-mail-server-ip-addresses)

* * *

[Remote nameserver IP addresses](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/#remote-nameserver-ip-addresses)

* * *

[Add remote nameserver IP addresses](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/#add-remote-nameserver-ip-addresses)

* * *

[The Allow Remote Domains option](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/#the-allow-remote-domains-option)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/#overview)

* * *

[Remote mail server IP addresses](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/#remote-mail-server-ip-addresses)

* * *

[Add mail server IP addresses](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/#add-mail-server-ip-addresses)

* * *

[Remote nameserver IP addresses](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/#remote-nameserver-ip-addresses)

* * *

[Add remote nameserver IP addresses](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/#add-remote-nameserver-ip-addresses)

* * *

[The Allow Remote Domains option](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/#the-allow-remote-domains-option)

* * *

## Configure Remote Service IPs

![](https://docs.cpanel.net/img/whm-icons/configure_remote_service_ips.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)

Last modified: _2025 February 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to specify remote mail server and nameserver IP addresses that the system will then consider as local addresses.

Note:

For more information about IPv6 on your cPanel & WHM server, read our [Guide to IPv6](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/) documentation.


## Remote mail server IP addresses

This feature allows you to specify the IP addresses of remote services that handle mail for one or more domains. For example, you can use this feature to specify the address of a third-party spam filter service.

Note:

The system stores these entries in the `/etc/ips.remotemail` file as a line-separated list.


### Add mail server IP addresses

To add remote mail server IP addresses, perform the following steps:

1. Click the _Remote Mail Server IPs_ tab.

2. Enter the IP addresses that you want to add in the available text box, one address per line.

3. Click _Save_.


To remove remote mail server IP addresses, delete the entries that you no longer want to use from the text box.

### Remote nameserver IP addresses

This feature allows you to specify the IP addresses of remote nameservers that your system uses. For example, you can use this feature to allow users to create remote parked or addon domains. To do this, specify the nameservers’ IP addresses. You **only** need to add one of the nameservers for the domain, not all of them. If you add the IP address of the domain itself (if different from the nameserver’s IP address) the system will **not** authorize that domain.

Note:

- The system stores these entries in the `/etc/ips.remotedns` file as a line-separated list.
- If you use remotely-clustered DNS nameservers, you **must** manually add the IP addresses.

### Add remote nameserver IP addresses

To add remote nameserver IP addresses, perform the following steps:

1. Click the _Remote Name Server IPs_ tab.

2. Enter the IP addresses that you want to add in the available text box, one address per line.

3. Click _Save_.


To remove the remote nameserver IP addresses, delete the entries that you no longer want to use from the text box.

### The Allow Remote Domains option

To allow users to create remote parked or addon domains while they override the nameservers that the _Configure Remote Service IPs_ interface lists, enable the _Allow Remote Domains_ option in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

Warning:

For security reasons, we **strongly** recommend that you do **not** enable this option. If you enable this option, you must also enable the _Prevent cPanel users from creating specific domains_ option in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

#### Additional Documentation

* * *

- [Add a New IP Address](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/)
- [Assign IPv6 Address](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/)
- [Rebuild the IP Address Pool](https://docs.cpanel.net/whm/ip-functions/rebuild-the-ip-address-pool/)
- [Show IP Address Usage](https://docs.cpanel.net/whm/ip-functions/show-ip-address-usage/)
- [Show/Edit Reserved IPs](https://docs.cpanel.net/whm/ip-functions/show-edit-reserved-ips/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×