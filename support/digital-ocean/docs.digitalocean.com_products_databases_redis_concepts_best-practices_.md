---
url: "https://docs.digitalocean.com/products/databases/redis/concepts/best-practices/"
title: "Best Practices | DigitalOcean Documentation"
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

- [Concepts](https://docs.digitalocean.com/products/databases/redis/concepts/)
- Best Practices

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Best Practices

Validated on 13 Jul 2022 • Last edited on 17 Jun 2025

Managed Caching is a database engine that supports Redis, an open source, key-value database built with an in-memory design that emphasizes speed. It supports rich data types, atomic operations, and Lua scripting.

## Use VPCs

We recommend you make full use of your DigitalOcean VPC networks to improve security, facilitate connection management, and mitigate trusted source limits. To do this, add the CIDR address of a database’s VPC network to its trusted sources. This functionally adds all other resources you have in the same VPC network to the database’s trusted sources using only one address towards the limit, as long as they connect via the private connection string, instead of the public one. The CIDR address also only counts as one trusted source IP against the 100-IP limit.

First, go to the [control panel](https://cloud.digitalocean.com/databases) and click your database. In its **Overview** tab, find the **VPC Network** section, which details the VPC’s name (such as `default-nyc3`) and its address (such as `10.108.0.0/20`). Copy the VPC’s address with its netmask to your clipboard. For example, copy `10.108.0.0/20`.

![Copy the VPC address.](https://docs.digitalocean.com/screenshots/databases/vpc-address.dcbc3e7ffb345b1b100e0a9c148278aab48799568a87d592fa1b3c1b3001d319.png)

Then, click the **Settings** tab. Find the **Trusted Sources** section and click **Edit** to the right of it. Paste the VPC’s address without the netmask and press Enter. Click **Save** to confirm your change.

![Add a trusted source.](https://docs.digitalocean.com/screenshots/databases/trusted-sources.d160aa387bd895e79d0b13cfc701007609f7df56fa3f973f3727e317616a71d9.png)Warning
You currently cannot add IPv6 rules to a database cluster’s trusted sources.

Now, all other resources in that same VPC network can connect to the database by using the private connection string, instead of the public one. You can find the private connection string in the database’s **Overview** tab. Under **Connection Details** select **VPC Network**, then click the drop-down menu reading **Connection Parameters** and select **Connection String**.

![View the private connection string.](https://docs.digitalocean.com/screenshots/databases/private-connection-string.d1ffed0237b69c0a8aaaa3bf009edb03b65ec31132d353a1a399084efc959c77.png)

For improved security, we recommend you use this private connection string whenever possible and minimize the number of public connections to the database.

To establish secure, centralized connections between resources in different VPCs or platforms, you can use a proxy server; for example, [Redis Cluster Proxy](https://github.com/RedisLabs/redis-cluster-proxy) or [HAProxy](http://www.haproxy.org/).

## Add Standby Nodes

Standby nodes maintain a copy of a database cluster’s primary node. If the primary node fails, a standby node is automatically promoted to replace it. Additionally, standby nodes can direct routing for read traffic.

To add standby nodes, see [How to Add Standby Nodes](https://docs.digitalocean.com/products/databases/redis/how-to/add-standby-nodes/).

In this article...

- [Use VPCs](https://docs.digitalocean.com/products/databases/redis/concepts/best-practices/#use-vpcs)
- [Add Standby Nodes](https://docs.digitalocean.com/products/databases/redis/concepts/best-practices/#add-standby-nodes)

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