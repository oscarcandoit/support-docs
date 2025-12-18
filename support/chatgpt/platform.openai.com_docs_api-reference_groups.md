---
url: "https://platform.openai.com/docs/api-reference/groups"
title: "Groups | OpenAI API Reference"
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

[List groups](https://platform.openai.com/docs/api-reference/groups/list)

[Create group](https://platform.openai.com/docs/api-reference/groups/create)

[Update group](https://platform.openai.com/docs/api-reference/groups/update)

[Delete group](https://platform.openai.com/docs/api-reference/groups/delete)

[List group users](https://platform.openai.com/docs/api-reference/groups/users/list)

[Add group user](https://platform.openai.com/docs/api-reference/groups/users/add)

[Remove group user](https://platform.openai.com/docs/api-reference/groups/users/delete)

[The group user object](https://platform.openai.com/docs/api-reference/groups/users/assignment-object)

[The group object](https://platform.openai.com/docs/api-reference/groups/object)

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

## Groups

Manage reusable collections of users for organization-wide access control and maintain their membership.

## List groups

gethttps://api.openai.com/v1/organization/groups

Lists all groups in the organization.

#### Query parameters

after

string

Optional

A cursor for use in pagination. `after` is a group ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with group\_abc, your subsequent call can include `after=group_abc` in order to fetch the next page of the list.

limit

integer

Optional

Defaults to 100

A limit on the number of groups to be returned. Limit can range between 0 and 1000, and the default is 100.

order

string

Optional

Defaults to asc

Specifies the sort order of the returned groups.

#### Returns

A list of [group objects](https://platform.openai.com/docs/api-reference/groups/object).

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/organization/groups?limit=20&order=asc \
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
            "object": "group",\
            "id": "group_01J1F8ABCDXYZ",\
            "name": "Support Team",\
            "created_at": 1711471533,\
            "is_scim_managed": false\
        }\
    ],
    "has_more": false,
    "next": null
}
```

## Create group

posthttps://api.openai.com/v1/organization/groups

Creates a new group in the organization.

#### Request body

name

string

Required

Human readable name for the group.

#### Returns

The created [group object](https://platform.openai.com/docs/api-reference/groups/object).

Example request

curl

```
1
2
3
4
5
6
curl -X POST https://api.openai.com/v1/organization/groups \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "name": "Support Team"
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
    "object": "group",
    "id": "group_01J1F8ABCDXYZ",
    "name": "Support Team",
    "created_at": 1711471533,
    "is_scim_managed": false
}
```

## Update group

posthttps://api.openai.com/v1/organization/groups/{group\_id}

Updates a group's information.

#### Path parameters

group\_id

string

Required

The ID of the group to update.

#### Request body

name

string

Required

New display name for the group.

#### Returns

The updated [group object](https://platform.openai.com/docs/api-reference/groups/object).

Example request

curl

```
1
2
3
4
5
6
curl -X POST https://api.openai.com/v1/organization/groups/group_01J1F8ABCDXYZ \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "name": "Escalations"
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
{
    "id": "group_01J1F8ABCDXYZ",
    "name": "Escalations",
    "created_at": 1711471533,
    "is_scim_managed": false
}
```

## Delete group

deletehttps://api.openai.com/v1/organization/groups/{group\_id}

Deletes a group from the organization.

#### Path parameters

group\_id

string

Required

The ID of the group to delete.

#### Returns

Confirmation of the deleted group.

Example request

curl

```
1
2
3
curl -X DELETE https://api.openai.com/v1/organization/groups/group_01J1F8ABCDXYZ \
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
    "object": "group.deleted",
    "id": "group_01J1F8ABCDXYZ",
    "deleted": true
}
```

## List group users

gethttps://api.openai.com/v1/organization/groups/{group\_id}/users

Lists the users assigned to a group.

#### Path parameters

group\_id

string

Required

The ID of the group to inspect.

#### Query parameters

after

string

Optional

A cursor for use in pagination. Provide the ID of the last user from the previous list response to retrieve the next page.

limit

integer

Optional

Defaults to 100

A limit on the number of users to be returned. Limit can range between 0 and 1000, and the default is 100.

order

string

Optional

Defaults to desc

Specifies the sort order of users in the list.

#### Returns

A list of [user objects](https://platform.openai.com/docs/api-reference/users/object).

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/organization/groups/group_01J1F8ABCDXYZ/users?limit=20 \
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
{
    "object": "list",
    "data": [\
        {\
            "object": "organization.user",\
            "id": "user_abc123",\
            "name": "Ada Lovelace",\
            "email": "ada@example.com",\
            "role": "owner",\
            "added_at": 1711471533\
        }\
    ],
    "has_more": false,
    "next": null
}
```

## Add group user

posthttps://api.openai.com/v1/organization/groups/{group\_id}/users

Adds a user to a group.

#### Path parameters

group\_id

string

Required

The ID of the group to update.

#### Request body

user\_id

string

Required

Identifier of the user to add to the group.

#### Returns

The created [group user object](https://platform.openai.com/docs/api-reference/groups/users/assignment-object).

Example request

curl

```
1
2
3
4
5
6
curl -X POST https://api.openai.com/v1/organization/groups/group_01J1F8ABCDXYZ/users \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "user_id": "user_abc123"
  }'
```

Response

```
1
2
3
4
5
{
    "object": "group.user",
    "user_id": "user_abc123",
    "group_id": "group_01J1F8ABCDXYZ"
}
```

## Remove group user

deletehttps://api.openai.com/v1/organization/groups/{group\_id}/users/{user\_id}

Removes a user from a group.

#### Path parameters

group\_id

string

Required

The ID of the group to update.

user\_id

string

Required

The ID of the user to remove from the group.

#### Returns

Confirmation of the deleted [group user object](https://platform.openai.com/docs/api-reference/groups/users/assignment-object).

Example request

curl

```
1
2
3
curl -X DELETE https://api.openai.com/v1/organization/groups/group_01J1F8ABCDXYZ/users/user_abc123 \
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
    "object": "group.user.deleted",
    "deleted": true
}
```

## The group user object

Confirmation payload returned after adding a user to a group.

group\_id

string

Identifier of the group the user was added to.

object

string

Always `group.user`.

user\_id

string

Identifier of the user that was added.

OBJECT The group user object

```
1
2
3
4
5
{
    "object": "group.user",
    "user_id": "user_abc123",
    "group_id": "group_01J1F8ABCDXYZ"
}
```

## The group object

Summary information about a group returned in role assignment responses.

created\_at

integer

Unix timestamp (in seconds) when the group was created.

id

string

Identifier for the group.

name

string

Display name of the group.

object

string

Always `group`.

scim\_managed

boolean

Whether the group is managed through SCIM.

OBJECT The group object

```
1
2
3
4
5
6
7
{
    "object": "group",
    "id": "group_01J1F8ABCDXYZ",
    "name": "Support Team",
    "created_at": 1711471533,
    "scim_managed": false
}
```

[PreviousUsers](https://platform.openai.com/docs/api-reference/users) [NextRoles](https://platform.openai.com/docs/api-reference/roles)