---
url: "https://docs.digitalocean.com/products/marketplace/catalog/botguard-gatekeeper/"
title: "BotGuard GateKeeper | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/botguard-gatekeeper/)
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

- BotGuard GateKeeper

[Give Feedback](https://ideas.digitalocean.com/documentation)

# BotGuard GateKeeper

Generated on 17 Oct 2025
from [the BotGuard GateKeeper catalog page](https://marketplace.digitalocean.com/apps/botguard-gatekeeper)

BotGuard GateKeeper protects your website from the full range of automated attacks, like DDoS or brute force, and eliminates bad bot-induced traffic from your business.

This solution is an advanced reverse proxy built around state of the art bot and hacker detection technology that hides your infrastructure and protects it from L7 DDoS attacks. It also offers a wide range of security and performance features such as WAF, HTTP/3 (QUIC), TLS 1.3, 0-RRT, automatic SSL certificate management, content caching and rate limiting.

You will also prevent server overload and diminish your web server’s network traffic to provide a more pleasant user experience with our straightforward and easy to install GateKeeper.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Nginx (OpenSSL 3.0 and BotGuard patches)](http://nginx.org/) | 1.27.5 | [BSD-2-clause license](http://nginx.org/LICENSE) |
| [Redis](https://redis.io/) | 7.0 | [BSD-3-clause license](https://redis.io/docs/about/license/) |
| [BotGuard GateKeeper](https://botguard.net/) | 1.5.3-4 | Proprietary |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=botguardo-botguardgatekeep)

## Creating an App using the API

In addition to creating a Droplet from the BotGuard GateKeeper 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB BotGuard GateKeeper Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"botguardo-botguardgatekeep"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying BotGuard GateKeeper

## Getting started

The configuration of BotGuard GateKeeper is simple, fast and straightforward. Everything is taken care of via browser.

As a prerequisite, you’ll need an **API key**, which can be found at [your BotGuard dashboard.](https://botguard.net/en/account/credentials)

Type the IP address of your droplet in browser address bar: http://your\_droplet\_public\_ipv4 and hit Enter. The web application will ask you to enter your BotGuard API key or register a new BotGuard account to get one. The API key would be used as a password for further GateKeeper management.

After entering a valid API key, the page will refresh and prompt you to enter the username and password. Please use **“botguard”** as the username and your **API key** as the password.

## Domain setup

1. Select **Domains** in the top menu
2. Click **Add domain** button
3. Enter your web application domain name and add the subdomains, if they exist
4. Define your application servers IP addresses in the **Upstreams** section. BotGuard GateKeeper will try to guess your upstream addresses based on the domain DNS records
5. Select SSL certificate provider or upload your own certificate
6. Select additional caching and security settings and save the changes. Don’t forget to enable BotGuard bot protection!
7. Point your domain A/AAAA records to the BotGuard GateKeeper instance IP address

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/botguard-gatekeeper/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/botguard-gatekeeper/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/botguard-gatekeeper/#creating-an-app-using-the-api)
- [Getting Started After Deploying BotGuard GateKeeper](https://docs.digitalocean.com/products/marketplace/catalog/botguard-gatekeeper/#getting-started-after-deploying-botguard-gatekeeper)
- [Getting started](https://docs.digitalocean.com/products/marketplace/catalog/botguard-gatekeeper/#getting-started)
- [Domain setup](https://docs.digitalocean.com/products/marketplace/catalog/botguard-gatekeeper/#domain-setup)

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