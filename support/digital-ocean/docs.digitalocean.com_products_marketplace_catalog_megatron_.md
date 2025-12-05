---
url: "https://docs.digitalocean.com/products/marketplace/catalog/megatron/"
title: "Megatron | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/megatron/)
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

- Megatron

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Megatron

Generated on 22 Jul 2025
from [the Megatron catalog page](https://marketplace.digitalocean.com/apps/rocm-megatron-jupyter)

Run a ready-to-use Docker image with Megatron LM and JupyterLab IDE on top of your ROCm-enabled system! All software is preinstalled under containers, so you can jump straight into your workflow—get started with either SSH or Jupyter. This 1-click setup also bundles a hands-on tutorial to guide you through Megatron and how to use it:

```
- train_llama_mock_data.ipynb
```

The tutorial is available in Jupyter by default.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| ROCm (host system) | 6.4.1 | [LICENSE](https://rocm.docs.amd.com/en/latest/about/license.html) |
| ROCm (in Docker image) | 6.4.1 | [LICENSE](https://rocm.docs.amd.com/en/latest/about/license.html) |
| JupyterLab (in Docker image) | 4.4.2 | [LICENSE](https://jupyter.org/governance/projectlicense.html) |
| PyTorch (in Docker image) | 2.8.0 | [LICENSE](https://github.com/pytorch/pytorch/blob/main/LICENSE) |
| Megatron-LM | 0.10.0 | [LICENSE](https://github.com/NVIDIA/Megatron-LM/blob/main/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=digitaloceanai-rocmmegatronjupy)

## Creating an App using the API

In addition to creating a Droplet from the Megatron 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Megatron Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"digitaloceanai-rocmmegatronjupy"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Megatron

## Accessing Megatron + ROCm resources and libraries

There are two ways to utilise Megatron + ROCm resources and libraries: directly from JupyterLab, or via a Docker container.

- JupyterLab is preferable if you have notebook projects or just want to explore and experiment.
- Accessing Docker containers is preferable if you have a Python project that requires deployment.

The JupyterLab option is recommended for first-time users.

Either way will require you to SSH into the droplet first.

## SSHing into your AMD 1-Click

The simplest way to SSH is to use the DigitalOcean web console. After your Droplet is created, you can find the “Web Console” button in the top right corner of the Droplet page:

![webconsole](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202025-06-06%20at%2018.30.54.png)

After clicking the button, a separate browser page with Web Console will open.

Please note that the web console may be inaccessible for the first minute or two after the droplet is created.

In this case, refresh the page and try again.

## Exploring via Jupyter

JupyterLab is an interactive development environment for working with notebooks, code, and data. It offers a flexible and powerful interface for data science and scientific computing, allowing you to create and share documents that contain live code, equations, visualisations, and narrative text.

After the web console establishes the SSH connection, you will see your Droplet terminal with a welcome message.

Inside the welcome message, locate the `Token` field and copy it:

![token](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202025-06-06%20at%2018.34.13.png)

Now go back to the Droplet page and copy the IPv4 address of your 1-Click; you can locate it under “Connection Details”:

![ipv4](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202025-06-06%20at%2018.38.29.png)

Paste IPv4 into your browser and press Enter to access the JupyterLab environment:

![jupyter](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202025-06-06%20at%2018.40.10.png)

If you see a page that says “Your JupyterLab is being configured”, just wait a minute until JupyterLab starts, and the page will automatically refresh itself.

After accessing JupyterLab, you will be greeted by an authentication screen. Here you can use the token from earlier to log in to your JupyterLab:

![jupyterlogin](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202025-06-06%20at%2018.41.20.png)

After entering the access token, you’ll be logged into Jupyter Lab’s web-based IDE.

You can now start creating, editing, and running Jupyter notebooks directly within your browser!

## Exploring via Docker

After SSHing into the Droplet, run this command to connect to Docker container hosting all the ROCm software:

```
docker exec -it rocm /bin/bash
```

Done! You can now freely implement any project that requires Megatron + ROCm libraries.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/megatron/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/megatron/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/megatron/#creating-an-app-using-the-api)
- [Getting Started After Deploying Megatron](https://docs.digitalocean.com/products/marketplace/catalog/megatron/#getting-started-after-deploying-megatron)
- [Accessing Megatron + ROCm resources and libraries](https://docs.digitalocean.com/products/marketplace/catalog/megatron/#accessing-megatron--rocm-resources-and-libraries)
- [SSHing into your AMD 1-Click](https://docs.digitalocean.com/products/marketplace/catalog/megatron/#sshing-into-your-amd-1-click)
- [Exploring via Jupyter](https://docs.digitalocean.com/products/marketplace/catalog/megatron/#exploring-via-jupyter)
- [Exploring via Docker](https://docs.digitalocean.com/products/marketplace/catalog/megatron/#exploring-via-docker)

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