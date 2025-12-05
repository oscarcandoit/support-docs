---
url: "https://docs.digitalocean.com/products/marketplace/catalog/wp-squared/"
title: "WP Squared | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/wp-squared/)
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

- WP Squared

[Give Feedback](https://ideas.digitalocean.com/documentation)

# WP Squared

Generated on 25 Aug 2025
from [the WP Squared catalog page](https://marketplace.digitalocean.com/apps/wp-squared)

WP Squared is a powerful managed WordPress hosting control panel that streamlines and automates everyday hosting tasks, making it faster, easier, and more secure to deploy and manage WordPress sites at scale.

**Optimize WordPress performance without complex configurations:**

- AccelerateWP - Page Caching & Optimization
- Redis Object Cache
- Cloudflare Integration
- NGINX Caching
- Application Performance Monitoring

**Protect WordPress websites with robust security tools for multi-layer protection:**

- Vulnerability Protection (powered by Patchstack)
- Web Application Firewall (WAF)
- Proactive Defense
- Malware Protection
- Secure Account Isolation

**Streamline WordPress management at every stage of the site lifecycle:**

- AI-powered Website Creation (powered by Extendify)
- Temporary Domains
- Staging and Cloning
- Multiple WordPress Tools
- Automated Backups

**Simplify server management by automating time-consuming tasks and reducing manual effort**

- WHMCS Integration
- Customizable Branding
- Preinstalled Plugins
- Account Resource Limits
- Website Transfer Tools

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [WordPress](https://wordpress.org/) |  | GPL 2 |
| CloudLinux Shared Pro | 8 | [Commercial](https://cloudlinux.com/os-shared-pro) |
| [Imunify360 Security Unlimited](https://wpsquared.com/features/security/) |  | [Commercial](https://imunify360.com/imunify360/) |
| [Patchstack Vulnerability Protection](https://wpsquared.com/features/security/) |  | [Commercial](https://patchstack.com/wordpress-security/) |
| [Extendify AI Website Creation](https://wpsquared.com/features/website-tools/) |  | [Commercial](https://extendify.com/launch-ai/) |
| [AccelerateWP Page Caching & Optimization](https://wpsquared.com/features/performance/) |  | [Commercial](https://cloudlinux.com/acceleratewp/) |
| [KernelCare Rebootless Kernel](https://wpsquared.com/features/security/) |  | [Commercial](https://cloudlinux.com/kernelcare-hosting/) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=cpanel-wpsquared)

## Creating an App using the API

In addition to creating a Droplet from the WP Squared 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB WP Squared Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"cpanel-wpsquared"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying WP Squared

## Important

When you create a droplet, WP Squared will automatically begin installation in the background. The installation process takes about 10-15 minutes. You cannot log in to WebHostManager (WHM) until the installation process is complete.

## Login to WHM

To login to WHM, create a root password and login from: [https://your\_droplet\_public\_ipv4:2087](https://your_droplet_public_ipv4:2087/)

Alternatively, SSH into your droplet as root, type `whmlogin` in the commandline (CLI) and a login URL will be generated. Copy and paste the URL provided in your browser.

## Create a WP Squared account

1. In WHM, navigate to the **Create an Account** interface and provide the needed information for creating a new account. Click **Create** once you have provided the required information.
2. Click **Go To WP Squared** in the top right corner once you have created the account to immediately go into the WP Squared website setup. You can also click on the WP Squared icon ( _**WP**_) in WHM’s **List Accounts** interface to launch WP Squared.

The first time you launch WP Squared, the wizard will walk you through [setting up your first website](https://docs.wpsquared.com/docs/wpsquared/how-do-i-create-a-website/).

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/wp-squared/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/wp-squared/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/wp-squared/#creating-an-app-using-the-api)
- [Getting Started After Deploying WP Squared](https://docs.digitalocean.com/products/marketplace/catalog/wp-squared/#getting-started-after-deploying-wp-squared)
- [Important](https://docs.digitalocean.com/products/marketplace/catalog/wp-squared/#important)
- [Login to WHM](https://docs.digitalocean.com/products/marketplace/catalog/wp-squared/#login-to-whm)
- [Create a WP Squared account](https://docs.digitalocean.com/products/marketplace/catalog/wp-squared/#create-a-wp-squared-account)

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