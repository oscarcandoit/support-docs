---
url: "https://docs.digitalocean.com/products/marketplace/catalog/questdb/"
title: "QuestDB | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/questdb/)
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

- QuestDB

[Give Feedback](https://ideas.digitalocean.com/documentation)

# QuestDB

Generated on 6 Feb 2025
from [the QuestDB catalog page](https://marketplace.digitalocean.com/apps/questdb)

QuestDB is a high-performance, open-source SQL database for applications in financial services, IoT, machine learning, DevOps and observability. It includes endpoints for PostgreSQL wire protocol, high-throughput schema-agnostic ingestion using InfluxDB Line Protocol, and a REST API for queries, bulk imports, and exports.

## Software Included

_This Marketplace listing does not include a detailed software list._

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=questdb-20-04)

## Creating an App using the API

In addition to creating a Droplet from the QuestDB 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB QuestDB Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"questdb-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying QuestDB

In addition to QuestDB installation, One-Click image enables the [Ubuntu firewall](https://help.ubuntu.com/community/UFW) limiting the opened ports by default to:

- `22` for SSH access
- `9009` \- InfluxDB line protocol (TCP and UDP)
- `9000/tcp` \- Web Console & REST API
- `8812/tcp` \- PostgreSQL wire protocol
- `9003/tcp` \- Health monitoring & Prometheus `/metrics`

The QuestDB [Web Console](https://questdb.io/docs/reference/web-console) is available at `your_droplet_public_ipv4:9000`

Once the Droplet is created, you can use DigitalOcean’s web console to start a session or you can SSH directly to the server as root:

```
ssh root@your_droplet_public_ipv4
```

The server configuration for QuestDB is located in `/home/questdb/server.conf` and the following parameters may be used to further secure an instance:

- HTTP access can be set to readonly using `http.security.readonly`
- HTTP access can be **fully disabled** using `http.enabled`
- Default postgres credentials can be set using `pg.user` and `pg.password`

The following example `server.conf` file creates new database credentials for Postgres connections and sets HTTP access to read-only:

```
http.security.readonly=true
pg.password=my_password
pg.user=my_user
```

For more information on settings, see the [server configuration documentation](https://questdb.io/docs/reference/configuration).

## Using UFW and firewalls

It’s recommended to disable ports for protocols which are not needed. Aside from [QuestDB server configuration](https://questdb.io/docs/reference/configuration#keys-and-default-values), `ufw` can be used to easily disable access for specific ports, for example to disable the Web Console and REST API access via `ufw`, the following command can be run in the Droplet as root:

```
ufw deny 9000
```

It’s also recommended to use [DigitalOcean firewall rules](https://cloud.digitalocean.com/networking/firewalls) which enable public access for these protocols by whitelisted IP only.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/questdb/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/questdb/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/questdb/#creating-an-app-using-the-api)
- [Getting Started After Deploying QuestDB](https://docs.digitalocean.com/products/marketplace/catalog/questdb/#getting-started-after-deploying-questdb)
- [Using UFW and firewalls](https://docs.digitalocean.com/products/marketplace/catalog/questdb/#using-ufw-and-firewalls)

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