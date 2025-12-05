---
url: "https://docs.cpanel.net/cpanel/metrics/visitors/"
title: "Visitors | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/metrics/visitors/#main-content)

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
4. Visitors


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [stats](https://docs.cpanel.net/tags/stats/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/metrics/visitors/#overview)

* * *

[View latest visitor details](https://docs.cpanel.net/cpanel/metrics/visitors/#view-latest-visitor-details)

* * *

[Additional data](https://docs.cpanel.net/cpanel/metrics/visitors/#additional-data)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/metrics/visitors/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/metrics/visitors/#overview)

* * *

[View latest visitor details](https://docs.cpanel.net/cpanel/metrics/visitors/#view-latest-visitor-details)

* * *

[Additional data](https://docs.cpanel.net/cpanel/metrics/visitors/#additional-data)

* * *

## Visitors

![](https://docs.cpanel.net/img/cpanel-icons/visitors.svg)

_Valid for versions 102 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/cpanel/metrics/visitors/)

Last modified: _2025 February 4_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface displays detailed information about recent visits to your website. This information helps you to learn about your audience and monitor frequent visitors so that you can adjust your website content to fit their needs. It also helps you locate and fix errors, such as missing pages or broken links.

If your server runs [Apache®](https://docs.cpanel.net/ea4/apache/about-apache/), this interface displays entries from the following files, where `domainname` represents the domain:

- SSL — `/var/log/apache2/domlogs/`
- Non-SSL— `/usr/local/apache/domlogs/domainname`

If your server runs [NGINX®](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy), this interface displays entries from one of the following files, where `domainname` represents the domain:

- Piped logging is enabled —The interface displays entries from one of the following files, depending on whether SSL is enabled or not:
  - SSL — `/var/log/nginx/domains/domainname-ssl_log`
  - Non-SSL — `/var/log/nginx/domains/domainname`
- Piped logging is **not** enabled — `/var/log/nginx/domains/domainname`

Logs for Apache will **not** appear when NGINX is enabled, and vice versa. For more information, read our [NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/#log-files) documentation.

Note:

If your hosting provider rotates the log file, the interface will display fewer entries.

## View latest visitor details

To view your latest visitor details, click the magnifying glass icon (![magnifying glass icon](https://docs.cpanel.net/img/glass-icon.jpg)) for that domain.

By default, the interface displays the following information:

- _IP_ — The visitors’ IP address.

- _URL_ — The specific URL that the visitor accessed.

- _Time_ — The time when the visitor accessed your website.

- _Size (bytes)_ — The amount of data that the server sent to the visitor for this resource.

- _Referring URL_ — The web address from which the visitor navigated to the resource.

- _User Agent_ — The browser that the visitor used to access your website.


## Additional data

Click the gear icon (![Gear](https://docs.cpanel.net/img/gear.png)) to choose to display the following additional data:

- _Status_ — The [HTTP code](https://docs.cpanel.net/knowledge-base/web-services/http-error-codes-and-quick-fixes/) indicates whether the resource loaded successfully or resulted in an error.

- _Method_ — The request-response between the client and server (for example, GET or POST).

- _Protocol_ — The version of HTTP that the server used to serve the resource to the visitor (for example, 1.1).


To search for additional records, enter your search criteria in the _Search_ text box.

#### Additional Documentation

* * *

- [Analog Stats](https://docs.cpanel.net/cpanel/metrics/analog-stats/)
- [Awstats](https://docs.cpanel.net/cpanel/metrics/awstats/)
- [Metrics Editor](https://docs.cpanel.net/cpanel/metrics/metrics-editor/)
- [Raw Access](https://docs.cpanel.net/cpanel/metrics/raw-access/)
- [Webalizer](https://docs.cpanel.net/cpanel/metrics/webalizer/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×