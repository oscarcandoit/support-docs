---
url: "https://docs.digitalocean.com/products/marketplace/catalog/matrix-synapse-backend/"
title: "Matrix (Synapse backend) | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/matrix-synapse-backend/)
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

- Matrix (Synapse backend)

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Matrix (Synapse backend)

Generated on 26 Nov 2024
from [the Matrix (Synapse backend) catalog page](https://marketplace.digitalocean.com/apps/matrix-synapse-backend)

Matrix is a decentralized, federated chat platform built on open standards. This 1-Click App includes everything you need to self-host your own Matrix system.

This image contains a database (PostgreSQL), a matrix server (Synapse), a matrix web client (Element Web), and a reverse proxy (Caddy). After walking through the simple setup procedure, you will be able to login to your own Matrix web client and chat on the fediverse!

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Synapse | 1.120.0 | [AGPL3](https://github.com/element-hq/synapse/blob/develop/LICENSE) |
| Element Web | 1.11.86 | [AGPL3](https://github.com/element-hq/element-web/blob/develop/LICENSE-AGPL-3.0) |
| Caddy | 2.8.4 | [Apache License 2.0](https://github.com/caddyserver/caddy/blob/master/LICENSE) |
| PostgreSQL | 15 | [PostgreSQL License](https://www.postgresql.org/about/licence/) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=sharklabs-matrixsynapsebac-10)

## Creating an App using the API

In addition to creating a Droplet from the Matrix (Synapse backend) 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Matrix (Synapse backend) Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"sharklabs-matrixsynapsebac-10"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Matrix (Synapse backend)

## Hardware Requirements

Keep in mind when selecting a monthly plan that the more resources you can provide, the better the chat quality will be. 2GB+ RAM is highly recommended.

## Dependencies

- A new DNS domain you’d like to use exclusively for Matrix (it is recommended and also very cute to buy a .town, .space, or similar domain for this purpose)
- You must be capable of managing the DNS records for the domain you’d like to use
- openssh (or putty)
- 5 minutes

## Finishing Setup

1. Login to your droplet via `ssh root@your_droplet_public_ipv4`
2. Run `./finish-setup`
3. When directed, set up your DNS records
4. Read the operation guide `cat /root/README.txt`
5. ???
6. Profit!

## Upgrades

It is recommended to upgrade your system once a month.

Please watch out for security vulnerabilities: [https://matrix.org/blog/category/security](https://matrix.org/blog/category/security)

Upgrading is fairly straightforward:

```
# upgrade the OS, synapse, and caddy
apt update
apt upgrade
# upgrade element
./upgrade-element <version>
```

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/matrix-synapse-backend/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/matrix-synapse-backend/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/matrix-synapse-backend/#creating-an-app-using-the-api)
- [Getting Started After Deploying Matrix (Synapse backend)](https://docs.digitalocean.com/products/marketplace/catalog/matrix-synapse-backend/#getting-started-after-deploying-matrix-synapse-backend)
- [Hardware Requirements](https://docs.digitalocean.com/products/marketplace/catalog/matrix-synapse-backend/#hardware-requirements)
- [Dependencies](https://docs.digitalocean.com/products/marketplace/catalog/matrix-synapse-backend/#dependencies)
- [Finishing Setup](https://docs.digitalocean.com/products/marketplace/catalog/matrix-synapse-backend/#finishing-setup)
- [Upgrades](https://docs.digitalocean.com/products/marketplace/catalog/matrix-synapse-backend/#upgrades)

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