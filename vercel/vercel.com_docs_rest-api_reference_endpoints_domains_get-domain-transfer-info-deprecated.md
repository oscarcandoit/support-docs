---
url: "https://vercel.com/docs/rest-api/reference/endpoints/domains/get-domain-transfer-info-deprecated"
title: "Get domain transfer info (deprecated) - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-domain-transfer-info-deprecated#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

domains

Get domain transfer info (deprecated)

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

- checks

- projects

- deployments

- domains

  - [POST\\
    \\
    Purchase a domain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated)
  - [GET\\
    \\
    Check the price for a domain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/domains/check-the-price-for-a-domain-deprecated)
  - [GET\\
    \\
    Check a Domain Availability (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/domains/check-a-domain-availability-deprecated)
  - [GET\\
    \\
    Get domain transfer info (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-domain-transfer-info-deprecated)
  - [GET\\
    \\
    Get a Domain's configuration](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration)
  - [GET\\
    \\
    Get Information for a Single Domain](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain)
  - [GET\\
    \\
    List all the domains](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains)
  - [POST\\
    \\
    Add an existing domain to the Vercel platform](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform)
  - [PATCH\\
    \\
    Update or move apex domain](https://vercel.com/docs/rest-api/reference/endpoints/domains/update-or-move-apex-domain)
  - [DEL\\
    \\
    Remove a domain by name](https://vercel.com/docs/rest-api/reference/endpoints/domains/remove-a-domain-by-name)
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


getDomainTransfer

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domains.getDomainTransfer({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    domain: "example.com",
  });

  console.log(result);
}

run();
```

200

400

401

403

500

Copy

Ask AI

```
{
  "reason": "<string>",
  "status": "<string>",
  "transferable": true,
  "transferPolicy": "charge-and-renew"
}
```

domains

# Get domain transfer info (deprecated)

Copy page

This endpoint is deprecated and replaced with the endpoint [Get a domain’s transfer status](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-a-domains-transfer-status). Fetch domain transfer availability or transfer status if a transfer is in progress.

Copy page

GET

/

v1

/

domains

/

{domain}

/

registry

getDomainTransfer

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domains.getDomainTransfer({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    domain: "example.com",
  });

  console.log(result);
}

run();
```

200

400

401

403

500

Copy

Ask AI

```
{
  "reason": "<string>",
  "status": "<string>",
  "transferable": true,
  "transferPolicy": "charge-and-renew"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-domain-transfer-info-deprecated#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-domain-transfer-info-deprecated#parameter-domain)

domain

string

required

Example:

`"example.com"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-domain-transfer-info-deprecated#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-domain-transfer-info-deprecated#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

- Option 1

- Option 2


[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-domain-transfer-info-deprecated#response-reason)

reason

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-domain-transfer-info-deprecated#response-status)

status

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-domain-transfer-info-deprecated#response-transferable)

transferable

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-domain-transfer-info-deprecated#response-transfer-policy)

transferPolicy

enum<string>

required

Available options:

`charge-and-renew`

[Check a Domain Availability (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/domains/check-a-domain-availability-deprecated) [Get a Domain's configuration](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.