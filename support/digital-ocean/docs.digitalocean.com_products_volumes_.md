---
url: "https://docs.digitalocean.com/products/volumes/"
title: "Volumes Block Storage | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/volumes.9c13d8bb9aee0348ee1af5d72d4c795b4eea86db85fa161806e73d12c0b756d3.svg)Volumes Block Storage](https://docs.digitalocean.com/products/volumes/)
- [Getting Started](https://docs.digitalocean.com/products/volumes/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/volumes/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/volumes/how-to/)
  - [Create and Set Up Volumes](https://docs.digitalocean.com/products/volumes/how-to/create/)
  - [Delete Volumes](https://docs.digitalocean.com/products/volumes/how-to/delete/)
  - [Increase the Size of Volumes](https://docs.digitalocean.com/products/volumes/how-to/increase-size/)
  - [Detach Volumes](https://docs.digitalocean.com/products/volumes/how-to/detach/)
  - [Move Volumes between Droplets](https://docs.digitalocean.com/products/volumes/how-to/move-between-droplets/)
  - [Mount Volumes](https://docs.digitalocean.com/products/volumes/how-to/mount/)
  - [Unmount Volumes](https://docs.digitalocean.com/products/volumes/how-to/unmount/)
  - [Partition Volumes](https://docs.digitalocean.com/products/volumes/how-to/partition/)
  - [Expand Partitions](https://docs.digitalocean.com/products/volumes/how-to/expand-partitions/)
- [Reference](https://docs.digitalocean.com/products/volumes/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Block-Storage)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/volume/)
- [Details](https://docs.digitalocean.com/products/volumes/details/)
  - [Features](https://docs.digitalocean.com/products/volumes/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/volumes/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/volumes/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/volumes/details/limits/)
  - [Naming Conventions](https://docs.digitalocean.com/products/volumes/details/naming-conventions/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/volumes)
- [Support](https://docs.digitalocean.com/products/volumes/support/)

- Volumes Block Storage

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Volumes Block Storage

Generated on 25 Nov 2025

Volumes are network-attached block storage. You can use them with Droplets or Kubernetes clusters, move or resize them, and create snapshots at any time.

Most Viewed Volumes Block Storage Articles

01. [How to Increase the Size of DigitalOcean Volumes Block Storage](https://docs.digitalocean.com/products/volumes/how-to/increase-size/ "Scale up the amount of storage space available on a volume.")
02. [How to Create and Set Up Volumes for Use with Droplets](https://docs.digitalocean.com/products/volumes/how-to/create/ "Create a new volume from the control panel, format it to create its filesystem, then attach and mount it to a Droplet to use it.")
03. [How to Mount Volumes](https://docs.digitalocean.com/products/volumes/how-to/mount/ "Mount a formatted volume to make its filesystem accessible to the Droplet it's attached to.")
04. [Volume Features](https://docs.digitalocean.com/products/volumes/details/features/ "Volumes support automatic formatting and mounting, resizing, and snapshots. They have burst support for improved IOPS and bandwidth rates and are encrypted with LUKS.")
05. [Can I attach a volume to multiple Droplets?](https://docs.digitalocean.com/support/can-i-attach-a-volume-to-multiple-droplets/ "No, but you can mount a remote filesystem on a Droplet with the volume attached using software like SSHFS or NFS.")
06. [Volume How-Tos](https://docs.digitalocean.com/products/volumes/how-to/ "How to accomplish specific tasks in detail, like creation/deletion, configuration, and management.")
07. [Volume Limits](https://docs.digitalocean.com/products/volumes/details/limits/ "Limits and known issues for DigitalOcean Volumes Block Storage.")
08. [Volume Details](https://docs.digitalocean.com/products/volumes/details/ "Features, plans and pricing, availability, limits, known issues, and more.")
09. [Volume Pricing](https://docs.digitalocean.com/products/volumes/details/pricing/ "")
10. [Naming Conventions for DigitalOcean Volumes Block Storage](https://docs.digitalocean.com/products/volumes/details/naming-conventions/ "Platform-specific naming conventions for DigitalOcean Volumes Block Storage, including volume device files, automatic mount points, and systemd unit files.")

![](https://docs.digitalocean.com/images/icons/volumes.svg)

Getting Started

Quickstarts and intermediate tutorials to get started.

![](https://docs.digitalocean.com/images/icons/volumes.svg)

How-Tos

How to accomplish specific tasks in detail, like creation/deletion, configuration, and management.

![](https://docs.digitalocean.com/images/icons/volumes.svg)

Reference

API and CLI reference documentation for managing volumes, including example requests and available parameters.

![](https://docs.digitalocean.com/images/icons/volumes.svg)

Details

Features, plans and pricing, availability, limits, known issues, and more.

![](https://docs.digitalocean.com/images/icons/volumes.svg)

Support

Get help with technical support and answers to frequently asked questions.

## Latest Updates

### 29 August 2024

- We have increased the volume attach limit for DOKS nodes from 7 to 15.


### 12 August 2024

- We have increased the volume attach limit for Droplets from 7 to 15. The limit for DOKS nodes is still 7, but we’re working to increase this as well.


### 9 March 2023

- We have finished rolling out NVMe for volumes in all regions. Newly-created volumes in all regions are now on NVMe-based storage.


For more information, see [all Volumes Block Storage release notes](https://docs.digitalocean.com/release-notes/volumes/).

In this article...

[Volumes Block Storage](https://docs.digitalocean.com/products/volumes/)

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