---
url: "https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/"
title: "Site Quality Monitoring — Extras | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/#main-content)

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
4. Site Quality Monitoring — Extras


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [sitequality](https://docs.cpanel.net/tags/sitequality/)

#### Table of Contents

- [Site Quality Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/)
- [Crawling](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/)
- [Extras](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/)
[Overview](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/#overview) [Integrations](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/#integrations) [Configure Slack alerts](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/#configure-slack-alerts) [Configure Microsoft Teams alerts](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/#configure-microsoft-teams-alerts) [Health Check](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/#health-check) [WordPress and WooCommerce Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/#wordpress-and-woocommerce-monitoring) - [Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/)
- [Settings](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/)
- [Website Summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-website-summary/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/#installation-toggle)

- [Site Quality Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/)
- [Crawling](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/)
- [Extras](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/)
[Overview](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/#overview) [Integrations](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/#integrations) [Configure Slack alerts](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/#configure-slack-alerts) [Configure Microsoft Teams alerts](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/#configure-microsoft-teams-alerts) [Health Check](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/#health-check) [WordPress and WooCommerce Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/#wordpress-and-woocommerce-monitoring) - [Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/)
- [Settings](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/)
- [Website Summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-website-summary/)

## Site Quality Monitoring — Extras

![](https://docs.cpanel.net/img/cpanel-icons/cpanel-koality-plugin.svg)

Last modified: _2024 November 19_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Important:

This tab is **only** available if your hosting provider has enabled Site Quality Monitoring subscriptions.

The _Extras_ tab contains the _Integrations_ tab, as well as the configuration tabs for any extensions and integrations you install through the _Integrations_ tab.

## Integrations

The _Integrations_ tab displays different monitoring extensions based on your Site Quality Monitoring subscription. These extensions offer extra monitoring capabilities that you may enable for no additional cost.

Note:

For more information about Site Quality Monitoring subscriptions, read our [How to Manage a Site Quality Monitoring Subscription](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-a-site-quality-monitoring-subscription) documentation.

To activate a new monitoring extension, click _Learn More_.

- If the extension’s information and activation menu contains an _Activate_ button, you can click it to activate the extension at no additional cost.
- If the _Upgrade subscription_ button appears, you must instead upgrade your subscription to access extensions.

## Configure Slack alerts

To configure the Site Quality Monitoring feature to send error alerts via Slack as well as emails, first activate the extension, then perform the following steps:

1. Navigate to the [_Configure alert emails_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#configure-alert-emails) section.
2. Click _Add Slack Notifications_. The _Slack Notification_ menu will open.
3. Enter your desired title for Slack notifications in the _Notification name_ text box.
4. Enter your Slack webhook in the _Webhook URL\*_ text box. If you do not know how to retrieve your Slack webhook, click the `Slack Webhooks` link and sign in to Slack to retrieve the webhook URL.
5. Select whether you want Site Quality Monitoring to notify you of [critical errors, non-critical errors, or both](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#error-types).
6. Select your notification language from the _Select language_ menu.
7. Click _Save_. You will return to the _Configure email alerts_ menu.

## Configure Microsoft Teams alerts

To configure the Site Quality Monitoring feature to send error alerts via Microsoft Teams as well as emails, first activate the extension, then perform the following steps:

1. Navigate to the [_Configure alert emails_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#configure-alert-emails) section.
2. Click _Add Microsoft Teams Notifications_. The _Teams Notification_ menu will open.
3. Enter your desired title for Teams notifications in the _Notification name_ text box.
4. Enter your Microsoft Teams incoming webhook in the _Webhook URL\*_ text box. If you do not know how to create a Microsoft Teams webhook, click `Add an incoming webhook`. Instructions will open in a new window.
5. Select your notification language from the _Select language_ menu.
6. Click _Save_. You will return to the _Configure email alerts_ menu.

## Health Check

The `IETF Health Check` monitoring extension allows Site Quality Monitoring to graphically display the [JSON](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#json)-formatted results of an [IETF](https://www.ietf.org/)-compliant health check.

When you activate the `IETF Health Check` extension, it adds an additional tab within the _Extras_ tab labeled _Health check_. Click this tab to open the _Health check_ section.

To configure the `IETF Health Check` extension, click _Set up plugin_ to open the _Health Check Settings_ menu. In the _URL_ text box, enter a URL that contains an IETF-compliant JSON-formatted health check return. Click _Save_.

## WordPress and WooCommerce Monitoring

The `WordPress & WooCommerce Monitoring` extension Allows Site Quality Monitoring enables payment metrics for your WorPress website that uses [WooCommerce](https://woo.com/).

To install this plugin, perform the following steps:

1. Click _Set up plugin_ to open the _WordPress Settings_ menu.
2. Click `How to install this plugin`. An instruction menu will appear.
3. Follow the instructions to retrieve your WordPress API key, then enter it in the _API Key_ text box.
4. Click _Save_.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×