---
url: "https://platform.openai.com/docs/api-reference/project-api-keys"
title: "Project API keys | OpenAI API Reference"
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

[List project API keys](https://platform.openai.com/docs/api-reference/project-api-keys/list)

[Retrieve project API key](https://platform.openai.com/docs/api-reference/project-api-keys/retrieve)

[Delete project API key](https://platform.openai.com/docs/api-reference/project-api-keys/delete)

[The project API key object](https://platform.openai.com/docs/api-reference/project-api-keys/object)

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

## Project API keys

Manage API keys for a given project. Supports listing and deleting keys for users.
This API does not allow issuing keys for users, as users need to authorize themselves to generate keys.

## List project API keys

gethttps://api.openai.com/v1/organization/projects/{project\_id}/api\_keys

Returns a list of API keys in the project.

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

limit

integer

Optional

Defaults to 20

A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.

#### Returns

A list of [ProjectApiKey](https://platform.openai.com/docs/api-reference/project-api-keys/object) objects.

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/organization/projects/proj_abc/api_keys?after=key_abc&limit=20 \
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
{
    "object": "list",
    "data": [\
        {\
            "object": "organization.project.api_key",\
            "redacted_value": "sk-abc...def",\
            "name": "My API Key",\
            "created_at": 1711471533,\
            "last_used_at": 1711471534,\
            "id": "key_abc",\
            "owner": {\
                "type": "user",\
                "user": {\
                    "object": "organization.project.user",\
                    "id": "user_abc",\
                    "name": "First Last",\
                    "email": "user@example.com",\
                    "role": "owner",\
                    "added_at": 1711471533\
                }\
            }\
        }\
    ],
    "first_id": "key_abc",
    "last_id": "key_xyz",
    "has_more": false
}
```

## Retrieve project API key

gethttps://api.openai.com/v1/organization/projects/{project\_id}/api\_keys/{key\_id}

Retrieves an API key in the project.

#### Path parameters

key\_id

string

Required

The ID of the API key.

project\_id

string

Required

The ID of the project.

#### Returns

The [ProjectApiKey](https://platform.openai.com/docs/api-reference/project-api-keys/object) object matching the specified ID.

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/organization/projects/proj_abc/api_keys/key_abc \
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
17
18
19
{
    "object": "organization.project.api_key",
    "redacted_value": "sk-abc...def",
    "name": "My API Key",
    "created_at": 1711471533,
    "last_used_at": 1711471534,
    "id": "key_abc",
    "owner": {
        "type": "user",
        "user": {
            "object": "organization.project.user",
            "id": "user_abc",
            "name": "First Last",
            "email": "user@example.com",
            "role": "owner",
            "added_at": 1711471533
        }
    }
}
```

## Delete project API key

deletehttps://api.openai.com/v1/organization/projects/{project\_id}/api\_keys/{key\_id}

Deletes an API key from the project.

#### Path parameters

key\_id

string

Required

The ID of the API key.

project\_id

string

Required

The ID of the project.

#### Returns

Confirmation of the key's deletion or an error if the key belonged to a service account

Example request

curl

```
1
2
3
curl -X DELETE https://api.openai.com/v1/organization/projects/proj_abc/api_keys/key_abc \
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
{
    "object": "organization.project.api_key.deleted",
    "id": "key_abc",
    "deleted": true
}
```

## The project API key object

Represents an individual API key in a project.

created\_at

integer

The Unix timestamp (in seconds) of when the API key was created

id

string

The identifier, which can be referenced in API endpoints

last\_used\_at

integer

The Unix timestamp (in seconds) of when the API key was last used.

name

string

The name of the API key

object

string

The object type, which is always `organization.project.api_key`

owner

object

Show properties

redacted\_value

string

The redacted value of the API key

OBJECT The project API key object

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
{
    "object": "organization.project.api_key",
    "redacted_value": "sk-abc...def",
    "name": "My API Key",
    "created_at": 1711471533,
    "last_used_at": 1711471534,
    "id": "key_abc",
    "owner": {
        "type": "user",
        "user": {
            "object": "organization.project.user",
            "id": "user_abc",
            "name": "First Last",
            "email": "user@example.com",
            "role": "owner",
            "created_at": 1711471533
        }
    }
}
```

[PreviousProject service accounts](https://platform.openai.com/docs/api-reference/project-service-accounts) [NextProject rate limits](https://platform.openai.com/docs/api-reference/project-rate-limits)