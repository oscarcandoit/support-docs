---
url: "https://supabase.com/docs/guides/storage/analytics/creating-analytics-buckets"
title: "Creating Analytics Buckets | Supabase Docs"
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
5. [Creating Buckets](https://supabase.com/docs/guides/storage/analytics/creating-analytics-buckets)

# Creating Analytics Buckets

## Set up your first analytics bucket using the SDK or dashboard.

* * *

This feature is in **Private Alpha**. API stability and backward compatibility are not guaranteed at this stage. Request access through this [form](https://forms.supabase.com/analytics-buckets).

Analytics buckets use [Apache Iceberg](https://iceberg.apache.org/), an open-table format for efficient management of large analytical datasets. You can interact with analytics buckets using tools such as [PyIceberg](https://py.iceberg.apache.org/), [Apache Spark](https://spark.apache.org/), or any client supporting the [Iceberg REST Catalog API](https://editor-next.swagger.io/?url=https://raw.githubusercontent.com/apache/iceberg/main/open-api/rest-catalog-open-api.yaml).

## Creating an Analytics bucket [\#](https://supabase.com/docs/guides/storage/analytics/creating-analytics-buckets\#creating-an-analytics-bucket)

You can create an analytics bucket using either the Supabase SDK or the Supabase Dashboard.

### Using the Supabase SDK [\#](https://supabase.com/docs/guides/storage/analytics/creating-analytics-buckets\#using-the-supabase-sdk)

```
1
2
3
4
5
6
7
8
9
10
11

import { createClient } from '@supabase/supabase-js'const supabase = createClient('https://your-project.supabase.co', 'your-service-key')const { data, error } = await supabase.storage.analytics.createBucket('analytics-data')if (error) {  console.error('Failed to create analytics bucket:', error)} else {  console.log('Analytics bucket created:', data)}
```

### Using the Supabase Dashboard [\#](https://supabase.com/docs/guides/storage/analytics/creating-analytics-buckets\#using-the-supabase-dashboard)

1. Navigate to the **Storage** section in the Supabase Dashboard.
2. Click **Create Bucket**.
3. Enter a name for your bucket (e.g., `my-analytics-bucket`).
4. Select **Analytics Bucket** as the bucket type.
5. Click **Create**.

![Create Analytics Bucket in Dashboard](https://supabase.com/docs/img/storage/iceberg-bucket.png)

## Next steps [\#](https://supabase.com/docs/guides/storage/analytics/creating-analytics-buckets\#next-steps)

Once you've created your analytics bucket, you can:

- [Connect with Iceberg clients](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket) like PyIceberg or Apache Spark
- [Set up real-time replication](https://supabase.com/docs/guides/storage/analytics/replication) from your Postgres database
- [Query data with Postgres](https://supabase.com/docs/guides/storage/analytics/query-with-postgres) using the Iceberg Foreign Data Wrapper

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/analytics/creating-analytics-buckets.mdx)

### Is this helpful?

NoYes

### On this page

[Creating an Analytics bucket](https://supabase.com/docs/guides/storage/analytics/creating-analytics-buckets#creating-an-analytics-bucket) [Using the Supabase SDK](https://supabase.com/docs/guides/storage/analytics/creating-analytics-buckets#using-the-supabase-sdk) [Using the Supabase Dashboard](https://supabase.com/docs/guides/storage/analytics/creating-analytics-buckets#using-the-supabase-dashboard) [Next steps](https://supabase.com/docs/guides/storage/analytics/creating-analytics-buckets#next-steps)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)