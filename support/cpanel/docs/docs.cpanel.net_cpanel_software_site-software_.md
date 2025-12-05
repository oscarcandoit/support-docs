---
url: "https://docs.cpanel.net/cpanel/software/site-software/"
title: "Site Software | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/software/site-software/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Software](https://docs.cpanel.net/cpanel/software/)
4. Site Software


[cpaddons](https://docs.cpanel.net/tags/cpaddons/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/software/site-software/#overview)

* * *

[Update Notifications](https://docs.cpanel.net/cpanel/software/site-software/#update-notifications)

* * *

[Configure cPAddon](https://docs.cpanel.net/cpanel/software/site-software/#configure-cpaddon)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/software/site-software/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/software/site-software/#overview)

* * *

[Update Notifications](https://docs.cpanel.net/cpanel/software/site-software/#update-notifications)

* * *

[Configure cPAddon](https://docs.cpanel.net/cpanel/software/site-software/#configure-cpaddon)

* * *

## Site Software

![](https://docs.cpanel.net/img/cpanel-icons/site_software.svg)

_Valid for versions 104 through the latest version_

#### Version:

#### [104](https://docs.cpanel.net/cpanel/software/site-software/)

Last modified: _2024 May 29_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you to add, manage, upgrade, and remove cPanel Addons (cPAddons). cPAddon software packages add useful functions to your website. For example, cPAddons can run blogs, bulletin boards, ecommerce software, guest books, and other services.

Important:

- We have deprecated this interface. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/#deprecated-and-removed-features) documentation.
- This feature **only** appears if your hosting providers enables it.
- WebPros International, LLC does not develop or maintain the cPAddon software packages (for example, WordPress®). We only include these packages in cPanel & WHM to facilitate distribution and installation. For assistance with a cPAddon, contact your hosting provider or the software developer.

## Update Notifications

You can enable or disable cPAddon software update notifications at the top of the interface. If you enable notifications, the system will email your cPanel account’s contact email address. You can set your account’s contact email address in cPanel’s [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information/) interface ( _cPanel » Home » Preferences » Contact Information_).

Note:

Hosting providers can also add the `.cpaddons_notify` file to the `/home/username` directory to enable software update notifications. In this directory path, username represents the cPanel user.

## Configure cPAddon

To configure a cPAddon, click the name of the cPAddon that you wish to modify. A new interface will appear.

Note:

Your hosting provider selects which cPAddons to make available to you. If you require additional cPAddons for your website, contact your hosting provider.

| Option | Description/Action |
| --- | --- |
| _Install_ | This tab allows you to install the cPAddon. You can select one of the following options: <br>- _The one-click installation_ — This feature automatically creates a username and password combination, and then installs the cPAddon. To enable this feature, you **must** enter a contact email address in cPanel’s [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information/) interface ( _cPanel » Home » Preferences » Contact Information_). <br>  <br>  <br>  <br>  <br>  <br>  Important:<br>  <br>  <br>  <br>  <br>  You **must** save the login credentials in a safe place. You **cannot** retrieve these credentials when you navigate away from this interface.<br>   <br>  <br>- _Advanced configuration_ — To customize your configuration of the installation, click _Show Advanced Configuration_. Use this feature to enter a custom installation URL, username, password, email address, and additional configuration options.<br>  <br>  <br>  <br>  <br>  <br>  Note:<br>  <br>  <br>  <br>  <br>  Some cPAddons do not include these options, and only the default _Install_ section will appear. |
| _Manage_ | This tab displays the URLs that relate to each installed instance of the cPAddon. Click the appropriate URL to redirect to that domain. A new browser tab will appear. |
| _Upgrade_ | This tab allows you to upgrade each installed instance of the cPAddon, if an upgrade exists. Select the appropriate cPAddon instance, and click _Upgrade_. |
| _Uninstall_ | This tab allows you to uninstall each individual instance of the cPAddon. Select the appropriate cPAddon instance, and click _Uninstall_. |
| _More_ | This menu allows you to view more information about the cPAddon. To view more information, click one of the following options: <br>Note:<br>Some of the following options only display for certain cPAddons.<br> <br>- _Details_ — View more details about the cPAddon, such as the version number, and the software developer’s website.<br>- _License terms_ — View information about the cPAddon’s license terms.<br>- _Security information_ — View security-related information about the cPAddon. |

#### Additional Documentation

* * *

- [Application Manager](https://docs.cpanel.net/cpanel/software/application-manager/)
- [MultiPHP INI Editor for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [Optimize Website](https://docs.cpanel.net/cpanel/software/optimize-website/)
- [PHP PEAR Packages](https://docs.cpanel.net/cpanel/software/php-pear-packages/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×