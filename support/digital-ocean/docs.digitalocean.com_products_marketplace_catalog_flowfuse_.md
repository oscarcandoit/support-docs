---
url: "https://docs.digitalocean.com/products/marketplace/catalog/flowfuse/"
title: "FlowFuse | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/flowfuse/)
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

- FlowFuse

[Give Feedback](https://ideas.digitalocean.com/documentation)

# FlowFuse

Generated on 20 Nov 2025
from [the FlowFuse catalog page](https://marketplace.digitalocean.com/apps/flowfuse)

FlowFuse helps Node-RED developers deliver applications in a more reliable, collaborative and secure manner. Node-RED’s intuitive, low-code development environment is great for connecting together hardware devices, APIs and online services. FlowFuse adds to Node-RED, collaborative development, management of remote deployments, support for DevOps deliver pipelines and the ability to host Node-RED applications on FlowFuse Cloud. FlowFuse is the devops platform for Node-RED application development and delivery.

## Before you deploy your FlowForge Droplet

You will need a DNS domain on which to host your FlowForge Node-RED Projects, and be able to create a wildcard DNS entry pointing at the Droplet’s public IP address.

The Digital Ocean [DNS Quickstart](https://docs.digitalocean.com/products/networking/dns/quickstart/) will help you get started if you use Digital Ocean to manage your domain.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [FlowFuse](https://flowfuse.com/) | [2.24.0](https://github.com/FlowFuse/flowfuse/releases/tag/v2.24.0) | [Apache 2](https://github.com/flowfuse/flowfuse/blob/main/LICENSE) |
| Docker CE | [20.10.21](https://docs.docker.com/release-notes/docker-ce/) | [Apache 2](https://github.com/docker/docker/blob/master/LICENSE) |
| Docker Compose | [2.12.0](https://docs.docker.com/release-notes/docker-compose/) | [Apache 2](https://github.com/docker/compose/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=flowforge-flowfuse)

## Creating an App using the API

In addition to creating a Droplet from the FlowFuse 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB FlowFuse Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"flowforge-flowfuse"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying FlowFuse

Once the droplet has deployed please do the following:

- Setup a DNS wildcard entry for your domain to point to your\_droplet\_public\_ipv4
- ssh root@your\_droplet\_public\_ipv4

Once logged in you will be asked to enter your domain name, then enter 1 to confirm or 2 to enter the domain name again.

After entering your broker you can complete the setup by pointing your browser at:

- `https://forge.[your domain]/setup`

In this article...

- [Before you deploy your FlowForge Droplet](https://docs.digitalocean.com/products/marketplace/catalog/flowfuse/#before-you-deploy-your-flowforge-droplet)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/flowfuse/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/flowfuse/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/flowfuse/#creating-an-app-using-the-api)
- [Getting Started After Deploying FlowFuse](https://docs.digitalocean.com/products/marketplace/catalog/flowfuse/#getting-started-after-deploying-flowfuse)

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