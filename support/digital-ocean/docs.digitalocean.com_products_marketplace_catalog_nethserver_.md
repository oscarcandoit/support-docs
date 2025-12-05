---
url: "https://docs.digitalocean.com/products/marketplace/catalog/nethserver/"
title: "NethServer | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/nethserver/)
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

- NethServer

[Give Feedback](https://ideas.digitalocean.com/documentation)

# NethServer

Generated on 15 Dec 2020
from [the NethServer catalog page](https://marketplace.digitalocean.com/apps/nethserver)

The all-in-one solution to:

- setup your mail server with a complete groupware in minutes
- access your mail, contacts and calendar directly from the browser using [WebTop](http://www.sonicle.com/webtop-5/?lang=en) or [Roundcube](https://roundcube.net/)
- share your files using [Nextcloud](https://nextcloud.com/)
- chat with your teammates joining [Mattermost](https://mattermost.com/)
- host your site with a complete LAMP (Linux, Apache, MariaDB, PHP) stack

Not enough? Check our list of [community modules](https://wiki.nethserver.org/doku.php?id=modules)!

## Software Included

_This Marketplace listing does not include a detailed software list._

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=nethesis-nethserver-7)

## Creating an App using the API

In addition to creating a Droplet from the NethServer 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB NethServer Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"nethesis-nethserver-7"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying NethServer

During droplet creation please choose “Password” in “Authentication” section.

NethServer can be configured using the _Server Manager_ web interface.

You need a web browser like Mozilla Firefox or Google Chrome to access the web interface at port `9090` using the droplet IP address: `https://server_ip:9090`.

To access the _Server Manager_ use the `root` user with the password chosen during the droplet creation phase.

If you didn’t choose a root password during droplet creation, access the system using SSH on port `22`.

You can now set a password for the `root` user to access _Server Manager_. To set the `root` password, use the `passwd` command and follow the instructions on the screen.

Finally, access the _Server Manager_ and access using `root` user the chosen password.

Please note that created droplet does not have any SWAP configured. If you wish to add the SWAP see [How To Add Swap on CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-centos-7).

If you need help, join our great community at [https://community.nethserver.org](https://community.nethserver.org/).

Looking for professional support? Check out our subscription plans at [https://my.nethserver.com](https://my.nethserver.com/).

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/nethserver/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/nethserver/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/nethserver/#creating-an-app-using-the-api)
- [Getting Started After Deploying NethServer](https://docs.digitalocean.com/products/marketplace/catalog/nethserver/#getting-started-after-deploying-nethserver)

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