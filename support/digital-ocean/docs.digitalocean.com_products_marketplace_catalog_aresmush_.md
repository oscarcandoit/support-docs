---
url: "https://docs.digitalocean.com/products/marketplace/catalog/aresmush/"
title: "AresMUSH | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/aresmush/)
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

- AresMUSH

[Give Feedback](https://ideas.digitalocean.com/documentation)

# AresMUSH

Generated on 4 Sep 2024
from [the AresMUSH catalog page](https://marketplace.digitalocean.com/apps/aresmush)

Virtual reality and 3D games may be the next big thing, but for almost thirty years players have been creating their own online worlds using nothing but words and their imaginations on MUSHes. A MUSH is a text-based online multi-player game that blends creative writing, improv acting, and role-playing into a unique interactive storytelling experience.

AresMUSH is a next-gen server platform that brings modern features to MUSH games: a fully-featured web portal and wiki, automated scene logging, web-based character creation, and more. With AresMUSH, you can launch your own MUSH game with no coding experience.

For more information, visit the [AresMUSH website](http://www.aresmush.com/).

![AresMUSH Play Screen](https://aresmush.com/images/demo2.png)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [AresMUSH](https://aresmush.com/) | 1.5 | [Custom CC](https://aresmush.com/license.html) |
| [Redis DB Server](https://redis.io/) | 7.2 | BSD |
| [Nginx Web Server](https://nginx.org/) | 1.18.0 | [Custom](https://nginx.org/LICENSE) |
| [Ruby](https://www.ruby-lang.org/) | 3.1 | BSDL |
| [Git](https://git-scm.com/) | 2.34 | GPL |
| [NPM](https://www.npmjs.com/) | 10.7 | [Artistic](https://docs.npmjs.com/policies/terms) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=wordsmythcreatio-aresmush)

## Creating an App using the API

In addition to creating a Droplet from the AresMUSH 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB AresMUSH Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"wordsmythcreatio-aresmush"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying AresMUSH

The AresMUSH 1-click image comes with all the software you need to run your own [AresMUSH](https://aresmush.com/) server. There are just a few steps you must do to finalize the installation and configure your game.

**For a detailed walk-through of how to use this image, see the [AresMUSH OneClick Installation Instructions](https://aresmush.com/tutorials/install/oneclick.html).**

> Note: If using a custom domain for your game, make sure the DNS is set up **before** attempting to finalize the installation.

After creating your own droplet using the 1-click image:

1. Connect to your new droplet [using SSH](https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/) as **root**: `ssh root@your_droplet_public_ipv4`.
2. Run the following commands, and follow the prompts to enter your game information:

```
cd /etc/aresmush
./complete_setup.sh
```

> The setup script will create an **ares** user. Save this password in a safe place. You must use the ares user for all of your game administration tasks.

3. Once the installation has finished, it is strongly recommended that you secure your web portal by installing a security certificate. Log in to your droplet as the **ares** user and run the following commands to set up [Certbot](https://certbot.eff.org/):

```
cd aresmush
bin/certs
```

4. Reboot the server.

Your game will now be running at `https://yourcustomdomain.com` or `http://your_droplet_public_ipv4`. You can also connect through a MUSH client using the port you configured during setup. See [Next Steps](https://aresmush.com/tutorials/install/next-steps.html) for getting started with your game.

If you run into any trouble during the installation process, ask for help on the [AresMUSH Forum](https://forum.aresmush.com/).

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/aresmush/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/aresmush/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/aresmush/#creating-an-app-using-the-api)
- [Getting Started After Deploying AresMUSH](https://docs.digitalocean.com/products/marketplace/catalog/aresmush/#getting-started-after-deploying-aresmush)

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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

Cookie Preferences