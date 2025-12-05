---
url: "https://supabase.com/docs/guides/storage/analytics/introduction"
title: "Analytics Buckets | Supabase Docs"
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
5. [Introduction](https://supabase.com/docs/guides/storage/analytics/introduction)

# Analytics Buckets

## Store large datasets for analytics and reporting.

* * *

##### This feature is in alpha

Expect rapid changes, limited features, and possible breaking updates. [share feedback](https://github.com/orgs/supabase/discussions/40116) as we refine the experience and expand access.

Analytics buckets enable analytical workflows on large-scale datasets while keeping your primary database optimized for transactional operations.

## Why Analytics buckets? [\#](https://supabase.com/docs/guides/storage/analytics/introduction\#why-analytics-buckets)

Postgres tables are purpose-built for transactional workloads with frequent inserts, updates, deletes, and low-latency queries. Analytical workloads have fundamentally different requirements:

- Processing large volumes of historical data
- Running complex queries and aggregations
- Minimizing storage costs
- Preventing analytical queries from impacting production traffic

Analytics buckets address these requirements using [Apache Iceberg](https://iceberg.apache.org/), an open-table format specifically designed for efficient management of large analytical datasets.

## Ideal use cases [\#](https://supabase.com/docs/guides/storage/analytics/introduction\#ideal-use-cases)

Analytics buckets are perfect for:

- **Data warehousing and business intelligence** \- Build scalable data warehouses for BI tools
- **Historical data archiving** \- Retain large volumes of historical data cost-effectively
- **Periodically refreshed analytics** \- Maintain near real-time analytical views
- **Complex analytical queries** \- Execute sophisticated aggregations and joins over large datasets

By separating transactional and analytical workloads, Supabase lets you build scalable analytics pipelines without compromising your primary Postgres performance.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/analytics/introduction.mdx)

### Is this helpful?

NoYes

### On this page

[Why Analytics buckets?](https://supabase.com/docs/guides/storage/analytics/introduction#why-analytics-buckets) [Ideal use cases](https://supabase.com/docs/guides/storage/analytics/introduction#ideal-use-cases)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)