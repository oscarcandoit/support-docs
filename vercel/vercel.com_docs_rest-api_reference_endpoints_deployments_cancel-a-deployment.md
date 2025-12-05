---
url: "https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment"
title: "Cancel a deployment - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

deployments

Cancel a deployment

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

- checks

- projects

- deployments

  - [GET\\
    \\
    Get deployment events](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events)
  - [PATCH\\
    \\
    Update deployment integration action](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action)
  - [GET\\
    \\
    Get a deployment by ID or URL](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-a-deployment-by-id-or-url)
  - [POST\\
    \\
    Create a new deployment](https://vercel.com/docs/rest-api/reference/endpoints/deployments/create-a-new-deployment)
  - [PATCH\\
    \\
    Cancel a deployment](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment)
  - [POST\\
    \\
    Upload Deployment Files](https://vercel.com/docs/rest-api/reference/endpoints/deployments/upload-deployment-files)
  - [GET\\
    \\
    List Deployment Files](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files)
  - [GET\\
    \\
    Get Deployment File Contents](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-file-contents)
  - [GET\\
    \\
    List deployments](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments)
  - [DEL\\
    \\
    Delete a Deployment](https://vercel.com/docs/rest-api/reference/endpoints/deployments/delete-a-deployment)
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


cancelDeployment

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.deployments.cancelDeployment({
    id: "dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd",
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
  "aliasAssignedAt": 123,
  "alwaysRefuseToBuild": true,
  "build": {
    "env": [\
      "<string>"\
    ]
  },
  "buildArtifactUrls": [\
    "<string>"\
  ],
  "builds": [\
    {\
      "use": "<string>",\
      "src": "<string>",\
      "config": {}\
    }\
  ],
  "env": [\
    "<string>"\
  ],
  "inspectorUrl": "<string>",
  "isInConcurrentBuildsQueue": true,
  "isInSystemBuildsQueue": true,
  "projectSettings": {
    "buildCommand": "<string>",
    "devCommand": "<string>",
    "framework": "blitzjs",
    "commandForIgnoringBuildStep": "<string>",
    "installCommand": "<string>",
    "outputDirectory": "<string>",
    "speedInsights": {
      "id": "<string>",
      "enabledAt": 123,
      "disabledAt": 123,
      "canceledAt": 123,
      "hasData": true,
      "paidAt": 123
    },
    "webAnalytics": {
      "id": "<string>",
      "disabledAt": 123,
      "canceledAt": 123,
      "enabledAt": 123,
      "hasData": true
    }
  },
  "readyStateReason": "<string>",
  "integrations": {
    "status": "skipped",
    "startedAt": 123,
    "completedAt": 123,
    "skippedAt": 123,
    "skippedBy": "<string>"
  },
  "images": {
    "sizes": [\
      123\
    ],
    "qualities": [\
      123\
    ],
    "domains": [\
      "<string>"\
    ],
    "remotePatterns": [\
      {\
        "protocol": "http",\
        "hostname": "<string>",\
        "port": "<string>",\
        "pathname": "<string>",\
        "search": "<string>"\
      }\
    ],
    "localPatterns": [\
      {\
        "pathname": "<string>",\
        "search": "<string>"\
      }\
    ],
    "minimumCacheTTL": 123,
    "formats": [\
      "image/avif"\
    ],
    "dangerouslyAllowSVG": true,
    "contentSecurityPolicy": "<string>",
    "contentDispositionType": "inline"
  },
  "alias": [],
  "aliasAssigned": true,
  "bootedAt": 123,
  "buildingAt": 123,
  "buildContainerFinishedAt": 123,
  "buildSkipped": true,
  "creator": {
    "uid": "96SnxkFiMyVKsK3pnoHfx3Hz",
    "username": "john-doe",
    "avatar": "<string>"
  },
  "initReadyAt": 123,
  "isFirstBranchDeployment": true,
  "lambdas": [\
    {\
      "id": "<string>",\
      "createdAt": 123,\
      "readyState": "BUILDING",\
      "entrypoint": "<string>",\
      "readyStateAt": 123,\
      "output": [\
        {\
          "path": "<string>",\
          "functionName": "<string>"\
        }\
      ]\
    }\
  ],
  "public": false,
  "ready": 123,
  "status": "BUILDING",
  "team": {
    "id": "<string>",
    "name": "<string>",
    "avatar": "<string>",
    "slug": "<string>"
  },
  "userAliases": [\
    "sub1.example.com",\
    "sub2.example.com"\
  ],
  "previewCommentsEnabled": false,
  "ttyBuildLogs": true,
  "customEnvironment": {
    "id": "<string>",
    "slug": "<string>",
    "type": "production",
    "description": "<string>",
    "branchMatcher": {
      "type": "endsWith",
      "pattern": "<string>"
    },
    "domains": [\
      {\
        "name": "<string>",\
        "apexName": "<string>",\
        "projectId": "<string>",\
        "redirect": "<string>",\
        "redirectStatusCode": 307,\
        "gitBranch": "<string>",\
        "customEnvironmentId": "<string>",\
        "updatedAt": 123,\
        "createdAt": 123,\
        "verified": true,\
        "verification": [\
          {\
            "type": "<string>",\
            "domain": "<string>",\
            "value": "<string>",\
            "reason": "<string>"\
          }\
        ]\
      }\
    ],
    "currentDeploymentAliases": [\
      "<string>"\
    ],
    "createdAt": 123,
    "updatedAt": 123
  },
  "oomReport": "out-of-memory",
  "id": "dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ",
  "aliasError": null,
  "aliasFinal": "<string>",
  "aliasWarning": {
    "code": "<string>",
    "message": "<string>",
    "link": "<string>",
    "action": "<string>"
  },
  "autoAssignCustomDomains": true,
  "automaticAliases": [\
    "<string>"\
  ],
  "buildErrorAt": 123,
  "checksState": "registered",
  "checksConclusion": "skipped",
  "createdAt": 1540257589405,
  "deletedAt": 1540257589405,
  "defaultRoute": "<string>",
  "canceledAt": 123,
  "errorCode": "<string>",
  "errorLink": "<string>",
  "errorMessage": "<string>",
  "errorStep": "<string>",
  "passiveRegions": [\
    "<string>"\
  ],
  "gitSource": {
    "type": "github",
    "repoId": "<string>",
    "ref": "<string>",
    "sha": "<string>",
    "prId": 123
  },
  "name": "my-project",
  "meta": {},
  "originCacheRegion": "<string>",
  "nodeVersion": "24.x",
  "project": {
    "id": "<string>",
    "name": "<string>",
    "framework": "<string>"
  },
  "prebuilt": true,
  "readyState": "READY",
  "readySubstate": "STAGED",
  "regions": [\
    "sfo1"\
  ],
  "softDeletedByRetention": "true",
  "source": "cli",
  "target": null,
  "type": "LAMBDAS",
  "undeletedAt": 1540257589405,
  "url": "my-instant-deployment-3ij3cxz9qr.now.sh",
  "version": 2,
  "oidcTokenClaims": {
    "iss": "<string>",
    "sub": "<string>",
    "scope": "<string>",
    "aud": "<string>",
    "owner": "<string>",
    "owner_id": "<string>",
    "project": "<string>",
    "project_id": "<string>",
    "environment": "<string>",
    "plan": "<string>"
  },
  "connectBuildsEnabled": true,
  "connectConfigurationId": "<string>",
  "createdIn": "<string>",
  "crons": [\
    {\
      "schedule": "<string>",\
      "path": "<string>"\
    }\
  ],
  "functions": {},
  "monorepoManager": "<string>",
  "ownerId": "<string>",
  "passiveConnectConfigurationId": "<string>",
  "plan": "pro",
  "projectId": "<string>",
  "routes": [\
    {\
      "src": "<string>",\
      "dest": "<string>",\
      "headers": {},\
      "methods": [\
        "<string>"\
      ],\
      "continue": true,\
      "override": true,\
      "caseSensitive": true,\
      "check": true,\
      "important": true,\
      "status": 123,\
      "has": [\
        {\
          "type": "host",\
          "value": "<string>"\
        }\
      ],\
      "missing": [\
        {\
          "type": "host",\
          "value": "<string>"\
        }\
      ],\
      "mitigate": {\
        "action": "challenge"\
      },\
      "transforms": [\
        {\
          "type": "request.headers",\
          "op": "append",\
          "target": {\
            "key": "<string>"\
          },\
          "args": "<string>"\
        }\
      ],\
      "locale": {\
        "redirect": {},\
        "cookie": "<string>"\
      },\
      "middlewarePath": "<string>",\
      "middlewareRawSrc": [\
        "<string>"\
      ],\
      "middleware": 123\
    }\
  ],
  "gitRepo": {
    "namespace": "<string>",
    "projectId": 123,
    "type": "gitlab",
    "url": "<string>",
    "path": "<string>",
    "defaultBranch": "<string>",
    "name": "<string>",
    "private": true,
    "ownerType": "team"
  },
  "flags": {
    "definitions": {}
  },
  "microfrontends": {
    "isDefaultApp": true,
    "defaultAppProjectName": "<string>",
    "defaultRoute": "<string>",
    "groupIds": [\
      "<string>"\
    ]
  },
  "config": {
    "version": 123,
    "functionType": "fluid",
    "functionMemoryType": "standard",
    "functionTimeout": 123,
    "secureComputePrimaryRegion": "<string>",
    "secureComputeFallbackRegion": "<string>",
    "isUsingActiveCPU": true
  },
  "checks": {
    "deployment-alias": {
      "state": "succeeded",
      "startedAt": 123,
      "completedAt": 123
    }
  }
}
```

deployments

# Cancel a deployment

Copy page

This endpoint allows you to cancel a deployment which is currently building, by supplying its `id` in the URL.

Copy page

PATCH

/

v12

/

deployments

/

{id}

/

cancel

cancelDeployment

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.deployments.cancelDeployment({
    id: "dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd",
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
  "aliasAssignedAt": 123,
  "alwaysRefuseToBuild": true,
  "build": {
    "env": [\
      "<string>"\
    ]
  },
  "buildArtifactUrls": [\
    "<string>"\
  ],
  "builds": [\
    {\
      "use": "<string>",\
      "src": "<string>",\
      "config": {}\
    }\
  ],
  "env": [\
    "<string>"\
  ],
  "inspectorUrl": "<string>",
  "isInConcurrentBuildsQueue": true,
  "isInSystemBuildsQueue": true,
  "projectSettings": {
    "buildCommand": "<string>",
    "devCommand": "<string>",
    "framework": "blitzjs",
    "commandForIgnoringBuildStep": "<string>",
    "installCommand": "<string>",
    "outputDirectory": "<string>",
    "speedInsights": {
      "id": "<string>",
      "enabledAt": 123,
      "disabledAt": 123,
      "canceledAt": 123,
      "hasData": true,
      "paidAt": 123
    },
    "webAnalytics": {
      "id": "<string>",
      "disabledAt": 123,
      "canceledAt": 123,
      "enabledAt": 123,
      "hasData": true
    }
  },
  "readyStateReason": "<string>",
  "integrations": {
    "status": "skipped",
    "startedAt": 123,
    "completedAt": 123,
    "skippedAt": 123,
    "skippedBy": "<string>"
  },
  "images": {
    "sizes": [\
      123\
    ],
    "qualities": [\
      123\
    ],
    "domains": [\
      "<string>"\
    ],
    "remotePatterns": [\
      {\
        "protocol": "http",\
        "hostname": "<string>",\
        "port": "<string>",\
        "pathname": "<string>",\
        "search": "<string>"\
      }\
    ],
    "localPatterns": [\
      {\
        "pathname": "<string>",\
        "search": "<string>"\
      }\
    ],
    "minimumCacheTTL": 123,
    "formats": [\
      "image/avif"\
    ],
    "dangerouslyAllowSVG": true,
    "contentSecurityPolicy": "<string>",
    "contentDispositionType": "inline"
  },
  "alias": [],
  "aliasAssigned": true,
  "bootedAt": 123,
  "buildingAt": 123,
  "buildContainerFinishedAt": 123,
  "buildSkipped": true,
  "creator": {
    "uid": "96SnxkFiMyVKsK3pnoHfx3Hz",
    "username": "john-doe",
    "avatar": "<string>"
  },
  "initReadyAt": 123,
  "isFirstBranchDeployment": true,
  "lambdas": [\
    {\
      "id": "<string>",\
      "createdAt": 123,\
      "readyState": "BUILDING",\
      "entrypoint": "<string>",\
      "readyStateAt": 123,\
      "output": [\
        {\
          "path": "<string>",\
          "functionName": "<string>"\
        }\
      ]\
    }\
  ],
  "public": false,
  "ready": 123,
  "status": "BUILDING",
  "team": {
    "id": "<string>",
    "name": "<string>",
    "avatar": "<string>",
    "slug": "<string>"
  },
  "userAliases": [\
    "sub1.example.com",\
    "sub2.example.com"\
  ],
  "previewCommentsEnabled": false,
  "ttyBuildLogs": true,
  "customEnvironment": {
    "id": "<string>",
    "slug": "<string>",
    "type": "production",
    "description": "<string>",
    "branchMatcher": {
      "type": "endsWith",
      "pattern": "<string>"
    },
    "domains": [\
      {\
        "name": "<string>",\
        "apexName": "<string>",\
        "projectId": "<string>",\
        "redirect": "<string>",\
        "redirectStatusCode": 307,\
        "gitBranch": "<string>",\
        "customEnvironmentId": "<string>",\
        "updatedAt": 123,\
        "createdAt": 123,\
        "verified": true,\
        "verification": [\
          {\
            "type": "<string>",\
            "domain": "<string>",\
            "value": "<string>",\
            "reason": "<string>"\
          }\
        ]\
      }\
    ],
    "currentDeploymentAliases": [\
      "<string>"\
    ],
    "createdAt": 123,
    "updatedAt": 123
  },
  "oomReport": "out-of-memory",
  "id": "dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ",
  "aliasError": null,
  "aliasFinal": "<string>",
  "aliasWarning": {
    "code": "<string>",
    "message": "<string>",
    "link": "<string>",
    "action": "<string>"
  },
  "autoAssignCustomDomains": true,
  "automaticAliases": [\
    "<string>"\
  ],
  "buildErrorAt": 123,
  "checksState": "registered",
  "checksConclusion": "skipped",
  "createdAt": 1540257589405,
  "deletedAt": 1540257589405,
  "defaultRoute": "<string>",
  "canceledAt": 123,
  "errorCode": "<string>",
  "errorLink": "<string>",
  "errorMessage": "<string>",
  "errorStep": "<string>",
  "passiveRegions": [\
    "<string>"\
  ],
  "gitSource": {
    "type": "github",
    "repoId": "<string>",
    "ref": "<string>",
    "sha": "<string>",
    "prId": 123
  },
  "name": "my-project",
  "meta": {},
  "originCacheRegion": "<string>",
  "nodeVersion": "24.x",
  "project": {
    "id": "<string>",
    "name": "<string>",
    "framework": "<string>"
  },
  "prebuilt": true,
  "readyState": "READY",
  "readySubstate": "STAGED",
  "regions": [\
    "sfo1"\
  ],
  "softDeletedByRetention": "true",
  "source": "cli",
  "target": null,
  "type": "LAMBDAS",
  "undeletedAt": 1540257589405,
  "url": "my-instant-deployment-3ij3cxz9qr.now.sh",
  "version": 2,
  "oidcTokenClaims": {
    "iss": "<string>",
    "sub": "<string>",
    "scope": "<string>",
    "aud": "<string>",
    "owner": "<string>",
    "owner_id": "<string>",
    "project": "<string>",
    "project_id": "<string>",
    "environment": "<string>",
    "plan": "<string>"
  },
  "connectBuildsEnabled": true,
  "connectConfigurationId": "<string>",
  "createdIn": "<string>",
  "crons": [\
    {\
      "schedule": "<string>",\
      "path": "<string>"\
    }\
  ],
  "functions": {},
  "monorepoManager": "<string>",
  "ownerId": "<string>",
  "passiveConnectConfigurationId": "<string>",
  "plan": "pro",
  "projectId": "<string>",
  "routes": [\
    {\
      "src": "<string>",\
      "dest": "<string>",\
      "headers": {},\
      "methods": [\
        "<string>"\
      ],\
      "continue": true,\
      "override": true,\
      "caseSensitive": true,\
      "check": true,\
      "important": true,\
      "status": 123,\
      "has": [\
        {\
          "type": "host",\
          "value": "<string>"\
        }\
      ],\
      "missing": [\
        {\
          "type": "host",\
          "value": "<string>"\
        }\
      ],\
      "mitigate": {\
        "action": "challenge"\
      },\
      "transforms": [\
        {\
          "type": "request.headers",\
          "op": "append",\
          "target": {\
            "key": "<string>"\
          },\
          "args": "<string>"\
        }\
      ],\
      "locale": {\
        "redirect": {},\
        "cookie": "<string>"\
      },\
      "middlewarePath": "<string>",\
      "middlewareRawSrc": [\
        "<string>"\
      ],\
      "middleware": 123\
    }\
  ],
  "gitRepo": {
    "namespace": "<string>",
    "projectId": 123,
    "type": "gitlab",
    "url": "<string>",
    "path": "<string>",
    "defaultBranch": "<string>",
    "name": "<string>",
    "private": true,
    "ownerType": "team"
  },
  "flags": {
    "definitions": {}
  },
  "microfrontends": {
    "isDefaultApp": true,
    "defaultAppProjectName": "<string>",
    "defaultRoute": "<string>",
    "groupIds": [\
      "<string>"\
    ]
  },
  "config": {
    "version": 123,
    "functionType": "fluid",
    "functionMemoryType": "standard",
    "functionTimeout": 123,
    "secureComputePrimaryRegion": "<string>",
    "secureComputeFallbackRegion": "<string>",
    "isUsingActiveCPU": true
  },
  "checks": {
    "deployment-alias": {
      "state": "succeeded",
      "startedAt": 123,
      "completedAt": 123
    }
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#parameter-id)

id

string

required

The unique identifier of the deployment.

Example:

`"dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

The private deployment representation of a Deployment.

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-build)

build

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-build-env)

build.env

string\[\]

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-env)

env

string\[\]

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-inspector-url)

inspectorUrl

string \| null

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-is-in-concurrent-builds-queue)

isInConcurrentBuildsQueue

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-is-in-system-builds-queue)

isInSystemBuildsQueue

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-project-settings)

projectSettings

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-project-settings-build-command)

projectSettings.buildCommand

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-project-settings-dev-command)

projectSettings.devCommand

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-project-settings-framework)

projectSettings.framework

enum<string> \| null

Available options:

`blitzjs`,

`nextjs`,

`gatsby`,

`remix`,

`react-router`,

`astro`,

`hexo`,

`eleventy`,

`docusaurus-2`,

`docusaurus`,

`preact`,

`solidstart-1`,

`solidstart`,

`dojo`,

`ember`,

`vue`,

`scully`,

`ionic-angular`,

`angular`,

`polymer`,

`svelte`,

`sveltekit`,

`sveltekit-1`,

`ionic-react`,

`create-react-app`,

`gridsome`,

`umijs`,

`sapper`,

`saber`,

`stencil`,

`nuxtjs`,

`redwoodjs`,

`hugo`,

`jekyll`,

`brunch`,

`middleman`,

`zola`,

`hydrogen`,

`vite`,

`tanstack-start`,

`vitepress`,

`vuepress`,

`parcel`,

`fastapi`,

`flask`,

`fasthtml`,

`sanity-v3`,

`sanity`,

`storybook`,

`nitro`,

`hono`,

`express`,

`h3`,

`nestjs`,

`elysia`,

`fastify`,

`xmcp`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-project-settings-command-for-ignoring-build-step)

projectSettings.commandForIgnoringBuildStep

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-project-settings-install-command)

projectSettings.installCommand

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-project-settings-output-directory)

projectSettings.outputDirectory

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-project-settings-speed-insights)

projectSettings.speedInsights

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-project-settings-web-analytics)

projectSettings.webAnalytics

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-alias-assigned)

aliasAssigned

boolean

required

A boolean that will be true when the aliases from the alias property were assigned successfully

Example:

`true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-booted-at)

bootedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-building-at)

buildingAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-build-skipped)

buildSkipped

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-creator)

creator

object

required

Information about the deployment creator

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-creator-uid)

creator.uid

string

required

The ID of the user that created the deployment

Example:

`"96SnxkFiMyVKsK3pnoHfx3Hz"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-creator-username)

creator.username

string

The username of the user that created the deployment

Example:

`"john-doe"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-creator-avatar)

creator.avatar

string

The avatar of the user that created the deployment

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-public)

public

boolean

required

A boolean representing if the deployment is public or not. By default this is `false`

Example:

`false`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-status)

status

enum<string>

required

Available options:

`BUILDING`,

`ERROR`,

`INITIALIZING`,

`QUEUED`,

`READY`,

`CANCELED`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-id)

id

string

required

A string holding the unique ID of the deployment

Example:

`"dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-created-at)

createdAt

number

required

A number containing the date when the deployment was created in milliseconds

Example:

`1540257589405`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-name)

name

string

required

The name of the project associated with the deployment at the time that the deployment was created

Example:

`"my-project"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-meta)

meta

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-meta-key)

meta.{key}

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-ready-state)

readyState

enum<string>

required

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

Available options:

`BUILDING`,

`ERROR`,

`INITIALIZING`,

`QUEUED`,

`READY`,

`CANCELED`

Example:

`"READY"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-regions)

regions

string\[\]

required

The regions the deployment exists in

Example:

```
["sfo1"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-type)

type

enum<string>

required

Available options:

`LAMBDAS`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-url)

url

string

required

A string with the unique URL of the deployment

Example:

`"my-instant-deployment-3ij3cxz9qr.now.sh"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-version)

version

enum<number>

required

The platform version that was used to create the deployment.

Available options:

`2`

Example:

`2`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-created-in)

createdIn

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-owner-id)

ownerId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-plan)

plan

enum<string>

required

Available options:

`pro`,

`enterprise`,

`hobby`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-project-id)

projectId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes)

routes

object\[\] \| null

required

- Option 1

- Option 2

- Option 3


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-src)

src

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-dest)

dest

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-headers)

headers

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-methods)

methods

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-continue)

continue

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-override)

override

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-case-sensitive)

caseSensitive

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-check)

check

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-important)

important

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-status)

status

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-has)

has

object\[\]

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-missing)

missing

object\[\]

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-mitigate)

mitigate

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-transforms)

transforms

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-locale)

locale

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-middleware-path)

middlewarePath

string

A middleware key within the `output` key under the build result. Overrides a `middleware` definition.

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-middleware-raw-src)

middlewareRawSrc

string\[\]

The original middleware matchers.

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-routes-middleware)

middleware

number

A middleware index in the `middleware` key under the build result

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-alias-assigned-at)

aliasAssignedAt

numberboolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-always-refuse-to-build)

alwaysRefuseToBuild

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-build-artifact-urls)

buildArtifactUrls

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-builds)

builds

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-builds-use)

use

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-builds-src)

src

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-builds-config)

config

object

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-ready-state-reason)

readyStateReason

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-integrations)

integrations

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-integrations-status)

integrations.status

enum<string>

required

Available options:

`skipped`,

`pending`,

`ready`,

`error`,

`timeout`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-integrations-started-at)

integrations.startedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-integrations-completed-at)

integrations.completedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-integrations-skipped-at)

integrations.skippedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-integrations-skipped-by)

integrations.skippedBy

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-images)

images

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-images-sizes)

images.sizes

number\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-images-qualities)

images.qualities

number\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-images-domains)

images.domains

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-images-remote-patterns)

images.remotePatterns

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-images-local-patterns)

images.localPatterns

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-images-minimum-cache-ttl)

images.minimumCacheTTL

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-images-formats)

images.formats

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-images-dangerously-allow-svg)

images.dangerouslyAllowSVG

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-images-content-security-policy)

images.contentSecurityPolicy

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-images-content-disposition-type)

images.contentDispositionType

enum<string>

Available options:

`inline`,

`attachment`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-alias)

alias

string\[\]

A list of all the aliases (default aliases, staging aliases and production aliases) that were assigned upon deployment creation

Example:

```
[]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-build-container-finished-at)

buildContainerFinishedAt

number

Since April 2025 it necessary for On-Demand Concurrency Minutes calculation

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-init-ready-at)

initReadyAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-is-first-branch-deployment)

isFirstBranchDeployment

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-lambdas)

lambdas

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-lambdas-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-lambdas-output)

output

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-lambdas-created-at)

createdAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-lambdas-ready-state)

readyState

enum<string>

Available options:

`BUILDING`,

`ERROR`,

`INITIALIZING`,

`READY`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-lambdas-entrypoint)

entrypoint

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-lambdas-ready-state-at)

readyStateAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-ready)

ready

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-team)

team

object

The team that owns the deployment if any

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-team-id)

team.id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-team-name)

team.name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-team-slug)

team.slug

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-team-avatar)

team.avatar

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-user-aliases)

userAliases

string\[\]

An array of domains that were provided by the user when creating the Deployment.

Example:

```
["sub1.example.com", "sub2.example.com"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-preview-comments-enabled)

previewCommentsEnabled

boolean

Whether or not preview comments are enabled for the deployment

Example:

`false`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-tty-build-logs)

ttyBuildLogs

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-custom-environment)

customEnvironment

object

If the deployment was created using a Custom Environment, then this property contains information regarding the environment used.

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-custom-environment-id)

customEnvironment.id

string

required

Unique identifier for the custom environment (format: env\_\*)

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-custom-environment-slug)

customEnvironment.slug

string

required

URL-friendly name of the environment

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-custom-environment-type)

customEnvironment.type

enum<string>

required

The type of environment (production, preview, or development)

Available options:

`production`,

`preview`,

`development`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-custom-environment-created-at)

customEnvironment.createdAt

number

required

Timestamp when the environment was created

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-custom-environment-updated-at)

customEnvironment.updatedAt

number

required

Timestamp when the environment was last updated

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-custom-environment-description)

customEnvironment.description

string

Optional description of the environment's purpose

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-custom-environment-branch-matcher)

customEnvironment.branchMatcher

object

Configuration for matching git branches to this environment

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-custom-environment-domains)

customEnvironment.domains

object\[\]

List of domains associated with this environment

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-custom-environment-current-deployment-aliases)

customEnvironment.currentDeploymentAliases

string\[\]

List of aliases for the current deployment

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-oom-report)

oomReport

enum<string>

Available options:

`out-of-memory`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-alias-error)

aliasError

object \| null

An object that will contain a `code` and a `message` when the aliasing fails, otherwise the value will be `null`

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-alias-error-code)

aliasError.code

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-alias-error-message)

aliasError.message

string

required

Example:

`null`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-alias-final)

aliasFinal

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-alias-warning)

aliasWarning

object \| null

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-alias-warning-code)

aliasWarning.code

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-alias-warning-message)

aliasWarning.message

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-alias-warning-link)

aliasWarning.link

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-alias-warning-action)

aliasWarning.action

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-auto-assign-custom-domains)

autoAssignCustomDomains

boolean

applies to custom domains only, defaults to `true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-automatic-aliases)

automaticAliases

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-build-error-at)

buildErrorAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-checks-state)

checksState

enum<string>

Available options:

`registered`,

`running`,

`completed`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-checks-conclusion)

checksConclusion

enum<string>

Available options:

`skipped`,

`succeeded`,

`failed`,

`canceled`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-deleted-at)

deletedAt

number \| null

A number containing the date when the deployment was deleted at milliseconds

Example:

`1540257589405`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-default-route)

defaultRoute

string

Computed field that is only available for deployments with a microfrontend configuration.

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-canceled-at)

canceledAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-error-code)

errorCode

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-error-link)

errorLink

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-error-message)

errorMessage

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-error-step)

errorStep

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-passive-regions)

passiveRegions

string\[\]

Since November 2023 this field defines a set of regions that we will deploy the lambda to passively Lambdas will be deployed to these regions but only invoked if all of the primary `regions` are marked as out of service

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-source)

gitSource

object

- Option 1

- Option 2

- Option 3

- Option 4

- Option 5

- Option 6

- Option 7

- Option 8

- Option 9

- Option 10

- Option 11

- Option 12

- Option 13

- Option 14

- Option 15


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-source-type)

gitSource.type

enum<string>

required

Available options:

`github`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-source-repo-id)

gitSource.repoId

stringnumber

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-source-ref)

gitSource.ref

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-source-sha)

gitSource.sha

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-source-pr-id)

gitSource.prId

number \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-origin-cache-region)

originCacheRegion

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-node-version)

nodeVersion

enum<string>

If set it overrides the `projectSettings.nodeVersion` for this deployment.

Available options:

`24.x`,

`22.x`,

`20.x`,

`18.x`,

`16.x`,

`14.x`,

`12.x`,

`10.x`,

`8.10.x`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-project)

project

object

The public project information associated with the deployment.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-project-id)

project.id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-project-name)

project.name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-project-framework)

project.framework

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-prebuilt)

prebuilt

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-ready-substate)

readySubstate

enum<string>

Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of having production traffic gradually transitioned. - PROMOTED: has seen production traffic

Available options:

`STAGED`,

`ROLLING`,

`PROMOTED`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-soft-deleted-by-retention)

softDeletedByRetention

boolean

flag to indicate if the deployment was deleted by retention policy

Example:

`"true"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-source)

source

enum<string>

Where was the deployment created from

Available options:

`api-trigger-git-deploy`,

`cli`,

`clone/repo`,

`git`,

`import`,

`import/repo`,

`redeploy`,

`v0-web`

Example:

`"cli"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-target)

target

enum<string> \| null

If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.

Available options:

`staging`,

`production`

Example:

`null`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-undeleted-at)

undeletedAt

number

A number containing the date when the deployment was undeleted at milliseconds

Example:

`1540257589405`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-oidc-token-claims)

oidcTokenClaims

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-oidc-token-claims-iss)

oidcTokenClaims.iss

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-oidc-token-claims-sub)

oidcTokenClaims.sub

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-oidc-token-claims-scope)

oidcTokenClaims.scope

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-oidc-token-claims-aud)

oidcTokenClaims.aud

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-oidc-token-claims-owner)

oidcTokenClaims.owner

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-oidc-token-claims-owner-id)

oidcTokenClaims.owner\_id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-oidc-token-claims-project)

oidcTokenClaims.project

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-oidc-token-claims-project-id)

oidcTokenClaims.project\_id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-oidc-token-claims-environment)

oidcTokenClaims.environment

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-oidc-token-claims-plan)

oidcTokenClaims.plan

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-connect-builds-enabled)

connectBuildsEnabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-connect-configuration-id)

connectConfigurationId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-crons)

crons

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-crons-schedule)

schedule

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-crons-path)

path

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-functions)

functions

object \| null

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-functions-key)

functions.{key}

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-monorepo-manager)

monorepoManager

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-passive-connect-configuration-id)

passiveConnectConfigurationId

string

Since November 2023 this field defines a Secure Compute network that will only be used to deploy passive lambdas to (as in passiveRegions)

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-repo)

gitRepo

object

- Option 1

- Option 2

- Option 3


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-repo-namespace)

gitRepo.namespace

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-repo-project-id)

gitRepo.projectId

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-repo-type)

gitRepo.type

enum<string>

required

Available options:

`gitlab`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-repo-url)

gitRepo.url

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-repo-path)

gitRepo.path

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-repo-default-branch)

gitRepo.defaultBranch

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-repo-name)

gitRepo.name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-repo-private)

gitRepo.private

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-git-repo-owner-type)

gitRepo.ownerType

enum<string>

required

Available options:

`team`,

`user`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-flags)

flags

objectobject\[\]

Flags defined in the Build Output API, used by this deployment. Primarily used by the Toolbar to know about the used flags.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-flags-definitions)

flags.definitions

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-microfrontends)

microfrontends

object

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-microfrontends-default-app-project-name)

microfrontends.defaultAppProjectName

string

required

The project name of the default app of this deployment's microfrontends group.

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-microfrontends-group-ids)

microfrontends.groupIds

string\[\]

required

The group of microfrontends that this project belongs to. Each microfrontend project must belong to a microfrontends group that is the set of microfrontends that are used together.

Required array length: `2` elements

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-microfrontends-is-default-app)

microfrontends.isDefaultApp

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-microfrontends-default-route)

microfrontends.defaultRoute

string

A path that is used to take screenshots and as the default path in preview links when a domain for this microfrontend is shown in the UI.

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-config)

config

object

Since February 2025 the configuration must include snapshot data at the time of deployment creation to capture properties for the /deployments/:id/config endpoint utilized for displaying Deployment Configuration on the frontend This is optional because older deployments may not have this data captured

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-config-function-type)

config.functionType

enum<string>

required

Available options:

`fluid`,

`standard`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-config-function-memory-type)

config.functionMemoryType

enum<string>

required

Available options:

`standard`,

`standard_legacy`,

`performance`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-config-function-timeout)

config.functionTimeout

number \| null

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-config-secure-compute-primary-region)

config.secureComputePrimaryRegion

string \| null

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-config-secure-compute-fallback-region)

config.secureComputeFallbackRegion

string \| null

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-config-version)

config.version

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-config-is-using-active-cpu)

config.isUsingActiveCPU

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-checks)

checks

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment#response-checks-deployment-alias)

checks.deployment-alias

object

required

Condensed check data. Retrieve individual check and check run data using api-checks v2 routes.

Show child attributes

[Create a new deployment](https://vercel.com/docs/rest-api/reference/endpoints/deployments/create-a-new-deployment) [Upload Deployment Files](https://vercel.com/docs/rest-api/reference/endpoints/deployments/upload-deployment-files)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.