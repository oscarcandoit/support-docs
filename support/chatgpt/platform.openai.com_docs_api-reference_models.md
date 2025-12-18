---
url: "https://platform.openai.com/docs/api-reference/models"
title: "Models | OpenAI API Reference"
---

[DocsDocs](https://platform.openai.com/docs) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

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

[List models](https://platform.openai.com/docs/api-reference/models/list)

[Retrieve model](https://platform.openai.com/docs/api-reference/models/retrieve)

[Delete a fine-tuned model](https://platform.openai.com/docs/api-reference/models/delete)

[The model object](https://platform.openai.com/docs/api-reference/models/object)

[Moderations](https://platform.openai.com/docs/api-reference/moderations)

Vector stores

[Vector stores](https://platform.openai.com/docs/api-reference/vector-stores)

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

## Models

List and describe the various models available in the API. You can refer to the [Models](https://platform.openai.com/docs/models) documentation to understand what models are available and the differences between them.

## List models

gethttps://api.openai.com/v1/models

Lists the currently available models, and provides basic information about each one such as the owner and availability.

#### Returns

A list of [model](https://platform.openai.com/docs/api-reference/models/object) objects.

Example request

curl

```
1
2
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

```
1
2
3
4
from openai import OpenAI
client = OpenAI()

client.models.list()
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
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const list = await openai.models.list();

  for await (const model of list) {
    console.log(model);
  }
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
using System;

using OpenAI.Models;

OpenAIModelClient client = new(
    apiKey: Environment.GetEnvironmentVariable("OPENAI_API_KEY")
);

foreach (var model in client.GetModels().Value)
{
    Console.WriteLine(model.Id);
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
21
22
23
24
{
  "object": "list",
  "data": [\
    {\
      "id": "model-id-0",\
      "object": "model",\
      "created": 1686935002,\
      "owned_by": "organization-owner"\
    },\
    {\
      "id": "model-id-1",\
      "object": "model",\
      "created": 1686935002,\
      "owned_by": "organization-owner",\
    },\
    {\
      "id": "model-id-2",\
      "object": "model",\
      "created": 1686935002,\
      "owned_by": "openai"\
    },\
  ],
  "object": "list"
}
```

## Retrieve model

gethttps://api.openai.com/v1/models/{model}

Retrieves a model instance, providing basic information about the model such as the owner and permissioning.

#### Path parameters

model

string

Required

The ID of the model to use for this request

#### Returns

The [model](https://platform.openai.com/docs/api-reference/models/object) object matching the specified ID.

Example request

curl

```
1
2
curl https://api.openai.com/v1/models/gpt-5.2 \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

```
1
2
3
4
from openai import OpenAI
client = OpenAI()

client.models.retrieve("gpt-5.2")
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
  const model = await openai.models.retrieve("gpt-5.2");

  console.log(model);
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
using System;
using System.ClientModel;

using OpenAI.Models;

  OpenAIModelClient client = new(
    apiKey: Environment.GetEnvironmentVariable("OPENAI_API_KEY")
);

ClientResult<OpenAIModel> model = client.GetModel("babbage-002");
Console.WriteLine(model.Value.Id);
```

Response

```
1
2
3
4
5
6
{
  "id": "gpt-5.2",
  "object": "model",
  "created": 1686935002,
  "owned_by": "openai"
}
```

## Delete a fine-tuned model

deletehttps://api.openai.com/v1/models/{model}

Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.

#### Path parameters

model

string

Required

The model to delete

#### Returns

Deletion status.

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/models/ft:gpt-4o-mini:acemeco:suffix:abc123 \
  -X DELETE \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

```
1
2
3
4
from openai import OpenAI
client = OpenAI()

client.models.delete("ft:gpt-4o-mini:acemeco:suffix:abc123")
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
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const model = await openai.models.delete("ft:gpt-4o-mini:acemeco:suffix:abc123");

  console.log(model);
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
using System;
using System.ClientModel;

using OpenAI.Models;

OpenAIModelClient client = new(
    apiKey: Environment.GetEnvironmentVariable("OPENAI_API_KEY")
);

ClientResult success = client.DeleteModel("ft:gpt-4o-mini:acemeco:suffix:abc123");
Console.WriteLine(success);
```

Response

```
1
2
3
4
5
{
  "id": "ft:gpt-4o-mini:acemeco:suffix:abc123",
  "object": "model",
  "deleted": true
}
```

## The model object

Describes an OpenAI model offering that can be used with the API.

created

integer

The Unix timestamp (in seconds) when the model was created.

id

string

The model identifier, which can be referenced in the API endpoints.

object

string

The object type, which is always "model".

owned\_by

string

The organization that owns the model.

OBJECT The model object

```
1
2
3
4
5
6
{
  "id": "gpt-5.2",
  "object": "model",
  "created": 1686935002,
  "owned_by": "openai"
}
```

[PreviousUploads](https://platform.openai.com/docs/api-reference/uploads) [NextModerations](https://platform.openai.com/docs/api-reference/moderations)

We use cookies and similar technologies to deliver, maintain, improve our services and for security purposes. Check our [Cookie Policy](https://openai.com/policies/cookie-policy) for details. Click 'Accept all' to let OpenAI and partners use cookies for these purposes. Click 'Reject all' to say no to cookies, except those that are strictly necessary. Choose 'Manage Cookies' to pick specific cookies you're okay with or to change your preferences.

Reject allAccept all