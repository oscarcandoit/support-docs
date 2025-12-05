---
url: "https://docs.digitalocean.com/products/droplets/how-to/gpu/"
title: "How to Create and Configure DigitalOcean Gradient™ AI GPU Droplets | DigitalOcean Documentation"
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
    - [Create GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/create/)
    - [Use the Scratch Disk](https://docs.digitalocean.com/products/droplets/how-to/gpu/use-scratch-disk/)
    - [Enable GPU Metrics](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-metrics/)
    - [Enable Jumbo Frames](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-jumbo-frames/)
    - [Use Container Tools](https://www.digitalocean.com/community/tutorials/how-to-use-nvidia-container-tools-with-gpu-droplets)
    - [Configure Multi-Node Setups](https://docs.digitalocean.com/products/droplets/how-to/gpu/configure-multi-node/)
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

- [How-Tos](https://docs.digitalocean.com/products/droplets/how-to/)
- Use GPU Droplets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create and Configure DigitalOcean Gradient™ AI GPU Droplets

Validated on 26 Sep 2024 • Last edited on 25 Aug 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

## How to Use GPU Droplets

In general, you can manage GPU Droplets like non-GPU Droplets, but some features and requirements are specific to GPU Droplets:

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Create DigitalOcean Gradient™ AI GPU Droplets

Create GPU Droplets and choose the image, plan, datacenter, authentication method, and additional options.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Use the Scratch Disk on DigitalOcean Gradient™ AI GPU Droplets

Set up automatic mounting for the scratch disk on GPU Droplets.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

Enable GPU Metrics

Install the NVIDIA Data Center GPU Manager (DCGM) and DCGM Exporter to enable health monitoring, diagnostics, and process statistics for NVIDIA GPUs on GPU Droplets.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Enable Jumbo Frames on DigitalOcean Gradient™ AI GPU Droplets

Enable jumbo frames, which are data packets with larger payloads than standard, on GPU Droplets.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Configure Multi-Node GPU Droplets

Configure multi-node GPU Droplets, including some manual configuration for NIC addressing.

![](https://docs.digitalocean.com/images/icons/marketplace.svg)

DigitalOcean Gradient™ AI 1-Click Models

1-Click Models let you deploy third-party generative AI models on [DigitalOcean Gradient™ AI GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/) with no additional setup or configuration.

![](https://docs.digitalocean.com/images/icons/community.svg)

How to Use NVIDIA Container Tools and Miniconda with GPU Droplets

This Community tutorial explains how to set up the NVIDIA container toolkit, run Docker for GPU workloads, and install Miniconda to manage Python environments on GPU Droplets.

digitalocean.com/community

## GPU Droplets vs Bare Metal GPUs

[DigitalOcean Gradient™ AI Bare Metal GPUs](https://docs.digitalocean.com/products/bare-metal-gpus/) and GPU Droplets both provide GPU-based compute resources tailored to AI/ML workloads, but they’re each suited for different use cases. Learn more about the difference between bare metal GPUs and GPU Droplets:

![](https://docs.digitalocean.com/images/icons/bare-metal-gpus.svg)

Bare Metal GPUs vs GPU Droplets

Learn the difference between bare metal GPUs and GPU Droplets to choose the product that suits your use case.

In this article...

- [How to Use GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/#how-to-use-gpu-droplets)
- [GPU Droplets vs Bare Metal GPUs](https://docs.digitalocean.com/products/droplets/how-to/gpu/#gpu-droplets-vs-bare-metal-gpus)

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