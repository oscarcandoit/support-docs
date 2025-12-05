---
url: "https://docs.digitalocean.com/products/app-platform/concepts/choosing-a-plan/"
title: "Choosing a Plan for Your App Components | DigitalOcean Documentation"
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

- [Concepts](https://docs.digitalocean.com/products/app-platform/concepts/)
- Choosing a Plan

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Choosing a Plan for Your App Components

Validated on 16 Jun 2022 • Last edited on 1 May 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

Choosing the [right plan](https://docs.digitalocean.com/products/app-platform/details/pricing/#current-plans) for your App Platform components depends on the component’s expected workload. An oversized component underutilizes the container’s resources and costs more than needed. An undersized component risks being overwhelmed and unable to handle spikes in resource usage.

This guide covers the following topics:

- [How to choose a CPU type (shared or dedicated)](https://docs.digitalocean.com/products/app-platform/concepts/choosing-a-plan/#choose-a-cpu-type)
- [How to choose the right number of CPUs and memory](https://docs.digitalocean.com/products/app-platform/concepts/choosing-a-plan/#choosing-the-number-of-cpus-and-memory)

## Choose a CPU Type

App Platform offers two types of CPUs: shared CPUs and dedicated CPUs.

Shared CPUs are shared with other DigitalOcean customers. This means that when you deploy an app component on a shared CPU, the component shares its processing power with other apps on App Platform. They provide a cost-effective option for typical web workloads. However, the resources available to your app may vary depending on usage by other customers. We recommend shared CPUs for components with low to medium workloads and traffic, such as blogs, small websites, basic APIs, and microservices.

Dedicated CPUs are solely dedicated to your app component. This means your component has guaranteed access to the full processing power of the CPUs it is deployed on. Dedicated CPUs provide isolation, consistent performance, and can use autoscaling. They cost more than shared CPUs but provide more predictable performance. We recommend dedicated CPUs for components with heavy workloads, strict performance requirements, or components that require autoscaling. Examples include video and streaming services, resource-intensive APIs, and apps with heavy user traffic.

## Choosing the Number of CPUs and Memory

When choosing the amount of CPUs and memory, it is better to err on the side of more resources rather than less. This ensures your app component has enough headroom to handle traffic spikes without performance issues. Once you establish a baseline of normal usage through metrics, you can scale down over time if needed.

To get a better idea of what you need to start with, you can try deploying your app inside of a Docker container locally and use tools like [Docker Stats](https://docs.docker.com/reference/cli/docker/container/stats) or [htop](https://www.geeksforgeeks.org/htop-command-in-linux-with-examples) to monitor CPU and memory usage over time as you simulate normal and peak traffic loads. This gives you real data to help determine your component’s resource needs.

![A screenshot of the App Platform Insights screen showing CPU and memory usage over time.](https://docs.digitalocean.com/screenshots/app-platform/app-insights.22efee0ede1e7a6b353a88a51c9b3f8eb8c56211e2f504f6643a49d5058d8f31.png)

Once you’ve deployed your app, you can start monitoring its resource usage with App Platform’s [monitoring feature](https://docs.digitalocean.com/products/app-platform/how-to/view-insights/) to help determine whether you need to rescale the component’s resources up or down.

In general, we only recommend fixed plans (plans with no scaling features) for low traffic websites and workers performing tasks that are not time sensitive.

In this article...

- [Choose a CPU Type](https://docs.digitalocean.com/products/app-platform/concepts/choosing-a-plan/#choose-a-cpu-type)
- [Choosing the Number of CPUs and Memory](https://docs.digitalocean.com/products/app-platform/concepts/choosing-a-plan/#choosing-the-number-of-cpus-and-memory)

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