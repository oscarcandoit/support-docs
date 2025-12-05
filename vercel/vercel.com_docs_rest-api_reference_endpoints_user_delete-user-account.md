---
url: "https://vercel.com/docs/rest-api/reference/endpoints/user/delete-user-account"
title: "Delete User Account - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/user/delete-user-account#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

user

Delete User Account

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

  - [GET\\
    \\
    List User Events](https://vercel.com/docs/rest-api/reference/endpoints/user/list-user-events)
  - [GET\\
    \\
    Get the User](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user)
  - [DEL\\
    \\
    Delete User Account](https://vercel.com/docs/rest-api/reference/endpoints/user/delete-user-account)
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


requestDelete

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.user.requestDelete({});

  console.log(result);
}

run();
```

202

400

401

402

403

Copy

Ask AI

```
{
  "id": "<string>",
  "email": "<string>",
  "message": "Verification email sent"
}
```

user

# Delete User Account

Copy page

Initiates the deletion process for the currently authenticated User, by sending a deletion confirmation email. The email contains a link that the user needs to visit in order to proceed with the deletion process.

Copy page

DELETE

/

v1

/

user

requestDelete

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.user.requestDelete({});

  console.log(result);
}

run();
```

202

400

401

402

403

Copy

Ask AI

```
{
  "id": "<string>",
  "email": "<string>",
  "message": "Verification email sent"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/delete-user-account#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/delete-user-account#body-reasons)

reasons

object\[\]

Optional array of objects that describe the reason why the User account is being deleted.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/delete-user-account#body-reasons-slug)

slug

string

required

Idenitifier slug of the reason why the User account is being deleted.

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/delete-user-account#body-reasons-description)

description

string

required

Description of the reason why the User account is being deleted.

#### Response

202

application/json

Response indicating that the User deletion process has been initiated, and a confirmation email has been sent.

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/delete-user-account#response-id)

id

string

required

Unique identifier of the User who has initiated deletion.

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/delete-user-account#response-email)

email

string

required

Email address of the User who has initiated deletion.

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/delete-user-account#response-message)

message

string

required

User deletion progress status.

Example:

`"Verification email sent"`

[Get the User](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user) [List integration billing plans](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.