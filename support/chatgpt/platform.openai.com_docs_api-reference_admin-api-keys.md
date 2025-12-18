---
url: "https://platform.openai.com/docs/api-reference/admin-api-keys"
title: "Admin API Keys | OpenAI API Reference"
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

[List all organization and project API keys.](https://platform.openai.com/docs/api-reference/admin-api-keys/list)

[Create admin API key](https://platform.openai.com/docs/api-reference/admin-api-keys/create)

[Retrieve admin API key](https://platform.openai.com/docs/api-reference/admin-api-keys/listget)

[Delete admin API key](https://platform.openai.com/docs/api-reference/admin-api-keys/delete)

[The admin API key object](https://platform.openai.com/docs/api-reference/admin-api-keys/object)

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

## Admin API Keys

Admin API keys enable Organization Owners to programmatically manage various aspects of their organization, including users, projects, and API keys. These keys provide administrative capabilities, such as creating, updating, and deleting users; managing projects; and overseeing API key lifecycles.

Key Features of Admin API Keys:

- User Management: Invite new users, update roles, and remove users from the organization.

- Project Management: Create, update, archive projects, and manage user assignments within projects.

- API Key Oversight: List, retrieve, and delete API keys associated with projects.


Only Organization Owners have the authority to create and utilize Admin API keys. To manage these keys, Organization Owners can navigate to the Admin Keys section of their API Platform dashboard.

For direct access to the Admin Keys management page, Organization Owners can use the following link:

[https://platform.openai.com/settings/organization/admin-keys](https://platform.openai.com/settings/organization/admin-keys)

It's crucial to handle Admin API keys with care due to their elevated permissions. Adhering to best practices, such as regular key rotation and assigning appropriate permissions, enhances security and ensures proper governance within the organization.

## List all organization and project API keys.

gethttps://api.openai.com/v1/organization/admin\_api\_keys

Retrieve a paginated list of organization admin API keys.

#### Query parameters

after

string or null

Optional

limit

integer

Optional

Defaults to 20

order

string

Optional

Defaults to asc

#### Returns

A list of admin and project API key objects.

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/organization/admin_api_keys?after=key_abc&limit=20 \
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
{
  "object": "list",
  "data": [\
    {\
      "object": "organization.admin_api_key",\
      "id": "key_abc",\
      "name": "Main Admin Key",\
      "redacted_value": "sk-admin...def",\
      "created_at": 1711471533,\
      "last_used_at": 1711471534,\
      "owner": {\
        "type": "service_account",\
        "object": "organization.service_account",\
        "id": "sa_456",\
        "name": "My Service Account",\
        "created_at": 1711471533,\
        "role": "member"\
      }\
    }\
  ],
  "first_id": "key_abc",
  "last_id": "key_abc",
  "has_more": false
}
```

## Create admin API key

posthttps://api.openai.com/v1/organization/admin\_api\_keys

Create a new admin-level API key for the organization.

#### Request body

name

string

Required

#### Returns

The created [AdminApiKey](https://platform.openai.com/docs/api-reference/admin-api-keys/object) object.

Example request

curl

```
1
2
3
4
5
6
curl -X POST https://api.openai.com/v1/organization/admin_api_keys \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "name": "New Admin Key"
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
{
  "object": "organization.admin_api_key",
  "id": "key_xyz",
  "name": "New Admin Key",
  "redacted_value": "sk-admin...xyz",
  "created_at": 1711471533,
  "last_used_at": 1711471534,
  "owner": {
    "type": "user",
    "object": "organization.user",
    "id": "user_123",
    "name": "John Doe",
    "created_at": 1711471533,
    "role": "owner"
  },
  "value": "sk-admin-1234abcd"
}
```

## Retrieve admin API key

gethttps://api.openai.com/v1/organization/admin\_api\_keys/{key\_id}

Get details for a specific organization API key by its ID.

#### Path parameters

key\_id

string

Required

#### Returns

The requested [AdminApiKey](https://platform.openai.com/docs/api-reference/admin-api-keys/object) object.

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/organization/admin_api_keys/key_abc \
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
  "object": "organization.admin_api_key",
  "id": "key_abc",
  "name": "Main Admin Key",
  "redacted_value": "sk-admin...xyz",
  "created_at": 1711471533,
  "last_used_at": 1711471534,
  "owner": {
    "type": "user",
    "object": "organization.user",
    "id": "user_123",
    "name": "John Doe",
    "created_at": 1711471533,
    "role": "owner"
  }
}
```

## Delete admin API key

deletehttps://api.openai.com/v1/organization/admin\_api\_keys/{key\_id}

Delete the specified admin API key.

#### Path parameters

key\_id

string

Required

#### Returns

A confirmation object indicating the key was deleted.

Example request

curl

```
1
2
3
curl -X DELETE https://api.openai.com/v1/organization/admin_api_keys/key_abc \
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
  "id": "key_abc",
  "object": "organization.admin_api_key.deleted",
  "deleted": true
}
```

## The admin API key object

Represents an individual Admin API key in an org.

created\_at

integer

The Unix timestamp (in seconds) of when the API key was created

id

string

The identifier, which can be referenced in API endpoints

last\_used\_at

integer

The Unix timestamp (in seconds) of when the API key was last used

name

string

The name of the API key

object

string

The object type, which is always `organization.admin_api_key`

owner

object

Show properties

redacted\_value

string

The redacted value of the API key

value

string

The value of the API key. Only shown on create.

OBJECT The admin API key object

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
  "object": "organization.admin_api_key",
  "id": "key_abc",
  "name": "Main Admin Key",
  "redacted_value": "sk-admin...xyz",
  "created_at": 1711471533,
  "last_used_at": 1711471534,
  "owner": {
    "type": "user",
    "object": "organization.user",
    "id": "user_123",
    "name": "John Doe",
    "created_at": 1711471533,
    "role": "owner"
  }
}
```

[PreviousAdministration](https://platform.openai.com/docs/api-reference/administration) [NextInvites](https://platform.openai.com/docs/api-reference/invite)