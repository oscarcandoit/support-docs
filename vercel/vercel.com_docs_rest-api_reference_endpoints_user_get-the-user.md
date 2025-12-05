---
url: "https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user"
title: "Get the User - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

user

Get the User

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


getAuthUser

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.user.getAuthUser();

  console.log(result);
}

run();
```

200

400

401

403

409

Copy

Ask AI

```
{
  "user": {
    "createdAt": 1630748523395,
    "softBlock": {
      "blockedAt": 123,
      "reason": "SUBSCRIPTION_CANCELED",
      "blockedDueToOverageType": "analyticsUsage"
    },
    "billing": {},
    "resourceConfig": {
      "nodeType": "<string>",
      "concurrentBuilds": 123,
      "elasticConcurrencyEnabled": true,
      "buildEntitlements": {
        "enhancedBuilds": true
      },
      "buildQueue": {
        "configuration": "SKIP_NAMESPACE_QUEUE"
      },
      "awsAccountType": "<string>",
      "awsAccountIds": [\
        "<string>"\
      ],
      "cfZoneName": "<string>",
      "imageOptimizationType": "<string>",
      "edgeConfigs": 123,
      "edgeConfigSize": 123,
      "edgeFunctionMaxSizeBytes": 123,
      "edgeFunctionExecutionTimeoutMs": 123,
      "serverlessFunctionMaxMemorySize": 123,
      "kvDatabases": 123,
      "postgresDatabases": 123,
      "blobStores": 123,
      "integrationStores": 123,
      "cronJobs": 123,
      "cronJobsPerProject": 123,
      "microfrontendGroupsPerTeam": 123,
      "microfrontendProjectsPerGroup": 123,
      "flagsExplorerOverridesThreshold": 123,
      "flagsExplorerUnlimitedOverrides": true,
      "customEnvironmentsPerProject": 123,
      "buildMachine": {
        "purchaseType": "enhanced",
        "isDefaultBuildMachine": true,
        "cores": 123,
        "memory": 123
      },
      "security": {
        "customRules": 123,
        "ipBlocks": 123,
        "ipBypass": 123,
        "rateLimit": 123
      }
    },
    "stagingPrefix": "<string>",
    "activeDashboardViews": [\
      {\
        "scopeId": "<string>",\
        "viewPreference": "list",\
        "favoritesViewPreference": "open",\
        "recentsViewPreference": "open"\
      }\
    ],
    "importFlowGitNamespace": "<string>",
    "importFlowGitNamespaceId": "<string>",
    "importFlowGitProvider": "gitlab",
    "preferredScopesAndGitNamespaces": [\
      {\
        "scopeId": "<string>",\
        "gitNamespaceId": "<string>"\
      }\
    ],
    "dismissedToasts": [\
      {\
        "name": "<string>",\
        "dismissals": [\
          {\
            "scopeId": "<string>",\
            "createdAt": 123\
          }\
        ]\
      }\
    ],
    "favoriteProjectsAndSpaces": [\
      {\
        "teamId": "<string>",\
        "projectId": "<string>"\
      }\
    ],
    "hasTrialAvailable": true,
    "remoteCaching": {
      "enabled": true
    },
    "dataCache": {
      "excessBillingEnabled": true
    },
    "featureBlocks": {
      "webAnalytics": {
        "blockedFrom": 123,
        "blockedUntil": 123,
        "isCurrentlyBlocked": true
      }
    },
    "id": "AEIIDYVk59zbFF2Sxfyxxmua",
    "email": "me@example.com",
    "name": "John Doe",
    "username": "jdoe",
    "avatar": "22cb30c85ff45ac4c72de8981500006b28114aa1",
    "defaultTeamId": "<string>"
  }
}
```

user

# Get the User

Copy page

Retrieves information related to the currently authenticated User.

Copy page

GET

/

v2

/

user

getAuthUser

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.user.getAuthUser();

  console.log(result);
}

run();
```

200

400

401

403

409

Copy

Ask AI

```
{
  "user": {
    "createdAt": 1630748523395,
    "softBlock": {
      "blockedAt": 123,
      "reason": "SUBSCRIPTION_CANCELED",
      "blockedDueToOverageType": "analyticsUsage"
    },
    "billing": {},
    "resourceConfig": {
      "nodeType": "<string>",
      "concurrentBuilds": 123,
      "elasticConcurrencyEnabled": true,
      "buildEntitlements": {
        "enhancedBuilds": true
      },
      "buildQueue": {
        "configuration": "SKIP_NAMESPACE_QUEUE"
      },
      "awsAccountType": "<string>",
      "awsAccountIds": [\
        "<string>"\
      ],
      "cfZoneName": "<string>",
      "imageOptimizationType": "<string>",
      "edgeConfigs": 123,
      "edgeConfigSize": 123,
      "edgeFunctionMaxSizeBytes": 123,
      "edgeFunctionExecutionTimeoutMs": 123,
      "serverlessFunctionMaxMemorySize": 123,
      "kvDatabases": 123,
      "postgresDatabases": 123,
      "blobStores": 123,
      "integrationStores": 123,
      "cronJobs": 123,
      "cronJobsPerProject": 123,
      "microfrontendGroupsPerTeam": 123,
      "microfrontendProjectsPerGroup": 123,
      "flagsExplorerOverridesThreshold": 123,
      "flagsExplorerUnlimitedOverrides": true,
      "customEnvironmentsPerProject": 123,
      "buildMachine": {
        "purchaseType": "enhanced",
        "isDefaultBuildMachine": true,
        "cores": 123,
        "memory": 123
      },
      "security": {
        "customRules": 123,
        "ipBlocks": 123,
        "ipBypass": 123,
        "rateLimit": 123
      }
    },
    "stagingPrefix": "<string>",
    "activeDashboardViews": [\
      {\
        "scopeId": "<string>",\
        "viewPreference": "list",\
        "favoritesViewPreference": "open",\
        "recentsViewPreference": "open"\
      }\
    ],
    "importFlowGitNamespace": "<string>",
    "importFlowGitNamespaceId": "<string>",
    "importFlowGitProvider": "gitlab",
    "preferredScopesAndGitNamespaces": [\
      {\
        "scopeId": "<string>",\
        "gitNamespaceId": "<string>"\
      }\
    ],
    "dismissedToasts": [\
      {\
        "name": "<string>",\
        "dismissals": [\
          {\
            "scopeId": "<string>",\
            "createdAt": 123\
          }\
        ]\
      }\
    ],
    "favoriteProjectsAndSpaces": [\
      {\
        "teamId": "<string>",\
        "projectId": "<string>"\
      }\
    ],
    "hasTrialAvailable": true,
    "remoteCaching": {
      "enabled": true
    },
    "dataCache": {
      "excessBillingEnabled": true
    },
    "featureBlocks": {
      "webAnalytics": {
        "blockedFrom": 123,
        "blockedUntil": 123,
        "isCurrentlyBlocked": true
      }
    },
    "id": "AEIIDYVk59zbFF2Sxfyxxmua",
    "email": "me@example.com",
    "name": "John Doe",
    "username": "jdoe",
    "avatar": "22cb30c85ff45ac4c72de8981500006b28114aa1",
    "defaultTeamId": "<string>"
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Response

200

application/json

Successful response.

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user)

user

object

required

Data for the currently authenticated User.

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-created-at)

user.createdAt

number

required

UNIX timestamp (in milliseconds) when the User account was created.

Example:

`1630748523395`

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-soft-block)

user.softBlock

object \| null

required

When the User account has been "soft blocked", this property will contain the date when the restriction was enacted, and the identifier for why.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-billing)

user.billing

object \| null

required

An object containing billing infomation associated with the User account.

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-resource-config)

user.resourceConfig

object

required

An object containing infomation related to the amount of platform resources may be allocated to the User account.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-staging-prefix)

user.stagingPrefix

string

required

Prefix that will be used in the URL of "Preview" deployments created by the User account.

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-has-trial-available)

user.hasTrialAvailable

boolean

required

Whether the user has a trial available for a paid plan subscription.

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-id)

user.id

string

required

The User's unique identifier.

Example:

`"AEIIDYVk59zbFF2Sxfyxxmua"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-email)

user.email

string

required

Email address associated with the User account.

Example:

`"me@example.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-name)

user.name

string \| null

required

Name associated with the User account, or `null` if none has been provided.

Example:

`"John Doe"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-username)

user.username

string

required

Unique username associated with the User account.

Example:

`"jdoe"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-avatar)

user.avatar

string \| null

required

SHA1 hash of the avatar for the User account. Can be used in conjuction with the ... endpoint to retrieve the avatar image.

Example:

`"22cb30c85ff45ac4c72de8981500006b28114aa1"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-default-team-id)

user.defaultTeamId

string \| null

required

The user's default team.

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-active-dashboard-views)

user.activeDashboardViews

object\[\]

set of dashboard view preferences (cards or list) per scopeId

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-import-flow-git-namespace)

user.importFlowGitNamespace

stringnumber

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-import-flow-git-namespace-id)

user.importFlowGitNamespaceId

stringnumber

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-import-flow-git-provider)

user.importFlowGitProvider

enum<string> \| null

Available options:

`gitlab`,

`bitbucket`,

`github`,

`github-limited`,

`github-custom-host`

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-preferred-scopes-and-git-namespaces)

user.preferredScopesAndGitNamespaces

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-dismissed-toasts)

user.dismissedToasts

object\[\]

A record of when, under a certain scopeId, a toast was dismissed

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-favorite-projects-and-spaces)

user.favoriteProjectsAndSpaces

object\[\]

A list of projects and spaces across teams that a user has marked as a favorite.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-remote-caching)

user.remoteCaching

object

remote caching settings

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-data-cache)

user.dataCache

object

data cache settings

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/user/get-the-user#response-user-feature-blocks)

user.featureBlocks

object

Feature blocks for the user

Show child attributes

[List User Events](https://vercel.com/docs/rest-api/reference/endpoints/user/list-user-events) [Delete User Account](https://vercel.com/docs/rest-api/reference/endpoints/user/delete-user-account)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.