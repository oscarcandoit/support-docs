---
url: "https://docs.digitalocean.com/products/app-platform/how-to/build-locally/"
title: "How to Build Components Locally | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/app-platform.965eeb0520b4c178cc9bf64423065e5aa5c2f47ad6102384e37beca3c079f287.svg)App Platform](https://docs.digitalocean.com/products/app-platform/)
- [Getting Started](https://docs.digitalocean.com/products/app-platform/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/)
  - [Sample Apps](https://docs.digitalocean.com/products/app-platform/getting-started/sample-apps/)
  - [Sample Functions](https://docs.digitalocean.com/products/functions/getting-started/sample-functions/)
  - [Deploy Sample Apps](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-sample-apps/)
  - [Deploy an RSS Reader](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-rss-reader/)
  - [Deploy Etherpad](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-etherpad/)
- [How-Tos](https://docs.digitalocean.com/products/app-platform/how-to/)
  - [Create Apps](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/)
  - [Deploy from Container Images](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/)
  - [Deploy From Monorepos](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-monorepo/)
  - [Deploy Using GitHub Actions](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-github-actions/)
  - [Scale Apps](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/)
  - [Manage Components](https://docs.digitalocean.com/products/app-platform/how-to/manage-components/)
  - [Manage Data Storage](https://docs.digitalocean.com/products/app-platform/how-to/manage-data-storage/)
  - [Manage App Settings](https://docs.digitalocean.com/products/app-platform/how-to/manage-settings/)
  - [Manage Networking](https://docs.digitalocean.com/products/app-platform/how-to/manage-networking/)
  - [Manage Observability](https://docs.digitalocean.com/products/app-platform/how-to/manage-observability/)
  - [Manage Deployments](https://docs.digitalocean.com/products/app-platform/how-to/manage-deployments/)
  - [Access Console](https://docs.digitalocean.com/products/app-platform/how-to/console/)
  - [Restart or Rebuild App](https://docs.digitalocean.com/products/app-platform/how-to/restart-rebuild-app/)
  - [Update App Spec](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/)
  - [Manage Source Repository](https://docs.digitalocean.com/products/app-platform/how-to/manage-source-repo/)
  - [Add "Deploy to DigitalOcean" Button](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/)
  - [Build Locally](https://docs.digitalocean.com/products/app-platform/how-to/build-locally/)
  - [Use MCP Server](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/)
  - [Destroy Apps](https://docs.digitalocean.com/products/app-platform/how-to/destroy-app/)
- [Reference](https://docs.digitalocean.com/products/app-platform/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Apps)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/apps/)
  - [Builds with Buildpacks](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/)
  - [Builds with Dockerfiles](https://docs.digitalocean.com/products/app-platform/reference/dockerfile/)
  - [App Spec Reference](https://docs.digitalocean.com/products/app-platform/reference/app-spec/)
  - [Dev Config Reference](https://docs.digitalocean.com/products/app-platform/reference/dev-config/)
  - [Error Code Reference](https://docs.digitalocean.com/products/app-platform/reference/error-codes/)
- [Concepts](https://docs.digitalocean.com/products/app-platform/concepts/)
  - [Choosing a Plan](https://docs.digitalocean.com/products/app-platform/concepts/choosing-a-plan/)
  - [Platform Upgrade Policy](https://docs.digitalocean.com/products/app-platform/concepts/platform-upgrade-policy/)
  - [Glossary](https://docs.digitalocean.com/glossary/app-platform/)
- [Details](https://docs.digitalocean.com/products/app-platform/details/)
  - [Introduction FAQ](https://docs.digitalocean.com/products/app-platform/details/intro-faq/)
  - [Features](https://docs.digitalocean.com/products/app-platform/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/app-platform/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/app-platform/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/app-platform/details/limits/)
  - [Maintenance](https://docs.digitalocean.com/products/app-platform/details/maintenance/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/app-platform)
- [Support](https://docs.digitalocean.com/products/app-platform/support/)

- [How-Tos](https://docs.digitalocean.com/products/app-platform/how-to/)
- Build Locally

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Build Components Locally

Validated on 18 Aug 2023 • Last edited on 18 Dec 2024

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

You can build your App Platform components locally using the same Cloud Native Buildpack- or Dockerfile-based build process as App Platform. This can improve your development process by allowing you to test and iterate more quickly.

The local build process can also be used to build App Platform containers as part of an existing CI/CD workflow. The containers can be deployed directly to App Platform by pushing them to a DigitalOcean Container Registry.

## Prerequisites

You need the following to get started with local builds of App Platform apps:

- Our command line interface `doctl`, version 1.82.0 or higher, installed and authenticated with your account. Use `doctl version` to check your version. Read [How to Install and Configure doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/) for more information on installing `doctl` and authenticating your account.
- Docker installed and running. See [our Community `docker` tag](https://www.digitalocean.com/community/tags/docker) for tutorials on installing Docker on various platforms.
- The [Docker daemon socket](https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-socket-option) running.
- An app to build. Your app should have an [App Spec](https://docs.digitalocean.com/products/app-platform/reference/app-spec/)`app.yaml` file, or be deployed to App Platform (`doctl` can download the generated App Spec from a deployed app). Browse our [sample apps](https://docs.digitalocean.com/products/app-platform/getting-started/sample-apps/) to get started with a pre-configured repo for various programming languages and frameworks.

## Quickstart

First navigate to your app’s source repository on your local command line:

```bash
cd ~/sample-nodejs
```

Run the build command to start a build:

```bash
doctl app dev build
```

Note

If you don’t have an App Spec file (`.do/app.yaml` by default) in your repo, specify your app ID using the `--app` flag to fetch the App Spec from App Platform. You can find your app ID using `doctl app list`.

```bash
doctl app dev build --app f283c9c0-8c49-46d3-85f7-4cf9d8a01756
```

If your app has multiple components you’re prompted to select which one to build. Make your selection with the arrow keys, then press `Enter`. To skip this selection step next time, specify the component name when you run the build command, such as `doctl app dev build example-component`.

The build process begins. The build images are downloaded and used to build your component:

```
✔ using app spec from .do/app.yaml
▸ current app dev workspace: /home/sammy/sample-nodejs
✔ preparing app dev environment
✔ building service sample-nodejs (sample-nodejs)
```

When the build completes, status information and an example Docker command are printed:

```
✔ successfully built sample-nodejs in 24s
✔ created container image sample-nodejs:dev

▸ push your image to a container registry using docker push
▸ or run it locally using docker run; for example:

❯ docker run -e PORT=3000 --rm -p 8080:3000 sample-nodejs:dev

then access your component at http://localhost:8080
```

Run the `docker` command to test your component locally. If you have trouble connecting, make sure the port information in the Docker command is correct. If it is incorrect, check your App Spec for missing or misconfigured port information.

## Deploy Local Builds to App Platform via Container Registry

Depending on your CI/CD workflow, you may wish to deploy your locally built images directly to App Platform. To do so, first set up an App Platform component that deploys from a container registry. Setting the build command’s `--registry` flag to your registry information saves you an extra tagging step when pushing to the registry.

Images pushed to a DigitalOcean Container Registry can optionally trigger the **Autodeploy** feature, which automatically re-deploys your app with the updated image.

For more information on deploying App Platform components from container images, see the [Deploy from Container Images](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/) documentation.

## Build Configuration

Local builds often need to override production configuration options. App Platform local build options can be specified as flags to the `doctl app dev build` command. Some common options are explained below. All flags are optional.

For a full list, run `doctl app dev build --help` to display the online help text.

- `--app`: An app ID to fetch an existing App Spec from.
- `--build-command`: An alternate build command override for local development.
- `--env-file`: Path to a `.env` file with overrides for environment variables.
- `--spec`: Path to an app spec in JSON or YAML format (defaults to `.do/app.yaml`).
- `--registry`: Registry name to use when tagging built images.
- `--timeout`: A timeout duration for the build. Valid units are `s`, `m`, `h`. Example: `15m30s`.

These configuration options can also be placed in a `.do/dev-config.yaml` file using a text editor or by using `doctl app dev config set`. You can also set component-specific build commands and environment variables in this file. See the [`dev-config.yaml` reference](https://docs.digitalocean.com/products/app-platform/reference/dev-config/) for details.

## Limits

- The local build process does not yet support App Platform’s Function components. Use `doctl serverless deploy` to deploy and test your functions.

In this article...

- [Prerequisites](https://docs.digitalocean.com/products/app-platform/how-to/build-locally/#prerequisites)
- [Quickstart](https://docs.digitalocean.com/products/app-platform/how-to/build-locally/#quickstart)
- [Deploy Local Builds to App Platform via Container Registry](https://docs.digitalocean.com/products/app-platform/how-to/build-locally/#deploy-local-builds-to-app-platform-via-container-registry)
- [Build Configuration](https://docs.digitalocean.com/products/app-platform/how-to/build-locally/#build-configuration)
- [Limits](https://docs.digitalocean.com/products/app-platform/how-to/build-locally/#limits)

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