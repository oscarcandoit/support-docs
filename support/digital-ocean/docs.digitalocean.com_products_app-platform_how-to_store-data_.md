---
url: "https://docs.digitalocean.com/products/app-platform/how-to/store-data/"
title: "How to Store Data in App Platform | DigitalOcean Documentation"
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
    - [Manage Databases](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/)
    - [Store Data](https://docs.digitalocean.com/products/app-platform/how-to/store-data/)
    - [Use Database Connection Pools](https://docs.digitalocean.com/products/app-platform/how-to/connect-pg-pools/)
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

- [How-Tos](https://docs.digitalocean.com/products/app-platform/how-to/)
- [Manage Data Storage](https://docs.digitalocean.com/products/app-platform/how-to/manage-data-storage/)
- Store Data

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Store Data in App Platform

Validated on 6 Oct 2020 • Last edited on 17 Jun 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

The following options are available to developers who need to store files and data in their App Platform app.

## Managed Database

You can create a managed relational database from directly within App Platform for use in your app. For more details, see the [Manage Database](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/) topic.

## Spaces

DigitalOcean offers a product called Spaces, which is compatible with Amazon’s S3 buckets. Spaces provide programmatic access to file storage at scale.

To use Spaces in your application, read [the Spaces quickstart](https://docs.digitalocean.com/products/spaces/getting-started/quickstart/) to create a Space, and then begin using the Space in your code via [the RESTful API](https://developers.digitalocean.com/documentation/spaces/) or [existing AWS S3 tools](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/).

## Local Filesystem (Ephemeral Files Only)

If you are writing files for temporary use, you can use the local filesystem. However, keep these two things in mind:

1. **Instances are ephemeral**, and are being continuously created and destroyed as the app is scaled, redeployed, etc, and any changes to the filesystem will be destroyed with the instance. This means that every redeployment of your app will reset the filesystem.

2. If you have a multi-instance app from [scaling horizontally](https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/#scale-your-app), you should remember that **each instance has a separate filesystem**. Because of this, you should not use the local filesystem for anything that needs to be stateful.


## Limits

- The host instances running App Platform containers do not provide persistent data storage. Data in the host instance’s local filesystem is permanently lost after deployments and other container replacements. The local filesystem is additionally limited to 4 GiB, and if it is filled to capacity, the container is detected as unhealthy and replaced.

Apps should only use the host instance’s local filesystem for small amounts of temporary storage. For persistent storage, you can use [Spaces Object Storage](https://docs.digitalocean.com/products/spaces/) or [DigitalOcean Managed Databases](https://docs.digitalocean.com/products/databases/).

- App Platform does not currently support [volumes](https://docs.digitalocean.com/products/volumes/). Because App Platform instances are scalable and ephemeral, we cannot yet support mounting network volumes to the filesystem in a way that is persistent and consistent between instances.

In this article...

- [Managed Database](https://docs.digitalocean.com/products/app-platform/how-to/store-data/#managed-database)
- [Spaces](https://docs.digitalocean.com/products/app-platform/how-to/store-data/#spaces)
- [Local Filesystem (Ephemeral Files Only)](https://docs.digitalocean.com/products/app-platform/how-to/store-data/#local-filesystem-ephemeral-files-only)
- [Limits](https://docs.digitalocean.com/products/app-platform/how-to/store-data/#limits)

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