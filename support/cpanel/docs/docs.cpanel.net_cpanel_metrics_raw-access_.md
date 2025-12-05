---
url: "https://docs.cpanel.net/cpanel/metrics/raw-access/"
title: "Raw Access | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/metrics/raw-access/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Metrics](https://docs.cpanel.net/cpanel/metrics/)
4. Raw Access


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [stats](https://docs.cpanel.net/tags/stats/) [logs](https://docs.cpanel.net/tags/logs/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/metrics/raw-access/#overview)

* * *

[Configure Logs](https://docs.cpanel.net/cpanel/metrics/raw-access/#configure-logs)

* * *

[Download Current Raw Access Logs](https://docs.cpanel.net/cpanel/metrics/raw-access/#download-current-raw-access-logs)

* * *

[Archived Raw Logs](https://docs.cpanel.net/cpanel/metrics/raw-access/#archived-raw-logs)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/metrics/raw-access/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/metrics/raw-access/#overview)

* * *

[Configure Logs](https://docs.cpanel.net/cpanel/metrics/raw-access/#configure-logs)

* * *

[Download Current Raw Access Logs](https://docs.cpanel.net/cpanel/metrics/raw-access/#download-current-raw-access-logs)

* * *

[Archived Raw Logs](https://docs.cpanel.net/cpanel/metrics/raw-access/#archived-raw-logs)

* * *

## Raw Access

![](https://docs.cpanel.net/img/cpanel-icons/raw_access.svg)

_Valid for versions 102 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/cpanel/metrics/raw-access/)

Last modified: _2025 February 4_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Raw access logs are compressed text files that contain information about your website’s visitors. The logs also contain information about the content your visitors access. This feature allows you to download a `.gz` file that contains your access log. You can access logs for both [Apache®](https://docs.cpanel.net/ea4/apache/about-apache/) and [NGINX®](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy).

Note:

This interface will **not** show [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/) logs for NGINX. It only shows ModSecurity 2 logs for Apache.

## Configure Logs

This section allows you to configure cPanel to automatically archive logs. You can also configure when to automatically delete them.

- Select the _Archive log files in your home directory after the system processes statistics._ checkbox to compress and archive log files to the `/home/username/logs` directory after the system processes your website’s statistics. By default, the system processes website statistics every 24 hours.







Note:





Your system administrator may change the process frequency or manually request a statistics run.

- Select the _Remove the previous month’s archived logs from your home directory at the end of the month._ checkbox to remove the previous month’s logs at the end of each month.

- Click _Save_ to save your changes.


## Download Current Raw Access Logs

This section lists the domains on your account, as well as the log information.

- _Domain_ — A list of the domains on your account. To access a domain’s raw access log, perform the following steps:

1. Click the desired link to download that domain’s raw access log.
2. Open the `.gz` file to view it.
- _Last Update_ — The date of the most recent update to the log file.
- _Disk Usage_ — The amount of disk space that the log file uses.
- _Linked Domains_ — The list of domains parked on top of the domain.

Note:

If your system runs NGINX and does **not** use piped logging, the SSL and non-SSL files will be the same.

## Archived Raw Logs

This section lists the archived logs that your `/home` directory contains. Click the filename to download an archived log file. You can also view the log file through the command line in your `/home/username/logs` directory.

Notes:

- The system **only** updates the archive at the end of each month. For more information, read our [cPanel Log Rotation Configuration](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration) documentation.

- If no archive log files exist, this directory will remain empty.

- Any logs generated by NGINX will contain `_NGINX` in the file name.


#### Additional Documentation

* * *

- [Analog Stats](https://docs.cpanel.net/cpanel/metrics/analog-stats/)
- [Awstats](https://docs.cpanel.net/cpanel/metrics/awstats/)
- [Errors](https://docs.cpanel.net/cpanel/metrics/errors/)
- [Metrics Editor](https://docs.cpanel.net/cpanel/metrics/metrics-editor/)
- [Visitors](https://docs.cpanel.net/cpanel/metrics/visitors/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×