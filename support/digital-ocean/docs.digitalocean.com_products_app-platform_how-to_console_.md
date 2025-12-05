---
url: "https://docs.digitalocean.com/products/app-platform/how-to/console/"
title: "How to Access the Console for an App Platform Component | DigitalOcean Documentation"
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
- Access Console

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Access the Console for an App Platform Component

Validated on 27 Nov 2024 • Last edited on 20 Jun 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

The console of an App Platform component is an in-browser command-line terminal whose shell context is a running container instance for a given resource. You can connect to the console of your app’s components (services and workers) to run commands in the component’s container.

By running commands in the console, you can see the active processes that are running inside the container, browse its local file system, monitor resource usage, observe system logs, and more. Connecting to the console is useful for troubleshooting issues, performing maintenance tasks, and running other one-off commands.

This is similar to other container workflows involving logging into the virtualized environment. For example, with containers that have a `bash` shell, you can achieve the same effect locally by running `docker exec -it CONTAINER_ID /bin/bash`.

Warning
Container environments are ephemeral, so any changes you make to your app or files in the container using the console do not persist. Additionally, there is no synchronization between containers, so changes you make in one container do not propagate to other containers.

You can access the console for a component using the DigitalOcean Control Panel, [API](https://docs.digitalocean.com/reference/api/digitalocean/) or the [official CLI](https://docs.digitalocean.com/reference/doctl/), doctl.

## Access a Component’s Console Using the API

How to Access the Console Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a GET request to [`https://api.digitalocean.com/v2/apps/{app_id}/components/{component_name}/exec`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/apps_get_exec_active_deployment).

### cURL

Using cURL:

```shell
curl -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/apps/{app_id}/components/{component_name}/exec"
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

get_resp = client.apps.get_exec_active_deployment(app_id="a6adf840", component_name="component")
```

## Access a Component’s Console Using the CLI

How to Access the Console Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl apps console`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/apps/console/) for more details:




```shell
doctl apps console <app id> <component name> <instance name (optional)> [flags]
```



The following example initiates a console session for the app with the ID `f81d4fae-7dec-11d0-a765-00a0c91e6bf6` and the component `web`:




```shell
doctl apps console f81d4fae-7dec-11d0-a765-00a0c91e6bf6 web. To initiate a console session to a specific instance, append the instance id: doctl apps console f81d4fae-7dec-11d0-a765-00a0c91e6bf6 web sample-golang-5d9f95556c-5f58g
```


## Access a Component’s Console Using the Control Panel

To access a component’s console from the [control panel](https://cloud.digitalocean.com/apps), click your app, then click the **Console** tab. In the **Console** tab, select the component that you want access to open its console.

![A screenshot of a console open for an app component named sample-nodejs.](https://docs.digitalocean.com/screenshots/app-platform/app-console.8350cff6080031aeb3f67ca9b14282c803b6d7ee753d77de3e61957748e5d3f9.png)

## Access a Specific Instance

App Platform components can have multiple running instances. Whenever your app deploys or scales (automatically or manually), it creates a new instance. When accessing the app’s console, App Platform automatically connects you to the first available instance. However, you may want to access the console of another specific instance to debug an issue, using the DigitalOcean API or CLI. For example, if that instance is handling a significantly different workload.

To get a list of an app’s running compute instances:

CLI

Run the following `doctl` command (requires version v1.129.0 or newer):

```bash
doctl apps list-instances $app_id
```

API

Use the following API call:

```c
curl -X GET \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
"https://api.digitalocean.com/v2/apps/$app_id/instances"
```

This returns an array of component instances, each with an ephemeral `instance_name` property and `instance_alias` property [mappable to the app’s insights](https://docs.digitalocean.com/products/app-platform/how-to/view-insights/). You can then use an instance’s name to get an exec URL:

CLI

Run the following `doctl` command (requires version v1.129.0 or newer):

```bash
doctl apps console $app_id $component_name $instance_name
```

API

Use the following API call:

```c
curl -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
"https://api.digitalocean.com/v2/apps/{app_id}/deployments/{deployment_id}/components/{component_name}/exec?instance_name={instance_name}"
```

This returns an exec URL, which you can use to access the instance’s console using the [CLI](https://docs.digitalocean.com/products/app-platform/how-to/console/#access-a-components-console-using-the-cli) or [API](https://docs.digitalocean.com/products/app-platform/how-to/console/#access-a-components-console-using-the-api). We recommend [using Aptfile](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/aptfile/) to install tools.

Because instances are ephemeral, do not make any changes to them that need to persist or create any scripts that rely on them.

In this article...

- [Access a Component’s Console Using the API](https://docs.digitalocean.com/products/app-platform/how-to/console/#access-a-components-console-using-the-api)
- [Access a Component’s Console Using the CLI](https://docs.digitalocean.com/products/app-platform/how-to/console/#access-a-components-console-using-the-cli)
- [Access a Component’s Console Using the Control Panel](https://docs.digitalocean.com/products/app-platform/how-to/console/#access-a-components-console-using-the-control-panel)
- [Access a Specific Instance](https://docs.digitalocean.com/products/app-platform/how-to/console/#access-a-specific-instance)

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