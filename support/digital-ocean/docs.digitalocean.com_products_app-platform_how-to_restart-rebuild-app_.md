---
url: "https://docs.digitalocean.com/products/app-platform/how-to/restart-rebuild-app/"
title: "How to Restart or Force Rebuild Your App | DigitalOcean Documentation"
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
- Restart or Rebuild App

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Restart or Force Rebuild Your App

Validated on 20 Nov 2024 • Last edited on 23 Jan 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

App Platform provides two options for managing your app’s container: restarting the container or forcing a rebuild. Both options are useful in different situations:

- **Restart your app’s container:** Redeploys an exact copy of your app’s container without fetching updates from your source code repository. This is useful if your app is stuck in a connection loop or a deadlock. However, restarting your app does not fix issues caused by code or configuration errors.

Restarting your app performs a rolling restart of its [service](https://docs.digitalocean.com/products/app-platform/how-to/manage-services/) and [worker](https://docs.digitalocean.com/products/app-platform/how-to/manage-workers/) components; it does not restart the app’s [jobs](https://docs.digitalocean.com/products/app-platform/how-to/manage-jobs/) or [databases](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/). You can also restart individual services or workers.

- **Force a rebuild of your app’s container:** Redeploys the app with the latest changes from your source code repository. This is useful if you have made changes to your app’s container image and want to ensure that the changes are reflected in your app.


## Restart Your App Using the API or CLI

You can restart all of your app’s components by providing your app’s ID to the restart command or API endpoint. You can also restart individual components by setting the `--components` flag in the command, or the `components` field in the API, and then provide a list of component names as arguments.

How to Restart an App Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl apps restart`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/apps/restart/) for more details:




```shell
doctl apps restart <app id> [flags]
```



The following example restarts an app with the ID `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`. Additionally, the command returns the app’s ID and status:




```shell
doctl apps restart f81d4fae-7dec-11d0-a765-00a0c91e6bf6 --format ID,Status
```


How to Restart an App Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/apps/{app_id}/restart`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/apps_restart).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/apps/{app_id}/restart"
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

create_resp = client.apps.restart(app_id="b6bdf840", body={"components": ["component1", "component2"]})
```

## Restart Your App Using the Control Panel

To restart your app’s container from the [control panel](https://cloud.digitalocean.com/apps), click the app you want to restart and then click the **Actions** button. In the **Actions** menu, click **Restart**.

![The Restart or Deploy window with the Restart tab selected.](https://docs.digitalocean.com/screenshots/app-platform/app-restart.c9a232852c6f8a156f478989f903e42edd932a1fd34f5e250d10b1c2d2af1da0.png)

In the **Restart or Deploy** window, select whether to restart all services and workers, or restart individual components. Once you’ve selected which components to restart, click **Restart**. The app redeploys without importing any changes from your source code repository.

## Force Rebuild Your App Using the API or CLI

You can force a rebuild of your app’s container by creating a new deployment for the app and setting the `force-rebuild` flag in the CLI, or the `force_rebuild` parameter in the API, to `true`. This forces the app to redeploy with the latest changes from your source code repository.

How to Force Rebuild an App Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl apps create-deployment`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/apps/create-deployment/) for more details:




```shell
doctl apps create-deployment <app id> [flags]
```



The following example creates a deployment for an app with the ID `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`. Additionally, the command returns the app’s ID and status:




```shell
doctl apps create-deployment f81d4fae-7dec-11d0-a765-00a0c91e6bf6 --format ID,Status
```


How to Force Rebuild an App Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/apps/{app_id}/deployments`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/apps_create_deployment).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/apps/{app_id}/deployments"
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

create_resp = client.apps.create_deployment(app_id="b6bdf840", body={"force_build": True})
```

## Force a Rebuild of Your App Using the Control Panel

To force a rebuild of your app’s container from the [control panel](https://cloud.digitalocean.com/apps), click the app you want to rebuild and then click the **Actions** button. In the **Actions** menu, click **Force Rebuild and Deploy**.

![The Restart or Deploy window with the Force Rebuild and Deploy tab selected.](https://docs.digitalocean.com/screenshots/app-platform/app-force-rebuild.1977266872fb164880291343974f6df405051ec14d6ada55be72ecef27e9e07d.png)

In the **Restart or Deploy** window, choose whether to clear the build cache, then click **Force Rebuild and Deploy**. The app redeploys after fetching changes from your source code repository.

In this article...

- [Restart Your App Using the API or CLI](https://docs.digitalocean.com/products/app-platform/how-to/restart-rebuild-app/#restart-your-app-using-the-api-or-cli)
- [Restart Your App Using the Control Panel](https://docs.digitalocean.com/products/app-platform/how-to/restart-rebuild-app/#restart-your-app-using-the-control-panel)
- [Force Rebuild Your App Using the API or CLI](https://docs.digitalocean.com/products/app-platform/how-to/restart-rebuild-app/#force-rebuild-your-app-using-the-api-or-cli)
- [Force a Rebuild of Your App Using the Control Panel](https://docs.digitalocean.com/products/app-platform/how-to/restart-rebuild-app/#force-a-rebuild-of-your-app-using-the-control-panel)

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