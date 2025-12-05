---
url: "https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/"
title: "The php_fpm_config Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/#main-content)

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
3. [Scripts](https://docs.cpanel.net/whm/scripts/)
4. The php\_fpm\_config Script


[php](https://docs.cpanel.net/tags/php/) [fpm](https://docs.cpanel.net/tags/fpm/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/#overview)

* * *

[The /usr/local/cpanel/scripts/php\_fpm\_config scripts](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/#the-usrlocalcpanelscriptsphpfpmconfig-scripts)

* * *

[Arguments](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/#arguments)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/#overview)

* * *

[The /usr/local/cpanel/scripts/php\_fpm\_config scripts](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/#the-usrlocalcpanelscriptsphpfpmconfig-scripts)

* * *

[Arguments](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/#arguments)

* * *

## The php\_fpm\_config Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/)

Last modified: _2020 May 13_

* * *

## Overview

The `/usr/local/cpanel/scripts/php_fpm_config` script installs configuration files when you manually edit the PHP-FPM configuration files. This script also helps to troubleshoot problems in the PHP-FPM system.

Note:

This is **only** available to users with `root` privileges.


## The `/usr/local/cpanel/scripts/php_fpm_config` scripts

To use this script, run the following command as the `root` user:

```
/usr/local/cpanel/scripts/php_fpm_config --rebuild [--domain=domain] --check [--json]
```

### Arguments

| Option | Description | Example |
| --- | --- | --- |
| `--rebuild [--domain=domain]` | The `--rebuild` option rebuilds all FPM configuration files and Apache vhost entries according to the values in the user’s domain `php-fpm.yaml` files.<br>When you add the `--domain=domain` argument, the system restricts the `--rebuild` operation to only a single domain.<br>Note:<br>The `--domain=domain` argument is **optional**. | `/usr/local/cpanel/scripts/php_fpm_config --rebuild --domain=domain` |
| `--check [--json]` | The `--check` option scans all configuration and `.yaml` files for any inconsistencies, then outputs an inventory of all known cPanel FPM configurations and status. It will also output any errors.<br>It may also indicate that the `.conf` file in the `php-fpm.d` directory is older than the `.yaml` file. If the system indicates this, run the script with the `--rebuild` option.<br>Notes:<br>- The output of this check defaults to human-readable format. The `--json` argument displays output in JSON format.<br>- The `--json` argument is **optional**. | `/usr/local/cpanel/scripts/php_fpm_config --check --json` |
| `--convert_all` | The `--convert_all` option identifies all domains on a system and enables PHP-FPM on them. This script turns on PHP-FPM for all accounts.<br>If your domain’s PHP is set to _Inherit_, the system converts it to the default PHP handler for the system. Then the system enables PHP-FPM for the specified account(s).<br>Warning:<br>We **strongly** recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM on a server with less than the required RAM, your server may experience severe performance issues. | `/usr/local/cpanel/scripts/php_fpm_config --convert_all` |

Note:

Orphaned files represent configuration files in the `php-fpm.d` directory that cPanel does **not** manage. They may represent the source of any problems you encounter.


#### Additional Documentation

* * *

- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [MultiPHP Manager for WHM — System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [MultiPHP Manager for WHM — User Domain Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/)
- [The clean\_user\_php\_sessions Script](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×