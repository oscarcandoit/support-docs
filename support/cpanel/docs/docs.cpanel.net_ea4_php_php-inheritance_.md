---
url: "https://docs.cpanel.net/ea4/php/php-inheritance/"
title: "PHP Inheritance | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/php/php-inheritance/#main-content)

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
4. PHP Inheritance


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/) [php](https://docs.cpanel.net/tags/php/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/php/php-inheritance/#overview)

* * *

[How inheritance works](https://docs.cpanel.net/ea4/php/php-inheritance/#how-inheritance-works)

* * *

[Examples](https://docs.cpanel.net/ea4/php/php-inheritance/#examples)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/php/php-inheritance/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/php/php-inheritance/#overview)

* * *

[How inheritance works](https://docs.cpanel.net/ea4/php/php-inheritance/#how-inheritance-works)

* * *

[Examples](https://docs.cpanel.net/ea4/php/php-inheritance/#examples)

* * *

## PHP Inheritance

Last modified: _2024 August 28_

* * *

## Overview

In WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM » Home » Software » MultiPHP Manager_), the term “Inherit” refers to how Apache determines a domain or virtual host’s PHP version.

When you set a cPanel account or domain to use the _Inherit_ option, Apache uses the PHP version that exists in the first `.htaccess` file that it finds in the domain’s file structure. If the system **cannot** find an `.htaccess` file, Apache uses the system default PHP version. The system sets the PHP version of each new domain to the default value.

Important:

The system enables PHP-FPM by default. You **cannot** set a cPanel account’s PHP version to use the _Inherit_ option with PHP-FPM enabled.

## How inheritance works

PHP inheritance follows the following path:

1. You set the PHP version at the system level.







Important:





We **strongly** recommend that you only set the PHP version in WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM » Home » Software » MultiPHP Manager_). If you set your PHP version manually, you may experience unexpected behavior.

2. You set a cPanel account or domain to use the _Inherit_ option in WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM » Home » Software » MultiPHP Manager_).

3. Apache searches the cPanel & WHM default document root of the current domain and continues up the directory tree until it finds an `.htaccess` file with PHP version information.







Important:





- The document root location determines how your domain inherits its PHP version. For example, if a domain’s document root is underneath a subdomain, the domain will inherit the subdomain’s PHP version.
- For a primary domain, the default document root is the `/$HOME/user/public_html` directory, where `/$HOME/` represents your home directory.
- For a subdomain or addon domain, the default document root depends on your server’s settings. For more information, read our [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) documentation.
- When you set a domain’s PHP version, the system creates its `.htaccess` file.

4. Apache locates an `.htaccess` file with PHP version information.

5. Each cPanel account or domain set to _Inherit_ now uses the PHP version in the `.htaccess` file.





Note:





- If Apache does not find an `.htaccess` file, it uses the system default PHP version from WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM » Home » Software » MultiPHP Manager_).
- If Apache finds an invalid version of PHP in the `.htaccess` file, it uses the system default PHP version set in WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM » Home » Software » MultiPHP Manager_).

### Examples

#### Subdomains

In the following examples, the system uses PHP 8.2 by default:

Note:

In the following table, the `sub3.example.com` and `sub4.example.com` domain examples are **only** valid if you set the _Restrict document roots to public\_html_ option in WHM’s [_Tweak Setting_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_) to _Off_.

| Domain | Domain type | PHP setting | Effective PHP version | Document root within the `/public_html` directory |
| --- | --- | --- | --- | --- |
| `example.com` | Primary | 8.0 | 8.0 | Yes |
| `sub1.example.com` | Subdomain | 8.3 | 8.3 | Yes |
| `sub2.example.com` | Subdomain | Inherit | 8.3 <br>Note:<br>In this example, the `sub2.example.com` subdomain’s document root is underneath the `sub1.example.com` subdomain. Therefore, `sub2.example.com` will inherit its PHP version from `sub1.example.com`. | Yes |
| `sub3.example.com` | Subdomain | Inherit | 8.2 | No |
| `sub4.example.com` | Subdomain | 8.2 | 8.2 | No |

| Domain | Domain type | PHP setting | Effective PHP version | Document root within the `/public_html` directory |
| --- | --- | --- | --- | --- |
| `domain.com` | Primary | Inherit | 8.2 | Yes |
| `sub5.domain.com` | Subdomain | Inherit | 8.2 | Yes |
| `sub6.domain.com` | Subdomain | 8.0 | 8.0 | Yes |

#### Addon domains

In the following examples, the system uses PHP 8.2 by default:

| Domain | Domain type | PHP setting | Effective PHP version | Document root within the `/public_html` directory |
| --- | --- | --- | --- | --- |
| `example.com` | Primary | 8.0 | 8.0 | Yes |
| `addon-example.com` | Addon | Inherit | 8.2 | Yes |

| Domain | Domain type | PHP setting | Effective PHP version | Document root within the `/public_html` directory |
| --- | --- | --- | --- | --- |
| `domain.com` | Primary | Inherit | 8.2 | Yes |
| `addon-example2.com` | Addon | Inherit | 8.2 | No |

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