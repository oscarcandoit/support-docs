---
url: "https://docs.digitalocean.com/products/databases/valkey/how-to/set-up-alerts/"
title: "How to Set Up Valkey Cluster Monitoring Alerts | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/valkey.f170106c44632502ecb41bfb74b6d22d99f94ad223afccd11be669fedac30b18.svg)Valkey](https://docs.digitalocean.com/products/databases/valkey/)
  - [Getting Started](https://docs.digitalocean.com/products/databases/valkey/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/databases/valkey/getting-started/quickstart/)
    - [Convert Caching to Valkey](https://docs.digitalocean.com/products/databases/valkey/getting-started/convert/)
  - [How-Tos](https://docs.digitalocean.com/products/databases/valkey/how-to/)
    - [Connect to Valkey Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/connect/)
    - [Secure Valkey Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/secure/)
    - [Migrate Valkey Databases](https://docs.digitalocean.com/products/databases/valkey/how-to/migrate/)
    - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/valkey/how-to/schedule-updates/)
    - [Choose Eviction Policies](https://docs.digitalocean.com/products/databases/valkey/how-to/choose-eviction-policies/)
    - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/tag/)
    - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/valkey/how-to/monitor-clusters/)
    - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/valkey/how-to/add-standby-nodes/)
    - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/valkey/how-to/set-up-alerts/)
    - [Relocate Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/relocate/)
    - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/resize/)
    - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/destroy/)
    - [Monitor Valkey Performance](https://docs.digitalocean.com/products/databases/valkey/how-to/monitor-databases/)
    - [Forward Logs](https://docs.digitalocean.com/products/databases/valkey/how-to/forward-logs/)
    - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/reconfigure/)
    - [Create Valkey Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/create/)
  - [Reference](https://docs.digitalocean.com/products/databases/valkey/reference/)
    - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
    - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
  - [Concepts](https://docs.digitalocean.com/products/databases/valkey/concepts/)
    - [Best Practices](https://docs.digitalocean.com/products/databases/valkey/concepts/best-practices/)
    - [Migration Strategies](https://docs.digitalocean.com/products/databases/valkey/concepts/migration-strategies/)
    - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/valkey/concepts/responsibility-model/)
  - [Details](https://docs.digitalocean.com/products/databases/valkey/details/)
    - [Features](https://docs.digitalocean.com/products/databases/valkey/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/databases/valkey/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/databases/valkey/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/databases/valkey/details/limits/)
    - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)

- [Valkey](https://docs.digitalocean.com/products/databases/valkey/)
- [How-Tos](https://docs.digitalocean.com/products/databases/valkey/how-to/)
- Set Up Monitoring Alerts

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Set Up Valkey Cluster Monitoring Alerts

Validated on 24 Apr 2025 • Last edited on 24 Apr 2025

Valkey is a high-performance, open-source database that stores key-value data in memory, and is designed for caching, message queues, and primary database use. Fully compatible with Redis, Valkey serves as a drop-in replacement.

You can set alert policies based on your [cluster performance metrics](https://docs.digitalocean.com/products/databases/valkey/how-to/monitor-clusters/). Alert policies notify you when a performance metric rises above or falls below a threshold you set, and again when a metric returns to within the threshold. You can receive notifications via email or Slack.

## Create an Alert Policy

To create an alert policy, click the name of your database cluster to go its **Overview** page, then click the **Insights** tab.

![The Insights tab of a database cluster](https://docs.digitalocean.com/screenshots/databases/valkey-insights-tab.639f9d54ca0de784b9354bae929d0bb0d4cc79aa4e1a5aacb9b876b9c7147929.png)

Click the **Manage alert policies** button to open the **Manage alert policies window**.

![Creating an alert policy](https://docs.digitalocean.com/screenshots/databases/alert-policy.f042f2c5c616a26c0c17e825cde1dcadde0421f2d7ce6b4f84c1dcb30aa8f619.png)

Fill out the sections in the **Create alert policy** tab to set up an alert:

1. **Specify metric & set threshold**. You need to specify three things in this section:
   - The performance metric that you want to create an alert for, like CPU usage or disk usage.

   - The numerical threshold above or below which the alert condition triggers, like above 70% usage or below 50% usage.

   - The length of time a threshold must be breached before the alert notification triggers, like 5 minutes or 1 day. The performance metric you’re alerting on is averaged over this interval to determine if it violates the threshold.
2. **Select Clusters or tags**. Choose the clusters or tags that you want the alert policy to apply to. You can also choose **All clusters**.

3. **Send alerts via**. Choose at least one method of notification. You can receive notifications via email (the email on your account and the email of any [team members](https://docs.digitalocean.com/platform/teams/)) or [Slack](https://slack.com/).

Slack notifications require authentication. Click **Connect Slack** to authenticate. Once you are authenticated to Slack, you can select any Slack team, direct message group, or individual members to which you have access.

4. **Name and create alert policy**. Give the alert policy a descriptive name, and then click **Create alert policy**.


It may take up to a few minutes for the newly-created alert policy to start evaluating data.

## Manage Alert Policies and Triggered Alerts

From the **Insights** tab, click the **Manage alert policies** button to open the **Manage alert policies** window, then click the **Existing alert policies** tab.

You can see all of your existing alert policies here. If an alert is triggered, it appears in a **Triggered Alerts** section of this tab, and untriggered alerts are under **Alert Policies**.

![Triggered alert policy](https://docs.digitalocean.com/screenshots/databases/alert-firing.ed95582bc8257e7a4d83598e5f394c347632bf2b3fd88cadb9c966b41dddaca9.png)

Click an alert policy’s **More** menu and select **Edit** to modify the alert policy. You can also delete an alert policy from the **More** menu, which permanently removes the alert policy without confirmation.

In this article...

- [Create an Alert Policy](https://docs.digitalocean.com/products/databases/valkey/how-to/set-up-alerts/#create-an-alert-policy)
- [Manage Alert Policies and Triggered Alerts](https://docs.digitalocean.com/products/databases/valkey/how-to/set-up-alerts/#manage-alert-policies-and-triggered-alerts)

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