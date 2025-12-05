---
url: "https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/"
title: "EasyApache 4 and the ea-php-cli Package | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#main-content)

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
4. EasyApache 4 and the ea-php-cli Package


[php](https://docs.cpanel.net/tags/php/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [htaccess](https://docs.cpanel.net/tags/htaccess/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#overview)

* * *

[PHP binaries](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#php-binaries)

* * *

[The Litespeed binary](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#the-litespeed-binary)

* * *

[The system default PHP configuration file](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#the-system-default-php-configuration-file)

* * *

[Execute PHP files from the command line](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#execute-php-files-from-the-command-line)

* * *

[The ea-php-cli cache symlink](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#the-ea-php-cli-cache-symlink)

* * *

[Override the default ea-php-cli behavior](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#override-the-default-ea-php-cli-behavior)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#overview)

* * *

[PHP binaries](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#php-binaries)

* * *

[The Litespeed binary](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#the-litespeed-binary)

* * *

[The system default PHP configuration file](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#the-system-default-php-configuration-file)

* * *

[Execute PHP files from the command line](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#execute-php-files-from-the-command-line)

* * *

[The ea-php-cli cache symlink](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#the-ea-php-cli-cache-symlink)

* * *

[Override the default ea-php-cli behavior](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#override-the-default-ea-php-cli-behavior)

* * *

## EasyApache 4 and the ea-php-cli Package

Last modified: _2024 September 26_

* * *

## Overview

The `ea-php-cli` package is EasyApache 4’s replacement for the system-provided `/usr/bin/php` binary. This package determines the PHP version that the user’s application requires from the system. While the stock version of the `/usr/bin/php` binary assumes a single version of PHP, cPanel & WHM’s `ea-php-cli` package determines the correct version of PHP to execute.

## PHP binaries

The `ea-php-cli` package installs the following PHP binaries to ensure that your system uses the correct PHP handler for your request:

- `/usr/bin/php` — This executable uses the `php-cgi` binary for the specified PHP version.
- `/usr/local/bin/php` — This executable uses the `php-cli` binary for the specified PHP version.

The `/usr/bin/php` binary calls the [PHP CGI handler](https://docs.cpanel.net/ea4/php/php-handlers/#cgi), which allows you to execute PHP applications through the `mod_cgi` or `mod_cgid` Apache modules.

The `/usr/local/bin/php` binary calls the PHP command-line handler. This works with most systems’ default `PATH` settings.

## The Litespeed binary

When you install a PHP version, the system also installs the `ea-php-cli-lsphp` package. This package contains the `/usr/bin/lsphp` binary. This executable uses the `lsphp` binary for the specified PHP version to ensure the system correctly calls Litespeed.

#### Managing the Litespeed binary

The `ea-php-cli-lsphp` package manages the `/usr/bin/lsphp` binary. The `/usr/bin/lsphp` binary calls the `lsphp` binary. If you **cannot** call this binary, install the `ea-php-cli-lsphp` package manually with the following command:

| Operating System | Command |
| --- | --- |
| CentOS 7 | `yum install ea-php-cli-lsphp` |
| AlmaLinux OS and Rocky Linux™ | `dnf install ea-php-cli-lsphp` |
| Ubuntu® | `apt install --purge ea-php-cli-lsphp` |

Note:

- You can also use `/usr/local/bin/lsphp` to call the `lsphp` binary.
- The `lsphp` binary works with most systems’ default `PATH` settings.

### The system default PHP configuration file

The system uses the `/etc/cpanel/ea4/php.conf` file to determine the system’s default PHP version and the PHP handler that each PHP version uses.

If a PHP file’s PHP version is not explicitly set, the system uses the default entry in the `/etc/cpanel/ea4/php.conf` file to determine which version of PHP to use.

You can set the system’s default PHP version and an individual domain’s PHP version in WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm) interface ( _WHM » Home » Software » MultiPHP Manager_). You can also set the system’s default PHP version with the [`/usr/local/cpanel/bin/rebuild_phpconf`](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script) script. For more information, read our [PHP](https://docs.cpanel.net/ea4/php/about-php) documentation.

Important:

- If you manually edit the `php.conf` file, your settings may not persist.
- If you configure a file or the system with an invalid package, the executable exits with an error message.
- If you configure the file or system with a package that does not contain the necessary binary, the executable displays a warning message and uses the system default version of PHP.
- If both a file’s configured version of PHP and the system default version of PHP are unavailable, the executable exits with an error.

## Execute PHP files from the command line

To execute a PHP file from the command line, call the `ea-php-cli` binaries to ensure that the system uses the correct PHP handlers.

To call the binaries, run the one of the following commands, where `filename.php` represents the PHP file that you wish to execute:

- `/usr/bin/php <options> filename.php`
- `/usr/local/bin/php <options> filename.php`
- `/usr/bin/lsphp <options> filename.php`

Your command might resemble the following example:

```bash
/usr/bin/php /home/example/public_html/domain/app/sample-file.php
```

The system will use the user’s configured PHP path to determine which PHP version it calls.

### The ea-php-cli cache symlink

The first time you call one of the `ea-php-cli` binaries, the system creates the `.ea-php-cli.cache` symlink to the PHP version that the directory requires. This symlink provides a quick way for the system to determine the proper version of PHP and **reads as broken by design**. For example, if the PHP script requires PHP 8.1, then the symlink will point to `ea-php81`.

Warning:

We **strongly** recommend that you do **not** delete these symlinks. The system will **recreate** any broken symlinks you delete the next time that you call one of the `ea-php-cli` binaries.

### Override the default ea-php-cli behavior

If you want to override the file’s configured version of PHP, use the `/usr/bin/ea-php##` symlink, where `##` represents the two-digit PHP version that you wish to use. Your command might resemble the following example:

```bash
/usr/bin/ea-php81 filename.php
```

If you want to override the file’s configured version of PHP with a custom `.ini` file, run the following command, where `##` represents the two-digit PHP version that you wish to use:

```bash
ea-php81 -c /custom/directory/custom-file.ini my_script.php
```

You can also use the `--ea-reference-dir=directory` option to tell the system to use the PHP version set in the specified directory. Your command might resemble the following example, where `directory` represents the path to the directory that you wish to reference:

```bash
/usr/bin/php --ea-reference-dir=directory /usr/local/share/whatever.php
```

The system passes all other options that you provide to the PHP binary.

For more information, read our [About PHP](https://docs.cpanel.net/ea4/php/about-php) documentation.

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