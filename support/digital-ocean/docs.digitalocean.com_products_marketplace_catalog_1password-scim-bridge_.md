---
url: "https://docs.digitalocean.com/products/marketplace/catalog/1password-scim-bridge/"
title: "1Password SCIM bridge | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/1password-scim-bridge/)
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

- 1Password SCIM bridge

[Give Feedback](https://ideas.digitalocean.com/documentation)

# 1Password SCIM bridge

Generated on 6 Oct 2025
from [the 1Password SCIM bridge catalog page](https://marketplace.digitalocean.com/apps/1password-scim-bridge)

With 1Password Business, you can automate many common administrative tasks using the 1Password SCIM bridge. It uses the System for Cross-domain Identity Management (SCIM) protocol to connect 1Password with your existing identity provider, like Azure Active Directory or Okta, so you can:

- create users and groups (including automated account confirmation),
- grant and revoke access to groups,
- and suspend deprovisioned users

With this 1-Click App, you’ll quickly set up and deploy the SCIM bridge on a cluster in your own environment, so the encryption keys for your account are only available to you and no one else. To set up and deploy the SCIM bridge, you’ll need:

- administrative access in 1Password Business
- this 1-Click App with publicly accessible static LoadBalancer IP address
- a DNS record to allow for encrypted (HTTPS) communication to the SCIM bridge

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [1Password SCIM bridge](https://support.1password.com/scim/) | [2.9.13](https://app-updates.agilebits.com/product_history/SCIM#v209131) | [Proprietary](https://support.1password.com/scim/) |
| [Redis](https://hub.docker.com/r/bitnamisecure/redis/tags) | [8.2.1](https://app-catalog.vmware.com/bitnami/releases/45c3e311-138d-4859-abf1-83c0bc53f9b5/overview) | [Redis Open Source](https://redis.io/legal/rsalv2-agreement/) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=op-scim-bridge&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating 1Password SCIM bridge using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks op-scim-bridge
```

## Getting Started After Deploying 1Password SCIM bridge

After deploying the 1Password SCIM bridge, navigate to the IP address of the load balancer created by Kubernetes using your web browser, and follow the on-screen instructions. For more details on how to deploy and utilize your 1Password SCIM bridge app, you can read more at [https://support.1password.com/scim-deploy-digitalocean/](https://support.1password.com/scim-deploy-digitalocean/).

Refer to [https://support.1password.com/scim](https://support.1password.com/scim) if you have any issues, and contact [support+business@1password.com](mailto:support+business@1password.com) if you have any questions.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/1password-scim-bridge/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/1password-scim-bridge/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/1password-scim-bridge/#creating-an-app-using-the-api)
- [Getting Started After Deploying 1Password SCIM bridge](https://docs.digitalocean.com/products/marketplace/catalog/1password-scim-bridge/#getting-started-after-deploying-1password-scim-bridge)

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