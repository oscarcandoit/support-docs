---
url: "https://platform.openai.com/docs/actions/sending-files"
title: "Sending and returning files with GPT Actions"
---

[DocsDocs](https://platform.openai.com/docs) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

Log in [Sign up](https://platform.openai.com/signup)

Search`` `K`

Get started

[Overview](https://platform.openai.com/docs/overview)

[Quickstart](https://platform.openai.com/docs/quickstart)

[Models](https://platform.openai.com/docs/models)

[Pricing](https://platform.openai.com/docs/pricing)

[Libraries](https://platform.openai.com/docs/libraries)

[Latest: GPT-5.2](https://platform.openai.com/docs/guides/latest-model)

Core concepts

[Text generation](https://platform.openai.com/docs/guides/text)

[Code generation](https://platform.openai.com/docs/guides/code-generation)

[Images and vision](https://platform.openai.com/docs/guides/images-vision)

[Audio and speech](https://platform.openai.com/docs/guides/audio)

[Structured output](https://platform.openai.com/docs/guides/structured-outputs)

[Function calling](https://platform.openai.com/docs/guides/function-calling)

[Responses API](https://platform.openai.com/docs/guides/migrate-to-responses)

Agents

[Overview](https://platform.openai.com/docs/guides/agents)

Build agents

Deploy in your product

Optimize

[Voice agents](https://platform.openai.com/docs/guides/voice-agents)

Tools

[Using tools](https://platform.openai.com/docs/guides/tools)

[Connectors and MCP](https://platform.openai.com/docs/guides/tools-connectors-mcp)

[Web search](https://platform.openai.com/docs/guides/tools-web-search)

[Code interpreter](https://platform.openai.com/docs/guides/tools-code-interpreter)

File search and retrieval

More tools

Run and scale

[Conversation state](https://platform.openai.com/docs/guides/conversation-state)

[Background mode](https://platform.openai.com/docs/guides/background)

[Streaming](https://platform.openai.com/docs/guides/streaming-responses)

[Webhooks](https://platform.openai.com/docs/guides/webhooks)

[File inputs](https://platform.openai.com/docs/guides/pdf-files)

Prompting

Reasoning

Evaluation

[Getting started](https://platform.openai.com/docs/guides/evaluation-getting-started)

[Working with evals](https://platform.openai.com/docs/guides/evals)

[Prompt optimizer](https://platform.openai.com/docs/guides/prompt-optimizer)

[External models](https://platform.openai.com/docs/guides/external-models)

[Best practices](https://platform.openai.com/docs/guides/evaluation-best-practices)

Realtime API

[Overview](https://platform.openai.com/docs/guides/realtime)

Connect

Usage

Model optimization

[Optimization cycle](https://platform.openai.com/docs/guides/model-optimization)

Fine-tuning

[Graders](https://platform.openai.com/docs/guides/graders)

Specialized models

[Image generation](https://platform.openai.com/docs/guides/image-generation)

[Video generation](https://platform.openai.com/docs/guides/video-generation)

[Text to speech](https://platform.openai.com/docs/guides/text-to-speech)

[Speech to text](https://platform.openai.com/docs/guides/speech-to-text)

[Deep research](https://platform.openai.com/docs/guides/deep-research)

[Embeddings](https://platform.openai.com/docs/guides/embeddings)

[Moderation](https://platform.openai.com/docs/guides/moderation)

Coding agents

[Codex cloud](https://developers.openai.com/codex/cloud)

[Agent internet access](https://developers.openai.com/codex/cloud/agent-internet)

[Codex CLI](https://developers.openai.com/codex/cli)

[Codex IDE](https://developers.openai.com/codex/ide)

[Codex changelog](https://developers.openai.com/codex/changelog)

Going live

[Production best practices](https://platform.openai.com/docs/guides/production-best-practices)

Latency optimization

Cost optimization

[Accuracy optimization](https://platform.openai.com/docs/guides/optimizing-llm-accuracy)

Safety

Specialized APIs

Assistants API

Resources

[Terms and policies](https://openai.com/policies)

[Changelog](https://platform.openai.com/docs/changelog)

[Your data](https://platform.openai.com/docs/guides/your-data)

[Permissions](https://platform.openai.com/docs/guides/rbac)

[Rate limits](https://platform.openai.com/docs/guides/rate-limits)

[Deprecations](https://platform.openai.com/docs/deprecations)

[MCP for deep research](https://platform.openai.com/docs/mcp)

[Developer mode](https://platform.openai.com/docs/guides/developer-mode)

ChatGPT Actions

[Introduction](https://platform.openai.com/docs/actions/introduction)

[Getting started](https://platform.openai.com/docs/actions/getting-started)

[Actions library](https://platform.openai.com/docs/actions/actions-library)

[Authentication](https://platform.openai.com/docs/actions/authentication)

[Production](https://platform.openai.com/docs/actions/production)

[Data retrieval](https://platform.openai.com/docs/actions/data-retrieval)

[Sending files](https://platform.openai.com/docs/actions/sending-files)

[Cookbook](https://cookbook.openai.com/) [Forum](https://community.openai.com/categories)

# Sending and returning files with GPT Actions

Copy page

## Sending files

POST requests can include up to ten files (including DALL-E generated images) from the conversation. They will be sent as URLs which are valid for five minutes.

For files to be part of your POST request, the parameter must be named `openaiFileIdRefs` and the description should explain to the model the type and quantity of the files which your API is expecting.

The `openaiFileIdRefs` parameter will be populated with an array of JSON objects. Each object contains:

- `name` The name of the file. This will be an auto generated name when created by DALL-E.
- `id` A stable identifier for the file.
- `mime_type` The mime type of the file. For user uploaded files this is based on file extension.
- `download_link` The URL to fetch the file which is valid for five minutes.

Here’s an example of an `openaiFileIdRefs` array with two elements:

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
[\
  {\
    "name": "dalle-Lh2tg7WuosbyR9hk",\
    "id": "file-XFlOqJYTPBPwMZE3IopCBv1Z",\
    "mime_type": "image/webp",\
    "download_link": "https://files.oaiusercontent.com/file-XFlOqJYTPBPwMZE3IopCBv1Z?se=2024-03-11T20%3A29%3A52Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da580bae6-ea30-478e-a3e2-1f6c06c3e02f.webp&sig=ZPWol5eXACxU1O9azLwRNgKVidCe%2BwgMOc/TdrPGYII%3D"\
  },\
  {\
    "name": "2023 Benefits Booklet.pdf",\
    "id": "file-s5nX7o4junn2ig0J84r8Q0Ew",\
    "mime_type": "application/pdf",\
    "download_link": "https://files.oaiusercontent.com/file-s5nX7o4junn2ig0J84r8Q0Ew?se=2024-03-11T20%3A29%3A52Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D299%2C%20immutable&rscd=attachment%3B%20filename%3D2023%2520Benefits%2520Booklet.pdf&sig=Ivhviy%2BrgoyUjxZ%2BingpwtUwsA4%2BWaRfXy8ru9AfcII%3D"\
  }\
]
```

Actions can include files uploaded by the user, images generated by DALL-E, and files created by Code Interpreter.

### OpenAPI Example

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
/createWidget:
  post:
    operationId: createWidget
    summary: Creates a widget based on an image.
    description: Uploads a file reference using its file id. This file should be an image created by DALL·E or uploaded by the user. JPG, WEBP, and PNG are supported for widget creation.
    requestBody:
      required: true
      content:
        application/json:
          schema:
            type: object
            properties:
              openaiFileIdRefs:
                type: array
                items:
                  type: string
```

While this schema shows `openaiFileIdRefs` as being an array of type `string`, at runtime this will be populated with an array of JSON objects as previously shown.

## Returning files

Requests may return up to 10 files. Each file may be up to 10 MB and cannot be an image or video.

These files will become part of the conversation similarly to if a user uploaded them, meaning they may be made available to code interpreter, file search, and sent as part of subsequent action invocations. In the web app users will see that the files have been returned and can download them.

To return files, the body of the response must contain an `openaiFileResponse` parameter. This parameter must always be an array and must be populated in one of two ways.

### Inline option

Each element of the array is a JSON object which contains:

- `name` The name of the file. This will be visible to the user.
- `mime_type` The MIME type of the file. This is used to determine eligibility and which features have access to the file.
- `content` The base64 encoded contents of the file.

Here’s an example of an openaiFileResponse array with two elements:

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
[\
  {\
    "name": "example_document.pdf",\
    "mime_type": "application/pdf",\
    "content": "JVBERi0xLjQKJcfsj6IKNSAwIG9iago8PC9MZW5ndGggNiAwIFIvRmlsdGVyIC9GbGF0ZURlY29kZT4+CnN0cmVhbQpHhD93PQplbmRzdHJlYW0KZW5kb2JqCg=="\
  },\
  {\
    "name": "sample_spreadsheet.csv",\
    "mime_type": "text/csv",\
    "content": "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="\
  }\
]
```

OpenAPI example

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
/papers:
  get:
    operationId: findPapers
    summary: Retrieve PDFs of relevant academic papers.
    description: Provided an academic topic, up to five relevant papers will be returned as PDFs.
    parameters:
      - in: query
        name: topic
        required: true
        schema:
          type: string
        description: The topic the papers should be about.
    responses:
      '200':
        description: Zero to five academic paper PDFs
        content:
            application/json:
              schema:
                type: object
                properties:
                  openaiFileResponse:
                    type: array
                    items:
                      type: object
                      properties:
                        name:
                          type: string
                          description: The name of the file.
                        mime_type:
                          type: string
                          description: The MIME type of the file.
                        content:
                          type: string
                          format: byte
                          description: The content of the file in base64 encoding.
```

### URL option

Each element of the array is a URL referencing a file to be downloaded. The headers `Content-Disposition` and `Content-Type` must be set such that a file name and MIME type can be determined. The name of the file will be visible to the user. The MIME type of the file determines eligibility and which features have access to the file.

There is a 10 second timeout for fetching each file.

Here’s an example of an `openaiFileResponse` array with two elements:

```
1
2
3
4
[\
  "https://example.com/f/dca89f18-16d4-4a65-8ea2-ededced01646",\
  "https://example.com/f/01fad6b0-635b-4803-a583-0f678b2e6153"\
]
```

Here’s an example of the required headers for each URL:

```
Content-Type: application/pdf
Content-Disposition: attachment; filename="example_document.pdf"
```

OpenAPI example

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
/papers:
  get:
    operationId: findPapers
    summary: Retrieve PDFs of relevant academic papers.
    description: Provided an academic topic, up to five relevant papers will be returned as PDFs.
    parameters:
      - in: query
        name: topic
        required: true
        schema:
          type: string
        description: The topic the papers should be about.
    responses:
      '200':
        description: Zero to five academic paper PDFs
        content:
            application/json:
              schema:
                type: object
                properties:
                  openaiFileResponse:
                    type: array
                    items:
                    type: string
                    format: uri
                    description: URLs to fetch the files.
```

We use cookies and similar technologies to deliver, maintain, improve our services and for security purposes. Check our [Cookie Policy](https://openai.com/policies/cookie-policy) for details. Click 'Accept all' to let OpenAI and partners use cookies for these purposes. Click 'Reject all' to say no to cookies, except those that are strictly necessary. Choose 'Manage Cookies' to pick specific cookies you're okay with or to change your preferences.

Reject allAccept all