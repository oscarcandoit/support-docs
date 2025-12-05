---
url: "https://docs.digitalocean.com/products/marketplace/catalog/openlitespeed-rails/"
title: "OpenLiteSpeed Rails | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/openlitespeed-rails/)
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

- OpenLiteSpeed Rails

[Give Feedback](https://ideas.digitalocean.com/documentation)

# OpenLiteSpeed Rails

Generated on 9 Jul 2025
from [the OpenLiteSpeed Rails catalog page](https://marketplace.digitalocean.com/apps/openlitespeed-rails)

The Rails OpenLiteSpeed One-Click app automatically installs Linux, performance web server OpenLiteSpeed, Ruby, Rails, rbenv and CertBot. OpenLiteSpeed features HTTP/3 support, and easy setup for SSL and RewriteRules. It’s flexible enough to host multiple Rails apps, and supports many other apps including Python, NodeJS, and CMSs like WordPress.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Ruby | [3.4.4](https://www.ruby-lang.org/en/downloads/releases/) | [2-clause BSD License](https://www.ruby-lang.org/en/about/license.txt) |
| Rails | [8.0.2](https://rubygems.org/gems/rails/versions) | [MIT](http://37signals.com/rails/wiki/License.html) |
| OpenLiteSpeed | [1.8.3](https://openlitespeed.org/release-log/version-1-7-x/) | [GPLv3](https://www.litespeedtech.com/open-source/openlitespeed) |
| rbenv | [1.3.2](https://github.com/rbenv/rbenv/releases) | [MIT](https://github.com/rbenv/rbenv/blob/master/LICENSE) |
| Node.js | [22.17.0](https://nodejs.org/en/about/releases/) | [Custom](https://github.com/nodejs/node/blob/master/LICENSE) |
| NPM | [10.9.2](https://packages.ubuntu.com/focal/npm) | [Artistic License 2.0](https://www.npmjs.com/policies/npm-license) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=litespeedtechnol-openlitespeedrai-20-04)

## Creating an App using the API

In addition to creating a Droplet from the OpenLiteSpeed Rails 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB OpenLiteSpeed Rails Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"litespeedtechnol-openlitespeedrai-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying OpenLiteSpeed Rails

From a terminal on your local computer, connect to the Droplet as root. Make sure to substitute the Droplet’s IP address.

```
ssh root@use_your_droplet_ip
```

An interactive script that runs will first prompt you for your domain or subdomain.

You can press CTRL+C and continue to SSH. The prompt will open again the next time you log in, and will continue to do so until you finish the whole setup.

```
Please input a valid domain:
Please verify it is correct. [y/N]
```

You can also automatically apply Let’s Encrypt SSL if your domain is pointed to this server already. Enter `y` and your email address to finish the process.

```
Do you wish to issue a Let's encrypt certificate for this domain? [y/N]
Please enter your E-mail:
Please verify it is correct: [y/N]
```

Once finished, you should see Certificate has been successfully installed…

```
Do you wish to force HTTPS rewrite rule for this domain? [y/N]
```

Enter `y` to force HTTPS rules to be applied

```
Do you wish to update the system which include the web server? [Y/n]
```

This script will automatically go away after your domain has been added.

## For more support

Please visit our [Quick Start page](https://docs.litespeedtech.com/cloud/images/rails/#quick-start) for details on how to access your Rails One Click and complete your configuration.

Community Support: [![null](https://img.shields.io/badge/slack-LiteSpeed-blue.svg?logo=slack)](https://www.litespeedtech.com/slack)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/openlitespeed-rails/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/openlitespeed-rails/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/openlitespeed-rails/#creating-an-app-using-the-api)
- [Getting Started After Deploying OpenLiteSpeed Rails](https://docs.digitalocean.com/products/marketplace/catalog/openlitespeed-rails/#getting-started-after-deploying-openlitespeed-rails)
- [For more support](https://docs.digitalocean.com/products/marketplace/catalog/openlitespeed-rails/#for-more-support)

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