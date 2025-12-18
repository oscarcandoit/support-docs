---
url: "https://platform.openai.com/docs/api-reference/embeddings?locale=en"
title: "Embeddings | OpenAI API Reference"
---

[DocsDocs](https://platform.openai.com/docs/guides/embeddings) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

Log in [Sign up](https://platform.openai.com/signup)

Search`` `K`

API Reference

[Introduction](https://platform.openai.com/docs/api-reference/introduction?locale=en)

[Authentication](https://platform.openai.com/docs/api-reference/authentication?locale=en)

[Debugging requests](https://platform.openai.com/docs/api-reference/debugging-requests?locale=en)

[Backward compatibility](https://platform.openai.com/docs/api-reference/backward-compatibility?locale=en)

Responses API

[Responses](https://platform.openai.com/docs/api-reference/responses?locale=en)

[Conversations](https://platform.openai.com/docs/api-reference/conversations?locale=en)

[Streaming events](https://platform.openai.com/docs/api-reference/responses-streaming?locale=en)

Webhooks

[Webhook Events](https://platform.openai.com/docs/api-reference/webhook-events?locale=en)

Platform APIs

[Audio](https://platform.openai.com/docs/api-reference/audio?locale=en)

[Videos](https://platform.openai.com/docs/api-reference/videos?locale=en)

[Images](https://platform.openai.com/docs/api-reference/images?locale=en)

[Image Streaming](https://platform.openai.com/docs/api-reference/images-streaming?locale=en)

[Embeddings](https://platform.openai.com/docs/api-reference/embeddings?locale=en)

[Create embeddings](https://platform.openai.com/docs/api-reference/embeddings/create?locale=en)

[The embedding object](https://platform.openai.com/docs/api-reference/embeddings/object?locale=en)

[Evals](https://platform.openai.com/docs/api-reference/evals?locale=en)

[Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning?locale=en)

[Graders](https://platform.openai.com/docs/api-reference/graders?locale=en)

[Batch](https://platform.openai.com/docs/api-reference/batch?locale=en)

[Files](https://platform.openai.com/docs/api-reference/files?locale=en)

[Uploads](https://platform.openai.com/docs/api-reference/uploads?locale=en)

[Models](https://platform.openai.com/docs/api-reference/models?locale=en)

[Moderations](https://platform.openai.com/docs/api-reference/moderations?locale=en)

Vector stores

[Vector stores](https://platform.openai.com/docs/api-reference/vector-stores?locale=en)

[Vector store files](https://platform.openai.com/docs/api-reference/vector-stores-files?locale=en)

[Vector store file batches](https://platform.openai.com/docs/api-reference/vector-stores-file-batches?locale=en)

ChatKit

Beta

[ChatKit](https://platform.openai.com/docs/api-reference/chatkit?locale=en)

Containers

[Containers](https://platform.openai.com/docs/api-reference/containers?locale=en)

[Container Files](https://platform.openai.com/docs/api-reference/container-files?locale=en)

Realtime

[Realtime](https://platform.openai.com/docs/api-reference/realtime?locale=en)

[Client secrets](https://platform.openai.com/docs/api-reference/realtime-sessions?locale=en)

[Calls](https://platform.openai.com/docs/api-reference/realtime-calls?locale=en)

[Client events](https://platform.openai.com/docs/api-reference/realtime-client-events?locale=en)

[Server events](https://platform.openai.com/docs/api-reference/realtime-server-events?locale=en)

Chat Completions

[Chat Completions](https://platform.openai.com/docs/api-reference/chat?locale=en)

[Streaming](https://platform.openai.com/docs/api-reference/chat-streaming?locale=en)

Assistants

Beta

[Assistants](https://platform.openai.com/docs/api-reference/assistants?locale=en)

[Threads](https://platform.openai.com/docs/api-reference/threads?locale=en)

[Messages](https://platform.openai.com/docs/api-reference/messages?locale=en)

[Runs](https://platform.openai.com/docs/api-reference/runs?locale=en)

[Run steps](https://platform.openai.com/docs/api-reference/run-steps?locale=en)

[Streaming](https://platform.openai.com/docs/api-reference/assistants-streaming?locale=en)

Administration

[Administration](https://platform.openai.com/docs/api-reference/administration?locale=en)

[Admin API Keys](https://platform.openai.com/docs/api-reference/admin-api-keys?locale=en)

[Invites](https://platform.openai.com/docs/api-reference/invite?locale=en)

[Users](https://platform.openai.com/docs/api-reference/users?locale=en)

[Groups](https://platform.openai.com/docs/api-reference/groups?locale=en)

[Roles](https://platform.openai.com/docs/api-reference/roles?locale=en)

[Role assignments](https://platform.openai.com/docs/api-reference/role-assignments?locale=en)

[Projects](https://platform.openai.com/docs/api-reference/projects?locale=en)

[Project users](https://platform.openai.com/docs/api-reference/project-users?locale=en)

[Project groups](https://platform.openai.com/docs/api-reference/project-groups?locale=en)

[Project service accounts](https://platform.openai.com/docs/api-reference/project-service-accounts?locale=en)

[Project API keys](https://platform.openai.com/docs/api-reference/project-api-keys?locale=en)

[Project rate limits](https://platform.openai.com/docs/api-reference/project-rate-limits?locale=en)

[Audit logs](https://platform.openai.com/docs/api-reference/audit-logs?locale=en)

[Usage](https://platform.openai.com/docs/api-reference/usage?locale=en)

[Certificates](https://platform.openai.com/docs/api-reference/certificates?locale=en)

Legacy

[Completions](https://platform.openai.com/docs/api-reference/completions?locale=en)

[Realtime Beta](https://platform.openai.com/docs/api-reference/realtime_beta?locale=en)

[Realtime Beta session tokens](https://platform.openai.com/docs/api-reference/realtime-beta-sessions?locale=en)

[Realtime Beta client events](https://platform.openai.com/docs/api-reference/realtime-beta-client-events?locale=en)

[Realtime Beta server events](https://platform.openai.com/docs/api-reference/realtime-beta-server-events?locale=en)

[Cookbook](https://cookbook.openai.com/) [Forum](https://community.openai.com/categories)

## Embeddings

Get a vector representation of a given input that can be easily consumed by machine learning models and algorithms.
Related guide: [Embeddings](https://platform.openai.com/docs/guides/embeddings)

## Create embeddings

posthttps://api.openai.com/v1/embeddings

Creates an embedding vector representing the input text.

#### Request body

input

string or array

Required

Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for all embedding models), cannot be an empty string, and any array must be 2048 dimensions or less. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens. In addition to the per-input token limit, all embedding models enforce a maximum of 300,000 tokens summed across all inputs in a single request.

model

string

Required

ID of the model to use. You can use the [List models](https://platform.openai.com/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](https://platform.openai.com/docs/models) for descriptions of them.

dimensions

integer

Optional

The number of dimensions the resulting output embeddings should have. Only supported in `text-embedding-3` and later models.

encoding\_format

string

Optional

Defaults to float

The format to return the embeddings in. Can be either `float` or [`base64`](https://pypi.org/project/pybase64/).

user

string

Optional

A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](https://platform.openai.com/docs/guides/safety-best-practices#end-user-ids).

#### Returns

A list of [embedding](https://platform.openai.com/docs/api-reference/embeddings/object) objects.

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
8
curl https://api.openai.com/v1/embeddings \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": "The food was delicious and the waiter...",
    "model": "text-embedding-ada-002",
    "encoding_format": "float"
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

client.embeddings.create(
  model="text-embedding-ada-002",
  input="The food was delicious and the waiter...",
  encoding_format="float"
)
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
15
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: "The quick brown fox jumped over the lazy dog",
    encoding_format: "float",
  });

  console.log(embedding);
}

main();
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
15
16
using System;

using OpenAI.Embeddings;

EmbeddingClient client = new(
    model: "text-embedding-3-small",
    apiKey: Environment.GetEnvironmentVariable("OPENAI_API_KEY")
);

OpenAIEmbedding embedding = client.GenerateEmbedding(input: "The quick brown fox jumped over the lazy dog");
ReadOnlyMemory<float> vector = embedding.ToFloats();

for (int i = 0; i < vector.Length; i++)
{
    Console.WriteLine($"  [{i,4}] = {vector.Span[i]}");
}
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
{
  "object": "list",
  "data": [\
    {\
      "object": "embedding",\
      "embedding": [\
        0.0023064255,\
        -0.009327292,\
        .... (1536 floats total for ada-002)\
        -0.0028842222,\
      ],\
      "index": 0\
    }\
  ],
  "model": "text-embedding-ada-002",
  "usage": {
    "prompt_tokens": 8,
    "total_tokens": 8
  }
}
```

## The embedding object

Represents an embedding vector returned by embedding endpoint.

embedding

array

The embedding vector, which is a list of floats. The length of vector depends on the model as listed in the [embedding guide](https://platform.openai.com/docs/guides/embeddings).

index

integer

The index of the embedding in the list of embeddings.

object

string

The object type, which is always "embedding".

OBJECT The embedding object

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
{
  "object": "embedding",
  "embedding": [\
    0.0023064255,\
    -0.009327292,\
    .... (1536 floats total for ada-002)\
    -0.0028842222,\
  ],
  "index": 0
}
```

[PreviousImage Streaming](https://platform.openai.com/docs/api-reference/images-streaming?locale=en) [NextEvals](https://platform.openai.com/docs/api-reference/evals?locale=en)

We use cookies and similar technologies to deliver, maintain, improve our services and for security purposes. Check our [Cookie Policy](https://openai.com/policies/cookie-policy) for details. Click 'Accept all' to let OpenAI and partners use cookies for these purposes. Click 'Reject all' to say no to cookies, except those that are strictly necessary. Choose 'Manage Cookies' to pick specific cookies you're okay with or to change your preferences.

Reject allAccept all