---
url: "https://docs.digitalocean.com/products/marketplace/catalog/bagisto/"
title: "Bagisto | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/bagisto/)
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

- Bagisto

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Bagisto

Generated on 17 Sep 2020
from [the Bagisto catalog page](https://marketplace.digitalocean.com/apps/bagisto)

This one-click setup helps you get setup with latest version of Bagisto. It is supported by Webkul Software Pvt Ltd, Bagisto’s parent company. For technical support, please open a support ticket.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Apache | [2.4.29](https://packages.ubuntu.com/bionic/apache2) | [Apache 2](https://www.apache.org/licenses/) |
| PHP | [7.2.24](https://packages.ubuntu.com/bionic/php) | [PHP v3.01](http://www.php.net/license/3_01.txt) |
| Mysql | [5.7.31](https://packages.ubuntu.com/bionic/mysql-server-5.7) | [Mysql 5.7 GPL](https://downloads.mysql.com/docs/licenses/mysqld-5.7-gpl-en.pdf) |
| Certbot | [0.31.0](https://packages.ubuntu.com/bionic/certbot) | [Apache](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |
| Nodejs | [10.22.0](https://packages.ubuntu.com/bionic/nodejs) | [MIT license](https://github.com/nodejs/node/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=bagisto-18-04)

## Creating an App using the API

In addition to creating a Droplet from the Bagisto 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Bagisto Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"bagisto-18-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Bagisto

After creation of the droplet you can ssh login to your droplet.

To login to your droplet from linux/mac system run below command

**ssh root@your-droplet-ip**

For windows system, please refer to below link

[https://www.ssh.com/ssh/putty/windows/](https://www.ssh.com/ssh/putty/windows/)

When you login to your droplet for the first time, it will ask for the domain name for bagisto setup. You must map your domain to your droplet ip beforehand. If you do not have any domain you just need to put your droplet ip.

**Note: Please do not add www while putting your domain name. If your domain is example.com, simply put example.com. Do not put “ [www.example.com](https://www.example.com/)”**

Next step it will ask to configure ssl for your domain.

If you put your domain name in previous choice, then select option option (y).

If you put your droplet ip in previous choice, then select option (n)

**Note: ssl can not be configured, if your domain does not point to your droplet ip.**

After bagisto setup is completed, you can open your bagisto url in the browser.

**For admin login, use below details.**

http(s)://your-bagisto-url/admin

email : [admin@example.com](mailto:admin@example.com)

password : admin123

**You can also register as a customer and login.**

http(s)://your-bagisto-url/customer/register

You can find your bagisto setup inside /var/www/html

Mysql passwords are stored inside /root/.digitalocean\_password

You can check our bagisto source code here.

[https://github.com/bagisto/bagisto](https://github.com/bagisto/bagisto)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/bagisto/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/bagisto/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/bagisto/#creating-an-app-using-the-api)
- [Getting Started After Deploying Bagisto](https://docs.digitalocean.com/products/marketplace/catalog/bagisto/#getting-started-after-deploying-bagisto)

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