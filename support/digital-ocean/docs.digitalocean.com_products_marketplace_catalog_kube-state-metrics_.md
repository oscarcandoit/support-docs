---
url: "https://docs.digitalocean.com/products/marketplace/catalog/kube-state-metrics/"
title: "kube-state-metrics | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/kube-state-metrics/)
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

- kube-state-metrics

[Give Feedback](https://ideas.digitalocean.com/documentation)

# kube-state-metrics

Generated on 9 Jan 2024
from [the kube-state-metrics catalog page](https://marketplace.digitalocean.com/apps/kube-state-metrics)

[kube-state-metrics](https://github.com/kubernetes/kube-state-metrics) is a simple service that listens to the Kubernetes API server and generates metrics about the state of the objects.

kube-state-metrics exposes raw data unmodified from the Kubernetes API, this way users have all the data they require and perform heuristics as they see fit. The metrics are exported on the HTTP endpoint /metrics on the listening port (default 80). They are served as plaintext. They are designed to be consumed either by Prometheus itself or by a scraper that is compatible with scraping a Prometheus client endpoint.

Thank you to all the contributors whose hard work makes kube-state-metrics valuable for users.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| kube-state-metrics | [3.8.6](https://github.com/kubernetes/kube-state-metrics/releases) | [Apache 2.0](https://github.com/kubernetes/kube-state-metrics/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=kube-state-metrics&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating kube-state-metrics using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks kube-state-metrics
```

## Getting Started After Deploying kube-state-metrics

After you’ve successfully installed kube-state-metrics onto your cluster, you’ll be able to confirm that its running by running the following command:

```
kubectl get deployment kube-state-metrics -n kube-state-metrics
```

The output looks similar to the following:

```
NAME                 READY   UP-TO-DATE   AVAILABLE   AGE
kube-state-metrics   1/1     1            1           6m5s
```

If you have Helm 3 installed, you can confirm that your deployment is healthy by running:

```
helm ls -n kube-state-metrics
```

The output looks similar to the following:

```
NAME                    NAMESPACE       REVISION        UPDATED                                 STATUS          CHART                           APP VERSION
kube-state-metrics      kube-state-metrics     1               2022-08-26 10:52:44.26049 +0300 EEST    deployed        kube-state-metrics-3.8.6        2.3.0
```

## Using kube-state-metrics

### DigitalOcean Advanced Metrics

With kube-state-metrics now running on your cluster, you can view DigitalOcean Kubernetes Advanced Metrics within the DigitalOcean Kubernetes dashboard.

1. Go to [https://cloud.digitalocean.com/kubernetes/clusters/](https://cloud.digitalocean.com/kubernetes/clusters/)
2. Select the cluster you installed kube-state-metrics onto.
3. Navigate to the `Insights` tab.

### Kubectl Proxy

Set `kubectl` to act as a [reverse proxy](https://kubernetes.io/docs/tasks/administer-cluster/access-cluster-api/#using-kubectl-proxy). This mode handles locating the API server and authenticating.

```
kubectl proxy --port=8080
```

With the proxy running you can now curl the endpoint in another terminal window:

```
curl http://localhost:8080/metrics
```

### Updating

To update your installation of kube-state-metrics:

```
helm repo add bitnami https://charts.bitnami.com/bitnami && helm repo update
```

```
helm upgrade kube-state-metrics bitnami/kube-state-metrics --namespace kube-state
```

### Deleting

To delete your installation of kube-state-metrics:

```
helm uninstall kube-state-metrics --namespace kube-state-metrics
```

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/kube-state-metrics/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/kube-state-metrics/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/kube-state-metrics/#creating-an-app-using-the-api)
- [Getting Started After Deploying kube-state-metrics](https://docs.digitalocean.com/products/marketplace/catalog/kube-state-metrics/#getting-started-after-deploying-kube-state-metrics)
- [Using kube-state-metrics](https://docs.digitalocean.com/products/marketplace/catalog/kube-state-metrics/#using-kube-state-metrics)
  - [DigitalOcean Advanced Metrics](https://docs.digitalocean.com/products/marketplace/catalog/kube-state-metrics/#digitalocean-advanced-metrics)
  - [Kubectl Proxy](https://docs.digitalocean.com/products/marketplace/catalog/kube-state-metrics/#kubectl-proxy)
  - [Updating](https://docs.digitalocean.com/products/marketplace/catalog/kube-state-metrics/#updating)
  - [Deleting](https://docs.digitalocean.com/products/marketplace/catalog/kube-state-metrics/#deleting)

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