---
url: "https://docs.cpanel.net/whm/resellers/manage-resellers-ip-delegation/"
title: "Manage Reseller's IP Delegation | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/resellers/manage-resellers-ip-delegation/#main-content)

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
3. [Resellers](https://docs.cpanel.net/whm/resellers/)
4. Manage Reseller's IP Delegation


[resellers](https://docs.cpanel.net/tags/resellers/) [ip](https://docs.cpanel.net/tags/ip/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/resellers/manage-resellers-ip-delegation/#overview)

* * *

[Open Delegation](https://docs.cpanel.net/whm/resellers/manage-resellers-ip-delegation/#open-delegation)

* * *

[Restricted Delegation](https://docs.cpanel.net/whm/resellers/manage-resellers-ip-delegation/#restricted-delegation)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/resellers/manage-resellers-ip-delegation/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/resellers/manage-resellers-ip-delegation/#overview)

* * *

[Open Delegation](https://docs.cpanel.net/whm/resellers/manage-resellers-ip-delegation/#open-delegation)

* * *

[Restricted Delegation](https://docs.cpanel.net/whm/resellers/manage-resellers-ip-delegation/#restricted-delegation)

* * *

## Manage Reseller's IP Delegation

![](https://docs.cpanel.net/img/whm-icons/manage_resellers_ip_delegation.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/resellers/manage-resellers-ip-delegation/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to control a reseller’s access to the server’s IP addresses.

Note:

You can share an IP address between multiple resellers, but you can only **dedicate** an IP address to one user.


## Open Delegation

The _Open Delegation_ option grants a reseller access to all of the available IP addresses on the server. This option is selected by default.

To allow a reseller access to all of the available IP addresses on the server, perform the following steps:

1. If more than one reseller exists on the server, select the desired reseller from the menu and click _Submit_. A new interface will appear.

2. Click _Open Delegation_.

3. Click _Save_.


If the function succeeds, the following message will appear (where example represents the user):

```perl
The reseller "example" now has access to any free IPs on the server.
```

## Restricted Delegation

The Restricted Delegation option restricts a reseller to specific IP addresses on the server. When a reseller has restricted access to certain IP addresses, the selected IP addresses are **delegated** to that reseller.

To restrict a reseller’s access to specific IP address or addresses on the server, perform the following steps:

1. If more than one reseller exists on the server, select the desired reseller from the menu and click _Submit_. A new interface will appear.

2. Click _Restricted Delegation_. A menu that lists IP addresses will appear.






Note:




The interface labels the server’s IP addresses as _delegated_ or _dedicated_. You can **delegate** an IP address to multiple resellers, but you can only **dedicate** an IP address to one user.


3. Select the IP address or addresses that you wish for the reseller to use.

4. Click _Save_. A new interface will appear.


If the function is successful, you will see the following message (where `example` represents the user):

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>Saved Delegated IPs for example:<br>10.1.11.1<br>``` |

Note:

To change the IP address for an existing account, use WHM’s [_Change Site’s IP Address_](https://docs.cpanel.net/whm/account-functions/change-site-ip-address/) interface ( _WHM » Home » Account Functions » Change Site’s IP Address_).

#### Additional Documentation

* * *

- [Change Ownership of Multiple Accounts](https://docs.cpanel.net/whm/resellers/change-ownership-of-multiple-accounts/)
- [Edit Reseller Nameservers and Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/)
- [Email All Resellers](https://docs.cpanel.net/whm/resellers/email-all-resellers/)
- [Manage Reseller's Shared IP](https://docs.cpanel.net/whm/resellers/manage-resellers-shared-ip/)
- [Reseller Center](https://docs.cpanel.net/whm/resellers/reseller-center/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×