---
url: "https://platform.openai.com/docs/api-reference/run-steps"
title: "Run steps | OpenAI API Reference"
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

[Runs](https://platform.openai.com/docs/api-reference/runs)

[Run steps](https://platform.openai.com/docs/api-reference/run-steps)

[List run steps](https://platform.openai.com/docs/api-reference/run-steps/listRunSteps)

[Retrieve run step](https://platform.openai.com/docs/api-reference/run-steps/getRunStep)

[The run step object](https://platform.openai.com/docs/api-reference/run-steps/step-object)

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

## Run steps  Beta

Represents the steps (model and tool calls) taken during the run.

Related guide: [Assistants](https://platform.openai.com/docs/assistants/overview)

## List run steps  Beta

gethttps://api.openai.com/v1/threads/{thread\_id}/runs/{run\_id}/steps

Returns a list of run steps belonging to a run.

#### Path parameters

run\_id

string

Required

The ID of the run the run steps belong to.

thread\_id

string

Required

The ID of the thread the run and run steps belong to.

#### Query parameters

after

string

Optional

A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj\_foo, your subsequent call can include after=obj\_foo in order to fetch the next page of the list.

before

string

Optional

A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj\_foo, your subsequent call can include before=obj\_foo in order to fetch the previous page of the list.

include\[\]

array

Optional

A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.

See the [file search tool documentation](https://platform.openai.com/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.

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

A list of [run step](https://platform.openai.com/docs/api-reference/run-steps/step-object) objects.

Example request

curl

```
1
2
3
4
curl https://api.openai.com/v1/threads/thread_abc123/runs/run_abc123/steps \
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
8
9
from openai import OpenAI
client = OpenAI()

run_steps = client.beta.threads.runs.steps.list(
    thread_id="thread_abc123",
    run_id="run_abc123"
)

print(run_steps)
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
  const runStep = await openai.beta.threads.runs.steps.list(
    "run_abc123",
    { thread_id: "thread_abc123" }
  );
  console.log(runStep);
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
{
  "object": "list",
  "data": [\
    {\
      "id": "step_abc123",\
      "object": "thread.run.step",\
      "created_at": 1699063291,\
      "run_id": "run_abc123",\
      "assistant_id": "asst_abc123",\
      "thread_id": "thread_abc123",\
      "type": "message_creation",\
      "status": "completed",\
      "cancelled_at": null,\
      "completed_at": 1699063291,\
      "expired_at": null,\
      "failed_at": null,\
      "last_error": null,\
      "step_details": {\
        "type": "message_creation",\
        "message_creation": {\
          "message_id": "msg_abc123"\
        }\
      },\
      "usage": {\
        "prompt_tokens": 123,\
        "completion_tokens": 456,\
        "total_tokens": 579\
      }\
    }\
  ],
  "first_id": "step_abc123",
  "last_id": "step_abc456",
  "has_more": false
}
```

## Retrieve run step  Beta

gethttps://api.openai.com/v1/threads/{thread\_id}/runs/{run\_id}/steps/{step\_id}

Retrieves a run step.

#### Path parameters

run\_id

string

Required

The ID of the run to which the run step belongs.

step\_id

string

Required

The ID of the run step to retrieve.

thread\_id

string

Required

The ID of the thread to which the run and run step belongs.

#### Query parameters

include\[\]

array

Optional

A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.

See the [file search tool documentation](https://platform.openai.com/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.

#### Returns

The [run step](https://platform.openai.com/docs/api-reference/run-steps/step-object) object matching the specified ID.

Example request

curl

```
1
2
3
4
curl https://api.openai.com/v1/threads/thread_abc123/runs/run_abc123/steps/step_abc123 \
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
8
9
10
from openai import OpenAI
client = OpenAI()

run_step = client.beta.threads.runs.steps.retrieve(
    thread_id="thread_abc123",
    run_id="run_abc123",
    step_id="step_abc123"
)

print(run_step)
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
  const runStep = await openai.beta.threads.runs.steps.retrieve(
    "step_abc123",
    { thread_id: "thread_abc123", run_id: "run_abc123" }
  );
  console.log(runStep);
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
{
  "id": "step_abc123",
  "object": "thread.run.step",
  "created_at": 1699063291,
  "run_id": "run_abc123",
  "assistant_id": "asst_abc123",
  "thread_id": "thread_abc123",
  "type": "message_creation",
  "status": "completed",
  "cancelled_at": null,
  "completed_at": 1699063291,
  "expired_at": null,
  "failed_at": null,
  "last_error": null,
  "step_details": {
    "type": "message_creation",
    "message_creation": {
      "message_id": "msg_abc123"
    }
  },
  "usage": {
    "prompt_tokens": 123,
    "completion_tokens": 456,
    "total_tokens": 579
  }
}
```

## The run step object  Beta

Represents a step in execution of a run.

assistant\_id

string

The ID of the [assistant](https://platform.openai.com/docs/api-reference/assistants) associated with the run step.

cancelled\_at

integer

The Unix timestamp (in seconds) for when the run step was cancelled.

completed\_at

integer

The Unix timestamp (in seconds) for when the run step completed.

created\_at

integer

The Unix timestamp (in seconds) for when the run step was created.

expired\_at

integer

The Unix timestamp (in seconds) for when the run step expired. A step is considered expired if the parent run is expired.

failed\_at

integer

The Unix timestamp (in seconds) for when the run step failed.

id

string

The identifier of the run step, which can be referenced in API endpoints.

last\_error

object

The last error associated with this run step. Will be `null` if there are no errors.

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

The object type, which is always `thread.run.step`.

run\_id

string

The ID of the [run](https://platform.openai.com/docs/api-reference/runs) that this run step is a part of.

status

string

The status of the run step, which can be either `in_progress`, `cancelled`, `failed`, `completed`, or `expired`.

step\_details

object

The details of the run step.

Show possible types

thread\_id

string

The ID of the [thread](https://platform.openai.com/docs/api-reference/threads) that was run.

type

string

The type of run step, which can be either `message_creation` or `tool_calls`.

usage

object

Usage statistics related to the run step. This value will be `null` while the run step's status is `in_progress`.

Show properties

OBJECT The run step object

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
{
  "id": "step_abc123",
  "object": "thread.run.step",
  "created_at": 1699063291,
  "run_id": "run_abc123",
  "assistant_id": "asst_abc123",
  "thread_id": "thread_abc123",
  "type": "message_creation",
  "status": "completed",
  "cancelled_at": null,
  "completed_at": 1699063291,
  "expired_at": null,
  "failed_at": null,
  "last_error": null,
  "step_details": {
    "type": "message_creation",
    "message_creation": {
      "message_id": "msg_abc123"
    }
  },
  "usage": {
    "prompt_tokens": 123,
    "completion_tokens": 456,
    "total_tokens": 579
  }
}
```

[PreviousRuns](https://platform.openai.com/docs/api-reference/runs) [NextStreaming](https://platform.openai.com/docs/api-reference/assistants-streaming)