---
url: "https://docs.digitalocean.com/products/marketplace/catalog/easyhaproxy-ingress-controller/"
title: "EasyHAProxy Ingress Controller | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/easyhaproxy-ingress-controller/)
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

- EasyHAProxy Ingress Controller

[Give Feedback](https://ideas.digitalocean.com/documentation)

# EasyHAProxy Ingress Controller

Generated on 30 Jun 2025
from [the EasyHAProxy Ingress Controller catalog page](https://marketplace.digitalocean.com/apps/easyhaproxy-ingress-controller)

[EasyHAProxy](https://easyhaproxy.com/) is an Ingress and Auto Discover service based on HAProxy.

HAProxy is an open-source, high-performance load balancer and reverse proxy designed for TCP and HTTP-based applications. Renowned for its stability, reliability, and performance, it is widely adopted in production environments.

EasyHAProxy combines HAProxy’s robustness with seamless service discovery and exposure within Kubernetes clusters. It offers a straightforward method to configure Ingress rules for services.

Key Features

- Handles and routes HTTP, HTTPS, and TCP traffic (e.g., MySQL server).
- Supports custom error messages.
- Integrates Let’s Encrypt SSL certificate functionality.
- Automatically discovers services within the Kubernetes cluster.
- Facilitates the configuration of Ingress rules for services.
- Provides load balancing capabilities.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| haproxy | 2.6.15 | GPL2 |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=easyhaproxy&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating EasyHAProxy Ingress Controller using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks easyhaproxy
```

## Getting Started After Deploying EasyHAProxy Ingress Controller

After enabling EasyHAProxy you need to **MANUALLY** create a load balancing pointing to your Kubernetes Cluster. EasyHAProxy doesn’t create it manually. [Here](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/) are the instructions.

### How to set up your application for EasyHAProxy

You need to add to your application ingress annotations to expose your service to the EasyHaProxy service.

```
kind: Ingress
metadata:
  annotations:
    kubernetes.io/ingress.class: easyhaproxy-ingress
  .
  .
  .
```

### Troubleshooting

### Check if the EasyHAProxy is running properly

You can install the “Static Http Server” and define the domain you want to validate as the example below:

```
helm repo add byjg https://opensource.byjg.com/helm
helm repo update
helm upgrade --install mysite byjg/static-httpserver \
    --namespace default \
    --set "ingress.hosts={www.example.org,example.org}" \
    --set parameters.title=Welcome
```

### EasyHAProxy Container not Starting

Due to limitations in the HAProxy community edition, EasyHAProxy functions solely as a standalone service, regardless of the number of nodes present.

If the node hosting EasyHAProxy experiences downtime, the service will remain unavailable until the node is operational again.

To restore connectivity, you have the option to deploy or upgrade the EasyHAProxy service.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/easyhaproxy-ingress-controller/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/easyhaproxy-ingress-controller/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/easyhaproxy-ingress-controller/#creating-an-app-using-the-api)
- [Getting Started After Deploying EasyHAProxy Ingress Controller](https://docs.digitalocean.com/products/marketplace/catalog/easyhaproxy-ingress-controller/#getting-started-after-deploying-easyhaproxy-ingress-controller)
  - [How to set up your application for EasyHAProxy](https://docs.digitalocean.com/products/marketplace/catalog/easyhaproxy-ingress-controller/#how-to-set-up-your-application-for-easyhaproxy)
  - [Troubleshooting](https://docs.digitalocean.com/products/marketplace/catalog/easyhaproxy-ingress-controller/#troubleshooting)
  - [Check if the EasyHAProxy is running properly](https://docs.digitalocean.com/products/marketplace/catalog/easyhaproxy-ingress-controller/#check-if-the-easyhaproxy-is-running-properly)
  - [EasyHAProxy Container not Starting](https://docs.digitalocean.com/products/marketplace/catalog/easyhaproxy-ingress-controller/#easyhaproxy-container-not-starting)

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