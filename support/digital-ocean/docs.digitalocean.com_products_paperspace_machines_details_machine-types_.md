---
url: "https://docs.digitalocean.com/products/paperspace/machines/details/machine-types/"
title: "Machine Types | DigitalOcean Documentation"
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
- [Details](https://docs.digitalocean.com/products/paperspace/machines/details/)
- Machine Types

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Machine Types

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

## Hardware Specs

### CPU Machines

These machines are Intel CPU machines with 50 GB SSD by default. You can [resize the machine’s storage](https://docs.digitalocean.com/products/paperspace/machines/how-to/resize/) up to 2 TB.

| Name | vCPUs | RAM (GB) | Operating System |
| --- | --- | --- | --- |
| **C1** | 1 | 0.5 | Linux |
| **C3** | 2 | 2 | Linux |
| **C4** | 2 | 4 | Linux |
| **C5** | 4 | 8 | Linux |
| **C6** | 8 | 16 | Linux |
| **C7** | 12 | 30 | Linux |
| **C8** | 16 | 60 | Linux |
| **C9** | 24 | 120 | Linux |
| **C10** | 32 | 244 | Linux |

Note
As of 1 July 2024, Windows-based templates are retired and unavailable to new Paperspace users. If you joined Paperspace prior to this date, you can still start, manage, and create Windows-based template machines.
Architecture

Gen 1 (Introduced in 2017):

- Intel Xeon E5-2620 v4
- Base processor frequency of 2.10 GHz
- Max turbo frequency of 2.50 GHz

Gen 2 (Introduced January 2021):

- Intel Xeon Gold 6226R
- Base processor frequency of 2.90 GHz
- Max turbo frequency of 3.90 GHz

### GPU Machines

These machines are NVIDIA GPU machines with 50 GB SSD by default. You can [resize the machine storage](https://docs.digitalocean.com/products/paperspace/machines/how-to/resize/) up to 2 TB.

| Name | GPU (GB) | vCPUs | CPU RAM (GB) | Operating System |
| --- | --- | --- | --- | --- |
| **GPU+ (M4000)** | 8 | 8 | 30 | Linux |
| **P4000** | 8 | 8 | 30 | Linux |
| **P5000** | 16 | 8 | 30 | Linux |
| **P6000** | 24 | 8 | 30 | Linux |
| **RTX4000** | 8 | 8 | 30 | Linux |
| **RTX5000** | 16 | 8 | 30 | Linux |
| **A4000** | 16 | 8 | 45 | Linux |
| **A5000** | 24 | 8 | 45 | Linux |
| **A6000** | 48 | 8 | 45 | Linux |
| **V100** | 16 | 8 | 30 | Linux |
| **V100-32G** | 32 | 8 | 30 | Linux |
| **A100** | 40 | 12 | 90 | Linux |
| **A100-80G** | 80 | 12 | 90 | Linux |
| **H100** | 80 | 20 | 250 | Linux |

Architecture

GPU+ (Maxwell M4000), Pascal P5000, P5000, P6000, and Volta V100 16 GB:

- Intel Xeon E5-2623 v4
- Base processor frequency of 2.60 GHz
- Max turbo frequency of 3.20 GHz

RTX 4000, RTX 5000, RTX 6000, and Volta V100 32 GB:

- Intel Xeon Silver 4215R
- Base processor frequency of 3.20 GHz
- Max turbo frequency of 4.0 GHz

Ampere A4000, A5000, and A6000:

- Intel Xeon Gold 5315Y
- Base processor frequency of 3.20 GHz
- Max turbo frequency of 3.60 GHz

Ampere A100:

- Intel Xeon Gold 6342
- Base processor frequency of 2.80 GHz
- Max turbo frequency of 3.50 GHz

[Hopper H100](https://docs.digitalocean.com/products/paperspace/machines/details/h100/):

- Intel Xeon Sapphire Rapids 8458P
- Base processor frequency of 2.70 GHz
- Max turbo frequency of 3.80 GHz

The following table displays the NVIDIA H100 hardware specs as a single chip or eight chips.

| Name | GPU Memory (GB) | vCPUs | CPU RAM (GB) | NVLink Support | GPU Interconnect Speeds |
| --- | --- | --- | --- | --- | --- |
| **NVIDIA H100x1** | 80 GB | 20 | 250 GB | No |  |
| **NVIDIA H100x8** | 640 GB | 128 | 2048 GB | Yes | 3.2 Tb/s |

### Multi-GPU Machines

These machines are multi-GPU variants of NVIDIA GPU machines with up to 8 GPUs. V100-32Gx2, V100-32Gx4, A100-80Gx8, and NVIDIA H100x8 offer NVLink support.

| Machine | GPUs | Operating System |
| --- | --- | --- |
| **GPU+x** | 2 | Linux |
| **GPU+x** | 4 | Linux |
| **P4000** | 2 | Linux |
| **P4000** | 4 | Linux |
| **P5000** | 2 | Linux |
| **P5000** | 4 | Linux |
| **P6000** | 2 | Linux |
| **P6000** | 4 | Linux |
| **RTX4000** | 2 | Linux |
| **RTX4000** | 4 | Linux |
| **RTX5000** | 2 | Linux |
| **RTX5000** | 4 | Linux |
| **V100-32G** | 2 | Linux |
| **V100-32G** | 4 | Linux |
| **A4000** | 2 | Linux |
| **A4000** | 4 | Linux |
| **A5000** | 2 | Linux |
| **A5000** | 4 | Linux |
| **A6000** | 2 | Linux |
| **A6000** | 4 | Linux |
| **A100** | 8 | Linux |
| **A100-80G** | 8 | Linux |
| **H100** | 8 | Linux |

## Performance Specs

| Name | Generation | CUDA Cores | GPU Memory | Memory Bandwidth | Performance (TFLOPS) | Performance with Tensor Core (TFLOPS) | vCPUs | CPU RAM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **GPU+** | Maxwell | 1,664 | 8 GB | 192 GB/s | 2.6 |  | 8 | 30 |
| **P4000** | Pascal | 1,792 | 8 GB | 243 GB/s | 5.3 |  | 8 | 30 |
| **P5000** | Pascal | 2,560 | 16 GB | 288 GB/s | 9.0 |  | 8 | 30 |
| **P6000** | Pascal | 3,840 | 24 GB | 432 GB/s | 12.0 |  | 8 | 30 |
| **V100** | Volta | 5,120 | 16 GB | 900 GB/s | 14.0 | 112 (FP16) | 8 | 30 |
| **V100x32** | Volta | 5,120 | 32 GB | 900 GB/s | 15.7 | 125 (FP16) | 8 | 30 |
| **RTX4000** | Turing | 2,304 | 8 GB | 416 GB/s | 7.1 | 57 (FP32) | 8 | 30 |
| **RTX5000** | Turing | 3,072 | 16 GB | 448 GB/s | 11.2 | 89 (FP32) | 8 | 30 |
| **A4000** | Ampere | 6,144 | 16 GB | 448 GB/s | 19.2 | 153 (FP16) | 8 | 45 |
| **A5000** | Ampere | 8,192 | 24 GB | 768 GB/s | 27.8 | 222 (FP16) | 8 | 45 |
| **A6000** | Ampere | 10,752 | 48 GB | 768 GB/s | 38.7 | 309 (FP16) | 8 | 45 |
| **A100** | Ampere | 6,912 | 40 GB HBM2 | 1,555 GB/s | 19.5 | 156 / 312 (FP32/16) | 12 | 90 |
| **A100-80G** | Ampere | 6,912 | 80 GB HBM2 | 1,555 GB/s | 19.5 | 312 / 624 (FP32/16) | 12 | 90 |
| **H100** | Hopper | 16,896 | 80 GB HBM3 | 3,350 GB/s | 67.0 | 989 (TF32)<br>1979 (BFLOAT16/FP16)<br>3,958 (FP8/INT8) | 20 | 250 |

The table below displays the NVIDIA H100 performance specs, with the A100-80G included for comparison.

| Name | Generation | Type | FP32 CUDA Cores | GPU Memory | Memory Bandwidth | FP64 Tensor Core or FP32 | TF32 Tensor Core | BFLOAT16 or FP16 Tensor Core | FP8 Tensor Core or INT8 Tensor Core |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **NVIDIA H100x1** [1](https://docs.digitalocean.com/products/paperspace/machines/details/machine-types/#fn:1) | Hopper | SXM5 | 16,896 | 80 GB HBM3 | 3.35 TB/s | 67 TFLOPS | 989 TFLOPS | 1979 TFLOPS | 3958 TFLOPS/TOPS |
| **NVIDIA A100-80Gx1** | Ampere | SXM4 | 6,912 | 80 GB HBM2 | 1.555 TB/s | 19.5 TFLOPS | 312 TFLOPS | 624 TFLOPS | None / 1248 TOPS |

* * *

1. TF32, BFLOAT16, FP16, FP8, and INT8 data types are sparse, as the data contains matrices with mostly zeros. NVIDIA H100 has a [Tensor Core GPU data sheet](https://resources.nvidia.com/en-us-tensor-core/nvidia-tensor-core-gpu-datasheet) that outlines these different data specifications. [↩︎](https://docs.digitalocean.com/products/paperspace/machines/details/machine-types/#fnref:1)


In this article...

- [Hardware Specs](https://docs.digitalocean.com/products/paperspace/machines/details/machine-types/#hardware-specs)
  - [CPU Machines](https://docs.digitalocean.com/products/paperspace/machines/details/machine-types/#cpu-machines)
  - [GPU Machines](https://docs.digitalocean.com/products/paperspace/machines/details/machine-types/#gpu-machines)
  - [Multi-GPU Machines](https://docs.digitalocean.com/products/paperspace/machines/details/machine-types/#multi-gpu-machines)
- [Performance Specs](https://docs.digitalocean.com/products/paperspace/machines/details/machine-types/#performance-specs)

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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)