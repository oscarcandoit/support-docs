---
url: "https://platform.openai.com/docs/api-reference/run-steps?lang=node"
title: "Run steps | OpenAI API Reference"
---

[DocsDocs](https://platform.openai.com/docs) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

Log in [Sign up](https://platform.openai.com/signup)

Search`` `K`

API Reference

[Introduction](https://platform.openai.com/docs/api-reference/introduction?lang=node)

[Authentication](https://platform.openai.com/docs/api-reference/authentication?lang=node)

[Debugging requests](https://platform.openai.com/docs/api-reference/debugging-requests?lang=node)

[Backward compatibility](https://platform.openai.com/docs/api-reference/backward-compatibility?lang=node)

Responses API

[Responses](https://platform.openai.com/docs/api-reference/responses?lang=node)

[Conversations](https://platform.openai.com/docs/api-reference/conversations?lang=node)

[Streaming events](https://platform.openai.com/docs/api-reference/responses-streaming?lang=node)

Webhooks

[Webhook Events](https://platform.openai.com/docs/api-reference/webhook-events?lang=node)

Platform APIs

[Audio](https://platform.openai.com/docs/api-reference/audio?lang=node)

[Videos](https://platform.openai.com/docs/api-reference/videos?lang=node)

[Images](https://platform.openai.com/docs/api-reference/images?lang=node)

[Image Streaming](https://platform.openai.com/docs/api-reference/images-streaming?lang=node)

[Embeddings](https://platform.openai.com/docs/api-reference/embeddings?lang=node)

[Evals](https://platform.openai.com/docs/api-reference/evals?lang=node)

[Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning?lang=node)

[Graders](https://platform.openai.com/docs/api-reference/graders?lang=node)

[Batch](https://platform.openai.com/docs/api-reference/batch?lang=node)

[Files](https://platform.openai.com/docs/api-reference/files?lang=node)

[Uploads](https://platform.openai.com/docs/api-reference/uploads?lang=node)

[Models](https://platform.openai.com/docs/api-reference/models?lang=node)

[Moderations](https://platform.openai.com/docs/api-reference/moderations?lang=node)

Vector stores

[Vector stores](https://platform.openai.com/docs/api-reference/vector-stores?lang=node)

[Vector store files](https://platform.openai.com/docs/api-reference/vector-stores-files?lang=node)

[Vector store file batches](https://platform.openai.com/docs/api-reference/vector-stores-file-batches?lang=node)

ChatKit

Beta

[ChatKit](https://platform.openai.com/docs/api-reference/chatkit?lang=node)

Containers

[Containers](https://platform.openai.com/docs/api-reference/containers?lang=node)

[Container Files](https://platform.openai.com/docs/api-reference/container-files?lang=node)

Realtime

[Realtime](https://platform.openai.com/docs/api-reference/realtime?lang=node)

[Client secrets](https://platform.openai.com/docs/api-reference/realtime-sessions?lang=node)

[Calls](https://platform.openai.com/docs/api-reference/realtime-calls?lang=node)

[Client events](https://platform.openai.com/docs/api-reference/realtime-client-events?lang=node)

[Server events](https://platform.openai.com/docs/api-reference/realtime-server-events?lang=node)

Chat Completions

[Chat Completions](https://platform.openai.com/docs/api-reference/chat?lang=node)

[Streaming](https://platform.openai.com/docs/api-reference/chat-streaming?lang=node)

Assistants

Beta

[Assistants](https://platform.openai.com/docs/api-reference/assistants?lang=node)

[Threads](https://platform.openai.com/docs/api-reference/threads?lang=node)

[Messages](https://platform.openai.com/docs/api-reference/messages?lang=node)

[Runs](https://platform.openai.com/docs/api-reference/runs?lang=node)

[Run steps](https://platform.openai.com/docs/api-reference/run-steps?lang=node)

[List run steps](https://platform.openai.com/docs/api-reference/run-steps/listRunSteps?lang=node)

[Retrieve run step](https://platform.openai.com/docs/api-reference/run-steps/getRunStep?lang=node)

[The run step object](https://platform.openai.com/docs/api-reference/run-steps/step-object?lang=node)

[Streaming](https://platform.openai.com/docs/api-reference/assistants-streaming?lang=node)

Administration

[Administration](https://platform.openai.com/docs/api-reference/administration?lang=node)

[Admin API Keys](https://platform.openai.com/docs/api-reference/admin-api-keys?lang=node)

[Invites](https://platform.openai.com/docs/api-reference/invite?lang=node)

[Users](https://platform.openai.com/docs/api-reference/users?lang=node)

[Groups](https://platform.openai.com/docs/api-reference/groups?lang=node)

[Roles](https://platform.openai.com/docs/api-reference/roles?lang=node)

[Role assignments](https://platform.openai.com/docs/api-reference/role-assignments?lang=node)

[Projects](https://platform.openai.com/docs/api-reference/projects?lang=node)

[Project users](https://platform.openai.com/docs/api-reference/project-users?lang=node)

[Project groups](https://platform.openai.com/docs/api-reference/project-groups?lang=node)

[Project service accounts](https://platform.openai.com/docs/api-reference/project-service-accounts?lang=node)

[Project API keys](https://platform.openai.com/docs/api-reference/project-api-keys?lang=node)

[Project rate limits](https://platform.openai.com/docs/api-reference/project-rate-limits?lang=node)

[Audit logs](https://platform.openai.com/docs/api-reference/audit-logs?lang=node)

[Usage](https://platform.openai.com/docs/api-reference/usage?lang=node)

[Certificates](https://platform.openai.com/docs/api-reference/certificates?lang=node)

Legacy

[Completions](https://platform.openai.com/docs/api-reference/completions?lang=node)

[Realtime Beta](https://platform.openai.com/docs/api-reference/realtime_beta?lang=node)

[Realtime Beta session tokens](https://platform.openai.com/docs/api-reference/realtime-beta-sessions?lang=node)

[Realtime Beta client events](https://platform.openai.com/docs/api-reference/realtime-beta-client-events?lang=node)

[Realtime Beta server events](https://platform.openai.com/docs/api-reference/realtime-beta-server-events?lang=node)

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

[PreviousRuns](https://platform.openai.com/docs/api-reference/runs?lang=node) [NextStreaming](https://platform.openai.com/docs/api-reference/assistants-streaming?lang=node)

We use cookies and similar technologies to deliver, maintain, improve our services and for security purposes. Check our [Cookie Policy](https://openai.com/policies/cookie-policy) for details. Click 'Accept all' to let OpenAI and partners use cookies for these purposes. Click 'Reject all' to say no to cookies, except those that are strictly necessary. Choose 'Manage Cookies' to pick specific cookies you're okay with or to change your preferences.

Reject allAccept all