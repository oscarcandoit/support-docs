---
url: "https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens"
title: "List Auth Tokens - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

authentication

List Auth Tokens

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

  - [POST\\
    \\
    SSO Token Exchange](https://vercel.com/docs/rest-api/reference/endpoints/authentication/sso-token-exchange)
  - [GET\\
    \\
    List Auth Tokens](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens)
  - [POST\\
    \\
    Create an Auth Token](https://vercel.com/docs/rest-api/reference/endpoints/authentication/create-an-auth-token)
  - [GET\\
    \\
    Get Auth Token Metadata](https://vercel.com/docs/rest-api/reference/endpoints/authentication/get-auth-token-metadata)
  - [DEL\\
    \\
    Delete an authentication token](https://vercel.com/docs/rest-api/reference/endpoints/authentication/delete-an-authentication-token)
- logs

- projectMembers

- connect

- rolling-release

- security

- teams

- webhooks

- aliases

- certs


listAuthTokens

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.authentication.listAuthTokens();

  console.log(result);
}

run();
```

200

400

401

403

Copy

Ask AI

```
{
  "tokens": [\
    {\
      "id": "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",\
      "name": "<string>",\
      "type": "oauth2-token",\
      "origin": "github",\
      "scopes": [\
        {\
          "type": "user",\
          "sudo": {\
            "origin": "totp",\
            "expiresAt": 123\
          },\
          "origin": "saml",\
          "createdAt": 123,\
          "expiresAt": 123\
        }\
      ],\
      "expiresAt": 1632816536002,\
      "activeAt": 1632816536002,\
      "createdAt": 1632816536002\
    }\
  ],
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  }
}
```

authentication

# List Auth Tokens

Copy page

Retrieve a list of the current User’s authentication tokens.

Copy page

GET

/

v5

/

user

/

tokens

listAuthTokens

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.authentication.listAuthTokens();

  console.log(result);
}

run();
```

200

400

401

403

Copy

Ask AI

```
{
  "tokens": [\
    {\
      "id": "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",\
      "name": "<string>",\
      "type": "oauth2-token",\
      "origin": "github",\
      "scopes": [\
        {\
          "type": "user",\
          "sudo": {\
            "origin": "totp",\
            "expiresAt": 123\
          },\
          "origin": "saml",\
          "createdAt": 123,\
          "expiresAt": 123\
        }\
      ],\
      "expiresAt": 1632816536002,\
      "activeAt": 1632816536002,\
      "createdAt": 1632816536002\
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

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens#response-tokens)

tokens

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens#response-tokens-id)

id

string

required

The unique identifier of the token.

Example:

`"5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens#response-tokens-name)

name

string

required

The human-readable name of the token.

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens#response-tokens-type)

type

string

required

The type of the token.

Example:

`"oauth2-token"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens#response-tokens-active-at)

activeAt

number

required

Timestamp (in milliseconds) of when the token was most recently used.

Example:

`1632816536002`

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens#response-tokens-created-at)

createdAt

number

required

Timestamp (in milliseconds) of when the token was created.

Example:

`1632816536002`

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens#response-tokens-origin)

origin

string

The origin of how the token was created.

Example:

`"github"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens#response-tokens-scopes)

scopes

object\[\]

The access scopes granted to the token.

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens#response-tokens-expires-at)

expiresAt

number

Timestamp (in milliseconds) of when the token expires.

Example:

`1632816536002`

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens#response-pagination)

pagination

object

required

This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens#response-pagination-count)

pagination.count

number

required

Amount of items in the current page.

Example:

`20`

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens#response-pagination-next)

pagination.next

number \| null

required

Timestamp that must be used to request the next page.

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens#response-pagination-prev)

pagination.prev

number \| null

required

Timestamp that must be used to request the previous page.

Example:

`1540095775951`

[SSO Token Exchange](https://vercel.com/docs/rest-api/reference/endpoints/authentication/sso-token-exchange) [Create an Auth Token](https://vercel.com/docs/rest-api/reference/endpoints/authentication/create-an-auth-token)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.