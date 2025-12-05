---
url: "https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams"
title: "List all teams - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

teams

List all teams

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

- security

- teams

  - [GET\\
    \\
    List team members](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members)
  - [POST\\
    \\
    Invite a user](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user)
  - [POST\\
    \\
    Request access to a team](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team)
  - [GET\\
    \\
    Get access request status](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status)
  - [POST\\
    \\
    Join a team](https://vercel.com/docs/rest-api/reference/endpoints/teams/join-a-team)
  - [DEL\\
    \\
    Remove a Team Member](https://vercel.com/docs/rest-api/reference/endpoints/teams/remove-a-team-member)
  - [PATCH\\
    \\
    Update a Team Member](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member)
  - [GET\\
    \\
    Get a Team](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team)
  - [PATCH\\
    \\
    Update a Team](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team)
  - [GET\\
    \\
    List all teams](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams)
  - [POST\\
    \\
    Create a Team](https://vercel.com/docs/rest-api/reference/endpoints/teams/create-a-team)
  - [DEL\\
    \\
    Delete a Team](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team)
  - [DEL\\
    \\
    Delete a Team invite code](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team-invite-code)
- webhooks

- aliases

- certs


getTeams

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.getTeams({
    limit: 20,
    since: 1540095775951,
    until: 1540095775951,
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
{
  "teams": [\
    {\
      "connect": {\
        "enabled": true\
      },\
      "creatorId": "R6efeCJQ2HKXywuasPDc0fOWB",\
      "updatedAt": 1611796915677,\
      "emailDomain": "example.com",\
      "saml": {\
        "connection": {\
          "type": "OktaSAML",\
          "status": "linked",\
          "state": "active",\
          "connectedAt": 1611796915677,\
          "lastReceivedWebhookEvent": 1611796915677\
        },\
        "directory": {\
          "type": "OktaSAML",\
          "state": "active",\
          "connectedAt": 1611796915677,\
          "lastReceivedWebhookEvent": 1611796915677\
        },\
        "enforced": true,\
        "defaultRedirectUri": "vercel.com",\
        "roles": {}\
      },\
      "inviteCode": "hasihf9e89",\
      "description": "Our mission is to make cloud computing accessible to everyone.",\
      "defaultRoles": {\
        "teamRoles": [\
          "OWNER"\
        ],\
        "teamPermissions": [\
          "IntegrationManager"\
        ]\
      },\
      "stagingPrefix": "<string>",\
      "resourceConfig": {\
        "concurrentBuilds": 123,\
        "elasticConcurrencyEnabled": true,\
        "edgeConfigSize": 123,\
        "edgeConfigs": 123,\
        "kvDatabases": 123,\
        "blobStores": 123,\
        "postgresDatabases": 123,\
        "buildEntitlements": {\
          "enhancedBuilds": true\
        }\
      },\
      "previewDeploymentSuffix": "example.dev",\
      "platform": true,\
      "disableHardAutoBlocks": 123,\
      "remoteCaching": {\
        "enabled": true\
      },\
      "defaultDeploymentProtection": {\
        "passwordProtection": {\
          "deploymentType": "<string>"\
        },\
        "ssoProtection": {\
          "deploymentType": "<string>"\
        }\
      },\
      "defaultExpirationSettings": {\
        "expirationDays": 123,\
        "expirationDaysProduction": 123,\
        "expirationDaysCanceled": 123,\
        "expirationDaysErrored": 123,\
        "deploymentsToKeep": 123\
      },\
      "enablePreviewFeedback": "default",\
      "enableProductionFeedback": "default",\
      "sensitiveEnvironmentVariablePolicy": "default",\
      "hideIpAddresses": true,\
      "hideIpAddressesInLogDrains": true,\
      "ipBuckets": [\
        {\
          "bucket": "<string>",\
          "supportUntil": 123\
        }\
      ],\
      "id": "team_nllPyCtREAqxxdyFKbbMDlxd",\
      "slug": "my-team",\
      "name": "My Team",\
      "avatar": "6eb07268bcfadd309905ffb1579354084c24655c",\
      "membership": {\
        "uid": "<string>",\
        "entitlements": [\
          {\
            "entitlement": "<string>"\
          }\
        ],\
        "teamId": "<string>",\
        "confirmed": true,\
        "accessRequestedAt": 123,\
        "role": "OWNER",\
        "teamRoles": [\
          "OWNER"\
        ],\
        "teamPermissions": [\
          "IntegrationManager"\
        ],\
        "createdAt": 123,\
        "created": 123,\
        "joinedFrom": {\
          "origin": "link",\
          "commitId": "<string>",\
          "repoId": "<string>",\
          "repoPath": "<string>",\
          "gitUserId": "<string>",\
          "gitUserLogin": "<string>",\
          "ssoUserId": "<string>",\
          "ssoConnectedAt": 123,\
          "idpUserId": "<string>",\
          "dsyncUserId": "<string>",\
          "dsyncConnectedAt": 123\
        }\
      },\
      "createdAt": 1630748523395\
    }\
  ],
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  }
}
```

teams

# List all teams

Copy page

Get a paginated list of all the Teams the authenticated User is a member of.

Copy page

GET

/

v2

/

teams

getTeams

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.getTeams({
    limit: 20,
    since: 1540095775951,
    until: 1540095775951,
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
{
  "teams": [\
    {\
      "connect": {\
        "enabled": true\
      },\
      "creatorId": "R6efeCJQ2HKXywuasPDc0fOWB",\
      "updatedAt": 1611796915677,\
      "emailDomain": "example.com",\
      "saml": {\
        "connection": {\
          "type": "OktaSAML",\
          "status": "linked",\
          "state": "active",\
          "connectedAt": 1611796915677,\
          "lastReceivedWebhookEvent": 1611796915677\
        },\
        "directory": {\
          "type": "OktaSAML",\
          "state": "active",\
          "connectedAt": 1611796915677,\
          "lastReceivedWebhookEvent": 1611796915677\
        },\
        "enforced": true,\
        "defaultRedirectUri": "vercel.com",\
        "roles": {}\
      },\
      "inviteCode": "hasihf9e89",\
      "description": "Our mission is to make cloud computing accessible to everyone.",\
      "defaultRoles": {\
        "teamRoles": [\
          "OWNER"\
        ],\
        "teamPermissions": [\
          "IntegrationManager"\
        ]\
      },\
      "stagingPrefix": "<string>",\
      "resourceConfig": {\
        "concurrentBuilds": 123,\
        "elasticConcurrencyEnabled": true,\
        "edgeConfigSize": 123,\
        "edgeConfigs": 123,\
        "kvDatabases": 123,\
        "blobStores": 123,\
        "postgresDatabases": 123,\
        "buildEntitlements": {\
          "enhancedBuilds": true\
        }\
      },\
      "previewDeploymentSuffix": "example.dev",\
      "platform": true,\
      "disableHardAutoBlocks": 123,\
      "remoteCaching": {\
        "enabled": true\
      },\
      "defaultDeploymentProtection": {\
        "passwordProtection": {\
          "deploymentType": "<string>"\
        },\
        "ssoProtection": {\
          "deploymentType": "<string>"\
        }\
      },\
      "defaultExpirationSettings": {\
        "expirationDays": 123,\
        "expirationDaysProduction": 123,\
        "expirationDaysCanceled": 123,\
        "expirationDaysErrored": 123,\
        "deploymentsToKeep": 123\
      },\
      "enablePreviewFeedback": "default",\
      "enableProductionFeedback": "default",\
      "sensitiveEnvironmentVariablePolicy": "default",\
      "hideIpAddresses": true,\
      "hideIpAddressesInLogDrains": true,\
      "ipBuckets": [\
        {\
          "bucket": "<string>",\
          "supportUntil": 123\
        }\
      ],\
      "id": "team_nllPyCtREAqxxdyFKbbMDlxd",\
      "slug": "my-team",\
      "name": "My Team",\
      "avatar": "6eb07268bcfadd309905ffb1579354084c24655c",\
      "membership": {\
        "uid": "<string>",\
        "entitlements": [\
          {\
            "entitlement": "<string>"\
          }\
        ],\
        "teamId": "<string>",\
        "confirmed": true,\
        "accessRequestedAt": 123,\
        "role": "OWNER",\
        "teamRoles": [\
          "OWNER"\
        ],\
        "teamPermissions": [\
          "IntegrationManager"\
        ],\
        "createdAt": 123,\
        "created": 123,\
        "joinedFrom": {\
          "origin": "link",\
          "commitId": "<string>",\
          "repoId": "<string>",\
          "repoPath": "<string>",\
          "gitUserId": "<string>",\
          "gitUserLogin": "<string>",\
          "ssoUserId": "<string>",\
          "ssoConnectedAt": 123,\
          "idpUserId": "<string>",\
          "dsyncUserId": "<string>",\
          "dsyncConnectedAt": 123\
        }\
      },\
      "createdAt": 1630748523395\
    }\
  ],
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#parameter-limit)

limit

number

Maximum number of Teams which may be returned.

Example:

`20`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#parameter-since)

since

number

Timestamp (in milliseconds) to only include Teams created since then.

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#parameter-until)

until

number

Timestamp (in milliseconds) to only include Teams created until then.

Example:

`1540095775951`

#### Response

200

application/json

A paginated list of teams.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams)

teams

object\[\]

required

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-creator-id)

creatorId

string

required

The ID of the user who created the Team.

Example:

`"R6efeCJQ2HKXywuasPDc0fOWB"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-updated-at)

updatedAt

number

required

Timestamp (in milliseconds) of when the Team was last updated.

Example:

`1611796915677`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-description)

description

string \| null

required

A short description of the Team.

Example:

`"Our mission is to make cloud computing accessible to everyone."`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-staging-prefix)

stagingPrefix

string

required

The prefix that is prepended to automatic aliases.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-id)

id

string

required

The Team's unique identifier.

Example:

`"team_nllPyCtREAqxxdyFKbbMDlxd"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-slug)

slug

string

required

The Team's slug, which is unique across the Vercel platform.

Example:

`"my-team"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-name)

name

string \| null

required

Name associated with the Team account, or `null` if none has been provided.

Example:

`"My Team"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-avatar)

avatar

string \| null

required

The ID of the file used as avatar for this Team.

Example:

`"6eb07268bcfadd309905ffb1579354084c24655c"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-membership)

membership

object

required

The membership of the authenticated User in relation to the Team.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-created-at)

createdAt

number

required

UNIX timestamp (in milliseconds) when the Team was created.

Example:

`1630748523395`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-connect)

connect

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-email-domain)

emailDomain

string \| null

Hostname that'll be matched with emails on sign-up to automatically join the Team.

Example:

`"example.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-saml)

saml

object

When "Single Sign-On (SAML)" is configured, this object contains information regarding the configuration of the Identity Provider (IdP).

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-invite-code)

inviteCode

string

Code that can be used to join this Team. Only visible to Team owners.

Example:

`"hasihf9e89"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-default-roles)

defaultRoles

object

Default roles for the team.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-resource-config)

resourceConfig

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-preview-deployment-suffix)

previewDeploymentSuffix

string \| null

The hostname that is current set as preview deployment suffix.

Example:

`"example.dev"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-platform)

platform

boolean

Whether the team is a platform team.

Example:

`true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-disable-hard-auto-blocks)

disableHardAutoBlocks

numberboolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-remote-caching)

remoteCaching

object

Is remote caching enabled for this team

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-default-deployment-protection)

defaultDeploymentProtection

object

Default deployment protection for this team

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-default-expiration-settings)

defaultExpirationSettings

object

Default deployment expiration settings for this team

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-enable-preview-feedback)

enablePreviewFeedback

enum<string> \| null

Whether toolbar is enabled on preview deployments

Available options:

`default`,

`on`,

`off`,

`on-force`,

`off-force`,

`default-force`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-enable-production-feedback)

enableProductionFeedback

enum<string> \| null

Whether toolbar is enabled on production deployments

Available options:

`default`,

`on`,

`off`,

`on-force`,

`off-force`,

`default-force`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-sensitive-environment-variable-policy)

sensitiveEnvironmentVariablePolicy

enum<string> \| null

Sensitive environment variable policy for this team

Available options:

`default`,

`on`,

`off`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-hide-ip-addresses)

hideIpAddresses

boolean \| null

Indicates if IP addresses should be accessible in observability (o11y) tooling

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-hide-ip-addresses-in-log-drains)

hideIpAddressesInLogDrains

boolean \| null

Indicates if IP addresses should be accessible in log drains

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-teams-ip-buckets)

ipBuckets

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-pagination)

pagination

object

required

This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-pagination-count)

pagination.count

number

required

Amount of items in the current page.

Example:

`20`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-pagination-next)

pagination.next

number \| null

required

Timestamp that must be used to request the next page.

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams#response-pagination-prev)

pagination.prev

number \| null

required

Timestamp that must be used to request the previous page.

Example:

`1540095775951`

[Update a Team](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team) [Create a Team](https://vercel.com/docs/rest-api/reference/endpoints/teams/create-a-team)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.