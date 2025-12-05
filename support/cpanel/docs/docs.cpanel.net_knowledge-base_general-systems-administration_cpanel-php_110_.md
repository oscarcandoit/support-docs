---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/"
title: "cPanel PHP | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. cPanel PHP


[php](https://docs.cpanel.net/tags/php/) [rpms](https://docs.cpanel.net/tags/rpms/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#overview)

* * *

[PHP modules](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#php-modules)

* * *

[PEAR and PECL modules](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#pear-and-pecl-modules)

* * *

[Removed modules](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#removed-modules)

* * *

[PHP loaders](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#php-loaders)

* * *

[PHP and SQL libraries](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#php-and-sql-libraries)

* * *

[The php.ini file](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#the-phpini-file)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#overview)

* * *

[PHP modules](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#php-modules)

* * *

[PEAR and PECL modules](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#pear-and-pecl-modules)

* * *

[Removed modules](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#removed-modules)

* * *

[PHP loaders](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#php-loaders)

* * *

[PHP and SQL libraries](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#php-and-sql-libraries)

* * *

[The php.ini file](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/#the-phpini-file)

* * *

## cPanel PHP

_Valid for versions 110 through 116_

#### Version:

#### [110](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/)

#### [118](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/118/)

#### [130](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/)

Last modified: _2024 September 26_

* * *

## Overview

cPanel & WHM includes PHP 8.1 and its modules as a set of packages. This includes the associated PEAR and PECL packages and PHP loaders.

- PEAR and PECL packages are software components from the PHP Extension and Application Repository (PEAR) and the PHP Extension Community Library (PECL).
- A PHP loader allows PHP to execute encoded applications. Loaders ensure that others cannot access your PHP code.

Note:

These are cPanel & WHM’s internal PHP packages. To view EasyApache 4’s PHP packages, read our [PHP Options](https://docs.cpanel.net/ea4/php/php-options/) documentation.

## PHP modules

The PHP binary includes the following PHP modules:

- `bcmath`
- `bz2`
- `Core`
- `ctype`
- `curl`
- `date`
- `dom`
- `fileinfo`
- `filter`
- `ftp`
- `gd`
- `gettext`
- `hash`
- `iconv`
- `imap`
- `intl`
- `json`
- `ldap`
- `libxml`
- `mbstring`
- `mysqli`
- `mysqlnd`
- `openssl`
- `pcntl`
- `pcre`
- `PDO`
- `pdo_mysql`
- `pdo_pgsql`
- `pdo_sqlite`
- `pgsql`
- `Phar`
- `posix`
- `Reflection`
- `session`
- `SimpleXML`
- `soap`
- `sockets`
- `SPL`
- `sqlite3`
- `standard`
- `sysvsem`
- `sysvshm`
- `tidy`
- `tokenizer`
- `xml`
- `xmlreader`
- `xmlwriter`
- `xsl`
- `zip`
- `zlib`

## PEAR and PECL modules

cPanel & WHM includes the following PEAR and PECL modules:

- `Auth_SASL2`
- `Cache`
- `Console_Color`
- `Console_Table`
- `Content`
- `Date`
- `Date_Holidays`
- `Date_Holidays_Australia`
- `Date_Holidays_Austria`
- `Date_Holidays_Brazil`
- `Date_Holidays_Croatia`
- `Date_Holidays_Czech`
- `Date_Holidays_Denmark`
- `Date_Holidays_EnglandWales`
- `Date_Holidays_Finland`
- `Date_Holidays_Germany`
- `Date_Holidays_Iceland`
- `Date_Holidays_Ireland`
- `Date_Holidays_Italy`
- `Date_Holidays_Japan`
- `Date_Holidays_Netherlands`
- `Date_Holidays_Norway`
- `Date_Holidays_PHPdotNet`
- `Date_Holidays_Portugal`
- `Date_Holidays_Romania`
- `Date_Holidays_Russia`
- `Date_Holidays_SanMarino`
- `Date_Holidays_Serbia`
- `Date_Holidays_Slovenia`
- `Date_Holidays_Spain`
- `Date_Holidays_Sweden`
- `Date_Holidays_Turkey`
- `Date_Holidays_Ukraine`
- `Date_Holidays_UNO`
- `Date_Holidays_USA`
- `Date_Holidays_Venezuela`
- `File`
- `File_Find`
- `File_Fstab`
- `HTML_Template_IT`
- `HTTP`
- `HTTP_Request`
- `HTTP_WebDAV_Server`
- `Log`
- `Mail`
- `Mail_Mime`
- `MDB2`
- `Net_DNS2`
- `Net_FTP`
- `Net_IMAP`
- `Net_SMTP`
- `Net_Socket`
- `Net_URL`
- `Net_UserAgent_Detect`
- `PEAR_Command_Packaging`
- `Services_Weather`
- `SOAP`
- `Text_Figlet`
- `XML_Parser`
- `XML_RPC`
- `XML_Serializer`
- `XML_SVG`

## Removed modules

We **removed** the following modules, which do **not** support PHP 8 or higher:

- All Horde-provided modules. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan) documentation.
- The `Auth_SASL` PEAR module. Use the [`Auth_SASL2`](https://pear.php.net/package/Auth_SASL2) PEAR module.
- The `Console_GetOpt` PEAR module.
- The `DB2` PEAR module. Use the [`MDB2`](https://pear.php.net/package/MDB2) PEAR module.
- The `xmlrpc` PHP module. Use the [`XML_RPC`](https://pear.php.net/package/XML_RPC) PEAR module.

## PHP loaders

cPanel & WHM includes the following PHP loaders:

- `ioncube`
- `sourceguardian`

For more information about the cPanel PHP loader option, read the PHP section of our [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) documentation.

## PHP and SQL libraries

The PHP binary links to both the PostgreSQL® and SQLite libraries.

## The php.ini file

cPanel & WHM PHP uses a `php.ini` file to customize internal PHP settings.

Important:

- If you edit the cPanel & WHM `php.ini` file directly, the system will overwrite your changes. Use the _PHP_ section of the [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#php) interface ( _WHM » Home » Server Configuration » Tweak Settings_) to retain changes to cPanel & WHM’s `php.ini` file.
- This file is **not** the EasyApache 4 `php.ini` file. To learn more about your EasyApache 4 `php.ini` files, read our [About PHP](https://docs.cpanel.net/ea4/php/about-php/) documentation.

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [cPanel PHP](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Notification Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×