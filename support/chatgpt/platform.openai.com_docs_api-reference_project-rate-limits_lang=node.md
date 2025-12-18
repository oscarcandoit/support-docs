---
url: "https://platform.openai.com/docs/api-reference/project-rate-limits?lang=node"
title: "Project rate limits | OpenAI API Reference"
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

[List project rate limits](https://platform.openai.com/docs/api-reference/project-rate-limits/list?lang=node)

[Modify project rate limit](https://platform.openai.com/docs/api-reference/project-rate-limits/update?lang=node)

[The project rate limit object](https://platform.openai.com/docs/api-reference/project-rate-limits/object?lang=node)

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

[PreviousProject API keys](https://platform.openai.com/docs/api-reference/project-api-keys?lang=node) [NextAudit logs](https://platform.openai.com/docs/api-reference/audit-logs?lang=node)