---
url: "https://docs.digitalocean.com/products/snapshots/"
title: "Snapshots | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/snapshots.257b4659783b27a6528d9939dcfcb23d26d0ecb4f674e8b728d4bbee764fc3c9.svg)Snapshots](https://docs.digitalocean.com/products/snapshots/)
- [Getting Started](https://docs.digitalocean.com/products/snapshots/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/snapshots/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/snapshots/how-to/)
  - [Snapshot Droplets](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-droplets/)
  - [Create or Restore Droplets](https://docs.digitalocean.com/products/snapshots/how-to/create-and-restore-droplets/)
  - [Migrate Droplets](https://docs.digitalocean.com/products/snapshots/how-to/migrate-droplets/)
  - [Snapshot Volumes](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-volumes/)
  - [Create Volumes](https://docs.digitalocean.com/products/snapshots/how-to/create-volumes/)
  - [Add Snapshots to Regions](https://docs.digitalocean.com/products/snapshots/how-to/change-regions/)
  - [Transfer Snapshots](https://docs.digitalocean.com/products/snapshots/how-to/transfer/)
  - [Delete Snapshots](https://docs.digitalocean.com/products/snapshots/how-to/delete/)
- [Reference](https://docs.digitalocean.com/products/snapshots/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Snapshots)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/snapshots/)
- [Details](https://docs.digitalocean.com/products/snapshots/details/)
  - [Features](https://docs.digitalocean.com/products/snapshots/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/snapshots/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/snapshots/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/snapshots/details/limits/)
- [Support](https://docs.digitalocean.com/products/snapshots/support/)

- Snapshots

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Snapshots

Generated on 25 Nov 2025

Snapshots are on-demand disk images of DigitalOcean Droplets and volumes saved to your account. Use them to create new Droplets and volumes with the same contents.

Most Viewed Snapshots Articles

01. [Can I download a backup or snapshot?](https://docs.digitalocean.com/support/can-i-download-a-backup-or-snapshot/ "You cannot currently download DigitalOcean backups or snapshots, but you can use third-party tools to save your data locally.")
02. [How to Create or Restore Droplets from Snapshots](https://docs.digitalocean.com/products/snapshots/how-to/create-and-restore-droplets/ "Create a new Droplet from a snapshot or restore a Droplet to an older point in time.")
03. [How to Transfer a Droplet Snapshot to a Different Team](https://docs.digitalocean.com/products/snapshots/how-to/transfer/ "Transfer Droplet snapshots to another DigitalOcean team to effectively migrate a Droplet to another owner.")
04. [How to Create Snapshots of Droplets](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-droplets/ "Snapshot a Droplet to save the contents of the Droplet's disk.")
05. [Snapshots Pricing](https://docs.digitalocean.com/products/snapshots/details/pricing/ "")
06. [How to Migrate Droplets Using DigitalOcean Snapshots](https://docs.digitalocean.com/products/snapshots/how-to/migrate-droplets/ "Use snapshots to migrate a Droplet from one data center region to another.")
07. [How to Add Droplet Snapshots to Other Regions](https://docs.digitalocean.com/products/snapshots/how-to/change-regions/ "Add a Droplet snapshot to additional regions to create Droplets based on it in those regions.")
08. [Snapshots Details](https://docs.digitalocean.com/products/snapshots/details/ "Features, plans and pricing, availability, limits, known issues, and more.")
09. [How to Create Volumes from Snapshots](https://docs.digitalocean.com/products/snapshots/how-to/create-volumes/ "Create a new volume from a snapshot.")
10. [How to Delete Snapshots](https://docs.digitalocean.com/products/snapshots/how-to/delete/ "Delete a snapshot to permanently remove it from your account.")

![](https://docs.digitalocean.com/images/icons/snapshots.svg)

Getting Started

Quickstarts and intermediate tutorials to get started.

![](https://docs.digitalocean.com/images/icons/snapshots.svg)

How-Tos

How to accomplish specific tasks in detail, like creation/deletion, configuration, and management.

![](https://docs.digitalocean.com/images/icons/snapshots.svg)

Reference

API and CLI reference documentation for snapshots, including example requests and available parameters.

![](https://docs.digitalocean.com/images/icons/snapshots.svg)

Details

Features, plans and pricing, availability, limits, known issues, and more.

![](https://docs.digitalocean.com/images/icons/snapshots.svg)

Support

Get help with technical support and answers to frequently asked questions.

## Latest Updates

### 22 April 2024

- We’ve corrected a bug where image types other than snapshots could be listed using the `GET /v2/snapshots` endpoint. This behavior was strictly limited to image types that the user was properly authorized to access, such as backups and custom images.


### 16 January 2024

- We’ve corrected a bug where image types other than snapshots could be retrieved using the `GET /v2/snapshots/$SNAPSHOT_ID` and `DELETE /v2/snapshots/$SNAPSHOT_ID` endpoints. This behavior was strictly limited to image types that the user was properly authorized to access, such as backups and custom images.


### 1 July 2022

- The following pricing changes are now in effect:


  - A new $4 Droplet with 512MB of memory, 10GB of storage, 1 vCPU, and 500GB of outbound data transfer is now available in NYC1, FRA1, SFO3, SGP1, and AMS3. The slug is `s-1vcpu-512mb-10gb`.

  - We have simplified pricing for DigitalOcean Kubernetes and some managed databases for better accuracy and predictibility.

  - The prices of Droplets, Snapshots, Load Balancers, Reserved IPs, and Custom Images have increased.


There is no change to pricing for Spaces, backups, volumes, DigitalOcean Container Registry, or App Platform. There are also no changes to inbound data transfer or bandwidth pricing.

This is our first major price change in 10 years, and we believe the new model better fits our understanding of our customers and the expanded breadth of our offerings. For a more detailed breakdown of the changes, see [our blog post on our new pricing](https://www.digitalocean.com/blog/new-4-dollar-droplet-updated-pricing).

For more information, see [all Snapshots release notes](https://docs.digitalocean.com/release-notes/snapshots/).

In this article...

[Snapshots](https://docs.digitalocean.com/products/snapshots/)

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