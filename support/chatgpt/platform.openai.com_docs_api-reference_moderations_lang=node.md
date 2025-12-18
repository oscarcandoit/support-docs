---
url: "https://platform.openai.com/docs/api-reference/moderations?lang=node"
title: "Moderations | OpenAI API Reference"
---

[DocsDocs](https://platform.openai.com/docs/guides/moderation) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

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

[Create moderation](https://platform.openai.com/docs/api-reference/moderations/create?lang=node)

[The moderation object](https://platform.openai.com/docs/api-reference/moderations/object?lang=node)

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

[Usage](https://platform.openai.com/docs/api-reference/usage?lang=node)

[Certificates](https://platform.openai.com/docs/api-reference/certificates?lang=node)

Legacy

[Completions](https://platform.openai.com/docs/api-reference/completions?lang=node)

[Realtime Beta](https://platform.openai.com/docs/api-reference/realtime_beta?lang=node)

[Realtime Beta session tokens](https://platform.openai.com/docs/api-reference/realtime-beta-sessions?lang=node)

[Realtime Beta client events](https://platform.openai.com/docs/api-reference/realtime-beta-client-events?lang=node)

[Realtime Beta server events](https://platform.openai.com/docs/api-reference/realtime-beta-server-events?lang=node)

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

[PreviousModels](https://platform.openai.com/docs/api-reference/models?lang=node) [NextVector stores](https://platform.openai.com/docs/api-reference/vector-stores?lang=node)