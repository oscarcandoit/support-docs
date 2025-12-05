---
url: "https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/"
title: "MultiPHP Manager for WHM — User Domain Settings | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#main-content)

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
4. MultiPHP Manager for WHM — User Domain Settings


[whmui](https://docs.cpanel.net/tags/whmui/) [phphandlers](https://docs.cpanel.net/tags/phphandlers/) [php](https://docs.cpanel.net/tags/php/) [fpm](https://docs.cpanel.net/tags/fpm/)

#### Table of Contents

- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [User Domain Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/)
[Overview](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#overview) [The Domain table](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#the-domain-table) [Set a domain’s PHP version](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#set-a-domainamprsquos-php-version) [Set a domain’s PHP-FPM status](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#set-a-domainamprsquos-php-fpm-status) [PHP-FPM Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#php-fpm-settings) [PHP-FPM Pool options](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#php-fpm-pool-options) [PHP-FPM INI Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#php-fpm-ini-settings)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#installation-toggle)

- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [User Domain Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/)
[Overview](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#overview) [The Domain table](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#the-domain-table) [Set a domain’s PHP version](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#set-a-domainamprsquos-php-version) [Set a domain’s PHP-FPM status](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#set-a-domainamprsquos-php-fpm-status) [PHP-FPM Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#php-fpm-settings) [PHP-FPM Pool options](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#php-fpm-pool-options) [PHP-FPM INI Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/#php-fpm-ini-settings)

## MultiPHP Manager for WHM — User Domain Settings

![](https://docs.cpanel.net/img/whm-icons/multiphp_manager.svg)

_Valid for versions 98 through the latest version_

#### Version:

#### [98](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/)

Last modified: _2025 March 5_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _User Domain Settings_ tab of WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM » Home » Software » MultiPHP Manager_) contains options to configure user-specific PHP-FPM settings.

## The Domain table

The table displays the following information about each domain on your server:

- _Domain_ — The domain’s name.
- _Account_ — The account’s name.
- _PHP Version_ — The PHP version the domain uses, and whether it inherits that PHP version.
- _PHP-FPM_ — The domain’s PHP-FPM status.

To view more information about each domain, click the arrow (`>`) next to the domain’s name. You can select a new PHP version, set a domain to _Inherit_, or set the domain’s PHP-FPM status to _Enabled_ or _Disabled_.

To change multiple domains at the same time, select the checkbox next to the domains that you wish to modify and then select one of the following actions:

- _Set PHP Version_ — Select the PHP version that you wish to assign to the selected domains in the menu.
- _Set Inherit_ — Click this button to set all selected domains to inherit their PHP version.
- _Disable PHP-FPM_ — Click this button to disable PHP-FPM for the selected domains.

## Set a domain’s PHP version

To set a domain’s PHP version, select the PHP version that you wish to use from the menu next to that domain.

When you change a domain’s PHP version, any domain that inherits its PHP version from that domain will **also** change its PHP version. For more information about inheriting PHP versions, read our [PHP Inheritance](https://docs.cpanel.net/ea4/php/php-inheritance/) documentation.

To set a domain to inherit its PHP version, perform the following steps:

1. Click the _Inherit_ checkbox in the _PHP Version_ column next to the domain’s name.
2. Click _Apply_ to accept the change.
3. The system will display _Inherit_ and the inherited PHP version, and will change the PHP-FPM column to _Unavailable_ for that domain.

To set a domain to **not** inherit its PHP version, perform the following steps:

1. Click the _Inherit_ checkbox in the _PHP Version_ column next to the domain’s name.
2. Select the PHP version that you want the domain to use from the menu.
3. Click _Apply_ to accept the change.
4. The system will display the assigned PHP version and allow you to select the domain’s PHP-FPM status.

### Set a domain’s PHP-FPM status

To enable or disable PHP-FPM for a domain, set the toggle to either _Enabled_ or _Disabled_.

To disable PHP-FPM for multiple domains, select the domains that you wish to disable, then click _Disable PHP-FPM_.

You **cannot** modify a domain’s PHP-FPM settings if its PHP version is set to _Inherit_ or if PHP-FPM is not available for its PHP version.

## PHP-FPM Settings

To configure the domain’s PHP-FPM settings, click _PHP-FPM Settings_. A new interface will appear.

Note:

This option **only** appears if you set a domain’s PHP-FPM status to _Enabled_.

To display more information about each setting, click _Show Help Text_.

When you finish configuring your PHP-FPM settings, you can select the following options:

- _Update_ — Use this option to save your settings.
- _Validate Settings_ — Use this option to ensure that your PHP-FPM settings are valid.
- _Reset Settings_ — Use this option to reset your changes to their saved values.

Click _Go Back to User Domain Settings_ to exit the interface.

For more information about PHP-FPM, read our [PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/) documentation.

### PHP-FPM Pool options

The _PHP-FPM Pool options_ section allows you to set automated pools (workers) for your domain.

You can set the following options in this section:

| Setting | Definition | Default value |
| --- | --- | --- |
| _Max Requests_ | The maximum number of requests a process can serve before it spawns a new process. You **must** choose an integer between `1` and `10000000`. | `20` |
| _Max Children_ | The maximum number of PHP-FPM processes the server will spawn. You **must** choose an integer between `1` and `10000`. | `5` |
| _Process Idle Timeout_ | The amount of time, in seconds, that a process can be idle before the system kills it. You **must** choose an integer between `1` and `10000000`. | `10` |

### PHP-FPM INI Settings

The _PHP-FPM INI Settings_ section allows you to configure the available `php.ini` directives for the domain. You can also toggle a user’s ability to override the system’s directive settings. You can set the following settings:

- _Treat URLS as files (`allow_url_fopen`)_ — Users can treat URLs as files.
- _Log errors (`log_errors`)_ — Users can log errors.
- _Recognize code between tags as PHP source (`short_open_tag`)_ — The system can recognize code between the `<?` and `?>` tags as a PHP source.
- _Error log_ — The location of the domain’s error log.
- _Disable Functions_ — The PHP functions to disable.
- _Error Reporting_ — The [error reporting level](https://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting) for the domain.

Select the _Block domain from changing the setting_ checkbox next to each option to prevent the PHP application from overriding your selection. When you select this checkbox, the system sets the directive with `php_admin_value`. If you do not select this option, it uses `php_value`.

To manually configure additional `php.ini` directives, read our [How to Manage Your php.ini Directives with PHP-FPM](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/) documentation. For a complete list of PHP-FPM user pool directives, read our [Configuration Values of PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/) documentation.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×