---
url: "https://docs.digitalocean.com/products/marketplace/catalog/kotal-pro/"
title: "Kotal Pro | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/kotal-pro/)
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

- Kotal Pro

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Kotal Pro

Generated on 3 May 2023
from [the Kotal Pro catalog page](https://marketplace.digitalocean.com/apps/kotal-pro)

Kotal Pro will transform your Kubernetes cluster into a Blockchain node as a service and API Gateway, so you can deploy nodes for Blockchain protocols, and create API endpoints for web3 developers to query your nodes.

Kotal Pro supports 10 Blockchain protocols: Aptos, Bitcoin, Chainlink, Ethereum, Filecoin, Graph, IPFS, NEAR, Polkadot, and Stacks. More protocols are planned in future releases.

### Features:

- **Deployments** deploy and manage Blockchain nodes for 10 Blockchain protocols.
- **Endpoints** Create TLS-secured API endpoints for your node deployments.
- **Workspaces** Organize your deployments, endpoints, secrets, and users into workspaces.
- **Secret Management** Store secrets like private keys in secure locations and re-use them in your deployments.
- **User Management** Invite users to your workspaces and assign them roles.

![](https://kotal.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeployments.441b3612.png&w=3840&q=75)

![](https://kotal.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fendpoint.8f0e677c.png&w=3840&q=75)

![](https://kotal.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworkspace.2d243259.png&w=3840&q=75)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [kotal-blockchain-operator](https://github.com/kotalco/kotal) | [v0.1.0](https://github.com/kotalco/kotal/tree/v0.1.0) | [Apache 2.0](https://github.com/kotalco/kotal/blob/master/LICENSE) |
| kotal-api | v0.1.0 |  |
| kotal-dashboard | v0.1.0 |  |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=kotal&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating Kotal Pro using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks kotal
```

## Getting Started After Deploying Kotal Pro

### Confirming Installation

After your Kubernetes cluster is up and running, make sure Kotal Pro is installed by getting all pods (Kotal Pro components) in the `kotal` namespace.

```
kubectl get pods -n kotal
```

Which will return output similar to the following

```
NAME                                 READY   STATUS    RESTARTS   AGE
kotal-controller-manager             2/2     Running   0          1h
kotal-api                            1/1     Running   0          1h
kotal-dashboard                      1/1     Running   0          1h
kotal-postgresql                     1/1     Running   0          1h
```

Make sure all pods’ status is running.

Alternatively, if you helm v3, you can confirm Kotal Pro has been installed successfully by

```
helm list -n kotal
```

Which will return output similar to the following

```
NAME     NAMESPACE   REVISION    STATUS      CHART       APP VERSION
kotal    kotal       5           deployed    kotal-1.0.0 0.1.0
```

Make sure the release status is deployed.

### Accessing Kotal Pro Dashboard

Kotal Dashboard is available at a public IP address that can be obtained by

```
kubectl get svc -n traefik -w
```

Visit the external IP from the output of the command above http://external-ip-address

In this article...

- [Features:](https://docs.digitalocean.com/products/marketplace/catalog/kotal-pro/#features)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/kotal-pro/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/kotal-pro/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/kotal-pro/#creating-an-app-using-the-api)
- [Getting Started After Deploying Kotal Pro](https://docs.digitalocean.com/products/marketplace/catalog/kotal-pro/#getting-started-after-deploying-kotal-pro)
- [Confirming Installation](https://docs.digitalocean.com/products/marketplace/catalog/kotal-pro/#confirming-installation)
- [Accessing Kotal Pro Dashboard](https://docs.digitalocean.com/products/marketplace/catalog/kotal-pro/#accessing-kotal-pro-dashboard)

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