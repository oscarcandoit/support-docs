---
url: "https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration"
title: "List products for integration configuration - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

integrations

List products for integration configuration

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


getConfigurationProducts

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.integrations.getConfigurationProducts({
    id: "icfg_cuwj0AdCdH3BwWT4LPijCC7t",
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

500

Copy

Ask AI

```
{
  "products": [\
    {\
      "id": "<string>",\
      "slug": "<string>",\
      "name": "<string>",\
      "protocols": {\
        "storage": {\
          "status": "disabled",\
          "repl": {\
            "enabled": true,\
            "supportsReadOnlyMode": true,\
            "welcomeMessage": "<string>"\
          }\
        },\
        "experimentation": {\
          "status": "disabled",\
          "edgeConfigSyncingSupport": true\
        },\
        "ai": {\
          "status": "disabled"\
        },\
        "authentication": {\
          "status": "disabled"\
        },\
        "observability": {\
          "status": "disabled"\
        },\
        "video": {\
          "status": "disabled"\
        },\
        "workflow": {\
          "status": "disabled"\
        },\
        "checks": {\
          "status": "disabled"\
        },\
        "logDrain": {\
          "status": "disabled",\
          "endpoint": "<string>",\
          "headers": {},\
          "format": "json"\
        },\
        "traceDrain": {\
          "status": "disabled",\
          "endpoint": "<string>",\
          "headers": {},\
          "format": "json"\
        },\
        "messaging": {\
          "status": "disabled"\
        },\
        "other": {\
          "status": "disabled"\
        }\
      },\
      "primaryProtocol": "storage",\
      "metadataSchema": {\
        "type": "object",\
        "properties": {},\
        "required": [\
          "<string>"\
        ]\
      }\
    }\
  ],
  "integration": {
    "id": "<string>",
    "slug": "<string>",
    "name": "<string>"
  },
  "configuration": {
    "id": "<string>"
  }
}
```

integrations

# List products for integration configuration

Copy page

Lists all products available for an integration configuration. Use this endpoint to discover what integration products are available for your integration configuration. The returned product IDs or slugs can then be used with storage provisioning endpoints like `POST /v1/storage/stores/integration/direct`. ## Workflow 1. Get your integration configurations: `GET /v1/integrations/configurations` 2\. **Use this endpoint**: Get products for a configuration: `GET /v1/integrations/configuration/{id}/products` 3\. Create storage resource: `POST /v1/storage/stores/integration/direct` ## Response Returns an array of products with their IDs, slugs, names, supported protocols, and metadata requirements. Each product represents a different type of resource you can provision. The `metadataSchema` field contains a JSON Schema that defines: - **Required metadata**: Fields that must be provided during storage creation - **Optional metadata**: Fields that can be provided but are not mandatory - **Field validation**: Data types, allowed values, and constraints Use this schema to validate metadata before calling the storage creation endpoint.

Copy page

GET

/

v1

/

integrations

/

configuration

/

{id}

/

products

getConfigurationProducts

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.integrations.getConfigurationProducts({
    id: "icfg_cuwj0AdCdH3BwWT4LPijCC7t",
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

500

Copy

Ask AI

```
{
  "products": [\
    {\
      "id": "<string>",\
      "slug": "<string>",\
      "name": "<string>",\
      "protocols": {\
        "storage": {\
          "status": "disabled",\
          "repl": {\
            "enabled": true,\
            "supportsReadOnlyMode": true,\
            "welcomeMessage": "<string>"\
          }\
        },\
        "experimentation": {\
          "status": "disabled",\
          "edgeConfigSyncingSupport": true\
        },\
        "ai": {\
          "status": "disabled"\
        },\
        "authentication": {\
          "status": "disabled"\
        },\
        "observability": {\
          "status": "disabled"\
        },\
        "video": {\
          "status": "disabled"\
        },\
        "workflow": {\
          "status": "disabled"\
        },\
        "checks": {\
          "status": "disabled"\
        },\
        "logDrain": {\
          "status": "disabled",\
          "endpoint": "<string>",\
          "headers": {},\
          "format": "json"\
        },\
        "traceDrain": {\
          "status": "disabled",\
          "endpoint": "<string>",\
          "headers": {},\
          "format": "json"\
        },\
        "messaging": {\
          "status": "disabled"\
        },\
        "other": {\
          "status": "disabled"\
        }\
      },\
      "primaryProtocol": "storage",\
      "metadataSchema": {\
        "type": "object",\
        "properties": {},\
        "required": [\
          "<string>"\
        ]\
      }\
    }\
  ],
  "integration": {
    "id": "<string>",
    "slug": "<string>",
    "name": "<string>"
  },
  "configuration": {
    "id": "<string>"
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#parameter-id)

id

string

required

ID of the integration configuration

Example:

`"icfg_cuwj0AdCdH3BwWT4LPijCC7t"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

List of products available for this integration configuration

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#response-products)

products

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#response-products-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#response-products-slug)

slug

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#response-products-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#response-products-protocols)

protocols

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#response-products-metadata-schema)

metadataSchema

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#response-products-primary-protocol)

primaryProtocol

enum<string>

Available options:

`storage`,

`experimentation`,

`ai`,

`observability`,

`video`,

`authentication`,

`workflow`,

`checks`,

`logDrain`,

`traceDrain`,

`messaging`,

`other`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#response-integration)

integration

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#response-integration-id)

integration.id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#response-integration-slug)

integration.slug

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#response-integration-name)

integration.name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#response-configuration)

configuration

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration#response-configuration-id)

configuration.id

string

required

[Delete an integration configuration](https://vercel.com/docs/rest-api/reference/endpoints/integrations/delete-an-integration-configuration) [Create integration store (free and paid plans)](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.