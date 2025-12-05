---
url: "https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/"
title: "Site Quality Monitoring — Crawling | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/#main-content)

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
4. Site Quality Monitoring — Crawling


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [sitequality](https://docs.cpanel.net/tags/sitequality/)

#### Table of Contents

- [Site Quality Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/)
- [Crawling](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/)
[Overview](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/#overview) [Dead links](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/#dead-links) [Missing images and files](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/#missing-images-and-files) [Oversize files](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/#oversize-files) [Result report](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/#result-report) - [Extras](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/)
- [Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/)
- [Settings](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/)
- [Website Summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-website-summary/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/#installation-toggle)

- [Site Quality Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/)
- [Crawling](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/)
[Overview](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/#overview) [Dead links](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/#dead-links) [Missing images and files](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/#missing-images-and-files) [Oversize files](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/#oversize-files) [Result report](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/#result-report) - [Extras](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/)
- [Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/)
- [Settings](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/)
- [Website Summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-website-summary/)

## Site Quality Monitoring — Crawling

![](https://docs.cpanel.net/img/cpanel-icons/cpanel-koality-plugin.svg)

Last modified: _2024 November 19_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The _Crawling_ tab contains monitoring checks that you can run yourself. Each check here is also known as a crawl.

## Dead links

The _Dead links_ tab contains a crawler that checks whether the links on your monitored website return data. For example, if you add a link to your monitored website that leads to an image you have taken off the Internet, that link will not return data. The crawler will register the link as _dead_.

Click _`Number` URLs_ to begin a [crawl](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#crawl) of your monitored website for dead links, where `Number` represents the number of pages the feature will crawl.

Important:

This action will **not** reset the [countdown bar](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#the-monitoring-check-countdown-bar).

When you begin a manual crawl for the first time, this tab will update to contain a _Past Checks_ table. This table will contain the following columns for all dead link crawls you have performed on your monitored website:

| Column | Description |
| --- | --- |
| _Date_ | The day that you ran the manual crawl. |
| _Found Pages_ | The number of pages that the Site Quality Monitoring feature found on your monitored website. If this number is greater than `0`, you may click it to open that past check’s [result report](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/#result-report). The result report will open. |
| _Searched Pages_ | The number of pages that the Site Quality Monitoring feature crawled on your monitored website. |
| _Status_ | The status of the monitoring crawl. |

Click _Stop all crawls that are currently running._ to stop a manual crawl in progress.

The Site Quality Monitoring feature will email the addresses you have added to the [_Configure alert emails_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#configure-alert-emails) tab when it finishes the crawl.

## Missing images and files

The _Missing images and files_ tab contains a crawler that checks whether the JavaScript, CSS, and image files on your monitored website load. For example, if you try to display an image file that you have deleted on a page on your monitored website, the page will return a failure code to the crawler.

Click _`Number` URLs_ to begin a [crawl](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#crawl) of your monitored website for missing images and files, where `Number` represents the number of pages the feature will crawl.

Important:

This action will **not** reset the [countdown bar](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#the-monitoring-check-countdown-bar).

When you begin a manual crawl for the first time, this tab will update to contain a _Past Checks_ table. This table will contain the following columns for all missing images and files crawls you have performed on your monitored website:

| Column | Description |
| --- | --- |
| _Date_ | The day that you ran the manual crawl. |
| _Found Pages_ | The number of pages that the Site Quality Monitoring feature found on your monitored website. If this number is greater than `0`, you may click it to open that past check’s [result report](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/#result-report). The result report will open. |
| _Searched Pages_ | The number of pages that the Site Quality Monitoring feature crawled on your monitored website. |
| _Status_ | The status of the monitoring crawl. |

Click _Stop all crawls that are currently running._ to stop a manual crawl in progress.

The Site Quality Monitoring feature will email the addresses you have added to the [_Configure alert emails_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#configure-alert-emails) tab when it finishes the crawl.

## Oversize files

The _Oversize files_ tab contains a crawler that checks if your monitored website’s JavaScript, CSS, and image files are each smaller than 1 MB. For example, if you add a CSS file that is 3 MB, it will produce a failure.

Click _`Number` URLs_ to begin a [crawl](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#crawl) of your monitored website for oversize files, where `Number` represents the number of pages the feature will crawl.

Important:

This action will **not** reset the [countdown bar](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#the-monitoring-check-countdown-bar).

When you begin a manual crawl for the first time, this tab will update to contain a _Past Checks_ table. This table will contain the following columns for all oversize file crawls you have performed on your monitored website:

| Column | Description |
| --- | --- |
| _Date_ | The day that you ran the manual crawl. |
| _Found Pages_ | The number of pages that the Site Quality Monitoring feature found on your monitored website. If this number is greater than `0`, you may click it to open that past check’s [result report](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/#result-report). The result report will open. |
| _Searched Pages_ | The number of pages that the Site Quality Monitoring feature crawled on your monitored website. |
| _Status_ | The status of the monitoring crawl. |

Click _Stop all crawls that are currently running._ to stop a manual crawl in progress.

The Site Quality Monitoring feature will email the addresses you have added to the [_Configure alert emails_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#configure-alert-emails) tab when it finishes the crawl.

## Result report

The result report displays the information from past crawls. This report is divided into two sections, where `Number` refers to the number of pages in each category:

| Section | Description |
| --- | --- |
| _Found Page (`Number`)_ | This section contains a list of each page that failed the crawler’s search. The list displays the affected domain, the URL that produced the failure, and HTTP code that the page returned, if any. |
| _Examined Pages (`Number`)_ | This section contains a list of each page that did **not** fail the crawler’s search. The list displays the URL of each page the crawler checked. |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×