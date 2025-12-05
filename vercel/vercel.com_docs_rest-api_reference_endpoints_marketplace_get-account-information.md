---
url: "https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-account-information"
title: "Get Account Information - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-account-information#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

marketplace

Get Account Information

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


get-account-info

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.getAccountInfo({
    integrationConfigurationId: "<id>",
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
  "name": "<string>",
  "url": "<string>",
  "contact": {
    "email": "<string>",
    "name": "<string>"
  }
}
```

marketplace

# Get Account Information

Copy page

Fetches the best account or user’s contact info

Copy page

GET

/

v1

/

installations

/

{integrationConfigurationId}

/

account

get-account-info

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.getAccountInfo({
    integrationConfigurationId: "<id>",
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
  "name": "<string>",
  "url": "<string>",
  "contact": {
    "email": "<string>",
    "name": "<string>"
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-account-information#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-account-information#parameter-integration-configuration-id)

integrationConfigurationId

string

required

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-account-information#response-url)

url

string

required

A URL linking to the installation in the Vercel Dashboard.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-account-information#response-contact)

contact

object \| null

required

The best contact for the integration, which can change as team members and their roles change.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-account-information#response-contact-email)

contact.email

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-account-information#response-contact-name)

contact.name

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-account-information#response-name)

name

string

The name of the team the installation is tied to.

[Update Installation](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation) [Get Member Information](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-member-information)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.