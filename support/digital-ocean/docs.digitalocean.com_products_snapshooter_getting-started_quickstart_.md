---
url: "https://docs.digitalocean.com/products/snapshooter/getting-started/quickstart/"
title: "SnapShooter Quickstart | DigitalOcean Documentation"
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

- [Getting Started](https://docs.digitalocean.com/products/snapshooter/getting-started/)
- Quickstart

[Give Feedback](https://ideas.digitalocean.com/documentation)

# SnapShooter Quickstart

Validated on 26 Sep 2023 • Last edited on 17 Jun 2025

SnapShooter is a cloud backup and recovery solution. Use SnapShooter to back up servers, volumes, databases, and applications from DigitalOcean and other cloud providers.

To get started with SnapShooter, first you need to create a SnapShooter account. You can get started for free:

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

Register for SnapShooter

Create a SnapShooter account to try the service for free.

snapshooter.com

Once you have a SnapShooter account, you can set up backups for servers, volumes, databases, and applications.

## About SnapShooter Backups

SnapShooter supports two kinds of backups: native backups and backup jobs.

- _Native backups_ use your cloud provider’s backup product. These products are called different names depending on the provider, like [DigitalOcean Snapshots](https://docs.digitalocean.com/products/snapshots/) or Amazon Machine Images (AMIs).

SnapShooter creates and manages these backups on your behalf by using the provider’s API, which allows you to take more frequent backups with finer control over retention than the cloud providers themselves offer.

- _Backup jobs_ run using SnapShooter’s custom engine to back up hosted resources (like files, application servers, or database servers) to your chosen S3-based storage provider. You can use backup jobs with any server that you can add to SnapShooter.

You can use SnapShooter as your storage provider with [SnapShooter Simple Storage](https://docs.digitalocean.com/products/snapshooter/details/features/), which lets you store backup data without setting up your own storage. Alternatively, you can [set up DigitalOcean Spaces Object Storage](https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/) or [other storage providers](https://docs.digitalocean.com/products/snapshooter/how-to/use-other-storage-providers/), like AWS S3.


## Using Native Backups

To use SnapShooter for native backups, you need to connect at least one team from DigitalOcean:

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Connect DigitalOcean Teams to a SnapShooter Account

You can connect any number of DigitalOcean teams to a single SnapShooter account to set up daily backups for Droplets and volumes on those teams.

Then, you can set up native backups:

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up DigitalOcean Droplets with SnapShooter

Back up DigitalOcean Droplets daily with SnapShooter. SnapShooter uses the DigitalOcean API via OAuth authentication to take backups and prune them on your behalf.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up DigitalOcean Volumes with SnapShooter

Back up DigitalOcean Volumes Block Storage daily with SnapShooter. SnapShooter uses the DigitalOcean API via OAuth authentication to take backups and prune them on your behalf.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up Servers from Other Cloud Providers with SnapShooter

This feature is deprecated. Use SnapShooter to manage daily or hourly native backups for servers from other supported cloud providers, like Amazon, Exoscale, and Hetzner.

## Using Backup Jobs

To use SnapShooter’s backup jobs, you need to choose a storage provider.

You can use SnapShooter as your storage provider with [SnapShooter Simple Storage](https://docs.digitalocean.com/products/snapshooter/details/features/), which lets you store backup data without setting up your own storage. Alternatively, you can [set up DigitalOcean Spaces Object Storage](https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/) or [other storage providers](https://docs.digitalocean.com/products/snapshooter/how-to/use-other-storage-providers/), like AWS S3.

After you choose a storage provider, you can back up files, databases, applications, and anything else we have a backup job for:

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up Files with SnapShooter

Use SnapShooter to automatically create a full or incremental backup of your server files, compress it, and schedule future backups.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up MySQL Servers with SnapShooter

Use SnapShooter to automatically create backups for a MySQL database server and store them in S3-based storage of your choice.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up WordPress Servers with SnapShooter

Use SnapShooter to automatically create compressed backups for your WordPress database and website directory and transfer them automatically to S3-based storage of your choice.

In this article...

- [About SnapShooter Backups](https://docs.digitalocean.com/products/snapshooter/getting-started/quickstart/#about-snapshooter-backups)
- [Using Native Backups](https://docs.digitalocean.com/products/snapshooter/getting-started/quickstart/#using-native-backups)
- [Using Backup Jobs](https://docs.digitalocean.com/products/snapshooter/getting-started/quickstart/#using-backup-jobs)

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