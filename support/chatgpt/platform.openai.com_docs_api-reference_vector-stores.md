---
url: "https://platform.openai.com/docs/api-reference/vector-stores"
title: "Vector stores | OpenAI API Reference"
---

[DocsDocs](https://platform.openai.com/docs/guides/retrieval) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

Log in [Sign up](https://platform.openai.com/signup)

Search`` `K`

API Reference

[Introduction](https://platform.openai.com/docs/api-reference/introduction)

[Authentication](https://platform.openai.com/docs/api-reference/authentication)

[Debugging requests](https://platform.openai.com/docs/api-reference/debugging-requests)

[Backward compatibility](https://platform.openai.com/docs/api-reference/backward-compatibility)

Responses API

[Responses](https://platform.openai.com/docs/api-reference/responses)

[Conversations](https://platform.openai.com/docs/api-reference/conversations)

[Streaming events](https://platform.openai.com/docs/api-reference/responses-streaming)

Webhooks

[Webhook Events](https://platform.openai.com/docs/api-reference/webhook-events)

Platform APIs

[Audio](https://platform.openai.com/docs/api-reference/audio)

[Videos](https://platform.openai.com/docs/api-reference/videos)

[Images](https://platform.openai.com/docs/api-reference/images)

[Image Streaming](https://platform.openai.com/docs/api-reference/images-streaming)

[Embeddings](https://platform.openai.com/docs/api-reference/embeddings)

[Evals](https://platform.openai.com/docs/api-reference/evals)

[Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning)

[Graders](https://platform.openai.com/docs/api-reference/graders)

[Batch](https://platform.openai.com/docs/api-reference/batch)

[Files](https://platform.openai.com/docs/api-reference/files)

[Uploads](https://platform.openai.com/docs/api-reference/uploads)

[Models](https://platform.openai.com/docs/api-reference/models)

[Moderations](https://platform.openai.com/docs/api-reference/moderations)

Vector stores

[Vector stores](https://platform.openai.com/docs/api-reference/vector-stores)

[Create vector store](https://platform.openai.com/docs/api-reference/vector-stores/create)

[List vector stores](https://platform.openai.com/docs/api-reference/vector-stores/list)

[Retrieve vector store](https://platform.openai.com/docs/api-reference/vector-stores/retrieve)

[Modify vector store](https://platform.openai.com/docs/api-reference/vector-stores/modify)

[Delete vector store](https://platform.openai.com/docs/api-reference/vector-stores/delete)

[Search vector store](https://platform.openai.com/docs/api-reference/vector-stores/search)

[The vector store object](https://platform.openai.com/docs/api-reference/vector-stores/object)

[Vector store files](https://platform.openai.com/docs/api-reference/vector-stores-files)

[Vector store file batches](https://platform.openai.com/docs/api-reference/vector-stores-file-batches)

ChatKit

Beta

[ChatKit](https://platform.openai.com/docs/api-reference/chatkit)

Containers

[Containers](https://platform.openai.com/docs/api-reference/containers)

[Container Files](https://platform.openai.com/docs/api-reference/container-files)

Realtime

[Realtime](https://platform.openai.com/docs/api-reference/realtime)

[Client secrets](https://platform.openai.com/docs/api-reference/realtime-sessions)

[Calls](https://platform.openai.com/docs/api-reference/realtime-calls)

[Client events](https://platform.openai.com/docs/api-reference/realtime-client-events)

[Server events](https://platform.openai.com/docs/api-reference/realtime-server-events)

Chat Completions

[Chat Completions](https://platform.openai.com/docs/api-reference/chat)

[Streaming](https://platform.openai.com/docs/api-reference/chat-streaming)

Assistants

Beta

[Assistants](https://platform.openai.com/docs/api-reference/assistants)

[Threads](https://platform.openai.com/docs/api-reference/threads)

[Messages](https://platform.openai.com/docs/api-reference/messages)

[Runs](https://platform.openai.com/docs/api-reference/runs)

[Run steps](https://platform.openai.com/docs/api-reference/run-steps)

[Streaming](https://platform.openai.com/docs/api-reference/assistants-streaming)

Administration

[Administration](https://platform.openai.com/docs/api-reference/administration)

[Admin API Keys](https://platform.openai.com/docs/api-reference/admin-api-keys)

[Invites](https://platform.openai.com/docs/api-reference/invite)

[Users](https://platform.openai.com/docs/api-reference/users)

[Groups](https://platform.openai.com/docs/api-reference/groups)

[Roles](https://platform.openai.com/docs/api-reference/roles)

[Role assignments](https://platform.openai.com/docs/api-reference/role-assignments)

[Projects](https://platform.openai.com/docs/api-reference/projects)

[Project users](https://platform.openai.com/docs/api-reference/project-users)

[Project groups](https://platform.openai.com/docs/api-reference/project-groups)

[Project service accounts](https://platform.openai.com/docs/api-reference/project-service-accounts)

[Project API keys](https://platform.openai.com/docs/api-reference/project-api-keys)

[Project rate limits](https://platform.openai.com/docs/api-reference/project-rate-limits)

[Audit logs](https://platform.openai.com/docs/api-reference/audit-logs)

[Usage](https://platform.openai.com/docs/api-reference/usage)

[Certificates](https://platform.openai.com/docs/api-reference/certificates)

Legacy

[Completions](https://platform.openai.com/docs/api-reference/completions)

[Realtime Beta](https://platform.openai.com/docs/api-reference/realtime_beta)

[Realtime Beta session tokens](https://platform.openai.com/docs/api-reference/realtime-beta-sessions)

[Realtime Beta client events](https://platform.openai.com/docs/api-reference/realtime-beta-client-events)

[Realtime Beta server events](https://platform.openai.com/docs/api-reference/realtime-beta-server-events)

[Cookbook](https://cookbook.openai.com/) [Forum](https://community.openai.com/categories)

## Vector stores

Vector stores power semantic search for the Retrieval API and the `file_search` tool in the Responses and Assistants APIs.

Related guide: [File Search](https://platform.openai.com/docs/assistants/tools/file-search)

## Create vector store

posthttps://api.openai.com/v1/vector\_stores

Create a vector store.

#### Request body

chunking\_strategy

object

Optional

The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. Only applicable if `file_ids` is non-empty.

Show possible types

description

string

Optional

A description for the vector store. Can be used to describe the vector store's purpose.

expires\_after

object

Optional

The expiration policy for a vector store.

Show properties

file\_ids

array

Optional

A list of [File](https://platform.openai.com/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files.

metadata

map

Optional

Set of 16 key-value pairs that can be attached to an object. This can be
useful for storing additional information about the object in a structured
format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings
with a maximum length of 512 characters.

name

string

Optional

The name of the vector store.

#### Returns

A [vector store](https://platform.openai.com/docs/api-reference/vector-stores/object) object.

Example request

curl

```
1
2
3
4
5
6
7
curl https://api.openai.com/v1/vector_stores \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -H "OpenAI-Beta: assistants=v2" \
  -d '{
    "name": "Support FAQ"
  }'
```

```
1
2
3
4
5
6
7
from openai import OpenAI
client = OpenAI()

vector_store = client.vector_stores.create(
  name="Support FAQ"
)
print(vector_store)
```

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
import OpenAI from "openai";
const openai = new OpenAI();

async function main() {
  const vectorStore = await openai.vectorStores.create({
    name: "Support FAQ"
  });
  console.log(vectorStore);
}

main();
```

Response

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
{
  "id": "vs_abc123",
  "object": "vector_store",
  "created_at": 1699061776,
  "name": "Support FAQ",
  "description": "Contains commonly asked questions and answers, organized by topic.",
  "bytes": 139920,
  "file_counts": {
    "in_progress": 0,
    "completed": 3,
    "failed": 0,
    "cancelled": 0,
    "total": 3
  }
}
```

## List vector stores

gethttps://api.openai.com/v1/vector\_stores

Returns a list of vector stores.

#### Query parameters

after

string

Optional

A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj\_foo, your subsequent call can include after=obj\_foo in order to fetch the next page of the list.

before

string

Optional

A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj\_foo, your subsequent call can include before=obj\_foo in order to fetch the previous page of the list.

limit

integer

Optional

Defaults to 20

A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.

order

string

Optional

Defaults to desc

Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.

#### Returns

A list of [vector store](https://platform.openai.com/docs/api-reference/vector-stores/object) objects.

Example request

curl

```
1
2
3
4
curl https://api.openai.com/v1/vector_stores \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -H "OpenAI-Beta: assistants=v2"
```

```
1
2
3
4
5
from openai import OpenAI
client = OpenAI()

vector_stores = client.vector_stores.list()
print(vector_stores)
```

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
import OpenAI from "openai";
const openai = new OpenAI();

async function main() {
  const vectorStores = await openai.vectorStores.list();
  console.log(vectorStores);
}

main();
```

Response

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
{
  "object": "list",
  "data": [\
    {\
      "id": "vs_abc123",\
      "object": "vector_store",\
      "created_at": 1699061776,\
      "name": "Support FAQ",\
      "description": "Contains commonly asked questions and answers, organized by topic.",\
      "bytes": 139920,\
      "file_counts": {\
        "in_progress": 0,\
        "completed": 3,\
        "failed": 0,\
        "cancelled": 0,\
        "total": 3\
      }\
    },\
    {\
      "id": "vs_abc456",\
      "object": "vector_store",\
      "created_at": 1699061776,\
      "name": "Support FAQ v2",\
      "description": null,\
      "bytes": 139920,\
      "file_counts": {\
        "in_progress": 0,\
        "completed": 3,\
        "failed": 0,\
        "cancelled": 0,\
        "total": 3\
      }\
    }\
  ],
  "first_id": "vs_abc123",
  "last_id": "vs_abc456",
  "has_more": false
}
```

## Retrieve vector store

gethttps://api.openai.com/v1/vector\_stores/{vector\_store\_id}

Retrieves a vector store.

#### Path parameters

vector\_store\_id

string

Required

The ID of the vector store to retrieve.

#### Returns

The [vector store](https://platform.openai.com/docs/api-reference/vector-stores/object) object matching the specified ID.

Example request

curl

```
1
2
3
4
curl https://api.openai.com/v1/vector_stores/vs_abc123 \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -H "OpenAI-Beta: assistants=v2"
```

```
1
2
3
4
5
6
7
from openai import OpenAI
client = OpenAI()

vector_store = client.vector_stores.retrieve(
  vector_store_id="vs_abc123"
)
print(vector_store)
```

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
import OpenAI from "openai";
const openai = new OpenAI();

async function main() {
  const vectorStore = await openai.vectorStores.retrieve(
    "vs_abc123"
  );
  console.log(vectorStore);
}

main();
```

Response

```
1
2
3
4
5
{
  "id": "vs_abc123",
  "object": "vector_store",
  "created_at": 1699061776
}
```

## Modify vector store

posthttps://api.openai.com/v1/vector\_stores/{vector\_store\_id}

Modifies a vector store.

#### Path parameters

vector\_store\_id

string

Required

The ID of the vector store to modify.

#### Request body

expires\_after

object or null

Optional

The expiration policy for a vector store.

Show properties

metadata

map

Optional

Set of 16 key-value pairs that can be attached to an object. This can be
useful for storing additional information about the object in a structured
format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings
with a maximum length of 512 characters.

name

string or null

Optional

The name of the vector store.

#### Returns

The modified [vector store](https://platform.openai.com/docs/api-reference/vector-stores/object) object.

Example request

curl

```
1
2
3
4
5
6
7
curl https://api.openai.com/v1/vector_stores/vs_abc123 \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -H "OpenAI-Beta: assistants=v2"
  -d '{
    "name": "Support FAQ"
  }'
```

```
1
2
3
4
5
6
7
8
from openai import OpenAI
client = OpenAI()

vector_store = client.vector_stores.update(
  vector_store_id="vs_abc123",
  name="Support FAQ"
)
print(vector_store)
```

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
import OpenAI from "openai";
const openai = new OpenAI();

async function main() {
  const vectorStore = await openai.vectorStores.update(
    "vs_abc123",
    {
      name: "Support FAQ"
    }
  );
  console.log(vectorStore);
}

main();
```

Response

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
{
  "id": "vs_abc123",
  "object": "vector_store",
  "created_at": 1699061776,
  "name": "Support FAQ",
  "description": "Contains commonly asked questions and answers, organized by topic.",
  "bytes": 139920,
  "file_counts": {
    "in_progress": 0,
    "completed": 3,
    "failed": 0,
    "cancelled": 0,
    "total": 3
  }
}
```

## Delete vector store

deletehttps://api.openai.com/v1/vector\_stores/{vector\_store\_id}

Delete a vector store.

#### Path parameters

vector\_store\_id

string

Required

The ID of the vector store to delete.

#### Returns

Deletion status

Example request

curl

```
1
2
3
4
5
curl https://api.openai.com/v1/vector_stores/vs_abc123 \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -H "OpenAI-Beta: assistants=v2" \
  -X DELETE
```

```
1
2
3
4
5
6
7
from openai import OpenAI
client = OpenAI()

deleted_vector_store = client.vector_stores.delete(
  vector_store_id="vs_abc123"
)
print(deleted_vector_store)
```

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
import OpenAI from "openai";
const openai = new OpenAI();

async function main() {
  const deletedVectorStore = await openai.vectorStores.delete(
    "vs_abc123"
  );
  console.log(deletedVectorStore);
}

main();
```

Response

```
1
2
3
4
5
{
  id: "vs_abc123",
  object: "vector_store.deleted",
  deleted: true
}
```

## Search vector store

posthttps://api.openai.com/v1/vector\_stores/{vector\_store\_id}/search

Search a vector store for relevant chunks based on a query and file attributes filter.

#### Path parameters

vector\_store\_id

string

Required

The ID of the vector store to search.

#### Request body

query

string or array

Required

A query string for a search

filters

object

Optional

A filter to apply based on file attributes.

Show possible types

max\_num\_results

integer

Optional

Defaults to 10

The maximum number of results to return. This number should be between 1 and 50 inclusive.

ranking\_options

object

Optional

Ranking options for search.

Show properties

rewrite\_query

boolean

Optional

Defaults to false

Whether to rewrite the natural language query for vector search.

#### Returns

A page of search results from the vector store.

Example request

curl

```
1
2
3
4
5
curl -X POST \
https://api.openai.com/v1/vector_stores/vs_abc123/search \
-H "Authorization: Bearer $OPENAI_API_KEY" \
-H "Content-Type: application/json" \
-d '{"query": "What is the return policy?", "filters": {...}}'
```

Response

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
{
  "object": "vector_store.search_results.page",
  "search_query": "What is the return policy?",
  "data": [\
    {\
      "file_id": "file_123",\
      "filename": "document.pdf",\
      "score": 0.95,\
      "attributes": {\
        "author": "John Doe",\
        "date": "2023-01-01"\
      },\
      "content": [\
        {\
          "type": "text",\
          "text": "Relevant chunk"\
        }\
      ]\
    },\
    {\
      "file_id": "file_456",\
      "filename": "notes.txt",\
      "score": 0.89,\
      "attributes": {\
        "author": "Jane Smith",\
        "date": "2023-01-02"\
      },\
      "content": [\
        {\
          "type": "text",\
          "text": "Sample text content from the vector store."\
        }\
      ]\
    }\
  ],
  "has_more": false,
  "next_page": null
}
```

## The vector store object

A vector store is a collection of processed files can be used by the `file_search` tool.

created\_at

integer

The Unix timestamp (in seconds) for when the vector store was created.

expires\_after

object

The expiration policy for a vector store.

Show properties

expires\_at

integer

The Unix timestamp (in seconds) for when the vector store will expire.

file\_counts

object

Show properties

id

string

The identifier, which can be referenced in API endpoints.

last\_active\_at

integer

The Unix timestamp (in seconds) for when the vector store was last active.

metadata

map

Set of 16 key-value pairs that can be attached to an object. This can be
useful for storing additional information about the object in a structured
format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings
with a maximum length of 512 characters.

name

string

The name of the vector store.

object

string

The object type, which is always `vector_store`.

status

string

The status of the vector store, which can be either `expired`, `in_progress`, or `completed`. A status of `completed` indicates that the vector store is ready for use.

usage\_bytes

integer

The total number of bytes used by the files in the vector store.

OBJECT The vector store object

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
{
  "id": "vs_123",
  "object": "vector_store",
  "created_at": 1698107661,
  "usage_bytes": 123456,
  "last_active_at": 1698107661,
  "name": "my_vector_store",
  "status": "completed",
  "file_counts": {
    "in_progress": 0,
    "completed": 100,
    "cancelled": 0,
    "failed": 0,
    "total": 100
  },
  "last_used_at": 1698107661
}
```

[PreviousModerations](https://platform.openai.com/docs/api-reference/moderations) [NextVector store files](https://platform.openai.com/docs/api-reference/vector-stores-files)