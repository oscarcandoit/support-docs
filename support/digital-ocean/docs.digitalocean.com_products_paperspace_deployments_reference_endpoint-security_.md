---
url: "https://docs.digitalocean.com/products/paperspace/deployments/reference/endpoint-security/"
title: "Public and Protected Endpoints in Gradient Deployments | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/deployments.3b7f4d8d82c236b51d91c8becee94bb424055a671131be322532b5d1cd26cc20.svg)Deployments](https://docs.digitalocean.com/products/paperspace/deployments/)
  - [Getting Started](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/quickstart/)
    - [Deploy Model to Endpoint](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/)
  - [How-Tos](https://docs.digitalocean.com/products/paperspace/deployments/how-to/)
    - [Create Deployments](https://docs.digitalocean.com/products/paperspace/deployments/how-to/create-deployments/)
    - [View Logs](https://docs.digitalocean.com/products/paperspace/deployments/how-to/view-deployment-logs/)
    - [View Metrics](https://docs.digitalocean.com/products/paperspace/deployments/how-to/view-deployment-metrics/)
    - [Delete Deployments](https://docs.digitalocean.com/products/paperspace/deployments/how-to/delete-deployments/)
    - [Use Images](https://docs.digitalocean.com/products/paperspace/deployments/how-to/use-images/)
    - [Use Integrations](https://docs.digitalocean.com/products/paperspace/deployments/how-to/use-integrations/)
    - [Use Secrets](https://docs.digitalocean.com/products/paperspace/deployments/how-to/use-secrets/)
    - [Use Custom Containers](https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/)
    - [Use GitHub Actions](https://docs.digitalocean.com/products/paperspace/deployments/how-to/use-github-action/)
  - [Reference](https://docs.digitalocean.com/products/paperspace/deployments/reference/)
    - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
    - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
    - [Gradient API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/)
    - [Deployment Spec](https://docs.digitalocean.com/products/paperspace/deployments/reference/deployment-spec/)
    - [Autoscaling](https://docs.digitalocean.com/products/paperspace/deployments/reference/autoscaling/)
    - [Endpoint Security](https://docs.digitalocean.com/products/paperspace/deployments/reference/endpoint-security/)
    - [Health Checks](https://docs.digitalocean.com/products/paperspace/deployments/reference/health-checks/)
  - [Concepts](https://docs.digitalocean.com/products/paperspace/deployments/concepts/)
    - [Deployment Basics](https://docs.digitalocean.com/products/paperspace/deployments/concepts/deployment-basics/)
  - [Details](https://docs.digitalocean.com/products/paperspace/deployments/details/)
    - [Features](https://docs.digitalocean.com/products/paperspace/deployments/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/paperspace/deployments/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/paperspace/deployments/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/paperspace/deployments/details/limits/)
  - [Support](https://docs.digitalocean.com/products/paperspace/deployments/support/)

- [Deployments](https://docs.digitalocean.com/products/paperspace/deployments/)
- [Reference](https://docs.digitalocean.com/products/paperspace/deployments/reference/)
- Endpoint Security

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Public and Protected Endpoints in Gradient Deployments

Validated on 14 Dec 2023 • Last edited on 18 Dec 2024

Paperspace Deployments are containers-as-a-service that allow you to run container images and serve machine learning models using a high-performance, low-latency service with a RESTful API.

Gradient deployments currently have two levels of endpoint security:

- **Public:** Public endpoints are the default status for Gradient deployments if left unspecified. Public endpoints allow any user with access to the deployment endpoint to access the service. This can be used for internal testing, allowing others access to your service, or prototyping.

- **Protected:** Protected endpoints restrict access to the deployment using a basic access authentication encoded token. To access these endpoints, users need to pass in the encoded token in the authorization header with the API request. If no authorization header, or an incorrect token is passed, the user receives a `401 Unauthorized` response.


## Endpoint security configuration

If creating a deployment through the console, users can configure endpoint security under `Advanced Options`. Users can either generate a new secret or use the value of an existing secret as the security token.

![](https://docs.digitalocean.com/screenshots/paperspace/gradient/security-endpoint-console.7ea720342b1e683d5ae07e707a61bf04fb6ab9707da5aced7c2a728fdb141e3d.png)

Once the deployment is set up with this configuration, the authentication token does not change unless there is a re-deploy, even if the underlying value for the Paperspace secret used to create the token is changed.

## Authorization header usage

Once a protected endpoint is set up, you need two values to generate the authorization header: `username` and `password`.

The username for all Gradient deployments is `paperspace`. The password is the value of the secret specified during the deployment creation process.

To generate the authorization header value, you then need to encode `username:password` using basic access authentication. See [an example site to do the encoding](https://www.debugbear.com/basic-auth-header-generator).

As an example, if the password is `my_password`, encode `paperspace:my_password` using basic access authentication, which returns `Basic cGFwZXJzcGFjZTpteV9wYXNzd29yZA==`.

You can then pass that value in as through an authorization header like:

```bash
curl -H "Authorization: Basic cGFwZXJzcGFjZTpteV9wYXNzd29yZA==" https://abc123.paperspacegradient.com
```

The authentication token only changes on a redeploy of the deployment.

If a secret value was used to create the authorization, and then later changed while the deployment stays active, the security token does not change to that new value.

However, when the user redeploys, the authentication token updates to the current value of the Paperspace secret.

In this article...

- [Endpoint security configuration](https://docs.digitalocean.com/products/paperspace/deployments/reference/endpoint-security/#endpoint-security-configuration)
- [Authorization header usage](https://docs.digitalocean.com/products/paperspace/deployments/reference/endpoint-security/#authorization-header-usage)

##### Company

- [About](https://www.digitalocean.com/about)
- [Careers](https://www.digitalocean.com/careers)
- [Blog](https://www.digitalocean.com/blog)

##### Docs

- [Docs Home](https://docs.digitalocean.com/)
- [API Reference](https://docs.digitalocean.com/reference/api)
- [CLI Reference](https://docs.digitalocean.com/reference/doctl)
- [Release Notes](https://docs.digitalocean.com/release-notes)
- [Trust Platform](https://www.digitalocean.com/trust)

##### Community

- [Tutorials](https://www.digitalocean.com/community/tutorials)
- [Q&A](https://www.digitalocean.com/community/questions)
- [Write for DOnations](https://www.digitalocean.com/community/pages/write-for-digitalocean)
- [Currents Research](https://www.digitalocean.com/currents)
- [Legal](https://www.digitalocean.com/legal)
- [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

##### Support

- [Support Center](https://docs.digitalocean.com/support)
- [Report Abuse](https://www.digitalocean.com/company/contact/abuse)

* * *

Cookie Preferences

© 2025 DigitalOcean, LLC. All rights reserved

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

Loading...

## Product Docs

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

## Marketplace

## DigitalOcean Blog

## Community

navigategoexit

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)