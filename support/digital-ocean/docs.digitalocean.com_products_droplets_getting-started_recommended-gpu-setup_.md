---
url: "https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/"
title: "Recommended Drivers and Software for DigitalOcean Gradient™ AI GPU Droplets | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/droplets.f4877fc574e6b07f8fb9608e252be4160ebecd65569acea11775a046b9370c6f.svg)Droplets](https://docs.digitalocean.com/products/droplets/)
- [Getting Started](https://docs.digitalocean.com/products/droplets/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/droplets/getting-started/quickstart/)
  - [Recommended Droplet Setup](https://docs.digitalocean.com/products/droplets/getting-started/recommended-droplet-setup/)
  - [Recommended GPU Setup](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/)
- [How-Tos](https://docs.digitalocean.com/products/droplets/how-to/)
  - [Create Droplets](https://docs.digitalocean.com/products/droplets/how-to/create/)
  - [Use GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/)
  - [Provide User Data](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/)
  - [Connect with SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/)
  - [Add SSH Keys to Droplets](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/)
  - [Connect with the Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/)
  - [Transfer Files with FileZilla](https://docs.digitalocean.com/products/droplets/how-to/transfer-files/)
  - [Tag Droplets](https://docs.digitalocean.com/products/droplets/how-to/tag/)
  - [Track Performance](https://docs.digitalocean.com/products/droplets/how-to/track-performance/)
  - [Resize Droplets](https://docs.digitalocean.com/products/droplets/how-to/resize/)
  - [Use Autoscale Pools](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/)
  - [Access Metadata](https://docs.digitalocean.com/products/droplets/how-to/access-metadata/)
  - [Rebuild Droplets](https://docs.digitalocean.com/products/droplets/how-to/rebuild/)
  - [Manage the Droplet Agent](https://docs.digitalocean.com/products/droplets/how-to/manage-agent/)
  - [Manage the Kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/)
  - [Recover Access or Data](https://docs.digitalocean.com/products/droplets/how-to/recovery/)
  - [Destroy Droplets](https://docs.digitalocean.com/products/droplets/how-to/destroy/)
- [Reference](https://docs.digitalocean.com/products/droplets/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Droplets)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/)
- [Concepts](https://docs.digitalocean.com/products/droplets/concepts/)
  - [Choosing a Plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/)
  - [Tips on Downsizing Droplets](https://docs.digitalocean.com/products/droplets/concepts/downsizing-considerations/)
  - [Autoscale Pools](https://docs.digitalocean.com/products/droplets/concepts/autoscale-pools/)
  - [Glossary](https://docs.digitalocean.com/glossary/droplets/)
- [Details](https://docs.digitalocean.com/products/droplets/details/)
  - [Features](https://docs.digitalocean.com/products/droplets/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/droplets/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/droplets/details/availability/)
  - [Images](https://docs.digitalocean.com/products/droplets/details/images/)
  - [Limits](https://docs.digitalocean.com/products/droplets/details/limits/)
  - [Image Deprecation Policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/)
  - [Droplet Policies](https://docs.digitalocean.com/products/droplets/details/policies/)
  - [Live Migrations](https://docs.digitalocean.com/products/droplets/details/live-migration/)
  - [CPU Droplet SLA](https://www.digitalocean.com/sla/cpu-droplets)
  - [GPU Droplet SLA](https://www.digitalocean.com/sla/gpu-droplets)
  - [GPU Droplets](https://docs.digitalocean.com/products/gpu-droplets/)
- [Support](https://docs.digitalocean.com/products/droplets/support/)

- [Getting Started](https://docs.digitalocean.com/products/droplets/getting-started/)
- Recommended GPU Setup

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Recommended Drivers and Software for DigitalOcean Gradient™ AI GPU Droplets

Validated on 13 Aug 2025 • Last edited on 25 Aug 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

We strongly recommend creating GPU Droplets using our AI/ML-ready images, which have drivers and software preinstalled and configured to help you get started.

GPU Droplets also work with other Droplet images (stock Linux images, backups, snapshots, and so on) but you need to manually install drivers and other software to use your Droplet’s GPUs.

If you have additional software you want to use across multiple GPU Droplets, one option is to start with our AI/ML-ready image, install any additional software, and then [take a snapshot of the Droplet](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-droplets/). You can then use the snapshot as the base image to create additional GPU Droplets.

## AI/ML-Ready Image

### For AMD GPU Droplets

For GPU Droplets with AMD GPUs, our AI/ML-ready image is based on Ubuntu 24.04 and is configured following the [ROCm quick start setup](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/quick-start.html) including:

- `python3-setuptools`
- `python3-wheel`
- `rocm` version 6.4.0
- `amdgpu-dkms` version 6.12.12
- `linux-generic`

You can choose this image when you create a GPU Droplet from the control panel or specify it by slug name when you create a GPU using the API or `doctl` using the slug `gpu-amd-base`.

### For NVIDIA GPU Droplets

For GPU Droplets with NVIDIA GPUs, our AI/ML-ready image is based on Ubuntu 22.04 and includes:

- `nvidia-container-toolkit=1.17.8-1`
- [`cuda-keyring_1.1-1`](https://developer.nvidia.com/blog/updating-the-cuda-linux-gpg-repository-key/)
- `cuda-drivers-575`
- `cuda-toolkit-12-9`
- `bzip2` (8 GPU Droplets only)
- `MLNX_OFED_LINUX-23.10-4.0.9.1-ubuntu22.04-x86_64` (8 GPU Droplets only)
- `nvidia-fabricmanager-575` (8 GPU Droplets only)

You can choose this image when you create a GPU Droplet from the control panel or specify it by slug name when you create a GPU using the API or `doctl`. For all single GPU Droplets, use `gpu-h100x1-base` (even for single GPU plans using GPUs other than H100s). For 8 GPU Droplets, use `gpu-h100x8-base`.

For manual setup, on Debian-based systems like Ubuntu, you can install the CUDA drivers and toolkit as well as the NVIDIA Container Toolkit with APT. On 8 GPU Droplets, our image installs additional software that requires more configuration, as noted above. We recommend following [NVIDIA’s installation documentation for Fabric Manager](https://docs.nvidia.com/datacenter/tesla/fabric-manager-user-guide/index.html#installation) and [NVIDIA’s documentation on Mellanox OFED](https://docs.nvidia.com/networking/display/mlnxofedv461000/installing+mellanox+ofed).

## Inference-Optimized Image for NVIDIA GPU Droplets

Our [inference-optimized image](https://docs.digitalocean.com/products/droplets/details/features/#gpu-images) is designed for LLM setup and deployment. It is based on Ubuntu 24.04 and includes:

- CUDA 12.9
- NVIDIA driver version 575.51.03
- NVIDIA Fabric Manager (8 GPU Droplets only)
- Docker
- [vLLM](https://github.com/vllm-project/vllm) (`vllm-openai` container v0.9.0)

You can choose this image when you create a GPU Droplet from the control panel.

After you create a GPU Droplet with this image, [SSH into the Droplet](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) as the **root** user and run the included `run_model.sh` script. The script prompts you through the configuration and selection of the models you want to use.

In this article...

- [AI/ML-Ready Image](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/#aiml-ready-image)
  - [For AMD GPU Droplets](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/#for-amd-gpu-droplets)
  - [For NVIDIA GPU Droplets](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/#for-nvidia-gpu-droplets)
- [Inference-Optimized Image for NVIDIA GPU Droplets](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/#inference-optimized)

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

Cookie Preferences