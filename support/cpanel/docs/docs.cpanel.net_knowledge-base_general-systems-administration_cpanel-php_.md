---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/"
title: "cPanel PHP | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/#main-content)

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

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/#overview)

* * *

[PHP modules](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/#php-modules)

* * *

[PEAR and PECL modules](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/#pear-and-pecl-modules)

* * *

[PHP loaders](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/#php-loaders)

* * *

[PHP and SQL libraries](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/#php-and-sql-libraries)

* * *

[The php.ini file](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/#the-phpini-file)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/#overview)

* * *

[PHP modules](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/#php-modules)

* * *

[PEAR and PECL modules](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/#pear-and-pecl-modules)

* * *

[PHP loaders](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/#php-loaders)

* * *

[PHP and SQL libraries](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/#php-and-sql-libraries)

* * *

[The php.ini file](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/#the-phpini-file)

* * *

## cPanel PHP

_Valid for versions 130 through the latest version_

#### Version:

#### [110](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110/)

#### [118](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/118/)

#### [130](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/)

Last modified: _2025 June 23_

* * *

## Overview

cPanel & WHM includes PHP 8.4 and its modules as a set of packages. This includes the associated PEAR and PECL packages and PHP loaders.

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
- `random`
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

- `Archive_Tar`
- `Auth_SASL2`
- `Cache`
- `Console_Color`
- `Console_Getopt`
- `Console_Table`
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
- `Net_URL2`
- `Net_UserAgent_Detect`
- `PEAR`
- `PEAR_Command_Packaging`
- `Services_Weather`
- `Text_Figlet`
- `XML_Parser`
- `XML_RPC`
- `XML_Serializer`
- `XML_SVG`
- `XML_Util`

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
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Notification Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/)
- [Service Proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×