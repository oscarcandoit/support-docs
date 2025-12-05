---
url: "https://docs.cpanel.net/whm/resellers/reset-resellers/"
title: "Reset Resellers | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/resellers/reset-resellers/#main-content)

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
4. Reset Resellers


[acls](https://docs.cpanel.net/tags/acls/) [resellers](https://docs.cpanel.net/tags/resellers/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/resellers/reset-resellers/#overview)

* * *

[Apply an ACL to multiple resellers](https://docs.cpanel.net/whm/resellers/reset-resellers/#apply-an-acl-to-multiple-resellers)

* * *

[Reset package permissions to default](https://docs.cpanel.net/whm/resellers/reset-resellers/#reset-package-permissions-to-default)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/resellers/reset-resellers/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/resellers/reset-resellers/#overview)

* * *

[Apply an ACL to multiple resellers](https://docs.cpanel.net/whm/resellers/reset-resellers/#apply-an-acl-to-multiple-resellers)

* * *

[Reset package permissions to default](https://docs.cpanel.net/whm/resellers/reset-resellers/#reset-package-permissions-to-default)

* * *

## Reset Resellers

![](https://docs.cpanel.net/img/whm-icons/reset_resellers.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/resellers/reset-resellers/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature allows you to reset package permissions or apply Access Control Lists (ACLs) to resellers. ACLs are lists of features to which you wish to grant resellers access. For example, you can apply an ACL that grants specified resellers the ability to create cPanel accounts and install SSL certificates.

Note:

- To create and configure ACLs, use WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_).

- To create a new package, use WHM’s [_Add a Package_](https://docs.cpanel.net/whm/packages/add-a-package/) interface ( _WHM » Home » Packages » Add a Package_).


## Apply an ACL to multiple resellers

To apply an existing ACL to your resellers, perform the following steps:

1. Select the desired ACL from the _Apply this ACL list_ menu.

2. Select one or more users from the To these _Resellers_ menu.

3. Click _Apply_.


## Reset package permissions to default

Important:

Before you reset package permissions for a reseller who can create packages, you **must** deselect the _Specify which packages reseller can use for account creation checkbox_ in WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_).

If this option is enabled when you reset the reseller’s package permissions, the reseller may **only** use packages that they own. However, this change will **not** modify the packages for the reseller’s existing accounts.

To reset package permissions for a reseller, perform the following steps:

1. Select the checkbox for the desired reseller in the _Select Reseller(s) to reset_ menu.

2. Click _Reset_.


#### Additional Documentation

* * *

- [Change Ownership of Multiple Accounts](https://docs.cpanel.net/whm/resellers/change-ownership-of-multiple-accounts/)
- [Edit Reseller Nameservers and Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/)
- [Email All Resellers](https://docs.cpanel.net/whm/resellers/email-all-resellers/)
- [Manage Reseller's IP Delegation](https://docs.cpanel.net/whm/resellers/manage-resellers-ip-delegation/)
- [Manage Reseller's Shared IP](https://docs.cpanel.net/whm/resellers/manage-resellers-shared-ip/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×