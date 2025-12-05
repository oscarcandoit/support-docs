---
url: "https://vercel.com/docs/rest-api/reference/endpoints/authentication/delete-an-authentication-token"
title: "Delete an authentication token - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/authentication/delete-an-authentication-token#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

authentication

Delete an authentication token

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


deleteAuthToken

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.authentication.deleteAuthToken({
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
  "tokenId": "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391"
}
```

authentication

# Delete an authentication token

Copy page

Invalidate an authentication token, such that it will no longer be valid for future HTTP requests.

Copy page

DELETE

/

v3

/

user

/

tokens

/

{tokenId}

deleteAuthToken

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.authentication.deleteAuthToken({
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
  "tokenId": "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/delete-an-authentication-token#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/delete-an-authentication-token#parameter-token-id)

tokenId

string

required

The identifier of the token to invalidate. The special value "current" may be supplied, which invalidates the token that the HTTP request was authenticated with.

Example:

`"5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391"`

#### Response

200

application/json

Authentication token successfully deleted.

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/delete-an-authentication-token#response-token-id)

tokenId

string

required

The unique identifier of the token that was deleted.

Example:

`"5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391"`

[Get Auth Token Metadata](https://vercel.com/docs/rest-api/reference/endpoints/authentication/get-auth-token-metadata) [Get logs for a deployment](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.