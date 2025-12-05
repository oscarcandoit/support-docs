---
url: "https://supabase.com/docs/guides/storage/analytics/query-with-postgres"
title: "Query with PostgreSQL | Supabase Docs"
---

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

Main menu

[Storage](https://supabase.com/docs/guides/storage)

[Overview](https://supabase.com/docs/guides/storage)

File Buckets[Quickstart](https://supabase.com/docs/guides/storage/quickstart)
[Fundamentals](https://supabase.com/docs/guides/storage/buckets/fundamentals)
[Creating Buckets](https://supabase.com/docs/guides/storage/buckets/creating-buckets)

Security

Uploads

Serving

Management

S3

CDN

Debugging

Schema

Going to production

[Pricing](https://supabase.com/docs/guides/storage/pricing)

Analytics Buckets[Introduction](https://supabase.com/docs/guides/storage/analytics/introduction)
[Creating Buckets](https://supabase.com/docs/guides/storage/analytics/creating-analytics-buckets)
[Iceberg Catalog](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket)
[Realtime Data-Sync](https://supabase.com/docs/guides/storage/analytics/replication)
[Query with Postgres](https://supabase.com/docs/guides/storage/analytics/query-with-postgres)

Examples

[Limits](https://supabase.com/docs/guides/storage/analytics/limits)
[Pricing](https://supabase.com/docs/guides/storage/analytics/pricing)

Vector Buckets[Introduction](https://supabase.com/docs/guides/storage/vector/introduction)
[Creating Buckets](https://supabase.com/docs/guides/storage/vector/creating-vector-buckets)
[Working with Indexes](https://supabase.com/docs/guides/storage/vector/working-with-indexes)
[Storing Vectors](https://supabase.com/docs/guides/storage/vector/storing-vectors)
[Querying Vectors](https://supabase.com/docs/guides/storage/vector/querying-vectors)
[Limits](https://supabase.com/docs/guides/storage/vector/limits)

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

Storage

1. [Storage](https://supabase.com/docs/guides/storage)
3. Analytics Buckets
5. [Query with Postgres](https://supabase.com/docs/guides/storage/analytics/query-with-postgres)

# Query with PostgreSQL

## Query analytics bucket data directly from PostgreSQL using SQL.

* * *

Once your data flows into an analytics bucket—either via the [Replication Pipeline](https://supabase.com/docs/guides/storage/analytics/replication) or custom pipelines—you can query it directly from Postgres using standard SQL.

This is made possible by the [Iceberg Foreign Data Wrapper](https://supabase.com/docs/guides/database/extensions/wrappers/iceberg), which creates a bridge between your Postgres database and Iceberg tables.

## Setup overview [\#](https://supabase.com/docs/guides/storage/analytics/query-with-postgres\#setup-overview)

You have two options to enable querying:

1. **Dashboard UI** (recommended) - Streamlined setup through the Supabase Dashboard
2. **Manual installation** \- Install the wrapper using SQL and configuration

## Installing via Dashboard UI [\#](https://supabase.com/docs/guides/storage/analytics/query-with-postgres\#installing-via-dashboard-ui)

The dashboard provides the easiest setup experience:

1. Navigate to your **Analytics Bucket** page in the Supabase Dashboard.
2. Locate the namespace you want to query and click **Query with Postgres**.

![Query with PostgreSQL button on analytics bucket page](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fstorage%2Fquery-analytics-with-postgres.png&w=3840&q=75)

3. Enter the **Postgres schema** where you want to create the foreign tables.

![Select destination PostgreSQL schema](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fstorage%2Fquery-analytics-schema-name.png&w=3840&q=75)

4. Click **Connect**. The wrapper is now configured.

## Querying your data [\#](https://supabase.com/docs/guides/storage/analytics/query-with-postgres\#querying-your-data)

Once the foreign data wrapper is installed, you can query your Iceberg tables using standard SQL:

```
1
2
3

select *from schema_name.table_namelimit 100;
```

### Common query examples [\#](https://supabase.com/docs/guides/storage/analytics/query-with-postgres\#common-query-examples)

Get the latest events:

```
1
2
3
4

select event_id, event_name, event_timestampfrom analytics.eventsorder by event_timestamp desclimit 1000;
```

Join with transactional data:

```
1
2
3
4
5
6
7
8

SELECT  e.event_id,  e.event_name,  u.user_emailFROM analytics.events eJOIN public.users u ON e.user_id = u.idWHERE e.event_timestamp > NOW() - INTERVAL '7 days'LIMIT 100;
```

## Manual installation [\#](https://supabase.com/docs/guides/storage/analytics/query-with-postgres\#manual-installation)

For advanced use cases, you can manually install and configure the Iceberg Foreign Data Wrapper. See the [Iceberg Foreign Data Wrapper documentation](https://supabase.com/docs/guides/database/extensions/wrappers/iceberg) for detailed instructions.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/analytics/query-with-postgres.mdx)

### Is this helpful?

NoYes

### On this page

[Setup overview](https://supabase.com/docs/guides/storage/analytics/query-with-postgres#setup-overview) [Installing via Dashboard UI](https://supabase.com/docs/guides/storage/analytics/query-with-postgres#installing-via-dashboard-ui) [Querying your data](https://supabase.com/docs/guides/storage/analytics/query-with-postgres#querying-your-data) [Common query examples](https://supabase.com/docs/guides/storage/analytics/query-with-postgres#common-query-examples) [Manual installation](https://supabase.com/docs/guides/storage/analytics/query-with-postgres#manual-installation)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)