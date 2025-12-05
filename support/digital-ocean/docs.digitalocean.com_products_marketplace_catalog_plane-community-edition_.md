---
url: "https://docs.digitalocean.com/products/marketplace/catalog/plane-community-edition/"
title: "Plane (Community Edition) | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/plane-community-edition/)
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

- Plane (Community Edition)

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Plane (Community Edition)

Generated on 28 Oct 2025
from [the Plane (Community Edition) catalog page](https://marketplace.digitalocean.com/apps/plane-community-edition)

We’re excited to offer the Plane.so Community Edition as a DigitalOcean Droplet. This pre-configured image allows you to easily set up and deploy Plane.so on your own DigitalOcean account. With just a few clicks, you can have Plane.so Community Edition up and running, ready to help you manage your projects efficiently.

Features:

- Easy Setup: No complicated configurations needed. Simply select the Plane.so image and deploy.
- Pre-configured: Comes with all necessary dependencies and optimizations for smooth performance.
- Scalable: Built to handle your growing project management needs.
- Community Edition: Enjoy the core features of Plane.so, designed for community collaboration and productivity.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Postgresql | 15.7 | MIT |
| MinIO | RELEASE.2025-07-23T15-54-02Z | GNU Affero GPL |
| Valkey | 7.2.5 | BSD 3-Clause |
| RabbitMQ | 3.13.6 | MIT |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=planesoftware-planecommunityed)

## Creating an App using the API

In addition to creating a Droplet from the Plane (Community Edition) 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Plane (Community Edition) Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"planesoftware-planecommunityed"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Plane (Community Edition)

## Default Settings

- Plane installation is available in `/plane` folder.
- `/plane/setup.sh` is the command to be used to manage the environment.

## Configure Domain

Login to the droplet terminal, and edit `/plane/plane-app/plane.env` using your preferred editor for `APP_DOMAIN`. Change `localhost` to the domain you plan to host this app on. eg. `plane.example.com`

Now restart the Plane services using `/plane/setup.sh restart`

## Configure SSL

> Your DNS configuration must point to public ip of droplet

To configure SSL, edit the file `/plane/plane-app/plane.env`. Change `SITE_ADDRESS=:80` to `SITE_ADDRESS=&amp;lt;app-domain&amp;gt;` e.g `SITE_ADDRESS=plane.example.com`

Restart Plane using `/plane/setup.sh restart`. This will take couple of minutes before the server is UP and Running with SSL certificate.

If all goes well, you should be able to access Plane on `https://plane.example.com`

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/plane-community-edition/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/plane-community-edition/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/plane-community-edition/#creating-an-app-using-the-api)
- [Getting Started After Deploying Plane (Community Edition)](https://docs.digitalocean.com/products/marketplace/catalog/plane-community-edition/#getting-started-after-deploying-plane-community-edition)
- [Default Settings](https://docs.digitalocean.com/products/marketplace/catalog/plane-community-edition/#default-settings)
- [Configure Domain](https://docs.digitalocean.com/products/marketplace/catalog/plane-community-edition/#configure-domain)
- [Configure SSL](https://docs.digitalocean.com/products/marketplace/catalog/plane-community-edition/#configure-ssl)

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