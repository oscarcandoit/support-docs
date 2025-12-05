---
url: "https://supabase.com/docs/guides/telemetry/metrics"
title: "Metrics | Supabase Docs"
---

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

Main menu

[Telemetry](https://supabase.com/docs/guides/telemetry)

[Overview](https://supabase.com/docs/guides/telemetry)

Logging & observability[Logging](https://supabase.com/docs/guides/telemetry/logs)
[Advanced log filtering](https://supabase.com/docs/guides/telemetry/advanced-log-filtering)
[Log drains](https://supabase.com/docs/guides/telemetry/log-drains)
[Reports](https://supabase.com/docs/guides/telemetry/reports)
[Metrics](https://supabase.com/docs/guides/telemetry/metrics)
[Sentry integration](https://supabase.com/docs/guides/telemetry/sentry-monitoring)

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

Telemetry

1. [Telemetry](https://supabase.com/docs/guides/telemetry)
3. Logging & observability
5. [Metrics](https://supabase.com/docs/guides/telemetry/metrics)

# Metrics

* * *

In addition to the reports and charts built in to the Supabase dashboard, each project hosted on the Supabase platform comes with a [Prometheus](https://prometheus.io/)-compatible metrics endpoint, updated every minute, which can be used to gather insight into the health and status of your project.

You can use this endpoint to ingest data into your own monitoring and alerting infrastructure, as long as it is capable of scraping Prometheus-compatible endpoints, in order to set up custom rules beyond those supported by the Supabase dashboard.

The endpoint discussed in this article is in beta, and the metrics returned by it might evolve or be changed in the future to increase its utility.

The endpoint discussed in this article is not available on self-hosted.

## Accessing the metrics endpoint [\#](https://supabase.com/docs/guides/telemetry/metrics\#accessing-the-metrics-endpoint)

Your project's metrics endpoint is accessible at `https://<project-ref>.supabase.co/customer/v1/privileged/metrics`.

Access to the endpoint is secured via HTTP Basic Auth:

- username: `service_role`
- password: the `service_role` API key or any other secret API key, get these from [Supabase dashboard](https://supabase.com/dashboard/project/_/settings/api-keys)

You can also retrieve your service role key programmatically using the Management API:

```
1
2
3
4
5
6
7

# Get your access token from https://supabase.com/dashboard/account/tokensexport SUPABASE_ACCESS_TOKEN="your-access-token"export PROJECT_REF="your-project-ref"# Get project API keys including service_role keycurl -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \  "https://api.supabase.com/v1/projects/$PROJECT_REF/api-keys?reveal=true"
```

###### Project URL

No project found

To get your Project URL, [log in](https://supabase.com/dashboard).

```
1
2

curl <project-url>/customer/v1/privileged/metrics \    --user 'service_role:sb_secret_...'
```

```
1
2

curl <project-url>/customer/v1/privileged/metrics \    --user 'service_role:<service-role-jwt>'
```

## Supabase Grafana [\#](https://supabase.com/docs/guides/telemetry/metrics\#supabase-grafana)

The pre-configured Supabase Grafana Dashboard is an advanced version of the [Dashboard's Database Reports](https://supabase.com/dashboard/project/_/observability/database). It visualizes over 200 database performance and health metrics.

![Supabase Grafana](https://supabase.com/docs/img/guides/platform/supabase-grafana-prometheus.png)

Instructions are included in the README for deploying the repository using docker.

## Using the metrics endpoint in production [\#](https://supabase.com/docs/guides/telemetry/metrics\#using-the-metrics-endpoint-in-production)

To set up monitoring for your project, you will need two things:

1. A datastore - a place to store the metrics coming from your Supabase project over time
2. A dashboard - a place to visualize the state of your Supabase project for a defined period

### Setting up a metrics datastore [\#](https://supabase.com/docs/guides/telemetry/metrics\#setting-up-a-metrics-datastore)

One of the more well-known options is [Prometheus](https://prometheus.io/docs/introduction/overview/) and it is the tool used in this guide.

You can [self-host](https://prometheus.io/docs/prometheus/latest/installation/) Prometheus or choose a managed service to store your metrics. Some of the providers offering managed Prometheus are:

- [Digital Ocean](https://marketplace.digitalocean.com/apps/prometheus)
- [AWS](https://aws.amazon.com/prometheus/)
- [Grafana Cloud](https://grafana.com/products/cloud/metrics/)

Follow the guides for the deployment option you choose

#### Adding a scrape job to Prometheus [\#](https://supabase.com/docs/guides/telemetry/metrics\#adding-a-scrape-job-to-prometheus)

For Prometheus, modify your `prometheus.yaml` file to add a Supabase job, and set the `metrics_path`, `scheme`, `basic_auth` and `targets` parameters. For example:

```
1
2
3
4
5
6
7
8
9
10
11
12
13

scrape_configs:  - job_name: "MySupabaseJob"    metrics_path: "/customer/v1/privileged/metrics"    scheme: https    basic_auth:      username: "service_role"      password: "<your service_role JWT>"    static_configs:      - targets: [        "<your Supabase Project ID>.supabase.co:443"          ]        labels:          group: "MyGroupLabel"
```

### Setting up a dashboard [\#](https://supabase.com/docs/guides/telemetry/metrics\#setting-up-a-dashboard)

For this guide, we will be using [Grafana](https://grafana.com/docs/grafana/latest/introduction/).

You can [self-host](https://grafana.com/docs/grafana/latest/setup-grafana/installation/) Grafana or many providers offer managed Grafana, some of which are listed below:

- [DigitalOcean](https://marketplace.digitalocean.com/apps/grafana)
- [AWS](https://aws.amazon.com/grafana/)
- [Grafana Cloud](https://grafana.com/grafana/)

Follow the guides of the provider you choose to get Grafana up and running.

### Adding a data source to Grafana [\#](https://supabase.com/docs/guides/telemetry/metrics\#adding-a-data-source-to-grafana)

In the left-hand menu, select `Data sources` and click `Add new data source`.

Select `Prometheus` and enter the connection details for the Prometheus instance you have set up.

Under **Interval behavior**, set the **scraping interval** to 60s and test the data source. Once it has passed, save it.

### Adding the Supabase dashboard [\#](https://supabase.com/docs/guides/telemetry/metrics\#adding-the-supabase-dashboard)

In the left-hand menu, select `Dashboards` and click `New`. From the drop-down, select `Import`.

Copy the raw file from our [supabase-grafana](https://raw.githubusercontent.com/supabase/supabase-grafana/refs/heads/main/grafana/dashboard.json) repository and paste it (or upload the file).

Click `Load` and the dashboard will load from the project specified in your Prometheus job.

### Monitoring your project [\#](https://supabase.com/docs/guides/telemetry/metrics\#monitoring-your-project)

You can configure alerts from Prometheus or Grafana. The `supabase-grafana` repository has a selection of [example alerts](https://github.com/supabase/supabase-grafana/blob/main/docs/example-alerts.md) that can be configured.

Grafana Cloud has an unofficial integration for scraping Supabase metrics. See their [docs](https://grafana.com/docs/grafana-cloud/monitor-infrastructure/integrations/integration-reference/integration-supabase/) for instructions on how to configure it but note that it is not full-featured nor is it supported
by Supabase.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/telemetry/metrics.mdx)

### Is this helpful?

NoYes

### On this page

[Accessing the metrics endpoint](https://supabase.com/docs/guides/telemetry/metrics#accessing-the-metrics-endpoint) [Supabase Grafana](https://supabase.com/docs/guides/telemetry/metrics#supabase-grafana) [Using the metrics endpoint in production](https://supabase.com/docs/guides/telemetry/metrics#using-the-metrics-endpoint-in-production) [Setting up a metrics datastore](https://supabase.com/docs/guides/telemetry/metrics#setting-up-a-metrics-datastore) [Setting up a dashboard](https://supabase.com/docs/guides/telemetry/metrics#setting-up-a-dashboard) [Adding a data source to Grafana](https://supabase.com/docs/guides/telemetry/metrics#adding-a-data-source-to-grafana) [Adding the Supabase dashboard](https://supabase.com/docs/guides/telemetry/metrics#adding-the-supabase-dashboard) [Monitoring your project](https://supabase.com/docs/guides/telemetry/metrics#monitoring-your-project)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)