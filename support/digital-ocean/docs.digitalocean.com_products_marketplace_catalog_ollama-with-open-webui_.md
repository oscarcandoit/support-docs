---
url: "https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/"
title: "Ollama with Open WebUI | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/)
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

- Ollama with Open WebUI

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Ollama with Open WebUI

Generated on 1 Oct 2024
from [the Ollama with Open WebUI catalog page](https://marketplace.digitalocean.com/apps/ollama-with-openwebui)

Ollama with Open WebUI provides a fast and easy way to deploy and interact with Large Language Models (LLMs). Integration with the Ollama models library offers a variety of models for tasks like natural language processing, chatbots, and content generation. Ideal for developers, data scientists, and AI enthusiasts, this application provides a simple yet platform to explore and experiment with foundational models.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Ollama](https://www.ollama.com/) | 0.3.6 | [MIT License](https://raw.githubusercontent.com/ollama/ollama/main/LICENSE) |
| [Open WebUI](https://openwebui.com/) | 0.3.13 | [MIT License](https://raw.githubusercontent.com/open-webui/open-webui/main/LICENSE) |
| Anaconda | 2024.06-1 | [Non-Commericial Use Only](https://legal.anaconda.com/policies/en/?name=terms-of-service) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=sharklabs-ollamawithopenwe)

## Creating an App using the API

In addition to creating a Droplet from the Ollama with Open WebUI 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Ollama with Open WebUI Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"sharklabs-ollamawithopenwe"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Ollama with Open WebUI

### Getting Started Guide: DigitalOcean’s Ollama Droplet 1-Click

Welcome to DigitalOcean’s Ollama Droplet 1-Click! This guide will walk you through the initial setup, accessing applications, managing services, using Conda environments and configuring TLS.

**Ollama** is a powerful tool designed to simplify the interaction with Large Language Models (LLMs). It allows you to easily download, manage, and deploy various LLMs for tasks like natural language processing, chatbots, and content generation.

**Open WebUI** is a user-friendly web interface that provides an intuitive way to interact with LLMs. It allows you to input queries, manage models, and view outputs in real-time. Open-WebUI is integrated with Ollama to enhance your workflow and make it easier to experiment with different models.

### 1\. **Accessing Open WebUI**

To start using the Open WebUI, open your web browser and navigate to:

```
http://your_droplet_public_ipv4
```

![welcome screen](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/ollama-with-openwebui-3.gif)

**Note:** The first account created on Open WebUI gains Administrator privileges, which allows control over user management and system settings. Make sure to set up this account immediately to secure your environment.

### 2\. **Introduction to the Open WebUI Interface**

Once logged into Open WebUI, you will find an intuitive dashboard that allows you to interact with LLMs. The main features include:

- **Model Management**: Easily switch between different models, load new ones from the Ollama library, and manage their configurations.
- **Interactive Console**: Input queries and receive responses directly from the models, allowing for real-time experimentation and testing.
- **Multiple Connections**: Connect your OpenAI API, to seamlessly switch between local models and ChatGPT.

![Connections](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/ollama-with-openwebui-1.gif)

- **User Management**: Once users sign up to your Open WebUI droplet, manage and revoke access.

![Settings](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/ollama-with-openwebui-4.gif)


**Note:** Once users sign up to your Open WebUI droplet, they will need to be approved from the admin panel to be able to login and access the UI.

![Pending users](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/ollama-with-openwebui-5.png)

- **Settings**: Configure various aspects of the Open WebUI, system settings, and more.

![Settings](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/ollama-with-openwebui-2.gif)

For advanced settings and more detailed usage, refer to the [Open WebUI documentation](https://open-webui.docs/).

### 3\. **Service Management**

Ollama and Open WebUI are configured to run as systemd services for easy management. You can manage these services using the following commands:

- **Check Open WebUI service status**:

```
systemctl status open-webui
```

- **Check Ollama service status**:

```
systemctl status ollama
```

### 4\. **Application Environment**

All applications are installed under the user `digitalocean`. The Droplet includes a pre-installed Anaconda distribution, which is configured for the Open WebUI.

### 5\. **Using Conda for Open WebUI**

Conda is already set up, and Open WebUI is available within the ‘ui’ virtual environment. To access and manage this environment, follow these steps:

1. **Activate the Conda environment**:

```
source /home/digitalocean/anaconda3/etc/profile.d/conda.sh
   conda activate ui
```

### 6\. **Downloading Models from Ollama Repository**

To enhance the functionality of your setup, you can download models from the Ollama repository. Use the following command to download a specific model:

```
ollama pull <model_name>
```

Replace `&amp;amp;amp;lt;model_name&amp;amp;amp;gt;` with the name of the desired model.

### 7\. **Accessing Your Anaconda Distribution**

To manage your Conda environments and packages:

1. **Switch to the DigitalOcean user**:

```
su - digitalocean
```

2. **Verify Conda installation**:

If the `conda` command is not working, initialize Conda with:


```
/home/digitalocean/anaconda3/bin/conda init
```

After running this command, you may need to source the `~/.bashrc` file or log out and back in using `su - digitalocean`.

### 8\. **Creating and Managing Conda Environments**

Use Conda to create isolated environments tailored to your specific projects:

- **Create a new Conda environment**:

```
conda create --name myenv
```

- **Activate the environment**:

```
conda activate myenv
```

Install necessary packages and libraries within this environment using Conda or pip.

For more detailed instructions on using Conda, refer to the [Conda documentation](https://docs.conda.io/).

### 9\. **Configuring HTTPS with TLS using Certbot and Caddy**

To secure your Open WebUI with HTTPS, you can configure TLS using Certbot and Caddy.

1. **Install Certbot**:

```
sudo apt-get update
   sudo apt-get install certbot
```

2. **Generate SSL Certificates**:

Run the following command to obtain a free SSL certificate from Let’s Encrypt:


```
sudo certbot certonly --standalone -d <your_domain>
```

Replace `&amp;amp;amp;lt;your_domain&amp;amp;amp;gt;` with your actual domain name.

3. **Configure Caddy to Use HTTPS**:

Edit the Caddy configuration file located at `/etc/caddy/caddyfile`. Update it to include the following settings:


```
:443 {
       tls /etc/letsencrypt/live/<your_domain>/fullchain.pem /etc/letsencrypt/live/<your_domain>/privkey.pem
       reverse_proxy localhost:8080
       log {
           output file /var/log/caddy/access.log
       }
   }
```

Replace `&amp;amp;amp;lt;your_domain&amp;amp;amp;gt;` with your actual domain name.

4. **Restart Caddy Service**:

After making changes to the Caddyfile, restart the Caddy service to apply the new configuration:


```
sudo systemctl restart caddy
```

### 10\. **Security Measures with Fail2Ban**

Fail2Ban is configured to provide additional security by monitoring login attempts and banning IP addresses that show malicious signs. The rules for Open WebUI are defined as follows:

- **Fail2Ban Configuration for Open WebUI**:
  - The configuration file is located at `/etc/fail2ban/jail.d/open-webui.conf`.
  - This configuration limits the number of failed login attempts and bans the IP address for a specified time.
- **Adjusting Fail2Ban Rules**: Users can customize or add additional rules as needed to increase security based on specific requirements.


### 11\. **Increasing Droplet Size for Larger Models**

**Note:** To run larger foundational models, it is recommended to increase your Droplet size. Ensure you have sufficient CPU, RAM, and storage to handle the demands of larger models, which can significantly improve performance and stability.

This guide provides all the essentials to get you started with Ollama and Open WebUI on your DigitalOcean Droplet, offering a robust and scalable environment for working with Large Language Models.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#creating-an-app-using-the-api)
- [Getting Started After Deploying Ollama with Open WebUI](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#getting-started-after-deploying-ollama-with-open-webui)
  - [Getting Started Guide: DigitalOcean’s Ollama Droplet 1-Click](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#getting-started-guide-digitaloceans-ollama-droplet-1-click)
  - [1\. **Accessing Open WebUI**](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#1-accessing-open-webui)
  - [2\. **Introduction to the Open WebUI Interface**](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#2-introduction-to-the-open-webui-interface)
  - [3\. **Service Management**](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#3-service-management)
  - [4\. **Application Environment**](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#4-application-environment)
  - [5\. **Using Conda for Open WebUI**](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#5-using-conda-for-open-webui)
  - [6\. **Downloading Models from Ollama Repository**](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#6-downloading-models-from-ollama-repository)
  - [7\. **Accessing Your Anaconda Distribution**](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#7-accessing-your-anaconda-distribution)
  - [8\. **Creating and Managing Conda Environments**](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#8-creating-and-managing-conda-environments)
  - [9\. **Configuring HTTPS with TLS using Certbot and Caddy**](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#9-configuring-https-with-tls-using-certbot-and-caddy)
  - [10\. **Security Measures with Fail2Ban**](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#10-security-measures-with-fail2ban)
  - [11\. **Increasing Droplet Size for Larger Models**](https://docs.digitalocean.com/products/marketplace/catalog/ollama-with-open-webui/#11-increasing-droplet-size-for-larger-models)

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