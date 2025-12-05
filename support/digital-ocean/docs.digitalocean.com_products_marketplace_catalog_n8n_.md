---
url: "https://docs.digitalocean.com/products/marketplace/catalog/n8n/"
title: "n8n | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/n8n/)
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

- n8n

[Give Feedback](https://ideas.digitalocean.com/documentation)

# n8n

Generated on 12 Sep 2025
from [the n8n catalog page](https://marketplace.digitalocean.com/apps/n8n)

n8n is a flexible workflow automation tool that lets you connect and automate tasks between your favorite apps, services, and APIs.

With this 1-Click App, you can quickly set up n8n on a secure and scalable DigitalOcean droplet, saving time and eliminating complex installation steps.

Build powerful, customized workflows using an intuitive, visual interface, enabling seamless integrations tailored to your needs.

Empower your business with efficient automation and free up resources for what matters most.

![](https://automaze.me/wp-content/uploads/2024/11/n8n-screenshot-complex-workflow.png)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [n8n](https://n8n.io/) | 1.110.1 | [Sustainable Use License](https://docs.n8n.io/sustainable-use-license/) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=automazeme-n8n)

## Creating an App using the API

In addition to creating a Droplet from the n8n 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB n8n Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"automazeme-n8n"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying n8n

## Setup

- set up a new A-type DNS entry for a subdomain pointing to your\_droplet\_public\_ipv4. Default subdomain to use is n8n. So if your domain is “mycompany.com”, you would add a new DNS entry for “n8n.mycompany.com”. If your domain is hosted with DigitalOcean, see [these instructions](https://docs.digitalocean.com/products/networking/dns/how-to/add-subdomain/) for how it’s done. **Note**: after setting up the subdomain DNS entry, it can take a few minutes before it becomes active.
- connect to your droplet using SSH or by clicking on the “Console” button in the droplet view.
- follow the setup steps in the console.
- connect to your brand new n8n server using the subdomain you created, e.g. “ [https://n8n.mycompany.com](https://n8n.mycompany.com/)”

The 1-click-app will always install the latest stable version of n8n.

## Upgrading n8n

To upgrade n8n after initially setting up the droplet:

- log in to your droplet console, e.g., from the DigitalOcean control panel
- navigate to the n8n docker compose folder: cd /opt/n8n-docker-caddy
- Execute these commands:

## Pull latest version

`docker compose pull`

## Stop and remove older version

`docker compose down`

## Start the container

`docker compose up -d`

This will update the n8n version to the latest stable release on your Droplet.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/n8n/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/n8n/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/n8n/#creating-an-app-using-the-api)
- [Getting Started After Deploying n8n](https://docs.digitalocean.com/products/marketplace/catalog/n8n/#getting-started-after-deploying-n8n)
- [Setup](https://docs.digitalocean.com/products/marketplace/catalog/n8n/#setup)
- [Upgrading n8n](https://docs.digitalocean.com/products/marketplace/catalog/n8n/#upgrading-n8n)
- [Pull latest version](https://docs.digitalocean.com/products/marketplace/catalog/n8n/#pull-latest-version)
- [Stop and remove older version](https://docs.digitalocean.com/products/marketplace/catalog/n8n/#stop-and-remove-older-version)
- [Start the container](https://docs.digitalocean.com/products/marketplace/catalog/n8n/#start-the-container)

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