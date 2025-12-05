---
url: "https://docs.digitalocean.com/products/databases/postgresql/how-to/"
title: "PostgreSQL How-Tos | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/postgresql.855c43f1f82e98a24a05998729b39a9937438c7f77af3dc0c22da5a5739f5eb7.svg)PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/)
- [Getting Started](https://docs.digitalocean.com/products/databases/postgresql/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/postgresql/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/databases/postgresql/how-to/)
  - [Create PostgreSQL Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/)
  - [Connect to PostgreSQL Cluster](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/resize/)
  - [Import Databases](https://docs.digitalocean.com/products/databases/postgresql/how-to/import-databases/)
  - [Secure PostgreSQL Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/secure/)
  - [Migrate External Databases](https://docs.digitalocean.com/products/databases/postgresql/how-to/migrate/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/postgresql/how-to/schedule-updates/)
  - [Manage Users and Databases](https://docs.digitalocean.com/products/databases/postgresql/how-to/manage-users-and-databases/)
  - [Modify User Privileges](https://docs.digitalocean.com/products/databases/postgresql/how-to/modify-user-privileges/)
  - [Monitor PostgreSQL Performance](https://docs.digitalocean.com/products/databases/postgresql/how-to/monitor-databases/)
  - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/postgresql/how-to/add-standby-nodes/)
  - [Add Read-Only Nodes](https://docs.digitalocean.com/products/databases/postgresql/how-to/add-read-only-nodes/)
  - [Manage Connection Pools](https://docs.digitalocean.com/products/databases/postgresql/how-to/manage-connection-pools/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/postgresql/how-to/monitor-clusters/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/postgresql/how-to/set-up-alerts/)
  - [Relocate Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/relocate/)
  - [Fork Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/fork-clusters/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/postgresql/how-to/forward-logs/)
  - [Restore from Backups](https://docs.digitalocean.com/products/databases/postgresql/how-to/restore-from-backups/)
  - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/destroy/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/tag/)
  - [Upgrade PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/upgrade-version/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/reconfigure/)
- [Reference](https://docs.digitalocean.com/products/databases/postgresql/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/postgresql/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/postgresql/concepts/best-practices/)
  - [Migration Strategies](https://docs.digitalocean.com/products/databases/postgresql/concepts/migration-strategies/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/postgresql/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/postgresql/details/)
  - [Features](https://docs.digitalocean.com/products/databases/postgresql/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/postgresql/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/postgresql/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/postgresql/details/limits/)
  - [Supported Extensions](https://docs.digitalocean.com/products/databases/postgresql/details/supported-extensions/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/postgresql/details/notifications/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)
- [Support](https://docs.digitalocean.com/products/databases/postgresql/support/)

- How-Tos

[Give Feedback](https://ideas.digitalocean.com/documentation)

# PostgreSQL How-Tos

Generated on 25 Nov 2025

PostgreSQL is an open source, object-relational database built for extensibility, data integrity, and speed. Its concurrency support makes it fully ACID-compliant, and it supports dynamic loading and catalog-driven operations to let users customize its data types, functions, and more.

## Getting Started

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Create PostgreSQL Database Clusters

Create a PostgreSQL database cluster from the DigitalOcean Control Panel.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Connect to PostgreSQL Database Clusters

Connect to PostgreSQL database clusters from the command line or other applications.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

Import Databases

Import an existing PostgreSQL database into a DigitalOcean Managed Databases cluster.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Secure PostgreSQL Managed Database Clusters

Add additional security to a PostgreSQL managed database cluster by restricting incoming connections and increasing the SSL mode verification level.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

Migrate External Databases

Use continuous migration to move an existing non-DigitalOcean PostgreSQL database to DigitalOcean Managed Databases.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Schedule Automatic Software Updates for PostgreSQL Database Clusters

Customize the maintenance window for automatic software updates to your database cluster.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Tag Postgresql Database Clusters

Organize PostgreSQL databases clusters with tags to group and filter databases or create monitoring alert policies for multiple databases at once.

## Cluster Infrastructure

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Resize PostgreSQL Database Clusters

Increase the size of your database cluster to accommodate your data needs.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Monitor PostgreSQL Database Performance

Access and interpret PostgreSQL database performance metrics.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Add Standby Nodes to PostgreSQL Database Clusters

Add standby nodes to new or existing PostgreSQL database clusters for high availability.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Add Read-Only Nodes to PostgreSQL Database Clusters

Add read-only nodes to reduce latency for users in specific regions.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Monitor PostgreSQL Database Cluster Performance

Access and understand performance metrics for nodes in a database cluster.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Manage Connection Pools for PostgreSQL Database Clusters

Use connection pools to improve PostgreSQL database performance.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Set Up Cluster Monitoring Alerts

Configure alert policies based on database cluster performance metrics.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Forward Logs from a PostgreSQL Cluster

Forward database logs to OpenSearch, Elasticsearch, or Rsyslog.

## PostgreSQL Management

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Manage PostgreSQL Users and Databases in a Database Cluster

Create and delete a database cluster’s databases and database users from the DigitalOcean Control Panel.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Modify User Privileges in PostgreSQL Databases

Modify user privileges in PostgreSQL managed database clusters, like creating a read-only user.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Upgrade PostgreSQL to a New Version

Upgrade your PostgreSQL cluster to the latest supported version of PostgreSQL from the control panel.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Reconfigure PostgreSQL Database Clusters

Edit your database engine’s configuration and parameters via the CLI or API.

## Cluster Management

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Relocate Database Clusters

Change a cluster’s regional datacenter.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Fork a PostgreSQL Database Cluster

Fork a database cluster to create a new cluster from an existing cluster based on a specific point in time.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Manually Restore PostgreSQL Database Clusters from Backups

Recover from accidental data loss by manually restoring a PostgreSQL database cluster from backups.

![](https://docs.digitalocean.com/images/icons/postgresql.svg)

How to Destroy PostgreSQL Database Clusters

Destroy a database cluster to permanently and irreversibly destroy the cluster, its contents, and its automated backups.

In this article...

- [Getting Started](https://docs.digitalocean.com/products/databases/postgresql/how-to/#getting-started)
- [PostgreSQL Management](https://docs.digitalocean.com/products/databases/postgresql/how-to/#postgresql-management)
- [Cluster Infrastructure](https://docs.digitalocean.com/products/databases/postgresql/how-to/#cluster-infrastructure)
- [Cluster Management](https://docs.digitalocean.com/products/databases/postgresql/how-to/#cluster-management)

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