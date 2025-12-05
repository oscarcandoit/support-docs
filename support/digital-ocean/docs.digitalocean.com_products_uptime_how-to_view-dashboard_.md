---
url: "https://docs.digitalocean.com/products/uptime/how-to/view-dashboard/"
title: "How to View the Uptime Check Dashboard | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/uptime.9beac4529484c4f40aaa4d087e7352ef854dd1be4c2b7a3ed946c54de1c9a383.svg)Uptime](https://docs.digitalocean.com/products/uptime/)
- [Getting Started](https://docs.digitalocean.com/products/uptime/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/uptime/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/uptime/how-to/)
  - [Create Checks](https://docs.digitalocean.com/products/uptime/how-to/create-checks/)
  - [Edit Checks](https://docs.digitalocean.com/products/uptime/how-to/edit-checks/)
  - [Destroy Checks](https://docs.digitalocean.com/products/uptime/how-to/destroy-checks/)
  - [Create Alerts](https://docs.digitalocean.com/products/uptime/how-to/create-alerts/)
  - [Edit Alerts](https://docs.digitalocean.com/products/uptime/how-to/edit-alerts/)
  - [Destroy Alerts](https://docs.digitalocean.com/products/uptime/how-to/destroy-alerts/)
  - [View the Dashboard](https://docs.digitalocean.com/products/uptime/how-to/view-dashboard/)
- [Reference](https://docs.digitalocean.com/products/uptime/reference/)
- [Details](https://docs.digitalocean.com/products/uptime/details/)
  - [Features](https://docs.digitalocean.com/products/uptime/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/uptime/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/uptime/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/uptime/details/limits/)

- [How-Tos](https://docs.digitalocean.com/products/uptime/how-to/)
- View the Dashboard

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to View the Uptime Check Dashboard

Validated on 21 Jun 2024 • Last edited on 23 Jan 2025

DigitalOcean Uptime is a monitoring service that checks the health of any URL or IP address. Use Uptime to monitor the latency, uptime, and SSL certificates of any website or host, and receive email or Slack alerts at thresholds you choose.

Each Uptime check has a dashboard with detailed information about uptime, latency, SSL expiry, and configured alerts. To navigate to an Uptime check’s dashboard, click the check’s name on [the Uptime page in the control panel](https://cloud.digitalocean.com/monitors/uptime/checks).

![screenshot of the Uptime Checks list, with the 'Name' column of an example check highlighted](https://docs.digitalocean.com/screenshots/uptime/check-click.d837ea2f286e5363103177a9da4392adafd934582e16d9314236075264dddcc5.png)

The status page is broken down into three major sections:

- [Summary Cards](https://docs.digitalocean.com/products/uptime/how-to/view-dashboard/#summary-cards)
- [Regional Status and Latency](https://docs.digitalocean.com/products/uptime/how-to/view-dashboard/#regional-status-and-latency)
- [Settings and Alerts](https://docs.digitalocean.com/products/uptime/how-to/view-dashboard/#settings-and-alerts)

## Summary Cards

At the top of the dashboard, there are three cards that provide summaries of critical information: **30 Day Global Uptime**, **SSL Certificate Expiry**, and **Last Outage / Duration**.

![screenshot of the first section of an Uptime check's dashboard, with cards for uptime, ssl expiry, and outage information](https://docs.digitalocean.com/screenshots/uptime/check-dashboard-section-1.47078ac16bac33e9eee9c2558da03bea945be84bd998cf37fab6112e8ba3ae7d.png)

- **30 Day Global Uptime:** Shows the 30-day average uptime percentage across all selected regions.
- **SSL Certificate Expiry:** Shows the number of days until the site’s SSL certificate expires. For **HTTP** and **PING** checks, this always shows as **N/A**.
- **Last Outage / Duration**: Shows location and duration of the most recent outage.

## Regional Status and Latency

The next section shows detailed regional uptime information and latency graphs.

![screenshot of the second section of an Uptime check's dashboard, with regional uptime status information and latency graphs](https://docs.digitalocean.com/screenshots/uptime/check-dashboard-section-2.d5a3aa4d8620a6210e20104e0af6eb0786b8a8206c9f6c28b53d6d0e91bec3ff.png)

### Regional Status

The **Regional Status** section shows **Up**/ **Down** status indicators for each selected check region, as well as how long connectivity from each region has been up or down.

### Regional Latency

The **Regional Latency** graph shows a plot of latency in each selected region, for the time period specified in the drop-down menu. The time period defaults to **Last 1 hour**. Times are shown using a 24-hour format in the time zone specified by your browser.

You can zoom in on a particular section of the graph by clicking and dragging over the desired slice of time. Double-clicking the graph zooms you back out one level. You can also reset your view by selecting the desired time period in the drop-down menu.

## Settings and Alerts

The third section of the status page shows the Uptime check’s settings, along with any alerts you’ve configured.

![screenshot of the third section of an Uptime check's dashboard, with a card for settings information, and a list of alerts](https://docs.digitalocean.com/screenshots/uptime/check-dashboard-section-3.9c2d5def4d1aaf11ae9a8308e8aaccc73653d2cacbf1a3fc7f09bd9d2cc507a9.png)

### Uptime Check Settings

The **Uptime Check Settings** card shows the following information:

- **Type**: the type of check being performed: **HTTPS**, **HTTP**, or **PING**
- **Interval**: how often, in seconds, an uptime check is performed (not configurable)
- **Timeout**: the length of time, in seconds, before an uptime check times out (not configurable)
- **Regions**: the regions selected to perform checks

### Active Uptime Alerts

The **Active Uptime Alerts** section shows a list of alerts set up for this check. The table shows details about the alert, along with a **Triggered**/ **Not Triggered** status message. To edit or delete an alert, use the drop-down menu on the right-hand side of the table. For more detailed steps, see [How to Edit Alerts](https://docs.digitalocean.com/products/uptime/how-to/edit-alerts/) and [How to Destroy Alerts](https://docs.digitalocean.com/products/uptime/how-to/destroy-alerts/).

In this article...

- [Summary Cards](https://docs.digitalocean.com/products/uptime/how-to/view-dashboard/#summary-cards)
- [Regional Status and Latency](https://docs.digitalocean.com/products/uptime/how-to/view-dashboard/#regional-status-and-latency)
  - [Regional Status](https://docs.digitalocean.com/products/uptime/how-to/view-dashboard/#regional-status)
  - [Regional Latency](https://docs.digitalocean.com/products/uptime/how-to/view-dashboard/#regional-latency)
- [Settings and Alerts](https://docs.digitalocean.com/products/uptime/how-to/view-dashboard/#settings-and-alerts)
  - [Uptime Check Settings](https://docs.digitalocean.com/products/uptime/how-to/view-dashboard/#uptime-check-settings)
  - [Active Uptime Alerts](https://docs.digitalocean.com/products/uptime/how-to/view-dashboard/#active-uptime-alerts)

##### Company

- [About](https://www.digitalocean.com/about)
- [Careers](https://www.digitalocean.com/careers)
- [Blog](https://www.digitalocean.com/blog)

##### Docs

- [Docs Home](https://docs.digitalocean.com/)
- [API Reference](https://docs.digitalocean.com/reference/api)
- [CLI Reference](https://docs.digitalocean.com/reference/doctl)
- [Release Notes](https://docs.digitalocean.com/release-notes)
- [Trust Platform](https://www.digitalocean.com/trust)

##### Community

- [Tutorials](https://www.digitalocean.com/community/tutorials)
- [Q&A](https://www.digitalocean.com/community/questions)
- [Write for DOnations](https://www.digitalocean.com/community/pages/write-for-digitalocean)
- [Currents Research](https://www.digitalocean.com/currents)
- [Legal](https://www.digitalocean.com/legal)
- [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

##### Support

- [Support Center](https://docs.digitalocean.com/support)
- [Report Abuse](https://www.digitalocean.com/company/contact/abuse)

* * *

Cookie Preferences

© 2025 DigitalOcean, LLC. All rights reserved

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

Loading...

## Product Docs

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

## Marketplace

## DigitalOcean Blog

## Community

navigategoexit

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices