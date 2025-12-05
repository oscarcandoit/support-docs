---
url: "https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record"
title: "Update an existing DNS record - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

dns

Update an existing DNS record

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


updateRecord

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.dns.updateRecord({
    recordId: "rec_2qn7pzrx89yxy34vezpd31y9",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "example-1",
      value: "google.com",
      type: "A",
      ttl: 60,
      srv: null,
      https: null,
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
  "createdAt": 123,
  "creator": "<string>",
  "domain": "<string>",
  "id": "<string>",
  "name": "<string>",
  "recordType": "A",
  "ttl": 123,
  "type": "record",
  "value": "<string>",
  "comment": "<string>"
}
```

dns

# Update an existing DNS record

Copy page

Updates an existing DNS record for a domain name.

Copy page

PATCH

/

v1

/

domains

/

records

/

{recordId}

updateRecord

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.dns.updateRecord({
    recordId: "rec_2qn7pzrx89yxy34vezpd31y9",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "example-1",
      value: "google.com",
      type: "A",
      ttl: 60,
      srv: null,
      https: null,
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
  "createdAt": 123,
  "creator": "<string>",
  "domain": "<string>",
  "id": "<string>",
  "name": "<string>",
  "recordType": "A",
  "ttl": 123,
  "type": "record",
  "value": "<string>",
  "comment": "<string>"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#parameter-record-id)

recordId

string

required

The id of the DNS record

Example:

`"rec_2qn7pzrx89yxy34vezpd31y9"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#body-name)

name

string \| null

The name of the DNS record

Example:

`"example-1"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#body-value)

value

string \| null

The value of the DNS record

Example:

`"google.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#body-type)

type

enum<string> \| null

The type of the DNS record

Available options:

`A`,

`AAAA`,

`ALIAS`,

`CAA`,

`CNAME`,

`HTTPS`,

`MX`,

`SRV`,

`TXT`,

`NS`

Example:

`"A"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#body-ttl)

ttl

integer \| null

The Time to live (TTL) value of the DNS record

Required range: `60 <= x <= 2147483647`

Example:

`"60"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#body-mx-priority)

mxPriority

integer \| null

The MX priority value of the DNS record

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#body-srv)

srv

object \| null

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#body-srv-target)

srv.target

string \| null

required

Maximum length: `255`

Example:

`"example2.com."`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#body-srv-weight)

srv.weight

integer \| null

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#body-srv-port)

srv.port

integer \| null

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#body-srv-priority)

srv.priority

integer \| null

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#body-https)

https

object \| null

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#body-https-priority)

https.priority

integer \| null

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#body-https-target)

https.target

string \| null

required

Maximum length: `255`

Example:

`"example2.com."`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#body-https-params)

https.params

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#body-comment)

comment

string

A comment to add context on what this DNS record is for

Maximum length: `500`

Example:

`"used to verify ownership of domain"`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#response-creator)

creator

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#response-domain)

domain

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#response-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#response-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#response-record-type)

recordType

enum<string>

required

Available options:

`A`,

`AAAA`,

`ALIAS`,

`CAA`,

`CNAME`,

`HTTPS`,

`MX`,

`SRV`,

`TXT`,

`NS`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#response-type)

type

enum<string>

required

Available options:

`record`,

`record-sys`

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#response-value)

value

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#response-created-at)

createdAt

number \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#response-ttl)

ttl

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/dns/update-an-existing-dns-record#response-comment)

comment

string

[Create a DNS record](https://vercel.com/docs/rest-api/reference/endpoints/dns/create-a-dns-record) [Delete a DNS record](https://vercel.com/docs/rest-api/reference/endpoints/dns/delete-a-dns-record)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.