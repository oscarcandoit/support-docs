---
url: "https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/"
title: "How to Forward Logs in App Platform | DigitalOcean Documentation"
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
- Forward Logs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Forward Logs in App Platform

Validated on 16 Nov 2021 • Last edited on 8 Oct 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

In addition to viewing [basic logs](https://docs.digitalocean.com/products/app-platform/how-to/view-logs/) in App Platform, you can forward application runtime logs to external log management providers. This allows you to use the provider to search, index, and retain the logs. Forwarding logs does not count towards application’s bandwidth usage and you cannot use [dedicated egress IP addresses](https://docs.digitalocean.com/products/app-platform/how-to/add-ip-address/) to forward logs at this time.

Currently, App Platform supports log forwarding to [OpenSearch](https://opensearch.org/docs/latest/getting-started), [Papertrail](https://www.papertrail.com/), [Datadog](https://www.datadoghq.com/), [Logtail](https://logtail.com/), and [DigitalOcean Managed OpenSearch clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/).

## Configure Log Forwarding using the Control Panel

To configure log forwarding, go to the [**Apps** section of the control panel](https://cloud.digitalocean.com/apps), click your app, and click the **Settings** tab. In the **Log Forwarding** section, click **Edit** and select your log collection provider. Then provide the applicable values for your provider:

| Provider | Settings |
| --- | --- |
| Managed OpenSearch | **Username (optional)**: The username you use to access the cluster. Defaults to `doadmin`. <br>**Database Cluster Name**: The name of your DigitalOcean Managed OpenSearch database cluster.<br>**Index name (optional)**: The name of the [OpenSearch index](https://opensearch.org/docs/latest/im-plugin) to forward the logs to. Defaults to `logs`.<br>Log forwarding does not support sending logs to [DigitalOcean Managed OpenSearch clusters](https://docs.digitalocean.com/products/databases/opensearch/) with trusted sources enabled. To send logs to a managed OpenSearch cluster, disable trusted sources. |
| OpenSearch | **Endpoint**: The endpoint URL of your OpenSearch cluster, in `https://hostname:port` format. <br>**Username**: The username you use to access the cluster. <br>**Password**: The username’s password to access the cluster. <br>**Index name (optional)**: The name of the [OpenSearch index](https://opensearch.org/docs/latest/im-plugin) to forward the logs to. Defaults to `logs`. |
| Papertrail | **Endpoint**: The provider endpoint where App Platform forwards the logs. Use [TLS-encrypted syslog endpoint](https://www.papertrail.com/help/encrypting-remote-syslog-with-tls-ssl/). App Platform supports Papertrail but not SolarWinds observability. For more information, see the [Papertrail documentation](https://www.papertrail.com/help/papertrail-documentation). |
| Datadog | **Endpoint**: The provider endpoint where App Platform forwards the logs. Use the HTTP endpoint `https://http-intake.logs.datadoghq.com/api/v2/logs`. If you use a different Datadog site, such as `US3`, the endpoint uses a different subdomain. In the example of `US3`, the endpoint is ` https://http-intake.logs.us3.datadoghq.com/api/v2/logs`. Check [Datadog’s documentation](https://docs.datadoghq.com/api/latest/logs/#send-logs) to ensure you’re using the correct endpoint. **API Key** : The [token](https://docs.datadoghq.com/account_management/api-app-keys/#client-tokens) generated by Datadog. For more information, see the [Datadog documentation](https://docs.datadoghq.com/logs). |
| Logtail | **Token**: The token used to access a Rsyslog source in Logtail. For more information, see the [Logtail documentation](https://betterstack.com/docs/logs/digital-ocean/). |

Select the resources of the app that should forward logs to the provider.

![Log destination](https://docs.digitalocean.com/screenshots/app-platform/add-log-destination.3650ddc27ca2b6f84943a0259274614ebd5aef5d8b166bedf11e9673042d80fc.png)

Click the **Add Log Destination** button to enable remote logging for the provider.

![Logs screen](https://docs.digitalocean.com/screenshots/app-platform/log-forwarding.8abfc53d9bbdec0b75320375c289baf03754a207c16b4f1eb1b694ca40640917.png)

## Configure Log Forwarding using the App Spec

To configure log forwarding using the app spec, add a `log_destinations` object to your app spec and specify the log consumer’s details. For example, the following configuration forwards logs to a [DigitalOcean Managed OpenSearch cluster](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/):

```yaml
log_destinations:
  - name: your_log_consumer_name
    open_search:
      cluster_name: your-opensearch-cluster
```

See the [app spec reference](https://docs.digitalocean.com/products/app-platform/reference/app-spec/#yaml-file-structure) for more information about the `log_destinations` object and the details for each log consumer.

In this article...

- [Configure Log Forwarding using the Control Panel](https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/#configure-log-forwarding-using-the-control-panel)
- [Configure Log Forwarding using the App Spec](https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/#configure-log-forwarding-using-the-app-spec)

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