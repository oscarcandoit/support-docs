---
url: "https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/"
title: "Jupyter Notebook | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/)
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

- Jupyter Notebook

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Jupyter Notebook

Generated on 12 Aug 2024
from [the Jupyter Notebook catalog page](https://marketplace.digitalocean.com/apps/jupyter-notebook)

Leverage the power of Digital Ocean droplets to deploy a Jupyter Notebook IDE with Jupyter AI in minutes! Whether you’re using Jupyter Lab for data science or machine learning tasks, use this marketplace app to set up a powerful experimentation environment without the hassle of manual installation.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [JupyterLab + Jupyter](https://jupyter.org/install) | 4.2.4 | BSD-3-Clause License |
| [Anaconda](https://docs.anaconda.com/anaconda/install/) | 2024.06-1 | [Non-Commercial Use Only](https://legal.anaconda.com/policies/en/?name=terms-of-service) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=sharklabs-jupyternotebook)

## Creating an App using the API

In addition to creating a Droplet from the Jupyter Notebook 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Jupyter Notebook Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"sharklabs-jupyternotebook"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Jupyter Notebook

### JupyterLab

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

2. **Login via SSH (Method 2: Using Password):**


   - If you set a password during droplet creation, follow these steps:- Open your preferred SSH client (e.g., PuTTY, Terminal).
     - Use the droplet’s public IP address to log in as `root`:

```
ssh root@your_droplet_public_IP
```

   - When prompted, enter the password you set during droplet creation.- This will log you into the droplet as the root user.
3. **Check the Message of the Day (MOTD) for Jupyter Access Token:**
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

## Access your Anaconda Distribution

1. **Switch to the Anaconda user**:


   - Once connected, switch to the Anaconda user by running:

```
su - anaconda
```

2. **Checking Your Conda Installation**:


   - Start by checking if the conda command is working. If not, run the following command:

```
/home/anaconda/anaconda3/bin/conda init
```

   - This command will set up the necessary configuration in the ~/.bashrc file. You may need to source ~/.bashrc or exit and run su - anaconda again.
3. **Creating and Managing Conda Environments**:\- Use Conda to create isolated environments for your projects.


   - To create a new Conda environment, use:

`conda create --name myenv`

   - Activate the environment by running:

`conda activate myenv`
   - Install required packages and libraries within the environment using Conda or pip.

For more detailed instructions and tips on using Conda and Jupyter, refer to the Conda documentation: [https://docs.conda.io/](https://docs.conda.io/)

## Manually Running the Jupyter Notebook

```
- Jupyter Notebook is installed under the jupyter environment. You can manage the jupyter-notebook.service provided.

- To check the status of the service, run the following:
```

sudo systemctl status jupyter-notebook

```

```

- If you want to run Jupyter Notebook instead of JupyterLab, you can manually enter the Jupyter virtual environment by running conda activate jupyter.

- The droplet already starts up an instance of the Jupyter Notebook on boot. If you need multiple instances, you’ll have to run them up manually by providing port number to have different instances listening on different ports.


  - To manually start Jupyter Notebook, run:

```
conda activate jupyter
  jupyter lab
```

## Using Jupyter AI

To leverage Jupyter AI in your projects, follow these steps:

1. **Install Jupyter AI extensions**:


   - Ensure you are in the Jupyter environment by running:

```
conda activate jupyter
```

   - Install Jupyter AI extensions with the following commands:

```
jupyter labextension install @jupyterlab/google-drive
  jupyter labextension install @jupyter-widgets/jupyterlab-manager
  jupyter labextension install @jupyterlab/git
```

2. **Configure Jupyter AI**:
   - Depending on your specific needs, configure the AI extensions and tools within the JupyterLab interface. This may involve connecting to external AI services or setting up local AI models.
3. **Using AI Models**:


   - Once configured, you can use AI models directly within your Jupyter notebooks. For example, to use a pre-trained model for image classification, you might write:

```python
from keras.models import load_model
  model = load_model('path_to_model.h5')
  result = model.predict(your_input_data)
```

4. **Exploring AI Capabilities**:
   - Utilize Jupyter AI’s tools to explore and visualize the outputs of AI models, integrate them into your data workflows, and share your findings with others through interactive notebooks.

## Example 1: Running Stable Diffusion

**Note**: If you have small compute, skip this and go to Example 2. Running this on <16 vCPU may cause the process to be killed.

To run the “stable diffusion 1.5” model, ensure your Droplet meets the following specifications:

- CPU: At least 16 cores
- RAM: At least 32GB
- Droplet Type: Premium CPU-optimized (Xeon series 3)

Commands:

```

su - anaconda

cd examples/stable\_diffusion.openvino/

conda activate stable-diffusion-1.5

python demo.py --prompt "Beautiful lake, sunset, and a mountain"
```

The output is stored in `output.png`. If connected to Jupyter notebook, you should be able to view the file in the notebook itself.

## Example 2: Running DistilBERT Sequence Classification

This tutorial guides you through running the DistilBERT sequence classification in a JupyterLab environment.

1. **Navigating to the Notebook**:


   - In JupyterLab, navigate to:

```
/home/anaconda/examples/openvino_notebooks/notebooks/229-distilbert-sequence-classification
```

   - Open the `229-distilbert-sequence-classification.ipynb` notebook.
2. **Selecting the Kernel**:
   - From the “Kernel” menu, select “Change Kernel”, and then select “openvino notebooks”.
3. **Running the Notebook**:
   - Run the cells in the notebook, which will download and optimize the model for better performance and execute sentiment analysis on sample texts.

**Note**: If you encounter the “mo command not found” error, replace `mo` with its full path: `/home/anaconda/.conda/envs/openvino_notebooks/bin/mo`.

## Troubleshooting

If you encounter issues, refer to the following resources:

1. **Disk Usage**: Example files and Conda environments take up significant space. Clean up disk space by following instructions in the `save-9GB-by-deleting-examples` file in the `/home/anaconda` directory.
2. **Conda Command**: If the Conda command is not working, run:

```

/home/anaconda/anaconda3/bin/conda init
```

3. **Jupyter Notebook Service**: Check the status of the Jupyter Notebook service by running:

```

sudo systemctl status jupyter-notebook
```

4. **Multiple Jupyter Instances**: For multiple instances, provide different port numbers.

Refer to the Conda cheat sheet for a list of commands: [Conda Cheat Sheet](https://docs.conda.io/projects/conda/en/4.6.0/_downloads/52a95608c49671267e40c689e0bc00ca/conda-cheatsheet.pdf)

Inspect the source Packer files of this image at: [DigitalOcean Droplet 1-Clicks GitHub](https://github.com/digitalocean/droplet-1-clicks)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/#creating-an-app-using-the-api)
- [Getting Started After Deploying Jupyter Notebook](https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/#getting-started-after-deploying-jupyter-notebook)
  - [JupyterLab](https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/#jupyterlab)
  - [Jupyter AI](https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/#jupyter-ai)
- [Before You Deploy](https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/#before-you-deploy)
- [Quickly Get Started With Your Jupyter Droplet](https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/#quickly-get-started-with-your-jupyter-droplet)
- [Access your Anaconda Distribution](https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/#access-your-anaconda-distribution)
- [Manually Running the Jupyter Notebook](https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/#manually-running-the-jupyter-notebook)
- [Using Jupyter AI](https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/#using-jupyter-ai)
- [Example 1: Running Stable Diffusion](https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/#example-1-running-stable-diffusion)
- [Example 2: Running DistilBERT Sequence Classification](https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/#example-2-running-distilbert-sequence-classification)
- [Troubleshooting](https://docs.digitalocean.com/products/marketplace/catalog/jupyter-notebook/#troubleshooting)

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