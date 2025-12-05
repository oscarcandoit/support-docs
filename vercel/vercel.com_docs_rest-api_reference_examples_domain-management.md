---
url: "https://vercel.com/docs/rest-api/reference/examples/domain-management"
title: "Domain Management - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/examples/domain-management#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

Examples

Domain Management

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

- [Add a domain](https://vercel.com/docs/rest-api/reference/examples/domain-management#add-a-domain)
- [Add a domain, verify it and setup a redirect](https://vercel.com/docs/rest-api/reference/examples/domain-management#add-a-domain,-verify-it-and-setup-a-redirect)

Examples

# Domain Management

Copy page

Learn how to use the Vercel SDK through real-life examples.

Copy page

## [​](https://vercel.com/docs/rest-api/reference/examples/domain-management\#add-a-domain)  Add a domain

In this example, you will add a new domain to a project and check its configuration.

run.ts

Copy

Ask AI

```
import { Vercel } from '@vercel/sdk';

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});

async function addAndReviewDomain() {
  const domain = 'www.example.com';

  try {
    // Add a new domain
    const addDomainResponse = await vercel.projects.addProjectDomain({
      idOrName: 'my-project', //The project name used in the deployment URL
      requestBody: {
        name: domain,
      },
    });

    console.log(`Domain added: ${addDomainResponse.name}`);
    console.log('Domain Details:', JSON.stringify(addDomainResponse, null, 2));
  } catch (error) {
    console.error(
      error instanceof Error ? `Error: ${error.message}` : String(error),
    );
  }
}

addAndReviewDomain();
```

## [​](https://vercel.com/docs/rest-api/reference/examples/domain-management\#add-a-domain,-verify-it-and-setup-a-redirect)  Add a domain, verify it and setup a redirect

In this example, you will add a custom domain, verify it, and set up a redirect from a subdomain to the main domain.

run.ts

Copy

Ask AI

```
import { Vercel } from '@vercel/sdk';

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});

async function setupDomainWithRedirect() {
  const mainDomain = 'example.com';
  const subDomain = 'hello.example.com';
  const projectName = 'my-project'; //The project name used in the deployment URL

  try {
    // Add main domain
    const mainDomainResponse = await vercel.projects.addProjectDomain({
      idOrName: projectName,
      requestBody: {
        name: mainDomain,
      },
    });

    console.log(`Main domain added: ${mainDomainResponse.name}`);

    const checkConfiguration = await vercel.domains.getDomainConfig({
      domain: mainDomain,
    });

    if (mainDomainResponse.verified && !checkConfiguration.misconfigured) {
      // Add subdomain with 301 redirect to main domain
      const subDomainResponse = await vercel.projects.addProjectDomain({
        idOrName: projectName,
        requestBody: {
          name: subDomain,
          redirect: `https://${mainDomain}`,
          redirectStatusCode: 301,
        },
      });

      console.log(`Subdomain added and redirect set up: ${subDomain}`);
    }
  } catch (error) {
    console.error(
      error instanceof Error ? `Error: ${error.message}` : String(error),
    );
  }
}

setupDomainWithRedirect();
```

[Deployment Automation](https://vercel.com/docs/rest-api/reference/examples/deployments-automation) [Environment Variables](https://vercel.com/docs/rest-api/reference/examples/environment-variables)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.