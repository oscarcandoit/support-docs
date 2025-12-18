---
url: "https://platform.openai.com/docs/api-reference/containers"
title: "Containers | OpenAI API Reference"
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

[Create container](https://platform.openai.com/docs/api-reference/containers/createContainers)

[List containers](https://platform.openai.com/docs/api-reference/containers/listContainers)

[Retrieve container](https://platform.openai.com/docs/api-reference/containers/retrieveContainer)

[Delete a container](https://platform.openai.com/docs/api-reference/containers/deleteContainer)

[The container object](https://platform.openai.com/docs/api-reference/containers/object)

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

## Containers

Create and manage containers for use with the Code Interpreter tool.

## Create container

posthttps://api.openai.com/v1/containers

Creates a container.

#### Request body

name

string

Required

Name of the container to create.

expires\_after

object

Optional

Container expiration time in seconds relative to the 'anchor' time.

Show properties

file\_ids

array

Optional

IDs of files to copy to the container.

memory\_limit

string

Optional

Optional memory limit for the container. Defaults to "1g".

#### Returns

The created [container](https://platform.openai.com/docs/api-reference/containers/object) object.

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
curl https://api.openai.com/v1/containers \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
        "name": "My Container",
        "memory_limit": "4g"
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
{
    "id": "cntr_682e30645a488191b6363a0cbefc0f0a025ec61b66250591",
    "object": "container",
    "created_at": 1747857508,
    "status": "running",
    "expires_after": {
        "anchor": "last_active_at",
        "minutes": 20
    },
    "last_active_at": 1747857508,
    "memory_limit": "4g",
    "name": "My Container"
}
```

## List containers

gethttps://api.openai.com/v1/containers

Lists containers.

#### Query parameters

after

string

Optional

A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj\_foo, your subsequent call can include after=obj\_foo in order to fetch the next page of the list.

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

a list of [container](https://platform.openai.com/docs/api-reference/containers/object) objects.

Example request

curl

```
1
2
curl https://api.openai.com/v1/containers \
  -H "Authorization: Bearer $OPENAI_API_KEY"
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
{
  "object": "list",
  "data": [\
    {\
        "id": "cntr_682dfebaacac8198bbfe9c2474fb6f4a085685cbe3cb5863",\
        "object": "container",\
        "created_at": 1747844794,\
        "status": "running",\
        "expires_after": {\
            "anchor": "last_active_at",\
            "minutes": 20\
        },\
        "last_active_at": 1747844794,\
        "memory_limit": "4g",\
        "name": "My Container"\
    }\
  ],
  "first_id": "container_123",
  "last_id": "container_123",
  "has_more": false
}
```

## Retrieve container

gethttps://api.openai.com/v1/containers/{container\_id}

Retrieves a container.

#### Path parameters

container\_id

string

Required

#### Returns

The [container](https://platform.openai.com/docs/api-reference/containers/object) object.

Example request

curl

```
1
2
curl https://api.openai.com/v1/containers/cntr_682dfebaacac8198bbfe9c2474fb6f4a085685cbe3cb5863 \
  -H "Authorization: Bearer $OPENAI_API_KEY"
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
{
    "id": "cntr_682dfebaacac8198bbfe9c2474fb6f4a085685cbe3cb5863",
    "object": "container",
    "created_at": 1747844794,
    "status": "running",
    "expires_after": {
        "anchor": "last_active_at",
        "minutes": 20
    },
    "last_active_at": 1747844794,
    "memory_limit": "4g",
    "name": "My Container"
}
```

## Delete a container

deletehttps://api.openai.com/v1/containers/{container\_id}

Delete a container.

#### Path parameters

container\_id

string

Required

The ID of the container to delete.

#### Returns

Deletion Status

Example request

curl

```
1
2
curl -X DELETE https://api.openai.com/v1/containers/cntr_682dfebaacac8198bbfe9c2474fb6f4a085685cbe3cb5863 \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

Response

```
1
2
3
4
5
{
    "id": "cntr_682dfebaacac8198bbfe9c2474fb6f4a085685cbe3cb5863",
    "object": "container.deleted",
    "deleted": true
}
```

## The container object

created\_at

integer

Unix timestamp (in seconds) when the container was created.

expires\_after

object

The container will expire after this time period.
The anchor is the reference point for the expiration.
The minutes is the number of minutes after the anchor before the container expires.

Show properties

id

string

Unique identifier for the container.

last\_active\_at

integer

Unix timestamp (in seconds) when the container was last active.

memory\_limit

string

The memory limit configured for the container.

name

string

Name of the container.

object

string

The type of this object.

status

string

Status of the container (e.g., active, deleted).

OBJECT The container object

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
{
   "id": "cntr_682dfebaacac8198bbfe9c2474fb6f4a085685cbe3cb5863",
   "object": "container",
   "created_at": 1747844794,
   "status": "running",
   "expires_after": {
     "anchor": "last_active_at",
     "minutes": 20
   },
   "last_active_at": 1747844794,
   "memory_limit": "1g",
   "name": "My Container"
}
```

[PreviousChatKit](https://platform.openai.com/docs/api-reference/chatkit) [NextContainer Files](https://platform.openai.com/docs/api-reference/container-files)