---
url: "https://platform.openai.com/docs/api-reference/chat-streaming?locale=en"
title: "Streaming | OpenAI API Reference"
---

[DocsDocs](https://platform.openai.com/docs) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

Log in [Sign up](https://platform.openai.com/signup)

Search`` `K`

API Reference

[Introduction](https://platform.openai.com/docs/api-reference/introduction?locale=en)

[Authentication](https://platform.openai.com/docs/api-reference/authentication?locale=en)

[Debugging requests](https://platform.openai.com/docs/api-reference/debugging-requests?locale=en)

[Backward compatibility](https://platform.openai.com/docs/api-reference/backward-compatibility?locale=en)

Responses API

[Responses](https://platform.openai.com/docs/api-reference/responses?locale=en)

[Conversations](https://platform.openai.com/docs/api-reference/conversations?locale=en)

[Streaming events](https://platform.openai.com/docs/api-reference/responses-streaming?locale=en)

Webhooks

[Webhook Events](https://platform.openai.com/docs/api-reference/webhook-events?locale=en)

Platform APIs

[Audio](https://platform.openai.com/docs/api-reference/audio?locale=en)

[Videos](https://platform.openai.com/docs/api-reference/videos?locale=en)

[Images](https://platform.openai.com/docs/api-reference/images?locale=en)

[Image Streaming](https://platform.openai.com/docs/api-reference/images-streaming?locale=en)

[Embeddings](https://platform.openai.com/docs/api-reference/embeddings?locale=en)

[Evals](https://platform.openai.com/docs/api-reference/evals?locale=en)

[Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning?locale=en)

[Graders](https://platform.openai.com/docs/api-reference/graders?locale=en)

[Batch](https://platform.openai.com/docs/api-reference/batch?locale=en)

[Files](https://platform.openai.com/docs/api-reference/files?locale=en)

[Uploads](https://platform.openai.com/docs/api-reference/uploads?locale=en)

[Models](https://platform.openai.com/docs/api-reference/models?locale=en)

[Moderations](https://platform.openai.com/docs/api-reference/moderations?locale=en)

Vector stores

[Vector stores](https://platform.openai.com/docs/api-reference/vector-stores?locale=en)

[Vector store files](https://platform.openai.com/docs/api-reference/vector-stores-files?locale=en)

[Vector store file batches](https://platform.openai.com/docs/api-reference/vector-stores-file-batches?locale=en)

ChatKit

Beta

[ChatKit](https://platform.openai.com/docs/api-reference/chatkit?locale=en)

Containers

[Containers](https://platform.openai.com/docs/api-reference/containers?locale=en)

[Container Files](https://platform.openai.com/docs/api-reference/container-files?locale=en)

Realtime

[Realtime](https://platform.openai.com/docs/api-reference/realtime?locale=en)

[Client secrets](https://platform.openai.com/docs/api-reference/realtime-sessions?locale=en)

[Calls](https://platform.openai.com/docs/api-reference/realtime-calls?locale=en)

[Client events](https://platform.openai.com/docs/api-reference/realtime-client-events?locale=en)

[Server events](https://platform.openai.com/docs/api-reference/realtime-server-events?locale=en)

Chat Completions

[Chat Completions](https://platform.openai.com/docs/api-reference/chat?locale=en)

[Streaming](https://platform.openai.com/docs/api-reference/chat-streaming?locale=en)

[The chat completion chunk object](https://platform.openai.com/docs/api-reference/chat-streaming/streaming?locale=en)

Assistants

Beta

[Assistants](https://platform.openai.com/docs/api-reference/assistants?locale=en)

[Threads](https://platform.openai.com/docs/api-reference/threads?locale=en)

[Messages](https://platform.openai.com/docs/api-reference/messages?locale=en)

[Runs](https://platform.openai.com/docs/api-reference/runs?locale=en)

[Run steps](https://platform.openai.com/docs/api-reference/run-steps?locale=en)

[Streaming](https://platform.openai.com/docs/api-reference/assistants-streaming?locale=en)

Administration

[Administration](https://platform.openai.com/docs/api-reference/administration?locale=en)

[Admin API Keys](https://platform.openai.com/docs/api-reference/admin-api-keys?locale=en)

[Invites](https://platform.openai.com/docs/api-reference/invite?locale=en)

[Users](https://platform.openai.com/docs/api-reference/users?locale=en)

[Groups](https://platform.openai.com/docs/api-reference/groups?locale=en)

[Roles](https://platform.openai.com/docs/api-reference/roles?locale=en)

[Role assignments](https://platform.openai.com/docs/api-reference/role-assignments?locale=en)

[Projects](https://platform.openai.com/docs/api-reference/projects?locale=en)

[Project users](https://platform.openai.com/docs/api-reference/project-users?locale=en)

[Project groups](https://platform.openai.com/docs/api-reference/project-groups?locale=en)

[Project service accounts](https://platform.openai.com/docs/api-reference/project-service-accounts?locale=en)

[Project API keys](https://platform.openai.com/docs/api-reference/project-api-keys?locale=en)

[Project rate limits](https://platform.openai.com/docs/api-reference/project-rate-limits?locale=en)

[Audit logs](https://platform.openai.com/docs/api-reference/audit-logs?locale=en)

[Usage](https://platform.openai.com/docs/api-reference/usage?locale=en)

[Certificates](https://platform.openai.com/docs/api-reference/certificates?locale=en)

Legacy

[Completions](https://platform.openai.com/docs/api-reference/completions?locale=en)

[Realtime Beta](https://platform.openai.com/docs/api-reference/realtime_beta?locale=en)

[Realtime Beta session tokens](https://platform.openai.com/docs/api-reference/realtime-beta-sessions?locale=en)

[Realtime Beta client events](https://platform.openai.com/docs/api-reference/realtime-beta-client-events?locale=en)

[Realtime Beta server events](https://platform.openai.com/docs/api-reference/realtime-beta-server-events?locale=en)

[Cookbook](https://cookbook.openai.com/) [Forum](https://community.openai.com/categories)

## Streaming

Stream Chat Completions in real time. Receive chunks of completions
returned from the model using server-sent events.
[Learn more](https://platform.openai.com/docs/guides/streaming-responses?api-mode=chat).

## The chat completion chunk object

Represents a streamed chunk of a chat completion response returned
by the model, based on the provided input.
[Learn more](https://platform.openai.com/docs/guides/streaming-responses).

choices

array

A list of chat completion choices. Can contain more than one elements if `n` is greater than 1. Can also be empty for the
last chunk if you set `stream_options: {"include_usage": true}`.

Show properties

created

integer

The Unix timestamp (in seconds) of when the chat completion was created. Each chunk has the same timestamp.

id

string

A unique identifier for the chat completion. Each chunk has the same ID.

model

string

The model to generate the completion.

object

string

The object type, which is always `chat.completion.chunk`.

service\_tier

string

Specifies the processing type used for serving the request.

- If set to 'auto', then the request will be processed with the service tier configured in the Project settings. Unless otherwise configured, the Project will use 'default'.
- If set to 'default', then the request will be processed with the standard pricing and performance for the selected model.
- If set to ' [flex](https://platform.openai.com/docs/guides/flex-processing)' or ' [priority](https://openai.com/api-priority-processing/)', then the request will be processed with the corresponding service tier.
- When not set, the default behavior is 'auto'.

When the `service_tier` parameter is set, the response body will include the `service_tier` value based on the processing mode actually used to serve the request. This response value may be different from the value set in the parameter.

system\_fingerprint

Deprecated

string

This fingerprint represents the backend configuration that the model runs with.
Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.

usage

object or null

Usage statistics for the completion request.

Show properties

OBJECT The chat completion chunk object

```
1
2
3
4
5
6
7
{"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-4o-mini", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"role":"assistant","content":""},"logprobs":null,"finish_reason":null}]}

{"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-4o-mini", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"content":"Hello"},"logprobs":null,"finish_reason":null}]}

....

{"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-4o-mini", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{},"logprobs":null,"finish_reason":"stop"}]}
```

[PreviousChat Completions](https://platform.openai.com/docs/api-reference/chat?locale=en) [NextAssistants](https://platform.openai.com/docs/api-reference/assistants?locale=en)