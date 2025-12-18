---
url: "https://platform.openai.com/docs/api-reference/messages"
title: "Messages | OpenAI API Reference"
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

[Messages](https://platform.openai.com/docs/api-reference/messages)

[Create message](https://platform.openai.com/docs/api-reference/messages/createMessage)

[List messages](https://platform.openai.com/docs/api-reference/messages/listMessages)

[Retrieve message](https://platform.openai.com/docs/api-reference/messages/getMessage)

[Modify message](https://platform.openai.com/docs/api-reference/messages/modifyMessage)

[Delete message](https://platform.openai.com/docs/api-reference/messages/deleteMessage)

[The message object](https://platform.openai.com/docs/api-reference/messages/object)

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

## Messages  Beta

Create messages within threads

Related guide: [Assistants](https://platform.openai.com/docs/assistants/overview)

## Create message  Beta

posthttps://api.openai.com/v1/threads/{thread\_id}/messages

Create a message.

#### Path parameters

thread\_id

string

Required

The ID of the [thread](https://platform.openai.com/docs/api-reference/threads) to create a message for.

#### Request body

content

string or array

Required

Show possible types

role

string

Required

The role of the entity that is creating the message. Allowed values include:

- `user`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages.
- `assistant`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into the conversation.

attachments

array

Optional

A list of files attached to the message, and the tools they should be added to.

Show properties

metadata

map

Optional

Set of 16 key-value pairs that can be attached to an object. This can be
useful for storing additional information about the object in a structured
format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings
with a maximum length of 512 characters.

#### Returns

A [message](https://platform.openai.com/docs/api-reference/messages/object) object.

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
curl https://api.openai.com/v1/threads/thread_abc123/messages \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Beta: assistants=v2" \
  -d '{
      "role": "user",
      "content": "How does AI work? Explain it in simple terms."
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
from openai import OpenAI
client = OpenAI()

thread_message = client.beta.threads.messages.create(
  "thread_abc123",
  role="user",
  content="How does AI work? Explain it in simple terms.",
)
print(thread_message)
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
  const threadMessages = await openai.beta.threads.messages.create(
    "thread_abc123",
    { role: "user", content: "How does AI work? Explain it in simple terms." }
  );

  console.log(threadMessages);
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
{
  "id": "msg_abc123",
  "object": "thread.message",
  "created_at": 1713226573,
  "assistant_id": null,
  "thread_id": "thread_abc123",
  "run_id": null,
  "role": "user",
  "content": [\
    {\
      "type": "text",\
      "text": {\
        "value": "How does AI work? Explain it in simple terms.",\
        "annotations": []\
      }\
    }\
  ],
  "attachments": [],
  "metadata": {}
}
```

## List messages  Beta

gethttps://api.openai.com/v1/threads/{thread\_id}/messages

Returns a list of messages for a given thread.

#### Path parameters

thread\_id

string

Required

The ID of the [thread](https://platform.openai.com/docs/api-reference/threads) the messages belong to.

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

run\_id

string

Optional

Filter messages by the run ID that generated them.

#### Returns

A list of [message](https://platform.openai.com/docs/api-reference/messages) objects.

Example request

curl

```
1
2
3
4
curl https://api.openai.com/v1/threads/thread_abc123/messages \
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

thread_messages = client.beta.threads.messages.list("thread_abc123")
print(thread_messages.data)
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
  const threadMessages = await openai.beta.threads.messages.list(
    "thread_abc123"
  );

  console.log(threadMessages.data);
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
{
  "object": "list",
  "data": [\
    {\
      "id": "msg_abc123",\
      "object": "thread.message",\
      "created_at": 1699016383,\
      "assistant_id": null,\
      "thread_id": "thread_abc123",\
      "run_id": null,\
      "role": "user",\
      "content": [\
        {\
          "type": "text",\
          "text": {\
            "value": "How does AI work? Explain it in simple terms.",\
            "annotations": []\
          }\
        }\
      ],\
      "attachments": [],\
      "metadata": {}\
    },\
    {\
      "id": "msg_abc456",\
      "object": "thread.message",\
      "created_at": 1699016383,\
      "assistant_id": null,\
      "thread_id": "thread_abc123",\
      "run_id": null,\
      "role": "user",\
      "content": [\
        {\
          "type": "text",\
          "text": {\
            "value": "Hello, what is AI?",\
            "annotations": []\
          }\
        }\
      ],\
      "attachments": [],\
      "metadata": {}\
    }\
  ],
  "first_id": "msg_abc123",
  "last_id": "msg_abc456",
  "has_more": false
}
```

## Retrieve message  Beta

gethttps://api.openai.com/v1/threads/{thread\_id}/messages/{message\_id}

Retrieve a message.

#### Path parameters

message\_id

string

Required

The ID of the message to retrieve.

thread\_id

string

Required

The ID of the [thread](https://platform.openai.com/docs/api-reference/threads) to which this message belongs.

#### Returns

The [message](https://platform.openai.com/docs/api-reference/messages/object) object matching the specified ID.

Example request

curl

```
1
2
3
4
curl https://api.openai.com/v1/threads/thread_abc123/messages/msg_abc123 \
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
6
7
8
from openai import OpenAI
client = OpenAI()

message = client.beta.threads.messages.retrieve(
  message_id="msg_abc123",
  thread_id="thread_abc123",
)
print(message)
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
  const message = await openai.beta.threads.messages.retrieve(
    "msg_abc123",
    { thread_id: "thread_abc123" }
  );

  console.log(message);
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
{
  "id": "msg_abc123",
  "object": "thread.message",
  "created_at": 1699017614,
  "assistant_id": null,
  "thread_id": "thread_abc123",
  "run_id": null,
  "role": "user",
  "content": [\
    {\
      "type": "text",\
      "text": {\
        "value": "How does AI work? Explain it in simple terms.",\
        "annotations": []\
      }\
    }\
  ],
  "attachments": [],
  "metadata": {}
}
```

## Modify message  Beta

posthttps://api.openai.com/v1/threads/{thread\_id}/messages/{message\_id}

Modifies a message.

#### Path parameters

message\_id

string

Required

The ID of the message to modify.

thread\_id

string

Required

The ID of the thread to which this message belongs.

#### Request body

metadata

map

Optional

Set of 16 key-value pairs that can be attached to an object. This can be
useful for storing additional information about the object in a structured
format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings
with a maximum length of 512 characters.

#### Returns

The modified [message](https://platform.openai.com/docs/api-reference/messages/object) object.

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
curl https://api.openai.com/v1/threads/thread_abc123/messages/msg_abc123 \
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
12
from openai import OpenAI
client = OpenAI()

message = client.beta.threads.messages.update(
  message_id="msg_abc12",
  thread_id="thread_abc123",
  metadata={
    "modified": "true",
    "user": "abc123",
  },
)
print(message)
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
  const message = await openai.beta.threads.messages.update(
    "thread_abc123",
    "msg_abc123",
    {
      metadata: {
        modified: "true",
        user: "abc123",
      },
    }
  }'
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
{
  "id": "msg_abc123",
  "object": "thread.message",
  "created_at": 1699017614,
  "assistant_id": null,
  "thread_id": "thread_abc123",
  "run_id": null,
  "role": "user",
  "content": [\
    {\
      "type": "text",\
      "text": {\
        "value": "How does AI work? Explain it in simple terms.",\
        "annotations": []\
      }\
    }\
  ],
  "file_ids": [],
  "metadata": {
    "modified": "true",
    "user": "abc123"
  }
}
```

## Delete message  Beta

deletehttps://api.openai.com/v1/threads/{thread\_id}/messages/{message\_id}

Deletes a message.

#### Path parameters

message\_id

string

Required

The ID of the message to delete.

thread\_id

string

Required

The ID of the thread to which this message belongs.

#### Returns

Deletion status

Example request

curl

```
1
2
3
4
curl -X DELETE https://api.openai.com/v1/threads/thread_abc123/messages/msg_abc123 \
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
6
7
8
from openai import OpenAI
client = OpenAI()

deleted_message = client.beta.threads.messages.delete(
  message_id="msg_abc12",
  thread_id="thread_abc123",
)
print(deleted_message)
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
  const deletedMessage = await openai.beta.threads.messages.delete(
    "msg_abc123",
    { thread_id: "thread_abc123" }
  );

  console.log(deletedMessage);
}
```

Response

```
1
2
3
4
5
{
  "id": "msg_abc123",
  "object": "thread.message.deleted",
  "deleted": true
}
```

## The message object  Beta

Represents a message within a [thread](https://platform.openai.com/docs/api-reference/threads).

assistant\_id

string

If applicable, the ID of the [assistant](https://platform.openai.com/docs/api-reference/assistants) that authored this message.

attachments

array

A list of files attached to the message, and the tools they were added to.

Show properties

completed\_at

integer

The Unix timestamp (in seconds) for when the message was completed.

content

array

The content of the message in array of text and/or images.

Show possible types

created\_at

integer

The Unix timestamp (in seconds) for when the message was created.

id

string

The identifier, which can be referenced in API endpoints.

incomplete\_at

integer

The Unix timestamp (in seconds) for when the message was marked as incomplete.

incomplete\_details

object

On an incomplete message, details about why the message is incomplete.

Show properties

metadata

map

Set of 16 key-value pairs that can be attached to an object. This can be
useful for storing additional information about the object in a structured
format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings
with a maximum length of 512 characters.

object

string

The object type, which is always `thread.message`.

role

string

The entity that produced the message. One of `user` or `assistant`.

run\_id

string

The ID of the [run](https://platform.openai.com/docs/api-reference/runs) associated with the creation of this message. Value is `null` when messages are created manually using the create message or create thread endpoints.

status

string

The status of the message, which can be either `in_progress`, `incomplete`, or `completed`.

thread\_id

string

The [thread](https://platform.openai.com/docs/api-reference/threads) ID that this message belongs to.

OBJECT The message object

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
  "id": "msg_abc123",
  "object": "thread.message",
  "created_at": 1698983503,
  "thread_id": "thread_abc123",
  "role": "assistant",
  "content": [\
    {\
      "type": "text",\
      "text": {\
        "value": "Hi! How can I help you today?",\
        "annotations": []\
      }\
    }\
  ],
  "assistant_id": "asst_abc123",
  "run_id": "run_abc123",
  "attachments": [],
  "metadata": {}
}
```

[PreviousThreads](https://platform.openai.com/docs/api-reference/threads) [NextRuns](https://platform.openai.com/docs/api-reference/runs)

We use cookies and similar technologies to deliver, maintain, improve our services and for security purposes. Check our [Cookie Policy](https://openai.com/policies/cookie-policy) for details. Click 'Accept all' to let OpenAI and partners use cookies for these purposes. Click 'Reject all' to say no to cookies, except those that are strictly necessary. Choose 'Manage Cookies' to pick specific cookies you're okay with or to change your preferences.

Reject allAccept all