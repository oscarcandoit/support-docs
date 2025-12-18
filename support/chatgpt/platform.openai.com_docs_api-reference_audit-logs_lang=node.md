---
url: "https://platform.openai.com/docs/api-reference/audit-logs?lang=node"
title: "Audit logs | OpenAI API Reference"
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

[Audit logs](https://platform.openai.com/docs/api-reference/audit-logs?lang=node)

[List audit logs](https://platform.openai.com/docs/api-reference/audit-logs/list?lang=node)

[The audit log object](https://platform.openai.com/docs/api-reference/audit-logs/object?lang=node)

[Usage](https://platform.openai.com/docs/api-reference/usage?lang=node)

[Certificates](https://platform.openai.com/docs/api-reference/certificates?lang=node)

Legacy

[Completions](https://platform.openai.com/docs/api-reference/completions?lang=node)

[Realtime Beta](https://platform.openai.com/docs/api-reference/realtime_beta?lang=node)

[Realtime Beta session tokens](https://platform.openai.com/docs/api-reference/realtime-beta-sessions?lang=node)

[Realtime Beta client events](https://platform.openai.com/docs/api-reference/realtime-beta-client-events?lang=node)

[Realtime Beta server events](https://platform.openai.com/docs/api-reference/realtime-beta-server-events?lang=node)

[Cookbook](https://cookbook.openai.com/) [Forum](https://community.openai.com/categories)

## Audit logs

Logs of user actions and configuration changes within this organization.
To log events, an Organization Owner must activate logging in the [Data Controls Settings](https://platform.openai.com/settings/organization/data-controls/data-retention).
Once activated, for security reasons, logging cannot be deactivated.

## List audit logs

gethttps://api.openai.com/v1/organization/audit\_logs

List user actions and configuration changes within this organization.

#### Query parameters

actor\_emails\[\]

array

Optional

Return only events performed by users with these emails.

actor\_ids\[\]

array

Optional

Return only events performed by these actors. Can be a user ID, a service account ID, or an api key tracking ID.

after

string

Optional

A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj\_foo, your subsequent call can include after=obj\_foo in order to fetch the next page of the list.

before

string

Optional

A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj\_foo, your subsequent call can include before=obj\_foo in order to fetch the previous page of the list.

effective\_at

object

Optional

Return only events whose `effective_at` (Unix seconds) is in this range.

Show properties

event\_types\[\]

array

Optional

Return only events with a `type` in one of these values. For example, `project.created`. For all options, see the documentation for the [audit log object](https://platform.openai.com/docs/api-reference/audit-logs/object).

limit

integer

Optional

Defaults to 20

A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.

project\_ids\[\]

array

Optional

Return only events for these projects.

resource\_ids\[\]

array

Optional

Return only events performed on these targets. For example, a project ID updated.

#### Returns

A list of paginated [Audit Log](https://platform.openai.com/docs/api-reference/audit-logs/object) objects.

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/organization/audit_logs \
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
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
{
    "object": "list",
    "data": [\
        {\
            "id": "audit_log-xxx_yyyymmdd",\
            "type": "project.archived",\
            "effective_at": 1722461446,\
            "actor": {\
                "type": "api_key",\
                "api_key": {\
                    "type": "user",\
                    "user": {\
                        "id": "user-xxx",\
                        "email": "user@example.com"\
                    }\
                }\
            },\
            "project.archived": {\
                "id": "proj_abc"\
            },\
        },\
        {\
            "id": "audit_log-yyy__20240101",\
            "type": "api_key.updated",\
            "effective_at": 1720804190,\
            "actor": {\
                "type": "session",\
                "session": {\
                    "user": {\
                        "id": "user-xxx",\
                        "email": "user@example.com"\
                    },\
                    "ip_address": "127.0.0.1",\
                    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",\
                    "ja3": "a497151ce4338a12c4418c44d375173e",\
                    "ja4": "q13d0313h3_55b375c5d22e_c7319ce65786",\
                    "ip_address_details": {\
                      "country": "US",\
                      "city": "San Francisco",\
                      "region": "California",\
                      "region_code": "CA",\
                      "asn": "1234",\
                      "latitude": "37.77490",\
                      "longitude": "-122.41940"\
                    }\
                }\
            },\
            "api_key.updated": {\
                "id": "key_xxxx",\
                "data": {\
                    "scopes": ["resource_2.operation_2"]\
                }\
            },\
        }\
    ],
    "first_id": "audit_log-xxx__20240101",
    "last_id": "audit_log_yyy__20240101",
    "has_more": true
}
```

## The audit log object

A log of a user action or configuration change within this organization.

actor

object

The actor who performed the audit logged action.

Show properties

api\_key.created

object

The details for events with this `type`.

Show properties

api\_key.deleted

object

The details for events with this `type`.

Show properties

api\_key.updated

object

The details for events with this `type`.

Show properties

certificate.created

object

The details for events with this `type`.

Show properties

certificate.deleted

object

The details for events with this `type`.

Show properties

certificate.updated

object

The details for events with this `type`.

Show properties

certificates.activated

object

The details for events with this `type`.

Show properties

certificates.deactivated

object

The details for events with this `type`.

Show properties

checkpoint.permission.created

object

The project and fine-tuned model checkpoint that the checkpoint permission was created for.

Show properties

checkpoint.permission.deleted

object

The details for events with this `type`.

Show properties

effective\_at

integer

The Unix timestamp (in seconds) of the event.

external\_key.registered

object

The details for events with this `type`.

Show properties

external\_key.removed

object

The details for events with this `type`.

Show properties

group.created

object

The details for events with this `type`.

Show properties

group.deleted

object

The details for events with this `type`.

Show properties

group.updated

object

The details for events with this `type`.

Show properties

id

string

The ID of this log.

invite.accepted

object

The details for events with this `type`.

Show properties

invite.deleted

object

The details for events with this `type`.

Show properties

invite.sent

object

The details for events with this `type`.

Show properties

ip\_allowlist.config.activated

object

The details for events with this `type`.

Show properties

ip\_allowlist.config.deactivated

object

The details for events with this `type`.

Show properties

ip\_allowlist.created

object

The details for events with this `type`.

Show properties

ip\_allowlist.deleted

object

The details for events with this `type`.

Show properties

ip\_allowlist.updated

object

The details for events with this `type`.

Show properties

login.failed

object

The details for events with this `type`.

Show properties

login.succeeded

object

This event has no additional fields beyond the standard audit log attributes.

logout.failed

object

The details for events with this `type`.

Show properties

logout.succeeded

object

This event has no additional fields beyond the standard audit log attributes.

organization.updated

object

The details for events with this `type`.

Show properties

project

object

The project that the action was scoped to. Absent for actions not scoped to projects. Note that any admin actions taken via Admin API keys are associated with the default project.

Show properties

project.archived

object

The details for events with this `type`.

Show properties

project.created

object

The details for events with this `type`.

Show properties

project.deleted

object

The details for events with this `type`.

Show properties

project.updated

object

The details for events with this `type`.

Show properties

rate\_limit.deleted

object

The details for events with this `type`.

Show properties

rate\_limit.updated

object

The details for events with this `type`.

Show properties

role.assignment.created

object

The details for events with this `type`.

Show properties

role.assignment.deleted

object

The details for events with this `type`.

Show properties

role.created

object

The details for events with this `type`.

Show properties

role.deleted

object

The details for events with this `type`.

Show properties

role.updated

object

The details for events with this `type`.

Show properties

scim.disabled

object

The details for events with this `type`.

Show properties

scim.enabled

object

The details for events with this `type`.

Show properties

service\_account.created

object

The details for events with this `type`.

Show properties

service\_account.deleted

object

The details for events with this `type`.

Show properties

service\_account.updated

object

The details for events with this `type`.

Show properties

type

string

The event type.

user.added

object

The details for events with this `type`.

Show properties

user.deleted

object

The details for events with this `type`.

Show properties

user.updated

object

The details for events with this `type`.

Show properties

OBJECT The audit log object

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
{
    "id": "req_xxx_20240101",
    "type": "api_key.created",
    "effective_at": 1720804090,
    "actor": {
        "type": "session",
        "session": {
            "user": {
                "id": "user-xxx",
                "email": "user@example.com"
            },
            "ip_address": "127.0.0.1",
            "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
    },
    "api_key.created": {
        "id": "key_xxxx",
        "data": {
            "scopes": ["resource.operation"]
        }
    }
}
```

[PreviousProject rate limits](https://platform.openai.com/docs/api-reference/project-rate-limits?lang=node) [NextUsage](https://platform.openai.com/docs/api-reference/usage?lang=node)

We use cookies and similar technologies to deliver, maintain, improve our services and for security purposes. Check our [Cookie Policy](https://openai.com/policies/cookie-policy) for details. Click 'Accept all' to let OpenAI and partners use cookies for these purposes. Click 'Reject all' to say no to cookies, except those that are strictly necessary. Choose 'Manage Cookies' to pick specific cookies you're okay with or to change your preferences.

Reject allAccept all