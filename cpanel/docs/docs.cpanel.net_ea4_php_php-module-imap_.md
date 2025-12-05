---
url: "https://docs.cpanel.net/ea4/php/php-module-imap/"
title: "PHP Module: IMAP | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/php/php-module-imap/#main-content)

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
4. PHP Module: IMAP


[php](https://docs.cpanel.net/tags/php/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/php/php-module-imap/#overview)

* * *

[Compatibility](https://docs.cpanel.net/ea4/php/php-module-imap/#compatibility)

* * *

[Requirements](https://docs.cpanel.net/ea4/php/php-module-imap/#requirements)

* * *

[Installation steps](https://docs.cpanel.net/ea4/php/php-module-imap/#installation-steps)

* * *

[In the interface](https://docs.cpanel.net/ea4/php/php-module-imap/#in-the-interface)

* * *

[On the command line](https://docs.cpanel.net/ea4/php/php-module-imap/#on-the-command-line)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/php/php-module-imap/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/php/php-module-imap/#overview)

* * *

[Compatibility](https://docs.cpanel.net/ea4/php/php-module-imap/#compatibility)

* * *

[Requirements](https://docs.cpanel.net/ea4/php/php-module-imap/#requirements)

* * *

[Installation steps](https://docs.cpanel.net/ea4/php/php-module-imap/#installation-steps)

* * *

[In the interface](https://docs.cpanel.net/ea4/php/php-module-imap/#in-the-interface)

* * *

[On the command line](https://docs.cpanel.net/ea4/php/php-module-imap/#on-the-command-line)

* * *

## PHP Module: IMAP

Last modified: _2024 October 23_

* * *

## Overview

The `imap` PHP module provides an extension to use the [IMAP](https://www.php.net/manual/en/book.imap.php) protocol and other email access methods.

The IMAP PHP module is **deprecated** and we **strongly** recommend that you use another module instead, such as [PHP-IMAP](https://www.php-imap.com/).

Note:

This document **only** applies to IMAP with PHP version 8.4 and later.

## Compatibility

As of PHP 8.4 this module is **only** available through the [PHP Extension Community Library (PECL)](https://pecl.php.net/package/imap).

## Requirements

PECL modules have prerequisites and requirements that may vary based on your system’s configuration. For more information, read the [IMAP PECL module](https://pecl.php.net/package/imap) documentation.

## Installation steps

### In the interface

You can install this module with WHM’s [PHP PECL](https://docs.cpanel.net/whm/software/php-pecl) interface ( _WHM » Home » Software » PHP PECL_).

### On the command line

To install the `imap` PHP module, run the following command, where `##` represents your PHP version number:

```bash
ea-php##-pecl install imap
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