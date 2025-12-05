---
url: "https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project"
title: "Create a new project - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

projects

Create a new project

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

- checks

- projects

  - [PATCH\\
    \\
    Update the data cache feature](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-the-data-cache-feature)
  - [GET\\
    \\
    Retrieve a list of projects](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects)
  - [POST\\
    \\
    Create a new project](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project)
  - [GET\\
    \\
    Find a project by id or name](https://vercel.com/docs/rest-api/reference/endpoints/projects/find-a-project-by-id-or-name)
  - [DEL\\
    \\
    Delete a Project](https://vercel.com/docs/rest-api/reference/endpoints/projects/delete-a-project)
  - [PATCH\\
    \\
    Update an existing project](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-an-existing-project)
  - [GET\\
    \\
    Retrieve project domains by project by id or name](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-project-domains-by-project-by-id-or-name)
  - [GET\\
    \\
    Get a project domain](https://vercel.com/docs/rest-api/reference/endpoints/projects/get-a-project-domain)
  - [DEL\\
    \\
    Remove a domain from a project](https://vercel.com/docs/rest-api/reference/endpoints/projects/remove-a-domain-from-a-project)
  - [PATCH\\
    \\
    Update a project domain](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain)
  - [POST\\
    \\
    Add a domain to a project](https://vercel.com/docs/rest-api/reference/endpoints/projects/add-a-domain-to-a-project)
  - [POST\\
    \\
    Move a project domain](https://vercel.com/docs/rest-api/reference/endpoints/projects/move-a-project-domain)
  - [POST\\
    \\
    Verify project domain](https://vercel.com/docs/rest-api/reference/endpoints/projects/verify-project-domain)
  - [GET\\
    \\
    Retrieve the environment variables of a project by id or name](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name)
  - [POST\\
    \\
    Create one or more environment variables](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables)
  - [GET\\
    \\
    Retrieve the decrypted value of an environment variable of a project by id](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-decrypted-value-of-an-environment-variable-of-a-project-by-id)
  - [DEL\\
    \\
    Remove an environment variable](https://vercel.com/docs/rest-api/reference/endpoints/projects/remove-an-environment-variable)
  - [PATCH\\
    \\
    Edit an environment variable](https://vercel.com/docs/rest-api/reference/endpoints/projects/edit-an-environment-variable)
  - [DEL\\
    \\
    Batch remove environment variables](https://vercel.com/docs/rest-api/reference/endpoints/projects/batch-remove-environment-variables)
  - [GET\\
    \\
    Get client certificates for a project](https://vercel.com/docs/rest-api/reference/endpoints/projects/get-client-certificates-for-a-project)
  - [POST\\
    \\
    Upload client certificate for egress mTLS](https://vercel.com/docs/rest-api/reference/endpoints/projects/upload-client-certificate-for-egress-mtls)
  - [DEL\\
    \\
    Delete client certificate for egress mTLS](https://vercel.com/docs/rest-api/reference/endpoints/projects/delete-client-certificate-for-egress-mtls)
  - [POST\\
    \\
    Create project transfer request](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-project-transfer-request)
  - [PUT\\
    \\
    Accept project transfer request](https://vercel.com/docs/rest-api/reference/endpoints/projects/accept-project-transfer-request)
  - [PATCH\\
    \\
    Update Protection Bypass for Automation](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-protection-bypass-for-automation)
  - [POST\\
    \\
    Points all production domains for a project to the given deploy](https://vercel.com/docs/rest-api/reference/endpoints/projects/points-all-production-domains-for-a-project-to-the-given-deploy)
  - [GET\\
    \\
    Gets a list of aliases with status for the current promote](https://vercel.com/docs/rest-api/reference/endpoints/projects/gets-a-list-of-aliases-with-status-for-the-current-promote)
  - [POST\\
    \\
    Pause a project](https://vercel.com/docs/rest-api/reference/endpoints/projects/pause-a-project)
  - [POST\\
    \\
    Unpause a project](https://vercel.com/docs/rest-api/reference/endpoints/projects/unpause-a-project)
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


createProject

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projects.createProject({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "a-project-name",
    },
  });

  console.log(result);
}

run();
```

200

400

401

402

403

404

409

428

429

500

Copy

Ask AI

```
{
  "accountId": "<string>",
  "analytics": {
    "id": "<string>",
    "canceledAt": 123,
    "disabledAt": 123,
    "enabledAt": 123,
    "paidAt": 123,
    "sampleRatePercent": 123,
    "spendLimitInDollars": 123
  },
  "speedInsights": {
    "id": "<string>",
    "enabledAt": 123,
    "disabledAt": 123,
    "canceledAt": 123,
    "hasData": true,
    "paidAt": 123
  },
  "autoExposeSystemEnvs": true,
  "autoAssignCustomDomains": true,
  "autoAssignCustomDomainsUpdatedBy": "<string>",
  "buildCommand": "<string>",
  "commandForIgnoringBuildStep": "<string>",
  "connectConfigurations": [\
    {\
      "envId": "<string>",\
      "connectConfigurationId": "<string>",\
      "dc": "<string>",\
      "passive": true,\
      "buildsEnabled": true,\
      "aws": {\
        "subnetIds": [\
          "<string>"\
        ],\
        "securityGroupId": "<string>"\
      },\
      "createdAt": 123,\
      "updatedAt": 123\
    }\
  ],
  "connectConfigurationId": "<string>",
  "connectBuildsEnabled": true,
  "passiveConnectConfigurationId": "<string>",
  "createdAt": 123,
  "customerSupportCodeVisibility": true,
  "crons": {
    "enabledAt": 123,
    "disabledAt": 123,
    "updatedAt": 123,
    "deploymentId": "<string>",
    "definitions": [\
      {\
        "host": "vercel.com",\
        "path": "/api/crons/sync-something?hello=world",\
        "schedule": "0 0 * * *"\
      }\
    ]
  },
  "dataCache": {
    "userDisabled": true,
    "storageSizeBytes": 123,
    "unlimited": true
  },
  "deploymentExpiration": {
    "expirationDays": 123,
    "expirationDaysProduction": 123,
    "expirationDaysCanceled": 123,
    "expirationDaysErrored": 123,
    "deploymentsToKeep": 123
  },
  "devCommand": "<string>",
  "directoryListing": true,
  "installCommand": "<string>",
  "env": [\
    {\
      "target": [\
        "production"\
      ],\
      "type": "system",\
      "sunsetSecretId": "<string>",\
      "decrypted": true,\
      "value": "<string>",\
      "vsmValue": "<string>",\
      "id": "<string>",\
      "key": "<string>",\
      "configurationId": "<string>",\
      "createdAt": 123,\
      "updatedAt": 123,\
      "createdBy": "<string>",\
      "updatedBy": "<string>",\
      "gitBranch": "<string>",\
      "edgeConfigId": "<string>",\
      "edgeConfigTokenId": "<string>",\
      "contentHint": {\
        "type": "redis-url",\
        "storeId": "<string>"\
      },\
      "internalContentHint": {\
        "type": "flags-secret",\
        "encryptedValue": "<string>"\
      },\
      "comment": "<string>",\
      "customEnvironmentIds": [\
        "<string>"\
      ]\
    }\
  ],
  "customEnvironments": [\
    {\
      "id": "<string>",\
      "slug": "<string>",\
      "type": "preview",\
      "description": "<string>",\
      "branchMatcher": {\
        "type": "endsWith",\
        "pattern": "<string>"\
      },\
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
      ],\
      "currentDeploymentAliases": [\
        "<string>"\
      ],\
      "createdAt": 123,\
      "updatedAt": 123\
    }\
  ],
  "framework": "blitzjs",
  "gitForkProtection": true,
  "gitLFS": true,
  "id": "<string>",
  "ipBuckets": [\
    {\
      "bucket": "<string>",\
      "supportUntil": 123\
    }\
  ],
  "latestDeployments": [\
    {\
      "id": "<string>",\
      "alias": [\
        "<string>"\
      ],\
      "aliasAssigned": 123,\
      "aliasError": {\
        "code": "<string>",\
        "message": "<string>"\
      },\
      "aliasFinal": "<string>",\
      "automaticAliases": [\
        "<string>"\
      ],\
      "branchMatcher": {\
        "type": "endsWith",\
        "pattern": "<string>"\
      },\
      "buildingAt": 123,\
      "builds": [\
        {\
          "use": "<string>",\
          "src": "<string>",\
          "dest": "<string>"\
        }\
      ],\
      "checksConclusion": "succeeded",\
      "checksState": "registered",\
      "connectBuildsEnabled": true,\
      "connectConfigurationId": "<string>",\
      "createdAt": 123,\
      "createdIn": "<string>",\
      "creator": {\
        "email": "<string>",\
        "githubLogin": "<string>",\
        "gitlabLogin": "<string>",\
        "uid": "<string>",\
        "username": "<string>"\
      },\
      "deletedAt": 123,\
      "deploymentHostname": "<string>",\
      "forced": true,\
      "name": "<string>",\
      "meta": {},\
      "monorepoManager": "<string>",\
      "oidcTokenClaims": {\
        "iss": "<string>",\
        "sub": "<string>",\
        "scope": "<string>",\
        "aud": "<string>",\
        "owner": "<string>",\
        "owner_id": "<string>",\
        "project": "<string>",\
        "project_id": "<string>",\
        "environment": "<string>",\
        "plan": "<string>"\
      },\
      "plan": "pro",\
      "previewCommentsEnabled": false,\
      "private": true,\
      "readyAt": 123,\
      "readyState": "BUILDING",\
      "readySubstate": "STAGED",\
      "requestedAt": 123,\
      "target": "<string>",\
      "teamId": "<string>",\
      "type": "LAMBDAS",\
      "url": "<string>",\
      "userId": "<string>",\
      "withCache": true\
    }\
  ],
  "link": {
    "org": "<string>",
    "repoOwnerId": 123,
    "repo": "<string>",
    "repoId": 123,
    "type": "github",
    "createdAt": 123,
    "deployHooks": [\
      {\
        "createdAt": 123,\
        "id": "<string>",\
        "name": "<string>",\
        "ref": "<string>",\
        "url": "<string>"\
      }\
    ],
    "gitCredentialId": "<string>",
    "updatedAt": 123,
    "sourceless": true,
    "productionBranch": "<string>"
  },
  "microfrontends": {
    "isDefaultApp": true,
    "updatedAt": 123,
    "groupIds": [\
      "<string>"\
    ],
    "enabled": true,
    "defaultRoute": "<string>",
    "freeProjectForLegacyLimits": true
  },
  "name": "<string>",
  "nodeVersion": "24.x",
  "optionsAllowlist": {
    "paths": [\
      {\
        "value": "<string>"\
      }\
    ]
  },
  "outputDirectory": "<string>",
  "passwordProtection": {},
  "productionDeploymentsFastLane": true,
  "publicSource": true,
  "resourceConfig": {
    "elasticConcurrencyEnabled": true,
    "fluid": true,
    "functionDefaultRegions": [\
      "<string>"\
    ],
    "functionDefaultTimeout": 123,
    "functionDefaultMemoryType": "standard_legacy",
    "functionZeroConfigFailover": true,
    "buildMachineType": "enhanced",
    "isNSNBDisabled": true
  },
  "rollbackDescription": {
    "userId": "<string>",
    "username": "<string>",
    "description": "<string>",
    "createdAt": 123
  },
  "rollingRelease": {
    "target": "production",
    "stages": [\
      {\
        "targetPercentage": 25,\
        "requireApproval": false,\
        "duration": 600,\
        "linearShift": false\
      }\
    ],
    "canaryResponseHeader": false
  },
  "defaultResourceConfig": {
    "elasticConcurrencyEnabled": true,
    "fluid": true,
    "functionDefaultRegions": [\
      "<string>"\
    ],
    "functionDefaultTimeout": 123,
    "functionDefaultMemoryType": "standard_legacy",
    "functionZeroConfigFailover": true,
    "buildMachineType": "enhanced",
    "isNSNBDisabled": true
  },
  "rootDirectory": "<string>",
  "serverlessFunctionZeroConfigFailover": true,
  "skewProtectionBoundaryAt": 123,
  "skewProtectionMaxAge": 123,
  "skipGitConnectDuringLink": true,
  "staticIps": {
    "builds": true,
    "enabled": true,
    "regions": [\
      "<string>"\
    ]
  },
  "sourceFilesOutsideRootDirectory": true,
  "enableAffectedProjectsDeployments": true,
  "ssoProtection": {
    "deploymentType": "preview"
  },
  "targets": {},
  "transferCompletedAt": 123,
  "transferStartedAt": 123,
  "transferToAccountId": "<string>",
  "transferredFromAccountId": "<string>",
  "updatedAt": 123,
  "live": true,
  "enablePreviewFeedback": true,
  "enableProductionFeedback": true,
  "permissions": {
    "oauth2Connection": [\
      "create"\
    ],
    "user": [\
      "create"\
    ],
    "userConnection": [\
      "create"\
    ],
    "userSudo": [\
      "create"\
    ],
    "webAuthn": [\
      "create"\
    ],
    "accessGroup": [\
      "create"\
    ],
    "agent": [\
      "create"\
    ],
    "alerts": [\
      "create"\
    ],
    "aliasGlobal": [\
      "create"\
    ],
    "analyticsSampling": [\
      "create"\
    ],
    "analyticsUsage": [\
      "create"\
    ],
    "apiKey": [\
      "create"\
    ],
    "apiKeyAiGateway": [\
      "create"\
    ],
    "apiKeyOwnedBySelf": [\
      "create"\
    ],
    "oauth2Application": [\
      "create"\
    ],
    "vercelAppInstallation": [\
      "create"\
    ],
    "vercelAppInstallationRequest": [\
      "create"\
    ],
    "auditLog": [\
      "create"\
    ],
    "billingAddress": [\
      "create"\
    ],
    "billingInformation": [\
      "create"\
    ],
    "billingInvoice": [\
      "create"\
    ],
    "billingInvoiceEmailRecipient": [\
      "create"\
    ],
    "billingInvoiceLanguage": [\
      "create"\
    ],
    "billingPlan": [\
      "create"\
    ],
    "billingPurchaseOrder": [\
      "create"\
    ],
    "billingRefund": [\
      "create"\
    ],
    "billingTaxId": [\
      "create"\
    ],
    "blob": [\
      "create"\
    ],
    "blobStoreTokenSet": [\
      "create"\
    ],
    "budget": [\
      "create"\
    ],
    "cacheArtifact": [\
      "create"\
    ],
    "cacheArtifactUsageEvent": [\
      "create"\
    ],
    "codeChecks": [\
      "create"\
    ],
    "concurrentBuilds": [\
      "create"\
    ],
    "connect": [\
      "create"\
    ],
    "connectConfiguration": [\
      "create"\
    ],
    "dataCacheBillingSettings": [\
      "create"\
    ],
    "defaultDeploymentProtection": [\
      "create"\
    ],
    "domain": [\
      "create"\
    ],
    "domainAcceptDelegation": [\
      "create"\
    ],
    "domainAuthCodes": [\
      "create"\
    ],
    "domainCertificate": [\
      "create"\
    ],
    "domainCheckConfig": [\
      "create"\
    ],
    "domainMove": [\
      "create"\
    ],
    "domainPurchase": [\
      "create"\
    ],
    "domainRecord": [\
      "create"\
    ],
    "domainTransferIn": [\
      "create"\
    ],
    "drain": [\
      "create"\
    ],
    "edgeConfig": [\
      "create"\
    ],
    "edgeConfigItem": [\
      "create"\
    ],
    "edgeConfigSchema": [\
      "create"\
    ],
    "edgeConfigToken": [\
      "create"\
    ],
    "endpointVerification": [\
      "create"\
    ],
    "event": [\
      "create"\
    ],
    "fileUpload": [\
      "create"\
    ],
    "flagsExplorerSubscription": [\
      "create"\
    ],
    "gitRepository": [\
      "create"\
    ],
    "imageOptimizationNewPrice": [\
      "create"\
    ],
    "integration": [\
      "create"\
    ],
    "integrationAccount": [\
      "create"\
    ],
    "integrationConfiguration": [\
      "create"\
    ],
    "integrationConfigurationProjects": [\
      "create"\
    ],
    "integrationConfigurationRole": [\
      "create"\
    ],
    "integrationConfigurationTransfer": [\
      "create"\
    ],
    "integrationDeploymentAction": [\
      "create"\
    ],
    "integrationEvent": [\
      "create"\
    ],
    "integrationLog": [\
      "create"\
    ],
    "integrationResource": [\
      "create"\
    ],
    "integrationResourceReplCommand": [\
      "create"\
    ],
    "integrationResourceSecrets": [\
      "create"\
    ],
    "integrationSSOSession": [\
      "create"\
    ],
    "integrationStoreTokenSet": [\
      "create"\
    ],
    "integrationVercelConfigurationOverride": [\
      "create"\
    ],
    "integrationPullRequest": [\
      "create"\
    ],
    "ipBlocking": [\
      "create"\
    ],
    "jobGlobal": [\
      "create"\
    ],
    "logDrain": [\
      "create"\
    ],
    "marketplaceBillingData": [\
      "create"\
    ],
    "marketplaceExperimentationEdgeConfigData": [\
      "create"\
    ],
    "marketplaceExperimentationItem": [\
      "create"\
    ],
    "marketplaceInstallationMember": [\
      "create"\
    ],
    "marketplaceInvoice": [\
      "create"\
    ],
    "marketplaceSettings": [\
      "create"\
    ],
    "Monitoring": [\
      "create"\
    ],
    "monitoringAlert": [\
      "create"\
    ],
    "monitoringChart": [\
      "create"\
    ],
    "monitoringQuery": [\
      "create"\
    ],
    "monitoringSettings": [\
      "create"\
    ],
    "notificationCustomerBudget": [\
      "create"\
    ],
    "notificationDeploymentFailed": [\
      "create"\
    ],
    "notificationDomainConfiguration": [\
      "create"\
    ],
    "notificationDomainExpire": [\
      "create"\
    ],
    "notificationDomainMoved": [\
      "create"\
    ],
    "notificationDomainPurchase": [\
      "create"\
    ],
    "notificationDomainRenewal": [\
      "create"\
    ],
    "notificationDomainTransfer": [\
      "create"\
    ],
    "notificationDomainUnverified": [\
      "create"\
    ],
    "NotificationMonitoringAlert": [\
      "create"\
    ],
    "notificationPaymentFailed": [\
      "create"\
    ],
    "notificationPreferences": [\
      "create"\
    ],
    "notificationStatementOfReasons": [\
      "create"\
    ],
    "notificationUsageAlert": [\
      "create"\
    ],
    "observabilityConfiguration": [\
      "create"\
    ],
    "observabilityFunnel": [\
      "create"\
    ],
    "observabilityNotebook": [\
      "create"\
    ],
    "openTelemetryEndpoint": [\
      "create"\
    ],
    "ownEvent": [\
      "create"\
    ],
    "organizationDomain": [\
      "create"\
    ],
    "passwordProtectionInvoiceItem": [\
      "create"\
    ],
    "paymentMethod": [\
      "create"\
    ],
    "permissions": [\
      "create"\
    ],
    "postgres": [\
      "create"\
    ],
    "postgresStoreTokenSet": [\
      "create"\
    ],
    "previewDeploymentSuffix": [\
      "create"\
    ],
    "projectTransferIn": [\
      "create"\
    ],
    "proTrialOnboarding": [\
      "create"\
    ],
    "rateLimit": [\
      "create"\
    ],
    "redis": [\
      "create"\
    ],
    "redisStoreTokenSet": [\
      "create"\
    ],
    "remoteCaching": [\
      "create"\
    ],
    "repository": [\
      "create"\
    ],
    "samlConfig": [\
      "create"\
    ],
    "secret": [\
      "create"\
    ],
    "securityPlusConfiguration": [\
      "create"\
    ],
    "sensitiveEnvironmentVariablePolicy": [\
      "create"\
    ],
    "sharedEnvVars": [\
      "create"\
    ],
    "sharedEnvVarsProduction": [\
      "create"\
    ],
    "space": [\
      "create"\
    ],
    "spaceRun": [\
      "create"\
    ],
    "storeTransfer": [\
      "create"\
    ],
    "supportCase": [\
      "create"\
    ],
    "supportCaseComment": [\
      "create"\
    ],
    "team": [\
      "create"\
    ],
    "teamAccessRequest": [\
      "create"\
    ],
    "teamFellowMembership": [\
      "create"\
    ],
    "teamGitExclusivity": [\
      "create"\
    ],
    "teamInvite": [\
      "create"\
    ],
    "teamInviteCode": [\
      "create"\
    ],
    "teamJoin": [\
      "create"\
    ],
    "teamMemberMfaStatus": [\
      "create"\
    ],
    "teamMicrofrontends": [\
      "create"\
    ],
    "teamOwnMembership": [\
      "create"\
    ],
    "teamOwnMembershipDisconnectSAML": [\
      "create"\
    ],
    "token": [\
      "create"\
    ],
    "usage": [\
      "create"\
    ],
    "usageCycle": [\
      "create"\
    ],
    "vercelRun": [\
      "create"\
    ],
    "vercelRunExec": [\
      "create"\
    ],
    "vpcPeeringConnection": [\
      "create"\
    ],
    "webAnalyticsPlan": [\
      "create"\
    ],
    "webhook": [\
      "create"\
    ],
    "webhook-event": [\
      "create"\
    ],
    "aliasProject": [\
      "create"\
    ],
    "aliasProtectionBypass": [\
      "create"\
    ],
    "buildMachine": [\
      "create"\
    ],
    "connectConfigurationLink": [\
      "create"\
    ],
    "dataCacheNamespace": [\
      "create"\
    ],
    "deployment": [\
      "create"\
    ],
    "deploymentBuildLogs": [\
      "create"\
    ],
    "deploymentCheck": [\
      "create"\
    ],
    "deploymentCheckPreview": [\
      "create"\
    ],
    "deploymentCheckReRunFromProductionBranch": [\
      "create"\
    ],
    "deploymentProductionGit": [\
      "create"\
    ],
    "deploymentV0": [\
      "create"\
    ],
    "deploymentPreview": [\
      "create"\
    ],
    "deploymentPrivate": [\
      "create"\
    ],
    "deploymentPromote": [\
      "create"\
    ],
    "deploymentRollback": [\
      "create"\
    ],
    "edgeCacheNamespace": [\
      "create"\
    ],
    "environments": [\
      "create"\
    ],
    "job": [\
      "create"\
    ],
    "logs": [\
      "create"\
    ],
    "logsPreset": [\
      "create"\
    ],
    "observabilityData": [\
      "create"\
    ],
    "onDemandBuild": [\
      "create"\
    ],
    "onDemandConcurrency": [\
      "create"\
    ],
    "optionsAllowlist": [\
      "create"\
    ],
    "passwordProtection": [\
      "create"\
    ],
    "productionAliasProtectionBypass": [\
      "create"\
    ],
    "project": [\
      "create"\
    ],
    "projectAccessGroup": [\
      "create"\
    ],
    "projectAnalyticsSampling": [\
      "create"\
    ],
    "projectAnalyticsUsage": [\
      "create"\
    ],
    "projectCheck": [\
      "create"\
    ],
    "projectCheckRun": [\
      "create"\
    ],
    "projectDeploymentExpiration": [\
      "create"\
    ],
    "projectDeploymentHook": [\
      "create"\
    ],
    "projectDomain": [\
      "create"\
    ],
    "projectDomainCheckConfig": [\
      "create"\
    ],
    "projectDomainMove": [\
      "create"\
    ],
    "projectEnvVars": [\
      "create"\
    ],
    "projectEnvVarsProduction": [\
      "create"\
    ],
    "projectEnvVarsUnownedByIntegration": [\
      "create"\
    ],
    "projectFlags": [\
      "create"\
    ],
    "projectFlagsProduction": [\
      "create"\
    ],
    "projectFromV0": [\
      "create"\
    ],
    "projectId": [\
      "create"\
    ],
    "projectIntegrationConfiguration": [\
      "create"\
    ],
    "projectLink": [\
      "create"\
    ],
    "projectMember": [\
      "create"\
    ],
    "projectMonitoring": [\
      "create"\
    ],
    "projectOIDCToken": [\
      "create"\
    ],
    "projectPermissions": [\
      "create"\
    ],
    "projectProductionBranch": [\
      "create"\
    ],
    "projectProtectionBypass": [\
      "create"\
    ],
    "projectRollingRelease": [\
      "create"\
    ],
    "projectSupportCase": [\
      "create"\
    ],
    "projectSupportCaseComment": [\
      "create"\
    ],
    "projectTier": [\
      "create"\
    ],
    "projectTransfer": [\
      "create"\
    ],
    "projectTransferOut": [\
      "create"\
    ],
    "projectUsage": [\
      "create"\
    ],
    "seawallConfig": [\
      "create"\
    ],
    "sharedEnvVarConnection": [\
      "create"\
    ],
    "skewProtection": [\
      "create"\
    ],
    "analytics": [\
      "create"\
    ],
    "trustedIps": [\
      "create"\
    ],
    "v0Chat": [\
      "create"\
    ],
    "webAnalytics": [\
      "create"\
    ]
  },
  "lastRollbackTarget": {},
  "lastAliasRequest": {
    "fromDeploymentId": "<string>",
    "toDeploymentId": "<string>",
    "fromRollingReleaseId": "<string>",
    "jobStatus": "succeeded",
    "requestedAt": 123,
    "type": "promote"
  },
  "protectionBypass": {},
  "hasActiveBranches": true,
  "trustedIps": {
    "deploymentType": "preview",
    "addresses": [\
      {\
        "value": "<string>",\
        "note": "<string>"\
      }\
    ],
    "protectionMode": "additional"
  },
  "gitComments": {
    "onPullRequest": true,
    "onCommit": true
  },
  "gitProviderOptions": {
    "createDeployments": "enabled",
    "disableRepositoryDispatchEvents": true,
    "requireVerifiedCommits": true
  },
  "paused": true,
  "concurrencyBucketName": "<string>",
  "webAnalytics": {
    "id": "<string>",
    "disabledAt": 123,
    "canceledAt": 123,
    "enabledAt": 123,
    "hasData": true
  },
  "security": {
    "attackModeEnabled": true,
    "attackModeUpdatedAt": 123,
    "firewallEnabled": true,
    "firewallUpdatedAt": 123,
    "attackModeActiveUntil": 123,
    "firewallConfigVersion": 123,
    "firewallSeawallEnabled": true,
    "ja3Enabled": true,
    "ja4Enabled": true,
    "firewallBypassIps": [\
      "<string>"\
    ],
    "managedRules": {
      "bot_filter": {
        "active": true,
        "action": "log"
      },
      "ai_bots": {
        "active": true,
        "action": "log"
      },
      "owasp": {
        "active": true,
        "action": "log"
      }
    },
    "botIdEnabled": true
  },
  "oidcTokenConfig": {
    "enabled": true,
    "issuerMode": "team"
  },
  "tier": "standard",
  "features": {
    "webAnalytics": true
  },
  "v0": true,
  "abuse": {
    "scanner": "<string>",
    "history": [\
      {\
        "scanner": "<string>",\
        "reason": "<string>",\
        "by": "<string>",\
        "byId": "<string>",\
        "at": 123\
      }\
    ],
    "updatedAt": 123,
    "block": {
      "action": "blocked",
      "reason": "<string>",
      "statusCode": 123,
      "createdAt": 123,
      "caseId": "<string>",
      "actor": "<string>",
      "comment": "<string>",
      "isCascading": true
    },
    "blockHistory": [\
      {\
        "action": "blocked",\
        "reason": "<string>",\
        "statusCode": 123,\
        "createdAt": 123,\
        "caseId": "<string>",\
        "actor": "<string>",\
        "comment": "<string>",\
        "isCascading": true\
      }\
    ],
    "interstitial": true
  },
  "internalRoutes": [\
    {\
      "src": "<string>",\
      "status": 123\
    }\
  ],
  "hasDeployments": true,
  "dismissedToasts": [\
    {\
      "key": "<string>",\
      "dismissedAt": 123,\
      "action": "cancel",\
      "value": "<string>"\
    }\
  ]
}
```

projects

# Create a new project

Copy page

Allows to create a new project with the provided configuration. It only requires the project `name` but more configuration can be provided to override the defaults.

Copy page

POST

/

v11

/

projects

createProject

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projects.createProject({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "a-project-name",
    },
  });

  console.log(result);
}

run();
```

200

400

401

402

403

404

409

428

429

500

Copy

Ask AI

```
{
  "accountId": "<string>",
  "analytics": {
    "id": "<string>",
    "canceledAt": 123,
    "disabledAt": 123,
    "enabledAt": 123,
    "paidAt": 123,
    "sampleRatePercent": 123,
    "spendLimitInDollars": 123
  },
  "speedInsights": {
    "id": "<string>",
    "enabledAt": 123,
    "disabledAt": 123,
    "canceledAt": 123,
    "hasData": true,
    "paidAt": 123
  },
  "autoExposeSystemEnvs": true,
  "autoAssignCustomDomains": true,
  "autoAssignCustomDomainsUpdatedBy": "<string>",
  "buildCommand": "<string>",
  "commandForIgnoringBuildStep": "<string>",
  "connectConfigurations": [\
    {\
      "envId": "<string>",\
      "connectConfigurationId": "<string>",\
      "dc": "<string>",\
      "passive": true,\
      "buildsEnabled": true,\
      "aws": {\
        "subnetIds": [\
          "<string>"\
        ],\
        "securityGroupId": "<string>"\
      },\
      "createdAt": 123,\
      "updatedAt": 123\
    }\
  ],
  "connectConfigurationId": "<string>",
  "connectBuildsEnabled": true,
  "passiveConnectConfigurationId": "<string>",
  "createdAt": 123,
  "customerSupportCodeVisibility": true,
  "crons": {
    "enabledAt": 123,
    "disabledAt": 123,
    "updatedAt": 123,
    "deploymentId": "<string>",
    "definitions": [\
      {\
        "host": "vercel.com",\
        "path": "/api/crons/sync-something?hello=world",\
        "schedule": "0 0 * * *"\
      }\
    ]
  },
  "dataCache": {
    "userDisabled": true,
    "storageSizeBytes": 123,
    "unlimited": true
  },
  "deploymentExpiration": {
    "expirationDays": 123,
    "expirationDaysProduction": 123,
    "expirationDaysCanceled": 123,
    "expirationDaysErrored": 123,
    "deploymentsToKeep": 123
  },
  "devCommand": "<string>",
  "directoryListing": true,
  "installCommand": "<string>",
  "env": [\
    {\
      "target": [\
        "production"\
      ],\
      "type": "system",\
      "sunsetSecretId": "<string>",\
      "decrypted": true,\
      "value": "<string>",\
      "vsmValue": "<string>",\
      "id": "<string>",\
      "key": "<string>",\
      "configurationId": "<string>",\
      "createdAt": 123,\
      "updatedAt": 123,\
      "createdBy": "<string>",\
      "updatedBy": "<string>",\
      "gitBranch": "<string>",\
      "edgeConfigId": "<string>",\
      "edgeConfigTokenId": "<string>",\
      "contentHint": {\
        "type": "redis-url",\
        "storeId": "<string>"\
      },\
      "internalContentHint": {\
        "type": "flags-secret",\
        "encryptedValue": "<string>"\
      },\
      "comment": "<string>",\
      "customEnvironmentIds": [\
        "<string>"\
      ]\
    }\
  ],
  "customEnvironments": [\
    {\
      "id": "<string>",\
      "slug": "<string>",\
      "type": "preview",\
      "description": "<string>",\
      "branchMatcher": {\
        "type": "endsWith",\
        "pattern": "<string>"\
      },\
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
      ],\
      "currentDeploymentAliases": [\
        "<string>"\
      ],\
      "createdAt": 123,\
      "updatedAt": 123\
    }\
  ],
  "framework": "blitzjs",
  "gitForkProtection": true,
  "gitLFS": true,
  "id": "<string>",
  "ipBuckets": [\
    {\
      "bucket": "<string>",\
      "supportUntil": 123\
    }\
  ],
  "latestDeployments": [\
    {\
      "id": "<string>",\
      "alias": [\
        "<string>"\
      ],\
      "aliasAssigned": 123,\
      "aliasError": {\
        "code": "<string>",\
        "message": "<string>"\
      },\
      "aliasFinal": "<string>",\
      "automaticAliases": [\
        "<string>"\
      ],\
      "branchMatcher": {\
        "type": "endsWith",\
        "pattern": "<string>"\
      },\
      "buildingAt": 123,\
      "builds": [\
        {\
          "use": "<string>",\
          "src": "<string>",\
          "dest": "<string>"\
        }\
      ],\
      "checksConclusion": "succeeded",\
      "checksState": "registered",\
      "connectBuildsEnabled": true,\
      "connectConfigurationId": "<string>",\
      "createdAt": 123,\
      "createdIn": "<string>",\
      "creator": {\
        "email": "<string>",\
        "githubLogin": "<string>",\
        "gitlabLogin": "<string>",\
        "uid": "<string>",\
        "username": "<string>"\
      },\
      "deletedAt": 123,\
      "deploymentHostname": "<string>",\
      "forced": true,\
      "name": "<string>",\
      "meta": {},\
      "monorepoManager": "<string>",\
      "oidcTokenClaims": {\
        "iss": "<string>",\
        "sub": "<string>",\
        "scope": "<string>",\
        "aud": "<string>",\
        "owner": "<string>",\
        "owner_id": "<string>",\
        "project": "<string>",\
        "project_id": "<string>",\
        "environment": "<string>",\
        "plan": "<string>"\
      },\
      "plan": "pro",\
      "previewCommentsEnabled": false,\
      "private": true,\
      "readyAt": 123,\
      "readyState": "BUILDING",\
      "readySubstate": "STAGED",\
      "requestedAt": 123,\
      "target": "<string>",\
      "teamId": "<string>",\
      "type": "LAMBDAS",\
      "url": "<string>",\
      "userId": "<string>",\
      "withCache": true\
    }\
  ],
  "link": {
    "org": "<string>",
    "repoOwnerId": 123,
    "repo": "<string>",
    "repoId": 123,
    "type": "github",
    "createdAt": 123,
    "deployHooks": [\
      {\
        "createdAt": 123,\
        "id": "<string>",\
        "name": "<string>",\
        "ref": "<string>",\
        "url": "<string>"\
      }\
    ],
    "gitCredentialId": "<string>",
    "updatedAt": 123,
    "sourceless": true,
    "productionBranch": "<string>"
  },
  "microfrontends": {
    "isDefaultApp": true,
    "updatedAt": 123,
    "groupIds": [\
      "<string>"\
    ],
    "enabled": true,
    "defaultRoute": "<string>",
    "freeProjectForLegacyLimits": true
  },
  "name": "<string>",
  "nodeVersion": "24.x",
  "optionsAllowlist": {
    "paths": [\
      {\
        "value": "<string>"\
      }\
    ]
  },
  "outputDirectory": "<string>",
  "passwordProtection": {},
  "productionDeploymentsFastLane": true,
  "publicSource": true,
  "resourceConfig": {
    "elasticConcurrencyEnabled": true,
    "fluid": true,
    "functionDefaultRegions": [\
      "<string>"\
    ],
    "functionDefaultTimeout": 123,
    "functionDefaultMemoryType": "standard_legacy",
    "functionZeroConfigFailover": true,
    "buildMachineType": "enhanced",
    "isNSNBDisabled": true
  },
  "rollbackDescription": {
    "userId": "<string>",
    "username": "<string>",
    "description": "<string>",
    "createdAt": 123
  },
  "rollingRelease": {
    "target": "production",
    "stages": [\
      {\
        "targetPercentage": 25,\
        "requireApproval": false,\
        "duration": 600,\
        "linearShift": false\
      }\
    ],
    "canaryResponseHeader": false
  },
  "defaultResourceConfig": {
    "elasticConcurrencyEnabled": true,
    "fluid": true,
    "functionDefaultRegions": [\
      "<string>"\
    ],
    "functionDefaultTimeout": 123,
    "functionDefaultMemoryType": "standard_legacy",
    "functionZeroConfigFailover": true,
    "buildMachineType": "enhanced",
    "isNSNBDisabled": true
  },
  "rootDirectory": "<string>",
  "serverlessFunctionZeroConfigFailover": true,
  "skewProtectionBoundaryAt": 123,
  "skewProtectionMaxAge": 123,
  "skipGitConnectDuringLink": true,
  "staticIps": {
    "builds": true,
    "enabled": true,
    "regions": [\
      "<string>"\
    ]
  },
  "sourceFilesOutsideRootDirectory": true,
  "enableAffectedProjectsDeployments": true,
  "ssoProtection": {
    "deploymentType": "preview"
  },
  "targets": {},
  "transferCompletedAt": 123,
  "transferStartedAt": 123,
  "transferToAccountId": "<string>",
  "transferredFromAccountId": "<string>",
  "updatedAt": 123,
  "live": true,
  "enablePreviewFeedback": true,
  "enableProductionFeedback": true,
  "permissions": {
    "oauth2Connection": [\
      "create"\
    ],
    "user": [\
      "create"\
    ],
    "userConnection": [\
      "create"\
    ],
    "userSudo": [\
      "create"\
    ],
    "webAuthn": [\
      "create"\
    ],
    "accessGroup": [\
      "create"\
    ],
    "agent": [\
      "create"\
    ],
    "alerts": [\
      "create"\
    ],
    "aliasGlobal": [\
      "create"\
    ],
    "analyticsSampling": [\
      "create"\
    ],
    "analyticsUsage": [\
      "create"\
    ],
    "apiKey": [\
      "create"\
    ],
    "apiKeyAiGateway": [\
      "create"\
    ],
    "apiKeyOwnedBySelf": [\
      "create"\
    ],
    "oauth2Application": [\
      "create"\
    ],
    "vercelAppInstallation": [\
      "create"\
    ],
    "vercelAppInstallationRequest": [\
      "create"\
    ],
    "auditLog": [\
      "create"\
    ],
    "billingAddress": [\
      "create"\
    ],
    "billingInformation": [\
      "create"\
    ],
    "billingInvoice": [\
      "create"\
    ],
    "billingInvoiceEmailRecipient": [\
      "create"\
    ],
    "billingInvoiceLanguage": [\
      "create"\
    ],
    "billingPlan": [\
      "create"\
    ],
    "billingPurchaseOrder": [\
      "create"\
    ],
    "billingRefund": [\
      "create"\
    ],
    "billingTaxId": [\
      "create"\
    ],
    "blob": [\
      "create"\
    ],
    "blobStoreTokenSet": [\
      "create"\
    ],
    "budget": [\
      "create"\
    ],
    "cacheArtifact": [\
      "create"\
    ],
    "cacheArtifactUsageEvent": [\
      "create"\
    ],
    "codeChecks": [\
      "create"\
    ],
    "concurrentBuilds": [\
      "create"\
    ],
    "connect": [\
      "create"\
    ],
    "connectConfiguration": [\
      "create"\
    ],
    "dataCacheBillingSettings": [\
      "create"\
    ],
    "defaultDeploymentProtection": [\
      "create"\
    ],
    "domain": [\
      "create"\
    ],
    "domainAcceptDelegation": [\
      "create"\
    ],
    "domainAuthCodes": [\
      "create"\
    ],
    "domainCertificate": [\
      "create"\
    ],
    "domainCheckConfig": [\
      "create"\
    ],
    "domainMove": [\
      "create"\
    ],
    "domainPurchase": [\
      "create"\
    ],
    "domainRecord": [\
      "create"\
    ],
    "domainTransferIn": [\
      "create"\
    ],
    "drain": [\
      "create"\
    ],
    "edgeConfig": [\
      "create"\
    ],
    "edgeConfigItem": [\
      "create"\
    ],
    "edgeConfigSchema": [\
      "create"\
    ],
    "edgeConfigToken": [\
      "create"\
    ],
    "endpointVerification": [\
      "create"\
    ],
    "event": [\
      "create"\
    ],
    "fileUpload": [\
      "create"\
    ],
    "flagsExplorerSubscription": [\
      "create"\
    ],
    "gitRepository": [\
      "create"\
    ],
    "imageOptimizationNewPrice": [\
      "create"\
    ],
    "integration": [\
      "create"\
    ],
    "integrationAccount": [\
      "create"\
    ],
    "integrationConfiguration": [\
      "create"\
    ],
    "integrationConfigurationProjects": [\
      "create"\
    ],
    "integrationConfigurationRole": [\
      "create"\
    ],
    "integrationConfigurationTransfer": [\
      "create"\
    ],
    "integrationDeploymentAction": [\
      "create"\
    ],
    "integrationEvent": [\
      "create"\
    ],
    "integrationLog": [\
      "create"\
    ],
    "integrationResource": [\
      "create"\
    ],
    "integrationResourceReplCommand": [\
      "create"\
    ],
    "integrationResourceSecrets": [\
      "create"\
    ],
    "integrationSSOSession": [\
      "create"\
    ],
    "integrationStoreTokenSet": [\
      "create"\
    ],
    "integrationVercelConfigurationOverride": [\
      "create"\
    ],
    "integrationPullRequest": [\
      "create"\
    ],
    "ipBlocking": [\
      "create"\
    ],
    "jobGlobal": [\
      "create"\
    ],
    "logDrain": [\
      "create"\
    ],
    "marketplaceBillingData": [\
      "create"\
    ],
    "marketplaceExperimentationEdgeConfigData": [\
      "create"\
    ],
    "marketplaceExperimentationItem": [\
      "create"\
    ],
    "marketplaceInstallationMember": [\
      "create"\
    ],
    "marketplaceInvoice": [\
      "create"\
    ],
    "marketplaceSettings": [\
      "create"\
    ],
    "Monitoring": [\
      "create"\
    ],
    "monitoringAlert": [\
      "create"\
    ],
    "monitoringChart": [\
      "create"\
    ],
    "monitoringQuery": [\
      "create"\
    ],
    "monitoringSettings": [\
      "create"\
    ],
    "notificationCustomerBudget": [\
      "create"\
    ],
    "notificationDeploymentFailed": [\
      "create"\
    ],
    "notificationDomainConfiguration": [\
      "create"\
    ],
    "notificationDomainExpire": [\
      "create"\
    ],
    "notificationDomainMoved": [\
      "create"\
    ],
    "notificationDomainPurchase": [\
      "create"\
    ],
    "notificationDomainRenewal": [\
      "create"\
    ],
    "notificationDomainTransfer": [\
      "create"\
    ],
    "notificationDomainUnverified": [\
      "create"\
    ],
    "NotificationMonitoringAlert": [\
      "create"\
    ],
    "notificationPaymentFailed": [\
      "create"\
    ],
    "notificationPreferences": [\
      "create"\
    ],
    "notificationStatementOfReasons": [\
      "create"\
    ],
    "notificationUsageAlert": [\
      "create"\
    ],
    "observabilityConfiguration": [\
      "create"\
    ],
    "observabilityFunnel": [\
      "create"\
    ],
    "observabilityNotebook": [\
      "create"\
    ],
    "openTelemetryEndpoint": [\
      "create"\
    ],
    "ownEvent": [\
      "create"\
    ],
    "organizationDomain": [\
      "create"\
    ],
    "passwordProtectionInvoiceItem": [\
      "create"\
    ],
    "paymentMethod": [\
      "create"\
    ],
    "permissions": [\
      "create"\
    ],
    "postgres": [\
      "create"\
    ],
    "postgresStoreTokenSet": [\
      "create"\
    ],
    "previewDeploymentSuffix": [\
      "create"\
    ],
    "projectTransferIn": [\
      "create"\
    ],
    "proTrialOnboarding": [\
      "create"\
    ],
    "rateLimit": [\
      "create"\
    ],
    "redis": [\
      "create"\
    ],
    "redisStoreTokenSet": [\
      "create"\
    ],
    "remoteCaching": [\
      "create"\
    ],
    "repository": [\
      "create"\
    ],
    "samlConfig": [\
      "create"\
    ],
    "secret": [\
      "create"\
    ],
    "securityPlusConfiguration": [\
      "create"\
    ],
    "sensitiveEnvironmentVariablePolicy": [\
      "create"\
    ],
    "sharedEnvVars": [\
      "create"\
    ],
    "sharedEnvVarsProduction": [\
      "create"\
    ],
    "space": [\
      "create"\
    ],
    "spaceRun": [\
      "create"\
    ],
    "storeTransfer": [\
      "create"\
    ],
    "supportCase": [\
      "create"\
    ],
    "supportCaseComment": [\
      "create"\
    ],
    "team": [\
      "create"\
    ],
    "teamAccessRequest": [\
      "create"\
    ],
    "teamFellowMembership": [\
      "create"\
    ],
    "teamGitExclusivity": [\
      "create"\
    ],
    "teamInvite": [\
      "create"\
    ],
    "teamInviteCode": [\
      "create"\
    ],
    "teamJoin": [\
      "create"\
    ],
    "teamMemberMfaStatus": [\
      "create"\
    ],
    "teamMicrofrontends": [\
      "create"\
    ],
    "teamOwnMembership": [\
      "create"\
    ],
    "teamOwnMembershipDisconnectSAML": [\
      "create"\
    ],
    "token": [\
      "create"\
    ],
    "usage": [\
      "create"\
    ],
    "usageCycle": [\
      "create"\
    ],
    "vercelRun": [\
      "create"\
    ],
    "vercelRunExec": [\
      "create"\
    ],
    "vpcPeeringConnection": [\
      "create"\
    ],
    "webAnalyticsPlan": [\
      "create"\
    ],
    "webhook": [\
      "create"\
    ],
    "webhook-event": [\
      "create"\
    ],
    "aliasProject": [\
      "create"\
    ],
    "aliasProtectionBypass": [\
      "create"\
    ],
    "buildMachine": [\
      "create"\
    ],
    "connectConfigurationLink": [\
      "create"\
    ],
    "dataCacheNamespace": [\
      "create"\
    ],
    "deployment": [\
      "create"\
    ],
    "deploymentBuildLogs": [\
      "create"\
    ],
    "deploymentCheck": [\
      "create"\
    ],
    "deploymentCheckPreview": [\
      "create"\
    ],
    "deploymentCheckReRunFromProductionBranch": [\
      "create"\
    ],
    "deploymentProductionGit": [\
      "create"\
    ],
    "deploymentV0": [\
      "create"\
    ],
    "deploymentPreview": [\
      "create"\
    ],
    "deploymentPrivate": [\
      "create"\
    ],
    "deploymentPromote": [\
      "create"\
    ],
    "deploymentRollback": [\
      "create"\
    ],
    "edgeCacheNamespace": [\
      "create"\
    ],
    "environments": [\
      "create"\
    ],
    "job": [\
      "create"\
    ],
    "logs": [\
      "create"\
    ],
    "logsPreset": [\
      "create"\
    ],
    "observabilityData": [\
      "create"\
    ],
    "onDemandBuild": [\
      "create"\
    ],
    "onDemandConcurrency": [\
      "create"\
    ],
    "optionsAllowlist": [\
      "create"\
    ],
    "passwordProtection": [\
      "create"\
    ],
    "productionAliasProtectionBypass": [\
      "create"\
    ],
    "project": [\
      "create"\
    ],
    "projectAccessGroup": [\
      "create"\
    ],
    "projectAnalyticsSampling": [\
      "create"\
    ],
    "projectAnalyticsUsage": [\
      "create"\
    ],
    "projectCheck": [\
      "create"\
    ],
    "projectCheckRun": [\
      "create"\
    ],
    "projectDeploymentExpiration": [\
      "create"\
    ],
    "projectDeploymentHook": [\
      "create"\
    ],
    "projectDomain": [\
      "create"\
    ],
    "projectDomainCheckConfig": [\
      "create"\
    ],
    "projectDomainMove": [\
      "create"\
    ],
    "projectEnvVars": [\
      "create"\
    ],
    "projectEnvVarsProduction": [\
      "create"\
    ],
    "projectEnvVarsUnownedByIntegration": [\
      "create"\
    ],
    "projectFlags": [\
      "create"\
    ],
    "projectFlagsProduction": [\
      "create"\
    ],
    "projectFromV0": [\
      "create"\
    ],
    "projectId": [\
      "create"\
    ],
    "projectIntegrationConfiguration": [\
      "create"\
    ],
    "projectLink": [\
      "create"\
    ],
    "projectMember": [\
      "create"\
    ],
    "projectMonitoring": [\
      "create"\
    ],
    "projectOIDCToken": [\
      "create"\
    ],
    "projectPermissions": [\
      "create"\
    ],
    "projectProductionBranch": [\
      "create"\
    ],
    "projectProtectionBypass": [\
      "create"\
    ],
    "projectRollingRelease": [\
      "create"\
    ],
    "projectSupportCase": [\
      "create"\
    ],
    "projectSupportCaseComment": [\
      "create"\
    ],
    "projectTier": [\
      "create"\
    ],
    "projectTransfer": [\
      "create"\
    ],
    "projectTransferOut": [\
      "create"\
    ],
    "projectUsage": [\
      "create"\
    ],
    "seawallConfig": [\
      "create"\
    ],
    "sharedEnvVarConnection": [\
      "create"\
    ],
    "skewProtection": [\
      "create"\
    ],
    "analytics": [\
      "create"\
    ],
    "trustedIps": [\
      "create"\
    ],
    "v0Chat": [\
      "create"\
    ],
    "webAnalytics": [\
      "create"\
    ]
  },
  "lastRollbackTarget": {},
  "lastAliasRequest": {
    "fromDeploymentId": "<string>",
    "toDeploymentId": "<string>",
    "fromRollingReleaseId": "<string>",
    "jobStatus": "succeeded",
    "requestedAt": 123,
    "type": "promote"
  },
  "protectionBypass": {},
  "hasActiveBranches": true,
  "trustedIps": {
    "deploymentType": "preview",
    "addresses": [\
      {\
        "value": "<string>",\
        "note": "<string>"\
      }\
    ],
    "protectionMode": "additional"
  },
  "gitComments": {
    "onPullRequest": true,
    "onCommit": true
  },
  "gitProviderOptions": {
    "createDeployments": "enabled",
    "disableRepositoryDispatchEvents": true,
    "requireVerifiedCommits": true
  },
  "paused": true,
  "concurrencyBucketName": "<string>",
  "webAnalytics": {
    "id": "<string>",
    "disabledAt": 123,
    "canceledAt": 123,
    "enabledAt": 123,
    "hasData": true
  },
  "security": {
    "attackModeEnabled": true,
    "attackModeUpdatedAt": 123,
    "firewallEnabled": true,
    "firewallUpdatedAt": 123,
    "attackModeActiveUntil": 123,
    "firewallConfigVersion": 123,
    "firewallSeawallEnabled": true,
    "ja3Enabled": true,
    "ja4Enabled": true,
    "firewallBypassIps": [\
      "<string>"\
    ],
    "managedRules": {
      "bot_filter": {
        "active": true,
        "action": "log"
      },
      "ai_bots": {
        "active": true,
        "action": "log"
      },
      "owasp": {
        "active": true,
        "action": "log"
      }
    },
    "botIdEnabled": true
  },
  "oidcTokenConfig": {
    "enabled": true,
    "issuerMode": "team"
  },
  "tier": "standard",
  "features": {
    "webAnalytics": true
  },
  "v0": true,
  "abuse": {
    "scanner": "<string>",
    "history": [\
      {\
        "scanner": "<string>",\
        "reason": "<string>",\
        "by": "<string>",\
        "byId": "<string>",\
        "at": 123\
      }\
    ],
    "updatedAt": 123,
    "block": {
      "action": "blocked",
      "reason": "<string>",
      "statusCode": 123,
      "createdAt": 123,
      "caseId": "<string>",
      "actor": "<string>",
      "comment": "<string>",
      "isCascading": true
    },
    "blockHistory": [\
      {\
        "action": "blocked",\
        "reason": "<string>",\
        "statusCode": 123,\
        "createdAt": 123,\
        "caseId": "<string>",\
        "actor": "<string>",\
        "comment": "<string>",\
        "isCascading": true\
      }\
    ],
    "interstitial": true
  },
  "internalRoutes": [\
    {\
      "src": "<string>",\
      "status": 123\
    }\
  ],
  "hasDeployments": true,
  "dismissedToasts": [\
    {\
      "key": "<string>",\
      "dismissedAt": 123,\
      "action": "cancel",\
      "value": "<string>"\
    }\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-name)

name

string

required

The desired name for the project

Maximum length: `100`

Example:

`"a-project-name"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-enable-preview-feedback)

enablePreviewFeedback

boolean \| null

Opt-in to preview toolbar on the project level

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-enable-production-feedback)

enableProductionFeedback

boolean \| null

Opt-in to production toolbar on the project level

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-preview-deployments-disabled)

previewDeploymentsDisabled

boolean \| null

Specifies whether preview deployments are disabled for this project.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-build-command)

buildCommand

string \| null

The build command for this project. When `null` is used this value will be automatically detected

Maximum length: `256`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-command-for-ignoring-build-step)

commandForIgnoringBuildStep

string \| null

Maximum length: `256`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-dev-command)

devCommand

string \| null

The dev command for this project. When `null` is used this value will be automatically detected

Maximum length: `256`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-environment-variables)

environmentVariables

object\[\]

Collection of ENV Variables the Project will use

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-environment-variables-key)

key

string

required

Name of the ENV variable

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-environment-variables-target)

target

enum<string>enum<string>\[\]

required

Deployment Target or Targets in which the ENV variable will be used

Available options:

`production`,

`preview`,

`development`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-environment-variables-value)

value

string

required

Value for the ENV variable

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-environment-variables-git-branch)

gitBranch

string

If defined, the git branch of the environment variable (must have target=preview)

Maximum length: `250`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-environment-variables-type)

type

enum<string>

Type of the ENV variable

Available options:

`system`,

`secret`,

`encrypted`,

`plain`,

`sensitive`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-framework)

framework

any

The framework that is being used for this project. When `null` is used no framework is selected

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-git-repository)

gitRepository

object

The Git Repository that will be connected to the project. When this is defined, any pushes to the specified connected Git Repository will be automatically deployed

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-git-repository-repo)

gitRepository.repo

string

required

The name of the git repository. For example: "vercel/next.js"

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-git-repository-type)

gitRepository.type

enum<string>

required

The Git Provider of the repository

Available options:

`github`,

`github-limited`,

`gitlab`,

`bitbucket`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-install-command)

installCommand

string \| null

The install command for this project. When `null` is used this value will be automatically detected

Maximum length: `256`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-skip-git-connect-during-link)

skipGitConnectDuringLink

boolean

deprecated

Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-sso-protection)

ssoProtection

object \| null

The Vercel Auth setting for the project (historically named "SSO Protection")

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-sso-protection-deployment-type)

ssoProtection.deploymentType

enum<string>

required

Available options:

`all`,

`preview`,

`prod_deployment_urls_and_all_previews`,

`all_except_custom_domains`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-output-directory)

outputDirectory

string \| null

The output directory of the project. When `null` is used this value will be automatically detected

Maximum length: `256`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-public-source)

publicSource

boolean \| null

Specifies whether the source code and logs of the deployments for this project should be public or not

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-root-directory)

rootDirectory

string \| null

The name of a directory or relative path to the source code of your project. When `null` is used it will default to the project root

Maximum length: `256`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-serverless-function-region)

serverlessFunctionRegion

string \| null

The region to deploy Serverless Functions in this project

Maximum length: `4`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-serverless-function-zero-config-failover)

serverlessFunctionZeroConfigFailover

boolean

Specifies whether Zero Config Failover is enabled for this project.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-oidc-token-config)

oidcTokenConfig

object

OpenID Connect JSON Web Token generation configuration.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-oidc-token-config-enabled)

oidcTokenConfig.enabled

boolean

default:true

deprecated

Whether or not to generate OpenID Connect JSON Web Tokens.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-oidc-token-config-issuer-mode)

oidcTokenConfig.issuerMode

enum<string>

default:team

team: `https://oidc.vercel.com/[team_slug]` global: `https://oidc.vercel.com`

Available options:

`team`,

`global`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-enable-affected-projects-deployments)

enableAffectedProjectsDeployments

boolean

Opt-in to skip deployments when there are no changes to the root directory and its dependencies

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-resource-config)

resourceConfig

object

Specifies resource override configuration for the project

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-resource-config-fluid)

resourceConfig.fluid

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-resource-config-function-default-regions)

resourceConfig.functionDefaultRegions

string\[\]

The regions to deploy Vercel Functions to for this project

Minimum length: `1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-resource-config-function-default-timeout)

resourceConfig.functionDefaultTimeout

number

Required range: `1 <= x <= 900`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-resource-config-function-default-memory-type)

resourceConfig.functionDefaultMemoryType

enum<string>

Available options:

`standard_legacy`,

`standard`,

`performance`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-resource-config-function-zero-config-failover)

resourceConfig.functionZeroConfigFailover

boolean

Specifies whether Zero Config Failover is enabled for this project.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-resource-config-elastic-concurrency-enabled)

resourceConfig.elasticConcurrencyEnabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-resource-config-build-machine-type)

resourceConfig.buildMachineType

enum<string>

Available options:

`enhanced`,

`turbo`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#body-resource-config-is-nsnb-disabled)

resourceConfig.isNSNBDisabled

boolean

#### Response

200

application/json

The project was successfuly created

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-account-id)

accountId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-directory-listing)

directoryListing

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-node-version)

nodeVersion

enum<string>

required

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-resource-config)

resourceConfig

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-resource-config-function-default-regions)

resourceConfig.functionDefaultRegions

string\[\]

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-resource-config-elastic-concurrency-enabled)

resourceConfig.elasticConcurrencyEnabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-resource-config-fluid)

resourceConfig.fluid

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-resource-config-function-default-timeout)

resourceConfig.functionDefaultTimeout

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-resource-config-function-default-memory-type)

resourceConfig.functionDefaultMemoryType

enum<string>

Available options:

`standard_legacy`,

`standard`,

`performance`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-resource-config-function-zero-config-failover)

resourceConfig.functionZeroConfigFailover

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-resource-config-build-machine-type)

resourceConfig.buildMachineType

enum<string>

Available options:

`enhanced`,

`turbo`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-resource-config-is-nsnb-disabled)

resourceConfig.isNSNBDisabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-default-resource-config)

defaultResourceConfig

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-default-resource-config-function-default-regions)

defaultResourceConfig.functionDefaultRegions

string\[\]

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-default-resource-config-elastic-concurrency-enabled)

defaultResourceConfig.elasticConcurrencyEnabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-default-resource-config-fluid)

defaultResourceConfig.fluid

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-default-resource-config-function-default-timeout)

defaultResourceConfig.functionDefaultTimeout

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-default-resource-config-function-default-memory-type)

defaultResourceConfig.functionDefaultMemoryType

enum<string>

Available options:

`standard_legacy`,

`standard`,

`performance`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-default-resource-config-function-zero-config-failover)

defaultResourceConfig.functionZeroConfigFailover

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-default-resource-config-build-machine-type)

defaultResourceConfig.buildMachineType

enum<string>

Available options:

`enhanced`,

`turbo`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-default-resource-config-is-nsnb-disabled)

defaultResourceConfig.isNSNBDisabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-analytics)

analytics

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-analytics-id)

analytics.id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-analytics-disabled-at)

analytics.disabledAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-analytics-enabled-at)

analytics.enabledAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-analytics-canceled-at)

analytics.canceledAt

number \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-analytics-paid-at)

analytics.paidAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-analytics-sample-rate-percent)

analytics.sampleRatePercent

number \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-analytics-spend-limit-in-dollars)

analytics.spendLimitInDollars

number \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-speed-insights)

speedInsights

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-speed-insights-id)

speedInsights.id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-speed-insights-enabled-at)

speedInsights.enabledAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-speed-insights-disabled-at)

speedInsights.disabledAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-speed-insights-canceled-at)

speedInsights.canceledAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-speed-insights-has-data)

speedInsights.hasData

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-speed-insights-paid-at)

speedInsights.paidAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-auto-expose-system-envs)

autoExposeSystemEnvs

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-auto-assign-custom-domains)

autoAssignCustomDomains

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-auto-assign-custom-domains-updated-by)

autoAssignCustomDomainsUpdatedBy

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-build-command)

buildCommand

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-command-for-ignoring-build-step)

commandForIgnoringBuildStep

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-connect-configurations)

connectConfigurations

object\[\] \| null

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-connect-configurations-env-id)

envId

stringenum<string>

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-connect-configurations-connect-configuration-id)

connectConfigurationId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-connect-configurations-passive)

passive

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-connect-configurations-builds-enabled)

buildsEnabled

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-connect-configurations-created-at)

createdAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-connect-configurations-updated-at)

updatedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-connect-configurations-dc)

dc

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-connect-configurations-aws)

aws

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-connect-configuration-id)

connectConfigurationId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-connect-builds-enabled)

connectBuildsEnabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-passive-connect-configuration-id)

passiveConnectConfigurationId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-created-at)

createdAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-customer-support-code-visibility)

customerSupportCodeVisibility

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-crons)

crons

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-crons-enabled-at)

crons.enabledAt

number

required

The time the feature was enabled for this project. Note: It enables automatically with the first Deployment that outputs cronjobs.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-crons-disabled-at)

crons.disabledAt

number \| null

required

The time the feature was disabled for this project.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-crons-updated-at)

crons.updatedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-crons-deployment-id)

crons.deploymentId

string \| null

required

The ID of the Deployment from which the definitions originated.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-crons-definitions)

crons.definitions

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-data-cache)

dataCache

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-data-cache-user-disabled)

dataCache.userDisabled

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-data-cache-storage-size-bytes)

dataCache.storageSizeBytes

number \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-data-cache-unlimited)

dataCache.unlimited

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-deployment-expiration)

deploymentExpiration

object \| null

Retention policies for deployments. These are enforced at the project level, but we also maintain an instance of this at the team level as a default policy that gets applied to new projects.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-deployment-expiration-expiration-days)

deploymentExpiration.expirationDays

number

Number of days to keep non-production deployments (mostly preview deployments) before soft deletion.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-deployment-expiration-expiration-days-production)

deploymentExpiration.expirationDaysProduction

number

Number of days to keep production deployments before soft deletion.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-deployment-expiration-expiration-days-canceled)

deploymentExpiration.expirationDaysCanceled

number

Number of days to keep canceled deployments before soft deletion.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-deployment-expiration-expiration-days-errored)

deploymentExpiration.expirationDaysErrored

number

Number of days to keep errored deployments before soft deletion.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-deployment-expiration-deployments-to-keep)

deploymentExpiration.deploymentsToKeep

number

Minimum number of production deployments to keep for this project, even if they are over the production expiration limit.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-dev-command)

devCommand

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-install-command)

installCommand

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env)

env

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-type)

type

enum<string>

required

Available options:

`system`,

`encrypted`,

`plain`,

`sensitive`,

`secret`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-value)

value

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-key)

key

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-target)

target

enum<string>\[\]enum<string>

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-sunset-secret-id)

sunsetSecretId

string

This is used to identiy variables that have been migrated from type secret to sensitive.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-decrypted)

decrypted

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-vsm-value)

vsmValue

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-id)

id

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-configuration-id)

configurationId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-created-at)

createdAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-updated-at)

updatedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-created-by)

createdBy

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-updated-by)

updatedBy

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-git-branch)

gitBranch

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-edge-config-id)

edgeConfigId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-edge-config-token-id)

edgeConfigTokenId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-content-hint)

contentHint

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-internal-content-hint)

internalContentHint

object \| null

Similar to `contentHints`, but should not be exposed to the user.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-comment)

comment

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-env-custom-environment-ids)

customEnvironmentIds

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-custom-environments)

customEnvironments

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-custom-environments-id)

id

string

required

Unique identifier for the custom environment (format: env\_\*)

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-custom-environments-slug)

slug

string

required

URL-friendly name of the environment

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-custom-environments-type)

type

enum<string>

required

The type of environment (production, preview, or development)

Available options:

`preview`,

`production`,

`development`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-custom-environments-created-at)

createdAt

number

required

Timestamp when the environment was created

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-custom-environments-updated-at)

updatedAt

number

required

Timestamp when the environment was last updated

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-custom-environments-description)

description

string

Optional description of the environment's purpose

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-custom-environments-branch-matcher)

branchMatcher

object

Configuration for matching git branches to this environment

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-custom-environments-domains)

domains

object\[\]

List of domains associated with this environment

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-custom-environments-current-deployment-aliases)

currentDeploymentAliases

string\[\]

List of aliases for the current deployment

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-framework)

framework

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-git-fork-protection)

gitForkProtection

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-git-lfs)

gitLFS

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-ip-buckets)

ipBuckets

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-ip-buckets-bucket)

bucket

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-ip-buckets-support-until)

supportUntil

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments)

latestDeployments

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-created-at)

createdAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-created-in)

createdIn

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-creator)

creator

object \| null

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-deployment-hostname)

deploymentHostname

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-plan)

plan

enum<string>

required

Available options:

`pro`,

`enterprise`,

`hobby`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-private)

private

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-ready-state)

readyState

enum<string>

required

Available options:

`BUILDING`,

`ERROR`,

`INITIALIZING`,

`QUEUED`,

`READY`,

`CANCELED`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-type)

type

enum<string>

required

Available options:

`LAMBDAS`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-url)

url

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-user-id)

userId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-alias)

alias

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-alias-assigned)

aliasAssigned

numberboolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-alias-error)

aliasError

object \| null

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-alias-final)

aliasFinal

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-automatic-aliases)

automaticAliases

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-branch-matcher)

branchMatcher

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-building-at)

buildingAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-builds)

builds

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-checks-conclusion)

checksConclusion

enum<string>

Available options:

`succeeded`,

`failed`,

`skipped`,

`canceled`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-checks-state)

checksState

enum<string>

Available options:

`registered`,

`running`,

`completed`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-connect-builds-enabled)

connectBuildsEnabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-connect-configuration-id)

connectConfigurationId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-deleted-at)

deletedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-forced)

forced

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-meta)

meta

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-monorepo-manager)

monorepoManager

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-oidc-token-claims)

oidcTokenClaims

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-preview-comments-enabled)

previewCommentsEnabled

boolean

Whether or not preview comments are enabled for the deployment

Example:

`false`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-ready-at)

readyAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-ready-substate)

readySubstate

enum<string>

Available options:

`STAGED`,

`ROLLING`,

`PROMOTED`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-requested-at)

requestedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-target)

target

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-team-id)

teamId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-latest-deployments-with-cache)

withCache

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-link)

link

object

- Option 1

- Option 2

- Option 3

- Option 4

- Option 5


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-link-org)

link.org

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-link-type)

link.type

enum<string>

required

Available options:

`github`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-link-deploy-hooks)

link.deployHooks

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-link-git-credential-id)

link.gitCredentialId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-link-production-branch)

link.productionBranch

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-link-repo-owner-id)

link.repoOwnerId

number

A new field, should be included in all new project links, is being added just in time when a deployment is created. This is needed for Protected Git scopes.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-link-repo)

link.repo

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-link-repo-id)

link.repoId

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-link-created-at)

link.createdAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-link-updated-at)

link.updatedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-link-sourceless)

link.sourceless

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-microfrontends)

microfrontends

object

- Option 1

- Option 2

- Option 3


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-microfrontends-is-default-app)

microfrontends.isDefaultApp

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-microfrontends-updated-at)

microfrontends.updatedAt

number

required

Timestamp when the microfrontends settings were last updated.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-microfrontends-group-ids)

microfrontends.groupIds

string\[\]

required

The group IDs of microfrontends that this project belongs to. Each microfrontend project must belong to a microfrontends group that is the set of microfrontends that are used together.

Required array length: `2` elements

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-microfrontends-enabled)

microfrontends.enabled

boolean

required

Whether microfrontends are enabled for this project.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-microfrontends-default-route)

microfrontends.defaultRoute

string

A path that is used to take screenshots and as the default path in preview links when a domain for this microfrontend is shown in the UI. Includes the leading slash, e.g. `/docs`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-microfrontends-free-project-for-legacy-limits)

microfrontends.freeProjectForLegacyLimits

boolean

Whether the project was part of the legacy limits for hobby and pro-trial before billing was added. This field is only set when the team is upgraded to a paid plan and we are backfilling the subscription status. We cap the subscription to 2 projects and set this field for the 3rd project. When this field is set, the project is not charged for and we do not call any billing APIs for this project.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-options-allowlist)

optionsAllowlist

object \| null

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-options-allowlist-paths)

optionsAllowlist.paths

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-output-directory)

outputDirectory

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-password-protection)

passwordProtection

object \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-production-deployments-fast-lane)

productionDeploymentsFastLane

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-public-source)

publicSource

boolean \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-rollback-description)

rollbackDescription

object

Description of why a project was rolled back, and by whom. Note that lastAliasRequest contains the from/to details of the rollback.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-rollback-description-user-id)

rollbackDescription.userId

string

required

The user who rolled back the project.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-rollback-description-username)

rollbackDescription.username

string

required

The username of the user who rolled back the project.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-rollback-description-description)

rollbackDescription.description

string

required

User-supplied explanation of why they rolled back the project. Limited to 250 characters.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-rollback-description-created-at)

rollbackDescription.createdAt

number

required

Timestamp of when the rollback was requested.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-rolling-release)

rollingRelease

object \| null

Project-level rolling release configuration that defines how deployments should be gradually rolled out

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-rolling-release-target)

rollingRelease.target

string

required

The environment that the release targets, currently only supports production. Adding in case we want to configure with alias groups or custom environments.

Example:

`"production"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-rolling-release-stages)

rollingRelease.stages

object\[\] \| null

An array of all the stages required during a deployment release. Each stage defines a target percentage and advancement rules. The final stage must always have targetPercentage: 100.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-rolling-release-canary-response-header)

rollingRelease.canaryResponseHeader

boolean

Whether the request served by a canary deployment should return a header indicating a canary was served. Defaults to `false` when omitted.

Example:

`false`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-root-directory)

rootDirectory

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-serverless-function-zero-config-failover)

serverlessFunctionZeroConfigFailover

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-skew-protection-boundary-at)

skewProtectionBoundaryAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-skew-protection-max-age)

skewProtectionMaxAge

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-skip-git-connect-during-link)

skipGitConnectDuringLink

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-static-ips)

staticIps

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-static-ips-builds)

staticIps.builds

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-static-ips-enabled)

staticIps.enabled

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-static-ips-regions)

staticIps.regions

string\[\]

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-source-files-outside-root-directory)

sourceFilesOutsideRootDirectory

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-enable-affected-projects-deployments)

enableAffectedProjectsDeployments

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-sso-protection)

ssoProtection

object \| null

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-sso-protection-deployment-type)

ssoProtection.deploymentType

enum<string>

required

Available options:

`preview`,

`all`,

`prod_deployment_urls_and_all_previews`,

`all_except_custom_domains`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-targets)

targets

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-targets-key)

targets.{key}

object \| null

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-transfer-completed-at)

transferCompletedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-transfer-started-at)

transferStartedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-transfer-to-account-id)

transferToAccountId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-transferred-from-account-id)

transferredFromAccountId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-updated-at)

updatedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-live)

live

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-enable-preview-feedback)

enablePreviewFeedback

boolean \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-enable-production-feedback)

enableProductionFeedback

boolean \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions)

permissions

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-oauth2-connection)

permissions.oauth2Connection

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-user)

permissions.user

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-user-connection)

permissions.userConnection

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-user-sudo)

permissions.userSudo

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-web-authn)

permissions.webAuthn

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-access-group)

permissions.accessGroup

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-agent)

permissions.agent

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-alerts)

permissions.alerts

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-alias-global)

permissions.aliasGlobal

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-analytics-sampling)

permissions.analyticsSampling

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-analytics-usage)

permissions.analyticsUsage

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-api-key)

permissions.apiKey

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-api-key-ai-gateway)

permissions.apiKeyAiGateway

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-api-key-owned-by-self)

permissions.apiKeyOwnedBySelf

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-oauth2-application)

permissions.oauth2Application

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-vercel-app-installation)

permissions.vercelAppInstallation

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-vercel-app-installation-request)

permissions.vercelAppInstallationRequest

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-audit-log)

permissions.auditLog

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-billing-address)

permissions.billingAddress

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-billing-information)

permissions.billingInformation

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-billing-invoice)

permissions.billingInvoice

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-billing-invoice-email-recipient)

permissions.billingInvoiceEmailRecipient

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-billing-invoice-language)

permissions.billingInvoiceLanguage

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-billing-plan)

permissions.billingPlan

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-billing-purchase-order)

permissions.billingPurchaseOrder

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-billing-refund)

permissions.billingRefund

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-billing-tax-id)

permissions.billingTaxId

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-blob)

permissions.blob

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-blob-store-token-set)

permissions.blobStoreTokenSet

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-budget)

permissions.budget

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-cache-artifact)

permissions.cacheArtifact

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-cache-artifact-usage-event)

permissions.cacheArtifactUsageEvent

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-code-checks)

permissions.codeChecks

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-concurrent-builds)

permissions.concurrentBuilds

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-connect)

permissions.connect

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-connect-configuration)

permissions.connectConfiguration

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-data-cache-billing-settings)

permissions.dataCacheBillingSettings

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-default-deployment-protection)

permissions.defaultDeploymentProtection

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-domain)

permissions.domain

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-domain-accept-delegation)

permissions.domainAcceptDelegation

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-domain-auth-codes)

permissions.domainAuthCodes

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-domain-certificate)

permissions.domainCertificate

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-domain-check-config)

permissions.domainCheckConfig

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-domain-move)

permissions.domainMove

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-domain-purchase)

permissions.domainPurchase

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-domain-record)

permissions.domainRecord

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-domain-transfer-in)

permissions.domainTransferIn

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-drain)

permissions.drain

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-edge-config)

permissions.edgeConfig

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-edge-config-item)

permissions.edgeConfigItem

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-edge-config-schema)

permissions.edgeConfigSchema

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-edge-config-token)

permissions.edgeConfigToken

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-endpoint-verification)

permissions.endpointVerification

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-event)

permissions.event

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-file-upload)

permissions.fileUpload

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-flags-explorer-subscription)

permissions.flagsExplorerSubscription

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-git-repository)

permissions.gitRepository

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-image-optimization-new-price)

permissions.imageOptimizationNewPrice

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration)

permissions.integration

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration-account)

permissions.integrationAccount

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration-configuration)

permissions.integrationConfiguration

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration-configuration-projects)

permissions.integrationConfigurationProjects

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration-configuration-role)

permissions.integrationConfigurationRole

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration-configuration-transfer)

permissions.integrationConfigurationTransfer

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration-deployment-action)

permissions.integrationDeploymentAction

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration-event)

permissions.integrationEvent

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration-log)

permissions.integrationLog

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration-resource)

permissions.integrationResource

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration-resource-repl-command)

permissions.integrationResourceReplCommand

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration-resource-secrets)

permissions.integrationResourceSecrets

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration-sso-session)

permissions.integrationSSOSession

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration-store-token-set)

permissions.integrationStoreTokenSet

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration-vercel-configuration-override)

permissions.integrationVercelConfigurationOverride

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-integration-pull-request)

permissions.integrationPullRequest

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-ip-blocking)

permissions.ipBlocking

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-job-global)

permissions.jobGlobal

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-log-drain)

permissions.logDrain

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-marketplace-billing-data)

permissions.marketplaceBillingData

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-marketplace-experimentation-edge-config-data)

permissions.marketplaceExperimentationEdgeConfigData

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-marketplace-experimentation-item)

permissions.marketplaceExperimentationItem

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-marketplace-installation-member)

permissions.marketplaceInstallationMember

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-marketplace-invoice)

permissions.marketplaceInvoice

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-marketplace-settings)

permissions.marketplaceSettings

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-monitoring)

permissions.Monitoring

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-monitoring-alert)

permissions.monitoringAlert

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-monitoring-chart)

permissions.monitoringChart

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-monitoring-query)

permissions.monitoringQuery

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-monitoring-settings)

permissions.monitoringSettings

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-notification-customer-budget)

permissions.notificationCustomerBudget

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-notification-deployment-failed)

permissions.notificationDeploymentFailed

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-notification-domain-configuration)

permissions.notificationDomainConfiguration

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-notification-domain-expire)

permissions.notificationDomainExpire

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-notification-domain-moved)

permissions.notificationDomainMoved

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-notification-domain-purchase)

permissions.notificationDomainPurchase

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-notification-domain-renewal)

permissions.notificationDomainRenewal

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-notification-domain-transfer)

permissions.notificationDomainTransfer

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-notification-domain-unverified)

permissions.notificationDomainUnverified

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-notification-monitoring-alert)

permissions.NotificationMonitoringAlert

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-notification-payment-failed)

permissions.notificationPaymentFailed

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-notification-preferences)

permissions.notificationPreferences

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-notification-statement-of-reasons)

permissions.notificationStatementOfReasons

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-notification-usage-alert)

permissions.notificationUsageAlert

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-observability-configuration)

permissions.observabilityConfiguration

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-observability-funnel)

permissions.observabilityFunnel

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-observability-notebook)

permissions.observabilityNotebook

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-open-telemetry-endpoint)

permissions.openTelemetryEndpoint

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-own-event)

permissions.ownEvent

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-organization-domain)

permissions.organizationDomain

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-password-protection-invoice-item)

permissions.passwordProtectionInvoiceItem

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-payment-method)

permissions.paymentMethod

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-permissions)

permissions.permissions

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-postgres)

permissions.postgres

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-postgres-store-token-set)

permissions.postgresStoreTokenSet

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-preview-deployment-suffix)

permissions.previewDeploymentSuffix

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-transfer-in)

permissions.projectTransferIn

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-pro-trial-onboarding)

permissions.proTrialOnboarding

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-rate-limit)

permissions.rateLimit

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-redis)

permissions.redis

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-redis-store-token-set)

permissions.redisStoreTokenSet

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-remote-caching)

permissions.remoteCaching

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-repository)

permissions.repository

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-saml-config)

permissions.samlConfig

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-secret)

permissions.secret

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-security-plus-configuration)

permissions.securityPlusConfiguration

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-sensitive-environment-variable-policy)

permissions.sensitiveEnvironmentVariablePolicy

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-shared-env-vars)

permissions.sharedEnvVars

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-shared-env-vars-production)

permissions.sharedEnvVarsProduction

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-space)

permissions.space

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-space-run)

permissions.spaceRun

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-store-transfer)

permissions.storeTransfer

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-support-case)

permissions.supportCase

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-support-case-comment)

permissions.supportCaseComment

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-team)

permissions.team

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-team-access-request)

permissions.teamAccessRequest

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-team-fellow-membership)

permissions.teamFellowMembership

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-team-git-exclusivity)

permissions.teamGitExclusivity

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-team-invite)

permissions.teamInvite

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-team-invite-code)

permissions.teamInviteCode

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-team-join)

permissions.teamJoin

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-team-member-mfa-status)

permissions.teamMemberMfaStatus

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-team-microfrontends)

permissions.teamMicrofrontends

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-team-own-membership)

permissions.teamOwnMembership

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-team-own-membership-disconnect-saml)

permissions.teamOwnMembershipDisconnectSAML

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-token)

permissions.token

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-usage)

permissions.usage

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-usage-cycle)

permissions.usageCycle

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-vercel-run)

permissions.vercelRun

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-vercel-run-exec)

permissions.vercelRunExec

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-vpc-peering-connection)

permissions.vpcPeeringConnection

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-web-analytics-plan)

permissions.webAnalyticsPlan

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-webhook)

permissions.webhook

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-webhook-event)

permissions.webhook-event

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-alias-project)

permissions.aliasProject

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-alias-protection-bypass)

permissions.aliasProtectionBypass

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-build-machine)

permissions.buildMachine

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-connect-configuration-link)

permissions.connectConfigurationLink

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-data-cache-namespace)

permissions.dataCacheNamespace

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-deployment)

permissions.deployment

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-deployment-build-logs)

permissions.deploymentBuildLogs

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-deployment-check)

permissions.deploymentCheck

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-deployment-check-preview)

permissions.deploymentCheckPreview

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-deployment-check-re-run-from-production-branch)

permissions.deploymentCheckReRunFromProductionBranch

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-deployment-production-git)

permissions.deploymentProductionGit

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-deployment-v0)

permissions.deploymentV0

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-deployment-preview)

permissions.deploymentPreview

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-deployment-private)

permissions.deploymentPrivate

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-deployment-promote)

permissions.deploymentPromote

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-deployment-rollback)

permissions.deploymentRollback

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-edge-cache-namespace)

permissions.edgeCacheNamespace

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-environments)

permissions.environments

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-job)

permissions.job

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-logs)

permissions.logs

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-logs-preset)

permissions.logsPreset

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-observability-data)

permissions.observabilityData

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-on-demand-build)

permissions.onDemandBuild

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-on-demand-concurrency)

permissions.onDemandConcurrency

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-options-allowlist)

permissions.optionsAllowlist

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-password-protection)

permissions.passwordProtection

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-production-alias-protection-bypass)

permissions.productionAliasProtectionBypass

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project)

permissions.project

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-access-group)

permissions.projectAccessGroup

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-analytics-sampling)

permissions.projectAnalyticsSampling

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-analytics-usage)

permissions.projectAnalyticsUsage

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-check)

permissions.projectCheck

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-check-run)

permissions.projectCheckRun

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-deployment-expiration)

permissions.projectDeploymentExpiration

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-deployment-hook)

permissions.projectDeploymentHook

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-domain)

permissions.projectDomain

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-domain-check-config)

permissions.projectDomainCheckConfig

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-domain-move)

permissions.projectDomainMove

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-env-vars)

permissions.projectEnvVars

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-env-vars-production)

permissions.projectEnvVarsProduction

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-env-vars-unowned-by-integration)

permissions.projectEnvVarsUnownedByIntegration

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-flags)

permissions.projectFlags

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-flags-production)

permissions.projectFlagsProduction

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-from-v0)

permissions.projectFromV0

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-id)

permissions.projectId

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-integration-configuration)

permissions.projectIntegrationConfiguration

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-link)

permissions.projectLink

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-member)

permissions.projectMember

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-monitoring)

permissions.projectMonitoring

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-oidc-token)

permissions.projectOIDCToken

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-permissions)

permissions.projectPermissions

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-production-branch)

permissions.projectProductionBranch

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-protection-bypass)

permissions.projectProtectionBypass

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-rolling-release)

permissions.projectRollingRelease

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-support-case)

permissions.projectSupportCase

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-support-case-comment)

permissions.projectSupportCaseComment

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-tier)

permissions.projectTier

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-transfer)

permissions.projectTransfer

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-transfer-out)

permissions.projectTransferOut

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-project-usage)

permissions.projectUsage

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-seawall-config)

permissions.seawallConfig

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-shared-env-var-connection)

permissions.sharedEnvVarConnection

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-skew-protection)

permissions.skewProtection

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-analytics)

permissions.analytics

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-trusted-ips)

permissions.trustedIps

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-v0-chat)

permissions.v0Chat

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-permissions-web-analytics)

permissions.webAnalytics

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-last-rollback-target)

lastRollbackTarget

object \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-last-alias-request)

lastAliasRequest

object \| null

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-last-alias-request-from-deployment-id)

lastAliasRequest.fromDeploymentId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-last-alias-request-to-deployment-id)

lastAliasRequest.toDeploymentId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-last-alias-request-job-status)

lastAliasRequest.jobStatus

enum<string>

required

Available options:

`succeeded`,

`failed`,

`skipped`,

`pending`,

`in-progress`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-last-alias-request-requested-at)

lastAliasRequest.requestedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-last-alias-request-type)

lastAliasRequest.type

enum<string>

required

Available options:

`promote`,

`rollback`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-last-alias-request-from-rolling-release-id)

lastAliasRequest.fromRollingReleaseId

string

If rolling back from a rolling release, fromDeploymentId captures the "base" of that rolling release, and fromRollingReleaseId captures the "target" of that rolling release.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-protection-bypass)

protectionBypass

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-protection-bypass-key)

protectionBypass.{key}

object

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-has-active-branches)

hasActiveBranches

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-trusted-ips)

trustedIps

object

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-trusted-ips-deployment-type)

trustedIps.deploymentType

enum<string>

required

Available options:

`preview`,

`production`,

`all`,

`prod_deployment_urls_and_all_previews`,

`all_except_custom_domains`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-trusted-ips-addresses)

trustedIps.addresses

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-trusted-ips-protection-mode)

trustedIps.protectionMode

enum<string>

required

Available options:

`additional`,

`exclusive`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-git-comments)

gitComments

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-git-comments-on-pull-request)

gitComments.onPullRequest

boolean

required

Whether the Vercel bot should comment on PRs

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-git-comments-on-commit)

gitComments.onCommit

boolean

required

Whether the Vercel bot should comment on commits

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-git-provider-options)

gitProviderOptions

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-git-provider-options-create-deployments)

gitProviderOptions.createDeployments

enum<string>

required

Whether the Vercel bot should automatically create GitHub deployments [https://docs.github.com/en/rest/deployments/deployments#about-deployments](https://docs.github.com/en/rest/deployments/deployments#about-deployments) NOTE: repository-dispatch events should be used instead

Available options:

`enabled`,

`disabled`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-git-provider-options-disable-repository-dispatch-events)

gitProviderOptions.disableRepositoryDispatchEvents

boolean

Whether the Vercel bot should not automatically create GitHub repository-dispatch events on deployment events. [https://vercel.com/docs/git/vercel-for-github#repository-dispatch-events](https://vercel.com/docs/git/vercel-for-github#repository-dispatch-events)

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-git-provider-options-require-verified-commits)

gitProviderOptions.requireVerifiedCommits

boolean

Whether the project requires commits to be signed before deployments will be created.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-paused)

paused

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-concurrency-bucket-name)

concurrencyBucketName

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-web-analytics)

webAnalytics

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-web-analytics-id)

webAnalytics.id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-web-analytics-disabled-at)

webAnalytics.disabledAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-web-analytics-canceled-at)

webAnalytics.canceledAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-web-analytics-enabled-at)

webAnalytics.enabledAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-web-analytics-has-data)

webAnalytics.hasData

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-security)

security

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-security-attack-mode-enabled)

security.attackModeEnabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-security-attack-mode-updated-at)

security.attackModeUpdatedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-security-firewall-enabled)

security.firewallEnabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-security-firewall-updated-at)

security.firewallUpdatedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-security-attack-mode-active-until)

security.attackModeActiveUntil

number \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-security-firewall-config-version)

security.firewallConfigVersion

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-security-firewall-seawall-enabled)

security.firewallSeawallEnabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-security-ja3-enabled)

security.ja3Enabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-security-ja4-enabled)

security.ja4Enabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-security-firewall-bypass-ips)

security.firewallBypassIps

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-security-managed-rules)

security.managedRules

object \| null

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-security-bot-id-enabled)

security.botIdEnabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-oidc-token-config)

oidcTokenConfig

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-oidc-token-config-enabled)

oidcTokenConfig.enabled

boolean

Whether or not to generate OpenID Connect JSON Web Tokens.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-oidc-token-config-issuer-mode)

oidcTokenConfig.issuerMode

enum<string>

- team: `https://oidc.vercel.com/[team_slug]` \- global: `https://oidc.vercel.com`

Available options:

`team`,

`global`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-tier)

tier

enum<string>

Available options:

`standard`,

`advanced`,

`critical`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-features)

features

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-features-web-analytics)

features.webAnalytics

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-v0)

v0

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-abuse)

abuse

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-abuse-history)

abuse.history

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-abuse-updated-at)

abuse.updatedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-abuse-scanner)

abuse.scanner

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-abuse-block)

abuse.block

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-abuse-block-history)

abuse.blockHistory

object\[\]

- Option 1

- Option 2

- Option 3

- Option 4


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-abuse-interstitial)

abuse.interstitial

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-internal-routes)

internalRoutes

object\[\]

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-internal-routes-src)

src

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-internal-routes-status)

status

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-has-deployments)

hasDeployments

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-dismissed-toasts)

dismissedToasts

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-dismissed-toasts-key)

key

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-dismissed-toasts-dismissed-at)

dismissedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-dismissed-toasts-action)

action

enum<string>

required

Available options:

`cancel`,

`accept`,

`delete`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project#response-dismissed-toasts-value)

value

stringnumberbooleanobject

required

[Retrieve a list of projects](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects) [Find a project by id or name](https://vercel.com/docs/rest-api/reference/endpoints/projects/find-a-project-by-id-or-name)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.