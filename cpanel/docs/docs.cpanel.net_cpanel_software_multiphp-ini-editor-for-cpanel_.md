---
url: "https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/"
title: "MultiPHP INI Editor for cPanel | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Software](https://docs.cpanel.net/cpanel/software/)
4. MultiPHP INI Editor for cPanel


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [php](https://docs.cpanel.net/tags/php/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#overview)

* * *

[MultiPHP INI Editor](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#multiphp-ini-editor)

* * *

[Basic Mode](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#basic-mode)

* * *

[Editor Mode](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#editor-mode)

* * *

[The DSO PHP handler and PHP major versions](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#the-dso-php-handler-and-php-major-versions)

* * *

[The LSAPI module and the htaccess file](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#the-lsapi-module-and-the-htaccess-file)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#overview)

* * *

[MultiPHP INI Editor](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#multiphp-ini-editor)

* * *

[Basic Mode](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#basic-mode)

* * *

[Editor Mode](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#editor-mode)

* * *

[The DSO PHP handler and PHP major versions](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#the-dso-php-handler-and-php-major-versions)

* * *

[The LSAPI module and the htaccess file](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#the-lsapi-module-and-the-htaccess-file)

* * *

## MultiPHP INI Editor for cPanel

![](https://docs.cpanel.net/img/cpanel-icons/multiphp_ini_editor.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/)

Last modified: _2025 May 19_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you to configure file directives for a PHP version. These directives control how that version of PHP behaves - for example, whether it limits scripts’ abilities to access or execute local files. You can configure basic directives in the [_Basic Mode_](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#basic-mode) tab of this interface, or add new directives in the [_Editor Mode_](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#editor-mode) tab.

Note:

WHM users can view information about the server’s PHP INI settings in WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor) interface ( _WHM » Home » Software » MultiPHP INI Editor_).

## MultiPHP INI Editor

This editor has two tabs:

- [_Basic Mode_](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#basic-mode) \- This tab loads directive values from the `php.ini` file for your selected domain or entire account.
- [_Editor Mode_](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/#editor-mode) \- This tab opens a text editor where you can directly edit the `php.ini` file for your selected domain or entire account.

## Basic Mode

To use the _Basic Mode_ section of this interface, first select the `php.ini` file you want to configure from the _Configure PHP INI basic settings_ menu. The menu displays a list of each available domain name, along with the account’s _Home Directory_. To apply changes to all websites you manage, select _Home Directory_. To apply changes to a specific domain, select its domain name. Your PHP directives will appear.

For security purposes, we **strongly** recommend that you use the cPanel-provided default values.

The availability of directives depends on your version of PHP. If a directive does not appear in your interface, your version of PHP does **not** support it.

Make your changes to the desired directives and click _Apply_. The system saves changes to the `php.ini` file, the `user.ini` file, and your `.htaccess` file **if** those files supports the directive. Your `php.ini`, `.user.ini`, and `.htaccess` files may not be identical. For more information about which files support which directives, read [PHP’s documentation](https://php.net/manual/en/index.php).

## Editor Mode

To use the _Editor Mode_ section of this interface, first select the `php.ini` file you want to configure from the _Edit PHP INI settings_ menu. The menu displays a list of each available domain’s domain name, along with the account’s _Home Directory_. To apply changes to all websites you manage, select _Home Directory_. To apply changes to a specific domain, select that domain’s domain name. Your PHP directives will appear. If the `php.ini` file does not exist, the interface loads a blank editor so that you can create your own file.

To learn more about how PHP handles the `php.ini` file, read PHP’s [The configuration file](https://www.php.net/manual/en/configuration.file.php) documentation.

Warning:

- You must exercise extreme caution when you make changes in this interface. Errors could result in non-functional PHP scripts. Only advanced users should use this interface.
- You cannot use any of the following words as directives: `null`, `yes`, `no`, `true`, `false`, `on`, `off`, and `none`. Directives also cannot contain any of the following special characters: `?`, `{}`, `|`, `&`, `~`, `!`,`[`, `()`,`^`, or `"`.\
- To learn more about what directives are available for your PHP version and how to set them, search the [php.net](https://www.php.net/manual/en/index.php) documentation.\
\
Make your changes to the desired directives and click _Save_.\
\
The system saves changes to the `php.ini` file in the _Path_ section of the interface, the `.user.ini` file, and the .`htaccess` file **if** that file supports the directive. Your `php.ini`, `.user.ini`, and `.htaccess` files may not be identical. For more information about which files support which directives, read PHP’s [Where a configuration setting may be set](https://php.net/manual/en/configuration.changes.modes.php) documentation.\
\
The interface attempts a rudimentary validation of directive names. This does **not** guarantee that your PHP configuration will function. To reset your PHP settings to default values, delete the domain’s or home directory’s `php.ini` file.\
\
## The DSO PHP handler and PHP major versions\
\
Note:\
\
cPanel & WHM does **not** support the DSO PHP handler with PHP 8.0 and higher.\
\
If your server administrator enables the [DSO](https://docs.cpanel.net/ea4/php/php-handlers/#dso) PHP handler and you change your PHP version to a different major PHP version, the system will **not** read your configuration changes.\
\
For example, if you change your PHP version from PHP 5 to PHP 7, the system will **not** read your configuration changes. To correct this issue, you **must** edit and save your PHP configuration again in the interface. The system will then load the `.htaccess` directives correctly.\
\
## The LSAPI module and the htaccess file\
\
If your server administrator includes the [LSAPI](https://docs.cpanel.net/ea4/php/advanced-php-configuration/#lsapi) module in your PHP configuration, the system also adds an LSAPI section to your `.htaccess` file. This section might resemble the following example:\
\
|     |     |\
| --- | --- |\
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```bash<br><IfModule lsapi_module><br>      php_value date.timezone "America/Chicago"<br>      php_value memory_limit 128M<br>      php_value upload_max_filesize 60M<br></IfModule><br>``` |\
\
#### Additional Documentation\
\
* * *\
\
- [Application Manager](https://docs.cpanel.net/cpanel/software/application-manager/)\
- [Module Installers](https://docs.cpanel.net/whm/software/module-installers/)\
- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)\
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)\
- [PHP PEAR Packages](https://docs.cpanel.net/cpanel/software/php-pear-packages/)\
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)\
\
[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")\
\
© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")\
\
cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.\
\
×