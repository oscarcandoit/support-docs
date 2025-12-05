---
url: "https://docs.digitalocean.com/products/marketplace/catalog/fathom-analytics/"
title: "Fathom Analytics | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/fathom-analytics/)
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

- Fathom Analytics

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Fathom Analytics

Generated on 18 Jun 2020
from [the Fathom Analytics catalog page](https://marketplace.digitalocean.com/apps/fathom-analytics)

Fathom Analytics provides simple and useful website stats that focus on user privacy. Fathom collects trends and insights, not personal details about specific website visitors. Fathom gives you top pages, top referrers, bounce rate and average time people spend on your site. That’s it! All on a single screen. Our software collects and stores _zero personal information about visitors_, making it compliant with all current laws.

![example fathom analytics dashboard](https://usefathom.com/fathom.jpg)

This 1-Click App allows you to quickly self-host Fathom Analytics open source, and if you would like us to manage analytics for your business, our Fathom PRO plans start at just $14 → [https://usefathom.com](https://usefathom.com/?utm_source=DigitalOcean&utm_campaign=Marketplace#opensource). With Fathom PRO your analytics are fully managed, your tracker snippet is served from our global CDN, and all data is quickly aggregated across our global cloud architecture. If you’d like to migrate from Fathom open source to Fathom PRO, we’ve helped many people do this so far and we’re happy to assist.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Fathom](https://usefathom.com/) | [1.21](https://github.com/usefathom/fathom/releases) | [MIT](https://github.com/usefathom/fathom/blob/master/LICENSE) |
| [Go](https://golang.org/) | [Latest](https://github.com/golang/go/releases) | \[BSD-style + patent grant\]( [https://github.com/golang/go/blob/master/LICENSE](https://github.com/golang/go/blob/master/LICENSE) & [https://github.com/golang/go/blob/master/PATENTS](https://github.com/golang/go/blob/master/PATENTS)) |
| [Preact](https://preactjs.com/) | [Latest](https://github.com/developit/preact/releases) | [MIT](https://github.com/developit/preact/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=fathom-18-04)

## Creating an App using the API

In addition to creating a Droplet from the Fathom Analytics 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Fathom Analytics Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"fathom-18-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Fathom Analytics

1. You’ll need to log into your new Fathom Droplet to finish the setup. You can log into to the Droplet via SSH in a terminal as root: `ssh root@use_your_droplet_ip`
2. Once logged in to the Droplet via SSH, simply follow the prompts. Once you input a few items, you’ll be able to connect to Fathom from your web browser.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/fathom-analytics/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/fathom-analytics/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/fathom-analytics/#creating-an-app-using-the-api)
- [Getting Started After Deploying Fathom Analytics](https://docs.digitalocean.com/products/marketplace/catalog/fathom-analytics/#getting-started-after-deploying-fathom-analytics)

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