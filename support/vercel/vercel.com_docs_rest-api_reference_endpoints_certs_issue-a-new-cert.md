---
url: "https://vercel.com/docs/rest-api/reference/endpoints/certs/issue-a-new-cert"
title: "Issue a new cert - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/certs/issue-a-new-cert#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

certs

Issue a new cert

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

  - [GET\\
    \\
    Get cert by id](https://vercel.com/docs/rest-api/reference/endpoints/certs/get-cert-by-id)
  - [DEL\\
    \\
    Remove cert](https://vercel.com/docs/rest-api/reference/endpoints/certs/remove-cert)
  - [PUT\\
    \\
    Upload a cert](https://vercel.com/docs/rest-api/reference/endpoints/certs/upload-a-cert)
  - [POST\\
    \\
    Issue a new cert](https://vercel.com/docs/rest-api/reference/endpoints/certs/issue-a-new-cert)

issueCert

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.certs.issueCert({
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

402

403

404

449

500

Copy

Ask AI

```
{
  "id": "<string>",
  "createdAt": 123,
  "expiresAt": 123,
  "autoRenew": true,
  "cns": [\
    "<string>"\
  ]
}
```

certs

# Issue a new cert

Copy page

Issue a new cert

Copy page

POST

/

v8

/

certs

issueCert

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.certs.issueCert({
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

402

403

404

449

500

Copy

Ask AI

```
{
  "id": "<string>",
  "createdAt": 123,
  "expiresAt": 123,
  "autoRenew": true,
  "cns": [\
    "<string>"\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/certs/issue-a-new-cert#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/certs/issue-a-new-cert#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/certs/issue-a-new-cert#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/certs/issue-a-new-cert#body-cns)

cns

string\[\]

The common names the cert should be issued for

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/certs/issue-a-new-cert#response-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/certs/issue-a-new-cert#response-created-at)

createdAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/certs/issue-a-new-cert#response-expires-at)

expiresAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/certs/issue-a-new-cert#response-auto-renew)

autoRenew

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/certs/issue-a-new-cert#response-cns)

cns

string\[\]

required

[Upload a cert](https://vercel.com/docs/rest-api/reference/endpoints/certs/upload-a-cert)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.