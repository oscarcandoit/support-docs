---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/"
title: "1:1 NAT | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/#main-content)

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
4. 1:1 NAT


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [networking](https://docs.cpanel.net/tags/networking/) [nat](https://docs.cpanel.net/tags/nat/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/#overview)

* * *

[The mapping process](https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/#the-mapping-process)

* * *

[Manage IP addresses](https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/#manage-ip-addresses)

* * *

[The build\_cpnat script](https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/#the-buildcpnat-script)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/#overview)

* * *

[The mapping process](https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/#the-mapping-process)

* * *

[Manage IP addresses](https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/#manage-ip-addresses)

* * *

[The build\_cpnat script](https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/#the-buildcpnat-script)

* * *

## 1:1 NAT

Last modified: _2025 June 9_

* * *

## Overview

Warning:

We **strongly** recommend that you **only** perform these actions on a new installation of cPanel & WHM. **Do not** attempt a 1:1 NAT configuration on an existing production server.


When you install cPanel & WHM, the installer will detect whether your server resides on a NAT-configured network. If the installer detects a NAT-configured network, your server will configure itself for NAT mode and attempt to automatically map local IP addresses to public IP addresses.

Important:

- If you use a NAT environment, your server **must** reside in a 1:1 NAT configuration to install cPanel & WHM.
- For cPanel & WHM services to function correctly, you or your network administrator **must** enable [loopback (or hairpin) NAT](https://en.wikipedia.org/wiki/Network_address_translation#NAT_loopback) on both the server and its firewall. Loopback NAT allows the server to access a public IP address internally from its corresponding private IP address.
- For a list of ports that you must open to allow cPanel & WHM services to function on your server, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services) documentation.

## The mapping process

The system attempts to map all non-loopback IP addresses bound to any network interface on the server to a public IP address.

![a system mapping all non-loopback IP addresses bound to any network interface on the server to a public IP address](https://docs.cpanel.net/img/nat-diagram.png)

To complete this process, the system performs the following actions:

1. Your server will send an outgoing connection from each local IP address to the `http://myip.cpanel.net/v1.0/` server.
2. The `http://myip.cpanel.net/v1.0/` server responds with the public IP address from which it received the request.
3. The system maps the local IP address to this public IP address.

Warning:

We do **not** recommend that you map more than one local IP map address to a single public IP address.


## Manage IP addresses

You can manage the maps for local and remote IP addresses with the following WHM interfaces:

- The
[_Add a New IP Address_](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/)
interface ( _WHM » Home » IP Functions » Add a New IP Address_).
- The [_Show or Delete Current IP Addresses_](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/) interface ( _WHM » Home » IP Functions » Show or Delete Current IP Addresses_).
- The [_IP Migration Wizard_](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/) interface ( _WHM » Home » IP Functions » IP Migration Wizard_).

Each interface displays the warning notice _NAT mode enabled_ if NAT is enabled on your server.

Warning:

If multiple local IP addresses match the same public IP address, the system will **only** map the first local IP address in the `/var/cpanel/cpnat` file.


## The build\_cpnat script

The `/usr/local/cpanel/scripts/build_cpnat` script uses the `http://myip.cpanel.net/v1.0/` server to map local IP addresses to public IP addresses. However, if you wish to use a different IP address lookup service, perform the following steps:

1. Open the `/etc/cpsources.conf` file with a text editor and add the following line:

```
MYIP=https://ifconfig.me/ip
```

2. Run the `/usr/local/cpanel/scripts/build_cpnat` script.






Note:





- For more information about the `build_cpnat` script, run the following command:

```
/usr/local/cpanel/scripts/build_cpnat --man
```

- If you accidentally delete your `cpnat` file or the file becomes becomes corrupted, rebuild it with the `/usr/local/cpanel/scripts/build_cpnat` script.
- The `/var/cpanel/cpnat` file acts as a flag file for NAT mode. If the installer mistakenly detects a NAT-configured network, delete the`/var/cpanel/cpnat` file to disable NAT mode.

3. Update your cPanel accounts’ local IP addresses in WHM’s [_IP Migration Wizard_](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/) interface ( _WHM » Home » IP Functions » IP Migration Wizard_).

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Notification Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/)
- [Service Proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×