---
url: "https://docs.cpanel.net/ea4/php/advanced-php-configuration/"
title: "Advanced PHP Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#main-content)

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
4. Advanced PHP Configuration


[ea4](https://docs.cpanel.net/tags/ea4/) [php](https://docs.cpanel.net/tags/php/) [phphandlers](https://docs.cpanel.net/tags/phphandlers/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#overview)

* * *

[The php.ini files](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#the-phpini-files)

* * *

[PHP handlers and configuration files](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#php-handlers-and-configuration-files)

* * *

[CGI](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#cgi)

* * *

[DSO](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#dso)

* * *

[FCGI Process Manager (FPM)](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#fcgi-process-manager-fpm)

* * *

[FCGI daemon (FCGId)](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#fcgi-daemon-fcgid)

* * *

[LSAPI](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#lsapi)

* * *

[suPHP](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#suphp)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#overview)

* * *

[The php.ini files](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#the-phpini-files)

* * *

[PHP handlers and configuration files](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#php-handlers-and-configuration-files)

* * *

[CGI](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#cgi)

* * *

[DSO](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#dso)

* * *

[FCGI Process Manager (FPM)](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#fcgi-process-manager-fpm)

* * *

[FCGI daemon (FCGId)](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#fcgi-daemon-fcgid)

* * *

[LSAPI](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#lsapi)

* * *

[suPHP](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#suphp)

* * *

## Advanced PHP Configuration

Last modified: _2024 September 16_

* * *

## Overview

This document provides advanced PHP configuration file information. Use this document to ensure that you set the appropriate `.ini` files for your configuration.

## The php.ini files

The system searches for and reads `php.ini` files when PHP starts. When it loads a directive that a `php.ini` file specifies, it loads the first incident of each directive that it finds. The system searches for `php.ini` files in the following order:

1. A SAPI module specific location, such as the `PHPIniDir` directive in Apache, the `PHP_INI_Path` environmental variable, or the `php_ini` parameter in NSAPI.
2. The PHPRC environmental variable.
3. The current working directory.
4. The webserver’s SAPI module or PHP directory.

Important:

- If a `php-sapi.ini` file exists, where `sapi` represents the SAPI in use, the system reads that file **instead** of the `php.ini` file.
- The Apache web server changes to the `root` directory at startup, which causes PHP to read `php.ini` files that exist in the `root` user’s directories.

In cPanel & WHM, the system also scans the `.ini` files that exist in the `/opt/cpanel/ea-php##/root/etc/php.d/` directory. The system reads these files in **alphabetical** order. To see the files that PHP loaded, you can execute the `php_ini_scanned_files()` function with your PHP script or run PHP with the `--ini` option.

## PHP handlers and configuration files

- [CGI](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#cgi)
- [DSO](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#dso)
- [FCGI Process Manager (FPM)](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#fcgi-process-manager-fpm)
- [FCGI daemon (FCGId)](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#fcgi-daemon-fcgid)
- [LSAPI](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#lsapi)
- [suPHP](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#suphp)

### CGI

The CGI handler executes PHP applications through the `mod_cgi` or the `mod_cgid` Apache modules.

The system **only** uses the values that the `/opt/cpanel/ea-php##/root/etc/php.ini` file or the `.ini` files in the `/opt/cpanel/ea-php##/root/etc/php.d/` directory specify. The system reads these files in **alphabetical** order.

### DSO

The [DSO](https://httpd.apache.org/docs/2.4/dso.html) handler embeds the PHP language inside the Apache webserver. DSO allows you to use Apache directives (for example, the `php_value` and `php_admin_value` directives).

The system **only** uses the values that the `/opt/cpanel/ea-php##/root/etc/php.ini` file or the `.ini` files in the `/opt/cpanel/ea-php##/root/etc/php.d/` directory specify. The system reads these files in **alphabetical** order.

### FCGI Process Manager (FPM)

[FastCGI](https://en.wikipedia.org/wiki/FastCGI) serves PHP applications through the `mod_proxy_fcgi` Apache module.

The system loads the PHP INI values in the following order:

1. The values that the `/opt/cpanel/ea-php##/root/etc/php.ini` file or the `.ini` files in the `/opt/cpanel/ea-php##/root/etc/php.d/` directory specify. The system reads these files in **alphabetical** order.
2. The `/opt/cpanel/ea-php##/root/etc/php-fpm.conf` file.






Note:





If a key that starts with `php_admin_*` exists, it will **override** the system default value or any previously found value.

3. The `.conf` files in the `/opt/cpanel/ea-php##/root/etc/php-fpm.d/` directory.

Important:

Do **not** edit the `/opt/cpanel/ea-php##/root/etc/php-fpm.conf` file or the files in the `/opt/cpanel/ea-php##/root/etc/php-fpm.d/` directory. If you wish to make changes, you **must** edit the PHP-FPM `.yaml` files.

For more information, read our [PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/) documentation.

### FCGI daemon (FCGId)

FCGId serves PHP applications through the `mod_fcgid` Apache module. The `mod_fcgid` Apache module is an alternative to the `mod_cgi` Apache module.

The system **only** uses the values that the `/opt/cpanel/ea-php##/root/etc/php.ini` file or the `.ini` files in the `/opt/cpanel/ea-php##/root/etc/php.d/` directory specify. The system reads these files in **alphabetical** order.

For more information, read our [Apache Module: FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid) documentation.

### LSAPI

LSAPI provides a fast and stable way to serve PHP applications. cPanel & WHM’s version of LSAPI differs from the one that CloudLinux provides. This version disables Checkpoint/Restore in Userspace (CRIU), connection pooling, and opcache preservation.

The system **only** uses the values that the `/opt/cpanel/ea-php##/root/etc/php.ini` file or the `.ini` files in the `/opt/cpanel/ea-php##/root/etc/php.d/` directory specify. The system reads the files in the `/opt/cpanel/ea-php##/root/etc/php.d/` directory in **alphabetical** order.

### suPHP

This option provides the ability to run PHP scripts as the user with the `mod_suphp` Apache module.

The system uses the **first** instance of a directive that it finds. The system loads PHP INI directives in the following order:

Warning:

- We **strongly** recommend that you allow your system to load the `.ini` files and directives as it finds them. This guarantees the most predictable results.
- We **strongly** recommend that you do **not** specify a location for your `.ini` file with the `[phprc_paths]` section of the `suphp.conf` file or the `suPHP_ConfigPath` directive, or set the [PHPRC environmental variable](http://php.net/manual/en/configuration.php). Unexpected behavior may occur.

1. The `.user.ini` file that exists in the same directory as the PHP script.






Important:





- Do **not** set the `user_ini.` filename directive.
- If the system does **not** find a `.user.ini` file, it searches up the directory tree until finds one and uses that file as if it existed in the PHP file’s directory.
- The system ignores directives that are **not** allowed in `.user.ini` files.

2. The `php.ini` file that exists in the same directory as the PHP script.
3. The `.ini` files in the PHP version’s `/opt/cpanel/ea-php##/root/etc/php.d/` directory.






Note:




PHP scans the files in alphabetical order. To see the files that PHP loaded, you can run the `php_ini_scanned_files()` command or run PHP with the `--ini` option.


4. The PHP version’s global `php.ini` file.
5. The PHP default setting.

If you specified a location for your `.ini` file, the system does **not** load configurations in the `/opt/cpanel/ea-php##/root/etc/php.d/` directory. Instead, it loads the settings in the `php.ini` file that the directive specifies. We **strongly** recommend that you do **not** specify the location of a `php.ini` file.

The presence of one of the following sets the location of `.ini` file that the system reads:

- The `suPHP_ConfigPath` directive.
- The `[phprc_paths]` section of the `suphp.conf` file.
- If you set a file location with the PHPRC environmental variable.

Important:

We **strongly** recommend that you do **not** specify a location for your `.ini` file with the `[phprc_paths]` section of the `suphp.conf` file or the `suPHP_ConfigPath` directive, or set the [PHPRC environmental variable](http://php.net/manual/en/configuration.php). Unexpected behavior may occur.

#### Additional Documentation

* * *

- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [MultiPHP Manager for WHM — System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [MultiPHP Manager for WHM — User Domain Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/)
- [The rebuild\_phpconf Script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×