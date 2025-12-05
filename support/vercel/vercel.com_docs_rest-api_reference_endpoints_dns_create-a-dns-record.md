---
url: "https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record"
title: "Create a DNS record - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

dns

Create a DNS record

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

- checks

- projects

- deployments

- domains

- dns

  - [GET\\
    \\
    List existing DNS records](https://vercel.com/docs/rest-api/reference/endpoints/dns/list-existing-dns-records)
  - [POST\\
    \\
    Create a DNS record](https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record)
  - [PATCH\\
    \\
    Update an existing DNS record](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record)
  - [DEL\\
    \\
    Delete a DNS record](https://vercel.com/docs/rest-api/reference/endpoints/dns/delete-a-dns-record)
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


createRecord

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.dns.createRecord({
    domain: "example.com",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      type: "NS",
      ttl: 60,
      srv: {
        priority: 10,
        weight: 10,
        port: 5000,
        target: "host.example.com",
      },
      comment: "used to verify ownership of domain",
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

Copy

Ask AI

```
{
  "uid": "<string>",
  "updated": 123
}
```

dns

# Create a DNS record

Copy page

Creates a DNS record for a domain.

Copy page

POST

/

v2

/

domains

/

{domain}

/

records

createRecord

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.dns.createRecord({
    domain: "example.com",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      type: "NS",
      ttl: 60,
      srv: {
        priority: 10,
        weight: 10,
        port: 5000,
        target: "host.example.com",
      },
      comment: "used to verify ownership of domain",
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

Copy

Ask AI

```
{
  "uid": "<string>",
  "updated": 123
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record#parameter-domain)

domain

string

required

The domain used to create the DNS record.

Example:

`"example.com"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record#parameter-slug)

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

- Option 4

- Option 5

- Option 6

- Option 7

- Option 8

- Option 9

- Option 10


[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record#body-type)

type

enum<string>

required

The type of record, it could be one of the valid DNS records.
Must be of type `A`.

Available options:

`A`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record#body-name)

name

string

required

A subdomain name or an empty string for the root domain.

Example:

`"subdomain"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record#body-value)

value

string<ipv4>

required

The record value must be a valid IPv4 address.

Example:

`"192.0.2.42"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record#body-ttl)

ttl

number

The TTL value. Must be a number between 60 and 2147483647. Default value is 60.

Required range: `60 <= x <= 2147483647`

Example:

`60`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record#body-comment)

comment

string

A comment to add context on what this DNS record is for

Maximum length: `500`

Example:

`"used to verify ownership of domain"`

#### Response

200

application/json

Successful response showing the uid of the newly created DNS record.

- Option 1

- Option 2


[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record#response-uid)

uid

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record#response-updated)

updated

number

required

[List existing DNS records](https://vercel.com/docs/rest-api/reference/endpoints/dns/list-existing-dns-records) [Update an existing DNS record](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.