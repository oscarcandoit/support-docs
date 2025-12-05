---
url: "https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/"
title: "How to Locate and Install a PHP Version or Extension | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/#main-content)

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
4. How to Locate and Install a PHP Version or Extension


[php](https://docs.cpanel.net/tags/php/) [whmui](https://docs.cpanel.net/tags/whmui/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/#overview)

* * *

[Determine a user domain PHP version](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/#determine-a-user-domain-php-version)

* * *

[Install a PHP version](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/#install-a-php-version)

* * *

[Vendor-provided PHP versions](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/#vendor-provided-php-versions)

* * *

[Find a PHP module or extension](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/#find-a-php-module-or-extension)

* * *

[Install a PHP module or extension](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/#install-a-php-module-or-extension)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/#overview)

* * *

[Determine a user domain PHP version](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/#determine-a-user-domain-php-version)

* * *

[Install a PHP version](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/#install-a-php-version)

* * *

[Vendor-provided PHP versions](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/#vendor-provided-php-versions)

* * *

[Find a PHP module or extension](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/#find-a-php-module-or-extension)

* * *

[Install a PHP module or extension](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension/#install-a-php-module-or-extension)

* * *

## How to Locate and Install a PHP Version or Extension

Last modified: _2024 September 26_

* * *

## Overview

EasyApache 4 allows the use of multiple versions of PHP. This document explains how to locate and install a PHP version or a PHP extension.

## Determine a user domain PHP version

You can determine a user domain PHP version with one of the following methods:

- Use WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm) interface ( _WHM » Home » Software » MultiPHP Manager_). This interface allows you to see and change a user’s default PHP version. This is the easiest method to determine a user’s PHP version.

- Use cPanel’s [_MultiPHP Manager_](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel) interface ( _cPanel » Home » Software » MultiPHP Manager_).

- Run the following command, where `USERNAME` is the cPanel account username and `DOMAIN` is the domain:




```bash
grep phpversion /var/cpanel/userdata/USERNAME/DOMAIN
```





The output should resemble the following example:



```bash
phpversion: ea-php81
```

- Use WHM API 1’s [`php_get_vhost_versions`](https://api.docs.cpanel.net/openapi/whm/operation/php_get_vhost_versions/) function.

- Use UAPI’s [`LangPHP::php_get_vhost_versions`](https://api.docs.cpanel.net/openapi/cpanel/operation/php_get_vhost_versions/) function.


### Install a PHP version

EasyApache 4 supports PHP version 7.4 and [PHP 8.1](https://docs.cpanel.net/ea4/php/php-8/) through 8.4.

The cPanel default profile includes PHP versions 8.1 and 8.2.

Note:

EasyApache 4 adheres to the [php.net supported versions timeline](https://php.net/supported-versions.php). The profiles that we supply in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_) **only** provide PHP versions that [php.net](https://www.php.net/) currently supports.
RPMs for unsupported versions of PHP will remain the WebPros International, LLC mirrors and servers, but we will **not** provide any further updates.

You can install a PHP version on your system with one of the following methods:

- Use WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_) to select the version of PHP that you wish to load.






Note:





You can **only** install cPanel-provided PHP packages in the EasyApache 4 interface. You **must** use a [package manager](https://docs.cpanel.net/ea4/basics/package-manager-basics/) to install custom PHP packages.

- Use [your package manager’s `install` command](https://docs.cpanel.net/ea4/basics/package-manager-basics/) to install your desired PHP version.

### Vendor-provided PHP versions

EasyApache 4 allows you to use PHP versions that WebPros International, LLC does **not** provide on non-Ubuntu systems. These PHP versions **must** be a Software Collection Library (SCL) package and **cannot** start with the `ea-` prefix that EasyApache 4 uses.

- You **cannot** use the [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_) to install vendor-provided versions of PHP. You **must** use a package manager to install these packages on your system. For more information, read our [Package Manager Basics](https://docs.cpanel.net/ea4/basics/package-manager-basics/) documentation.
- After you install the packages, you can use WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm) interface ( _WHM » Home » Software » MultiPHP Manager_) and WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor) interface ( _WHM » Home » Software » MultiPHP INI Editor_) to make changes.

Important:

- The DSO PHP handler is **not** available with Red Hat® Enterprise Linux® (RHEL) and CloudLinux™ PHP packages.
- PHP packages **require** a vendor prefix in order to install in EasyApache 4.
- Not all vendor-provided PHP packages will contain all of the files that EasyApache 4’s MultiPHP system requires. You may experience additional limitations.

## Find a PHP module or extension

You can find a PHP module or extension with one of the following methods:

- Use WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_).
- To determine if the package is already installed, run the `rpm -qa | grep -i package` command, where `package` represents part of the name of the package that you wish to install.
- To determine if the package is available, run the `yum list package` or `dnf list package` command, where `package` represents part of the name of the package that you wish to install.

## Install a PHP module or extension

EasyApache 4’s packages for PHP modules and extensions use the `ea-php##-php-module` naming convention, where `##` represents the PHP version number and `module` represents the name of the PHP module.

Install a PHP module or extension on your system with one of the following methods:

- Use WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_).
- Install the package on the command line with the following command:







| Operating System | Command |
| --- | --- |
| CentOS 7 | `yum install ea-php82-php-gd` |
| AlmaLinux OS and Rocky Linux™ | `dnf install ea-php82-php-gd` |
| Ubuntu® | `apt install --purge ea-php82-php-gd` |





The above example installs the `ea-php82-php-gd` package, where `82` represents the PHP version and `gd` represents the extension name.

Important:

When you install a newer version of PHP, the system automatically selects the extensions used with your older versions, if compatible.

#### Additional Documentation

* * *

- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)
- [Module Installers](https://docs.cpanel.net/whm/software/module-installers/)
- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [MultiPHP Manager for WHM — System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×