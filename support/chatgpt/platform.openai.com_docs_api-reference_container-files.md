---
url: "https://platform.openai.com/docs/api-reference/container-files"
title: "Container Files | OpenAI API Reference"
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

[Create container file](https://platform.openai.com/docs/api-reference/container-files/createContainerFile)

[List container files](https://platform.openai.com/docs/api-reference/container-files/listContainerFiles)

[Retrieve container file](https://platform.openai.com/docs/api-reference/container-files/retrieveContainerFile)

[Retrieve container file content](https://platform.openai.com/docs/api-reference/container-files/retrieveContainerFileContent)

[Delete a container file](https://platform.openai.com/docs/api-reference/container-files/deleteContainerFile)

[The container file object](https://platform.openai.com/docs/api-reference/container-files/object)

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

## Container Files

Create and manage container files for use with the Code Interpreter tool.

## Create container file

posthttps://api.openai.com/v1/containers/{container\_id}/files

Creates a container file.

#### Path parameters

container\_id

string

Required

#### Request body

file

file

Optional

The File object (not file name) to be uploaded.

file\_id

string

Optional

Name of the file to create.

#### Returns

The created [container file](https://platform.openai.com/docs/api-reference/container-files/object) object.

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/containers/cntr_682e0e7318108198aa783fd921ff305e08e78805b9fdbb04/files \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F file="@example.txt"
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
{
  "id": "cfile_682e0e8a43c88191a7978f477a09bdf5",
  "object": "container.file",
  "created_at": 1747848842,
  "bytes": 880,
  "container_id": "cntr_682e0e7318108198aa783fd921ff305e08e78805b9fdbb04",
  "path": "/mnt/data/88e12fa445d32636f190a0b33daed6cb-tsconfig.json",
  "source": "user"
}
```

## List container files

gethttps://api.openai.com/v1/containers/{container\_id}/files

Lists container files.

#### Path parameters

container\_id

string

Required

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

a list of [container file](https://platform.openai.com/docs/api-reference/container-files/object) objects.

Example request

curl

```
1
2
curl https://api.openai.com/v1/containers/cntr_682e0e7318108198aa783fd921ff305e08e78805b9fdbb04/files \
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
{
    "object": "list",
    "data": [\
        {\
            "id": "cfile_682e0e8a43c88191a7978f477a09bdf5",\
            "object": "container.file",\
            "created_at": 1747848842,\
            "bytes": 880,\
            "container_id": "cntr_682e0e7318108198aa783fd921ff305e08e78805b9fdbb04",\
            "path": "/mnt/data/88e12fa445d32636f190a0b33daed6cb-tsconfig.json",\
            "source": "user"\
        }\
    ],
    "first_id": "cfile_682e0e8a43c88191a7978f477a09bdf5",
    "has_more": false,
    "last_id": "cfile_682e0e8a43c88191a7978f477a09bdf5"
}
```

## Retrieve container file

gethttps://api.openai.com/v1/containers/{container\_id}/files/{file\_id}

Retrieves a container file.

#### Path parameters

container\_id

string

Required

file\_id

string

Required

#### Returns

The [container file](https://platform.openai.com/docs/api-reference/container-files/object) object.

Example request

curl

```
1
2
curl https://api.openai.com/v1/containers/container_123/files/file_456 \
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
{
    "id": "cfile_682e0e8a43c88191a7978f477a09bdf5",
    "object": "container.file",
    "created_at": 1747848842,
    "bytes": 880,
    "container_id": "cntr_682e0e7318108198aa783fd921ff305e08e78805b9fdbb04",
    "path": "/mnt/data/88e12fa445d32636f190a0b33daed6cb-tsconfig.json",
    "source": "user"
}
```

## Retrieve container file content

gethttps://api.openai.com/v1/containers/{container\_id}/files/{file\_id}/content

Retrieves a container file content.

#### Path parameters

container\_id

string

Required

file\_id

string

Required

#### Returns

The contents of the container file.

Example request

curl

```
1
2
curl https://api.openai.com/v1/containers/container_123/files/cfile_456/content \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

Response

```
<binary content of the file>
```

## Delete a container file

deletehttps://api.openai.com/v1/containers/{container\_id}/files/{file\_id}

Delete a container file.

#### Path parameters

container\_id

string

Required

file\_id

string

Required

#### Returns

Deletion Status

Example request

curl

```
1
2
curl -X DELETE https://api.openai.com/v1/containers/cntr_682dfebaacac8198bbfe9c2474fb6f4a085685cbe3cb5863/files/cfile_682e0e8a43c88191a7978f477a09bdf5 \
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
    "id": "cfile_682e0e8a43c88191a7978f477a09bdf5",
    "object": "container.file.deleted",
    "deleted": true
}
```

## The container file object

bytes

integer

Size of the file in bytes.

container\_id

string

The container this file belongs to.

created\_at

integer

Unix timestamp (in seconds) when the file was created.

id

string

Unique identifier for the file.

object

string

The type of this object (`container.file`).

path

string

Path of the file in the container.

source

string

Source of the file (e.g., `user`, `assistant`).

OBJECT The container file object

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
{
    "id": "cfile_682e0e8a43c88191a7978f477a09bdf5",
    "object": "container.file",
    "created_at": 1747848842,
    "bytes": 880,
    "container_id": "cntr_682e0e7318108198aa783fd921ff305e08e78805b9fdbb04",
    "path": "/mnt/data/88e12fa445d32636f190a0b33daed6cb-tsconfig.json",
    "source": "user"
}
```

[PreviousContainers](https://platform.openai.com/docs/api-reference/containers) [NextRealtime](https://platform.openai.com/docs/api-reference/realtime)