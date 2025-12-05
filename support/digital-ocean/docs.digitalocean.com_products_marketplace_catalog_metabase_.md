---
url: "https://docs.digitalocean.com/products/marketplace/catalog/metabase/"
title: "Metabase | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/metabase/)
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

- Metabase

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Metabase

Generated on 26 Jan 2022
from [the Metabase catalog page](https://marketplace.digitalocean.com/apps/metabase)

Metabase is the easy, open source way for everyone in your company to ask questions and learn from data. This is a pre-configured installation with openJDK and the open source version of Metabase. All dependencies are solved for you to just go and start using Metabase from your browser in moments.

### Explore on your own

Easily filter and group your data to find just what you’re looking for, all without ever writing a line of sql or having to wait on a co-worker.

### See connections

It just takes a click to see individual records and explore connections between your data, so you can move from who, to what effortlessly.

### Visualize results

Move from your data to beautiful graphs and charts with just a few clicks.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Metabase | [0.41.6](https://github.com/metabase/metabase/releases/tag/v0.41.6) | [AGPL 3](https://www.metabase.com/license/) |
| openJDK | [11.0.13](https://www.oracle.com/technetwork/java/javase/11-relnote-issues-5012449.html) | [GPL 2](https://openjdk.java.net/legal/gplv2+ce.html) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=metabase-18-04)

## Creating an App using the API

In addition to creating a Droplet from the Metabase 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Metabase Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"metabase-18-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Metabase

**Creating a system administrator account**

It is highly recommended that you create an administrator account separate from root.

With your just created droplet, open a terminal on your local and login as root:

```
ssh root@server_ip_address
```

Let’s create the user paul:

```
adduser paul
usermod -aG sudo paul
```

For the full reference please check this [DigitalOcean tutorial](https://www.digitalocean.com/community/tutorials/how-to-create-a-sudo-user-on-ubuntu-quickstart).

**Using Metabase**

Allow 2 to 5 minutes so that Metabase starts all required services. With less powerful droplets this can be slower, faster droplets will run Metabase almost immediately. This delay only happens when the droplet is created and not afterwards.

From any modern browser such as Firefox, type `server_ip_address:3000` (see your droplet IP at DigitalOcean control panel) on the address bar and then enter with any of the users you created before.

Another option is to access by using an ssh tunnel, with nice benefit of being encrypted. Run this command from the terminal:

```
ssh -f root@134.209.125.2 -L 3000:134.209.125.2:3000 -N
```

And then, from the browser go to `localhost:3000`. The first step with Metabase is to create an administrator for the application, complete the information and add a password that can be the same as the password for system administrator `paul` or a different password.

After this step you’ll be ready to connect to databases, invite users and all the possibilities described in [Metabase documentation](https://www.metabase.com/docs/latest/setting-up-metabase.html).

**Optional: custom domain and enabled https**

You can run `./https.sh` from the root directory and follow the guided setup in order to link a domain and provide an HTTPS certificate.

In this article...

- [Explore on your own](https://docs.digitalocean.com/products/marketplace/catalog/metabase/#explore-on-your-own)
- [See connections](https://docs.digitalocean.com/products/marketplace/catalog/metabase/#see-connections)
- [Visualize results](https://docs.digitalocean.com/products/marketplace/catalog/metabase/#visualize-results)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/metabase/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/metabase/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/metabase/#creating-an-app-using-the-api)
- [Getting Started After Deploying Metabase](https://docs.digitalocean.com/products/marketplace/catalog/metabase/#getting-started-after-deploying-metabase)

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