---
url: "https://docs.digitalocean.com/products/marketplace/catalog/discourse/"
title: "Discourse | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/discourse/)
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

- Discourse

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Discourse

Generated on 13 Feb 2025
from [the Discourse catalog page](https://marketplace.digitalocean.com/apps/discourse)

Discourse is the 100% open-source discussion platform built for the next decade of the Internet. It allows for a high level of customizability via its plugin architecture and its theming system.

## Before you deploy your first Discourse Droplet

### Get a Domain name

Use this DNS quickstart guide to get your DNS setup on DigitalOcean. You’ll first need to purchase and register your domain through a third party, such as Name.com, GoDaddy, etc…

- **Why do you need a domain name?**

This is how others will access your server and how you and your users will be identified on the network.


### Set up SMTP

You’ll need to get SMTP credentials for sending emails. This can be from an email delivery service like SparkPost, Sendgrid, Mailgun, etc.

- **Why do you need SMTP?**

Discourse uses SMTP to send verification emails to users signing up on your server. Without enabling an SMTP provider, your users won’t be able to sign up on your server. SMTP is also used for password resets, email verifications and security events.


## Software Included

| Package | Version | License |
| --- | --- | --- |
| Discourse | [latest](https://meta.discourse.org/c/releases) | [GPL 2](https://github.com/discourse/discourse/blob/master/LICENSE.txt) |
| Docker CE | [19.03.12](https://docs.docker.com/release-notes/docker-ce/) | [Apache 2](https://github.com/docker/docker/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=discourse-20-04)

## Creating an App using the API

In addition to creating a Droplet from the Discourse 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Discourse Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"discourse-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Discourse

On your first [SSH login to the droplet](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) or launch of the Droplet console of your Discourse Droplet 1-Click, you will be greeted by the Discourse installation script.

After pressing Enter, the script will check if your system has enough RAM. If the droplet has less than 2 GB of RAM, Discourse will automatically setup swap space to improve performance:

![Discourse Swap Example](https://i.imgur.com/eSCcO47.png)

**Note: It is recommended to use at least 2GB RAM machine for your Discourse droplet.**

The script will soon prompt you to enter the domain name for your Discourse server:

![Discourse Domain Example](https://i.imgur.com/1CRDQr3.png)

The DNS Host may be the same company you registered the domain with or another entity you designate. To connect your DNS hosting to DigitalOcean, check out [this guide](https://docs.digitalocean.com/tutorials/dns-registrars/).

In the next step, the script will ask email address for the admin account and SMTP relay credentials:

![Discourse Credentials Example](https://i.imgur.com/8oRuLTD.png)

After this, you will enter your email address to receive LetsEncrypt security and renewal notices and the Maxmind license key if you have one. Leave the prompt empty if you don’t intend to use Maxmind:

![Discourse Optional Credentials Example](https://i.imgur.com/XMaesjs.png)

The script will take about ~10-15 minutes to download, install and configure Discourse and all dependencies.

![Discourse Installation Complete](https://i.imgur.com/w8ih2hF.png)

At this point, your Discourse Droplet is configured and ready to use, type your Discourse domain name in the browser to access it.

## Getting started with Discourse

After configuring the Discourse droplet and accessing its domain you will be greeted by a congratulations screen with a single button:

![Discourse Welcome Screen](https://i.imgur.com/ySQp7iq.png)

Pressing the Register button will bring you to the admin account registration page. The email for the admin account is fixed and corresponds to the email you entered during Discourse configuration previously:

![Discourse Admin Account Registration](https://i.imgur.com/JmOc0Lm.png)

After you finished registering the admin account and confirming it, your discourse is fully operational!

If it is your first time using Discourse, consider visiting the official [getting started tutorials](https://blog.discourse.org/tag/getting-started/)

In this article...

- [Before you deploy your first Discourse Droplet](https://docs.digitalocean.com/products/marketplace/catalog/discourse/#before-you-deploy-your-first-discourse-droplet)
  - [Get a Domain name](https://docs.digitalocean.com/products/marketplace/catalog/discourse/#get-a-domain-name)
  - [Set up SMTP](https://docs.digitalocean.com/products/marketplace/catalog/discourse/#set-up-smtp)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/discourse/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/discourse/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/discourse/#creating-an-app-using-the-api)
- [Getting Started After Deploying Discourse](https://docs.digitalocean.com/products/marketplace/catalog/discourse/#getting-started-after-deploying-discourse)
- [Getting started with Discourse](https://docs.digitalocean.com/products/marketplace/catalog/discourse/#getting-started-with-discourse)

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