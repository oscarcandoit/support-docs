---
url: "https://docs.digitalocean.com/products/marketplace/catalog/stacks-blockchain/"
title: "Stacks Blockchain | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/stacks-blockchain/)
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

- Stacks Blockchain

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Stacks Blockchain

Generated on 24 Jan 2023
from [the Stacks Blockchain catalog page](https://marketplace.digitalocean.com/apps/stacks-blockchain)

Help strengthen the Stacks Blockchain while also making it easier/more efficient to access the data via [API endpoints](https://docs.hiro.so/api).

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [stacks-blockchain](https://github.com/stacks-network/stacks-blockchain) | [2.05.0.6.0](https://github.com/stacks-network/stacks-blockchain/releases/tag/2.05.0.2.0) | [GPLv3](https://github.com/stacks-network/stacks-blockchain/blob/master/LICENSE) |
| [stacks-blockchain-api](https://github.com/hirosystems/stacks-blockchain-api) | [6.2.3](https://github.com/hirosystems/stacks-blockchain-api/releases/tag/v3.0.3) | [GPLv3](https://github.com/hirosystems/stacks-blockchain-api/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=stacksfoundation-stacksblockchain)

## Creating an App using the API

In addition to creating a Droplet from the Stacks Blockchain 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Stacks Blockchain Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"stacksfoundation-stacksblockchain"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Stacks Blockchain

**Once droplet is launched, initial startup can take several minutes while BNS data is imported (this is a one time operation)**.

To keep track of the progress, you can `ssh root@your_droplet_public_ipv4` to the host and run: `/opt/stacks-blockchain-docker/manage.sh -n mainnet -a logs`.

Once the stacks blockchain starts to sync with peers, application ports will open and nginx port 80 will now start proxying requests.

Use http://your\_droplet\_public\_ipv4 to access the data directly, with output being similar to:

```
{
    "server_version": "stacks-blockchain-api v6.2.3 (master:77ab3ae2)",
    "status": "ready",
    "chain_tip": {
    "block_height": 16220,
        "block_hash": "0x3123fba9c0de6b569573494cf83c1d5d198a66bfd5f48ef97949b6bf11ba13be",
        "index_block_hash": "0xeec960fbbd6186b4ccac85ce12adba72be497d881f81e077305c90955b51a6ae"
    }
}
```

All services are managed by a [systemd unit file](https://github.com/stacksfoundation/stacks-machine-images/blob/master/files/etc/systemd/system/stacks.service) that is set to start on boot.

Manual control is also possible via the [manage.sh script](https://github.com/stacks-network/stacks-blockchain-docker/blob/master/manage.sh) at `/opt/stacks-blockchain-docker/manage.sh` on the host.

Full details on how to use the `manage.sh` script is [available here](https://github.com/stacks-network/stacks-blockchain-docker/blob/master/docs/usage.mdt).

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/stacks-blockchain/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/stacks-blockchain/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/stacks-blockchain/#creating-an-app-using-the-api)
- [Getting Started After Deploying Stacks Blockchain](https://docs.digitalocean.com/products/marketplace/catalog/stacks-blockchain/#getting-started-after-deploying-stacks-blockchain)

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