---
url: "https://docs.digitalocean.com/products/marketplace/catalog/pytorch/"
title: "PyTorch | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/pytorch/)
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

- PyTorch

[Give Feedback](https://ideas.digitalocean.com/documentation)

# PyTorch

Generated on 22 Jul 2025
from [the PyTorch catalog page](https://marketplace.digitalocean.com/apps/rocm-pytorch-jupyter)

Run a ready-to-use Docker image with PyTorch and JupyterLab IDE on top of your ROCm-enabled system! All software is preinstalled under containers, so you can jump straight into your workflow—get started with either SSH or Jupyter. This 1-click setup also bundles three hands-on tutorials to guide you through PyTorch and how to use it:

```
- ddim_pretrain.ipynb
- fine_tuning_lora_qwen2vl.ipynb
- triton_kernel_dev.ipynb
```

All tutorials are available in Jupyter by default.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| ROCm (host system) | 6.4.1 | [LICENSE](https://rocm.docs.amd.com/en/latest/about/license.html) |
| ROCm (in Docker image) | 6.4.1 | [LICENSE](https://rocm.docs.amd.com/en/latest/about/license.html) |
| JupyterLab (in Docker image) | 4.4.2 | [LICENSE](https://jupyter.org/governance/projectlicense.html) |
| PyTorch (in Docker image) | 2.6.0 | [LICENSE](https://github.com/pytorch/pytorch/blob/main/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=digitaloceanai-rocmpytorchjupyt)

## Creating an App using the API

In addition to creating a Droplet from the PyTorch 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB PyTorch Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"digitaloceanai-rocmpytorchjupyt"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying PyTorch

## Accessing ROCm + PyTorch

There are two ways to access and use ROCm + PyTorch libraries: either by SSHing and accessing the underlying container or using JupyterLab from a browser. SSHing allows more flexibility and is suitable if you have a pure-Python project to deploy. On the other hand, JupyterLab is more accessible and comes with pre-installed tutorials.

### Approach A: SSH

First of all, connect to Droplet 1-Click with SSH. Use the droplet’s public IP address to log in as `root`:

```
ssh root@your_droplet_public_IP
```

In case of a problem, make sure to check our [SSH guide](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/openssh/).

After successfully connecting to the droplet, now it’s time to connect to the underlying container with ROCm + PyTorch libraries:

```
docker exec -it rocm /bin/bash
```

Done! You can now freely implement any project that requires ROCm and PyTorch libraries.

### Approach B: JupyterLab

JupyterLab is an interactive development environment for working with notebooks, code, and data. It offers a flexible and powerful interface for data science and scientific computing, allowing you to create and share documents that contain live code, equations, visualizations, and narrative text.

### Jupyter AI

Jupyter AI extends JupyterLab with capabilities for integrating machine learning and artificial intelligence workflows. It provides tools and extensions to leverage AI models directly within the Jupyter environment, making it easier to incorporate AI into your data science tasks.

## Before You Deploy

Consider the following to ensure you choose the right configuration for your needs:

- **Droplet Size**: Select a Droplet size with sufficient CPU, memory, and storage based on your data processing requirements.
- **Volume**: Attach a Volume to your Droplet if you anticipate working with large datasets or need additional storage space.

## Quickly Get Started With Your Jupyter Droplet

1. **Access the Droplet Console:**
   - Navigate to the Droplets page.
   - Locate your newly created Jupyter Droplet and click on its name.
   - Under the “Access” tab, select **Console**. This will open an in-browser terminal session connected to your droplet.
   - Log in as the `root` user using the password you set during droplet creation.

> ![Droplet Console](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/jupyter-1.png)

2. **Login via SSH (Method 1: Using SSH Key):**

- If you selected an SSH key during droplet creation, follow these steps:- Open your preferred SSH client (e.g., PuTTY, Terminal).


  - Use the droplet’s public IP address to log in as `root`:

```
ssh root@your_droplet_public_IP
```

  - Ensure your SSH key is added to the SSH agent, or specify the key file directly:

```
ssh -i /path/to/your/private_key root@your_droplet_public_IP
```

  - Once connected, you will be logged in as the root user without needing a password.

2. **Check the Message of the Day (MOTD) for Jupyter Access Token:**
   - Upon successful login via console or SSH, the Message of the Day (MOTD) will be displayed.
   - This message includes important information such as the Jupyter Lab access token. Take note of this token as you’ll need it to log in to Jupyter Lab.

> ![MOTD](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/jupyter-2.png)

5. **Access the Jupyter Lab IDE:**
   - Open a web browser and navigate to the URL for your Jupyter Lab instance, which will be `http://your_droplet_public_IP`.
   - This will bring you to the login page for Jupyter Lab.
6. **Enter the Jupyter Lab Access Token:**
   - On the login page, enter the access token that you noted from the MOTD.
   - This token is required for the first login to ensure secure access to your Jupyter Lab environment.

> ![Jupyter Login](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/jupyter-3.png)

7. **Start Using Jupyter Lab:**
   - After entering the access token, you’ll be logged into Jupyter Lab’s web-based IDE.
   - You can now start creating, editing, and running Jupyter notebooks directly within your browser.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/pytorch/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/pytorch/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/pytorch/#creating-an-app-using-the-api)
- [Getting Started After Deploying PyTorch](https://docs.digitalocean.com/products/marketplace/catalog/pytorch/#getting-started-after-deploying-pytorch)
- [Accessing ROCm + PyTorch](https://docs.digitalocean.com/products/marketplace/catalog/pytorch/#accessing-rocm--pytorch)
  - [Approach A: SSH](https://docs.digitalocean.com/products/marketplace/catalog/pytorch/#approach-a-ssh)
  - [Approach B: JupyterLab](https://docs.digitalocean.com/products/marketplace/catalog/pytorch/#approach-b-jupyterlab)
  - [Jupyter AI](https://docs.digitalocean.com/products/marketplace/catalog/pytorch/#jupyter-ai)
- [Before You Deploy](https://docs.digitalocean.com/products/marketplace/catalog/pytorch/#before-you-deploy)
- [Quickly Get Started With Your Jupyter Droplet](https://docs.digitalocean.com/products/marketplace/catalog/pytorch/#quickly-get-started-with-your-jupyter-droplet)

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