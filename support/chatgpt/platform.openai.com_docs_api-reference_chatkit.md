---
url: "https://platform.openai.com/docs/api-reference/chatkit"
title: "ChatKit | OpenAI API Reference"
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

[Create ChatKit session](https://platform.openai.com/docs/api-reference/chatkit/sessions/create)

[Cancel chat session](https://platform.openai.com/docs/api-reference/chatkit/sessions/cancel)

[List ChatKit threads](https://platform.openai.com/docs/api-reference/chatkit/threads/list)

[Retrieve ChatKit thread](https://platform.openai.com/docs/api-reference/chatkit/threads/retrieve)

[Delete ChatKit thread](https://platform.openai.com/docs/api-reference/chatkit/threads/delete)

[List ChatKit thread items](https://platform.openai.com/docs/api-reference/chatkit/threads/list-items)

[The chat session object](https://platform.openai.com/docs/api-reference/chatkit/sessions/object)

[The thread object](https://platform.openai.com/docs/api-reference/chatkit/threads/object)

[Thread Items](https://platform.openai.com/docs/api-reference/chatkit/threads/item-list)

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

## ChatKit  Beta

Manage ChatKit sessions, threads, and file uploads for internal integrations.

## Create ChatKit session  Beta

posthttps://api.openai.com/v1/chatkit/sessions

Create a ChatKit session.

#### Request body

user

string

Required

A free-form string that identifies your end user; ensures this Session can access other objects that have the same `user` scope.

workflow

object

Required

Workflow that powers the session.

Show properties

chatkit\_configuration

object

Optional

Optional overrides for ChatKit runtime configuration features

Show properties

expires\_after

object

Optional

Optional override for session expiration timing in seconds from creation. Defaults to 10 minutes.

Show properties

rate\_limits

object

Optional

Optional override for per-minute request limits. When omitted, defaults to 10.

Show properties

#### Returns

Returns a [ChatKit session](https://platform.openai.com/docs/api-reference/chatkit/sessions/object) object.

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
11
12
13
14
15
16
17
curl https://api.openai.com/v1/chatkit/sessions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Beta: chatkit_beta=v1" \
  -d '{
    "workflow": {
      "id": "workflow_alpha",
      "version": "2024-10-01"
    },
    "scope": {
      "project": "alpha",
      "environment": "staging"
    },
    "expires_after": 1800,
    "max_requests_per_1_minute": 60,
    "max_requests_per_session": 500
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
import OpenAI from 'openai';

const client = new OpenAI();

const chatSession = await client.beta.chatkit.sessions.create({ user: 'user', workflow: { id: 'id' } });

console.log(chatSession.id);
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
from openai import OpenAI

client = OpenAI()
chat_session = client.beta.chatkit.sessions.create(
    user="user",
    workflow={
        "id": "id"
    },
)
print(chat_session.id)
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
17
18
19
20
21
22
23
package main

import (
  "context"
  "fmt"

  "github.com/openai/openai-go"
  "github.com/openai/openai-go/option"
)

func main() {
  client := openai.NewClient()
  chatSession, err := client.Beta.ChatKit.Sessions.New(context.TODO(), openai.BetaChatKitSessionNewParams{
    User: "user",
    Workflow: openai.ChatSessionWorkflowParam{
      ID: "id",
    },
  })
  if err != nil {
    panic(err.Error())
  }
  fmt.Printf("%+v\n", chatSession.ID)
}
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
17
18
19
20
21
22
23
package com.openai.example;

import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.beta.chatkit.sessions.SessionCreateParams;
import com.openai.models.beta.chatkit.threads.ChatSession;
import com.openai.models.beta.chatkit.threads.ChatSessionWorkflowParam;

public final class Main {
    private Main() {}

    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.fromEnv();

        SessionCreateParams params = SessionCreateParams.builder()
            .user("user")
            .workflow(ChatSessionWorkflowParam.builder()
                .id("id")
                .build())
            .build();
        ChatSession chatSession = client.beta().chatkit().sessions().create(params);
    }
}
```

```
1
2
3
4
5
6
7
require "openai"

openai = OpenAI::Client.new

chat_session = openai.beta.chatkit.sessions.create(user: "user", workflow: {id: "id"})

puts(chat_session)
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
  "client_secret": "chatkit_token_123",
  "expires_at": 1735689600,
  "workflow": {
    "id": "workflow_alpha",
    "version": "2024-10-01"
  },
  "scope": {
    "project": "alpha",
    "environment": "staging"
  },
  "max_requests_per_1_minute": 60,
  "max_requests_per_session": 500,
  "status": "active"
}
```

## Cancel chat session  Beta

posthttps://api.openai.com/v1/chatkit/sessions/{session\_id}/cancel

Cancel an active ChatKit session and return its most recent metadata.

#### Path parameters

session\_id

string

Required

Unique identifier for the ChatKit session to cancel.

#### Returns

Returns the chat session after it has been cancelled. Cancelling prevents new requests from using the issued client secret.

Example request

curl

```
1
2
3
4
curl -X POST \
  https://api.openai.com/v1/chatkit/sessions/cksess_123/cancel \
  -H "OpenAI-Beta: chatkit_beta=v1" \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

```
1
2
3
4
5
6
7
import OpenAI from 'openai';

const client = new OpenAI();

const chatSession = await client.beta.chatkit.sessions.cancel('cksess_123');

console.log(chatSession.id);
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
chat_session = client.beta.chatkit.sessions.cancel(
    "cksess_123",
)
print(chat_session.id)
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
17
18
package main

import (
  "context"
  "fmt"

  "github.com/openai/openai-go"
  "github.com/openai/openai-go/option"
)

func main() {
  client := openai.NewClient()
  chatSession, err := client.Beta.ChatKit.Sessions.Cancel(context.TODO(), "cksess_123")
  if err != nil {
    panic(err.Error())
  }
  fmt.Printf("%+v\n", chatSession.ID)
}
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
package com.openai.example;

import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.beta.chatkit.sessions.SessionCancelParams;
import com.openai.models.beta.chatkit.threads.ChatSession;

public final class Main {
    private Main() {}

    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.fromEnv();

        ChatSession chatSession = client.beta().chatkit().sessions().cancel("cksess_123");
    }
}
```

```
1
2
3
4
5
6
7
require "openai"

openai = OpenAI::Client.new

chat_session = openai.beta.chatkit.sessions.cancel("cksess_123")

puts(chat_session)
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
  "id": "cksess_123",
  "object": "chatkit.session",
  "workflow": {
    "id": "workflow_alpha",
    "version": "1"
  },
  "scope": {
    "customer_id": "cust_456"
  },
  "max_requests_per_1_minute": 30,
  "ttl_seconds": 900,
  "status": "cancelled",
  "cancelled_at": 1712345678
}
```

## List ChatKit threads  Beta

gethttps://api.openai.com/v1/chatkit/threads

List ChatKit threads with optional pagination and user filters.

#### Query parameters

after

string

Optional

List items created after this thread item ID. Defaults to null for the first page.

before

string

Optional

List items created before this thread item ID. Defaults to null for the newest results.

limit

integer

Optional

Maximum number of thread items to return. Defaults to 20.

order

string

Optional

Sort order for results by creation time. Defaults to `desc`.

user

string

Optional

Filter threads that belong to this user identifier. Defaults to null to return all users.

#### Returns

Returns a paginated list of ChatKit threads accessible to the request scope.

Example request

curl

```
1
2
3
curl "https://api.openai.com/v1/chatkit/threads?limit=2&order=desc" \
  -H "OpenAI-Beta: chatkit_beta=v1" \
  -H "Authorization: Bearer $OPENAI_API_KEY"
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
import OpenAI from 'openai';

const client = new OpenAI();

// Automatically fetches more pages as needed.
for await (const chatkitThread of client.beta.chatkit.threads.list()) {
  console.log(chatkitThread.id);
}
```

```
1
2
3
4
5
6
from openai import OpenAI

client = OpenAI()
page = client.beta.chatkit.threads.list()
page = page.data[0]
print(page.id)
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
17
18
19
package main

import (
  "context"
  "fmt"

  "github.com/openai/openai-go"
)

func main() {
  client := openai.NewClient()
  page, err := client.Beta.ChatKit.Threads.List(context.TODO(), openai.BetaChatKitThreadListParams{

  })
  if err != nil {
    panic(err.Error())
  }
  fmt.Printf("%+v\n", page)
}
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
package com.openai.example;

import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.beta.chatkit.threads.ThreadListPage;
import com.openai.models.beta.chatkit.threads.ThreadListParams;

public final class Main {
    private Main() {}

    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.fromEnv();

        ThreadListPage page = client.beta().chatkit().threads().list();
    }
}
```

```
1
2
3
4
5
6
7
require "openai"

openai = OpenAI::Client.new

page = openai.beta.chatkit.threads.list

puts(page)
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
{
  "data": [\
    {\
      "id": "cthr_abc123",\
      "object": "chatkit.thread",\
      "title": "Customer escalation"\
    },\
    {\
      "id": "cthr_def456",\
      "object": "chatkit.thread",\
      "title": "Demo feedback"\
    }\
  ],
  "has_more": false,
  "object": "list"
}
```

## Retrieve ChatKit thread  Beta

gethttps://api.openai.com/v1/chatkit/threads/{thread\_id}

Retrieve a ChatKit thread by its identifier.

#### Path parameters

thread\_id

string

Required

Identifier of the ChatKit thread to retrieve.

#### Returns

Returns a [Thread](https://platform.openai.com/docs/api-reference/chatkit/threads/object) object.

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/chatkit/threads/cthr_abc123 \
  -H "OpenAI-Beta: chatkit_beta=v1" \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

```
1
2
3
4
5
6
7
import OpenAI from 'openai';

const client = new OpenAI();

const chatkitThread = await client.beta.chatkit.threads.retrieve('cthr_123');

console.log(chatkitThread.id);
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
chatkit_thread = client.beta.chatkit.threads.retrieve(
    "cthr_123",
)
print(chatkit_thread.id)
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
17
package main

import (
  "context"
  "fmt"

  "github.com/openai/openai-go"
)

func main() {
  client := openai.NewClient()
  chatkitThread, err := client.Beta.ChatKit.Threads.Get(context.TODO(), "cthr_123")
  if err != nil {
    panic(err.Error())
  }
  fmt.Printf("%+v\n", chatkitThread.ID)
}
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
package com.openai.example;

import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.beta.chatkit.threads.ChatKitThread;
import com.openai.models.beta.chatkit.threads.ThreadRetrieveParams;

public final class Main {
    private Main() {}

    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.fromEnv();

        ChatKitThread chatkitThread = client.beta().chatkit().threads().retrieve("cthr_123");
    }
}
```

```
1
2
3
4
5
6
7
require "openai"

openai = OpenAI::Client.new

chatkit_thread = openai.beta.chatkit.threads.retrieve("cthr_123")

puts(chatkit_thread)
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
{
  "id": "cthr_abc123",
  "object": "chatkit.thread",
  "title": "Customer escalation",
  "items": {
    "data": [\
      {\
        "id": "cthi_user_001",\
        "object": "chatkit.thread_item",\
        "type": "user_message",\
        "content": [\
          {\
            "type": "input_text",\
            "text": "I need help debugging an onboarding issue."\
          }\
        ],\
        "attachments": []\
      },\
      {\
        "id": "cthi_assistant_002",\
        "object": "chatkit.thread_item",\
        "type": "assistant_message",\
        "content": [\
          {\
            "type": "output_text",\
            "text": "Let's start by confirming the workflow version you deployed."\
          }\
        ]\
      }\
    ],
    "has_more": false
  }
}
```

## Delete ChatKit thread  Beta

deletehttps://api.openai.com/v1/chatkit/threads/{thread\_id}

Delete a ChatKit thread along with its items and stored attachments.

#### Path parameters

thread\_id

string

Required

Identifier of the ChatKit thread to delete.

#### Returns

Returns a confirmation object for the deleted thread.

Example request

node.js

```
1
2
3
4
5
6
7
import OpenAI from 'openai';

const client = new OpenAI();

const thread = await client.beta.chat_kit.threads.delete('cthr_123');

console.log(thread.id);
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
thread = client.beta.chat_kit.threads.delete(
    "cthr_123",
)
print(thread.id)
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
17
package main

import (
  "context"
  "fmt"

  "github.com/openai/openai-go"
)

func main() {
  client := openai.NewClient()
  thread, err := client.Beta.ChatKit.Threads.Delete(context.TODO(), "cthr_123")
  if err != nil {
    panic(err.Error())
  }
  fmt.Printf("%+v\n", thread.ID)
}
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
package com.openai.example;

import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.beta.chat_kit.threads.ThreadDeleteParams;
import com.openai.models.beta.chat_kit.threads.ThreadDeleteResponse;

public final class Main {
    private Main() {}

    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.fromEnv();

        ThreadDeleteResponse thread = client.beta().chat_kit().threads().delete("cthr_123");
    }
}
```

```
1
2
3
4
5
6
7
require "openai"

openai = OpenAI::Client.new

thread = openai.beta.chat_kit.threads.delete("cthr_123")

puts(thread)
```

## List ChatKit thread items  Beta

gethttps://api.openai.com/v1/chatkit/threads/{thread\_id}/items

List items that belong to a ChatKit thread.

#### Path parameters

thread\_id

string

Required

Identifier of the ChatKit thread whose items are requested.

#### Query parameters

after

string

Optional

List items created after this thread item ID. Defaults to null for the first page.

before

string

Optional

List items created before this thread item ID. Defaults to null for the newest results.

limit

integer

Optional

Maximum number of thread items to return. Defaults to 20.

order

string

Optional

Sort order for results by creation time. Defaults to `desc`.

#### Returns

Returns a [list of thread items](https://platform.openai.com/docs/api-reference/chatkit/threads/item-list) for the specified thread.

Example request

curl

```
1
2
3
curl "https://api.openai.com/v1/chatkit/threads/cthr_abc123/items?limit=3" \
  -H "OpenAI-Beta: chatkit_beta=v1" \
  -H "Authorization: Bearer $OPENAI_API_KEY"
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
import OpenAI from 'openai';

const client = new OpenAI();

// Automatically fetches more pages as needed.
for await (const thread of client.beta.chatkit.threads.listItems('cthr_123')) {
  console.log(thread);
}
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
page = client.beta.chatkit.threads.list_items(
    thread_id="cthr_123",
)
page = page.data[0]
print(page)
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
17
18
19
20
21
22
23
24
package main

import (
  "context"
  "fmt"

  "github.com/openai/openai-go"
  "github.com/openai/openai-go/option"
)

func main() {
  client := openai.NewClient()
  page, err := client.Beta.ChatKit.Threads.ListItems(
    context.TODO(),
    "cthr_123",
    openai.BetaChatKitThreadListItemsParams{

    },
  )
  if err != nil {
    panic(err.Error())
  }
  fmt.Printf("%+v\n", page)
}
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
package com.openai.example;

import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.beta.chatkit.threads.ThreadListItemsPage;
import com.openai.models.beta.chatkit.threads.ThreadListItemsParams;

public final class Main {
    private Main() {}

    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.fromEnv();

        ThreadListItemsPage page = client.beta().chatkit().threads().listItems("cthr_123");
    }
}
```

```
1
2
3
4
5
6
7
require "openai"

openai = OpenAI::Client.new

page = openai.beta.chatkit.threads.list_items("cthr_123")

puts(page)
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
{
  "data": [\
    {\
      "id": "cthi_user_001",\
      "object": "chatkit.thread_item",\
      "type": "user_message",\
      "content": [\
        {\
          "type": "input_text",\
          "text": "I need help debugging an onboarding issue."\
        }\
      ],\
      "attachments": []\
    },\
    {\
      "id": "cthi_assistant_002",\
      "object": "chatkit.thread_item",\
      "type": "assistant_message",\
      "content": [\
        {\
          "type": "output_text",\
          "text": "Let's start by confirming the workflow version you deployed."\
        }\
      ]\
    }\
  ],
  "has_more": false,
  "object": "list"
}
```

## The chat session object

Represents a ChatKit session and its resolved configuration.

chatkit\_configuration

object

Resolved ChatKit feature configuration for the session.

Show properties

client\_secret

string

Ephemeral client secret that authenticates session requests.

expires\_at

integer

Unix timestamp (in seconds) for when the session expires.

id

string

Identifier for the ChatKit session.

max\_requests\_per\_1\_minute

integer

Convenience copy of the per-minute request limit.

object

string

Type discriminator that is always `chatkit.session`.

rate\_limits

object

Resolved rate limit values.

Show properties

status

string

Current lifecycle state of the session.

user

string

User identifier associated with the session.

workflow

object

Workflow metadata for the session.

Show properties

OBJECT The chat session object

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
{
  "id": "cksess_123",
  "object": "chatkit.session",
  "client_secret": "ek_token_123",
  "expires_at": 1712349876,
  "workflow": {
    "id": "workflow_alpha",
    "version": "2024-10-01"
  },
  "user": "user_789",
  "rate_limits": {
    "max_requests_per_1_minute": 60
  },
  "max_requests_per_1_minute": 60,
  "status": "cancelled",
  "chatkit_configuration": {
    "automatic_thread_titling": {
      "enabled": true
    },
    "file_upload": {
      "enabled": true,
      "max_file_size": 16,
      "max_files": 20
    },
    "history": {
      "enabled": true,
      "recent_threads": 10
    }
  }
}
```

## The thread object

Represents a ChatKit thread and its current status.

created\_at

integer

Unix timestamp (in seconds) for when the thread was created.

id

string

Identifier of the thread.

object

string

Type discriminator that is always `chatkit.thread`.

status

object

Current status for the thread. Defaults to `active` for newly created threads.

Show possible types

title

string

Optional human-readable title for the thread. Defaults to null when no title has been generated.

user

string

Free-form string that identifies your end user who owns the thread.

OBJECT The thread object

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
  "id": "cthr_def456",
  "object": "chatkit.thread",
  "created_at": 1712345600,
  "title": "Demo feedback",
  "status": {
    "type": "active"
  },
  "user": "user_456"
}
```

## Thread Items

A paginated list of thread items rendered for the ChatKit API.

data

array

A list of items

Show possible types

first\_id

string

The ID of the first item in the list.

has\_more

boolean

Whether there are more items available.

last\_id

string

The ID of the last item in the list.

object

string

The type of object returned, must be `list`.

[PreviousVector store file batches](https://platform.openai.com/docs/api-reference/vector-stores-file-batches) [NextContainers](https://platform.openai.com/docs/api-reference/containers)