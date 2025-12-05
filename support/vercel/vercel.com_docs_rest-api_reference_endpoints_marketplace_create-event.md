---
url: "https://vercel.com/docs/rest-api/reference/endpoints/marketplace/create-event"
title: "Create Event - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/create-event#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

marketplace

Create Event

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


create-event

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.createEvent({
    integrationConfigurationId: "<id>",
    requestBody: {
      event: {
        type: "installation.updated",
      },
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

Copy

Ask AI

```
This response has no body data.
```

marketplace

# Create Event

Copy page

Partner notifies Vercel of any changes made to an Installation or a Resource. Vercel is expected to use `list-resources` and other read APIs to get the new state.

`resource.updated` event should be dispatched when any state of a resource linked to Vercel is modified by the partner.

`installation.updated` event should be dispatched when an installation’s billing plan is changed via the provider instead of Vercel.

Resource update use cases:

\- The user renames a database in the partner’s application. The partner should dispatch a `resource.updated` event to notify Vercel to update the resource in Vercel’s datastores.

\- A resource has been suspended due to a lack of use. The partner should dispatch a `resource.updated` event to notify Vercel to update the resource’s status in Vercel’s datastores.

Copy page

POST

/

v1

/

installations

/

{integrationConfigurationId}

/

events

create-event

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.createEvent({
    integrationConfigurationId: "<id>",
    requestBody: {
      event: {
        type: "installation.updated",
      },
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

Copy

Ask AI

```
This response has no body data.
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/create-event#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/create-event#parameter-integration-configuration-id)

integrationConfigurationId

string

required

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/create-event#body-event)

event

object

required

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/create-event#body-event-type)

event.type

enum<string>

required

Available options:

`installation.updated`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/create-event#body-event-billing-plan-id)

event.billingPlanId

string

The installation-level billing plan ID

[Get Member Information](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-member-information) [Get Integration Resources](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.