---
url: "https://docs.cpanel.net/whm/software/php-pecl/"
title: "PHP PECL | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/software/php-pecl/#main-content)

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
4. PHP PECL


[php](https://docs.cpanel.net/tags/php/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/software/php-pecl/#overview)

* * *

[Select a PHP version](https://docs.cpanel.net/whm/software/php-pecl/#select-a-php-version)

* * *

[Module Include Path](https://docs.cpanel.net/whm/software/php-pecl/#module-include-path)

* * *

[Find a PHP Pecl](https://docs.cpanel.net/whm/software/php-pecl/#find-a-php-pecl)

* * *

[Installed PHP Pecl(s)](https://docs.cpanel.net/whm/software/php-pecl/#installed-php-pecls)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/software/php-pecl/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/software/php-pecl/#overview)

* * *

[Select a PHP version](https://docs.cpanel.net/whm/software/php-pecl/#select-a-php-version)

* * *

[Module Include Path](https://docs.cpanel.net/whm/software/php-pecl/#module-include-path)

* * *

[Find a PHP Pecl](https://docs.cpanel.net/whm/software/php-pecl/#find-a-php-pecl)

* * *

[Installed PHP Pecl(s)](https://docs.cpanel.net/whm/software/php-pecl/#installed-php-pecls)

* * *

## PHP PECL

![](https://docs.cpanel.net/img/whm-icons/module_installers.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/software/php-pecl/)

Last modified: _2024 October 15_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This section of the Module Installers interface allows you to manage and install [PECL](http://pecl.php.net/) (PHP Extension Community Library) libraries.

Warning:

The `disable_functions` feature in PHP has changed as of version 8.0, which impacts all cPanel & WHM versions. Functions that have been disabled will behave as if they have not been declared, which means that the `get_defined_functions()` will never include disabled functions. This causes an issue with [PECL](http://pecl.php.net/) when the ’exec’ function has been added to the `disable_functions` list.

## Select a PHP version

This section of the interface allows you to specify the version of PHP on which you will install the modules. To select a specific version of PHP, perform the following steps:

1. Select a PHP version from the menu.
2. Click _Apply_.

Note:

This interface **only** displays for users with `root`-level privileges.

## Module Include Path

This section of the interface specifies that filepath to which the system will install the PHP PECL module that you select, for example:

```perl
/opt/cpanel/ea-php55/root/usr/lib64/php/modules
```

## Find a PHP Pecl

This section of the interface allows you to search for and install a library from the [PECL repository](http://pecl.php.net/). When you install a PHP PECL library, the system enables the PHP extension by default.

Note:

If you know the exact name of the library that you wish to install, enter its name in the _Install a PHP Pecl_ text box and click _Install Now_.


To search for and install a PHP library, perform the following steps:

1. Use either of the following methods to find the desired library:
   - Enter a search term in the available text box and click _Go_.
   - Click _Show Available Modules_ to list PECL’s available PHP libraries.






     Note:





     We **only** list stable modules. Beta modules do **not** appear in this list.
2. The interface displays the following information for all of the displayed libraries:
   - _Module Name_ — The library’s name.
   - _Version_ — The library’s version number.
   - _Description_ — The library’s description.
   - _Actions_ — The actions that you may perform for that library.
3. Click _Install_ next to the library that you wish to download and install.

   - To view a library’s documentation, click _Show Docs_ for that library.
   - If you did not find the desired library, enter a new keyword in the _Search_ text box and click _Go_.

## Installed PHP Pecl(s)

The _Installed PHP Pecl(s)_ table lists all of the libraries that exist on your server.

For each installed library, the table displays the following information:

- _Module Name_ — The library’s name.
- _Version_ — The library’s version number.
- _Actions_ — You can perform the following actions for each library:

  - _Update_ — Update the library.
  - _Reinstall_ — Reinstall the library from PECL.
  - _Uninstall_ — Remove the library from your server.
  - _Show Docs_ — Read the library’s documentation for that PECL.

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