---
url: "https://docs.digitalocean.com/products/marketplace/catalog/netmaker/"
title: "Netmaker | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/netmaker/)
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

- Netmaker

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Netmaker

Generated on 22 May 2023
from [the Netmaker catalog page](https://marketplace.digitalocean.com/apps/netmaker)

Follow this [8-minute video](https://www.youtube.com/watch?v=xysZRPjmXeM) for getting started with Netmaker to securely connect your droplets and DBs.

Connect your droplets and databases across regions with Netmaker, and securely connect to your cloud resources.

Netmaker provides secure network access across your globally distributed cloud infrastructure, with speeds up to 10x higher than traditional VPNs.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Netmaker](https://github.com/gravitl/netmaker) | v0.20.0 | SSPL |
| [Netclient](https://github.com/gravitl/netclient) | v0.20.0 | Apache -2.0 |
| [WireGuard](https://www.wireguard.com/) | 1.0.20200513-1~20.04.2 | Apache-2.0 |
| [Docker](https://www.docker.com/) | 1.5-2 | Apache-2.0 |
| [Caddy](https://caddyserver.com/) | v2.6.2 | Apache-2.0 |
| [Mosquitto](https://mosquitto.org/) | 2.0.11 | Eclipse Public License 2.0 |
| [Grafana](https://github.com/grafana/grafana) | 9.2 | [GNU](https://github.com/grafana/grafana/blob/main/LICENSE) |
| [Prometheus](https://github.com/prometheus/prometheus) | 2.39 | Apache-2.0 |
| [CoreDNS](https://github.com/coredns/coredns) | 1.8.6 | Apache-2.0 |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=gravitl-netmaker)

## Creating an App using the API

In addition to creating a Droplet from the Netmaker 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Netmaker Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"gravitl-netmaker"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Netmaker

![Netmaker Diagram](https://uploads-ssl.webflow.com/623390d5ead4650d9c03f969/63922121d1a3bcbc6e944232_netmaker_diagram.png)

Deploy the Netmaker server, and create high performance virtual overlay networks with the fully featured platform and dashboard.

![Nodes Graph](https://uploads-ssl.webflow.com/623390d5ead4650d9c03f969/639222eee83a395e9035948d_netmaker-graph-page.png)

![Nodes List](https://uploads-ssl.webflow.com/623390d5ead4650d9c03f969/639222f3f875dfb4d6e5763d_netmaker-nodes-page.png)

Netmaker saves organizations substantially on the cost of managing complex networks by eliminating the need for expensive networking equipment and clunky old-school VPNs. The platform is software-defined, and automates manual processes.

Netmaker accelerates modern digital business practices, from cloud native infrastructure to agile development and DevOps. Netmaker enables application connectivity, and helps your application to be deployed anywhere.

[_Learn more about how Netmaker can enable secure access across your Digital Ocean resources, without sacrificing on cost, security, or flexibility._](https://www.digitalocean.com/blog/secure-network-connectivity-distributed-clouds)

* * *

## Get Started

To Get Started, check out [this video](https://www.youtube.com/watch?v=xysZRPjmXeM), which will cover:

- Installation
- Connecting Droplets Across Regions
- Accessing Managed Databases Across Regions

**IMPORTANT: Notes on Installation**

- As of 0.18, three additional subdomains are required. In addition to those listed in the above video, please add DNS entries for **stun.domain**, **turn.domain**, and **turnapi.domain.**

**To learn more, follow the links to these DigitalOcean learning resources:**

- [Connect DigitalOcean Droplets Across Regions](https://docs.digitalocean.com/developer-center/connect-digitalocean-droplets-across-regions/)
- [Secure Remote Access to DigitalOcean with Netmaker](https://docs.digitalocean.com/developer-center/secure-remote-access-to-digitalocean-with-netmaker/)
- [Connect to DigitalOcean Managed Databases from Anywhere, Securely](https://docs.digitalocean.com/developer-center/connect-to-digitalocean-managed-databases-from-anywhere-securely/)
- [Setting up DOKS cross-cluster connectivity using Netmaker, Static Routes Operator & NodePorts](https://github.com/jkpedo/container-blueprints/tree/doks-vpn/DOKS-netmaker)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/netmaker/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/netmaker/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/netmaker/#creating-an-app-using-the-api)
- [Getting Started After Deploying Netmaker](https://docs.digitalocean.com/products/marketplace/catalog/netmaker/#getting-started-after-deploying-netmaker)
- [Get Started](https://docs.digitalocean.com/products/marketplace/catalog/netmaker/#get-started)

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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)