---
url: "https://supabase.com/docs/guides/storage/vector/storing-vectors"
title: "Storing Vectors | Supabase Docs"
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
5. [Storing Vectors](https://supabase.com/docs/guides/storage/vector/storing-vectors)

# Storing Vectors

## Insert and update vector embeddings with metadata using the JavaScript SDK or Postgres.

* * *

##### This feature is in alpha

Expect rapid changes, limited features, and possible breaking updates. [Share feedback](https://github.com/orgs/supabase/discussions/40116) as we refine the experience and expand access.

Once you've created a bucket and index, you can start storing vectors. Vectors can include optional metadata for filtering and enrichment during queries.

## Basic vector insertion [\#](https://supabase.com/docs/guides/storage/vector/storing-vectors\#basic-vector-insertion)

JavaScriptSQL (via S3 Vector Wrapper)

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
30
31
32
33
34
35
36
37
38
39

import { createClient } from '@supabase/supabase-js'const supabase = createClient('https://your-project.supabase.co', 'your-service-key')// Get bucket and indexconst bucket = supabase.storage.vectors.from('embeddings')const index = bucket.index('documents-openai')// Insert vectorsconst { error } = await index.putVectors({  vectors: [    {      key: 'doc-1',      data: {        float32: [0.1, 0.2, 0.3 /* ... rest of embedding ... */],      },      metadata: {        title: 'Getting Started with Vector Buckets',        source: 'documentation',      },    },    {      key: 'doc-2',      data: {        float32: [0.4, 0.5, 0.6 /* ... rest of embedding ... */],      },      metadata: {        title: 'Advanced Vector Search',        source: 'blog',      },    },  ],})if (error) {  console.error('Error storing vectors:', error)} else {  console.log('✓ Vectors stored successfully')}
```

## Storing vectors from Embeddings API [\#](https://supabase.com/docs/guides/storage/vector/storing-vectors\#storing-vectors-from-embeddings-api)

Generate embeddings using an LLM API and store them directly:

JavaScriptSQL (via S3 Vector Wrapper)

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
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53

import { createClient } from '@supabase/supabase-js'import OpenAI from 'openai'const supabase = createClient('https://your-project.supabase.co', 'your-service-key')const openai = new OpenAI({  apiKey: process.env.OPENAI_API_KEY,})// Documents to embed and storeconst documents = [  { id: '1', title: 'How to Train Your AI', content: 'Guide for training models...' },  { id: '2', title: 'Vector Search Best Practices', content: 'Tips for semantic search...' },  {    id: '3',    title: 'Building RAG Systems',    content: 'Implementing retrieval-augmented generation...',  },]// Generate embeddingsconst embeddings = await openai.embeddings.create({  model: 'text-embedding-3-small',  input: documents.map((doc) => doc.content),})// Prepare vectors for storageconst vectors = documents.map((doc, index) => ({  key: doc.id,  data: {    float32: embeddings.data[index].embedding,  },  metadata: {    title: doc.title,    source: 'knowledge_base',    created_at: new Date().toISOString(),  },}))// Store vectors in batches (max 500 per request)const bucket = supabase.storage.vectors.from('embeddings')const vectorIndex = bucket.index('documents-openai')for (let i = 0; i < vectors.length; i += 500) {  const batch = vectors.slice(i, i + 500)  const { error } = await vectorIndex.putVectors({ vectors: batch })  if (error) {    console.error(`Error storing batch ${i / 500 + 1}:`, error)  } else {    console.log(`✓ Stored batch ${i / 500 + 1} (${batch.length} vectors)`)  }}
```

## Updating vectors [\#](https://supabase.com/docs/guides/storage/vector/storing-vectors\#updating-vectors)

JavaScriptSQL (via S3 Vector Wrapper)

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

const index = bucket.index('documents-openai')// Update a vector (same key)const { error } = await index.putVectors({  vectors: [    {      key: 'doc-1',      data: {        float32: [0.15, 0.25, 0.35 /* ... updated embedding ... */],      },      metadata: {        title: 'Getting Started with Vector Buckets - Updated',        updated_at: new Date().toISOString(),      },    },  ],})if (!error) {  console.log('✓ Vector updated successfully')}
```

## Deleting vectors [\#](https://supabase.com/docs/guides/storage/vector/storing-vectors\#deleting-vectors)

JavaScriptSQL (via S3 Vector Wrapper)

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

const index = bucket.index('documents-openai')// Delete specific vectorsconst { error } = await index.deleteVectors({  keys: ['doc-1', 'doc-2'],})if (!error) {  console.log('✓ Vectors deleted successfully')}
```

## Metadata best practices [\#](https://supabase.com/docs/guides/storage/vector/storing-vectors\#metadata-best-practices)

Metadata makes vectors more useful by enabling filtering and context:

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

const vectors = [  {    key: 'product-001',    data: { float32: [...] },    metadata: {      product_id: 'prod-001',      category: 'electronics',      price: 299.99,      in_stock: true,      tags: ['laptop', 'portable'],      description: 'High-performance ultrabook'    }  },  {    key: 'product-002',    data: { float32: [...] },    metadata: {      product_id: 'prod-002',      category: 'electronics',      price: 99.99,      in_stock: true,      tags: ['headphones', 'wireless'],      description: 'Noise-cancelling wireless headphones'    }  }]const { error } = await index.putVectors({ vectors })
```

### Metadata field guidelines [\#](https://supabase.com/docs/guides/storage/vector/storing-vectors\#metadata-field-guidelines)

- **Keep it lightweight** \- Metadata is returned with query results, so large values increase response size
- **Use consistent types** \- Store the same field with consistent data types across vectors
- **Index key fields** \- Mark fields you'll filter by to improve query performance
- **Avoid nested objects** \- While supported, flat structures are easier to filter

## Batch processing large datasets [\#](https://supabase.com/docs/guides/storage/vector/storing-vectors\#batch-processing-large-datasets)

For storing large numbers of vectors efficiently:

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
30
31
32
33
34
35
36
37
38
39
40
41
42

import { createClient } from '@supabase/supabase-js'import fs from 'fs'const supabase = createClient(...)const index = supabase.storage.vectors  .from('embeddings')  .index('documents-openai')// Read embeddings from fileconst embeddingsFile = fs.readFileSync('embeddings.jsonl', 'utf-8')const lines = embeddingsFile.split('\n').filter(line => line.trim())const vectors = lines.map((line, idx) => {  const { key, embedding, metadata } = JSON.parse(line)  return {    key,    data: { float32: embedding },    metadata  }})// Process in batchesconst BATCH_SIZE = 500let processed = 0for (let i = 0; i < vectors.length; i += BATCH_SIZE) {  const batch = vectors.slice(i, i + BATCH_SIZE)  try {    const { error } = await index.putVectors({ vectors: batch })    if (error) throw error    processed += batch.length    console.log(`Progress: ${processed}/${vectors.length}`)  } catch (error) {    console.error(`Batch failed at offset ${i}:`, error)    // Optionally implement retry logic  }}console.log('✓ All vectors stored successfully')
```

## Performance optimization [\#](https://supabase.com/docs/guides/storage/vector/storing-vectors\#performance-optimization)

### Batch operations [\#](https://supabase.com/docs/guides/storage/vector/storing-vectors\#batch-operations)

Always use batch operations for better performance:

```
1
2
3
4
5
6
7

// ❌ Inefficient - Multiple requestsfor (const vector of vectors) {  await index.putVectors({ vectors: [vector] })}// ✅ Efficient - Single batch operationawait index.putVectors({ vectors })
```

### Metadata considerations [\#](https://supabase.com/docs/guides/storage/vector/storing-vectors\#metadata-considerations)

Keep metadata concise:

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

// ❌ Large metadatametadata: {  full_document_text: 'Very long document content...',  detailed_analysis: { /* large object */ }}// ✅ Lean metadatametadata: {  doc_id: 'doc-123',  category: 'news',  summary: 'Brief summary'}
```

## Next steps [\#](https://supabase.com/docs/guides/storage/vector/storing-vectors\#next-steps)

- [Query vectors with similarity search](https://supabase.com/docs/guides/storage/vector/querying-vectors)
- [Work with vector indexes](https://supabase.com/docs/guides/storage/vector/working-with-indexes)
- [Explore vector bucket limits](https://supabase.com/docs/guides/storage/vector/limits)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/vector/storing-vectors.mdx)

### Is this helpful?

NoYes

### On this page

[Basic vector insertion](https://supabase.com/docs/guides/storage/vector/storing-vectors#basic-vector-insertion) [Storing vectors from Embeddings API](https://supabase.com/docs/guides/storage/vector/storing-vectors#storing-vectors-from-embeddings-api) [Updating vectors](https://supabase.com/docs/guides/storage/vector/storing-vectors#updating-vectors) [Deleting vectors](https://supabase.com/docs/guides/storage/vector/storing-vectors#deleting-vectors) [Metadata best practices](https://supabase.com/docs/guides/storage/vector/storing-vectors#metadata-best-practices) [Metadata field guidelines](https://supabase.com/docs/guides/storage/vector/storing-vectors#metadata-field-guidelines) [Batch processing large datasets](https://supabase.com/docs/guides/storage/vector/storing-vectors#batch-processing-large-datasets) [Performance optimization](https://supabase.com/docs/guides/storage/vector/storing-vectors#performance-optimization) [Batch operations](https://supabase.com/docs/guides/storage/vector/storing-vectors#batch-operations) [Metadata considerations](https://supabase.com/docs/guides/storage/vector/storing-vectors#metadata-considerations) [Next steps](https://supabase.com/docs/guides/storage/vector/storing-vectors#next-steps)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)