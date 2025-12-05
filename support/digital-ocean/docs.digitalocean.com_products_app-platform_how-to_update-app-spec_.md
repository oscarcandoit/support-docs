---
url: "https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/"
title: "How to Update an App's Spec | DigitalOcean Documentation"
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
- Update App Spec

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Update an App's Spec

Validated on 19 Oct 2023 • Last edited on 18 Dec 2024

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

App Platform automatically generates a YAML file, called a “spec”, for each app deployed to App Platform. The spec defines the app’s configuration, such the app’s domain setup, regions, and environment variables.

You can edit the spec to change the app’s configuration, for example, you can edit the spec’s `region` field to change the datacenter region where the app is deployed. You can review the [spec file reference documentation](https://docs.digitalocean.com/products/app-platform/reference/app-spec/) for a full list of available fields and applicable values.

## Update an App’s Spec using Automation

You can update an app’s spec using the CLI’s app update command or the API’s app update endpoint. To update a spec, include the updated spec as a JSON object in the request body of the API call, or use the CLI’s `--spec` flag to specify the path to the updated spec file.

How to Update an App Spec Using the DigitalOcean CLI

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


How to Update an App Spec Using the DigitalOcean API

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

## Update an App’s Spec from the Control Panel

To edit your app’s spec from the control panel, navigate to your app’s **Overview** page and then click the **Settings** tab. From the **Settings** tab, scroll to the **App Spec** section and click **Edit**. This opens the spec editor.

You can manually edit the spec in one of two ways:

1. **Edit the spec in your browser:** Click inside the spec editor and make your changes as you would in a text editor. Once finished, click **Save**.
2. **Download and edit the spec:** From the spec editor, click **Download** to download the spec to your local computer. Open the file in your preferred text editor and make your changes. Once finished, save the file and click **Upload** to upload the updated spec.

Once you have updated the spec and have saved or uploaded the changes, the app automatically redeploys with the new changes.

In this article...

- [Update an App’s Spec using Automation](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/#update-an-apps-spec-using-automation)
- [Update an App’s Spec from the Control Panel](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/#update-an-apps-spec-from-the-control-panel)

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