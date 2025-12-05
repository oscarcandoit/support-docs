---
url: "https://docs.digitalocean.com/products/marketplace/catalog/percona-monitoring-and-management/"
title: "Percona Monitoring and Management | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/percona-monitoring-and-management/)
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

- Percona Monitoring and Management

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Percona Monitoring and Management

Generated on 30 Jun 2025
from [the Percona Monitoring and Management catalog page](https://marketplace.digitalocean.com/apps/percona-monitoring-and-management)

## Percona Monitoring and Management (PMM) is an open source database observability, monitoring, and management platform that gives you a single view of performance metrics - from entire database clusters down to individual queries.

Key features:

- Complete visibility of MySQL, PostgreSQL, and MongoDB performance
- Unified dashboard for all your database metrics and query analytics
- Flexible deployment options: on-premises, cloud, or hybrid environments
- Easy setup with just two components: Server and Client

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Percona Monitoring and Management](https://docs.percona.com/percona-monitoring-and-management/3/index.html) | [3](https://docs.percona.com/percona-monitoring-and-management/3/release-notes/index.html) | Creative Commons Attribution 4.0 International License |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=sharklabs-perconamonitorin)

## Creating an App using the API

In addition to creating a Droplet from the Percona Monitoring and Management 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Percona Monitoring and Management Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"sharklabs-perconamonitorin"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Percona Monitoring and Management

Log in to the PMM web interface at `https://your_droplet_public_ipv4/` with the username `admin` and the password `admin`. You will be prompted to set a different password.

Start monitoring remote MySQL, PostgreSQL or MongoDB instances by navigating to the PMM Add Instance dashboard using the PMM button near the top right of the Home dashboard.

Optionally, you can log in to your PMM droplet with SSH using:

`ssh admin@your_droplet_public_ipv4`

You can allow additional SSH public keys to authenticate to your PMM Droplet from the PMM Settings dashboard within PMM.

The easiest way to add your DigitalOcean MySQL database clusters to PMM is to run the helper script:

`python3 /root/pmm-do.py`

The script will walk you through monitoring some or all of your MySQL instances with Percona Monitoring and Management.

In this article...

- [Percona Monitoring and Management (PMM) is an open source database observability, monitoring, and management platform that gives you a single view of performance metrics - from entire database clusters down to individual queries.](https://docs.digitalocean.com/products/marketplace/catalog/percona-monitoring-and-management/#percona-monitoring-and-management-pmm-is-an-open-source-database-observability-monitoring-and-management-platform-that-gives-you-a-single-view-of-performance-metrics---from-entire-database-clusters-down-to-individual-queries)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/percona-monitoring-and-management/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/percona-monitoring-and-management/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/percona-monitoring-and-management/#creating-an-app-using-the-api)
- [Getting Started After Deploying Percona Monitoring and Management](https://docs.digitalocean.com/products/marketplace/catalog/percona-monitoring-and-management/#getting-started-after-deploying-percona-monitoring-and-management)

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