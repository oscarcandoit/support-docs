---
url: "https://docs.digitalocean.com/products/marketplace/catalog/onlyoffice-docspace/"
title: "ONLYOFFICE DocSpace | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/onlyoffice-docspace/)
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

- ONLYOFFICE DocSpace

[Give Feedback](https://ideas.digitalocean.com/documentation)

# ONLYOFFICE DocSpace

Generated on 10 Jun 2025
from [the ONLYOFFICE DocSpace catalog page](https://marketplace.digitalocean.com/apps/onlyoffice-docspace)

ONLYOFFICE DocSpace is a room-based platform designed to improve collaboration on office documents with various people you need to interact such as colleagues, teammates, customers, partners, contractors, etc.

The platform comes with the integrated online viewers and editors allowing you to work with any content, including text docs, digital forms, PDFs, sheets, presentations, e-books, and multimedia. By enabling the plugins, you can also work with draw.io diagrams and Markdown files.

DocSpace rooms come with the pre-set access level to ensure quick file sharing and avoid unnecessary repeated actions. Collaboration rooms are intended to co-author docs, track changes and communicate in real time. In Public rooms, external users can view documents without registration. Custom rooms are designed for any custom purpose, for example, to request document review or comments. Form Filling rooms allow collecting and analyzing responses. Virtual Data Rooms are used for advanced file security and transparency.

Ready-to-use integrations will complement user experience: collaborate on documents during Zoom Meetings; embed files and rooms into your WordPress or Drupal sites; automate workflow with Zapier; work with office files related to Pipedrive Deals in DocSpace rooms.

_This version of ONLYOFFICE DocSpace is a free community build._

**Upgrade to the enterprise version**

In case you are seeking for a scalable solution with professional support, you can opt for ONLYOFFICE DocSpace Enterprise.

[Click here to choose the plan that suits you best](https://www.onlyoffice.com/docspace-prices.aspx)

[Download ONLYOFFICE DocSpace Enterprise and start your free 30-day trial](https://www.onlyoffice.com/download.aspx#docspace-enterprise)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| ONLYOFFICE DocSpace | 3.1.1 | GNU AGPL v3.0 |
| ONLYOFFICE Document Server | 8.3.3.1 | GNU AGPL v3.0 |
| Docker CE | 28.2.2 | Apache 2 |
| MySQL | 8.3.0 | GNU GPL v.2 |
| RabbitMQ | 3 | MPL 2.0 |
| Redis | 7 | RSAL 2.0 |
| Opensearch | 2.18.0 | Apache 2 |
| Opensearch Dashboards | 2.18.0 | Apache 2 |
| Fluent Bit | 3.0.2 | Apache 2 |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=ascensiosystemsi-onlyofficedocspa)

## Creating an App using the API

In addition to creating a Droplet from the ONLYOFFICE DocSpace 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB ONLYOFFICE DocSpace Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"ascensiosystemsi-onlyofficedocspa"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying ONLYOFFICE DocSpace

After you create your ONLYOFFICE One-Click Droplet:

- Briefly visit the Droplet via SSH `ssh root@My_Droplet_IP` to finalize the configuration.
- Then visit `http://My\_Droplet\_IP` in the browser and launch your new ONLYOFFICE DocSpace.

For additional information on configuring, operating, and updating ONLYOFFICE DocSpace Community, please refer to the official [Help Center](https://helpcenter.onlyoffice.com/installation/docspace-community-index.aspx).

Support for the free community version is provided via the [User Forum](https://forum.onlyoffice.com/). If you need additional paid support, please [send your request](mailto:sales@onlyoffice.com).

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/onlyoffice-docspace/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/onlyoffice-docspace/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/onlyoffice-docspace/#creating-an-app-using-the-api)
- [Getting Started After Deploying ONLYOFFICE DocSpace](https://docs.digitalocean.com/products/marketplace/catalog/onlyoffice-docspace/#getting-started-after-deploying-onlyoffice-docspace)

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