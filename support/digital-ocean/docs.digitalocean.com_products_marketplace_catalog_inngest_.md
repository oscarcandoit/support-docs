---
url: "https://docs.digitalocean.com/products/marketplace/catalog/inngest/"
title: "Inngest | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/marketplace.6eb4c8240f6fd707ebe2218018dc699d375e2e3e9885d7fb3e760a9fc120a68e.svg)Marketplace](https://docs.digitalocean.com/products/marketplace/)
- [Droplet 1-Click Apps](https://docs.digitalocean.com/products/marketplace/droplet-1-click-apps/)
- [Kubernetes 1-Click Apps](https://docs.digitalocean.com/products/marketplace/kubernetes-1-click-apps/)
- [SaaS Add-Ons](https://docs.digitalocean.com/products/marketplace/saas-add-ons/)
- [1-Click Models](https://docs.digitalocean.com/products/marketplace/1-click-models/)
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/inngest/)
  - [Add-Ons](https://docs.digitalocean.com/products/marketplace/categories/add-ons/)
  - [Analytics](https://docs.digitalocean.com/products/marketplace/categories/analytics/)
  - [Blogs and Forums](https://docs.digitalocean.com/products/marketplace/categories/blogs-and-forums/)
  - [Business Apps](https://docs.digitalocean.com/products/marketplace/categories/business-apps/)
  - [Chat](https://docs.digitalocean.com/products/marketplace/categories/chat/)
  - [Data Science](https://docs.digitalocean.com/products/marketplace/categories/data-science/)
  - [Databases](https://docs.digitalocean.com/products/marketplace/categories/databases/)
  - [Developer Tools](https://docs.digitalocean.com/products/marketplace/categories/developer-tools/)
  - [eCommerce](https://docs.digitalocean.com/products/marketplace/categories/ecommerce/)
  - [eLearning](https://docs.digitalocean.com/products/marketplace/categories/elearning/)
  - [Email](https://docs.digitalocean.com/products/marketplace/categories/email/)
  - [Frameworks](https://docs.digitalocean.com/products/marketplace/categories/frameworks/)
  - [Functions](https://docs.digitalocean.com/products/marketplace/categories/functions/)
  - [Gaming](https://docs.digitalocean.com/products/marketplace/categories/gaming/)
  - [Kubernetes](https://docs.digitalocean.com/products/marketplace/categories/kubernetes/)
  - [Logging](https://docs.digitalocean.com/products/marketplace/categories/logging/)
  - [Media](https://docs.digitalocean.com/products/marketplace/categories/media/)
  - [Monitoring](https://docs.digitalocean.com/products/marketplace/categories/monitoring/)
  - [Network Tools](https://docs.digitalocean.com/products/marketplace/categories/network-tools/)
  - [Security](https://docs.digitalocean.com/products/marketplace/categories/security/)
  - [Storage](https://docs.digitalocean.com/products/marketplace/categories/storage/)
- [Glossary](https://docs.digitalocean.com/glossary/marketplace/)
- [Service-Level Agreement](https://www.digitalocean.com/sla/marketplace)

- Inngest

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Inngest

Generated on 10 Mar 2025
from [the Inngest catalog page](https://marketplace.digitalocean.com/add-ons/inngest)

## **What is Inngest?**

- **Forget about queues, discover durable workflows:** Focus on writing business logic as simple functions. Inngest handles the infrastructure, scaling, and retries behind the scenes. Integrate directly into your existing codebase, allowing any engineer to ship unbreakable workflows with best-in-class observability.
- **Scale configured from code:** Easily manage concurrency, rate limits, and long-running jobs without additional infrastructure.
- **Multiple SDKs:** Write workflows in **TypeScript, Python, or Go** with our simple SDKs and run them locally with our Dev Server.
- **Simple to start:** One-click installation with a generous free tier, including up to 100k executions per month.
- **Battle-tested at scale**: Inngest handles over 30 billion monthly workflow executions, powering products at Soundcloud, Tripadvisor, and 1000+ other companies. Inngest fully complies with SOC 2 Type II, HIPAA, and GDPR to ensure the highest level of protection for sensitive data.

![image.png](https://www.inngest.com/assets/external/digital-ocean-marketplace/cto-soundcloud.png)

## Inngest vs. Kafka, RabbitMQ, Temporal, or Cron To Go

Inngest is all about letting developers focus on their code instead of infrastructure or Droplet provisioning. Unlike Cron To Go, Kafka, RabbitMQ, or Temporal, Inngest connects to your existing Droplet or App Platform application as an Add-On, without requiring a Droplet deployment.

And that’s not all:

- Inngest offers a **generous free plan (100k free executions)** without requiring a Droplet deployment, making it free to get started with or for small projects.
- **Cron jobs are defined directly in your code**, making it easy to version and tie them to deployments.
- **No academy or workshop required:** Kafka, RabbitMQ, or Temporal come with a steep learning curve. You can set up Inngest in under a few minutes and learn its core concept in a few hours, enabling you to scale your app to millions of users.
- **You have complete visibility and control over your application**: The Inngest dashboard (accessible via your DigitalOcean dashboard) provides real-time metrics and traces, as well as production tools to replay failed workflows upon failure.

![image.png](https://www.inngest.com/assets/external/digital-ocean-marketplace/cto-bearskin-tactical.png)

## **Getting started**

### Prerequisites

Before starting, make sure you have:

- A DigitalOcean account with an application deployed on the App Platform or a Droplet.
- Access to SaaS Add-Ons and Environment Variables in your App Platform project or Droplet.

### Step 1: Add Inngest as a SaaS Add-On

Click the blue ‘Add Inngest’ button at the top of this page.

Or, from your DigitalOcean dashboard:

- Open your application from the Apps section.
- Go to SaaS Add-Ons.
- Click Add SaaS Add-On → Inngest.
- Select the region closest to your app’s deployment.
- Click Create Resource.

You can now proceed to step 2 to access your Inngest application credentials.

### Step 2: Access your Inngest application credentials.

Once the Inngest Add-On is installed, click on the “View Inngest” link to access the Inngest dashboard:

![image.png](https://www.inngest.com/assets/external/digital-ocean-marketplace/inngest-dashboard.png)

From the Inngest Dashboard, click on the keys icon on the top left to access the Event and Signing keys:

![image.png](https://www.inngest.com/assets/external/digital-ocean-marketplace/digital-ocean-dashboard.png)

Navigate both the Event and Signing key pages to copy their values.

### Step 3: Configure Environment Variables

Back to your DigitalOcean Dashboard, copy Event and Signing keys into your application environment variables as follows:

- `INNGEST_EVENT_KEY` → copy from the Inngest Dashboard tab
- `INNGEST_SIGNING_KEY` → → copy from the Inngest Dashboard tab

### You’re all set: install and configure the Inngest SDK

Your DigitalOcean application is now configured with the Inngest Add-Ons. You can now install the Inngest SDK in your application and follow the tutorials below to configure it depending on your language and framework:

- [TypeScript quick start](https://www.inngest.com/docs/getting-started/nodejs-quick-start)
- [Python quick start](https://www.inngest.com/docs/getting-started/python-quick-start)
- [Go reference](https://pkg.go.dev/github.com/inngest/inngestgo)

**Note:** Once your application is configured and deployed with the Inngest SDK, go to the Inngest Dashboard to [sync your application](https://www.inngest.com/docs/apps/cloud).

## Software Included

_This Marketplace listing does not include a detailed software list._

## Installing this Add-On using the Control Panel

Click the **Deploy to DigitalOcean** button to install this add-on. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy Inngest to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/add-ons/create/inngest)

## Getting Started After Deploying Inngest

_This Marketplace listing does not include getting-started steps._

In this article...

- [**What is Inngest?**](https://docs.digitalocean.com/products/marketplace/catalog/inngest/#what-is-inngest)
- [Inngest vs. Kafka, RabbitMQ, Temporal, or Cron To Go](https://docs.digitalocean.com/products/marketplace/catalog/inngest/#inngest-vs-kafka-rabbitmq-temporal-or-cron-to-go)
- [**Getting started**](https://docs.digitalocean.com/products/marketplace/catalog/inngest/#getting-started)
  - [Prerequisites](https://docs.digitalocean.com/products/marketplace/catalog/inngest/#prerequisites)
  - [Step 1: Add Inngest as a SaaS Add-On](https://docs.digitalocean.com/products/marketplace/catalog/inngest/#step-1-add-inngest-as-a-saas-add-on)
  - [Step 2: Access your Inngest application credentials.](https://docs.digitalocean.com/products/marketplace/catalog/inngest/#step-2-access-your-inngest-application-credentials)
  - [Step 3: Configure Environment Variables](https://docs.digitalocean.com/products/marketplace/catalog/inngest/#step-3-configure-environment-variables)
  - [You’re all set: install and configure the Inngest SDK](https://docs.digitalocean.com/products/marketplace/catalog/inngest/#youre-all-set-install-and-configure-the-inngest-sdk)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/inngest/#software-included)
- [Installing this Add-On using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/inngest/#installing-this-add-on-using-the-control-panel)
- [Getting Started After Deploying Inngest](https://docs.digitalocean.com/products/marketplace/catalog/inngest/#getting-started-after-deploying-inngest)

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