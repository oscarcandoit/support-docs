---
url: "https://platform.openai.com/docs/api-reference/threads"
title: "Threads | OpenAI API Reference"
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

[Create thread](https://platform.openai.com/docs/api-reference/threads/createThread)

[Retrieve thread](https://platform.openai.com/docs/api-reference/threads/getThread)

[Modify thread](https://platform.openai.com/docs/api-reference/threads/modifyThread)

[Delete thread](https://platform.openai.com/docs/api-reference/threads/deleteThread)

[The thread object](https://platform.openai.com/docs/api-reference/threads/object)

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

## Threads  Beta

Create threads that assistants can interact with.

Related guide: [Assistants](https://platform.openai.com/docs/assistants/overview)

## Create thread  Beta

posthttps://api.openai.com/v1/threads

Create a thread.

#### Request body

messages

array

Optional

A list of [messages](https://platform.openai.com/docs/api-reference/messages) to start the thread with.

Show properties

metadata

map

Optional

Set of 16 key-value pairs that can be attached to an object. This can be
useful for storing additional information about the object in a structured
format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings
with a maximum length of 512 characters.

tool\_resources

object

Optional

A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.

Show properties

#### Returns

A [thread](https://platform.openai.com/docs/api-reference/threads) object.

EmptyMessages

Example request

curl

```
1
2
3
4
5
curl https://api.openai.com/v1/threads \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Beta: assistants=v2" \
  -d ''
```

```
1
2
3
4
5
from openai import OpenAI
client = OpenAI()

empty_thread = client.beta.threads.create()
print(empty_thread)
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
  const emptyThread = await openai.beta.threads.create();

  console.log(emptyThread);
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
{
  "id": "thread_abc123",
  "object": "thread",
  "created_at": 1699012949,
  "metadata": {},
  "tool_resources": {}
}
```

## Retrieve thread  Beta

gethttps://api.openai.com/v1/threads/{thread\_id}

Retrieves a thread.

#### Path parameters

thread\_id

string

Required

The ID of the thread to retrieve.

#### Returns

The [thread](https://platform.openai.com/docs/api-reference/threads/object) object matching the specified ID.

Example request

curl

```
1
2
3
4
curl https://api.openai.com/v1/threads/thread_abc123 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
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

my_thread = client.beta.threads.retrieve("thread_abc123")
print(my_thread)
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
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const myThread = await openai.beta.threads.retrieve(
    "thread_abc123"
  );

  console.log(myThread);
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
{
  "id": "thread_abc123",
  "object": "thread",
  "created_at": 1699014083,
  "metadata": {},
  "tool_resources": {
    "code_interpreter": {
      "file_ids": []
    }
  }
}
```

## Modify thread  Beta

posthttps://api.openai.com/v1/threads/{thread\_id}

Modifies a thread.

#### Path parameters

thread\_id

string

Required

The ID of the thread to modify. Only the `metadata` can be modified.

#### Request body

metadata

map

Optional

Set of 16 key-value pairs that can be attached to an object. This can be
useful for storing additional information about the object in a structured
format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings
with a maximum length of 512 characters.

tool\_resources

object

Optional

A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.

Show properties

#### Returns

The modified [thread](https://platform.openai.com/docs/api-reference/threads/object) object matching the specified ID.

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
9
10
curl https://api.openai.com/v1/threads/thread_abc123 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Beta: assistants=v2" \
  -d '{
      "metadata": {
        "modified": "true",
        "user": "abc123"
      }
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
9
10
11
from openai import OpenAI
client = OpenAI()

my_updated_thread = client.beta.threads.update(
  "thread_abc123",
  metadata={
    "modified": "true",
    "user": "abc123"
  }
)
print(my_updated_thread)
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
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const updatedThread = await openai.beta.threads.update(
    "thread_abc123",
    {
      metadata: { modified: "true", user: "abc123" },
    }
  );

  console.log(updatedThread);
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
{
  "id": "thread_abc123",
  "object": "thread",
  "created_at": 1699014083,
  "metadata": {
    "modified": "true",
    "user": "abc123"
  },
  "tool_resources": {}
}
```

## Delete thread  Beta

deletehttps://api.openai.com/v1/threads/{thread\_id}

Delete a thread.

#### Path parameters

thread\_id

string

Required

The ID of the thread to delete.

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
curl https://api.openai.com/v1/threads/thread_abc123 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Beta: assistants=v2" \
  -X DELETE
```

```
1
2
3
4
5
from openai import OpenAI
client = OpenAI()

response = client.beta.threads.delete("thread_abc123")
print(response)
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
  const response = await openai.beta.threads.delete("thread_abc123");

  console.log(response);
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
  "id": "thread_abc123",
  "object": "thread.deleted",
  "deleted": true
}
```

## The thread object  Beta

Represents a thread that contains [messages](https://platform.openai.com/docs/api-reference/messages).

created\_at

integer

The Unix timestamp (in seconds) for when the thread was created.

id

string

The identifier, which can be referenced in API endpoints.

metadata

map

Set of 16 key-value pairs that can be attached to an object. This can be
useful for storing additional information about the object in a structured
format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings
with a maximum length of 512 characters.

object

string

The object type, which is always `thread`.

tool\_resources

object

A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.

Show properties

OBJECT The thread object

```
1
2
3
4
5
6
{
  "id": "thread_abc123",
  "object": "thread",
  "created_at": 1698107661,
  "metadata": {}
}
```

[PreviousAssistants](https://platform.openai.com/docs/api-reference/assistants) [NextMessages](https://platform.openai.com/docs/api-reference/messages)

We use cookies and similar technologies to deliver, maintain, improve our services and for security purposes. Check our [Cookie Policy](https://openai.com/policies/cookie-policy) for details. Click 'Accept all' to let OpenAI and partners use cookies for these purposes. Click 'Reject all' to say no to cookies, except those that are strictly necessary. Choose 'Manage Cookies' to pick specific cookies you're okay with or to change your preferences.

Reject allAccept all