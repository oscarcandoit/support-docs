---
url: "https://docs.digitalocean.com/products/droplets/details/features/"
title: "Droplet Features | DigitalOcean Documentation"
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

- [Details](https://docs.digitalocean.com/products/droplets/details/)
- Features

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Droplet Features

Validated on 20 Nov 2025 • Last edited on 20 Nov 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

## Droplet Plans

The Droplet plan you choose determines the amount of resources (like CPU, RAM, disk storage, and network bandwidth) allocated to your Droplet. You can choose [shared or dedicated CPUs](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#shared-vs-dedicated).

### CPU Droplets

We offer the following CPU Droplet plan types:

| Droplet Plan | CPU | vCPUs | Memory |
| --- | --- | --- | --- |
| _Basic_ | Shared | 1 - 8 | 1 - 32 GB RAM |
| _General Purpose_ | Dedicated | 2 - 48 | 8 - 240 GB RAM<br>4 GB RAM / vCPU |
| _CPU-Optimized_ | Dedicated | 2 - 48 | 4 - 120 GB<br>2 GB RAM / vCPU |
| _Memory-Optimized_ | Dedicated | 2 - 32 | 16 - 384 GB RAM<br>8 GB RAM / vCPU |
| _Storage-Optimized_ | Dedicated | 2 - 32 | 16 - 384 GB RAM<br>8 GB RAM / vCPU<br>146 - 225 GB SSD / vCPU |
|  |  |  |  |

CPU Droplets can have Regular CPUs or Premium CPUs. You can choose between Intel and AMD for Premium CPUs. Droplets with Premium CPUs are guaranteed to use one of the latest two generations of CPUs we have. They also use NVMe SSDs and have higher network throughput speed.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

Choosing the Right CPU Droplet Plan

In-depth comparisons of available CPU Droplet plans, including hardware and software, an explanation of shared CPU and dedicated CPU plans, and how to make a data-driven decision on which plan is best for your use case.

### GPU Droplets

We offer self-serve GPU Droplets with the following hardware configurations:

| AMD GPU | Slug | GPU Memory | Droplet Memory | Droplet vCPUs | Boot Disk (NVMe) | Scratch Disk | Transfer Allowance |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MI300X | `gpu-mi300x1-192gb` | 192 GB | 240 GiB | 20 | 720 GiB | 5 TiB | 15,000 GiB |
| MI300X (8x) | `gpu-mi300x8-1536gb` | 1,536 GB | 1,920 GiB | 160 | 2,046 GiB | 40 TiB | 60,000 GiB |

| NVIDIA GPU | Slug | GPU Memory | Droplet Memory | Droplet vCPUs | Boot Disk (NVMe) | Scratch Disk | Transfer Allowance |
| --- | --- | --- | --- | --- | --- | --- | --- |
| H100 | `gpu-h100x1-80gb` | 80 GB | 240 GiB | 20 | 720 GiB | 5 TiB | 15 TB |
| H100 (8x) | `gpu-h100x8-640gb` | 640 GB | 1,920 GiB | 160 | 2,046 GiB | 40 TiB | 60 TB |
| L40s | `gpu-l40sx1-48gb` | 48 GB | 64 GiB | 8 | 500 GiB | None | 10 TB |
| RTX 4000 | `gpu-4000adax1-20gb` | 20 GB | 32 GiB | 8 | 500 GiB | None | 10 TB |
| RTX 6000 | `gpu-6000adax1-48gb` | 48 GB | 64 GiB | 8 | 500 GiB | None | 10 TB |
| H200 | `gpu-h200x1-141gb` | 141 GB | 240 GiB | 24 | 720 GiB | 5 TiB | 15 TB |
| H200 (8x) | `gpu-h200x8-1128gb` | 1,128 GB | 1,920 GiB | 192 | 2,046 GiB | 40 TiB | 60 TB |

All GPU Droplets have a maximum bandwidth of 10 Gbps public and 25 Gbps private.

Like CPU Droplets, all GPU Droplets have a _boot disk_, which is a local, persistent disk on the Droplet to store data for software like the operating system and ML frameworks. Additionally, some GPU Droplets have a _scratch disk_, a local, non-persistent disk to store data for staging purposes, like inference and training. Non-GPU Droplets do not have a scratch disk.

### Contract-only GPU Droplets

The following GPU Droplet configurations are available by contract only. [Contact sales](https://www.digitalocean.com/company/contact/sales) for more information:

#### Single-node

| AMD GPU | Slug | GPU Memory | Droplet Memory | Droplet vCPUs | Boot Disk (NVMe) | Scratch Disk | Transfer Allowance |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MI300X | `gpu-mi300x1-192gb-contracted` | 192 GB | 240 GiB | 20 | 720 GiB | 5 TiB | 15,000 GiB |
| MI300X (8x) | `gpu-mi300x8-1536gb-contracted` | 1,536 GB | 1,920 GiB | 160 | 2,046 GiB | 40 TiB | 60,000 GiB |
| MI325X | `gpu-mi325x1-256gb-contracted` | 256 GB | 164 GiB | 20 | 720 GiB | 5 TiB | 15,000 GiB |
| MI325X (8x) | `gpu-mi325x8-2048gb-contracted` | 2,048 GB | 1,310 GiB | 160 | 2,046 GiB | 40 TiB | 60,000 GiB |

| NVIDIA GPU | Slug | GPU Memory | Droplet Memory | Droplet vCPUs | Boot Disk (NVMe) | Scratch Disk | Transfer Allowance |
| --- | --- | --- | --- | --- | --- | --- | --- |
| H100 (8x) | `gpu-h100x8-640gb-contracted` | 640 GB | 1,920 GiB | 160 | 2,046 GiB | 40 TiB | 60 TB |
| H200 (8x) | `gpu-h200x8-1128gb-contracted` | 1,128 GB | 1,920 GiB | 192 | 2,046 GiB | 40 TiB | 60 TB |

#### Multi-node

| AMD GPU | Slug | GPU Memory | Droplet Memory | Droplet vCPUs | Boot Disk (NVMe) | Scratch Disk | Transfer Allowance |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MI300X (8x) | `gpu-mi300x8-1536gb-fabric-contracted` | 1,536 GB | 1,920 GiB | 160 | 2,046 GiB | 40 TiB | 60,000 GiB |
| MI325X (8x) | `gpu-mi325x8-2048gb-fabric-contracted` | 2,048 GB | 1,310 GiB | 160 | 720 GiB | 40 TiB | 60,000 GiB |

| NVIDIA GPU | Slug | GPU Memory | Droplet Memory | Droplet vCPUs | Boot Disk (NVMe) | Scratch Disk | Transfer Allowance |
| --- | --- | --- | --- | --- | --- | --- | --- |
| H100 (8x) | `gpu-h100x8-640gb-contracted` | 640 GB | 1,920 GiB | 160 | 2,046 GiB | 40 TiB | 60 TB |
| H200 (8x) | `gpu-h200x8-1128gb-fabric-contracted` | 1,128 GB | 1,920 GiB | 192 | 2,046 GiB | 40 TiB | 60 TB |

All GPU Droplets have a maximum bandwidth of 10 Gbps public and 25 Gbps private.

Like CPU Droplets, all GPU Droplets have a _boot disk_, which is a local, persistent disk on the Droplet to store data for software like the operating system and ML frameworks. Additionally, some GPU Droplets have a _scratch disk_, a local, non-persistent disk to store data for staging purposes, like inference and training. Non-GPU Droplets do not have a scratch disk.

## Images

### Linux Images

We offer a variety of Linux images you can use to deploy Droplets. You can select these images when you create a Droplet from the control panel or use the image IDs or slugs in API requests and CLI commands to create Droplets.

You can view the [list of availabile Linux images](https://docs.digitalocean.com/products/droplets/details/images/) for the current distributions and versions we offer as well as the slug and image ID of each image. You can also retrieve this list yourself with [the API’s `/v2/images` endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Images/operation/images_list) or with [`doctl compute image list-distribution --public`](https://docs.digitalocean.com/reference/doctl/reference/compute/image/list-distribution/).

### AI/ML-Ready Images

We provide AI/ML-ready images for AMD and NVIDIA GPU Droplets which have the necessary drivers and software preinstalled to use the GPUs.

Learn more about [AI/ML-ready images](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/#aiml-ready-image).

### Inference-Optimized Image

Our inference-optimized image for NVIDIA GPU Droplets is built for LLM setup and deployment. It includes Docker and vLLM, and has built-in support for:

- Hugging Face model downloads
- Multi-model (one, two, or four) concurrency: run one, two, or four models with customizable tensor parallelism settings to optimize hardware utilization
- Speculative decoding, including the use of draft models
- Special handling for FP8 quantization for efficient, low-precision inference
- Prompt caching

It supports the following models:

| GPU and model configuration | Supported models |
| --- | --- |
| H100x8<br>Single model | - `meta-llama/Llama-3.1-8B-Instruct`<br>- `meta-llama/Llama-3.3-70B-Instruct`<br>- `meta-llama/Llama-4-Scout-17B-16E-Instruct`<br>- `deepseek-ai/DeepSeek-R1-Distill-Llama-70B`<br>- Any custom model available on Hugging Face |
| H100x8<br>Two concurrent models | - `meta-llama/Llama-3.1-8B-Instruct`<br>- `meta-llama/Llama-3.3-70B-Instruct`<br>- `deepseek-ai/DeepSeek-R1-Distill-Llama-70B` |
| H100x8<br>Four concurrent models | - `meta-llama/Llama-3.1-8B-Instruct`<br>- `meta-llama/Llama-3.3-70B-Instruct`<br>- `deepseek-ai/DeepSeek-R1-Distill-Llama-70B`<br>- `meta-llama/Llama-3.3-70B-Instruct-FP8-Speculative-Decoding` |
| H100x1 | - `meta-llama/Llama-3.1-8B`<br>- `meta-llama/Llama-3.1-8B-FP8`<br>- `mistralai/Mistral-Nemo-Instruct-2407`<br>- `mistralai/Mistral-Nemo-Instruct-2407-FP8` |
| RTX 400 | - `meta-llama/Llama-3.1-8B-FP8` |
| L40S | - `meta-llama/Llama-3.1-8B`<br>- `meta-llama/Llama-3.1-8B-FP8`<br>- `mistralai/Mistral-Nemo-Instruct-2407`<br>- `mistralai/Mistral-Nemo-Instruct-2407-FP8` |
| RTX 6000 | - `meta-llama/Llama-3.1-8B`<br>- `meta-llama/Llama-3.1-8B-FP8`<br>- `mistralai/Mistral-Nemo-Instruct-2407`<br>- `mistralai/Mistral-Nemo-Instruct-2407-FP8` |

Learn more about our [inference-optimized image](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/#inference-optimized).

## Autoscale Pools

[Droplet autoscale pools](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/) enable automatic horizontal scaling for a pool of Droplets based on resource utilization or a fixed size.

## Integration with Other DigitalOcean Resources

Droplets integrate natively with other DigitalOcean products and features:

- [Tags](https://docs.digitalocean.com/products/droplets/how-to/tag/) are custom labels you apply to Droplets and other resources that have multiple uses: filtering, automatic inclusion in firewall rules and load balancer backend pools, and API call execution on multiple resources at once.

- [DigitalOcean Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/) are additional static IPv4 and IPv6 addresses you can use to access a Droplet without replacing or changing the Droplet’s original public IP addresses.

- [DigitalOcean Volumes Block Storage](https://docs.digitalocean.com/products/volumes/) are additional storage (in units called volumes) for your Droplets. You can move volumes between Droplets in the same region and increase the size of a volume without powering down the Droplet it’s attached to.

Volumes are most useful when you need more storage space but don’t need the additional processing power or memory that a larger Droplet would provide.

- [DigitalOcean Cloud Firewalls](https://docs.digitalocean.com/products/networking/firewalls/) are a free, network-based, stateful firewall service for DigitalOcean Droplets. They block all traffic that isn’t expressly permitted by a rule.

- [DigitalOcean Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/) are a fully-managed, highly available load balancing service that distribute traffic to groups of Droplets.


In this article...

- [Droplet Plans](https://docs.digitalocean.com/products/droplets/details/features/#droplet-plans)
  - [CPU Droplets](https://docs.digitalocean.com/products/droplets/details/features/#cpu-droplets)
  - [GPU Droplets](https://docs.digitalocean.com/products/droplets/details/features/#gpu-droplets)
  - [Contract-only GPU Droplets](https://docs.digitalocean.com/products/droplets/details/features/#contract-gpu-droplet)
    - [Single-node](https://docs.digitalocean.com/products/droplets/details/features/#single-node)
    - [Multi-node](https://docs.digitalocean.com/products/droplets/details/features/#multi-node)
- [Images](https://docs.digitalocean.com/products/droplets/details/features/#images)
  - [Linux Images](https://docs.digitalocean.com/products/droplets/details/features/#linux-images)
  - [AI/ML-Ready Images](https://docs.digitalocean.com/products/droplets/details/features/#aiml-ready-images)
  - [Inference-Optimized Image](https://docs.digitalocean.com/products/droplets/details/features/#inference-optimized-image)
- [Autoscale Pools](https://docs.digitalocean.com/products/droplets/details/features/#autoscale-pools)
- [Integration with Other DigitalOcean Resources](https://docs.digitalocean.com/products/droplets/details/features/#integration-with-other-digitalocean-resources)

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