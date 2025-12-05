---
url: "https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/"
title: "MultiPHP Manager for WHM — System Settings | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [Software](https://docs.cpanel.net/whm/software/)
4. MultiPHP Manager for WHM — System Settings


[whmui](https://docs.cpanel.net/tags/whmui/) [phphandlers](https://docs.cpanel.net/tags/phphandlers/) [php](https://docs.cpanel.net/tags/php/) [fpm](https://docs.cpanel.net/tags/fpm/)

#### Table of Contents

- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
[Overview](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#overview) [PHP Version](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#php-version) [PHP-FPM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#php-fpm) [Enable PHP-FPM for all domains](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#enable-php-fpm-for-all-domains) [System PHP-FPM Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#system-php-fpm-settings) [PHP-FPM Pool options](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#php-fpm-pool-options) [PHP-FPM INI Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#php-fpm-ini-settings) [PHP Handlers](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#php-handlers) - [User Domain Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#installation-toggle)

- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
[Overview](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#overview) [PHP Version](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#php-version) [PHP-FPM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#php-fpm) [Enable PHP-FPM for all domains](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#enable-php-fpm-for-all-domains) [System PHP-FPM Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#system-php-fpm-settings) [PHP-FPM Pool options](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#php-fpm-pool-options) [PHP-FPM INI Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#php-fpm-ini-settings) [PHP Handlers](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#php-handlers) - [User Domain Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/)

## MultiPHP Manager for WHM — System Settings

![](https://docs.cpanel.net/img/whm-icons/multiphp_manager.svg)

_Valid for versions 98 through the latest version_

#### Version:

#### [98](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)

Last modified: _2025 March 5_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _System Settings_ tab of WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM » Home » Software » MultiPHP Manager_) contains options to configure **system-level** PHP-FPM settings. Changes to these settings will apply to **all** new accounts’ PHP-FPM configurations, but will **not** change existing accounts’ configurations **unless** you set those accounts to [inherit](https://docs.cpanel.net/ea4/php/php-inheritance) global settings.

## PHP Version

To set the system’s default version of PHP, select your desired PHP version in the menu. This setting determines the version of PHP assigned to any new account that you create.

Changing this setting does **not** alter any account’s PHP version, unless it is set to inherit its PHP version from the system.

If you select a deprecated version of PHP, the system will display a warning message. Click _Apply Deprecated Version_ to continue.

## PHP-FPM

To set whether the system uses PHP-FPM by default, set the toggle to either _Enabled_ or _Disabled_. Changing this setting does **not** alter any existing account’s PHP-FPM settings.

To configure your system’s PHP-FPM settings, click _Manage Settings_. The [_System PHP-FPM Settings_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#system-php-fpm-settings) section will appear.

### Enable PHP-FPM for all domains

If your system possesses enough memory, enabling PHP-FPM will display the _Enable on All Domains_ setting.

When you enable PHP-FPM on all domains, a message that resembles the following example will appear: `PHP-FPM conversion has started. Click here to view the progress: conversion log.` Click _conversion log_ to open a log of the conversion process. This message closes when the conversion process completes.

If the conversion is successful, the system will display a success message. If the system does not have enough memory to convert all domains to use PHP-FPM, the system will **not** enable PHP-FPM for all domains, and will display a warning message instead.

For more information, read our [PHP FastCGI Process Manager — PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/php-fastcgi-process-manager-php-fpm/) documentation.

### System PHP-FPM Settings

In this section, you can configure the system’s PHP-FPM settings. To configure **domain-level** pool options and `php.ini` directives instead, click the _PHP-FPM Settings_ button next to the domain in the [_User Domain Settings_ tab](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#user-domain-settings-tab).

The _System PHP-FPM Settings_ section contains two sections:

- [_PHP-FPM Pool options_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#php-fpm-pool-options) — These settings configure how PHP-FPM handles _pools_, or workers that respond to PHP requests. Pools of workers allow a website that uses PHP-FPM to handle more requests than it normally could.
- [_PHP-FPM INI Settings_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/#php-fpm-ini-settings) — These settings configure how PHP-FPM handles your [`php.ini`](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/) file directives. The `php.ini` file contains rules for how PHP-FPM behaves, including whether and where it logs error reports. For more information, read our [How to Manage Your php.ini Directives with PHP FPM](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/) documentation.

To display more information about each setting, click _Show Help Text_. For more information about PHP-FPM, read our [PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/) documentation.

When you finish configuring your PHP-FPM settings, you can select from the following options:

- _Update_ — Use this option to save your settings.
- _Validate Settings_ — Use this option to ensure that your PHP-FPM settings are valid.
- _Reset Settings_ — Use this option to reset your changes to their saved values.

Click _Go Back to System Settings_ to exit the interface.

### PHP-FPM Pool options

The _PHP-FPM Pool options_ section allows you to set automated pools (workers) for your system.

You can set the following options in this section:

| Setting | Definition | Default value |
| --- | --- | --- |
| _Max Requests_ | The maximum number of requests a process can serve before it spawns a new process. You **must** choose an integer between `1` and `10000000`. | `20` |
| _Max Children_ | The maximum number of PHP-FPM processes the server will spawn. You **must** choose an integer between `1` and `10000`. | `5` |
| _Process Idle Timeout_ | The amount of time, in seconds, that a process can be idle before the system kills it. You **must** choose an integer between `1` and `10000000`. | `10` |

### PHP-FPM INI Settings

The _PHP-FPM INI Settings_ section allows you to configure the available `php.ini` directives for the server. You can also set a user’s ability to override the system’s directive settings. You can manage the following settings:

- _Treat URLS as files (`allow_url_fopen`)_ — Users can treat URLs as files.
- _Log errors (`log_errors`)_ — Users can log errors.
- _Recognize code between tags as PHP source (`short_open_tag`)_ — The system can recognize code between the `<?` and `?>` tags as a PHP source.
- _Disable Functions_ — The PHP functions to disable.
- _Error Reporting_ — The [error reporting level](https://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting).

Select the _Block domain from changing the setting_ checkbox next to each option to prevent the PHP application from overriding your selection. When you select this checkbox, the system sets the directive with `php_admin_value`. If you so not select this option, it uses `php_value`.

To manually configure additional `php.ini` directives, read our [How to Manage Your php.ini Directives with PHP-FPM](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/) documentation. For a complete list of PHP-FPM user pool directives, read our [Configuration Values of PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/) documentation.

## PHP Handlers

The _PHP Handlers_ section allows you to set the PHP handler for each version of PHP installed on your server.

To change a PHP version’s handler, select the handler that you wish to use in the menu next to the PHP version.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×