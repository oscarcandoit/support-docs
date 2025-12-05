---
url: "https://docs.digitalocean.com/products/snapshooter/how-to/back-up-managed-databases/"
title: "How to Back Up DigitalOcean Managed Databases with SnapShooter | DigitalOcean Documentation"
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
- Back Up Managed Databases

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Back Up DigitalOcean Managed Databases with SnapShooter

Validated on 31 May 2024 • Last edited on 9 Apr 2025

SnapShooter is a cloud backup and recovery solution. Use SnapShooter to back up servers, volumes, databases, and applications from DigitalOcean and other cloud providers.

Back up DigitalOcean Managed Databases periodically with SnapShooter. SnapShooter uses the DigitalOcean API via OAuth authentication to take backups and prune them on your behalf.

## Configure Automatic Managed Database Backups

First, [connect your DigitalOcean team to your SnapShooter account](https://docs.digitalocean.com/products/snapshooter/how-to/connect-digitalocean-teams/). Then, from the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **Snapshots**, click **DigitalOcean**, then **Databases**.

Any managed databases on your team are visible in the **Database Clusters** table. To activate backups for a database, click its **Configure Backup** button.

![Choose database page.](https://docs.digitalocean.com/screenshots/snapshooter/db-choose-db.b5a74a9f926bc121c3f4319965505a837375c634d3982fc6cd0fb1ca45b375a3.png)

Select the storage provider that you want to use to store the backups. You can also [add DigitalOcean Spaces as a storage provider](https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/) or [use other storage providers](https://docs.digitalocean.com/products/snapshooter/how-to/use-other-storage-providers/).

![Choose storage page.](https://docs.digitalocean.com/screenshots/snapshooter/db-choose-storage.b83db2bf9a9fc5a9428279a67ca207335cbd7f2d49c2115359022d83c3ad8dda.png)

Click **Set Storage** to continue.

On the next page, fill out the fields for backup frequency, backup time, time zone, and retention policy. If you create backups more than once per day, we count your time zone and daily backup time as the tag for the daily backup.

After you fill out the fields, click **Set Schedule and Finish** to finish.

Your backup job is now created and you’re taken to its overview page. This page shows the status of your backup job and its configuration options. You can update the configuration, start a manual backup, pause the job, or restore a backup from this page.

To return to this page in the future, in the left menu under **Snapshots**, click **DigitalOcean**, then **Databases**. Find the database in the **Database Clusters** list and click **View Backup Job** to go to the SnapShooter database backup job page.

## Manually Back Up Databases

You can manually back up any databases with automatic backups enabled.

From the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **Snapshots**, click **DigitalOcean**, then **Databases**. Find the database in the **Database Clusters** list and click **View Backup Job** to go to the SnapShooter database backup job page.

On the backup job page, in the **Backup Schedule & Retention** section, click **Backup Now**. This immediately starts a backup.

In this article...

- [Configure Automatic Managed Database Backups](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-managed-databases/#configure-automatic-managed-database-backups)
- [Manually Back Up Databases](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-managed-databases/#manually-back-up-databases)

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