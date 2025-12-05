---
url: "https://docs.cpanel.net/knowledge-base/php-fpm/apache-vs-php-fpm-bottleneck-with-child-processes/"
title: "Apache vs. PHP-FPM Bottleneck with Child Processes | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/php-fpm/apache-vs-php-fpm-bottleneck-with-child-processes/#main-content)

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
4. Apache vs. PHP-FPM Bottleneck with Child Processes


[ea4](https://docs.cpanel.net/tags/ea4/) [php](https://docs.cpanel.net/tags/php/) [fpm](https://docs.cpanel.net/tags/fpm/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/php-fpm/apache-vs-php-fpm-bottleneck-with-child-processes/#overview)

* * *

[The issue](https://docs.cpanel.net/knowledge-base/php-fpm/apache-vs-php-fpm-bottleneck-with-child-processes/#the-issue)

* * *

[The solution](https://docs.cpanel.net/knowledge-base/php-fpm/apache-vs-php-fpm-bottleneck-with-child-processes/#the-solution)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/php-fpm/apache-vs-php-fpm-bottleneck-with-child-processes/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/php-fpm/apache-vs-php-fpm-bottleneck-with-child-processes/#overview)

* * *

[The issue](https://docs.cpanel.net/knowledge-base/php-fpm/apache-vs-php-fpm-bottleneck-with-child-processes/#the-issue)

* * *

[The solution](https://docs.cpanel.net/knowledge-base/php-fpm/apache-vs-php-fpm-bottleneck-with-child-processes/#the-solution)

* * *

## Apache vs. PHP-FPM Bottleneck with Child Processes

Last modified: _2021 March 11_

* * *

## Overview

Apache servers that use the `prefork` MPM with fewer server instances than the maximum number of PHP-FPM child processes may experience performance issues. This document explains how to resolve these dependency issues.

Important:

This issue and solution **only** apply to servers that run Apache’s `prefork` MPM.

## The issue

In the following scenario, the PHP-FPM server’s configuration allows a maximum of 20 PHP-FPM child processes and the Apache server’s configuration allows five server instances.

The following example represents the PHP-FPM server’s configuration file:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>_is_present: 1<br>pm_max_children: 20<br>pm_max_requests: 20<br>``` |

The following example represents the Apache server’s configuration file:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```bash<br>StartServers: 5<br><IfModule prefork.c><br>MinSpareServers: 10<br>MaxSpareServers: 10<br></IfModule><br>``` |

If the Apache server receives 20 requests, it immediately passes ten of those requests to the available PHP-FPM child processes. After PHP-FPM processes those requests, Apache will pass another ten requests to PHP-FPM.

Warning:

For high-volume servers, this configuration can cause severe performance issues.

## The solution

To solve this issue, you **must** configure Apache to allow enough server instances to handle the maximum number of PHP-FPM child processes. To do this, configure the following options in WHM’s [_Global Configuration_](https://docs.cpanel.net/whm/service-configuration/global-configuration) interface ( _WHM » Home » Service Configuration » Global Configuration_):

- _Minimum Spare Servers_

- _Maximum Spare Servers_

- _Max Request Workers_


Set these options to a value greater than or equal to the `pm_max_children` setting in the PHP-FPM server’s configuration file.

#### Additional Documentation

* * *

- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [MultiPHP Manager for WHM — System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [The php\_fpm\_config Script](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×