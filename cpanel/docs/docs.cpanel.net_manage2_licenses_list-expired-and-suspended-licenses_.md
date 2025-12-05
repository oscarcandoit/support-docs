---
url: "https://docs.cpanel.net/manage2/licenses/list-expired-and-suspended-licenses/"
title: "List Expired and Suspended Licenses | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/licenses/list-expired-and-suspended-licenses/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [Manage2](https://docs.cpanel.net/manage2/)
3. [Licenses](https://docs.cpanel.net/manage2/licenses/)
4. List Expired and Suspended Licenses


[license](https://docs.cpanel.net/tags/license/) [manage2](https://docs.cpanel.net/tags/manage2/)

#### Table of Contents

[Overview](https://docs.cpanel.net/manage2/licenses/list-expired-and-suspended-licenses/#overview)

* * *

[Customize the list of licenses](https://docs.cpanel.net/manage2/licenses/list-expired-and-suspended-licenses/#customize-the-list-of-licenses)

* * *

[Expired and suspended license information](https://docs.cpanel.net/manage2/licenses/list-expired-and-suspended-licenses/#expired-and-suspended-license-information)

* * *

[Reactivate a license](https://docs.cpanel.net/manage2/licenses/list-expired-and-suspended-licenses/#reactivate-a-license)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/licenses/list-expired-and-suspended-licenses/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/manage2/licenses/list-expired-and-suspended-licenses/#overview)

* * *

[Customize the list of licenses](https://docs.cpanel.net/manage2/licenses/list-expired-and-suspended-licenses/#customize-the-list-of-licenses)

* * *

[Expired and suspended license information](https://docs.cpanel.net/manage2/licenses/list-expired-and-suspended-licenses/#expired-and-suspended-license-information)

* * *

[Reactivate a license](https://docs.cpanel.net/manage2/licenses/list-expired-and-suspended-licenses/#reactivate-a-license)

* * *

## List Expired and Suspended Licenses

Last modified: _2024 May 22_

* * *

## Overview

The _List Expired and Suspended Licenses_ interface displays your expired and deactivated licenses.

## Customize the list of licenses

Use the following options to customize the list of licenses:

- _Days to show_ — Enter the number of days that you wish to view and click _Go_.





Note:




This value defaults to `2` for primary Manage2 accounts and `60` for any Manage2 subaccounts.


- Group selection menu — Select the group of licenses that you wish to view.

## Expired and suspended license information

Important:

This interface **only** lists values if they apply to that license. For example, the table only displays an IP address in the _IP_ column if that license has an associated IP address.

The following information displays for each license that expired or became suspended within the selected date range:

- _Group_ — The licenses’s group.





Note:




Click on a group name to view that group’s _View Group Licenses_ interface _(Dashboard » Groups » View Group Licenses)_.


- _Package_ — The license’s package.
- _$$_ — The license’s monthly fee.
- _Hostname_ — The license’s hostname.
- _IP_ — The license’s IP address.





Note:




If you have added or removed an IP address more than once, the IP address may appear more than once in this list. For this reason, we **strongly** recommend that you list a reason when you expire licenses.


- _Sites_ — The number of site monitors for a 360 Monitoring license or the number of sites for a WP Guardian license.
- _Servers_ — The number of server monitors for a 360 Monitoring license.
- _Self-Hosted Sites_ — The number of self-hosted sites for a Sitejet Studio license.
- _Hosted Sites_ — The number of hosted sites for a Sitejet Studio license.
- _Projects_ — The number of projects for a koality license.
- _Contact_ — The email address that the server administrator entered in WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/) interface _(Home » Server Configuration » Basic WebHost Manager Setup)_.
- _Exp Date_ — The license’s expiration or suspension date.
- _Reason_ — The reason for the license’s expiration. If you renewed the license, this column will display _Renewed_.
- _Blame_ — The email address of the user who expired or suspended the license.
- _Actions_ — The link to reactivate the license.

  - This option does not appear for renewed licenses and 360 Monitoring, koality, Sitejet Studio, WP Guardian, WP Guardian (cPanel Addon), or XOVI NOW licenses.
  - For more information, see the [Reactivate a license](https://docs.cpanel.net/manage2/licenses/list-expired-and-suspended-licenses/#reactivate-a-license) section below.

### Reactivate a license

To reactivate an expired or suspended license, perform the following steps:

1. In the _IP_ column, locate the IP address of the license that you wish to reactivate.
2. In the _Actions_ column for that IP address, click _Reactivate_.





Warning:




Make certain that you select the correct license before you click _Reactivate_.



A new interface will appear that displays the following information:

   - A message of success.
   - The license number.
   - The license’s IP address.
   - The license’s group.

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×