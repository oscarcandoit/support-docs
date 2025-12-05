---
url: "https://docs.digitalocean.com/products/databases/postgresql/details/supported-extensions/"
title: "Supported PostgreSQL Extensions | DigitalOcean Documentation"
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

- [Details](https://docs.digitalocean.com/products/databases/postgresql/details/)
- Supported Extensions

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Supported PostgreSQL Extensions

Validated on 17 Jul 2023 • Last edited on 22 Oct 2025

PostgreSQL is an open source, object-relational database built for extensibility, data integrity, and speed. Its concurrency support makes it fully ACID-compliant, and it supports dynamic loading and catalog-driven operations to let users customize its data types, functions, and more.

To expand the functionality of your PostgreSQL cluster, you can use [extensions](https://www.postgresql.org/docs/current/extend-extensions.html), which are bundled packages of SQL objects.

## Install, Upgrade, or Disable Extensions

You can install supported extensions with [psql’s `CREATE EXTENSION` command](https://www.postgresql.org/docs/current/sql-createextension.html):

```
CREATE EXTENSION <extension-name>;
```

You can upgrade extensions to their latest version with [psql’s `ALTER EXTENSION` command](https://www.postgresql.org/docs/current/sql-alterextension.html):

```
ALTER EXTENSION <extension-name> UPDATE;
```

You can disable extensions with [psql’s `DROP EXTENSION` command](https://www.postgresql.org/docs/current/sql-dropextension.html):

```
DROP EXTENSION <extension-name>;
```

To see a list of extensions currently installed, use the following command:

```
\dx
```

## Supported Extensions

DigitalOcean PostgreSQL managed databases supports the following extensions. This list is current as of the **Validated** date on this page.

You can also see a list of available extensions from the psql’s command line, use the following command:

```
SELECT * FROM pg_available_extensions;
```

Not all extensions listed in `pg_available_extensions` are installable. To list all installable superuser-only and untrusted extensions, run the following command.

```bash
SELECT *
FROM pg_available_extension_versions
WHERE name = ANY(string_to_array(current_setting('extwlist.extensions'), ','));
```

If required, [assign superuser privileges](https://www.postgresql.org/docs/9.1/sql-alterrole.html) to enable their use.

Request support for a new extension by [voting for an existing request or submitting a new idea](https://ideas.digitalocean.com/managed-database).

| Extension Name | Description |
| --- | --- |
| [`address_standardizer`](https://postgis.net/docs/standardize_address.html) | Use to parse an address into constituent elements and support geocoding address normalization |
| [`address_standardizer_data_us`](https://postgis.net/docs/standardize_address.html) | A US sample dataset for `Address standardizer` |
| [`bloom`](https://www.postgresql.org/docs/current/bloom.html) | An index access method based on Bloom filters |
| [`bool_plperl`](https://www.postgresql.org/docs/current/plperl-funcs.html) | Use to transform between `bool` and `plperl` (PostgreSQL 13 and newer) |
| [`btree_gin`](https://www.postgresql.org/docs/current/btree-gin.html) | Support for indexing common data types in GIN |
| [`btree_gist`](https://www.postgresql.org/docs/current/btree-gist.html) | Support for indexing common data types in GiST |
| [`citext`](https://www.postgresql.org/docs/current/citext.html) | A data type for case-insensitive character strings |
| [`cube`](https://www.postgresql.org/docs/current/cube.html) | A data type for multi-dimensional cubes |
| [`dblink`](https://www.postgresql.org/docs/current/contrib-dblink-function.html) | Connect to other PostgreSQL databases |
| [`dict_int`](https://www.postgresql.org/docs/current/dict-int.html) | Text search dictionary template for integers |
| [`earthdistance`](https://www.postgresql.org/docs/current/earthdistance.html) | Use to calculate distances across the surface of the Earth |
| [`fuzzystrmatch`](https://www.postgresql.org/docs/current/fuzzystrmatch.html) | Use to determine similarities and distance between strings |
| [`h3`](https://github.com/zachasme/h3-pg) | Bindings for H3, a hierarchical hexagonal geospatial indexing system |
| [`h3_postgis`](https://github.com/zachasme/h3-pg) | Integration for H3 PostGIS |
| [`hll`](https://github.com/citusdata/postgresql-hll) | A data type for HyperLogLog data (PostgreSQL 11 and newer) |
| [`hstore`](https://www.postgresql.org/docs/current/hstore.html) | A data type for sets of (key, value) pairs |
| [`intagg`](https://www.postgresql.org/docs/current/intagg.html) | Integer aggregator and enumerator (obsolete) |
| [`intarray`](https://www.postgresql.org/docs/current/intarray.html) | Functions, operators, and index support for 1-D arrays of integers |
| [`ip4r`](https://github.com/RhodiumToad/ip4r) | Data types and functions for IP addresses and ranges |
| [`isn`](https://www.postgresql.org/docs/current/isn.html) | Data types for international product-numbering standards |
| [`jsonb_plperl`](https://www.postgresql.org/docs/current/datatype-json.html) | Transforms between `jsonb` and `plperl` |
| [`lo`](https://www.postgresql.org/docs/current/lo.html) | Use for large object maintenance |
| [`ltree`](https://www.postgresql.org/docs/current/ltree.html) | A data type for hierarchical tree-like structures |
| [`pageinspect`](https://www.postgresql.org/docs/current/pageinspect.html) | Inspect database pages at a low level |
| [`pgaudit`](https://github.com/pgaudit/pgaudit) | Provides session and object audit logging for legal or certification compliance |
| [`pg_buffercache`](https://www.postgresql.org/docs/current/pgbuffercache.html) | Use to examine the shared buffer cache |
| [`pg_cron`](https://github.com/citusdata/pg_cron) | Job scheduling tool |
| [`pg_partman`](https://github.com/pgpartman/pg_partman) | Use to manage partitioned tables by time or ID |
| [`pg_prewarm`](https://www.postgresql.org/docs/current/pgprewarm.html) | Prewarm relation data (PostgreSQL 11 and newer) |
| [`pg_repack`](https://pgxn.org/dist/pg_repack/1.4.6/) | Use to reorganize tables with minimal locks |
| [`pg_similarity`](https://github.com/eulerto/pg_similarity) | Support similarity queries (PostgreSQL 13 and newer) |
| [`pg_stat_statements`](https://www.postgresql.org/docs/current/pgstatstatements.html) | Use to track planning and execution statistics of all SQL statements executed |
| [`pg_trgm`](https://www.postgresql.org/docs/current/pgtrgm.html) | Text similarity measurement and index searching based on trigrams |
| [`pgcrypto`](https://www.postgresql.org/docs/current/pgcrypto.html) | Cryptographic functions |
| [`pgrouting`](https://github.com/pgRouting/pgrouting) | Provide geospatial routing and other network analysis functionality |
| [`pgrowlocks`](https://www.postgresql.org/docs/current/pgrowlocks.html) | Show row-level locking information |
| [`pgstattuple`](https://www.postgresql.org/docs/current/pgstattuple.html) | Show tuple-level statistics |
| [`pgvector`](https://github.com/pgvector/pgvector) | Type for vector similarity search (PostgreSQL 13 and newer) |
| [`pgvectorscale`](https://github.com/timescale/pgvectorscale) | Type for vector similarity search (PostgreSQL 16 and newer) |
| [`plperl`](https://www.postgresql.org/docs/current/plperl.html) | PL/Perl procedural language |
| [`plpgsql`](https://www.postgresql.org/docs/current/plpgsql.html) | PL/pgSQL procedural language |
| [`postgis`](https://postgis.net/) | PostGIS geometry and geography spatial types and functions |
| [`postgis_legacy`](https://postgis.net/) | Legacy functions for PostGIS |
| [`postgis`](https://postgis.net/docs/RT_reference.html) | PostGIS raster types and functions |
| [`postgis_sfcgal`](http://postgis.net/docs/reference.html#reference_sfcgal) | PostGIS SFCGAL functions |
| [`postgis_tiger_geocoder`](https://postgis.net/docs/Extras.html#Tiger_Geocoder) | PostGIS tiger geocoder and reverse geocoder |
| [`postgis_topology`](https://postgis.net/docs/Topology.html) | PostGIS topology spatial types and functions |
| [`postgres_fdw`](https://www.postgresql.org/docs/current/postgres-fdw.html) | Foreign-data wrapper for remote servers |
| [`rum`](https://github.com/postgrespro/rum) | RUM index access method |
| [`seg`](https://www.postgresql.org/docs/current/seg.html) | Data type for representing line segments or floating-point intervals |
| [`sslinfo`](https://www.postgresql.org/docs/current/sslinfo.html) | Info about SSL certificates |
| [`tablefunc`](https://www.postgresql.org/docs/current/tablefunc.html) | Functions that manipulate entire tables, including `crosstab` |
| [`tcn`](https://www.postgresql.org/docs/current/tcn.html) | Triggered change notifications |
| [`timescaledb`](https://github.com/timescale/timescaledb) | Enables scalable inserts and complex queries for time-series data |
| [`tsm_system_rows`](https://www.postgresql.org/docs/current/tsm-system-rows.html) | TABLESAMPLE method which accepts number of rows as a limit |
| [`tsm_system_time`](https://www.postgresql.org/docs/current/tsm-system-time.html) | TABLESAMPLE method which accepts time in milliseconds as a limit |
| [`unaccent`](https://www.postgresql.org/docs/current/unaccent.html) | Text search dictionary that removes accents |
| [`unit`](https://github.com/df7cb/postgresql-unit) | SI units |
| [`uuid-ossp`](https://www.postgresql.org/docs/current/uuid-ossp.html) | Use to generate UUIDs |

In this article...

- [Install, Upgrade, or Disable Extensions](https://docs.digitalocean.com/products/databases/postgresql/details/supported-extensions/#install-upgrade-or-disable-extensions)
- [Supported Extensions](https://docs.digitalocean.com/products/databases/postgresql/details/supported-extensions/#supported-extensions)

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