---
url: "https://platform.openai.com/docs/api-reference/invite"
title: "Invites | OpenAI API Reference"
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

[List invites](https://platform.openai.com/docs/api-reference/invite/list)

[Create invite](https://platform.openai.com/docs/api-reference/invite/create)

[Retrieve invite](https://platform.openai.com/docs/api-reference/invite/retrieve)

[Delete invite](https://platform.openai.com/docs/api-reference/invite/delete)

[The invite object](https://platform.openai.com/docs/api-reference/invite/object)

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

## Invites

Invite and manage invitations for an organization.

## List invites

gethttps://api.openai.com/v1/organization/invites

Returns a list of invites in the organization.

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

A list of [Invite](https://platform.openai.com/docs/api-reference/invite/object) objects.

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/organization/invites?after=invite-abc&limit=20 \
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
{
  "object": "list",
  "data": [\
    {\
      "object": "organization.invite",\
      "id": "invite-abc",\
      "email": "user@example.com",\
      "role": "owner",\
      "status": "accepted",\
      "invited_at": 1711471533,\
      "expires_at": 1711471533,\
      "accepted_at": 1711471533\
    }\
  ],
  "first_id": "invite-abc",
  "last_id": "invite-abc",
  "has_more": false
}
```

## Create invite

posthttps://api.openai.com/v1/organization/invites

Create an invite for a user to the organization. The invite must be accepted by the user before they have access to the organization.

#### Request body

email

string

Required

Send an email to this address

role

string

Required

`owner` or `reader`

projects

array

Optional

An array of projects to which membership is granted at the same time the org invite is accepted. If omitted, the user will be invited to the default project for compatibility with legacy behavior.

Show properties

#### Returns

The created [Invite](https://platform.openai.com/docs/api-reference/invite/object) object.

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
12
13
14
15
16
17
curl -X POST https://api.openai.com/v1/organization/invites \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "email": "anotheruser@example.com",
      "role": "reader",
      "projects": [\
        {\
          "id": "project-xyz",\
          "role": "member"\
        },\
        {\
          "id": "project-abc",\
          "role": "owner"\
        }\
      ]
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
14
15
16
17
18
19
20
{
  "object": "organization.invite",
  "id": "invite-def",
  "email": "anotheruser@example.com",
  "role": "reader",
  "status": "pending",
  "invited_at": 1711471533,
  "expires_at": 1711471533,
  "accepted_at": null,
  "projects": [\
    {\
      "id": "project-xyz",\
      "role": "member"\
    },\
    {\
      "id": "project-abc",\
      "role": "owner"\
    }\
  ]
}
```

## Retrieve invite

gethttps://api.openai.com/v1/organization/invites/{invite\_id}

Retrieves an invite.

#### Path parameters

invite\_id

string

Required

The ID of the invite to retrieve.

#### Returns

The [Invite](https://platform.openai.com/docs/api-reference/invite/object) object matching the specified ID.

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/organization/invites/invite-abc \
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
{
    "object": "organization.invite",
    "id": "invite-abc",
    "email": "user@example.com",
    "role": "owner",
    "status": "accepted",
    "invited_at": 1711471533,
    "expires_at": 1711471533,
    "accepted_at": 1711471533
}
```

## Delete invite

deletehttps://api.openai.com/v1/organization/invites/{invite\_id}

Delete an invite. If the invite has already been accepted, it cannot be deleted.

#### Path parameters

invite\_id

string

Required

The ID of the invite to delete.

#### Returns

Confirmation that the invite has been deleted

Example request

curl

```
1
2
3
curl -X DELETE https://api.openai.com/v1/organization/invites/invite-abc \
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
    "object": "organization.invite.deleted",
    "id": "invite-abc",
    "deleted": true
}
```

## The invite object

Represents an individual `invite` to the organization.

accepted\_at

integer

The Unix timestamp (in seconds) of when the invite was accepted.

email

string

The email address of the individual to whom the invite was sent

expires\_at

integer

The Unix timestamp (in seconds) of when the invite expires.

id

string

The identifier, which can be referenced in API endpoints

invited\_at

integer

The Unix timestamp (in seconds) of when the invite was sent.

object

string

The object type, which is always `organization.invite`

projects

array

The projects that were granted membership upon acceptance of the invite.

Show properties

role

string

`owner` or `reader`

status

string

`accepted`,`expired`, or `pending`

OBJECT The invite object

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
  "object": "organization.invite",
  "id": "invite-abc",
  "email": "user@example.com",
  "role": "owner",
  "status": "accepted",
  "invited_at": 1711471533,
  "expires_at": 1711471533,
  "accepted_at": 1711471533,
  "projects": [\
    {\
      "id": "project-xyz",\
      "role": "member"\
    }\
  ]
}
```

[PreviousAdmin API Keys](https://platform.openai.com/docs/api-reference/admin-api-keys) [NextUsers](https://platform.openai.com/docs/api-reference/users)