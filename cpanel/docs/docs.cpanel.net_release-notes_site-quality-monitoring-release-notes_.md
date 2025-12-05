---
url: "https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/"
title: "Site Quality Monitoring Release Notes | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [Release Notes](https://docs.cpanel.net/release-notes/)
3. [Additional Release Notes](https://docs.cpanel.net/release-notes/other/)
4. Site Quality Monitoring Release Notes


[releasenotes](https://docs.cpanel.net/tags/releasenotes/) [sitequality](https://docs.cpanel.net/tags/sitequality/)

#### Table of Contents

[Site Quality Monitoring 2.0.0-2](https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/#site-quality-monitoring-200-2)

* * *

[Site Quality Monitoring adds crawl depth](https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/#site-quality-monitoring-adds-crawl-depth)

* * *

[Site Quality Monitoring adds subscriptions](https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/#site-quality-monitoring-adds-subscriptions)

* * *

[Site Quality Monitoring version 1.0 now available on cPanel & WHM version 110](https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/#site-quality-monitoring-version-10-now-available-on-cpanel--whm-version-110)

* * *

[Site Quality Monitoring version 1.0](https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/#site-quality-monitoring-version-10)

* * *

[New UAPI functions](https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/#new-uapi-functions)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/#table-of-contents-toggle)

[Site Quality Monitoring 2.0.0-2](https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/#site-quality-monitoring-200-2)

* * *

[Site Quality Monitoring adds crawl depth](https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/#site-quality-monitoring-adds-crawl-depth)

* * *

[Site Quality Monitoring adds subscriptions](https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/#site-quality-monitoring-adds-subscriptions)

* * *

[Site Quality Monitoring version 1.0 now available on cPanel & WHM version 110](https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/#site-quality-monitoring-version-10-now-available-on-cpanel--whm-version-110)

* * *

[Site Quality Monitoring version 1.0](https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/#site-quality-monitoring-version-10)

* * *

[New UAPI functions](https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/#new-uapi-functions)

* * *

## Site Quality Monitoring Release Notes

Last modified: _2025 August 8_

* * *

## Site Quality Monitoring 2.0.0-2

_Released August 7, 2025_

We published a release for performance, usability, and stability improvements. For a full list of changes, read the [Site Quality Monitoring change log](https://docs.cpanel.net/changelogs/site-quality-monitoring-change-log/).

* * *

## Site Quality Monitoring adds crawl depth

_Released November 2024_

Users can now [crawl at specific depths](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/). This allows users to quickly check a website for issues if they don’t want to dedicate the time for a more in-depth crawl.

## Site Quality Monitoring adds subscriptions

_Released June 2024_

We added [subscriptions](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-a-site-quality-monitoring-subscription) to the [Site Quality Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/) feature. Users whose hosting providers enable it can now purchase up to ten Site Quality Monitoring subscriptions to gain extra monitoring capabilities. Subscriptions offer more frequent health checks, more monitored URLs, e-commerce monitoring, and other benefits to help you find and fix common website issues faster. Additionally, users whose hosting providers enable subscriptions will now have access to the [_Extras_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/) tab.

## Site Quality Monitoring version 1.0 now available on cPanel & WHM version 110

_Released February 2024_

We added the [Site Quality Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/) feature to cPanel & WHM version 110.

## Site Quality Monitoring version 1.0

_Released January 2024_

We added the [Site Quality Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/) feature to cPanel & WHM version 116 and later. cPanel users can use the _Site Quality Monitoring_ interface ( _cPanel » Home » Metrics » Site Quality Monitoring_) to [monitor a cPanel-managed website and URL](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/), [see current and past website errors](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-website-summary/), and [set email notifications](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#configure-alert-emails) to ensure that you can address problems quickly and efficiently. The feature watches your website for availability, SEO rank, broken links, and more.

### New UAPI functions

- [`SiteQuality::create_project`](https://api.docs.cpanel.net/openapi/cpanel/operation/SiteQuality-create_project/) — This function adds a new domain to the _Site Quality Monitoring_ interface ( _cPanel » Home » Metrics » Site Quality Monitoring_).
- [`SiteQuality::create_site_quality_user`](https://api.docs.cpanel.net/openapi/cpanel/operation/SiteQuality-create_site_quality_user/) — This function creates a Site Quality Monitoring user account associated with a cPanel user account.
- [`SiteQuality::get_app_token`](https://api.docs.cpanel.net/openapi/cpanel/operation/SiteQuality-get_app_token/) — This function returns the long-lived application token used to authenticate with [koality’s](https://www.koality.io/) authentication servers.
- [`SiteQuality::has_site_quality_user`](https://api.docs.cpanel.net/openapi/cpanel/operation/SiteQuality-has_site_quality_user/) — This function returns whether the cPanel user has an associated Site Quality Monitoring account.
- [`SiteQuality::is_site_quality_user_enabled`](https://api.docs.cpanel.net/openapi/cpanel/operation/SiteQuality-is_site_quality_user_enabled/) — This function verifies that koality has enabled the cPanel user’s Site Quality Monitoring account.
- [`SiteQuality::reset_config`](https://api.docs.cpanel.net/openapi/cpanel/operation/SiteQuality-reset_config/) — This function will remove Site Quality Monitoring account data from the cPanel user’s configuration.
- [`SiteQuality::send_activation_email`](https://api.docs.cpanel.net/openapi/cpanel/operation/SiteQuality-send_activation_email/) — This function sends a Site Quality Monitoring activation email to the currently-authenticated Site Quality Monitoring user.
- [`SiteQuality::verify_code`](https://api.docs.cpanel.net/openapi/cpanel/operation/SiteQuality-verify_code/) — This function validates the activation code in a cPanel user’s Site Quality Monitoring registration email.
- [`SiteQuality::get_all_scores`](https://api.docs.cpanel.net/openapi/cpanel/operation/SiteQuality-get_all_scores/) — This function fetches the score data for the cPanel user’s most recent monitoring checks.

#### Additional Documentation

* * *

- [Third-Party Applications Updates](https://docs.cpanel.net/knowledge-base/cpanel-product/third-party-applications/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×