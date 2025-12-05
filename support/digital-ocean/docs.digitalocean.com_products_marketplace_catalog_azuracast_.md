---
url: "https://docs.digitalocean.com/products/marketplace/catalog/azuracast/"
title: "AzuraCast | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/azuracast/)
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

- AzuraCast

[Give Feedback](https://ideas.digitalocean.com/documentation)

# AzuraCast

Generated on 14 Apr 2023
from [the AzuraCast catalog page](https://marketplace.digitalocean.com/apps/azuracast)

AzuraCast is a self-hosted, all-in-one web radio management suite. Using this AzuraCast 1-Click App and its powerful, intuitive web interface, you can start up a fully working web radio station in a few quick minutes. AzuraCast works for web radio stations of all types and sizes, and is built to run on even the most affordable cloud virtual machines.

### Simple, Self-Hosted Web Radio

With the AzuraCast 1-Click App, you can be up and running with a new self-hosted web radio station in record time. The AzuraCast 1-Click App configures the latest release build of AzuraCast on a Droplet, which includes Liquidsoap as an AutoDJ and Icecast as a broadcasting frontend, using the recommended Docker installation method.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| AzuraCast | [0.17.7](https://github.com/AzuraCast/AzuraCast/blob/master/CHANGELOG.md) | [Apache 2](https://github.com/AzuraCast/AzuraCast/blob/master/LICENSE.txt) |
| Liquidsoap | [2.1.0](https://github.com/savonet/liquidsoap/releases) | [GPL 2](https://github.com/savonet/liquidsoap/blob/master/COPYING) |
| Icecast-KH | [2.4.0-kh18](https://github.com/karlheyes/icecast-kh/releases) | [GPL 2](https://github.com/karlheyes/icecast-kh/blob/master/COPYING) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=azuracast-20-04)

## Creating an App using the API

In addition to creating a Droplet from the AzuraCast 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB AzuraCast Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"azuracast-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying AzuraCast

AzuraCast 1-Click droplets are ready to go out of the box. Visit your new droplet’s web interface at http://your\_droplet\_public\_ipv4 to finish setup by creating an administrator account and setting up your first station. You may need to wait a minute or two for services to be set up for the first time.

### HTTPS with LetsEncrypt

AzuraCast supports securing your connection with LetsEncrypt. You’ll find the LetsEncrypt settings inside the “System Settings” page in system administration.

### Updating

AzuraCast includes a web updater that can keep your installation up-to-date directly via your web browser. You can access the web updater from the System Administration.

In certain situations, you may need to manually update your installation or switch your release channel (by default, droplets are on our “Stable” release channel). To perform a manual update via SSH, follow our [update instructions](https://docs.azuracast.com/en/getting-started/updates).

In this article...

- [Simple, Self-Hosted Web Radio](https://docs.digitalocean.com/products/marketplace/catalog/azuracast/#simple-self-hosted-web-radio)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/azuracast/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/azuracast/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/azuracast/#creating-an-app-using-the-api)
- [Getting Started After Deploying AzuraCast](https://docs.digitalocean.com/products/marketplace/catalog/azuracast/#getting-started-after-deploying-azuracast)
- [HTTPS with LetsEncrypt](https://docs.digitalocean.com/products/marketplace/catalog/azuracast/#https-with-letsencrypt)
- [Updating](https://docs.digitalocean.com/products/marketplace/catalog/azuracast/#updating)

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