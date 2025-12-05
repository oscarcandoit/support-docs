---
url: "https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains"
title: "List all the domains - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

domains

List all the domains

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


getDomains

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domains.getDomains({
    limit: 20,
    since: 1609499532000,
    until: 1612264332000,
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

409

Copy

Ask AI

```
{
  "domains": [\
    {\
      "verified": true,\
      "nameservers": [\
        "ns1.nameserver.net",\
        "ns2.nameserver.net"\
      ],\
      "intendedNameservers": [\
        "ns1.vercel-dns.com",\
        "ns2.vercel-dns.com"\
      ],\
      "customNameservers": [\
        "ns1.nameserver.net",\
        "ns2.nameserver.net"\
      ],\
      "creator": {\
        "id": "ZspSRT4ljIEEmMHgoDwKWDei",\
        "username": "vercel_user",\
        "email": "demo@example.com"\
      },\
      "registrar": "new",\
      "teamId": "<string>",\
      "createdAt": 1613602938882,\
      "boughtAt": 1613602938882,\
      "expiresAt": 1613602938882,\
      "id": "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",\
      "name": "example.com",\
      "orderedAt": 1613602938882,\
      "renew": true,\
      "serviceType": "zeit.world",\
      "transferredAt": 1613602938882,\
      "transferStartedAt": 1613602938882,\
      "userId": "<string>"\
    }\
  ],
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  }
}
```

domains

# List all the domains

Copy page

Retrieves a list of domains registered for the authenticated user or team. By default it returns the last 20 domains if no limit is provided.

Copy page

GET

/

v5

/

domains

getDomains

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domains.getDomains({
    limit: 20,
    since: 1609499532000,
    until: 1612264332000,
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

409

Copy

Ask AI

```
{
  "domains": [\
    {\
      "verified": true,\
      "nameservers": [\
        "ns1.nameserver.net",\
        "ns2.nameserver.net"\
      ],\
      "intendedNameservers": [\
        "ns1.vercel-dns.com",\
        "ns2.vercel-dns.com"\
      ],\
      "customNameservers": [\
        "ns1.nameserver.net",\
        "ns2.nameserver.net"\
      ],\
      "creator": {\
        "id": "ZspSRT4ljIEEmMHgoDwKWDei",\
        "username": "vercel_user",\
        "email": "demo@example.com"\
      },\
      "registrar": "new",\
      "teamId": "<string>",\
      "createdAt": 1613602938882,\
      "boughtAt": 1613602938882,\
      "expiresAt": 1613602938882,\
      "id": "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",\
      "name": "example.com",\
      "orderedAt": 1613602938882,\
      "renew": true,\
      "serviceType": "zeit.world",\
      "transferredAt": 1613602938882,\
      "transferStartedAt": 1613602938882,\
      "userId": "<string>"\
    }\
  ],
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#parameter-limit)

limit

number

Maximum number of domains to list from a request.

Example:

`20`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#parameter-since)

since

number

Get domains created after this JavaScript timestamp.

Example:

`1609499532000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#parameter-until)

until

number

Get domains created before this JavaScript timestamp.

Example:

`1612264332000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

Successful response retrieving a list of domains.

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains)

domains

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-verified)

verified

boolean

required

If the domain has the ownership verified.

Example:

`true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-nameservers)

nameservers

string\[\]

required

A list of the current nameservers of the domain.

Example:

```
["ns1.nameserver.net", "ns2.nameserver.net"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-intended-nameservers)

intendedNameservers

string\[\]

required

A list of the intended nameservers for the domain to point to Vercel DNS.

Example:

```
["ns1.vercel-dns.com", "ns2.vercel-dns.com"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-creator)

creator

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-team-id)

teamId

string \| null

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-created-at)

createdAt

number

required

Timestamp in milliseconds when the domain was created in the registry.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-bought-at)

boughtAt

number \| null

required

If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-expires-at)

expiresAt

number \| null

required

Timestamp in milliseconds at which the domain is set to expire. `null` if not bought with Vercel.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-id)

id

string

required

The unique identifier of the domain.

Example:

`"EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-name)

name

string

required

The domain name.

Example:

`"example.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-service-type)

serviceType

enum<string>

required

The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.

Available options:

`zeit.world`,

`external`,

`na`

Example:

`"zeit.world"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-user-id)

userId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-custom-nameservers)

customNameservers

string\[\]

A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.

Example:

```
["ns1.nameserver.net", "ns2.nameserver.net"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-registrar)

registrar

enum<string>

Whether or not the domain is registered with Name.com. If set to `true`, the domain is registered with Name.com.

Available options:

`new`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-ordered-at)

orderedAt

number

Timestamp in milliseconds at which the domain was ordered.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-renew)

renew

boolean

Indicates whether the domain is set to automatically renew.

Example:

`true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-transferred-at)

transferredAt

number \| null

Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-domains-transfer-started-at)

transferStartedAt

number

If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated.

Example:

`1613602938882`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-pagination)

pagination

object

required

This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-pagination-count)

pagination.count

number

required

Amount of items in the current page.

Example:

`20`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-pagination-next)

pagination.next

number \| null

required

Timestamp that must be used to request the next page.

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains#response-pagination-prev)

pagination.prev

number \| null

required

Timestamp that must be used to request the previous page.

Example:

`1540095775951`

[Get Information for a Single Domain](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain) [Add an existing domain to the Vercel platform](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.