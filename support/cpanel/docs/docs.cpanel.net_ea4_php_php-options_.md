---
url: "https://docs.cpanel.net/ea4/php/php-options/"
title: "PHP Options | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/php/php-options/#main-content)

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
4. PHP Options


[ea4](https://docs.cpanel.net/tags/ea4/) [phpoptions](https://docs.cpanel.net/tags/phpoptions/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/php/php-options/#overview)

* * *

[Current PHP versions](https://docs.cpanel.net/ea4/php/php-options/#current-php-versions)

* * *

[Opcode cachers](https://docs.cpanel.net/ea4/php/php-options/#opcode-cachers)

* * *

[PHP loaders or encoders](https://docs.cpanel.net/ea4/php/php-options/#php-loaders-or-encoders)

* * *

[PHP extensions](https://docs.cpanel.net/ea4/php/php-options/#php-extensions)

* * *

[Legacy PHP versions](https://docs.cpanel.net/ea4/php/php-options/#legacy-php-versions)

* * *

[Opcode cachers for legacy PHP versions](https://docs.cpanel.net/ea4/php/php-options/#opcode-cachers-for-legacy-php-versions)

* * *

[PHP loaders or encoders for legacy PHP versions](https://docs.cpanel.net/ea4/php/php-options/#php-loaders-or-encoders-for-legacy-php-versions)

* * *

[PHP extensions for legacy PHP versions](https://docs.cpanel.net/ea4/php/php-options/#php-extensions-for-legacy-php-versions)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/php/php-options/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/php/php-options/#overview)

* * *

[Current PHP versions](https://docs.cpanel.net/ea4/php/php-options/#current-php-versions)

* * *

[Opcode cachers](https://docs.cpanel.net/ea4/php/php-options/#opcode-cachers)

* * *

[PHP loaders or encoders](https://docs.cpanel.net/ea4/php/php-options/#php-loaders-or-encoders)

* * *

[PHP extensions](https://docs.cpanel.net/ea4/php/php-options/#php-extensions)

* * *

[Legacy PHP versions](https://docs.cpanel.net/ea4/php/php-options/#legacy-php-versions)

* * *

[Opcode cachers for legacy PHP versions](https://docs.cpanel.net/ea4/php/php-options/#opcode-cachers-for-legacy-php-versions)

* * *

[PHP loaders or encoders for legacy PHP versions](https://docs.cpanel.net/ea4/php/php-options/#php-loaders-or-encoders-for-legacy-php-versions)

* * *

[PHP extensions for legacy PHP versions](https://docs.cpanel.net/ea4/php/php-options/#php-extensions-for-legacy-php-versions)

* * *

## PHP Options

Last modified: _2024 October 17_

* * *

## Overview

This document lists the PHP options available in EasyApache 4. Select the PHP extensions that you wish to use in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_) or use your [package manager](https://docs.cpanel.net/ea4/basics/package-manager-basics). For more information about how to install a PHP package, read our [How to Locate and Install a PHP Version or Extension](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension) documentation.

EasyApache 4 adheres to the [php.net supported versions timeline](https://php.net/supported-versions.php). The profiles that we supply in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_) **only** provide PHP versions that [php.net](https://www.php.net/) currently supports.

- If your server runs [AlmaLinux](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/) or [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/), you **cannot** use PHP 7.1 or earlier.
- If your server runs [Ubuntu®](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/), you **cannot** use PHP 7.2 or earlier.
- Packages for unsupported versions of PHP will remain on the WebPros International, LLC mirrors and servers, but we will **not** provide any further updates.

Note:

To determine which package installs a specific extension, use the `repoquery` command. Use the following command to run the query, where `ea-php81-php-mysqli` represents the extension that you wish to install:

```bash
repoquery -q -\-whatprovides 'ea-php81-php-mysqli' | sort -V | tail -1
```

## Current PHP versions

Current versions of PHP include PHP versions 8.1, 8.2, 8.3, and 8.4. Unless otherwise noted, the following options support **all** current versions of PHP.

### Opcode cachers

An opcode cacher improves the efficiency of your PHP applications but also uses more memory. EasyApache 4 currently **only** supports the [OPCache](http://php.net/manual/en/book.opcache.php) opcode cacher.

Warning:

- Opcode caching programs are **not** compatible with the suPHP or CGI PHP handlers. The caching program either does not function, or functions incorrectly.
- The system does **not** automatically configure OPCache. If you do **not** manually configure OPCache after you install it, it will provide no benefits.

### PHP loaders or encoders

A PHP loader allows PHP to execute encoded applications. This ensures that others cannot access your code. You can use **one** of the following options to install a PHP loader on your web server:

- [SourceGuardian Loader](https://www.sourceguardian.com/support.html)
- [ionCube Loader](https://www.ioncube.com/about.php)

### PHP extensions

PHP provides many built-in extensions. You can use these extensions to add functionality to your PHP applications or your web server.

| Extension | Description |
| --- | --- |
| [`argon2`](https://github.com/p-h-c/phc-winner-argon2) | Argon2 password hashing algorithm. |
| [`bcmath`](http://php.net/manual/en/book.bc.php) | Arbitrary precision mathematics. The _Default_ profile includes this extension. |
| [`bz2`](http://php.net/manual/en/book.bzip2.php) | Read and write bzip2 (`.bz2`) compressed files. |
| [`calendar`](https://www.php.net/manual/en/book.calendar.php) | Convert between different calendar formats. The _Default_ profile includes this extension. |
| [`ctype`](http://php.net/manual/en/book.ctype.php) | Check whether a character is a certain character class. |
| [`curl`](http://php.net/manual/en/book.curl.php) | Support for the Client URL library (cURL) . The _Default_ profile includes this extension. <br>Note:<br>You **must** install the `mod_http2` Apache module for HTTP/2 support. |
| [`date`](http://php.net/manual/en/book.datetime.php) | Get the server date and time. |
| [`dba`](http://php.net/manual/en/book.dba.php) | Access Berkeley DB-style databases. |
| [`dbg`](https://www.php.net/manual/en/book.phpdbg.php) | PHP debugger. |
| [`dom`](http://php.net/manual/en/book.dom.php) | Use the DOM API with PHP. |
| [`enchant`](http://php.net/manual/en/book.enchant.php) | PHP binding for the Enchant spelling library. |
| [`exif`](http://php.net/manual/en/book.exif.php) | Parse image metadata. |
| [`fileinfo`](http://php.net/manual/en/book.fileinfo.php) | Detect a file’s content type and encoding. |
| [`filter`](http://php.net/manual/en/book.filter.php) | Filter data by validating or sanitizing. |
| [`fpm`](https://php-fpm.org/) | FastCGI Process Manager. The _Default_ profile includes this extension. |
| [`ftp`](http://php.net/manual/en/book.ftp.php) | FTP (File Transfer Protocol) support. The _Default_ profile includes this extension. |
| [`gd`](http://php.net/manual/en/book.image.php) | Create and manipulate image files. The _Default_ profile includes this extension. <br>Note:<br>This extension supports the AVIF image format on PHP version 8.1 and higher. This applies to servers that run AlmaLinux 8 or higher, RockyLinux 8 or higher, or Ubuntu® 22.04 or higher. |
| [`gettext`](http://php.net/manual/en/book.gettext.php) | Native language support API. |
| [`gmp`](http://php.net/manual/en/book.gmp.php) | Use GNU multiple precision library to work with arbitrary-length integers. |
| [`hash`](http://php.net/manual/en/book.hash.php) | Message digest (hash) engine. |
| [`iconv`](http://php.net/manual/en/book.iconv.php) | Character set conversion. The _Default_ profile includes this extension. |
| [`imap`](http://php.net/manual/en/book.imap.php) | Mail functions (`SMTP`, `POP3`, `IMAP`). The _Default_ profile includes this extension for PHP versions prior to 8.3. This extension conflicts with the `recode` extension. In PHP 8.4 and later, the IMAP module **only** exists as a [PECL extension](https://docs.cpanel.net/ea4/php/about-php/#modify-php). For more information, read our [PHP Module: IMAP](https://docs.cpanel.net/ea4/php/php-module-imap/) documentation. |
| [`intl`](http://php.net/manual/en/intro.intl.php) | Internationalization wrapper for the ICU library. |
| [`json`](http://php.net/manual/en/book.json.php) | JavaScript Object Notation (JSON). PHP 8.0 and later include JSON in the Core module. |
| [`ldap`](http://php.net/manual/en/book.ldap.php) | Lightweight directory access protocol. |
| [`libxml`](http://php.net/manual/en/book.libxml.php) | XML library for PHP. |
| [`litespeed`](https://www.litespeedtech.com/support/wiki/doku.php/litespeed_wiki:php) | Litespeed SAPI. The _Default_ profile includes this extension. |
| [`mbregex`](https://www.php.net/manual/en/mbstring.installation.php) | Disable regular expression functions with multibyte character support. |
| [`mbstring`](https://www.php.net/manual/en/book.mbstring.php) | Enhanced Chinese, Japanese, and other language support. The _Default_ profile includes this extension. |
| [`mcrypt`](http://php.net/manual/en/book.mcrypt.php) | Encryption support. The _Default_ profile includes this extension. In PHP 7.2 and later, the `mcrypt` module **only** exists as a [PECL extension](https://docs.cpanel.net/ea4/php/about-php/#modify-php). |
| [`mhash`](http://php.net/manual/en/book.mhash.php) | Interface for the Mhash library. |
| [`mysqli`](http://php.net/manual/en/book.mysqli.php) | MySQL improved database access. |
| [`mysqlnd`](http://php.net/manual/en/book.mysqlnd.php) | MySQL native driver. The _Default_ profile includes this extension. The `mysqlnd` module does **not** support old pre-MySQL 4.1 passwords. |
| [`odbc`](http://php.net/manual/en/book.uodbc.php) | Unified ODBC database support. |
| [`openssl`](http://php.net/manual/en/book.openssl.php) | OpenSSL library interface. |
| [`pcntl`](http://php.net/manual/en/book.pcntl.php) | Unix-style process control. |
| [`pcre`](http://php.net/manual/en/book.pcre.php) | Perl-compatible regular expressions.<br>Note:<br>You **cannot** use PCRE on a system that runs CentOS 7. |
| [`pdo`](https://www.php.net/manual/en/book.pdo.php) | PHP Data Objects (PDO) database support. The _Default_ profile includes this extension. |
| [`pdo mysql`](http://php.net/manual/en/ref.pdo-mysql.php) | PDO MySQL support. |
| [`pdo_odbc`](http://php.net/manual/en/ref.pdo-odbc.php) | PDO ODBC support. |
| [`pdo_pgsql`](http://php.net/manual/en/ref.pdo-pgsql.php) | PDO PostgreSQL support. |
| [`pdo_sqlite`](http://php.net/manual/en/ref.pdo-sqlite.php) | Enable access to SQLite 3 databases. |
| [`pgsql`](http://php.net/manual/en/book.pgsql.php) | PostgreSQL DB support. |
| [`phar`](http://php.net/manual/en/book.phar.php) | Disable Phar functionality. The _Default_ profile includes this extension. |
| [`posix`](http://php.net/manual/en/book.posix.php) | Extended POSIX support. The _Default_ profile includes this extension. |
| [`pspell`](http://php.net/manual/en/book.pspell.php) | Check the spelling of a word and offer suggestions. In PHP 8.4 and later, the `pspell` module **only** exists as a [PECL extension](https://docs.cpanel.net/ea4/php/about-php/#modify-php). For more information, read our [PHP Module: PSpell](https://docs.cpanel.net/ea4/php/php-module-pspell/) documentation. |
| [`readline`](http://php.net/manual/en/book.readline.php) | Interface for the GNU Readline library. |
| [`reflection`](http://php.net/manual/en/book.reflection.php) | Reverse-engineer classes, interfaces, functions, methods, and extensions. |
| [`session`](http://php.net/manual/en/book.session.php) | Session support for PHP. |
| [`shmop`](http://php.net/manual/en/book.shmop.php) | Allow PHP to read, write, create, and delete Unix shared-memory segments. |
| [`simplexml`](http://php.net/manual/en/book.simplexml.php) | SimpleXML support. |
| [`snmp`](http://php.net/manual/en/book.snmp.php) | SNMP (Simple Network Management Protocol) support. |
| [`soap`](http://php.net/manual/en/book.soap.php) | SOAP server and client support. |
| [`sockets`](http://php.net/manual/en/book.sockets.php) | Raw socket support. The _Default_ profile includes this extension. |
| [`sodium`](https://www.php.net/manual/en/book.sodium.php) | The Sodium encryption library. This extension is **only** available for PHP 7.4 and later. |
| [`spl`](http://php.net/manual/en/book.spl.php) | Standard PHP library. |
| [`sqlite3`](https://php.net/manual/en/book.sqlite3.php) | SQLite version 3 database support. |
| [`sysvmsg`](http://php.net/manual/en/sem.installation.php) | Enable System V messages support. |
| [`sysvsem`](http://php.net/manual/en/sem.installation.php) | Enable System V semaphore support . |
| [`sysvshm`](http://php.net/manual/en/sem.installation.php) | Enable System V shared memory support. |
| [`tidy`](http://php.net/manual/en/book.tidy.php) | Tidy HTML formatter. |
| [`tokenizer`](http://php.net/manual/en/book.tokenizer.php) | PHP tokenizer functionality. |
| [`xml`](http://php.net/manual/en/book.xml.php) | XML support. The _Default_ profile includes this extension. |
| [`xmlreader`](http://php.net/manual/en/book.xmlreader.php) | XML Pull parser. |
| [`xmlwriter`](http://php.net/manual/en/book.xmlwriter.php) | XML writer extension. |
| [`xsl`](http://php.net/manual/en/book.xsl.php) | XSL support. |
| [`zip`](http://php.net/manual/en/book.zip.php) | Read and write zip archives. The _Default_ profile includes this extension. |
| [`zlib`](http://php.net/manual/en/book.zlib.php) | Read and write gzip archives. |

## Legacy PHP versions

Legacy versions of PHP include PHP versions 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, and 8.0.

Unless otherwise noted, the following options support all legacy versions of PHP.

### Opcode cachers for legacy PHP versions

An opcode cacher improves the efficiency of your PHP applications but also uses more memory.

EasyApache 4 currently **only** supports the [OPCache](http://php.net/manual/en/book.opcache.php) opcode cacher.

Warning:

- Opcode caching programs are **not** compatible with the suPHP or CGI PHP handlers. The caching program either does not function, or functions incorrectly.
- The system does **not** automatically configure OPCache. If you do **not** manually configure OPCache after you install it, it will provide no benefits.

### PHP loaders or encoders for legacy PHP versions

A PHP loader allows PHP to execute encoded applications. This ensures that others cannot access your code. You can use **one** of the following options to install a PHP loader on your web server:

- [SourceGuardian Loader](https://www.sourceguardian.com/support.html)
- [ionCube Loader](https://www.ioncube.com/about.php)


Note:





- You **cannot** use ionCube Loader 4 with PHP version 7.0 or later.
- You **cannot** use ionCube Loader 5 with PHP version 7.0 or later.
- You **cannot** use ionCube Loader 6 with PHP version 7.1 or later.
- You can **only** use ionCube 11 with PHP 7.4.

- [Zen Guard Loader](http://files.zend.com/help/Zend-Guard/zend-guard.htm) — You **cannot** use Zend Guard Loader with PHP version 7.0 or later.

Note:

- The Apache information page incorrectly displays Zend Guard Loader as version 3.3. Your version of PHP determines the version of Zend Guard Loader that the system actually uses.
  - If you use PHP versions 5.5 or 5.6, EasyApache uses Zend Guard Loader version 7.0.
  - If you use PHP version 5.4, EasyApache uses Zend Guard Loader version 6.0.
- The IonCube configuration file name varies based on the version of PHP that you use.
  - If you use PHP versions 5.4 or 5.5, IonCube uses the the `ioncube.ini` file.
  - If you use PHP version 5.6, IonCube uses the `01-ioncube.ini` file.
- You **cannot** use multiple versions of ionCube simultaneously.

### PHP extensions for legacy PHP versions

PHP provides many built-in extensions. You can use these extensions to add functionality to your PHP applications or your web server.

| Extension | Description |
| --- | --- |
| [`argon2`](https://github.com/p-h-c/phc-winner-argon2) | Argon2 password hashing algorithm. This extension is **only** available for PHP 7.2 and later. |
| [`bcmath`](http://php.net/manual/en/book.bc.php) | Arbitrary precision mathematics. The _Default_ profile includes this extension. |
| [`bz2`](http://php.net/manual/en/book.bzip2.php) | Read and write bzip2 (`.bz2`) compressed files. |
| [`calendar`](https://www.php.net/manual/en/book.calendar.php) | Convert between different calendar formats. The _Default_ profile includes this extension. |
| [`ctype`](http://php.net/manual/en/book.ctype.php) | Check whether a character is a certain character class. |
| [`curl`](http://php.net/manual/en/book.curl.php) | Support for the Client URL library (cURL) . The _Default_ profile includes this extension. <br>Note:<br>You **must** install the `mod_http2` Apache module for HTTP/2 support. |
| [`date`](http://php.net/manual/en/book.datetime.php) | Get the server date and time. |
| [`dba`](http://php.net/manual/en/book.dba.php) | Access Berkeley DB-style databases. |
| [`dbg`](https://www.php.net/manual/en/book.phpdbg.php) | PHP debugger. This extension is **only** available in PHP 7.0 and later. |
| [`dom`](http://php.net/manual/en/book.dom.php) | Use the DOM API with PHP. |
| [`enchant`](http://php.net/manual/en/book.enchant.php) | PHP binding for the Enchant spelling library. |
| [`exif`](http://php.net/manual/en/book.exif.php) | Parse image metadata. |
| [`fileinfo`](http://php.net/manual/en/book.fileinfo.php) | Detect a file’s content type and encoding. |
| [`filter`](http://php.net/manual/en/book.filter.php) | Filter data by validating or sanitizing. |
| [`fpm`](https://php-fpm.org/) | FastCGI Process Manager. The _Default_ profile includes this extension. |
| [`ftp`](http://php.net/manual/en/book.ftp.php) | FTP (File Transfer Protocol) support. The _Default_ profile includes this extension. |
| [`gd`](http://php.net/manual/en/book.image.php) | Create and manipulate image files. The _Default_ profile includes this extension. |
| [`gettext`](http://php.net/manual/en/book.gettext.php) | Native language support API. |
| [`gmp`](http://php.net/manual/en/book.gmp.php) | Use GNU multiple precision library to work with arbitrary-length integers. |
| [`hash`](http://php.net/manual/en/book.hash.php) | Message digest (hash) engine. |
| [`iconv`](http://php.net/manual/en/book.iconv.php) | Character set conversion. The _Default_ profile includes this extension. |
| [`imap`](http://php.net/manual/en/book.imap.php) | Mail functions (`SMTP`, `POP3`, `IMAP`). The _Default_ profile includes this extension. This extension conflicts with the `recode` extension. |
| [`intl`](http://php.net/manual/en/intro.intl.php) | Internationalization wrapper for the ICU library. |
| [`json`](http://php.net/manual/en/book.json.php) | JavaScript Object Notation (JSON). PHP 8.0 and later include JSON in the Core module. |
| [`ldap`](http://php.net/manual/en/book.ldap.php) | Lightweight directory access protocol. |
| [`libxml`](http://php.net/manual/en/book.libxml.php) | XML library for PHP. |
| [`litespeed`](https://www.litespeedtech.com/support/wiki/doku.php/litespeed_wiki:php) | Litespeed SAPI. The _Default_ profile includes this extension. |
| [`mbregex`](https://www.php.net/manual/en/mbstring.installation.php) | Disable regular expression functions with multibyte character support. |
| [`mbstring`](https://www.php.net/manual/en/book.mbstring.php) | Enhanced Chinese, Japanese, and other language support. The _Default_ profile includes this extension. |
| [`mcrypt`](http://php.net/manual/en/book.mcrypt.php) | Encryption support. The _Default_ profile includes this extension. In PHP 7.2 and later, the `mcrypt` module **only** exists as a [PECL extension](https://docs.cpanel.net/ea4/php/about-php/#modify-php). |
| [`mhash`](http://php.net/manual/en/book.mhash.php) | Interface for the Mhash library. |
| `mssql` | MSSQL® database access. This extension is **only** available in PHP 5.6 and earlier. |
| [`mysql`](http://php.net/manual/en/book.mysql.php) | The original MySQL API database access. This extension is **only** available in PHP 5.6 and earlier. |
| [`mysqli`](http://php.net/manual/en/book.mysqli.php) | MySQL improved database access. |
| [`mysqlnd`](http://php.net/manual/en/book.mysqlnd.php) | MySQL native driver. The _Default_ profile includes this extension. The `mysqlnd` module does **not** support old pre-MySQL 4.1 passwords. |
| [`odbc`](http://php.net/manual/en/book.uodbc.php) | Unified ODBC database support. |
| [`openssl`](http://php.net/manual/en/book.openssl.php) | OpenSSL library interface. |
| [`pcntl`](http://php.net/manual/en/book.pcntl.php) | Unix-style process control. |
| [`pcre`](http://php.net/manual/en/book.pcre.php) | Perl-compatible regular expressions. |
| [`pdo`](https://www.php.net/manual/en/book.pdo.php) | PHP Data Objects (PDO) database support. The _Default_ profile includes this extension. |
| [`pdo mysql`](http://php.net/manual/en/ref.pdo-mysql.php) | PDO MySQL support. |
| [`pdo_odbc`](http://php.net/manual/en/ref.pdo-odbc.php) | PDO ODBC support. |
| [`pdo_pgsql`](http://php.net/manual/en/ref.pdo-pgsql.php) | PDO PostgreSQL support. |
| [`pdo_sqlite`](http://php.net/manual/en/ref.pdo-sqlite.php) | Enable access to SQLite 3 databases. |
| [`pgsql`](http://php.net/manual/en/book.pgsql.php) | PostgreSQL DB support. |
| [`phalcon`](https://docs.phalconphp.com/en/3.2) | Phalcon 3 extension support. This extension is **only** available for PHP versions 5.5 through 7.3. |
| [`phar`](http://php.net/manual/en/book.phar.php) | Disable Phar functionality. The _Default_ profile includes this extension. |
| [`posix`](http://php.net/manual/en/book.posix.php) | Extended POSIX support. The _Default_ profile includes this extension. |
| [`pspell`](http://php.net/manual/en/book.pspell.php) | Check the spelling of a word and offer suggestions. |
| [`readline`](http://php.net/manual/en/book.readline.php) | Interface for the GNU Readline library. |
| [`recode`](http://php.net/manual/en/book.recode.php) | Interface for the GNU Recode library. This extension is **only** available for PHP 7.3 and earlier. It conflicts with the `imap` extension. |
| [`reflection`](http://php.net/manual/en/book.reflection.php) | Reverse-engineer classes, interfaces, functions, methods, and extensions. |
| [`session`](http://php.net/manual/en/book.session.php) | Session support for PHP. |
| [`shmop`](http://php.net/manual/en/book.shmop.php) | Allow PHP to read, write, create, and delete Unix shared-memory segments. |
| [`simplexml`](http://php.net/manual/en/book.simplexml.php) | SimpleXML support. |
| [`snmp`](http://php.net/manual/en/book.snmp.php) | SNMP (Simple Network Management Protocol) support. |
| [`soap`](http://php.net/manual/en/book.soap.php) | SOAP server and client support. |
| [`sockets`](http://php.net/manual/en/book.sockets.php) | Raw socket support. The _Default_ profile in includes this extension. |
| [`sodium`](https://www.php.net/manual/en/book.sodium.php) | The Sodium encryption library. This extension is **only** available for PHP 7.4 and later. |
| [`spl`](http://php.net/manual/en/book.spl.php) | Standard PHP library. |
| [`sqlite3`](https://php.net/manual/en/book.sqlite3.php) | SQLite version 3 database support. |
| [`suhosin`](https://suhosin5.suhosin.org/stories/index.html) | Improves the security of PHP installations. This extension is **only** available for PHP 5.6 or earlier. |
| [`sysvmsg`](http://php.net/manual/en/sem.installation.php) | Enable System V messages support. |
| [`sysvsem`](http://php.net/manual/en/sem.installation.php) | Enable System V semaphore support . |
| [`sysvshm`](http://php.net/manual/en/sem.installation.php) | Enable System V shared memory support. |
| [`tidy`](http://php.net/manual/en/book.tidy.php) | Tidy HTML formatter. |
| [`tokenizer`](http://php.net/manual/en/book.tokenizer.php) | PHP tokenizer functionality. |
| [`wddx`](http://php.net/manual/en/book.wddx.php) | WDDX support. This extension is **only** available for PHP 7.3 and earlier. |
| [`xml`](http://php.net/manual/en/book.xml.php) | XML support. The _Default_ profile includes this extension. |
| [`xmlreader`](http://php.net/manual/en/book.xmlreader.php) | XML Pull parser. |
| [`xmlrpc`](http://php.net/manual/en/book.xmlrpc.php) | XMLRPC client and server support. This extension is **only** available for PHP 7.4 and earlier. |
| [`xmlwriter`](http://php.net/manual/en/book.xmlwriter.php) | XML writer extension. |
| [`xsl`](http://php.net/manual/en/book.xsl.php) | XSL support. |
| [`zip`](http://php.net/manual/en/book.zip.php) | Read and write zip archives. |
| [`zlib`](http://php.net/manual/en/book.zlib.php) | Read and write gzip archives. |

#### Additional Documentation

* * *

- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)
- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [PHP Extensions and Applications Package](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/)
- [The rebuild\_phpconf Script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×