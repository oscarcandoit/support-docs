---
url: "https://docs.cpanel.net/ea4/php/php-handlers/"
title: "PHP Handlers | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/php/php-handlers/#main-content)

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
4. PHP Handlers


[phphandlers](https://docs.cpanel.net/tags/phphandlers/) [ea4](https://docs.cpanel.net/tags/ea4/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [security](https://docs.cpanel.net/tags/security/) [apachemodule](https://docs.cpanel.net/tags/apachemodule/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/php/php-handlers/#overview)

* * *

[Change your PHP handler](https://docs.cpanel.net/ea4/php/php-handlers/#change-your-php-handler)

* * *

[PHP handlers](https://docs.cpanel.net/ea4/php/php-handlers/#php-handlers)

* * *

[CGI](https://docs.cpanel.net/ea4/php/php-handlers/#cgi)

* * *

[DSO](https://docs.cpanel.net/ea4/php/php-handlers/#dso)

* * *

[FastCGI Process Manager (FPM)](https://docs.cpanel.net/ea4/php/php-handlers/#fastcgi-process-manager-fpm)

* * *

[FCGI daemon (FCGId)](https://docs.cpanel.net/ea4/php/php-handlers/#fcgi-daemon-fcgid)

* * *

[LSAPI](https://docs.cpanel.net/ea4/php/php-handlers/#lsapi)

* * *

[suPHP](https://docs.cpanel.net/ea4/php/php-handlers/#suphp)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/php/php-handlers/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/php/php-handlers/#overview)

* * *

[Change your PHP handler](https://docs.cpanel.net/ea4/php/php-handlers/#change-your-php-handler)

* * *

[PHP handlers](https://docs.cpanel.net/ea4/php/php-handlers/#php-handlers)

* * *

[CGI](https://docs.cpanel.net/ea4/php/php-handlers/#cgi)

* * *

[DSO](https://docs.cpanel.net/ea4/php/php-handlers/#dso)

* * *

[FastCGI Process Manager (FPM)](https://docs.cpanel.net/ea4/php/php-handlers/#fastcgi-process-manager-fpm)

* * *

[FCGI daemon (FCGId)](https://docs.cpanel.net/ea4/php/php-handlers/#fcgi-daemon-fcgid)

* * *

[LSAPI](https://docs.cpanel.net/ea4/php/php-handlers/#lsapi)

* * *

[suPHP](https://docs.cpanel.net/ea4/php/php-handlers/#suphp)

* * *

## PHP Handlers

Last modified: _2024 August 27_

* * *

## Overview

PHP handlers, a type of Apache module, contain libraries that the Apache web server uses to interpret and run PHP code.

The `/etc/apache2/conf.d/php.conf` configuration file contains the global directives that configure Apache’s PHP application handlers. An include command in the Apache configuration file (`httpd.conf`) loads the `php.conf` configuration file so that the handlers load on startup.

## Change your PHP handler

To change your PHP handler, use the _PHP Handlers_ section of WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm) interface ( _WHM » Home » Software » MultiPHP Manager_) or use the [rebuild\_phpconf](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script) script.

## PHP handlers

By default, cPanel & WHM offers six PHP handlers. Each handler differs in its files and implementation, which affects how quickly and securely Apache handles the PHP requests.

### CGI

The CGI handler executes PHP applications through the `mod_cgi` or the `mod_cgid` Apache modules. If you install the suEXEC module, the system executes PHP applications as the user that owns the VirtualHost that served the request. If you uninstall the suEXEC module, the system executes PHP applications as the `nobody` system user. The system provides `mod_cgi` and `mod_ruid2` by default.

You can customize the CGI handler’s settings in the PHP `.user.ini` file. A domain inherits these customizations if you set the domain to _Inherit_ in WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM » Home » Software » MultiPHP Manager_). For more information, read our [PHP Inheritance](https://docs.cpanel.net/ea4/php/php-inheritance) documentation.

Important:

- If you **enable** a per-user module, such as suEXEC or Ruid2, you can execute PHP scripts with permissions of `0400`.
- If you **disable** a per-user module, such as suEXEC or Ruid2, you can execute PHP scripts with permissions of `0444`.
- You **cannot** use Apache directives (for example, the `php_value` directive) with the `mod_cgi` or the `mod_cgid` Apache modules. You **must** use a custom `php.ini` file instead.
- If you use the `mod_cgi` or the `mod_cgid` Apache modules, you **cannot** set response headers in an `.htaccess` file. To set response headers in an `.htaccess` file, you **must** use the [FPM](https://docs.cpanel.net/ea4/php/php-handlers/#fastcgi-process-manager-fpm) or [suPHP](https://docs.cpanel.net/ea4/php/php-handlers/#suphp) Apache modules.

### DSO

The DSO handler embeds the PHP language inside the Apache webserver. DSO allows you to use Apache directives (for example, the `php_value` and `php_admin_value` directives). If you do **not** use DSO, you **cannot** use these directives in an `.htaccess` file. The DSO handler requires the MPM Prefork Apache module. PHP applications execute as the `nobody` user when you use the DSO PHP handler, unless you use the `mod_mpm_itk` or `mod_ruid2` Apache modules.

Note:

If PHP scripts execute as the `nobody` user, you **cannot** easily identify the user account that executed the script and unauthorized users can view your data.

EasyApache 4 does **not** include the DSO handler by default. To use the DSO handler, install the PHP package that you wish to use.

You can install the DSO PHP package in the _PHP Extensions_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM_ » _Home_ » _Software_ » _EasyApache 4_).

Warning:

- You can only use DSO as the handler for **one** version of PHP on your system.
- cPanel & WHM does **not** support DSO with PHP 8.0 and higher.
- The handler’s display name will **not** contain the text `DSO`. For example, the DSO for PHP 7.4 appears as `php74-php`.
- Unless you use a per-user module such as Ruid2 or ITK, your PHP scripts **must** have permissions of at least `0644` to execute. The PHP scripts that run under DSO create files as the `nobody` user. The `nobody` user **must** have sufficient permissions to access and read the PHP files and permissions to write to the files and directories that the script affects.

### FastCGI Process Manager (FPM)

FastCGI serves PHP applications through the `mod_proxy_fcgi` Apache module. This method is fast, but may require changes to the FastCGI directives to work efficiently. The FastCGI Process Manager (PHP-FPM) implementation of FastCGI includes process management, emergency restarts, and IP address restriction. For more information about FPM, read our [PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/) documentation.

EasyApache 4 includes the `mod_proxy_fcgi` Apache module by default. You can install the `mod_proxy_fcgi` Apache module in the _Apache Modules_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM_ » _Home_ » _Software_ » _EasyApache 4_).

You can customize the CGI handler’s settings in the PHP `.user.ini` file. A domain inherits these customizations if you set the domain to _Inherit_ in WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM_ » _Home_ » _Software_ » _MultiPHP Manager_). For more information, read our [PHP Inheritance](https://docs.cpanel.net/ea4/php/php-inheritance) documentation.

### FCGI daemon (FCGId)

FCGId serves PHP applications through the `mod_fcgid` Apache module. The `mod_fcgid` Apache module provides an alternative to the `mod_cgi` Apache module. FCGId launches multiple instances of a program to enable the system to handle multiple concurrent requests.

Warning:

- The `mod_fcgid` Apache module is **not** compatible with MultiPHP prior to cPanel & WHM version 74.
- On systems that run cPanel & WHM version 76 or earlier, if your default PHP version uses FCGId, then **all** PHP versions will use FCGId.
- We recommend the `mod_fcgid` Apache module **only** for advanced system administrators who understand how to modify the performance of the `mod_fcgid` Apache module.
- The `mod_fcgid` Apache module is **not** compatible with the `mod_ruid2` or `mod_mpm_itk` Apache modules.

For more information, read our [Apache Module: FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid) documentation.

### LSAPI

LSAPI provides a fast and stable way to serve PHP applications. cPanel & WHM’s version of LSAPI differs from the one that CloudLinux provides. This version disables Checkpoint/Restore in Userspace (CRIU), connection pooling, and opcache preservation.

Note:

To utilize this handler’s full functionality, your system **must** run CloudLinux. For more information, read CloudLinux’s [Apache mod\_lsapi](https://docs.cloudlinux.com/cloudlinux_os_components/#apache-mod-lsapi-pro) documentation.


EasyApache 4 includes the `mod_lsapi` Apache module by default. You can install the `mod_lsapi` Apache module in the _Apache Modules_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM_ » _Home_ » _Software_ » _EasyApache 4_).

Warning:

The `mod_lsapi` Apache module is **not** compatible with the `mod_ruid2` or `mod_mpm_itk` Apache modules.


### suPHP

This option provides the ability to run PHP scripts as the user with the `mod_suphp` Apache module. This module provides a flexible and secure way to serve PHP requests.

Note:

If you use suPHP, PHP cache management extensions do **not** provide any benefits to your server. For more information, read our [PHP Options](https://docs.cpanel.net/ea4/php/php-options) documentation.


EasyApache compiles the `mod_suphp` Apache module in paranoid mode, with several patches to improve Apache `UserDir` support. It also includes our [PHPRC patch](https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4).

The `mod_suphp` Apache module that cPanel provides behaves **very** differently from the pristine upstream version. You **cannot** use Apache directives (for example, the `php_value` directive) with the `mod_suphp` module. To specify these values, place a `php.ini` file in either the directory that contains the PHP script or in the location that the system administrator specifies.

Note:

suPHP loads your `.ini` files in a [specific order](https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4//#suphp).


You can install the `mod_suphp` Apache module in the _Apache Modules_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM_ » _Home_ » _Software_ » _EasyApache 4_).

Warning:

suPHP is **not** compatible with the `mpm_itk` or the `mod_ruid2` Apache module. You **must** uninstall suPHP if you want to use these modules.


Note:

For PHP scripts to execute, permissions **must** be at least `0640`. Scripts run as the user who owns the VirtualHost. If the user has permissions that are sufficient to write to a file or directory, so do their PHP scripts.


#### suPHP security checks

The `mod_suphp` Apache module performs various security checks before it executes a PHP script. Edit the `mod_suphp` configuration file, `/etc/suphp.conf`, to disable these checks. You can edit the following security checks:

| Security check | Description |
| --- | --- |
| `docroot` | PHP scripts **must** reside in this directory. To improve security, change this value to `/home/`. This value defaults to `/`. |
| `allow_file_group_writable` | This security check prevents the execution of PHP scripts with the group write bit permissions. You can change this directive to `true` in order to allow these scripts to execute, but this reduces security. This value defaults to `false`. |
| `allow_file_others_writable` | This security check prevents the execution of PHP scripts with the others write bit permissions. You can change this directive to `true` in order to allow these scripts to execute, but this reduces security. This value defaults to `false`. |
| `allow_directory_group_writable` | If you previously ran PHP as DSO, group members may have write access to the directory that your PHP scripts reside in. Your server will **not** execute these scripts if this security check has a value of `false`. You can change this to `true` in order to allow these scripts to execute, but this reduces security. This value defaults to `false`. |
| `allow_directory_others_writable` | If you previously ran PHP as DSO, your PHP scripts may reside in a globally writeable directory. If this security check has a value of `false`, your server will **not** execute those scripts. You can change this to `true` in order to allow these scripts to execute, but this reduces security. This value defaults to `false`. |
| `check_vhost_docroot` | This security check causes suPHP to check whether the target script resides in the document root of the VirtualHost that serves the request. For a `UserDir` request, suPHP considers the domain part of the URL to be the VirtualHost that serves the request. If you set this setting to `true`, it causes `UserDir` requests and some types of PHP aliases to fail but significantly improves security. This value defaults to `false`. |
| `userdir_overrides_usergroup` | cPanel-specific patches allow this configuration option. If you set this value to `true`, suPHP determines which user executes a script from the `UserDir` portion of the URL. If you set this value to `false`, your server executes PHP scripts as the user that the domain portion of the URL specifies. This value defaults to `true`. |
| `paranoid_uid_check` | You can compile suPHP in different security modes. EasyApache uses the paranoid mode. In some cases, force mode may be a better option. The `mod_suphp` module performs a paranoid UID check to verify that the user ID that owns a script executes it. Change this setting to `false` in order to disable the UID check and force the system to behave as though it were in force mode. This value defaults to `true` |
| `paranoid_gid_check` | This security check verifies that the group ID that owns a script also executes it. Change this setting to `false` in order to disable the GID check, and behave as though it were in force mode. This value defaults to `true`. |
| `umask` | This option sets the default permissions for files that suPHP uploads to your server. For improved security, use `0033`, `0077`, or `0777`. This value defaults to `0022`. <br>Note:<br>The `mod_suphp` developers set this to a default of `0777` to require that you explicitly specify file permissions. This setting is very secure, but causes many problems. |
| `min_uid` | The lowest user ID that your server allows to execute scripts. To improve security, set this value to `100` or `500`. You **must** set this value to `0` if you provide shared PHP scripts that the `root` user owns to your users. This value defaults to `1`. |
| `min_gid` | The lowest group ID that your server allows to execute scripts. To improve security, set this value to `100` or `500`. You **must** set this value to `0` if you provide shared PHP scripts that the `root` user owns to your users.This value defaults to `1`. |
| `full_php_process_display` | When you set this value to `true`, the `mod_suphp` module executes PHP scripts in a way that displays both the PHP interpreter and the script’s file name in the process list. To hide the script’s file name and improve security, set this value to `false`. This value defaults to `true`. |

#### The suphp.conf file warnings

Warning:

- We **strongly** recommend that you allow your system to load the `.ini` files and directives as it finds them. This guarantees the most predictable results.
- We **strongly** recommend that you do **not** set the `[phprc_paths]` section, the `suPHP_ConfigPath` directive or set the [PHPRC environmental variable](https://php.net/manual/en/configuration.php). Unexpected behavior may occur.

The `suphp.conf` file includes the `[phprc_paths]` section. You can use this section to lock a particular PHP handler to its default `php.ini` file, but we **strongly** recommend **against** this usage.

The `suPHP_ConfigPath` configuration directive sets the path to the `php.ini` file. Set the `suPHP_ConfigPath` directive in either the `httpd.conf` file or an `.htaccess` file.

- To prevent the use of this directive in `.htaccess` files, remove the `Options` parameter from the Apache _AllowOverride_ directive.
- The `[phprc_paths]` settings in the `suphp.conf` file overrride any `suPHP_ConfigPath` settings.

For more information about suPHP behavior, read our [The cPanel PHPRC PHP Patch for EasyApache 4](https://docs.cpanel.net/ea4/php/the-cpanel-phprc-php-patch-for-easyapache4) documentation.

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Manage root's SSH Keys](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/)
- [The check\_security\_advice\_changes Script](https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script/)
- [The rebuild\_phpconf Script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/)
- [The securetmp Script](https://docs.cpanel.net/whm/scripts/the-securetmp-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×