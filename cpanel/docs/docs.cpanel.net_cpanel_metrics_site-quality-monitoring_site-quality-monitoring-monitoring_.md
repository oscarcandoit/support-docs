---
url: "https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/"
title: "Site Quality Monitoring — Monitoring | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#main-content)

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
4. Site Quality Monitoring — Monitoring


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [sitequality](https://docs.cpanel.net/tags/sitequality/)

#### Table of Contents

- [Site Quality Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/)
- [Crawling](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/)
- [Extras](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/)
- [Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/)
[Overview](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#overview) [Availability](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#availability) [Availability summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#availability-summary) [Uptime](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#uptime) [Performance](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#performance) [Performance summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#performance-summary) [Browser load time](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#browser-load-time) [Server load time](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#server-load-time) [Page size](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#page-size) [Lighthouse performance rating](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#lighthouse-performance-rating) [SEO](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#seo) [SEO summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#seo-summary) [Lighthouse SEO rating](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#lighthouse-seo-rating) [Sitemap](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#sitemap) [Content](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#content) [Content summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#content-summary) [Dead links and broken elements](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#dead-links-and-broken-elements) [Technical](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#technical) [Technical summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#technical-summary) [JavaScript errors](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#javascript-errors) [Security](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#security) [Security summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#security-summary) [SSL/TLS certificates](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#ssl-tls-certificates) [Insecure elements](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#insecure-elements) [Cookie analysis](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#cookie-analysis) - [Settings](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/)
- [Website Summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-website-summary/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#installation-toggle)

- [Site Quality Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/)
- [Crawling](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-crawling/)
- [Extras](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-extras/)
- [Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/)
[Overview](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#overview) [Availability](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#availability) [Availability summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#availability-summary) [Uptime](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#uptime) [Performance](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#performance) [Performance summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#performance-summary) [Browser load time](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#browser-load-time) [Server load time](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#server-load-time) [Page size](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#page-size) [Lighthouse performance rating](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#lighthouse-performance-rating) [SEO](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#seo) [SEO summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#seo-summary) [Lighthouse SEO rating](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#lighthouse-seo-rating) [Sitemap](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#sitemap) [Content](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#content) [Content summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#content-summary) [Dead links and broken elements](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#dead-links-and-broken-elements) [Technical](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#technical) [Technical summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#technical-summary) [JavaScript errors](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#javascript-errors) [Security](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#security) [Security summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#security-summary) [SSL/TLS certificates](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#ssl-tls-certificates) [Insecure elements](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#insecure-elements) [Cookie analysis](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-monitoring/#cookie-analysis) - [Settings](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/)
- [Website Summary](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-website-summary/)

## Site Quality Monitoring — Monitoring

![](https://docs.cpanel.net/img/cpanel-icons/cpanel-koality-plugin.svg)

Last modified: _2024 November 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Important:

This tab does **not** allow you to configure your alert email frequency. To set how often you receive emails about errors, read our [Settings](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/) documentation.

The _Monitoring_ tab allows you to configure how the [Site Quality Monitoring](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring) feature sets the threshold for monitoring check failure, as well as how many failures the check tolerates before internally reporting an error.

The Site Quality Monitoring feature automatically performs all monitoring checks in this tab when the [countdown bar](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#the-monitoring-check-countdown-bar) reaches `0 days 0 hr. until next check`.

## Availability

Availability refers to the user’s ability to reliably access your website’s content. A website with good availability responds to users’ requests quickly and delivers resources that a web browser can load efficiently.

The _Availability_ tab contains the _Availability summary_ and _Uptime_ tabs. In the left navigation bar, the _Availability_ tab also displays the current performance score for your website. This score is a [color indicator](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#color-indicators).

### Availability summary

The _Availability summary_ tab contains availability scores for your website. Each score is titled with its monitoring check category and contains a color indicator bar. If a check category permits, you may click _details_ to see the results of checks made in that specific category for your individual monitored URLs.

This tab includes the following scores with health bar color indicators:

| Score | Description |
| --- | --- |
| _Uptime_ | This score summarizes your website’s uptime. |
| _Current Availability_ | This score summarizes your website’s availability at the time of the last availability check. |
| _Past Availability_ | This score summarizes your website’s availability in the past 24 hours. |

URLs with errors in this category will be displayed in a _Pages with hints_ list. To see more about these errors, navigate to specific check categories in this tab or hover the page title to see a hint about the error.

### Uptime

The _Uptime_ tab indicates whether your monitored website can deliver data to your users. For example, when users request to see your homepage, your website servers should deliver your homepage’s data to the browser. This data includes HTML, CSS, and JavaScript files.

This tab lists each URL that receives uptime checks with the following information:

- The URL’s [`Name`](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#monitored-url-manager) value
- A screenshot
- A summary of the URL’s current and average uptime percentage with a color indicator






Note:





- The `current` percentage uses uptime check results from the last hour.
- The `average` percentage uses uptime check results from the last 30 days.

- A line graph that plots uptime percentages against the ideal success threshold.






Note:





The ideal success threshold for uptime checks is `99%`. This means that your URLs should return data 99 out of 100 times to ensure that your website’s users can reliably access it. You **cannot** adjust this threshold.


Click _More information about uptime_ to open a section that contains information about uptime.

Click _Settings_ to adjust how the Site Quality Monitoring feature registers errors that result from these monitoring checks. The _Uptime settings_ tab will open.

#### Uptime settings

The _Uptime settings_ tab allows you to adjust how the Site Quality Monitoring feature reports uptime errors.

Site Quality Monitoring uptime checks send an HTTP request to your project’s root domain or monitored URL, then wait for a response. The response’s [status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) determine whether the check succeeds as follows:

- An HTTP response lower than `400` — The uptime check succeeds.
- An HTTP response greater than or equal to `400` — The uptime check fails.

To adjust when how many failures uptime checks allow in a row before reporting an error, select one of the following options in the _Error sensitivity_ menu:

| Option | Description |
| --- | --- |
| _High_ | Report an error every time an uptime check returns a failure. |
| _Moderate_ | Report an error when uptime checks return a failure twice in a row. |
| _Low_ | Report an error when uptime checks return a failure three times in a row. |

Note:

This setting defaults to _High_.

Once you have selected an option, click _Save_ to update your preferences and return to the _Uptime_ section. You may click _Cancel_ to instead discard your changes and return to the _Uptime_ section.

## Performance

Performance describes how long it takes for a user to receive all of a monitored URL’s content in a web browser like Chrome, Firefox, or Internet Explorer.

The _Performance_ tab contains the _Performance summary_, _Browser load time_, _Server load time_, _Page size_, and _Lighthouse performance rating_ tabs. In the left navigation bar, the _Performance_ tab also displays the current performance score for your website. This score is a [color indicator](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#color-indicators).

### Performance summary

The _Performance summary_ tab contains performance scores for your website. Each score is titled with its monitoring check category and contains a color indicator bar. If a check category permits, you may click _details_ to see the results of checks made in that specific category for your individual monitored URLs.

This section includes the following scores:

| Score | Description |
| --- | --- |
| _Performance_ | This score summarizes your website’s performance capability. |
| _Server speed_ | This score summarizes your website’s server speed. |
| _Browser speed_ | This score summarizes your website’s browser load time. |
| _Page size_ | This score summarizes your website’s page size efficiency. |
| _Large elements_ | This score summarizes your website’s oversize element checks. |
| _Google performance rating_ | This score summarizes your website’s Lighthouse performance checks. |

URLs with errors in this category will be displayed in a _Pages with hints_ list. To see more about these errors, navigate to specific check categories in this tab or hover the page name to see a hint about the error.

### Browser load time

Browser load time is the time it takes a web browser to load and display the content of a URL. For example, when a user visits your website’s homepage, the browser load time is how quickly their browser can load your homepage’s CSS, HTML, and JavaScript files. Faster browser load times mean that your users can view the resources your website delivers to them quickly.

This tab lists each URL that receives browser load time checks with the following information:

- The URL’s [`Name`](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#monitored-url-manager) value
- A screenshot
- A summary of the URL’s browser load time in seconds with a color indicator
- A line graph that plots browser load times against the error threshold.

Click _More information about browser loading times_ to open a section that contains information about browser load times.

Click _Settings_ to adjust your URLs’ maximum time to load in a browser. The _Browser load time settings_ menu will open.

#### Browser load time settings

The _Browser load time settings_ menu allows you to adjust how the Site Quality Monitoring feature reports browser load time errors.

To set the maximum time that browser load time checks allow your URLs to load their content before registering a failure, select one of the following options for the _Threshold_ setting:

| Option | Description |
| --- | --- |
| _Time to load faster than 1 seconds_ | Future browser load time checks will register a failure if **any** of your URLs take longer than one second to load in a browser. |
| _Time to load faster than 2 seconds_ | Future browser load time checks will register a failure if **any** of your URLs take longer than two seconds to load in a browser. |
| _Time to load faster than 3 seconds_ | Future browser load time checks will register a failure if **any** of your URLs take longer than three seconds to load in a browser. |
| _Time to load faster than 5 seconds_ | Future browser load time checks will register a failure if **any** of your URLs take longer than five seconds to load in a browser. |
| _Time to load faster than 10 seconds_ | Future browser load time checks will register a failure if **any** of your URLs take longer than 10 seconds to load in a browser. |
| _Time to load faster than 20 seconds_ | Future browser load time checks will register a failure if **any** of your URLs take longer than 20 seconds to load in a browser. |
| _Time to load faster than 30 seconds_ | Future browser load time checks will register a failure if **any** of your URLs take longer than 30 seconds to load in a browser. |

Note:

This setting defaults to 15 seconds.

To set how many failures the browser load time checks allow in a row before reporting an error, select one of the following options in the _Error sensitivity_ menu:

| Option | Description |
| --- | --- |
| _High_ | Report an error every time a URL fails to load and display its content in the maximum allowed time. |
| _Moderate_ | Report an error when a URL fails to load and display its content in the maximum allowed time two checks in a row. |
| _Low_ | Report an error when a URL fails to load and display its content in the maximum allowed time three checks in a row. |

Note:

This setting defaults to _Moderate_.

Once you have selected an option, click _Save_ to update your preferences and return to the _Browser load time_ section. You may click _Cancel_ to instead discard your changes and return to the _Browser load time_ section.

### Server load time

Server load time is the time it takes a server to send resources to a web browser when a user accesses your URL. For example, when a user clicks your website’s homepage, the server load time is how long it takes your server to send the first byte of your homepage’s HTML, JavaScript, or CSS files to the user’s web browser. Faster server load times mean that your users’ browsers can start to load content quickly.

This tab lists each URL that receives server load time checks with the following information:

- The URL’s [`Name`](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#monitored-url-manager) value
- A screenshot
- A summary of the URL’s server load time in milliseconds with a color indicator
- A line graph plotting server load times against the error threshold.

Click _More information about server load times_ to open a section that contains information about server load times.

Click _Settings_ to adjust the error thresholds for your URLs’ maximum time to send content to a browser. The _Server load time settings_ menu will open.

#### Server load time settings

The _Server load time settings_ menu allows you to adjust how the Site Quality Monitoring feature reports server load time errors.

To set the maximum time that server load time checks allow your URLs to deliver their content to a browser before registering a failure, select one of the following options for the _Threshold_ setting:

| Option | Description |
| --- | --- |
| _Server time is faster than 100 ms_ | Future server load time checks will register a failure if **any** of your URLs take longer than 0.1 second to send their first byte to the browser. |
| _Time to load faster than 200 ms_ | Future server load time checks will register a failure if **any** of your URLs take longer than 0.2 second to send their first byte to the browser. |
| _Time to load faster than 500 ms_ | Future server load time checks will register a failure if **any** of your URLs take longer than half a second to send their first byte to the browser. |
| _Time to load faster than 1 second_ | Future server load time checks will register a failure if **any** of your URLs take longer than 1 second to send their first byte to the browser. |
| _Time to load faster than 2 seconds_ | Future server load time checks will register a failure if **any** of your URLs take longer than 2 seconds to send their first byte to the browser. |

Note:

This setting defaults to 1 second.

To adjust how many failures the server load time checks allow in a row before reporting an error, select one of the following options in the _Error sensitivity_ menu:

| Option | Description |
| --- | --- |
| _High_ | Report an error every time a URL fails to deliver its content to a browser in the maximum allowed time. |
| _Moderate_ | Report an error when a URL fails to deliver its content to a browser in the maximum allowed time two checks in a row. |
| _Low_ | Report an error when a URL fails to deliver its content to a browser in the maximum allowed time three checks in a row. |

Note:

This setting defaults to _Moderate_.

Once you have selected an option, click _Save_ to update your preferences and return to the _Server load time_ tab. You may click _Cancel_ to instead discard your changes.

### Page size

Page size is the size of the files that make up a URL’s content. These can be CSS, HTML, or JavaScript files, among others. Oversize files can cause delays in your website’s browser and server load times, which makes the website more difficult to use.

This tab lists each URL that receives size checks. Each URL will display the following information:

- The URL’s [`Name`](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#monitored-url-manager) value
- A screenshot
- A summary of the URL’s page size in megabytes (MB) at the time of its most recent monitoring check with a color indicator bar
- A line graph that plots page sizes against the error threshold.

Click _More information about page size_ to open a section that contains information about page sizes.

Click _Settings_ to adjust the error thresholds for your URLs’ maximum page size. The _Page size settings_ menu will open.

#### Page size settings

The _Page size settings_ menu allows you to adjust how the Site Quality Monitoring feature reports size errors for both your monitored URL as a page and its individual elements.

To set the maximum size of all your URL’s individual elements added together, select one of the following options for the _Threshold_ setting:

| Option | Description |
| --- | --- |
| _At most 1 MB_ | Future page size checks will register a failure if a URL contains individual elements whose sizes add up to more than 1 megabyte. |
| _At most 2 MB_ | Future page size checks will register a failure if a URL contains individual elements whose sizes add up to more than 2 megabytes. |
| _At most 3 MB_ | Future page size checks will register a failure if a URL contains individual elements whose sizes add up to more than 3 megabytes. |
| _At most 5 MB_ | Future page size checks will register a failure if a URL contains individual elements whose sizes add up to more than 5 megabytes. |
| _At most 10 MB_ | Future page size checks will register a failure if a URL contains individual elements whose sizes add up to more than ten megabytes. |

Note:

If you have not selected a page size threshold, it defaults to 5 MB.

To adjust how many failures the page size checks allow in a row before reporting an error, select one of the following options in the _Error sensitivity (Page size)_ menu:

| Option | Description |
| --- | --- |
| _High_ | Report an error every time a URL’s elements fail to stay below the maximum page size. |
| _Moderate_ | Report an error when a URL’s elements fail to stay below the maximum page size two checks in a row. |
| _Low_ | Report an error when a URL’s elements fail to stay below the maximum page size three checks in a row. |

Note:

This setting defaults to _High_.

To adjust how many failures the element size checks allow in a row before reporting an error, select one of the following options in the _Error sensitivity (Large elements)_ menu:

| Option | Description |
| --- | --- |
| _High_ | Report an error every time an element is bigger than 1 megabyte. |
| _Moderate_ | Report an error when we detect an element bigger than 1 megabyte two checks in a row. |
| _Low_ | Report an error when we detect an element bigger than 1 megabyte during three checks in a row. |

Note:

This setting defaults to _High_.

Once you have selected an option, click _Save_ to update your preferences and return to the _Page size_ tab. You may click _Cancel_ to instead discard your changes.

### Lighthouse performance rating

The _Lighthouse performance rating_ tab provides a [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) performance rating for your website. Lighthouse is an open-source Chrome development tool.

This tab lists each Lighthouse performance check with the following information:

- A screenshot
- A summary of the its most recent check result with a color indicator bar.

The _Potential_ list displays Lighthouse checks that your website did **not** pass, while the _Fulfilled_ list displays Lighthouse checks that your website passed.

Click _details_ in any check listing to open that section of the Lighthouse check report.

Click _More information about Lighthouse performance metrics_ to open a section that contains information about Lighthouse performance scores.

Click _Settings_ to adjust how the Site Quality Monitoring feature registers errors related to low Lighthouse performance scores. The _Lighthouse performance settings_ menu will open.

#### Lighthouse performance settings

The _Lighthouse performance settings_ menu allows you to adjust how the Site Quality Monitoring feature reports errors for your website’s Lighthouse performance score.

To adjust how many failures the Lighthouse performance checks allow in a row before reporting an error, select one of the following options in the _Error sensitivity_ menu:

| Option | Description |
| --- | --- |
| _High_ | Report an error every time your website fails to meet the minimum Lighthouse performance score. |
| _Moderate_ | Report an error when your website fails to meet the minimum Lighthouse performance score two checks in a row. |
| _Low_ | Report an error when your website fails to meet the minimum Lighthouse performance score three times in a row. |

Note:

This setting defaults to _High_.

To set the minimum Lighthouse performance score your website must achieve to avoid a failure, select one of the following options for the _Threshold_ setting:

| Option | Description |
| --- | --- |
| _Lighthouse Score 0 (switch check off)_ | Future Lighthouse performance checks will not register failures. |
| _Lighthouse Score 25_ | Future Lighthouse performance checks will register a failure if the Lighthouse performance score falls below 25. |
| _Lighthouse Score 50_ | Future Lighthouse performance checks will register a failure if the Lighthouse performance score falls below 50. |
| _Lighthouse Score 75_ | Future Lighthouse performance checks will register a failure if the Lighthouse performance score falls below 75. |
| _Lighthouse Score 100_ | Future Lighthouse performance checks will register a failure if the Lighthouse performance score falls below 100. |

Note:

This value defaults to _Lighthouse Score 75_.

Once you have selected an option, click _Save_ to update your preferences and return to the _Lighthouse performance_ tab. You may click _Cancel_ to instead discard your changes.

## SEO

Search engine optimization (SEO) refers to how efficiently search engines can index your monitored website. A higher SEO rank means that search engines like Google can easily understand your website’s content and judge when to show it in search results.

The _SEO_ tab contains the _SEO summary_, _Lighthouse SEO rating_, and _Sitemap_ tabs. In the left navigation bar, the _SEO_ tab also displays the current SEO score for your monitored website. This score is a [color indicator](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#color-indicators).

### SEO summary

The _SEO summary_ tab contains SEO scores for your website. Each score is titled with its monitoring check category and contains a color indicator bar. If a check category permits, you may click _details_ to see the results of checks made in that specific category for your individual monitored URLs.

This tab includes the following scores:

| Score | Description |
| --- | --- |
| _Search engine optimization_ | This score summarizes your website’s SEO rank. |
| _Google SEO rating_ | This score summarizes the Lighthouse SEO rating of your website. |
| _Accuracy of the sitemap_ | This score rates how well your website’s sitemap matches your content’s structure. |

URLs with errors in this category will be displayed in a _Pages with hints_ list. To see more about these errors, navigate to specific check categories in this tab or hover the page title to see a hint about the error.

### Lighthouse SEO rating

The _Lighthouse SEO rating_ tab provides a [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) SEO rating for your website. Lighthouse is an open-source Chrome development tool.

This tab lists each Lighthouse SEO check with the following information:

- A screenshot
- A summary of its most recent result with a color indicator bar.

The _Potential_ list displays Lighthouse checks that your website did **not** pass, while the _Fulfilled_ list displays Lighthouse checks that your website passed.

Click _details_ in any check listing to open that section of the Lighthouse check report.

Click _More information about Lighthouse SEO metrics_ to open a section that contains information about Lighthouse SEO scores.

Click _Settings_ to adjust how the Site Quality Monitoring feature reports errors related to low Lighthouse SEO scores. The _Lighthouse SEO settings_ menu will open.

#### Lighthouse SEO settings

The _Lighthouse SEO settings_ menu allows you to adjust how the Site Quality Monitoring feature reports Lighthouse SEO errors.

To adjust how many failures the Lighthouse SEO checks allow in a row before reporting an error, select one of the following options in the _Error sensitivity_ menu:

| Option | Description |
| --- | --- |
| _High_ | Report an error every time your website’s Lighthouse SEO score falls below 75. |
| _Moderate_ | Report an error when your website’s Lighthouse performance score falls below 75 twice in a row. |
| _Low_ | Report an error every time your website’s Lighthouse performance score falls below 75 three times in a row. |

Note:

This setting defaults to _High_.

Once you have selected an option, click _Save_ to update your preferences and return to the _Lighthouse SEO rating_ tab. You may click _Cancel_ to instead discard your changes.

### Sitemap

Your website’s `sitemap.xml` file allows search engines like Google to identify your website’s structure. Accurate sitemaps help search engines deliver the correct results to a user. For example, if a user searches your website’s contact information, a search engine should return the URL for your _Contact Us_ page.

This tab lists each URL that receive sitemap checks with the following information:

- The URL’s [`Name`](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#monitored-url-manager) value
- A screenshot
- A summary of the check result with a color indicator bar.

Click _More information about sitemaps_ to open a section that contains information about sitemap configuration.

Click _Settings_ to adjust how the Site Quality Monitoring feature registers errors related to your website’s sitemap configuration. The _Sitemap settings_ menu will open.

#### Sitemap settings

The _Sitemap settings_ menu allows you to adjust how the Site Quality Monitoring feature reports errors related to sitemap configuration.

To adjust how many failures the sitemap configuration checks allow in a row before reporting an error, select one of the following options in the _Error sensitivity (Sitemap)_ menu:

| Option | Description |
| --- | --- |
| _High_ | Register a failure every time your website’s sitemap fails a configuration check. |
| _Moderate_ | Register a failure when your website’s sitemap fails a configuration check twice in a row. |
| _Low_ | Register a failure when your website’s sitemap fails a configuration check three times in a row. |

Note:

This setting defaults to _High_.

Once you have selected an option, click _Save_ to update your preferences and return to the _Sitemap settings_ tab. You may click _Cancel_ to instead discard your changes.

## Content

Your website’s content is everything that a user receives when they access your monitored website. This includes image files, text files, links, and more.

The _Content_ tab contains the _Content summary_ and _Dead links and broken elements_ tabs. In the left navigation bar, the _Content_ tab also displays the current content score for your website. This score is a [color indicator](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#color-indicators).

### Content summary

The _Content summary_ tab contains content scores for your website. Each score is titled with its monitoring check category and contains a color indicator bar. If a check category permits, you may click _details_ to see the results of checks made in that specific category for your individual monitored URLs.

This tab includes the following scores:

| Score | Description |
| --- | --- |
| _Content_ | This score summarizes the results of all monitoring checks that verify that your website successfully delivers all its content to your users. |
| _Dead links_ | This score rates how many links on your URLs return results when clicked. Links that do not return results are called _dead links_. |
| _Broken resources_ | This score rates how many of your URLs contain broken image, script, or CSS files. |

### Dead links and broken elements

Dead links are links that do not return information to a user when clicked. For example, a link to a website that has been removed from the Internet is dead, because a user that clicks that link will see an error message instead of the intended page. Broken elements are elements that the browser cannot render for a user. For example, if you attempt to display an image file that you have deleted, your users will see a broken element instead.

Internal links lead to other resources in your website, while external links lead elsewhere. Elements are the individual pieces of your website as designated by [HTML tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). Broken elements are elements that cannot display their content.

This tab lists each URL that receives the check by its [`Name`](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#monitored-url-manager) value. Each URL will display a _Dead links_ and _Broken elements_ health bar.

If there are dead links or broken elements in your URL, you will also see a _List of faulty elements_ or _List of dead links_. You may click these to display a list of all that URL’s dead links or broken elements. The list will include if a dead link is internal or external.

Click _Settings_ to adjust how the Site Quality Monitoring feature reports errors that result from these monitoring checks. The _Dead links and broken elements settings_ menu will open.

#### Dead links and broken elements settings

The _Dead links and broken elements settings_ menu allows you to adjust how the Site Quality Monitoring feature reports errors for dead internal and external links, as well as broken elements.

The dead link and broken element monitoring checks will register a failure each time they encounter a dead link or broken element.

To adjust how many failures the dead internal link checks allow in a row before reporting an error, select one of the following options in the _Error sensitivity (Dead links)_ menu:

| Option | Description |
| --- | --- |
| _High_ | Report an error every time an internal link fails to return data. |
| _Moderate_ | Report an error when an internal link fails to return data two checks in a row. |
| _Low_ | Report an error when an internal link fails to return data three checks in a row. |

Note:

This setting defaults to _High_.

To adjust how many failures the broken elements checks allow in a row before reporting an error, select one of the following options in the _Error sensitivity (Broken elements)_ menu:

| Option | Description |
| --- | --- |
| _High_ | Report an error every time an element fails to render. |
| _Moderate_ | Report an error when an element fails to render two checks in a row. |
| _Low_ | Report an error when an element fails to render three checks in a row. |

Note:

This setting defaults to _High_.

To adjust how many failures the dead external link checks allow in a row before reporting a failure, select one of the following options in the _Error sensitivity (Dead links)_ menu, select one of the following options:

| Option | Description |
| --- | --- |
| _High_ | Report an error every time an external link fails to return data. |
| _Moderate_ | Report an error when an external link fails to return data two checks in a row. |
| _Low_ | Report an error when an external link fails to return data three checks in a row. |

Note:

This setting defaults to _High_.

Once you have selected an option, click _Save_ to update your preferences and return to the _Dead links and broken elements_ tab. You may click _Cancel_ to instead discard your changes.

## Technical

JavaScript is a popular language for creating interactive website functions. Many websites contain both internal JavaScript and external JavaScript. Internal JavaScript is JavaScript that you [directly embed](https://www.w3resource.com/javascript/introduction/html-documents.php) or host on your website’s server. External JavaScript comes from linked files hosted elsewhere. Often, external JavaScript files relate to third-party advertising integrations or user tracking.

The _Technical_ tab contains the _Technical summary_ and the _Javascript errors_ tabs. In the left navigation bar, the _Technical_ tab also displays the current technical score for your website. This score is a [color indicator](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#color-indicators).

### Technical summary

The _Technical summary_ tab contains scores for your website’s JavaScript usability.

Each score is titled with its monitoring check category and contains a color indicator bar. If a check category permits, you may click _details_ to see the results of checks made in that specific category for your individual monitored URLs.

This tab includes the following scores:

| Score | Description |
| --- | --- |
| _Technology_ | This score summarizes the result of all monitoring checks that verify that your internal and external JavaScript files do not return errors. |
| _Internal JavaScript errors_ | This score rates the health of your website’s internal JavaScript files. |
| _External JavaScript errors_ | This score rates the health of your website’s external JavaScript files. |

### JavaScript errors

The _JavaScript errors_ tab provides monitoring check results for individual monitored URLs’ internal and external JavaScript files.

This tab lists each URL that receives JavaScript error checks. Each URL will display their [`Name`](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#monitored-url-manager) and whether that URL contained internal or external JavaScript errors.

Click _Settings_ to adjust how the Site Quality Monitoring feature registers internal and external JavaScript errors. The _JavaScript error settings_ menu will open.

#### JavaScript error settings

The _JavaScript error settings_ menu allows you to adjust how the Site Quality Monitoring feature reports internal and external JavaScript errors.

Both internal and external JavaScript monitoring checks will register a failure when they encounter a JavaScript function that produces a runtime error.

To adjust how many times the internal JavaScript checks can register failures before reporting an error, select one of the following options in the _Error sensitivity (Internal JavaScript errors)_ menu:

| Option | Description |
| --- | --- |
| _High_ | Report an error every time we detect an internal JavaScript runtime error. |
| _Moderate_ | Report an error when we detect an internal JavaScript runtime error two checks in a row. |
| _Low_ | Report an error when we detect an internal JavaScript runtime error three checks in a row. |

Note:

This setting defaults to _High_.

To adjust how many times the external JavaScript checks can register failures before reporting an error, select one of the following options in the _Error sensitivity (External JavaScript errors)_ menu:

| Option | Description |
| --- | --- |
| _High_ | Report an error every time we detect an external JavaScript runtime error. |
| _Moderate_ | Report an error when we detect an external JavaScript runtime error two checks in a row. |
| _Low_ | Report an error when we detect an external JavaScript runtime error three checks in a row. |

Note:

This setting defaults to _High_.

Once you have selected an option, click _Save_ to update your preferences and return to the _JavaScript errors_ tab. You may click _Cancel_ to instead discard your changes.

## Security

The _Security_ tab contains the _Security summary_, _HTTPS certificates_, _Insecure elements_, and _Cookie analysis_ tabs. In the left navigation bar, the _Security_ tab also displays the current security score for your website. This score is a [color indicator](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/#color-indicators).

### Security summary

The _Security summary_ tab contains scores for your website’s security. For good security scores, your website’s security certificates should be up-to-date, its cookies should be safely configured, and you should not be sending users unencrypted data.

Each score is titled with its monitoring check category and contains a color indicator bar. If a check category permits, you may click _details_ to see the results of checks made in that specific category for your individual monitored URLs.

This tab includes the following scores:

| Score | Description |
| --- | --- |
| _Security_ | This score summarizes the result of all security checks on your website. |
| _Certificate check_ | This score rates if your website’s SSL/TLS certificates require renewal. |
| _Cookie Analysis_ | This score rates the health of your website’s cookies. |
| _Unsecure elements_ | This score measures whether you are encrypting data that you send to your website’s users. |

### SSL/TLS certificates

[An SSL/TLS certificate](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/) allows your website to use Hypertext Transfer Protocol Secure (HTTPS). This protocol lets users know that your website encrypts its transmitted data.

This tab lists each URL that receives a check for its SSL certificate’s validity and approaching expiration date with the following information:

- The URL’s [`Name`](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#monitored-url-manager) value
- A screenshot
- The certificate’s validity
- The certificate’s expiration date.

### Insecure elements

Insecure elements are elements that you transmit to your website’s users without encryption, such as image or CSS files. These elements can present a security risk and cause search engines to decrease your SEO rank.

This tab lists each URL that receives a check for element security with the following information:

- The URL’s [`Name`](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#monitored-url-manager) value
- A screenshot
- A color bar indicator with the number of secure and insecure elements the URL contains. Secure elements will be displayed in green, while insecure elements will be displayed in red.

### Cookie analysis

Cookies are small text files that track your website’s users if they give permission. For security purposes, and because cookie sizes can increase your page size, we recommend that you limit the number of cookies you add to your website.

This tab lists each URL that receives a check for cookie load with the following information:

- The URL’s [`Name`](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/site-quality-monitoring-settings/#monitored-url-manager) value
- A screenshot
- A color indicator summary of the current and average number of cookies attached to the URL






Note:





- The `current` percentage uses cookie load results from the last hour.
- The `average` percentage uses cookie load results from the last 30 days.

- A line graph that plots the number of cookies attached to the URL against the error threshold
- A list of the URLs to which the cookies provide data.

Click _Settings_ to adjust how the Site Quality Monitoring feature registers cookie load errors. The _Cookie analysis settings_ menu will open.

#### Cookie analysis settings

The _Cookie analysis settings_ menu allows you to change how the Site Quality Monitoring feature registers errors related to the number of cookies you allow **each** URL to contain.

To adjust the threshold for cookie load failures, select one of the following options in the _Threshold_ setting:

| Option | Description |
| --- | --- |
| _Check for 0 cookies_ | Future cookie load checks will register a failure if **any** of your URLs contain **any** cookies. |
| _Check for 5 cookies_ | Future cookie load checks will register a failure if **any** of your URLs contain five or more cookies. |
| _Check for less than 10 cookies_ | Future cookie load checks will register a failure if **any** of your URLs contain ten or more cookies. |
| _Check for 20 cookies_ | Future cookie load checks will register a failure if **any** of your URLs contain 20 or more cookies. |
| _Check for less than 50 cookies_ | Future cookie load checks will register a failure if **any** of your URLs contain 50 or more cookies. |

Note:

This setting defaults to _Check for 20 cookies_.

To adjust how many times the cookie load checks can register failures before reporting an error, select one of the following options in the _Error sensitivity_ menu:

| Option | Description |
| --- | --- |
| _High_ | Report an error every time a URL fails to stay below the maximum number of cookies. |
| _Moderate_ | Report an error when a URL fails to stay below the maximum number of cookies two checks in a row. |
| _Low_ | Report an error when a URL fails to stay below the maximum number of cookies three checks in a row. |

Note:

This setting defaults to _High_.

Once you have selected an option, click _Save_ to update your preferences and return to the _Cookie analysis_ tab. You may click _Cancel_ to instead discard your changes.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×