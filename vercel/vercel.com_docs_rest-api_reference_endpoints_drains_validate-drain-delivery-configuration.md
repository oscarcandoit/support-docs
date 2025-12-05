---
url: "https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration"
title: "Validate Drain delivery configuration - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

drains

Validate Drain delivery configuration

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

  - [GET\\
    \\
    Retrieve a list of all Drains](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains)
  - [POST\\
    \\
    Create a new Drain](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain)
  - [GET\\
    \\
    Find a Drain by id](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id)
  - [DEL\\
    \\
    Delete a drain](https://vercel.com/docs/rest-api/reference/endpoints/drains/delete-a-drain)
  - [PATCH\\
    \\
    Update an existing Drain](https://vercel.com/docs/rest-api/reference/endpoints/drains/update-an-existing-drain)
  - [POST\\
    \\
    Validate Drain delivery configuration](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration)
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


testDrain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.drains.testDrain({
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

Copy

Ask AI

```
{}
```

drains

# Validate Drain delivery configuration

Copy page

Validate the delivery configuration of a Drain using sample events.

Copy page

POST

/

v1

/

drains

/

test

testDrain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.drains.testDrain({
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

Copy

Ask AI

```
{}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration#body-schemas)

schemas

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration#body-schemas-key)

schemas.{key}

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration#body-delivery)

delivery

object

required

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration#body-delivery-type)

delivery.type

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration#body-delivery-endpoint)

delivery.endpoint

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration#body-delivery-encoding)

delivery.encoding

enum<string>

required

Available options:

`json`,

`ndjson`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration#body-delivery-headers)

delivery.headers

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration#body-delivery-compression)

delivery.compression

enum<string>

Available options:

`gzip`,

`none`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration#body-delivery-secret)

delivery.secret

string

#### Response

200

application/json

- Option 1

- Option 2


The response is of type `object`.

[Update an existing Drain](https://vercel.com/docs/rest-api/reference/endpoints/drains/update-an-existing-drain) [Invalidate by tag](https://vercel.com/docs/rest-api/reference/endpoints/edge-cache/invalidate-by-tag)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.