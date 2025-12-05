---
url: "https://docs.digitalocean.com/products/snapshooter/details/features/"
title: "SnapShooter Features | DigitalOcean Documentation"
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

- [Details](https://docs.digitalocean.com/products/snapshooter/details/)
- Features

[Give Feedback](https://ideas.digitalocean.com/documentation)

# SnapShooter Features

Validated on 26 Sep 2023 • Last edited on 17 Jun 2025

SnapShooter is a cloud backup and recovery solution. Use SnapShooter to back up servers, volumes, databases, and applications from DigitalOcean and other cloud providers.

## Supported Backup Types

SnapShooter supports two kinds of backups: native backups and backup jobs.

- _Native backups_ use your cloud provider’s backup product. These products are called different names depending on the provider, like [DigitalOcean Snapshots](https://docs.digitalocean.com/products/snapshots/) or Amazon Machine Images (AMIs).

SnapShooter creates and manages these backups on your behalf by using the provider’s API, which allows you to take more frequent backups with finer control over retention than the cloud providers themselves offer.

- _Backup jobs_ run using SnapShooter’s custom engine to back up hosted resources (like files, application servers, or database servers) to your chosen S3-based storage provider. You can use backup jobs with any server that you can add to SnapShooter.

You can use SnapShooter as your storage provider with [SnapShooter Simple Storage](https://docs.digitalocean.com/products/snapshooter/details/features/), which lets you store backup data without setting up your own storage. Alternatively, you can [set up DigitalOcean Spaces Object Storage](https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/) or [other storage providers](https://docs.digitalocean.com/products/snapshooter/how-to/use-other-storage-providers/), like AWS S3.


Some customers require custom backup jobs for their platforms and requirements. We have deployed a number of these for managed hosting providers. If you’re interested in a custom backup job for your team, [contact support](https://docs.digitalocean.com/products/snapshooter/support/).

## Supported Cloud Providers for Native Backups

We support the following providers for native backups.

- Amazon Web Services (AWS)
- Amazon Lightsail
- DigitalOcean
- Exoscale
- Hetzner


Your native backups are stored with your provider in the same datacenter that the server is located. You pay the fees associated with the storage directly to the provider.

If you enable region replication with DigitalOcean backups your snapshot is transferred to the second region of your choice. Please make sure this is in line with your own DPA agreements.

## Supported Storage Providers for Backup Jobs

### SnapShooter Simple Storage

SnapShooter Simple Storage is a way to store your backups without having to create and manage your own S3-based storage.

SnapShooter Simple Storage is built on AWS S3. Each team in SnapShooter that requests storage is registered under a new AWS account in the SnapShooter primary account. This account belongs to a single team which is free to create as many buckets in any AWS region as they wish. When we perform a backup on your server, we generate a time-limited STS token limited in scope to the server to perform the backup.

We use one AWS account per team because AWS has a bucket per account limit which we would exceed. We also wanted to offer a truly segregated system to maximize security and monitoring. For our enterprise customers, this also lets us give direct access to the AWS account if required.

### Other Cloud Storage Providers

You can also choose to use your own S3-based storage.

We support the following storage providers:

- Amazon Web Services (AWS) S3
- Backblaze B2
- DigitalOcean Spaces
- Filebase
- UpCloud
- Wasabi

Additionally, we support adding your own S3-based storage provider, like MinIO.

In this article...

- [Supported Backup Types](https://docs.digitalocean.com/products/snapshooter/details/features/#supported-backup-types)
- [Supported Cloud Providers for Native Backups](https://docs.digitalocean.com/products/snapshooter/details/features/#supported-cloud-providers-for-native-backups)
- [Supported Storage Providers for Backup Jobs](https://docs.digitalocean.com/products/snapshooter/details/features/#supported-storage-providers-for-backup-jobs)
  - [SnapShooter Simple Storage](https://docs.digitalocean.com/products/snapshooter/details/features/#snapshooter-simple-storage)
  - [Other Cloud Storage Providers](https://docs.digitalocean.com/products/snapshooter/details/features/#other-cloud-storage-providers)

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