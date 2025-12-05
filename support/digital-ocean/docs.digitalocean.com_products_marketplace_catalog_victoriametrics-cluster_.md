---
url: "https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-cluster/"
title: "VictoriaMetrics Cluster | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-cluster/)
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

- VictoriaMetrics Cluster

[Give Feedback](https://ideas.digitalocean.com/documentation)

# VictoriaMetrics Cluster

Generated on 12 Oct 2024
from [the VictoriaMetrics Cluster catalog page](https://marketplace.digitalocean.com/apps/victoriametrics-cluster)

**VictoriaMetrics Cluster** is a free, [open source](https://en.wikipedia.org/wiki/Open-source_software) [time series database](https://en.wikipedia.org/wiki/Time_series_database) (TSDB) and monitoring solution, designed to collect, store and process real-time metrics.

It supports the [Prometheus](https://en.wikipedia.org/wiki/Prometheus_(software)) pull model and various push protocols ( [Graphite](https://en.wikipedia.org/wiki/Graphite_(software)), [InfluxDB](https://en.wikipedia.org/wiki/InfluxDB), OpenTSDB) for data ingestion. It is optimized for storage with high-latency IO, low IOPS and time series with [high churn rate](https://docs.victoriametrics.com/FAQ.html#what-is-high-churn-rate).

For reading the data and evaluating alerting rules, [VictoriaMetrics](https://victoriametrics.com/) supports the PromQL, [MetricsQL](https://docs.victoriametrics.com/MetricsQL.html) and Graphite query languages. VictoriaMetrics Cluster is fully autonomous and can be used as a long-term storage for time series. It supports all features of VictoriaMetrics Single; capacity scales horizontally, multiple independent namespaces for time series data (aka multi-tenancy) and replication.

This stack deploys the VictoriaMetrics Kubernetes operator and manages VictoriaMetrics Cluster using native Kubernetes Custom Resources. This removes the complexity of operating VictoriaMetrics Cluster and simplifies working with it.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [VictoriaMetrics Cluster](https://docs.victoriametrics.com/cluster-victoriametrics/) | [1.103.0](https://docs.victoriametrics.com/changelog/#v11030) | [Apache License 2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE) |
| [vmgent](https://docs.victoriametrics.com/vmagent.html) | [1.103.0](https://docs.victoriametrics.com/vmagent/) | [Apache License 2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE) |
| [vmoperator](https://github.com/VictoriaMetrics/operator) | [v0.48.3](https://docs.victoriametrics.com/operator/changelog/#v0483---29-sep-2024) | [Apache License 2.0](https://github.com/VictoriaMetrics/operator/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=victoria-metrics-cluster&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating VictoriaMetrics Cluster using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks victoria-metrics-cluster
```

## Getting Started After Deploying VictoriaMetrics Cluster

The **VictoriaMetrics Cluster** database requires at least two replicas to function effectively. The operator will make it’s best effort to spread all components across nodes to ensure availability.

[VictoriaMetrics Cluster](https://docs.victoriametrics.com/Cluster-VictoriaMetrics.html) = Highly available horizontally scalable monitoring solution optimized for high performance. Supports multiple independent namespaces (aka multi-tenancy) and replication. Cluster version is preferable for large or rapidly growing environments.

[vmgent](https://docs.victoriametrics.com/vmagent.html) = Lightweight agent that helps users collect metrics from various sources and store them in VictoriaMetrics or any other Prometheus-compatible storage systems.

[vmperator](https://github.com/VictoriaMetrics/operator) = Kubernetes operator for Victoria Metrics = is a tool that creates/configures/manages VictoriaMetrics Cluster’s atop Kubernetes.

### Getting started after deploying VictoriaMetrics Cluster

After you have downloaded your kube config file, and are able to successfully connect to your Kubernetes cluster (see [https://cloud.digitalocean.com/kubernetes/clusters](https://cloud.digitalocean.com/kubernetes/clusters) if you haven’t connected to your cluster) follow the instructions below to start using VictoriaMetrics Cluster.

Verify that VictoriaMetrics Cluster and vmagent pods are up and running by executing the following commands:

```
kubectl get vmclusters
```

```
kubectl get vmagents
```

To remove VictoriaMetrics Cluster and vmagent from your Kubernetes Cluster run the following commands:

```
kubectl delete vmclusters --all-namespaces --all
```

```
kubectl delete vmagents --all-namespaces --all
```

### Access the Database from outside the Kubernetes cluster

Run the following command to make `vmselect`’s port accessible from the local machine:

```
kubectl port-forward svc/vmselect-vmcluster 8481:8481
```

Run the following command to query and retrieve a result from `vmselect`:

```
curl -sg 'http://127.0.0.1:8481/select/0/prometheus/api/v1/query_range?query=vm_app_uptime_seconds' | jq
```

VictoriaMetrics provides a [User Interface (UI)](https://docs.victoriametrics.com/Single-server-VictoriaMetrics.html#vmui) for query troubleshooting and exploration. The UI is available at `http://vmselect:8481/select/0/vmui/`. The UI lets users explore query results via graphs and tables.To check it, run the following command to make `vmselect`’s port accessible from the local machine:

```
kubectl port-forward svc/vmselect-vmcluster 8481:8481
```

Then open in browser `http://127.0.0.1:8481/select/0/vmui/` , enter `vm_app_uptime_seconds` to the Query Field and Execute Query.

### For further documentation visit:

- [https://docs.victoriametrics.com/Cluster-VictoriaMetrics.html#cluster-setup](https://docs.victoriametrics.com/Cluster-VictoriaMetrics.html#cluster-setup)
- [https://docs.victoriametrics.com/guides](https://docs.victoriametrics.com/guides)
- [https://github.com/VictoriaMetrics/helm-charts](https://github.com/VictoriaMetrics/helm-charts)
- [https://docs.victoriametrics.com/Articles.html](https://docs.victoriametrics.com/Articles.html)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-cluster/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-cluster/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-cluster/#creating-an-app-using-the-api)
- [Getting Started After Deploying VictoriaMetrics Cluster](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-cluster/#getting-started-after-deploying-victoriametrics-cluster)
  - [Getting started after deploying VictoriaMetrics Cluster](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-cluster/#getting-started-after-deploying-victoriametrics-cluster-1)
  - [Access the Database from outside the Kubernetes cluster](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-cluster/#access-the-database-from-outside-the-kubernetes-cluster)
  - [For further documentation visit:](https://docs.digitalocean.com/products/marketplace/catalog/victoriametrics-cluster/#for-further-documentation-visit)

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