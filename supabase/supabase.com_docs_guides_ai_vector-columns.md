---
url: "https://supabase.com/docs/guides/ai/vector-columns"
title: "Vector columns | Supabase Docs"
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

[AI & Vectors](https://supabase.com/docs/guides/ai)

[Overview](https://supabase.com/docs/guides/ai)

[Concepts](https://supabase.com/docs/guides/ai/concepts)

[Structured & unstructured](https://supabase.com/docs/guides/ai/structured-unstructured)

Learn[Vector columns](https://supabase.com/docs/guides/ai/vector-columns)

Vector indexes

[Automatic embeddings](https://supabase.com/docs/guides/ai/automatic-embeddings)
[Engineering for scale](https://supabase.com/docs/guides/ai/engineering-for-scale)
[Choosing Compute Add-on](https://supabase.com/docs/guides/ai/choosing-compute-addon)
[Going to Production](https://supabase.com/docs/guides/ai/going-to-prod)
[RAG with Permissions](https://supabase.com/docs/guides/ai/rag-with-permissions)

Search[Semantic search](https://supabase.com/docs/guides/ai/semantic-search)
[Keyword search](https://supabase.com/docs/guides/ai/keyword-search)
[Hybrid search](https://supabase.com/docs/guides/ai/hybrid-search)

JavaScript Examples[OpenAI completions using Edge Functions](https://supabase.com/docs/guides/ai/examples/openai)
[Generate image captions using Hugging Face](https://supabase.com/docs/guides/ai/examples/huggingface-image-captioning)
[Generate Embeddings](https://supabase.com/docs/guides/ai/quickstarts/generate-text-embeddings)
[Adding generative Q&A to your documentation](https://supabase.com/docs/guides/ai/examples/headless-vector-search)
[Adding generative Q&A to your Next.js site](https://supabase.com/docs/guides/ai/examples/nextjs-vector-search)

Python Client[Choosing a Client](https://supabase.com/docs/guides/ai/python-clients)
[API](https://supabase.com/docs/guides/ai/python/api)
[Collections](https://supabase.com/docs/guides/ai/python/collections)
[Indexes](https://supabase.com/docs/guides/ai/python/indexes)
[Metadata](https://supabase.com/docs/guides/ai/python/metadata)

Python Examples[Developing locally with Vecs](https://supabase.com/docs/guides/ai/vecs-python-client)
[Creating and managing collections](https://supabase.com/docs/guides/ai/quickstarts/hello-world)
[Text Deduplication](https://supabase.com/docs/guides/ai/quickstarts/text-deduplication)
[Face similarity search](https://supabase.com/docs/guides/ai/quickstarts/face-similarity)
[Image search with OpenAI CLIP](https://supabase.com/docs/guides/ai/examples/image-search-openai-clip)
[Semantic search with Amazon Titan](https://supabase.com/docs/guides/ai/examples/semantic-image-search-amazon-titan)
[Building ChatGPT Plugins](https://supabase.com/docs/guides/ai/examples/building-chatgpt-plugins)

Third-Party Tools[LangChain](https://supabase.com/docs/guides/ai/langchain)
[Hugging Face](https://supabase.com/docs/guides/ai/hugging-face)
[Google Colab](https://supabase.com/docs/guides/ai/google-colab)
[LlamaIndex](https://supabase.com/docs/guides/ai/integrations/llamaindex)
[Roboflow](https://supabase.com/docs/guides/ai/integrations/roboflow)
[Amazon Bedrock](https://supabase.com/docs/guides/ai/integrations/amazon-bedrock)
[Mixpeek](https://supabase.com/docs/guides/ai/examples/mixpeek-video-search)

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

AI & Vectors

1. [AI & Vectors](https://supabase.com/docs/guides/ai)
3. Learn
5. [Vector columns](https://supabase.com/docs/guides/ai/vector-columns)

# Vector columns

* * *

Supabase offers a number of different ways to store and query vectors within Postgres. The SQL included in this guide is applicable for clients in all programming languages. If you are a Python user see your [Python client options](https://supabase.com/docs/guides/ai/python-clients) after reading the `Learn` section.

Vectors in Supabase are enabled via [pgvector](https://github.com/pgvector/pgvector/), a Postgres extension for storing and querying vectors in Postgres. It can be used to store [embeddings](https://supabase.com/docs/guides/ai/concepts#what-are-embeddings).

## Usage [\#](https://supabase.com/docs/guides/ai/vector-columns\#usage)

### Enable the extension [\#](https://supabase.com/docs/guides/ai/vector-columns\#enable-the-extension)

DashboardSQL

1. Go to the [Database](https://supabase.com/dashboard/project/_/database/tables) page in the Dashboard.
2. Click on **Extensions** in the sidebar.
3. Search for "vector" and enable the extension.

### Create a table to store vectors [\#](https://supabase.com/docs/guides/ai/vector-columns\#create-a-table-to-store-vectors)

After enabling the `vector` extension, you will get access to a new data type called `vector`. The size of the vector (indicated in parenthesis) represents the number of dimensions stored in that vector.

```
1
2
3
4
5
6

create table documents (  id serial primary key,  title text not null,  body text not null,  embedding extensions.vector(384));
```

In the above SQL snippet, we create a `documents` table with a column called `embedding` (note this is just a regular Postgres column - you can name it whatever you like). We give the `embedding` column a `vector` data type with 384 dimensions. Change this to the number of dimensions produced by your embedding model. For example, if you are [generating embeddings](https://supabase.com/docs/guides/ai/quickstarts/generate-text-embeddings) using the open source [`gte-small`](https://huggingface.co/Supabase/gte-small) model, you would set this number to 384 since that model produces 384 dimensions.

In general, embeddings with fewer dimensions perform best. See our [analysis on fewer dimensions in pgvector](https://supabase.com/blog/fewer-dimensions-are-better-pgvector).

### Storing a vector / embedding [\#](https://supabase.com/docs/guides/ai/vector-columns\#storing-a-vector--embedding)

In this example we'll generate a vector using Transformers.js, then store it in the database using the Supabase JavaScript client.

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

import { pipeline } from '@xenova/transformers'const generateEmbedding = await pipeline('feature-extraction', 'Supabase/gte-small')const title = 'First post!'const body = 'Hello world!'// Generate a vector using Transformers.jsconst output = await generateEmbedding(body, {  pooling: 'mean',  normalize: true,})// Extract the embedding outputconst embedding = Array.from(output.data)// Store the vector in Postgresconst { data, error } = await supabase.from('documents').insert({  title,  body,  embedding,})
```

This example uses the JavaScript Supabase client, but you can modify it to work with any [supported language library](https://supabase.com/docs#client-libraries).

### Querying a vector / embedding [\#](https://supabase.com/docs/guides/ai/vector-columns\#querying-a-vector--embedding)

Similarity search is the most common use case for vectors. `pgvector` support 3 new operators for computing distance:

| Operator | Description |
| --- | --- |
| `<->` | Euclidean distance |
| `<#>` | negative inner product |
| `<=>` | cosine distance |

Choosing the right operator depends on your needs. Dot product tends to be the fastest if your vectors are normalized. For more information on how embeddings work and how they relate to each other, see [What are Embeddings?](https://supabase.com/docs/guides/ai/concepts#what-are-embeddings).

Supabase client libraries like `supabase-js` connect to your Postgres instance via [PostgREST](https://supabase.com/docs/guides/getting-started/architecture#postgrest-api). PostgREST does not currently support `pgvector` similarity operators, so we'll need to wrap our query in a Postgres function and call it via the `rpc()` method:

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

create or replace function match_documents (  query_embedding extensions.vector(384),  match_threshold float,  match_count int)returns table (  id bigint,  title text,  body text,  similarity float)language sql stableas $$  select    documents.id,    documents.title,    documents.body,    1 - (documents.embedding <=> query_embedding) as similarity  from documents  where 1 - (documents.embedding <=> query_embedding) > match_threshold  order by (documents.embedding <=> query_embedding) asc  limit match_count;$$;
```

This function takes a `query_embedding` argument and compares it to all other embeddings in the `documents` table. Each comparison returns a similarity score. If the similarity is greater than the `match_threshold` argument, it is returned. The number of rows returned is limited by the `match_count` argument.

Feel free to modify this method to fit the needs of your application. The `match_threshold` ensures that only documents that have a minimum similarity to the `query_embedding` are returned. Without this, you may end up returning documents that subjectively don't match. This value will vary for each application - you will need to perform your own testing to determine the threshold that makes sense for your app.

If you index your vector column, ensure that the `order by` sorts by the distance function directly (rather than sorting by the calculated `similarity` column, which may lead to the index being ignored and poor performance).

To execute the function from your client library, call `rpc()` with the name of your Postgres function:

```
1
2
3
4
5

const { data: documents } = await supabaseClient.rpc('match_documents', {  query_embedding: embedding, // Pass the embedding you want to compare  match_threshold: 0.78, // Choose an appropriate threshold for your data  match_count: 10, // Choose the number of matches})
```

In this example `embedding` would be another embedding you wish to compare against your table of pre-generated embedding documents. For example if you were building a search engine, every time the user submits their query you would first generate an embedding on the search query itself, then pass it into the above `rpc()` function to match.

Be sure to use embeddings produced from the same embedding model when calculating distance. Comparing embeddings from two different models will produce no meaningful result.

Vectors and embeddings can be used for much more than search. Learn more about embeddings at [What are Embeddings?](https://supabase.com/docs/guides/ai/concepts#what-are-embeddings).

### Indexes [\#](https://supabase.com/docs/guides/ai/vector-columns\#indexes)

Once your vector table starts to grow, you will likely want to add an index to speed up queries. See [Vector indexes](https://supabase.com/docs/guides/ai/vector-indexes) to learn how vector indexes work and how to create them.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/vector-columns.mdx)

### Is this helpful?

NoYes

### On this page

[Usage](https://supabase.com/docs/guides/ai/vector-columns#usage) [Enable the extension](https://supabase.com/docs/guides/ai/vector-columns#enable-the-extension) [Create a table to store vectors](https://supabase.com/docs/guides/ai/vector-columns#create-a-table-to-store-vectors) [Storing a vector / embedding](https://supabase.com/docs/guides/ai/vector-columns#storing-a-vector--embedding) [Querying a vector / embedding](https://supabase.com/docs/guides/ai/vector-columns#querying-a-vector--embedding) [Indexes](https://supabase.com/docs/guides/ai/vector-columns#indexes)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)