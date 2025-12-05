---
url: "https://docs.digitalocean.com/products/snapshots/how-to/migrate-droplets/"
title: "How to Migrate Droplets Using DigitalOcean Snapshots | DigitalOcean Documentation"
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

- [How-Tos](https://docs.digitalocean.com/products/snapshots/how-to/)
- Migrate Droplets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Migrate Droplets Using DigitalOcean Snapshots

Validated on 13 Jun 2019 • Last edited on 18 Dec 2024

Snapshots are on-demand disk images of DigitalOcean Droplets and volumes saved to your account. Use them to create new Droplets and volumes with the same contents.

To migrate a Droplet using snapshots, you should:

1. [Create a snapshot of a Droplet](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-droplets/).

2. Optionally, [move the snapshot to a new region](https://docs.digitalocean.com/products/snapshots/how-to/change-regions/) if you want to migrate your Droplet to a new region or [transfer the snapshot to a new account](https://docs.digitalocean.com/products/snapshots/how-to/transfer/)) if you want to migrate your Droplet to a new account.

3. [Create a new Droplet from the snapshot](https://docs.digitalocean.com/products/snapshots/how-to/create-and-restore-droplets/#create-droplets) in the desired region or from the desired account.


When you create a new Droplet from a snapshot, you can also increase the size of the Droplet. Your SSH keys are transferred to the new Droplet along with all the user accounts from the time the snapshot was created.

The data and organization of the file system on the new Droplet should be identical to the original. However, it’s a good idea to test the services on the new instance because, for example, it’s possible that services you expect to be running weren’t set to start at boot. If you’re using a [reserved IP](https://docs.digitalocean.com/products/networking/reserved-ips/), a fast way to test is to update reserved IP to point to the new Droplet. If you notice any part of the migration has failed, it’s equally fast to revert back to using the original Droplet.

After any migration, it can be worth the cost to retain the original Droplet and snapshots, run automated and manual tests, and seek stakeholder verification. This way, if something goes wrong in the new location, these backups can be used to determine if the problems existed before the move.

Once you’ve verified that the system works as expected, you can take steps to move it into production. For example, if you had a domain name directed to the original Droplet, you need to [update its DNS records](https://docs.digitalocean.com/products/networking/dns/how-to/) to point to the new IP address.

In this article...

[How to Migrate Droplets Using DigitalOcean Snapshots](https://docs.digitalocean.com/products/snapshots/how-to/migrate-droplets/)

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