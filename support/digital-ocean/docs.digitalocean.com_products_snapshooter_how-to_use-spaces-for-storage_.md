---
url: "https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/"
title: "How to Use DigitalOcean Spaces Object Storage with SnapShooter | DigitalOcean Documentation"
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
- Use Spaces Object Storage

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Use DigitalOcean Spaces Object Storage with SnapShooter

Validated on 26 Sep 2023 • Last edited on 17 Jun 2025

SnapShooter is a cloud backup and recovery solution. Use SnapShooter to back up servers, volumes, databases, and applications from DigitalOcean and other cloud providers.

You can use SnapShooter as your storage provider with [SnapShooter Simple Storage](https://docs.digitalocean.com/products/snapshooter/details/features/), which lets you store backup data without setting up your own storage. Alternatively, you can [set up DigitalOcean Spaces Object Storage](https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/) or [other storage providers](https://docs.digitalocean.com/products/snapshooter/how-to/use-other-storage-providers/), like AWS S3.

This article explains how to set up DigitalOcean Spaces Object Storage with SnapShooter.

## Create a Bucket

First, you need to create a new bucket and then generate access keys for it.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Create a Spaces Bucket

Create a Spaces bucket to store and serve large amounts of data. Create multiple Spaces buckets at no additional cost to use as logical units for segmenting content.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Manage Access to Spaces

Allow people or programs to co-manage Spaces with the owner of the Spaces bucket using access keys or DigitalOcean Teams.

First, [create a new bucket](https://docs.digitalocean.com/products/spaces/how-to/create/) with the following two settings:

1. Do not enable the CDN. This bucket is for private backup files.

2. Choose **restrict file listing**. If you accidentally enable file listing, you can [change the file listing visibility](https://docs.digitalocean.com/products/spaces/how-to/set-file-listing-permissions/) at any time after creation.


After you create the bucket, you need to [generate access keys](https://docs.digitalocean.com/products/spaces/how-to/manage-access/) for it. From the [control panel](https://cloud.digitalocean.com/), click **API**.

Click the **Spaces Keys** tab and select **Generate New Key**. A text box in the **Spaces access keys** section opens. Name the key (you need this name later to add the bucket to SnapShooter), then click the checkmark.

![The text box to name a new key](https://docs.digitalocean.com/screenshots/spaces/key-create.988ddd00766e7502087cc0a1c7ead4489fb5db5e4771f0d26329cc9ee6dbb2ce.png)

Once you name the key, the access key and the secret key become visible. This is the only time the secret key is displayed, so copy it immediately.

![Spaces Access and Secret Keys.](https://docs.digitalocean.com/screenshots/spaces/key-create-with-secret.f05c0efca5cffea8461ae092936dc4692ae0e4cb27e427d555d6c36c091c03ab.png)

## Add the Bucket to SnapShooter

From the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **My Resources**, click **External Storage**.

On the **Storage** page, click **Connect S3 Based Storage**. Fill in the following fields:

- **Friendly Name**: A name of your choice for this storage option

- **Storage Provider**: DigitalOcean Spaces

- **Provider Region**: The region where you created the bucket

- **Bucket Name**: The name you chose for the bucket when you created it

- **Access Key** and **Secret Access Key**: The keys you copied earlier


After you fill in all of the fields, click **Attach External Storage**.

In the background, SnapShooter performs a test by creating a file and then deleting it to make sure API access to the bucket is working.

In this article...

- [Create a Bucket](https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/#create-a-bucket)
- [Add the Bucket to SnapShooter](https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/#add-the-bucket-to-snapshooter)

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