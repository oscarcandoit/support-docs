---
url: "https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/"
title: "WP Toolkit | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#main-content)

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
3. [cPanel Developed Plugins](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/)
4. WP Toolkit


[wordpress](https://docs.cpanel.net/tags/wordpress/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#overview)

* * *

[Install WP Toolkit](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#install-wp-toolkit)

* * *

[WHM Marketplace](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#whm-marketplace)

* * *

[Manual installation](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#manual-installation)

* * *

[WHM configuration](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#whm-configuration)

* * *

[Updates to WP Toolkit](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#updates-to-wp-toolkit)

* * *

[Troubleshoot WP Toolkit](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#troubleshoot-wp-toolkit)

* * *

[Uninstall WP Toolkit](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#uninstall-wp-toolkit)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#overview)

* * *

[Install WP Toolkit](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#install-wp-toolkit)

* * *

[WHM Marketplace](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#whm-marketplace)

* * *

[Manual installation](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#manual-installation)

* * *

[WHM configuration](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#whm-configuration)

* * *

[Updates to WP Toolkit](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#updates-to-wp-toolkit)

* * *

[Troubleshoot WP Toolkit](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#troubleshoot-wp-toolkit)

* * *

[Uninstall WP Toolkit](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#uninstall-wp-toolkit)

* * *

## WP Toolkit

_Valid for versions 102 through 116_

#### Version:

#### [102](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/)

#### [118](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/118/)

#### [120](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/)

Last modified: _2025 March 6_

* * *

## Overview

The _WP Toolkit_ plugin allows you to easily install, configure, and manage WordPress®.

## Install WP Toolkit

Note:

The system automatically installs the _WP Toolkit_ plugin in cPanel & WHM versions 102 and later.

You can install the _WP Toolkit_ plugin with the following methods:

1. [The WHM Marketplace](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#whm-marketplace)
2. [Manual installation](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/102/#manual-installation)

You may confirm _WP Toolkit_ installation by accessing WHM’s [_WP Toolkit_](https://docs.cpanel.net/whm/plugins/wp-toolkit-for-whm/) interface ( _WHM » Home » Plugins » WP Toolkit_). If enabled, cPanel users can also access this plugin in cPanel’s [_WP Toolkit_](https://docs.cpanel.net/cpanel/domains/wp-toolkit-for-cpanel/) interface ( _cPanel » Home » Domains » WP Toolkit_).

When you install the [_WP Toolkit_](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/), the system automatically installs the _PHP-FPM Service for cPanel Daemons_. The system also enables the _PHP-FPM Service for cPanel Daemons_ when you update or remove _WP Toolkit_ from the server.

### WHM Marketplace

To install the _WP Toolkit_ plugin in the [_WHM Marketplace_](https://docs.cpanel.net/whm/server-configuration/whm-marketplace/) interface ( _WHM » Home » Server Configuration » WHM Marketplace_), perform the following steps as the `root` user:

1. Navigate to the [_WHM Marketplace_](https://docs.cpanel.net/whm/server-configuration/whm-marketplace/) interface ( _WHM » Home » Server Configuration » WHM Marketplace_).
2. Locate the _WP Toolkit_ listing under _Add Extensions_ and click _Install_.

### Manual installation

To install the _WP Toolkit_ plugin on the command line, run the following command as the `root` user:

```bash
bash <(curl https://wp-toolkit.plesk.com/cPanel/installer.sh || wget -O - https://wp-toolkit.plesk.com/cPanel/installer.sh)
```

### WHM configuration

You **must** fulfill these requirements to use the _WP Toolkit_ plugin:

- WordPress **only** supports MySQL® version 5.7 and later. To update your server’s version of MySQL to 5.7 and later, use WHM’s [_MySQL/MariaDB Upgrade_](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/) interface ( _WHM » Home » SQL Services » MySQL/MariaDB Upgrade_).

- Enable the [_PHP-FPM Service for cPanel Daemons_](https://docs.cpanel.net/whm/service-configuration/service-manager/#service-daemons), which must **remain** enabled to use the _WP Toolkit_.

- To enable any required WordPress PHP extensions, use the [_PHP Extensions_](https://docs.cpanel.net/ea4/php/php-options/#php-extensions) section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_). For a list of these PHP extensions, read [WordPress’ Server Environment](https://make.wordpress.org/hosting/handbook/handbook/server-environment/#php-extensions) documentation. To update your server’s PHP version, use WHM’s [_EasyApache_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).

- The _WP Toolkit_ plugin requires a PHP `memory_limit` value of 128 MB or higher. You can set this limit in [_WHM’s MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor/) interface ( _WHM » Home » Software » MultiPHP INI Editor_).

- In the [Feature Manager](https://docs.cpanel.net/whm/packages/feature-manager), enable the following features:
  - _WP Toolkit_
  - _MySQL_
  - _Subdomains_
  - _MIME Types_
  - _Cronjobs_
  - _Directory Privacy_
  - _Password & Security_
  - _File Manager_
  - _Redirects_

For information about software versions WordPress requires to run properly, read [WordPress’ Requirements](https://wordpress.org/about/requirements/) documentation.

#### Enable Deluxe features

_WP Toolkit_ is available in a standard version and a _Deluxe_ version. To use _WP Toolkit Deluxe_ features, enable **both** the _WP Toolkit_ and _WP Toolkit Deluxe_ features in the [Feature Manager](https://docs.cpanel.net/whm/packages/feature-manager).

The following table shows the differences between the _WP Toolkit_ and _WP Toolkit Deluxe_ version features:

| Feature | WP Toolkit | WP Toolkit Deluxe |
| --- | --- | --- |
| _Customizable Installation_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Manage Existing Installations_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Website Dashboard_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _1-Click Login_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Change Admin Password_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Change DB Password_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Open DB in phpMyAdmin_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Backups_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Manual Updates_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Manage Plugins and Themes_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Upload Plugins and Themes_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Logs_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _WordPress Integrity Check_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Plugin and Theme Sets_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Automatic Updates (Single Site)_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Maintenance Mode_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Debug Management_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Password Protection_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Search Engine Indexing Management_ | ![](https://docs.cpanel.net/img/checkbox.png) | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Staging and Cloning_ |  | ![](https://docs.cpanel.net/img/checkbox.png) |
| _1-Click Hardening_ |  | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Automatic Hardening_ |  | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Multiple Hardening_ |  | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Security Rollback_ |  | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Mass Site Management_ |  | ![](https://docs.cpanel.net/img/checkbox.png) |
| _Smart Updates_ |  | ![](https://docs.cpanel.net/img/checkbox.png) |

## Updates to WP Toolkit

Updates to the _WP Toolkit_ run nightly.

To check the system’s auto-update status, run the following command as the `root` user:

```bash
systemctl status wp-toolkit-scheduled-tasks
```

To force an auto-update run, run the following command as the `root` user:

```bash
su wp-toolkit --shell=/bin/bash -c '/usr/bin/sw-engine -d auto_prepend_file=/usr/local/cpanel/3rdparty/wp-toolkit/scripts/scheduled-task-prepend-file.php /usr/local/cpanel/3rdparty/wp-toolkit/plib/scripts/instances-auto-update.php'
```

## Troubleshoot WP Toolkit

The log files for the _WP Toolkit_ reside in the `/usr/local/cpanel/3rdparty/wp-toolkit/var/logs/` directory.

To troubleshoot the _WP Toolkit_, run the following command, where `filename` represents the log file’s name:

```bash
grep -A1 ERROR /usr/local/cpanel/3rdparty/wp-toolkit/var/logs/filename.log
```

You can also enable enhanced logging to debug and troubleshoot the _WP Toolkit_.

Warning:

We **strongly** recommend that you **only** enable enhanced logging when you need to troubleshoot the _WP Toolkit_. Enhanced logging may slow down _WP Toolkit_’s performance significantly, since it automatically creates large log files.

To enable enhanced logging, add the following line to the `/usr/local/cpanel/3rdparty/wp-toolkit/var/etc/config.ini` file:

```bash
logCommandsAndFileOperations = true
```

## Uninstall WP Toolkit

To uninstall the _WP Toolkit_ plugin on the command line, run one of the following commands as the `root` user:

- Red Hat®-based servers




```bash
rpm -e wp-toolkit-cpanel
```

- Ubuntu®-based servers




```bash
apt-get purge wp-toolkit-cpanel
```


#### Additional Documentation

* * *

- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [How to Install WordPress® With cPanel](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/)
- [The migrate\_legacy\_wordpress\_to\_modern\_wordpress Script](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/)
- [WP Toolkit](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/)
- [WP Toolkit Command Line Interface](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×