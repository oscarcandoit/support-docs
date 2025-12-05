---
url: "https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain"
title: "Renew a domain - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

domains-registrar

Renew a domain

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


renewDomain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.renewDomain({
    domain: "scaly-daughter.biz",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    requestBody: {
      years: 1981.72,
      expectedPrice: 7096.16,
    },
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

429

500

Copy

Ask AI

```
{
  "orderId": "<string>",
  "_links": {}
}
```

domains-registrar

# Renew a domain

Copy page

Renew a domain

Copy page

POST

/

v1

/

registrar

/

domains

/

{domain}

/

renew

renewDomain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.renewDomain({
    domain: "scaly-daughter.biz",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    requestBody: {
      years: 1981.72,
      expectedPrice: 7096.16,
    },
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

429

500

Copy

Ask AI

```
{
  "orderId": "<string>",
  "_links": {}
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#parameter-domain)

domain

string

required

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#parameter-team-id)

teamId

string

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#body-years)

years

number

required

The number of years to renew the domain for.

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#body-expected-price)

expectedPrice

number

required

The expected price for the domain. Use the [Get price data for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain) endpoint to retrieve the price data for a domain.

Required range: `x >= 0.01`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#body-contact-information)

contactInformation

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#body-contact-information-first-name)

contactInformation.firstName

string

required

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#body-contact-information-last-name)

contactInformation.lastName

string

required

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#body-contact-information-email)

contactInformation.email

string

required

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#body-contact-information-phone)

contactInformation.phone

string

required

A valid E.164 phone number

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#body-contact-information-address1)

contactInformation.address1

string

required

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#body-contact-information-city)

contactInformation.city

string

required

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#body-contact-information-state)

contactInformation.state

string

required

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#body-contact-information-zip)

contactInformation.zip

string

required

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#body-contact-information-country)

contactInformation.country

string

required

A valid ISO 3166-1 alpha-2 country code

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#body-contact-information-address2)

contactInformation.address2

string

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#body-contact-information-company-name)

contactInformation.companyName

string

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#body-contact-information-fax)

contactInformation.fax

string

A valid E.164 phone number

Minimum length: `1`

#### Response

200

application/json

Success

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#response-order-id)

orderId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#response-links)

\_links

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain#response-links-key)

\_links.{key}

object

Show child attributes

[Transfer-in a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/transfer-in-a-domain) [Update auto-renew for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-auto-renew-for-a-domain)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.