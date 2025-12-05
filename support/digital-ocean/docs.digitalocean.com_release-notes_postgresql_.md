---
url: "https://docs.digitalocean.com/release-notes/postgresql/"
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
- PostgreSQL

[Give Feedback](https://ideas.digitalocean.com/documentation)

# PostgreSQL Release Notes

Validated on 5 Nov 2025 • Last edited on 28 Mar 2024

## November 2025

### 5 November

- PostgreSQL 18 is [now available for database clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/). You can [upgrade earlier versions of PostgreSQL clusters to newer versions](https://docs.digitalocean.com/products/databases/postgresql/how-to/upgrade-version/) without any downtime using the [DigitalOcean Control Panel](https://cloud.digitalocean.com/databases).


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


## January 2025

### 31 January

- PostgreSQL 17 is [now available for database clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/). You can [upgrade earlier versions of PostgreSQL clusters to newer versions](https://docs.digitalocean.com/products/databases/postgresql/how-to/upgrade-version/) without any downtime using the [DigitalOcean Control Panel](https://cloud.digitalocean.com/databases).


## December 2024

### 20 December

- All Managed Databases are [now available in NYC2](https://docs.digitalocean.com/platform/regional-availability/).


## November 2024

### 14 November

- PostgreSQL 12 is now deprecated. All existing PostgreSQL 12 database clusters are scheduled to automatically upgrade during [the cluster’s upgrade window](https://docs.digitalocean.com/products/databases/postgresql/how-to/schedule-updates/).


## August 2024

### 19 August

- PostgreSQL clusters now support [`pgvector`](https://github.com/pgvector/pgvector) v0.7.2. You can verify your access to this feature by running `\dx` from `psql` or querying `pg_extension` and locating `vector` in the output. If you do not have access to this pgvector version yet, [update your PostgreSQL cluster](https://docs.digitalocean.com/products/databases/postgresql/how-to/schedule-updates/). For a full list of supported extensions, see our guide [Supported PostgreSQL Extensions](https://docs.digitalocean.com/products/databases/postgresql/details/supported-extensions/).


## June 2024

### 17 June

- Managed databases now supports log forwarding to OpenSearch, Elasticsearch, and Rsyslog. You can create and manage log sinks using the [control panel](https://cloud.digitalocean.com/databases) and [DigitalOcean API](https://docs.digitalocean.com/reference/api/digitalocean/). For more detailed steps, see our guides for [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/forward-logs/), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/forward-logs/), [Redis](https://docs.digitalocean.com/products/databases/redis/how-to/forward-logs/), [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/how-to/forward-logs/), and [Kafka](https://docs.digitalocean.com/products/databases/kafka/how-to/forward-logs/).


## May 2024

### 8 May

- You can no longer create new PostgreSQL 12 managed databases. However, you can still fork existing PostgreSQL 12 clusters until PostgreSQL 12’s end of life on 14 November 2024.


## April 2024

### 8 April

- You can now view hundreds of new database metrics by accessing the metrics API endpoint. For more detailed steps, see our guides for [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/monitor-clusters/#access-the-metrics-endpoint), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/monitor-clusters/#access-the-metrics-endpoint), [Redis](https://docs.digitalocean.com/products/databases/redis/how-to/monitor-clusters/#access-the-metrics-endpoint), and [Kafka](https://docs.digitalocean.com/products/databases/kafka/how-to/monitor-clusters/#access-the-metrics-endpoint).


## February 2024

### 13 February

- You can now reconfigure MySQL, PostgreSQL, and Redis databases via the API, which lets you edit many database engine parameters that were previously unavailable for editing. For more detailed steps, see [How to Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/reconfigure/).


## October 2023

### 6 October

- PostgreSQL 11 is now deprecated. All existing PostgreSQL 11 database clusters are scheduled to automatically upgrade to PostgreSQL 15 during [the cluster’s upgrade window](https://docs.digitalocean.com/products/databases/postgresql/how-to/schedule-updates/) starting on 6 November 2023.


## September 2023

### 29 September

- The following MySQL and PostgreSQL plans are now deprecated:


  - MySQL and PostgreSQL plans with 8 vCPUs, 32 GB RAM, and 600 GB SSD ($480 per month)
  - MySQL and PostgreSQL plans with 16 vCPUs, 64 GB RAM, and 1220 GB SSD ($960 per month)

All of your existing database clusters with these plans are still functional and accessible to you. However, you cannot resize them. To regain access to these features, fork your database to a new cluster with a supported plan. For more detailed steps, see our guides on how to [fork MySQL databases](https://docs.digitalocean.com/products/databases/mysql/how-to/fork-clusters/) and [fork PostgreSQL databases](https://docs.digitalocean.com/products/databases/postgresql/how-to/fork-clusters/).

- When creating or resizing MySQL or PostgreSQL clusters on DigitalOcean, you can now add additional storage independently from your chosen database configuration plan. This provides a more economic option for increasing storage, rather than upgrading your cluster’s entire plan.

For more details, see our guides on how to [resize MySQL clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/resize/) and [resize PostgreSQL clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/resize/).


## July 2023

### 17 July

- PostgreSQL clusters on DigitalOcean now support the [`pgvector`](https://github.com/pgvector/pgvector) extension, for vector similarity search. For a full list of supported extensions, see our guide [Supported PostgreSQL Extensions](https://docs.digitalocean.com/products/databases/postgresql/details/supported-extensions/).


## May 2023

### 22 May

- PostgreSQL 15 is [now available for database clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/#choose-a-database-engine). You can also now [perform in-place upgrades](https://docs.digitalocean.com/products/databases/postgresql/how-to/upgrade-version/) for PostgreSQL clusters to newer versions without any downtime. We currently support PostgreSQL 12, 13, 14, and 15.


## October 2022

### 13 October

- When creating a new Kubernetes cluster, you can add a free database operator (now in beta), which allows you to automatically link new databases to your cluster. For more details, see [documentation on GitHub](https://github.com/digitalocean/do-operator/tree/main/docs/databases).


## August 2022

### 26 August

- In App Platform, you can now create [bindable environment variables](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/) for your [PostgreSQL database connection pools](https://docs.digitalocean.com/products/databases/postgresql/how-to/manage-connection-pools/). For detailed instructions, see our [reference page](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/#databases).


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

### 15 February

- [PostgreSQL 14 is now available for database clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/). You can [upgrade earlier versions of PostgreSQL clusters to newer versions](https://docs.digitalocean.com/products/databases/postgresql/how-to/upgrade-version/) without any downtime using the [DigitalOcean Control Panel](https://cloud.digitalocean.com/databases).


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

## May 2021

### 27 May

- PostgreSQL 13 is [now available for database clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/#choose-a-database-engine). You can also now [perform in-place upgrades](https://docs.digitalocean.com/products/databases/postgresql/how-to/upgrade-version/) for PostgreSQL clusters to newer versions without any downtime. We currently support PostgreSQL 10, 11, 12, and 13.


## March 2021

### 30 March

- You can now deploy managed databases on Droplets with dedicated CPUs for the [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/#machine-type), [MySQL](https://docs.digitalocean.com/products/databases/mysql/#machine-type), and [Redis](https://docs.digitalocean.com/products/databases/redis/#machine-type) engines.


### 3 March

- Online migration for PostgreSQL and Redis databases has been released in Beta. Select users can now migrate [Redis](https://docs.digitalocean.com/products/databases/redis/how-to/migrate/) and [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/migrate/) databases that reside inside and outside of DigitalOcean to existing database clusters in their DigitalOcean account. Redis migrations from AWS ElasticCache are not currently supported.


## July 2020

### 7 July

- PostgreSQL 12 is [now available for database clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/#choose-a-database-engine). You can also now [perform in-place upgrades](https://docs.digitalocean.com/products/databases/postgresql/how-to/upgrade-version/) for PostgreSQL clusters to newer versions without any downtime. We currently support PostgreSQL 10, 11, and 12.


## April 2020

### 28 April

- The DigitalOcean [Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) service is now available for all customers. VPC replaces the private networking service. Existing private networks will continue to function as normal but with the enhanced security and features of the VPC service. See the description of [VPC features](https://docs.digitalocean.com/products/networking/vpc/#features) for more information.


### 7 April

- We began the incremental release of the [DigitalOcean Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) service. It will be available for all customers soon. VPC replaces the private networking service.


## January 2020

### 27 January

- [v1.13.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1130-january-27-2020) of the DigitalOcean Terraform Provider is now available. This release adds support for tagging managed databases clusters.


## December 2019

### 17 December

- Bandwidth billing for managed databases, originally slated to begin in January 2020, has been postponed to 2021. Egress bandwidth for managed databases clusters will continue to be waived until then.


## November 2019

### 21 November

- Users can now [use the DigitalOcean API to set and modify trusted sources for managed databases](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_update_firewall_rules) to restrict incoming connections.


## May 2019

### 29 May

- [DigitalOcean Managed Databases](https://docs.digitalocean.com/products/databases/) now support [private networking](https://docs.digitalocean.com/products/networking/vpc/). New database clusters will provision with private networking enabled. Existing clusters will require an update to connect over the private network.


### 9 May

- [Managed databases](https://docs.digitalocean.com/products/databases/) are now in [General Availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). New features include enhanced monitoring insights, support for projects and tags, and availability in the Singapore (SGP1) region.


## February 2019

### 14 February

- [DigitalOcean Managed Databases](https://docs.digitalocean.com/products/databases/) were released with support for PostgreSQL v10 and v11.


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