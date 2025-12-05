---
url: "https://docs.digitalocean.com/products/marketplace/catalog/nkn-commercial/"
title: "NKN Commercial | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/nkn-commercial/)
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

- NKN Commercial

[Give Feedback](https://ideas.digitalocean.com/documentation)

# NKN Commercial

Generated on 6 Nov 2020
from [the NKN Commercial catalog page](https://marketplace.digitalocean.com/apps/nkn-commercial)

NKN is the new kind of P2P network connectivity protocol & ecosystem powered by a novel public blockchain. Our open source node software allows Internet users to share network connections and unused bandwidth for rewards. By running an NKN node, you become part of the NKN network community helping to build the decentralized Internet so everyone can enjoy secure, low cost, and universally accessible connectivity.

### More Information

- [One-Click to build a New Kind of Network Node on DigitalOcean](https://medium.com/nknetwork/one-click-to-build-a-new-kind-of-network-node-on-digital-ocean-e5d11319a892) – A step by step guide to running a NKN Commercial Node with One-Click on DigitalOcean
- [One-Click NKN Full Node Tutorial](https://youtu.be/uSOZ0NtI15w) – Video tutorial showing how to setup a NKN Full Node in minutes using DigitalOcean One-Click

## Software Included

| Package | Version | License |
| --- | --- | --- |
| nkn | [2.0](https://github.com/nknorg/nkn/releases) | [Apache 2](https://github.com/nknorg/nkn/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=nknfullnode-18-04)

## Creating an App using the API

In addition to creating a Droplet from the NKN Commercial 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB NKN Commercial Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"nknfullnode-18-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying NKN Commercial

### Quickstart

After you create a NKN Commercial One-Click Droplet, nknd (NKN daemon) will be launched automatically by nkn-commercial as user nkn, and your Droplet will be part of the NKN relay network without any configurations. There are a few ways you can check the status of your node:

- The easiest way is to use a cloud service (such as [nknX](https://nknx.org/)). You just need the public IP address of your Droplet in order to check its status.
- You can also use the command line tool nknc to interact with your node, including checking its status. You can [download the latest nknc release](https://github.com/nknorg/nkn/releases) or [build from source](https://github.com/nknorg/nkn). After that you can use `./nknc --ip <your Droplet public ip address> info -s` to view the status of your node. Note that the function of nknc is limited if you are not running it from the Droplet.
- If you want full control of your node, you need to ssh into your Droplet. The source code as well as configurations are located at `/home/nkn/nkn-commercial/services/nkn-node/`. When the NKN Full Node One-Click Droplet is started for the first time, a NKN wallet and its password will be generated automatically under `/home/nkn/nkn-commercial/services/nkn-node/` named `wallet.json` and `wallet.pswd` respectively. Please take care to protect (and back up if you don’t specify a beneficiary address) both of these files since they are the only things one needs to access and control your account. If your wallet is lost you will lose access to your account, and if your wallet is copied by a malicious 3rd party you may lose control of your wallet and its contents. Therefore, it is important that you keep these files safe.

### Next Steps

For more information on NKN Full Node, please see the [Github](https://github.com/nknorg/nkn). You can use the NKN network to transmit any data from peer to peer or transfer NKN tokens using [nkn-sdk-js](https://github.com/nknorg/nkn-sdk-js), [nkn-sdk-go](https://github.com/nknorg/nkn-sdk-go) or other nkn sdk implementations.

Please join [NKN Discord group](https://discord.gg/c7mTynX) for more technical support and discussions.

In this article...

- [More Information](https://docs.digitalocean.com/products/marketplace/catalog/nkn-commercial/#more-information)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/nkn-commercial/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/nkn-commercial/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/nkn-commercial/#creating-an-app-using-the-api)
- [Getting Started After Deploying NKN Commercial](https://docs.digitalocean.com/products/marketplace/catalog/nkn-commercial/#getting-started-after-deploying-nkn-commercial)
- [Quickstart](https://docs.digitalocean.com/products/marketplace/catalog/nkn-commercial/#quickstart)
- [Next Steps](https://docs.digitalocean.com/products/marketplace/catalog/nkn-commercial/#next-steps)

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