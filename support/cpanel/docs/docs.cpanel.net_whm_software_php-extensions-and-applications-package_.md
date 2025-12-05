---
url: "https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/"
title: "PHP Extensions and Applications Package | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/#main-content)

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
3. [Software](https://docs.cpanel.net/whm/software/)
4. PHP Extensions and Applications Package


[php](https://docs.cpanel.net/tags/php/) [whmui](https://docs.cpanel.net/tags/whmui/) [phpoptions](https://docs.cpanel.net/tags/phpoptions/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/#overview)

* * *

[Select a PHP version](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/#select-a-php-version)

* * *

[Find and install packages](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/#find-and-install-packages)

* * *

[Find a PHP Extensions and Applications Package](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/#find-a-php-extensions-and-applications-package)

* * *

[Install a PHP Extensions and Applications Package](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/#install-a-php-extensions-and-applications-package)

* * *

[Installed PHP Extension(s) and Application(s)](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/#installed-php-extensions-and-applications)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/#overview)

* * *

[Select a PHP version](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/#select-a-php-version)

* * *

[Find and install packages](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/#find-and-install-packages)

* * *

[Find a PHP Extensions and Applications Package](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/#find-a-php-extensions-and-applications-package)

* * *

[Install a PHP Extensions and Applications Package](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/#install-a-php-extensions-and-applications-package)

* * *

[Installed PHP Extension(s) and Application(s)](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/#installed-php-extensions-and-applications)

* * *

## PHP Extensions and Applications Package

![](https://docs.cpanel.net/img/whm-icons/module_installers.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _PHP Extensions and Applications Package_ interface lets you install and manage PHP packages via the [PHP Extensions and Applications Repository (PEAR)](http://pear.php.net/). You can access this interface in WHM’s [_Module Installers_](https://docs.cpanel.net/whm/software/module-installers) interface ( _WHM » Home » Software » Module Installers_).

PEAR PHP packages are collections of functions that let you perform various PHP tasks. After installing a PEAR package, you can use the PHP package in a PHP program. When you install a PEAR PHP package, the system installs them directly from the PHP Extensions and Applications repository.

Important:

This interface is **only** available for users with `root`-level privileges.

## Select a PHP version

To select the version of PHP on which you will install the PHP package, perform the following steps:

1. Select a PHP version from the menu in the _Select a PHP version_ section.
2. Click _Apply_.

When you change the selected PHP version, the system updates the `include` filepath in the _Module Include Path_ section.

## Find and install packages

The _PHP Extensions and Applications Package Installer_ lets you search for, download, and install PHP packages from the PEAR repository. To search for and install a PHP package, use one of the following methods:

### Find a PHP Extensions and Applications Package

The _Find a “PHP Extensions and Applications Package”_ section lets you search the PEAR repository for available PHP packages:

1. Find the PHP package that you want to install with one of the following methods:
   - Enter a search term in the available text box and click _Go_.
   - Click _Show Available Modules_. A new interface will appear that lists all available PEAR PHP packages.
2. The interface displays your search results as a table the following information:
   - _Module Name_ — The PHP package’s name.
   - _Description_ — A description of the PHP package.
   - _Actions_ — The actions you can perform for the PHP package:

     - _Update_ — Update the PHP package.
     - _Reinstall_ — Reinstall the PHP package from PEAR.
     - _Uninstall_ — Remove the PEAR PHP package from your server.
     - _Show Docs_ — Read the PHP package’s documentation on the PHP Extensions and Applications repository.
3. Click _Install_ to install the PHP package, _Show Docs_ to view the PHP package’s documentation.

If you did not find the desired PHP package, enter a new keyword in the _Search_ text box and click _Go_.

### Install a PHP Extensions and Applications Package

If you know the exact name of the PHP package that you want to install, enter its name in the _Install a PHP Extensions and Applications Package_ text box and click _Install Now_. The system will automatically begin the module’s installation process.

## Installed PHP Extension(s) and Application(s)

The _Installed PHP Extension(s) and Application(s)_ table lists all of your server’s currently installed PHP packages. The table displays the following information:

- _Module_ — The PHP package’s name.
- _Version_ — The PHP package’s version number.
- _Actions_ — You can perform the following actions for each PHP package:

  - _Update_ — Update the PHP package.
  - _Reinstall_ — Reinstall the PHP package from PEAR.
  - _Uninstall_ — Remove the PHP package from your server.
  - _Show Docs_ — Read the PHP package’s documentation on the PHP Extensions and Applications repository.

#### Additional Documentation

* * *

- [Module Installers](https://docs.cpanel.net/whm/software/module-installers/)
- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [MultiPHP Manager for WHM — System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [MultiPHP Manager for WHM — User Domain Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×