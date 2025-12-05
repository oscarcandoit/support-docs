---
url: "https://docs.cpanel.net/manage2/licenses/add-license/"
title: "Add License | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/licenses/add-license/#main-content)

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
4. Add License


[manage2](https://docs.cpanel.net/tags/manage2/) [license](https://docs.cpanel.net/tags/license/)

#### Table of Contents

[Overview](https://docs.cpanel.net/manage2/licenses/add-license/#overview)

* * *

[Add a license](https://docs.cpanel.net/manage2/licenses/add-license/#add-a-license)

* * *

[Maximum users](https://docs.cpanel.net/manage2/licenses/add-license/#maximum-users)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/licenses/add-license/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/manage2/licenses/add-license/#overview)

* * *

[Add a license](https://docs.cpanel.net/manage2/licenses/add-license/#add-a-license)

* * *

[Maximum users](https://docs.cpanel.net/manage2/licenses/add-license/#maximum-users)

* * *

## Add License

Last modified: _2025 June 5_

* * *

## Overview

Use the _Add License_ interface to add licenses to your account or renew existing licenses.

Important:

- When you add or renew licenses:
  - Manage2 does **not** create an invoice until billing runs on the 15th day of the month. The [_Account History_](https://docs.cpanel.net/manage2/billing/account-history/) interface ( _Dashboard » Billing » Account History_) will display invoice information after billing runs.
  - Manage2 activates licenses **immediately** unless they are 360 Monitoring, koality, or WP Guardian licenses.
  - You **must** activate 360 Monitoring, koality, and WP Guardian licenses manually using the displayed activation link (see below).
- 360 Monitoring, koality, Sitejet Commerce, WP Guardian, and WP Guardian (cPanel Addon) licenses do **not** support reactivation.

## Add a license

To add or renew a license, perform the following steps:

1. From the _Group_ menu, select the license’s new group.

   - Click _show all groups_ to view all of your Manage2 account’s groups.
   - Click _limit groups_ to return to the original menu of groups.
2. From the _Package_ menu, select the license’s package. Manage2 will display the license’s price and product type in the _Price_ and _Product_ sections.

   - If you select a cPanel & WHM license package, the _License Features_ options will appear. **Always** set both of these **deprecated** options to the _Use Default (Yes)_ setting.
   - If you select a WP Toolkit package, the _Accounts_ text box will appear. You **must** enter at least `20`, and the number of accounts **must** be a multiple of 10.
   - If you select a 360 Monitoring package, the _Site Monitors_ and _Server Monitors_ text boxes will appear. Select or enter the number of site and server monitors to include with the 360 Monitoring license. For more information, see our [How to Purchase a 360 Monitoring License](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-360-monitoring-license/) documentation.
   - If you select a koality package, the _Additional Projects_ text box will appear. Select or enter the number of koality projects to include with the koality license.

     - The cost of the additional koality projects will appear under the _Additional Projects_ text box.
     - You **must** enter the number of projects in the correct increments for the package. For more information, see our [How to Purchase a koality License](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-koality-license/) documentation.
3. For licenses that use an associated IP address, enter the desired IPv4 addresses in the _IP Addresses_ text box. Then, click _Add Address_.





Note:





- If you enter multiple IP addresses, the licenses will use the same package.
- To renew existing licenses, enter the current IP addresses for those licenses.

4. Optionally, in the _External Notes_ text box, enter any notes for the license.

   - You can view external notes for a license by downloading the comma-separated values (CSV) file from the [_List Active Licenses_](https://docs.cpanel.net/manage2/licenses/list-active-licenses/) interface ( _Dashboard » Licenses » List Active Licenses_).
   - You cannot enter more than 64 characters.
5. Read the disclaimer about internal and external licenses.





Note:




External licenses are **only** available to cPanel distributors.


6. Click _Add License_.

   - Manage2 will display the license’s ID number, associated IPv4 addresses, group, and the eventual invoice amount.
   - If you selected a 360 Monitoring, koality, WP Guardian, or WP Guardian (cPanel Addon) license, it will also display an activation link and send it to you through email.
7. For 360 Monitoring, koality, or WP Guardian licenses, activate the license using the displayed activation link.





Important:





You **must** use the activation link to activate these licenses manually. For more information, see the following documents:



- [How to Purchase a 360 Monitoring License](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-360-monitoring-license/)
- [How to Purchase a koality License](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-koality-license/)
- [How to Purchase a WP Guardian License](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-wp-guardian-license)

8. If this is the first time that you have worked with this type of license on your Manage2 account, go to the appropriate _Activation_ interface to sign the required _Product Terms of Use_ agreement. For example, go to the _CloudLinux Activation_ interface ( _Dashboard » Licenses » CloudLinux Activation_) for CloudLinux™ license purchases.

Note:

- To make changes to or view details for the new license, click _View/Modify_ to navigate to the [_Modify a License_](https://docs.cpanel.net/manage2/licenses/modify-a-license/) interface ( _Dashboard » Billing » Modify a License_).
- To modify the groups and packages that appear for users in the _Groups_ and _Packages_ menus, use the [_Update My Information_](https://docs.cpanel.net/manage2/users/update-my-information/) interface ( _Dashboard » Users » Update My Information_).

## Maximum users

When you click _Add License_, you may see the following message:

_The account volume on this license exceeds the package maximum._

This message indicates that the selected package already has the maximum number of users.

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×