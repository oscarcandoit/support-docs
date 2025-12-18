---
url: "https://platform.openai.com/docs/api-reference/project-rate-limits"
title: "Project rate limits | OpenAI API Reference"
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

[List project rate limits](https://platform.openai.com/docs/api-reference/project-rate-limits/list)

[Modify project rate limit](https://platform.openai.com/docs/api-reference/project-rate-limits/update)

[The project rate limit object](https://platform.openai.com/docs/api-reference/project-rate-limits/object)

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

## Project rate limits

Manage rate limits per model for projects. Rate limits may be configured to be equal to or lower than the organization's rate limits.

## List project rate limits

gethttps://api.openai.com/v1/organization/projects/{project\_id}/rate\_limits

Returns the rate limits per model for a project.

#### Path parameters

project\_id

string

Required

The ID of the project.

#### Query parameters

after

string

Optional

A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj\_foo, your subsequent call can include after=obj\_foo in order to fetch the next page of the list.

before

string

Optional

A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, beginning with obj\_foo, your subsequent call can include before=obj\_foo in order to fetch the previous page of the list.

limit

integer

Optional

Defaults to 100

A limit on the number of objects to be returned. The default is 100.

#### Returns

A list of [ProjectRateLimit](https://platform.openai.com/docs/api-reference/project-rate-limits/object) objects.

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/organization/projects/proj_abc/rate_limits?after=rl_xxx&limit=20 \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json"
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
    "object": "list",
    "data": [\
        {\
          "object": "project.rate_limit",\
          "id": "rl-ada",\
          "model": "ada",\
          "max_requests_per_1_minute": 600,\
          "max_tokens_per_1_minute": 150000,\
          "max_images_per_1_minute": 10\
        }\
    ],
    "first_id": "rl-ada",
    "last_id": "rl-ada",
    "has_more": false
}
```

## Modify project rate limit

posthttps://api.openai.com/v1/organization/projects/{project\_id}/rate\_limits/{rate\_limit\_id}

Updates a project rate limit.

#### Path parameters

project\_id

string

Required

The ID of the project.

rate\_limit\_id

string

Required

The ID of the rate limit.

#### Request body

batch\_1\_day\_max\_input\_tokens

integer

Optional

The maximum batch input tokens per day. Only relevant for certain models.

max\_audio\_megabytes\_per\_1\_minute

integer

Optional

The maximum audio megabytes per minute. Only relevant for certain models.

max\_images\_per\_1\_minute

integer

Optional

The maximum images per minute. Only relevant for certain models.

max\_requests\_per\_1\_day

integer

Optional

The maximum requests per day. Only relevant for certain models.

max\_requests\_per\_1\_minute

integer

Optional

The maximum requests per minute.

max\_tokens\_per\_1\_minute

integer

Optional

The maximum tokens per minute.

#### Returns

The updated [ProjectRateLimit](https://platform.openai.com/docs/api-reference/project-rate-limits/object) object.

Example request

curl

```
1
2
3
4
5
6
curl -X POST https://api.openai.com/v1/organization/projects/proj_abc/rate_limits/rl_xxx \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "max_requests_per_1_minute": 500
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
{
    "object": "project.rate_limit",
    "id": "rl-ada",
    "model": "ada",
    "max_requests_per_1_minute": 600,
    "max_tokens_per_1_minute": 150000,
    "max_images_per_1_minute": 10
  }
```

## The project rate limit object

Represents a project rate limit config.

batch\_1\_day\_max\_input\_tokens

integer

The maximum batch input tokens per day. Only present for relevant models.

id

string

The identifier, which can be referenced in API endpoints.

max\_audio\_megabytes\_per\_1\_minute

integer

The maximum audio megabytes per minute. Only present for relevant models.

max\_images\_per\_1\_minute

integer

The maximum images per minute. Only present for relevant models.

max\_requests\_per\_1\_day

integer

The maximum requests per day. Only present for relevant models.

max\_requests\_per\_1\_minute

integer

The maximum requests per minute.

max\_tokens\_per\_1\_minute

integer

The maximum tokens per minute.

model

string

The model this rate limit applies to.

object

string

The object type, which is always `project.rate_limit`

OBJECT The project rate limit object

```
1
2
3
4
5
6
7
8
{
    "object": "project.rate_limit",
    "id": "rl_ada",
    "model": "ada",
    "max_requests_per_1_minute": 600,
    "max_tokens_per_1_minute": 150000,
    "max_images_per_1_minute": 10
}
```

[PreviousProject API keys](https://platform.openai.com/docs/api-reference/project-api-keys) [NextAudit logs](https://platform.openai.com/docs/api-reference/audit-logs)