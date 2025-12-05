---
url: "https://docs.digitalocean.com/products/databases/kafka/how-to/secure/"
title: "How to Secure Kafka Managed Clusters | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/kafka.6e5f03a9446ce8ef1cb8ff94d5cfc2174c6a0778b884650e64476af3a9d0888b.svg)Kafka](https://docs.digitalocean.com/products/databases/kafka/)
- [Getting Started](https://docs.digitalocean.com/products/databases/kafka/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/kafka/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/databases/kafka/how-to/)
  - [Create Kafka Clusters](https://docs.digitalocean.com/products/databases/kafka/how-to/create/)
  - [Connect to Kafka Clusters](https://docs.digitalocean.com/products/databases/kafka/how-to/connect/)
  - [Create Kafka Topics](https://docs.digitalocean.com/products/databases/kafka/how-to/create-topics/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/kafka/how-to/resize/)
  - [Secure Kafka Clusters](https://docs.digitalocean.com/products/databases/kafka/how-to/secure/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/kafka/how-to/schedule-updates/)
  - [Manage Users and Privileges](https://docs.digitalocean.com/products/databases/kafka/how-to/manage-users-and-privileges/)
  - [Monitor Kafka Performance](https://docs.digitalocean.com/products/databases/kafka/how-to/monitor-databases/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/kafka/how-to/monitor-clusters/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/kafka/how-to/set-up-alerts/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/kafka/how-to/forward-logs/)
  - [Destroy Clusters](https://docs.digitalocean.com/products/databases/kafka/how-to/destroy/)
  - [Enable Schema Registry](https://docs.digitalocean.com/products/databases/kafka/how-to/enable-schema-registry/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/kafka/how-to/tag/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/kafka/how-to/reconfigure/)
- [Reference](https://docs.digitalocean.com/products/databases/kafka/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/kafka/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/kafka/concepts/best-practices/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/kafka/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/kafka/details/)
  - [Features](https://docs.digitalocean.com/products/databases/kafka/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/kafka/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/kafka/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/kafka/details/limits/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/kafka/details/notifications/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)

- [How-Tos](https://docs.digitalocean.com/products/databases/kafka/how-to/)
- Secure Kafka Clusters

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Secure Kafka Managed Clusters

Validated on 8 Dec 2022 • Last edited on 17 Jun 2025

Kafka is an open-source distributed event and stream-processing platform built to process demanding real-time data feeds. It is inherently scalable, with high throughput and availability.

Data in Kafka clusters is encrypted at rest with LUKS (Linux Unified Key Setup) and in transit with SSL. However, there are additional steps you can take to ensure that your data is safe.

## Restrict Incoming Connections

You can greatly decrease the likelihood of a security breach by restricting which DigitalOcean resources or external IP addresses are allowed to access the nodes in a cluster. This prevents brute force password and denial-of-service attacks from any server not explicitly permitted to connect.

Typically, only the application servers are allowed to connect to the database cluster. Users access the public-facing site, and the public-facing server authenticates and manages database connections in turn.

To restrict access to a database cluster, click the name of the cluster in the control panel to go to its **Overview** page, then click the **Settings** tab.

![Screenshot of cluster settings page](https://docs.digitalocean.com/screenshots/databases/kafka-settings.f479fbbed8343b4326a720610f41f50789153e910c310dca6b38f96665ae335d.png)

In the section titled **Trusted Sources**, click **Edit** to open the **Add trusted sources** text box.

![The open Trusted Sources section of the settings page](https://docs.digitalocean.com/screenshots/databases/trusted-sources.d160aa387bd895e79d0b13cfc701007609f7df56fa3f973f3727e317616a71d9.png)

You can enter Droplets, Kubernetes clusters, tags, apps, or specific IP addresses. Entering a tag provides access to the database for any Droplets or Kubernetes nodes containing that tag. At this time, DigitalOcean Cloud Firewalls are not supported.

Warning
You currently cannot add IPv6 rules to a database cluster’s trusted sources.

In this article...

- [Restrict Incoming Connections](https://docs.digitalocean.com/products/databases/kafka/how-to/secure/#firewalls)

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