---
url: "https://docs.digitalocean.com/products/databases/redis/"
title: "Caching | DigitalOcean Documentation"
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

- Caching

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Caching

Generated on 25 Nov 2025

Managed Caching is a database engine that supports Redis, an open source, key-value database built with an in-memory design that emphasizes speed. It supports rich data types, atomic operations, and Lua scripting.

Most Viewed Caching Articles

01. [How do I fix the "Connection Timed Out" error when connecting to my database?](https://docs.digitalocean.com/support/how-do-i-fix-the-connection-timed-out-error-when-connecting-to-my-database/ "Add your machine to the database cluster's list of trusted sources in the firewall settings.")
02. [How do I fix the "Connection Refused" error when connecting to my database?](https://docs.digitalocean.com/support/how-do-i-fix-the-connection-refused-error-when-connecting-to-my-database/ "Verify the connection string, ensure correct port usage, and add your local machine to the database cluster's trusted sources.")
03. [How to Create Caching Database Clusters](https://docs.digitalocean.com/products/databases/redis/how-to/create/ "Create a Caching database cluster from the DigitalOcean Control Panel.")
04. [Caching Pricing](https://docs.digitalocean.com/products/databases/redis/details/pricing/ "Pricing information for Caching database clusters.")
05. [How do I fix the "Invalid Parameters and Values" error when connecting to my database?](https://docs.digitalocean.com/support/how-do-i-fix-the-invalid-parameters-and-values-error-when-connecting-to-my-database/ "Verify the format and values in the connection string for typos or formatting errors.")
06. [Why is my cluster rebalancing/resizing?](https://docs.digitalocean.com/support/why-is-my-cluster-rebalancing/resizing/ "We are currently processing the cluster, most likely for maintenance. You can expect no downtime or performance issues.")
07. [Memory Usage for Caching Database Clusters](https://docs.digitalocean.com/products/databases/redis/details/memory-usage/ "Caching database clusters reserve some memory for overhead to handle cluster operations, like backups and replication. Optimize Caching memory usage with cluster-level settings, like eviction policies, and application-level settings, like minimizing writes.")
08. [How to Resize Caching Database Clusters](https://docs.digitalocean.com/products/databases/redis/how-to/resize/ "Increase the size of your database cluster to accommodate your data needs.")
09. [Caching Concepts](https://docs.digitalocean.com/products/databases/redis/concepts/ "Explanations and definitions of core concepts in Caching.")
10. [Caching Limits](https://docs.digitalocean.com/products/databases/redis/details/limits/ "Limits and known issues for Caching database clusters.")

![](https://docs.digitalocean.com/images/icons/redis.svg)

Getting Started

Quickstarts and intermediate tutorials to get started.

![](https://docs.digitalocean.com/images/icons/redis.svg)

How-Tos

Guides on how to get started with Caching managed database clusters, how to modify users and databases, how to improve performance and high availability, and how to migrate data.

![](https://docs.digitalocean.com/images/icons/redis.svg)

Reference

API and CLI reference documentation for the Caching database service, including example requests and available parameters.

![](https://docs.digitalocean.com/images/icons/redis.svg)

Concepts

Explanations and definitions of core concepts in Caching.

![](https://docs.digitalocean.com/images/icons/redis.svg)

Details

Features, plans and pricing, availability, limits, known issues, and more.

![](https://docs.digitalocean.com/images/icons/redis.svg)

Support

Get help with technical support and answers to frequently asked questions.

## Latest Updates

### Upcoming Changes

- [DigitalOcean Managed Caching](https://docs.digitalocean.com/products/databases/redis/) is being discontinued on 30 June 2025.

To replace Managed Caching, we are offering [Managed Valkey](https://docs.digitalocean.com/products/databases/valkey/), a Redis-compatible alternative with RDMA and higher throughput. All existing Managed Caching clusters automatically convert to Valkey clusters by 30 June 2025 during your [upgrade window](https://docs.digitalocean.com/products/databases/redis/how-to/schedule-updates/), retaining all data.


### 1 July 2025

- The DOKS database operator, which facilitated integration of DOKS clusters with managed databases, is deprecated. Your existing databases remain operational and the [operator-related CRDs](https://github.com/digitalocean/do-operator/tree/main/docs/databases) are not removed. You can use the DigitalOcean API, CLI, or control panel to manage the databases created with the operator.


### 7 May 2025

- You can now [manually convert your Caching cluster to a Valkey cluster](https://docs.digitalocean.com/products/databases/valkey/getting-started/convert/). All Caching clusters automatically convert to Valkey clusters by the [Managed Caching discontinuation date](https://docs.digitalocean.com/release-notes/caching/).


### 30 April 2025

- The creation of new DigitalOcean Managed Caching clusters is disabled for all users except those with an existing Caching cluster.


For more information, see [all Caching release notes](https://docs.digitalocean.com/release-notes/caching/).

In this article...

[Caching](https://docs.digitalocean.com/products/databases/redis/)

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