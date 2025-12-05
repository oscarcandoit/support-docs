---
url: "https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-notebooks/"
title: "How to Create Notebooks | DigitalOcean Documentation"
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
- [How-Tos](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/)
- Create Notebooks

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create Notebooks

Validated on 14 Dec 2023 • Last edited on 18 Dec 2024

Notebooks are a web-based Jupyter IDE with shared persistent storage for long-term development and inter-notebook collaboration, backed by accelerated compute.

When creating a new notebook, you can pick from a list of recommended templates and [machine types](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/). You can also select the **All** option to view an expansive list of templates. You can use these runtime tiles or can create your own runtimes.

In the **Select a machine** section, you select the machine type for your new notebook.

![Select a machine](https://docs.digitalocean.com/screenshots/paperspace/gradient/create-machine-notebook.80be463639435e0244c01d31b3d7226609ac7509b38696235cd454e767a3ad61.gif)

You can swap out your current machine for a different machine at any time with Gradient notebooks.

## Selecting a Machine When Creating a Notebook

When creating a new notebook, the **Select a machine** section of the notebook creates a workflow that provides a list of CPU, GPU and IPU-backed machines available for use.

![list of GPU and CPU-backed machines](https://docs.digitalocean.com/screenshots/paperspace/gradient/gpu-and-cpu-machines.f2dece3e069d2a1bdc5cb5d8e9387f464202ea99e822e7f6cd720c6e844ec940.gif)

If a machine is available for use, it is listed under the **Available** heading. If a machine is out of capacity, then no instances available for use.

If your notebook is pending, then it is in queue for the next available free machine. If you need immediate access to a machine, consider upgrading to a paid machine type.

## Creating a Custom Docker Image to Use with Notebooks

To [create a custom notebook](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/create-jupyter-notebook/), you may need to create a new image. It is recommended to use [Docker](https://www.docker.com/) to get the container image from the local machine to Paperspace.

`jupyter` is run on port `8888` and it must allow connections from ip address `0.0.0.0`.

If you are running a `jupyter notebook`, you should include the following flags in the **Command** field:

```
--no-browser --NotebookApp.trust_xheaders=True --NotebookApp.disable_check_xsrf=False --NotebookApp.allow_remote_access=True --NotebookApp.allow_origin='*'
```

If you are running `jupyter lab`, you should run these flags in the **Command** field instead:

```
--no-browser --LabApp.trust_xheaders=True --LabApp.disable_check_xsrf=False --LabApp.allow_remote_access=True --LabApp.allow_origin='*'
```

## Custom Container Reference

The following fields are available in the **Container** section of **Advanced options** when creating a new notebook:

![Advanced options](https://docs.digitalocean.com/screenshots/paperspace/gradient/advanced-options.7fdeda228b09527480e602226c2fbc9491c8242d1535574ecd9f8f89709833dd.png)

| Field | Required | Description |
| --- | --- | --- |
| Container Name | true | Path and tags of image from DockerHub or NVIDIA Container Registry. For example `ufoym/deepo:all-jupyter-py36`. |
| Registry Username | false | Private container registry username. Can be left blank for public images. |
| Registry Password | false | Private container registry password. Can be left blank for public images. Secrets may be used in this field using the substitution syntax `secret:`. |
| Command | false | Must be Jupyter compatible. If left blank, defaults to `jupyter notebook --allow-root --ip=0.0.0.0 --no-browser --NotebookApp.trust_xheaders=True --NotebookApp.disable_check_xsrf=False --NotebookApp.allow_remote_access=True --NotebookApp.allow_origin='*'`. |
| Container User | false | Optional user. Defaults to ‘root’ if left blank. |

Note
When using a container from [NVIDIA](https://catalog.ngc.nvidia.com/), use a username (`$oauthtoken`) and password like an API key when submitting the custom container reference. You can create a NVIDIA API key by following this [API key setup](https://ngc.nvidia.com/setup/api-key). You need to be signed in to create an API key.

In this article...

- [Selecting a Machine When Creating a Notebook](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-notebooks/#selecting-a-machine-when-creating-a-notebook)
- [Creating a Custom Docker Image to Use with Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-notebooks/#creating-a-custom-docker-image-to-use-with-notebooks)
- [Custom Container Reference](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-notebooks/#custom-container-reference)

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