---
url: "https://docs.digitalocean.com/products/marketplace/catalog/dbconvert-streams/"
title: "DBConvert Streams | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/dbconvert-streams/)
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

- DBConvert Streams

[Give Feedback](https://ideas.digitalocean.com/documentation)

# DBConvert Streams

Generated on 1 Apr 2025
from [the DBConvert Streams catalog page](https://marketplace.digitalocean.com/apps/dbconvert-streams)

- DBConvert Streams delivers powerful database migration and real-time replication with unmatched speed, synchronizing data between different database types in seconds rather than hours.

![dashboard](https://streams.dbconvert.com/images-optimized/screenshots/screenshot-start-1536.webp)

- Designed for simplicity, it allows you to set up complex data streams in minutes through an intuitive interface without writing a single line of code.

![monitoring and logs](https://streams.dbconvert.com/images-optimized/screenshots/screenshot-monitoring-1536.webp)

- With comprehensive REST API support, DBConvert Streams seamlessly integrates with your existing workflows, enabling reliable data connections between MySQL, PostgreSQL, and cloud-managed databases.


![monitoring and logs](https://streams.dbconvert.com/images-optimized/screenshots/screenshot-monitoring-1536.webp)

- The platform democratizes data integration with professional-grade capabilities in an approachable package that doesn’t require specialized expertise or substantial investment.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [DBConvert Streams](https://streams.dbconvert.com/) | 1.1.0 | Proprietary |
| [Docker](https://www.docker.com/) | Latest | Apache 2.0 |
| [Docker Compose](https://docs.docker.com/compose/) | 2.33.1 | Apache 2.0 |
| [UFW](https://wiki.ubuntu.com/UncomplicatedFirewall) | 0.36.2 | GPL v2 |
| [NATS](https://nats.io/) | 2.10.26 | Apache 2.0 |
| [HashiCorp Consul](https://www.consul.io/) | 1.20.4 | Mozilla Public License 2.0 |
| [HashiCorp Vault](https://www.vaultproject.io/) | Latest | Mozilla Public License 2.0 |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=slotixsro-dbconvertstreams)

## Creating an App using the API

In addition to creating a Droplet from the DBConvert Streams 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB DBConvert Streams Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"slotixsro-dbconvertstreams"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying DBConvert Streams

## Getting Started with DBConvert Streams

## Initial Setup Required

After creating your droplet, follow these steps to complete the setup:

1. **Connect via SSH**:

```
   ssh root@your_droplet_public_ipv4
```

2. **Navigate to installation directory**:

```
   cd /opt/dbconvert-streams-docker
```

3. **Configure firewall** to open required ports:

```
   ./configure_firewall.sh
```

4. **Start the services**:

```
   ./start.sh
```

5. **Access the web interface** by opening in your browser:

```
   http://your_droplet_public_ipv4
```

You’ll be prompted to enter your API key from [https://streams.dbconvert.com/account](https://streams.dbconvert.com/account)

Once completed, you can begin creating database connections and configuring your data streams through the web dashboard.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/dbconvert-streams/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/dbconvert-streams/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/dbconvert-streams/#creating-an-app-using-the-api)
- [Getting Started After Deploying DBConvert Streams](https://docs.digitalocean.com/products/marketplace/catalog/dbconvert-streams/#getting-started-after-deploying-dbconvert-streams)
- [Getting Started with DBConvert Streams](https://docs.digitalocean.com/products/marketplace/catalog/dbconvert-streams/#getting-started-with-dbconvert-streams)
- [Initial Setup Required](https://docs.digitalocean.com/products/marketplace/catalog/dbconvert-streams/#initial-setup-required)

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