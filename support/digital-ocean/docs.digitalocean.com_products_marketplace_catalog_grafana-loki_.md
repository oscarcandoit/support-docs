---
url: "https://docs.digitalocean.com/products/marketplace/catalog/grafana-loki/"
title: "Grafana Loki | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/grafana-loki/)
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

- Grafana Loki

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Grafana Loki

Generated on 20 Mar 2023
from [the Grafana Loki catalog page](https://marketplace.digitalocean.com/apps/grafana-loki)

[Loki](https://grafana.com/oss/loki/) is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by [Prometheus](https://prometheus.io/).

Compared to other log aggregation systems, Loki:

- Indexes a set of labels for each log stream, instead of indexing the context of logs.
- Indexes and groups log streams using the same labels as Prometheus.
- Automatically scrapes and indexes Kubernetes\]( [https://kubernetes.io/](https://kubernetes.io/)) metadata, such as pod logs.
- Has native support in Grafana v6.0.

A Loki-based logging stack consists of 3 components:

- Promtail is the agent, responsible for gathering logs and sending them to Loki.
- Loki is the main server, responsible for storing logs and processing queries.
- Grafana is platform, responsible for querying and displaying the logs.

**Notes:**

- This stack requires a minimum configuration of two nodes at the $10/month plan (2GB memory / 1 vCPU).
- The Loki stack 1-Click App also includes a $1/month block storage for Loki time series database (starting at PVs of 5GB).

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Loki | [2.1.0](https://github.com/grafana/loki/releases) | [Apache 2.0](https://github.com/grafana/loki/blob/master/LICENSE) |
| Promtail | 2.1.0 | [Apache 2.0](https://github.com/grafana/puppet-promtail/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=loki&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating Grafana Loki using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks loki
```

## Getting Started After Deploying Grafana Loki

### Getting Started with DigitalOcean Kubernetes

You can connect to your DigitalOcean Kubernetes cluster by following our [how-to guide](https://www.digitalocean.com/docs/kubernetes/how-to/connect-to-cluster/).

For additional instructions on configuring a [DigitalOcean Kubernetes](https://cloud.digitalocean.com/kubernetes/clusters/) cluster, see the following guides:

- [How to Set Up a DigitalOcean Managed Kubernetes Cluster (DOKS)](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/tree/main/01-setup-DOKS#how-to-set-up-a-digitalocean-managed-kubernetes-cluster-doks)
- [How to Set up DigitalOcean Container Registry](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/tree/main/02-setup-DOCR#how-to-set-up-digitalocean-container-registry)

### Confirming that Loki Stack is Running

First, verify that the Helm installation was successful by running following command:

```
helm ls -n loki-stack
```

If the installation was successful, the `STATUS` column value in the output reads `deployed`:

```
NAME NAMESPACE  REVISION UPDATED                              STATUS   CHART            APP VERSION
loki loki-stack 1        2022-02-16 14:47:29.497728 +0200 EET deployed loki-stack-2.5.1 v2.1.0
```

Next, verify that the Loki pods are up and running with the following command:

```
kubectl get pods -n loki-stack
```

If they’re running, all pods listed in the output are in a `READY` state and the `STATUS` for each reads `Running`:

```
NAME                           READY   STATUS    RESTARTS   AGE
loki-0                         1/1     Running   0          20h
loki-promtail-kvjxr            1/1     Running   0          20h
loki-promtail-nc7zg            1/1     Running   0          20h
loki-promtail-strvq            1/1     Running   0          20h
```

### Configuring Grafana with Loki

First, expose the Grafana web interface on your local machine:

**Note:**

`Grafana` isn’t installed by default when the `Loki Stack` 1-Click App is installed and needs to be installed. We recommend installing the [Kubernetes Monitoring Stack](https://marketplace.digitalocean.com/apps/kubernetes-monitoring-stack) 1-Click App, which includes `Grafana` and its monitoring components.

To access the Grafana Web Panel, run the following command using the default credentials `admin/prom-operator`:

```
kubectl port-forward svc/kube-prometheus-stack-grafana 3000:80 -n kube-prometheus-stack
```

Navigate to [http://localhost:80/](http://localhost/) and login with admin and the password (default credentials: admin/prom-operator). Then, follow the instructions for adding the Loki datasource, using the URL [http://loki.loki-stack:3100](http://loki.loki-stack:3100/).

For more details about deployment status and functionality, see the [Loki tutorial](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/05-setup-loki-stack/README.md).

### Tweaking Helm Values

The `loki-stack` has custom default Helm values. See the [values](https://docs.digitalocean.com/products/marketplace/catalog/grafana-loki/values.yml) file from the main GitHub repository.

To inspect the stack’s current values, run the following command:

```
helm show values grafana/loki-stack --version 2.5.1
```

To change these values, open the Helm values file `values.yml`, change whatever values you want, save and exit the file, and apply the changes by running `helm upgrade` command:

```
helm upgrade loki grafana/loki-stack --version 2.5.1 \
  --namespace loki-stack \
  --values values.yml
```

### Upgrading the Loki Stack Chart

YYou can check what versions are available to upgrade by navigating to the [loki-stack](https://github.com/grafana/loki/releases) official releases page from GitHub. Alternatively, you can use [ArtifactHUB](https://artifacthub.io/packages/helm/grafana/loki-stack).

To upgrade the stack to a newer version, run the following command, replacing the `&lt; &gt;` placeholders with their corresponding information:

```
helm upgrade loki grafana/loki-stack \
  --version <KUBE_Loki_STACK_NEW_VERSION> \
  --namespace loki-stack \
  --values <YOUR_HELM_VALUES_FILE>
```

See [helm upgrade](https://helm.sh/docs/helm/helm_upgrade/) for command documentation.

### Uninstalling

To uninstall Loki, you need to have Helm 3 installed. Once installed, run the following `uninstall` command:

```
helm uninstall loki -n loki-stack
```

And then the following `delete` command:

```
kubectl delete ns loki-stack
```

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/grafana-loki/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/grafana-loki/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/grafana-loki/#creating-an-app-using-the-api)
- [Getting Started After Deploying Grafana Loki](https://docs.digitalocean.com/products/marketplace/catalog/grafana-loki/#getting-started-after-deploying-grafana-loki)
  - [Getting Started with DigitalOcean Kubernetes](https://docs.digitalocean.com/products/marketplace/catalog/grafana-loki/#getting-started-with-digitalocean-kubernetes)
  - [Confirming that Loki Stack is Running](https://docs.digitalocean.com/products/marketplace/catalog/grafana-loki/#confirming-that-loki-stack-is-running)
  - [Configuring Grafana with Loki](https://docs.digitalocean.com/products/marketplace/catalog/grafana-loki/#configuring-grafana-with-loki)
  - [Tweaking Helm Values](https://docs.digitalocean.com/products/marketplace/catalog/grafana-loki/#tweaking-helm-values)
  - [Upgrading the Loki Stack Chart](https://docs.digitalocean.com/products/marketplace/catalog/grafana-loki/#upgrading-the-loki-stack-chart)
  - [Uninstalling](https://docs.digitalocean.com/products/marketplace/catalog/grafana-loki/#uninstalling)

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