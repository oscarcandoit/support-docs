---
url: "https://supabase.com/docs/guides/storage/vector/introduction"
title: "Vector Buckets | Supabase Docs"
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
3. [Vector Buckets](https://supabase.com/docs/guides/storage/vector)
5. [Introduction](https://supabase.com/docs/guides/storage/vector/introduction)

# Vector Buckets

## Store, index, and query vector embeddings at scale with similarity search.

* * *

##### This feature is in alpha

Expect rapid changes, limited features, and possible breaking updates. [Share feedback](https://github.com/orgs/supabase/discussions/40116) as we refine the experience and expand access.

Vector buckets enable efficient storage and similarity search of vector embeddings. Built on S3-compatible storage, they provide high-performance semantic search capabilities for AI and machine learning applications.

## What are Vector buckets? [\#](https://supabase.com/docs/guides/storage/vector/introduction\#what-are-vector-buckets)

Vector buckets are specialized storage containers optimized for vector data. Unlike traditional databases optimized for transactional queries, vector buckets use specialized indexing and distance metrics to perform fast similarity searches across millions of embeddings.

Each vector bucket contains:

- **Indexes** \- Organized collections of vectors with consistent dimensions and distance metrics
- **Vectors** \- Embeddings with associated metadata for filtering and enrichment
- **Metadata** \- Additional context about vectors (text, tags, IDs, etc.)

## Key features [\#](https://supabase.com/docs/guides/storage/vector/introduction\#key-features)

- **Similarity Search** \- Find semantically similar vectors using cosine, euclidean, or L2 distance metrics
- **Metadata Filtering** \- Filter results by associated metadata before/after similarity search
- **Batch Operations** \- Insert, update, and query up to 500 vectors per request
- **Scalable Storage** \- Store millions of vectors in a single index
- **S3 Native** \- Built on proven S3 infrastructure for reliability and durability

## Ideal use cases [\#](https://supabase.com/docs/guides/storage/vector/introduction\#ideal-use-cases)

Vector buckets excel at:

- **Semantic Search** \- Find documents or images similar to a query
- **Recommendation Systems** \- Suggest products, content, or connections based on embeddings
- **Clustering & Anomaly Detection** \- Group similar items or identify outliers
- **Image Search** \- Retrieve visually similar images from large catalogs
- **RAG (Retrieval-Augmented Generation)** \- Find relevant context for LLM queries
- **Personalization** \- Recommend tailored content based on user embeddings

## How Vector buckets work [\#](https://supabase.com/docs/guides/storage/vector/introduction\#how-vector-buckets-work)

1. **Create a bucket** to organize your vector data
2. **Create indexes** within the bucket with specified dimensions and distance metrics
3. **Store vectors** with embeddings and optional metadata
4. **Query vectors** using similarity search to find nearest neighbors

The system automatically handles indexing and optimization, making searches fast and reliable even with millions of vectors.

## Next steps [\#](https://supabase.com/docs/guides/storage/vector/introduction\#next-steps)

Get started by learning how to [create vector buckets](https://supabase.com/docs/guides/storage/vector/creating-vector-buckets) or dive into [storing vectors](https://supabase.com/docs/guides/storage/vector/storing-vectors).

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/vector/introduction.mdx)

### Is this helpful?

NoYes

### On this page

[What are Vector buckets?](https://supabase.com/docs/guides/storage/vector/introduction#what-are-vector-buckets) [Key features](https://supabase.com/docs/guides/storage/vector/introduction#key-features) [Ideal use cases](https://supabase.com/docs/guides/storage/vector/introduction#ideal-use-cases) [How Vector buckets work](https://supabase.com/docs/guides/storage/vector/introduction#how-vector-buckets-work) [Next steps](https://supabase.com/docs/guides/storage/vector/introduction#next-steps)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)