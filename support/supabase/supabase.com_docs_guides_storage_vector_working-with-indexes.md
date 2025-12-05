---
url: "https://supabase.com/docs/guides/storage/vector/working-with-indexes"
title: "Working with Vector Indexes | Supabase Docs"
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
5. [Working with Indexes](https://supabase.com/docs/guides/storage/vector/working-with-indexes)

# Working with Vector Indexes

## Create, manage, and optimize vector indexes for efficient similarity search.

* * *

##### This feature is in alpha

Expect rapid changes, limited features, and possible breaking updates. [Share feedback](https://github.com/orgs/supabase/discussions/40116) as we refine the experience and expand access.

Vector indexes organize embeddings within a bucket with consistent dimensions and distance metrics. Each index defines how similarity searches are performed across your vectors.

## Understanding vector indexes [\#](https://supabase.com/docs/guides/storage/vector/working-with-indexes\#understanding-vector-indexes)

An index specifies:

- **Index Name** \- Unique identifier within the bucket
- **Dimension** \- Size of vector embeddings (e.g., 1536 for OpenAI)
- **Distance Metric** \- Similarity calculation method (cosine, euclidean, or L2)
- **Data Type** \- Vector format (currently `float32`)

Think of an index as a table in a traditional database. It has a schema (dimension) and a query strategy (distance metric).

## Creating indexes [\#](https://supabase.com/docs/guides/storage/vector/working-with-indexes\#creating-indexes)

### Via Dashboard [\#](https://supabase.com/docs/guides/storage/vector/working-with-indexes\#via-dashboard)

1. Open your vector bucket in the Supabase Dashboard.
2. Click **Create Index**.
3. Enter an index name (e.g., `documents-openai`).
4. Set the dimension matching your embeddings (e.g., `1536` for OpenAI's text-embedding-3-small).
5. Select the distance metric (`cosine`, `euclidean`, or `l2`).
6. Click **Create**.

### Via JavaScript SDK [\#](https://supabase.com/docs/guides/storage/vector/working-with-indexes\#via-javascript-sdk)

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
12
13
14
15
16
17
18
19

import { createClient } from '@supabase/supabase-js'const supabase = createClient('https://your-project.supabase.co', 'your-service-key')const bucket = supabase.storage.vectors.from('embeddings')// Create an indexconst { data, error } = await bucket.createIndex({  indexName: 'documents-openai',  dataType: 'float32',  dimension: 1536,  distanceMetric: 'cosine',})if (error) {  console.error('Error creating index:', error)} else {  console.log('Index created:', data)}
```

### Choosing the right metric [\#](https://supabase.com/docs/guides/storage/vector/working-with-indexes\#choosing-the-right-metric)

Most modern embedding models work best with **cosine** distance:

- **OpenAI** (text-embedding-3-small, text-embedding-3-large): Cosine
- **Cohere** (embed-english-v3.0): Cosine
- **Hugging Face** (sentence-transformers): Cosine
- **Google** (text-embedding-004): Cosine
- **Llama 2** embeddings: Cosine or L2

**Tip**: Check your embedding model's documentation for the recommended distance metric.

**Important**: Creating an index with incorrect dimensions will cause insert and query operations to fail.

## Managing multiple indexes [\#](https://supabase.com/docs/guides/storage/vector/working-with-indexes\#managing-multiple-indexes)

Create multiple indexes for different use cases or embedding models:

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
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29

const bucket = supabase.storage.vectors.from('embeddings')// Index for OpenAI embeddingsawait bucket.createIndex({  indexName: 'documents-openai',  dimension: 1536,  distanceMetric: 'cosine',  dataType: 'float32',})// Index for Cohere embeddingsawait bucket.createIndex({  indexName: 'documents-cohere',  dimension: 1024,  distanceMetric: 'cosine',  dataType: 'float32',})// Index for different use caseawait bucket.createIndex({  indexName: 'images-openai',  dimension: 1536,  distanceMetric: 'cosine',  dataType: 'float32',})// List all indexesconst { data: indexes } = await bucket.listIndexes()console.log('All indexes:', indexes)
```

### Use cases for multiple indexes [\#](https://supabase.com/docs/guides/storage/vector/working-with-indexes\#use-cases-for-multiple-indexes)

- **Different embedding models** \- Store vectors from OpenAI, Cohere, and local models separately
- **Different domains** \- Maintain separate indexes for documents, images, products, etc.
- **A/B testing** \- Compare different embedding models side-by-side
- **Multi-language** \- Keep language-specific embeddings separate

## Listing and inspecting indexes [\#](https://supabase.com/docs/guides/storage/vector/working-with-indexes\#listing-and-inspecting-indexes)

### List all indexes in a bucket [\#](https://supabase.com/docs/guides/storage/vector/working-with-indexes\#list-all-indexes-in-a-bucket)

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

const bucket = supabase.storage.vectors.from('embeddings')const { data: indexes, error } = await bucket.listIndexes()if (!error) {  indexes?.forEach((index) => {    console.log(`Index: ${index.name}`)    console.log(`  Dimension: ${index.dimension}`)    console.log(`  Distance: ${index.distanceMetric}`)  })}
```

### Get index details [\#](https://supabase.com/docs/guides/storage/vector/working-with-indexes\#get-index-details)

```
1
2
3
4
5
6
7
8

const { data: indexDetails, error } = await bucket.getIndex('documents-openai')if (!error && indexDetails) {  console.log(`Index: ${indexDetails.name}`)  console.log(`Created at: ${indexDetails.createdAt}`)  console.log(`Dimension: ${indexDetails.dimension}`)  console.log(`Distance metric: ${indexDetails.distanceMetric}`)}
```

## Deleting indexes [\#](https://supabase.com/docs/guides/storage/vector/working-with-indexes\#deleting-indexes)

Delete an index to free storage space:

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

const bucket = supabase.storage.vectors.from('embeddings')const { error } = await bucket.deleteIndex('documents-openai')if (error) {  console.error('Error deleting index:', error)} else {  console.log('Index deleted successfully')}
```

### Before deleting an index [\#](https://supabase.com/docs/guides/storage/vector/working-with-indexes\#before-deleting-an-index)

**Warning**: Deleting an index is permanent and cannot be undone.

- **Backup important data** \- Export vectors before deletion if needed
- **Update applications** \- Ensure no code references the deleted index
- **Check dependencies** \- Verify no active queries use the index
- **Plan the deletion** \- Do this during low-traffic periods

### Immutable properties [\#](https://supabase.com/docs/guides/storage/vector/working-with-indexes\#immutable-properties)

Once created, these properties **cannot be changed**:

- **Dimension** \- Must create new index with different dimension
- **Distance metric** \- Cannot change after creation
- **Data type** \- Currently only `float32` supported

### Optimizing index performance [\#](https://supabase.com/docs/guides/storage/vector/working-with-indexes\#optimizing-index-performance)

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
12
13
14
15
16
17
18
19
20
21
22

// Good - Appropriate batch sizeconst batch = vectors.slice(0, 250)await index.putVectors({ vectors: batch })// Good - Filter metadata before queryconst { data } = await index.queryVectors({  queryVector,  topK: 5,  filter: { category: 'electronics' },})// Avoid - Single vector insertsfor (const vector of vectors) {  await index.putVectors({ vectors: [vector] })}// Avoid - Returning unnecessary dataconst { data } = await index.queryVectors({  queryVector,  topK: 1000, // Too many results  returnData: true, // Include large embeddings})
```

## Next steps [\#](https://supabase.com/docs/guides/storage/vector/working-with-indexes\#next-steps)

- [Store vectors in indexes](https://supabase.com/docs/guides/storage/vector/storing-vectors)
- [Query vectors for similarity search](https://supabase.com/docs/guides/storage/vector/querying-vectors)
- [Understand vector bucket limits](https://supabase.com/docs/guides/storage/vector/limits)
- [Create vector buckets](https://supabase.com/docs/guides/storage/vector/creating-vector-buckets)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/vector/working-with-indexes.mdx)

### Is this helpful?

NoYes

### On this page

[Understanding vector indexes](https://supabase.com/docs/guides/storage/vector/working-with-indexes#understanding-vector-indexes) [Creating indexes](https://supabase.com/docs/guides/storage/vector/working-with-indexes#creating-indexes) [Via Dashboard](https://supabase.com/docs/guides/storage/vector/working-with-indexes#via-dashboard) [Via JavaScript SDK](https://supabase.com/docs/guides/storage/vector/working-with-indexes#via-javascript-sdk) [Choosing the right metric](https://supabase.com/docs/guides/storage/vector/working-with-indexes#choosing-the-right-metric) [Managing multiple indexes](https://supabase.com/docs/guides/storage/vector/working-with-indexes#managing-multiple-indexes) [Use cases for multiple indexes](https://supabase.com/docs/guides/storage/vector/working-with-indexes#use-cases-for-multiple-indexes) [Listing and inspecting indexes](https://supabase.com/docs/guides/storage/vector/working-with-indexes#listing-and-inspecting-indexes) [List all indexes in a bucket](https://supabase.com/docs/guides/storage/vector/working-with-indexes#list-all-indexes-in-a-bucket) [Get index details](https://supabase.com/docs/guides/storage/vector/working-with-indexes#get-index-details) [Deleting indexes](https://supabase.com/docs/guides/storage/vector/working-with-indexes#deleting-indexes) [Before deleting an index](https://supabase.com/docs/guides/storage/vector/working-with-indexes#before-deleting-an-index) [Immutable properties](https://supabase.com/docs/guides/storage/vector/working-with-indexes#immutable-properties) [Optimizing index performance](https://supabase.com/docs/guides/storage/vector/working-with-indexes#optimizing-index-performance) [Next steps](https://supabase.com/docs/guides/storage/vector/working-with-indexes#next-steps)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)