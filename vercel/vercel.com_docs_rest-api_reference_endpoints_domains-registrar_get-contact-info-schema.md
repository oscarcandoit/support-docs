---
url: "https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-contact-info-schema"
title: "Get contact info schema - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-contact-info-schema#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

domains-registrar

Get contact info schema

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

  - [GET\\
    \\
    Get supported TLDs](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-supported-tlds)
  - [GET\\
    \\
    Get TLD price data](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-tld-price-data)
  - [GET\\
    \\
    Get availability for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-availability-for-a-domain)
  - [GET\\
    \\
    Get price data for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain)
  - [POST\\
    \\
    Get availability for multiple domains](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-availability-for-multiple-domains)
  - [GET\\
    \\
    Get the auth code for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-the-auth-code-for-a-domain)
  - [POST\\
    \\
    Buy a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-a-domain)
  - [POST\\
    \\
    Buy multiple domains](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains)
  - [GET\\
    \\
    Get a domain's transfer status](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-a-domains-transfer-status)
  - [POST\\
    \\
    Transfer-in a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/transfer-in-a-domain)
  - [POST\\
    \\
    Renew a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain)
  - [PATCH\\
    \\
    Update auto-renew for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-auto-renew-for-a-domain)
  - [PATCH\\
    \\
    Update nameservers for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-nameservers-for-a-domain)
  - [GET\\
    \\
    Get contact info schema](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-contact-info-schema)
  - [GET\\
    \\
    Get a domain order](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-a-domain-order)
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


getContactInfoSchema

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.getContactInfoSchema({
    domain: "tricky-issue.name",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  });

  console.log(result);
}

run();
```

200

400

401

403

429

500

Copy

Ask AI

```
{}
```

domains-registrar

# Get contact info schema

Copy page

Some TLDs require additional contact information. Use this endpoint to get the schema for the tld-specific contact information for a domain.

Copy page

GET

/

v1

/

registrar

/

domains

/

{domain}

/

contact-info

/

schema

getContactInfoSchema

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.getContactInfoSchema({
    domain: "tricky-issue.name",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  });

  console.log(result);
}

run();
```

200

400

401

403

429

500

Copy

Ask AI

```
{}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-contact-info-schema#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-contact-info-schema#parameter-domain)

domain

string

required

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-contact-info-schema#parameter-team-id)

teamId

string

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

#### Response

200

application/json

Success

The response is of type `object`.

[Update nameservers for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-nameservers-for-a-domain) [Get a domain order](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-a-domain-order)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.