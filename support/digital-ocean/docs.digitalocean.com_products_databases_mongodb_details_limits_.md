---
url: "https://docs.digitalocean.com/products/databases/mongodb/details/limits/"
title: "MongoDB Limits | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/mongodb.15f32316da2692011abce02f393a1ee6db469250230cf1ea962c181c0e9e7de5.svg)MongoDB](https://docs.digitalocean.com/products/databases/mongodb/)
- [Getting Started](https://docs.digitalocean.com/products/databases/mongodb/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/mongodb/getting-started/quickstart/)
  - [Serverless Jamstack Site](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/)
- [How-Tos](https://docs.digitalocean.com/products/databases/mongodb/how-to/)
  - [Create MongoDB Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/create/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/)
  - [Connect to MongoDB Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/connect/)
  - [Import MongoDB Data](https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/)
  - [Secure MongoDB Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/secure/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/mongodb/how-to/schedule-updates/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/tag/)
  - [Manage Users and Databases](https://docs.digitalocean.com/products/databases/mongodb/how-to/manage-users-and-databases/)
  - [Upgrade Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/upgrade/)
  - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/mongodb/how-to/add-standby-nodes/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/mongodb/how-to/monitor-clusters/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/mongodb/how-to/forward-logs/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/mongodb/how-to/set-up-alerts/)
  - [Fork Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/fork-clusters/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/reconfigure/)
  - [Restore from Backups](https://docs.digitalocean.com/products/databases/mongodb/how-to/restore-from-backups/)
  - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/destroy/)
- [Reference](https://docs.digitalocean.com/products/databases/mongodb/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/mongodb/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/mongodb/concepts/best-practices/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/mongodb/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/mongodb/details/)
  - [Features](https://docs.digitalocean.com/products/databases/mongodb/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/mongodb/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/mongodb/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/mongodb/details/limits/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/mongodb/details/notifications/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)
- [Support](https://docs.digitalocean.com/products/databases/mongodb/support/)

- [Details](https://docs.digitalocean.com/products/databases/mongodb/details/)
- Limits

[Give Feedback](https://ideas.digitalocean.com/documentation)

# MongoDB Limits

Validated on 18 Mar 2024 • Last edited on 17 Jul 2025

MongoDB is a source-available cross-platform document-oriented database program for high-volume storage. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

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

- Point-in-time-recovery (PITR) is limited to the last 7 days.

- When you restore from a backup, you must restore to a new node and re-add any read-only or standby nodes. See [How to Restore from Backups](https://docs.digitalocean.com/products/databases/mongodb/how-to/restore-from-backups/) for details.

- New users receive the permissions of the `doadmin` user by default. You can’t change these permissions at this time. However, you can create a read-write or read-only user using the DigitalOcean API. Currently, you cannot create read-write or read-only users via the [DigitalOcean Control Panel](https://cloud.digitalocean.com/).


## MongoDB Limits

- Each cluster is limited to 3 nodes.

- We only support MongoDB versions 6.0, 7.0, and 8.0.

- DigitalOcean Managed Databases MongoDB clusters do not support the following features:
  - Query statistics
  - Read-only nodes
  - Connection pooling
  - Current and long-running queries
- To maintain cluster stability, users cannot access the `superuser` role.

- You cannot add users to a MongoDB cluster using the `mongo` shell. Users must be added to the cluster [using the DigitalOcean Control Panel](https://docs.digitalocean.com/products/databases/mongodb/how-to/manage-users-and-databases/).

- DigitalOcean Managed MongoDB does not support [server-side Javascript](https://docs.mongodb.com/manual/core/server-side-javascript/). We support MongoDB’s more recent and secure [Aggregation Pipeline framework](https://docs.mongodb.com/manual/core/aggregation-pipeline).

- MongoDB clusters cannot be migrated to other regions at this time.

- You cannot resize cluster nodes to smaller sizes. To move from a bigger node to a smaller node, create a new cluster with the desired node size and import your data.

- MongoDB clusters suffer severe issues when their disk space becomes completely full. To prevent this, we block further writes to a cluster when its disk reaches 97% capacity. To remove this block, see [our support article](https://docs.digitalocean.com/support/how-do-i-unblock-my-mongodb-database/).

- MongoDB does not support accessing database metrics via an API endpoint.

- MongoDB does not support log forwarding to Rsyslog.


## Known Issues

### Managed Database Cluster Known Issues

- You currently cannot manage access control lists (ACLs), even with 3rd-party clients.

- You can’t use DigitalOcean’s Cloud Firewalls with managed databases. Until support is available, you can restrict access to nodes by their incoming IPv4 addresses. You can also add Droplets and other resources by their names or [tags](https://docs.digitalocean.com/products/databases/mongodb/how-to/tag/) to a cluster’s [trusted sources](https://docs.digitalocean.com/products/databases/mongodb/how-to/secure/).

- Adding storage to an existing cluster for the first time takes longer due to a necessary conversion process. Subsequent scales for the same cluster are considerably faster, taking around a minute.


In this article...

- [Managed Database Cluster Limits](https://docs.digitalocean.com/products/databases/mongodb/details/limits/#managed-database-cluster-limits)
- [MongoDB Limits](https://docs.digitalocean.com/products/databases/mongodb/details/limits/#mongodb-limits)
- [Known Issues](https://docs.digitalocean.com/products/databases/mongodb/details/limits/#known-issues)
  - [Managed Database Cluster Known Issues](https://docs.digitalocean.com/products/databases/mongodb/details/limits/#managed-database-cluster-known-issues)

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