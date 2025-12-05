---
url: "https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files"
title: "List Deployment Files - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

deployments

List Deployment Files

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

- checks

- projects

- deployments

  - [GET\\
    \\
    Get deployment events](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events)
  - [PATCH\\
    \\
    Update deployment integration action](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action)
  - [GET\\
    \\
    Get a deployment by ID or URL](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-a-deployment-by-id-or-url)
  - [POST\\
    \\
    Create a new deployment](https://vercel.com/docs/rest-api/reference/endpoints/deployments/create-a-new-deployment)
  - [PATCH\\
    \\
    Cancel a deployment](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment)
  - [POST\\
    \\
    Upload Deployment Files](https://vercel.com/docs/rest-api/reference/endpoints/deployments/upload-deployment-files)
  - [GET\\
    \\
    List Deployment Files](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files)
  - [GET\\
    \\
    Get Deployment File Contents](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-file-contents)
  - [GET\\
    \\
    List deployments](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments)
  - [DEL\\
    \\
    Delete a Deployment](https://vercel.com/docs/rest-api/reference/endpoints/deployments/delete-a-deployment)
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


listDeploymentFiles

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.deployments.listDeploymentFiles({
    id: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

200

400

401

403

404

Copy

Ask AI

```
[\
  {\
    "name": "my-file.json",\
    "type": "file",\
    "uid": "2d4aad419917f15b1146e9e03ddc9bb31747e4d0",\
    "children": [\
      {}\
    ],\
    "contentType": "application/json",\
    "mode": 123\
  }\
]
```

deployments

# List Deployment Files

Copy page

Allows to retrieve the file structure of the source code of a deployment by supplying the deployment unique identifier. If the deployment was created with the Vercel CLI or the API directly with the `files` key, it will have a file tree that can be retrievable.

Copy page

GET

/

v6

/

deployments

/

{id}

/

files

listDeploymentFiles

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.deployments.listDeploymentFiles({
    id: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

200

400

401

403

404

Copy

Ask AI

```
[\
  {\
    "name": "my-file.json",\
    "type": "file",\
    "uid": "2d4aad419917f15b1146e9e03ddc9bb31747e4d0",\
    "children": [\
      {}\
    ],\
    "contentType": "application/json",\
    "mode": 123\
  }\
]
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files#parameter-id)

id

string

required

The unique deployment identifier

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

Retrieved the file tree successfully

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files#response-name)

name

string

required

The name of the file tree entry

Example:

`"my-file.json"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files#response-type)

type

enum<string>

required

String indicating the type of file tree entry.

Available options:

`directory`,

`file`,

`symlink`,

`lambda`,

`middleware`,

`invalid`

Example:

`"file"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files#response-mode)

mode

number

required

The file "mode" indicating file type and permissions.

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files#response-uid)

uid

string

The unique identifier of the file (only valid for the `file` type)

Example:

`"2d4aad419917f15b1146e9e03ddc9bb31747e4d0"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files#response-children)

children

object\[\]

The list of children files of the directory (only valid for the `directory` type)

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files#response-content-type)

contentType

string

The content-type of the file (only valid for the `file` type)

Example:

`"application/json"`

[Upload Deployment Files](https://vercel.com/docs/rest-api/reference/endpoints/deployments/upload-deployment-files) [Get Deployment File Contents](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-file-contents)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.