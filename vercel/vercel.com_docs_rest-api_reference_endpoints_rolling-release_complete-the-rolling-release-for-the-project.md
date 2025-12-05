---
url: "https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project"
title: "Complete the rolling release for the project - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

rolling-release

Complete the rolling release for the project

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

  - [GET\\
    \\
    Get rolling release billing status](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/get-rolling-release-billing-status)
  - [GET\\
    \\
    Get rolling release configuration](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/get-rolling-release-configuration)
  - [DEL\\
    \\
    Delete rolling release configuration](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/delete-rolling-release-configuration)
  - [PATCH\\
    \\
    Update the rolling release settings for the project](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/update-the-rolling-release-settings-for-the-project)
  - [GET\\
    \\
    Get the active rolling release information for a project](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/get-the-active-rolling-release-information-for-a-project)
  - [POST\\
    \\
    Update the active rolling release to the next stage for a project](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/update-the-active-rolling-release-to-the-next-stage-for-a-project)
  - [POST\\
    \\
    Complete the rolling release for the project](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project)
- security

- teams

- webhooks

- aliases

- certs


completeRollingRelease

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.rollingRelease.completeRollingRelease({
    idOrName: "<value>",
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

404

Copy

Ask AI

```
{
  "rollingRelease": {
    "state": "ACTIVE",
    "currentDeployment": {
      "id": "dpl_abc123",
      "name": "my-shop@main",
      "url": "my-shop.vercel.app",
      "target": "production",
      "source": "git",
      "createdAt": 1716206500000,
      "readyState": "READY",
      "readyStateAt": 1716206800000
    },
    "canaryDeployment": {
      "id": "dpl_def456",
      "name": "my-shop@9c7e2f4",
      "url": "9c7e2f4-my-shop.vercel.app",
      "target": "production",
      "source": "git",
      "createdAt": 1716210100000,
      "readyState": "READY",
      "readyStateAt": 1716210400000
    },
    "queuedDeploymentId": "dpl_ghi789",
    "advancementType": "manual-approval",
    "stages": [\
      {\
        "index": 0,\
        "isFinalStage": false,\
        "targetPercentage": 5,\
        "requireApproval": true,\
        "duration": null\
      },\
      {\
        "index": 1,\
        "isFinalStage": false,\
        "targetPercentage": 25,\
        "requireApproval": true,\
        "duration": null\
      },\
      {\
        "index": 2,\
        "isFinalStage": false,\
        "targetPercentage": 60,\
        "requireApproval": true,\
        "duration": null\
      },\
      {\
        "index": 3,\
        "isFinalStage": true,\
        "targetPercentage": 100,\
        "requireApproval": false,\
        "duration": null\
      }\
    ],
    "activeStage": {
      "index": 1,
      "isFinalStage": false,
      "targetPercentage": 25,
      "requireApproval": true,
      "duration": null
    },
    "nextStage": {
      "index": 2,
      "isFinalStage": false,
      "targetPercentage": 60,
      "requireApproval": true,
      "duration": null
    },
    "startedAt": 1716210500000,
    "updatedAt": 1716210600000
  }
}
```

rolling-release

# Complete the rolling release for the project

Copy page

Force-complete a Rolling Release. The canary deployment will begin serving 100% of the traffic.

Copy page

POST

/

v1

/

projects

/

{idOrName}

/

rolling-release

/

complete

completeRollingRelease

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.rollingRelease.completeRollingRelease({
    idOrName: "<value>",
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

404

Copy

Ask AI

```
{
  "rollingRelease": {
    "state": "ACTIVE",
    "currentDeployment": {
      "id": "dpl_abc123",
      "name": "my-shop@main",
      "url": "my-shop.vercel.app",
      "target": "production",
      "source": "git",
      "createdAt": 1716206500000,
      "readyState": "READY",
      "readyStateAt": 1716206800000
    },
    "canaryDeployment": {
      "id": "dpl_def456",
      "name": "my-shop@9c7e2f4",
      "url": "9c7e2f4-my-shop.vercel.app",
      "target": "production",
      "source": "git",
      "createdAt": 1716210100000,
      "readyState": "READY",
      "readyStateAt": 1716210400000
    },
    "queuedDeploymentId": "dpl_ghi789",
    "advancementType": "manual-approval",
    "stages": [\
      {\
        "index": 0,\
        "isFinalStage": false,\
        "targetPercentage": 5,\
        "requireApproval": true,\
        "duration": null\
      },\
      {\
        "index": 1,\
        "isFinalStage": false,\
        "targetPercentage": 25,\
        "requireApproval": true,\
        "duration": null\
      },\
      {\
        "index": 2,\
        "isFinalStage": false,\
        "targetPercentage": 60,\
        "requireApproval": true,\
        "duration": null\
      },\
      {\
        "index": 3,\
        "isFinalStage": true,\
        "targetPercentage": 100,\
        "requireApproval": false,\
        "duration": null\
      }\
    ],
    "activeStage": {
      "index": 1,
      "isFinalStage": false,
      "targetPercentage": 25,
      "requireApproval": true,
      "duration": null
    },
    "nextStage": {
      "index": 2,
      "isFinalStage": false,
      "targetPercentage": 60,
      "requireApproval": true,
      "duration": null
    },
    "startedAt": 1716210500000,
    "updatedAt": 1716210600000
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#parameter-id-or-name)

idOrName

string

required

Project ID or project name (URL-encoded)

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#body-canary-deployment-id)

canaryDeploymentId

string

required

The ID of the canary deployment to complete

#### Response

200

application/json

The response format for rolling release endpoints that return rolling release information

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#response-rolling-release)

rollingRelease

object \| null

required

Rolling release information including configuration and document details, or null if no rolling release exists

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#response-rolling-release-state)

rollingRelease.state

enum<string>

required

The current state of the rolling release

Available options:

`ACTIVE`,

`COMPLETE`,

`ABORTED`

Example:

`"ACTIVE"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#response-rolling-release-current-deployment)

rollingRelease.currentDeployment

object \| null

required

The current deployment receiving production traffic

Show child attributes

Example:

```
{
  "id": "dpl_abc123",
  "name": "my-shop@main",
  "url": "my-shop.vercel.app",
  "target": "production",
  "source": "git",
  "createdAt": 1716206500000,
  "readyState": "READY",
  "readyStateAt": 1716206800000
}
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#response-rolling-release-canary-deployment)

rollingRelease.canaryDeployment

object \| null

required

The canary deployment being rolled out

Show child attributes

Example:

```
{
  "id": "dpl_def456",
  "name": "my-shop@9c7e2f4",
  "url": "9c7e2f4-my-shop.vercel.app",
  "target": "production",
  "source": "git",
  "createdAt": 1716210100000,
  "readyState": "READY",
  "readyStateAt": 1716210400000
}
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#response-rolling-release-queued-deployment-id)

rollingRelease.queuedDeploymentId

string \| null

required

The ID of a deployment queued for the next rolling release

Example:

`"dpl_ghi789"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#response-rolling-release-advancement-type)

rollingRelease.advancementType

enum<string>

required

The advancement type of the rolling release

Available options:

`automatic`,

`manual-approval`

Example:

`"manual-approval"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#response-rolling-release-stages)

rollingRelease.stages

object\[\]

required

All stages configured for this rolling release

Show child attributes

Example:

```
[\
  {\
    "index": 0,\
    "isFinalStage": false,\
    "targetPercentage": 5,\
    "requireApproval": true,\
    "duration": null\
  },\
  {\
    "index": 1,\
    "isFinalStage": false,\
    "targetPercentage": 25,\
    "requireApproval": true,\
    "duration": null\
  },\
  {\
    "index": 2,\
    "isFinalStage": false,\
    "targetPercentage": 60,\
    "requireApproval": true,\
    "duration": null\
  },\
  {\
    "index": 3,\
    "isFinalStage": true,\
    "targetPercentage": 100,\
    "requireApproval": false,\
    "duration": null\
  }\
]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#response-rolling-release-active-stage)

rollingRelease.activeStage

object \| null

required

The currently active stage, null if the rollout is aborted

Show child attributes

Example:

```
{
  "index": 1,
  "isFinalStage": false,
  "targetPercentage": 25,
  "requireApproval": true,
  "duration": null
}
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#response-rolling-release-next-stage)

rollingRelease.nextStage

object \| null

required

The next stage to be activated, null if not in ACTIVE state

Show child attributes

Example:

```
{
  "index": 2,
  "isFinalStage": false,
  "targetPercentage": 60,
  "requireApproval": true,
  "duration": null
}
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#response-rolling-release-started-at)

rollingRelease.startedAt

number

required

Unix timestamp in milliseconds when the rolling release started

Example:

`1716210500000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project#response-rolling-release-updated-at)

rollingRelease.updatedAt

number

required

Unix timestamp in milliseconds when the rolling release was last updated

Example:

`1716210600000`

[Update the active rolling release to the next stage for a project](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/update-the-active-rolling-release-to-the-next-stage-for-a-project) [Update Attack Challenge mode](https://vercel.com/docs/rest-api/reference/endpoints/security/update-attack-challenge-mode)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.