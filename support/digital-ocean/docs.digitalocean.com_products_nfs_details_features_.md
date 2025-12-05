---
url: "https://docs.digitalocean.com/products/nfs/details/features/"
title: "Network File Storage Features | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/nfs.2125812c526e200f3956d48d6e70344c85c156cbeb56103ff278169fd7bcb40f.svg)Network File Storage](https://docs.digitalocean.com/products/nfs/)
  - [Getting Started](https://docs.digitalocean.com/products/nfs/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/nfs/getting-started/quickstart/)
  - [How-Tos](https://docs.digitalocean.com/products/nfs/how-to/)
    - [Create Share](https://docs.digitalocean.com/products/nfs/how-to/create/)
    - [Delete Share](https://docs.digitalocean.com/products/nfs/how-to/delete/)
    - [Mount Share](https://docs.digitalocean.com/products/nfs/how-to/mount/)
    - [Resize Share](https://docs.digitalocean.com/products/nfs/how-to/resize/)
    - [Create Snapshot](https://docs.digitalocean.com/products/nfs/how-to/create-snapshot/)
    - [Change VPC](https://docs.digitalocean.com/products/nfs/how-to/change-vpc/)
  - [Reference](https://docs.digitalocean.com/products/nfs/reference/)
  - [Details](https://docs.digitalocean.com/products/nfs/details/)
    - [Features](https://docs.digitalocean.com/products/nfs/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/nfs/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/nfs/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/nfs/details/limits/)

- [Network File Storage](https://docs.digitalocean.com/products/nfs/)
- [Details](https://docs.digitalocean.com/products/nfs/details/)
- Features

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Network File Storage Features

Validated on 13 Oct 2025 • Last edited on 20 Oct 2025

Network File Storage is a fully managed, POSIX-compliant file storage solution built for demanding workloads like AI/ML pipelines, containerized applications, and DigitalOcean Kubernetes (DOKS) clusters. It provides scalable, high-throughput shared storage that simplifies storage management for distributed applications.

Network File Storage is a fully managed solution for creating and managing scalable, high-performance shared file storage. It is optimized for AI/ML training and inference, high performance computing (HPC) simulations, and general-purpose file sharing for [Droplets](https://docs.digitalocean.com/products/droplets/) and [DigitalOcean Kubernetes](https://docs.digitalocean.com/products/kubernetes/).

Network File Storage supports the Network File System (NFS) protocol v4.1 and is POSIX-compliant. All NFS traffic uses [VPC networks](https://docs.digitalocean.com/products/networking/vpc/) to ensure secure and private data transfer.

Network File Storage supports point-in-time snapshots with usage-based billing. Snapshot data is accessed through a read-only `.snapshot`directory in the share.

Network File Storage shares provide 50–16,000 GiB of storage with the following performance profile:

- Read throughput: up to 1 GB/s
- Write throughput: up to 650 MB/s
- IOPS: 50K reads / 30K writes

Your maximum storage capacity and the maximum number of shares you can create are based on per-account limits. To increase your limits, [contact support](https://cloudsupport.digitalocean.com/).

Network File Storage is available to customers with access to GPU Droplets. To check if you have access, go to the [Network File Storage page in the control panel](https://cloud.digitalocean.com/nfs). If your team account does not have access, use the form on the page to request access.

In this article...

[Network File Storage Features](https://docs.digitalocean.com/products/nfs/details/features/)

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