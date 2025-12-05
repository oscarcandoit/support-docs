---
url: "https://vercel.com/docs/rest-api/reference/examples/deployments-automation"
title: "Deployment Automation - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/examples/deployments-automation#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

Examples

Deployment Automation

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

- [Using the REST API](https://vercel.com/docs/rest-api/reference/welcome)

- [Using the Vercel SDK](https://vercel.com/docs/rest-api/reference/sdk)

- [Errors](https://vercel.com/docs/rest-api/reference/errors)

##### Examples

- [Deployment Automation](https://vercel.com/docs/rest-api/reference/examples/deployments-automation)
- [Domain Management](https://vercel.com/docs/rest-api/reference/examples/domain-management)
- [Environment Variables](https://vercel.com/docs/rest-api/reference/examples/environment-variables)
- [Integrations](https://vercel.com/docs/rest-api/reference/examples/integrations)
- [Logs and Monitoring](https://vercel.com/docs/rest-api/reference/examples/logs-monitoring)
- [Project Management](https://vercel.com/docs/rest-api/reference/examples/project-management)
- [Team and User Management](https://vercel.com/docs/rest-api/reference/examples/team-management)
- [Vercel WAF Management](https://vercel.com/docs/rest-api/reference/examples/firewall-management)
- [Rolling Releases Management](https://vercel.com/docs/rest-api/reference/examples/rolling-releases)

On this page

- [Create a deployment](https://vercel.com/docs/rest-api/reference/examples/deployments-automation#create-a-deployment)
- [Create a deployment with alias](https://vercel.com/docs/rest-api/reference/examples/deployments-automation#create-a-deployment-with-alias)

Examples

# Deployment Automation

Copy page

Learn how to use the Vercel SDK through real-life examples.

Copy page

## [​](https://vercel.com/docs/rest-api/reference/examples/deployments-automation\#create-a-deployment)  Create a deployment

In this example, you will trigger a new deployment from a GitHub repository and then retrieve its status.

run.ts

Copy

Ask AI

```
import { Vercel } from '@vercel/sdk';

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});

async function createAndCheckDeployment() {
  try {
    // Create a new deployment
    const createResponse = await vercel.deployments.createDeployment({
      requestBody: {
        name: 'my-project', //The project name used in the deployment URL
        target: 'production',
        gitSource: {
          type: 'github',
          repo: 'repo-name',
          ref: 'main',
          org: 'org-name', //For a personal account, the org-name is your GH username
        },
      },
    });

    console.log(
      `Deployment created: ID ${createResponse.id} and status ${createResponse.status}`,
    );
  } catch (error) {
    console.error(
      error instanceof Error ? `Error: ${error.message}` : String(error),
    );
  }
}

createAndCheckDeployment();
```

## [​](https://vercel.com/docs/rest-api/reference/examples/deployments-automation\#create-a-deployment-with-alias)  Create a deployment with alias

In this example, you will create a deployment, wait for it to complete, and then create an alias if successful.

run.ts

Copy

Ask AI

```
import { Vercel } from '@vercel/sdk';

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});

async function createDeploymentAndAlias() {
  try {
    // Create a new deployment
    const createResponse = await vercel.deployments.createDeployment({
      requestBody: {
        name: 'my-project', //The project name used in the deployment URL
        target: 'production',
        gitSource: {
          type: 'github',
          repo: 'repo-name',
          ref: 'main',
          org: 'org-name', //For a personal account, the org-name is your GH username
        },
      },
    });

    const deploymentId = createResponse.id;

    console.log(
      `Deployment created: ID ${deploymentId} and status ${createResponse.status}`,
    );

    // Check deployment status
    let deploymentStatus;
    let deploymentURL;
    do {
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait 5 seconds between checks

      const statusResponse = await vercel.deployments.getDeployment({
        idOrUrl: deploymentId,
        withGitRepoInfo: 'true',
      });

      deploymentStatus = statusResponse.status;
      deploymentURL = statusResponse.url;
      console.log(`Deployment status: ${deploymentStatus}`);
    } while (
      deploymentStatus === 'BUILDING' ||
      deploymentStatus === 'INITIALIZING'
    );

    if (deploymentStatus === 'READY') {
      console.log(`Deployment successful. URL: ${deploymentURL}`);

      const aliasResponse = await vercel.aliases.assignAlias({
        id: deploymentId,
        requestBody: {
          alias: `my-project-alias.vercel.app`,
          redirect: null,
        },
      });

      console.log(`Alias created: ${aliasResponse.alias}`);
    } else {
      console.log('Deployment failed or was canceled');
    }
  } catch (error) {
    console.error(
      error instanceof Error ? `Error: ${error.message}` : String(error),
    );
  }
}

createDeploymentAndAlias();
```

[Errors](https://vercel.com/docs/rest-api/reference/errors) [Domain Management](https://vercel.com/docs/rest-api/reference/examples/domain-management)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.