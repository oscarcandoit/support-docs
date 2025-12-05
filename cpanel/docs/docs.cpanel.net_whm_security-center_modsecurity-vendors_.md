---
url: "https://docs.cpanel.net/whm/security-center/modsecurity-vendors/"
title: "ModSecurity® Vendors | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#main-content)

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
3. [Security Center](https://docs.cpanel.net/whm/security-center/)
4. ModSecurity® Vendors


[modsecurity](https://docs.cpanel.net/tags/modsecurity/) [apache](https://docs.cpanel.net/tags/apache/) [security](https://docs.cpanel.net/tags/security/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#overview)

* * *

[Manage Vendors](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#manage-vendors)

* * *

[Add a third-party ModSecurity vendor](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#add-a-third-party-modsecurity-vendor)

* * *

[Install a cPanel-provided ModSecurity vendor](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#install-a-cpanel-provided-modsecurity-vendor)

* * *

[Enable or disable a vendor](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#enable-or-disable-a-vendor)

* * *

[Enable or disable updates](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#enable-or-disable-updates)

* * *

[Edit a vendor](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#edit-a-vendor)

* * *

[Delete a vendor](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#delete-a-vendor)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#overview)

* * *

[Manage Vendors](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#manage-vendors)

* * *

[Add a third-party ModSecurity vendor](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#add-a-third-party-modsecurity-vendor)

* * *

[Install a cPanel-provided ModSecurity vendor](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#install-a-cpanel-provided-modsecurity-vendor)

* * *

[Enable or disable a vendor](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#enable-or-disable-a-vendor)

* * *

[Enable or disable updates](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#enable-or-disable-updates)

* * *

[Edit a vendor](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#edit-a-vendor)

* * *

[Delete a vendor](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/#delete-a-vendor)

* * *

## ModSecurity® Vendors

![](https://docs.cpanel.net/img/whm-icons/modsecurity_vendors.svg)

_Valid for versions 98 through the latest version_

#### Version:

#### [98](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Important:

You **must** install the ModSecurity Apache module in order to use this interface.

Use WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_) or your [package manager](https://docs.cpanel.net/ea4/basics/package-manager-basics/) to install the ModSecurity Apache module.

The _ModSecurity® Vendors_ interface allows you to install and manage your ModSecurity vendors.

EasyApache 4 loads the `/etc/apache2/conf.d/modsec/modsec2.cpanel.conf` and `/etc/apache2/conf.d/modsec/modsec2.user.conf` files as an include. The rules in these files can affect the way in which ModSecurity functions, which may result in false positives on your system. If you see many false positives, check these files for custom rules.

## Manage Vendors

Use this section of the interface to manage your ModSecurity vendors.

You can also run the [`/usr/local/cpanel/scripts/modsec_vendor`](https://docs.cpanel.net/whm/scripts/the-modsec_vendor-script/) script as the `root` user to manage your ModSecurity vendors.

### Add a third-party ModSecurity vendor

You can add a third-party ModSecurity vendor in two ways.

#### Install a vendor via URL

To install a third-party ModSecurity vendor that provides rules via a URL, perform the following steps:

1. Click _Add Vendor_. A new interface will appear.

2. In the _Vendor Configuration URL_ text box, enter the URL for the ModSecurity vendor.

3. Click _Load_. The _Vendor Name_, _Vendor Description_, _Vendor Documentation URL_, and _Vendor Path_ text boxes automatically load vendor data.

4. After you confirm that the vendor data is correct, click _Save_.


Note:

We **strongly** recommend that you use an SSL-secured URL as the _Vendor Configuration URL_. This ensures that no one can tamper with vendor-provided updates.

#### Install a vendor via package manager

To install a third-party ModSecurity vendor that provides rules via a package manager, perform the following steps:

1. Ensure that the yum repository exists on your server. Yum repositories are located in the `/etc/yum.repos.d/` directory. If the repository exists, you will find a `.repo` file for the vendor in that directory. For more information, read our [Package Manager Basics](https://docs.cpanel.net/ea4/basics/package-manager-basics) documentation.
2. Run the following command, where `modsecurity-vendor` represents the vendor’s package file:







| Operating System | Command |
| --- | --- |
| CentOS 7 | `yum install modsecurity-vendor` |
| AlmaLinux OS and Rocky Linux™ | `dnf install modsecurity-vendor` |
| Ubuntu® | `apt install --purge modsecurity-vendor` |

3. The vendor’s rule set will appear in the interface.

### Install a cPanel-provided ModSecurity vendor

To install a cPanel-provided ModSecurity vendor, click _Install_ for that vendor, and then click _Install and Restart Apache_.

cPanel & WHM provides the [OWASP® ModSecurity Core Rule Set](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/) in two forms:

- To install the new version of the rule set, you **must** install the `ea-modsec2-rules-owasp-crs` package in the _Additional Packages_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_). This will install the package version of the rules, and will **replace** the previous rule set. This version receives updates frequently.
- To use the older version of the rule set, click _Install_ next to _OWASP® ModSecurity Core Rule Set V3.0_ in the table. This rule set is **not** currently updated.

### Enable or disable a vendor

- To enable a vendor, click _On_ in the _Enabled_ column for that vendor.

- To disable a vendor, click _Off_ in the _Enabled_ column for that vendor.


### Enable or disable updates

When you enable updates, the system retrieves new copies of the vendor metadata from the URL that you used during vendor installation. The system compares the downloaded metadata and automatically fetches and installs new versions of the rule set.

- To enable automatic updates for a vendor, click _On_ in the _Updates_ column.

- To disable automatic updates for a vendor, click _Off_ in the _Updates_ column.


The system checks for vendor updates when the [`/usr/local/cpanel/scripts/upcp`](https://docs.cpanel.net/whm/scripts/the-upcp-script/) script runs. For more information, read our [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/) and [Update Preferences](https://docs.cpanel.net/whm/server-configuration/update-preferences/) documentation.

### Edit a vendor

The ModSecurity vendor rule sets group common rules into separate configuration files. To selectively enable or disable the configuration files, edit the vendor.

To edit a ModSecurity vendor, perform the following steps:

1. Click _Edit_ for the vendor that you wish to edit.

2. Click _Enable All_, click _Disable All_, or click the toggle to enable or disable each configuration file.


### Delete a vendor

To delete a ModSecurity vendor, locate the vendor in the list, click _Delete_, and then click _Delete_.

Warning:

cPanel’s [_Redirects_](https://docs.cpanel.net/cpanel/domains/redirects/) interface ( _cPanel » Home » Domains » Redirects_) is **not** compatible with ModSecurity. To add a redirect, you **must** disable the `REQUEST-931-APPLICATION-ATTACK-RFI.conf` file in WHM’s [_ModSecurity® Tools_](https://docs.cpanel.net/whm/security-center/modsecurity-tools/) interface ( _WHM » Home » Security Center » ModSecurity® Tools_).

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [ModSecurity® Configuration](https://docs.cpanel.net/whm/security-center/modsecurity-configuration/)
- [ModSecurity® Tools](https://docs.cpanel.net/whm/security-center/modsecurity-tools/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×