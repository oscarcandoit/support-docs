---
url: "https://docs.digitalocean.com/products/droplets/details/image-deprecation/"
title: "Image Deprecation Policy | DigitalOcean Documentation"
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
- Image Deprecation Policy

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Image Deprecation Policy

Validated on 30 Jul 2021 • Last edited on 15 Aug 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

This page outlines our policies for when new images become available or deprecated. You can find image availability and deprecation announcements in our [release notes](https://docs.digitalocean.com/release-notes/).

You can view the [list of availabile Linux images](https://docs.digitalocean.com/products/droplets/details/images/) for the current distributions and versions we offer as well as the slug and image ID of each image. You can also retrieve this list yourself with [the API’s `/v2/images` endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Images/operation/images_list) or with [`doctl compute image list-distribution --public`](https://docs.digitalocean.com/reference/doctl/reference/compute/image/list-distribution/).

## Image Availability

### Linux Distributions

For each Linux distribution we support, we provide images of the latest stable release of the distributions’ currently supported major versions. We update the default version for distribution images when the first stable release of a new major version is available. For example, the default Ubuntu version is Ubuntu 18.04.x until Ubuntu 20.04.1 is released.

Note

_Distributions_ are operating systems based on the Linux kernel, like Ubuntu and CentOS. A _release_ is a published version of a distribution.

A distribution’s latest stable release typically means the latest point release of a major [LTS](https://en.wikipedia.org/wiki/Long-term_support) version. However, some distributions have different ways of versioning their releases.

Similarly, [1-Click App](https://docs.digitalocean.com/products/marketplace/droplet-1-click-apps/) images track the latest Ubuntu LTS version until the first point release of the next LTS version.

Image slugs for Linux distributions denote the major distribution version and correspond to the latest stable release of that version. 1-Click App slugs denote the LTS version of the underlying distribution.

## Image Deprecation

We aim for a 30-day deprecation window. When we deprecate an image, we remove it from the control panel, but keep the image slug available via the API for 30 days. We may remove an image without notice in extenuating circumstances. For example, we would remove an image if we became aware of an inherent defect or security vulnerability that puts users or data at risk.

We deprecate major versions when they reach their announced end-of-life date. For distributions like Ubuntu, we follow the maintenance update window, not the extended security maintenance window. We deprecate earlier minor versions when we support the latest minor version. For example, we removed Ubuntu 18.04.1 when Ubuntu 18.04.2 became available.

Because distributions continually release updates, we can’t guarantee that automated tooling continues to work with each release. If you rely on a specific version of a distribution, you can use [custom images](https://docs.digitalocean.com/products/custom-images/) or [snapshots](https://docs.digitalocean.com/products/snapshots/) to create Droplets instead of the provided distribution images.

Warning [Our terms of service](https://www.digitalocean.com/legal/terms-of-service-agreement/) govern your use of DigitalOcean and cover details of eligibility, content, use, payments & billing, and warranties. This document is not a contract and all use of DigitalOcean’s services are subject to the [terms of service](https://www.digitalocean.com/legal/terms-of-service-agreement/).

In this article...

- [Image Availability](https://docs.digitalocean.com/products/droplets/details/image-deprecation/#image-availability)
  - [Linux Distributions](https://docs.digitalocean.com/products/droplets/details/image-deprecation/#linux-distributions)
- [Image Deprecation](https://docs.digitalocean.com/products/droplets/details/image-deprecation/#image-deprecation)

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