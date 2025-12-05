---
url: "https://docs.digitalocean.com/products/paperspace/notebooks/concepts/notebook-templates/"
title: "Notebook Templates | DigitalOcean Documentation"
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
- [Concepts](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/)
- Notebook Templates

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Notebook Templates

Validated on 14 Dec 2023 • Last edited on 18 Dec 2024

Notebooks are a web-based Jupyter IDE with shared persistent storage for long-term development and inter-notebook collaboration, backed by accelerated compute.

Templates are pre-configured notebooks used for machine learning (ML) libraries and repositories. Using templates, you can setup notebook environments that allow you to specify:

- The image used for spinning up your container
- The Git repository you want to upload to your filesystem
- The startup scripts for pulling in your environment variables

## Default Template Details

To explore a particular template, expand the **Advanced Options** section while creating a notebook.

![Advanced options](https://docs.digitalocean.com/screenshots/paperspace/gradient/NotebookAdvancedOptions.57e03a79429976c9bc6125e5ddcde39817cc83210d3c6e1bf9f8372615e32ee6.png)

The `Workspace URL` controls which files load into the notebook file manager, and the `Container Name` controls which container image is used to build the notebook.

## List of Base Templates

Paperspace maintains a number of templates that act as tiles when creating a new notebook. These templates assist in working with pre-loaded notebook files and dependencies.

Here is a list of recommended templates that Paperspace maintains:

| Name | Description | Container Name | Container Registry | Workspace URL |
| --- | --- | --- | --- | --- |
| _**PyTorch 1.12**_ | PyTorch release (1.12) with GPU support. | `paperspace/gradient-base:pt112-tf29-jax0314-py39-20220803` | [DockerHub](https://hub.docker.com/r/paperspace/gradient-base) | [https://github.com/gradient-ai/PyTorch](https://github.com/gradient-ai/PyTorch) |
| _**TensorFlow 2.9.1**_ | TensorFlow 2 with GPU support. | `paperspace/gradient-base:pt112-tf29-jax0314-py39-20220803` | [DockerHub](https://hub.docker.com/r/paperspace/gradient-base) | [https://github.com/gradient-ai/TensorFlow](https://github.com/gradient-ai/TensorFlow) |
| _**Paperspace + Fast.ai**_ | _**Fast.ai**_ Paperspace’s Fast.ai template is built for getting up and running with the enormously popular [Fast.ai online MOOC](http://www.fast.ai/). | `paperspace/fastai:2.0-fastbook-2022-06-29` | [DockerHub](https://hub.docker.com/r/paperspace/fastai) | [https://github.com/fastai/fastbook.git](https://github.com/fastai/fastbook.git) |
| _**NVIDIA RAPIDS**_ | NVIDIA’s library to execute end-to-end data science and analytics pipelines on GPU. | `rapidsai/rapidsai:22.06-cuda11.0-runtime-ubuntu18.04-py3.8` | [NVIDIA](https://ngc.nvidia.com/catalog/containers/nvidia:rapidsai:rapidsai) | [https://github.com/gradient-ai/RAPIDS.git](https://github.com/gradient-ai/RAPIDS.git) |
| _**DALL-E Mini**_ | An impressive image generation model that runs on JAX. | `paperspace/gradient-base:pt112-tf29-jax0314-py39-20220803` | [DockerHub](https://hub.docker.com/r/paperspace/gradient-base) | [`https://github.com/huggingface/transformers.git`](https://github.com/gradient-ai/dalle-mini/blob/main/DALL-E-Mini-inference-pipeline.ipynb) |
| _**Stable Diffusion**_ | An impressive text-to-image generation model. | `paperspace/gradient-base:pt112-tf29-jax0314-py39-20220803` | [DockerHub](https://hub.docker.com/r/paperspace/gradient-base) | [https://github.com/gradient-ai/stable-diffusion](https://github.com/gradient-ai/stable-diffusion) |
| _**Start from Scratch**_ | Include libraries from machine learning from the PyTorch, TensorFlow and JAX communities. | `paperspace/gradient-base:tf29-pt112-py39-2022-06-29` | [DockerHub](https://hub.docker.com/r/paperspace/gradient-base) | N/A |
| _**Hugging Face Transformers + NLP**_ | A state-of-the-art NLP library from Hugging Face | `paperspace/gradient-base:pt112-tf29-jax0314-py39-20220803` | [DockerHub](https://hub.docker.com/r/paperspace/gradient-base) | [https://github.com/huggingface/transformers.git](https://github.com/huggingface/transformers.git) |
| _**ClipIt-PixelDraw**_ | A creative library for generating pixel art from plain text prompts. | `paperspace/clip-pixeldraw:jupyter` | [DockerHub](https://hub.docker.com/r/paperspace/clip-pixeldraw) | [https://github.com/gradient-ai/ClipIt-PixelDraw](https://github.com/gradient-ai/ClipIt-PixelDraw) |

### Previous Template Versions

Here is a list of previous template versions which you can run by copying the desired template’s values for `Container Name` and `Workspace URL` and then pasting these values in the **Advanced Options** section when creating a notebook.

Note
Templates are frequently added and updated.

| Name | Description | Container Name | Container Registry | Workspace URL |
| --- | --- | --- | --- | --- |
| _**Python 3.9**_ | Python 3.9 with GPU support. | `paperspace/python-runtime:py39-2022-07-06` | [DockerHub](https://hub.docker.com/r/paperspace/python-runtime) | N/A |
| _**PyTorch 1.11**_ | Latest PyTorch release (1.8) with GPU support. | `paperspace/nb-pytorch:22.02-py3` | [DockerHub](https://hub.docker.com/r/pytorch/pytorch) | [https://github.com/gradient-ai/PyTorch](https://github.com/gradient-ai/PyTorch) |
| _**TensorFlow 2.7.0**_ | TensorFlow 2 with GPU support. | `paperspace/nb-tensorflow:22.02-tf2-py3` | [DockerHub](https://hub.docker.com/r/tensorflow/tensorflow/) | [https://github.com/gradient-ai/TensorFlow](https://github.com/gradient-ai/TensorFlow) |
| _**Paperspace + Fast.ai**_ | _**Fast.ai**_ Paperspace’s Fast.ai template is built for getting up and running with the enormously popular [Fast.ai online MOOC](http://www.fast.ai/). | `paperspace/fastai:2.0-fastbook-2022-05-09-rc3` | [GitHub](https://github.com/Paperspace/fastai-docker) | [https://github.com/fastai/fastbook.git](https://github.com/fastai/fastbook.git) |
| _**Hugging Face Transformers**_ | A state-of-the-art NLP library from Hugging Face | `paperspace/nb-transformers:4.17.0` | [DockerHub](https://hub.docker.com/r/paperspace/transformers-gpu) | [https://github.com/huggingface/transformers.git](https://github.com/huggingface/transformers.git) |
| _**Analytics Vidhya CV**_ | Analytics Vidhya container | `jalfaizy/cv_docker:latest` | [GitHub](https://github.com/ufoym/deepo) | N/A |
| _**TensorFlow (1.14 GPU)**_ | Official docker images for TensorFlow version 1 | `paperspace/dl-containers:tensorflow1140-py36-cu100-cdnn7-jupyter` | [DockerHub](https://hub.docker.com/r/tensorflow/tensorflow/) | N/A |
| _**JupyterLab Data Science Stack**_ | Jupyter Notebook Data Science Stack | `jupyter/datascience-notebook` | [DockerHub](https://hub.docker.com/r/jupyter/datascience-notebook/) | N/A |
| _**JupyterLab Data R Stack**_ | Jupyter Notebook R Stack | `jupyter/r-notebook` | [DockerHub](https://hub.docker.com/r/jupyter/r-notebook/) | [https://github.com/gradient-ai/R.git](https://github.com/gradient-ai/R.git) |

In this article...

- [Default Template Details](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/notebook-templates/#default-template-details)
- [List of Base Templates](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/notebook-templates/#list-of-base-templates)
  - [Previous Template Versions](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/notebook-templates/#previous-template-versions)

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