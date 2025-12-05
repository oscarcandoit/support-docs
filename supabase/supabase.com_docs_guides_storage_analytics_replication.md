---
url: "https://supabase.com/docs/guides/storage/analytics/replication"
title: "Realtime Data Sync to Analytics Buckets | Supabase Docs"
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
5. [Realtime Data-Sync](https://supabase.com/docs/guides/storage/analytics/replication)

# Realtime Data Sync to Analytics Buckets

## Replicate your PostgreSQL data to analytics buckets in real-time.

* * *

##### This feature is in alpha

Expect rapid changes, limited features, and possible breaking updates. [Share feedback](https://github.com/orgs/supabase/discussions/40116) as the experience is refined and access is expanded.

By combining replication powered by [Supabase ETL](https://github.com/supabase/etl) with **Analytics Buckets**, you can build an end-to-end data warehouse solution that automatically syncs changes from your Postgres database to Iceberg tables.

This guide provides a quickstart for replicating to Analytics Buckets. For complete replication configuration including other destinations, see the [Replication Setup Guide](https://supabase.com/docs/guides/database/replication/replication-setup).

## How it works [\#](https://supabase.com/docs/guides/storage/analytics/replication\#how-it-works)

The replication pipeline captures changes (INSERT, UPDATE, DELETE) from your Postgres database in real-time using Postgres logical replication and writes them to your analytics bucket. This allows you to maintain an always-up-to-date data warehouse without impacting your production workloads.

## Setup steps [\#](https://supabase.com/docs/guides/storage/analytics/replication\#setup-steps)

### Step 1: Create an Analytics bucket [\#](https://supabase.com/docs/guides/storage/analytics/replication\#step-1-create-an-analytics-bucket)

First, create a new analytics bucket to store your replicated data:

1. Navigate to **Storage** in the Supabase Dashboard.
2. Click **Create Bucket**.
3. Enter a name (e.g., `my-warehouse`).
4. Select **Analytics Bucket** as the type.
5. Click **Create**.

![Creating a new analytics bucket](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fdatabase%2Freplication%2Freplication-iceberg-new-bucket.png&w=3840&q=75)

### Step 2: Create a publication [\#](https://supabase.com/docs/guides/storage/analytics/replication\#step-2-create-a-publication)

A publication defines which tables and change types will be replicated. Create one using SQL in the Supabase SQL Editor:

```
1
2
3

-- Create publication for tables you want to replicateCREATE PUBLICATION pub_warehouse  FOR TABLE users, orders, products;
```

This publication will track all changes (INSERT, UPDATE, DELETE) for the specified tables. For advanced publication options like column filtering and row predicates, see the [Replication Setup Guide](https://supabase.com/docs/guides/database/replication/replication-setup#advanced-publication-options).

### Step 3: Create the replication pipeline [\#](https://supabase.com/docs/guides/storage/analytics/replication\#step-3-create-the-replication-pipeline)

Now set up the pipeline to sync data to your analytics bucket:

1. Navigate to **Database > Replication** in the Supabase Dashboard.
2. Click **Create Pipeline**.
3. Select the **Publication** you created in Step 2.
4. Select your **Analytics Bucket** as the destination.
5. Configure any additional settings as needed.
6. Click **Create and Start**.

![Replication pipeline configuration](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fdatabase%2Freplication%2Freplication-iceberg-details.png&w=3840&q=75)

## Monitoring your pipeline [\#](https://supabase.com/docs/guides/storage/analytics/replication\#monitoring-your-pipeline)

Once started, you can monitor the pipeline status directly in the **Database > Replication** section:

- **Status** \- Shows if the pipeline is running, paused, or encountered errors
- **Sync Progress** \- View the number of records replicated
- **Logs** \- Check detailed logs for troubleshooting

Deleted tables are automatically recreated by the pipeline. To permanently delete a table, pause the pipeline first or remove it from the publication before deleting. See the [FAQ](https://supabase.com/docs/guides/database/replication/replication-faq#what-happens-if-i-delete-a-table-at-the-destination) for details.

## Next steps [\#](https://supabase.com/docs/guides/storage/analytics/replication\#next-steps)

Once data is flowing to your analytics bucket, you can:

- [Query with SQL via Postgres](https://supabase.com/docs/guides/storage/analytics/query-with-postgres)
- [Connect with PyIceberg](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg)
- [Analyze with Apache Spark](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark)

For detailed replication configuration and advanced topics:

- [Replication Setup Guide](https://supabase.com/docs/guides/database/replication/replication-setup) \- Complete replication configuration including BigQuery and other destinations
- [Replication Monitoring Guide](https://supabase.com/docs/guides/database/replication/replication-monitoring) \- Monitor replication pipeline status and health
- [Replication FAQ](https://supabase.com/docs/guides/database/replication/replication-faq) \- Common questions about replication

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/analytics/replication.mdx)

### Is this helpful?

NoYes

### On this page

[How it works](https://supabase.com/docs/guides/storage/analytics/replication#how-it-works) [Setup steps](https://supabase.com/docs/guides/storage/analytics/replication#setup-steps) [Step 1: Create an Analytics bucket](https://supabase.com/docs/guides/storage/analytics/replication#step-1-create-an-analytics-bucket) [Step 2: Create a publication](https://supabase.com/docs/guides/storage/analytics/replication#step-2-create-a-publication) [Step 3: Create the replication pipeline](https://supabase.com/docs/guides/storage/analytics/replication#step-3-create-the-replication-pipeline) [Monitoring your pipeline](https://supabase.com/docs/guides/storage/analytics/replication#monitoring-your-pipeline) [Next steps](https://supabase.com/docs/guides/storage/analytics/replication#next-steps)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)