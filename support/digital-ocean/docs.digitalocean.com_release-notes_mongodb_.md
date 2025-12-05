---
url: "https://docs.digitalocean.com/release-notes/mongodb/"
title: " | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/release-notes.5fbb164636ab961df9e08f892a39623e2bf7848be659fb300d6b0bab87a060dd.svg)Release Notes](https://docs.digitalocean.com/release-notes/)
- [![](https://docs.digitalocean.com/images/icons/regional-availability.32459447c00bfdb1c07abebcc0fdd721a4cbd93143cb616b0fbe5c629e4a938c.svg)Regional Availability](https://docs.digitalocean.com/platform/regional-availability/)
- [![](https://docs.digitalocean.com/images/icons/accounts.7c3a46a4e139957c37b1ba530846464f3b7432b7bc00793db0d8e788940ddf69.svg)Accounts](https://docs.digitalocean.com/platform/accounts/)
- [![](https://docs.digitalocean.com/images/icons/teams.d6932e5b476fcbbdf1fecec304776ef06c1a04d23174de1c0e6b349d96add59f.svg)Teams](https://docs.digitalocean.com/platform/teams/)
- [![](https://docs.digitalocean.com/images/icons/organizations.ae95392d02268a2e13ef28b6aabf1b35b6a0a5a9ef64517fedf080075500cefd.svg)Organizations](https://docs.digitalocean.com/platform/organizations/)
- [![](https://docs.digitalocean.com/images/icons/billing.357b31651da85802e1aa1c9f0b19cda7b26d5c971352f7176d1a130b21e088b7.svg)Billing](https://docs.digitalocean.com/platform/billing/)
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- [Release Notes](https://docs.digitalocean.com/release-notes/)
- MongoDB

[Give Feedback](https://ideas.digitalocean.com/documentation)

# MongoDB Release Notes

Validated on 17 Sep 2025 • Last edited on 28 Mar 2024

## September 2025

### 17 September

- Storage autoscaling is now in general availability. Additionally, you can now reduce your cluster’s amount of additional storage, as long as the new storage size is greater than or equal to the latest backup’s size plus any data growth since then and a 25% buffer.

- Now in public preview, you can now enable storage autoscaling on all Managed Database engines. To enable autoscaling, see our resizing guides for [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/resize/), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/resize/), [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/), [OpenSearch](https://docs.digitalocean.com/products/databases/opensearch/how-to/resize/), and [Kafka](https://docs.digitalocean.com/products/databases/kafka/how-to/resize/).


## August 2025

### 27 August

- Now in public preview, you can now enable storage autoscaling on your Managed MongoDB cluster. To enable autoscaling, see [How to Resize MongoDB Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/).


## May 2025

### 7 May

- You can now set three new, more granular predefined roles (`Admin`, `Read/Write`, and `Read-Only`) to Managed MongoDB users with the DigitalOcean API on create/delete endpoints. The previous user roles (`DOAdmin` and `DOReadOnly`) remain available for backwards compatibility. For more details on the MongoDB-specific permissions for each of the new roles, see [our API reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases/operation/databases_add_user).


## March 2025

### 27 March

- Managed MongoDB now supports up to 2,000 IP addresses as trusted sources. To add trusted sources, see [How to Secure MongoDB Managed Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/secure/).


### 3 March

- [MongoDB 8.0](https://www.mongodb.com/docs/manual/release-notes/8.0/) is now available in the control panel and via the API. To upgrade your MongoDB cluster to version 8.0, see our guide on [upgrading your database cluster](https://docs.digitalocean.com/products/databases/mongodb/how-to/upgrade/).


## December 2024

### 20 December

- All Managed Databases are [now available in NYC2](https://docs.digitalocean.com/platform/regional-availability/).


## November 2024

### 12 November

- Scalable storage for MongoDB clusters is now in general availability.


## October 2024

### 16 October

- Now in beta, when creating or [resizing MongoDB clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/), you can now add additional storage to the cluster independent from the storage already included in the database cluster plan. You can use this option when you need more disk space but don’t need more CPU or RAM.


### 1 October

- MongoDB version 5.0 is now deprecated.


## June 2024

### 17 June

- Managed databases now supports log forwarding to OpenSearch, Elasticsearch, and Rsyslog. You can create and manage log sinks using the [control panel](https://cloud.digitalocean.com/databases) and [DigitalOcean API](https://docs.digitalocean.com/reference/api/digitalocean/). For more detailed steps, see our guides for [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/forward-logs/), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/forward-logs/), [Redis](https://docs.digitalocean.com/products/databases/redis/how-to/forward-logs/), [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/how-to/forward-logs/), and [Kafka](https://docs.digitalocean.com/products/databases/kafka/how-to/forward-logs/).


## May 2024

### 6 May

- [MongoDB 7.0](https://www.mongodb.com/docs/manual/release-notes/7.0/) is now available in the control panel and via the API. To upgrade your MongoDB cluster to version 7.0, see our guide on [upgrading your database cluster](https://docs.digitalocean.com/products/databases/mongodb/how-to/upgrade/).


## April 2024

### 26 April

- You can now reconfigure MongoDB databases via the API, which lets you edit many database engine parameters that were previously unavailable for editing. For more detailed steps, see [How to Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/reconfigure/).


## March 2023

### 13 March

- [MongoDB 6.0](https://www.mongodb.com/docs/manual/release-notes/6.0/) is now available in the control panel and via the API. To upgrade your MongoDB cluster to version 6.0, see our guide on [upgrading your database cluster](https://docs.digitalocean.com/products/databases/mongodb/how-to/upgrade/)


## June 2022

### 27 June

- To improve security, DigitalOcean no longer accepts TLS 1.0 and TLS 1.1 connections. This includes connections to `www.digitalocean.com`, `cloud.digitalocean.com`, and `api.digitalocean.com`.


### 2 June

- [MongoDB 5.0](https://www.mongodb.com/docs/manual/release-notes/5.0/) is now available in the control panel and via the API. To upgrade your MongoDB cluster to version 5.0, see our guide on [upgrading your database cluster](https://docs.digitalocean.com/products/databases/mongodb/how-to/upgrade/)


## April 2022

### 13 April

- [MongoDB clusters](https://docs.digitalocean.com/products/databases/mongodb/) now support two [Dedicated Droplet](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#shared-vs-dedicated) types: General Purpose and Memory-Optimized. If these options are [available in your region](https://docs.digitalocean.com/platform/regional-availability/#mongodb-machine-type-availability), you can select them when [creating a new cluster](https://docs.digitalocean.com/products/databases/mongodb/how-to/create/) or [resizing an existing one](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/).


## January 2022

### 6 January

- All DigitalOcean databases now support [App Platform apps as trusted sources](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/), including [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/).


## August 2021

### 9 August

- [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/) is now available as a managed database engine in the AMS3, BLR1, FRA1, LON1, NYC1, NYC3, SFO3, SGP1, and TOR1 regions.

- Released [v1.63.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.63.0), the official DigitalOcean CLI. This release includes a number of new features:


  - The `database firewall` sub-commands now support apps as trusted sources
  - New `monitoring alert` sub-commands for creating and managing alert policies
  - The `--droplet-agent` flag was added to the `compute droplet create` sub-command to optionally disable installing the agent for the Droplet web console

## June 2021

### 28 June

- The [MongoDB database engine](https://docs.digitalocean.com/products/databases/mongodb/) is now in general availability.


In this article...

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