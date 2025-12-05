---
url: "https://docs.digitalocean.com/products/marketplace/catalog/flexify-io-multi-cloud-migration/"
title: "Flexify.IO Multi-cloud / Migration | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/flexify-io-multi-cloud-migration/)
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

- Flexify.IO Multi-cloud / Migration

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Flexify.IO Multi-cloud / Migration

Generated on 9 Jun 2025
from [the Flexify.IO Multi-cloud / Migration catalog page](https://marketplace.digitalocean.com/apps/flexify-io-multi-cloud-migration)

Flexify.IO helps companies realize their multi-cloud strategy by creating a cloud-agnostic storage layer on top of multiple cloud or private storages, enabling flexible data migration and virtualization across clouds.

### Cloud Data Migration

Copy or move large amounts of data from Amazon S3, Azure Blob Storage, Backblaze B2, Google Cloud or other S3-compatible storage to DigitalOcean Spaces, ensuring maximum throughput, handling errors and completely eliminating downtime.

### On-premise-to-cloud Migration

Migrate data from legacy storage by configuring Minio to expose your files via S3 and adding it to Flexify.IO as an S3-compatible storage.

### Multi-Cloud Storage

Split or replicate your data between multiple clouds. Flexify.IO merges the data and presents it to your application as a single S3-compatible virtual bucket, thus making objects migrations transparent for your users and applications.

### SaaS or Private Hosting

Flexify.IO is available as a cloud service or can be self-hosted privately in your own cloud on DigitalOcean for extra security.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Flexify.IO Community Edition | [2.21.0](https://flexify.io/releases/2.21.0/) | [Custom](https://flexify.io/license/) |
| Docker CE | [28.2.2](https://docs.docker.com/release-notes/docker-ce/) | [Apache 2](https://github.com/docker/docker/blob/master/LICENSE) |
| MariaDB | [10.8.8](https://mariadb.com/kb/en/release-notes-mariadb-103-series/) | [GPL v2](https://mariadb.com/kb/en/mariadb-license/) |
| [Eclipse Temurin JRE](https://adoptium.net/temurin/releases/) | [21.0.7](https://adoptium.net/temurin/release-notes/?version=jdk-21.0.1+12) | [EPL v 2.0](https://www.eclipse.org/legal/epl-2.0/) |
| NGINX | [1.27.5](http://nginx.org/en/CHANGES) | [Custom](https://github.com/nginx/nginx/blob/master/docs/text/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=flexifyio-flexifyiomulticl-20-04)

## Creating an App using the API

In addition to creating a Droplet from the Flexify.IO Multi-cloud / Migration 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Flexify.IO Multi-cloud / Migration Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"flexifyio-flexifyiomulticl-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Flexify.IO Multi-cloud / Migration

After the Droplet with Flexify.IO starts:

- Open Droplet’s IP address in a browser.
- Wait for the Create Account page to appear (be patient, it make take a few minutes depending on your Droplet size). If the Create Account page does not appear, make sure your Droplet has at least 2 GB RAM.
- Type a email address and password that you will later use to sign in (the email remains on your Droplet, we will not check or see it).
- Go to Data tab and add your Spaces, Amazon S3, Microsoft Azure and other supported storages.
- Click Transfer Data to configure and start a migration.
- Attach storage account to a virtual endpoint to configure your Droplet as S3-compatible storage gateway/proxy.

In this article...

- [Cloud Data Migration](https://docs.digitalocean.com/products/marketplace/catalog/flexify-io-multi-cloud-migration/#cloud-data-migration)
- [On-premise-to-cloud Migration](https://docs.digitalocean.com/products/marketplace/catalog/flexify-io-multi-cloud-migration/#on-premise-to-cloud-migration)
- [Multi-Cloud Storage](https://docs.digitalocean.com/products/marketplace/catalog/flexify-io-multi-cloud-migration/#multi-cloud-storage)
- [SaaS or Private Hosting](https://docs.digitalocean.com/products/marketplace/catalog/flexify-io-multi-cloud-migration/#saas-or-private-hosting)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/flexify-io-multi-cloud-migration/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/flexify-io-multi-cloud-migration/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/flexify-io-multi-cloud-migration/#creating-an-app-using-the-api)
- [Getting Started After Deploying Flexify.IO Multi-cloud / Migration](https://docs.digitalocean.com/products/marketplace/catalog/flexify-io-multi-cloud-migration/#getting-started-after-deploying-flexifyio-multi-cloud--migration)

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