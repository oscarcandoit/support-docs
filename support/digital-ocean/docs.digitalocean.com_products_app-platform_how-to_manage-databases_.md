---
url: "https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/"
title: "How to Manage Databases in App Platform | DigitalOcean Documentation"
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
    - [Manage Databases](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/)
    - [Store Data](https://docs.digitalocean.com/products/app-platform/how-to/store-data/)
    - [Use Database Connection Pools](https://docs.digitalocean.com/products/app-platform/how-to/connect-pg-pools/)
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
- [Manage Data Storage](https://docs.digitalocean.com/products/app-platform/how-to/manage-data-storage/)
- Manage Databases

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage Databases in App Platform

Validated on 14 Jan 2022 • Last edited on 17 Jun 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

Databases come in two forms in App Platform:

- **Dev databases**, which are limited databases intended for development but not production use.

Dev databases come in one size and do not scale well to handle traffic for your app. Dev database permissions do not allow you to create databases, so you need to use the default database. Dev databases are limited to PostgreSQL.

- **Managed databases**, which are instances of [DigitalOcean Managed Databases](https://docs.digitalocean.com/products/databases/) that you can use in App Platform. We recommend managed databases for production use.

Managed databases have features like standby nodes, upscaling, and read-only nodes that add extra processing and throughput capacity for your database solution, and multiple trusted sources internal and external to DigitalOcean services. Managed databases support multiple database engines.


You can add a dev or managed database to your app at any time. You can also upgrade a dev database to a managed database.

## Add a Database to an Existing App

You can create a database during your app’s initial creation or add one later using the DigitalOcean Control Panel. You can also add a database to an app by defining it in your app’s spec file and then submitting the new spec using either the API, CLI, DigitalOcean Control Panel, or the app’s source repo.

Note
Dev databases are located in the same region as your app and cannot be migrated to another region. If you migrate your app to a different region, the app won’t be able to access the associated dev database anymore. If you need to migrate your app and dev database, we recommend either backing up the contents of the database and restoring it after the app’s migration, or using a [DigitalOcean Managed Database](https://docs.digitalocean.com/products/databases/) instead. You can migrate managed databases independently of apps to different regions as needed.

To use a managed database with App platform, you need to create one on your team. From the **Create** menu in the top right of the [control panel](https://cloud.digitalocean.com/databases), click **Databases**. The database you create appears in the **Database Clusters** list when you add a database resource in App Platform.

This section focuses on adding a database to an existing app using various methods.

### Add a Database to an App Using Automation

You can add a database to an app using the CLI’s app update command or the API’s app update endpoint. To add a database, update the [app’s spec](https://docs.digitalocean.com/products/app-platform/reference/app-spec/) with the database’s specifications and submit the spec using the following command or endpoint.

How to Add a Database to an App Using the DigitalOcean CLI

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


How to Add a Database to an App Using the DigitalOcean API

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

### Add a Database to an App Using the Control Panel

In the [**Apps** section of the DigitalOcean Control Panel](https://cloud.digitalocean.com/apps), click your app, then click the **Create** drop-down. Add a database resource by choosing the **Create/Attach Database** option.

![Component screen](https://docs.digitalocean.com/screenshots/app-platform/components-create-open.a72a91549b87b715eaeeea8e6cc3b873fd4fe39ddd1042a2bad07af74a56e3ee.png)

Select your database configuration, choosing from the available engines and plans. You can add a dev database or an existing managed database from your DigitalOcean account.

![Database creation screen](https://docs.digitalocean.com/screenshots/app-platform/components-database-create.6ece4b3060c87d22c9127e72742f3e5514876cc340d062d0191a1d36ee52252b.png)

All DigitalOcean database clusters support apps as trusted sources. Your app is added as a trusted source to the dev database. This creates a secure connection to the database and it accepts traffic only from the app. Similarly, if your existing managed database has trusted sources enabled, the app is automatically added as a trusted source. If trusted source is disabled for your managed database, select the **Add app as a trusted source** option to add the app as a trusted source.

![Managed DB Enable Trusted](https://docs.digitalocean.com/screenshots/app-platform/prod-db-enable-trusted.60a727a026ee5c966016b771e073ebcfbea81a25293a37f30cd8192eab53aad2.png)

Alternatively, you can specify an app in the **Trusted sources** section in the **Settings** tab of the database in the [cloud control panel](https://cloud.digitalocean.com/databases). This starts an app redeployment that enables a connection restricted from that app to the database.

Note
Enabling an app as a trusted source blocks any other connections. You need to add other sources explicitly to the trusted sources list as described in the [managed databases documentation](https://docs.digitalocean.com/products/databases/).

When you are ready to proceed, click **Create and Attach** to confirm your choices.

### Add a Dev Database Using the App Spec

You can also add a database by specifying the database details directly in the [app’s spec file](https://docs.digitalocean.com/products/app-platform/reference/app-spec/) and [submitting the updated spec](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/) via the control panel or uploading it to your app’s source repo.

To add a database using the app’s spec, add the following object to root of the spec and update the values as necessary:

`app.yaml`

```yaml
databases:
- engine: PG
  name: db-example
  version: "16"
```

Using the spec, you can specify the database’s name and version. You cannot specify the version the control panel. The currently available PostgreSQL versions are `13`, `14`, `15`, and `16`.

## Connect to a Dev Database

Go to [control panel](https://cloud.digitalocean.com/apps), click your app, and click the **Settings** tab.

Click your database to view its details. The connection information for your database is provided in the **Connection Details** section.

![Database detail screen](https://docs.digitalocean.com/screenshots/app-platform/components-database-detail.838ce2fd8cc5684024e4afb2a35c1d35b6d54eb3e7cad2c91211e39d360d59c7.png)

The full connection string for your database is also be available as a runtime environment variable named `DATABASE_URL` which you can use in your application code. You should see this it in the details for your service resource, set to a value such as:

```
postgres://${db.USERNAME}:${db.PASSWORD}@${db.HOSTNAME}:${db.PORT}/${db.DATABASE}
```

`DATABASE_URL` wraps several environment variables that you can also access individually, such as `db.USERNAME`, `db.PASSWORD`, and so on.

## Upgrade Dev Database to Managed Database

You can upgrade your dev database to a [DigitalOcean Managed Database](https://docs.digitalocean.com/products/databases/postgresql/) at any time. When you upgrade your database, we migrate the existing data to a new managed database.

To upgrade your dev database, go to [the control panel](https://cloud.digitalocean.com/apps), click your app, and click the **Settings** tab.

Click the dev database you would like to upgrade to a managed database and click the **Upgrade to a Managed Database** button. You can choose the size of the machines that run your database with the **Node Plan** drop-down, and add standby nodes that stay synchronized and provide failover during downtime with the **Standby Nodes** drop-down.

Click **Upgrade Database** to complete the process.

## Upgrade Dev Database Version

You can upgrade your dev database to a different version of PostgreSQL. App Platform supports PostgreSQL `13`, `14`, `15`, and `16`.

To use the commands in these instructions, you need a [DigitalOcean API token](https://docs.digitalocean.com/reference/api/create-personal-access-token/), with App Platform `read` and `write` scopes, saved as an environment variable named `DIGITALOCEAN_TOKEN` in your terminal.

To upgrade a dev database, go to [the control panel](https://cloud.digitalocean.com/apps), click your app, and then click the **Settings** tab. In the **Settings** tab, select the database component you want to upgrade, and then click the copy button beside the database’s UUID.

![Database UUID in the control panel](https://docs.digitalocean.com/screenshots/app-platform/app-db-uuid.1cfaa505b4b9739512193bc8173354847f41ebc51f7b60931ec3838f2f1d8340.png)

Once you have copied the UUID, use the following `curl` command to first install any updates for your database, replacing the `<your_database_uuid>` value with the UUID you copied from the control panel. This is a best practice to ensure a smooth upgrade:

```shell
curl -X PUT \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/databases/<your_database_uuid>/install_update"
```

The update may take a few minutes to complete.

Once the update is complete, use the following `curl` command to upgrade your database to a different version, replacing the `<your_desired_version>` value with the PostgreSQL version you want to upgrade to, and the `<your_database_uuid>` value with the database’s UUID.

```shell
curl -X PUT \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"version":"<your_desired_version>"}' \
  "https://api.digitalocean.com/v2/databases/<your_database_uuid>/upgrade"
```

The upgrade may take several minutes to complete. If you receive the error `Cannot make changes while the service is undergoing maintenance`, the updates may still be installing and you can try upgrading again later.

To verify that the upgrade was successful, go to the **Settings** tab of your app, and then click **Edit** beside the **App Spec** section. The database’s version is specified in the `databases` object. For example:

`your-app.yaml`

```yaml
databases:
- engine: PG
  name: your-database
  version: "16"
```

If you want a database that offers more customization and a managed experience, we recommend [upgrading your dev database to a managed database](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#upgrade-dev-database-to-managed-database).

## Integrate an Existing Kafka Database (Private Preview)

You can create and integrate DigitalOcean Managed Kafka Databases with your App Platform app, but they require an additional step to configure the app’s ability to connect to the database.

App Platform does not currently support connections to Kafka databases that have trusted sources enabled. You must [disable trusted sources](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#disable-trusted-sources) on the Kafka database before it can be integrated with an App Platform app.

App Platform provides [bindable environment variables](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/#using-bindable-variables-within-environment-variables) that automatically provide connection details for your Kafka database. To integrate an existing Kafka database, follow the [steps to add the database to your app](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#add-a-database-to-an-app-using-the-control-panel), then add the following environment variable key value pairs to your app, replacing `your-kafka-instance-name` with your database cluster’s name:

| Example Key | Value Format | Description |
| --- | --- | --- |
| KAFKA\_BROKER | ${your-kafka-instance-name.HOSTNAME}:${your-kafka-instance-name.PORT} | The hostname and port of the database’s Kafka brokers |
| KAFKA\_USERNAME | ${your-kafka-instance-name.USERNAME} | The username for authenticating with the Kafka database |
| KAFKA\_PASSWORD | ${your-kafka-instance-name.PASSWORD} | The password for authenticating with the Kafka database |
| KAFKA\_CA\_CERT | ${your-kafka-instance-name.CA\_CERT} | The CA certificate for TLS authentication with the Kafka database |

You can pass these environment variables to the Kafka client in your app’s code to securely connect to the client.

## Disable Trusted Sources

App Platform does not support connecting to managed databases with trusted sources enabled during the app’s build process. To allow your app to connect to the database during development, you need to disable trusted sources on the database.

Go to [the control panel](https://cloud.digitalocean.com/apps), click your app, and click the **Settings** tab.

Click your database to view its details. The trusted sources information for your database is provided in the **Trusted Sources** section. To disable the setting, click **Edit**, uncheck the **Add app as a trusted source** checkbox, and click **Save**.

![Trusted sources setting](https://docs.digitalocean.com/screenshots/app-platform/disable-enable-trusted-setting.c18e5d3c9d63c230e13a6c2420013bd6a8b54ea608169050cdcb71f4b36551ed.png)

## Destroy a Database

Go to [the control panel](https://cloud.digitalocean.com/apps), click your app, and click the **Settings** tab.

Click your database. The details screen for your database has a **Destroy Database** button on the bottom that will destroy your database after you confirm the action.

In this article...

- [Add a Database to an Existing App](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#add-a-database-to-an-existing-app)
  - [Add a Database to an App Using Automation](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#add-a-database-to-an-app-using-automation)
  - [Add a Database to an App Using the Control Panel](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#add-a-database-to-an-app-using-the-control-panel)
  - [Add a Dev Database Using the App Spec](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#add-a-dev-database-using-the-app-spec)
- [Connect to a Dev Database](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#connect-to-a-dev-database)
- [Upgrade Dev Database to Managed Database](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#upgrade-dev-database-to-managed-database)
- [Upgrade Dev Database Version](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#upgrade-dev-database-version)
- [Integrate an Existing Kafka Database (Private Preview)](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#integrate-an-existing-kafka-database-private-preview)
- [Disable Trusted Sources](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#disable-trusted-sources)
- [Destroy a Database](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#destroy-a-database)

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