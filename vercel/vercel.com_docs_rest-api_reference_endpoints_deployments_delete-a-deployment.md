---
url: "https://vercel.com/docs/rest-api/reference/endpoints/deployments/delete-a-deployment"
title: "Delete a Deployment - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/deployments/delete-a-deployment#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

deployments

Delete a Deployment

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


deleteDeployment

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.deployments.deleteDeployment({
    id: "dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd",
    url: "https://files-orcin-xi.vercel.app/",
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
{
  "uid": "dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd",
  "state": "DELETED"
}
```

deployments

# Delete a Deployment

Copy page

This API allows you to delete a deployment, either by supplying its `id` in the URL or the `url` of the deployment as a query parameter. You can obtain the ID, for example, by listing all deployments.

Copy page

DELETE

/

v13

/

deployments

/

{id}

deleteDeployment

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.deployments.deleteDeployment({
    id: "dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd",
    url: "https://files-orcin-xi.vercel.app/",
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
{
  "uid": "dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd",
  "state": "DELETED"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/delete-a-deployment#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/delete-a-deployment#parameter-id)

id

string

required

The ID of the deployment to be deleted

Example:

`"dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/delete-a-deployment#parameter-url)

url

string

A Deployment or Alias URL. In case it is passed, the ID will be ignored

Example:

`"https://files-orcin-xi.vercel.app/"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/delete-a-deployment#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/delete-a-deployment#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

The deployment was successfully deleted

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/delete-a-deployment#response-uid)

uid

string

required

The removed deployment ID.

Example:

`"dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/delete-a-deployment#response-state)

state

enum<string>

required

A constant with the final state of the deployment.

Available options:

`DELETED`

[List deployments](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments) [Purchase a domain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.