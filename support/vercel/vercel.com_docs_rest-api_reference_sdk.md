---
url: "https://vercel.com/docs/rest-api/reference/sdk"
title: "Using the Vercel SDK - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/sdk#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

Using the Vercel SDK

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

- [Installing Vercel SDK](https://vercel.com/docs/rest-api/reference/sdk#installing-vercel-sdk)
- [Authentication](https://vercel.com/docs/rest-api/reference/sdk#authentication)
- [Troubleshooting](https://vercel.com/docs/rest-api/reference/sdk#troubleshooting)
- [Examples](https://vercel.com/docs/rest-api/reference/sdk#examples)

# Using the Vercel SDK

Copy page

Interact programmatically with your Vercel account using the SDK.

Copy page

The `@vercel/sdk` is a type-safe Typescript SDK that allows you to access the resources and methods of the Vercel REST API.

To view the methods for all endpoints, and explore code examples, see the [reference endpoints documentation](https://vercel.com/docs/rest-api/reference/endpoints).

## [​](https://vercel.com/docs/rest-api/reference/sdk\#installing-vercel-sdk)  Installing Vercel SDK

To download and install Vercel SDK, run the following command:

pnpm

npm

yarn

Copy

Ask AI

```
pnpm i @vercel/sdk
```

### [​](https://vercel.com/docs/rest-api/reference/sdk\#authentication)  Authentication

Vercel Access Tokens are required to authenticate and use the Vercel SDK.Once you have [created a token](https://vercel.com/docs/rest-api/reference/welcome#creating-an-access-token), you can use it to initialize the SDK as follows:

run.ts

Copy

Ask AI

```
import { Vercel } from '@vercel/sdk';

const vercel = new Vercel({
  bearerToken: '<YOUR_BEARER_TOKEN_HERE>',
});
```

### [​](https://vercel.com/docs/rest-api/reference/sdk\#troubleshooting)  Troubleshooting

Make sure that you create a token with the correct Vercel [scope](https://vercel.com/docs/dashboard-features#scope-selector).
If you face permission (403) errors when you are already sending a token, it can be one of the following problems:

- The token you are using has expired. Check the expiry date of the token in the Vercel dashboard.
- The token does not have access to the correct scope, either not the right team or it does not have account level access.
- The resource or operation you are trying to use is not available for that team. For example, AccessGroups is an Enterprise only feature and you are using a token for a team on the pro plan.

### [​](https://vercel.com/docs/rest-api/reference/sdk\#examples)  Examples

Learn how to use Vercel SDK through the following categories of examples:

- [Deployments Automation](https://vercel.com/docs/rest-api/reference/examples/deployments-automation)
- [Project Management](https://vercel.com/docs/rest-api/reference/examples/project-management)
- [Domain Management](https://vercel.com/docs/rest-api/reference/examples/domain-management)
- [Team Management](https://vercel.com/docs/rest-api/reference/examples/team-management)
- [Environment Variables](https://vercel.com/docs/rest-api/reference/examples/environment-variables)
- [Logs and Monitoring](https://vercel.com/docs/rest-api/reference/examples/logs-monitoring)
- [Integrations](https://vercel.com/docs/rest-api/reference/examples/integrations)

[Using the REST API](https://vercel.com/docs/rest-api/reference/welcome) [Errors](https://vercel.com/docs/rest-api/reference/errors)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.