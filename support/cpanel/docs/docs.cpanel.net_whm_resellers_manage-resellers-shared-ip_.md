---
url: "https://docs.cpanel.net/whm/resellers/manage-resellers-shared-ip/"
title: "Manage Reseller's Shared IP | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/resellers/manage-resellers-shared-ip/#main-content)

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
4. Manage Reseller's Shared IP


[resellers](https://docs.cpanel.net/tags/resellers/) [ip](https://docs.cpanel.net/tags/ip/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/resellers/manage-resellers-shared-ip/#overview)

* * *

[Specify a shared IP](https://docs.cpanel.net/whm/resellers/manage-resellers-shared-ip/#specify-a-shared-ip)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/resellers/manage-resellers-shared-ip/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/resellers/manage-resellers-shared-ip/#overview)

* * *

[Specify a shared IP](https://docs.cpanel.net/whm/resellers/manage-resellers-shared-ip/#specify-a-shared-ip)

* * *

## Manage Reseller's Shared IP

![](https://docs.cpanel.net/img/whm-icons/manage_resellers_shared_ip.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/resellers/manage-resellers-shared-ip/)

Last modified: _2025 February 12_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to specify a shared IP address for a reseller.

Note:

You can [**share** an IP address between multiple resellers](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-share-multiple-ip-addresses/), but you can only **dedicate** an IP address to one user.


## Specify a shared IP

To specify a shared IP address for a reseller, perform the following steps:

1. If more than one reseller exists on the server, select the desired reseller from the menu and click _Submit_. A new interface will appear.

2. Select the desired IP address from the menu. This menu lists all of your server’s IP addresses and labels them as follows:
   - _Delegated IP_ addresses and their resellers.
   - _Dedicated IP_ addresses and their accounts.
   - _Shared IP_ addresses and their resellers.
3. Click _Save_.


If the function succeeds, the following message appears (where `example` represents the user):

```perl
Shared (IP-less) IP for example is now 10.100.100.100.
```

Otherwise, the following message appears (where `example` represents the user):

```perl
Failed to set shared (IP-less) IP for example: Supplied IP address is invalid.
```

Note:

To change the IP address for an existing account, use WHM’s [_List Accounts_](https://docs.cpanel.net/whm/account-information/list-accounts/) interface ( _WHM » Home » Account Information » List Accounts_).

#### Additional Documentation

* * *

- [Change Ownership of Multiple Accounts](https://docs.cpanel.net/whm/resellers/change-ownership-of-multiple-accounts/)
- [Edit Reseller Nameservers and Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/)
- [Email All Resellers](https://docs.cpanel.net/whm/resellers/email-all-resellers/)
- [Manage Reseller's IP Delegation](https://docs.cpanel.net/whm/resellers/manage-resellers-ip-delegation/)
- [Reseller Center](https://docs.cpanel.net/whm/resellers/reseller-center/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×