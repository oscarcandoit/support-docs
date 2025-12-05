---
url: "https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/"
title: "Configuration Values of PHP-FPM | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/#main-content)

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
3. [PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/)
4. Configuration Values of PHP-FPM


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [php](https://docs.cpanel.net/tags/php/) [fpm](https://docs.cpanel.net/tags/fpm/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/#overview)

* * *

[Global directives](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/#global-directives)

* * *

[Pool name directives](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/#pool-name-directives)

* * *

[Add a value to a configuration](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/#add-a-value-to-a-configuration)

* * *

[Add an unknown value to a configuration](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/#add-an-unknown-value-to-a-configuration)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/#overview)

* * *

[Global directives](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/#global-directives)

* * *

[Pool name directives](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/#pool-name-directives)

* * *

[Add a value to a configuration](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/#add-a-value-to-a-configuration)

* * *

[Add an unknown value to a configuration](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/#add-an-unknown-value-to-a-configuration)

* * *

## Configuration Values of PHP-FPM

Last modified: _2023 December 5_

* * *

## Overview

This document lists the PHP-FPM system’s configuration settings and their default values. This document also explains how to add additional settings to your system’s PHP-FPM configuration.

You can configure some of the global directives and pool options through WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM » Home » Software » MultiPHP Manager_).

Warning:

We **strongly** recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM on a server with less than the required RAM, your server may experience severe performance issues.

## Global directives

cPanel & WHM uses template values for defaults. For example, when the `[% ea_php_version %]` template value appears in the `.yaml` file, the system replaces this value with the desired PHP version. The following list outlines the global directives labels:

- `Key` — The entry in the `.yaml` file.
- `Name` — The pool name in the `/var/cpanel/ApachePHPFPM/system_pool_defaults.yaml` configuration file.





More:




For more information about pool names, read our [PHP-FPM Domain Pools](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-domain-pools/) documentation.


- `Present if not listed` — When you set this value to `Yes`, the system adds the value to the `/var/cpanel/userdata/user/domain.php-fpm.yaml` configuration file, where `user` represents the cPanel user’s name and `domain` represents the domain.
- `Default` — The template value that resides in the `/var/cpanel/ApachePHPFPM/system.yaml` configuration file. For more information about creating the `/var/cpanel/ApachePHPFPM/system.yaml` file, read our [PHP-FPM implementation](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#php-fpm-implementation) documentation.

Warning:

- You must normalize the period character `.` to an underscore character `_` for all key names when you create or modify the `/var/cpanel/ApachePHPFPM/system.yaml` file. For example, you would normalize `syslog.ident` to `syslog_ident`. Otherwise, the system may **not** accept the key name.
- Exercise **extreme** caution when you manually edit `.yaml` files. Incorrect syntax in these files will cause services to fail. We **strongly** suggest that you create a backup of your system before you manually edit `.yaml` files.

| Key | Name | Present if not listed | Default |
| --- | --- | --- | --- |
| `daemonize` | `daemonize` | Yes | `no` |
| `emergency_restart_interval` | `emergency_restart_interval` | Yes | `0` |
| `emergency_restart_threshold` | `emergency_restart_threshold` | Yes | `0` |
| `error_log` | `error_log` | Yes | `/opt/cpanel/[% ea_php_version %]/root/usr/var/log/php-fpm/error.log` |
| `events_mechanism` | `events.mechanism` | No | `N/A` |
| `log_level` | `log_level` | Yes | `notice` |
| `pid` | `pid` | Yes | `/opt/cpanel/[% ea_php_version %]/root/usr/var/run/php-fpm/php-fpm.pid` |
| `process_control_timeout` | `process_control_timeout` | Yes | `10` |
| `process_max` | `process_max` | No | `0` |
| `process_priority` | `process.priority` | No | `N/A` |
| `rlimit_core` | `rlimit_core` | No | `0` |
| `rlimit_files` | `rlimit_files` | No | `N/A` |
| `syslog_facility` | `syslog.facility` | No | `daemon` |
| `syslog_ident` | `syslog.ident` | No | `php-fpm` |
| `systemd_interval` | `systemd_interval` | No | `10` |

## Pool name directives

PHP-FPM pools allow you to configure different websites and applications to run under their own user. The following table lists directives that you can configure in the `/var/cpanel/ApachePHPFPM/system_pool_defaults.yaml` file. For more information about creating the `/var/cpanel/ApachePHPFPM/system_pool_defaults.yaml` file, read our [PHP-FPM implementation](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-code-and-filesystem-layout-for-easyapache-4/#php-fpm-implementation) documentation.

Important:

To avoid directive configuration errors, you must follow these syntax rules:

- You **must** use single quotation marks `' '` at the beginning and end of strings with double quotation marks `" "`. The YAML parser automatically removes quotation marks from string values. This means that values that require double quotation marks **must** use single quotation marks before and after the double quotation marks to retain their value.

- You **must** use an escape character `\` with any double quotation marks `" "` that you use inside of the string.


| Key | Name | Present if not listed | Default |
| --- | --- | --- | --- |
| `catch_workers_output` | `catch_workers_output` | Yes | `yes` |
| `chdir` | `chdir` | Yes | `[% homedir %]` |
| `chroot` | `chroot` | No | `N/A` |
| `clear_env` | `clear_env` | No | `N/A` |
| `group` | `group` | Yes | `nobody` |
| `listen` | `listen` | Yes | `"[% socket_path %]"` |
| `listen_acl_groups` | `listen.acl_groups` | No | `N/A` |
| `listen_acl_users` | `listen.acl_users` | No | `N/A` |
| `listen_allowed_clients` | `listen.allowed_clients` | No | `any` |
| `listen_backlog` | `listen.backlog` | No | `-1` |
| `listen_group` | `listen.group` | No | `nobody` |
| `listen_mode` | `listen.mode` | No | `0660` |
| `listen_owner` | `listen.owner` | No | `"[% username %]"` |
| `php_admin_flag_allow_url_fopen` | `php_admin_flag[allow_url_fopen]` | Yes | `on` |
| `php_admin_flag_log_errors` | `php_admin_flag[log_errors]` | Yes | `on` |
| `php_admin_value_disable_functions` | `php_admin_value[disable_functions]` | Yes | `exec,passthru,shell_exec,system` |
| `php_admin_value_doc_root` | `php_admin_value[doc_root]` | Yes | `[% documentroot %]`<br>Note:<br>- When you specify a vhost document root for subdomains, the system does **not** escape the vhost correctly in the subdomain’s PHP-FPM configuration file.<br>- PHP-FPM does **not** process certain characters in the document root unless you add double quotes `""` around the document root.<br>- You can also add the colon `:`, semicolon `;`, and parenthesis `()` characters to the document root. |
| `php_admin_value_error_log` | `php_admin_value[error_log]` | Yes | `[% homedir %]/logs/[% scrubbed_domain %].php.error.log`<br>Note:<br>The system normalizes the period character `.` to an underscore character `_` for the domain.<br>For example, the `/home/example/logs/example.net.php.error.log` file becomes the `/home/example/logs/example_net.php.error.log` file, where `example` represents the username and `example_net` represents the domain name. |
| `php_admin_value_short_open_tag` | `php_admin_value[short_open_tag]` | Yes | `on` |
| `php_value_error_reporting` | `php_value[error_reporting]` | Yes | `E_ALL & ~E_NOTICE` |
| `php_value_session_save_handler` | `php_value[session.save_handler]` | No | `N/A` |
| `php_value_session_save_path` | `php_value[session.save_path]` | No | `N/A` |
| `php_value_soap_wsdl_cache_dir` | `php_value[soap.wsdl_cache_dir]` | No | `N/A` |
| `ping_path` | `ping.path` | Yes | `/ping` |
| `pm` | `pm` | Yes | `ondemand` |
| `pm_max_children` | `pm.max_children` | Yes | `5` |
| `pm_max_requests` | `pm.max_requests` | Yes | `20` |
| `pm_max_spare_servers` | `pm.max_spare_servers` | Yes | `5` |
| `pm_min_spare_servers` | `pm.min_spare_servers` | Yes | `1` |
| `pm_process_idle_timeout` | `pm.process_idle_timeout` | Yes | `10` |
| `pm_start_servers` | `pm.start_servers` | Yes | `0` |
| `pm_status_path` | `pm.status_path` | Yes | `/status` |
| `request_slowlog_timeout` | `request_slowlog_timeout` | No | `N/A` |
| `request_terminate_timeout` | `request_terminate_timeout` | No | `N/A` |
| `rlimit_core` | `rlimit_core` | No | `N/A` |
| `rlimit_files` | `rlimit_files` | No | `N/A` |
| `security_limit_extensions` | `security.limit_extensions` | Yes | The system allows the following options: <br>- `.phtml`<br>- `.php`<br>- `.php3`<br>- `.php4`<br>- `.php5`<br>- `.php6`<br>- `.php7` |
| `slowlog` | `slowlog` | No | `N/A` |
| `user` | `user` | Yes | `"[% username %]"` |

Note:

For more information about pool names, read our [PHP-FPM Domain Pools](https://docs.cpanel.net/knowledge-base/php-fpm/php-fpm-domain-pools/) documentation.

### Add a value to a configuration

A complete configuration directive line would resemble the following example:

```perl
php_value_open_basedir: { name: 'php_value[open_basedir]', value: "[% documentroot %]" }
```

This example contains the following values:

- `php_value_open_basedir` represents the `Key` entry.
- The `Key` entry must **only** contain letters, numbers, and underscores.
- `php_value[openbasedir]` represents the pool name.
- `documentroot` represents the configuration value.

### Add an unknown value to a configuration

You can add a value that cPanel & WHM does not currently provide as a default with a YAML map.

To create a YAML map, add a line to the configuration file that resembles the following example:

```php
php_admin_value_ldap_max_links: { name: 'php_admin_value[ldap.max_links]', value: -1 }
```

This example contains the following values:

- `php_admin_value_ldap_max_links` represents the `Key` entry.
- The `Key` entry must **only** contain letters, numbers, and underscores.
- `php_admin_value[ldap.max_links]` represents the pool name.
- `-1` represents the configuration value.

Important:

If you prepend any PHP settings with the `php_value` or `php_flag` flags, the system will overwrite any previous `php.ini` values that you set in the user’s `.htaccess` files. To remove these flags, run the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>find /home -type f -name '.htaccess' -exec grep -Hrn 'php_value' '{}' \;<br>find /home -type f -name '.htaccess' -exec grep -Hrn 'php_flag' '{}' \;<br>``` |

If you prepend any PHP settings with the `disable functions` or `disable_classes` flags, the system will append the new `php.ini` value to the previous one in the user’s `.htaccess` files.

For more information, read our [How to Manage Your php.ini Directives with PHP-FPM](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/) documentation.

#### Additional Documentation

* * *

- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [MultiPHP Manager for WHM — System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [MultiPHP Manager for WHM — User Domain Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/)
- [The php\_fpm\_config Script](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×