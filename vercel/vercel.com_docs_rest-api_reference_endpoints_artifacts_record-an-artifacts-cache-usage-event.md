---
url: "https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event"
title: "Record an artifacts cache usage event - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

artifacts

Record an artifacts cache usage event

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

  - [POST\\
    \\
    Record an artifacts cache usage event](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event)
  - [GET\\
    \\
    Get status of Remote Caching for this principal](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/get-status-of-remote-caching-for-this-principal)
  - [GET\\
    \\
    Download a cache artifact](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/download-a-cache-artifact)
  - [PUT\\
    \\
    Upload a cache artifact](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/upload-a-cache-artifact)
  - [HEAD\\
    \\
    Check if a cache artifact exists](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/check-if-a-cache-artifact-exists)
  - [POST\\
    \\
    Query information about an artifact](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/query-information-about-an-artifact)
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


recordEvents

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.artifacts.recordEvents({
    xArtifactClientCi: "VERCEL",
    xArtifactClientInteractive: 0,
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: [],
  });

}

run();
```

artifacts

# Record an artifacts cache usage event

Copy page

Records an artifacts cache usage event. The body of this request is an array of cache usage events. The supported event types are `HIT` and `MISS`. The source is either `LOCAL` the cache event was on the users filesystem cache or `REMOTE` if the cache event is for a remote cache. When the event is a `HIT` the request also accepts a number `duration` which is the time taken to generate the artifact in the cache.

Copy page

POST

/

v8

/

artifacts

/

events

recordEvents

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.artifacts.recordEvents({
    xArtifactClientCi: "VERCEL",
    xArtifactClientInteractive: 0,
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: [],
  });

}

run();
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Headers

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event#parameter-x-artifact-client-ci)

x-artifact-client-ci

string

The continuous integration or delivery environment where this artifact is downloaded.

Maximum length: `50`

Example:

`"VERCEL"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event#parameter-x-artifact-client-interactive)

x-artifact-client-interactive

integer

1 if the client is an interactive shell. Otherwise 0

Required range: `0 <= x <= 1`

Example:

`0`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json · object\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event#body-session-id)

sessionId

string

required

A UUID (universally unique identifer) for the session that generated this event.

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event#body-source)

source

enum<string>

required

One of `LOCAL` or `REMOTE`. `LOCAL` specifies that the cache event was from the user's filesystem cache. `REMOTE` specifies that the cache event is from a remote cache.

Available options:

`LOCAL`,

`REMOTE`

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event#body-event)

event

enum<string>

required

One of `HIT` or `MISS`. `HIT` specifies that a cached artifact for `hash` was found in the cache. `MISS` specifies that a cached artifact with `hash` was not found.

Available options:

`HIT`,

`MISS`

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event#body-hash)

hash

string

required

The artifact hash

Example:

`"12HKQaOmR5t5Uy6vdcQsNIiZgHGB"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event#body-duration)

duration

number

The time taken to generate the artifact. This should be sent as a body parameter on `HIT` events.

Example:

`400`

#### Response

200

Success. Event recorded.

[Update an access group project](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project) [Get status of Remote Caching for this principal](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/get-status-of-remote-caching-for-this-principal)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.