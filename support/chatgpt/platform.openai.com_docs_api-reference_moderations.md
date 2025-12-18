---
url: "https://platform.openai.com/docs/api-reference/moderations"
title: "Moderations | OpenAI API Reference"
---

[DocsDocs](https://platform.openai.com/docs/guides/moderation) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

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

[Create moderation](https://platform.openai.com/docs/api-reference/moderations/create)

[The moderation object](https://platform.openai.com/docs/api-reference/moderations/object)

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

## Moderations

Given text and/or image inputs, classifies if those inputs are potentially harmful across several categories.
Related guide: [Moderations](https://platform.openai.com/docs/guides/moderation)

## Create moderation

posthttps://api.openai.com/v1/moderations

Classifies if text and/or image inputs are potentially harmful. Learn
more in the [moderation guide](https://platform.openai.com/docs/guides/moderation).

#### Request body

input

string or array

Required

Input (or inputs) to classify. Can be a single string, an array of strings, or
an array of multi-modal input objects similar to other models.

Show possible types

model

string

Optional

Defaults to omni-moderation-latest

The content moderation model you would like to use. Learn more in
[the moderation guide](https://platform.openai.com/docs/guides/moderation), and learn about
available models [here](https://platform.openai.com/docs/models#moderation).

#### Returns

A [moderation](https://platform.openai.com/docs/api-reference/moderations/object) object.

Single stringImage and text

Example request

curl

```
1
2
3
4
5
6
curl https://api.openai.com/v1/moderations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "input": "I want to kill them."
  }'
```

```
1
2
3
4
5
from openai import OpenAI
client = OpenAI()

moderation = client.moderations.create(input="I want to kill them.")
print(moderation)
```

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
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const moderation = await openai.moderations.create({ input: "I want to kill them." });

  console.log(moderation);
}
main();
```

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
using System;
using System.ClientModel;

using OpenAI.Moderations;

ModerationClient client = new(
    model: "omni-moderation-latest",
    apiKey: Environment.GetEnvironmentVariable("OPENAI_API_KEY")
);

ClientResult<ModerationResult> moderation = client.ClassifyText("I want to kill them.");
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
{
  "id": "modr-AB8CjOTu2jiq12hp1AQPfeqFWaORR",
  "model": "text-moderation-007",
  "results": [\
    {\
      "flagged": true,\
      "categories": {\
        "sexual": false,\
        "hate": false,\
        "harassment": true,\
        "self-harm": false,\
        "sexual/minors": false,\
        "hate/threatening": false,\
        "violence/graphic": false,\
        "self-harm/intent": false,\
        "self-harm/instructions": false,\
        "harassment/threatening": true,\
        "violence": true\
      },\
      "category_scores": {\
        "sexual": 0.000011726012417057063,\
        "hate": 0.22706663608551025,\
        "harassment": 0.5215635299682617,\
        "self-harm": 2.227119921371923e-6,\
        "sexual/minors": 7.107352217872176e-8,\
        "hate/threatening": 0.023547329008579254,\
        "violence/graphic": 0.00003391829886822961,\
        "self-harm/intent": 1.646940972932498e-6,\
        "self-harm/instructions": 1.1198755256458526e-9,\
        "harassment/threatening": 0.5694745779037476,\
        "violence": 0.9971134662628174\
      }\
    }\
  ]
}
```

## The moderation object

Represents if a given text input is potentially harmful.

id

string

The unique identifier for the moderation request.

model

string

The model used to generate the moderation results.

results

array

A list of moderation objects.

Show properties

OBJECT The moderation object

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
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
{
  "id": "modr-0d9740456c391e43c445bf0f010940c7",
  "model": "omni-moderation-latest",
  "results": [\
    {\
      "flagged": true,\
      "categories": {\
        "harassment": true,\
        "harassment/threatening": true,\
        "sexual": false,\
        "hate": false,\
        "hate/threatening": false,\
        "illicit": false,\
        "illicit/violent": false,\
        "self-harm/intent": false,\
        "self-harm/instructions": false,\
        "self-harm": false,\
        "sexual/minors": false,\
        "violence": true,\
        "violence/graphic": true\
      },\
      "category_scores": {\
        "harassment": 0.8189693396524255,\
        "harassment/threatening": 0.804985420696006,\
        "sexual": 1.573112165348997e-6,\
        "hate": 0.007562942636942845,\
        "hate/threatening": 0.004208854591835476,\
        "illicit": 0.030535955153511665,\
        "illicit/violent": 0.008925306722380033,\
        "self-harm/intent": 0.00023023930975076432,\
        "self-harm/instructions": 0.0002293869201073356,\
        "self-harm": 0.012598046106750154,\
        "sexual/minors": 2.212566909570261e-8,\
        "violence": 0.9999992735124786,\
        "violence/graphic": 0.843064871157054\
      },\
      "category_applied_input_types": {\
        "harassment": [\
          "text"\
        ],\
        "harassment/threatening": [\
          "text"\
        ],\
        "sexual": [\
          "text",\
          "image"\
        ],\
        "hate": [\
          "text"\
        ],\
        "hate/threatening": [\
          "text"\
        ],\
        "illicit": [\
          "text"\
        ],\
        "illicit/violent": [\
          "text"\
        ],\
        "self-harm/intent": [\
          "text",\
          "image"\
        ],\
        "self-harm/instructions": [\
          "text",\
          "image"\
        ],\
        "self-harm": [\
          "text",\
          "image"\
        ],\
        "sexual/minors": [\
          "text"\
        ],\
        "violence": [\
          "text",\
          "image"\
        ],\
        "violence/graphic": [\
          "text",\
          "image"\
        ]\
      }\
    }\
  ]
}
```

[PreviousModels](https://platform.openai.com/docs/api-reference/models) [NextVector stores](https://platform.openai.com/docs/api-reference/vector-stores)