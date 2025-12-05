---
url: "https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/"
title: "MultiPHP Manager for cPanel | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/#main-content)

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
4. MultiPHP Manager for cPanel


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [php](https://docs.cpanel.net/tags/php/) [ea4](https://docs.cpanel.net/tags/ea4/) [fpm](https://docs.cpanel.net/tags/fpm/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/#overview)

* * *

[List of domains](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/#list-of-domains)

* * *

[Set the PHP version for a domain](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/#set-the-php-version-for-a-domain)

* * *

[Restore PHP-FPM after a primary domain change](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/#restore-php-fpm-after-a-primary-domain-change)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/#overview)

* * *

[List of domains](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/#list-of-domains)

* * *

[Set the PHP version for a domain](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/#set-the-php-version-for-a-domain)

* * *

[Restore PHP-FPM after a primary domain change](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/#restore-php-fpm-after-a-primary-domain-change)

* * *

## MultiPHP Manager for cPanel

![](https://docs.cpanel.net/img/cpanel-icons/multiphp_manager.svg)

_Valid for versions 94 through the latest version_

#### Version:

#### [94](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)

Last modified: _2025 March 5_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

cPanel’s _MultiPHP Manager_ interface allows you to easily manage your account’s PHP configuration. In this interface, you can manage the PHP version or pool option of any virtual host.

## List of domains

You can use this list to manage PHP settings for **non-parked** domains. A parked domain represents an alias for your cPanel account’s [primary domain](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/#primary-domain).

The list of non-parked domains displays:

- The name of the domain.

- The PHP version that the domain currently uses.







Note:





In EasyApache 4, each domain or virtual host can use any currently-installed PHP version or currently-installed PHP-FPM setting.

- The _Inherited_ label, if the domain inherits its PHP version from the system PHP version. **Only** the system administrator can set the system PHP version, which functions as the global default for all accounts. For more information, read our [PHP Inheritance](https://docs.cpanel.net/ea4/php/php-inheritance) documentation.

- A PHP-FPM enabled (![](https://docs.cpanel.net/img/checkmark.png)) or disabled (![](https://docs.cpanel.net/img/cancelicon.png)) indicator. PHP FastCGI Process Manager (PHP-FPM) is an alternative PHP module that allows a website to handle more requests than it normally could. PHP-FPM maintains pools (workers that respond to PHP requests) to accomplish this.







Note:





System administrators can enable or disable PHP-FPM through WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm) interface ( _WHM » Home » Software » MultiPHP Manager_).


Use the _Search_ text box to search domains by domain name or account name.

## Set the PHP version for a domain

Note:

EasyApache 4 supports PHP version 7.4 and [PHP 8.1](https://docs.cpanel.net/ea4/php/php-8/) through 8.4.
The cPanel default profile includes PHP versions 8.1 and 8.2.

To change a domain’s PHP version, perform the following steps:

1. Select the checkbox for the domain that you wish to change.

2. Select the desired version of PHP from the _PHP Version_ menu. If the system administrator recommends any PHP versions, the menu will display the _Recommended_ label next to them. If the PHP version that you want to use does **not** appear, that PHP version is either not installed on the server or is not available for your account. Your system administrator can install it in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_). However, if your system administrator **limited** your domain’s PHP version, then you **cannot** use this interface to restore the domain’s PHP version to its original version.






Note:





- To always use the system default, select _inherit_.
- If you set your PHP version to _inherit_, the system will **not** allow you to set PHP-FPM. You **must** select a PHP version other than _inherit_ to enable PHP-FPM on a domain.

3. Click _Apply_. The system will change the selected domain’s PHP version. If you also enabled FPM on your domain, the system will update the FPM version to match the PHP version.


For more information regarding PHP versions and installation, read our [How to Locate and Install a PHP Version of Extension](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/) documentation.

### Restore PHP-FPM after a primary domain change

If you enable FPM on your primary domain and then change that domain’s name, the system will disable FPM for the new domain. Your system administrator or hosting provider **must** [re-enable FPM on the new domain](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#set-a-domains-php-fpm-status) if you wish to use FPM for the new domain.

#### Additional Documentation

* * *

- [MultiPHP INI Editor for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/)
- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [MultiPHP Manager for WHM — System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [MultiPHP Manager for WHM — User Domain Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×