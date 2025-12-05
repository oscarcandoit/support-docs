---
url: "https://docs.cpanel.net/knowledge-base/scripts-and-utilities/the-scl-utility/"
title: "The scl Utility | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/the-scl-utility/#main-content)

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
3. [Scripts and Utilities](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/)
4. The scl Utility


[ea4](https://docs.cpanel.net/tags/ea4/) [php](https://docs.cpanel.net/tags/php/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/the-scl-utility/#overview)

* * *

[The scl Utility](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/the-scl-utility/#the-scl-utility)

* * *

[Example](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/the-scl-utility/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/the-scl-utility/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/the-scl-utility/#overview)

* * *

[The scl Utility](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/the-scl-utility/#the-scl-utility)

* * *

[Example](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/the-scl-utility/#example)

* * *

## The scl Utility

Last modified: _2025 February 13_

* * *

## Overview

To manage software packages in a Software Collection Library (SCL) environment via the command line, use the `scl` utility.

EasyApache 4 (EA4) uses SCLs for PHP versions. SCLs allow multiple concurrent software packages to reside on your file system. You can use this utility if you run multiple websites that require different PHP versions.

For more information about EasyApache, read our [About EasyApache 4](https://docs.cpanel.net/ea4/basics/about-easyapache-4/) documentation.

## The `scl` Utility

The `scl` utility uses the following syntax:

```perl
scl option action library 'command'
```

| Variable | Description | Possible values | Example |
| --- | --- | --- | --- |
| `option` | The desired option. | - `-l`,` --list` — List the server’s available software package collections.<br>- `-h`, `-help` — Display the `scl` utility’s help output. | `-l` |
| `action` | The action to perform. | - `enable`<br>- `register`<br>- `deregister` | `enable` |
| `library` | The SCL. | - A valid PHP software collection.<br>- An absolute filepath to the software collection.<br>  <br>  <br>  <br>  <br>  <br>  Important:<br>  <br>  <br>  <br>  <br>  If you use the register or deregister variable, you **must** pass the SCL’s absolute filepath. The SCLs reside in the `/opt/cpanel/ea-phpxx/root/usr/bin` directory, where `xx` represents the `ea-php` version. | `ea-php70` |
| `'command'` | The command to run in the SCL environment. | For a list of valid commands, run the `php --help` or `pecl --help` commands. | `'php -m'` |

## Example

To view the `ea-php70` SCL modules, run the following command:

```perl
scl enable ea-php70 'php -m'
```

The output will resemble the following example:

[Click to view...](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/the-scl-utility/#click-to-view---1764175698174395424)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>``` | ```go<br>[PHP Modules]<br>bcmath<br>calendar<br>Core<br>ctype<br>curl<br>date<br>dom<br>filter<br>ftp<br>gd<br>hash<br>imap<br>json<br>libxml<br>mcrypt<br>mysqli<br>mysqlnd<br>openssl<br>pcntl<br>pcre<br>PDO<br>pdo_mysql<br>pdo_sqlite<br>Phar<br>posix<br>readline<br>Reflection<br>session<br>SimpleXML<br>sockets<br>SPL<br>sqlite3<br>standard<br>tokenizer<br>wddx<br>xml<br>xmlreader<br>xmlwriter<br>xsl<br>zlib<br>``` |

#### Additional Documentation

* * *

- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)
- [Module Installers](https://docs.cpanel.net/whm/software/module-installers/)
- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [The rebuild\_phpconf Script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×