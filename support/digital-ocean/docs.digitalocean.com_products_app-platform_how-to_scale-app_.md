---
url: "https://docs.digitalocean.com/products/app-platform/how-to/scale-app/"
title: "How to Scale Apps in App Platform | DigitalOcean Documentation"
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
- Scale Apps

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Scale Apps in App Platform

Validated on 19 Mar 2024 • Last edited on 17 Jul 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

Scaling your app allows its infrastructure to match its workload. As workloads increase and decrease, you can manually scale or ( [autoscale](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/#auto-scale)) the amount of resources necessary to keep your app running at an acceptable level of performance. For example, if your app receives a large influx of online traffic and the app’s performance becomes slow, you can increase the number of containers the app is operating in to allow more instances of the app to handle the increased workload.

There are two types of scaling:

- **Horizontal scaling** adds additional containers to the app and distributes the workload across the additional containers. App Platform offers both fixed and automatic options for horizontal scaling.
- **Vertical scaling** increases a container’s memory or CPU power to better handle the app’s workload. App Platform only offers fixed vertical scaling, meaning you must manually change the container’s size in the [DigitalOcean Control Panel](https://cloud.digitalocean.com/), API, or CLI, to vertically scale it.

## Scale an App Using the API or CLI

You can scale an app to a fixed size or configure autoscaling for an app by updating the app’s spec and then submitting the updated spec via the app [update command](https://docs.digitalocean.com/reference/doctl/reference/apps/update/) or [API endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/apps_update)

### Scale App to a Fixed Size

To scale an app to a fixed container size and number of containers, update the `instance_count` or `instance_size_slug` fields of the component in your [app’s spec](https://docs.digitalocean.com/products/app-platform/reference/app-spec/) and then submit the new spec.

You can set `instance_count` between 1 and 250. This limit applies to both fixed scaling and autoscaling. If you need more instances, consider using a larger instance size or [contact support](https://cloudsupport.digitalocean.com/).

```text
 1- environment_slug: node-js
 2  git:
 3    branch: main
 4    repo_clone_url: https://github.com/digitalocean/sample-nodejs.git
 5  http_port: 8080
 6  instance_count: 2
 7  instance_size_slug: apps-s-1vcpu-1gb
 8  name: sample-nodejs
 9  run_command: yarn start
10  source_dir: /
```

### Configure Autoscaling

To configure autoscaling, add the `autoscaling` object to the app’s spec and then configure the following fields:

- `min_instance_count`. The minimum number of containers the app can scale down to. Use a value of 1 or higher.
- `max_instance_count`. The maximum number of containers the app can scale up to. Use a value up to 250.
- `metrics`. This object contains the metrics that the app uses to determine whether to scale up or down. Currently, CPU usage is the only supported metric.

For example, the following app’s scales a service component called “web” to a minimum of two containers and a maximum of five containers when the average CPU usage across the component’s containers exceeds or drops below 70%.

```text
 1name: example-app
 2services:
 3- name: web
 4  github:
 5    repo: digitalocean/sample-golang
 6    branch: master
 7  autoscaling:
 8    min_instance_count: 2
 9    max_instance_count: 5
10    metrics:
11      cpu:
12        percent: 70
```

How to Scale an App Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl apps update`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/apps/update/) for more details:




```shell
doctl apps update <app id> [flags]
```



The following example updates an app with the ID `f81d4fae-7dec-11d0-a765-00a0c91e6bf6` using an app spec located in a directory called `/src/your-app.yaml`. Additionally, the command returns the updated app’s ID, ingress information, and creation date:




```shell
doctl apps update f81d4fae-7dec-11d0-a765-00a0c91e6bf6 --spec src/your-app.yaml --format ID,DefaultIngress,Created
```


How to Scale an App Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a PUT request to [`https://api.digitalocean.com/v2/apps/{id}`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/apps_update).

### cURL

Using cURL:

```shell
curl -X PUT \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
"https://api.digitalocean.com/v2/apps/{id}" \
-d '{"alerts":[{"rule":"DEPLOYMENT_FAILED"},{"rule":"DOMAIN_FAILED"}],"domains":[{"domain":"example.com","type":"PRIMARY","zone":"example.com"}],"envs":[{"key":"API_KEY","scope":"RUN_AND_BUILD_TIME","type":"SECRET","value":"EV[1:zqiRIeaaYK/NqctZDYzy6t0pTrtRDez8:wqGpZRrsKN5nPhWQrS479cfBiXT0WQ==]"}],"features":["buildpack-stack=ubuntu-22"],"ingress":{},"name":"example-app","region":"nyc","services":[{"autoscaling":{"max_instance_count":4,"metrics":{"cpu":{"percent":70}},"min_instance_count":2},"git":{"branch":"main","repo_clone_url":"https://github.com/digitalocean/sample-nodejs.git"},"internal_ports":[8080],"log_destinations":[{"name":"your_log_consumer_name","open_search":{"endpoint":"logs.example.com:12345","basic_auth":{"user":"doadmin","password":"1234567890abcdef"},"index_name":"example-index","cluster_name":"example-cluster"}}],"name":"sample-nodejs","run_command":"yarn start","source_dir":"/"}]}'
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))
req = {
"spec": {
    "name": "web-app-01",
    "region": "nyc",
    "domains": [\
        {\
            "domain": "app.example.com",\
            "type": "DEFAULT",\
            "wildcard": True,\
            "zone": "example.com",\
            "minimum_tls_version": "1.3",\
        }\
    ],
    "services": [],
    "static_sites": [\
        {\
            "cors": {\
                "allow_origins": [\
                    {"exact": "https://www.example.com"},\
                    {"regex": "^.*example.com"},\
                ],\
                "allow_methods": [\
                    "GET",\
                    "OPTIONS",\
                    "POST",\
                    "PUT",\
                    "PATCH",\
                    "DELETE",\
                ],\
                "allow_headers": ["Content-Type", "X-Custom-Header"],\
                "expose_headers": ["Content-Encoding", "X-Custom-Header"],\
                "max_age": "5h30m",\
                "allow_credentials": False,\
            },\
            "routes": [{"path": "/api", "preserve_path_prefix": True}],\
        }\
    ],
    "jobs": [\
        {\
            "name": "api",\
            "gitlab": {\
                "branch": "main",\
                "deploy_on_push": True,\
                "repo": "digitalocean/sample-golang",\
            },\
            "image": {\
                "registry": "registry.hub.docker.com",\
                "registry_type": "DOCR",\
                "repository": "origin/master",\
                "tag": "latest",\
            },\
            "dockerfile_path": "path/to/Dockerfile",\
            "build_command": "npm run build",\
            "run_command": "bin/api",\
            "source_dir": "path/to/dir",\
            "envs": [\
                {\
                    "key": "BASE_URL",\
                    "scope": "BUILD_TIME",\
                    "type": "GENERAL",\
                    "value": "http://example.com",\
                }\
            ],\
            "environment_slug": "node-js",\
            "log_destinations": {\
                "name": "my_log_destination",\
                "papertrail": {\
                    "endpoint": "https://mypapertrailendpoint.com"\
                },\
                "datadog": {\
                    "endpoint": "https://mydatadogendpoint.com",\
                    "api_key": "abcdefghijklmnopqrstuvwxyz0123456789",\
                },\
                "logtail": {\
                    "token": "abcdefghijklmnopqrstuvwxyz0123456789"\
                },\
               "open_search": {\
                    "endpoint": "https://myopensearchendpoint.com:9300"\
                    "index_name": "logs"\
                    "basic_auth": {\
                        "user": "doadmin",\
                        "password": "password"\
                    }\
                },\
            },\
            "instance_count": 2,\
            "instance_size_slug": "apps-s-1vcpu-0.5gb",\
            "kind": "PRE_DEPLOY",\
        }\
    ],
    "workers": [\
        {\
            "name": "api",\
            "gitlab": {\
                "branch": "main",\
                "deploy_on_push": True,\
                "repo": "digitalocean/sample-golang",\
            },\
            "image": {\
                "registry": "registry.hub.docker.com",\
                "registry_type": "DOCR",\
                "repository": "origin/master",\
                "tag": "latest",\
            },\
            "dockerfile_path": "path/to/Dockerfile",\
            "build_command": "npm run build",\
            "run_command": "bin/api",\
            "source_dir": "path/to/dir",\
            "envs": [\
                {\
                    "key": "BASE_URL",\
                    "scope": "BUILD_TIME",\
                    "type": "GENERAL",\
                    "value": "http://example.com",\
                }\
            ],\
            "environment_slug": "node-js",\
            "log_destinations": {\
                "name": "my_log_destination",\
                "papertrail": {\
                    "endpoint": "https://mypapertrailendpoint.com"\
                },\
                "datadog": {\
                    "endpoint": "https://mydatadogendpoint.com",\
                    "api_key": "abcdefghijklmnopqrstuvwxyz0123456789",\
                },\
                "logtail": {\
                    "token": "abcdefghijklmnopqrstuvwxyz0123456789"\
                },\
               "open_search": {\
                    "endpoint": "https://myopensearchendpoint.com:9300"\
                    "index_name": "logs"\
                    "basic_auth": {\
                        "user": "doadmin",\
                        "password": "password"\
                    }\
                },\
            },\
            "instance_count": 2,\
            "instance_size_slug": "apps-s-1vcpu-0.5gb",\
        }\
    ],
    "functions": [\
        {\
            "cors": {\
                "allow_origins": [\
                    {"exact": "https://www.example.com"},\
                    {"regex": "^.*example.com"},\
                ],\
                "allow_methods": [\
                    "GET",\
                    "OPTIONS",\
                    "POST",\
                    "PUT",\
                    "PATCH",\
                    "DELETE",\
                ],\
                "allow_headers": ["Content-Type", "X-Custom-Header"],\
                "expose_headers": ["Content-Encoding", "X-Custom-Header"],\
                "max_age": "5h30m",\
                "allow_credentials": False,\
            },\
            "routes": [{"path": "/api", "preserve_path_prefix": True}],\
            "name": "api",\
            "source_dir": "path/to/dir",\
            "alerts": [\
                {\
                    "rule": "CPU_UTILIZATION",\
                    "disabled": False,\
                    "operator": "GREATER_THAN",\
                    "value": 2.32,\
                    "window": "FIVE_MINUTES",\
                }\
            ],\
            "envs": [\
                {\
                    "key": "BASE_URL",\
                    "scope": "BUILD_TIME",\
                    "type": "GENERAL",\
                    "value": "http://example.com",\
                }\
            ],\
            "gitlab": {\
                "branch": "main",\
                "deploy_on_push": True,\
                "repo": "digitalocean/sample-golang",\
            },\
            "log_destinations": {\
                "name": "my_log_destination",\
                "papertrail": {\
                    "endpoint": "https://mypapertrailendpoint.com"\
                },\
                "datadog": {\
                    "endpoint": "https://mydatadogendpoint.com",\
                    "api_key": "abcdefghijklmnopqrstuvwxyz0123456789",\
                },\
                "logtail": {\
                    "token": "abcdefghijklmnopqrstuvwxyz0123456789"\
                },\
               "open_search": {\
                    "endpoint": "https://myopensearchendpoint.com:9300"\
                    "index_name": "logs"\
                    "basic_auth": {\
                        "user": "doadmin",\
                        "password": "password"\
                    }\
                },\
            },\
        }\
    ],
    "databases": [\
        {\
            "cluster_name": "cluster_name",\
            "db_name": "my_db",\
            "db_user": "superuser",\
            "engine": "PG",\
            "name": "prod-db",\
            "production": True,\
            "version": "12",\
        }\
    ],
    “vpc”: {
        “id”: “c22d8f48-4bc4-49f5-8ca0-58e7164427ac”,
    }
}
update_resp = client.apps.update(id="bb245ba", body=req)
```

## Configure Autoscaling for an App using the Control Panel

Autoscaling allows you to automatically add or remove containers from your app based on its workload. This is useful for managing apps that have high but inconsistent workloads. For example, if you have an app that hosts a website that receives sudden but inconsistent spikes in traffic, you can configure autoscaling to automatically add additional containers to the app to manage the increased workload, and then reduce the number of containers when the traffic drops. This is called _horizontal scaling_.

Autoscaling ensures that the average CPU usage across all of the app’s containers doesn’t exceed a specified value. If some or all containers use more than the given value, containers might be added. If some or all containers use less than the given value, containers might be removed.

However, traffic is distributed based on the number of outstanding requests each container is handling, not directly on CPU usage. This means a container may still receive new requests even if it’s near 100% CPU usage. To improve traffic distribution, consider increasing the minimum container count to ensure sufficient capacity or lowering the CPU threshold to scale earlier.

You can configure autoscaling on existing apps or at creation time.

To configure autoscaling for an existing app, navigate to your app’s **Overview** page, then click the **Settings** tab and select the component you want to enable autoscaling for. In the **Resource Size** section, click the **Edit** button.

The autoscaling feature is only available for apps with a dedicated CPU plan. If your app does not use a dedicated CPU plan, select a dedicated CPU plan from the **Instance Size** menu, then click **Set containers to autoscale**. This opens the autoscaling settings:

- **Minimum Containers**: The minimum number of containers the app can automatically be scaled down to.
- **Maximum Containers**: The maximum number of containers the app can automatically be scaled up to.
- **CPU Threshold**: The average CPU usage across the current containers that triggers the app to scale.

![A screenshot of the control panel showing the scaling options for an app](https://docs.digitalocean.com/screenshots/app-platform/autoscaling.b76ac00a56980ada60c4d563789158156b1c09dccca88d6eea53eb50d1b8989e.png)

Set the parameters of your app’s autoscaling. This generates an updated estimated monthly cost for your app. The price is a range between the app running at its minimum number of containers for an entire month and the app running at its maximum number of containers for an entire month.

Once you have configured the autoscaling parameters, click **Save**. This automatically triggers a redeployment if necessary.

## Scale an App to a Fixed Size using the Control Panel

You can scale your app to a fixed size using the control panel.

To scale an app in the [control panel](https://cloud.digitalocean.com/apps), click your app, and then click the **Settings** tab. From the **Settings** tab, click the resource you’d like to scale. The component’s setting open. In the **Resource Size** section, click the **Edit** button.

In the **Resource Size** menu, set the component’s number of containers in the **Container** field.

After you have selected how you want to scale the component, click **Save**. The app redeploys with the new scaled configuration.

![A screenshot of the control panel showing the scaling options for an app](https://docs.digitalocean.com/screenshots/app-platform/app-fixed-scaling.9c82a42d7cae0459d41c8d228e6f3ebc96e77e332e84eae55a7b5de2e62f7193.png)

## Enable XL Build

Now in private preview, you can [update the app spec](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/) with the `xl-build` feature to double the CPUs (from 4 to 8) and memory (from 10 GiB to 20 GiB) of your app, retaining the same disk space. To gain access to this feature, [contact support](https://cloudsupport.digitalocean.com/).

After gaining access to the feature, add the `xl-build` value under the `features` key in the app spec:

```
features:
- xl-build
```

For a full example, see the [app spec reference page](https://docs.digitalocean.com/products/app-platform/reference/app-spec/).

In this article...

- [Scale an App Using the API or CLI](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/#scale-an-app-using-the-api-or-cli)
  - [Scale App to a Fixed Size](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/#scale-app-to-a-fixed-size)
  - [Configure Autoscaling](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/#configure-autoscaling)
- [Configure Autoscaling for an App using the Control Panel](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/#auto-scale)
- [Scale an App to a Fixed Size using the Control Panel](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/#scale-an-app-to-a-fixed-size-using-the-control-panel)
- [Enable XL Build](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/#enable-xl-build)

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