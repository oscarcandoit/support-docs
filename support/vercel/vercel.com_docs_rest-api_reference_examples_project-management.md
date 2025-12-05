---
url: "https://vercel.com/docs/rest-api/reference/examples/project-management"
title: "Project Management - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/examples/project-management#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

Examples

Project Management

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

- [Create a new project](https://vercel.com/docs/rest-api/reference/examples/project-management#create-a-new-project)
- [Create a new project with additional setup](https://vercel.com/docs/rest-api/reference/examples/project-management#create-a-new-project-with-additional-setup)

Examples

# Project Management

Copy page

Learn how to use the Vercel SDK through real-life examples.

Copy page

## [​](https://vercel.com/docs/rest-api/reference/examples/project-management\#create-a-new-project)  Create a new project

In this example, you will create a new project and retrieve its details. You will use the following method:

- Create project

run.ts

Copy

Ask AI

```
import { Vercel } from '@vercel/sdk';

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});

async function createAndGetProject() {
  try {
    const createResponse = await vercel.projects.createProject({
      requestBody: {
        name: 'my-new-project',
        framework: 'nextjs',
      },
    });

    console.log(`Project created: ${createResponse.id}`);
    console.log('Project Details:', JSON.stringify(createResponse, null, 2));
  } catch (error) {
    console.error(
      error instanceof Error ? `Error: ${error.message}` : String(error),
    );
  }
}

createAndGetProject();
```

## [​](https://vercel.com/docs/rest-api/reference/examples/project-management\#create-a-new-project-with-additional-setup)  Create a new project with additional setup

In this example, you will create a new project, add environment variables, and set up automatic GitHub deployments.

- Create project
- Create env

run.ts

Copy

Ask AI

```
import { Vercel } from '@vercel/sdk';

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});

async function setupProjectWithGitHub() {
  try {
    // Create a new project with GH integration
    const createResponse = await vercel.projects.createProject({
      requestBody: {
        name: 'advanced-project',
        framework: 'nextjs',
        gitRepository: {
          repo: 'your-username-or-orgname/your-repo-name', //The repository should have been created before and the GH account is connected to your Vercel account
          type: 'github',
        },
      },
    });

    console.log(`Project created: ${createResponse.id}`);

    const envResponse = await vercel.projects.createProjectEnv({
      idOrName: createResponse.id,
      upsert: 'true',
      requestBody: [\
        {\
          key: 'DATABASE_URL',\
          value: 'postgresql://user:pass@host:5432/db',\
          type: 'encrypted', // Encrypted when saved and viewable in the Vercel dashboard with correct permissions\
          target: ['production', 'preview'],\
        },\
        {\
          key: 'API_KEY',\
          value: 'your-api-key',\
          type: 'encrypted', // Encrypted when saved and viewable in the Vercel dashboard with correct permissions\
          target: ['production'],\
        },\
        {\
          key: 'API_URL',\
          value: 'your-api-url',\
          type: 'plain',\
          target: ['production', 'preview'],\
        },\
      ],
    });

    console.log('Environment variables added:', envResponse.created);
  } catch (error) {
    console.error(
      error instanceof Error ? `Error: ${error.message}` : String(error),
    );
  }
}

setupProjectWithGitHub();
```

[Logs and Monitoring](https://vercel.com/docs/rest-api/reference/examples/logs-monitoring) [Team and User Management](https://vercel.com/docs/rest-api/reference/examples/team-management)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.