---
url: "https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains"
title: "Buy multiple domains - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

domains-registrar

Buy multiple domains

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


buyDomains

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.buyDomains({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    requestBody: {
      domains: [],
      contactInformation: {
        firstName: "Leonie",
        lastName: "Johnston",
        email: "Anna_Fisher13@hotmail.com",
        phone: "(688) 699-0656",
        address1: "<value>",
        city: "Rennerland",
        state: "New Jersey",
        zip: "70054",
        country: "Peru",
      },
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

# Buy multiple domains

Copy page

Buy multiple domains at once

Copy page

POST

/

v1

/

registrar

/

domains

/

buy

buyDomains

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.buyDomains({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    requestBody: {
      domains: [],
      contactInformation: {
        firstName: "Leonie",
        lastName: "Johnston",
        email: "Anna_Fisher13@hotmail.com",
        phone: "(688) 699-0656",
        address1: "<value>",
        city: "Rennerland",
        state: "New Jersey",
        zip: "70054",
        country: "Peru",
      },
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

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#parameter-team-id)

teamId

string

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-domains)

domains

object\[\]

required

Minimum length: `1`

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-domains-domain-name)

domainName

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-domains-auto-renew)

autoRenew

boolean

required

Whether the domain should be auto-renewed before it expires. This can be configured later through the Vercel Dashboard or the [Update auto-renew for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-auto-renew-for-a-domain) endpoint.

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-domains-years)

years

number

required

The number of years to purchase the domain for.

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-domains-expected-price)

expectedPrice

number

required

The expected price for the domain. Use the [Get price data for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain) endpoint to retrieve the price data for a domain.

Required range: `x >= 0.01`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-contact-information)

contactInformation

object

required

The contact information for the domain. Some TLDs require additional contact information. Use the [Get contact info schema](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-contact-info-schema) endpoint to retrieve the required fields.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-contact-information-first-name)

contactInformation.firstName

string

required

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-contact-information-last-name)

contactInformation.lastName

string

required

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-contact-information-email)

contactInformation.email

string

required

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-contact-information-phone)

contactInformation.phone

string

required

A valid E.164 phone number

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-contact-information-address1)

contactInformation.address1

string

required

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-contact-information-city)

contactInformation.city

string

required

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-contact-information-state)

contactInformation.state

string

required

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-contact-information-zip)

contactInformation.zip

string

required

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-contact-information-country)

contactInformation.country

string

required

A valid ISO 3166-1 alpha-2 country code

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-contact-information-address2)

contactInformation.address2

string

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-contact-information-company-name)

contactInformation.companyName

string

a non empty string

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-contact-information-fax)

contactInformation.fax

string

A valid E.164 phone number

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#body-contact-information-additional)

contactInformation.additional

object

#### Response

200

application/json

Success

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#response-order-id)

orderId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#response-links)

\_links

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains#response-links-key)

\_links.{key}

object

Show child attributes

[Buy a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-a-domain) [Get a domain's transfer status](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-a-domains-transfer-status)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.