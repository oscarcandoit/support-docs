---
url: "https://docs.digitalocean.com/products/bare-metal-gpus/details/features/"
title: "DigitalOcean Gradient™ AI Bare Metal GPU Features | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/bare-metal-gpus.7498b79d7a8142afb95399794d7f631c490388aa4fb5b30d9021292dca01d125.svg)Bare Metal GPUs](https://docs.digitalocean.com/products/bare-metal-gpus/)
- [How-Tos](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/)
  - [Create Bare Metal GPUs](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/create/)
  - [Mount NFS File Shares](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/mount-nfs-file-shares/)
- [Concepts](https://docs.digitalocean.com/products/bare-metal-gpus/concepts/)
  - [Bare Metal GPUs vs GPU Droplets](https://docs.digitalocean.com/products/bare-metal-gpus/concepts/gpu-product-comparison/)
- [Details](https://docs.digitalocean.com/products/bare-metal-gpus/details/)
  - [Features](https://docs.digitalocean.com/products/bare-metal-gpus/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/bare-metal-gpus/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/bare-metal-gpus/details/availability/)
  - [Legal Agreements](https://www.digitalocean.com/legal/bare-metal-gpu-agreements)
  - [Limits](https://docs.digitalocean.com/products/bare-metal-gpus/details/limits/)
- [Support](https://docs.digitalocean.com/products/bare-metal-gpus/support/)
  - [Contact Form](https://docs.digitalocean.com/products/bare-metal-gpus/support/contact/)

- [Details](https://docs.digitalocean.com/products/bare-metal-gpus/details/)
- Features

[Give Feedback](https://ideas.digitalocean.com/documentation)

# DigitalOcean Gradient™ AI Bare Metal GPU Features

Validated on 26 Jun 2025 • Last edited on 14 Nov 2025

DigitalOcean Gradient™ AI Bare Metal GPUs are dedicated, single-tenant servers with 8 GPUs of various models that can operate standalone or in multi-node clusters.

## Bare Metal GPUs vs GPU Droplets

Bare metal GPUs and [GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/) both provide compute resources tailored to AI/ML workloads, but they’re each suited for different use cases.

![](https://docs.digitalocean.com/images/icons/bare-metal-gpus.svg)

Bare Metal GPUs vs GPU Droplets

Learn the difference between bare metal GPUs and GPU Droplets to choose the product that suits your use case.

## Hardware

Bare metal GPUs have the following hardware specifications.

### AMD MI300X GPUs

| Name | Description | Quantity |
| --- | --- | --- |
| GPU module | AMD MI300X 8-GPU OAM 192GB 750W GPUs Assembly | 8 |
| CPU | Intel Xeon Platinum 8568Y+ | 2 |
| Memory | 64GB RDIMM, 5600 MT/s, Dual Rank | 32 |
| NVMe SSD storage | 7.68 TB NVMe | 8 |
| Network card | Nvidia ConnectX-7 Single Port Infiniband/Ethernet VPI 400 GbE/NDR OSFP | 8 |
| Network card | Broadcom Thor 2x 100GE QSFP28 | 2 |

### H100 Bare Metal GPUs

| Name | Description | Quantity |
| --- | --- | --- |
| GPU module | NVIDIA HGX H100 80GB 700W SXM5 GPUs, fully interconnected with NVIDIA NVLink technology | 8 |
| CPU | Intel Xeon Platinum 8468 | 2 |
| Memory | 64GB | 32 |
| NVMe SSD storage | 7TB 2.5-inch NVMe SSD drives | 8 |
| Network card | Mellanox Network Adapter; Mellanox Technologies MT2910 Family \[ConnectX-7\]; link speed 400 Gbps | 8 |
| Network card | Mellanox Technologies MT2892 Family \[ConnectX-6 Dx\] ; link speed 100 Gbps | 4 |

### H200 Bare Metal GPUs

| Name | Description | Quantity |
| --- | --- | --- |
| GPU module | NVIDIA HGX H200 141GB 700W SXM5 GPUs, fully interconnected with NVIDIA NVLink technology | 8 |
| CPU | Intel Xeon Platinum 8592+ | 2 |
| Memory | 64GB DDR5-5600MHz | 32 |
| NVMe SSD storage | 7.68TB NVMe | 8 |
| Network card | Mellanox Network Adapter; Mellanox Technologies MT2910 Family \[ConnectX-7\]; link speed 400 Gbps | 8 |
| Network card | Mellanox Technologies MT2892 Family \[ConnectX-6Dx\] ; link speed 100 Gbps | 4 |

## Networking

Bare metal GPUs have the following network configuration:

| Network | Details |
| --- | --- |
| Public network | 1 public IP address (1:1 NAT) |
| Private network | 1 private IP address, layer 2 isolation |
| Public network bandwidth | North/South internet access up to 40 Gbps |
| Private network bandwidth | East/West (VPC/private network) up to 400 Gbps |
| GPU networking | 1 IPv6 auto-assigned for GPU RDMA (ConnectX-7 network) |
| GPU interconnect speed | 3.2 Tbps |

## Software

Bare metal GPUs come preconfigured with one of the following software options:

| Software | AMD | NVIDIA Option 1 | NVIDIA Option 2 |
| --- | --- | --- | --- |
| Operating system | Ubuntu 22.04 | Ubuntu 22.04 | Ubuntu 24.04 |
| SSH remote access | Preloaded SSH keys | Preloaded SSH keys | Preloaded SSH keys |
| Driver versions | GPU 6.4.6<br>ROCm 6.4.1 | GPU 550.90.07<br> CUDA 12.4 | GPU 565.57.01<br>CUDA 12.8 |

You can install any driver versions, but we recommend using our driver versions for stability. Support for untested driver versions may be limited.

In this article...

- [Bare Metal GPUs vs GPU Droplets](https://docs.digitalocean.com/products/bare-metal-gpus/details/features/#bare-metal-gpus-vs-gpu-droplets)
- [Hardware](https://docs.digitalocean.com/products/bare-metal-gpus/details/features/#hardware)
  - [AMD MI300X GPUs](https://docs.digitalocean.com/products/bare-metal-gpus/details/features/#amd-mi300x-gpus)
  - [H100 Bare Metal GPUs](https://docs.digitalocean.com/products/bare-metal-gpus/details/features/#h100-bare-metal-gpus)
  - [H200 Bare Metal GPUs](https://docs.digitalocean.com/products/bare-metal-gpus/details/features/#h200-bare-metal-gpus)
- [Networking](https://docs.digitalocean.com/products/bare-metal-gpus/details/features/#networking)
- [Software](https://docs.digitalocean.com/products/bare-metal-gpus/details/features/#software)

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