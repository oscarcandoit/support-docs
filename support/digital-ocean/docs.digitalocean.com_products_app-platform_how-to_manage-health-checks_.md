---
url: "https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/"
title: "How to Set Up and Manage Health Checks | DigitalOcean Documentation"
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
- Manage Health Checks

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Set Up and Manage Health Checks

Validated on 21 May 2025 • Last edited on 7 Oct 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

Health checks in App Platform serve as readiness probes to determine when an application is ready to start handling traffic. When you a deploy an app, App Platform uses a set of parameters to determine when health checks should begin, how often they should run, and how many times they must fail before considering the app unhealthy and sending an email to the account’s email address.

App Platform has default health check settings that work for most apps, but you can customize them for your specific app’s needs. For example, if you know your app takes longer to deploy than the default time before health checks start, you may want to increase that value.

You can customize your app’s health check settings using the [control panel](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/#using-the-control-panel) or the [app spec](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/#using-the-app-spec).

## Using the Control Panel

To customize your app’s health check settings, go to the [control panel](https://cloud.digitalocean.com/apps), click **Apps**, and select the app you want to customize health settings for. Click on the **Settings** tab, scroll down to the **Health Checks** section, and click **Edit**.

![Health checks section](https://docs.digitalocean.com/screenshots/app-platform/health-checks-section.1635c217df61034b41be4c38bc6dab281079989aeeff9ac02ac8dfdb6dc0472f.png)

Enter the health check’s type (TCP or HTTP) and its port. Then, you can optionally configure the following or leave them at their default values:

- Initial Delay: The number of seconds before the App Platform begins initiating health checks after a deployment.
- Period: The number of seconds (interval) between health checks.
- Timeout: The number of seconds before a health check is considered failed.
- Success Threshold: The number of consecutive successful health checks required before the app is considered healthy.
- Failure Threshold: The number of consecutive failed health checks required before the app is considered unhealthy.

You can enable liveness probes for [services](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/#services) and [workers](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/#workers) that automatically restart your app if its health check fails. We recommend using liveness checks (which restart the app) in conjunction with health checks (which stop traffic). To do so, click the **Add liveness check** button and enter the same information as above.

![Liveness checks section](https://docs.digitalocean.com/screenshots/app-platform/liveness-checks-section.d61a8f239071b9e53f0a7ced998a0fc71026a4ae29568b49d5120b37f9b7c84c.png)

Click **Save** to confirm your changes.

## Using the App Spec

To customize your app’s health check settings, [edit the app’s spec](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/) and add the `health_check` object to your service component, like this:

`app.yaml`

```yaml
health_check:
  initial_delay_seconds: 30
  period_seconds: 10
  timeout_seconds: 5
  success_threshold: 1
  failure_threshold: 5
  http_path: /api
  port: 8080
```

Each field in the `health_check` object has the following meaning:

- `initial_delay_seconds`: The number of seconds before the App Platform begins initiating health checks after a deployment.
- `period_seconds`: The number of seconds (interval) between health checks.
- `timeout_seconds`: The number of seconds before a health check is considered failed.
- `success_threshold`: The number of consecutive successful health checks required before the app is considered healthy.
- `failure_threshold`: The number of consecutive failed health checks required before the app is considered unhealthy.
- `http_path`: The HTTP path on which to perform health checks. If not set, App Platform disables the HTTP health check and a TCP health check used instead.
- `port`: The port on which to perform health checks. If not set, App Platform performs the health check on the component’s `http_port`.

Once you add the `health_check` object to your app spec, upload the spec to your app’s repo or deploy it directly using the control panel.

### Set Up Liveness Probes

You can enable liveness probes for [services](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/#services) and [workers](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/#workers) that automatically restart your app if its health check fails.

We recommend using `liveness_health_check` (which restarts the app) in conjunction with `health_check` (which stops traffic).

#### Services

To enable liveness probes for a service, specify `liveness_health_check` in your app spec, like this:

```yaml
name: sample-golang
services:
 - name: web
   github:
     repo: digitalocean/sample-golang
     branch: master
   liveness_health_check:
     initial_delay_seconds: 10
     period_seconds: 10
     timeout_seconds: 5
     success_threshold: 1
     failure_threshold: 6
     http_path: /
     port: 8080
```

#### Workers

To enable liveness probes on workers, specify `liveness_health_check` in your app spec and ensure your worker application is listening to the designated port and responds to health checks, like this:

```yaml
ame: sample-golang
workers:
 - name: background-service
   envs:
     - key: PORT
       value: "8080"
   github:
     repo: digitalocean/sample-golang
     branch: master
   liveness_health_check:
     initial_delay_seconds: 10
     period_seconds: 10
     timeout_seconds: 5
     success_threshold: 1
     failure_threshold: 5
     http_path: /
     port: 8080
```

In this article...

- [Using the Control Panel](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/#using-the-control-panel)
- [Using the App Spec](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/#using-the-app-spec)
  - [Set Up Liveness Probes](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/#set-up-liveness-probes)
    - [Services](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/#services)
    - [Workers](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/#workers)

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