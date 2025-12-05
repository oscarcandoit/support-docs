---
url: "https://docs.digitalocean.com/products/app-platform/details/features/"
title: "App Platform Features | DigitalOcean Documentation"
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

- [Details](https://docs.digitalocean.com/products/app-platform/details/)
- Features

[Give Feedback](https://ideas.digitalocean.com/documentation)

# App Platform Features

Validated on 16 Jun 2022 • Last edited on 23 Oct 2024

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

App Platform can either automatically analyze and build code from your GitHub, GitLab or public Git repositories and publish your application to the cloud, or publish a container image you have already uploaded to [DigitalOcean Container Registry](https://docs.digitalocean.com/products/container-registry/) or Docker Hub. It also has lifecycle management features, vertical and horizontal scaling, push-to-deploy support, introspection and monitoring features, built-in database management and integration — everything a developer needs to get code live in production.

![Build and deploy your app in the cloud directly from GitHub with App Platform.](https://docs.digitalocean.com/screenshots/app-platform/deploy-app-from-github.dc5627d3bbe6797a540b8fd9b26f3e7eb06034d64e2797da82d59f436194d147.gif)

App Platform is ideal for developers that want to focus on shipping code, and prefer the simplicity of linking their GitHub, GitLab, public Git repository, or container registry to App Platform and letting DigitalOcean build and deploy their app in the cloud.

You can provide a Dockerfile for DigitalOcean to use in the build process, provide an already-built container image, or let us inspect the code and automatically build the app for you. From there, apply the proper settings so that the build runs (such as routing details, custom domains, and environment variables) and add a database to your solution in the user interface.

### List of Features

This table outlines the key features available to each [App Platform plan](https://docs.digitalocean.com/products/app-platform/details/pricing/#current-plans), unless otherwise specified:

- Build and deploy static assets
- Build and deploy dynamic apps (like Node.js, Python, Go, Ruby, PHP, or Docker)
- Continuous deployment from Git repository
- Automatic SSL/TLS certificates (HTTPS)
- Bring your custom domain
- Global CDN for performance
- Dedicated egress IP addresses and static ingress IP addresses
- DDoS mitigation
- Unlimited team members
- Rollback apps to one of the ten most recent successful deployments
- Per minutes application metrics
- Shared or dedicated CPUs (dependent on the component’s plan)
- Auto OS patching
- Vertical scaling
- Manual horizontal scaling (available for most plans)
- Autoscaling (available for plans using dedicated CPUs)
- High availability (available for apps running two or more containers)
- Outbound transfer (bundled with your component’s plan)
- Git Large File Support (LFS)
- Deployment using GitHub Actions
- HTTP/2 and gRPC support
- HTTP/3 support at edge servers

### Cloud-Hosted Builds

App Platform allows you to hook up your source code repository and deploy using a cloud-hosted build system that automatically detects the needed environment to run your app.

App Platform automatically downloads and installs any necessary frameworks at build time for supported environments. You can [try our sample applications](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/) to see App Platform’s auto-detection and cloud builds in action.

### Shared and Dedicated CPUs

You can choose between shared and dedicated CPU plans when deploying App Platform apps. Shared CPU plans provide CPUs that are shared with other DigitalOcean customers, while dedicated CPU plans dedicate CPUs solely to your app.

Shared CPUs provide a good balance of cost and performance for typical web workloads. Dedicated CPUs provide isolation, guaranteed resources, higher performance, and [autoscaling](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/). We recommend dedicated CPUs for resource-intensive apps or apps that require guaranteed resources and consistent high performance.

Read our [Choose a Plan guide](https://docs.digitalocean.com/products/app-platform/concepts/choosing-a-plan/) to learn more about how to choose the correct CPU and amount of memory for your app.

### Horizontal Scaling, Vertical Scaling, and Autoscaling

You can scale apps horizontally or vertically at any time. Horizontal scaling adds more instances to distribute the workload across, while vertical scaling increases CPU power and memory on existing instances. For details, see [the scaling instructions in the Quickstart](https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/#scale-your-app)

App components using dedicated CPUs can use the autoscaling feature to automatically add or remove instances based on CPU or memory usage thresholds. This ensures your app always has enough resources without manual intervention. See [the autoscaling how-to](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/#configure-autoscaling) for instructions on how to add autoscaling to an app component.

### Serverless Functions

Functions are blocks of code that run on-demand in response to requests. You can use functions to build APIs to power your app backend along with a static site or a containerized web application. The infrastructure to run functions and their execution environment are managed by App Platform, and automatically scale with demand.

### When Not to Use App Platform

While you can control the scaling of your app, manage the individual services that comprise your app, and integrate databases using App Platform, that may not be enough. App Platform is optimized for ease of code deployment rather than deep customization of the underlying infrastructure. Teams that require more control over their production environment and the design and behavior of their infrastructure may prefer one of our other two compute options:

1. [DigitalOcean Kubernetes](https://docs.digitalocean.com/products/kubernetes/) gives users control of a managed Kubernetes cluster that can run their container-based applications. It supports private registries, autoscaling, and push-to-deploy (through GitHub actions). It also provides a DigitalOcean-hosted instance of the Kubernetes dashboard for each cluster, and replaces the concept of primary nodes with a node pool that manages capacity for you, resulting in a Kubernetes experience that is significantly simpler than the native experience.

2. You can build your own infrastructure solution that uses [Droplets](https://docs.digitalocean.com/products/droplets/) (Linux based virtual machines) for compute capacity. Common techniques and workflows for configuration management tools like Terraform and Ansible are covered in the [Navigator’s Guide](https://github.com/digitalocean/navigators-guide/releases). You can also get a sense of how the various products work together by reading the [Solutions guides](https://www.digitalocean.com/business/).


In this article...

- [List of Features](https://docs.digitalocean.com/products/app-platform/details/features/#list-of-features)
- [Cloud-Hosted Builds](https://docs.digitalocean.com/products/app-platform/details/features/#cloud-hosted-builds)
- [Shared and Dedicated CPUs](https://docs.digitalocean.com/products/app-platform/details/features/#shared-and-dedicated-cpus)
- [Horizontal Scaling, Vertical Scaling, and Autoscaling](https://docs.digitalocean.com/products/app-platform/details/features/#horizontal-scaling-vertical-scaling-and-autoscaling)
- [Serverless Functions](https://docs.digitalocean.com/products/app-platform/details/features/#serverless-functions)
- [When Not to Use App Platform](https://docs.digitalocean.com/products/app-platform/details/features/#when-not-to-use-app-platform)

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