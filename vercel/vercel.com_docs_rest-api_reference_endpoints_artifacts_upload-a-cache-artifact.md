---
url: "https://vercel.com/docs/rest-api/reference/endpoints/artifacts/upload-a-cache-artifact"
title: "Upload a cache artifact - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/upload-a-cache-artifact#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

artifacts

Upload a cache artifact

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

  - [POST\\
    \\
    Record an artifacts cache usage event](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event)
  - [GET\\
    \\
    Get status of Remote Caching for this principal](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/get-status-of-remote-caching-for-this-principal)
  - [GET\\
    \\
    Download a cache artifact](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/download-a-cache-artifact)
  - [PUT\\
    \\
    Upload a cache artifact](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/upload-a-cache-artifact)
  - [HEAD\\
    \\
    Check if a cache artifact exists](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/check-if-a-cache-artifact-exists)
  - [POST\\
    \\
    Query information about an artifact](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/query-information-about-an-artifact)
- checks

- projects

- deployments

- domains

- dns

- domains-registrar

- logDrains

- drains

- edge-cache

- edge-config

- environment

- user

- integrations

- marketplace

- authentication

- logs

- projectMembers

- connect

- rolling-release

- security

- teams

- webhooks

- aliases

- certs


uploadArtifact

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";
import { openAsBlob } from "node:fs";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.artifacts.uploadArtifact({
    contentLength: 3848.22,
    xArtifactDuration: 400,
    xArtifactClientCi: "VERCEL",
    xArtifactClientInteractive: 0,
    xArtifactTag: "Tc0BmHvJYMIYJ62/zx87YqO0Flxk+5Ovip25NY825CQ=",
    hash: "12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();
```

202

400

401

402

403

Copy

Ask AI

```
{
  "urls": [\
    "https://api.vercel.com/v2/now/artifact/12HKQaOmR5t5Uy6vdcQsNIiZgHGB"\
  ]
}
```

artifacts

# Upload a cache artifact

Copy page

Uploads a cache artifact identified by the `hash` specified on the path. The cache artifact can then be downloaded with the provided `hash`.

Copy page

PUT

/

v8

/

artifacts

/

{hash}

uploadArtifact

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";
import { openAsBlob } from "node:fs";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.artifacts.uploadArtifact({
    contentLength: 3848.22,
    xArtifactDuration: 400,
    xArtifactClientCi: "VERCEL",
    xArtifactClientInteractive: 0,
    xArtifactTag: "Tc0BmHvJYMIYJ62/zx87YqO0Flxk+5Ovip25NY825CQ=",
    hash: "12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();
```

202

400

401

402

403

Copy

Ask AI

```
{
  "urls": [\
    "https://api.vercel.com/v2/now/artifact/12HKQaOmR5t5Uy6vdcQsNIiZgHGB"\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/upload-a-cache-artifact#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Headers

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/upload-a-cache-artifact#parameter-content-length)

Content-Length

number

required

The artifact size in bytes

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/upload-a-cache-artifact#parameter-x-artifact-duration)

x-artifact-duration

number

The time taken to generate the uploaded artifact in milliseconds.

Example:

`400`

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/upload-a-cache-artifact#parameter-x-artifact-client-ci)

x-artifact-client-ci

string

The continuous integration or delivery environment where this artifact was generated.

Maximum length: `50`

Example:

`"VERCEL"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/upload-a-cache-artifact#parameter-x-artifact-client-interactive)

x-artifact-client-interactive

integer

1 if the client is an interactive shell. Otherwise 0

Required range: `0 <= x <= 1`

Example:

`0`

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/upload-a-cache-artifact#parameter-x-artifact-tag)

x-artifact-tag

string

The base64 encoded tag for this artifact. The value is sent back to clients when the artifact is downloaded as the header `x-artifact-tag`

Maximum length: `600`

Example:

`"Tc0BmHvJYMIYJ62/zx87YqO0Flxk+5Ovip25NY825CQ="`

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/upload-a-cache-artifact#parameter-hash)

hash

string

required

The artifact hash

Example:

`"12HKQaOmR5t5Uy6vdcQsNIiZgHGB"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/upload-a-cache-artifact#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/upload-a-cache-artifact#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/octet-stream · file

The body is of type `file`.

#### Response

202

application/json

File successfully uploaded

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/upload-a-cache-artifact#response-urls)

urls

string\[\]

required

Array of URLs where the artifact was updated

Example:

```
[\
  "https://api.vercel.com/v2/now/artifact/12HKQaOmR5t5Uy6vdcQsNIiZgHGB"\
]
```

[Download a cache artifact](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/download-a-cache-artifact) [Check if a cache artifact exists](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/check-if-a-cache-artifact-exists)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.