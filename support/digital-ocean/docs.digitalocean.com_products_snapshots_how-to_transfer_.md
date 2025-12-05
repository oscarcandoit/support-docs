---
url: "https://docs.digitalocean.com/products/snapshots/how-to/transfer/"
title: "How to Transfer a Droplet Snapshot to a Different Team | DigitalOcean Documentation"
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
- Transfer Snapshots

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Transfer a Droplet Snapshot to a Different Team

Validated on 22 Aug 2024 • Last edited on 18 Mar 2025

Snapshots are on-demand disk images of DigitalOcean Droplets and volumes saved to your account. Use them to create new Droplets and volumes with the same contents.

You can transfer Droplet snapshots between any of your DigitalOcean teams. You can also transfer Droplet snapshots to a specific user who can choose to accept the snapshot into any of their teams.

Before you transfer a snapshot, you should know:

- **Snapshots are moved, not copied.** When you transfer a snapshot, it is removed from its original team. If you want to retain a copy of the snapshot, create a second snapshot before initiating a transfer.

- **IP addresses are associated with Droplets, not snapshots.** This means snapshot transfers aren’t well-suited for moving applications with IP-based configuration settings. You can use [DigitalOcean teams](https://docs.digitalocean.com/platform/teams/) to share access to resources with multiple users.

- **You cannot transfer volume snapshots.** As an alternative, you can use tools like [SnapShooter](https://docs.digitalocean.com/products/snapshooter/), [rsync](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories-on-a-vps) or [SFTP](https://www.digitalocean.com/community/tutorials/how-to-use-filezilla-to-transfer-and-manage-files-securely-on-your-vps) to copy the data to another volume.


## Transfer a Snapshot

To transfer a Droplet to another DigitalOcean team, you first need to [take a snapshot of it](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-droplets/).

To transfer a Droplet snapshot, in the control panel’s left menu, click **Backups & Snapshots**. On the **Snapshots** tab, find the snapshot you want to transfer. Open the snapshot’s **More** menu and select **Transfer Snapshot**.

![Snapshot more menu opened](https://docs.digitalocean.com/screenshots/snapshots/more-menu.9bad397e6a56e9be55bda570d5da6675ba644644317e557230a641218e28c86e.png)

In the **Transfer Snapshot To** menu that opens, choose how to transfer the snapshot:

- **Team**: You can transfer snapshots directly to any of your DigitalOcean teams.

- **Email address**: You can transfer snapshots to other users by entering their email address. When they accept the transfer, they choose any team they are a part of to receive the snapshot.


With either method, someone with an [owner or member role](https://docs.digitalocean.com/platform/teams/roles/) on the receiving team needs to accept the transfer. If you have the owner or member role on the receiving team, the transfer happens automatically without the need to manually accept.

Once you choose the recipient, click **Request Transfer**. If the transfer requires manual acceptance, the recipient receives an email asking them to review and respond to the transfer.

After you initiate the transfer, the menu title changes to **Snapshot Transfer Pending** and the options change to a single **Cancel Transfer** button. You can cancel the transfer at any time before the recipient accepts.

## Receiving a Snapshot

When someone requests to transfer a snapshot to you or to a team where you have the owner or member role, you receive an email.

Warning
A snapshot is a disk-level duplicate of the Droplet from which it was taken, which could include SSH keys or other configuration that a sender could use to access Droplets created from that snapshot. Accept transfers only from trusted sources.

To respond to the snapshot transfer request, click the **Review and Respond** button in the email.

![](https://docs.digitalocean.com/screenshots/snapshots/pending-snapshot-transfer-email.4be7aa2000994aed75798e66f1b3eb409412a83763f3badb3c171a67aa6f4d9a.png)

Then, in the drop-down menu, select a team to accept the transfer and click **Accept This Snapshot**.

![](https://docs.digitalocean.com/screenshots/snapshots/snapshot-transfer-accept.76126baac135f8b2481fe6e7df52807a0a4fc869e664900bea4de11ebda5c630.png)

When you accept the transfer, it appears in the **Snapshots** table. The **More** menu contains the same options that are available for snapshots you create yourself, including **Create Droplet**. After accepting a transfer, you may need to reload the page to see it.

The original owner of the snapshot receives an email if you accept the transfer. Once transfer of a snapshot is complete, the originating team is longer billed for it.

In this article...

- [Transfer a Snapshot](https://docs.digitalocean.com/products/snapshots/how-to/transfer/#transfer-a-snapshot)
- [Receiving a Snapshot](https://docs.digitalocean.com/products/snapshots/how-to/transfer/#receiving-a-snapshot)

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