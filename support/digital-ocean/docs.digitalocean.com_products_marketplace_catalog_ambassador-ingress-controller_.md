---
url: "https://docs.digitalocean.com/products/marketplace/catalog/ambassador-ingress-controller/"
title: "Ambassador Ingress Controller | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/ambassador-ingress-controller/)
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

- Ambassador Ingress Controller

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Ambassador Ingress Controller

Generated on 9 Jan 2024
from [the Ambassador Ingress Controller catalog page](https://marketplace.digitalocean.com/apps/ambassador-ingress-controller)

## Description

[Ambassador Edge Stack](https://getambassador.io/) is an [Ingress Controller](https://www.getambassador.io/products/edge-stack/api-gateway/) and [API Gateway](https://www.getambassador.io/learn/kubernetes-glossary/api-gateway/) built on [Envoy Proxy](https://www.envoyproxy.io/). Envoy Proxy is designed for [cloud-native](https://www.getambassador.io/learn/kubernetes-glossary/cloud-native/) applications. Ambassador exposes Envoy’s functionality as [Custom Resource Definitions](https://www.getambassador.io/learn/kubernetes-glossary/custom-resource-definition/), with integrated rate limiting, authentication, load balancing, and observability.

**Note:**

**Ambassador Edge Stack 2.X introduces some changes that aren’t backwards-compatible with 1.X. If you already have an existing installation that uses 1.X and you want to upgrade to version 2.X, please use the following [guide for upgrade](https://www.getambassador.io/docs/edge-stack/latest/topics/install/upgrade/helm/edge-stack-1.14/edge-stack-2.1/#upgrade-productname-1142-to-productname-version-helm).**

As of version 3.8.0 (Helm chart v8.8.0) Edge Stack requires an Ambassador Labs license key or Cloud Connect token to operate. A license key is entered using licenseKey.value, and a Cloud Connect token is entered using emissary-ingress.agent.cloudConnectToken. Please see [instructions](https://www.getambassador.io/docs/edge-stack/latest/tutorials/getting-started).\\*\\* on how to obtain these if you do not have them.

The DigitalOcean 1-click application installs the [Helm 3](https://helm.sh/docs/intro/install/) version of Ambassador Edge Stack. This version includes the Authentication and Rate Limiting plugins, as well as the Dev Portal. It also includes the option of upgrading your installation to include Service Preview and MicroCD, two Edge Stack components that improve and streamline the developer self-service model. To explore the features of these components, see the following links.

**Edge Stack Components:**

- [Rate Limiting](https://www.getambassador.io/docs/edge-stack/2.2/topics/using/rate-limits/rate-limits/): Rate limit to ensure the reliability, security and scalability of your micro-services.
- [Authentication](https://www.getambassador.io/docs/edge-stack/2.2/topics/running/aes-extensions/authentication/): Built-in [OAuth2](https://www.getambassador.io/docs/edge-stack/2.2/topics/using/filters/oauth2/) and [JWT](https://www.getambassador.io/docs/edge-stack/2.2/topics/using/filters/jwt/) authentication with the ability to drop in custom AuthService plugins.

**Notes:**

- This stack requires a minimum configuration of 2 Nodes at the $10/month plan (2GB memory / 1 vCPU).
- The Ambassador 1-Click app also includes a $12/month DigitalOcean Load Balancer to ensure that ingress traffic is distributed across all of the nodes in your DOKS cluster.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Ambassador Edge Stack | [2.2.2](https://www.getambassador.io/docs/edge-stack/2.2/tutorials/getting-started/) | [Apache 2.0](https://github.com/datawire/ambassador/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=ambassador&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating Ambassador Ingress Controller using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks ambassador
```

## Getting Started After Deploying Ambassador Ingress Controller

### Connecting to Your Cluster

You can connect to your DigitalOcean Kubernetes cluster by following our [how-to guide](https://www.digitalocean.com/docs/kubernetes/how-to/connect-to-cluster/).

For additional instructions on configuring a [DigitalOcean Kubernetes](https://cloud.digitalocean.com/kubernetes/clusters/) cluster, see the following guides:

- [How to Set Up a DigitalOcean Managed Kubernetes Cluster (DOKS)](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/tree/main/01-setup-DOKS#how-to-set-up-a-digitalocean-managed-kubernetes-cluster-doks)
- [How to Set up DigitalOcean Container Registry](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/tree/main/02-setup-DOCR#how-to-set-up-digitalocean-container-registry)

### Confirming that Ambassador Ingress Controller is Running

First, verify that the Helm installation was successful by running following command:

```
helm ls -n ambassador
```

If the installation was successful, the `STATUS` column value in the output reads `deployed`:

```
NAME       NAMESPACE  REVISION UPDATED                              STATUS   CHART            APP VERSION
edge-stack ambassador 1        2022-02-14 18:02:21.554041 +0200 EET deployed edge-stack-8.7.2 3.7.2
```

Next, verify that the Ambassador Ingress pods are up and running with the following command:

```
kubectl get pods --all-namespaces -l app.kubernetes.io/name=edge-stack
```

If they’re running, all pods listed in the output are in a `READY` state and the `STATUS` for each reads `Running`:

```
NAMESPACE    NAME                          READY   STATUS    RESTARTS   AGE
ambassador   edge-stack-688f84d947-dv244   1/1     Running   0          5m39s
ambassador   edge-stack-688f84d947-r4qcs   1/1     Running   0          5m39s
ambassador   edge-stack-688f84d947-snzmh   1/1     Running   0          5m39s
```

Then, inspect the external IP address of your Ambassador Ingress Controller Load Balancer by running following command:

```
kubectl get svc -n ambassador
```

If installed correctly, the output has the `EXTERNAL-IP` column, containing a valid IP address:

```
NAME               TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)                      AGE
edge-stack         LoadBalancer   10.245.88.194   134.209.131.93   80:32617/TCP,443:31000/TCP   6m19s
edge-stack-admin   ClusterIP      10.245.66.159   <none>           8877/TCP,8005/TCP            6m19s
edge-stack-redis   ClusterIP      10.245.188.44   <none>           6379/TCP                     6m19s
```

Finally, Ambassador Edge Stack should now be successfully installed and running, but in order to get started deploying Services and test routing to them you need to configure a few more resources:

- The [Listener](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/ambassador.md#step-2---defining-the-listener-for-ambassador-edge-stack) Resource is required to configure which ports the Ambassador Edge Stack pods listen on so that they can begin responding to requests.
- The [Mapping](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/ambassador.md#step-6---configuring-the-ambassador-edge-stack-mappings-for-hosts) Resource is used to configure routing requests to services in your cluster.
- The [Host](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/ambassador.md#step-3---defining-the-hosts-for-ambassador-edge-stack) Resource configures TLS termination for enabling HTTPS communication.

For more details about checking Ingress Controller deployment status and functionality, lease refer to the [Ambassador](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/ambassador.md) Ingress Controller tutorial.

### Tweaking Helm Values

The Ambassador Ingress stack provides some custom values to start with. Please have a look at the [values](https://github.com/digitalocean/marketplace-kubernetes/blob/master/stacks/ambassador/values.yml) file from the main GitHub repository (explanations are provided inside, where necessary).

You can always inspect all the available options, as well as the default values for the Ambassador Ingress Helm chart by running below command:

```
helm show values datawire/edge-stack --version 8.7.2
```

After tweaking the Helm values file (`values.yml`) according to your needs, you can always apply the changes via `helm upgrade` command, as shown below:

```
helm upgrade edge-stack datawire/edge-stack --version 8.7.2 \
  --namespace ambassador \
  --values values.yml
```

### Upgrading the Ambassador Ingress Chart

You can check what versions are available to upgrade by navigating to the [emissary-ingress](https://github.com/emissary-ingress/emissary) official releases page from GitHub. Alternatively, you can use [ArtifactHUB](https://artifacthub.io/packages/helm/datawire/edge-stack).

To upgrade the stack to a newer version, run the following command, replacing the `&amp;amp;lt; &amp;amp;gt;` placeholders with their corresponding information:

```
helm upgrade edge-stack datawire/edge-stack \
  --version <INGRESS_AMBASSADOR_STACK_NEW_VERSION> \
  --namespace ambassador \
  --values <YOUR_HELM_VALUES_FILE>
```

See [helm upgrade](https://helm.sh/docs/helm/helm_upgrade/) for command documentation.

### Uninstalling

To uninstall Ambassador Ingress Controller, you need to have Helm 3 installed. Once installed, run the following `uninstall` command:

```
helm uninstall edge-stack -n ambassador
```

And then the following `delete` commands:

```
kubectl delete ns ambassador

kubectl delete -f https://app.getambassador.io/yaml/edge-stack/3.7.2/aes-crds.yaml
```

In this article...

- [Description](https://docs.digitalocean.com/products/marketplace/catalog/ambassador-ingress-controller/#description)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/ambassador-ingress-controller/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/ambassador-ingress-controller/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/ambassador-ingress-controller/#creating-an-app-using-the-api)
- [Getting Started After Deploying Ambassador Ingress Controller](https://docs.digitalocean.com/products/marketplace/catalog/ambassador-ingress-controller/#getting-started-after-deploying-ambassador-ingress-controller)
  - [Connecting to Your Cluster](https://docs.digitalocean.com/products/marketplace/catalog/ambassador-ingress-controller/#connecting-to-your-cluster)
  - [Confirming that Ambassador Ingress Controller is Running](https://docs.digitalocean.com/products/marketplace/catalog/ambassador-ingress-controller/#confirming-that-ambassador-ingress-controller-is-running)
  - [Tweaking Helm Values](https://docs.digitalocean.com/products/marketplace/catalog/ambassador-ingress-controller/#tweaking-helm-values)
  - [Upgrading the Ambassador Ingress Chart](https://docs.digitalocean.com/products/marketplace/catalog/ambassador-ingress-controller/#upgrading-the-ambassador-ingress-chart)
  - [Uninstalling](https://docs.digitalocean.com/products/marketplace/catalog/ambassador-ingress-controller/#uninstalling)

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