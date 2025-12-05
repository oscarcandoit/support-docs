---
url: "https://docs.digitalocean.com/products/databases/mysql/details/features/"
title: "MySQL Features | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/mysql.15f32316da2692011abce02f393a1ee6db469250230cf1ea962c181c0e9e7de5.svg)MySQL](https://docs.digitalocean.com/products/databases/mysql/)
- [Getting Started](https://docs.digitalocean.com/products/databases/mysql/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/mysql/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/databases/mysql/how-to/)
  - [Create MySQL Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/create/)
  - [Connect to MySQL Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/connect/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/resize/)
  - [Import Databases](https://docs.digitalocean.com/products/databases/mysql/how-to/import-databases/)
  - [Secure MySQL Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/secure/)
  - [Migrate MySQL Databases](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/mysql/how-to/schedule-updates/)
  - [Manage Users and Databases](https://docs.digitalocean.com/products/databases/mysql/how-to/manage-users-and-databases/)
  - [Modify User Privileges](https://docs.digitalocean.com/products/databases/mysql/how-to/modify-user-privileges/)
  - [Monitor MySQL Performance](https://docs.digitalocean.com/products/databases/mysql/how-to/monitor-databases/)
  - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/mysql/how-to/add-standby-nodes/)
  - [Add Read-Only Nodes](https://docs.digitalocean.com/products/databases/mysql/how-to/add-read-only-nodes/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/mysql/how-to/monitor-clusters/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/mysql/how-to/set-up-alerts/)
  - [Relocate Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/relocate/)
  - [Fork Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/fork-clusters/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/mysql/how-to/forward-logs/)
  - [Restore from Backups](https://docs.digitalocean.com/products/databases/mysql/how-to/restore-from-backups/)
  - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/destroy/)
  - [Set Global SQL Mode](https://docs.digitalocean.com/products/databases/mysql/how-to/set-sql-mode/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/tag/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/reconfigure/)
  - [Create Primary Keys](https://docs.digitalocean.com/products/databases/mysql/how-to/create-primary-keys/)
- [Reference](https://docs.digitalocean.com/products/databases/mysql/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/mysql/concepts/)
  - [Migration Strategies](https://docs.digitalocean.com/products/databases/mysql/concepts/migration-strategies/)
  - [Sort Buffer Size](https://docs.digitalocean.com/products/databases/mysql/concepts/sort-buffer-size/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/mysql/concepts/best-practices/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/mysql/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/mysql/details/)
  - [Features](https://docs.digitalocean.com/products/databases/mysql/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/mysql/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/mysql/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/mysql/details/limits/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/mysql/details/notifications/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)
- [Support](https://docs.digitalocean.com/products/databases/mysql/support/)

- [Details](https://docs.digitalocean.com/products/databases/mysql/details/)
- Features

[Give Feedback](https://ideas.digitalocean.com/documentation)

# MySQL Features

Validated on 20 Aug 2019 • Last edited on 17 Jun 2025

MySQL is an open source, object-relational database built with speed and reliability in mind. Its large and active developer community has created many third-party applications, tools, and libraries that expand MySQL’s functionality.

- **Automatic updates**. You can select a weekly date and time during which the database checks and applies updates to its operating system and engine to keep the service stable and secure.

- **Daily point-in-time backups**. Full cluster backups are taken daily and write-ahead-logs are maintained to allow you to restore to any point-in-time within the previous seven days.

- **High availability with automated failover**. In the event of a failure, managed databases with a standby node will automatically switch data handling to the standby node to prevent unplanned downtime. [Learn more about high availability for managed databases](https://docs.digitalocean.com/products/databases/#high-availability).

- **End-to-end security**. Encrypts data at rest with LUKS and in transit with SSL.

- **Cluster metrics and alerting**. Cluster metrics visualizations help you monitor the performance of the nodes in a database cluster, like resource usage, to guide capacity planning and optimization. Alert policies notify you when a metric rises above or falls below a threshold you set, like high CPU or low memory.


### MySQL Features

- **Read-only nodes**. You can add read-only nodes in geographically disparate datacenters.

- **Database metrics and query insights**. [MySQL-specific performance metrics](https://docs.digitalocean.com/products/databases/mysql/how-to/monitor-databases/) help you assess the health of the database, pinpoint performance bottlenecks, and identify unusual use patterns that may indicate an application bug or security breach.

MySQL main server metrics include connection status, index vs. sequential reads, and operations throughput. MySQL database metrics include throughput and latency for fetches, inserts, deletes, and updates.


In this article...

- [MySQL Features](https://docs.digitalocean.com/products/databases/mysql/details/features/#mysql-features)

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