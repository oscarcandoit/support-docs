---
url: "https://platform.openai.com/docs/api-reference/roles"
title: "Roles | OpenAI API Reference"
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

[List organization roles](https://platform.openai.com/docs/api-reference/roles/list)

[Create organization role](https://platform.openai.com/docs/api-reference/roles/create)

[Update organization role](https://platform.openai.com/docs/api-reference/roles/update)

[Delete organization role](https://platform.openai.com/docs/api-reference/roles/delete)

[List project roles](https://platform.openai.com/docs/api-reference/roles/project/list)

[Create project role](https://platform.openai.com/docs/api-reference/roles/project/create)

[Update project role](https://platform.openai.com/docs/api-reference/roles/project/update)

[Delete project role](https://platform.openai.com/docs/api-reference/roles/project/delete)

[The role object](https://platform.openai.com/docs/api-reference/roles/object)

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

## Roles

Create and manage custom roles that can be assigned to groups and users at the organization or project level.

## List organization roles

gethttps://api.openai.com/v1/organization/roles

Lists the roles configured for the organization.

#### Query parameters

after

string

Optional

Cursor for pagination. Provide the value from the previous response's `next` field to continue listing roles.

limit

integer

Optional

Defaults to 1000

A limit on the number of roles to return. Defaults to 1000.

order

string

Optional

Defaults to asc

Sort order for the returned roles.

#### Returns

A list of [role objects](https://platform.openai.com/docs/api-reference/roles/object).

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/organization/roles?limit=20 \
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
    "object": "list",
    "data": [\
        {\
            "object": "role",\
            "id": "role_01J1F8ROLE01",\
            "name": "API Group Manager",\
            "description": "Allows managing organization groups",\
            "permissions": [\
                "api.groups.read",\
                "api.groups.write"\
            ],\
            "resource_type": "api.organization",\
            "predefined_role": false\
        }\
    ],
    "has_more": false,
    "next": null
}
```

## Create organization role

posthttps://api.openai.com/v1/organization/roles

Creates a custom role for the organization.

#### Request body

permissions

array

Required

Permissions to grant to the role.

role\_name

string

Required

Unique name for the role.

description

string

Optional

#### Returns

The created [role object](https://platform.openai.com/docs/api-reference/roles/object).

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
curl -X POST https://api.openai.com/v1/organization/roles \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "role_name": "API Group Manager",
      "permissions": [\
          "api.groups.read",\
          "api.groups.write"\
      ],
      "description": "Allows managing organization groups"
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
{
    "object": "role",
    "id": "role_01J1F8ROLE01",
    "name": "API Group Manager",
    "description": "Allows managing organization groups",
    "permissions": [\
        "api.groups.read",\
        "api.groups.write"\
    ],
    "resource_type": "api.organization",
    "predefined_role": false
}
```

## Update organization role

posthttps://api.openai.com/v1/organization/roles/{role\_id}

Updates an existing organization role.

#### Path parameters

role\_id

string

Required

The ID of the role to update.

#### Request body

description

string

Optional

permissions

array

Optional

role\_name

string

Optional

#### Returns

The updated [role object](https://platform.openai.com/docs/api-reference/roles/object).

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
curl -X POST https://api.openai.com/v1/organization/roles/role_01J1F8ROLE01 \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "role_name": "API Group Manager",
      "permissions": [\
          "api.groups.read",\
          "api.groups.write"\
      ],
      "description": "Allows managing organization groups"
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
{
    "object": "role",
    "id": "role_01J1F8ROLE01",
    "name": "API Group Manager",
    "description": "Allows managing organization groups",
    "permissions": [\
        "api.groups.read",\
        "api.groups.write"\
    ],
    "resource_type": "api.organization",
    "predefined_role": false
}
```

## Delete organization role

deletehttps://api.openai.com/v1/organization/roles/{role\_id}

Deletes a custom role from the organization.

#### Path parameters

role\_id

string

Required

The ID of the role to delete.

#### Returns

Confirmation of the deleted role.

Example request

curl

```
1
2
3
curl -X DELETE https://api.openai.com/v1/organization/roles/role_01J1F8ROLE01 \
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
    "object": "role.deleted",
    "id": "role_01J1F8ROLE01",
    "deleted": true
}
```

## List project roles

gethttps://api.openai.com/v1/projects/{project\_id}/roles

Lists the roles configured for a project.

#### Path parameters

project\_id

string

Required

The ID of the project to inspect.

#### Query parameters

after

string

Optional

Cursor for pagination. Provide the value from the previous response's `next` field to continue listing roles.

limit

integer

Optional

Defaults to 1000

A limit on the number of roles to return. Defaults to 1000.

order

string

Optional

Defaults to asc

Sort order for the returned roles.

#### Returns

A list of [role objects](https://platform.openai.com/docs/api-reference/roles/object) configured on the project.

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/projects/proj_abc123/roles?limit=20 \
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
    "object": "list",
    "data": [\
        {\
            "object": "role",\
            "id": "role_01J1F8PROJ",\
            "name": "API Project Key Manager",\
            "description": "Allows managing API keys for the project",\
            "permissions": [\
                "api.organization.projects.api_keys.read",\
                "api.organization.projects.api_keys.write"\
            ],\
            "resource_type": "api.project",\
            "predefined_role": false\
        }\
    ],
    "has_more": false,
    "next": null
}
```

## Create project role

posthttps://api.openai.com/v1/projects/{project\_id}/roles

Creates a custom role for a project.

#### Path parameters

project\_id

string

Required

The ID of the project to update.

#### Request body

permissions

array

Required

Permissions to grant to the role.

role\_name

string

Required

Unique name for the role.

description

string

Optional

#### Returns

The created [role object](https://platform.openai.com/docs/api-reference/roles/object).

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
curl -X POST https://api.openai.com/v1/projects/proj_abc123/roles \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "role_name": "API Project Key Manager",
      "permissions": [\
          "api.organization.projects.api_keys.read",\
          "api.organization.projects.api_keys.write"\
      ],
      "description": "Allows managing API keys for the project"
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
{
    "object": "role",
    "id": "role_01J1F8PROJ",
    "name": "API Project Key Manager",
    "description": "Allows managing API keys for the project",
    "permissions": [\
        "api.organization.projects.api_keys.read",\
        "api.organization.projects.api_keys.write"\
    ],
    "resource_type": "api.project",
    "predefined_role": false
}
```

## Update project role

posthttps://api.openai.com/v1/projects/{project\_id}/roles/{role\_id}

Updates an existing project role.

#### Path parameters

project\_id

string

Required

The ID of the project to update.

role\_id

string

Required

The ID of the role to update.

#### Request body

description

string

Optional

permissions

array

Optional

role\_name

string

Optional

#### Returns

The updated [role object](https://platform.openai.com/docs/api-reference/roles/object).

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
curl -X POST https://api.openai.com/v1/projects/proj_abc123/roles/role_01J1F8PROJ \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "role_name": "API Project Key Manager",
      "permissions": [\
          "api.organization.projects.api_keys.read",\
          "api.organization.projects.api_keys.write"\
      ],
      "description": "Allows managing API keys for the project"
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
{
    "object": "role",
    "id": "role_01J1F8PROJ",
    "name": "API Project Key Manager",
    "description": "Allows managing API keys for the project",
    "permissions": [\
        "api.organization.projects.api_keys.read",\
        "api.organization.projects.api_keys.write"\
    ],
    "resource_type": "api.project",
    "predefined_role": false
}
```

## Delete project role

deletehttps://api.openai.com/v1/projects/{project\_id}/roles/{role\_id}

Deletes a custom role from a project.

#### Path parameters

project\_id

string

Required

The ID of the project to update.

role\_id

string

Required

The ID of the role to delete.

#### Returns

Confirmation of the deleted role.

Example request

curl

```
1
2
3
curl -X DELETE https://api.openai.com/v1/projects/proj_abc123/roles/role_01J1F8PROJ \
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
    "object": "role.deleted",
    "id": "role_01J1F8PROJ",
    "deleted": true
}
```

## The role object

Details about a role that can be assigned through the public Roles API.

description

string

id

string

Identifier for the role.

name

string

Unique name for the role.

object

string

Always `role`.

permissions

array

Permissions granted by the role.

predefined\_role

boolean

Whether the role is predefined and managed by OpenAI.

resource\_type

string

Resource type the role is bound to (for example `api.organization` or `api.project`).

OBJECT The role object

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
{
    "object": "role",
    "id": "role_01J1F8ROLE01",
    "name": "API Group Manager",
    "description": "Allows managing organization groups",
    "permissions": [\
        "api.groups.read",\
        "api.groups.write"\
    ],
    "resource_type": "api.organization",
    "predefined_role": false
}
```

[PreviousGroups](https://platform.openai.com/docs/api-reference/groups) [NextRole assignments](https://platform.openai.com/docs/api-reference/role-assignments)