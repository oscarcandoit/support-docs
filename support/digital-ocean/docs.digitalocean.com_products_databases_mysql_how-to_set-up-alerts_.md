---
url: "https://docs.digitalocean.com/products/databases/mysql/how-to/set-up-alerts/"
title: "How to Set Up MySQL Cluster Monitoring Alerts | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/mysql.15f32316da2692011abce02f393a1ee6db469250230cf1ea962c181c0e9e7de5.svg)MySQL](https://docs.digitalocean.com/products/databases/mysql/)
- [Getting Started](https://docs.digitalocean.com/products/databases/mysql/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/mysql/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/databases/mysql/how-to/)
  - [Create MySQL Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/create/)
  - [Connect to MySQL Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/connect/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/resize/)
  - [Import Databases](https://docs.digitalocean.com/products/databases/mysql/how-to/import-databases/)
  - [Secure MySQL Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/secure/)
  - [Migrate MySQL Databases](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/mysql/how-to/schedule-updates/)
  - [Manage Users and Databases](https://docs.digitalocean.com/products/databases/mysql/how-to/manage-users-and-databases/)
  - [Modify User Privileges](https://docs.digitalocean.com/products/databases/mysql/how-to/modify-user-privileges/)
  - [Monitor MySQL Performance](https://docs.digitalocean.com/products/databases/mysql/how-to/monitor-databases/)
  - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/mysql/how-to/add-standby-nodes/)
  - [Add Read-Only Nodes](https://docs.digitalocean.com/products/databases/mysql/how-to/add-read-only-nodes/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/mysql/how-to/monitor-clusters/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/mysql/how-to/set-up-alerts/)
  - [Relocate Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/relocate/)
  - [Fork Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/fork-clusters/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/mysql/how-to/forward-logs/)
  - [Restore from Backups](https://docs.digitalocean.com/products/databases/mysql/how-to/restore-from-backups/)
  - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/destroy/)
  - [Set Global SQL Mode](https://docs.digitalocean.com/products/databases/mysql/how-to/set-sql-mode/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/tag/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/reconfigure/)
  - [Create Primary Keys](https://docs.digitalocean.com/products/databases/mysql/how-to/create-primary-keys/)
- [Reference](https://docs.digitalocean.com/products/databases/mysql/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/mysql/concepts/)
  - [Migration Strategies](https://docs.digitalocean.com/products/databases/mysql/concepts/migration-strategies/)
  - [Sort Buffer Size](https://docs.digitalocean.com/products/databases/mysql/concepts/sort-buffer-size/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/mysql/concepts/best-practices/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/mysql/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/mysql/details/)
  - [Features](https://docs.digitalocean.com/products/databases/mysql/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/mysql/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/mysql/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/mysql/details/limits/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/mysql/details/notifications/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)
- [Support](https://docs.digitalocean.com/products/databases/mysql/support/)

- [How-Tos](https://docs.digitalocean.com/products/databases/mysql/how-to/)
- Set Up Monitoring Alerts

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Set Up MySQL Cluster Monitoring Alerts

Validated on 1 Mar 2021 • Last edited on 16 Apr 2025

MySQL is an open source, object-relational database built with speed and reliability in mind. Its large and active developer community has created many third-party applications, tools, and libraries that expand MySQL’s functionality.

You can set alert policies based on your [cluster performance metrics](https://docs.digitalocean.com/products/databases/mysql/how-to/monitor-clusters/). Alert policies notify you when a performance metric rises above or falls below a threshold you set, and again when a metric returns to within the threshold. You can receive notifications via email or Slack.

## Create an Alert Policy

To create an alert policy, click the name of your database cluster to go its **Overview** page, then click the **Insights** tab.

![The Insights tab of a database cluster](https://docs.digitalocean.com/screenshots/databases/mysql-insights-tab.1fbd57f47463ef75086f6c696d6b9e85cd70564defd4fb07a1729e0558710991.png)

Click the **Manage alert policies** button to open the **Manage alert policies window**.

![Creating an alert policy](https://docs.digitalocean.com/screenshots/databases/alert-policy.f042f2c5c616a26c0c17e825cde1dcadde0421f2d7ce6b4f84c1dcb30aa8f619.png)

Fill out the sections in the **Create alert policy** tab to set up an alert:

1. **Specify metric & set threshold**. You need to specify three things in this section:
   - The performance metric that you want to create an alert for, like CPU usage or disk usage.

   - The numerical threshold above or below which the alert condition triggers, like above 70% usage or below 50% usage.

   - The length of time a threshold must be breached before the alert notification triggers, like 5 minutes or 1 day. The performance metric you’re alerting on is averaged over this interval to determine if it violates the threshold.
2. **Select Clusters or tags**. Choose the clusters or tags that you want the alert policy to apply to. You can also choose **All clusters**.

3. **Send alerts via**. Choose at least one method of notification. You can receive notifications via email (the email on your account and the email of any [team members](https://docs.digitalocean.com/platform/teams/)) or [Slack](https://slack.com/).

Slack notifications require Slack authentication. Click **Connect Slack** to authenticate. Once you are authenticated to Slack, you can select any Slack team, direct message group, or individual members to which you have access.

4. **Name and create alert policy**. Give the alert policy a descriptive name, and then click **Create alert policy**.


It may take up to a few minutes for the newly-created alert policy to start evaluating data.

## Manage Alert Policies and Triggered Alerts

From the **Insights** tab, click the **Manage alert policies** button to open the **Manage alert policies** window, then click the **Existing alert policies** tab.

You can see all of your existing alert policies here. If an alert is triggered, it appears in a **Triggered Alerts** section of this tab, and untriggered alerts are under **Alert Policies**.

![Triggered alert policy](https://docs.digitalocean.com/screenshots/databases/alert-firing.ed95582bc8257e7a4d83598e5f394c347632bf2b3fd88cadb9c966b41dddaca9.png)

Click an alert policy’s **More** menu and select **Edit** to modify the alert policy. You can also delete an alert policy from the **More** menu, which permanently removes the alert policy without confirmation.

In this article...

- [Create an Alert Policy](https://docs.digitalocean.com/products/databases/mysql/how-to/set-up-alerts/#create-an-alert-policy)
- [Manage Alert Policies and Triggered Alerts](https://docs.digitalocean.com/products/databases/mysql/how-to/set-up-alerts/#manage-alert-policies-and-triggered-alerts)

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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)