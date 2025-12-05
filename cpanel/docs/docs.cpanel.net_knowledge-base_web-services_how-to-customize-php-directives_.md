---
url: "https://docs.cpanel.net/knowledge-base/web-services/how-to-customize-php-directives/"
title: "How to Customize PHP Directives | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/how-to-customize-php-directives/#main-content)

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
4. How to Customize PHP Directives


[php](https://docs.cpanel.net/tags/php/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-customize-php-directives/#overview)

* * *

[System requirements](https://docs.cpanel.net/knowledge-base/web-services/how-to-customize-php-directives/#system-requirements)

* * *

[Configuration requirements](https://docs.cpanel.net/knowledge-base/web-services/how-to-customize-php-directives/#configuration-requirements)

* * *

[User ini file setup](https://docs.cpanel.net/knowledge-base/web-services/how-to-customize-php-directives/#user-ini-file-setup)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/how-to-customize-php-directives/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-customize-php-directives/#overview)

* * *

[System requirements](https://docs.cpanel.net/knowledge-base/web-services/how-to-customize-php-directives/#system-requirements)

* * *

[Configuration requirements](https://docs.cpanel.net/knowledge-base/web-services/how-to-customize-php-directives/#configuration-requirements)

* * *

[User ini file setup](https://docs.cpanel.net/knowledge-base/web-services/how-to-customize-php-directives/#user-ini-file-setup)

* * *

## How to Customize PHP Directives

Last modified: _2024 February 21_

* * *

## Overview

The PHP `.user.ini` file allows you to customize PHP directives on a per-directory basis.

## System requirements

- You **must** use PHP version 5.3.0 or higher.

- You **cannot** use the DSO PHP handler.


## Configuration requirements

We recommend that you review [the `.user.ini` PHP documentation](https://php.net/manual/en/configuration.file.per-user.php) before you implement any configuration changes.

## User ini file setup

To set up a `user.ini` file, perform the following steps:

01. Log in to your cPanel account.

02. Navigate to the cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager/) interface ( _cPanel » Home » Files » File Manager_).

03. Click _Settings_, select the _Show hidden files_ checkbox, and click _Save_.

04. Navigate to the target directory.

05. To create a new file, click _\+ File_.

06. Enter `.user.ini`



    Important:




    You **must** include the period that precedes the file name.


07. Click _Create New File_.

08. Select the new file in the list of files and click _Edit_.

09. Enter the PHP directives that you wish to adjust for the directory.

10. Click _Save_.


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