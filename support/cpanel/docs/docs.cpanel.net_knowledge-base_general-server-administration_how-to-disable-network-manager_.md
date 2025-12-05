---
url: "https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-disable-network-manager/"
title: "The Network Manager Service | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-disable-network-manager/#main-content)

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
4. The Network Manager Service


[networking](https://docs.cpanel.net/tags/networking/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-disable-network-manager/#overview)

* * *

[When should I disable Network Manager?](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-disable-network-manager/#when-should-i-disable-network-manager)

* * *

[Disable the Network Manager service](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-disable-network-manager/#disable-the-network-manager-service)

* * *

[When will cPanel & WHM disable the Network Manager?](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-disable-network-manager/#when-will-cpanel--whm-disable-the-network-manager)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-disable-network-manager/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-disable-network-manager/#overview)

* * *

[When should I disable Network Manager?](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-disable-network-manager/#when-should-i-disable-network-manager)

* * *

[Disable the Network Manager service](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-disable-network-manager/#disable-the-network-manager-service)

* * *

[When will cPanel & WHM disable the Network Manager?](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-disable-network-manager/#when-will-cpanel--whm-disable-the-network-manager)

* * *

## The Network Manager Service

Last modified: _2025 November 10_

* * *

## Overview

This document describes how to disable the Network Manager service on [supported operating systems](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system). The Network Manager service automates the system’s network settings and disrupts connections to the IP addresses that reside in the `ipaliases` module.

When you disable the Network Manager service, you disable this automation. You must manually address any changes to the system’s network settings. For example, if you disable the Network Manager, then reboot the system, the system will **not** automatically reconnect any preexisting connections.

Warning:

WebPros International, LLC, which includes cPanel & WHM and cPanel Technical Support, does **not** provide support related to the Network Manager service.

## When should I disable Network Manager?

Each supported operating system has its own cPanel & WHM configuration requirements. You should refer to our system requirements documentation to determine if you need to disable the Network Manager service:

- [AlmaLinux](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/#utilities)
- [CloudLinux™](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/#utilities)
- [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/#utilities)
- [Ubuntu®](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/)

## Disable the Network Manager service

Warning:

Exercise **extreme caution** when you disable the Network Manager service. Your server may lose its network services if you do not disable Network Manager correctly.

To disable the Network Manager service, perform the following steps:

1. Disable Network Manager with the following commands:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```text<br>systemctl stop NetworkManager<br>systemctl disable NetworkManager<br>``` |

2. Change to the `/etc/sysconfig/network-scripts` directory.
3. Open the `ifcfg-eth0` and `ifcfg-lo` files with your preferred text editor and, if they exist, set the following keys’ values:




|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```text<br>NM_CONTROLLED=no<br>ONBOOT=yes<br>``` |







Important:




If either of these keys does **not** exist in your `ifcfg-eth0` and `ifcfg-lo` files, do **not** add it. Instead, proceed to Step 4.


4. Run the following commands to restart the network:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```text<br>systemctl enable network.service<br>systemctl start network.service<br>``` |


For more information about how to disable the Network Manager service, read [RedHat’s Disabling Network Manager documentation](https://access.redhat.com/solutions/227143).

## When will cPanel & WHM disable the Network Manager?

On systems that run the [AlmaLinux OS 8](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/) or [Rocky Linux™ 8](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/) operating systems, the cPanel & WHM installer will automatically disable the Network Manager service and enable the `network.service` service.

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