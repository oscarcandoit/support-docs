---
url: "https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/"
title: "Site Quality Monitoring — Settings | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#main-content)

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
4. Site Quality Monitoring — Settings


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [sitequality](https://docs.cpanel.net/tags/sitequality/)

#### Table of Contents

- [Site Quality Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/)
- [Crawling](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/)
- [Extras](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/)
- [Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/)
- [Settings](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/)
[Overview](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#overview) [Monitored website manager](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#monitored-website-manager) [Delete monitored website](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#delete-monitored-website) [Monitored URL manager](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#monitored-url-manager) [Add new monitored URL](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#add-new-monitored-url) [Edit monitored URL](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#edit-monitored-url) [Configure alert emails](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#configure-alert-emails) [Alert Email Settings](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#alert-email-settings) - [Website Summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-website-summary/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#installation-toggle)

- [Site Quality Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/)
- [Crawling](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/)
- [Extras](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/)
- [Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/)
- [Settings](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/)
[Overview](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#overview) [Monitored website manager](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#monitored-website-manager) [Delete monitored website](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#delete-monitored-website) [Monitored URL manager](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#monitored-url-manager) [Add new monitored URL](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#add-new-monitored-url) [Edit monitored URL](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#edit-monitored-url) [Configure alert emails](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#configure-alert-emails) [Alert Email Settings](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#alert-email-settings) - [Website Summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-website-summary/)

## Site Quality Monitoring — Settings

![](https://docs.cpanel.net/img/cpanel-icons/cpanel-koality-plugin.svg)

Last modified: _2025 August 27_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The _Settings_ tab allows you to configure your monitored website’s root domain, monitored URLs, contact email addresses, and the frequency of alert emails.

## Monitored website manager

You may set your monitored website’s name, location, [protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview), and root domain.

Note:

Your root domain is a combination of your [domain name](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#domain-name) and the [top-level domain](https://en.wikipedia.org/wiki/Top-level_domain).

Warning:

- Your monitored URLs will inherit your root domain information. For example, if you enter `example.com` into the _Domain_ text box, you can **only** monitor URLs within that root domain.
- If you enter a new value into the _Domain_ text box, the Site Quality Monitoring feature will update your monitored URLs to contain the new root domain. For example, if you update your _Domain_ value to `edited-example.com` from `example.com`, your monitored URLs will automatically update to use `edited-example.com` instead of `example.com`.
- If you update your account’s [temporary domain](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain) to a [registered domain](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#registered-domain), your root domain and monitored URLs will update to use the registered domain’s information.

The _Location_ menu allows you to select the location of the servers sending monitoring checks to your monitored website. To minimize the time checks take to perform, we recommend that you select the location closest to your monitored website’s server.

To update your monitored website information, add the updated information to this tab, then click _Save_.

To delete your monitored website information from the Site Quality Monitoring feature, click _Delete_. The _Delete monitored website_ menu will open.

### Delete monitored website

The _Delete monitored website_ menu allows you to remove your monitored website from the Site Quality Monitoring feature and delete all its associated monitoring data.

To confirm that you want to remove your monitored website from the Site Quality Monitoring feature and permanently delete its associated monitoring data, enter your monitored website’s [`Name`](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#add-monitored-url) value in the _Please enter `example` for confirmation._ text box.

If your monitored website has an associated subscription, you may select the _Optional_ checkbox to cancel it as well. Otherwise, you may reassign the subscription in the [_User settings_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#user-settings) interface.

Note:

For more information about how to manage a Site Quality Monitoring subscription, read our [How to Manage a Site Quality Monitoring Subscription](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-a-site-quality-monitoring-subscription) documentation.

Click _Delete_. You will return to the _All monitored websites_ section.

To return to the _Monitored website manager_ tab without removing your website from Site Quality Monitoring and deleting its associated data, click _Cancel_.

## Monitored URL manager

The _Monitored URL manager_ tab allows you to add URLs from your monitored website to the Site Quality Monitoring feature. These URLs receive specific monitoring checks based on their information. For example, a URL that you have designated as an _XML sitemap_ will receive monitoring checks in the [_Sitemap and mobile optimization_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#sitemap-and-mobile-optimization) tab.

To add a new URL to monitoring, click _Add new monitored URL (`Number` free)_, where `Number` is the number of URLs you can monitor. The _Add new monitored URL_ menu will open.

Note:

If the value of `Number` is `0`, you will not be able to click this button or add new monitored URLs.

The _Currently monitored URLs_ list displays all the individual URLs from your monitored website that you are specifically monitoring. Monitored URLs display their `Name`, `Page Type`, and `URL`, along with a screenshot. To edit a currently monitored URL or remove it from URL-specific monitoring, click the pencil icon in the lower right corner of that URL’s list entry. The _Edit monitored URL_ menu will open.

### Add new monitored URL

To add a new URL to monitoring, enter the following information into the _Add new monitored URL_ menu’s text boxes:

| Input | Description |
| --- | --- |
| _Name_ | The name of the URL to monitor. Most likely, this will be the name of the corresponding page on your monitored website. For example, you may name a URL that links to your website’s shop page `Products`. |
| _Url\*_ | The full URL to be monitored, including the domain and protocol. For example, to monitor the `https://example.com/example-page` URL, enter `https://example.com/example-page` into the _Url\*_ text box. <br>Warning:<br>Your monitored URLs will inherit your domain information. If you change your domain information in the _Manage website manager_ tab, your monitored URLs will automatically update as well. |
| _Page type\*_ | Whether the URL connects to an HTML page or an XML sitemap. An XML sitemap helps search engines like Google understand how your website is constructed, while an HTML page contains content for your users. |

Click _Save_ to save the URL’s information and begin URL-specific monitoring. You may also click _Cancel_ to discard your changes and return to the _Monitored URL manager_ tab.

### Edit monitored URL

To edit a monitored URL, click the pencil icon (![A pencil icon](https://docs.cpanel.net/img/site-quality-monitoring-pencil.png)) underneath that URL’s screenshot, then update the information in any of the _Edit monitored URL_ menu’s text boxes:

| Input | Description |
| --- | --- |
| _Name_ | The name of the monitored URL. |
| _Page type\*_ | Whether the monitored URL connects to an HTML page or an XML sitemap. |
| _URL_ | The full monitored URL path, including the domain and protocol. |

Click _Save_ to update the monitored URL’s information.

You may also click _Delete_ to remove the monitored URL from URL-specific monitoring. The menu will ask you to confirm that you wish to remove the URL. Click _Yes_ to remove the URL. Click _No_ to return to the original _Edit monitored URL_ menu configuration.

Click _Cancel_ to discard all changes to the monitored URL’s information and return to the _Monitored URL manager_ tab.

## Configure alert emails

The _Configure alert emails_ tab allows you to configure how you receive alert emails when the Site Quality Monitoring feature detects common website issues.

This tab lists all email addresses that you have configured to receive monitoring alerts along with the following information:

- The address that the feature will email.
- _Language_ — The language for the email alert.

To add a new alert email address, click _Add new alert email address_. The _Alert Email Settings_ menu will open.

You may also use this menu to edit the information of a specific email address. To open the _Alert Email Settings_ menu to configure alerts for a specific email address, click that list entry’s pencil icon.

### Alert Email Settings

The _Alert Email Settings_ menu allows you to configure how email addresses receive alerts when the Site Quality Monitoring feature detects common website errors.

To add or edit an alert email address, enter the correct information in the following text boxes:

| Input | Description |
| --- | --- |
| _Email address\*_ | The email address to receive Site Quality Monitoring error alerts. |
| _Notification for critical errors_ | Select when you want to receive alerts about critical errors. Critical errors are errors that prevent customers from using your website. For example, your homepage not loading information in a browser would cause a critical error. |
| _Notification for non-critical errors_ | Select when you want to receive alerts about non-critical errors. Non-critical errors do not prevent users from using your website, but may negatively impact their experience. For example, your homepage not loading an image in a browser would cause a non-critical error. |
| _Select language_ | Select the language for the alert email. |

Click _Save_ to update these settings and return to the _Configure alert emails_ tab.

If a user receiving alerts clicks the unsubscribe link in an alert email, their information will be removed from this menu. To receive more alerts, you must add their information again.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×