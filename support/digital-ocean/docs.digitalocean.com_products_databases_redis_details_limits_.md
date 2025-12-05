---
url: "https://docs.digitalocean.com/products/databases/redis/details/limits/"
title: "Caching Limits | DigitalOcean Documentation"
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

- [Details](https://docs.digitalocean.com/products/databases/redis/details/)
- Limits

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Caching Limits

Validated on 20 Aug 2019 • Last edited on 17 Jun 2025

Managed Caching is a database engine that supports Redis, an open source, key-value database built with an in-memory design that emphasizes speed. It supports rich data types, atomic operations, and Lua scripting.

## Managed Database Cluster Limits

- By default, you are limited to 10 clusters per account or team. If you reach this limit but need to create more database clusters, you can submit a request for a higher limit by clicking “Request Increase” on the window that shows when you attempt to create another cluster.

- You can only reduce additional storage if the new storage size is greater than or equal to the latest backup’s size plus any data growth since then and a 25% buffer.

- You cannot delete the default database and user.

- VPC networks are only available to resources, accounts, and teams in the same region as the VPC network.

- You cannot migrate databases from clusters inside of DigitalOcean to other clusters inside of DigitalOcean using the online migration feature.

- You can only deploy standby nodes in the same region as your database cluster.

- You cannot reconfigure or resize a cluster while upgrading it.

- You currently cannot add IPv6 rules to a database cluster’s trusted sources.


- By default, database clusters only support up to 2,000 IP addresses as trusted sources. Different types of resources add varying numbers of IP addresses to your cluster. For example, Droplets typically have two IP addresses, one public and one private, both of which count towards the 2,000-address maximum. To add more than 2,000 IP addresses, [contact support](https://cloudsupport.digitalocean.com/).

- When you restore from a backup, you must restore to a new node and re-add any read-only or standby nodes.


## Caching Limits

- DigitalOcean Managed Databases Caching clusters do not support the following features:
  - Query statistics
  - Read-only nodes
  - Cluster forking
  - Connection pooling
  - Backups and point-in-time recovery (PITR)
  - Current and long-running queries
- Caching database clusters do not support third-party clients to manage access control lists (ACLs).

- You cannot add users to Caching database clusters using the DigitalOcean Control Panel.

- The amount of available memory in Caching nodes is less than the total amount of RAM because some memory is reserved for the Caching service to function normally. [Learn more about Caching memory usage](https://docs.digitalocean.com/products/databases/redis/details/memory-usage/).

- Caching nodes can have up to either 10,000 simultaneous connections or 4 simultaneous connections per megabyte of memory, whichever is larger.

For example, a node with 1GiB (1024MB) of memory can have up to 10,000 simultaneous connections. A node with 4GiB (4096MB) of memory can have up to 4 \* 4096 = 16,384 simultaneous connections.

- You cannot create a standby node with the smallest node size (1GiB-RAM-1-vCPU).

- [Migrations](https://docs.digitalocean.com/products/databases/redis/how-to/migrate/) from AWS ElasticCache are not currently supported.

- On Caching, each CPU in your cluster can handle up to 200 new connections per second. Any additional connection attempts within the second fail and users must try again. To work around this limitation, we recommend using connection pooling in your client.

- We do not currently support migrating managed database clusters on DigitalOcean to other managed database clusters on DigitalOcean using continuous migration. For example, you cannot migrate a managed database cluster from one DigitalOcean account to another. However, you can migrate with a dump.

- Caching currently does not support the option to select a cluster’s storage size independently from its configuration plan.


## Restricted Commands

For performance and security, you cannot use any of the following commands:

- `bgrewriteaof`: Starts a background append-only file rewrite
- `cluster`: Manages different Caching cluster commands
- `command`: Provides more details about other Caching commands
- `debug`: Contains sub-commands for debugging Caching
- `failover`: Manages manual failover of a master to a replica
- `migrate`: Atomically transfers a key from a Caching instance to another one
- `role`: Returns the role of the instance in the context of replication
- `slaveof`: Makes the server a replica of another instance, or promotes it as main/master
- `acl`: Manages Caching Access Control Lists
- `bgsave`: Creates a snapshot of the dataset into a dump file
- `config`: Alters the configuration of a running Caching server
- `lastsave`: Returns the UNIX timestamp of the last successful save to disk
- `monitor`: Streams back every command processed by the Caching server
- `replicaof`: Makes the server a replica of another instance
- `save`: Synchronously saves the dataset to disk
- `shutdown`: Synchronously saves the dataset to disk and shuts down the server

The following eval commands are also restricted, but you can gain access to them by [contacting support](https://cloudsupport.digitalocean.com/):

- `eval`: Executes a Lua script server-side
- `eval_ro`: Read-only variant of the `eval` command
- `evalsha`: Executes a script cached on the server side by its SHA1 digest
- `evalsha_ro`: Read-only variant of the `evalsha` command
- `fcall`: Calls a Caching function
- `fcall_ro`: Read-only variant of the `fcall` command
- `function`: Manages Caching functions
- `script`: Manages the script cache

## Known Issues

### Managed Database Cluster Known Issues

- You can’t use DigitalOcean’s Cloud Firewalls with managed databases. Until support is available, you can restrict access to nodes by their incoming IPv4 addresses.

In this article...

- [Managed Database Cluster Limits](https://docs.digitalocean.com/products/databases/redis/details/limits/#managed-database-cluster-limits)
- [Caching Limits](https://docs.digitalocean.com/products/databases/redis/details/limits/#caching-limits)
- [Restricted Commands](https://docs.digitalocean.com/products/databases/redis/details/limits/#restricted-commands)
- [Known Issues](https://docs.digitalocean.com/products/databases/redis/details/limits/#known-issues)
  - [Managed Database Cluster Known Issues](https://docs.digitalocean.com/products/databases/redis/details/limits/#managed-database-cluster-known-issues)

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