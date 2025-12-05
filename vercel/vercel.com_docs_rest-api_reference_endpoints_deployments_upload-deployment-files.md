---
url: "https://vercel.com/docs/rest-api/reference/endpoints/deployments/upload-deployment-files"
title: "Upload Deployment Files - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/deployments/upload-deployment-files#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

deployments

Upload Deployment Files

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


uploadFile

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.deployments.uploadFile({
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

Copy

Ask AI

```
{
  "urls": [\
    "example-upload.aws.com"\
  ]
}
```

deployments

# Upload Deployment Files

Copy page

Before you create a deployment you need to upload the required files for that deployment. To do it, you need to first upload each file to this endpoint. Once that’s completed, you can create a new deployment with the uploaded files. The file content must be placed inside the body of the request. In the case of a successful response you’ll receive a status code 200 with an empty body.

Copy page

POST

/

v2

/

files

uploadFile

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.deployments.uploadFile({
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

Copy

Ask AI

```
{
  "urls": [\
    "example-upload.aws.com"\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/upload-deployment-files#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Headers

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/upload-deployment-files#parameter-content-length)

Content-Length

number

The file size in bytes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/upload-deployment-files#parameter-x-vercel-digest)

x-vercel-digest

string

The file SHA1 used to check the integrity

Maximum length: `40`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/upload-deployment-files#parameter-x-now-digest)

x-now-digest

string

deprecated

The file SHA1 used to check the integrity

Maximum length: `40`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/upload-deployment-files#parameter-x-now-size)

x-now-size

number

deprecated

The file size as an alternative to `Content-Length`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/upload-deployment-files#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/upload-deployment-files#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/octet-stream · file

The body is of type `file`.

#### Response

200

application/json

File already uploaded
File successfully uploaded

- Option 1

- Option 2


[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/upload-deployment-files#response-urls)

urls

string\[\]

required

Array of URLs where the file was updated

Example:

```
["example-upload.aws.com"]
```

[Cancel a deployment](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment) [List Deployment Files](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.