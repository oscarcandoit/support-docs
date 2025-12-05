---
url: "https://docs.digitalocean.com/products/marketplace/catalog/pocketbase/"
title: "PocketBase | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/pocketbase/)
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

- PocketBase

[Give Feedback](https://ideas.digitalocean.com/documentation)

# PocketBase

Generated on 23 Nov 2025
from [the PocketBase catalog page](https://marketplace.digitalocean.com/apps/pocketbase)

PocketBase is an open-source Go backend, consisting of:

- embedded database (SQLite) with realtime subscriptions
- built-in files and users management
- convenient Admin dashboard UI
- and simple REST-ish API

For documentation and examples, please visit [https://pocketbase.io/docs](https://pocketbase.io/docs).

## Software Included

_This Marketplace listing does not include a detailed software list._

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=doteamaccount-pocketbase)

## Creating an App using the API

In addition to creating a Droplet from the PocketBase 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB PocketBase Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"doteamaccount-pocketbase"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying PocketBase

## Welcome to the PocketBase DigitalOcean 1-Click!

Please allow up to 3 minutes for all services to become available after installing this 1-click.

The one-click includes a fully installed and running PocketBase instance. The first time you access the system, you should use the following URL to set your admin password:

[http://your.ip.addr.ess/\_/](http://your.ip.addr.ess/_/)

This installation of PocketBase uses a reverse proxy from Caddy to PB,

and is managed with systemctl:

```
systemctl restart pocketbase  # Restart PocketBase
systemctl stop pocketbase     # Stop the PocketBase server
systemctl start pocketbase    # Start the PocketBase server
```

To add a custom domain, update the reverse proxy here:

`/etc/caddy/Caddyfile`

Getting Help:

Note- this one click is not maintained by the creator of PocketBase. To get help with using the software, use the PocketBase repo. For help with the one-click itself or to suggest improvements, use the link to the Packer build script.

PocketBase on GitHub: [https://github.com/pocketbase/pocketbase](https://github.com/pocketbase/pocketbase)

PocketBase Support: [https://github.com/pocketbase/pocketbase/discussions](https://github.com/pocketbase/pocketbase/discussions)

PocketBase Packer Script: [https://github.com/scott/pocketbase-do-packer](https://github.com/scott/pocketbase-do-packer)

### Enabling SSL

To enable SSL, you will need to configure Caddy to configure a domain that reverse proxies to the PocketBase service. For more information, check the Caddy Docs: [https://caddyserver.com/docs/quick-starts/https](https://caddyserver.com/docs/quick-starts/https)

You will find the Caddyfile here:

```
/etc/caddy/Caddyfile
```

.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/pocketbase/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/pocketbase/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/pocketbase/#creating-an-app-using-the-api)
- [Getting Started After Deploying PocketBase](https://docs.digitalocean.com/products/marketplace/catalog/pocketbase/#getting-started-after-deploying-pocketbase)
- [Welcome to the PocketBase DigitalOcean 1-Click!](https://docs.digitalocean.com/products/marketplace/catalog/pocketbase/#welcome-to-the-pocketbase-digitalocean-1-click)
  - [Enabling SSL](https://docs.digitalocean.com/products/marketplace/catalog/pocketbase/#enabling-ssl)

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