---
url: "https://platform.openai.com/docs/api-reference/images-streaming"
title: "Image Streaming | OpenAI API Reference"
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

[image\_generation](https://platform.openai.com/docs/api-reference/images-streaming/image_generation)

[.partial\_image](https://platform.openai.com/docs/api-reference/images-streaming/image_generation/partial_image)

[.completed](https://platform.openai.com/docs/api-reference/images-streaming/image_generation/completed)

[image\_edit](https://platform.openai.com/docs/api-reference/images-streaming/image_edit)

[.partial\_image](https://platform.openai.com/docs/api-reference/images-streaming/image_edit/partial_image)

[.completed](https://platform.openai.com/docs/api-reference/images-streaming/image_edit/completed)

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

## Image Streaming

Stream image generation and editing in real time with server-sent events.
[Learn more about image streaming](https://platform.openai.com/docs/guides/image-generation).

## image\_generation.partial\_image

Emitted when a partial image is available during image generation streaming.

b64\_json

string

Base64-encoded partial image data, suitable for rendering as an image.

background

string

The background setting for the requested image.

created\_at

integer

The Unix timestamp when the event was created.

output\_format

string

The output format for the requested image.

partial\_image\_index

integer

0-based index for the partial image (streaming).

quality

string

The quality setting for the requested image.

size

string

The size of the requested image.

type

string

The type of the event. Always `image_generation.partial_image`.

OBJECT image\_generation.partial\_image

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
  "type": "image_generation.partial_image",
  "b64_json": "...",
  "created_at": 1620000000,
  "size": "1024x1024",
  "quality": "high",
  "background": "transparent",
  "output_format": "png",
  "partial_image_index": 0
}
```

## image\_generation.completed

Emitted when image generation has completed and the final image is available.

b64\_json

string

Base64-encoded image data, suitable for rendering as an image.

background

string

The background setting for the generated image.

created\_at

integer

The Unix timestamp when the event was created.

output\_format

string

The output format for the generated image.

quality

string

The quality setting for the generated image.

size

string

The size of the generated image.

type

string

The type of the event. Always `image_generation.completed`.

usage

object

For the GPT image models only, the token usage information for the image generation.

Show properties

OBJECT image\_generation.completed

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
  "type": "image_generation.completed",
  "b64_json": "...",
  "created_at": 1620000000,
  "size": "1024x1024",
  "quality": "high",
  "background": "transparent",
  "output_format": "png",
  "usage": {
    "total_tokens": 100,
    "input_tokens": 50,
    "output_tokens": 50,
    "input_tokens_details": {
      "text_tokens": 10,
      "image_tokens": 40
    }
  }
}
```

## image\_edit.partial\_image

Emitted when a partial image is available during image editing streaming.

b64\_json

string

Base64-encoded partial image data, suitable for rendering as an image.

background

string

The background setting for the requested edited image.

created\_at

integer

The Unix timestamp when the event was created.

output\_format

string

The output format for the requested edited image.

partial\_image\_index

integer

0-based index for the partial image (streaming).

quality

string

The quality setting for the requested edited image.

size

string

The size of the requested edited image.

type

string

The type of the event. Always `image_edit.partial_image`.

OBJECT image\_edit.partial\_image

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
  "type": "image_edit.partial_image",
  "b64_json": "...",
  "created_at": 1620000000,
  "size": "1024x1024",
  "quality": "high",
  "background": "transparent",
  "output_format": "png",
  "partial_image_index": 0
}
```

## image\_edit.completed

Emitted when image editing has completed and the final image is available.

b64\_json

string

Base64-encoded final edited image data, suitable for rendering as an image.

background

string

The background setting for the edited image.

created\_at

integer

The Unix timestamp when the event was created.

output\_format

string

The output format for the edited image.

quality

string

The quality setting for the edited image.

size

string

The size of the edited image.

type

string

The type of the event. Always `image_edit.completed`.

usage

object

For the GPT image models only, the token usage information for the image generation.

Show properties

OBJECT image\_edit.completed

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
  "type": "image_edit.completed",
  "b64_json": "...",
  "created_at": 1620000000,
  "size": "1024x1024",
  "quality": "high",
  "background": "transparent",
  "output_format": "png",
  "usage": {
    "total_tokens": 100,
    "input_tokens": 50,
    "output_tokens": 50,
    "input_tokens_details": {
      "text_tokens": 10,
      "image_tokens": 40
    }
  }
}
```

[PreviousImages](https://platform.openai.com/docs/api-reference/images) [NextEmbeddings](https://platform.openai.com/docs/api-reference/embeddings)