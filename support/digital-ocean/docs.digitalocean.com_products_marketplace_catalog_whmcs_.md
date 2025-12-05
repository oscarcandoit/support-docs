---
url: "https://docs.digitalocean.com/products/marketplace/catalog/whmcs/"
title: "WHMCS | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/whmcs/)
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

- WHMCS

[Give Feedback](https://ideas.digitalocean.com/documentation)

# WHMCS

Generated on 15 Oct 2025
from [the WHMCS catalog page](https://marketplace.digitalocean.com/apps/whmcs)

## WHMCS: Automate Web Hosting Operations with Ease

**Automated Billing & Payments**: Simplify invoicing, subscription management, and payment processing with support for multiple gateways, reducing errors and ensuring timely payments.

**Service Provisioning**: Automate the setup of hosting accounts, domains, and other services directly from WHMCS, accelerating customer onboarding and reducing setup time.

**Integrated Customer Support**: Manage support tickets, respond to inquiries, and maintain a knowledge base within a centralized platform to improve response times and service quality.

**Domain Management**: Offer domain registration, transfers, and renewals with integrations to leading registrars, enabling seamless domain services alongside hosting.

**Customizable Add-Ons**: Expand your offerings with tools like MarketConnect to sell SSL certificates, website builders, and security solutions, creating new revenue streams without additional infrastructure.

## Why Choose WHMCS?

WHMCS is trusted by thousands of hosting providers for its comprehensive automation and ease of use. Businesses using WHMCS report reduced operational costs, faster onboarding, and higher customer satisfaction thanks to its powerful support and provisioning tools.

With seamless integrations for tools like cPanel, Stripe, and PayPal, WHMCS fits effortlessly into your existing workflows, ensuring a smooth transition and immediate impact. Its robust features not only streamline daily operations but also open new revenue opportunities through upsells and add-ons.

Whether you’re scaling your hosting services, managing customer accounts, or expanding your revenue streams, WHMCS provides the simplicity, scalability, and flexibility you need to grow confidently.

Automate your web hosting business with WHMCS, the trusted platform for managing billing, provisioning, and customer support—all in one place.

**Get Started Today**

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [WHMCS](https://www.whmcs.com/) | [8.x](https://docs.whmcs.com/releases/) | [Proprietary](https://www.whmcs.com/eula/) |
| [Plesk Obsidian](https://plesk.com/) | [18.x](https://docs.plesk.com/release-notes/obsidian/change-log/) | [Proprietary](https://www.plesk.com/legal/) |
| [Ubuntu Linux](https://ubuntu.com/) | 22.04 | [GPL](https://ubuntu.com/legal) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=whmcs)

## Creating an App using the API

In addition to creating a Droplet from the WHMCS 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB WHMCS Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"whmcs"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying WHMCS

## How to Set Up a WHMCS Virtual Machine on DigitalOcean

The image includes everything you need to get started with WHMCS. It also comes with the Plesk Control Panel, which simplifies system management tasks such as configuration, updates, backups, and more.

## Follow these steps to set up WHMCS and access your server:

### Step 1: Connect to Your Server via SSH

To begin, you need to connect to your server using SSH as a privileged user (ssh root@your\_droplet\_public\_ipv4). If you’re unfamiliar with SSH, follow this guide:

🔗 [How to Connect to Droplets via SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/)

### Step 2: Generate a One-Time Login Link for Plesk

Once connected, generate a temporary login link for Plesk, which will allow you to complete the WHMCS setup through a graphical web interface.

Run the following command:

`sudo plesk login`

Copy the generated URL, open it in your web browser, and follow the on-screen wizard to initialize Plesk. Once inside Plesk, navigate to **WHMCS** in the left menu to finalize the WHMCS installation.

### Step 3: Access WHMCS

Before accessing WHMCS, make sure your chosen domain for WHMCS is correctly pointed to the server.

Once the installation is complete, open your domain for WHMCS in a web browser. Then, use the **username** and **password** you set during the final step of the WHMCS installation to log in.

**You’re all set! 🎉 Now you can start managing your WHMCS system.**

In this article...

- [WHMCS: Automate Web Hosting Operations with Ease](https://docs.digitalocean.com/products/marketplace/catalog/whmcs/#whmcs-automate-web-hosting-operations-with-ease)
- [Why Choose WHMCS?](https://docs.digitalocean.com/products/marketplace/catalog/whmcs/#why-choose-whmcs)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/whmcs/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/whmcs/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/whmcs/#creating-an-app-using-the-api)
- [Getting Started After Deploying WHMCS](https://docs.digitalocean.com/products/marketplace/catalog/whmcs/#getting-started-after-deploying-whmcs)
- [How to Set Up a WHMCS Virtual Machine on DigitalOcean](https://docs.digitalocean.com/products/marketplace/catalog/whmcs/#how-to-set-up-a-whmcs-virtual-machine-on-digitalocean)
- [Follow these steps to set up WHMCS and access your server:](https://docs.digitalocean.com/products/marketplace/catalog/whmcs/#follow-these-steps-to-set-up-whmcs-and-access-your-server)
  - [Step 1: Connect to Your Server via SSH](https://docs.digitalocean.com/products/marketplace/catalog/whmcs/#step-1-connect-to-your-server-via-ssh)
  - [Step 2: Generate a One-Time Login Link for Plesk](https://docs.digitalocean.com/products/marketplace/catalog/whmcs/#step-2-generate-a-one-time-login-link-for-plesk)
  - [Step 3: Access WHMCS](https://docs.digitalocean.com/products/marketplace/catalog/whmcs/#step-3-access-whmcs)

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