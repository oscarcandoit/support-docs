---
url: "https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-domain-pools/"
title: "PHP-FPM Domain Pools | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-domain-pools/#main-content)

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
4. PHP-FPM Domain Pools


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/) [php](https://docs.cpanel.net/tags/php/) [fpm](https://docs.cpanel.net/tags/fpm/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-domain-pools/#overview)

* * *

[How does the system create pools?](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-domain-pools/#how-does-the-system-create-pools)

* * *

[Create a pool](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-domain-pools/#create-a-pool)

* * *

[Jail shell](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-domain-pools/#jail-shell)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-domain-pools/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-domain-pools/#overview)

* * *

[How does the system create pools?](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-domain-pools/#how-does-the-system-create-pools)

* * *

[Create a pool](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-domain-pools/#create-a-pool)

* * *

[Jail shell](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-domain-pools/#jail-shell)

* * *

## PHP-FPM Domain Pools

Last modified: _2021 January 18_

* * *

## Overview

This document explains how the system creates a domain pool with PHP-FPM.

## How does the system create pools?

The system creates a pool when the `/var/cpanel/userdata/[user]/[domain].php_fpm.yaml` configuration file exists in the domain. This file **must** include the following lines:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>---<br>_is_present: 1<br>``` |

You may place any desired pool values in this file.

- You **must** include the `---` line above the pool values in this file.
- The `_is_present` value is optional, but you **must** include it if you do not set any other values in the file.

Warning:

Exercise **extreme** caution when you manually edit `.yaml` files. Incorrect syntax in these files will cause services to fail. We **strongly** recommend that you create a backup of your system before you manually edit `.yaml` files.


Note:

This file **only** contains the differences of directives from the built-in default directives.


### Create a pool

To create a pool, run the `Cpanel::PHPFPM::rebuild_files()` function.

Note:

You may also run the `/scripts/php_fpm_config --rebuild` script to create a pool.


The system will perform the following steps:

- The system scans for the `/var/cpanel/ApachePHPFPM/system.yaml` and `/var/cpanel/ApachePHPFPM/system_pool_defaults.yaml` files and then generates a system configuration for each of the PHP versions.

- The system searches for the domain’s `yaml` files.

- The system generates a line in the `/opt/cpanel/[ea_php_version]/root/etc/php-fpm.d/[domain].conf` file for every `domain.yaml` file.

- To direct the requests to the `php_fpm` daemon with Apache, the system modifies the `httpd.conf` file with the `rebuild_files()` script to resemble the following example:


|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```php<br># php -- BEGIN cPanel-generated handler, do not edit<br><FilesMatch ".(phtml|php[0-9]*)$"><br>    SetHandler "proxy:unix:/home/cptest3/cptest3_tld.php_fpm.sock|fcgi://cptest3.tld/"<br></FilesMatch><br># php -- END cPanel-generated handler, do not edit<br>``` |

Note:

The system removes any existing `conf` files that do not contain a corresponding `domain.yaml` file.

The system creates the FPM socket in the `/opt/cpanel/phpversion/root/usr/var/run/php-fpm/obscure_domain.sock` directory, where `phpversion` represents the version of PHP, and `obscure_domain` represents a hashed version of the domain. Your hashed version will resemble the following example:

```
/opt/cpanel/ea-php56/root/usr/var/run/php-fpm/4cfb2f15c04ae8a6a980ad6b78a834e7c8661958.sock
```

When the pool and system configurations exist in their designated locations, the system restarts the pools. The method that the system uses to restart them depends on whether it runs as a `systemd` or an `init.d` system. The system then removes any PHP version pools that do **not** hold domains with that version.

## Jail shell

When you create a PHP-FPM domain pool, if the following conditions exist, the system automatically binds them to the `virtfs` mount:

- The `/var/cpanel/feature_toggles/apachefpmjail` file exists.
- The WHM account uses either the `jailshell` or `noshell` settings.
- You enabled the _Experimental: Jail Apache Virtual Hosts using mod\_ruid2 and cPanel® jailshell_ setting in the _Security_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

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