---
url: "https://vercel.com/docs/rest-api/reference/endpoints/dns/list-existing-dns-records"
title: "List existing DNS records - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/dns/list-existing-dns-records#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

dns

List existing DNS records

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


getRecords

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.dns.getRecords({
    domain: "example.com",
    limit: "20",
    since: "1609499532000",
    until: "1612264332000",
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
"<string>"
```

dns

# List existing DNS records

Copy page

Retrieves a list of DNS records created for a domain name. By default it returns 20 records if no limit is provided. The rest can be retrieved using the pagination options.

Copy page

GET

/

v4

/

domains

/

{domain}

/

records

getRecords

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.dns.getRecords({
    domain: "example.com",
    limit: "20",
    since: "1609499532000",
    until: "1612264332000",
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
"<string>"
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/list-existing-dns-records#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/list-existing-dns-records#parameter-domain)

domain

string

required

Example:

`"example.com"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/list-existing-dns-records#parameter-limit)

limit

string

Maximum number of records to list from a request.

Example:

`20`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/list-existing-dns-records#parameter-since)

since

string

Get records created after this JavaScript timestamp.

Example:

`1609499532000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/list-existing-dns-records#parameter-until)

until

string

Get records created before this JavaScript timestamp.

Example:

`1612264332000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/list-existing-dns-records#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/list-existing-dns-records#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

Successful response retrieving a list of paginated DNS records.

- Option 1 · string

- Option 2 · object

- Option 3 · object


The response is of type `string`.

[Remove a domain by name](https://vercel.com/docs/rest-api/reference/endpoints/domains/remove-a-domain-by-name) [Create a DNS record](https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.