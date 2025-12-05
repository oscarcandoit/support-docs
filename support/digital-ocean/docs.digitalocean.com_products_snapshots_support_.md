---
url: "https://docs.digitalocean.com/products/snapshots/support/"
title: "Snapshots Support | DigitalOcean Documentation"
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

- Support

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Snapshots Support

Generated on 25 Nov 2025

Snapshots are on-demand disk images of DigitalOcean Droplets and volumes saved to your account. Use them to create new Droplets and volumes with the same contents.

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I restore individual files or directories from a snapshot or a backup?

The only way to restore files from an image is to recreate a Droplet or volume from the image and copy the flies from there.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why can't I create a Droplet from a snapshot?

You cannot create Droplets in certain datacenters due to limited capacity. If you have snapshots in a limited capacity datacenter, transfer them to another datacenter to create Droplets from them.

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I downsize a Droplet using a snapshot?

You cannot downsize a Droplet from a snapshot. Data is not always stored sequentially in memory, so reducing the size of a disk can result in data loss or corruption.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why is my snapshot's size different from reported disk usage?

Snapshots of Droplets are a best estimate based on the disk usage. Snapshots of volumes operate at the block storage level, so the snapshot size may not match what the filesystem reports.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I fix a "The resource you were accessing could not be found" error when restoring a Droplet from a snapshot?

This error happens when the Droplet you’re trying to restore no longer exists, so try creating a new Droplet from the snapshot instead.

![](https://docs.digitalocean.com/images/icons/support.svg)

Do snapshots retain the IP address of the Droplet they were created from?

No, but you can use reserved IPs to assign the same address to new or redeployed Droplets.

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I download a backup or snapshot?

You cannot currently download DigitalOcean backups or snapshots, but you can use third-party tools to save your data locally.

![](https://docs.digitalocean.com/images/icons/support.svg)

How long will my backup or snapshot take to complete?

Creating a backup or snapshot takes roughly 2 minutes per GB of used space.

In this article...

[Snapshots Support](https://docs.digitalocean.com/products/snapshots/support/)

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