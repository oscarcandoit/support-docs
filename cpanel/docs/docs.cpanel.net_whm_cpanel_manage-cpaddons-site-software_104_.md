---
url: "https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/"
title: "Manage cPAddons Site Software | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#main-content)

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
3. [cPanel](https://docs.cpanel.net/whm/cpanel/)
4. Manage cPAddons Site Software


[whmui](https://docs.cpanel.net/tags/whmui/) [cpaddons](https://docs.cpanel.net/tags/cpaddons/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#overview)

* * *

[cPAddon moderation](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#cpaddon-moderation)

* * *

[Search for cPAddons](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#search-for-cpaddons)

* * *

[Approve a moderation request and install a cPAddon](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#approve-a-moderation-request-and-install-a-cpaddon)

* * *

[Force update outdated cPAddons](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#force-update-outdated-cpaddons)

* * *

[Uninstall deprecated cPAddons](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#uninstall-deprecated-cpaddons)

* * *

[cPAddon data after deletion](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#cpaddon-data-after-deletion)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#overview)

* * *

[cPAddon moderation](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#cpaddon-moderation)

* * *

[Search for cPAddons](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#search-for-cpaddons)

* * *

[Approve a moderation request and install a cPAddon](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#approve-a-moderation-request-and-install-a-cpaddon)

* * *

[Force update outdated cPAddons](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#force-update-outdated-cpaddons)

* * *

[Uninstall deprecated cPAddons](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#uninstall-deprecated-cpaddons)

* * *

[cPAddon data after deletion](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/#cpaddon-data-after-deletion)

* * *

## Manage cPAddons Site Software

![](https://docs.cpanel.net/img/whm-icons/manage_cpaddons_site_software.svg)

_Valid for versions 104 through 118_

#### Version:

#### [104](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/104/)

#### [120](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Manage cPAddons Site Software_ interface allows you to upgrade or uninstall individual installations of cPAddon software.

Warning:

- We **deprecated** this interface in cPanel & WHM version 104 and plan to remove it in future versions. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan) documentation.
- This interface does **not** appear on servers running the Ubuntu® operating system.

Note:

To configure the cPAddons that you wish to offer to all of your users, use WHM’s [_Install cPAddons Site Software_](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/) interface _(WHM » Home » cPanel » Install cPAddons Site Software)_.

## cPAddon moderation

Important:

We have deprecated the _Moderation_ feature and will remove it in a future version of cPanel & WHM. You **cannot** enable moderation for any cPAddons. Any cPAddons that currently use moderation will continue to function. However, if you disabled moderation, you **cannot** reactivate it.

## Search for cPAddons

To search for cPAddons, perform the following steps:

1. Next to _Show_, select one of the following options to specify the type of cPAddons that you wish to view:

   - _All Outdated Installations_ — WHM displays all out-of-date cPAddon scripts.
   - _Orphaned Installations_ — WHM displays all cPAddons that you cannot upgrade because the link between the cPAddon in WHM and its copy in cPanel is either broken or not upgradable.






     Note:





     Orphaned installations result from any of the following actions:



- If you remove the cPAddon from the _Install cPAddons Site Software_ interface.
- If you remove the cPAddon via the file system rather than via cPanel & WHM.
- If you manually move the `/.cpaddons` directory to another location.
- If you make manual revisions to the cPAddon’s `.yaml` file.
- If you make manual updates to the cPAddon in WHM’s [_Manage cPAddons Site Software_](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/) interface _(WHM » Home » cPanel » Manage cPAddons Site Software)_ after you install the cPAddon in cPanel’s [_Site Software_](https://docs.cpanel.net/cpanel/software/site-software/) interface _(cPanel » Home » Software » Site Software)_.

   - _All Installations_ — WHM displays all installed cPAddons.
2. Select the user whose cPAddons you wish to view, or select _All Users_.
3. Click _Manage_. WHM then displays each cPAddon that matches your search criteria, along with the user, latest version available, and currently installed version.
4. Click _Currently installed in WHM_ to use the _Install cPAddons_ interface to view, install, and update the cPAddons that your users can access.

## Approve a moderation request and install a cPAddon

Important:

We have deprecated the moderation feature and will remove it in the future. You **cannot** enable moderation for any cPAddons. Any cPAddons that currently use moderation will continue to function but, if you disabled it, you **cannot** reactivate moderation.

The _Manage cPaddons Site Software_ interface displays any pending installation requests at the top of the interface in the _Pending Moderation Requests_ section.

To approve a site software moderation request and install a cPAddon, click the name of the module inside of that section.

## Force update outdated cPAddons

To force any outdated cPAddons to update, perform the following steps:

1. From the second menu, select _Upgrade all installs that need it_.
2. Select the user for whom you wish to apply the upgrade. Select _All Users_ to upgrade the installation for all users.
3. Click _Go_.

## Uninstall deprecated cPAddons

To uninstall deprecated cPAddons, perform the following steps:

1. From the second menu, select _Uninstall All Orphaned Installations_.
2. Select the user for whom you wish to uninstall the cPAddons, or select _All Users_ and click _Go_.
3. On the next page, click _Yes I am sure I want to do this_ to confirm that you wish to uninstall the deprecated cPAddons.

## cPAddon data after deletion

When you remove a cPAddon, WHM also removes its data.

- If the cPAddon created the database, and no other cPAddons use it, WHM removes the database entirely. This includes any tables that users created.
- If the cPAddon that you remove did **not** create the database, or if another cPAddon currently uses that database, WHM only removes the tables that correspond to that cPAddon. This can lead to an empty database on the server.

We recommend that you delete any other cPAddons that share a database **before** you delete the cPAddon that initially created the database. If you delete the cPAddon that created the database first, an empty database will remain on the server.

Use cPanel’s [_MySQL® Databases_](https://docs.cpanel.net/cpanel/databases/mysql-databases) interface _(cPanel » Home » Databases » MySQL® Databases)_ to manually delete empty cPAddon databases.

#### Additional Documentation

* * *

- [Change Log](https://docs.cpanel.net/whm/cpanel/change-log/)
- [Customization](https://docs.cpanel.net/whm/cpanel/customization/)
- [Install cPAddons Site Software](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/)
- [Manage cPAddons Site Software](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/)
- [Manage Plugins](https://docs.cpanel.net/whm/cpanel/manage-plugins/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×