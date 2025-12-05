---
url: "https://docs.digitalocean.com/products/databases/opensearch/details/notifications/"
title: "Types of Cluster Notifications | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/opensearch.2629f480d99bedd31ae31e9fd8269c327373bb1a8ecc38a68f458985e2393b42.svg)OpenSearch](https://docs.digitalocean.com/products/databases/opensearch/)
- [Getting Started](https://docs.digitalocean.com/products/databases/opensearch/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/opensearch/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/databases/opensearch/how-to/)
  - [Create OpenSearch Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/opensearch/how-to/forward-logs/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/resize/)
  - [Secure OpenSearch Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/secure/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/opensearch/how-to/schedule-updates/)
  - [Manage Users](https://docs.digitalocean.com/products/databases/opensearch/how-to/manage-users/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/opensearch/how-to/monitor-clusters/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/opensearch/how-to/set-up-alerts/)
  - [Relocate Database Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/relocate/)
  - [Fork Database Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/fork-clusters/)
  - [Restore from Backups](https://docs.digitalocean.com/products/databases/opensearch/how-to/restore-from-backups/)
  - [Destroy Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/destroy/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/tag/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/reconfigure/)
- [Reference](https://docs.digitalocean.com/products/databases/opensearch/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/opensearch/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/opensearch/concepts/best-practices/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/opensearch/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/opensearch/details/)
  - [Features](https://docs.digitalocean.com/products/databases/opensearch/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/opensearch/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/opensearch/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/opensearch/details/limits/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/opensearch/details/notifications/)
  - [Supported Plugins](https://docs.digitalocean.com/products/databases/opensearch/details/supported-plugins/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)

- [Details](https://docs.digitalocean.com/products/databases/opensearch/details/)
- Cluster Notifications

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Types of Cluster Notifications

Validated on 8 Dec 2022 • Last edited on 17 Jun 2024

OpenSearch is an open-source search and analytics suite which serves as a centralized location to manage logs forwarded from other resources, such as databases and Droplets.

We monitor your clusters for issues such as low disk space and automatic failovers. If we detect an issue, we email you and any [team members](https://docs.digitalocean.com/platform/teams/) attached to the account using the account owner’s email address.

This page lists the database cluster issues we send email alerts for. You cannot disable or customize these automatic emails. To receive alerts about issues not covered here (like CPU usage), you can [set up cluster monitoring policies](https://docs.digitalocean.com/products/databases/opensearch/how-to/set-up-alerts/) based on specified parameters that you choose.

## Failover Notifications

When we detect a performance issue in your cluster, such as problems with the underlying Droplet that the cluster is running on, we start a primary node replacement. You don’t need to take any action, but if you have not set up your cluster for high availability, you may experience downtime.

## Resource Usage Notifications

We send low resource notifications when your cluster is low on memory or disk space.

- **Low Disk Space:** We send this notification when your cluster’s disk space usage reaches greater than 90% of available space for one minute or more within the last five minutes. You can free up disk space by removing unnecessary data, such as errant logs, or by increasing the size of your cluster.

- **Out of Memory:** We send this notification when one or more nodes is low on memory and the Out of Memory Killer has stopped two processes in the past six hours.


In this article...

- [Failover Notifications](https://docs.digitalocean.com/products/databases/opensearch/details/notifications/#failover-notifications)
- [Resource Usage Notifications](https://docs.digitalocean.com/products/databases/opensearch/details/notifications/#resource-usage-notifications)

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