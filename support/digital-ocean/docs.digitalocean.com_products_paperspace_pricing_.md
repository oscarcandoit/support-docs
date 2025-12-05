---
url: "https://docs.digitalocean.com/products/paperspace/pricing/"
title: "Paperspace Pricing | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [Products](https://docs.digitalocean.com/products/paperspace/#products)
  - [![](https://docs.digitalocean.com/images/icons/machines.4f455a935c3878c20e9d35654c24e34c18f052727b612061b52fbe7c0467d808.svg)Machines](https://docs.digitalocean.com/products/paperspace/machines/)
  - [![](https://docs.digitalocean.com/images/icons/notebooks.32e19af09a55fd5cd33aebcce8d997fae35ad696d0312f02ea32fbd1031df490.svg)Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/)
  - [![](https://docs.digitalocean.com/images/icons/deployments.3b7f4d8d82c236b51d91c8becee94bb424055a671131be322532b5d1cd26cc20.svg)Deployments](https://docs.digitalocean.com/products/paperspace/deployments/)
  - [![](https://docs.digitalocean.com/images/icons/workflows.3b7ab56ba05e74ff45c932896583f0781174b87ebd9e2feb4560ab9be20c2bb9.svg)Workflowsprivate](https://docs.digitalocean.com/products/paperspace/workflows/)
- [Accounts & Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/)
  - [Manage Accounts](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/)
  - [Add SSH Keys](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/)
  - [Use Secrets](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/)
  - [Manage Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/)
  - [Enable SSO](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/enable-sso/)
- [Pricing](https://docs.digitalocean.com/products/paperspace/pricing/)
- [Developer Tools](https://docs.digitalocean.com/products/paperspace/reference/)
  - [API Keys](https://docs.digitalocean.com/reference/paperspace/api-keys/)
  - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
  - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
  - [Legacy Tools](https://docs.digitalocean.com/products/paperspace/reference/legacy/)

- Pricing

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Paperspace Pricing

Validated on 14 Dec 2023 • Last edited on 14 Nov 2025

All Paperspace resources are billed on a per-hour basis.

Non-GPU resources such as storage and public IP addresses have a maximum monthly charge. Once a non-GPU resource reaches its monthly maximum, it no longer incurs charges for the rest of the billing cycle.

Billing starts when you create a resource and ends when you destroy it.

## CPU and GPU Machines

Machines are billed hourly based on their hardware type and configuration. We do not charge for ingress or egress bandwidth for Paperspace Machines.

You can view full technical specs for CPU, GPU, and multi-GPU machine types in the [Machine Type Reference](https://docs.digitalocean.com/products/paperspace/machines/details/machine-types/).

You are billed for machines even when they are powered off as the compute capacity remains reserved. To stop billing, destroy the machine in the [console](https://console.paperspace.com/) or via the [API](https://docs.digitalocean.com/products/paperspace/workflows/reference/gradient-actions/).

### CPU Machines

The following table lists the available CPU machine types and their hourly pricing. Each machine type offers different performance characteristics, and some are included in Gradient Subscription Plans.

| CPU Machine | Hourly Price | Subscription Plan |
| --- | --- | --- |
| C1 | $0.0045/hr |  |
| C3 | $0.018/hr |  |
| C4 | $0.04/hr | Free, Pro, Growth |
| C5 | $0.08/hr | Free, Pro, Growth |
| C6 | $0.16/hr |  |
| C7 | $0.30/hr | Free, Pro, Growth |
| C8 | $0.60/hr |  |
| C9 | $0.90/hr |  |
| C10 | $1.60/hr |  |

### GPU Machines

The following table lists the available GPU machine types and their hourly pricing. GPU machines vary in performance and memory capacity, and higher-end options are included in select Gradient Subscription Plans.

| GPU Machine | Hourly Price | Subscription Plan |
| --- | --- | --- |
| GPU+ (M4000) | $0.45/hr | Free, Pro, Growth |
| P4000 | $0.51/hr | Free, Pro, Growth |
| P5000 | $0.78/hr | Pro, Growth |
| P6000 | $1.10/hr | Pro, Growth |
| RTX4000 | $0.56/hr | Free, Pro, Growth |
| RTX5000 | $0.82/hr | Pro, Growth |
| A4000 | $0.76/hr | Pro, Growth |
| A5000 | $1.38/hr | Growth |
| A6000 | $1.89/hr | Growth |
| V100 / V100-32G | $2.30/hr | Growth |
| A100 | $3.09/hr | Growth |
| A100-80G | $3.18/hr | Growth |
| H100 | $5.95/hr |  |

### Multi-GPU Machines

The following table lists the available multi-GPU machine configurations and their hourly pricing. Multi-GPU machines combine multiple GPUs to accelerate large-scale training and inference workloads. Pricing is calculated by multiplying the base rate of a single GPU by the number of GPUs in the configuration.

For example, an NVIDIA H100×8 machine costs `8 × $5.95 = $47.60/hr`.

| Multi-GPU Machine | Hourly Price | Subscription Plan |
| --- | --- | --- |
| V100-32G ×8 | $9.20/hr | Growth |
| A6000 ×8 | $7.56/hr | Growth |
| A100 ×8 | $24.72/hr |  |
| A100-80G ×8 | $25.44/hr |  |
| H100 ×8 | $47.60/hr |  |

### Free Machines

The following table lists the free machine types available with different Gradient Subscription Plans. Free machines provide limited CPU and GPU resources for development and testing and can only be used for Notebooks in private workspaces.

| Free Machine | Available Plans |
| --- | --- |
| Free CPU (C4) | Free, Pro, Growth |
| Free GPU (M4000) | Free, Pro, Growth |
| Free P4000 | Pro, Growth |
| Free P5000 | Pro, Growth |
| Free RTX4000 | Pro, Growth |
| Free RTX5000 | Pro, Growth |
| Free A4000 | Pro, Growth |
| Free A5000 | Growth |
| Free A6000 | Growth |
| Free A100-80G | Growth |

## Storage

Storage resources include block storage and shared drives. Each has both an hourly rate and a maximum monthly price.

### Block Storage

| Size | Hourly Price | Max Monthly Price |
| --- | --- | --- |
| 50 GB | $0.0074/hr | $5.00/mo |
| 100 GB | $0.0104/hr | $7.00/mo |
| 250 GB | $0.0149/hr | $10.00/mo |
| 500 GB | $0.0372/hr | $25.00/mo |
| 1 TB | $0.0818/hr | $55.00/mo |
| 2 TB | $0.1786/hr | $120.00/mo |

### Shared Drives

| Size | Hourly Price | Max Monthly Price |
| --- | --- | --- |
| 250 GB | $0.0238/hr | $16.00/mo |
| 500 GB | $0.0491/hr | $33.00/mo |
| 1 TB | $0.0967/hr | $65.00/mo |
| 2 TB | $0.1935/hr | $130.00/mo |
| 4 TB | $0.3869/hr | $260.00/mo |
| 8 TB | $0.7738/hr | $520.00/mo |
| 12 TB | $1.1607/hr | $780.00/mo |
| 16 TB | $1.5476/hr | $1040.00/mo |
| 80 TB | $7.7381/hr | $5200.00/mo |

## Image

Paperspace supports image storage through snapshots and custom templates. For more details, see the [Snapshots guide](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/).

### Snapshots

| Size | Hourly Price | Max Monthly Price |
| --- | --- | --- |
| 50 GB | $0.0015/hr | $1.00/mo |
| 100 GB | $0.0018/hr | $1.20/mo |
| 250 GB | $0.0021/hr | $1.40/mo |
| 500 GB | $0.0030/hr | $2.00/mo |
| 1 TB | $0.0060/hr | $4.00/mo |
| 2 TB | $0.0119/hr | $8.00/mo |

### Custom Templates

| Size | Hourly Price | Max Monthly Price |
| --- | --- | --- |
| 50 GB | $0.0052/hr | $3.50/mo |
| 100 GB | $0.0089/hr | $6.00/mo |
| 250 GB | $0.0164/hr | $11.00/mo |
| 500 GB | $0.0253/hr | $17.00/mo |
| 1 TB | $0.0358/hr | $24.00/mo |
| 2 TB | $0.0625/hr | $42.00/mo |

## Networking

| Feature | Hourly Price | Max Monthly Price |
| --- | --- | --- |
| Private Network | $0.0015/hr | $1.00/mo |
| Public IP Address | $0.0045/hr | $3.00/mo |
| VPN | $0.0015/hr | $1.00/mo |

## Gradient Subscription Plans

Gradient Subscription Plans apply to resources such as Notebooks, Workflows, and Deployments. Once you reach the maximum monthly cost, the plan stops accruing charges.

Each plan includes a base storage allowance. Additional usage is billed at $0.29/GB/mo.

| Plan | Included Storage |
| --- | --- |
| Free | 5 GB |
| Pro | 15 GB |
| Growth | 50 GB |

### User Plans

| Plan | Hourly Price | Max Monthly Price |
| --- | --- | --- |
| Free |  |  |
| Pro | $0.0119/hr | $8.00/mo |
| Growth | $0.0580/hr | $39.00/mo |

### Team Plans

| Plan | Hourly Price | Max Monthly Price |
| --- | --- | --- |
| Free |  |  |
| Pro | $0.0179/hr | $12.00/mo |
| Growth | $0.0580/hr | $39.00/mo |

In this article...

- [CPU and GPU Machines](https://docs.digitalocean.com/products/paperspace/pricing/#cpu-and-gpu-machines)
  - [CPU Machines](https://docs.digitalocean.com/products/paperspace/pricing/#cpu-machines)
  - [GPU Machines](https://docs.digitalocean.com/products/paperspace/pricing/#gpu-machines)
  - [Multi-GPU Machines](https://docs.digitalocean.com/products/paperspace/pricing/#multi-gpu-machines)
  - [Free Machines](https://docs.digitalocean.com/products/paperspace/pricing/#free-machines)
- [Storage](https://docs.digitalocean.com/products/paperspace/pricing/#storage)
  - [Block Storage](https://docs.digitalocean.com/products/paperspace/pricing/#block-storage)
  - [Shared Drives](https://docs.digitalocean.com/products/paperspace/pricing/#shared-drives)
- [Image](https://docs.digitalocean.com/products/paperspace/pricing/#image)
  - [Snapshots](https://docs.digitalocean.com/products/paperspace/pricing/#snapshots)
  - [Custom Templates](https://docs.digitalocean.com/products/paperspace/pricing/#custom-templates)
- [Networking](https://docs.digitalocean.com/products/paperspace/pricing/#networking)
- [Gradient Subscription Plans](https://docs.digitalocean.com/products/paperspace/pricing/#gradient-subscription-plans)
  - [User Plans](https://docs.digitalocean.com/products/paperspace/pricing/#user-plans)
  - [Team Plans](https://docs.digitalocean.com/products/paperspace/pricing/#team-plans)

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