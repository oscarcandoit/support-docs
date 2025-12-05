---
url: "https://vercel.com/docs/rest-api/reference/endpoints/authentication/sso-token-exchange"
title: "SSO Token Exchange - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/authentication/sso-token-exchange#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

authentication

SSO Token Exchange

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


exchange-sso-token

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.marketplace.exchangeSsoToken({
    code: "<value>",
    clientId: "<id>",
    clientSecret: "<value>",
  });

  console.log(result);
}

run();
```

200

400

403

404

500

Copy

Ask AI

```
{
  "id_token": "<string>",
  "access_token": "<string>",
  "token_type": "<string>",
  "expires_in": 123
}
```

authentication

# SSO Token Exchange

Copy page

During the autorization process, Vercel sends the user to the provider [redirectLoginUrl](https://vercel.com/docs/integrations/create-integration/submit-integration#redirect-login-url), that includes the OAuth authorization `code` parameter. The provider then calls the SSO Token Exchange endpoint with the sent code and receives the OIDC token. They log the user in based on this token and redirects the user back to the Vercel account using deep-link parameters included the redirectLoginUrl. Providers should not persist the returned `id_token` in a database since the token will expire. See [**Authentication with SSO**](https://vercel.com/docs/integrations/create-integration/marketplace-api#authentication-with-sso) for more details.

Copy page

POST

/

v1

/

integrations

/

sso

/

token

exchange-sso-token

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.marketplace.exchangeSsoToken({
    code: "<value>",
    clientId: "<id>",
    clientSecret: "<value>",
  });

  console.log(result);
}

run();
```

200

400

403

404

500

Copy

Ask AI

```
{
  "id_token": "<string>",
  "access_token": "<string>",
  "token_type": "<string>",
  "expires_in": 123
}
```

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/sso-token-exchange#body-code)

code

string

required

The sensitive code received from Vercel

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/sso-token-exchange#body-client-id)

client\_id

string

required

The integration client id

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/sso-token-exchange#body-client-secret)

client\_secret

string

required

The integration client secret

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/sso-token-exchange#body-state)

state

string

The state received from the initialization request

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/sso-token-exchange#body-redirect-uri)

redirect\_uri

string

The integration redirect URI

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/sso-token-exchange#body-grant-type)

grant\_type

enum<string>

The grant type, when using x-www-form-urlencoded content type

Available options:

`authorization_code`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/sso-token-exchange#response-id-token)

id\_token

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/sso-token-exchange#response-access-token)

access\_token

string \| null

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/sso-token-exchange#response-token-type)

token\_type

string \| null

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/authentication/sso-token-exchange#response-expires-in)

expires\_in

number

[Get the data of a user-provided Edge Config](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-the-data-of-a-user-provided-edge-config) [List Auth Tokens](https://vercel.com/docs/rest-api/reference/endpoints/authentication/list-auth-tokens)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.