---
url: "https://docs.digitalocean.com/products/databases/valkey/details/limits/"
title: "Valkey Limits | DigitalOcean Documentation"
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
- [Details](https://docs.digitalocean.com/products/databases/valkey/details/)
- Limits

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Valkey Limits

Validated on 24 Apr 2025 • Last edited on 17 Jul 2025

Valkey is a high-performance, open-source database that stores key-value data in memory, and is designed for caching, message queues, and primary database use. Fully compatible with Redis, Valkey serves as a drop-in replacement.

## Managed Database Cluster Limits

- By default, you are limited to 10 clusters per account or team. If you reach this limit but need to create more database clusters, you can submit a request for a higher limit by clicking “Request Increase” on the window that shows when you attempt to create another cluster.

- You can only reduce additional storage if the new storage size is greater than or equal to the latest backup’s size plus any data growth since then and a 25% buffer.

- You cannot delete the default database and user.

- VPC networks are only available to resources, accounts, and teams in the same region as the VPC network.

- You cannot migrate databases from clusters inside of DigitalOcean to other clusters inside of DigitalOcean using the online migration feature.

- You can only deploy standby nodes in the same region as your database cluster.

- You cannot reconfigure or resize a cluster while upgrading it.

- You currently cannot add IPv6 rules to a database cluster’s trusted sources.


## Valkey Limits

- DigitalOcean Managed Databases Valkey clusters do not support the following features:
  - Query statistics
  - Read-only nodes
  - Cluster forking
  - Connection pooling
  - Backups and point-in-time recovery (PITR)
  - Current and long-running queries
- Valkey database clusters do not support third-party clients to manage access control lists (ACLs).

- You cannot add users to Valkey database clusters using the DigitalOcean Control Panel.

- The amount of available memory in Valkey nodes is less than the total amount of RAM because some memory is reserved for the Valkey service to function normally. [Learn more about Valkey memory usage](https://docs.digitalocean.com/products/databases/redis/details/memory-usage/).

- Valkey nodes can have up to either 10,000 simultaneous connections or 4 simultaneous connections per megabyte of memory, whichever is larger.

For example, a node with 1GiB (1024MB) of memory can have up to 10,000 simultaneous connections. A node with 4GiB (4096MB) of memory can have up to 4 \* 4096 = 16,384 simultaneous connections.

- You cannot create a standby node with the smallest node size (1GiB-RAM-1-vCPU).

- [Migrations](https://docs.digitalocean.com/products/databases/redis/how-to/migrate/) from AWS ElasticCache are not currently supported.

- On Valkey, each CPU in your cluster can handle up to 200 new connections per second. Any additional connection attempts within the second fail and users must try again. To work around this limitation, we recommend using connection pooling in your client.

- We do not currently support migrating managed database clusters on DigitalOcean to other managed database clusters on DigitalOcean using continuous migration. For example, you cannot migrate a managed database cluster from one DigitalOcean account to another. However, you can migrate with a dump.

- Valkey currently does not support the option to select a cluster’s storage size independently from its configuration plan.


## Restricted Commands

For performance and security, you cannot use any of the following commands:

- `bgrewriteaof`: Starts a background append-only file rewrite
- `cluster`: Manages different Valkey cluster commands
- `command`: Provides more details about other Valkey commands
- `debug`: Contains sub-commands for debugging Valkey
- `failover`: Manages manual failover of a master to a replica
- `migrate`: Atomically transfers a key from a Valkey instance to another one
- `role`: Returns the role of the instance in the context of replication
- `slaveof`: Makes the server a replica of another instance, or promotes it as main/master
- `acl`: Manages Valkey Access Control Lists
- `bgsave`: Creates a snapshot of the dataset into a dump file
- `config`: Alters the configuration of a running Valkey server
- `lastsave`: Returns the UNIX timestamp of the last successful save to disk
- `monitor`: Streams back every command processed by the Valkey server
- `replicaof`: Makes the server a replica of another instance
- `save`: Synchronously saves the dataset to disk
- `shutdown`: Synchronously saves the dataset to disk and shuts down the server

The following eval commands are also restricted, but you can gain access to them by [contacting support](https://cloudsupport.digitalocean.com/):

- `eval`: Executes a Lua script server-side
- `eval_ro`: Read-only variant of the `eval` command
- `evalsha`: Executes a script cached on the server side by its SHA1 digest
- `evalsha_ro`: Read-only variant of the `evalsha` command
- `fcall`: Calls a Valkey function
- `fcall_ro`: Read-only variant of the `fcall` command
- `function`: Manages Valkey functions
- `script`: Manages the script cache

## Known Issues

### Managed Database Cluster Known Issues

- You can’t use DigitalOcean’s Cloud Firewalls with managed databases. Until support is available, you can restrict access to nodes by their incoming IPv4 addresses.

In this article...

- [Managed Database Cluster Limits](https://docs.digitalocean.com/products/databases/valkey/details/limits/#managed-database-cluster-limits)
- [Valkey Limits](https://docs.digitalocean.com/products/databases/valkey/details/limits/#valkey-limits)
- [Restricted Commands](https://docs.digitalocean.com/products/databases/valkey/details/limits/#restricted-commands)
- [Known Issues](https://docs.digitalocean.com/products/databases/valkey/details/limits/#known-issues)
  - [Managed Database Cluster Known Issues](https://docs.digitalocean.com/products/databases/valkey/details/limits/#managed-database-cluster-known-issues)

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