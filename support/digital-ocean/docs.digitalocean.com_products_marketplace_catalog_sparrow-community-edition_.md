---
url: "https://docs.digitalocean.com/products/marketplace/catalog/sparrow-community-edition/"
title: "Sparrow-Community-Edition | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/sparrow-community-edition/)
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

- Sparrow-Community-Edition

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Sparrow-Community-Edition

Generated on 3 Oct 2025
from [the Sparrow-Community-Edition catalog page](https://marketplace.digitalocean.com/apps/sparrow-community-edition-1)

Effortless Collection & Environment Handling: Simplify API testing with intuitive collection management and environment switching, allowing teams to focus on building and scaling high-quality software faster.

Seamless API Management: Sparrow offers a robust REST API tool that supports multiple request types, empowering developers to streamline workflows and enhance productivity with an intuitive, powerful interface.

## Software Included

_This Marketplace listing does not include a detailed software list._

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=techdomeai-sparrowcommunityedition1)

## Creating an App using the API

In addition to creating a Droplet from the Sparrow-Community-Edition 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Sparrow-Community-Edition Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"techdomeai-sparrowcommunityedition1"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Sparrow-Community-Edition

## Before You Begin

Make sure you are logged in to your DigitalOcean account. Without logging in, you will not see the **Create Droplet** button required to deploy the product.

* * *

## Step 1: Launch the Product

- Go to the product listing on DigitalOcean Marketplace.

- Search for **Sparrow Community Edition** and click on the listing.

- Click the **Create Droplet** button.

- Choose the appropriate:
  - **Droplet Plan** (at least 2 vCPU / 4 GB RAM is recommended)

  - **Datacenter Region**: Choose the region closest to your users for better performance

    e.g., `Bangalore`, `New York`, `Frankfurt`, `San Francisco`.

  - **Authentication method** (SSH key or root password)

  - **Hostname** (e.g., `sparrow-app`)
- Click **Create Droplet** to launch the instance.


* * *

## Step 2: Login Credentials

- **Username**: `root`
- **password**: Use the password or SSH key you configured while creating the Droplet.

Ensure the following ports are open on your firewall or through DigitalOcean Cloud Firewalls:

- **Port 22** – SSH access
- **Port 80** – HTTP
- **Port 443** – HTTPS

### To find your Droplet details:

1. Visit the [DigitalOcean Console](https://cloud.digitalocean.com/)
2. Click on the **Droplets** section in the left-hand menu
3. Locate and select your **Sparrow** Droplet
4. Copy the **Public IPv4 Address** for use in SSH access or browser-based access to the application

* * *

## Step 3: Check Application Health

- Open your browser and go to:

`https://domain_name/health`

(Replace `domain_name` with the actual domain name you configured to point to the Droplet’s IP, or use the Droplet IP directly if no domain is set)

- This page displays the health status of the Sparrow application.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/sparrow-community-edition/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/sparrow-community-edition/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/sparrow-community-edition/#creating-an-app-using-the-api)
- [Getting Started After Deploying Sparrow-Community-Edition](https://docs.digitalocean.com/products/marketplace/catalog/sparrow-community-edition/#getting-started-after-deploying-sparrow-community-edition)
- [Before You Begin](https://docs.digitalocean.com/products/marketplace/catalog/sparrow-community-edition/#before-you-begin)
- [Step 1: Launch the Product](https://docs.digitalocean.com/products/marketplace/catalog/sparrow-community-edition/#step-1-launch-the-product)
- [Step 2: Login Credentials](https://docs.digitalocean.com/products/marketplace/catalog/sparrow-community-edition/#step-2-login-credentials)
  - [To find your Droplet details:](https://docs.digitalocean.com/products/marketplace/catalog/sparrow-community-edition/#to-find-your-droplet-details)
- [Step 3: Check Application Health](https://docs.digitalocean.com/products/marketplace/catalog/sparrow-community-edition/#step-3-check-application-health)

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