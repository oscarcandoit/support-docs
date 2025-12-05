---
url: "https://docs.digitalocean.com/products/marketplace/catalog/ghost/"
title: "Ghost | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/ghost/)
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

- Ghost

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Ghost

Generated on 31 Jul 2025
from [the Ghost catalog page](https://marketplace.digitalocean.com/apps/ghost)

Ghost is a fully open source, adaptable platform for building and running a modern blog or publication. The Ghost 1-Click App allows you to self-host your own Ghost instance up and running in two minutes.

If you would like Ghost to manage your blog for you instead, the Ghost Pro plans start at just $15 [https://ghost.org/pricing/](https://ghost.org/pricing/?utm_source=DigitalOcean&utm_campaign=Marketplace). Read more at [https://ghost.org](https://ghost.org/?utm_source=DigitalOcean&utm_campaign=Marketplace).

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Ghost | [latest](https://github.com/TryGhost/Ghost/releases/latest) | [MIT](https://github.com/TryGhost/Ghost/blob/master/LICENSE) |
| Nginx | [1.18.0](http://nginx.org/en/CHANGES-1.18) | [Custom](http://nginx.org/LICENSE) |
| MySQL server | [8.0.29](https://dev.mysql.com/doc/relnotes/mysql/8.0/en/news-8-0-23.html) | [GPL 2 with modifications](https://www.mysql.com/about/legal/licensing/oem/) |
| Node.js | [22.x](https://nodejs.org/en/download/) | [Custom](https://github.com/nodejs/node/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=ghost-20-04)

## Creating an App using the API

In addition to creating a Droplet from the Ghost 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Ghost Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"ghost-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Ghost

You’ll need a registered domain name to finish completing the Ghost setup. We recommend setting up an A record from the domain (e.g., `example.com`) to the server’s IP address.

After the Ghost One-Click Droplet is created and the domain and DNS records are set up, you’ll need to log into the Ghost Droplet to complete its setup. From a terminal on your local computer, connect to the Droplet as `root`. Make sure to substitute the IP address of the Droplet.

```
ssh root@use_your_droplet_ip
```

As soon as you log in, the Droplet will automatically make sure it’s running the most recent version of Ghost, and will prompt you to press `ENTER` to finalize the setup.

```
Ensuring Ghost-CLI is up-to-date…
…

Ghost will prompt you for two details:

Your domain
Add an A Record -> your_droplet_ip & ensure DNS has fully propagated
Or alternatively enter http://your_droplet_ip
Your email address (only used for SSL)
Press enter when you’re ready to get started!
```

Follow the installation prompts to configure Ghost.

As soon as you’re done, make sure to configure the admin user using the administrative interface at `http://use_your_droplet_ip/ghost` (making sure to substitute the Droplet’s IP address in the URL). Until you configure the admin user, anyone who discovers the site can configure the administrative user, take control of the Ghost site, and potentially take control of the Droplet.

Once the installation and setup is fully complete, you can access the new Ghost site by visiting the Droplet IP address in your browser.

To upgrade or maintain the Ghost install in future, you’ll always have to become the `ghost-mgr` user in order to have the correct permissions:

```
sudo -i -u ghost-mgr
```

After that, all tasks can be completed with the Ghost-CLI tool. Run `ghost help` for an overview of available commands, or [check out the Ghost-CLI docs](https://ghost.org/docs/ghost-cli) for full details.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/ghost/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/ghost/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/ghost/#creating-an-app-using-the-api)
- [Getting Started After Deploying Ghost](https://docs.digitalocean.com/products/marketplace/catalog/ghost/#getting-started-after-deploying-ghost)

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