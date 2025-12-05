---
url: "https://docs.digitalocean.com/products/snapshooter/how-to/"
title: "SnapShooter How-Tos | DigitalOcean Documentation"
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

- How-Tos

[Give Feedback](https://ideas.digitalocean.com/documentation)

# SnapShooter How-Tos

Generated on 25 Nov 2025

SnapShooter is a cloud backup and recovery solution. Use SnapShooter to back up servers, volumes, databases, and applications from DigitalOcean and other cloud providers.

## Connect Accounts

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Connect DigitalOcean Teams to a SnapShooter Account

You can connect any number of DigitalOcean teams to a single SnapShooter account to set up daily backups for Droplets and volumes on those teams.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Connect Other Cloud Provider Accounts to a SnapShooter Account

This feature is deprecated. Connect accounts from other cloud providers to SnapShooter to set up daily or hourly backups for servers and other resources.

## Connect Servers and Storage Providers

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Connect Servers Using SSH

Connect servers directly to SnapShooter to set up backup jobs, which run using SnapShooter’s custom engine to back up hosted resources (like files, databases, and applications) to your chosen S3-based storage provider.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Connect Servers Using the SnapShooter Agent

Use the SnapShooter Agent to connect SnapShooter to private resources that are behind a NAT gateway or firewall.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Connect Containers Using the SnapShooter Agent

Use the SnapShooter Agent in a container to connect SnapShooter to private resources that are behind a NAT gateway or firewall.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Use DigitalOcean Spaces Object Storage with SnapShooter

Set up DigitalOcean Spaces Object Storage as your SnapShooter storage provider to save backup files to a Spaces bucket.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Use Other Storage Providers with SnapShooter

Set up other storage providers, like AWS S3, Google Drive, or Dropbox, to store SnapShooter backup files.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up Resources on DigitalOcean Kubernetes with SnapShooter

Back up resources such as databases on DigitalOcean Kubernetes (DOKS) clusters with SnapShooter. SnapShooter uses the DigitalOcean API to install a backup agent into your cluster with one click, then manages backups, retention, and data restoration for cluster-internal resources.

## Configure Backup Jobs

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Add an Encryption Key

You can use encryption keys to secure your files before SnapShooter stores them. You must generate a public and private key pair on your local machine, then add the public key to SnapShooter. This ensures that only you, the private key holder, have access to your encrypted backups.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up Files with SnapShooter

Use SnapShooter to automatically create a full or incremental backup of your server files, compress it, and schedule future backups.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Add Pre- and Post-Backup Scripts for SnapShooter Backup Jobs

You can write scripts to perform actions before and after SnapShooter backup jobs, like closing a file-based database before a backup and reopening it after the backup.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Restore Backups

Use SnapShooter to restore data backed up by SnapShooter backup jobs. A _restore wizard_ helps you configure and start the restoration process.

## Configure Native Backups

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up DigitalOcean Droplets with SnapShooter

Back up DigitalOcean Droplets daily with SnapShooter. SnapShooter uses the DigitalOcean API via OAuth authentication to take backups and prune them on your behalf.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up DigitalOcean Volumes with SnapShooter

Back up DigitalOcean Volumes Block Storage daily with SnapShooter. SnapShooter uses the DigitalOcean API via OAuth authentication to take backups and prune them on your behalf.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up Servers from Other Cloud Providers with SnapShooter

This feature is deprecated. Use SnapShooter to manage daily or hourly native backups for servers from other supported cloud providers, like Amazon, Exoscale, and Hetzner.

## Back Up Database Servers

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up DigitalOcean Managed Databases with SnapShooter

Back up DigitalOcean Managed Databases periodically with SnapShooter. SnapShooter uses the DigitalOcean API via OAuth authentication to take backups and prune them on your behalf.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up PostgreSQL Servers with SnapShooter

Use SnapShooter to automatically create backups for a PostgreSQL database server and store them in S3-based storage of your choice.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up MySQL Servers with SnapShooter

Use SnapShooter to automatically create backups for a MySQL database server and store them in S3-based storage of your choice.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up MongoDB Servers with SnapShooter

Use SnapShooter to automatically create backups for a MongoDB database server and store them in S3-based storage of your choice.

## Back Up Application Servers

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up WordPress Servers with SnapShooter

Use SnapShooter to automatically create compressed backups for your WordPress database and website directory and transfer them automatically to S3-based storage of your choice.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up Laravel Servers with SnapShooter

Use SnapShooter to automatically create compressed backups for your Laravel database and website directory and transfer them automatically to S3-based storage of your choice.

In this article...

[SnapShooter How-Tos](https://docs.digitalocean.com/products/snapshooter/how-to/)

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