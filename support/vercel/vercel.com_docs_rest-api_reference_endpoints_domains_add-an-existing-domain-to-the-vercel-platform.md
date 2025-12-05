---
url: "https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform"
title: "Add an existing domain to the Vercel platform - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

domains

Add an existing domain to the Vercel platform

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


createOrTransferDomain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domains.createOrTransferDomain({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "example.com",
      method: "add",
      token: "fdhfr820ad#@FAdlj$$",
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

500

Copy

Ask AI

```
{
  "domain": {
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
    "name": "example.com",
    "boughtAt": 1613602938882,
    "createdAt": 1613602938882,
    "expiresAt": 1613602938882,
    "id": "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
    "orderedAt": 1613602938882,
    "renew": true,
    "serviceType": "zeit.world",
    "transferredAt": 1613602938882,
    "transferStartedAt": 1613602938882,
    "userId": "<string>",
    "teamId": "<string>"
  }
}
```

domains

# Add an existing domain to the Vercel platform

Copy page

This endpoint is used for adding a new apex domain name with Vercel for the authenticating user. Note: This endpoint is no longer used for initiating domain transfers from external registrars to Vercel. For this, please use the endpoint [Transfer-in a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/transfer-in-a-domain).

Copy page

POST

/

v7

/

domains

createOrTransferDomain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domains.createOrTransferDomain({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "example.com",
      method: "add",
      token: "fdhfr820ad#@FAdlj$$",
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

500

Copy

Ask AI

```
{
  "domain": {
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
    "name": "example.com",
    "boughtAt": 1613602938882,
    "createdAt": 1613602938882,
    "expiresAt": 1613602938882,
    "id": "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
    "orderedAt": 1613602938882,
    "renew": true,
    "serviceType": "zeit.world",
    "transferredAt": 1613602938882,
    "transferStartedAt": 1613602938882,
    "userId": "<string>",
    "teamId": "<string>"
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

- Option 1

- Option 2

- Option 3


add

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#body-name)

name

string

required

The domain name you want to add.

Example:

`"example.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#body-method)

method

string

The domain operation to perform. It can be either `add` or `move-in`.

Example:

`"add"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#body-cdn-enabled)

cdnEnabled

boolean

Whether the domain has the Vercel Edge Network enabled or not.

Example:

`true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#body-zone)

zone

boolean

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain)

domain

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-verified)

domain.verified

boolean

required

If the domain has the ownership verified.

Example:

`true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-nameservers)

domain.nameservers

string\[\]

required

A list of the current nameservers of the domain.

Example:

```
["ns1.nameserver.net", "ns2.nameserver.net"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-intended-nameservers)

domain.intendedNameservers

string\[\]

required

A list of the intended nameservers for the domain to point to Vercel DNS.

Example:

```
["ns1.vercel-dns.com", "ns2.vercel-dns.com"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-creator)

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-name)

domain.name

string

required

The domain name.

Example:

`"example.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-bought-at)

domain.boughtAt

number \| null

required

If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-created-at)

domain.createdAt

number

required

Timestamp in milliseconds when the domain was created in the registry.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-expires-at)

domain.expiresAt

number \| null

required

Timestamp in milliseconds at which the domain is set to expire. `null` if not bought with Vercel.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-id)

domain.id

string

required

The unique identifier of the domain.

Example:

`"EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-service-type)

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-user-id)

domain.userId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-team-id)

domain.teamId

string \| null

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-custom-nameservers)

domain.customNameservers

string\[\]

A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.

Example:

```
["ns1.nameserver.net", "ns2.nameserver.net"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-registrar)

domain.registrar

enum<string>

Whether or not the domain is registered with Name.com. If set to `true`, the domain is registered with Name.com.

Available options:

`new`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-ordered-at)

domain.orderedAt

number

Timestamp in milliseconds at which the domain was ordered.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-renew)

domain.renew

boolean

Indicates whether the domain is set to automatically renew.

Example:

`true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-transferred-at)

domain.transferredAt

number \| null

Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform#response-domain-transfer-started-at)

domain.transferStartedAt

number

If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated.

Example:

`1613602938882`

[List all the domains](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains) [Update or move apex domain](https://vercel.com/docs/rest-api/reference/endpoints/domains/update-or-move-apex-domain)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.