---
url: "https://docs.digitalocean.com/products/marketplace/catalog/multiversx-testnet-sovereign-chain/"
title: "MultiversX Testnet Sovereign Chain | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/multiversx-testnet-sovereign-chain/)
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

- MultiversX Testnet Sovereign Chain

[Give Feedback](https://ideas.digitalocean.com/documentation)

# MultiversX Testnet Sovereign Chain

Generated on 13 Jan 2025
from [the MultiversX Testnet Sovereign Chain catalog page](https://marketplace.digitalocean.com/apps/multiversx-testnet-sovereign-chain)

The sovereign chain is a completely independent chain with smart contract processing, ESDT transfers, delegation, staking, governance, guardians and all the features the MultiversX main chain has. It is configurable according to the developer, features can be turned on/off, new features can be added on protocol level.

It is a high performance network capable of processing tens of thousands of transactions per second, and allowing developers to configure features like staking setups, VM configurations, gas and transaction fees, native token and more. The network also has a builtin cross-chain mechanism that facilitates token transfers between the sovereign chain and MultiversX network without relayers. The process ensures seamless interoperability and security through validator verification and proof systems.

Sovereign Chains can choose to have Data Availability and/or Settlement on MultiversX or on other major chains as well.

All the documentation about sovereign chains can be found here: [https://docs.multiversx.com/sovereign/Overview](https://docs.multiversx.com/sovereign/Overview)

## Software Included

_This Marketplace listing does not include a detailed software list._

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=multiversx-multiversxtestne)

## Creating an App using the API

In addition to creating a Droplet from the MultiversX Testnet Sovereign Chain 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB MultiversX Testnet Sovereign Chain Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"multiversx-multiversxtestne"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying MultiversX Testnet Sovereign Chain

## Getting Started with MultiversX Testnet Sovereign Chain

## The MultiversX Testnet Sovereign Chain is a demo application designed for users and the community to deploy their own chain and start experimenting. It includes several services:

- Proxy Service
- Sovereign Nodes
- API Service
- Elasticsearch
- Explorer Frontend
- Wallet Frontend

## Deployment

All services are automatically deployed and started using systemd unit files. The services start sequentially, taking approximately 10 minutes to complete all build jobs.

## OliveTin User Interface

OliveTin is running on port 1337 - in experimental mode

you can login using the default credentials `mvx:mvx` by navigating to http://droplet\_ip:1337/login

the password can be changed after login, accepted charactets are a-Z, 0-9, and .\_-

From the OliveTin interface you can check the deployment status and perform a few changes and checks.

## Services and Ports

The services run on the following ports:

- **Explorer Frontend:** [0.0.0.0:80](http://0.0.0.0/)
- **Wallet Frontend:** [0.0.0.0:81](http://0.0.0.0:81/)
- **Proxy Service:** [0.0.0.0:7950](http://0.0.0.0:7950/)
- **API Service:** [0.0.0.0:3001](http://0.0.0.0:3001/)
- **Elasticsearch:** [0.0.0.0:9200](http://0.0.0.0:9200/)

The firewall (`ufw`) is configured with the following open ports:

- **SSH:** 22
- **Explorer Frontend:** 80
- **Wallet Frontend:** 81
- **API Service:** 3001
- **API Extras Lite:** 3000
- **API Websocket:** 3090
- **OliveTin UI:** 1337

## Interacting with the Sovereign Chain

To interact with the Sovereign Chain, please refer to the [official documentation](https://docs.multiversx.com/sovereign/Overview).

### Wallet and Initial Deposit

A helper wallet with an initial deposit of 1 xEGLD is available at `/root/wallet.pem`. This wallet is used at startup to deploy Smart Contracts on the Testnet.

### Utility Scripts

In `/opt/multiversx-tools`, you will find two scripts that can be used for the following purposes:

1. **Resetting the Sovereign Chain**
2. **Changing the Round Duration of the Sovereign Chain**

## Web Interfaces

You can interact with the Sovereign Block Explorer and Wallet using the following web UIs:

- **Sovereign Block Explorer:** [http://droplet\_ip:80](http://droplet_ip/)
- **Sovereign Wallet:** [http://droplet\_ip:81](http://droplet_ip:81/)

The websocket is using https and it is configured with a self signed certificate. Before opening the wallet on port 81, please allow insecure connection from [https://droplet\_ip:3090/socket.io/](https://droplet_ip:3090/socket.io/)

Replace `droplet_ip` with the actual IP address of your Digital Ocean droplet.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/multiversx-testnet-sovereign-chain/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/multiversx-testnet-sovereign-chain/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/multiversx-testnet-sovereign-chain/#creating-an-app-using-the-api)
- [Getting Started After Deploying MultiversX Testnet Sovereign Chain](https://docs.digitalocean.com/products/marketplace/catalog/multiversx-testnet-sovereign-chain/#getting-started-after-deploying-multiversx-testnet-sovereign-chain)
- [Getting Started with MultiversX Testnet Sovereign Chain](https://docs.digitalocean.com/products/marketplace/catalog/multiversx-testnet-sovereign-chain/#getting-started-with-multiversx-testnet-sovereign-chain)
- [The MultiversX Testnet Sovereign Chain is a demo application designed for users and the community to deploy their own chain and start experimenting. It includes several services:](https://docs.digitalocean.com/products/marketplace/catalog/multiversx-testnet-sovereign-chain/#the-multiversx-testnet-sovereign-chain-is-a-demo-application-designed-for-users-and-the-community-to-deploy-their-own-chain-and-start-experimenting-it-includes-several-services)
- [Deployment](https://docs.digitalocean.com/products/marketplace/catalog/multiversx-testnet-sovereign-chain/#deployment)
- [OliveTin User Interface](https://docs.digitalocean.com/products/marketplace/catalog/multiversx-testnet-sovereign-chain/#olivetin-user-interface)
- [Services and Ports](https://docs.digitalocean.com/products/marketplace/catalog/multiversx-testnet-sovereign-chain/#services-and-ports)
- [Interacting with the Sovereign Chain](https://docs.digitalocean.com/products/marketplace/catalog/multiversx-testnet-sovereign-chain/#interacting-with-the-sovereign-chain)
  - [Wallet and Initial Deposit](https://docs.digitalocean.com/products/marketplace/catalog/multiversx-testnet-sovereign-chain/#wallet-and-initial-deposit)
  - [Utility Scripts](https://docs.digitalocean.com/products/marketplace/catalog/multiversx-testnet-sovereign-chain/#utility-scripts)
- [Web Interfaces](https://docs.digitalocean.com/products/marketplace/catalog/multiversx-testnet-sovereign-chain/#web-interfaces)

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