---
url: "https://docs.digitalocean.com/products/marketplace/catalog/linkerd/"
title: "Linkerd | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/linkerd/)
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

- Linkerd

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Linkerd

Generated on 6 Mar 2023
from [the Linkerd catalog page](https://marketplace.digitalocean.com/apps/linkerd-beta)

[Linkerd](https://linkerd.io/?utm_source=DigitalOcean&utm_campaign=Marketplace) is an ultralight service mesh for Kubernetes. It makes running services easier and safer by giving you runtime debugging, observability, metrics, reliability, and security without requiring any code changes. The Linkerd 1-Click app configures and performs a deployment of Linkerd2 onto a DigitalOcean Kubernetes cluster in the `linkerd` namespace. As a part of a recommended deployment, this app includes Grafana and Prometheus in the `linkerd` namespace.

This stack is open source and community supported, and can be found at [github.com/digitalocean/marketplace-kubernetes/tree/master/stacks/linkerd2](https://github.com/digitalocean/marketplace-kubernetes/tree/master/stacks/linkerd2). If you have large production needs, see the [Buoyant Enterprise Support](https://buoyant.io/commercial-support/?utm_source=DigitalOcean&utm_campaign=Marketplace).

**Notes:**

- The Linkerd2 CLI is recommended to interact with Linkerd2 and instructions are provided to add your specific service.
- This stack requires a minimum configuration of 2 nodes at the $10/month plan (2GB memory/1 vCPU).

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [linkerd2](https://github.com/linkerd/linkerd2) | [2.12.4](https://github.com/linkerd/linkerd2/releases/tag/stable-2.11.1) | [Apache 2.0](https://github.com/linkerd/linkerd2/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=linkerd2&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating Linkerd using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks linkerd2
```

## Getting Started After Deploying Linkerd

### How to Connect to Your Cluster

Follow these [instructions](https://www.digitalocean.com/docs/kubernetes/how-to/connect-to-cluster/) to connect to your cluster with `kubectl` and `doctl`.

### Confirming that Linkerd is Running

First, check if the Linkerd installation was successful by running the command below:

```
kubectl get deployment -n linkerd
```

The output looks similar to the following:

```
NAME                     READY   UP-TO-DATE   AVAILABLE   AGE
linkerd-destination      1/1     1            1           4m6s
linkerd-identity         1/1     1            1           4m11s
linkerd-proxy-injector   1/1     1            1           4m3s
```

All pods should be in a `READY` state.

Next, check if the Linkerd on-cluster metrics stack installation was successful by running the following command:

```
kubectl get deployment -n linkerd-viz
```

The output looks similar to the following:

```
NAME           READY   UP-TO-DATE   AVAILABLE   AGE
grafana        1/1     1            1           7m36s
metrics-api    1/1     1            1           7m40s
prometheus     1/1     1            1           7m33s
tap            1/1     1            1           7m31s
tap-injector   1/1     1            1           7m23s
web            1/1     1            1           7m11s
```

All pods should be in a `READY` state.

### Installing the Linkerd Command Line Interface

If this is your first time running Linkerd, you will need to download the command line interface (CLI) onto your local machine to interact with Linkerd.

For installation instructions, see the [release page](https://github.com/linkerd/linkerd2/releases/). For example, for MacOS and Linux, download and install the Linkerd client binary:

```
curl -sL https://run.linkerd.io/install | sh
```

Next, add Linkerd to your path:

```
export PATH=$PATH:$HOME/.linkerd2/bin
```

Verify that the CLI is installed by running:

```
linkerd version
```

You can now view the Linkerd dashboard by running:

```
linkerd viz dashboard
```

This will open your default browser with the Linkerd dashboard.

Linkerd also includes Grafana to visualize all the metrics collected by Prometheus. You can see the Grafana dashboard at [http://localhost:50750/grafana](http://localhost:50750/grafana).

### Adding Your Services to Linkerd

In order for your service to use Linkerd, it needs to have the proxy sidecar added to its resource definition. To do so, use the Linkerd CLI to update the definition and output YAML files and pass them to `kubectl`. By using Kubernetes rolling updates, the availability of your application will not be affected.

To add Linkerd to your service, run:

```
linkerd inject deployment.yml | kubectl apply -f -
```

For more details, see [the Linkerd documentation](https://linkerd.io/2.11/tasks/adding-your-service/#).

### Upgrading the Linkerd CLI

To upgrade your local CLI to the latest version, run the following command:

```
curl --proto '=https' --tlsv1.2 -sSfL https://run.linkerd.io/install | sh
```

Alternatively, you can download the CLI directly via the [Linkerd releases page](https://github.com/linkerd/linkerd2/releases/).

Verify the CLI is installed and running correctly by running the following command:

```
linkerd version --client
```

The output looks similar to the following:

```
Client version: stable-2.11.1
```

### Upgrading the Linkerd Control Plane

Use the `linkerd upgrade` command to upgrade the control plane. This command ensures that all of the control plane’s existing configuration and mTLS secrets are retained. Use the `--prune` flag to remove any Linkerd resources from the previous version which no longer exist in the new version.

```
linkerd upgrade | kubectl apply --prune -l linkerd.io/control-plane-ns=linkerd -f -
```

Next, run this command again by adding some `--prune-whitelist` flags. This makes sure that certain cluster-scoped resources are correctly pruned.

```
linkerd upgrade | kubectl apply --prune -l linkerd.io/control-plane-ns=linkerd \
  --prune-whitelist=rbac.authorization.k8s.io/v1/clusterrole \
  --prune-whitelist=rbac.authorization.k8s.io/v1/clusterrolebinding \
  --prune-whitelist=apiregistration.k8s.io/v1/apiservice -f -
```

**Note:**

For upgrading a multi-stage installation setup, follow the [upgrading a multi-stage install](https://linkerd.io/2.11/tasks/upgrade/#upgrading-a-multi-stage-install) instructions.

Finally, check that the control plane has been upgraded:

```
linkerd check
```

**Note:**

This will run through a set of checks against your control plane and make sure that it is operating correctly.

### Uninstalling Linkerd

To uninstall Linkerd from a Kubernetes cluster, you need to first remove any data plane proxies and extensions by running the following command:

```
linkerd viz uninstall | kubectl delete -f -
```

Next, remove the control plane by running the following command:

```
linkerd uninstall | kubectl delete -f -
```

**Note:** The `linkerd uninstall` command outputs the manifest for all of the Kubernetes resources necessary for the control plane, including namespaces, service accounts, CRDs, and more; `kubectl delete` then deletes those resources.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/linkerd/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/linkerd/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/linkerd/#creating-an-app-using-the-api)
- [Getting Started After Deploying Linkerd](https://docs.digitalocean.com/products/marketplace/catalog/linkerd/#getting-started-after-deploying-linkerd)
  - [How to Connect to Your Cluster](https://docs.digitalocean.com/products/marketplace/catalog/linkerd/#how-to-connect-to-your-cluster)
  - [Confirming that Linkerd is Running](https://docs.digitalocean.com/products/marketplace/catalog/linkerd/#confirming-that-linkerd-is-running)
  - [Installing the Linkerd Command Line Interface](https://docs.digitalocean.com/products/marketplace/catalog/linkerd/#installing-the-linkerd-command-line-interface)
  - [Adding Your Services to Linkerd](https://docs.digitalocean.com/products/marketplace/catalog/linkerd/#adding-your-services-to-linkerd)
  - [Upgrading the Linkerd CLI](https://docs.digitalocean.com/products/marketplace/catalog/linkerd/#upgrading-the-linkerd-cli)
  - [Upgrading the Linkerd Control Plane](https://docs.digitalocean.com/products/marketplace/catalog/linkerd/#upgrading-the-linkerd-control-plane)
  - [Uninstalling Linkerd](https://docs.digitalocean.com/products/marketplace/catalog/linkerd/#uninstalling-linkerd)

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