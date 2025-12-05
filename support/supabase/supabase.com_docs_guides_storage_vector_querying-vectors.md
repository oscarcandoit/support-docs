---
url: "https://supabase.com/docs/guides/storage/vector/querying-vectors"
title: "Querying Vectors | Supabase Docs"
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
5. [Querying Vectors](https://supabase.com/docs/guides/storage/vector/querying-vectors)

# Querying Vectors

## Perform similarity search and retrieve vectors using JavaScript SDK or PostgreSQL.

* * *

##### This feature is in alpha

Expect rapid changes, limited features, and possible breaking updates. [Share feedback](https://github.com/orgs/supabase/discussions/40116) as we refine the experience and expand access.

Vector similarity search finds vectors most similar to a query vector using distance metrics. You can query vectors using the JavaScript SDK or directly from Postgres using SQL.

## Basic similarity search [\#](https://supabase.com/docs/guides/storage/vector/querying-vectors\#basic-similarity-search)

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

import { createClient } from '@supabase/supabase-js'const supabase = createClient('https://your-project.supabase.co', 'your-service-key')const index = supabase.storage.vectors.from('embeddings').index('documents-openai')// Query with a vector embeddingconst { data, error } = await index.queryVectors({  queryVector: {    float32: [0.1, 0.2, 0.3 /* ... embedding of 1536 dimensions ... */],  },  topK: 5,  returnDistance: true,  returnMetadata: true,})if (error) {  console.error('Query failed:', error)} else {  // Results are ranked by similarity (lowest distance = most similar)  data.vectors.forEach((result, rank) => {    console.log(`${rank + 1}. ${result.metadata?.title}`)    console.log(`   Similarity score: ${result.distance.toFixed(4)}`)  })}
```

## Semantic search [\#](https://supabase.com/docs/guides/storage/vector/querying-vectors\#semantic-search)

Find documents similar to a query by embedding the query text:

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

import { createClient } from '@supabase/supabase-js'import OpenAI from 'openai'const supabase = createClient(...)const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })async function semanticSearch(query, topK = 5) {  // Embed the query  const queryEmbedding = await openai.embeddings.create({    model: 'text-embedding-3-small',    input: query  })  const queryVector = queryEmbedding.data[0].embedding  // Search for similar vectors  const { data, error } = await supabase.storage.vectors    .from('embeddings')    .index('documents-openai')    .queryVectors({      queryVector: { float32: queryVector },      topK,      returnDistance: true,      returnMetadata: true    })  if (error) {    throw error  }  return data.vectors.map((result) => ({    id: result.key,    title: result.metadata?.title,    similarity: 1 - result.distance, // Convert distance to similarity (0-1)    metadata: result.metadata  }))}// Usageconst results = await semanticSearch('How do I use vector search?')results.forEach((result) => {  console.log(`${result.title} (${(result.similarity * 100).toFixed(1)}% similar)`)})
```

## Filtered similarity search [\#](https://supabase.com/docs/guides/storage/vector/querying-vectors\#filtered-similarity-search)

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

const index = supabase.storage.vectors  .from('embeddings')  .index('documents-openai')// Search with metadata filterconst { data } = await index.queryVectors({  queryVector: { float32: [...embedding...] },  topK: 10,  filter: {    // Filter by metadata fields    category: 'electronics',    in_stock: true,    price: { $lte: 500 } // Less than or equal to 500  },  returnDistance: true,  returnMetadata: true})
```

## Retrieving specific vectors [\#](https://supabase.com/docs/guides/storage/vector/querying-vectors\#retrieving-specific-vectors)

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

const index = supabase.storage.vectors.from('embeddings').index('documents-openai')const { data, error } = await index.getVectors({  keys: ['doc-1', 'doc-2', 'doc-3'],  returnData: true,  returnMetadata: true,})if (!error) {  data.vectors.forEach((vector) => {    console.log(`${vector.key}: ${vector.metadata?.title}`)  })}
```

## Listing vectors [\#](https://supabase.com/docs/guides/storage/vector/querying-vectors\#listing-vectors)

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

const index = supabase.storage.vectors.from('embeddings').index('documents-openai')let nextToken = undefinedlet pageCount = 0do {  const { data, error } = await index.listVectors({    maxResults: 100,    nextToken,    returnData: false, // Don't return embeddings for faster response    returnMetadata: true,  })  if (error) break  pageCount++  console.log(`Page ${pageCount}: ${data.vectors.length} vectors`)  data.vectors.forEach((vector) => {    console.log(`  - ${vector.key}: ${vector.metadata?.title}`)  })  nextToken = data.nextToken} while (nextToken)
```

## Hybrid search: Vectors + relational data [\#](https://supabase.com/docs/guides/storage/vector/querying-vectors\#hybrid-search-vectors--relational-data)

Combine similarity search with SQL filtering and joins:

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

async function hybridSearch(queryVector, filters) {  const index = supabase.storage.vectors.from('embeddings').index('documents-openai')  // Get similar vectors with filters  const { data: vectorResults } = await index.queryVectors({    queryVector: { float32: queryVector },    topK: 100,    filter: filters,    returnDistance: true,    returnMetadata: true,  })  // Get additional details from relational database  const { data: details } = await supabase    .from('documents')    .select('*')    .in(      'id',      vectorResults.vectors.map((v) => v.metadata?.doc_id)    )  // Merge results  return vectorResults.vectors.map((vector) => {    const detail = details?.find((d) => d.id === vector.metadata?.doc_id)    return {      ...vector,      ...detail,    }  })}
```

## Real-world examples [\#](https://supabase.com/docs/guides/storage/vector/querying-vectors\#real-world-examples)

### RAG (retrieval-augmented generation) [\#](https://supabase.com/docs/guides/storage/vector/querying-vectors\#rag-retrieval-augmented-generation)

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

import OpenAI from 'openai'import { createClient } from '@supabase/supabase-js'async function retrieveContextForLLM(userQuery) {  const supabase = createClient(...)  const openai = new OpenAI()  // 1. Embed the user query  const queryEmbedding = await openai.embeddings.create({    model: 'text-embedding-3-small',    input: userQuery  })  // 2. Retrieve relevant documents  const { data: vectorResults } = await supabase.storage.vectors    .from('embeddings')    .index('documents-openai')    .queryVectors({      queryVector: { float32: queryEmbedding.data[0].embedding },      topK: 5,      returnMetadata: true    })  // 3. Use vectors to augment LLM prompt  const context = vectorResults.vectors    .map(v => v.metadata?.content || '')    .join('\n\n')  const response = await openai.chat.completions.create({    model: 'gpt-4',    messages: [      {        role: 'system',        content: `Use the following context to answer the user's question:\n\n${context}`      },      {        role: 'user',        content: userQuery      }    ]  })  return response.choices[0].message.content}
```

### Product recommendations [\#](https://supabase.com/docs/guides/storage/vector/querying-vectors\#product-recommendations)

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

async function recommendProducts(userEmbedding, topK = 5) {  const supabase = createClient(...)  // Find similar products  const { data } = await supabase.storage.vectors    .from('embeddings')    .index('products-openai')    .queryVectors({      queryVector: { float32: userEmbedding },      topK,      filter: {        in_stock: true      },      returnMetadata: true    })  return data.vectors.map((result) => ({    id: result.metadata?.product_id,    name: result.metadata?.name,    price: result.metadata?.price,    similarity: 1 - result.distance  }))}
```

### Filtering before similarity search [\#](https://supabase.com/docs/guides/storage/vector/querying-vectors\#filtering-before-similarity-search)

```
1
2
3
4
5
6
7
8

// Use metadata filters to reduce search scopeconst { data } = await index.queryVectors({  queryVector,  topK: 100,  filter: {    category: 'electronics', // Pre-filter by category  },})
```

## Next steps [\#](https://supabase.com/docs/guides/storage/vector/querying-vectors\#next-steps)

- [Store vectors](https://supabase.com/docs/guides/storage/vector/storing-vectors)
- [Work with vector indexes](https://supabase.com/docs/guides/storage/vector/working-with-indexes)
- [Explore vector bucket limits](https://supabase.com/docs/guides/storage/vector/limits)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/vector/querying-vectors.mdx)

### Is this helpful?

NoYes

### On this page

[Basic similarity search](https://supabase.com/docs/guides/storage/vector/querying-vectors#basic-similarity-search) [Semantic search](https://supabase.com/docs/guides/storage/vector/querying-vectors#semantic-search) [Filtered similarity search](https://supabase.com/docs/guides/storage/vector/querying-vectors#filtered-similarity-search) [Retrieving specific vectors](https://supabase.com/docs/guides/storage/vector/querying-vectors#retrieving-specific-vectors) [Listing vectors](https://supabase.com/docs/guides/storage/vector/querying-vectors#listing-vectors) [Hybrid search: Vectors + relational data](https://supabase.com/docs/guides/storage/vector/querying-vectors#hybrid-search-vectors--relational-data) [Real-world examples](https://supabase.com/docs/guides/storage/vector/querying-vectors#real-world-examples) [RAG (retrieval-augmented generation)](https://supabase.com/docs/guides/storage/vector/querying-vectors#rag-retrieval-augmented-generation) [Product recommendations](https://supabase.com/docs/guides/storage/vector/querying-vectors#product-recommendations) [Filtering before similarity search](https://supabase.com/docs/guides/storage/vector/querying-vectors#filtering-before-similarity-search) [Next steps](https://supabase.com/docs/guides/storage/vector/querying-vectors#next-steps)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)