---
url: "https://docs.cpanel.net/knowledge-base/web-services/create-custom-php-directives/"
title: "Create Custom PHP Directives | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/create-custom-php-directives/#main-content)

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
3. [Web Services](https://docs.cpanel.net/knowledge-base/web-services/)
4. Create Custom PHP Directives


[php](https://docs.cpanel.net/tags/php/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/create-custom-php-directives/#overview)

* * *

[How to add a custom PHP directive](https://docs.cpanel.net/knowledge-base/web-services/create-custom-php-directives/#how-to-add-a-custom-php-directive)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/create-custom-php-directives/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/create-custom-php-directives/#overview)

* * *

[How to add a custom PHP directive](https://docs.cpanel.net/knowledge-base/web-services/create-custom-php-directives/#how-to-add-a-custom-php-directive)

* * *

## Create Custom PHP Directives

Last modified: _2020 September 28_

* * *

## Overview

Important:

This document **only** applies to systems that run EasyApache 4.


This document explains how to add custom PHP INI directives to your system’s PHP configuration. This ensures that you can manage them in the _Editor Mode_ of WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor/) interface ( _WHM » Home » Software » MultiPHP INI Editor_).

If your system requires extra PHP configuration, you may wish to create custom PHP directives. If you want the system to validate your custom directives, you **must** add them to the `/etc/cpanel/ea4/phpini_directives` directory.

## How to add a custom PHP directive

To add a custom PHP directive, perform the following steps:

1. Create the `/etc/cpanel/ea4/phpini_directives` directory if it does not already exist.

2. Inside the directory, create a `.yaml` file that contains a hash of the directives that you wish to add **inside** the directives key.






Important:




The hash inside your `.yaml` file’s directives key must use the same format as the `/usr/local/cpanel/whostmgr/etc/phpini_directives.yaml` file.



Your file might resemble the following example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>``` | ```go<br>directives:<br>  directive_foo:<br>    changeable: PHP_INI_ALL<br>    default: foo<br>    multiple: 0<br>    note: '...'<br>    section: '...'<br>    type: string<br>  directive_bar:<br>    changeable: PHP_INI_PERDIR<br>    default: 1<br>    multiple: 0<br>    note: '...'<br>    deprecated: 5.4.0<br>    section: '...'<br>    type: boolean<br>``` |

Note:

- If your new directive already exists, the system ignores it.
- The system reads the `/usr/local/cpanel/whostmgr/etc/phpini_directives.yaml` file first, and then reads the files in the `/etc/cpanel/ea4/phpini_directives` directory in ASCII order. It will use the first occurrence of any directive that it reads from a `.yaml` file.

#### Additional Documentation

* * *

- [Module Installers](https://docs.cpanel.net/whm/software/module-installers/)
- [MultiPHP INI Editor for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/)
- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [MultiPHP Manager for WHM — System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×