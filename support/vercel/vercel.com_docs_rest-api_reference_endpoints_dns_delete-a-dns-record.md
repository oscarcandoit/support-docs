---
url: "https://vercel.com/docs/rest-api/reference/endpoints/dns/delete-a-dns-record"
title: "Delete a DNS record - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/dns/delete-a-dns-record#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

dns

Delete a DNS record

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


removeRecord

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.dns.removeRecord({
    domain: "example.com",
    recordId: "rec_V0fra8eEgQwEpFhYG2vTzC3K",
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
{}
```

dns

# Delete a DNS record

Copy page

Removes an existing DNS record from a domain name.

Copy page

DELETE

/

v2

/

domains

/

{domain}

/

records

/

{recordId}

removeRecord

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.dns.removeRecord({
    domain: "example.com",
    recordId: "rec_V0fra8eEgQwEpFhYG2vTzC3K",
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
{}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/delete-a-dns-record#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/delete-a-dns-record#parameter-domain)

domain

string

required

Example:

`"example.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/delete-a-dns-record#parameter-record-id)

recordId

string

required

Example:

`"rec_V0fra8eEgQwEpFhYG2vTzC3K"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/delete-a-dns-record#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/delete-a-dns-record#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

Successful response by removing the specified DNS record.

The response is of type `object`.

[Update an existing DNS record](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record) [Get supported TLDs](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-supported-tlds)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.