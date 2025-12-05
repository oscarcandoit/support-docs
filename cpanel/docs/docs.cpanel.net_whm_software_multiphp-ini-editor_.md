---
url: "https://docs.cpanel.net/whm/software/multiphp-ini-editor/"
title: "MultiPHP INI Editor for WHM | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/software/multiphp-ini-editor/#main-content)

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
4. MultiPHP INI Editor for WHM


[php](https://docs.cpanel.net/tags/php/) [ea4](https://docs.cpanel.net/tags/ea4/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/software/multiphp-ini-editor/#overview)

* * *

[MultiPHP INI Editor](https://docs.cpanel.net/whm/software/multiphp-ini-editor/#multiphp-ini-editor)

* * *

[Basic Mode](https://docs.cpanel.net/whm/software/multiphp-ini-editor/#basic-mode)

* * *

[Editor Mode](https://docs.cpanel.net/whm/software/multiphp-ini-editor/#editor-mode)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/software/multiphp-ini-editor/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/software/multiphp-ini-editor/#overview)

* * *

[MultiPHP INI Editor](https://docs.cpanel.net/whm/software/multiphp-ini-editor/#multiphp-ini-editor)

* * *

[Basic Mode](https://docs.cpanel.net/whm/software/multiphp-ini-editor/#basic-mode)

* * *

[Editor Mode](https://docs.cpanel.net/whm/software/multiphp-ini-editor/#editor-mode)

* * *

## MultiPHP INI Editor for WHM

![](https://docs.cpanel.net/img/whm-icons/multiphp_ini_editor.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)

Last modified: _2025 May 19_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to configure file directives for a PHP version. These directives control how that version of PHP behaves - for example, whether it limits scripts’ abilities to access or execute local files. You can configure basic directives in the [_Basic Mode_](https://docs.cpanel.net/whm/software/multiphp-ini-editor/#basic-mode) tab of this interface, or add new directives in the [_Editor Mode_](https://docs.cpanel.net/whm/software/multiphp-ini-editor/#editor-mode) tab.

Note:

cPanel users can view information about the server’s PHP configuration in cPanel’s [_MultiPHP INI Editor_](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/) interface ( _cPanel » Home » Software » MultiPHP INI Editor_).

## MultiPHP INI Editor

### Basic Mode

The _Basic Mode_ section of this interface loads the directive values from the `php.ini` file for the version of PHP that you select from the _Configure basic settings of a PHP version_ menu. The following basic directives are available if the selected version of PHP supports them:

| Directive | Description | Default value |
| --- | --- | --- |
| [`allow_url_fopen`](https://php.net/manual/en/filesystem.configuration.php#ini.allow-url-fopen) | This directive determines whether PHP scripts can use URL-aware `fopen` wrappers. | _Enabled_ |
| [`allow_url_include`](https://php.net/manual/en/filesystem.configuration.php#ini.allow-url-include) | This directive determines whether PHP scripts can use URL-aware `fopen` wrappers with the following functions:<br>- `include()`<br>- `include_once()`<br>- `require()`<br>- `require_once()`<br>Note:<br>This directive was **deprecated** in PHP 7.4. | _Disabled_ |
| `asp_tags` | This directive determines whether PHP scripts can use ASP-like tags in addition to PHP tags. <br>Note:<br>- This includes variable-value printing shorthand (for example, `<%= $value %>`).<br>- This directive was **removed** in PHP 7.0. | _Disabled_ |
| [`display_errors`](https://php.net/manual/en/errorfunc.configuration.php#ini.display-errors) | This directive determines whether PHP displays errors as output or hides them from the user. | _Disabled_ |
| [`enable_dl`](https://www.php.net/manual/en/info.configuration.php#ini.enable-dl) | Select whether scripts can call the `dl` function. This function dynamically loads a PHP extension at runtime. <br>Warning:<br>If you set this directive to _Enabled_, it poses security risks to your server. We **strongly** recommend that you select _Disabled_ unless you **absolutely** require the `dl` function. | _Disabled_ |
| [`file_uploads`](https://www.php.net/manual/en/ini.core.php#ini.file-uploads) | This directive determines whether your PHP scripts can upload HTTP files. | _Disabled_ |
| `magic_quotes_gpc` | Select whether PHP automatically escapes certain characters with a backslash (`\`). <br>Note:<br>This directive was **deprecated** in PHP 5.3. | _Disabled_ |
| [`max_execution_time`](https://www.php.net/manual/en/info.configuration.php#ini.max-execution-time) | This directive determines the maximum amount of time, in seconds, that your server allows a script to run before your server terminates it. You can use this directive to limit the amount of memory that poorly-written scripts can use. | `30` |
| [`max_input_time`](https://www.php.net/manual/en/info.configuration.php#ini.max-input-time) | This directive determines the maximum amount of time, in seconds, that your server allows a script to parse input data. | `-1` |
| [`max_input_vars`](https://php.net/manual/en/info.configuration.php#ini.max-input-vars) | This directive determines the maximum number of input variables per request. Use this directive to deter Denial of Service (DoS) attacks that use hash collisions on input variable names. | `1000` |
| [`memory_limit`](https://www.php.net/manual/en/ini.core.php#ini.memory-limit) | This directive determines the maximum amount of memory, in bytes, that scripts can allocate. This directive helps prevent poorly-written scripts from consuming too much memory. <br>Note:<br>Use the character `M` to define the limit in megabytes. | cPanel & WHM adjusts this setting at the time of install, based on system memory:<br>- 1 GB — `32M`<br>- 2 - 4GB — `64M`<br>- Over 4 GB — `128M` |
| [`post_max_size`](https://php.net/manual/en/ini.core.php#ini.post-max-size) | This directive determines the maximum size of post data that the system allows, in bytes. This directive affects file uploads. <br>Note:<br>- Set this value to `0` to allow unlimited post sizes.<br>- We **strongly** recommend that you set this value larger than the `upload_max_filesize` value and smaller than the `memory_limit` value.<br>- Use the character `M` to define the limit in megabytes. | `8M` |
| [`register_globals`](https://php.net/manual/en/security.globals.php) | This directive determines whether `GET` or `POST` input converts into variables that the script can use. <br>Note:<br>This directive was **deprecated** in PHP 5.4. | _Disabled_ |
| [`safe_mode`](https://php.net/manual/en/features.safe-mode.php) | This directive determines whether to enable safe mode. Safe mode increases security for PHP scripts and enables user, group, and environment checks and controls. <br>Note:<br>This directive was **removed** in PHP 5.4. | _Disabled_ |
| [`session.save_path`](https://www.php.net/manual/en/session.configuration.php#ini.session.save-path) | This directive determines the directory where your server stores the files that PHP creates. To learn more about this directive, read the [PHP session files](https://docs.cpanel.net/whm/software/multiphp-ini-editor/#php-session-files) section below. | `NULL` |
| [`session.gc_maxlifetime`](https://www.php.net/manual/en/session.configuration.php#ini.session.gc-max-lifetime) | This directive determines the maximum amount of time, in seconds, for the lifetime of a session file. If a session lasts longer than the `session.max_lifetime`, the system marks it for deletion the next time that it performs a session cleanup. Each version of PHP that you install on the system uses this setting. To learn more about this directive, read the [PHP session files](https://docs.cpanel.net/whm/software/multiphp-ini-editor/#php-session-files) section below. <br>Note:<br>Session files can exist on the filesystem for longer than the `session.max_lifetime` setting. Because session cleanup occurs every 30 minutes, a session file could exist for up to its `session.max_lifetime` value plus 30 minutes. | `1440` (24 minutes) |
| [`session.gc_probability`](https://php.net/manual/en/session.configuration.php#ini.session.gc-probability) | Because a cron job cleans up the session files, the system does **not** require this setting. If you enable this setting, PHP will attempt to delete expired files. This will fail. | `0` |
| [`session.gc_divisor`](https://php.net/manual/en/session.configuration.php#ini.session.gc-divisor) | Because a cron job cleans up the session files, the system does **not** require this setting. If you enable this setting, PHP will attempt to delete expired files. This will fail. | `0` |
| [`upload_max_filesize`](https://www.php.net/manual/en/ini.core.php#ini.upload-max-filesize) | This directive determines the maximum file size for an upload, in bytes. <br>Note:<br>Use the character `M` to define the limit in megabytes. | `2M` |
| [`zlib.output_compression`](https://php.net/manual/en/zlib.configuration.php) | This directive determines whether to transparently compress pages when the browser sends an `Accept-Encoding: gzip` or `deflate` header. | _Disabled_ |

Make your changes to the desired directives and click _Save_.

The system saves the settings to the `/opt/cpanel/<your_php_package>/root/etc/php.ini` file, where `<your_php_package>` represents the name of the PHP package that contains the `.ini` file that you wish to edit.

#### PHP session files

The system saves PHP session files in the `/var/cpanel/php/sessions` directory by default, though you can update this path with the `session.save_path` [directive](https://docs.cpanel.net/whm/software/multiphp-ini-editor/#basic-mode). EasyApache 4 automatically creates subdirectories based on your server’s existing version of PHP. If multiple versions of PHP exist on the system, a subdirectory exists for **each version** of PHP.

PHP cleans up files that have existed longer than the `session.gc_maxliftime` directive with the [`clean_user_php_sessions`](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/) script. You also [run this script](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/#run-the-script) yourself.

Warning:

Do **not** change the `session.save_path` directive to the `/tmp` directory or a directory that other users or programs use. If you change the `session.save_path` setting’s value to another directory, the system will change the directory’s permissions to `1733`. `1733` permissions allow the following file actions:

- The file owner can read, write, and execute files.
- Users who don’t own the file can write and execute, but cannot read files.

This will likely break other programs’ functionality.

If you **must** use the `/tmp` directory for your PHP session files, create a subdirectory under the `/tmp` directory to save them.

### Editor Mode

Warning:

- Exercise extreme caution when you make changes in this interface, because errors could result in non-functional PHP scripts. **Only** advanced users should use this interface.
- Do not use the following reserved terms as directives:
  - `null`
  - `yes`
  - `no`
  - `true`
  - `false`
  - `on`
  - `off`
  - `none`
- Directives **cannot** contain any of the following special characters: `?`, `{}`, `|`, `&`, `~`, `!`,`[`, `()`,`^`, or `"`.\
- To learn more about what directives are available for your PHP version and how to set them, search the [php.net](https://www.php.net/manual/en/index.php) documentation.\
\
The _Editor Mode_ section of this interface loads the contents of the `php.ini` file for your selected version of PHP. Make your changes to the desired directives and click _Save_.\
\
The system saves the settings to the `/opt/cpanel/<your_php_package>/root/etc/php.ini` file, where `<your_php_package>` represents the name of the PHP package that contains the `.ini` file that you wish to edit. The interface attempts a rudimentary validation of directive names to ensure that they follow the proper format. This does **not** guarantee that your PHP installation will function.\
\
To learn more about how PHP handles the `php.ini` file, read PHP’s [The configuration file](https://www.php.net/manual/en/configuration.file.php) documentation.\
\
To reset your PHP settings to default values, delete the PHP version’s `php.ini` file.\
\
#### Additional Documentation\
\
* * *\
\
- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)\
- [Module Installers](https://docs.cpanel.net/whm/software/module-installers/)\
- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)\
- [MultiPHP Manager for WHM — System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)\
- [MultiPHP Manager for WHM — User Domain Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/)\
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)\
\
[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")\
\
© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")\
\
cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.\
\
×