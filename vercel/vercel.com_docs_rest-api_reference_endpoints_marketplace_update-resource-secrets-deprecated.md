---
url: "https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets-deprecated"
title: "Update Resource Secrets (Deprecated) - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets-deprecated#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

marketplace

Update Resource Secrets (Deprecated)

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

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

  - [PATCH\\
    \\
    Update Installation](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation)
  - [GET\\
    \\
    Get Account Information](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-account-information)
  - [GET\\
    \\
    Get Member Information](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-member-information)
  - [POST\\
    \\
    Create Event](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/create-event)
  - [GET\\
    \\
    Get Integration Resources](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources)
  - [GET\\
    \\
    Get Integration Resource](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource)
  - [PUT\\
    \\
    Import Resource](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/import-resource)
  - [DEL\\
    \\
    Delete Integration Resource](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/delete-integration-resource)
  - [PATCH\\
    \\
    Update Resource](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource)
  - [POST\\
    \\
    Submit Billing Data](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data)
  - [POST\\
    \\
    Submit Invoice](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice)
  - [GET\\
    \\
    Get Invoice](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice)
  - [POST\\
    \\
    Invoice Actions](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/invoice-actions)
  - [POST\\
    \\
    Submit Prepayment Balances](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-prepayment-balances)
  - [PUT\\
    \\
    Update Resource Secrets (Deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets-deprecated)
  - [PUT\\
    \\
    Update Resource Secrets](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets)
  - [POST\\
    \\
    Create one or multiple experimentation items](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/create-one-or-multiple-experimentation-items)
  - [DEL\\
    \\
    Delete an existing experimentation item](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/delete-an-existing-experimentation-item)
  - [PATCH\\
    \\
    Patch an existing experimentation item](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item)
  - [PUT\\
    \\
    Push data into a user-provided Edge Config](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/push-data-into-a-user-provided-edge-config)
  - [HEAD\\
    \\
    Get the data of a user-provided Edge Config](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-the-data-of-a-user-provided-edge-config)
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


update-resource-secrets

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.updateResourceSecrets({
    integrationConfigurationId: "<id>",
    integrationProductIdOrSlug: "<value>",
    resourceId: "<id>",
    requestBody: {
      secrets: [],
    },
  });

}

run();
```

201

400

401

403

404

409

422

Copy

Ask AI

```
This response has no body data.
```

marketplace

# Update Resource Secrets (Deprecated)

Copy page

This endpoint is deprecated and replaced with the endpoint [Update Resource Secrets](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets-deprecated#update-resource-secrets).

This endpoint updates the secrets of a resource. If a resource has projects connected, the connected secrets are updated with the new secrets. The old secrets may still be used by existing connected projects because they are not automatically redeployed. Redeployment is a manual action and must be completed by the user. All new project connections will use the new secrets.

Use cases for this endpoint:

\- Resetting the credentials of a database in the partner. If the user requests the credentials to be updated in the partner’s application, the partner post the new set of secrets to Vercel, the user should redeploy their application and the expire the old credentials.

Copy page

PUT

/

v1

/

installations

/

{integrationConfigurationId}

/

products

/

{integrationProductIdOrSlug}

/

resources

/

{resourceId}

/

secrets

update-resource-secrets

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.updateResourceSecrets({
    integrationConfigurationId: "<id>",
    integrationProductIdOrSlug: "<value>",
    resourceId: "<id>",
    requestBody: {
      secrets: [],
    },
  });

}

run();
```

201

400

401

403

404

409

422

Copy

Ask AI

```
This response has no body data.
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets-deprecated#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets-deprecated#parameter-integration-configuration-id)

integrationConfigurationId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets-deprecated#parameter-integration-product-id-or-slug)

integrationProductIdOrSlug

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets-deprecated#parameter-resource-id)

resourceId

string

required

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets-deprecated#body-secrets)

secrets

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets-deprecated#body-secrets-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets-deprecated#body-secrets-value)

value

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets-deprecated#body-secrets-prefix)

prefix

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets-deprecated#body-secrets-environment-overrides)

environmentOverrides

object

A map of environments to override values for the secret, used for setting different values across deployments in production, preview, and development environments. Note: the same value will be used for all deployments in the given environment.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets-deprecated#body-partial)

partial

boolean

If true, will only update the provided secrets

[Submit Prepayment Balances](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-prepayment-balances) [Update Resource Secrets](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.