---
url: "https://docs.digitalocean.com/products/marketplace/catalog/harperdb/"
title: "HarperDB | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/harperdb/)
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

- HarperDB

[Give Feedback](https://ideas.digitalocean.com/documentation)

# HarperDB

Generated on 10 Jul 2024
from [the HarperDB catalog page](https://marketplace.digitalocean.com/apps/harperdb)

## HarperDB Overview

HarperDB eliminates the complexity typically synonymous with distributed services by combining an ultra-fast document data store, in-memory cache, real-time message broker, and your application components into a single distributed technology. When clustered and geo-distributed, HarperDB nodes instantly synchronize data creating a real-time service fabric, ensuring low-latency in-region responses for clients worldwide. In addition to massive cost savings at scale, HarperDB’s REST, GraphQL, SQL, and real-time interfaces make light work of servicing frontend requirements. Install and manage on DigitalOcean, or have us host your services with HarperDB Cloud. For questions, reach us at [hello@harperdb.io](mailto:hello@harperdb.io).

Now with 150K+ deployments!

For pricing information, including free tier, please [check out our pricing page](https://www.harperdb.io/pricing).

[Learn more about HarperDB](https://harperdb.io/?utm_source=digitalocean&utm_medium=marketplace)

## HarperDB Studio

Every Installation of HarperDB can be administered online using HarperDB Studio. This web-based interface provides you the ability to set up new schemas and tables, configure users and roles, manage data replication, and purchase and deploy enterprise licenses.

- Simplify Administration – handle all HarperDB administration tasks from one simple interface

[HarperDB Studio](https://studio.harperdb.io/sign-up)

## HarperDB APIs

The preferred way to interact with HarperDB for typical querying, accessing, and updating data (CRUD) operations is through the REST interface, described in the REST documentation.

The complete [HarperDB Operations API documentation](https://docs.harperdb.io/docs/operations-api) provides important administrative functions. Generally it is recommended that use the [RESTful interface](https://docs.harperdb.io/docs/rest/) as your primary interface for scalable and performant data interaction for building production applications, and the operations API for administrative purposes.

## Documentation and Support

[Docs](https://docs.harperdb.io/)

[Support](https://harperdb.io/docs/support/)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [HarperDB](https://harperdb.io/) | 4.3.2 | Restricted |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=harperdb-18-04)

## Creating an App using the API

In addition to creating a Droplet from the HarperDB 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB HarperDB Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"harperdb-18-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying HarperDB

## Description

HarperDB is a globally-distributed edge application platform comprised of an edge database, streaming broker, and user-defined applications delivering near-zero latency, huge cost savings, and a superior developer experience.

## Getting Started

### Deploying a HarperDB Droplet

- When deploying your HarperDB Droplet, choose the _Add Volume_ option and then select _Manual Format & Mount_.

### Using Your HarperDB Droplet

- To use HarperDB, send POST requests to port 9925 (HTTPS) of your Droplet.
- Visit [HarperDB Studio](https://studio.harperdb.io/), and create an account if you do not already have one.
- Get Started: [https://harperdb.io/developers/get-started/](https://harperdb.io/developers/get-started/)
- API Documentation: [https://docs.harperdb.io/](https://docs.harperdb.io/)

### Additional Information

- A user account named _harperdb_ is created when your Droplet is deployed. This account is used to run HarperDB, and does not have sudo privileges.
- The password is randomly generated on creation. Credentials are stored in `/root/.harperdb`
- The additional block storage volume attached to your Droplet is used to store the HarperDB databases. Logical Volume Manager is used to create a logical volume on this block storage volume. If needed, expand the block storage volume and use Logical Volume Manager to expand the logical volume. See [Digital Ocean LVM Community Tutorial](https://www.digitalocean.com/community/tutorials/an-introduction-to-lvm-concepts-terminology-and-operations)
- The Droplet uses Uncomplicated Firewall (ufw); the following ports are enabled 9925 HarperDB HTTP, 9926 HarperDB HTTPS, 9932 HarperDB Clustering, and 22 SSH.
- It is recommended that you update HarperDB admin password.

In this article...

- [HarperDB Overview](https://docs.digitalocean.com/products/marketplace/catalog/harperdb/#harperdb-overview)
- [HarperDB Studio](https://docs.digitalocean.com/products/marketplace/catalog/harperdb/#harperdb-studio)
- [HarperDB APIs](https://docs.digitalocean.com/products/marketplace/catalog/harperdb/#harperdb-apis)
- [Documentation and Support](https://docs.digitalocean.com/products/marketplace/catalog/harperdb/#documentation-and-support)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/harperdb/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/harperdb/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/harperdb/#creating-an-app-using-the-api)
- [Getting Started After Deploying HarperDB](https://docs.digitalocean.com/products/marketplace/catalog/harperdb/#getting-started-after-deploying-harperdb)
- [Description](https://docs.digitalocean.com/products/marketplace/catalog/harperdb/#description)
- [Getting Started](https://docs.digitalocean.com/products/marketplace/catalog/harperdb/#getting-started)
  - [Deploying a HarperDB Droplet](https://docs.digitalocean.com/products/marketplace/catalog/harperdb/#deploying-a-harperdb-droplet)
  - [Using Your HarperDB Droplet](https://docs.digitalocean.com/products/marketplace/catalog/harperdb/#using-your-harperdb-droplet)
  - [Additional Information](https://docs.digitalocean.com/products/marketplace/catalog/harperdb/#additional-information)

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