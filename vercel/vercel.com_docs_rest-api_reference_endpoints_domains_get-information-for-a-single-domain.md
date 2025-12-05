---
url: "https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain"
title: "Get Information for a Single Domain - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

domains

Get Information for a Single Domain

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


getDomain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domains.getDomain({
    domain: "example.com",
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

Copy

Ask AI

```
{
  "domain": {
    "suffix": true,
    "verified": true,
    "nameservers": [\
      "ns1.nameserver.net",\
      "ns2.nameserver.net"\
    ],
    "intendedNameservers": [\
      "ns1.vercel-dns.com",\
      "ns2.vercel-dns.com"\
    ],
    "customNameservers": [\
      "ns1.nameserver.net",\
      "ns2.nameserver.net"\
    ],
    "creator": {
      "id": "ZspSRT4ljIEEmMHgoDwKWDei",
      "username": "vercel_user",
      "email": "demo@example.com"
    },
    "registrar": "new",
    "teamId": "<string>",
    "boughtAt": 1613602938882,
    "name": "example.com",
    "createdAt": 1613602938882,
    "expiresAt": 1613602938882,
    "id": "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
    "orderedAt": 1613602938882,
    "renew": true,
    "serviceType": "zeit.world",
    "transferredAt": 1613602938882,
    "transferStartedAt": 1613602938882,
    "userId": "<string>"
  }
}
```

domains

# Get Information for a Single Domain

Copy page

Get information for a single domain in an account or team.

Copy page

GET

/

v5

/

domains

/

{domain}

getDomain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domains.getDomain({
    domain: "example.com",
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

Copy

Ask AI

```
{
  "domain": {
    "suffix": true,
    "verified": true,
    "nameservers": [\
      "ns1.nameserver.net",\
      "ns2.nameserver.net"\
    ],
    "intendedNameservers": [\
      "ns1.vercel-dns.com",\
      "ns2.vercel-dns.com"\
    ],
    "customNameservers": [\
      "ns1.nameserver.net",\
      "ns2.nameserver.net"\
    ],
    "creator": {
      "id": "ZspSRT4ljIEEmMHgoDwKWDei",
      "username": "vercel_user",
      "email": "demo@example.com"
    },
    "registrar": "new",
    "teamId": "<string>",
    "boughtAt": 1613602938882,
    "name": "example.com",
    "createdAt": 1613602938882,
    "expiresAt": 1613602938882,
    "id": "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
    "orderedAt": 1613602938882,
    "renew": true,
    "serviceType": "zeit.world",
    "transferredAt": 1613602938882,
    "transferStartedAt": 1613602938882,
    "userId": "<string>"
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#parameter-domain)

domain

string

required

The name of the domain.

Example:

`"example.com"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

Successful response retrieving an information for a specific domains.

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain)

domain

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-suffix)

domain.suffix

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-verified)

domain.verified

boolean

required

If the domain has the ownership verified.

Example:

`true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-nameservers)

domain.nameservers

string\[\]

required

A list of the current nameservers of the domain.

Example:

```
["ns1.nameserver.net", "ns2.nameserver.net"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-intended-nameservers)

domain.intendedNameservers

string\[\]

required

A list of the intended nameservers for the domain to point to Vercel DNS.

Example:

```
["ns1.vercel-dns.com", "ns2.vercel-dns.com"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-creator)

domain.creator

object

required

An object containing information of the domain creator, including the user's id, username, and email.

Show child attributes

Example:

```
{
  "id": "ZspSRT4ljIEEmMHgoDwKWDei",
  "username": "vercel_user",
  "email": "demo@example.com"
}
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-team-id)

domain.teamId

string \| null

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-bought-at)

domain.boughtAt

number \| null

required

If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-name)

domain.name

string

required

The domain name.

Example:

`"example.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-created-at)

domain.createdAt

number

required

Timestamp in milliseconds when the domain was created in the registry.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-expires-at)

domain.expiresAt

number \| null

required

Timestamp in milliseconds at which the domain is set to expire. `null` if not bought with Vercel.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-id)

domain.id

string

required

The unique identifier of the domain.

Example:

`"EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-service-type)

domain.serviceType

enum<string>

required

The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.

Available options:

`zeit.world`,

`external`,

`na`

Example:

`"zeit.world"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-user-id)

domain.userId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-custom-nameservers)

domain.customNameservers

string\[\]

A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.

Example:

```
["ns1.nameserver.net", "ns2.nameserver.net"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-registrar)

domain.registrar

enum<string>

Whether or not the domain is registered with Name.com. If set to `true`, the domain is registered with Name.com.

Available options:

`new`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-ordered-at)

domain.orderedAt

number

Timestamp in milliseconds at which the domain was ordered.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-renew)

domain.renew

boolean

Indicates whether the domain is set to automatically renew.

Example:

`true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-transferred-at)

domain.transferredAt

number \| null

Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain#response-domain-transfer-started-at)

domain.transferStartedAt

number

If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated.

Example:

`1613602938882`

[Get a Domain's configuration](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration) [List all the domains](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.