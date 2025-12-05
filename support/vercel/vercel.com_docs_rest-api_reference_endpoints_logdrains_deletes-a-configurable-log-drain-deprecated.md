---
url: "https://vercel.com/docs/rest-api/reference/endpoints/logdrains/deletes-a-configurable-log-drain-deprecated"
title: "Deletes a Configurable Log Drain (deprecated) - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/deletes-a-configurable-log-drain-deprecated#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

logDrains

Deletes a Configurable Log Drain (deprecated)

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

  - [GET\\
    \\
    Retrieves a Configurable Log Drain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-configurable-log-drain-deprecated)
  - [DEL\\
    \\
    Deletes a Configurable Log Drain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/deletes-a-configurable-log-drain-deprecated)
  - [GET\\
    \\
    Retrieves a list of all the Log Drains (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated)
  - [POST\\
    \\
    Creates a Configurable Log Drain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated)
  - [GET\\
    \\
    Retrieves a list of Integration log drains (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated)
  - [POST\\
    \\
    Creates a new Integration Log Drain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated)
  - [DEL\\
    \\
    Deletes the Integration log drain with the provided \`id\` (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/deletes-the-integration-log-drain-with-the-provided-%60id%60-deprecated)
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


deleteConfigurableLogDrain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.logDrains.deleteConfigurableLogDrain({
    id: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

}

run();
```

204

400

401

403

404

Copy

Ask AI

```
This response has no body data.
```

logDrains

# Deletes a Configurable Log Drain (deprecated)

Copy page

Deletes a Configurable Log Drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be deleted.

Copy page

DELETE

/

v1

/

log-drains

/

{id}

deleteConfigurableLogDrain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.logDrains.deleteConfigurableLogDrain({
    id: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

}

run();
```

204

400

401

403

404

Copy

Ask AI

```
This response has no body data.
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/deletes-a-configurable-log-drain-deprecated#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/deletes-a-configurable-log-drain-deprecated#parameter-id)

id

string

required

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/deletes-a-configurable-log-drain-deprecated#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/deletes-a-configurable-log-drain-deprecated#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

[Retrieves a Configurable Log Drain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-configurable-log-drain-deprecated) [Retrieves a list of all the Log Drains (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.