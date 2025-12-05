---
url: "https://docs.digitalocean.com/products/snapshots/getting-started/quickstart/"
title: "Snapshots Quickstart | DigitalOcean Documentation"
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

- [Getting Started](https://docs.digitalocean.com/products/snapshots/getting-started/)
- Quickstart

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Snapshots Quickstart

Validated on 18 Mar 2019 • Last edited on 5 Jun 2024

Snapshots are on-demand disk images of DigitalOcean Droplets and volumes saved to your account. Use them to create new Droplets and volumes with the same contents.

## Snapshot Droplets and Volumes

To snapshot a Droplet:

1. Shut down the Droplet with `sudo shutdown -h now`.
2. From the [control panel](https://cloud.digitalocean.com/), click the Droplet you want to snapshot.
3. From the Droplet’s page, click **Snapshots**, then click **Take Snapshot**.

You can also take a live snapshot by following the same steps without powering down your Droplet.

To snapshot a volume:

1. From the [control panel](https://cloud.digitalocean.com/), click **Volumes**.
2. Open the **More** menu for the volume you want to snapshot, then click **Take Snapshot**.

## Create Droplets and Volumes from Snapshots

To create a new Droplet from a snapshot:

1. On the [Droplet create page](https://cloud.digitalocean.com/droplets/new), under **Choose an image**, select **Snapshots**.
2. Choose the snapshot you’d like to create the Droplet from.
3. Fill out the rest of the choices on the create page, then click **Create**.

To create a new volume from a snapshot:

1. From the [control panel](https://cloud.digitalocean.com/), click **Backups & Snapshots**, then **Snapshots**, and finally **Volumes**.
2. Select any volume snapshot, click its **More** menu, and click **Create Volume**.
3. In the window that opens, choose the size of the new volume, then click **Create Volume**.

## Delete Snapshots

To permanently delete a snapshot:

1. From the [control panel](https://cloud.digitalocean.com/), click **Backups & Snapshots**, then **Snapshots**.
2. From a snapshot’s **More** menu, click **Delete**.
3. Confirm the deletion by clicking **Delete Snapshot** in the window that opens.

In this article...

- [Snapshot Droplets and Volumes](https://docs.digitalocean.com/products/snapshots/getting-started/quickstart/#snapshot-droplets-and-volumes)
- [Create Droplets and Volumes from Snapshots](https://docs.digitalocean.com/products/snapshots/getting-started/quickstart/#create-droplets-and-volumes-from-snapshots)
- [Delete Snapshots](https://docs.digitalocean.com/products/snapshots/getting-started/quickstart/#delete-snapshots)

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