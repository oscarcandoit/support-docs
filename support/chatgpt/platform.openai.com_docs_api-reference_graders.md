---
url: "https://platform.openai.com/docs/api-reference/graders"
title: "Graders | OpenAI API Reference"
---

[DocsDocs](https://platform.openai.com/docs/guides/graders) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

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

[String Check Grader](https://platform.openai.com/docs/api-reference/graders/string-check)

[Text Similarity Grader](https://platform.openai.com/docs/api-reference/graders/text-similarity)

[Score Model Grader](https://platform.openai.com/docs/api-reference/graders/score-model)

[Label Model Grader](https://platform.openai.com/docs/api-reference/graders/label-model)

[Python Grader](https://platform.openai.com/docs/api-reference/graders/python)

[Multi Grader](https://platform.openai.com/docs/api-reference/graders/multi)

[Run grader](https://platform.openai.com/docs/api-reference/graders/run)

[Validate grader](https://platform.openai.com/docs/api-reference/graders/validate)

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

## Graders

Manage and run graders in the OpenAI platform.
Related guide: [Graders](https://platform.openai.com/docs/guides/graders)

## String Check Grader

A StringCheckGrader object that performs a string comparison between input and reference using a specified operation.

input

string

The input text. This may include template strings.

name

string

The name of the grader.

operation

string

The string check operation to perform. One of `eq`, `ne`, `like`, or `ilike`.

reference

string

The reference text. This may include template strings.

type

string

The object type, which is always `string_check`.

OBJECT String Check Grader

```
1
2
3
4
5
6
7
{
  "type": "string_check",
  "name": "Example string check grader",
  "input": "{{sample.output_text}}",
  "reference": "{{item.label}}",
  "operation": "eq"
}
```

## Text Similarity Grader

A TextSimilarityGrader object which grades text based on similarity metrics.

evaluation\_metric

string

The evaluation metric to use. One of `cosine`, `fuzzy_match`, `bleu`,
`gleu`, `meteor`, `rouge_1`, `rouge_2`, `rouge_3`, `rouge_4`, `rouge_5`,
or `rouge_l`.

input

string

The text being graded.

name

string

The name of the grader.

reference

string

The text being graded against.

type

string

The type of grader.

OBJECT Text Similarity Grader

```
1
2
3
4
5
6
7
{
  "type": "text_similarity",
  "name": "Example text similarity grader",
  "input": "{{sample.output_text}}",
  "reference": "{{item.label}}",
  "evaluation_metric": "fuzzy_match"
}
```

## Score Model Grader

A ScoreModelGrader object that uses a model to assign a score to the input.

input

array

The input messages evaluated by the grader. Supports text, output text, input image, and input audio content blocks, and may include template strings.

Show properties

model

string

The model to use for the evaluation.

name

string

The name of the grader.

range

array

The range of the score. Defaults to `[0, 1]`.

sampling\_params

object

The sampling parameters for the model.

Show properties

type

string

The object type, which is always `score_model`.

OBJECT Score Model Grader

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
{
    "type": "score_model",
    "name": "Example score model grader",
    "input": [\
        {\
            "role": "user",\
            "content": [\
                {\
                    "type": "input_text",\
                    "text": (\
                        "Score how close the reference answer is to the model answer. Score 1.0 if they are the same and 0.0 if they are different."\
                        " Return just a floating point score\n\n"\
                        " Reference answer: {{item.label}}\n\n"\
                        " Model answer: {{sample.output_text}}"\
                    )\
                },\
                {\
                    "type": "input_image",\
                    "image_url": "https://example.com/reference.png",\
                    "file_id": null,\
                    "detail": "auto"\
                }\
            ],\
        }\
    ],
    "model": "gpt-5-mini",
    "sampling_params": {
        "temperature": 1,
        "top_p": 1,
        "seed": 42,
        "max_completions_tokens": 32768,
        "reasoning_effort": "medium"
    },
}
```

## Label Model Grader

A LabelModelGrader object which uses a model to assign labels to each item
in the evaluation.

input

array

Show properties

labels

array

The labels to assign to each item in the evaluation.

model

string

The model to use for the evaluation. Must support structured outputs.

name

string

The name of the grader.

passing\_labels

array

The labels that indicate a passing result. Must be a subset of labels.

type

string

The object type, which is always `label_model`.

OBJECT Label Model Grader

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
{
  "name": "First label grader",
  "type": "label_model",
  "model": "gpt-4o-2024-08-06",
  "input": [\
    {\
      "type": "message",\
      "role": "system",\
      "content": {\
        "type": "input_text",\
        "text": "Classify the sentiment of the following statement as one of positive, neutral, or negative"\
      }\
    },\
    {\
      "type": "message",\
      "role": "user",\
      "content": {\
        "type": "input_text",\
        "text": "Statement: {{item.response}}"\
      }\
    }\
  ],
  "passing_labels": [\
    "positive"\
  ],
  "labels": [\
    "positive",\
    "neutral",\
    "negative"\
  ]
}
```

## Python Grader

A PythonGrader object that runs a python script on the input.

image\_tag

string

The image tag to use for the python script.

name

string

The name of the grader.

source

string

The source code of the python script.

type

string

The object type, which is always `python`.

OBJECT Python Grader

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
  "type": "python",
  "name": "Example python grader",
  "image_tag": "2025-05-08",
  "source": """
def grade(sample: dict, item: dict) -> float:
    \"""
    Returns 1.0 if `output_text` equals `label`, otherwise 0.0.
    \"""
    output = sample.get("output_text")
    label = item.get("label")
    return 1.0 if output == label else 0.0
""",
}
```

## Multi Grader

A MultiGrader object combines the output of multiple graders to produce a single score.

calculate\_output

string

A formula to calculate the output based on grader results.

graders

object

Show possible types

name

string

The name of the grader.

type

string

The object type, which is always `multi`.

OBJECT Multi Grader

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
{
  "type": "multi",
  "name": "example multi grader",
  "graders": [\
    {\
      "type": "text_similarity",\
      "name": "example text similarity grader",\
      "input": "The graded text",\
      "reference": "The reference text",\
      "evaluation_metric": "fuzzy_match"\
    },\
    {\
      "type": "string_check",\
      "name": "Example string check grader",\
      "input": "{{sample.output_text}}",\
      "reference": "{{item.label}}",\
      "operation": "eq"\
    }\
  ],
  "calculate_output": "0.5 * text_similarity_score +  0.5 * string_check_score)"
}
```

## Run grader  Beta

posthttps://api.openai.com/v1/fine\_tuning/alpha/graders/run

Run a grader.

#### Request body

grader

object

Required

The grader used for the fine-tuning job.

Show possible types

model\_sample

string

Required

The model sample to be evaluated. This value will be used to populate
the `sample` namespace. See [the guide](https://platform.openai.com/docs/guides/graders) for more details.
The `output_json` variable will be populated if the model sample is a
valid JSON string.

item

object

Optional

The dataset item provided to the grader. This will be used to populate
the `item` namespace. See [the guide](https://platform.openai.com/docs/guides/graders) for more details.

#### Returns

The results from the grader run.

Score text alignmentScore an image captionScore an audio response

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
curl -X POST https://api.openai.com/v1/fine_tuning/alpha/graders/run \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "grader": {
      "type": "score_model",
      "name": "Example score model grader",
      "input": [\
        {\
          "role": "user",\
          "content": [\
            {\
              "type": "input_text",\
              "text": "Score how close the reference answer is to the model answer on a 0-1 scale. Return only the score.\n\nReference answer: {{item.reference_answer}}\n\nModel answer: {{sample.output_text}}"\
            }\
          ]\
        }\
      ],
      "model": "gpt-5-mini",
      "sampling_params": {
        "temperature": 1,
        "top_p": 1,
        "seed": 42
      }
    },
    "item": {
      "reference_answer": "fuzzy wuzzy was a bear"
    },
    "model_sample": "fuzzy wuzzy was a bear"
  }'
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
from openai import OpenAI

client = OpenAI()
result = client.fine_tuning.alpha.graders.run(
  grader={
    "type": "score_model",
    "name": "Example score model grader",
    "input": [\
      {\
        "role": "user",\
        "content": [\
          {\
            "type": "input_text",\
            "text": "Score how close the reference answer is to the model answer on a 0-1 scale. Return only the score.\n\nReference answer: {{item.reference_answer}}\n\nModel answer: {{sample.output_text}}",\
          }\
        ],\
      }\
    ],
    "model": "gpt-5-mini",
    "sampling_params": {"temperature": 1, "top_p": 1, "seed": 42},
  },
  item={"reference_answer": "fuzzy wuzzy was a bear"},
  model_sample="fuzzy wuzzy was a bear",
)
print(result)
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
import OpenAI from "openai";

const openai = new OpenAI();

const result = await openai.fineTuning.alpha.graders.run({
  grader: {
    type: "score_model",
    name: "Example score model grader",
    input: [\
      {\
        role: "user",\
        content: [\
          {\
            type: "input_text",\
            text: "Score how close the reference answer is to the model answer on a 0-1 scale. Return only the score.\n\nReference answer: {{item.reference_answer}}\n\nModel answer: {{sample.output_text}}",\
          },\
        ],\
      },\
    ],
    model: "gpt-5-mini",
    sampling_params: { temperature: 1, top_p: 1, seed: 42 },
  },
  item: { reference_answer: "fuzzy wuzzy was a bear" },
  model_sample: "fuzzy wuzzy was a bear",
});
console.log(result);
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
{
  "reward": 1.0,
  "metadata": {
    "name": "Example score model grader",
    "type": "score_model",
    "errors": {
      "formula_parse_error": false,
      "sample_parse_error": false,
      "truncated_observation_error": false,
      "unresponsive_reward_error": false,
      "invalid_variable_error": false,
      "other_error": false,
      "python_grader_server_error": false,
      "python_grader_server_error_type": null,
      "python_grader_runtime_error": false,
      "python_grader_runtime_error_details": null,
      "model_grader_server_error": false,
      "model_grader_refusal_error": false,
      "model_grader_parse_error": false,
      "model_grader_server_error_details": null
    },
    "execution_time": 4.365238428115845,
    "scores": {},
    "token_usage": {
      "prompt_tokens": 190,
      "total_tokens": 324,
      "completion_tokens": 134,
      "cached_tokens": 0
    },
    "sampled_model_name": "gpt-4o-2024-08-06"
  },
  "sub_rewards": {},
  "model_grader_token_usage_per_model": {
    "gpt-4o-2024-08-06": {
      "prompt_tokens": 190,
      "total_tokens": 324,
      "completion_tokens": 134,
      "cached_tokens": 0
    }
  }
}
```

## Validate grader  Beta

posthttps://api.openai.com/v1/fine\_tuning/alpha/graders/validate

Validate a grader.

#### Request body

grader

object

Required

The grader used for the fine-tuning job.

Show possible types

#### Returns

The validated grader object.

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
curl https://api.openai.com/v1/fine_tuning/alpha/graders/validate \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "grader": {
      "type": "string_check",
      "name": "Example string check grader",
      "input": "{{sample.output_text}}",
      "reference": "{{item.label}}",
      "operation": "eq"
    }
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
{
  "grader": {
    "type": "string_check",
    "name": "Example string check grader",
    "input": "{{sample.output_text}}",
    "reference": "{{item.label}}",
    "operation": "eq"
  }
}
```

[PreviousFine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning) [NextBatch](https://platform.openai.com/docs/api-reference/batch)

We use cookies and similar technologies to deliver, maintain, improve our services and for security purposes. Check our [Cookie Policy](https://openai.com/policies/cookie-policy) for details. Click 'Accept all' to let OpenAI and partners use cookies for these purposes. Click 'Reject all' to say no to cookies, except those that are strictly necessary. Choose 'Manage Cookies' to pick specific cookies you're okay with or to change your preferences.

Reject allAccept all