---
url: "https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/"
title: "Site Quality Monitoring | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#main-content)

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
4. Site Quality Monitoring


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [sitequality](https://docs.cpanel.net/tags/sitequality/)

#### Table of Contents

- [Site Quality Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/)
[Overview](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#overview) [Requirements](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#requirements) [Color indicators](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#color-indicators) [Error types](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#error-types) [Scores](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#scores) [All monitored websites](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#all-monitored-websites) [The monitored website overview list](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#the-monitored-website-overview-list) [Unassigned subscriptions](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#unassigned-subscriptions) [Add a new monitored website](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#add-a-new-monitored-website) [The monitoring check countdown bar](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#the-monitoring-check-countdown-bar) [Upgrade subscription](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#upgrade-subscription) [Ready to upgrade your subscription?](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#ready-to-upgrade-your-subscription) [User settings](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#user-settings) - [Crawling](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/)
- [Extras](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/)
- [Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/)
- [Settings](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/)
- [Website Summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-website-summary/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#installation-toggle)

- [Site Quality Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/)
[Overview](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#overview) [Requirements](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#requirements) [Color indicators](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#color-indicators) [Error types](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#error-types) [Scores](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#scores) [All monitored websites](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#all-monitored-websites) [The monitored website overview list](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#the-monitored-website-overview-list) [Unassigned subscriptions](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#unassigned-subscriptions) [Add a new monitored website](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#add-a-new-monitored-website) [The monitoring check countdown bar](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#the-monitoring-check-countdown-bar) [Upgrade subscription](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#upgrade-subscription) [Ready to upgrade your subscription?](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#ready-to-upgrade-your-subscription) [User settings](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#user-settings) - [Crawling](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/)
- [Extras](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/)
- [Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/)
- [Settings](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/)
- [Website Summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-website-summary/)

## Site Quality Monitoring

![](https://docs.cpanel.net/img/cpanel-icons/cpanel-koality-plugin.svg)

Last modified: _2025 August 27_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The Site Quality Monitoring feature allows you to monitor websites for common issues, such as low [Search Engine Optimization (SEO)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#search-engine-optimization-seo) ranking and performance problems.

The Site Quality Monitoring feature contains the following tabs:

| Tab | Description |
| --- | --- |
| [_Crawling_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/) | The _Crawling_ tab contains the _Dead links_, _Missing images and files_, and _Oversize files_ tabs. |
| [_Extras_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/) | The _Extras_ tab contains the _Integrations_ tab, as well as the configuration tab for some monitoring extension you configure through the _Integrations_ tab. <br>Important:<br>This tab **only** appears if your hosting provider enables Site Quality Monitoring subscriptions. For more information about subscriptions, read our [How to Manage a Site Quality Monitoring Subscription](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-a-site-quality-monitoring-subscription) documentation. |
| [_Monitoring_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/) | The _Monitoring_ tab contains the _Availability_, _Performance_, _SEO_, _Content_, _Technical_, and _Security_ tabs. |
| [_Settings_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/) | The _Settings_ tab contains the _Monitored website manager_, _Monitored URL manager_, and _Configure email alerts_ tabs. |
| [_Website Summary_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-website-summary/) | The _Website Summary_ tab contains the _Rating_, _Current findings_, and _Past findings_ tabs for your monitored website. |

## Requirements

To see the Site Quality Monitoring feature, you must meet the following requirements:

| Requirement | Description |
| --- | --- |
| cPanel & WHM version | This feature is **only** available in cPanel & WHM version 110 or version 116 and later. For more information, read our [Site Quality Monitoring Release Notes](https://docs.cpanel.net/release-notes/site-quality-monitoring-release-notes/) documentation. |
| Sign-up process | To use this feature, you **must** first [complete the sign-up process](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-activate-a-site-quality-monitoring-subscription/) and choose an initial subscription type. To do so, follow all instructions in the interface. |
| Hosting provider enablement | This feature **only** appears if your hosting provider enables it. If you do not see this feature in the [cPanel](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/) interface ( _cPanel » Home_) when you should, contact your hosting provider. |

## Color indicators

The Site Quality Monitoring feature includes color indicators. These color indicators reflect the presence of monitoring check errors and failures in the following ways:

| Color | Description |
| --- | --- |
| Green | Your monitored website has passed all monitoring checks in this category. |
| Yellow | Your monitored website has non-critical errors or failures in this monitoring check category. |
| Red | Your monitored website has critical errors in this monitoring check category. |

## Error types

The Site Quality Monitoring feature divides common website errors into types based on their severity. The feature uses the following error types:

| Error type | Description |
| --- | --- |
| _Critical_ | Errors in this category prevent users from accessing or interacting with a monitored URL or website. |
| _Non-critical/Moderate_ | Errors in this category degrade user experience, but do not prevent users from accessing or interacting with a monitored URL or website. |

## Scores

The Site Quality Monitoring feature assigns scores from `0` to `100` to judge your website’s response to monitoring checks. A higher score indicates that your root domain or URL performs well in that category of monitoring checks. For example, a monitored website with an _Availability_ score of `100` in the left navigation menu is highly available. The monitored website’s users will be able to send requests to the website and receive an appropriate response quickly and efficiently.

## All monitored websites

The _All monitored websites_ section allows you to access an overview of all your monitored websites, see your unassigned subscriptions, and add new monitored websites.

### The monitored website overview list

If any of your monitored websites have critical error alerts, we will display them with the _Monitored websites with active critical error alerts:_ label. Otherwise, we will display them with the _Monitored websites without active critical error alerts:_ label.

Your monitored website will be displayed with its title, monitoring section health bars, and its subscription type. These health bars are color indicators.

You can hover over a monitoring check category’s health bar to view a score and a color indicator for specific checks within that monitoring check category.

To access your monitored website’s monitoring information, click its title. You can also click a monitoring check category or specific check to open their sections.

Opening the Site Quality Monitoring feature opens this section. To return to this section once you have exited it, click _Monitored websites_ in the top navigation bar to open the list of your current monitored websites. Then select _All monitored website + Monitor new website_ to re-open this section.

Once you select a specific monitored website from this section, the left navigation bar will appear.

The left navigation bar includes a monitored website’s _Website Summary_, _Monitoring_, _Crawling_, and _Settings_ tabs.

### Unassigned subscriptions

We display your number of unassigned subscriptions in the _You have `number` unassigned subscription(s)_ label above the _Monitor new website_ button, where `number` represents your unassigned subscriptions.

When you [upgrade a monitoring subscription](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-a-site-quality-monitoring-subscription/#upgrade-a-subscription) or [downgrade a website’s subscription without cancelling it](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-a-site-quality-monitoring-subscription/#downgrade-a-subscription), Site Quality Monitoring unassigns the subscription, but keeps it active so that you can assign it to another monitored website. For example, when you upgrade your monitored website on a `Free` subscription, we will unassign your `Free` subscription, but keep the subscription available to you. Therefore, when you upgrade a monitored website with a `Free` subscription to use another subscription type, this label will display _You have 1 unassigned subscription_.

For more information about how to manage your monitored website’s Site Quality Monitoring subscription, read our [How to Manage a Site Quality Monitoring Subscription](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-a-site-quality-monitoring-subscription/) documentation.

### Add a new monitored website

To add a new monitored website to Site Quality Monitoring, click _Monitor new website_. The _Ready to monitor a new website?_ menu will appear.

#### Ready to monitor a new website?

To add a new monitored website to Site Quality Monitoring, you must first select its subscription type. If you have an [unassigned](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#unassigned-subscriptions) subscription, you may click _Activate_ to attach it to your monitored website. Otherwise, click _Purchase_ under your desired subscription. A payment window will appear.

Once you have followed the instructions there to purchase your subscription, we will return you to the _All monitored websites_ section. The _Monitor new website_ menu will open.

#### Monitor new website

To add a new monitored website to Site Quality Monitoring, enter the following information into the menu:

- _Monitored website name\*_ — The display title for your monitored website.
- _Subscription type_ — Your subscription type.






Note:





You can only select an option if you have more than one [unassigned](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#unassigned-subscriptions) subscription. Otherwise, Site Quality Monitoring will automatically assign your unassigned subscription.

- _Location\*_ — Select the location nearest to your monitored website’s server.
- _Protocol_ — Your monitored website’s [protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).
- _Domain_ — Enter your root domain here. Your root domain is a combination of your [domain name](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#domain-name) and the [top-level domain.](https://en.wikipedia.org/wiki/Top-level_domain)
- _Email alerts_ — Select one of the following options:

  - _Standard alerting_ — Site Quality Monitoring will email the address you signed up with immediately upon detection of a critical error. It will also email you daily about non-critical errors or critical errors that you have not yet fixed.
  - _None_ \- Site Quality Monitoring will **not** email the address you signed up with to report error alerts.






    Note:





    For more information about critical and non-critical errors, read our [Error types](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#error-types) documentation above.

Click _Save_ to begin monitoring your new monitored website.

## The monitoring check countdown bar

The top navigation bar of the Site Quality Monitoring feature contains a monitoring check countdown bar. When the countdown reaches `0 days 0 hr. until next check`, the Site Quality Monitoring feature will perform the next round of monitoring checks. These check results appear in the _Monitoring_ tab. For more information about these checks, read our [Site Quality Monitoring — Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/) documentation.

When the monitoring check round completes, the countdown resets.

Note:

- This bar is **not** a color indicator.
- If the top navigation bar shows that _Data is being collected_, then the Site Quality Monitoring feature is currently performing a round of monitoring checks. It will reset the countdown when the monitoring check round is complete.
- You must run each crawl in the _Crawling_ tab manually. For more information about how to use the _Crawling_ tab, read our [Site Quality Monitoring — Crawling](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/) documentation.

## Upgrade subscription

Once you have selected a monitored website from the [_All monitored websites_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#all-monitored-websites) section, an _Upgrade subscription_ button will appear in the top navigation bar of the Site Quality Monitoring feature if you can upgrade that project’s subscription.

To upgrade a monitored website’s subscription, click the monitored website subscription label. The _Ready to upgrade your subscription?_ menu will appear.

Warning:

You **cannot** upgrade any subscription except for a `Free` subscription. For more information about how to manage a subscription, read our [How to Manage a Site Quality Monitoring Subscription](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-a-site-quality-monitoring-subscription/) documentation.

## Ready to upgrade your subscription?

The _Ready to upgrade your subscription?_ menu displays your monitored website’s current subscription type and available subscription types.

To activate an available `Free` subscription, click _Activate_.

To upgrade to your current monitored website’s monitoring to use a paid subscription, select the subscription type you want to upgrade to, then click _Upgrade_. A payment window will appear. Follow the instructions there and click _Subscribe_ to upgrade, or click _WebPros/Back_ to return to the [_All monitored websites_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring#all-monitored-websites) section.

For more information about subscription types, read our [How to Manage a Site Quality Monitoring Subscription](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-a-site-quality-monitoring-subscription/) documentation.

## User settings

In this section, you can set the Site Quality Monitoring feature’s timezone, view your subscriptions, and delete your Site Quality Monitoring account. To access the _User settings_ section, click _User settings_ in the top navigation bar.

You can perform the following actions in the _User settings_ menu:

- Edit the timezone — To set the timezone for the Site Quality Monitoring feature to use, select your preferred timezone in the _Timezone_ menu.
- Manage your current subscriptions — To manage your monitored website’s subscriptions, select _Subscriptions_. If you do not have an active subscription or your hosting provider has disabled subscriptions, the section will display a _No active subscriptions found._ message. If you do have active subscriptions, the section will display **all** your subscriptions and allow you to perform the following actions:

  - Upgrade your Site Quality Monitoring version — To upgrade from the `Free` version to the `Pro` version, click _Free_ under the _SKU_ column, then click _Upgrade to Pro_, then _Upgrade_.
  - Monitor a new website — If you have a subscription that does **not** have an associated monitored website, you may click _Monitor new website_. You will return to the _All monitored websites_ section and the _Monitor new website_ menu will appear. Enter the website information that you want to monitor and click _Save_ to begin monitoring it with that subscription’s capabilities.






    Note:





    For more information about how to manage your monitored website’s Site Quality Monitoring subscription, read our [How to Manage a Site Quality Monitoring Subscription](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-a-site-quality-monitoring-subscription/) documentation.

  - Cancel your subscription — To cancel your Site Quality Monitoring subscription, click _Cancel_, then in the new interface that appears, click _Cancel subscription_.






    Warning:





    This will remove the associated monitored website from monitoring and delete **all** its current monitoring data.
- Delete your account — To delete your Site Quality Monitoring account, select _Customer Details_, then perform the following actions:

1. Click _Delete your Site Quality Monitoring account_.
2. Select the _I understand and want to delete my account._ checkbox.
3. Click _Delete your Site Quality Monitoring account_.






     Warning:





     This will remove your websites from monitoring and **permanently** delete all of their current monitoring data.

To exit this section, click _Back to Monitored Websites_.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×