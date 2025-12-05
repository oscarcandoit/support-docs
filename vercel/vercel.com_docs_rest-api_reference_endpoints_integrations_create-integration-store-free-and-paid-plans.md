---
url: "https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans"
title: "Create integration store (free and paid plans) - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

integrations

Create integration store (free and paid plans)

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

  - [GET\\
    \\
    List integration billing plans](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans)
  - [POST\\
    \\
    Connect integration resource to project](https://vercel.com/docs/rest-api/reference/endpoints/integrations/connect-integration-resource-to-project)
  - [GET\\
    \\
    Get configurations for the authenticated user or team](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team)
  - [GET\\
    \\
    Retrieve an integration configuration](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration)
  - [DEL\\
    \\
    Delete an integration configuration](https://vercel.com/docs/rest-api/reference/endpoints/integrations/delete-an-integration-configuration)
  - [GET\\
    \\
    List products for integration configuration](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration)
  - [POST\\
    \\
    Create integration store (free and paid plans)](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans)
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


createIntegrationStoreDirect

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.integrations.createIntegrationStoreDirect({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "my-dev-database",
      integrationConfigurationId: "icfg_cuwj0AdCdH3BwWT4LPijCC7t",
      integrationProductIdOrSlug: "iap_postgres_db",
      metadata: {
        "environment": "development",
        "project": "my-app",
        "tags": [\
          "database",\
          "postgres",\
        ],
      },
      externalId: "dev-db-001",
      protocolSettings: {
        "experimentation": {
          "edgeConfigSyncingEnabled": true,
        },
      },
      source: "api",
      billingPlanId: "bp_abc123def456",
      paymentMethodId: "pm_1AbcDefGhiJklMno",
      prepaymentAmountCents: 5000,
    },
  });

  console.log(result);
}

run();
```

200

400

401

402

403

404

409

429

500

Copy

Ask AI

```
{
  "store": {
    "projectsMetadata": [\
      {\
        "id": "<string>",\
        "projectId": "<string>",\
        "name": "<string>",\
        "framework": "blitzjs",\
        "latestDeployment": "<string>",\
        "environments": [\
          "production"\
        ],\
        "envVarPrefix": "<string>",\
        "environmentVariables": [\
          "<string>"\
        ],\
        "deployments": {\
          "required": true,\
          "actions": [\
            {\
              "slug": "<string>",\
              "environments": [\
                "production"\
              ]\
            }\
          ]\
        }\
      }\
    ],
    "projectFilter": {
      "git": {
        "providers": [\
          "github"\
        ],
        "owners": [\
          "<string>"\
        ],
        "repos": [\
          "<string>"\
        ]
      }
    },
    "totalConnectedProjects": 123,
    "usageQuotaExceeded": true,
    "status": "available",
    "ownership": "owned",
    "capabilities": {
      "mcp": true,
      "mcpReadonly": true,
      "sso": true,
      "billable": true,
      "transferable": true,
      "secretsSync": true,
      "projects": true
    },
    "metadata": {},
    "externalResourceId": "<string>",
    "externalResourceStatus": "error",
    "product": {
      "id": "<string>",
      "name": "<string>",
      "slug": "<string>",
      "iconUrl": "<string>",
      "capabilities": {
        "mcp": true,
        "mcpReadonly": true,
        "sso": true,
        "billable": true,
        "transferable": true,
        "secretsSync": true,
        "sandbox": true,
        "linking": true,
        "projects": true
      },
      "shortDescription": "<string>",
      "metadataSchema": {
        "type": "object",
        "properties": {},
        "required": [\
          "<string>"\
        ]
      },
      "resourceLinks": [\
        {\
          "href": "<string>",\
          "title": "<string>"\
        }\
      ],
      "tags": [\
        "edge-config"\
      ],
      "projectConnectionScopes": [\
        "read:deployment"\
      ],
      "showSSOLinkOnProjectConnection": true,
      "disableResourceRenaming": true,
      "repl": {
        "enabled": true,
        "supportsReadOnlyMode": true,
        "welcomeMessage": "<string>"
      },
      "guides": [\
        {\
          "framework": "<string>",\
          "title": "<string>",\
          "steps": [\
            {\
              "title": "<string>",\
              "content": "<string>",\
              "actions": [\
                {\
                  "type": "connect_to_project"\
                }\
              ]\
            }\
          ]\
        }\
      ],
      "value": {
        "__@BRAND@8878": {}
      },
      "disabled": true,
      "hidden": true
    },
    "protocolSettings": {
      "experimentation": {
        "edgeConfigSyncingEnabled": true,
        "edgeConfigId": "<string>",
        "edgeConfigTokenId": "<string>"
      }
    },
    "notification": {
      "title": "<string>",
      "level": "error",
      "message": "<string>",
      "href": "<string>"
    },
    "secrets": [\
      {\
        "name": "<string>",\
        "length": 123\
      }\
    ],
    "billingPlan": {
      "type": "prepayment",
      "description": "<string>",
      "id": "<string>",
      "name": "<string>",
      "scope": "installation",
      "paymentMethodRequired": true,
      "preauthorizationAmount": 123,
      "initialCharge": "<string>",
      "minimumAmount": "<string>",
      "maximumAmount": "<string>",
      "maximumAmountAutoPurchasePerPeriod": "<string>",
      "cost": "<string>",
      "details": [\
        {\
          "label": "<string>",\
          "value": "<string>"\
        }\
      ],
      "highlightedDetails": [\
        {\
          "label": "<string>",\
          "value": "<string>"\
        }\
      ],
      "quote": [\
        {\
          "line": "<string>",\
          "amount": "<string>"\
        }\
      ],
      "effectiveDate": "<string>",
      "disabled": true
    }
  }
}
```

integrations

# Create integration store (free and paid plans)

Copy page

Creates an integration store for both FREE and PAID billing plans. This simplified endpoint automatically provisions real integration storage resources while handling billing complexity behind the scenes. It supports both free and paid billing plans with automatic authorization creation for paid resources. ## How it works 1. Validates the integration configuration and product 2. For free resources: Auto-discovers available free billing plans 3. For paid resources: Creates billing authorization inline using provided billingPlanId 4. Provisions real resources through the Vercel Marketplace 5. Returns the created store with connection details ## Workflow Before using this endpoint, discover available products and billing plans: 1. List your configurations: `GET /v1/integrations/configurations` 2\. Get products for a configuration: `GET /v1/integrations/configuration/{id}/products` 3\. Get billing plans for a product: `GET /integrations/integration/{integrationId}/products/{productId}/plans` 4\. Review the `metadataSchema` for each product to understand required metadata 5. Create storage with discovered product: `POST /v1/storage/stores/integration/direct` ## Usage Patterns - **Free resources**: Omit `billingPlanId` \- endpoint will auto-discover free plans - **Paid resources**: Provide `billingPlanId` from billing plans discovery - **Prepayment plans**: Also provide `prepaymentAmountCents` for variable amount plans ## Limitations - **Admin access required**: Only integration configuration admins can create stores - **Storage limits apply**: Subject to your team’s storage quotas - **Payment method required**: For paid plans, ensure valid payment method is configured ## Error Responses - `400 Bad Request`: Invalid input, no plans available, or billing issues - `403 Forbidden`: Insufficient permissions (non-admin users) - `404 Not Found`: Integration configuration or product not found - `429 Too Many Requests`: Rate limit exceeded

Copy page

POST

/

v1

/

storage

/

stores

/

integration

/

direct

createIntegrationStoreDirect

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.integrations.createIntegrationStoreDirect({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "my-dev-database",
      integrationConfigurationId: "icfg_cuwj0AdCdH3BwWT4LPijCC7t",
      integrationProductIdOrSlug: "iap_postgres_db",
      metadata: {
        "environment": "development",
        "project": "my-app",
        "tags": [\
          "database",\
          "postgres",\
        ],
      },
      externalId: "dev-db-001",
      protocolSettings: {
        "experimentation": {
          "edgeConfigSyncingEnabled": true,
        },
      },
      source: "api",
      billingPlanId: "bp_abc123def456",
      paymentMethodId: "pm_1AbcDefGhiJklMno",
      prepaymentAmountCents: 5000,
    },
  });

  console.log(result);
}

run();
```

200

400

401

402

403

404

409

429

500

Copy

Ask AI

```
{
  "store": {
    "projectsMetadata": [\
      {\
        "id": "<string>",\
        "projectId": "<string>",\
        "name": "<string>",\
        "framework": "blitzjs",\
        "latestDeployment": "<string>",\
        "environments": [\
          "production"\
        ],\
        "envVarPrefix": "<string>",\
        "environmentVariables": [\
          "<string>"\
        ],\
        "deployments": {\
          "required": true,\
          "actions": [\
            {\
              "slug": "<string>",\
              "environments": [\
                "production"\
              ]\
            }\
          ]\
        }\
      }\
    ],
    "projectFilter": {
      "git": {
        "providers": [\
          "github"\
        ],
        "owners": [\
          "<string>"\
        ],
        "repos": [\
          "<string>"\
        ]
      }
    },
    "totalConnectedProjects": 123,
    "usageQuotaExceeded": true,
    "status": "available",
    "ownership": "owned",
    "capabilities": {
      "mcp": true,
      "mcpReadonly": true,
      "sso": true,
      "billable": true,
      "transferable": true,
      "secretsSync": true,
      "projects": true
    },
    "metadata": {},
    "externalResourceId": "<string>",
    "externalResourceStatus": "error",
    "product": {
      "id": "<string>",
      "name": "<string>",
      "slug": "<string>",
      "iconUrl": "<string>",
      "capabilities": {
        "mcp": true,
        "mcpReadonly": true,
        "sso": true,
        "billable": true,
        "transferable": true,
        "secretsSync": true,
        "sandbox": true,
        "linking": true,
        "projects": true
      },
      "shortDescription": "<string>",
      "metadataSchema": {
        "type": "object",
        "properties": {},
        "required": [\
          "<string>"\
        ]
      },
      "resourceLinks": [\
        {\
          "href": "<string>",\
          "title": "<string>"\
        }\
      ],
      "tags": [\
        "edge-config"\
      ],
      "projectConnectionScopes": [\
        "read:deployment"\
      ],
      "showSSOLinkOnProjectConnection": true,
      "disableResourceRenaming": true,
      "repl": {
        "enabled": true,
        "supportsReadOnlyMode": true,
        "welcomeMessage": "<string>"
      },
      "guides": [\
        {\
          "framework": "<string>",\
          "title": "<string>",\
          "steps": [\
            {\
              "title": "<string>",\
              "content": "<string>",\
              "actions": [\
                {\
                  "type": "connect_to_project"\
                }\
              ]\
            }\
          ]\
        }\
      ],
      "value": {
        "__@BRAND@8878": {}
      },
      "disabled": true,
      "hidden": true
    },
    "protocolSettings": {
      "experimentation": {
        "edgeConfigSyncingEnabled": true,
        "edgeConfigId": "<string>",
        "edgeConfigTokenId": "<string>"
      }
    },
    "notification": {
      "title": "<string>",
      "level": "error",
      "message": "<string>",
      "href": "<string>"
    },
    "secrets": [\
      {\
        "name": "<string>",\
        "length": 123\
      }\
    ],
    "billingPlan": {
      "type": "prepayment",
      "description": "<string>",
      "id": "<string>",
      "name": "<string>",
      "scope": "installation",
      "paymentMethodRequired": true,
      "preauthorizationAmount": 123,
      "initialCharge": "<string>",
      "minimumAmount": "<string>",
      "maximumAmount": "<string>",
      "maximumAmountAutoPurchasePerPeriod": "<string>",
      "cost": "<string>",
      "details": [\
        {\
          "label": "<string>",\
          "value": "<string>"\
        }\
      ],
      "highlightedDetails": [\
        {\
          "label": "<string>",\
          "value": "<string>"\
        }\
      ],
      "quote": [\
        {\
          "line": "<string>",\
          "amount": "<string>"\
        }\
      ],
      "effectiveDate": "<string>",
      "disabled": true
    }
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#body-name)

name

string

required

Human-readable name for the storage resource

Maximum length: `128`

Example:

`"my-dev-database"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#body-integration-configuration-id)

integrationConfigurationId

string

required

ID of your integration configuration. Get this from GET /v1/integrations/configurations

Example:

`"icfg_cuwj0AdCdH3BwWT4LPijCC7t"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#body-integration-product-id-or-slug)

integrationProductIdOrSlug

Option 1 · stringOption 2 · string

required

ID or slug of the integration product. Get available products from GET /v1/integrations/configuration/{id}/products
Product ID format

Example:

`"iap_postgres_db"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#body-metadata)

metadata

object

Optional key-value pairs for resource metadata

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#body-metadata-key)

metadata.{key}

stringnumberbooleanstring\[\]number\[\]

Example:

```
{
  "environment": "development",
  "project": "my-app",
  "tags": ["database", "postgres"]
}
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#body-external-id)

externalId

string

Optional external identifier for tracking purposes

Example:

`"dev-db-001"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#body-protocol-settings)

protocolSettings

object

Protocol-specific configuration settings

Example:

```
{
  "experimentation": { "edgeConfigSyncingEnabled": true }
}
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#body-source)

source

string

default:marketplace

Source of the store creation request

Example:

`"api"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#body-billing-plan-id)

billingPlanId

string

ID of the billing plan for paid resources. Get available plans from GET /integrations/integration/{id}/products/{productId}/plans. If not provided, automatically discovers free billing plans.

Example:

`"bp_abc123def456"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#body-payment-method-id)

paymentMethodId

string

Payment method ID for paid resources. Optional - uses default payment method if not provided.

Example:

`"pm_1AbcDefGhiJklMno"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#body-prepayment-amount-cents)

prepaymentAmountCents

number

Amount in cents for prepayment billing plans. Required only for prepayment plans with variable amounts.

Required range: `x >= 50`

Example:

`5000`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store)

store

object \| null

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store-projects-metadata)

store.projectsMetadata

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store-usage-quota-exceeded)

store.usageQuotaExceeded

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store-status)

store.status

enum<string> \| null

required

Available options:

`available`,

`error`,

`suspended`,

`limits-exceeded-suspended`,

`limits-exceeded-suspended-store-count`,

`initializing`,

`onboarding`,

`uninstalled`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store-external-resource-id)

store.externalResourceId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store-product)

store.product

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store-secrets)

store.secrets

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store-project-filter)

store.projectFilter

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store-total-connected-projects)

store.totalConnectedProjects

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store-ownership)

store.ownership

enum<string>

Available options:

`owned`,

`linked`,

`sandbox`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store-capabilities)

store.capabilities

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store-metadata)

store.metadata

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store-external-resource-status)

store.externalResourceStatus

enum<string> \| null

Available options:

`error`,

`suspended`,

`onboarding`,

`uninstalled`,

`ready`,

`pending`,

`resumed`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store-protocol-settings)

store.protocolSettings

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store-notification)

store.notification

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans#response-store-billing-plan)

store.billingPlan

object

Show child attributes

[List products for integration configuration](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration) [Update Installation](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.