---
url: "https://docs.digitalocean.com/products/databases/redis/reference/"
title: "Caching Reference | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/redis.213385ebd06d3cd436657564821380f108a92109b568f05c3313d87fc0bc0c96.svg)Caching](https://docs.digitalocean.com/products/databases/redis/)
- [Getting Started](https://docs.digitalocean.com/products/databases/redis/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/redis/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/databases/redis/how-to/)
  - [Create Caching Clusters](https://docs.digitalocean.com/products/databases/redis/how-to/create/)
  - [Connect to Caching Clusters](https://docs.digitalocean.com/products/databases/redis/how-to/connect/)
  - [Secure Caching Clusters](https://docs.digitalocean.com/products/databases/redis/how-to/secure/)
  - [Migrate Caching Databases](https://docs.digitalocean.com/products/databases/redis/how-to/migrate/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/redis/how-to/schedule-updates/)
  - [Choose Eviction Policies](https://docs.digitalocean.com/products/databases/redis/how-to/choose-eviction-policies/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/redis/how-to/tag/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/redis/how-to/monitor-clusters/)
  - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/redis/how-to/add-standby-nodes/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/redis/how-to/set-up-alerts/)
  - [Relocate Database Clusters](https://docs.digitalocean.com/products/databases/redis/how-to/relocate/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/redis/how-to/resize/)
  - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/redis/how-to/destroy/)
  - [Monitor Caching Performance](https://docs.digitalocean.com/products/databases/redis/how-to/monitor-databases/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/redis/how-to/forward-logs/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/redis/how-to/reconfigure/)
- [Reference](https://docs.digitalocean.com/products/databases/redis/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/redis/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/redis/concepts/best-practices/)
  - [Migration Strategies](https://docs.digitalocean.com/products/databases/redis/concepts/migration-strategies/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/redis/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/redis/details/)
  - [Features](https://docs.digitalocean.com/products/databases/redis/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/redis/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/redis/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/redis/details/limits/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/redis/details/notifications/)
  - [Memory Usage](https://docs.digitalocean.com/products/databases/redis/details/memory-usage/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)
- [Support](https://docs.digitalocean.com/products/databases/redis/support/)

- Reference

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Caching Reference

Validated on 4 Jul 2021 • Last edited on 17 Jun 2025

Managed Caching is a database engine that supports Redis, an open source, key-value database built with an in-memory design that emphasizes speed. It supports rich data types, atomic operations, and Lua scripting.

The [DigitalOcean API](https://docs.digitalocean.com/reference/) lets you manage resources programmatically with standard HTTP requests. All actions available in the control panel are also available through the API.

By sending requests to the API’s `/v2/databases` endpoint, you can list, create, or delete database clusters as well as scale the size of a cluster, add or remove read-only replicas, and manage other configuration details. See the [API documentation on databases](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases) for more information.

### The DigitalOcean API

You can use the API to [manage database clusters, database pools, replicas, and users](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases).

### The DigitalOcean Command Line Client, doctl

[`doctl`](https://github.com/digitalocean/doctl) is the command-line interface for the DigitalOcean API. It supports most of the same actions available in the API and DigitalOcean Control Panel.

[`doctl`](https://github.com/digitalocean/doctl) supports managing database clusters, database pools, replicas, and users, and more from the command line. See the [`doctl` documentation](https://docs.digitalocean.com/reference/doctl/reference/registry/) or use `doctl databases --help` for more information.

## Official Redis Documentation

- The [Redis command reference](https://redis.io/commands)

- [Redis’s list of clients](https://redis.io/clients), including their official recommendations

- [Redis use cases](https://redislabs.com/redis-enterprise/use-cases/)

- [Redli’s GitHub repository](https://github.com/IBM-Cloud/redli)


In this article...

- [The DigitalOcean API](https://docs.digitalocean.com/products/databases/redis/reference/#the-digitalocean-api)
- [The DigitalOcean Command Line Client, doctl](https://docs.digitalocean.com/products/databases/redis/reference/#the-digitalocean-command-line-client-doctl)
- [Official Redis Documentation](https://docs.digitalocean.com/products/databases/redis/reference/#official-redis-documentation)

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