---
url: "https://docs.digitalocean.com/products/app-platform/how-to/create-alerts/"
title: "How to Create Alerts and Set Up Monitoring in App Platform | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/app-platform.965eeb0520b4c178cc9bf64423065e5aa5c2f47ad6102384e37beca3c079f287.svg)App Platform](https://docs.digitalocean.com/products/app-platform/)
- [Getting Started](https://docs.digitalocean.com/products/app-platform/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/)
  - [Sample Apps](https://docs.digitalocean.com/products/app-platform/getting-started/sample-apps/)
  - [Sample Functions](https://docs.digitalocean.com/products/functions/getting-started/sample-functions/)
  - [Deploy Sample Apps](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-sample-apps/)
  - [Deploy an RSS Reader](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-rss-reader/)
  - [Deploy Etherpad](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-etherpad/)
- [How-Tos](https://docs.digitalocean.com/products/app-platform/how-to/)
  - [Create Apps](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/)
  - [Deploy from Container Images](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/)
  - [Deploy From Monorepos](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-monorepo/)
  - [Deploy Using GitHub Actions](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-github-actions/)
  - [Scale Apps](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/)
  - [Manage Components](https://docs.digitalocean.com/products/app-platform/how-to/manage-components/)
  - [Manage Data Storage](https://docs.digitalocean.com/products/app-platform/how-to/manage-data-storage/)
  - [Manage App Settings](https://docs.digitalocean.com/products/app-platform/how-to/manage-settings/)
  - [Manage Networking](https://docs.digitalocean.com/products/app-platform/how-to/manage-networking/)
  - [Manage Observability](https://docs.digitalocean.com/products/app-platform/how-to/manage-observability/)
    - [Manage Health Checks](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/)
    - [View Logs](https://docs.digitalocean.com/products/app-platform/how-to/view-logs/)
    - [Forward Logs](https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/)
    - [Create Alerts](https://docs.digitalocean.com/products/app-platform/how-to/create-alerts/)
    - [View Insights](https://docs.digitalocean.com/products/app-platform/how-to/view-insights/)
  - [Manage Deployments](https://docs.digitalocean.com/products/app-platform/how-to/manage-deployments/)
  - [Access Console](https://docs.digitalocean.com/products/app-platform/how-to/console/)
  - [Restart or Rebuild App](https://docs.digitalocean.com/products/app-platform/how-to/restart-rebuild-app/)
  - [Update App Spec](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/)
  - [Manage Source Repository](https://docs.digitalocean.com/products/app-platform/how-to/manage-source-repo/)
  - [Add "Deploy to DigitalOcean" Button](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/)
  - [Build Locally](https://docs.digitalocean.com/products/app-platform/how-to/build-locally/)
  - [Use MCP Server](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/)
  - [Destroy Apps](https://docs.digitalocean.com/products/app-platform/how-to/destroy-app/)
- [Reference](https://docs.digitalocean.com/products/app-platform/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Apps)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/apps/)
  - [Builds with Buildpacks](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/)
  - [Builds with Dockerfiles](https://docs.digitalocean.com/products/app-platform/reference/dockerfile/)
  - [App Spec Reference](https://docs.digitalocean.com/products/app-platform/reference/app-spec/)
  - [Dev Config Reference](https://docs.digitalocean.com/products/app-platform/reference/dev-config/)
  - [Error Code Reference](https://docs.digitalocean.com/products/app-platform/reference/error-codes/)
- [Concepts](https://docs.digitalocean.com/products/app-platform/concepts/)
  - [Choosing a Plan](https://docs.digitalocean.com/products/app-platform/concepts/choosing-a-plan/)
  - [Platform Upgrade Policy](https://docs.digitalocean.com/products/app-platform/concepts/platform-upgrade-policy/)
  - [Glossary](https://docs.digitalocean.com/glossary/app-platform/)
- [Details](https://docs.digitalocean.com/products/app-platform/details/)
  - [Introduction FAQ](https://docs.digitalocean.com/products/app-platform/details/intro-faq/)
  - [Features](https://docs.digitalocean.com/products/app-platform/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/app-platform/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/app-platform/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/app-platform/details/limits/)
  - [Maintenance](https://docs.digitalocean.com/products/app-platform/details/maintenance/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/app-platform)
- [Support](https://docs.digitalocean.com/products/app-platform/support/)

- [How-Tos](https://docs.digitalocean.com/products/app-platform/how-to/)
- [Manage Observability](https://docs.digitalocean.com/products/app-platform/how-to/manage-observability/)
- Create Alerts

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create Alerts and Set Up Monitoring in App Platform

Validated on 18 Aug 2021 • Last edited on 30 Jul 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

In addition to [viewing insights](https://docs.digitalocean.com/products/app-platform/how-to/view-insights/), you can monitor and set up alerts for certain events. App Platform provides the following app-level and resource-level alerts:

- **App alerts**: The following events can trigger app-level alerts:
  - Failed deployment
  - Successful deployment
  - Failed domain configuration
  - Successful domain configuration
  - Autoscale failed
  - Autoscale succeeded
- **Metric alerts for app resources**: The following metrics can trigger resource-level alerts:
  - CPU
  - Memory
  - Restart count
- **Metric alerts for Functions**: The following metrics can trigger Function-level alerts:
  - Activation count
  - Average duration
  - Average wait time
  - Error count
  - Error rate per minute
  - Memory consumption rate (in GB per second)

By default, when you create a new app, App Platform creates email alerts for failed deployments and failed domain configurations.

![Default app-level alerts](https://docs.digitalocean.com/screenshots/app-platform/app-alerts-default.3d148fb0114da040add7a64099982987a8f68c61d28eb589f67ab76434be41d4.png)Note
App Platform sometimes redeploys apps for infrastructure maintenance purposes. If you have alerts configured to trigger on deployments, you may occasionally receive alerts when App Platform re-deploys an app due to maintenance.

## Set Up App Alerts

To manage your alert policies, go to [https://cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps), click your app, and click the **Settings** tab. In the **Alerts Policies** section, click **Edit**. You can enable or disable an alert or set the notification method to be email and/or Slack. Click the alert to expand it, make your selections and click **Save**.

![Edit app-level alerts](https://docs.digitalocean.com/screenshots/app-platform/edit-app-alerts.008a8d702d1b876b67af41058e638243316f5850b5af5dcfca0eba9c2ef35e11.png)

## Monitor Resource Metrics

You can configure resources to trigger alerts based on metrics such as CPU and memory usage, and number of restarts. The alert triggers when the metric is above or below a certain threshold and for a certain time duration. You can configure the alert to apply to all or specific app resources. To set a metric alert:

1. Select your app or an app resource in the **Settings** tab and click **Create Alert Policy**.
2. Select the metric in the **Metric** drop-down list.
3. Select **Above** or **Below** in the **Above or Below** drop-down list.
4. Enter a threshold in the **Threshold %** field.
5. Specify the time duration in the **Duration** drop-down list.
6. Select **Email** or **Connect Slack** as the **Delivery Method** for receiving alert notifications.
7. Select the checkboxes for the resources you want to set the alert for.
8. Click **Save** to save the alert.

![Create new metric alert](https://docs.digitalocean.com/screenshots/app-platform/new-metric-alert.803bb4300178b828e8c2c72e5a089b1469e8bd5b28df0007326cf4b0db1403f8.png)

In this article...

- [Set Up App Alerts](https://docs.digitalocean.com/products/app-platform/how-to/create-alerts/#set-up-app-alerts)
- [Monitor Resource Metrics](https://docs.digitalocean.com/products/app-platform/how-to/create-alerts/#monitor-resource-metrics)

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