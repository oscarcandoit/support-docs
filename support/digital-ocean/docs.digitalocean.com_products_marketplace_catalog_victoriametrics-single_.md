---
url: "https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-single/"
title: "VictoriaMetrics Single | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/marketplace.6eb4c8240f6fd707ebe2218018dc699d375e2e3e9885d7fb3e760a9fc120a68e.svg)Marketplace](https://docs.digitalocean.com/products/marketplace/)
- [Droplet 1-Click Apps](https://docs.digitalocean.com/products/marketplace/droplet-1-click-apps/)
- [Kubernetes 1-Click Apps](https://docs.digitalocean.com/products/marketplace/kubernetes-1-click-apps/)
- [SaaS Add-Ons](https://docs.digitalocean.com/products/marketplace/saas-add-ons/)
- [1-Click Models](https://docs.digitalocean.com/products/marketplace/1-click-models/)
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-single/)
  - [Add-Ons](https://docs.digitalocean.com/products/marketplace/categories/add-ons/)
  - [Analytics](https://docs.digitalocean.com/products/marketplace/categories/analytics/)
  - [Blogs and Forums](https://docs.digitalocean.com/products/marketplace/categories/blogs-and-forums/)
  - [Business Apps](https://docs.digitalocean.com/products/marketplace/categories/business-apps/)
  - [Chat](https://docs.digitalocean.com/products/marketplace/categories/chat/)
  - [Data Science](https://docs.digitalocean.com/products/marketplace/categories/data-science/)
  - [Databases](https://docs.digitalocean.com/products/marketplace/categories/databases/)
  - [Developer Tools](https://docs.digitalocean.com/products/marketplace/categories/developer-tools/)
  - [eCommerce](https://docs.digitalocean.com/products/marketplace/categories/ecommerce/)
  - [eLearning](https://docs.digitalocean.com/products/marketplace/categories/elearning/)
  - [Email](https://docs.digitalocean.com/products/marketplace/categories/email/)
  - [Frameworks](https://docs.digitalocean.com/products/marketplace/categories/frameworks/)
  - [Functions](https://docs.digitalocean.com/products/marketplace/categories/functions/)
  - [Gaming](https://docs.digitalocean.com/products/marketplace/categories/gaming/)
  - [Kubernetes](https://docs.digitalocean.com/products/marketplace/categories/kubernetes/)
  - [Logging](https://docs.digitalocean.com/products/marketplace/categories/logging/)
  - [Media](https://docs.digitalocean.com/products/marketplace/categories/media/)
  - [Monitoring](https://docs.digitalocean.com/products/marketplace/categories/monitoring/)
  - [Network Tools](https://docs.digitalocean.com/products/marketplace/categories/network-tools/)
  - [Security](https://docs.digitalocean.com/products/marketplace/categories/security/)
  - [Storage](https://docs.digitalocean.com/products/marketplace/categories/storage/)
- [Glossary](https://docs.digitalocean.com/glossary/marketplace/)
- [Service-Level Agreement](https://www.digitalocean.com/sla/marketplace)

- VictoriaMetrics Single

[Give Feedback](https://ideas.digitalocean.com/documentation)

# VictoriaMetrics Single

Generated on 10 Nov 2025
from [the VictoriaMetrics Single catalog page](https://marketplace.digitalocean.com/apps/victoriametrics-single)

**VictoriaMetrics** is a free [open source](https://en.wikipedia.org/wiki/Open-source_software) [time series database](https://en.wikipedia.org/wiki/Time_series_database) (TSDB) and monitoring solution, designed to collect, store and process real-time metrics.

It supports the [Prometheus](https://en.wikipedia.org/wiki/Prometheus_(software)) pull model and various push protocols ( [Graphite](https://en.wikipedia.org/wiki/Graphite_(software)), [InfluxDB](https://en.wikipedia.org/wiki/InfluxDB), OpenTSDB) for data ingestion. It is optimized for storage with high-latency IO, low IOPS and time series with [high churn rate](https://docs.victoriametrics.com/FAQ.html#what-is-high-churn-rate).

For reading the data and evaluating alerting rules, [VictoriaMetrics](https://victoriametrics.com/) supports the PromQL, [MetricsQL](https://docs.victoriametrics.com/metricsql/) and Graphite query languages. VictoriaMetrics Single is fully autonomous and can be used as a long-term storage for time series.

VictoriaMetrics Single = Hassle-free monitoring solution. Easily handles 10M+ of active time series on a single instance. Perfect for small and medium environments.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [VictoriaMetrics Single](https://docs.victoriametrics.com/victoriametrics/) | [1.129.1](https://docs.victoriametrics.com/changelog/#v11291) | [Apache 2](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=victoriametrics-victoriametricss)

## Creating an App using the API

In addition to creating a Droplet from the VictoriaMetrics Single 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB VictoriaMetrics Single Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"victoriametrics-victoriametricss"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying VictoriaMetrics Single

### Config

VictoriaMetrics configuration is located at `/etc/victoriametrics/single/scrape.yml` on the droplet.

This One Click app uses 8428, 2003, 4242 and 8089 ports to accept metrics from different protocols. It’s recommended to disable ports for protocols which are not needed. [Ubuntu firewall](https://help.ubuntu.com/community/UFW) can be used to easily disable access for specific ports.

### Scraping metrics

VictoriaMetrics supports metrics scraping in the same way as Prometheus does. Check the configuration file to edit scraping targets. See more details about scraping at [How to scrape Prometheus exporters](https://docs.victoriametrics.com/single-server-victoriametrics/#how-to-scrape-prometheus-exporters-such-as-node-exporter).

### Sending metrics

Besides scraping, VictoriaMetrics accepts write requests for various ingestion protocols. This One Click app supports the following protocols:

- [OpenTelemetry metrics format](https://docs.victoriametrics.com/single-server-victoriametrics/#sending-data-via-opentelemetry)

- [Datadog](https://docs.victoriametrics.com/single-server-victoriametrics/#how-to-send-data-from-datadog-agent)

* * *

- [Influx (telegraph)](https://docs.victoriametrics.com/single-server-victoriametrics/#how-to-send-data-from-influxdb-compatible-agents-such-as-telegraf), [JSON](https://docs.victoriametrics.com/single-server-victoriametrics/#how-to-import-data-in-json-line-format), [CSV](https://docs.victoriametrics.com/single-server-victoriametrics/#how-to-import-csv-data)
- [Prometheus](https://docs.victoriametrics.com/single-server-victoriametrics/#how-to-import-data-in-prometheus-exposition-format) on port :8428
- [Graphite (statsd)](https://docs.victoriametrics.com/single-server-victoriametrics/#how-to-send-data-from-graphite-compatible-agents-such-as-statsd) on port :2003 tcp/udp
- [OpenTSDB](https://docs.victoriametrics.com/single-server-victoriametrics/#how-to-send-data-from-opentsdb-compatible-agent) on port :4242
- Influx (telegraph) on port :8089 tcp/udp

See more details and examples in [official documentation](https://docs.victoriametrics.com/single-server-victoriametrics/).

### UI

VictoriaMetrics provides a [User Interface (UI)](https://docs.victoriametrics.com/single-server-victoriametrics/#vmui) for query troubleshooting and exploration. The UI is available at `http://your_droplet_public_ipv4:8428/vmui`. It lets users explore query results via graphs and tables.

To check it, open the following in your browser `http://your_droplet_public_ipv4:8428/vmui` and then enter `vm_app_uptime_seconds` to the Query Field to Execute the Query.

Run the following command to query and retrieve a result from VictoriaMetrics Single with `curl`:

```
curl -sg http://your_droplet_public_ipv4:8428/api/v1/query_range?query=vm_app_uptime_seconds | jq
```

### Accessing

Once the Droplet is created, you can use DigitalOcean’s web console to start a session or SSH directly to the server as root:

```
ssh root@your_droplet_public_ipv4
```

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-single/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-single/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-single/#creating-an-app-using-the-api)
- [Getting Started After Deploying VictoriaMetrics Single](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-single/#getting-started-after-deploying-victoriametrics-single)
  - [Config](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-single/#config)
  - [Scraping metrics](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-single/#scraping-metrics)
  - [Sending metrics](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-single/#sending-metrics)
  - [UI](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-single/#ui)
  - [Accessing](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-single/#accessing)

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