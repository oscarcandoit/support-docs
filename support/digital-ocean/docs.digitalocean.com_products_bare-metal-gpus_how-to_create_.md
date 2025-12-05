---
url: "https://docs.digitalocean.com/products/bare-metal-gpus/how-to/create/"
title: "How to Create DigitalOcean Gradient™ AI Bare Metal GPUs | DigitalOcean Documentation"
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

- [How-Tos](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/)
- Create Bare Metal GPUs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create DigitalOcean Gradient™ AI Bare Metal GPUs

Validated on 21 Mar 2025 • Last edited on 14 Nov 2025

DigitalOcean Gradient™ AI Bare Metal GPUs are dedicated, single-tenant servers with 8 GPUs of various models that can operate standalone or in multi-node clusters.

The process of purchasing and provisioning bare metal GPUs has the following steps:

1. **Complete a contract** for the bare metal GPUs you want.

Bare metal GPUs are not available for on-demand provisioning, so first, [contact our sales team](https://www.digitalocean.com/products/bare-metal-gpu?referrer=pdocs&utm_campaign=how-to-create-digitalocean-gradient-ai-bare-metal-gpus#sales-form) to finalize the price and provisioning.

2. **Set up billing** with your Paperspace account.

Payment for bare metal GPUs is managed through [Paperspace](https://www.paperspace.com/), a platform to manage GPU-based applications on DigitalOcean. To handle billing for bare metal GPUs, create a Paperspace account if you don’t already have one.

3. **Connect to your servers** with the provided IP addresses.

Once you complete the contract and we provision your resources, we email you the IP addresses of your servers, and you can begin using them.


## Complete a Contract

When you contact sales, you choose the [hardware](https://docs.digitalocean.com/products/bare-metal-gpus/details/features/#hardware) and [software configuration](https://docs.digitalocean.com/products/bare-metal-gpus/details/features/#software) you want. You can view details of the available hardware and software options on the features page:

![](https://docs.digitalocean.com/images/icons/bare-metal-gpus.svg)

DigitalOcean Gradient™ AI Bare Metal GPU Features

Learn more about bare metal GPU features and view comparisons to related products to help you choose the right product for your needs.

All software configurations come with the necessary NVIDIA GPU and CUDA drivers.

## Set up Billing

After you complete a contract with sales, you create a Paperspace account to manage billing.

## Connect to Your Server

Once we provision your bare metal GPUs, we email you the IP address of the servers, and you have full control of the configuration. You can connect to it [using SSH](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys#basic-connection-instructions).

Once you connect, you may want to:

- Set up [UFW](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu) to protect your bare metal GPU on its public interface. By default, there are no firewalls or gateways in front of bare metal GPUs.

- Install [Miniconda](https://docs.anaconda.com/miniconda/install/), a minimal installation of [Anaconda](https://www.anaconda.com/), an AI-focused operating system. Miniconda includes Python, the [conda](https://anaconda.org/anaconda/conda) package manager, and a limited number of additional packages and dependencies.

- Install [Transformers](https://huggingface.co/docs/transformers/en/installation), an ML toolkit and collection of pre-trained models.

- Install [PyTorch](https://pytorch.org/), a Python ML library that has support for tensor computing with GPU acceleration and deep neural networks.


If you have any issues, reach out to support.

In this article...

- [Complete a Contract](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/create/#complete-a-contract)
- [Set up Billing](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/create/#set-up-billing)
- [Connect to Your Server](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/create/#connect-to-your-server)

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