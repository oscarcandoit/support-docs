---
url: "https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/"
title: "App Platform Quickstart | DigitalOcean Documentation"
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

- [Getting Started](https://docs.digitalocean.com/products/app-platform/getting-started/)
- Quickstart

[Give Feedback](https://ideas.digitalocean.com/documentation)

# App Platform Quickstart

Validated on 3 May 2021 • Last edited on 21 Aug 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

## Create an App

1. Go to [DigitalOcean Control Panel](https://cloud.digitalocean.com/apps) and click **Create App**.

2. Select the source for your app. You can choose a GitHub, GitLab, or Bitbucket repository. You can also select a container image you [uploaded to DigitalOcean Container Registry](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/), Docker Hub, or GitHub Container Registry. When the source is a GitLab respository, to prevent a cloning error, you must first [enable HTTPS and SSH protocols](https://docs.gitlab.com/administration/settings/visibility_and_access_controls/#configure-enabled-git-access-protocols) on it.

3. Select the repository that contains your source code and specify the branch or tag in your repository that contains your app’s source code.


   - For a monorepo, specify the folder that contains the source. See [Deploy from a Monorepo](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-monorepo/) for more information on how App Platform builds apps from monorepos.

App Platform inspects the code and app resources, and selects an appropriate runtime environment (such as Node, Ruby, etc). If you need to override this, upload a [Dockerfile](https://docs.docker.com/engine/reference/builder/) to your branch and restart the app creation process.

If you’d like to automatically re-deploy your app when pushing to this branch/tag, select **Autodeploy** and click **Next**.

4\. Configure resources for your app.
\- On the **Resources** page, click the **Edit** link beside app resource components to configure their details such as the component’s instance size (the container size and its cost), HTTP routes, the run command, or the HTTP port. App Platform displays build and run commands that it detected, which you can customize as needed. Refer to the cloud-native buildpacks for instructions for specific buildpacks. For Dockerfile-based builds, entering a run command overrides the Dockerfile’s entrypoint.
\- Add additional resources by expanding the **Add Resource (Optional)** section and selecting the **Detect from Source Code** option. Then, click **Add**. If your app needs a database, select the **Database** option to add a dev database or an existing managed database from your DigitalOcean account. The connection details for your database are accessible via environment variables so that you can access them in your code.

```
Click **Next**.
```

5. If you want to use resource- and app-level environment variables, on the **Environment** page, click **Edit** to supply them. Click the **Encrypt** checkbox to ensure a variable’s value is encrypted in the App Spec. Click **Next**.
6. If you want to change the default name or project for your app, or choose the region where you would like your app to be hosted, click **Edit** on the **Info** page. Click **Save** and then click **Next**.

   - The option to select a region is not available for static sites. Static components are served on DigitalOcean’s [global CDN](https://docs.digitalocean.com/platform/regional-availability/#app-platform-availability).
7. Review your app’s resources, environment variables and billing information on the **Review** page and then click **Create Resources**.

Once your app deploys, you can view the app at the URL at the top of the app’s **Overview** page.

## Scale an App

1. Go to [https://cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps), click your app, and click the **Settings** tab.
2. Click the resource you’d like to scale and click the **Edit** link next to the **Scaling** heading.
3. Scale your application horizontally by increasing the number of containers, or vertically by increasing the container size.
4. Click **Save**.

## Add a Database to an App

1. Go to [https://cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps) and click your app.
2. Click the **Create** button and choose the **Create/Attach Database** option.
3. Give your database a name, select an engine, and select a plan.
4. Click **Create and Attach**.
5. View connection details for your database by clicking on your new database resource.

## Register a Custom Domain

1. Go to [https://cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps), click your app, and click the **Settings** tab.
2. Then click the **Edit** link to the right of **Domains**, then click **Add Domain**.
3. Enter your domain name at the top of the screen, then follow the onscreen instructions to create a CNAME record with your DNS provider.
4. Click **Add Domain**.

## Destroy an App

1. Go to [https://cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps), and click your app.
2. Click the **Settings** tab, and scroll down to the red **Destroy** button.
3. Enter the app name to confirm you’d like to delete the app and all its associated resources. Then click **Destroy**.

In this article...

- [Create an App](https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/#create-an-app)
- [Scale an App](https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/#scale-an-app)
- [Add a Database to an App](https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/#add-a-database-to-an-app)
- [Register a Custom Domain](https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/#register-a-custom-domain)
- [Destroy an App](https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/#destroy-an-app)

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