---
url: "https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4/"
title: "The cPanel PHPRC PHP Patch for EasyApache 4 | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4/#main-content)

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
4. The cPanel PHPRC PHP Patch for EasyApache 4


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/) [phphandlers](https://docs.cpanel.net/tags/phphandlers/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4/#overview)

* * *

[Patch behavior](https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4/#patch-behavior)

* * *

[CGI or DSO](https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4/#cgi-or-dso)

* * *

[SuPHP](https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4/#suphp)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4/#overview)

* * *

[Patch behavior](https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4/#patch-behavior)

* * *

[CGI or DSO](https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4/#cgi-or-dso)

* * *

[SuPHP](https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4/#suphp)

* * *

## The cPanel PHPRC PHP Patch for EasyApache 4

Last modified: _2024 August 23_

* * *

## Overview

We created a PHP patch that forces an EasyApache 4 system to read its `php.ini` files in the same order as an EasyApache 3 system.

## Patch behavior

Your system’s PHP handler determines how your system behaves with this patch and which global values the system uses.

If you use the CGI or DSO PHP handler, the system uses the global values that the `/opt/cpanel/ea-php##/root/etc/php.ini` or the `/opt/cpanel/ea-php##/root/etc/php.d/*.ini` files define.

If your system uses the suPHP PHP handler, the system loads PHP INI directives in a [specific order](https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4/#suphp).

Your PHP handler determines your system’s behavior.

Note:

The system no longer uses `local.ini` files. If a `local.ini` file exists on your system, run the following command to migrate your file to the system’s primary `php.ini` file:

```
/usr/local/cpanel/scripts/migrate_local_ini_to_php_ini --run
```

### CGI or DSO

The system **only** uses the values that the `/opt/cpanel/ea-php##/root/etc/php.ini` file or the `.ini` file in the `/opt/cpanel/ea-php##/root/etc/php.d/` directory specifies.

### SuPHP

The system loads PHP INI directives in the following order. The system uses the **first** instance of a directive that it finds.

Warnings:

- We **strongly** recommend that you allow your system to load the `.ini` files and directives as it finds them. This guarantees the most predictable results.
- We **strongly** recommend that you do **not** specify a location for your `.ini` file with the `[phprc_paths]` section of the `suphp.conf` file, the `suPHP_ConfigPath` directive, or set the [PHPRC environmental variable](http://php.net/manual/en/configuration.php). Unexpected behavior may occur.

1. The `.user.ini` file that exists in the same directory as the PHP script.






Important:





- Do **not** set the `user_ini.filename` directive.
- If the system does **not** find a `.user.ini` file, it searches up the directory tree until it finds one and uses that file as if it existed in the PHP file’s directory. In PHP 7 and later, the system will search below the domain’s document root.
- The system ignores directives that are **not** allowed in `.user.ini` files.

2. The `php.ini` file that exists in the same directory as the PHP script.
3. The `.ini` files in the PHP version’s `/opt/cpanel/ea-php##/root/etc/php.d/` directory.






Note:





PHP scans the files in alphabetical order. To see the files that PHP loaded, you can run the `php_ini_scanned_files()` command or run PHP with the `-- ini` option.

4. The PHP version’s global `php.ini` file.
5. The PHP default setting.

If you specified a location for your `.ini` file, the system does **not** load configurations in the `/opt/cpanel/ea-php##/root/etc/php.d/` directory. Instead, it loads the settings in the `php.ini` file that the directive specifies. We **strongly** recommend that you do **not** specify the location of a `php.ini` file.

The presence of one of the following sets the location of `.ini` file that the system reads:

- The `suPHP_ConfigPath` directive.
- The `[phprc_paths]` section of the `suphp.conf` file.
- If you set a file location with the PHPRC environmental variable.

Important:

- We **strongly** recommend that you do **not** set the `[phprc_paths]` section, the `suPHP_ConfigPath` directive or set the [PHPRC environmental variable](http://php.net/manual/en/configuration.php). Unexpected behavior may occur.
- If you specify the location of an `.ini` file, you **must** provide a complete `.ini` file. Run the following command to ensure that your users receive a complete `php.ini` file:

```
    cat /opt/cpanel/ea-php##/root/etc/php.ini /opt/cpanel/ea-php##/root/etc/php.d/*.ini > /path/to/specified/php.ini
```

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Configure cPanel Cron Jobs](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/)
- [The rebuild\_phpconf Script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×