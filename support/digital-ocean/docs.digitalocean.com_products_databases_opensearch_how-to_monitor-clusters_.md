---
url: "https://docs.digitalocean.com/products/databases/opensearch/how-to/monitor-clusters/"
title: "How to Monitor OpenSearch Database Cluster Performance | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/opensearch.2629f480d99bedd31ae31e9fd8269c327373bb1a8ecc38a68f458985e2393b42.svg)OpenSearch](https://docs.digitalocean.com/products/databases/opensearch/)
- [Getting Started](https://docs.digitalocean.com/products/databases/opensearch/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/opensearch/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/databases/opensearch/how-to/)
  - [Create OpenSearch Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/opensearch/how-to/forward-logs/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/resize/)
  - [Secure OpenSearch Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/secure/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/opensearch/how-to/schedule-updates/)
  - [Manage Users](https://docs.digitalocean.com/products/databases/opensearch/how-to/manage-users/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/opensearch/how-to/monitor-clusters/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/opensearch/how-to/set-up-alerts/)
  - [Relocate Database Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/relocate/)
  - [Fork Database Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/fork-clusters/)
  - [Restore from Backups](https://docs.digitalocean.com/products/databases/opensearch/how-to/restore-from-backups/)
  - [Destroy Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/destroy/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/tag/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/reconfigure/)
- [Reference](https://docs.digitalocean.com/products/databases/opensearch/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/opensearch/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/opensearch/concepts/best-practices/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/opensearch/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/opensearch/details/)
  - [Features](https://docs.digitalocean.com/products/databases/opensearch/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/opensearch/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/opensearch/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/opensearch/details/limits/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/opensearch/details/notifications/)
  - [Supported Plugins](https://docs.digitalocean.com/products/databases/opensearch/details/supported-plugins/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)

- [How-Tos](https://docs.digitalocean.com/products/databases/opensearch/how-to/)
- Monitor Cluster Performance

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Monitor OpenSearch Database Cluster Performance

Validated on 17 Jun 2024 • Last edited on 17 Jun 2025

OpenSearch is an open-source search and analytics suite which serves as a centralized location to manage logs forwarded from other resources, such as databases and Droplets.

DigitalOcean Managed Databases include metrics visualizations so you can monitor performance and health of your database cluster.

## View Cluster Metrics

To view OpenSearch performance metrics, click the name of the database to go to its **Overview** page. Then, click the **Insights** tab.

![The Insights tab of a managed databases cluster](https://docs.digitalocean.com/screenshots/databases/opensearch-insights-tab.b8f561bfecd762fcc82877acc1164a33d28c77e7d91040b931c025db0fb292e4.png)

The **Select Object** drop-down menu lists the cluster itself and all of the databases in the cluster. Choose the cluster to view its metrics.

In the **Select Period** drop-down menu, you can choose a time frame for the x-axis of the graphs, ranging from 1 hour to 30 days. Each line in the graphs displays about 300 data points.

By default, the summary to the right shows the most recent metrics values. When you hover over a different time in a graph, the summary displays the values from that time instead.

Note
You may notice gaps in your metrics data from outages, platform maintenance, or a database failover or migration. You can check [DigitalOcean’s status page](https://status.digitalocean.com/) for outages, review the cluster maintenance window, visit the cluster’s **Settings** \> **Logs** (or **Logs & Queries**) page to look for failovers and migrations.

If you recently provisioned the cluster or added nodes, it may take a few minutes for the metrics data to finish processing before you see it on the **Insights** page.

If you have 200 or more databases on a single cluster, you may be unable to retrieve their metrics. If you reach this limit, create additional databases in a new cluster.

## Cluster Metrics Details

Database clusters have the following cluster metrics:

- CPU usage
- 1-, 5-, and 15-minute load average
- Memory usage
- Disk usage

All resource usage graphs have three lines for minimum, maximum, and average. If you have a one-node cluster or are viewing a read-only node, all three lines are be a single, superimposed line. Read-only node metrics are displayed independently from clusters which are comprised of primary and standby nodes.

### CPU Usage

The CPU usage plot shows, for all nodes in the cluster, the minimum, maximum, and average percentage of processing power being used across all cores.

![Cluster CPU usage](https://docs.digitalocean.com/screenshots/databases/metrics/cpu.004cb12362c66e709ffb4ac1c301f9416a132083864f5da1bf3d49625313e83e.png)

If you experience a significant increase in CPU usage, check the throughput plot and query statistics to look for unexpected usage patterns or long-running queries.

Learn more about [CPU usage in the Droplet metrics definitions](https://docs.digitalocean.com/products/monitoring/concepts/metrics/#cpu).

### Load Average

The load average plot displays 1-, 5-, and 15-minute load averages, averaged across all primary and standby nodes in the cluster. Load average measures the processes that are either being handled by the processor or are waiting for processor time.

![Cluster load averages](https://docs.digitalocean.com/screenshots/databases/metrics/load-average.ebb0041827b657fd71edf914a1764500a118d717a00da08385abe9b1e2eb351a.png)

The three time-based load average metrics are calculated as an exponentially weighted moving average over the past 1, 5, and 15 minutes. This metric does not adjust for multiple cores. Learn more about [load averages in the Droplet metrics definitions](https://docs.digitalocean.com/products/monitoring/concepts/metrics/#load-average).

### Memory Usage

The memory usage plot presents the minimum, maximum, and average percentage of memory consumption across all nodes in the cluster. Because cached memory can be released on demand, it is not considered in use.

![Cluster memory usage](https://docs.digitalocean.com/screenshots/databases/metrics/memory.2005ca5da17ec7b5214c891d7d40dbfe9645ce10757917e87f549334b12f5384.png)

Learn more about [memory usage in the Droplet metrics definitions](https://docs.digitalocean.com/products/monitoring/concepts/metrics/#memory).

### Disk Usage

The disk usage plot shows the minimum, maximum, and average percentage of disk consumed across all primary and standby nodes in the cluster. You should maintain disk usage below 90%.

![Cluster disk usage](https://docs.digitalocean.com/screenshots/databases/metrics/disk.9d17a810f15ae90f773a1917dd2fa63e46bc903f2be8c5e44838c1d1982b5b11.png)

Learn more about [disk I/O in the Droplet metrics definitions](https://docs.digitalocean.com/products/monitoring/concepts/metrics/#disk-i-o).

## Access the Metrics Endpoint

You can also view your database cluster’s metrics programmatically via the metrics endpoint. This endpoint includes over twenty times the metrics you can access in the **Insights** tab in the control panel.

You can access the metrics endpoint with a cURL command or a monitoring system like [Prometheus](https://prometheus.io/).

### Get Hostname and Credentials

First, you need to retrieve your cluster’s metrics hostname by sending a [`GET` request to `https://api.digitalocean.com/v2/databases/${UUID}`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_get). In the following example, the target database cluster has a standby node, which requires a second `host`/`port` pair:

```bash
curl --silent -XGET --location 'https://api.digitalocean.com/v2/databases/${UUID}' --header 'Content-Type: application/json' --header "Authorization: Bearer $RO_DIGITALOCEAN_TOKEN" | jq '.database.metrics_endpoints'
```

Which returns the following `host`/`port` pairs:

```bash
[\
  {\
    "host": "db-test-for-metrics.c.db.ondigitalocean.com",\
    "port": 9273\
  },\
  {\
    "host": "replica-db-test-for-metrics.c.db.ondigitalocean.com",\
    "port": 9273\
  }\
]
```

Next, you need your cluster’s metrics credentials. You can retrieve these by making a [`GET` request to `https://api.digitalocean.com/v2/databases/metrics/credentials`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_get_cluster_metrics_credentials) with an admin or write token:

```bash
curl --silent -XGET --location 'https://api.digitalocean.com/v2/databases/metrics/credentials' --header 'Content-Type: application/json' --header "Authorization: Bearer $RW_DIGITALOCEAN_TOKEN" | jq '.'
```

Which returns the following credentials:

```
{
  "credentials": {
    "basic_auth_username": "..."
    "basic_auth_password": "...",
  }
}
```

### Access with cURL

To access the endpoint using cURL, make a [`GET` request to `https://$HOST:9273/metrics`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_get), replacing the hostname, username, and password variables with the credentials you found in the previous steps:

```bash
curl -XGET -k -u $USERNAME:$PASSWORD https://$HOST:9273/metrics
```

### Access with Prometheus

To access the endpoint using Prometheus, first copy the following configuration into a file `prometheus.yml`, replacing the hostname, username, password, and path to CA cert. This configures Prometheus to use all the credentials necessary to access the endpoint:

```yaml
# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'dbaas_cluster_metrics_svc_discovery'
    scheme: https
    tls_config:
      ca_file: /path/to/ca.crt
    dns_sd_configs:
    - names:
      - $TARGET_ADDRESS
      type: 'A'
      port: 9273
      refresh_interval: 15s
    metrics_path: '/metrics'
    basic_auth:
      username: $BASIC_AUTH_USERNAME
      password: $BASIC_AUTH_PASSWORD
```

Then, copy the following connection script into a file named `up.sh`. This script runs `envsubst` and starts a Prometheus container with the config from the previous step:

```sh
#!/bin/bash
envsubst < prometheus.yml > /tmp/dbaas-prometheus.yml

docker run -p 9090:9090 \
  -v /tmp/dbaas-prometheus.yml:/etc/prometheus/prometheus.yml \
  prom/prometheus
```

Go to `http://localhost:9090/targets` in a browser to confirm that multiple hosts are up and healthy.

![The Prometheus dashboard](https://docs.digitalocean.com/screenshots/databases/prometheus-check.db5b24f1902682f3f89c9392aedd7886e9239093f454e7ce6e359a5ed9c67272.png)

Then, navigate to `http://localhost:9090/graph` to query Prometheus for metrics.

![A Prometheus graph](https://docs.digitalocean.com/screenshots/databases/prometheus-graph.95a3e0ab293441c91a195d7580d839edafa9acc0bd067373b16b74eb9f9cab66.png)

For more details, see the Prometheus [DNS SD docs](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#dns_sd_config) and [TLS config docs](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#tls_config).

### Additional Resources

For more details on each available metric, see the [OpenSearch documentation](https://opensearch.org/docs/latest/).

In this article...

- [View Cluster Metrics](https://docs.digitalocean.com/products/databases/opensearch/how-to/monitor-clusters/#view-cluster-metrics)
- [Cluster Metrics Details](https://docs.digitalocean.com/products/databases/opensearch/how-to/monitor-clusters/#cluster-metrics-details)
  - [CPU Usage](https://docs.digitalocean.com/products/databases/opensearch/how-to/monitor-clusters/#cpu-usage)
  - [Load Average](https://docs.digitalocean.com/products/databases/opensearch/how-to/monitor-clusters/#load-average)
  - [Memory Usage](https://docs.digitalocean.com/products/databases/opensearch/how-to/monitor-clusters/#memory-usage)
  - [Disk Usage](https://docs.digitalocean.com/products/databases/opensearch/how-to/monitor-clusters/#disk-usage)
- [Access the Metrics Endpoint](https://docs.digitalocean.com/products/databases/opensearch/how-to/monitor-clusters/#access-the-metrics-endpoint)
  - [Get Hostname and Credentials](https://docs.digitalocean.com/products/databases/opensearch/how-to/monitor-clusters/#get-hostname-and-credentials)
  - [Access with cURL](https://docs.digitalocean.com/products/databases/opensearch/how-to/monitor-clusters/#access-with-curl)
  - [Access with Prometheus](https://docs.digitalocean.com/products/databases/opensearch/how-to/monitor-clusters/#access-with-prometheus)
  - [Additional Resources](https://docs.digitalocean.com/products/databases/opensearch/how-to/monitor-clusters/#additional-resources)

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