---
url: "https://docs.digitalocean.com/products/backups/details/features/"
title: "Backups Features | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/backups.8f2953b640369857d8e09577aab7309b64ba37e4be8cbad0f0514549bf449bd6.svg)Backups](https://docs.digitalocean.com/products/backups/)
- [Getting Started](https://docs.digitalocean.com/products/backups/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/backups/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/backups/how-to/)
  - [Enable Backups](https://docs.digitalocean.com/products/backups/how-to/enable/)
  - [Create or Restore Droplets](https://docs.digitalocean.com/products/backups/how-to/create-and-restore/)
  - [Convert Backups to Snapshots](https://docs.digitalocean.com/products/backups/how-to/convert-to-snapshot/)
  - [Disable Backups](https://docs.digitalocean.com/products/backups/how-to/disable/)
- [Reference](https://docs.digitalocean.com/products/backups/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Backups)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/backups/)
- [Details](https://docs.digitalocean.com/products/backups/details/)
  - [Features](https://docs.digitalocean.com/products/backups/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/backups/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/backups/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/backups/details/limits/)
- [Support](https://docs.digitalocean.com/products/backups/support/)

- [Details](https://docs.digitalocean.com/products/backups/details/)
- Features

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Backups Features

Validated on 19 Jun 2018 • Last edited on 1 Oct 2025

Backups are automatically-created disk images of Droplets. Enabling backups for Droplets enables system-level backups at weekly or daily intervals, which provides a way to revert to an older state or create new Droplets.

## How Do DigitalOcean Backups Work?

We use a snapshot-based backup system that creates a point-in-time image based on the current state of a Droplet. These are called _crash-consistent backups_ because the image retains the entirety of the disk’s data at the moment it is created.

The following process occurs on your Droplet when a backup occurs:

1. We take a snapshot of the live system to create a crash-consistent, point-in-time image.
2. We back up the snapshot off-disk.
3. We delete the snapshot once the backup is complete.

We create these backups in the background while the Droplet is running, so you don’t need to power down.

## Backup Frequency, Retention, and Schedule

Note
DigitalOcean’s automated backups do not include volumes. To back up a volume, create a [volume snapshot](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-volumes/).

You can enable backups for Droplets. Backups are available for all Droplets, but they may not be ideal for Droplets with heavy I/O workloads, such as database servers, because disk write performance is degraded while the backup is being created.

We store backups in the same datacenter as the corresponding Droplet.

Backups occur during a _backup window_, which is a 4-hour window of time during which the Droplet automatically initiates a new backup. You can customize your backup window when you [enable backups](https://docs.digitalocean.com/products/backups/how-to/enable/) and view your current backup window on the Droplet’s **Backups** page.

In this article...

- [How Do DigitalOcean Backups Work?](https://docs.digitalocean.com/products/backups/details/features/#how-do-digitalocean-backups-work)
- [Backup Frequency, Retention, and Schedule](https://docs.digitalocean.com/products/backups/details/features/#backup-frequency-retention-and-schedule)

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