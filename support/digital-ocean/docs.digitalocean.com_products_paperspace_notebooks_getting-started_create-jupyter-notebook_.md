---
url: "https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/create-jupyter-notebook/"
title: "Create a Jupyter Notebook with Templates or Custom Notebooks | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/notebooks.32e19af09a55fd5cd33aebcce8d997fae35ad696d0312f02ea32fbd1031df490.svg)Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/)
  - [Getting Started](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/quickstart/)
    - [Create a Jupyter Notebook](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/create-jupyter-notebook/)
    - [Run Example Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/run-example-notebooks/)
  - [How-Tos](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/)
    - [Create Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-notebooks/)
    - [Swap Machines](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/swap-machines/)
    - [Fork Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/fork-notebooks/)
    - [Share Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/share-notebooks/)
    - [Add Run on Gradient Badge](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-run-on-gradient/)
    - [Create Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-datasets/)
    - [Mount Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/mount-datasets/)
    - [Transfer Datasets and Files](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/transfer-data-and-files/)
    - [Connect Data Sources](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/connect-data-sources/)
    - [Set Up Storage Providers](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-storage-providers/)
    - [Manage Storage](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-storage/)
    - [Use Terminal](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/use-terminal/)
    - [Connect to Kernel](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/connect-remote-kernel/)
    - [Restart Kernels](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/restart-kernels/)
    - [Use Custom Containers](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-containers/)
    - [View Logs](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/view-notebook-logs/)
    - [View Metrics](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/view-notebook-metrics/)
    - [Use TensorBoard](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/use-tensorboard/)
  - [Reference](https://docs.digitalocean.com/products/paperspace/notebooks/reference/)
    - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
    - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
    - [Gradient API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/)
  - [Concepts](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/)
    - [Notebook Templates](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/notebook-templates/)
  - [Details](https://docs.digitalocean.com/products/paperspace/notebooks/details/)
    - [Features](https://docs.digitalocean.com/products/paperspace/notebooks/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/paperspace/notebooks/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/paperspace/notebooks/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/paperspace/notebooks/details/limits/)
    - [Public Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/details/public-datasets/)
    - [Storage Architecture](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-architecture/)
    - [Storage Types](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/)
  - [Support](https://docs.digitalocean.com/products/paperspace/notebooks/support/)

- [Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/)
- [Getting Started](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/)
- Create a Jupyter Notebook

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Create a Jupyter Notebook with Templates or Custom Notebooks

Validated on 14 Dec 2023 • Last edited on 23 Jan 2025

Notebooks are a web-based Jupyter IDE with shared persistent storage for long-term development and inter-notebook collaboration, backed by accelerated compute.

When you create a new Paperspace Notebook, you can either choose an existing [template](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/notebook-templates/) or create a custom notebook using advanced options.

## Using a Template

In the Paperspace console, click the drop-down menu in the top-right corner, then click **GRADIENT**. In the **Projects** section, select the project you want to create a Jupyter notebook for. In the **Notebooks** tab of your project, click **CREATE** to go to the **Launch a notebook** page.

![Create a notebook tab for a project](https://docs.digitalocean.com/screenshots/paperspace/gradient/create-a-notebook-tab.a45be6f433fcf2526a227d9900597f537d6165b273d8239faa82bdfca885695d.png)

On **Launch a notebook** page, in the **Select a template** section, choose your desired template for your Jupyter environment.

Note
When choosing your template, ensure that the notebook is compatible with the machine type as a template may not work with certain machine types.
![Selecting a template for a new notebook](https://docs.digitalocean.com/screenshots/paperspace/gradient/launch-a-notebook.f9ea3a1edf76435f52e00fe2ab948d05502d09cf132830a6663beaa9bd8452d0.png)

After selecting your template, the **Select a machine** section appears with a drop-down menu to select your machine type. Free machine is only available on personal accounts, and they have a max auto-shutdown limit of six hours. Finally, in the **Auto-shutdown timeout** section, select the amount of time your machine can idle before it shuts down.

![After selecting the template, specify machine type and auto-shutdown](https://docs.digitalocean.com/screenshots/paperspace/gradient/launch-a-notebook-expanded.248e163e138e4dfcb93181e5f4a3737aa06d48cfdfbbd8c8f1eac3a7d5010113.png)

Optionally, at the bottom of the form, click the **View advanced options** button to further configure your notebook, like the notebook’s workspace and container. These options customize the remote environment’s container and workspace settings.

Under the **Workspace** section, you can customize the following attributes:

- **URL**: This is the GitHub repository used as the workspace directory. All the files within this repository are placed in the `/notebooks` directory.
- **Ref**: This is a file that contains a Git commit SHA-1 hash. When referring to the Git commit, you can use the Git reference which is a name for the hash such as `v1.1.1`.
- **Username**: This is your GitHub username.
- **Password**: This is your GitHub password.

Your Docker image is stored in a container registry, like Docker Hub or GitHub. Under the **Container** section, you can customize the following attributes for your Docker container:

- **Name**: This is the name of the container using the syntax `registry/container-name:tag` (for example, `paperspace/Gradient-base:v1`).
- **Registry username**: If you are using a private container, this is the username you use to log in to the container registry.
- **Registry password**: If you are using a private container, this is the password you use to log in to the container registry.
- **Command**: This is the command that your Docker container executes when it starts. By default, the command runs a Jupyter Lab server with specific settings such as root user access, binding to all network interfaces, and disabling the automatic browser launch.

![Optionally configure your notebook's workspace and container through advanced options](https://docs.digitalocean.com/screenshots/paperspace/gradient/create-a-notebook-advanced-options.b60f5f92d6986ad4e0adaaba5b4d057ae2592197e4f1dfba4d2abd6e1471343e.png)

After you complete your notebook’s configuration, click **START NOTEBOOK**.

In this article...

- [Using a Template](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/create-jupyter-notebook/#using-a-template)

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