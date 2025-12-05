---
url: "https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/"
title: "PHP-FPM Code and FileSystem Layout for EasyApache 4 | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/)
4. PHP-FPM Code and FileSystem Layout for EasyApache 4


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/) [php](https://docs.cpanel.net/tags/php/) [fpm](https://docs.cpanel.net/tags/fpm/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#overview)

* * *

[PHP-FPM implementation](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#php-fpm-implementation)

* * *

[File contents](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#file-contents)

* * *

[The filesystem configuration files](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#the-filesystem-configuration-files)

* * *

[Required files](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#required-files)

* * *

[Optional files](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#optional-files)

* * *

[Restore PHP to your system](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#restore-php-to-your-system)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#overview)

* * *

[PHP-FPM implementation](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#php-fpm-implementation)

* * *

[File contents](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#file-contents)

* * *

[The filesystem configuration files](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#the-filesystem-configuration-files)

* * *

[Required files](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#required-files)

* * *

[Optional files](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#optional-files)

* * *

[Restore PHP to your system](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#restore-php-to-your-system)

* * *

## PHP-FPM Code and FileSystem Layout for EasyApache 4

Last modified: _2022 July 13_

* * *

## Overview

This document explains the following information about the PHP FastCGI Process Manager (PHP-FPM) daemon:

- The PHP-FPM filesystem layout.
- How the system implements PHP-FPM on your system.

PHP-FPM provides an alternative FastCGI daemon for PHP that allows a website to handle significant loads. It allows a host to set specific amounts of resources to process a domain’s requests via workers available to respond to PHP requests (pools). These pools allow a website to process more requests.

PHP-FPM functions more quickly than traditional CGI-based methods, such as SUPHP, for multi-user PHP environments. It does **not** overload a system’s memory with PHP from Apache processes, such as the `ruid2+php-dso` process. PHP-FPM **only** executes PHP requests, which enables it to service content quicker than other methods.

Warning:

We **strongly** recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM on a server with less than the required RAM, your server may experience severe performance issues.


## PHP-FPM implementation

The `Cpanel::PHPFPM (Cpanel/PHPFPM.pm)` module provides the basis of EasyApache support with PHP-FPM. The module’s built-in defaults generate configuration files that provide fully functional PHP-FPM pools for a domain.

The system uses the following configuration files:

- `/var/cpanel/ApachePHPFPM/system.yaml`
- `/var/cpanel/ApachePHPFPM/system_pool_defaults.yaml`

You will need to create these two files manually. To do this, perform the following steps:

1. Create the `/var/cpanel/ApachePHPFPM/` directory.



```perl
mkdir -p /var/cpanel/ApachePHPFPM/
```

2. Create the two files.





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>touch /var/cpanel/ApachePHPFPM/system.yaml<br>touch /var/cpanel/ApachePHPFPM/system_pool_defaults.yaml<br>``` |


### File contents

Each file contains different directives from the built-in values.

Note:

- The system does **not** require these files to run because the built-in defaults enable the PHP-FPM to run sufficiently.
- **Only** include the differences in directives within these files.

The following example displays the `system.yaml` file’s contents:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>---<br>daemonize: yes<br>``` |

Note:

- This example **only** uses a different value than the built-in default for the `daemonize` setting.
- The `system-pool-defaults.yaml` file applies the value to each pool that you create.
- Each domain in the system requires that you create one pool.
- Replace any unacceptable characters such as `.[]()` with an underscore `_`.

The table below contains examples of unacceptable value names.

| Old Name | New Name |
| --- | --- |
| `syslog.facility` | `syslog_facility` |
| `php_admin_value[disable_functions]` | `php_admin_value_disable_functions` |

Note:

If you prepend any PHP settings with the `disable functions` or `disable_classes` flags, the system will append the new `php.ini` value to the previous one in the user’s `.htaccess` files. For more information, read securephp.net’s [FastCGI Process Manager (FPM)](https://secure.php.net/manual/en/install.fpm.configuration.php) documentation.

## The filesystem configuration files

The system stores the configuration files that control PHP-FPM in the following files:

- `/opt/cpanel/ea-php80/root/etc/php-fpm.conf`— This file contains the system configurations of PHP-FPM.
- `/opt/cpanel/ea-php80/root/etc/php-fpm.d/[domain].conf` — This file changes your domain to the domain setting of the website that you use. For example, the `cptest1.tld.conf` domain.

The `.yaml` files within the `/var/cpanel` directories generate these two files.

Note:

- Do **not** edit these configuration files manually.
- The system duplicates these configuration files for each version that you select.
- The `/opt/cpanel/ea-php80/root/etc/php-fpm.d/[domain].conf` file displays `ea-php80` or `php80` as its version.
- You **must** change `ea-php80` to the version on which your system currently runs. For example, if your system runs on PHP version 7.3 or 7.4, change `ea-php80` to `ea-php73` or `ea-php74`.

### Required files

Note:

Use the required file `/var/cpanel/userdata/[user]/[domain].php-fpm.yaml` **only** if you wish to run PHP-FPM.

- `/var/cpanel/userdata/[user]/[domain].php-fpm.yaml` — This file controls a specific domain’s pool. The system uses the built-in default values and `system_pool_defaults` values to generate the `[domain].conf` file.

### Optional files

Note:

Use the following optional files **only** if you wish to change the default parameters. **All** domain pools use these defaults unless a `.yaml` file overrides them.

- `/var/cpanel/ApachePHPFPM/system.yaml` — This file contains system level settings. The system also uses this file to generate the `/opt/cpanel/ea-php5?/root/etc/php-fpm.conf` file, where the `?` indicates that the system uses this file to generate all of the PHP versions in the `php-fpm.conf` file.
- `/var/cpanel/ApachePHPFPM/system_pool_defaults.yaml` — The system uses this file to generate each domain’s pool and configure each user’s pool.






Important:





If you edit a user’s pool in WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM » Home » Software » MultiPHP Manager_), the system no longer applies the system default settings to that user.


## Restore PHP to your system

The system **cannot** remove configurations or other related files when you manually remove packages. If you manually remove packages, you could remove dependencies that your hosted websites require.

Warning:

We do **not** recommend that you remove any `ea-php` packages via your server’s [package manager](https://docs.cpanel.net/ea4/basics/package-manager-basics/). If you remove PHP from your system while any of your hosted websites still use it, those websites will display errors. In addition, Apache could fail to display the website entirely. Before you remove a package, confirm that none of your hosted websites use the PHP version that you wish to remove with WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM » Home » Software » MultiPHP Manager_).

To restore PHP versions to your system, run the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>ea_install_profile --install /etc/cpanel/ea4/profiles/cpanel/default.json<br>/usr/local/cpanel/scripts/restartsrv apache_php_fpm<br>``` |

Note:

If the above commands fail, contact your system administrator.

#### Additional Documentation

* * *

- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [MultiPHP Manager for WHM — System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [The php\_fpm\_config Script](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×