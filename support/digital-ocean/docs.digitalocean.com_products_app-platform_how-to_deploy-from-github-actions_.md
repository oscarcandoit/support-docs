---
url: "https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-github-actions/"
title: "How to Deploy using GitHub Actions | DigitalOcean Documentation"
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
- Deploy Using GitHub Actions

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Deploy using GitHub Actions

Validated on 20 Aug 2024 • Last edited on 17 Apr 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

Using [GitHub Actions](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions) and an [app spec](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/), you can configure and deploy your apps and app images directly from your GitHub repository without directly interacting with DigitalOcean’s control panel or API. GitHub Actions is a GitHub feature that allows you to automate many aspects of your software development using workflows.

The article documents three different GitHub Action example workflows:

- Deploy an app from a GitHub repository to App Platform.
- Build an image of your app using Docker and GitHub Container Registry, and then deploy the image to App Platform.
- Deploy a unique app for each pull request in your repository so that you can test your changes before merging them into your `main` branch.

## Prerequisites

To use the App Platform deploy workflow, you must:

- Have a GitHub repository that contains your app’s source code.
- Have a [DigitalOcean API token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) in your [repository’s secrets collection](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions) with permissions to read and write to App Platform. The API token authenticates your workflow’s deployment to App Platform.
- Authenticate your GitHub account with App Platform by [deploying an app via the control panel or API](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/). Deploying an app grants App Platform permissions to access your GitHub account. You only need to do this once and the app can be a [sample app](https://docs.digitalocean.com/products/app-platform/getting-started/sample-apps/).

## Add a Workflow to Your Repository

To set up a GitHub Actions workflow that deploys your app to App Platform, open your app’s GitHub repository and then click the **Actions** tab. Below the **Get started with GitHub Actions** header, click the **set up a workflow yourself** link. This opens the GitHub Actions editor.

In the editor, paste one of the following workflows into the editor, change the token values as needed, and then commit the changes to your repository.

### Deploy an App

This workflow runs after every push to the `main` branch of the repository. The workflow checks out the repository’s code, and then deploys the app using the `digitalocean/app_action/deploy@v2` action and your API token.

`deploy-app.yaml`

```yaml
name: Update App

on:
 push:
   branches: [main]

permissions:
  contents: read

jobs:
 deploy-app:
   runs-on: ubuntu-latest
   steps:
     - name: Checkout repository
       uses: actions/checkout@v4
     - name: Deploy the app
       uses: digitalocean/app_action/deploy@v2
       with:
         token: ${{ secrets.YOUR_DIGITALOCEAN_ACCESS_TOKEN_VARIABLE_NAME }}
```

### Build and Deploy an Image

This workflow runs after every push to the `main` branch of the repository. This workflow checkouts out the repository, builds an image of your app using a `Dockerfile`, pushes the image to GitHub Container Registry, and then deploys the image to App Platform.

In addition to a DigitalOcean API token, the workflow also requires a [Dockerfile](https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile) in your repository. The Dockerfile defines the image’s contents and configuration.

`deploy-image.yaml`

```yaml
name: Build, Push and Deploy a Docker Image

on:
 push:
   branches: [main]

permissions:
  contents: read
  packages: write

jobs:
 build-push-deploy-image:
   runs-on: ubuntu-latest
   steps:
     - name: Checkout repository
       uses: actions/checkout@v4
     - name: Log in to the Container registry
       uses: docker/login-action@v3.3.0
       with:
         registry: ghcr.io
         username: ${{ github.actor }}
         password: ${{ secrets.GITHUB_TOKEN }}
     - name: Build and push Docker image
       id: push
       uses: docker/build-push-action@v6.5.0
       with:
         context: .
         push: true
         tags: ghcr.io/${{ github.repository }}:latest
     - name: Deploy the app
       uses: digitalocean/app_action/deploy@v2
       env:
         SAMPLE_DIGEST: ${{ steps.push.outputs.digest }}
       with:
         token: ${{ secrets.YOUR_DIGITALOCEAN_ACCESS_TOKEN_VARIABLE_NAME }}
```

### Preview Pull Requests Before Deploying

This workflow runs when you open a pull request in your repository. The workflow checks out the repository’s code, deploys the app to App Platform, and then creates a comment in the pull request with a link to the deployed app. The workflow includes a link to the build logs and the deploy logs in the comment if the deployment fails.

`deploy-preview.yaml`

```yaml
name: App Platform Preview

on:
  pull_request:
    branches: [main]

permissions:
  contents: read
  pull-requests: write

jobs:
  test:
    name: preview
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Deploy the app
        id: deploy
        uses: digitalocean/app_action/deploy@v2
        with:
          deploy_pr_preview: "true"
          token: ${{ secrets.YOUR_DIGITALOCEAN_ACCESS_TOKEN }}
      - uses: actions/github-script@v7
        env:
          BUILD_LOGS: ${{ steps.deploy.outputs.build_logs }}
          DEPLOY_LOGS: ${{ steps.deploy.outputs.deploy_logs }}
        with:
          script: |
            const { BUILD_LOGS, DEPLOY_LOGS } = process.env
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `🚀🚀🚀 The app was successfully deployed at ${{ fromJson(steps.deploy.outputs.app).live_url }}. [1]`
            })
      - uses: actions/github-script@v7
        if: failure()
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `The app failed to be deployed. Logs can be found [here](https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}).
              ## Logs
              <details>
              <summary>Build logs</summary> [2]
              \`\\
              ${BUILD_LOGS}
              \`\\
              </details>
              <details>
              <summary>Deploy logs</summary> [3]
              \`\\
              ${DEPLOY_LOGS}
              \`\\
              </details>`
            })
```

This second action deletes the preview app upon merging or closing the pull request.

`delete-preview.yaml`

```yaml
name: Delete Preview

on:
  pull_request:
    types: [ closed ]

jobs:
  closed:
    runs-on: ubuntu-latest
    steps:
      - name: delete preview app
        uses: digitalocean/app_action/delete@v2
        with:
          from_pr_preview: "true"
          ignore_not_found: "true"
          token: ${{ secrets.YOUR_DIGITALOCEAN_ACCESS_TOKEN }}
```

In this article...

- [Prerequisites](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-github-actions/#prerequisites)
- [Add a Workflow to Your Repository](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-github-actions/#add-a-workflow-to-your-repository)
  - [Deploy an App](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-github-actions/#deploy-app)
  - [Build and Deploy an Image](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-github-actions/#deploy-image)
  - [Preview Pull Requests Before Deploying](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-github-actions/#deploy-preview)

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

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices