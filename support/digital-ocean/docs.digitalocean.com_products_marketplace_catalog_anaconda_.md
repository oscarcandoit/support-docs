---
url: "https://docs.digitalocean.com/products/marketplace/catalog/anaconda/"
title: "Anaconda | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/anaconda/)
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

- Anaconda

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Anaconda

Generated on 19 Jul 2025
from [the Anaconda catalog page](https://marketplace.digitalocean.com/apps/anaconda)

## Anaconda® Distribution

Anaconda® Distribution is a powerful platform for streamlined data science, featuring essential tools for Python and R programming. Whether you’re a seasoned data professional or just starting your data journey, Anaconda simplifies package management, data analysis, and machine learning model development within a unified and accessible environment.

## Key Features

1. **Effortless Package Management:** Simplify library management with Anaconda’s conda package manager, ensuring consistent dependencies.
2. **Robust Data Analysis and Visualization:** Explore and visualize datasets efficiently with Anaconda’s rich set of data science libraries.
3. **Streamlined Machine Learning Workflow:** Accelerate machine learning development using popular frameworks and tools seamlessly integrated into Anaconda.
4. **User-Friendly Interface:** Navigate complexities with ease. Anaconda’s interface is designed for both beginners and experienced practitioners.
5. **Community and Support:** Join a vibrant community for collaborative knowledge-sharing. Access a wealth of resources, tutorials, and support to enhance your skills.

Experience the power of Anaconda with a single click using the Droplet 1-Click deployment. The Anaconda® Distribution Droplet allows you to instantly access the full capabilities of Anaconda, eliminating the need for complex installations. Launch your data science and machine learning projects seamlessly, now just a click away.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Anaconda | 2023.09-0 | [Non-Commericial Use Only](https://legal.anaconda.com/policies/en/?name=terms-of-service) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=sharklabs-anaconda)

## Creating an App using the API

In addition to creating a Droplet from the Anaconda 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Anaconda Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"sharklabs-anaconda"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Anaconda

## Before You Deploy

Before deploying this Droplet, consider the following guidance to ensure you choose the right configuration for your needs:

- Droplet Size: Depending on your data processing requirements, select a Droplet size that offers sufficient CPU, memory, and storage resources. Consider the complexity and scale of your projects when making this decision.
- Volume: If you anticipate working with large datasets or require additional storage, it is recommended to attach a Volume to your Droplet. This will provide you with the necessary space to store and access your data conveniently.

## Getting Started with Anaconda

Congratulations on successfully installing Anaconda! Now that you have the powerful data science platform at your fingertips, let’s get started with some essential steps to make the most out of your Anaconda installation.

1. Update Conda and Anaconda Navigator

* * *

Ensure that your Anaconda tools are up to date. Open a terminal and run the following commands:

```
conda update conda
conda update anaconda-navigator
```

This will ensure you have the latest versions and bug fixes.

2. Create and Activate a Virtual Environment

* * *

Create a virtual environment to manage your project dependencies. Replace `myenv` with your preferred environment name.

```
conda create --name myenv
conda activate myenv
```

This isolates your project from the global Python environment, preventing potential conflicts.

3. Install Jupyter Notebooks

* * *

Jupyter Notebooks are a fantastic way to create and share live code, equations, visualizations, and narrative text. Install it with:

```
conda install jupyter
```

To be able to manage Jupyter Notebooks remotely, create jupyter\_notebook\_config.py file if it does not exist under ~/.jupyter directory by running the following command:

```
jupyter notebook --generate-config
```

Edit the following lines on your jupyter\_notebook\_config.py file:

```
#The IP address the notebook server will listen on.
c.ServerApp.ip = '0.0.0.0' # default value is 'localhost'

# Whether to open in a browser after starting.
c.ServerApp.open_browser = False
# If you want to run jupyter notebook command as root
c.ServerApp.allow_root = True
```

Start a new Jupyter Notebook with:

```
jupyter notebook
```

To connect to the Jupyter Notebook server from your browser allow the required ports in the firewall by running the following commands:

```
ufw allow 8888/tcp
ufw allow 8889/tcp
```

Once you see the following message, connect to the server using the server URL

> To access the server, open this file in a browser:
>
> file:///root/.local/share/jupyter/runtime/jpserver-22627-open.html
>
> Or copy and paste one of these URLs:
>
> http://anaconda2023090onubuntu2204lts-s-2vcpu-4gb-120gb-intel-sfo3-01:8889/tree?token=2641aecf9907b6b5fec09059be84bb0014abdc3e1424832d
>
> [http://127.0.0.1:8889/tree?token=2641aecf9907b6b5fec09059be84bb0014abdc3e1424832d](http://127.0.0.1:8889/tree?token=2641aecf9907b6b5fec09059be84bb0014abdc3e1424832d)

Connect to the server using the following URL

```
http://{YOUR_DROPLET_IP}:8889/tree?token={YOUR_TOKEN}
```

4. Explore Anaconda Navigator

* * *

Anaconda Navigator provides a graphical interface to manage your packages, environments, and applications. Launch it by running:

```
anaconda-navigator
```

Explore the Navigator to manage your environments, install packages, and launch applications like Jupyter Notebooks and Spyder.

5. Install Additional Packages

* * *

Anaconda includes many essential packages, but you may need additional ones for your projects. Use `conda install` to install packages. For example:

```
conda install numpy pandas matplotlib
```

6. Join the Anaconda Community

* * *

Connect with the [Anaconda Community](https://community.anaconda.com/) to get help, share knowledge, and stay updated on the latest developments. Visit the community to join discussions, ask questions, and explore tutorials.

For more detailed information, refer to the [Anaconda Reference Guide](https://docs.anaconda.com/).

In this article...

- [Anaconda® Distribution](https://docs.digitalocean.com/products/marketplace/catalog/anaconda/#anaconda-distribution)
- [Key Features](https://docs.digitalocean.com/products/marketplace/catalog/anaconda/#key-features)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/anaconda/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/anaconda/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/anaconda/#creating-an-app-using-the-api)
- [Getting Started After Deploying Anaconda](https://docs.digitalocean.com/products/marketplace/catalog/anaconda/#getting-started-after-deploying-anaconda)
- [Before You Deploy](https://docs.digitalocean.com/products/marketplace/catalog/anaconda/#before-you-deploy)
- [Getting Started with Anaconda](https://docs.digitalocean.com/products/marketplace/catalog/anaconda/#getting-started-with-anaconda)

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