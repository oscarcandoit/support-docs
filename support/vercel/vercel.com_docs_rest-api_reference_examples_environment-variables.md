---
url: "https://vercel.com/docs/rest-api/reference/examples/environment-variables"
title: "Environment Variables - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/examples/environment-variables#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

Examples

Environment Variables

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

- [Add environment variables to a project](https://vercel.com/docs/rest-api/reference/examples/environment-variables#add-environment-variables-to-a-project)
- [Manage variables across projects](https://vercel.com/docs/rest-api/reference/examples/environment-variables#manage-variables-across-projects)

Examples

# Environment Variables

Copy page

Learn how to use the Vercel SDK through real-life examples.

Copy page

## [​](https://vercel.com/docs/rest-api/reference/examples/environment-variables\#add-environment-variables-to-a-project)  Add environment variables to a project

In this example, you will add new environment variables to a project and list the details of the added values.

run.ts

Copy

Ask AI

```
import { Vercel } from '@vercel/sdk';

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});
const projectName = 'my-project'; //The project name used in the deployment URL

async function addAndListEnvVars() {
  try {
    // Add new environment variables
    const addResponse = await vercel.projects.createProjectEnv({
      idOrName: projectName,
      upsert: 'true',
      requestBody: [\
        {\
          key: 'API_KEY',\
          value: 'secret_value',\
          target: ['production', 'preview'],\
          type: 'encrypted',\
        },\
        {\
          key: 'DEBUG',\
          value: 'true',\
          target: ['development'],\
          type: 'plain',\
        },\
      ],
    });
    console.log(
      'Added environment variables:',
      JSON.stringify(addResponse, null, 2),
    );
  } catch (error) {
    console.error(
      error instanceof Error ? `Error: ${error.message}` : String(error),
    );
  }
}

addAndListEnvVars();
```

## [​](https://vercel.com/docs/rest-api/reference/examples/environment-variables\#manage-variables-across-projects)  Manage variables across projects

In this example, you manage environment variables across multiple projects and environments.

run.ts

Copy

Ask AI

```
import { Vercel } from '@vercel/sdk';
import { OneTarget } from '@vercel/sdk/models/operations/createprojectenv';

const PROJECTS = ['project-id-1', 'project-id-2', 'project-id-3'];
const environments = ['development', 'preview', 'production'];
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;

const vercel = new Vercel({
  bearerToken: VERCEL_TOKEN,
});

async function manageEnvironmentVariables() {
  try {
    const variables = [\
      { key: 'API_URL', value: 'https://api.example.com' },\
      { key: 'DEBUG', value: 'true', environments: ['development', 'preview'] },\
      {\
        key: 'SECRET_KEY',\
        value: 'super-secret-key',\
        encrypt: true,\
        environments: ['production', 'preview'],\
      },\
    ];

    for (const projectId of PROJECTS) {
      console.log(`Managing environment variables for project: ${projectId}`);
      for (const variable of variables) {
        const targets =
          (variable.environments as OneTarget[]) ||
          (environments as OneTarget[]);

        const addEnv = await vercel.projects.createProjectEnv({
          idOrName: projectId,
          upsert: 'true',
          requestBody: {
            key: variable.key,
            value: variable.value,
            target: targets,
            type: variable.encrypt ? 'encrypted' : 'plain',
          },
        });
        console.log(addEnv.created);
      }
      const readEnvs = await vercel.projects.filterProjectEnvs({
        idOrName: projectId,
      });
      console.log(
        'Env Details for ',
        projectId,
        ':',
        JSON.stringify(readEnvs, null, 2),
      );
    }
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

manageEnvironmentVariables();
```

[Domain Management](https://vercel.com/docs/rest-api/reference/examples/domain-management) [Integrations](https://vercel.com/docs/rest-api/reference/examples/integrations)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.