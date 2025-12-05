---
url: "https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects"
title: "Retrieve a list of projects - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

projects

Retrieve a list of projects

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


getProjects

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projects.getProjects({
    gitForkProtection: "1",
    repoUrl: "https://github.com/vercel/next.js",
    elasticConcurrencyEnabled: "1",
    staticIpsEnabled: "1",
    buildMachineTypes: "default,enhanced",
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
{
  "projects": [\
    {\
      "accountId": "<string>",\
      "analytics": {\
        "id": "<string>",\
        "canceledAt": 123,\
        "disabledAt": 123,\
        "enabledAt": 123,\
        "paidAt": 123,\
        "sampleRatePercent": 123,\
        "spendLimitInDollars": 123\
      },\
      "speedInsights": {\
        "id": "<string>",\
        "enabledAt": 123,\
        "disabledAt": 123,\
        "canceledAt": 123,\
        "hasData": true,\
        "paidAt": 123\
      },\
      "autoExposeSystemEnvs": true,\
      "autoAssignCustomDomains": true,\
      "autoAssignCustomDomainsUpdatedBy": "<string>",\
      "buildCommand": "<string>",\
      "commandForIgnoringBuildStep": "<string>",\
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
      ],\
      "connectConfigurationId": "<string>",\
      "connectBuildsEnabled": true,\
      "passiveConnectConfigurationId": "<string>",\
      "createdAt": 123,\
      "customerSupportCodeVisibility": true,\
      "crons": {\
        "enabledAt": 123,\
        "disabledAt": 123,\
        "updatedAt": 123,\
        "deploymentId": "<string>",\
        "definitions": [\
          {\
            "host": "vercel.com",\
            "path": "/api/crons/sync-something?hello=world",\
            "schedule": "0 0 * * *"\
          }\
        ]\
      },\
      "dataCache": {\
        "userDisabled": true,\
        "storageSizeBytes": 123,\
        "unlimited": true\
      },\
      "deploymentExpiration": {\
        "expirationDays": 123,\
        "expirationDaysProduction": 123,\
        "expirationDaysCanceled": 123,\
        "expirationDaysErrored": 123,\
        "deploymentsToKeep": 123\
      },\
      "devCommand": "<string>",\
      "directoryListing": true,\
      "installCommand": "<string>",\
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
      ],\
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
      ],\
      "framework": "blitzjs",\
      "gitForkProtection": true,\
      "gitLFS": true,\
      "id": "<string>",\
      "ipBuckets": [\
        {\
          "bucket": "<string>",\
          "supportUntil": 123\
        }\
      ],\
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
      ],\
      "link": {\
        "org": "<string>",\
        "repoOwnerId": 123,\
        "repo": "<string>",\
        "repoId": 123,\
        "type": "github",\
        "createdAt": 123,\
        "deployHooks": [\
          {\
            "createdAt": 123,\
            "id": "<string>",\
            "name": "<string>",\
            "ref": "<string>",\
            "url": "<string>"\
          }\
        ],\
        "gitCredentialId": "<string>",\
        "updatedAt": 123,\
        "sourceless": true,\
        "productionBranch": "<string>"\
      },\
      "microfrontends": {\
        "isDefaultApp": true,\
        "updatedAt": 123,\
        "groupIds": [\
          "<string>"\
        ],\
        "enabled": true,\
        "defaultRoute": "<string>",\
        "freeProjectForLegacyLimits": true\
      },\
      "name": "<string>",\
      "nodeVersion": "24.x",\
      "optionsAllowlist": {\
        "paths": [\
          {\
            "value": "<string>"\
          }\
        ]\
      },\
      "outputDirectory": "<string>",\
      "passwordProtection": {},\
      "productionDeploymentsFastLane": true,\
      "publicSource": true,\
      "resourceConfig": {\
        "elasticConcurrencyEnabled": true,\
        "fluid": true,\
        "functionDefaultRegions": [\
          "<string>"\
        ],\
        "functionDefaultTimeout": 123,\
        "functionDefaultMemoryType": "standard_legacy",\
        "functionZeroConfigFailover": true,\
        "buildMachineType": "enhanced",\
        "isNSNBDisabled": true\
      },\
      "rollbackDescription": {\
        "userId": "<string>",\
        "username": "<string>",\
        "description": "<string>",\
        "createdAt": 123\
      },\
      "rollingRelease": {\
        "target": "production",\
        "stages": [\
          {\
            "targetPercentage": 25,\
            "requireApproval": false,\
            "duration": 600,\
            "linearShift": false\
          }\
        ],\
        "canaryResponseHeader": false\
      },\
      "defaultResourceConfig": {\
        "elasticConcurrencyEnabled": true,\
        "fluid": true,\
        "functionDefaultRegions": [\
          "<string>"\
        ],\
        "functionDefaultTimeout": 123,\
        "functionDefaultMemoryType": "standard_legacy",\
        "functionZeroConfigFailover": true,\
        "buildMachineType": "enhanced",\
        "isNSNBDisabled": true\
      },\
      "rootDirectory": "<string>",\
      "serverlessFunctionZeroConfigFailover": true,\
      "skewProtectionBoundaryAt": 123,\
      "skewProtectionMaxAge": 123,\
      "skipGitConnectDuringLink": true,\
      "staticIps": {\
        "builds": true,\
        "enabled": true,\
        "regions": [\
          "<string>"\
        ]\
      },\
      "sourceFilesOutsideRootDirectory": true,\
      "enableAffectedProjectsDeployments": true,\
      "ssoProtection": {\
        "deploymentType": "preview"\
      },\
      "targets": {},\
      "transferCompletedAt": 123,\
      "transferStartedAt": 123,\
      "transferToAccountId": "<string>",\
      "transferredFromAccountId": "<string>",\
      "updatedAt": 123,\
      "live": true,\
      "enablePreviewFeedback": true,\
      "enableProductionFeedback": true,\
      "permissions": {\
        "oauth2Connection": [\
          "create"\
        ],\
        "user": [\
          "create"\
        ],\
        "userConnection": [\
          "create"\
        ],\
        "userSudo": [\
          "create"\
        ],\
        "webAuthn": [\
          "create"\
        ],\
        "accessGroup": [\
          "create"\
        ],\
        "agent": [\
          "create"\
        ],\
        "alerts": [\
          "create"\
        ],\
        "aliasGlobal": [\
          "create"\
        ],\
        "analyticsSampling": [\
          "create"\
        ],\
        "analyticsUsage": [\
          "create"\
        ],\
        "apiKey": [\
          "create"\
        ],\
        "apiKeyAiGateway": [\
          "create"\
        ],\
        "apiKeyOwnedBySelf": [\
          "create"\
        ],\
        "oauth2Application": [\
          "create"\
        ],\
        "vercelAppInstallation": [\
          "create"\
        ],\
        "vercelAppInstallationRequest": [\
          "create"\
        ],\
        "auditLog": [\
          "create"\
        ],\
        "billingAddress": [\
          "create"\
        ],\
        "billingInformation": [\
          "create"\
        ],\
        "billingInvoice": [\
          "create"\
        ],\
        "billingInvoiceEmailRecipient": [\
          "create"\
        ],\
        "billingInvoiceLanguage": [\
          "create"\
        ],\
        "billingPlan": [\
          "create"\
        ],\
        "billingPurchaseOrder": [\
          "create"\
        ],\
        "billingRefund": [\
          "create"\
        ],\
        "billingTaxId": [\
          "create"\
        ],\
        "blob": [\
          "create"\
        ],\
        "blobStoreTokenSet": [\
          "create"\
        ],\
        "budget": [\
          "create"\
        ],\
        "cacheArtifact": [\
          "create"\
        ],\
        "cacheArtifactUsageEvent": [\
          "create"\
        ],\
        "codeChecks": [\
          "create"\
        ],\
        "concurrentBuilds": [\
          "create"\
        ],\
        "connect": [\
          "create"\
        ],\
        "connectConfiguration": [\
          "create"\
        ],\
        "dataCacheBillingSettings": [\
          "create"\
        ],\
        "defaultDeploymentProtection": [\
          "create"\
        ],\
        "domain": [\
          "create"\
        ],\
        "domainAcceptDelegation": [\
          "create"\
        ],\
        "domainAuthCodes": [\
          "create"\
        ],\
        "domainCertificate": [\
          "create"\
        ],\
        "domainCheckConfig": [\
          "create"\
        ],\
        "domainMove": [\
          "create"\
        ],\
        "domainPurchase": [\
          "create"\
        ],\
        "domainRecord": [\
          "create"\
        ],\
        "domainTransferIn": [\
          "create"\
        ],\
        "drain": [\
          "create"\
        ],\
        "edgeConfig": [\
          "create"\
        ],\
        "edgeConfigItem": [\
          "create"\
        ],\
        "edgeConfigSchema": [\
          "create"\
        ],\
        "edgeConfigToken": [\
          "create"\
        ],\
        "endpointVerification": [\
          "create"\
        ],\
        "event": [\
          "create"\
        ],\
        "fileUpload": [\
          "create"\
        ],\
        "flagsExplorerSubscription": [\
          "create"\
        ],\
        "gitRepository": [\
          "create"\
        ],\
        "imageOptimizationNewPrice": [\
          "create"\
        ],\
        "integration": [\
          "create"\
        ],\
        "integrationAccount": [\
          "create"\
        ],\
        "integrationConfiguration": [\
          "create"\
        ],\
        "integrationConfigurationProjects": [\
          "create"\
        ],\
        "integrationConfigurationRole": [\
          "create"\
        ],\
        "integrationConfigurationTransfer": [\
          "create"\
        ],\
        "integrationDeploymentAction": [\
          "create"\
        ],\
        "integrationEvent": [\
          "create"\
        ],\
        "integrationLog": [\
          "create"\
        ],\
        "integrationResource": [\
          "create"\
        ],\
        "integrationResourceReplCommand": [\
          "create"\
        ],\
        "integrationResourceSecrets": [\
          "create"\
        ],\
        "integrationSSOSession": [\
          "create"\
        ],\
        "integrationStoreTokenSet": [\
          "create"\
        ],\
        "integrationVercelConfigurationOverride": [\
          "create"\
        ],\
        "integrationPullRequest": [\
          "create"\
        ],\
        "ipBlocking": [\
          "create"\
        ],\
        "jobGlobal": [\
          "create"\
        ],\
        "logDrain": [\
          "create"\
        ],\
        "marketplaceBillingData": [\
          "create"\
        ],\
        "marketplaceExperimentationEdgeConfigData": [\
          "create"\
        ],\
        "marketplaceExperimentationItem": [\
          "create"\
        ],\
        "marketplaceInstallationMember": [\
          "create"\
        ],\
        "marketplaceInvoice": [\
          "create"\
        ],\
        "marketplaceSettings": [\
          "create"\
        ],\
        "Monitoring": [\
          "create"\
        ],\
        "monitoringAlert": [\
          "create"\
        ],\
        "monitoringChart": [\
          "create"\
        ],\
        "monitoringQuery": [\
          "create"\
        ],\
        "monitoringSettings": [\
          "create"\
        ],\
        "notificationCustomerBudget": [\
          "create"\
        ],\
        "notificationDeploymentFailed": [\
          "create"\
        ],\
        "notificationDomainConfiguration": [\
          "create"\
        ],\
        "notificationDomainExpire": [\
          "create"\
        ],\
        "notificationDomainMoved": [\
          "create"\
        ],\
        "notificationDomainPurchase": [\
          "create"\
        ],\
        "notificationDomainRenewal": [\
          "create"\
        ],\
        "notificationDomainTransfer": [\
          "create"\
        ],\
        "notificationDomainUnverified": [\
          "create"\
        ],\
        "NotificationMonitoringAlert": [\
          "create"\
        ],\
        "notificationPaymentFailed": [\
          "create"\
        ],\
        "notificationPreferences": [\
          "create"\
        ],\
        "notificationStatementOfReasons": [\
          "create"\
        ],\
        "notificationUsageAlert": [\
          "create"\
        ],\
        "observabilityConfiguration": [\
          "create"\
        ],\
        "observabilityFunnel": [\
          "create"\
        ],\
        "observabilityNotebook": [\
          "create"\
        ],\
        "openTelemetryEndpoint": [\
          "create"\
        ],\
        "ownEvent": [\
          "create"\
        ],\
        "organizationDomain": [\
          "create"\
        ],\
        "passwordProtectionInvoiceItem": [\
          "create"\
        ],\
        "paymentMethod": [\
          "create"\
        ],\
        "permissions": [\
          "create"\
        ],\
        "postgres": [\
          "create"\
        ],\
        "postgresStoreTokenSet": [\
          "create"\
        ],\
        "previewDeploymentSuffix": [\
          "create"\
        ],\
        "projectTransferIn": [\
          "create"\
        ],\
        "proTrialOnboarding": [\
          "create"\
        ],\
        "rateLimit": [\
          "create"\
        ],\
        "redis": [\
          "create"\
        ],\
        "redisStoreTokenSet": [\
          "create"\
        ],\
        "remoteCaching": [\
          "create"\
        ],\
        "repository": [\
          "create"\
        ],\
        "samlConfig": [\
          "create"\
        ],\
        "secret": [\
          "create"\
        ],\
        "securityPlusConfiguration": [\
          "create"\
        ],\
        "sensitiveEnvironmentVariablePolicy": [\
          "create"\
        ],\
        "sharedEnvVars": [\
          "create"\
        ],\
        "sharedEnvVarsProduction": [\
          "create"\
        ],\
        "space": [\
          "create"\
        ],\
        "spaceRun": [\
          "create"\
        ],\
        "storeTransfer": [\
          "create"\
        ],\
        "supportCase": [\
          "create"\
        ],\
        "supportCaseComment": [\
          "create"\
        ],\
        "team": [\
          "create"\
        ],\
        "teamAccessRequest": [\
          "create"\
        ],\
        "teamFellowMembership": [\
          "create"\
        ],\
        "teamGitExclusivity": [\
          "create"\
        ],\
        "teamInvite": [\
          "create"\
        ],\
        "teamInviteCode": [\
          "create"\
        ],\
        "teamJoin": [\
          "create"\
        ],\
        "teamMemberMfaStatus": [\
          "create"\
        ],\
        "teamMicrofrontends": [\
          "create"\
        ],\
        "teamOwnMembership": [\
          "create"\
        ],\
        "teamOwnMembershipDisconnectSAML": [\
          "create"\
        ],\
        "token": [\
          "create"\
        ],\
        "usage": [\
          "create"\
        ],\
        "usageCycle": [\
          "create"\
        ],\
        "vercelRun": [\
          "create"\
        ],\
        "vercelRunExec": [\
          "create"\
        ],\
        "vpcPeeringConnection": [\
          "create"\
        ],\
        "webAnalyticsPlan": [\
          "create"\
        ],\
        "webhook": [\
          "create"\
        ],\
        "webhook-event": [\
          "create"\
        ],\
        "aliasProject": [\
          "create"\
        ],\
        "aliasProtectionBypass": [\
          "create"\
        ],\
        "buildMachine": [\
          "create"\
        ],\
        "connectConfigurationLink": [\
          "create"\
        ],\
        "dataCacheNamespace": [\
          "create"\
        ],\
        "deployment": [\
          "create"\
        ],\
        "deploymentBuildLogs": [\
          "create"\
        ],\
        "deploymentCheck": [\
          "create"\
        ],\
        "deploymentCheckPreview": [\
          "create"\
        ],\
        "deploymentCheckReRunFromProductionBranch": [\
          "create"\
        ],\
        "deploymentProductionGit": [\
          "create"\
        ],\
        "deploymentV0": [\
          "create"\
        ],\
        "deploymentPreview": [\
          "create"\
        ],\
        "deploymentPrivate": [\
          "create"\
        ],\
        "deploymentPromote": [\
          "create"\
        ],\
        "deploymentRollback": [\
          "create"\
        ],\
        "edgeCacheNamespace": [\
          "create"\
        ],\
        "environments": [\
          "create"\
        ],\
        "job": [\
          "create"\
        ],\
        "logs": [\
          "create"\
        ],\
        "logsPreset": [\
          "create"\
        ],\
        "observabilityData": [\
          "create"\
        ],\
        "onDemandBuild": [\
          "create"\
        ],\
        "onDemandConcurrency": [\
          "create"\
        ],\
        "optionsAllowlist": [\
          "create"\
        ],\
        "passwordProtection": [\
          "create"\
        ],\
        "productionAliasProtectionBypass": [\
          "create"\
        ],\
        "project": [\
          "create"\
        ],\
        "projectAccessGroup": [\
          "create"\
        ],\
        "projectAnalyticsSampling": [\
          "create"\
        ],\
        "projectAnalyticsUsage": [\
          "create"\
        ],\
        "projectCheck": [\
          "create"\
        ],\
        "projectCheckRun": [\
          "create"\
        ],\
        "projectDeploymentExpiration": [\
          "create"\
        ],\
        "projectDeploymentHook": [\
          "create"\
        ],\
        "projectDomain": [\
          "create"\
        ],\
        "projectDomainCheckConfig": [\
          "create"\
        ],\
        "projectDomainMove": [\
          "create"\
        ],\
        "projectEnvVars": [\
          "create"\
        ],\
        "projectEnvVarsProduction": [\
          "create"\
        ],\
        "projectEnvVarsUnownedByIntegration": [\
          "create"\
        ],\
        "projectFlags": [\
          "create"\
        ],\
        "projectFlagsProduction": [\
          "create"\
        ],\
        "projectFromV0": [\
          "create"\
        ],\
        "projectId": [\
          "create"\
        ],\
        "projectIntegrationConfiguration": [\
          "create"\
        ],\
        "projectLink": [\
          "create"\
        ],\
        "projectMember": [\
          "create"\
        ],\
        "projectMonitoring": [\
          "create"\
        ],\
        "projectOIDCToken": [\
          "create"\
        ],\
        "projectPermissions": [\
          "create"\
        ],\
        "projectProductionBranch": [\
          "create"\
        ],\
        "projectProtectionBypass": [\
          "create"\
        ],\
        "projectRollingRelease": [\
          "create"\
        ],\
        "projectSupportCase": [\
          "create"\
        ],\
        "projectSupportCaseComment": [\
          "create"\
        ],\
        "projectTier": [\
          "create"\
        ],\
        "projectTransfer": [\
          "create"\
        ],\
        "projectTransferOut": [\
          "create"\
        ],\
        "projectUsage": [\
          "create"\
        ],\
        "seawallConfig": [\
          "create"\
        ],\
        "sharedEnvVarConnection": [\
          "create"\
        ],\
        "skewProtection": [\
          "create"\
        ],\
        "analytics": [\
          "create"\
        ],\
        "trustedIps": [\
          "create"\
        ],\
        "v0Chat": [\
          "create"\
        ],\
        "webAnalytics": [\
          "create"\
        ]\
      },\
      "lastRollbackTarget": {},\
      "lastAliasRequest": {\
        "fromDeploymentId": "<string>",\
        "toDeploymentId": "<string>",\
        "fromRollingReleaseId": "<string>",\
        "jobStatus": "succeeded",\
        "requestedAt": 123,\
        "type": "promote"\
      },\
      "protectionBypass": {},\
      "hasActiveBranches": true,\
      "trustedIps": {\
        "deploymentType": "preview",\
        "addresses": [\
          {\
            "value": "<string>",\
            "note": "<string>"\
          }\
        ],\
        "protectionMode": "additional"\
      },\
      "gitComments": {\
        "onPullRequest": true,\
        "onCommit": true\
      },\
      "gitProviderOptions": {\
        "createDeployments": "enabled",\
        "disableRepositoryDispatchEvents": true,\
        "requireVerifiedCommits": true\
      },\
      "paused": true,\
      "concurrencyBucketName": "<string>",\
      "webAnalytics": {\
        "id": "<string>",\
        "disabledAt": 123,\
        "canceledAt": 123,\
        "enabledAt": 123,\
        "hasData": true\
      },\
      "security": {\
        "attackModeEnabled": true,\
        "attackModeUpdatedAt": 123,\
        "firewallEnabled": true,\
        "firewallUpdatedAt": 123,\
        "attackModeActiveUntil": 123,\
        "firewallConfigVersion": 123,\
        "firewallSeawallEnabled": true,\
        "ja3Enabled": true,\
        "ja4Enabled": true,\
        "firewallBypassIps": [\
          "<string>"\
        ],\
        "managedRules": {\
          "bot_filter": {\
            "active": true,\
            "action": "log"\
          },\
          "ai_bots": {\
            "active": true,\
            "action": "log"\
          },\
          "owasp": {\
            "active": true,\
            "action": "log"\
          }\
        },\
        "botIdEnabled": true\
      },\
      "oidcTokenConfig": {\
        "enabled": true,\
        "issuerMode": "team"\
      },\
      "tier": "standard",\
      "features": {\
        "webAnalytics": true\
      },\
      "v0": true,\
      "abuse": {\
        "scanner": "<string>",\
        "history": [\
          {\
            "scanner": "<string>",\
            "reason": "<string>",\
            "by": "<string>",\
            "byId": "<string>",\
            "at": 123\
          }\
        ],\
        "updatedAt": 123,\
        "block": {\
          "action": "blocked",\
          "reason": "<string>",\
          "statusCode": 123,\
          "createdAt": 123,\
          "caseId": "<string>",\
          "actor": "<string>",\
          "comment": "<string>",\
          "isCascading": true\
        },\
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
        ],\
        "interstitial": true\
      },\
      "internalRoutes": [\
        {\
          "src": "<string>",\
          "status": 123\
        }\
      ],\
      "hasDeployments": true,\
      "dismissedToasts": [\
        {\
          "key": "<string>",\
          "dismissedAt": 123,\
          "action": "cancel",\
          "value": "<string>"\
        }\
      ]\
    }\
  ],
  "pagination": {
    "count": 20,
    "next": "JBSWY3DPEHPK3PXP"
  }
}
```

projects

# Retrieve a list of projects

Copy page

Allows to retrieve the list of projects of the authenticated user or team. The list will be paginated and the provided query parameters allow filtering the returned projects.

Copy page

GET

/

v10

/

projects

getProjects

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projects.getProjects({
    gitForkProtection: "1",
    repoUrl: "https://github.com/vercel/next.js",
    elasticConcurrencyEnabled: "1",
    staticIpsEnabled: "1",
    buildMachineTypes: "default,enhanced",
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
{
  "projects": [\
    {\
      "accountId": "<string>",\
      "analytics": {\
        "id": "<string>",\
        "canceledAt": 123,\
        "disabledAt": 123,\
        "enabledAt": 123,\
        "paidAt": 123,\
        "sampleRatePercent": 123,\
        "spendLimitInDollars": 123\
      },\
      "speedInsights": {\
        "id": "<string>",\
        "enabledAt": 123,\
        "disabledAt": 123,\
        "canceledAt": 123,\
        "hasData": true,\
        "paidAt": 123\
      },\
      "autoExposeSystemEnvs": true,\
      "autoAssignCustomDomains": true,\
      "autoAssignCustomDomainsUpdatedBy": "<string>",\
      "buildCommand": "<string>",\
      "commandForIgnoringBuildStep": "<string>",\
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
      ],\
      "connectConfigurationId": "<string>",\
      "connectBuildsEnabled": true,\
      "passiveConnectConfigurationId": "<string>",\
      "createdAt": 123,\
      "customerSupportCodeVisibility": true,\
      "crons": {\
        "enabledAt": 123,\
        "disabledAt": 123,\
        "updatedAt": 123,\
        "deploymentId": "<string>",\
        "definitions": [\
          {\
            "host": "vercel.com",\
            "path": "/api/crons/sync-something?hello=world",\
            "schedule": "0 0 * * *"\
          }\
        ]\
      },\
      "dataCache": {\
        "userDisabled": true,\
        "storageSizeBytes": 123,\
        "unlimited": true\
      },\
      "deploymentExpiration": {\
        "expirationDays": 123,\
        "expirationDaysProduction": 123,\
        "expirationDaysCanceled": 123,\
        "expirationDaysErrored": 123,\
        "deploymentsToKeep": 123\
      },\
      "devCommand": "<string>",\
      "directoryListing": true,\
      "installCommand": "<string>",\
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
      ],\
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
      ],\
      "framework": "blitzjs",\
      "gitForkProtection": true,\
      "gitLFS": true,\
      "id": "<string>",\
      "ipBuckets": [\
        {\
          "bucket": "<string>",\
          "supportUntil": 123\
        }\
      ],\
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
      ],\
      "link": {\
        "org": "<string>",\
        "repoOwnerId": 123,\
        "repo": "<string>",\
        "repoId": 123,\
        "type": "github",\
        "createdAt": 123,\
        "deployHooks": [\
          {\
            "createdAt": 123,\
            "id": "<string>",\
            "name": "<string>",\
            "ref": "<string>",\
            "url": "<string>"\
          }\
        ],\
        "gitCredentialId": "<string>",\
        "updatedAt": 123,\
        "sourceless": true,\
        "productionBranch": "<string>"\
      },\
      "microfrontends": {\
        "isDefaultApp": true,\
        "updatedAt": 123,\
        "groupIds": [\
          "<string>"\
        ],\
        "enabled": true,\
        "defaultRoute": "<string>",\
        "freeProjectForLegacyLimits": true\
      },\
      "name": "<string>",\
      "nodeVersion": "24.x",\
      "optionsAllowlist": {\
        "paths": [\
          {\
            "value": "<string>"\
          }\
        ]\
      },\
      "outputDirectory": "<string>",\
      "passwordProtection": {},\
      "productionDeploymentsFastLane": true,\
      "publicSource": true,\
      "resourceConfig": {\
        "elasticConcurrencyEnabled": true,\
        "fluid": true,\
        "functionDefaultRegions": [\
          "<string>"\
        ],\
        "functionDefaultTimeout": 123,\
        "functionDefaultMemoryType": "standard_legacy",\
        "functionZeroConfigFailover": true,\
        "buildMachineType": "enhanced",\
        "isNSNBDisabled": true\
      },\
      "rollbackDescription": {\
        "userId": "<string>",\
        "username": "<string>",\
        "description": "<string>",\
        "createdAt": 123\
      },\
      "rollingRelease": {\
        "target": "production",\
        "stages": [\
          {\
            "targetPercentage": 25,\
            "requireApproval": false,\
            "duration": 600,\
            "linearShift": false\
          }\
        ],\
        "canaryResponseHeader": false\
      },\
      "defaultResourceConfig": {\
        "elasticConcurrencyEnabled": true,\
        "fluid": true,\
        "functionDefaultRegions": [\
          "<string>"\
        ],\
        "functionDefaultTimeout": 123,\
        "functionDefaultMemoryType": "standard_legacy",\
        "functionZeroConfigFailover": true,\
        "buildMachineType": "enhanced",\
        "isNSNBDisabled": true\
      },\
      "rootDirectory": "<string>",\
      "serverlessFunctionZeroConfigFailover": true,\
      "skewProtectionBoundaryAt": 123,\
      "skewProtectionMaxAge": 123,\
      "skipGitConnectDuringLink": true,\
      "staticIps": {\
        "builds": true,\
        "enabled": true,\
        "regions": [\
          "<string>"\
        ]\
      },\
      "sourceFilesOutsideRootDirectory": true,\
      "enableAffectedProjectsDeployments": true,\
      "ssoProtection": {\
        "deploymentType": "preview"\
      },\
      "targets": {},\
      "transferCompletedAt": 123,\
      "transferStartedAt": 123,\
      "transferToAccountId": "<string>",\
      "transferredFromAccountId": "<string>",\
      "updatedAt": 123,\
      "live": true,\
      "enablePreviewFeedback": true,\
      "enableProductionFeedback": true,\
      "permissions": {\
        "oauth2Connection": [\
          "create"\
        ],\
        "user": [\
          "create"\
        ],\
        "userConnection": [\
          "create"\
        ],\
        "userSudo": [\
          "create"\
        ],\
        "webAuthn": [\
          "create"\
        ],\
        "accessGroup": [\
          "create"\
        ],\
        "agent": [\
          "create"\
        ],\
        "alerts": [\
          "create"\
        ],\
        "aliasGlobal": [\
          "create"\
        ],\
        "analyticsSampling": [\
          "create"\
        ],\
        "analyticsUsage": [\
          "create"\
        ],\
        "apiKey": [\
          "create"\
        ],\
        "apiKeyAiGateway": [\
          "create"\
        ],\
        "apiKeyOwnedBySelf": [\
          "create"\
        ],\
        "oauth2Application": [\
          "create"\
        ],\
        "vercelAppInstallation": [\
          "create"\
        ],\
        "vercelAppInstallationRequest": [\
          "create"\
        ],\
        "auditLog": [\
          "create"\
        ],\
        "billingAddress": [\
          "create"\
        ],\
        "billingInformation": [\
          "create"\
        ],\
        "billingInvoice": [\
          "create"\
        ],\
        "billingInvoiceEmailRecipient": [\
          "create"\
        ],\
        "billingInvoiceLanguage": [\
          "create"\
        ],\
        "billingPlan": [\
          "create"\
        ],\
        "billingPurchaseOrder": [\
          "create"\
        ],\
        "billingRefund": [\
          "create"\
        ],\
        "billingTaxId": [\
          "create"\
        ],\
        "blob": [\
          "create"\
        ],\
        "blobStoreTokenSet": [\
          "create"\
        ],\
        "budget": [\
          "create"\
        ],\
        "cacheArtifact": [\
          "create"\
        ],\
        "cacheArtifactUsageEvent": [\
          "create"\
        ],\
        "codeChecks": [\
          "create"\
        ],\
        "concurrentBuilds": [\
          "create"\
        ],\
        "connect": [\
          "create"\
        ],\
        "connectConfiguration": [\
          "create"\
        ],\
        "dataCacheBillingSettings": [\
          "create"\
        ],\
        "defaultDeploymentProtection": [\
          "create"\
        ],\
        "domain": [\
          "create"\
        ],\
        "domainAcceptDelegation": [\
          "create"\
        ],\
        "domainAuthCodes": [\
          "create"\
        ],\
        "domainCertificate": [\
          "create"\
        ],\
        "domainCheckConfig": [\
          "create"\
        ],\
        "domainMove": [\
          "create"\
        ],\
        "domainPurchase": [\
          "create"\
        ],\
        "domainRecord": [\
          "create"\
        ],\
        "domainTransferIn": [\
          "create"\
        ],\
        "drain": [\
          "create"\
        ],\
        "edgeConfig": [\
          "create"\
        ],\
        "edgeConfigItem": [\
          "create"\
        ],\
        "edgeConfigSchema": [\
          "create"\
        ],\
        "edgeConfigToken": [\
          "create"\
        ],\
        "endpointVerification": [\
          "create"\
        ],\
        "event": [\
          "create"\
        ],\
        "fileUpload": [\
          "create"\
        ],\
        "flagsExplorerSubscription": [\
          "create"\
        ],\
        "gitRepository": [\
          "create"\
        ],\
        "imageOptimizationNewPrice": [\
          "create"\
        ],\
        "integration": [\
          "create"\
        ],\
        "integrationAccount": [\
          "create"\
        ],\
        "integrationConfiguration": [\
          "create"\
        ],\
        "integrationConfigurationProjects": [\
          "create"\
        ],\
        "integrationConfigurationRole": [\
          "create"\
        ],\
        "integrationConfigurationTransfer": [\
          "create"\
        ],\
        "integrationDeploymentAction": [\
          "create"\
        ],\
        "integrationEvent": [\
          "create"\
        ],\
        "integrationLog": [\
          "create"\
        ],\
        "integrationResource": [\
          "create"\
        ],\
        "integrationResourceReplCommand": [\
          "create"\
        ],\
        "integrationResourceSecrets": [\
          "create"\
        ],\
        "integrationSSOSession": [\
          "create"\
        ],\
        "integrationStoreTokenSet": [\
          "create"\
        ],\
        "integrationVercelConfigurationOverride": [\
          "create"\
        ],\
        "integrationPullRequest": [\
          "create"\
        ],\
        "ipBlocking": [\
          "create"\
        ],\
        "jobGlobal": [\
          "create"\
        ],\
        "logDrain": [\
          "create"\
        ],\
        "marketplaceBillingData": [\
          "create"\
        ],\
        "marketplaceExperimentationEdgeConfigData": [\
          "create"\
        ],\
        "marketplaceExperimentationItem": [\
          "create"\
        ],\
        "marketplaceInstallationMember": [\
          "create"\
        ],\
        "marketplaceInvoice": [\
          "create"\
        ],\
        "marketplaceSettings": [\
          "create"\
        ],\
        "Monitoring": [\
          "create"\
        ],\
        "monitoringAlert": [\
          "create"\
        ],\
        "monitoringChart": [\
          "create"\
        ],\
        "monitoringQuery": [\
          "create"\
        ],\
        "monitoringSettings": [\
          "create"\
        ],\
        "notificationCustomerBudget": [\
          "create"\
        ],\
        "notificationDeploymentFailed": [\
          "create"\
        ],\
        "notificationDomainConfiguration": [\
          "create"\
        ],\
        "notificationDomainExpire": [\
          "create"\
        ],\
        "notificationDomainMoved": [\
          "create"\
        ],\
        "notificationDomainPurchase": [\
          "create"\
        ],\
        "notificationDomainRenewal": [\
          "create"\
        ],\
        "notificationDomainTransfer": [\
          "create"\
        ],\
        "notificationDomainUnverified": [\
          "create"\
        ],\
        "NotificationMonitoringAlert": [\
          "create"\
        ],\
        "notificationPaymentFailed": [\
          "create"\
        ],\
        "notificationPreferences": [\
          "create"\
        ],\
        "notificationStatementOfReasons": [\
          "create"\
        ],\
        "notificationUsageAlert": [\
          "create"\
        ],\
        "observabilityConfiguration": [\
          "create"\
        ],\
        "observabilityFunnel": [\
          "create"\
        ],\
        "observabilityNotebook": [\
          "create"\
        ],\
        "openTelemetryEndpoint": [\
          "create"\
        ],\
        "ownEvent": [\
          "create"\
        ],\
        "organizationDomain": [\
          "create"\
        ],\
        "passwordProtectionInvoiceItem": [\
          "create"\
        ],\
        "paymentMethod": [\
          "create"\
        ],\
        "permissions": [\
          "create"\
        ],\
        "postgres": [\
          "create"\
        ],\
        "postgresStoreTokenSet": [\
          "create"\
        ],\
        "previewDeploymentSuffix": [\
          "create"\
        ],\
        "projectTransferIn": [\
          "create"\
        ],\
        "proTrialOnboarding": [\
          "create"\
        ],\
        "rateLimit": [\
          "create"\
        ],\
        "redis": [\
          "create"\
        ],\
        "redisStoreTokenSet": [\
          "create"\
        ],\
        "remoteCaching": [\
          "create"\
        ],\
        "repository": [\
          "create"\
        ],\
        "samlConfig": [\
          "create"\
        ],\
        "secret": [\
          "create"\
        ],\
        "securityPlusConfiguration": [\
          "create"\
        ],\
        "sensitiveEnvironmentVariablePolicy": [\
          "create"\
        ],\
        "sharedEnvVars": [\
          "create"\
        ],\
        "sharedEnvVarsProduction": [\
          "create"\
        ],\
        "space": [\
          "create"\
        ],\
        "spaceRun": [\
          "create"\
        ],\
        "storeTransfer": [\
          "create"\
        ],\
        "supportCase": [\
          "create"\
        ],\
        "supportCaseComment": [\
          "create"\
        ],\
        "team": [\
          "create"\
        ],\
        "teamAccessRequest": [\
          "create"\
        ],\
        "teamFellowMembership": [\
          "create"\
        ],\
        "teamGitExclusivity": [\
          "create"\
        ],\
        "teamInvite": [\
          "create"\
        ],\
        "teamInviteCode": [\
          "create"\
        ],\
        "teamJoin": [\
          "create"\
        ],\
        "teamMemberMfaStatus": [\
          "create"\
        ],\
        "teamMicrofrontends": [\
          "create"\
        ],\
        "teamOwnMembership": [\
          "create"\
        ],\
        "teamOwnMembershipDisconnectSAML": [\
          "create"\
        ],\
        "token": [\
          "create"\
        ],\
        "usage": [\
          "create"\
        ],\
        "usageCycle": [\
          "create"\
        ],\
        "vercelRun": [\
          "create"\
        ],\
        "vercelRunExec": [\
          "create"\
        ],\
        "vpcPeeringConnection": [\
          "create"\
        ],\
        "webAnalyticsPlan": [\
          "create"\
        ],\
        "webhook": [\
          "create"\
        ],\
        "webhook-event": [\
          "create"\
        ],\
        "aliasProject": [\
          "create"\
        ],\
        "aliasProtectionBypass": [\
          "create"\
        ],\
        "buildMachine": [\
          "create"\
        ],\
        "connectConfigurationLink": [\
          "create"\
        ],\
        "dataCacheNamespace": [\
          "create"\
        ],\
        "deployment": [\
          "create"\
        ],\
        "deploymentBuildLogs": [\
          "create"\
        ],\
        "deploymentCheck": [\
          "create"\
        ],\
        "deploymentCheckPreview": [\
          "create"\
        ],\
        "deploymentCheckReRunFromProductionBranch": [\
          "create"\
        ],\
        "deploymentProductionGit": [\
          "create"\
        ],\
        "deploymentV0": [\
          "create"\
        ],\
        "deploymentPreview": [\
          "create"\
        ],\
        "deploymentPrivate": [\
          "create"\
        ],\
        "deploymentPromote": [\
          "create"\
        ],\
        "deploymentRollback": [\
          "create"\
        ],\
        "edgeCacheNamespace": [\
          "create"\
        ],\
        "environments": [\
          "create"\
        ],\
        "job": [\
          "create"\
        ],\
        "logs": [\
          "create"\
        ],\
        "logsPreset": [\
          "create"\
        ],\
        "observabilityData": [\
          "create"\
        ],\
        "onDemandBuild": [\
          "create"\
        ],\
        "onDemandConcurrency": [\
          "create"\
        ],\
        "optionsAllowlist": [\
          "create"\
        ],\
        "passwordProtection": [\
          "create"\
        ],\
        "productionAliasProtectionBypass": [\
          "create"\
        ],\
        "project": [\
          "create"\
        ],\
        "projectAccessGroup": [\
          "create"\
        ],\
        "projectAnalyticsSampling": [\
          "create"\
        ],\
        "projectAnalyticsUsage": [\
          "create"\
        ],\
        "projectCheck": [\
          "create"\
        ],\
        "projectCheckRun": [\
          "create"\
        ],\
        "projectDeploymentExpiration": [\
          "create"\
        ],\
        "projectDeploymentHook": [\
          "create"\
        ],\
        "projectDomain": [\
          "create"\
        ],\
        "projectDomainCheckConfig": [\
          "create"\
        ],\
        "projectDomainMove": [\
          "create"\
        ],\
        "projectEnvVars": [\
          "create"\
        ],\
        "projectEnvVarsProduction": [\
          "create"\
        ],\
        "projectEnvVarsUnownedByIntegration": [\
          "create"\
        ],\
        "projectFlags": [\
          "create"\
        ],\
        "projectFlagsProduction": [\
          "create"\
        ],\
        "projectFromV0": [\
          "create"\
        ],\
        "projectId": [\
          "create"\
        ],\
        "projectIntegrationConfiguration": [\
          "create"\
        ],\
        "projectLink": [\
          "create"\
        ],\
        "projectMember": [\
          "create"\
        ],\
        "projectMonitoring": [\
          "create"\
        ],\
        "projectOIDCToken": [\
          "create"\
        ],\
        "projectPermissions": [\
          "create"\
        ],\
        "projectProductionBranch": [\
          "create"\
        ],\
        "projectProtectionBypass": [\
          "create"\
        ],\
        "projectRollingRelease": [\
          "create"\
        ],\
        "projectSupportCase": [\
          "create"\
        ],\
        "projectSupportCaseComment": [\
          "create"\
        ],\
        "projectTier": [\
          "create"\
        ],\
        "projectTransfer": [\
          "create"\
        ],\
        "projectTransferOut": [\
          "create"\
        ],\
        "projectUsage": [\
          "create"\
        ],\
        "seawallConfig": [\
          "create"\
        ],\
        "sharedEnvVarConnection": [\
          "create"\
        ],\
        "skewProtection": [\
          "create"\
        ],\
        "analytics": [\
          "create"\
        ],\
        "trustedIps": [\
          "create"\
        ],\
        "v0Chat": [\
          "create"\
        ],\
        "webAnalytics": [\
          "create"\
        ]\
      },\
      "lastRollbackTarget": {},\
      "lastAliasRequest": {\
        "fromDeploymentId": "<string>",\
        "toDeploymentId": "<string>",\
        "fromRollingReleaseId": "<string>",\
        "jobStatus": "succeeded",\
        "requestedAt": 123,\
        "type": "promote"\
      },\
      "protectionBypass": {},\
      "hasActiveBranches": true,\
      "trustedIps": {\
        "deploymentType": "preview",\
        "addresses": [\
          {\
            "value": "<string>",\
            "note": "<string>"\
          }\
        ],\
        "protectionMode": "additional"\
      },\
      "gitComments": {\
        "onPullRequest": true,\
        "onCommit": true\
      },\
      "gitProviderOptions": {\
        "createDeployments": "enabled",\
        "disableRepositoryDispatchEvents": true,\
        "requireVerifiedCommits": true\
      },\
      "paused": true,\
      "concurrencyBucketName": "<string>",\
      "webAnalytics": {\
        "id": "<string>",\
        "disabledAt": 123,\
        "canceledAt": 123,\
        "enabledAt": 123,\
        "hasData": true\
      },\
      "security": {\
        "attackModeEnabled": true,\
        "attackModeUpdatedAt": 123,\
        "firewallEnabled": true,\
        "firewallUpdatedAt": 123,\
        "attackModeActiveUntil": 123,\
        "firewallConfigVersion": 123,\
        "firewallSeawallEnabled": true,\
        "ja3Enabled": true,\
        "ja4Enabled": true,\
        "firewallBypassIps": [\
          "<string>"\
        ],\
        "managedRules": {\
          "bot_filter": {\
            "active": true,\
            "action": "log"\
          },\
          "ai_bots": {\
            "active": true,\
            "action": "log"\
          },\
          "owasp": {\
            "active": true,\
            "action": "log"\
          }\
        },\
        "botIdEnabled": true\
      },\
      "oidcTokenConfig": {\
        "enabled": true,\
        "issuerMode": "team"\
      },\
      "tier": "standard",\
      "features": {\
        "webAnalytics": true\
      },\
      "v0": true,\
      "abuse": {\
        "scanner": "<string>",\
        "history": [\
          {\
            "scanner": "<string>",\
            "reason": "<string>",\
            "by": "<string>",\
            "byId": "<string>",\
            "at": 123\
          }\
        ],\
        "updatedAt": 123,\
        "block": {\
          "action": "blocked",\
          "reason": "<string>",\
          "statusCode": 123,\
          "createdAt": 123,\
          "caseId": "<string>",\
          "actor": "<string>",\
          "comment": "<string>",\
          "isCascading": true\
        },\
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
        ],\
        "interstitial": true\
      },\
      "internalRoutes": [\
        {\
          "src": "<string>",\
          "status": 123\
        }\
      ],\
      "hasDeployments": true,\
      "dismissedToasts": [\
        {\
          "key": "<string>",\
          "dismissedAt": 123,\
          "action": "cancel",\
          "value": "<string>"\
        }\
      ]\
    }\
  ],
  "pagination": {
    "count": 20,
    "next": "JBSWY3DPEHPK3PXP"
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-from)

from

string

Query only projects updated after the given timestamp or continuation token.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-git-fork-protection)

gitForkProtection

enum<string>

Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed

Available options:

`1`,

`0`

Example:

`"1"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-limit)

limit

string

Limit the number of projects returned

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-search)

search

string

Search projects by the name field

Maximum length: `100`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-repo)

repo

string

Filter results by repo. Also used for project count

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-repo-id)

repoId

string

Filter results by Repository ID.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-repo-url)

repoUrl

string

Filter results by Repository URL.

Example:

`"https://github.com/vercel/next.js"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-exclude-repos)

excludeRepos

string

Filter results by excluding those projects that belong to a repo

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-edge-config-id)

edgeConfigId

string

Filter results by connected Edge Config ID

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-edge-config-token-id)

edgeConfigTokenId

string

Filter results by connected Edge Config Token ID

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-deprecated)

deprecated

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-elastic-concurrency-enabled)

elasticConcurrencyEnabled

enum<string>

Filter results by projects with elastic concurrency enabled

Available options:

`1`,

`0`

Example:

`"1"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-static-ips-enabled)

staticIpsEnabled

enum<string>

Filter results by projects with Static IPs enabled

Available options:

`0`,

`1`

Example:

`"1"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-build-machine-types)

buildMachineTypes

string

Filter results by build machine types. Accepts comma-separated values. Use "default" for projects without a build machine type set.

Example:

`"default,enhanced"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

The paginated list of projects

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects)

projects

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-account-id)

accountId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-directory-listing)

directoryListing

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-node-version)

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-resource-config)

resourceConfig

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-default-resource-config)

defaultResourceConfig

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-analytics)

analytics

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-speed-insights)

speedInsights

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-auto-expose-system-envs)

autoExposeSystemEnvs

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-auto-assign-custom-domains)

autoAssignCustomDomains

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-auto-assign-custom-domains-updated-by)

autoAssignCustomDomainsUpdatedBy

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-build-command)

buildCommand

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-command-for-ignoring-build-step)

commandForIgnoringBuildStep

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-connect-configurations)

connectConfigurations

object\[\] \| null

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-connect-configuration-id)

connectConfigurationId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-connect-builds-enabled)

connectBuildsEnabled

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-passive-connect-configuration-id)

passiveConnectConfigurationId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-created-at)

createdAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-customer-support-code-visibility)

customerSupportCodeVisibility

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-crons)

crons

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-data-cache)

dataCache

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-deployment-expiration)

deploymentExpiration

object \| null

Retention policies for deployments. These are enforced at the project level, but we also maintain an instance of this at the team level as a default policy that gets applied to new projects.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-dev-command)

devCommand

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-install-command)

installCommand

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-env)

env

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-custom-environments)

customEnvironments

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-framework)

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-git-fork-protection)

gitForkProtection

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-git-lfs)

gitLFS

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-ip-buckets)

ipBuckets

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-latest-deployments)

latestDeployments

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-link)

link

object

- Option 1

- Option 2

- Option 3

- Option 4

- Option 5


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-microfrontends)

microfrontends

object

- Option 1

- Option 2

- Option 3


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-options-allowlist)

optionsAllowlist

object \| null

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-output-directory)

outputDirectory

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-password-protection)

passwordProtection

object \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-production-deployments-fast-lane)

productionDeploymentsFastLane

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-public-source)

publicSource

boolean \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-rollback-description)

rollbackDescription

object

Description of why a project was rolled back, and by whom. Note that lastAliasRequest contains the from/to details of the rollback.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-rolling-release)

rollingRelease

object \| null

Project-level rolling release configuration that defines how deployments should be gradually rolled out

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-root-directory)

rootDirectory

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-serverless-function-zero-config-failover)

serverlessFunctionZeroConfigFailover

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-skew-protection-boundary-at)

skewProtectionBoundaryAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-skew-protection-max-age)

skewProtectionMaxAge

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-skip-git-connect-during-link)

skipGitConnectDuringLink

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-static-ips)

staticIps

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-source-files-outside-root-directory)

sourceFilesOutsideRootDirectory

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-enable-affected-projects-deployments)

enableAffectedProjectsDeployments

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-sso-protection)

ssoProtection

object \| null

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-targets)

targets

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-transfer-completed-at)

transferCompletedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-transfer-started-at)

transferStartedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-transfer-to-account-id)

transferToAccountId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-transferred-from-account-id)

transferredFromAccountId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-updated-at)

updatedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-live)

live

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-enable-preview-feedback)

enablePreviewFeedback

boolean \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-enable-production-feedback)

enableProductionFeedback

boolean \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-permissions)

permissions

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-last-rollback-target)

lastRollbackTarget

object \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-last-alias-request)

lastAliasRequest

object \| null

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-protection-bypass)

protectionBypass

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-has-active-branches)

hasActiveBranches

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-trusted-ips)

trustedIps

object

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-git-comments)

gitComments

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-git-provider-options)

gitProviderOptions

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-paused)

paused

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-concurrency-bucket-name)

concurrencyBucketName

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-web-analytics)

webAnalytics

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-security)

security

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-oidc-token-config)

oidcTokenConfig

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-tier)

tier

enum<string>

Available options:

`standard`,

`advanced`,

`critical`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-features)

features

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-v0)

v0

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-abuse)

abuse

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-internal-routes)

internalRoutes

object\[\]

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-has-deployments)

hasDeployments

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-projects-dismissed-toasts)

dismissedToasts

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-pagination)

pagination

object

required

This object contains information related to the pagination of the current request using continuation tokens. Since CosmosDB doesn't support going to previous pages, only count and next are provided.

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-pagination-count)

pagination.count

number

required

Amount of items in the current page.

Example:

`20`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects#response-pagination-next)

pagination.next

string \| null

required

Continuation token that must be used to request the next page. Base32 encoded for safe URL transmission.

Example:

`"JBSWY3DPEHPK3PXP"`

[Update the data cache feature](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-the-data-cache-feature) [Create a new project](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.