---
url: "https://docs.digitalocean.com/release-notes/mysql/"
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
- MySQL

[Give Feedback](https://ideas.digitalocean.com/documentation)

# MySQL Release Notes

Validated on 17 Sep 2025 • Last edited on 28 Mar 2024

## September 2025

### 17 September

- Storage autoscaling is now in general availability. Additionally, you can now reduce your cluster’s amount of additional storage, as long as the new storage size is greater than or equal to the latest backup’s size plus any data growth since then and a 25% buffer.

- Now in public preview, you can now enable storage autoscaling on all Managed Database engines. To enable autoscaling, see our resizing guides for [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/resize/), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/resize/), [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/), [OpenSearch](https://docs.digitalocean.com/products/databases/opensearch/how-to/resize/), and [Kafka](https://docs.digitalocean.com/products/databases/kafka/how-to/resize/).


## July 2025

### 1 July

- The DOKS database operator, which facilitated integration of DOKS clusters with managed databases, is deprecated. Your existing databases remain operational and the [operator-related CRDs](https://github.com/digitalocean/do-operator/tree/main/docs/databases) are not removed. You can use the DigitalOcean API, CLI, or control panel to manage the databases created with the operator.


## March 2025

### 19 March

- We have released new Storage-Optimized Droplet plans for MySQL and PostgreSQL with 48 CPUs, 384 GiB of RAM, and 20 TB (MySQL)/30 TB (PostgreSQL) of storage in SGP1, SFO2, and FRA1. For more details, see our pricing pages for [MySQL](https://docs.digitalocean.com/products/databases/mysql/details/pricing/) and [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/details/pricing/).


## February 2025

### 28 February

- All managed databases except MongoDB now support up to 2,000 IP addresses as trusted sources. To add trusted sources, see our guides for [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/secure/), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/secure/), [Caching](https://docs.digitalocean.com/products/databases/redis/how-to/secure/), [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/how-to/secure/), [OpenSearch](https://docs.digitalocean.com/products/databases/opensearch/how-to/secure/), and [Kafka](https://docs.digitalocean.com/products/databases/kafka/how-to/secure/).


## December 2024

### 20 December

- All Managed Databases are [now available in NYC2](https://docs.digitalocean.com/platform/regional-availability/).


## June 2024

### 17 June

- Managed databases now supports log forwarding to OpenSearch, Elasticsearch, and Rsyslog. You can create and manage log sinks using the [control panel](https://cloud.digitalocean.com/databases) and [DigitalOcean API](https://docs.digitalocean.com/reference/api/digitalocean/). For more detailed steps, see our guides for [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/forward-logs/), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/forward-logs/), [Redis](https://docs.digitalocean.com/products/databases/redis/how-to/forward-logs/), [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/how-to/forward-logs/), and [Kafka](https://docs.digitalocean.com/products/databases/kafka/how-to/forward-logs/).


## April 2024

### 8 April

- You can now view hundreds of new database metrics by accessing the metrics API endpoint. For more detailed steps, see our guides for [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/monitor-clusters/#access-the-metrics-endpoint), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/monitor-clusters/#access-the-metrics-endpoint), [Redis](https://docs.digitalocean.com/products/databases/redis/how-to/monitor-clusters/#access-the-metrics-endpoint), and [Kafka](https://docs.digitalocean.com/products/databases/kafka/how-to/monitor-clusters/#access-the-metrics-endpoint).


## February 2024

### 13 February

- You can now reconfigure MySQL, PostgreSQL, and Redis databases via the API, which lets you edit many database engine parameters that were previously unavailable for editing. For more detailed steps, see [How to Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/reconfigure/).


## September 2023

### 29 September

- The following MySQL and PostgreSQL plans are now deprecated:


  - MySQL and PostgreSQL plans with 8 vCPUs, 32 GB RAM, and 600 GB SSD ($480 per month)
  - MySQL and PostgreSQL plans with 16 vCPUs, 64 GB RAM, and 1220 GB SSD ($960 per month)

All of your existing database clusters with these plans are still functional and accessible to you. However, you cannot resize them. To regain access to these features, fork your database to a new cluster with a supported plan. For more detailed steps, see our guides on how to [fork MySQL databases](https://docs.digitalocean.com/products/databases/mysql/how-to/fork-clusters/) and [fork PostgreSQL databases](https://docs.digitalocean.com/products/databases/postgresql/how-to/fork-clusters/).

- When creating or resizing MySQL or PostgreSQL clusters on DigitalOcean, you can now add additional storage independently from your chosen database configuration plan. This provides a more economic option for increasing storage, rather than upgrading your cluster’s entire plan.

For more details, see our guides on how to [resize MySQL clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/resize/) and [resize PostgreSQL clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/resize/).


## October 2022

### 13 October

- When creating a new Kubernetes cluster, you can add a free database operator (now in beta), which allows you to automatically link new databases to your cluster. For more details, see [documentation on GitHub](https://github.com/digitalocean/do-operator/tree/main/docs/databases).


## June 2022

### 27 June

- To improve security, DigitalOcean no longer accepts TLS 1.0 and TLS 1.1 connections. This includes connections to `www.digitalocean.com`, `cloud.digitalocean.com`, and `api.digitalocean.com`.


## March 2022

### 4 March

- You can now configure your MySQL, PostgreSQL, and Redis managed databases by making a `PATCH` request to `/v2/databases/{database_cluster_uuid}/config`. For example:



```json
{
    "config": {
      "sql_mode": "ANSI,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION,NO_ZERO_DATE,NO_ZERO_IN_DATE,STRICT_ALL_TABLES",
      "sql_require_primary_key": true
    }
}
```



For more details, see the [full reference documentation for the managed databases API](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_patch_config).


## February 2022

### 1 February

- The database online migration feature for the [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/migrate/), and [Redis](https://docs.digitalocean.com/products/databases/redis/how-to/migrate/) database engines no longer supports migrating databases from clusters inside of DigitalOcean to other clusters inside of DigitalOcean.


## January 2022

### 25 January

- Online migration is now available for the [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/migrate/), and [Redis](https://docs.digitalocean.com/products/databases/redis/how-to/migrate/) database engines. Online migration allows you to migrate databases from external servers or cloud providers to databases in your DigitalOcean account.


### 6 January

- All DigitalOcean databases now support [App Platform apps as trusted sources](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/), including [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/).


## August 2021

### 9 August

- Released [v1.63.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.63.0), the official DigitalOcean CLI. This release includes a number of new features:


  - The `database firewall` sub-commands now support apps as trusted sources
  - New `monitoring alert` sub-commands for creating and managing alert policies
  - The `--droplet-agent` flag was added to the `compute droplet create` sub-command to optionally disable installing the agent for the Droplet web console

## March 2021

### 30 March

- You can now deploy managed databases on Droplets with dedicated CPUs for the [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/#machine-type), [MySQL](https://docs.digitalocean.com/products/databases/mysql/#machine-type), and [Redis](https://docs.digitalocean.com/products/databases/redis/#machine-type) engines.


## June 2020

### 16 June

- You can now [remove all global SQL modes from MySQL database clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/set-sql-mode/). Global SQL modes affect the SQL syntax MySQL supports and the data validation checks it performs.


### 5 June

- Beginning 4 June 2020, you are [required to create a primary key](https://docs.digitalocean.com/products/databases/mysql/how-to/create-primary-keys/) for each new table in any DigitalOcean Managed MySQL Database to improve cluster performance.


## April 2020

### 28 April

- The DigitalOcean [Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) service is now available for all customers. VPC replaces the private networking service. Existing private networks will continue to function as normal but with the enhanced security and features of the VPC service. See the description of [VPC features](https://docs.digitalocean.com/products/networking/vpc/#features) for more information.


### 7 April

- We began the incremental release of the [DigitalOcean Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) service. It will be available for all customers soon. VPC replaces the private networking service.


## March 2020

### 4 March

- Users can now [set legacy MySQL 5x password encryption](https://docs.digitalocean.com/products/databases/mysql/how-to/manage-users-and-databases/#password-encryption) for MySQL 8+ managed databases from the control panel and API.


## January 2020

### 27 January

- [v1.13.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1130-january-27-2020) of the DigitalOcean Terraform Provider is now available. This release adds support for tagging managed databases clusters.


## December 2019

### 19 December

- Released v1.12.0 of the DigitalOcean Terraform Provider. This release contains improvements to Managed Database support including a new resource for configuring trusted sources and the ability to set the global SQL mode or Redis eviction policy on a cluster. There is also a new data source for finding supported Kubernetes versions. Learn more on the [Terraform Changelog](https://do.co/terraform-changelog).


### 17 December

- Bandwidth billing for managed databases, originally slated to begin in January 2020, has been postponed to 2021. Egress bandwidth for managed databases clusters will continue to be waived until then.


## November 2019

### 21 November

- Users can now [use the DigitalOcean API to set and modify trusted sources for managed databases](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_update_firewall_rules) to restrict incoming connections.

- MySQL managed database clusters now support setting the global SQL mode via the [control panel](https://cloud.digitalocean.com/databases) and the [API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/databases). See [How to Set Global SQL Mode on MySQL Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/set-sql-mode/) for more information.


## September 2019

### 4 September

- Managed databases for MySQL and Redis are now available in SGP1, BLR1, and TOR1, and MySQL is now in [General Availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Learn more in the [MySQL and Redis announcement blog post](https://blog.digitalocean.com/take-the-worry-out-of-managing-your-mysql-redis-databases).


## August 2019

### 27 August

- Managed databases for MySQL and Redis in Limited Availability are now available in the AMS3, LON1, and NYC3 datacenter regions. Learn more in the [MySQL and Redis announcement blog post](https://blog.digitalocean.com/take-the-worry-out-of-managing-your-mysql-redis-databases).


### 20 August

- Managed databases for MySQL and Redis have been released in early availability in the NYC1, FRA1, and SFO2 datacenter regions. Learn more in the [MySQL and Redis announcement blog post](https://blog.digitalocean.com/take-the-worry-out-of-managing-your-mysql-redis-databases).


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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)