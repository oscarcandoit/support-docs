---
url: "https://docs.digitalocean.com/products/snapshooter/how-to/back-up-volumes/"
title: "How to Back Up DigitalOcean Volumes with SnapShooter | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/snapshooter.13e207b5891670f2b29dbf31513a019ebef8731d27c25446bbf7557251aca915.svg)SnapShooter](https://docs.digitalocean.com/products/snapshooter/)
- [Getting Started](https://docs.digitalocean.com/products/snapshooter/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/snapshooter/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/snapshooter/how-to/)
  - [Connect DigitalOcean Teams](https://docs.digitalocean.com/products/snapshooter/how-to/connect-digitalocean-teams/)
  - [Connect Other Accounts](https://docs.digitalocean.com/products/snapshooter/how-to/connect-other-accounts/)
  - [Connect Server Using SSH](https://docs.digitalocean.com/products/snapshooter/how-to/connect-servers/)
  - [Connect Server Using Agent](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-agent/)
  - [Connect Containers Using Agent](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-containerized-agent/)
  - [Add an Encryption Key](https://docs.digitalocean.com/products/snapshooter/how-to/add-an-encryption-key/)
  - [Use Spaces Object Storage](https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/)
  - [Use Other Storage Providers](https://docs.digitalocean.com/products/snapshooter/how-to/use-other-storage-providers/)
  - [Back Up Droplets](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-droplets/)
  - [Back Up Volumes](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-volumes/)
  - [Back Up Managed Databases](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-managed-databases/)
  - [Back Up Managed Kubernetes Resources](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-doks/)
  - [Back Up Other Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-other-servers/)
  - [Back Up Files](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-files/)
  - [Back Up PostgreSQL Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-postgresql-servers/)
  - [Back Up MySQL Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-mysql-servers/)
  - [Back Up MongoDB Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-mongodb-servers/)
  - [Back Up WordPress Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-wordpress-servers/)
  - [Back Up Laravel Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-laravel-servers/)
  - [Add Pre/Post-Backup Scripts](https://docs.digitalocean.com/products/snapshooter/how-to/add-pre-and-post-backup-scripts/)
  - [Restore Backups](https://docs.digitalocean.com/products/snapshooter/how-to/restore-backups/)
- [Reference](https://docs.digitalocean.com/products/snapshooter/reference/)
- [Details](https://docs.digitalocean.com/products/snapshooter/details/)
  - [Features](https://docs.digitalocean.com/products/snapshooter/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/snapshooter/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/snapshooter/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/snapshooter/details/limits/)
  - [IP Address Allowlist](https://docs.digitalocean.com/products/snapshooter/details/ip-address-allowlist/)
  - [SnapShooter Alpha and Beta Tests for Backup Jobs](https://docs.digitalocean.com/products/snapshooter/details/alpha-beta-tests/)
- [Support](https://docs.digitalocean.com/products/snapshooter/support/)

- [How-Tos](https://docs.digitalocean.com/products/snapshooter/how-to/)
- Back Up Volumes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Back Up DigitalOcean Volumes with SnapShooter

Validated on 26 Sep 2023 • Last edited on 9 Apr 2025

SnapShooter is a cloud backup and recovery solution. Use SnapShooter to back up servers, volumes, databases, and applications from DigitalOcean and other cloud providers.

Back up DigitalOcean Volumes Block Storage daily with SnapShooter. SnapShooter uses the DigitalOcean API via OAuth authentication to take backups and prune them on your behalf.

## Configure Automatic Volume Backups

First, [connect your DigitalOcean team to your SnapShooter account](https://docs.digitalocean.com/products/snapshooter/how-to/connect-digitalocean-teams/). Then, from the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **Snapshots**, click **DigitalOcean**, then click **Volumes**.

Any volumes on your team are visible in the **Volumes** section. When you initially connect your team, this appears as a list of **Inactive** volumes, which means there are no backups configured for them. Volumes with SnapShooter backups enabled are listed under the **Active** tab.

To activate backups for a volume, click the **Activate** button to the right of volume Droplet you want to back up to go to the configuration page.

![Volume configuration page.](https://docs.digitalocean.com/screenshots/snapshooter/activate-volume.47aefda91975bb3a5ba19839527ec2220d45b4f1d873f52b5da49fef6de84448.png)

Fill out the fields for backup frequency, backup time, and time zone.

After you fill out the fields, click **Continue** to go to the **Retention Policy** page.

When we take a backup, we tag them daily, weekly, and monthly. On this page, you can choose how many of each to keep. We recommend 7 days, 4 weeks, and 12 months respectively as a starting point.

Finally, click **Start Backups**.

After you set up automatic backups for a volume, you can view the status of the volume’s backups by clicking **View** to the right of the volume in the **Active** tab. This page lists the following information:

- **Server details**, including its IP address and datacenter.
- **Backup details**, including its frequency, backup retention, and cost.
- **Snapshots**, which is a table of all completed backups with information on its status (completed or expired), the start time and duration, tags (manual, daily, weekly, or monthly), regions, and size. You can also manually delete snapshots here by clicking the **Delete** button.

## Manually Back Up Volumes

You can manually back up any Droplets with automatic backups enabled.

From the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **Snapshots**, click **DigitalOcean**, then click **Volumes**. Find the volume in the **Active** list and click **View** to go to the SnapShooter volume page.

On the SnapShooter volume page, in the **Backup Details** section, click **Snapshot Now**. This immediately starts a backup.

In this article...

- [Configure Automatic Volume Backups](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-volumes/#configure-automatic-volume-backups)
- [Manually Back Up Volumes](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-volumes/#manually-back-up-volumes)

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