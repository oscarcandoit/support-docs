---
url: "https://vercel.com/docs/rest-api/reference/endpoints/authentication/get-auth-token-metadata"
title: "Get Auth Token Metadata - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/authentication/get-auth-token-metadata#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

authentication

Get Auth Token Metadata

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


getAuthToken

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.authentication.getAuthToken({
    tokenId: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
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
  "token": {
    "id": "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
    "name": "<string>",
    "type": "oauth2-token",
    "origin": "github",
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
    ],
    "expiresAt": 1632816536002,
    "activeAt": 1632816536002,
    "createdAt": 1632816536002
  }
}
```

authentication

# Get Auth Token Metadata

Copy page

Retrieve metadata about an authentication token belonging to the currently authenticated User.

Copy page

GET

/

v5

/

user

/

tokens

/

{tokenId}

getAuthToken

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.authentication.getAuthToken({
    tokenId: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
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
  "token": {
    "id": "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
    "name": "<string>",
    "type": "oauth2-token",
    "origin": "github",
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
    ],
    "expiresAt": 1632816536002,
    "activeAt": 1632816536002,
    "createdAt": 1632816536002
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/get-auth-token-metadata#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/get-auth-token-metadata#parameter-token-id)

tokenId

string

required

The identifier of the token to retrieve. The special value "current" may be supplied, which returns the metadata for the token that the current HTTP request is authenticated with.

Example:

`"5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391"`

#### Response

200

application/json

Successful response.

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/get-auth-token-metadata#response-token)

token

object

required

Authentication token metadata.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/get-auth-token-metadata#response-token-id)

token.id

string

required

The unique identifier of the token.

Example:

`"5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/get-auth-token-metadata#response-token-name)

token.name

string

required

The human-readable name of the token.

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/get-auth-token-metadata#response-token-type)

token.type

string

required

The type of the token.

Example:

`"oauth2-token"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/get-auth-token-metadata#response-token-active-at)

token.activeAt

number

required

Timestamp (in milliseconds) of when the token was most recently used.

Example:

`1632816536002`

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/get-auth-token-metadata#response-token-created-at)

token.createdAt

number

required

Timestamp (in milliseconds) of when the token was created.

Example:

`1632816536002`

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/get-auth-token-metadata#response-token-origin)

token.origin

string

The origin of how the token was created.

Example:

`"github"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/get-auth-token-metadata#response-token-scopes)

token.scopes

object\[\]

The access scopes granted to the token.

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/get-auth-token-metadata#response-token-expires-at)

token.expiresAt

number

Timestamp (in milliseconds) of when the token expires.

Example:

`1632816536002`

[Create an Auth Token](https://vercel.com/docs/rest-api/reference/endpoints/authentication/create-an-auth-token) [Delete an authentication token](https://vercel.com/docs/rest-api/reference/endpoints/authentication/delete-an-authentication-token)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.