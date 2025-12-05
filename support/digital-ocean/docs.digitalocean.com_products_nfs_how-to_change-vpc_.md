---
url: "https://docs.digitalocean.com/products/nfs/how-to/change-vpc/"
title: "How to Move a Network File Storage Share Between VPC Networks | DigitalOcean Documentation"
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
- [How-Tos](https://docs.digitalocean.com/products/nfs/how-to/)
- Change VPC

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Move a Network File Storage Share Between VPC Networks

Validated on 13 Oct 2025 • Last edited on 20 Oct 2025

Network File Storage is a fully managed, POSIX-compliant file storage solution built for demanding workloads like AI/ML pipelines, containerized applications, and DigitalOcean Kubernetes (DOKS) clusters. It provides scalable, high-throughput shared storage that simplifies storage management for distributed applications.

To move a share from one VPC network to another in the same datacenter, detach the share from the current VPC network and attach it to the new VPC network.

## Change VPCs Using the Control Panel

To move a share between VPCs using the [control panel](https://cloud.digitalocean.com/), click **Network File Storage** in the main menu.

On the **Network File Storage** page, find the share you want to move in the list, then click its **…** menu, then click **Change VPC**.

In the **Detach this share to change its VPC** window enter the name of the share then click **Detach**.

The share is now in a detached state. You can now attach it to a new VPC network.

Reload the **Network File Storage** page.

Click the share’s **…** menu again, then click **Attach to a VPC**.

In the **Attach this share to a VPC** window, select the VPC network you want to attach the share to, then click **Attach to VPC**.

Reload the **Network File Storage** page to update the share’s status.

In this article...

- [Change VPCs Using the Control Panel](https://docs.digitalocean.com/products/nfs/how-to/change-vpc/#change-vpcs-using-the-control-panel)

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