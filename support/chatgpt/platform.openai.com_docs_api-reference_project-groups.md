---
url: "https://platform.openai.com/docs/api-reference/project-groups"
title: "Project groups | OpenAI API Reference"
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

[List project groups](https://platform.openai.com/docs/api-reference/project-groups/list)

[Add project group](https://platform.openai.com/docs/api-reference/project-groups/add)

[Remove project group](https://platform.openai.com/docs/api-reference/project-groups/delete)

[The project group object](https://platform.openai.com/docs/api-reference/project-groups/object)

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

## Project groups

Manage which groups have access to a project and the role they receive.

## List project groups

gethttps://api.openai.com/v1/organization/projects/{project\_id}/groups

Lists the groups that have access to a project.

#### Path parameters

project\_id

string

Required

The ID of the project to inspect.

#### Query parameters

after

string

Optional

Cursor for pagination. Provide the ID of the last group from the previous response to fetch the next page.

limit

integer

Optional

Defaults to 20

A limit on the number of project groups to return. Defaults to 20.

order

string

Optional

Defaults to asc

Sort order for the returned groups.

#### Returns

A list of [project group objects](https://platform.openai.com/docs/api-reference/project-groups/object).

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/organization/projects/proj_abc123/groups?limit=20 \
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
{
    "object": "list",
    "data": [\
        {\
            "object": "project.group",\
            "project_id": "proj_abc123",\
            "group_id": "group_01J1F8ABCDXYZ",\
            "group_name": "Support Team",\
            "created_at": 1711471533\
        }\
    ],
    "has_more": false,
    "next": null
}
```

## Add project group

posthttps://api.openai.com/v1/organization/projects/{project\_id}/groups

Grants a group access to a project.

#### Path parameters

project\_id

string

Required

The ID of the project to update.

#### Request body

group\_id

string

Required

Identifier of the group to add to the project.

role

string

Required

Identifier of the project role to grant to the group.

#### Returns

The created [project group object](https://platform.openai.com/docs/api-reference/project-groups/object).

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
curl -X POST https://api.openai.com/v1/organization/projects/proj_abc123/groups \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "group_id": "group_01J1F8ABCDXYZ",
      "role": "role_01J1F8PROJ"
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
{
    "object": "project.group",
    "project_id": "proj_abc123",
    "group_id": "group_01J1F8ABCDXYZ",
    "group_name": "Support Team",
    "created_at": 1711471533
}
```

## Remove project group

deletehttps://api.openai.com/v1/organization/projects/{project\_id}/groups/{group\_id}

Revokes a group's access to a project.

#### Path parameters

group\_id

string

Required

The ID of the group to remove from the project.

project\_id

string

Required

The ID of the project to update.

#### Returns

Confirmation of the deleted project group.

Example request

curl

```
1
2
3
curl -X DELETE https://api.openai.com/v1/organization/projects/proj_abc123/groups/group_01J1F8ABCDXYZ \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json"
```

Response

```
1
2
3
4
{
    "object": "project.group.deleted",
    "deleted": true
}
```

## The project group object

Details about a group's membership in a project.

created\_at

integer

Unix timestamp (in seconds) when the group was granted project access.

group\_id

string

Identifier of the group that has access to the project.

group\_name

string

Display name of the group.

object

string

Always `project.group`.

project\_id

string

Identifier of the project.

OBJECT The project group object

```
1
2
3
4
5
6
7
{
    "object": "project.group",
    "project_id": "proj_abc123",
    "group_id": "group_01J1F8ABCDXYZ",
    "group_name": "Support Team",
    "created_at": 1711471533
}
```

[PreviousProject users](https://platform.openai.com/docs/api-reference/project-users) [NextProject service accounts](https://platform.openai.com/docs/api-reference/project-service-accounts)

We use cookies and similar technologies to deliver, maintain, improve our services and for security purposes. Check our [Cookie Policy](https://openai.com/policies/cookie-policy) for details. Click 'Accept all' to let OpenAI and partners use cookies for these purposes. Click 'Reject all' to say no to cookies, except those that are strictly necessary. Choose 'Manage Cookies' to pick specific cookies you're okay with or to change your preferences.

Reject allAccept all