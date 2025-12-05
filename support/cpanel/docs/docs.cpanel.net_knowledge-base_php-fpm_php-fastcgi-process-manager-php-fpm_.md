---
url: "https://docs.cpanel.net/knowledge-base/php-fpm/php-fastcgi-process-manager-php-fpm/"
title: "PHP FastCGI Process Manager - PHP-FPM | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/php-fpm/php-fastcgi-process-manager-php-fpm/#main-content)

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
4. PHP FastCGI Process Manager - PHP-FPM


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/) [php](https://docs.cpanel.net/tags/php/) [fpm](https://docs.cpanel.net/tags/fpm/) [litespeed](https://docs.cpanel.net/tags/litespeed/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/php-fpm/php-fastcgi-process-manager-php-fpm/#overview)

* * *

[Running PHP-FPM with EasyApache 4](https://docs.cpanel.net/knowledge-base/php-fpm/php-fastcgi-process-manager-php-fpm/#running-php-fpm-with-easyapache-4)

* * *

[Tutorials on how to use PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/php-fastcgi-process-manager-php-fpm/#tutorials-on-how-to-use-php-fpm)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/php-fpm/php-fastcgi-process-manager-php-fpm/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/php-fpm/php-fastcgi-process-manager-php-fpm/#overview)

* * *

[Running PHP-FPM with EasyApache 4](https://docs.cpanel.net/knowledge-base/php-fpm/php-fastcgi-process-manager-php-fpm/#running-php-fpm-with-easyapache-4)

* * *

[Tutorials on how to use PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/php-fastcgi-process-manager-php-fpm/#tutorials-on-how-to-use-php-fpm)

* * *

## PHP FastCGI Process Manager - PHP-FPM

Last modified: _2022 November 11_

* * *

## Overview

Warning:

We **strongly** recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM on a server with less than the required RAM, your server may experience severe performance issues.


PHP FastCGI Process Manager (PHP-FPM) is an alternative FastCGI daemon for PHP that allows a website to handle high loads. PHP-FPM maintains pools (workers that can respond to PHP requests) to accomplish this. PHP-FPM is faster than traditional CGI-based methods, such as SUPHP, for multi-user PHP environments. It does **not** overload a system’s memory with PHP from Apache processes.

- LiteSpeed Web Server uses the `lsphp` binary. LiteSpeed Web Server does **not** use the system’s PHP-FPM implementation in WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface _(WHM » Home » Software » MultiPHP Manager)_.
- To monitor applications that use PHP-FPM, select the _Monitor_ checkbox for the _PHP-FPM service for cPanel Daemons_ service in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) interface _(WHM » Home » Service Configuration » Service Manager)_.

## Running PHP-FPM with EasyApache 4

On [supported operating systems](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system), EasyApache 4 uses the `PrivateTmp` option with PHP-FPM. EasyApache 4 does this to increase security for temporary files that the running processes in PHP-FPM access. The `PrivateTmp` option creates special directories in the `/tmp` directory for each Apache PHP-FPM version your system uses. It’s possible that each time you or the system restarts the PHP-FPM service, the `PrivateTmp` option will create a new directory.

Warning:

Removing the `PrivateTmp`-created directories, either manually or automatically, will cause errors in applications or websites that use PHP-FPM. We **strongly** encourage that you do **not** remove these directories. If you need to remove any of these directories, we recommend that you restart the Apache PHP-FPM service. This ensures that Apache PHP-FPM will work correctly.

To restart Apache PHP-FPM, use the following command:

```bash
/usr/local/cpanel/scripts/restartsrv_apache_php_fpm --hard
```

## Tutorials on how to use PHP-FPM

- [Configuration Values of PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/) — This document lists the cPanel PHP-FPM system’s configuration settings and their default values.
- [PHP-FPM Code and FileSystem Layout for EasyApache4](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/) — This document explains how to implement PHP-FPM, the filesystem layout of PHP-FPM, and how to adjust PHP versions.
- [The `php_fpm_config` Script](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/) — This document explains when and how to use the `/scripts/php_fpm_config` script.
- [PHP-FPM Domain Pools](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-domain-pools/) – This document explains how to create a domain pool with PHP-FPM.

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