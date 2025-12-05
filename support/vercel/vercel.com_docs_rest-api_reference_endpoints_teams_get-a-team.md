---
url: "https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team"
title: "Get a Team - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

teams

Get a Team

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


getTeam

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.getTeam({
    slug: "my-team-url-slug",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
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
  "connect": {
    "enabled": true
  },
  "creatorId": "R6efeCJQ2HKXywuasPDc0fOWB",
  "updatedAt": 1611796915677,
  "emailDomain": "example.com",
  "saml": {
    "connection": {
      "type": "OktaSAML",
      "status": "linked",
      "state": "active",
      "connectedAt": 1611796915677,
      "lastReceivedWebhookEvent": 1611796915677
    },
    "directory": {
      "type": "OktaSAML",
      "state": "active",
      "connectedAt": 1611796915677,
      "lastReceivedWebhookEvent": 1611796915677
    },
    "enforced": true,
    "defaultRedirectUri": "vercel.com",
    "roles": {}
  },
  "inviteCode": "hasihf9e89",
  "description": "Our mission is to make cloud computing accessible to everyone.",
  "defaultRoles": {
    "teamRoles": [\
      "OWNER"\
    ],
    "teamPermissions": [\
      "IntegrationManager"\
    ]
  },
  "stagingPrefix": "<string>",
  "resourceConfig": {
    "concurrentBuilds": 123,
    "elasticConcurrencyEnabled": true,
    "edgeConfigSize": 123,
    "edgeConfigs": 123,
    "kvDatabases": 123,
    "blobStores": 123,
    "postgresDatabases": 123,
    "buildEntitlements": {
      "enhancedBuilds": true
    }
  },
  "previewDeploymentSuffix": "example.dev",
  "platform": true,
  "disableHardAutoBlocks": 123,
  "remoteCaching": {
    "enabled": true
  },
  "defaultDeploymentProtection": {
    "passwordProtection": {
      "deploymentType": "<string>"
    },
    "ssoProtection": {
      "deploymentType": "<string>"
    }
  },
  "defaultExpirationSettings": {
    "expirationDays": 123,
    "expirationDaysProduction": 123,
    "expirationDaysCanceled": 123,
    "expirationDaysErrored": 123,
    "deploymentsToKeep": 123
  },
  "enablePreviewFeedback": "default",
  "enableProductionFeedback": "default",
  "sensitiveEnvironmentVariablePolicy": "default",
  "hideIpAddresses": true,
  "hideIpAddressesInLogDrains": true,
  "ipBuckets": [\
    {\
      "bucket": "<string>",\
      "supportUntil": 123\
    }\
  ],
  "id": "team_nllPyCtREAqxxdyFKbbMDlxd",
  "slug": "my-team",
  "name": "My Team",
  "avatar": "6eb07268bcfadd309905ffb1579354084c24655c",
  "membership": {
    "uid": "<string>",
    "entitlements": [\
      {\
        "entitlement": "<string>"\
      }\
    ],
    "teamId": "<string>",
    "confirmed": true,
    "accessRequestedAt": 123,
    "role": "OWNER",
    "teamRoles": [\
      "OWNER"\
    ],
    "teamPermissions": [\
      "IntegrationManager"\
    ],
    "createdAt": 123,
    "created": 123,
    "joinedFrom": {
      "origin": "link",
      "commitId": "<string>",
      "repoId": "<string>",
      "repoPath": "<string>",
      "gitUserId": "<string>",
      "gitUserLogin": "<string>",
      "ssoUserId": "<string>",
      "ssoConnectedAt": 123,
      "idpUserId": "<string>",
      "dsyncUserId": "<string>",
      "dsyncConnectedAt": 123
    }
  },
  "createdAt": 1630748523395
}
```

teams

# Get a Team

Copy page

Get information for the Team specified by the `teamId` parameter.

Copy page

GET

/

v2

/

teams

/

{teamId}

getTeam

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.getTeam({
    slug: "my-team-url-slug",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
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
  "connect": {
    "enabled": true
  },
  "creatorId": "R6efeCJQ2HKXywuasPDc0fOWB",
  "updatedAt": 1611796915677,
  "emailDomain": "example.com",
  "saml": {
    "connection": {
      "type": "OktaSAML",
      "status": "linked",
      "state": "active",
      "connectedAt": 1611796915677,
      "lastReceivedWebhookEvent": 1611796915677
    },
    "directory": {
      "type": "OktaSAML",
      "state": "active",
      "connectedAt": 1611796915677,
      "lastReceivedWebhookEvent": 1611796915677
    },
    "enforced": true,
    "defaultRedirectUri": "vercel.com",
    "roles": {}
  },
  "inviteCode": "hasihf9e89",
  "description": "Our mission is to make cloud computing accessible to everyone.",
  "defaultRoles": {
    "teamRoles": [\
      "OWNER"\
    ],
    "teamPermissions": [\
      "IntegrationManager"\
    ]
  },
  "stagingPrefix": "<string>",
  "resourceConfig": {
    "concurrentBuilds": 123,
    "elasticConcurrencyEnabled": true,
    "edgeConfigSize": 123,
    "edgeConfigs": 123,
    "kvDatabases": 123,
    "blobStores": 123,
    "postgresDatabases": 123,
    "buildEntitlements": {
      "enhancedBuilds": true
    }
  },
  "previewDeploymentSuffix": "example.dev",
  "platform": true,
  "disableHardAutoBlocks": 123,
  "remoteCaching": {
    "enabled": true
  },
  "defaultDeploymentProtection": {
    "passwordProtection": {
      "deploymentType": "<string>"
    },
    "ssoProtection": {
      "deploymentType": "<string>"
    }
  },
  "defaultExpirationSettings": {
    "expirationDays": 123,
    "expirationDaysProduction": 123,
    "expirationDaysCanceled": 123,
    "expirationDaysErrored": 123,
    "deploymentsToKeep": 123
  },
  "enablePreviewFeedback": "default",
  "enableProductionFeedback": "default",
  "sensitiveEnvironmentVariablePolicy": "default",
  "hideIpAddresses": true,
  "hideIpAddressesInLogDrains": true,
  "ipBuckets": [\
    {\
      "bucket": "<string>",\
      "supportUntil": 123\
    }\
  ],
  "id": "team_nllPyCtREAqxxdyFKbbMDlxd",
  "slug": "my-team",
  "name": "My Team",
  "avatar": "6eb07268bcfadd309905ffb1579354084c24655c",
  "membership": {
    "uid": "<string>",
    "entitlements": [\
      {\
        "entitlement": "<string>"\
      }\
    ],
    "teamId": "<string>",
    "confirmed": true,
    "accessRequestedAt": 123,
    "role": "OWNER",
    "teamRoles": [\
      "OWNER"\
    ],
    "teamPermissions": [\
      "IntegrationManager"\
    ],
    "createdAt": 123,
    "created": 123,
    "joinedFrom": {
      "origin": "link",
      "commitId": "<string>",
      "repoId": "<string>",
      "repoPath": "<string>",
      "gitUserId": "<string>",
      "gitUserLogin": "<string>",
      "ssoUserId": "<string>",
      "ssoConnectedAt": 123,
      "idpUserId": "<string>",
      "dsyncUserId": "<string>",
      "dsyncConnectedAt": 123
    }
  },
  "createdAt": 1630748523395
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#parameter-team-id)

teamId

string

required

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#parameter-slug)

slug

string

Example:

`"my-team-url-slug"`

#### Response

200

application/json

The requested team

Data representing a Team.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-creator-id)

creatorId

string

required

The ID of the user who created the Team.

Example:

`"R6efeCJQ2HKXywuasPDc0fOWB"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-updated-at)

updatedAt

number

required

Timestamp (in milliseconds) of when the Team was last updated.

Example:

`1611796915677`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-description)

description

string \| null

required

A short description of the Team.

Example:

`"Our mission is to make cloud computing accessible to everyone."`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-staging-prefix)

stagingPrefix

string

required

The prefix that is prepended to automatic aliases.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-id)

id

string

required

The Team's unique identifier.

Example:

`"team_nllPyCtREAqxxdyFKbbMDlxd"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-slug)

slug

string

required

The Team's slug, which is unique across the Vercel platform.

Example:

`"my-team"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-name)

name

string \| null

required

Name associated with the Team account, or `null` if none has been provided.

Example:

`"My Team"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-avatar)

avatar

string \| null

required

The ID of the file used as avatar for this Team.

Example:

`"6eb07268bcfadd309905ffb1579354084c24655c"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-membership)

membership

object

required

The membership of the authenticated User in relation to the Team.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-membership-confirmed)

membership.confirmed

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-membership-role)

membership.role

enum<string>

required

Available options:

`OWNER`,

`MEMBER`,

`DEVELOPER`,

`SECURITY`,

`BILLING`,

`VIEWER`,

`VIEWER_FOR_PLUS`,

`CONTRIBUTOR`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-membership-created-at)

membership.createdAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-membership-created)

membership.created

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-membership-uid)

membership.uid

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-membership-entitlements)

membership.entitlements

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-membership-team-id)

membership.teamId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-membership-access-requested-at)

membership.accessRequestedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-membership-team-roles)

membership.teamRoles

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-membership-team-permissions)

membership.teamPermissions

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-membership-joined-from)

membership.joinedFrom

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-created-at)

createdAt

number

required

UNIX timestamp (in milliseconds) when the Team was created.

Example:

`1630748523395`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-connect)

connect

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-connect-enabled)

connect.enabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-email-domain)

emailDomain

string \| null

Hostname that'll be matched with emails on sign-up to automatically join the Team.

Example:

`"example.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-saml)

saml

object

When "Single Sign-On (SAML)" is configured, this object contains information regarding the configuration of the Identity Provider (IdP).

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-saml-enforced)

saml.enforced

boolean

required

When `true`, interactions with the Team **must** be done with an authentication token that has been authenticated with the Team's SAML Single Sign-On provider.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-saml-connection)

saml.connection

object

Information for the SAML Single Sign-On configuration.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-saml-directory)

saml.directory

object

Information for the Directory Sync configuration.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-saml-default-redirect-uri)

saml.defaultRedirectUri

enum<string>

The default redirect URI to use after successful SAML authentication.

Available options:

`vercel.com`,

`v0.dev`,

`v0.app`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-saml-roles)

saml.roles

object

When "Directory Sync" is configured, this object contains a mapping of which Directory Group (by ID) should be assigned to which Vercel Team "role".

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-invite-code)

inviteCode

string

Code that can be used to join this Team. Only visible to Team owners.

Example:

`"hasihf9e89"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-default-roles)

defaultRoles

object

Default roles for the team.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-default-roles-team-roles)

defaultRoles.teamRoles

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-default-roles-team-permissions)

defaultRoles.teamPermissions

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-resource-config)

resourceConfig

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-resource-config-concurrent-builds)

resourceConfig.concurrentBuilds

number

The total amount of concurrent builds that can be used.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-resource-config-elastic-concurrency-enabled)

resourceConfig.elasticConcurrencyEnabled

boolean

Whether every build for this team / user has elastic concurrency enabled automatically.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-resource-config-edge-config-size)

resourceConfig.edgeConfigSize

number

The maximum size in kilobytes of an Edge Config. Only specified if a custom limit is set.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-resource-config-edge-configs)

resourceConfig.edgeConfigs

number

The maximum number of edge configs an account can create.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-resource-config-kv-databases)

resourceConfig.kvDatabases

number

The maximum number of kv databases an account can create.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-resource-config-blob-stores)

resourceConfig.blobStores

number

The maximum number of blob stores an account can create.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-resource-config-postgres-databases)

resourceConfig.postgresDatabases

number

The maximum number of postgres databases an account can create.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-resource-config-build-entitlements)

resourceConfig.buildEntitlements

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-preview-deployment-suffix)

previewDeploymentSuffix

string \| null

The hostname that is current set as preview deployment suffix.

Example:

`"example.dev"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-platform)

platform

boolean

Whether the team is a platform team.

Example:

`true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-disable-hard-auto-blocks)

disableHardAutoBlocks

numberboolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-remote-caching)

remoteCaching

object

Is remote caching enabled for this team

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-remote-caching-enabled)

remoteCaching.enabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-default-deployment-protection)

defaultDeploymentProtection

object

Default deployment protection for this team

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-default-deployment-protection-password-protection)

defaultDeploymentProtection.passwordProtection

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-default-deployment-protection-sso-protection)

defaultDeploymentProtection.ssoProtection

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-default-expiration-settings)

defaultExpirationSettings

object

Default deployment expiration settings for this team

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-default-expiration-settings-expiration-days)

defaultExpirationSettings.expirationDays

number

Number of days to keep non-production deployments (mostly preview deployments) before soft deletion.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-default-expiration-settings-expiration-days-production)

defaultExpirationSettings.expirationDaysProduction

number

Number of days to keep production deployments before soft deletion.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-default-expiration-settings-expiration-days-canceled)

defaultExpirationSettings.expirationDaysCanceled

number

Number of days to keep canceled deployments before soft deletion.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-default-expiration-settings-expiration-days-errored)

defaultExpirationSettings.expirationDaysErrored

number

Number of days to keep errored deployments before soft deletion.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-default-expiration-settings-deployments-to-keep)

defaultExpirationSettings.deploymentsToKeep

number

Minimum number of production deployments to keep for this project, even if they are over the production expiration limit.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-enable-preview-feedback)

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-enable-production-feedback)

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-sensitive-environment-variable-policy)

sensitiveEnvironmentVariablePolicy

enum<string> \| null

Sensitive environment variable policy for this team

Available options:

`default`,

`on`,

`off`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-hide-ip-addresses)

hideIpAddresses

boolean \| null

Indicates if IP addresses should be accessible in observability (o11y) tooling

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-hide-ip-addresses-in-log-drains)

hideIpAddressesInLogDrains

boolean \| null

Indicates if IP addresses should be accessible in log drains

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-ip-buckets)

ipBuckets

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-ip-buckets-bucket)

bucket

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team#response-ip-buckets-support-until)

supportUntil

number

[Update a Team Member](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member) [Update a Team](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.