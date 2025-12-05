---
url: "https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated"
title: "Purchase a domain (deprecated) - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

domains

Purchase a domain (deprecated)

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


buyDomain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domains.buyDomain({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "example.com",
      expectedPrice: 10,
      renew: true,
      country: "US",
      orgName: "Acme Inc.",
      firstName: "Jane",
      lastName: "Doe",
      address1: "340 S Lemon Ave Suite 4133",
      city: "San Francisco",
      state: "CA",
      postalCode: "91789",
      phone: "+1.4158551452",
      email: "jane.doe@someplace.com",
    },
  });

  console.log(result);
}

run();
```

201

202

400

401

403

409

429

500

Copy

Ask AI

```
{
  "domain": {
    "uid": "<string>",
    "ns": [\
      "<string>"\
    ],
    "verified": true,
    "created": 123,
    "pending": true
  }
}
```

domains

# Purchase a domain (deprecated)

Copy page

This endpoint is deprecated and replaced with the endpoint [Buy a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-a-domain). Purchases the specified domain.

Copy page

POST

/

v5

/

domains

/

buy

buyDomain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domains.buyDomain({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "example.com",
      expectedPrice: 10,
      renew: true,
      country: "US",
      orgName: "Acme Inc.",
      firstName: "Jane",
      lastName: "Doe",
      address1: "340 S Lemon Ave Suite 4133",
      city: "San Francisco",
      state: "CA",
      postalCode: "91789",
      phone: "+1.4158551452",
      email: "jane.doe@someplace.com",
    },
  });

  console.log(result);
}

run();
```

201

202

400

401

403

409

429

500

Copy

Ask AI

```
{
  "domain": {
    "uid": "<string>",
    "ns": [\
      "<string>"\
    ],
    "verified": true,
    "created": 123,
    "pending": true
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#body-name)

name

string

required

The domain name to purchase.

Example:

`"example.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#body-country)

country

string

required

The country of the domain registrant

Example:

`"US"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#body-first-name)

firstName

string

required

The first name of the domain registrant

Example:

`"Jane"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#body-last-name)

lastName

string

required

The last name of the domain registrant

Example:

`"Doe"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#body-address1)

address1

string

required

The street address of the domain registrant

Example:

`"340 S Lemon Ave Suite 4133"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#body-city)

city

string

required

The city of the domain registrant

Example:

`"San Francisco"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#body-state)

state

string

required

The state of the domain registrant

Example:

`"CA"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#body-postal-code)

postalCode

string

required

The postal code of the domain registrant

Example:

`"91789"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#body-phone)

phone

string

required

The phone number of the domain registrant

Example:

`"+1.4158551452"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#body-email)

email

string

required

The email of the domain registrant

Example:

`"jane.doe@someplace.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#body-expected-price)

expectedPrice

number

The price you expect to be charged for the purchase.

Example:

`10`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#body-renew)

renew

boolean

Indicates whether the domain should be automatically renewed.

Example:

`true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#body-org-name)

orgName

string

The company name of the domain registrant

Example:

`"Acme Inc."`

#### Response

201

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#response-domain)

domain

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#response-domain-uid)

domain.uid

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#response-domain-ns)

domain.ns

string\[\]

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#response-domain-verified)

domain.verified

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#response-domain-created)

domain.created

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated#response-domain-pending)

domain.pending

boolean

required

[Delete a Deployment](https://vercel.com/docs/rest-api/reference/endpoints/deployments/delete-a-deployment) [Check the price for a domain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/domains/check-the-price-for-a-domain-deprecated)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.