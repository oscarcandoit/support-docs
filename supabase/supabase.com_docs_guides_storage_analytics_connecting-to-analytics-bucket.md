---
url: "https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket"
title: "Iceberg Catalog | Supabase Docs"
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
5. [Iceberg Catalog](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket)

# Iceberg Catalog

* * *

##### This feature is in alpha

Expect rapid changes, limited features, and possible breaking updates. [share feedback](https://github.com/orgs/supabase/discussions/40116) as we refine the experience and expand access.

Analytics buckets require authentication with two distinct services:

## Architecture overview [\#](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket\#architecture-overview)

**Iceberg REST Catalog** serves as the metadata management system for your Iceberg tables. It enables Iceberg clients such as PyIceberg and Apache Spark to perform critical operations:

- Creating and managing tables and namespaces
- Tracking schemas and handling schema evolution
- Managing partitions and table snapshots
- Ensuring transactional consistency and isolation

The REST Catalog only stores metadata describing your data's structure, schema, and partitioning strategy—not the actual data itself.

**S3-Compatible Storage Endpoint** handles the actual data storage and retrieval. It's optimized for reading and writing large analytical datasets stored in Parquet format, separate from the metadata management layer.

## Authentication setup [\#](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket\#authentication-setup)

To connect to an analytics bucket, you need:

### 1\. S3 credentials [\#](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket\#1-s3-credentials)

Create S3 credentials through [**Project Settings > Storage**](https://supabase.com/dashboard/project/_/storage/settings). See the [S3 Authentication Guide](https://supabase.com/docs/guides/storage/s3/authentication) for detailed instructions.

You'll obtain:

- **Access Key ID**
- **Secret Access Key**
- **Region** (e.g., `us-east-1`)

### 2\. Supabase service key [\#](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket\#2-supabase-service-key)

Retrieve your Service Key from [**Project Settings > API**](https://supabase.com/dashboard/project/_/settings/api-keys). This key authenticates requests to the Iceberg REST Catalog.

### 3\. Project reference [\#](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket\#3-project-reference)

Your Supabase project reference is the subdomain in your project URL (e.g., `your-project-ref` in `https://your-project-ref.supabase.co`).

## Testing your connection [\#](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket\#testing-your-connection)

You can verify your setup by making a direct request to the Iceberg REST Catalog. Provide your Service Key as a Bearer token:

```
1
2
3
4

curl \  --request GET -sL \  --url 'https://<your-project-ref>.supabase.co/storage/v1/iceberg/v1/config?warehouse=<bucket-name>' \  --header 'Authorization: Bearer <your-service-key>'
```

A successful response returns the catalog configuration including warehouse location and settings.

## Next steps [\#](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket\#next-steps)

- [Connect with PyIceberg](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg)
- [Connect with Apache Spark](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark)
- [Query with Postgres](https://supabase.com/docs/guides/storage/analytics/query-with-postgres)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/analytics/connecting-to-analytics-bucket.mdx)

### Is this helpful?

NoYes

### On this page

[Architecture overview](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket#architecture-overview) [Authentication setup](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket#authentication-setup) [1\. S3 credentials](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket#1-s3-credentials) [2\. Supabase service key](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket#2-supabase-service-key) [3\. Project reference](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket#3-project-reference) [Testing your connection](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket#testing-your-connection) [Next steps](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket#next-steps)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)