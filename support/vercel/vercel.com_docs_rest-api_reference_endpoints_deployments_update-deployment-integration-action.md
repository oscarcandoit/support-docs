---
url: "https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action"
title: "Update deployment integration action - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

deployments

Update deployment integration action

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


update-integration-deployment-action

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.integrations.updateIntegrationDeploymentAction({
    deploymentId: "<id>",
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
    action: "<value>",
  });

}

run();
```

202

400

401

403

Copy

Ask AI

```
This response has no body data.
```

deployments

# Update deployment integration action

Copy page

Updates the deployment integration action for the specified integration installation

Copy page

PATCH

/

v1

/

deployments

/

{deploymentId}

/

integrations

/

{integrationConfigurationId}

/

resources

/

{resourceId}

/

actions

/

{action}

update-integration-deployment-action

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.integrations.updateIntegrationDeploymentAction({
    deploymentId: "<id>",
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
    action: "<value>",
  });

}

run();
```

202

400

401

403

Copy

Ask AI

```
This response has no body data.
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action#parameter-deployment-id)

deploymentId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action#parameter-integration-configuration-id)

integrationConfigurationId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action#parameter-resource-id)

resourceId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action#parameter-action)

action

string

required

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action#body-status)

status

enum<string>

Available options:

`running`,

`succeeded`,

`failed`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action#body-status-text)

statusText

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action#body-status-url)

statusUrl

string<uri>

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action#body-outcomes)

outcomes

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action#body-outcomes-kind)

kind

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action#body-outcomes-secrets)

secrets

object\[\]

required

Show child attributes

[Get deployment events](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events) [Get a deployment by ID or URL](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-a-deployment-by-id-or-url)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.