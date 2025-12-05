---
url: "https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-metrics-server/"
title: "Kubernetes Metrics Server | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-metrics-server/)
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

- Kubernetes Metrics Server

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Kubernetes Metrics Server

Generated on 8 Jul 2025
from [the Kubernetes Metrics Server catalog page](https://marketplace.digitalocean.com/apps/kubernetes-metrics-server)

[Metrics server](https://github.com/kubernetes-sigs/metrics-server) is an open source metrics API implementation, created and maintained by the Kubernetes SIG. Main purpose of metrics-server is to help the Kubernetes [Horizontal Pod Autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale) to automatically scale up or down your application workloads based on external factors (such as heavy HTTP traffic). In a nutshell, metrics-server works by collecting resource metrics from Kubelets and exposing them via the Kubernetes API Server to be consumed by the Horizontal Pod Autoscaler (aka HPA). Metrics API can also be accessed by `kubectl top`, making it easier to debug autoscaling pipelines.

Although you can query metrics-server for resource utilization metrics such as CPU and memory, it’s not advised to do so. This is due to the fact that provided metrics data may not be very accurate. For better results you would want to use a dedicated monitoring solution like [Prometheus](https://prometheus.io/).

Please make sure to check metrics-server [official documentation](https://github.com/kubernetes-sigs/metrics-server/blob/master/README.md) for more details.

**Note:**

DigitalOcean is using Helm v3 to deploy metrics-server to your DOKS cluster.

## Metrics-Server and HPA Overview Diagram

Below diagram shows a high level overview of how HPA (Horizontal Pod Autoscaling) works in conjunction with metrics-server:

![Metrics-Server and HPA Overview](https://raw.githubusercontent.com/digitalocean/marketplace-kubernetes/master/stacks/metrics-server/assets/images/arch_hpa.png)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| metrics-server | [3.12.2](https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.6.4) | [Apache 2.0](https://github.com/kubernetes-sigs/metrics-server/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=metrics-server&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating Kubernetes Metrics Server using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks metrics-server
```

## Getting Started After Deploying Kubernetes Metrics Server

### Connecting to Your Cluster

You can connect to your DigitalOcean Kubernetes cluster by following our [how-to guide](https://www.digitalocean.com/docs/kubernetes/how-to/connect-to-cluster/).

For additional instructions on configuring a [DigitalOcean Kubernetes](https://cloud.digitalocean.com/kubernetes/clusters/) cluster, see the following guides:

- [How to Set Up a DigitalOcean Managed Kubernetes Cluster (DOKS)](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/tree/main/01-setup-DOKS#how-to-set-up-a-digitalocean-managed-kubernetes-cluster-doks)
- [How to Set up DigitalOcean Container Registry](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/tree/main/02-setup-DOCR#how-to-set-up-digitalocean-container-registry)

### Verifying that Metrics-Server is Running

First, verify that the metrics-server Helm installation was successful by running following command:

```
helm ls -n metrics-server
```

If the installation was successful, the `STATUS` column value in the output reads `deployed`:

```
NAME            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART                   APP VERSION
metrics-server  metrics-server  1               2022-03-16 15:10:59.586786 +0200 EET    deployed        metrics-server-3.11.0    0.6.4
```

Next, verify that the metrics-server pods are up and running with the following command:

```
kubectl get pods -n metrics-server
```

If they’re running, all pods listed in the output are in a `READY` state and the `STATUS` for each reads `Running`:

```
NAME                              READY   STATUS    RESTARTS   AGE
metrics-server-694d47d564-mzq2c   1/1     Running   0          75s
metrics-server-694d47d564-pl7v7   1/1     Running   0          75s
```

### Tweaking Helm Chart Values

The metrics-server has custom default Helm values. See the [values](https://github.com/digitalocean/marketplace-kubernetes/blob/master/stacks/metrics-server/values.yml) file from the main GitHub repository (explanations are provided inside, where necessary).

To inspect its current values, run the following command:

```
helm show values metrics-server/metrics-server --version 3.11.0
```

To change these values, open the Helm values file `values.yml`, change whatever values you want, save and exit the file, and apply the changes by running `helm upgrade` command:

```
helm upgrade metrics-server metrics-server/metrics-server --version 3.11.0 \
  --namespace metrics-server \
  --values values.yml
```

### Checking Available Metrics

The quickest way to test metrics data is via the `kubectl top` subcommand. You can check resource usage at cluster level (worker nodes), or at pods level.

To check resource usage at cluster level (worker nodes), run below command:

```
kubectl top nodes
```

The output looks similar to (notice the resource usage being displayed for both `CPU` and `memory` on each worker node):

```
NAME                   CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
basicnp-uidj6          50m          5%     1183Mi          75%
basicnp-uidjt          75m          8%     1180Mi          75%
pool-ocas657r9-u0h5m   1619m        85%    2358Mi          75%
pool-ocas657r9-u0h5q   147m         7%     2322Mi          74%
```

You can also check resource usage at Pod level for a specific namespace, like this:

```
kubectl top pods -n metrics-server
```

The output looks similar to (notice `CPU usage` expressed in `millicores`, as well as `memory usage` in `Mebibytes`):

```
NAME                              CPU(cores)   MEMORY(bytes)
metrics-server-694d47d564-mzq2c   4m           24Mi
metrics-server-694d47d564-pl7v7   4m           25Mi
```

### Upgrading Metrics-Server Stack

You can check what versions are available to upgrade by navigating to the [metrics-server](https://github.com/kubernetes-sigs/metrics-server/releases) official releases page from GitHub. Alternatively, you can use [ArtifactHUB](https://artifacthub.io/packages/helm/metrics-server/metrics-server).

To upgrade the stack to a newer version, run the following command, replacing the `&amp;amp;amp;amp;amp;amp;amp;lt; &amp;amp;amp;amp;amp;amp;amp;gt;` placeholders with their corresponding information:

```
helm upgrade metrics-server metrics-server/metrics-server \
  --version <METRICS_SERVER_NEW_VERSION> \
  --namespace metrics-server \
  --values <YOUR_HELM_VALUES_FILE>
```

See [helm upgrade](https://helm.sh/docs/helm/helm_upgrade/) for command documentation.

Also, make sure to check the [compatibility matrix](https://github.com/kubernetes-sigs/metrics-server#compatibility-matrix), which shows what metrics-server API version is supported by what Kubernetes version.

### Uninstalling Metrics-Server Stack

To delete your installation of metrics-server, run the following Helm command:

```
helm uninstall metrics-server -n metrics-server
```

**Note:**

The above command will delete all the associated Kubernetes resources installed by the metrics-server Helm chart, except the namespace itself. To delete the metrics-server namespace as well, run following command:

```
kubectl delete ns metrics-server
```

### Additional Resources

- [Kubernetes Horizontal Pod Autoscaling](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale)
- [Kubernetes Resource Metrics Pipeline](https://kubernetes.io/docs/tasks/debug-application-cluster/resource-metrics-pipeline)
- [HPA Walkthrough using Metrics Server](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough)

In this article...

- [Metrics-Server and HPA Overview Diagram](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-metrics-server/#metrics-server-and-hpa-overview-diagram)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-metrics-server/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-metrics-server/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-metrics-server/#creating-an-app-using-the-api)
- [Getting Started After Deploying Kubernetes Metrics Server](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-metrics-server/#getting-started-after-deploying-kubernetes-metrics-server)
  - [Connecting to Your Cluster](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-metrics-server/#connecting-to-your-cluster)
  - [Verifying that Metrics-Server is Running](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-metrics-server/#verifying-that-metrics-server-is-running)
  - [Tweaking Helm Chart Values](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-metrics-server/#tweaking-helm-chart-values)
  - [Checking Available Metrics](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-metrics-server/#checking-available-metrics)
  - [Upgrading Metrics-Server Stack](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-metrics-server/#upgrading-metrics-server-stack)
  - [Uninstalling Metrics-Server Stack](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-metrics-server/#uninstalling-metrics-server-stack)
  - [Additional Resources](https://docs.digitalocean.com/products/marketplace/catalog/kubernetes-metrics-server/#additional-resources)

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