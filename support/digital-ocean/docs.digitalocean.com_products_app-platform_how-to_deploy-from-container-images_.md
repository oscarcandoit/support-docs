---
url: "https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/"
title: "How to Deploy from Container Images | DigitalOcean Documentation"
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
- Deploy from Container Images

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Deploy from Container Images

Validated on 17 Jan 2024 • Last edited on 17 Jun 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

You can deploy containerized apps to App Platform from supported container registries. App Platform currently supports deploying public and private images from [DigitalOcean Container Registry](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/), Docker Hub, and GitHub Container Registry.

App Platform only supports Linux-based container images built for the AMD64 architecture. If you push an image with a different OS or architecture, the build fails.

Note
You must have an [**Owner** or **Maintainer** permissions-role](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) in any GitHub repository that you want to access from App Platform.

## Deploy Resource using a Container Image as the Source

To deploy an app from a container registry from the [DigitalOcean Control Panel](https://cloud.digitalocean.com/), click the **Create** button and then select the **Apps** option.

## Create Resource From Source Code

On the **Choose resources from source** screen, select your container registry service from the **Container image** tab, either DigitalOcean Container Registry, Docker Hub, or GitHub Container Registry. Selecting any of these options opens additional fields on the screen.

In the **Repository** field, select the repository that hosts your app’s image. After selecting a repository, you can optionally choose to deploy an image with a specific tag or digest hash by entering it into the **Image tag or digest** field. If you do not enter a tag, the field defaults to the `latest` tag.

If you choose the Docker Hub or GitHub Registry option, you can enter your credentials to access private images. If your image is public, you do not need to enter your credentials. Credentials are entered using the following syntax: `username:token` or `username:password`.

If you are using DigitalOcean Container Registry, select the **Autodeploy** option to have App Platform automatically redeploy your app each time a new image with the specified tag is pushed to your repository.

Note
App Platform does not support auto-deployment of images from Docker Hub repositories or from GitHub Registry. If you need to auto deploy for your images, consider using [DigitalOcean Container Registry](https://docs.digitalocean.com/products/container-registry/).

Once you have entered your repo’s information, click **Next**.

## Resources

Resources are deployable runtime apps and databases. Each app resource contains a list of its components, which can be web services, workers, jobs, or static sites. Web services, workers, and jobs are built from source code repositories or container images and are hosted in containers. Static sites are built from a directory of static files and hosted on DigitalOcean’s CDN.

App Platform automatically detects and imports resources from selected repositories during creation.

## Configure Resource Settings

Each component in an app has its own settings that determine its deployment configuration, including its instance size, build and run commands, and available HTTP ports. To configure the settings for a component, click **Edit** beside the component you want to change on the **Resource settings** table.

![App configuration options](https://docs.digitalocean.com/screenshots/app-platform/app-config-options.12ca98dc05f39b05fb91849e9fe38d3c116fc66f9aa1a1c19c2b4819afc5bc3c.png)

App Platform displays the settings for the component, several of which may be auto-filled by App Platform’s detection system. You can configure the following settings for your app:

- **Name:** A unique name for the component.

- **Resource Type:** \- The type of app to be deployed, either a web service, static site, or worker service. This field determines which additional configuration options are available for your app on this screen.

- **Instance Size** \- The amount of memory (RAM), number of CPUs, and bandwidth allocated to the component. You can select a size that uses either shared or dedicated CPUs. Shared CPUs share their processing power with other DigitalOcean users. Dedicated CPUs are dedicated solely to your app. We recommend dedicated CPUs for more resource-intensive applications that require consistent high performance and autoscaling.

- **Containers** – You can also configure your app’s scaling settings in this section. Depending on what instance size you select determines the scaling options available to the component. For more information about scaling, see [How to Scale Apps in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/).

- **Build Strategy** \- Add a custom build command to run before the app is deployed. This is useful for compiling assets, installing dependencies, or running tests before deployment.

- **Run Command** \- For web and worker services only. You can specify custom run commands for the application to run after deployment. If no run commands are specified, the default run command for your app’s language is used, such as `npm start` for a Node.js app. For Dockerfile-based builds, entering a run command overrides the Dockerfile’s entrypoint.

- **Public HTTP Port** \- For web services only. The port that the app receives HTTP requests on. The default port is `8080`.

- **Internal Ports** \- For web services only. The port that the app receives internal requests on.

- **HTTP Request Routes** \- For web services and static sites only. The URL path where the app can be accessed, such as `your-app-v3cl4.ondigitalocean.app/api`. If not specified, the app is accessible from the provided hostname’s root.

- **Output Directory** \- For static sites only. An optional path to where the build assets are located, relative to the build context. If not set, App Platform automatically scans for these directory names: `_static`, `dist`, `public`, `build`.


App Platform uses cloud-native buildpacks to build your app and uses the buildpack’s default build and run commands. Refer to the [cloud-native buildpack reference](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/) for more information about specific buildpacks.

## Environment

If your app requires environment variables, such as the app’s URL or database connection strings, you can define them in this section. These can be runtime and build time environment variables. We also provide several [app-specific dynamic environment variables](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/#using-bindable-variables-within-environment-variables) that the app can reference. App-level variables can be accessed by all resources in your app.

In the **App-level environment variables** box, click the corresponding **Edit** link to specify app-level or component-level environment variables. Click the **Encrypt** checkbox to obscure the variable’s values from all build, deployment, and application logs.

Once you configure the environment variables, click **Close**.

## Region

In the **Region** section, you can choose the datacenter region to deploy your app into.

Click **Edit** beside the **Region** field to specify app’s datacenter region. For performance purposes, it is best to select the region geographically closest to the app’s user base.

You cannot select a region for static sites. Static resources are served on DigitalOcean’s [global CDN](https://docs.digitalocean.com/platform/regional-availability/#app-platform-availability).

## Finalize

On the **Finalize** screen, you can specify that app’s name and project.

Enter the name of your app in the **Choose a unique app name** text box. The name can only contain lowercase alphanumeric characters and dashes.

Then, use the dropdown menu to select your app’s project.

Once you enter a name for your app and select a region, click **Create app**.

Once your app deploys, you can view the app at the URL at the top of the app’s **Overview** page.

![The app's provided URL above the Overview page](https://docs.digitalocean.com/screenshots/app-platform/app-url.23599f801390cb000eccd52f07e73ed89617d6c5a9de212b14c2f12e4abc87c7.png)

## Change the Tag of the Container Source After Deployment

You can change the tag and autodeploy settings of the container image to use as the source of an existing deployment.

To do this, navigate to [the **Apps** page](https://cloud.digitalocean.com/apps), click your app, and then click the **Settings** tab.

Select the resource that you created using a container from your registry. Under the **Source** heading, click the **Edit** link, then use the **Tag** drop-down to select the desired tag.

Use the **Autodeploy** checkbox to set your autodeploy preferences. Press **Save** to save the new settings and re-deploy your app.

## Deploy Container using the App’s Spec

You can also deploy an image from a container registry using an app’s spec.

To do this, [edit your app’s spec](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/) to include an `image` object. The `image` object can contain the following fields. We recommend using SHA digests instead of tags to ensure consistency and avoid caching issues. Tags like `latest` may point to different images over time, while digests always refer to the same image.

- `registry_type`: A value specifying the container registry’s service. Valid values are `DOCR` for DigitalOcean Container Registry, `DOCKER_HUB` for Docker Hub, and `GHCR` for GitHub Container Registry.
- `registry`: A string specifying the registry’s name. For `DOCKER_HUB` and `GHCR`, this is the organization in which the image lives.
- `repository`: A string specifying the image repository’s name.
- `registry_credentials`: The credentials required to access a private Docker Hub or GitHub registry, in the following syntax `"$username:$token"`. We recommend using a token that doesn’t expire and a scope limited to reading the app’s repository. Review [GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) and [Docker Hub’s](https://docs.docker.com/security/for-developers/access-tokens/) documentation to see how this is done.
- `digest`: A string specifying the image’s hash. This cannot be used with the `tag` field.
- `tag`: A string specifying the image’s tag. Cannot be used with the `digest` field.
- `deploy_on_push`: An object containing a boolean indicating whether App Platform redeploys the app when it detects a push to the image’s repository. Can only be used with DigitalOcean Container Registry. The object looks like this:

```yaml
deploy_on_push:
  enabled: true
```

The following example deploys an image from a private Docker Hub registry using an image digest:

`app-spec.yaml`

```yaml
name: front-end
services:
- name: web
  image:
    registry_type: DOCKER_HUB
    registry: example-registry
    repository: example-repo
    registry_credentials: "your_username:2YotnFZFEjr1zCsicMWpAA"
    digest: sha256:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
```

The `registry_credentials` field requires you to initially submit your access credentials in clear text, but App Platform then encrypts and stores these values similar to secret environment variables. After submitting the spec, App Platform replaces the values in the spec with encrypted values. Once the values are encrypted, you can safely store the spec in the app’s repo.

Once you have edited the app’s spec to include an `image` object, either upload the spec using the control panel, [apply it using `doctl`](https://docs.digitalocean.com/reference/doctl/reference/apps/update/), or push the spec to your repo to trigger a deployment.

If you’re deploying your app with `doctl`, the command you choose affects whether a new image is deployed:

- `doctl apps create-deployment` always pulls and deploys a new image, even if the tag or digest hasn’t changed.
- `doctl apps update` and `doctl apps create --upsert` only apply spec changes. They reuse the existing image tag or digest and do not deploy a new image by default. To trigger the deployment of a new image consistenly, use SHA digests.

In this article...

- [Deploy Resource using a Container Image as the Source](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/#deploy-resource-using-a-container-image-as-the-source)
- [Create Resource From Source Code](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/#create-resource-from-source-code)
- [Resources](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/#resources)
- [Configure Resource Settings](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/#configure-component-settings)
- [Environment](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/#environment)
- [Region](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/#region)
- [Finalize](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/#finalize)
- [Change the Tag of the Container Source After Deployment](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/#change-the-tag-of-the-container-source-after-deployment)
- [Deploy Container using the App’s Spec](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/#deploy-container-using-the-apps-spec)

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