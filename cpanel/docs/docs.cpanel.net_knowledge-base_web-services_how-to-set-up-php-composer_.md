---
url: "https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/"
title: "How to Set Up PHP Composer | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#main-content)

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
4. How to Set Up PHP Composer


[php](https://docs.cpanel.net/tags/php/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#overview)

* * *

[How to install Composer](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#how-to-install-composer)

* * *

[How to set up Composer](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#how-to-set-up-composer)

* * *

[Required PHP modules](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#required-php-modules)

* * *

[Required PHP directives](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#required-php-directives)

* * *

[Servers that use Suhosin](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#servers-that-use-suhosin)

* * *

[What if I cannot edit the php.ini file](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#what-if-i-cannot-edit-the-phpini-file)

* * *

[Troubleshoot Composer](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#troubleshoot-composer)

* * *

[Command not found](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#command-not-found)

* * *

[The Composer self-diagnostic tool](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#the-composer-self-diagnostic-tool)

* * *

[Alternative diagnostic tools](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#alternative-diagnostic-tools)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#overview)

* * *

[How to install Composer](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#how-to-install-composer)

* * *

[How to set up Composer](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#how-to-set-up-composer)

* * *

[Required PHP modules](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#required-php-modules)

* * *

[Required PHP directives](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#required-php-directives)

* * *

[Servers that use Suhosin](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#servers-that-use-suhosin)

* * *

[What if I cannot edit the php.ini file](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#what-if-i-cannot-edit-the-phpini-file)

* * *

[Troubleshoot Composer](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#troubleshoot-composer)

* * *

[Command not found](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#command-not-found)

* * *

[The Composer self-diagnostic tool](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#the-composer-self-diagnostic-tool)

* * *

[Alternative diagnostic tools](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#alternative-diagnostic-tools)

* * *

## How to Set Up PHP Composer

Last modified: _2025 June 24_

* * *

Warning:

Because WebPros International, LLC doesn’t develop or ship PHP Composer, cPanel Technical Support can’t help you set it up.

## Overview

Composer is a dependency and package manager for PHP. For more information about Composer, read the [Composer documentation](https://getcomposer.org/doc/). You can search for packages to download at the [packagist.org](https://packagist.org/) website.

Note:

Your cPanel account **must** possess SSH access in order to use Composer.

## How to install Composer

Important:

This section **only** applies to cPanel & WHM version 130 or later. We no longer ship the `cpanel-php-composer` package. In prior versions, we included it with your installation.

To to install Composer, follow the instructions on the [Composer website](https://getcomposer.org/download/).

We recommend that you [install Composer globally](https://getcomposer.org/doc/00-intro.md#globally).

## How to set up Composer

In order to use Composer, you **must** install several PHP modules. You must also verify that you have properly configured your server’s `php.ini` file to allow Composer to run.

By default, when you call Composer, it **only** uses the server’s `php.ini` file. The system stores this file in the `/opt/cpanel/ea-*/root/etc/php.ini` location.

### Required PHP modules

Note:

You **must** perform these steps as the `root` user.

To use Composer, you **must** enable several PHP modules in EasyApache. For more information about EasyApache 4, read our [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) documentation.

- [Phar](http://php.net/manual/en/book.phar.php) — This module provides a way to store entire PHP applications into a single “phar” file (PHP Archive) for easy distribution and installation.







Note:





EasyApache 4 installs this module by default.

- [Iconv](http://php.net/manual/en/book.iconv.php) — This module provides a Character Set Conversion.







Note:





If you install this module, the `MBstring` module is **not** required.

- [Mbstring](http://php.net/manual/en/book.mbstring.php) — This module provides enhanced Chinese, Japanese, and other language support.







Note:





If you install this module, the `Iconv` module is **not** required.


### Required PHP directives

You **must** update the following PHP directives in the `php.ini` file:

Warning:

We **strongly** recommend that you **only** edit your server’s `php.ini` files with cPanel’s [_MultiPHP INI Editor_](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/) interface ( _cPanel » Home » Software » MultiPHP INI Editor_).

- `allow_url_fopen` — `On`
- `zend.detect_unicode` — `Off`

Note:

For servers that use PHP version 5.3 and earlier, use the `detect_unicode` directive instead of the `zend.detect_unicode` directive.

### Servers that use Suhosin

If you use Suhosin, you **must** add the Phar PHP module to the Suhosin whitelist in the server’s `php.ini` file. Add the following line to your server’s `php.ini` file:

```perl
suhosin.executor.include.whitelist=phar
```

Warning:

We **strongly** recommend that you **only** edit your server’s `php.ini` files with cPanel’s [_MultiPHP INI Editor_](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/) interface ( _cPanel » Home » Software » MultiPHP INI Editor_).

### What if I cannot edit the php.ini file

If you cannot make changes to the `php.ini` file, you **must** manually run the following command each time you run Composer:

- With Suhosin:

```perl
php -d allow_url_fopen=1 -d zend.detect_unicode=0 -d suhosin.executor.include.whitelist=phar $(which composer)
```

- Without Suhosin:

```perl
php -d allow_url_fopen=1 -d zend.detect_unicode=0 $(which composer)
```

If you use Composer often, you can create a Bash alias to perform this step for you. If you add an alias, you can run the composer command without any additional flags or options. Add the following line to your `.bashrc` file to create this alias each time that you log in to the server:

- With Suhosin:

```perl
alias composer="php -d allow_url_fopen=1 -d zend.detect_unicode=0 -d suhosin.executor.include.whitelist=phar $(which composer)"
```

- Without Suhosin:

```perl
alias composer="php -d allow_url_fopen=1 -d zend.detect_unicode=0 $(which composer)"
```

## Troubleshoot Composer

### Command not found

If you receive a `command not found` error message, you may need to add the proper path to your account’s `.bash_profile` file.

#### cPanel & WHM version 128 and earlier

Add the following line to your account’s `.bash_profile` file:

```perl
source /etc/profile.d/cpanel-php-composer.sh
```

If you experience problems with the source option, add the `PATH` option to the `.bash_profile` file instead:

```perl
PATH=$PATH:/opt/cpanel/composer/bin
```

Note:

You **must** log in to the server again for any changes to the `.bash_profile` file to take effect.

#### cPanel & WHM version 130 and later

If you receive a `command not found` error message, make **certain** that you [installed Composer](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/#how-to-install-composer).

Add the following line to your account’s `PATH` option in your `.bash_profile` file:

```perl
PATH=$PATH:/usr/local/bin/composer
```

Note:

- This assumes that you [installed Composer globally](https://getcomposer.org/doc/00-intro.md#globally). If you did not, change the `PATH` to the location of your installation.
- You **must** log in to the server again for any changes to the `.bash_profile` file to take effect.

### The Composer self-diagnostic tool

Composer contains a self-diagnostic tool to ensure that you have properly configured PHP.

Run the diagnostic tool with the following command:

```perl
composer diagnose
```

The `Checking platform setting` section provides feedback about your server’s PHP configuration. It will also inform you of any PHP configuration failures.

The following example demonstrates this section:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>``` | ```go<br>$ composer diagnose<br>Checking platform settings: OK<br>Checking git settings: OK<br>Checking http connectivity to packagist: Warning: Accessing packagist.org over http which is an insecure protocol.<br>OK<br>Checking https connectivity to packagist: OK<br>Checking github.com rate limit: OK<br>Checking disk free space: OK<br>Checking pubkeys: FAIL<br>Missing pubkey for tags verification<br>Missing pubkey for dev verification<br>Run composer self-update --update-keys to set them up<br>Checking composer version: FAIL<br>You are not running the latest stable version, run `composer self-update` to update (1.1.1 => 1.1.2)<br>``` |

### Alternative diagnostic tools

If you require an alternate diagnostic tool, use the diagnostic tool from Composer’s Github account. Run the following command:

```perl
curl https://raw.githubusercontent.com/composer/getcomposer.org/master/web/installer | php -- --check
```

This utility only checks the server’s PHP configuration, as in the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```go<br># curl https://raw.githubusercontent.com/composer/getcomposer.org/master/web/installer | php -- --check<br>  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current<br>                                 Dload  Upload   Total   Spent    Left  Speed<br>100  286k  100  286k    0     0   466k      0 --:--:-- --:--:-- --:--:-- 1002k<br>All settings correct for using Composer<br>#  <br>``` |

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