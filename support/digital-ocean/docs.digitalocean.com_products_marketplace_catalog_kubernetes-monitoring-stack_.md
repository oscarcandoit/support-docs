---
url: "https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-monitoring-stack/"
title: "Kubernetes Monitoring Stack | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-monitoring-stack/)
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

- Kubernetes Monitoring Stack

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Kubernetes Monitoring Stack

Generated on 8 Jul 2025
from [the Kubernetes Monitoring Stack catalog page](https://marketplace.digitalocean.com/apps/kubernetes-monitoring-stack)

[Prometheus](https://prometheus.io/) is a very popular and comprehensive systems monitoring solution. It is a standalone open source project and maintained independently of any company. A big plus is the capability to monitor `Kubernetes` clusters as well, which tend to be pretty complex in nature. Prometheus eases the operational tasks that are required in setting up a monitoring stack.

The [kube-prometheus-stack](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack/) is meant for `cluster monitoring`, so it is `pre-configured` to collect metrics from all `Kubernetes components`. In addition to that it delivers a default set of `dashboards` and `alerting` rules. Many of the useful dashboards and alerts come from the [kubernetes-mixin](https://github.com/kubernetes-monitoring/kubernetes-mixin/) project.

The `kube-prometheus-stack` consists of three main components:

- `Prometheus Operator`, for spinning up and managing `Prometheus` instances in your `DOKS` cluster.
- `Grafana`, for visualizing metrics and plot data using stunning dashboards.
- `Alertmanager`, for configuring various notifications (e.g. `PagerDuty`, `Slack`, `email`, etc) based on various alerts received from the Prometheus main server.

Prometheus follows a `pull` model when it comes to metrics gathering, meaning that it expects a `/metrics` endpoint to be exposed by the service in question for scraping. For every metric that is being fetched by Prometheus, a time series database is used to store the data points.

`Grafana` helps you gather data points from the Prometheus time series database, and plot everything using beautiful graphs grouped into dashboards. You can also perform queries using the `PromQL` language. To persist all the data (metrics and various settings), you need to allocate block storage for both Prometheus and Grafana instances via `Persistent Volumes` (or PVs).

The [Alertmanager](https://github.com/prometheus/alertmanager/) component handles alerts sent by client applications such as the Prometheus server. It takes care of `deduplicating`, `grouping`, and `routing` them to the correct `receiver` integration such as `email`, `PagerDuty`, or `Slack`. It also takes care of `silencing` and `inhibition` of alerts.

Please make sure to visit the official documentation page for each of the components to learn more:

- [Prometheus](https://prometheus.io/docs/), to learn more about all the available features, as well as various configuration options.
- [Prometheus Operator](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/user-guides/getting-started.md), which provides useful information on how to use the operator.
- [Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/), to learn more about Alertmanager and integrations with various notification platforms.

**Notes:**

- DigitalOcean is using `Helm v3` to deploy `Prometheus` to your `DOKS` cluster.
- This chart was formerly named `prometheus-operator` chart, now renamed to more clearly reflect that it installs the `kube-prometheus` project stack, within which `Prometheus Operator` is only one component.
- The Prometheus stack 1-Click App also includes a $1/month block storage for both Grafana and Prometheus time series database (two `PVs` of `5GB` each, to start with).

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [kube-prometheus-stack](https://artifacthub.io/packages/helm/prometheus-community/kube-prometheus-stack) | [75.9.0](https://artifacthub.io/packages/helm/prometheus-community/kube-prometheus-stack/55.7.0) | [Apache 2.0](https://artifacthub.io/packages/helm/prometheus-community/kube-prometheus-stack) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=monitoring&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating Kubernetes Monitoring Stack using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks monitoring
```

## Getting Started After Deploying Kubernetes Monitoring Stack

### How to Connect to Your Cluster

Follow these [instructions](https://www.digitalocean.com/docs/kubernetes/how-to/connect-to-cluster/) to connect to your cluster with `kubectl` and `doctl`. Additional instructions for connecting to your cluster are included in the [DigitalOcean Control Panel](https://cloud.digitalocean.com/kubernetes/clusters/).

### How to confirm that Prometheus monitoring stack is running

First, check if the Helm installation was successful, by running below command:

```
helm ls -n kube-prometheus-stack
```

The output looks similar to (the `STATUS` column value should be `deployed`):

```
NAME                    NAMESPACE               REVISION  UPDATED               STATUS    CHART                         APP VERSION
kube-prometheus-stack   kube-prometheus-stack   1         2022-02-16 16:02:48   deployed  kube-prometheus-stack-55.7.0  0.70.0
```

Next, verify if the Prometheus stack Pods are up and running:

```
kubectl get pods -n kube-prometheus-stack
```

The output looks similar to (all Pods should be in a `READY` state, and `STATUS` should be `Running`):

```
NAME                                                        READY   STATUS    RESTARTS   AGE
alertmanager-kube-prometheus-stack-alertmanager-0           2/2     Running   0          8m24s
kube-prometheus-stack-grafana-6f6fbc5cd9-7zbnl              3/3     Running   0          8m30s
kube-prometheus-stack-kube-state-metrics-596b9c6b55-zxpmn   1/1     Running   0          8m30s
kube-prometheus-stack-operator-7bb8679c95-mpdms             1/1     Running   0          8m30s
kube-prometheus-stack-prometheus-node-exporter-vzb5m        1/1     Running   0          8m30s
kube-prometheus-stack-prometheus-node-exporter-xz44k        1/1     Running   0          8m30s
prometheus-kube-prometheus-stack-prometheus-0               2/2     Running   0          8m24s
```

### Accessing Prometheus Web Panel

You can access Prometheus web console by port forwarding the `kube-prometheus-stack-prometheus` service:

```
kubectl port-forward svc/kube-prometheus-stack-prometheus 9090:9090 -n kube-prometheus-stack
```

Next, launch a web browser of your choice, and enter the following URL: http://localhost:9090. To see what targets were discovered by Prometheus, please navigate to http://localhost:9090/targets.

### Accessing Grafana Web Panel

You can connect to Grafana (default credentials: `admin/prom-operator`), by port forwarding the `kube-prometheus-stack-grafana` service:

```
kubectl port-forward svc/kube-prometheus-stack-grafana 3000:80 -n kube-prometheus-stack
```

Next, launch a web browser of your choice, and enter the following URL: http://localhost:3000. You can take a look around, and see what dashboards are available for you to use from the [kubernetes-mixin](https://github.com/kubernetes-monitoring/kubernetes-mixin) project as an example, by navigating to the following URL: http://localhost:3000/dashboards?tag=kubernetes-mixin.

### Tweaking Helm Chart Values

The `kube-prometheus-stack` provides some custom values to start with. Please have a look at the [values](https://raw.githubusercontent.com/digitalocean/marketplace-kubernetes/master/stacks/kube-prometheus-stack/values.yml) file from the main GitHub repository (explanations are provided inside, where necessary).

You can always inspect all the available options, as well as the default values for the `kube-prometheus-stack` Helm chart by running below command:

```
helm show values prometheus-community/kube-prometheus-stack --version 55.7.0
```

After tweaking the Helm values file (`values.yml`) according to your needs, you can always apply the changes via `helm upgrade` command, as shown below:

```
helm upgrade kube-prometheus-stack prometheus-community/kube-prometheus-stack --version 55.7.0 \
  --namespace kube-prometheus-stack \
  --values values.yml
```

### Configuring Service Monitors for Prometheus

To monitor applications in your cluster, you usually define a so called `ServiceMonitor` CRD. This is a custom resource definition provided by the `Prometheus Operator`, which helps you in the process of adding new services that need to be monitored.

A typical `ServiceMonitor` configuration looks like below:

```
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: example-app
  labels:
    team: frontend
spec:
  selector:
    matchLabels:
      app: example-app
  endpoints:
  - port: web
```

Explanations for the above configuration:

- `spec.selector.matchLabels.app`: Tells `ServiceMonitor` what application to monitor, based on a label.
- `spec.endpoints.port`: A reference to the port label used by the application that needs monitoring.

The [kube-prometheus-stack](https://raw.githubusercontent.com/digitalocean/marketplace-kubernetes/master/stacks/kube-prometheus-stack/values.yml) Helm values file provided in the GitHub marketplace repository, contains a dedicated section (named `additionalServiceMonitors`) where you can define a list of additional services to monitor. Below snippet is setting up Nginx Ingress Controller monitoring as an example:

```
additionalServiceMonitors:
  - name: "ingress-nginx-monitor"
    selector:
      matchLabels:
        app.kubernetes.io/name: ingress-nginx
    namespaceSelector:
      matchNames:
        - ingress-nginx
    endpoints:
      - port: "metrics"
```

After adding required services to monitor, you need to upgrade the stack via the `helm upgrade` command, in order to apply the changes:

```
helm upgrade kube-prometheus-stack prometheus-community/kube-prometheus-stack \
  --version 55.7.0 \
  --namespace kube-prometheus-stack \
  --values values.yml
```

You can also check the full list of available [CRDs](https://github.com/prometheus-operator/prometheus-operator#customresourcedefinitions) which you can use to control the Prometheus Operator, by visiting the official GitHub documentation page.

### Upgrading Kubernetes Prometheus Stack

You can check what versions are available to upgrade, by navigating to the [kube-prometheus-stack](https://github.com/prometheus-community/helm-charts/releases) official releases page from GitHub. Alternatively, you can also use [ArtifactHUB](https://artifacthub.io/packages/helm/prometheus-community/kube-prometheus-stack), which provides a more rich and user friendly interface.

Then, to upgrade the stack to a newer version, please run the following command (make sure to replace the `&amp;amp;amp;amp;amp;amp;amp;amp;lt;&amp;amp;amp;amp;amp;amp;amp;amp;gt;` placeholders first):

```
helm upgrade kube-prometheus-stack prometheus-community/kube-prometheus-stack \
  --version <KUBE_PROMETHEUS_STACK_NEW_VERSION> \
  --namespace kube-prometheus-stack \
  --values <YOUR_HELM_VALUES_FILE>
```

See [helm upgrade](https://helm.sh/docs/helm/helm_upgrade/) for command documentation.

Also, please make sure to check the official recommendations for various [upgrade paths](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack#upgrading-chart), from an existing release to a new major version of the Prometheus stack.

### Uninstalling Kubernetes Prometheus Stack

To delete your installation of `kube-prometheus-stack`, please run the following `Helm` command:

```
helm uninstall kube-prometheus-stack -n kube-prometheus-stack
```

**Note:**

Above command will delete all the associated `Kubernetes` resources installed by the `kube-prometheus-stack` Helm chart, except the namespace itself. To delete the `kube-prometheus-stack namespace` as well, please run below command:

```
kubectl delete ns kube-prometheus-stack
```

### Additional Resources

You can visit the [Starter Kit](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/) set of guides provided by DigitalOcean for further study. Specifically for [Prometheus](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/tree/main/04-setup-prometheus-stack), you can access the following content:

- [Configuring Prometheus and Grafana](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/tree/main/04-setup-prometheus-stack#step-2---configure-prometheus-and-grafana).
- [Getting to know PromQL](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/tree/main/04-setup-prometheus-stack#step-3---promql-prometheus-query-language).
- [Visualizing Metrics using Grafana](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/tree/main/04-setup-prometheus-stack#step-4---visualizing-metrics-using-grafana).
- [Best practices for Prometheus PV sizing](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/tree/main/04-setup-prometheus-stack#best-practices-for-pv-sizing).

To further enrich your experience, you can also visit the [media](https://prometheus.io/docs/introduction/media/) links from the official Prometheus documentation site.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-monitoring-stack/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-monitoring-stack/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-monitoring-stack/#creating-an-app-using-the-api)
- [Getting Started After Deploying Kubernetes Monitoring Stack](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-monitoring-stack/#getting-started-after-deploying-kubernetes-monitoring-stack)
  - [How to Connect to Your Cluster](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-monitoring-stack/#how-to-connect-to-your-cluster)
  - [How to confirm that Prometheus monitoring stack is running](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-monitoring-stack/#how-to-confirm-that-prometheus-monitoring-stack-is-running)
  - [Accessing Prometheus Web Panel](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-monitoring-stack/#accessing-prometheus-web-panel)
  - [Accessing Grafana Web Panel](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-monitoring-stack/#accessing-grafana-web-panel)
  - [Tweaking Helm Chart Values](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-monitoring-stack/#tweaking-helm-chart-values)
  - [Configuring Service Monitors for Prometheus](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-monitoring-stack/#configuring-service-monitors-for-prometheus)
  - [Upgrading Kubernetes Prometheus Stack](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-monitoring-stack/#upgrading-kubernetes-prometheus-stack)
  - [Uninstalling Kubernetes Prometheus Stack](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-monitoring-stack/#uninstalling-kubernetes-prometheus-stack)
  - [Additional Resources](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-monitoring-stack/#additional-resources)

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