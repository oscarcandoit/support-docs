---
url: "https://docs.digitalocean.com/products/marketplace/catalog/victorialogs-single/"
title: "VictoriaLogs Single | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/victorialogs-single/)
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

- VictoriaLogs Single

[Give Feedback](https://ideas.digitalocean.com/documentation)

# VictoriaLogs Single

Generated on 11 Sep 2025
from [the VictoriaLogs Single catalog page](https://marketplace.digitalocean.com/apps/victorialogs-single)

**VictoriaLogs** is open source user-friendly database for logs from [VictoriaMetrics](https://docs.victoriametrics.com/).

[VictoriaLogs](https://docs.victoriametrics.com/victorialogs/) can accept logs from popular [log collectors](https://docs.victoriametrics.com/victorialogs/data-ingestion/). It provides easy yet powerful query language with full-text search capabilities across all the [log fields](https://docs.victoriametrics.com/victorialogs/keyconcepts/#data-model) via [LogsQL query language](https://docs.victoriametrics.com/victorialogs/logsql/) and supports fast full-text search over high-cardinality [log fields](https://docs.victoriametrics.com/VictoriaLogs/keyConcepts.html#data-model) such as `trace_id`, `user_id` and `ip` as wel as out-of-order logs’ ingestion aka backfilling.

VictoriaLogs can be seamlessly combined with good old Unix tools for log analysis such as `grep`, `less`, `sort`, `jq`, etc. See [these docs](https://docs.victoriametrics.com/victorialogs/querying/#command-line) for details.

VictoriaLogs capacity and performance scales linearly with the available resources (CPU, RAM, disk IO, disk space)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [VictoriaLogs Single](https://docs.victoriametrics.com/victorialogs/) | [1.33.1](https://github.com/VictoriaMetrics/VictoriaLogs/releases/tag/v1.33.1) | [Apache 2](https://github.com/VictoriaMetrics/VictoriaLogs/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=victoriametrics-victorialogssing)

## Creating an App using the API

In addition to creating a Droplet from the VictoriaLogs Single 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB VictoriaLogs Single Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"victoriametrics-victorialogssing"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying VictoriaLogs Single

### Config

VictoriaLogs configuration is located at `/etc/victorialogs/single/victorialogs.conf` on the droplet.

This One Click app uses 9428 port to accept logs from popular [log collectors](https://docs.victoriametrics.com/victorialogs/data-ingestion/) like:

- [Filebeat](https://docs.victoriametrics.com/victorialogs/data-ingestion/filebeat/)
- [Fluentbit](https://docs.victoriametrics.com/victorialogs/data-ingestion/fluentbit/)
- [Fluentd](https://docs.victoriametrics.com/victorialogs/data-ingestion/fluentd/)
- [Logstash](https://docs.victoriametrics.com/victorialogs/data-ingestion/logstash/)
- [Vector](https://docs.victoriametrics.com/victorialogs/data-ingestion/vector/)
- [Promtail](https://docs.victoriametrics.com/victorialogs/data-ingestion/promtail/)
- [Telegraf](https://docs.victoriametrics.com/victorialogs/data-ingestion/telegraf/)
- [OpenTelemetry setup](https://docs.victoriametrics.com/victorialogs/data-ingestion/opentelemetry/)
- [Syslog](https://docs.victoriametrics.com/victorialogs/data-ingestion/syslog/)

See more details and examples in [official documentation](https://docs.victoriametrics.com/VictoriaLogs/).

### Web UI

VictoriaLogs provides a [User Interface (UI)](https://docs.victoriametrics.com/victorialogs/querying/#web-ui) for query troubleshooting and exploration. The UI is available at `http://your_droplet_public_ipv4:9428/select/vmui/`. It lets users explore query results via graphs and tables.

### Accessing

Run the following command to check that VictoriaLogs is healthy and ready to accept for data ingestion:

```
curl -sg http://your_droplet_public_ipv4:9428/health
```

Once the Droplet is created, you can use DigitalOcean’s web console to start a session or SSH directly to the server as root:

```
ssh root@your_droplet_public_ipv4
```

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/victorialogs-single/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/victorialogs-single/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/victorialogs-single/#creating-an-app-using-the-api)
- [Getting Started After Deploying VictoriaLogs Single](https://docs.digitalocean.com/products/marketplace/catalog/victorialogs-single/#getting-started-after-deploying-victorialogs-single)
  - [Config](https://docs.digitalocean.com/products/marketplace/catalog/victorialogs-single/#config)
  - [Web UI](https://docs.digitalocean.com/products/marketplace/catalog/victorialogs-single/#web-ui)
  - [Accessing](https://docs.digitalocean.com/products/marketplace/catalog/victorialogs-single/#accessing)

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