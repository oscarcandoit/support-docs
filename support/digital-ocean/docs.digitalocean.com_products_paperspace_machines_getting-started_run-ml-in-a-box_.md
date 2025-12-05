---
url: "https://docs.digitalocean.com/products/paperspace/machines/getting-started/run-ml-in-a-box/"
title: "Use the ML-in-a-Box Template For Machine Learning Applications | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/machines.4f455a935c3878c20e9d35654c24e34c18f052727b612061b52fbe7c0467d808.svg)Machines](https://docs.digitalocean.com/products/paperspace/machines/)
  - [Getting Started](https://docs.digitalocean.com/products/paperspace/machines/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/paperspace/machines/getting-started/quickstart/)
    - [Use ML-in-a-Box](https://docs.digitalocean.com/products/paperspace/machines/getting-started/run-ml-in-a-box/)
  - [How-Tos](https://docs.digitalocean.com/products/paperspace/machines/how-to/)
    - [Create Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/)
    - [Connect to Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/)
    - [Deactivate Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/deactivate/)
    - [Manage Users](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-users/)
    - [Resize Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/resize/)
    - [Transfer Files](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/)
    - [Use Windows Features](https://docs.digitalocean.com/products/paperspace/machines/how-to/use-windows-features/)
    - [Configure Auto-shutdown](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-auto-shutdown/)
    - [Manage Private Networks](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/)
    - [Manage Public IP Addresses](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/)
    - [Manage Shared Drives](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/)
    - [Manage Snapshots](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/)
    - [Manage Custom Templates](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/)
    - [Manage VPNs](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/)
    - [Configure Desktop Streaming](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-desktop-streaming/)
    - [Manage NVLink](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/)
    - [Manage Hostnames](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-hosts/)
  - [Reference](https://docs.digitalocean.com/products/paperspace/machines/reference/)
    - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
    - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
    - [Core API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/core/)
    - [States and Error Codes](https://docs.digitalocean.com/products/paperspace/machines/reference/states-and-error-codes/)
  - [Concepts](https://docs.digitalocean.com/products/paperspace/machines/concepts/)
    - [Best Practices](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/)
    - [Glossary](https://docs.digitalocean.com/glossary/machines/)
  - [Details](https://docs.digitalocean.com/products/paperspace/machines/details/)
    - [Features](https://docs.digitalocean.com/products/paperspace/machines/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/paperspace/machines/details/availability/)
    - [NVIDIA H100 Reference](https://docs.digitalocean.com/products/paperspace/machines/details/h100/)
    - [Limits](https://docs.digitalocean.com/products/paperspace/machines/details/limits/)
    - [Machine Types](https://docs.digitalocean.com/products/paperspace/machines/details/machine-types/)
  - [Support](https://docs.digitalocean.com/products/paperspace/machines/support/)

- [Machines](https://docs.digitalocean.com/products/paperspace/machines/)
- [Getting Started](https://docs.digitalocean.com/products/paperspace/machines/getting-started/)
- Use ML-in-a-Box

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Use the ML-in-a-Box Template For Machine Learning Applications

Validated on 7 Aug 2024 • Last edited on 23 Jan 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

ML-in-a-Box is a Linux-based machine template with a pre-installed data science stack, including popular tools like PyTorch, TensorFlow, Hugging Face Transformers, Deepspeed, JupyterLab, NumPy, Pandas, XGBoost, and Scikit-learn. It comes with full machine learning support (CUDA, cuDNN, NVIDIA Docker). You can use this template to run machine learning software, develop and train models, or install additional tools as needed.

ML-in-a-Box includes several directory-specific commands located in `/usr/bin`, `/usr/local/bin`, `/home/paperspace/.local/bin`, and `/usr/local/cuda/bin`, allowing you to access and run machine learning software or install additional tools. These directories are already included in your system’s `PATH`, so no manual configuration is needed.

ML-in-a-Box also has Python libraries commonly used in data science, machine learning, and deep learning projects pre-installed.

For more information on ML-in-a-Box, refer to the [ML-in-a-Box GitHub repository](https://github.com/Paperspace/ml-in-a-box).

## Set Up ML-in-a-Box

To use the [ML-in-a-Box](https://github.com/Paperspace/ml-in-a-box) template, you need to choose this template when first [creating your machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#template). In the **Create a new machine** page, under the **Machine** section, under the **OS Template** sub-section, click the drop-down menu, in the search bar, type “ML-in-a-Box”, then select it.

Note

For machines created after 17 January 2024, the ML-in-a-Box template automatically includes a [NCCL](https://docs.nvidia.com/deeplearning/nccl/install-guide/index.html) configuration file to improve performance on hardware like NVIDIA H100s.
On older machines, you can manually add this configuration by creating a `/etc/nccl.conf` file with the following contents:

```text
NCCL_TOPO_FILE=/etc/nccl/topo.xml
NCCL_IB_DISABLE=0
NCCL_IB_CUDA_SUPPORT=1
NCCL_IB_HCA=mlx5
NCCL_CROSS_NIC=0
NCCL_SOCKET_IFNAME=eth0
NCCL_IB_GID_INDEX=1
```

![The OS Template sub-section of the Machines section of the machine creation page with ML-in-the-Box searched.](https://docs.digitalocean.com/screenshots/paperspace/machines/create-a-machine-ml-in-a-box-selected.998b08e49b05428a8466d4e360548a39899063d4666d50231310110c4817d3ae.png)

Afterwards, continue configuring your machine as needed, then click **CREATE MACHINE**.

## Connect to Your Machine

Machines created with ML-in-a-Box only have terminal access, so you need to [connect to your machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/) using SSH. After connecting to your machine, your home directory is set to `/home/paperspace` and the shell is set to `/bin/bash`.

To report any issues with the software, provide feedback, or issue requests, see the [Paperspace Community](https://community.paperspace.com/) or contact [Paperspace support](https://docs.digitalocean.com/products/paperspace/machines/support/).

## Verifying Your GPUs

To verify your GPUs on your machine, run the NVIDIA System Management Interface to display information about the device:

```bash
nvidia-smi
```

This outputs a list of the NVIDIA GPUs on your machine:

```text
+---------------------------------------------------------------------------------------+
| NVIDIA-SMI 535.129.03             Driver Version: 535.129.03   CUDA Version: 12.2     |
|-----------------------------------------+----------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |         Memory-Usage | GPU-Util  Compute M. |
|                                         |                      |               MIG M. |
|=========================================+======================+======================|
|   0  NVIDIA H100 80GB HBM3          On  | 00000000:00:05.0 Off |                    0 |
| N/A   25C    P0              74W / 700W |    155MiB / 81559MiB |      0%      Default |
|                                         |                      |             Disabled |
+-----------------------------------------+----------------------+----------------------+
...
```

### Verifying PyTorch

If you need to verify your PyTorch environment on your machine, start by displaying your machine’s GPU specifications by running `python` on your terminal. Your PyTorch environment is set up properly if `torch.cuda.is_available()` returns `True`.

```sh
Python 3.11.7 (main, Dec  8 2023, 18:56:58) [GCC 11.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import torch
>>> torch.cuda.is_available()
True
>>> torch.cuda.get_device_name(0)
'NVIDIA H100 80GB HBM3'
```

If needed, run `python -m torch.utils.collect_env` for more information on your machine’s environment.

If the PyTorch environment on your machine is not set up properly, you may receive an error indicating that `torch` is not found:

```text
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ModuleNotFoundError: No module named 'torch'
```

If you receive this error, install [PyTorch](https://pytorch.org/).

### Verifying TensorFlow

If you need to verify your TensorFlow environment on your machine, start by displaying your machine’s GPU specifications by running `python` on your terminal.

Your TensorFlow environment is set up properly if `tf.config.list_physical_devices('GPU')` isn’t an empty list and `tf.test.is_built_with_cuda()` returns `True`.

```sh
python
>>> import tensorflow as tf
>>> x = tf.config.list_physical_devices('GPU')
>>> for i in range(len(x)): print(x[i])
PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU')
PhysicalDevice(name='/physical_device:GPU:1', device_type='GPU')
...
>>> tf.test.is_built_with_cuda()
True
```

In this article...

- [Set Up ML-in-a-Box](https://docs.digitalocean.com/products/paperspace/machines/getting-started/run-ml-in-a-box/#set-up-ml-in-a-box)
- [Connect to Your Machine](https://docs.digitalocean.com/products/paperspace/machines/getting-started/run-ml-in-a-box/#connect-to-your-machine)
- [Verifying Your GPUs](https://docs.digitalocean.com/products/paperspace/machines/getting-started/run-ml-in-a-box/#verifying-your-gpus)
  - [Verifying PyTorch](https://docs.digitalocean.com/products/paperspace/machines/getting-started/run-ml-in-a-box/#verifying-pytorch)
  - [Verifying TensorFlow](https://docs.digitalocean.com/products/paperspace/machines/getting-started/run-ml-in-a-box/#verifying-tensorflow)

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