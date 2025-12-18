---
url: "https://platform.openai.com/docs/api-reference/videos"
title: "Videos | OpenAI API Reference"
---

[DocsDocs](https://platform.openai.com/docs/guides/video-generation) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

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

[Create video](https://platform.openai.com/docs/api-reference/videos/create)

[Remix video](https://platform.openai.com/docs/api-reference/videos/remix)

[List videos](https://platform.openai.com/docs/api-reference/videos/list)

[Retrieve video](https://platform.openai.com/docs/api-reference/videos/retrieve)

[Delete video](https://platform.openai.com/docs/api-reference/videos/delete)

[Retrieve video content](https://platform.openai.com/docs/api-reference/videos/content)

[Video job](https://platform.openai.com/docs/api-reference/videos/object)

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

## Videos

Generate videos.

## Create video

posthttps://api.openai.com/v1/videos

Create a new video generation job from a prompt and optional reference assets.

#### Request body

prompt

string

Required

Text prompt that describes the video to generate.

input\_reference

file

Optional

Optional image reference that guides generation.

model

string

Optional

The video generation model to use (allowed values: sora-2, sora-2-pro). Defaults to `sora-2`.

seconds

string

Optional

Clip duration in seconds (allowed values: 4, 8, 12). Defaults to 4 seconds.

size

string

Optional

Output resolution formatted as width x height (allowed values: 720x1280, 1280x720, 1024x1792, 1792x1024). Defaults to 720x1280.

#### Returns

Returns the newly created [video job](https://platform.openai.com/docs/api-reference/videos/object).

Example request

curl

```
1
2
3
4
curl https://api.openai.com/v1/videos \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F "model=sora-2" \
  -F "prompt=A calico cat playing a piano on stage"
```

```
1
2
3
4
5
6
7
import OpenAI from 'openai';

const openai = new OpenAI();

const video = await openai.videos.create({ prompt: 'A calico cat playing a piano on stage' });

console.log(video.id);
```

```
1
2
3
4
5
6
7
from openai import OpenAI

client = OpenAI()
video = client.videos.create(
    prompt="A calico cat playing a piano on stage",
)
print(video.id)
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
package main

import (
  "context"
  "fmt"

  "github.com/openai/openai-go"
)

func main() {
  client := openai.NewClient()
  video, err := client.Videos.New(context.TODO(), openai.VideoNewParams{
    Prompt: "A calico cat playing a piano on stage",
  })
  if err != nil {
    panic(err.Error())
  }
  fmt.Printf("%+v\n", video.ID)
}
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
package com.openai.example;

import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.videos.Video;
import com.openai.models.videos.VideoCreateParams;

public final class Main {
    private Main() {}

    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.fromEnv();

        VideoCreateParams params = VideoCreateParams.builder()
            .prompt("A calico cat playing a piano on stage")
            .build();
        Video video = client.videos().create(params);
    }
}
```

```
1
2
3
4
5
6
7
require "openai"

openai = OpenAI::Client.new

video = openai.videos.create(prompt: "A calico cat playing a piano on stage")

puts(video)
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
  "id": "video_123",
  "object": "video",
  "model": "sora-2",
  "status": "queued",
  "progress": 0,
  "created_at": 1712697600,
  "size": "1024x1792",
  "seconds": "8",
  "quality": "standard"
}
```

## Remix video

posthttps://api.openai.com/v1/videos/{video\_id}/remix

Create a remix of a completed video using a refreshed prompt.

#### Path parameters

video\_id

string

Required

The identifier of the completed video to remix.

#### Request body

prompt

string

Required

Updated text prompt that directs the remix generation.

#### Returns

Creates a remix of the specified [video job](https://platform.openai.com/docs/api-reference/videos/object) using the provided prompt.

Example request

curl

```
1
2
3
4
5
6
curl -X POST https://api.openai.com/v1/videos/video_123/remix \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Extend the scene with the cat taking a bow to the cheering audience"
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
import OpenAI from 'openai';

const client = new OpenAI();

const video = await client.videos.remix('video_123', { prompt: 'Extend the scene with the cat taking a bow to the cheering audience' });

console.log(video.id);
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
video = client.videos.remix(
    video_id="video_123",
    prompt="Extend the scene with the cat taking a bow to the cheering audience",
)
print(video.id)
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
package main

import (
  "context"
  "fmt"

  "github.com/openai/openai-go"
)

func main() {
  client := openai.NewClient()
  video, err := client.Videos.Remix(
    context.TODO(),
    "video_123",
    openai.VideoRemixParams{
      Prompt: "Extend the scene with the cat taking a bow to the cheering audience",
    },
  )
  if err != nil {
    panic(err.Error())
  }
  fmt.Printf("%+v\n", video.ID)
}
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
package com.openai.example;

import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.videos.Video;
import com.openai.models.videos.VideoRemixParams;

public final class Main {
    private Main() {}

    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.fromEnv();

        VideoRemixParams params = VideoRemixParams.builder()
            .videoId("video_123")
            .prompt("Extend the scene with the cat taking a bow to the cheering audience")
            .build();
        Video video = client.videos().remix(params);
    }
}
```

```
1
2
3
4
5
6
7
require "openai"

openai = OpenAI::Client.new

video = openai.videos.remix("video_123", prompt: "Extend the scene with the cat taking a bow to the cheering audience")

puts(video)
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
  "id": "video_456",
  "object": "video",
  "model": "sora-2",
  "status": "queued",
  "progress": 0,
  "created_at": 1712698600,
  "size": "720x1280",
  "seconds": "8",
  "remixed_from_video_id": "video_123"
}
```

## List videos

gethttps://api.openai.com/v1/videos

List recently generated videos for the current project.

#### Query parameters

after

string

Optional

Identifier for the last item from the previous pagination request

limit

integer

Optional

Number of items to retrieve

order

string

Optional

Sort order of results by timestamp. Use `asc` for ascending order or `desc` for descending order.

#### Returns

Returns a paginated list of [video jobs](https://platform.openai.com/docs/api-reference/videos/object) for the organization.

Example request

curl

```
1
2
curl https://api.openai.com/v1/videos \
  -H "Authorization: Bearer $OPENAI_API_KEY"
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
import OpenAI from 'openai';

const openai = new OpenAI();

// Automatically fetches more pages as needed.
for await (const video of openai.videos.list()) {
  console.log(video.id);
}
```

```
1
2
3
4
5
6
from openai import OpenAI

client = OpenAI()
page = client.videos.list()
page = page.data[0]
print(page.id)
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
package main

import (
  "context"
  "fmt"

  "github.com/openai/openai-go"
)

func main() {
  client := openai.NewClient()
  page, err := client.Videos.List(context.TODO(), openai.VideoListParams{

  })
  if err != nil {
    panic(err.Error())
  }
  fmt.Printf("%+v\n", page)
}
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
package com.openai.example;

import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.videos.VideoListPage;
import com.openai.models.videos.VideoListParams;

public final class Main {
    private Main() {}

    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.fromEnv();

        VideoListPage page = client.videos().list();
    }
}
```

```
1
2
3
4
5
6
7
require "openai"

openai = OpenAI::Client.new

page = openai.videos.list

puts(page)
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
  "data": [\
    {\
      "id": "video_123",\
      "object": "video",\
      "model": "sora-2",\
      "status": "completed"\
    }\
  ],
  "object": "list"
}
```

## Retrieve video

gethttps://api.openai.com/v1/videos/{video\_id}

Fetch the latest metadata for a generated video.

#### Path parameters

video\_id

string

Required

The identifier of the video to retrieve.

#### Returns

Returns the [video job](https://platform.openai.com/docs/api-reference/videos/object) matching the provided identifier.

Example request

node.js

```
1
2
3
4
5
6
7
import OpenAI from 'openai';

const client = new OpenAI();

const video = await client.videos.retrieve('video_123');

console.log(video.id);
```

```
1
2
3
4
5
6
7
from openai import OpenAI

client = OpenAI()
video = client.videos.retrieve(
    "video_123",
)
print(video.id)
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
package main

import (
  "context"
  "fmt"

  "github.com/openai/openai-go"
)

func main() {
  client := openai.NewClient()
  video, err := client.Videos.Get(context.TODO(), "video_123")
  if err != nil {
    panic(err.Error())
  }
  fmt.Printf("%+v\n", video.ID)
}
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
package com.openai.example;

import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.videos.Video;
import com.openai.models.videos.VideoRetrieveParams;

public final class Main {
    private Main() {}

    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.fromEnv();

        Video video = client.videos().retrieve("video_123");
    }
}
```

```
1
2
3
4
5
6
7
require "openai"

openai = OpenAI::Client.new

video = openai.videos.retrieve("video_123")

puts(video)
```

## Delete video

deletehttps://api.openai.com/v1/videos/{video\_id}

Permanently delete a completed or failed video and its stored assets.

#### Path parameters

video\_id

string

Required

The identifier of the video to delete.

#### Returns

Returns the deleted video job metadata.

Example request

node.js

```
1
2
3
4
5
6
7
import OpenAI from 'openai';

const client = new OpenAI();

const video = await client.videos.delete('video_123');

console.log(video.id);
```

```
1
2
3
4
5
6
7
from openai import OpenAI

client = OpenAI()
video = client.videos.delete(
    "video_123",
)
print(video.id)
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
package main

import (
  "context"
  "fmt"

  "github.com/openai/openai-go"
)

func main() {
  client := openai.NewClient()
  video, err := client.Videos.Delete(context.TODO(), "video_123")
  if err != nil {
    panic(err.Error())
  }
  fmt.Printf("%+v\n", video.ID)
}
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
package com.openai.example;

import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.videos.VideoDeleteParams;
import com.openai.models.videos.VideoDeleteResponse;

public final class Main {
    private Main() {}

    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.fromEnv();

        VideoDeleteResponse video = client.videos().delete("video_123");
    }
}
```

```
1
2
3
4
5
6
7
require "openai"

openai = OpenAI::Client.new

video = openai.videos.delete("video_123")

puts(video)
```

## Retrieve video content

gethttps://api.openai.com/v1/videos/{video\_id}/content

Download the generated video bytes or a derived preview asset.

#### Path parameters

video\_id

string

Required

The identifier of the video whose media to download.

#### Query parameters

variant

string

Optional

Which downloadable asset to return. Defaults to the MP4 video.

#### Returns

Streams the rendered video content for the specified video job.

Example request

node.js

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
import OpenAI from 'openai';

const client = new OpenAI();

const response = await client.videos.downloadContent('video_123');

console.log(response);

const content = await response.blob();
console.log(content);
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
from openai import OpenAI

client = OpenAI()
response = client.videos.download_content(
    video_id="video_123",
)
print(response)
content = response.read()
print(content)
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
package main

import (
  "context"
  "fmt"

  "github.com/openai/openai-go"
)

func main() {
  client := openai.NewClient()
  response, err := client.Videos.DownloadContent(
    context.TODO(),
    "video_123",
    openai.VideoDownloadContentParams{

    },
  )
  if err != nil {
    panic(err.Error())
  }
  fmt.Printf("%+v\n", response)
}
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
package com.openai.example;

import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.core.http.HttpResponse;
import com.openai.models.videos.VideoDownloadContentParams;

public final class Main {
    private Main() {}

    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.fromEnv();

        HttpResponse response = client.videos().downloadContent("video_123");
    }
}
```

```
1
2
3
4
5
6
7
require "openai"

openai = OpenAI::Client.new

response = openai.videos.download_content("video_123")

puts(response)
```

## Video job

Structured information describing a generated video job.

completed\_at

integer

Unix timestamp (seconds) for when the job completed, if finished.

created\_at

integer

Unix timestamp (seconds) for when the job was created.

error

object

Error payload that explains why generation failed, if applicable.

Show properties

expires\_at

integer

Unix timestamp (seconds) for when the downloadable assets expire, if set.

id

string

Unique identifier for the video job.

model

string

The video generation model that produced the job.

object

string

The object type, which is always `video`.

progress

integer

Approximate completion percentage for the generation task.

prompt

string

The prompt that was used to generate the video.

remixed\_from\_video\_id

string

Identifier of the source video if this video is a remix.

seconds

string

Duration of the generated clip in seconds.

size

string

The resolution of the generated video.

status

string

Current lifecycle status of the video job.

[PreviousAudio](https://platform.openai.com/docs/api-reference/audio) [NextImages](https://platform.openai.com/docs/api-reference/images)

We use cookies and similar technologies to deliver, maintain, improve our services and for security purposes. Check our [Cookie Policy](https://openai.com/policies/cookie-policy) for details. Click 'Accept all' to let OpenAI and partners use cookies for these purposes. Click 'Reject all' to say no to cookies, except those that are strictly necessary. Choose 'Manage Cookies' to pick specific cookies you're okay with or to change your preferences.

Reject allAccept all