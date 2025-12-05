---
url: "https://docs.cpanel.net/ea4/php/php-module-mcrypt/"
title: "PHP Module: Mcrypt | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/php/php-module-mcrypt/#main-content)

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
4. PHP Module: Mcrypt


[encryption](https://docs.cpanel.net/tags/encryption/) [php](https://docs.cpanel.net/tags/php/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/php/php-module-mcrypt/#overview)

* * *

[Compatibility](https://docs.cpanel.net/ea4/php/php-module-mcrypt/#compatibility)

* * *

[Requirements](https://docs.cpanel.net/ea4/php/php-module-mcrypt/#requirements)

* * *

[Installation steps](https://docs.cpanel.net/ea4/php/php-module-mcrypt/#installation-steps)

* * *

[In the interface](https://docs.cpanel.net/ea4/php/php-module-mcrypt/#in-the-interface)

* * *

[On the command line](https://docs.cpanel.net/ea4/php/php-module-mcrypt/#on-the-command-line)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/php/php-module-mcrypt/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/php/php-module-mcrypt/#overview)

* * *

[Compatibility](https://docs.cpanel.net/ea4/php/php-module-mcrypt/#compatibility)

* * *

[Requirements](https://docs.cpanel.net/ea4/php/php-module-mcrypt/#requirements)

* * *

[Installation steps](https://docs.cpanel.net/ea4/php/php-module-mcrypt/#installation-steps)

* * *

[In the interface](https://docs.cpanel.net/ea4/php/php-module-mcrypt/#in-the-interface)

* * *

[On the command line](https://docs.cpanel.net/ea4/php/php-module-mcrypt/#on-the-command-line)

* * *

## PHP Module: Mcrypt

Last modified: _2024 September 16_

* * *

## Overview

The `mcrypt` PHP module provides an interface to the [`mcrypt`](https://www.php.net/manual/en/book.mcrypt.php) library to support encryption. The cPanel-provided EasyApache 4 profiles include the `mcrypt` PHP module by default.

## Compatibility

As of PHP 7.2, this module is **only** available through the [PHP Extension Community Library (PECL)](https://pecl.php.net/).

## Requirements

This module depends on the `mcrypt` library, which EasyApache 4 installs to the `/opt/cpanel/libmcrypt` directory when you install the `mcrypt` module.

## Installation steps

### In the interface

To install or uninstall the `mcrypt` PHP module, use WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_).

### On the command line

To install the `mcrypt` PHP module, perform the following steps:

1. On the command line as the `root` user, copy the files from the `/opt/cpanel/libmcrypt/lib64/` directory to the `/opt/cpanel/libmcrypt/lib/` directory with the following command:




```bash
rsync -avH /opt/cpanel/libmcrypt/lib64/ /opt/cpanel/libmcrypt/lib/
```

2. Install the `mcrypt` module with the following command:




```bash
ea-php81-pecl install mcrypt-1.0.2
```

3. When the system prompts for the `libmcrypt` prefix, enter the following directory path:




```bash
/opt/cpanel/libmcrypt
```


#### Additional Documentation

* * *

- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [The clean\_user\_php\_sessions Script](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/)
- [The php\_fpm\_config Script](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/)
- [The rebuild\_phpconf Script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×