---
url: "https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain"
title: "Get price data for a domain - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

domains-registrar

Get price data for a domain

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


getDomainPrice

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.getDomainPrice({
    domain: "excited-dwell.org",
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
{
  "years": 123,
  "purchasePrice": 1.01,
  "renewalPrice": 1.01,
  "transferPrice": 1.01
}
```

domains-registrar

# Get price data for a domain

Copy page

Get price data for a specific domain

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

price

getDomainPrice

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.getDomainPrice({
    domain: "excited-dwell.org",
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
{
  "years": 123,
  "purchasePrice": 1.01,
  "renewalPrice": 1.01,
  "transferPrice": 1.01
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain#parameter-domain)

domain

string

required

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain#parameter-years)

years

string

a string to be decoded into a number

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain#parameter-team-id)

teamId

string

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

#### Response

200

application/json

Success

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain#response-years)

years

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain#response-purchase-price)

purchasePrice

number \| null

required

The price for purchasing this domain for the given number of years. If null, the domain is not available for purchase for the given number of years.

Required range: `x >= 0.01`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain#response-renewal-price)

renewalPrice

number \| null

required

The price for renewing this domain for the given number of years. If null, the domain cannot be renewed for the given number of years.

Required range: `x >= 0.01`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain#response-transfer-price)

transferPrice

number \| null

required

The price for transferring this domain in for the given number of years. If null, the domain cannot be transferred in for the given number of years.

Required range: `x >= 0.01`

[Get availability for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-availability-for-a-domain) [Get availability for multiple domains](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-availability-for-multiple-domains)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.