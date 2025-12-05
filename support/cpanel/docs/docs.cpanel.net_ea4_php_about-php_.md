---
url: "https://docs.cpanel.net/ea4/php/about-php/"
title: "About PHP | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/php/about-php/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [EasyApache4](https://docs.cpanel.net/ea4/)
3. [PHP](https://docs.cpanel.net/ea4/php/)
4. About PHP


[ea4](https://docs.cpanel.net/tags/ea4/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [php](https://docs.cpanel.net/tags/php/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/php/about-php/#overview)

* * *

[How EasyApache handles PHP](https://docs.cpanel.net/ea4/php/about-php/#how-easyapache-handles-php)

* * *

[PHP versions](https://docs.cpanel.net/ea4/php/about-php/#php-versions)

* * *

[PHP support timeline](https://docs.cpanel.net/ea4/php/about-php/#php-support-timeline)

* * *

[MultiPHP](https://docs.cpanel.net/ea4/php/about-php/#multiphp)

* * *

[Vendor-provided PHP versions](https://docs.cpanel.net/ea4/php/about-php/#vendor-provided-php-versions)

* * *

[Modify PHP](https://docs.cpanel.net/ea4/php/about-php/#modify-php)

* * *

[Adjust configuration files](https://docs.cpanel.net/ea4/php/about-php/#adjust-configuration-files)

* * *

[PHP security](https://docs.cpanel.net/ea4/php/about-php/#php-security)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/php/about-php/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/php/about-php/#overview)

* * *

[How EasyApache handles PHP](https://docs.cpanel.net/ea4/php/about-php/#how-easyapache-handles-php)

* * *

[PHP versions](https://docs.cpanel.net/ea4/php/about-php/#php-versions)

* * *

[PHP support timeline](https://docs.cpanel.net/ea4/php/about-php/#php-support-timeline)

* * *

[MultiPHP](https://docs.cpanel.net/ea4/php/about-php/#multiphp)

* * *

[Vendor-provided PHP versions](https://docs.cpanel.net/ea4/php/about-php/#vendor-provided-php-versions)

* * *

[Modify PHP](https://docs.cpanel.net/ea4/php/about-php/#modify-php)

* * *

[Adjust configuration files](https://docs.cpanel.net/ea4/php/about-php/#adjust-configuration-files)

* * *

[PHP security](https://docs.cpanel.net/ea4/php/about-php/#php-security)

* * *

## About PHP

Last modified: _2024 September 26_

* * *

## Overview

The PHP scripting language is often used for applications and content on websites. EasyApache allows you to easily install and modify PHP for your web server.

When you install cPanel & WHM, the installation process automatically installs PHP with some common PHP options.

For more information about PHP, read [PHP’s documentation](https://www.php.net/docs.php).

## How EasyApache handles PHP

cPanel & WHM configures your Apache® web server with PHP by default. It installs the CGI PHP handler to handle requests that it receives for PHP content.

Note:

The PHP handler that you select affects the speed and security of your web server. For more information, read our [PHP Handlers](https://docs.cpanel.net/ea4/php/php-handlers/) documentation.


## PHP versions

The cPanel default profile includes PHP versions 8.1 and 8.2.
You can install additional PHP versions with WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).

EasyApache 4 supports PHP version 7.4 and [PHP 8.1](https://docs.cpanel.net/ea4/php/php-8/) through 8.4.

- If your server runs [AlmaLinux](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/) or [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/), you **cannot** use PHP 7.1 or earlier.
- If your server runs [Ubuntu®](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/), you **cannot** use PHP 7.2 or earlier.

When the PHP development team releases a new version of PHP, we test and then make the new version available in EasyApache. Minor version number changes do not impact functionality, but major updates may require changes to your configuration.

For more information on the PHP versions and extensions available in EasyApache 4, read our [PHP Options](https://docs.cpanel.net/ea4/php/php-options/) documentation.

### PHP support timeline

EasyApache 4 adheres to the [php.net supported versions timeline](https://php.net/supported-versions.php). The profiles that we supply in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_) **only** provide PHP versions that [php.net](https://www.php.net/) currently supports.

Packages for unsupported versions of PHP will remain on the WebPros International, LLC mirrors and servers, but we will **not** provide any further updates.

## MultiPHP

EasyApache 4 supports multiple versions of PHP.

To change your server’s default version of PHP or a virtual host’s version of PHP, use WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM » Home » Software » MultiPHP Manager_).

If the version of PHP that you wish to use does not exist on your server, you can install it in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_). You can also use a [package manager](https://docs.cpanel.net/ea4/basics/package-manager-basics/) to install PHP. For more information, read our [How to Locate and Install a PHP Version or Extension](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/) documentation.

### Vendor-provided PHP versions

EasyApache 4 allows you to use PHP versions that WebPros International, LLC does **not** provide on non-Ubuntu systems. These PHP versions **must** be a Software Collection Library (SCL) package and **cannot** start with the `ea-` prefix that EasyApache 4 uses.

- You **cannot** use the [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_) to install vendor-provided versions of PHP. You **must** use a package manager to install these packages on your system. For more information, read our [Package Manager Basics](https://docs.cpanel.net/ea4/basics/package-manager-basics) documentation.
- After you install the packages, you can use WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM » Home » Software » MultiPHP Manager_) and WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor/) interface ( _WHM » Home » Software » MultiPHP INI Editor_) to make changes.

Important:

- The DSO PHP handler is **not** available with `rh-` and `alt-` PHP packages.
- cPanel & WHM does **not** support DSO on PHP 8.0 and higher.
- PHP packages **require** a vendor prefix in order to install in EasyApache 4.
- Not all vendor-provided PHP packages will contain all of the files that EasyApache 4’s MultiPHP system requires. You may experience additional limitations.

## Modify PHP

You can use several methods to modify your PHP configuration.

To more easily allow you to call the PHP binaries directly, we provide the following symlinks for each version of PHP installed on your system:

- PHP CLI — `/usr/local/bin/ea-php##`, where `##` represents the two-digit PHP version.
- PHP CGI — `/usr/bin/ea-php##` command, where `##` represents the two-digit PHP version.

To more easily allow you to install PECL and PEAR extensions, we provide the following symlinks:

- PECL — `/usr/bin/ea-php##-pecl`, where `##` represents the two-digit PHP version.
- PEAR — `/usr/bin/ea-php##-pear`, where `##` represents the two-digit PHP version.

For more information, read the following documentation:

- [PHP Options](https://docs.cpanel.net/ea4/php/php-options/) — A list of the available options in EasyApache that directly modify PHP.
- [PHP Handlers](https://docs.cpanel.net/ea4/php/php-handlers/) — The PHP handler that you select determines how Apache handles requests for PHP content.

### Adjust configuration files

To further customize your PHP configuration, you can edit your `.ini` files. Each version of PHP that you install uses a separate `php.ini` file. Each file exists in the `/opt/cpanel/ea-php##/root/etc/php.ini` path, where `##` is the PHP version number.

We **strongly** recommend that you **only** edit your configuration files with cPanel’s [_MultiPHP INI Editor_](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/) interface ( _cPanel » Home » Software » MultiPHP INI Editor_). To edit your files manually, adjust the following PHP handler files in your document root:

- DSO – `.htaccess`
- suPHP – `.user.ini`


Note:




If you enabled the `suPHP_ConfigPath` directive in your `.htaccess` file, read our [The cPanel PHPRC PHP Patch for EasyApache 4](https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4/) documentation.


- CGI – `php.ini`

## PHP security

To ensure that your PHP version stays up to date and secure, we strongly recommend that you update your packages whenever we release a new EasyApache update. You can use one of the following methods:

- Set the _Operating System Package Updates_ section of WHM’s [_Update Preferences_](https://docs.cpanel.net/whm/server-configuration/update-preferences/) interface ( _WHM » Home » Server Configuration » Update Preferences_) to _Automatic_.
- As a user with `root`-level privileges, use your package manager to update your system’s packages manually or with a [cron job](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#cron-job).

For more information about PHP security, read our [PHP Security Concepts](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/) documentation.

#### Additional Documentation

* * *

- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [The clean\_user\_php\_sessions Script](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/)
- [The php\_fpm\_config Script](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/)
- [The rebuild\_phpconf Script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×