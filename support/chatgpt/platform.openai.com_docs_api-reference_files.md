---
url: "https://platform.openai.com/docs/api-reference/files"
title: "Files | OpenAI API Reference"
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

[Upload file](https://platform.openai.com/docs/api-reference/files/create)

[List files](https://platform.openai.com/docs/api-reference/files/list)

[Retrieve file](https://platform.openai.com/docs/api-reference/files/retrieve)

[Delete file](https://platform.openai.com/docs/api-reference/files/delete)

[Retrieve file content](https://platform.openai.com/docs/api-reference/files/retrieve-contents)

[The file object](https://platform.openai.com/docs/api-reference/files/object)

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

## Files

Files are used to upload documents that can be used with features like [Assistants](https://platform.openai.com/docs/api-reference/assistants), [Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning), and [Batch API](https://platform.openai.com/docs/guides/batch).

## Upload file

posthttps://api.openai.com/v1/files

Upload a file that can be used across various endpoints. Individual files
can be up to 512 MB, and the size of all files uploaded by one organization
can be up to 1 TB.

- The Assistants API supports files up to 2 million tokens and of specific
file types. See the [Assistants Tools guide](https://platform.openai.com/docs/assistants/tools) for
details.
- The Fine-tuning API only supports `.jsonl` files. The input also has
certain required formats for fine-tuning
[chat](https://platform.openai.com/docs/api-reference/fine-tuning/chat-input) or
[completions](https://platform.openai.com/docs/api-reference/fine-tuning/completions-input) models.
- The Batch API only supports `.jsonl` files up to 200 MB in size. The input
also has a specific required
[format](https://platform.openai.com/docs/api-reference/batch/request-input).

Please [contact us](https://help.openai.com/) if you need to increase these
storage limits.

#### Request body

file

file

Required

The File object (not file name) to be uploaded.

purpose

string

Required

The intended purpose of the uploaded file. One of: - `assistants`: Used in the Assistants API - `batch`: Used in the Batch API - `fine-tune`: Used for fine-tuning - `vision`: Images used for vision fine-tuning - `user_data`: Flexible file type for any purpose - `evals`: Used for eval data sets

expires\_after

object

Optional

The expiration policy for a file. By default, files with `purpose=batch` expire after 30 days and all other files are persisted until they are manually deleted.

Show properties

#### Returns

The uploaded [File](https://platform.openai.com/docs/api-reference/files/object) object.

Example request

curl

```
1
2
3
4
5
6
curl https://api.openai.com/v1/files \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F purpose="fine-tune" \
  -F file="@mydata.jsonl"
  -F expires_after[anchor]="created_at"
  -F expires_after[seconds]=2592000
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
from openai import OpenAI
client = OpenAI()

client.files.create(
  file=open("mydata.jsonl", "rb"),
  purpose="fine-tune",
  expires_after={
    "anchor": "created_at",
    "seconds": 2592000
  }
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
14
15
16
17
18
19
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const file = await openai.files.create({
    file: fs.createReadStream("mydata.jsonl"),
    purpose: "fine-tune",
    expires_after: {
      anchor: "created_at",
      seconds: 2592000
    }
  });

  console.log(file);
}

main();
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
  "id": "file-abc123",
  "object": "file",
  "bytes": 120000,
  "created_at": 1677610602,
  "expires_at": 1677614202,
  "filename": "mydata.jsonl",
  "purpose": "fine-tune",
}
```

## List files

gethttps://api.openai.com/v1/files

Returns a list of files.

#### Query parameters

after

string

Optional

A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj\_foo, your subsequent call can include after=obj\_foo in order to fetch the next page of the list.

limit

integer

Optional

Defaults to 10000

A limit on the number of objects to be returned. Limit can range between 1 and 10,000, and the default is 10,000.

order

string

Optional

Defaults to desc

Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.

purpose

string

Optional

Only return files with the given purpose.

#### Returns

A list of [File](https://platform.openai.com/docs/api-reference/files/object) objects.

Example request

curl

```
1
2
curl https://api.openai.com/v1/files \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

```
1
2
3
4
from openai import OpenAI
client = OpenAI()

client.files.list()
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
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const list = await openai.files.list();

  for await (const file of list) {
    console.log(file);
  }
}

main();
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
{
  "object": "list",
  "data": [\
    {\
      "id": "file-abc123",\
      "object": "file",\
      "bytes": 175,\
      "created_at": 1613677385,\
      "expires_at": 1677614202,\
      "filename": "salesOverview.pdf",\
      "purpose": "assistants",\
    },\
    {\
      "id": "file-abc456",\
      "object": "file",\
      "bytes": 140,\
      "created_at": 1613779121,\
      "expires_at": 1677614202,\
      "filename": "puppy.jsonl",\
      "purpose": "fine-tune",\
    }\
  ],
  "first_id": "file-abc123",
  "last_id": "file-abc456",
  "has_more": false
}
```

## Retrieve file

gethttps://api.openai.com/v1/files/{file\_id}

Returns information about a specific file.

#### Path parameters

file\_id

string

Required

The ID of the file to use for this request.

#### Returns

The [File](https://platform.openai.com/docs/api-reference/files/object) object matching the specified ID.

Example request

curl

```
1
2
curl https://api.openai.com/v1/files/file-abc123 \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

```
1
2
3
4
from openai import OpenAI
client = OpenAI()

client.files.retrieve("file-abc123")
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
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const file = await openai.files.retrieve("file-abc123");

  console.log(file);
}

main();
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
  "id": "file-abc123",
  "object": "file",
  "bytes": 120000,
  "created_at": 1677610602,
  "expires_at": 1677614202,
  "filename": "mydata.jsonl",
  "purpose": "fine-tune",
}
```

## Delete file

deletehttps://api.openai.com/v1/files/{file\_id}

Delete a file and remove it from all vector stores.

#### Path parameters

file\_id

string

Required

The ID of the file to use for this request.

#### Returns

Deletion status.

Example request

curl

```
1
2
3
curl https://api.openai.com/v1/files/file-abc123 \
  -X DELETE \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

```
1
2
3
4
from openai import OpenAI
client = OpenAI()

client.files.delete("file-abc123")
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
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const file = await openai.files.delete("file-abc123");

  console.log(file);
}

main();
```

Response

```
1
2
3
4
5
{
  "id": "file-abc123",
  "object": "file",
  "deleted": true
}
```

## Retrieve file content

gethttps://api.openai.com/v1/files/{file\_id}/content

Returns the contents of the specified file.

#### Path parameters

file\_id

string

Required

The ID of the file to use for this request.

#### Returns

The file content.

Example request

curl

```
1
2
curl https://api.openai.com/v1/files/file-abc123/content \
  -H "Authorization: Bearer $OPENAI_API_KEY" > file.jsonl
```

```
1
2
3
4
from openai import OpenAI
client = OpenAI()

content = client.files.content("file-abc123")
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
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const file = await openai.files.content("file-abc123");

  console.log(file);
}

main();
```

## The file object

The `File` object represents a document that has been uploaded to OpenAI.

bytes

integer

The size of the file, in bytes.

created\_at

integer

The Unix timestamp (in seconds) for when the file was created.

expires\_at

integer

The Unix timestamp (in seconds) for when the file will expire.

filename

string

The name of the file.

id

string

The file identifier, which can be referenced in the API endpoints.

object

string

The object type, which is always `file`.

purpose

string

The intended purpose of the file. Supported values are `assistants`, `assistants_output`, `batch`, `batch_output`, `fine-tune`, `fine-tune-results`, `vision`, and `user_data`.

status

Deprecated

string

Deprecated. The current status of the file, which can be either `uploaded`, `processed`, or `error`.

status\_details

Deprecated

string

Deprecated. For details on why a fine-tuning training file failed validation, see the `error` field on `fine_tuning.job`.

OBJECT The file object

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
  "id": "file-abc123",
  "object": "file",
  "bytes": 120000,
  "created_at": 1677610602,
  "expires_at": 1680202602,
  "filename": "salesOverview.pdf",
  "purpose": "assistants",
}
```

[PreviousBatch](https://platform.openai.com/docs/api-reference/batch) [NextUploads](https://platform.openai.com/docs/api-reference/uploads)