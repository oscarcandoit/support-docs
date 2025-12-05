---
url: "https://docs.cpanel.net/cpanel/metrics/errors/"
title: "Errors | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/metrics/errors/#main-content)

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
4. Errors


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [apache](https://docs.cpanel.net/tags/apache/) [logs](https://docs.cpanel.net/tags/logs/) [nginx](https://docs.cpanel.net/tags/nginx/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/metrics/errors/#overview)

* * *

[Error details](https://docs.cpanel.net/cpanel/metrics/errors/#error-details)

* * *

[Additional information](https://docs.cpanel.net/cpanel/metrics/errors/#additional-information)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/metrics/errors/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/metrics/errors/#overview)

* * *

[Error details](https://docs.cpanel.net/cpanel/metrics/errors/#error-details)

* * *

[Additional information](https://docs.cpanel.net/cpanel/metrics/errors/#additional-information)

* * *

## Errors

![](https://docs.cpanel.net/img/cpanel-icons/errors.svg)

_Valid for versions 102 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/cpanel/metrics/errors/)

Last modified: _2025 February 4_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The interface displays up to 300 of the most recent entries in your web server’s error logs, in reverse chronological order.

## Error details

The interface includes entries in the the `/var/log/apache2/` file.

Note:

This interface works with [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy) and [Apache®](https://docs.cpanel.net/ea4/apache/about-apache/). If you run NGINX on your server, this interface only displays the errors for web traffic from the Apache logs. NGINX and Apache log different types of errors to their error log, and NGINX’s log does **not** log web traffic.

The interface displays error log entries from the user’s domains. The interface also displays entries that include the username for the account from the `/var/log/apache2/suexec_log` file.

- To view older entries, access the individual log files.
- The Apache logs record all of the requests that Apache handles. Tasks that other services handle may have separate log locations.

## Additional information

The server handles the configuration of the log files. Contact your system administrator to change the level of information in the log files.

For more information about individual error messages, visit the [Apache log files documentation](https://httpd.apache.org/docs/current/logs.html).

#### Additional Documentation

* * *

- [Analog Stats](https://docs.cpanel.net/cpanel/metrics/analog-stats/)
- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [Application Manager](https://docs.cpanel.net/cpanel/software/application-manager/)
- [Awstats](https://docs.cpanel.net/cpanel/metrics/awstats/)
- [Raw Access](https://docs.cpanel.net/cpanel/metrics/raw-access/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×