---
url: "https://docs.cpanel.net/ea4/apache/advanced-apache-configuration-the-paths-conf-file/"
title: "Advanced Apache Configuration - The paths.conf File | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration-the-paths-conf-file/#main-content)

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
3. [Apache](https://docs.cpanel.net/ea4/apache/)
4. Advanced Apache Configuration - The paths.conf File


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration-the-paths-conf-file/#overview)

* * *

[Default file paths](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration-the-paths-conf-file/#default-file-paths)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration-the-paths-conf-file/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration-the-paths-conf-file/#overview)

* * *

[Default file paths](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration-the-paths-conf-file/#default-file-paths)

* * *

## Advanced Apache Configuration - The paths.conf File

Last modified: _2024 September 20_

* * *

## Overview

To improve future compatibility within the cPanel & WHM codebase, we eliminated the use of hardcoded Apache file and directory paths.

Warning:

We **strongly** recommend that you do not change Apache configuration file locations. EasyApache 4 controls the `/etc/cpanel/ea4/paths.conf` file with the `ea-apache24-config-runtime` package, and you can **only** change these values if you create a custom webstack.

## Default file paths

By default, EasyApache 4 sets the following file paths:

| Alias | File path |
| --- | --- |
| `dir_domlogs` | `/etc/apache2/logs/domlogs` |
| `bin_httpd` | `/usr/sbin/httpd` |
| `bin_apachectl` | `/usr/sbin/apachectl` |
| `bin_suexec` | `/usr/sbin/suexec` |
| `dir_docroot` | `/var/www/html` |
| `file_conf_php_conf` | `/etc/apache2/conf.d/php.conf` |
| `dir_modules` | `/etc/apache2/modules` |
| `dir_conf_userdata` | `/etc/apache2/conf.d/userdata` |
| `file_conf` | `/etc/apache2/conf/httpd.conf` |
| `dir_base` | `/etc/apache2` |
| `dir_conf` | `/etc/apache2/conf.d` |
| `file_access_log` | `/etc/apache2/logs/access_log` |
| `file_error_log` | `/etc/apache2/logs/error_log` |
| `dir_conf_includes` | `/etc/apache2/conf.d/includes` |
| `dir_run` | `/run/apache2` |
| `file_conf_mime_types` | `/etc/apache2/conf/mime.types` |
| `dir_logs` | `/etc/apache2/logs` |
| `file_conf_srm_conf` | `/etc/apache2/conf.d/srm.conf` |

For more information about EasyApache 4 and Apache, read our [About Apache](https://docs.cpanel.net/ea4/apache/about-apache) documentation.

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Configure cPanel Cron Jobs](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/)
- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×