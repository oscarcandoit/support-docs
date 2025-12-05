---
url: "https://docs.digitalocean.com/products/marketplace/catalog/runcloud-20-04/"
title: "RunCloud-20.04 | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/runcloud-20-04/)
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

- RunCloud-20.04

[Give Feedback](https://ideas.digitalocean.com/documentation)

# RunCloud-20.04

Generated on 14 Feb 2023
from [the RunCloud-20.04 catalog page](https://marketplace.digitalocean.com/apps/runcloud-20-04)

RunCloud is a SaaS platform that simplifies cloud server management through its simple yet powerful server management panel. It is simple enough to be used with minimal technical knowledge and at the same time, powerful enough for users to run complicated tasks either using our GUI or command-line interface. Our management panel makes it easier for you to deploy and manage your web application without having the hassle to configure your web application to ensure it’s up and running.

RunCloud One-Click Droplet allows you to spin your server with RunCloud image and straightly manage your server inside RunCloud Panel afterward. No need to connect your droplet through IP Address or spin the server inside our panel again.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| runcloud-agent | latest |  |
| nginx-rc | latest |  |
| apache2-rc | latest |  |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=runcloud-runcloud2004-20-04)

## Creating an App using the API

In addition to creating a Droplet from the RunCloud-20.04 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB RunCloud-20.04 Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"runcloud-runcloud2004-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying RunCloud-20.04

There are several steps you to need to do before and after you finished spinning up RunCloud One-Click Droplet:

### RunCloud Account

It is recommended that you have a RunCloud account before you begin spinning up the droplet. This is to ensure a smooth process from spinning up RunCloud One-Click Droplet to server verification on RunCloud Panel. If you did not have an account yet, you can register here for free. You can also create an account after spinning up RunCloud One-Click Droplet.

### Verification Process

We generate a verification link that is accessible via SSH. The verification link allows us to identify and verify that you are the owner of the droplet. Below are a few steps that you need to do after you finished spinning up RunCloud One-Click Droplet:

### 1\. Log into Droplet via SSH

First, you need to log into the Droplet via SSH. From a terminal on your local computer, connect to the Droplet as `root` as shown below. Please make sure to replace `use_your_droplet_ip_address` with the actual RunCloud One-Click Droplet’s IP address which you have just created.

`ssh root@use_your_droplet_ip_address`

### 2\. Click or copy the verification link

Once you successfully log into the Droplet, you will see a MySQL Root Password and RunCloud User Password. Please duplicate and save this password because it only shows once.

You will also see that there is a verification URL provided. Click or copy that link and it will be directed to our RunCloud Panel. Do note that the verification link only valid for **24 hours**.

### 3\. Claim your server

After clicking the verification URL, you will be redirected to the **Claim DigitalOcean Server** page. If you already signed into RunCloud, you will see a simple verification form on this page.

You need to claim your ownership of the server that you just created using RunCloud One-Click Droplet by filling up the form and click **Claim This Server** button. RunCloud then will verify and start communicating with your Droplet.

After few moments, you will redirected to your Droplet/Server summary page. Congratulations! Verification process successful and you can start manage your droplet via RunCloud Panel.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/runcloud-20-04/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/runcloud-20-04/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/runcloud-20-04/#creating-an-app-using-the-api)
- [Getting Started After Deploying RunCloud-20.04](https://docs.digitalocean.com/products/marketplace/catalog/runcloud-20-04/#getting-started-after-deploying-runcloud-2004)
  - [RunCloud Account](https://docs.digitalocean.com/products/marketplace/catalog/runcloud-20-04/#runcloud-account)
  - [Verification Process](https://docs.digitalocean.com/products/marketplace/catalog/runcloud-20-04/#verification-process)
  - [1\. Log into Droplet via SSH](https://docs.digitalocean.com/products/marketplace/catalog/runcloud-20-04/#1-log-into-droplet-via-ssh)
  - [2\. Click or copy the verification link](https://docs.digitalocean.com/products/marketplace/catalog/runcloud-20-04/#2-click-or-copy-the-verification-link)
  - [3\. Claim your server](https://docs.digitalocean.com/products/marketplace/catalog/runcloud-20-04/#3-claim-your-server)

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