---
url: "https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/"
title: "Install cPAddons Site Software | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/#main-content)

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
4. Install cPAddons Site Software


[cpaddons](https://docs.cpanel.net/tags/cpaddons/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/#overview)

* * *

[cPanel-managed package managers](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/#cpanel-managed-package-managers)

* * *

[Install a cPAddon](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/#install-a-cpaddon)

* * *

[Add new vendors](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/#add-new-vendors)

* * *

[Delete a vendor](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/#delete-a-vendor)

* * *

[cPAddon data after deletion](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/#cpaddon-data-after-deletion)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/#overview)

* * *

[cPanel-managed package managers](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/#cpanel-managed-package-managers)

* * *

[Install a cPAddon](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/#install-a-cpaddon)

* * *

[Add new vendors](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/#add-new-vendors)

* * *

[Delete a vendor](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/#delete-a-vendor)

* * *

[cPAddon data after deletion](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/#cpaddon-data-after-deletion)

* * *

## Install cPAddons Site Software

![](https://docs.cpanel.net/img/whm-icons/install_cpaddons_site_software.svg)

_Valid for versions 120 through the latest version_

#### Version:

#### [104](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/104/)

#### [120](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/)

Last modified: _2024 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to add and manage cPAddons and vendors. cPAddons are applications that work with cPanel & WHM to perform functions for your users’ websites. Examples of these applications include bulletin boards, online shopping carts, and blogs.

Warning:

- We **deprecated** this interface in cPanel & WHM version 104 and plan to remove it in future versions. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan) documentation.
- This interface does **not** appear on servers running the Ubuntu® operating system.

## cPanel-managed package managers

We have updated the cPAddons feature to use a package manager to install WordPress®. For more information, read our [Package Manager Basics](https://docs.cpanel.net/ea4/basics/package-manager-basics/) documentation. When you install WordPress through cPAddons with a package manager, you can update WordPress through its own administrative interface. WHM’s _Install cPAddons Site Software_ interface discovers, installs, and uninstalls packages with `yum`. The cPanel, L.L.C. package manager contains an unaltered WordPress installer package obtained from [wordpress.org](http://wordpress.org/).

Note:

- We deprecated WordPress (legacy) in cPanel & WHM version 64 and disabled it version 70. cPanel & WHM servers now automatically create new installations with cPAddon’s package manager-based WordPress installation package that we added in cPanel & WHM version 64.
- This interface displays the old cPAddons version of WordPress as: _WordPress (legacy)_
- To update _WordPress (legacy)_ installations to the new package manager-based WordPress cPAddon, use the `/scripts/migrate_legacy_wordpress_to_modern_wordpress` script.

## Install a cPAddon

Warning:

Certain cPAddons contain security-sensitive files, such as files that contain passwords in clear text. cPAddons that exist on servers that do **not** use the [`mpm-itk`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk), `mod_ruid2`, or `mod_suphp` modules require additional file permission adjustments to prevent security issues between users. For security reasons, we do **not** recommend that you install any cPAddons on shared hosting servers without one of these modules.


To install a cPAddon, perform the following steps:

1. Select the _Installed_ checkbox next to the cPAddon that you wish to install.
2. To force all of your installed cPAddons to update, select the _Force Refresh of All cPAddon Sources_ checkbox.






Note:




Use this option if you believe that your cPAddons are corrupt.


3. Click _Update cPAddon Config_. A new interface will appear.
4. Click _Back_ when the installation completes to return to the _Install cPAddons Site Software_ interface.

The system enables the cPAddons by default for feature lists in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager/) interface ( _WHM_ » _Home_ » _Packages_ » _Feature Manager_).

Note:

Some cPAddons have low ratings because of security problems that are inherent to PHP code. For more information about how to harden your PHP configuration, read our [PHP Security Concepts](https://docs.cpanel.net/knowledge-base/security/php-security-concepts) documentation.


## Add new vendors

To add cPAddons to the list in this interface, perform the following steps:

1. Enter the URL that you obtained from the cPAddon vendor in the _Vendor’s Information URL_ text box.

   - To add several vendors at the same time, select the number of URLs that you wish to enter from the _Add additional vendor URL fields_ menu, and then click _Add additional URL fields_. WHM will display the number of text fields that you requested.
2. Click _Update Vendors_. A new interface will appear.
3. When the installation finishes, click _Back_ to return to the _Install cPAddons Site Software_ interface.

Note:

The _Add/Remove Vendors_ feature allows third-party developers to create and distribute their own cPAddons.


## Delete a vendor

To delete a vendor, perform the following steps:

1. In the _Add or Remove Vendors\*_ section of the interface, under the _Remove_ column, select the checkbox for the vendor that you wish to delete.
2. Click _Update Vendors_. The system will display a new interface and a confirmation message.
3. Click _Back_ to return to the _Install cPAddons Site Software_ interface.

Note:

You **cannot** remove individual cPAddons from the list of available cPAddons.


## cPAddon data after deletion

When you remove a cPAddon vendor, the system also removes that vendor’s cPAddons and their data.

- If the cPAddon created the database, and no other cPAddons use it, the system drops the database entirely. This includes any user-created tables.
- If the cPAddon that you remove did **not** create the database, or if another cPAddon currently uses that database, the system only drops the tables that correspond to that cPAddon. This can potentially lead to an empty database on the server.
- We recommend that you delete any other cPAddons that share a database **before** you delete the cPAddon that initially created the database. If you delete the cPAddon that created the database first, an empty database will remain on the server.

Manually delete empty cPAddon databases in cPanel’s [_Manage My Databases_](https://docs.cpanel.net/cpanel/databases/manage-my-databases/) interface ( _cPanel_ » _Home_ » _Databases_ » _Manage My Databases_).

#### Additional Documentation

* * *

- [Change Log](https://docs.cpanel.net/whm/cpanel/change-log/)
- [Customization](https://docs.cpanel.net/whm/cpanel/customization/)
- [How to Install WordPress® With cPanel](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/)
- [Manage cPAddons Site Software](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/)
- [Manage Plugins](https://docs.cpanel.net/whm/cpanel/manage-plugins/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×