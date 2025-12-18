---
url: "https://platform.openai.com/docs/api-reference/images?lang=node"
title: "Images | OpenAI API Reference"
---

[DocsDocs](https://platform.openai.com/docs/guides/images) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

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

[Create image](https://platform.openai.com/docs/api-reference/images/create?lang=node)

[Create image edit](https://platform.openai.com/docs/api-reference/images/createEdit?lang=node)

[Create image variation](https://platform.openai.com/docs/api-reference/images/createVariation?lang=node)

[The image generation response](https://platform.openai.com/docs/api-reference/images/object?lang=node)

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

[Usage](https://platform.openai.com/docs/api-reference/usage?lang=node)

[Certificates](https://platform.openai.com/docs/api-reference/certificates?lang=node)

Legacy

[Completions](https://platform.openai.com/docs/api-reference/completions?lang=node)

[Realtime Beta](https://platform.openai.com/docs/api-reference/realtime_beta?lang=node)

[Realtime Beta session tokens](https://platform.openai.com/docs/api-reference/realtime-beta-sessions?lang=node)

[Realtime Beta client events](https://platform.openai.com/docs/api-reference/realtime-beta-client-events?lang=node)

[Realtime Beta server events](https://platform.openai.com/docs/api-reference/realtime-beta-server-events?lang=node)

[Cookbook](https://cookbook.openai.com/) [Forum](https://community.openai.com/categories)

## Images

Given a prompt and/or an input image, the model will generate a new image.
Related guide: [Image generation](https://platform.openai.com/docs/guides/images)

## Create image

posthttps://api.openai.com/v1/images/generations

Creates an image given a prompt. [Learn more](https://platform.openai.com/docs/guides/images).

#### Request body

prompt

string

Required

A text description of the desired image(s). The maximum length is 32000 characters for the GPT image models, 1000 characters for `dall-e-2` and 4000 characters for `dall-e-3`.

background

string or null

Optional

Defaults to auto

Allows to set transparency for the background of the generated image(s).
This parameter is only supported for the GPT image models. Must be one of
`transparent`, `opaque` or `auto` (default value). When `auto` is used, the
model will automatically determine the best background for the image.

If `transparent`, the output format needs to support transparency, so it
should be set to either `png` (default value) or `webp`.

model

string

Optional

Defaults to dall-e-2

The model to use for image generation. One of `dall-e-2`, `dall-e-3`, or a GPT image model (`gpt-image-1`, `gpt-image-1-mini`, `gpt-image-1.5`). Defaults to `dall-e-2` unless a parameter specific to the GPT image models is used.

moderation

string or null

Optional

Defaults to auto

Control the content-moderation level for images generated by the GPT image models. Must be either `low` for less restrictive filtering or `auto` (default value).

n

integer or null

Optional

Defaults to 1

The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only `n=1` is supported.

output\_compression

integer or null

Optional

Defaults to 100

The compression level (0-100%) for the generated images. This parameter is only supported for the GPT image models with the `webp` or `jpeg` output formats, and defaults to 100.

output\_format

string or null

Optional

Defaults to png

The format in which the generated images are returned. This parameter is only supported for the GPT image models. Must be one of `png`, `jpeg`, or `webp`.

partial\_images

integer

Optional

Defaults to 0

The number of partial images to generate. This parameter is used for
streaming responses that return partial images. Value must be between 0 and 3.
When set to 0, the response will be a single image sent in one streaming event.

Note that the final image may be sent before the full number of partial images
are generated if the full image is generated more quickly.

quality

string or null

Optional

Defaults to auto

The quality of the image that will be generated.

- `auto` (default value) will automatically select the best quality for the given model.
- `high`, `medium` and `low` are supported for the GPT image models.
- `hd` and `standard` are supported for `dall-e-3`.
- `standard` is the only option for `dall-e-2`.

response\_format

string or null

Optional

Defaults to url

The format in which generated images with `dall-e-2` and `dall-e-3` are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated. This parameter isn't supported for the GPT image models, which always return base64-encoded images.

size

string or null

Optional

Defaults to auto

The size of the generated images. Must be one of `1024x1024`, `1536x1024` (landscape), `1024x1536` (portrait), or `auto` (default value) for the GPT image models, one of `256x256`, `512x512`, or `1024x1024` for `dall-e-2`, and one of `1024x1024`, `1792x1024`, or `1024x1792` for `dall-e-3`.

stream

boolean or null

Optional

Defaults to false

Generate the image in streaming mode. Defaults to `false`. See the
[Image generation guide](https://platform.openai.com/docs/guides/image-generation) for more information.
This parameter is only supported for the GPT image models.

style

string or null

Optional

Defaults to vivid

The style of the generated images. This parameter is only supported for `dall-e-3`. Must be one of `vivid` or `natural`. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images.

user

string

Optional

A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](https://platform.openai.com/docs/guides/safety-best-practices#end-user-ids).

#### Returns

Returns an [image](https://platform.openai.com/docs/api-reference/images/object) object.

Generate imageStreaming

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
curl https://api.openai.com/v1/images/generations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "gpt-image-1.5",
    "prompt": "A cute baby sea otter",
    "n": 1,
    "size": "1024x1024"
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
import base64
from openai import OpenAI
client = OpenAI()

img = client.images.generate(
    model="gpt-image-1.5",
    prompt="A cute baby sea otter",
    n=1,
    size="1024x1024"
)

image_bytes = base64.b64decode(img.data[0].b64_json)
with open("output.png", "wb") as f:
    f.write(image_bytes)
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
import OpenAI from "openai";
import { writeFile } from "fs/promises";

const client = new OpenAI();

const img = await client.images.generate({
  model: "gpt-image-1.5",
  prompt: "A cute baby sea otter",
  n: 1,
  size: "1024x1024"
});

const imageBuffer = Buffer.from(img.data[0].b64_json, "base64");
await writeFile("output.png", imageBuffer);
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
  "created": 1713833628,
  "data": [\
    {\
      "b64_json": "..."\
    }\
  ],
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

## Create image edit

posthttps://api.openai.com/v1/images/edits

Creates an edited or extended image given one or more source images and a prompt. This endpoint only supports `gpt-image-1` and `dall-e-2`.

#### Request body

image

string or array

Required

The image(s) to edit. Must be a supported image file or an array of images.

For the GPT image models (`gpt-image-1`, `gpt-image-1-mini`, and `gpt-image-1.5`), each image should be a `png`, `webp`, or `jpg`
file less than 50MB. You can provide up to 16 images.

For `dall-e-2`, you can only provide one image, and it should be a square
`png` file less than 4MB.

prompt

string

Required

A text description of the desired image(s). The maximum length is 1000 characters for `dall-e-2`, and 32000 characters for the GPT image models.

background

string or null

Optional

Defaults to auto

Allows to set transparency for the background of the generated image(s).
This parameter is only supported for the GPT image models. Must be one of
`transparent`, `opaque` or `auto` (default value). When `auto` is used, the
model will automatically determine the best background for the image.

If `transparent`, the output format needs to support transparency, so it
should be set to either `png` (default value) or `webp`.

input\_fidelity

string

Optional

Control how much effort the model will exert to match the style and features, especially facial features, of input images. This parameter is only supported for `gpt-image-1`. Unsupported for `gpt-image-1-mini`. Supports `high` and `low`. Defaults to `low`.

mask

file

Optional

An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where `image` should be edited. If there are multiple images provided, the mask will be applied on the first image. Must be a valid PNG file, less than 4MB, and have the same dimensions as `image`.

model

string

Optional

Defaults to dall-e-2

The model to use for image generation. Only `dall-e-2` and the GPT image models are supported. Defaults to `dall-e-2` unless a parameter specific to the GPT image models is used.

n

integer or null

Optional

Defaults to 1

The number of images to generate. Must be between 1 and 10.

output\_compression

integer or null

Optional

Defaults to 100

The compression level (0-100%) for the generated images. This parameter
is only supported for the GPT image models with the `webp` or `jpeg` output
formats, and defaults to 100.

output\_format

string or null

Optional

Defaults to png

The format in which the generated images are returned. This parameter is
only supported for the GPT image models. Must be one of `png`, `jpeg`, or `webp`.
The default value is `png`.

partial\_images

integer

Optional

Defaults to 0

The number of partial images to generate. This parameter is used for
streaming responses that return partial images. Value must be between 0 and 3.
When set to 0, the response will be a single image sent in one streaming event.

Note that the final image may be sent before the full number of partial images
are generated if the full image is generated more quickly.

quality

string or null

Optional

Defaults to auto

The quality of the image that will be generated. `high`, `medium` and `low` are only supported for the GPT image models. `dall-e-2` only supports `standard` quality. Defaults to `auto`.

response\_format

string or null

Optional

Defaults to url

The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated. This parameter is only supported for `dall-e-2`, as the GPT image models always return base64-encoded images.

size

string or null

Optional

Defaults to 1024x1024

The size of the generated images. Must be one of `1024x1024`, `1536x1024` (landscape), `1024x1536` (portrait), or `auto` (default value) for the GPT image models, and one of `256x256`, `512x512`, or `1024x1024` for `dall-e-2`.

stream

boolean or null

Optional

Defaults to false

Edit the image in streaming mode. Defaults to `false`. See the
[Image generation guide](https://platform.openai.com/docs/guides/image-generation) for more information.

user

string

Optional

A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](https://platform.openai.com/docs/guides/safety-best-practices#end-user-ids).

#### Returns

Returns an [image](https://platform.openai.com/docs/api-reference/images/object) object.

Edit imageStreaming

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
curl -s -D >(grep -i x-request-id >&2) \
  -o >(jq -r '.data[0].b64_json' | base64 --decode > gift-basket.png) \
  -X POST "https://api.openai.com/v1/images/edits" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F "model=gpt-image-1.5" \
  -F "image[]=@body-lotion.png" \
  -F "image[]=@bath-bomb.png" \
  -F "image[]=@incense-kit.png" \
  -F "image[]=@soap.png" \
  -F 'prompt=Create a lovely gift basket with these four items in it'
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
27
import base64
from openai import OpenAI
client = OpenAI()

prompt = """
Generate a photorealistic image of a gift basket on a white background
labeled 'Relax & Unwind' with a ribbon and handwriting-like font,
containing all the items in the reference pictures.
"""

result = client.images.edit(
    model="gpt-image-1.5",
    image=[\
        open("body-lotion.png", "rb"),\
        open("bath-bomb.png", "rb"),\
        open("incense-kit.png", "rb"),\
        open("soap.png", "rb"),\
    ],
    prompt=prompt
)

image_base64 = result.data[0].b64_json
image_bytes = base64.b64decode(image_base64)

# Save the image to a file
with open("gift-basket.png", "wb") as f:
    f.write(image_bytes)
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
27
28
29
30
import fs from "fs";
import OpenAI, { toFile } from "openai";

const client = new OpenAI();

const imageFiles = [\
    "bath-bomb.png",\
    "body-lotion.png",\
    "incense-kit.png",\
    "soap.png",\
];

const images = await Promise.all(
    imageFiles.map(async (file) =>
        await toFile(fs.createReadStream(file), null, {
            type: "image/png",
        })
    ),
);

const rsp = await client.images.edit({
    model: "gpt-image-1.5",
    image: images,
    prompt: "Create a lovely gift basket with these four items in it",
});

// Save the image to a file
const image_base64 = rsp.data[0].b64_json;
const image_bytes = Buffer.from(image_base64, "base64");
fs.writeFileSync("basket.png", image_bytes);
```

## Create image variation

posthttps://api.openai.com/v1/images/variations

Creates a variation of a given image. This endpoint only supports `dall-e-2`.

#### Request body

image

file

Required

The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.

model

string or "dall-e-2"

Optional

Defaults to dall-e-2

The model to use for image generation. Only `dall-e-2` is supported at this time.

n

integer or null

Optional

Defaults to 1

The number of images to generate. Must be between 1 and 10.

response\_format

string or null

Optional

Defaults to url

The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated.

size

string or null

Optional

Defaults to 1024x1024

The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.

user

string

Optional

A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](https://platform.openai.com/docs/guides/safety-best-practices#end-user-ids).

#### Returns

Returns a list of [image](https://platform.openai.com/docs/api-reference/images/object) objects.

Example request

curl

```
1
2
3
4
5
curl https://api.openai.com/v1/images/variations \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F image="@otter.png" \
  -F n=2 \
  -F size="1024x1024"
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
from openai import OpenAI
client = OpenAI()

response = client.images.create_variation(
  image=open("image_edit_original.png", "rb"),
  n=2,
  size="1024x1024"
)
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
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const image = await openai.images.createVariation({
    image: fs.createReadStream("otter.png"),
  });

  console.log(image.data);
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
12
using System;

using OpenAI.Images;

ImageClient client = new(
    model: "dall-e-2",
    apiKey: Environment.GetEnvironmentVariable("OPENAI_API_KEY")
);

GeneratedImage image = client.GenerateImageVariation(imageFilePath: "otter.png");

Console.WriteLine(image.ImageUri);
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
{
  "created": 1589478378,
  "data": [\
    {\
      "url": "https://..."\
    },\
    {\
      "url": "https://..."\
    }\
  ]
}
```

## The image generation response

The response from the image generation endpoint.

background

string

The background parameter used for the image generation. Either `transparent` or `opaque`.

created

integer

The Unix timestamp (in seconds) of when the image was created.

data

array

The list of generated images.

Show properties

output\_format

string

The output format of the image generation. Either `png`, `webp`, or `jpeg`.

quality

string

The quality of the image generated. Either `low`, `medium`, or `high`.

size

string

The size of the image generated. Either `1024x1024`, `1024x1536`, or `1536x1024`.

usage

object

For `gpt-image-1` only, the token usage information for the image generation.

Show properties

OBJECT The image generation response

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
  "created": 1713833628,
  "data": [\
    {\
      "b64_json": "..."\
    }\
  ],
  "background": "transparent",
  "output_format": "png",
  "size": "1024x1024",
  "quality": "high",
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

[PreviousVideos](https://platform.openai.com/docs/api-reference/videos?lang=node) [NextImage Streaming](https://platform.openai.com/docs/api-reference/images-streaming?lang=node)

We use cookies and similar technologies to deliver, maintain, improve our services and for security purposes. Check our [Cookie Policy](https://openai.com/policies/cookie-policy) for details. Click 'Accept all' to let OpenAI and partners use cookies for these purposes. Click 'Reject all' to say no to cookies, except those that are strictly necessary. Choose 'Manage Cookies' to pick specific cookies you're okay with or to change your preferences.

Reject allAccept all