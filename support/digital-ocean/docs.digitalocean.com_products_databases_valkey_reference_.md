---
url: "https://docs.digitalocean.com/products/databases/valkey/reference/"
title: "Valkey Reference | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/valkey.f170106c44632502ecb41bfb74b6d22d99f94ad223afccd11be669fedac30b18.svg)Valkey](https://docs.digitalocean.com/products/databases/valkey/)
  - [Getting Started](https://docs.digitalocean.com/products/databases/valkey/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/databases/valkey/getting-started/quickstart/)
    - [Convert Caching to Valkey](https://docs.digitalocean.com/products/databases/valkey/getting-started/convert/)
  - [How-Tos](https://docs.digitalocean.com/products/databases/valkey/how-to/)
    - [Connect to Valkey Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/connect/)
    - [Secure Valkey Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/secure/)
    - [Migrate Valkey Databases](https://docs.digitalocean.com/products/databases/valkey/how-to/migrate/)
    - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/valkey/how-to/schedule-updates/)
    - [Choose Eviction Policies](https://docs.digitalocean.com/products/databases/valkey/how-to/choose-eviction-policies/)
    - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/tag/)
    - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/valkey/how-to/monitor-clusters/)
    - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/valkey/how-to/add-standby-nodes/)
    - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/valkey/how-to/set-up-alerts/)
    - [Relocate Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/relocate/)
    - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/resize/)
    - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/destroy/)
    - [Monitor Valkey Performance](https://docs.digitalocean.com/products/databases/valkey/how-to/monitor-databases/)
    - [Forward Logs](https://docs.digitalocean.com/products/databases/valkey/how-to/forward-logs/)
    - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/reconfigure/)
    - [Create Valkey Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/create/)
  - [Reference](https://docs.digitalocean.com/products/databases/valkey/reference/)
    - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
    - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
  - [Concepts](https://docs.digitalocean.com/products/databases/valkey/concepts/)
    - [Best Practices](https://docs.digitalocean.com/products/databases/valkey/concepts/best-practices/)
    - [Migration Strategies](https://docs.digitalocean.com/products/databases/valkey/concepts/migration-strategies/)
    - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/valkey/concepts/responsibility-model/)
  - [Details](https://docs.digitalocean.com/products/databases/valkey/details/)
    - [Features](https://docs.digitalocean.com/products/databases/valkey/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/databases/valkey/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/databases/valkey/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/databases/valkey/details/limits/)
    - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)

- [Valkey](https://docs.digitalocean.com/products/databases/valkey/)
- Reference

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Valkey Reference

Validated on 24 Apr 2025 • Last edited on 17 Jun 2025

Valkey is a high-performance, open-source database that stores key-value data in memory, and is designed for caching, message queues, and primary database use. Fully compatible with Redis, Valkey serves as a drop-in replacement.

The [DigitalOcean API](https://docs.digitalocean.com/reference/) lets you manage resources programmatically with standard HTTP requests. All actions available in the control panel are also available through the API.

By sending requests to the API’s `/v2/databases` endpoint, you can list, create, or delete database clusters as well as scale the size of a cluster, add or remove read-only replicas, and manage other configuration details. See the [API documentation on databases](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases) for more information.

### The DigitalOcean API

You can use the API to [manage database clusters, database pools, replicas, and users](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases).

### The DigitalOcean Command Line Client, doctl

[`doctl`](https://github.com/digitalocean/doctl) is the command-line interface for the DigitalOcean API. It supports most of the same actions available in the API and DigitalOcean Control Panel.

[`doctl`](https://github.com/digitalocean/doctl) supports managing database clusters, database pools, replicas, and users, and more from the command line. See the [`doctl` documentation](https://docs.digitalocean.com/reference/doctl/reference/registry/) or use `doctl databases --help` for more information.

## Official Valkey Documentation

- [Valkey documentation](https://valkey.io/docs/)

- The [Redis command reference](https://redis.io/commands)

- [Redis’s list of clients](https://redis.io/clients), including their official recommendations

- [Redis use cases](https://redislabs.com/redis-enterprise/use-cases/)

- [Redli’s GitHub repository](https://github.com/IBM-Cloud/redli)


In this article...

- [The DigitalOcean API](https://docs.digitalocean.com/products/databases/valkey/reference/#the-digitalocean-api)
- [The DigitalOcean Command Line Client, doctl](https://docs.digitalocean.com/products/databases/valkey/reference/#the-digitalocean-command-line-client-doctl)
- [Official Valkey Documentation](https://docs.digitalocean.com/products/databases/valkey/reference/#official-valkey-documentation)

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