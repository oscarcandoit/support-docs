---
url: "https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/"
title: "Atm0s Media Stack | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/)
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

- Atm0s Media Stack

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Atm0s Media Stack

Generated on 8 Apr 2025
from [the Atm0s Media Stack catalog page](https://marketplace.digitalocean.com/apps/atm0s-media-stack)

## Decentralized Ultra-Low Latency Streaming Server

A decentralized media server designed to handle media streaming on a global scale, making it suitable for large-scale applications but with minimal cost.

It is developed by 8xFF, a group of independent developers who are passionate about building a new generation of media server and network infrastructure with decentralization in mind. While we have received support from various companies and individuals, we are not affiliated with any specific company. 8xFF is a community-driven project, and we welcome anyone interested in contributing to join us.

For a deep dive into the technical aspects of network architecture, please refer to our [Smart-Routing](https://github.com/8xFF/atm0s-sdn/blob/master/docs/smart_routing.md)

[![null](https://img.youtube.com/vi/QF8ZJq9xuSU/hqdefault.jpg)](https://www.youtube.com/embed/QF8ZJq9xuSU)

(Above is a demo video of the version used by Bluesea Network)

## Project Status: Alpha

This project is currently in the alpha stage of development. It is actively being developed and may undergo significant changes, including changes to the API. The primary focus at this stage is to make the project stable and reliable.

Our goals for this project can be summarized as follows:

- **Goal 1**: Cluster: Create a global decentralized media server cluster with multiple zones, support both SDKs for flexible and mainstream protocols (RTMP, SIP, SRT) for compatibility.
- **Goal 2**: Market: Develop a sharing marketplace for the media server, enabling resource sharing and monetization. This will help scale the media server cluster during peak times and reduce costs during off-peak times. In the feature marketplace fees will be used to fund the development of the project.
- **Goal 3**: P2P Network: Establish a network between users, where servers only act as fallbacks. This approach aims to significantly reduce infrastructure costs and scale to infinity.

Our primary focus is currently on Goal 1. For details on the current phase plan, please refer to our [Roadmap](https://github.com/8xFF/atm0s-media-server/issues/69).

Goals 2 and 3 are in the research phase. For more information, you can visit this [Repository](https://github.com/giangndm/decentralized-p2p-streaming).

## Features

- 🚀 Powered by Rust with memory safety and performance.

- High availability by being fully decentralized, with no central controller.

- 🛰️ Multi-zone support, high scalability.

- Support encodings: H264, Vp8, Vp9, H265 (Coming soon), AV1 (Coming soon)

- Cross-platform: Linux, macOS, Windows.

- Decentralized WebRTC SFU (Selective Forwarding Unit)

- Modern, full-featured client SDKs
  - [JavaScript](https://github.com/8xFF/atm0s-media-sdk-js)
  - [React](https://github.com/8xFF/atm0s-media-sdk-react)
- Advanced features including:
  - Audio Mix-Minus
  - Simulcast/SVC
  - SFU
  - SFU Cascading (each stream is a global PubSub channel, similar to [Cloudflare interconnected network](https://blog.cloudflare.com/announcing-cloudflare-calls/))
  - RTMP
  - SIP (WIP)
  - WebRTC
  - Whip/Whep

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Atm0s Media Server | Latest | MIT |
| Nats | 2.10 | MIT |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=atm0s-media-stack&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating Atm0s Media Stack using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks atm0s-media-stack
```

## Getting Started After Deploying Atm0s Media Stack

Atm0s Media Stack installs the following

- Atm0s Media Service Pods:
  - Gateway: The internal cluster Gateway
  - Connector: Handles export logging of cluster’s metrics and stats to external services
  - Token Generator: An HTTP Server that handles JWT Token generation for authentication
  - WebRTC: A WebRTC Server
  - RTMP: A RTMP Server
- Nats pod: A Nats Server to deliver Connector logs to external services.


## Prerequisites

- **Kubernetes >= 1.23** (You must have a Kubernetes cluster installed and be able to access it with kubectl.)
- **Helm v3** ( [https://helm.sh/docs/intro/install/](https://helm.sh/docs/intro/install/))
- A Kubernetes LoadBalancer, you can use Nginx or anything you want.

You can connect to your DigitalOcean Kubernetes cluster by following DOs [how-to guide](https://docs.digitalocean.com/products/kubernetes/how-to/connect-to-cluster/).

For additional instructions on configuring a DigitalOcean Kubernetes cluster, see the following guides:

- [How to Add Load Balancers to Kubernetes Clusters](https://docs.digitalocean.com/products/kubernetes/how-to/add-load-balancers/)
- [Configure Digital Ocean Firewalls](https://docs.digitalocean.com/products/networking/firewalls/how-to/configure-rules/)

## Firewall

The containers will be using host’s network stacks, so in order for them to communicate properly with each others, you will need to config your host’s inbound firewall rules to allow both TCP and UDP in all ports.

## Securing the cluster

To communicate with the cluster or adding a new node, you will need to be authenticated with the right token. The token can be derive with the right secret. By default, in non-secure mode, the cluster is initialized with secret key: `insecure`. To use your own secret, enable `secure`

and update the secret to your own secret. This will setup a `token-generator` node.

### Generating JWT Session Token

To generate a token for streaming, you need to make a request to the token-generator node through `http(s)://your_host/auth/`.

You can check out available authentication endpoints for each feature using swagger in `https(s)://your-host/auth/ui/`.

Note that due to URL rewrite, these endpoints will need the be prefixed with `/auth` to be able to work properly.

## Installing SSL

By default, a self-singed certificate comes with the Atm0s Media Stack.

### Custom Certificate

you can replace it with your own certificate as below.

```
kubectl create -n atm0s-media secret tls ${CERT_NAME} --key ${KEY_FILE} --cert ${CERT_FILE}
```

## Uninstalling the Chart

```
helm delete atm0s-media-stack -n atm0s-media
```

## Example Usage

```
helm install atm0s-media-stack 8xff/atm0s-media-stack --set gateway.host=gateway.example.com --namespace atm0s-media --create-namespace
```

## Server Usage

The gateway can be connected under the `/gateway/`, so your server URL should be: `http://your_host/gateway` or `http://your_cluster_lb_ip/gateway` if you have not configured your host.

You can also connect directly to the gateway node using: `http://gateway_node_ip:3000/`

For more details: [https://github.com/8xFF/atm0s-media-server](https://github.com/8xFF/atm0s-media-server)

In this article...

- [Decentralized Ultra-Low Latency Streaming Server](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#decentralized-ultra-low-latency-streaming-server)
- [Project Status: Alpha](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#project-status-alpha)
- [Features](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#features)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#creating-an-app-using-the-api)
- [Getting Started After Deploying Atm0s Media Stack](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#getting-started-after-deploying-atm0s-media-stack)
- [Prerequisites](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#prerequisites)
- [Firewall](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#firewall)
- [Securing the cluster](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#securing-the-cluster)
  - [Generating JWT Session Token](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#generating-jwt-session-token)
- [Installing SSL](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#installing-ssl)
  - [Custom Certificate](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#custom-certificate)
- [Uninstalling the Chart](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#uninstalling-the-chart)
- [Example Usage](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#example-usage)
- [Server Usage](https://docs.digitalocean.com/products/marketplace/catalog/atm0s-media-stack/#server-usage)

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