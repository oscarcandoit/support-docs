---
url: "https://docs.digitalocean.com/products/snapshooter/how-to/use-other-storage-providers/"
title: "How to Use Other Storage Providers with SnapShooter | DigitalOcean Documentation"
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
- Use Other Storage Providers

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Use Other Storage Providers with SnapShooter

Validated on 26 Sep 2023 • Last edited on 17 Jun 2025

SnapShooter is a cloud backup and recovery solution. Use SnapShooter to back up servers, volumes, databases, and applications from DigitalOcean and other cloud providers.

You can use SnapShooter as your storage provider with [SnapShooter Simple Storage](https://docs.digitalocean.com/products/snapshooter/details/features/), which lets you store backup data without setting up your own storage. Alternatively, you can [set up DigitalOcean Spaces Object Storage](https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/) or [other storage providers](https://docs.digitalocean.com/products/snapshooter/how-to/use-other-storage-providers/), like AWS S3.

This article explains how to set up other supported storage providers with SnapShooter.

Amazon S3

## Set Up Amazon Web Services S3 Object Storage

To add an AWS S3 bucket to SnapShooter, you need to create a new bucket, create a new IAM user, and then add its details to SnapShooter.

### Create a New Bucket

First, log in to your AWS console. In the top menu, select **Services**, then search for S3 and open it.

Click **Create bucket**. Choose a bucket name, your AWS region. Leave **Block all public access** checked. You can leave all other options as the default setting, or customize them. When you’re done, click **Create bucket**.

### Create a New IAM User

In the top menu of the AWS console, click **IAM**. In the left menu, click **Users**, then click the **Add User** button.

Choose a username and check **Programmatic access**. Ignore the permissions section and click **Next: Tags**.

We recommend not using **attach existing policies directly** with AmazonS3FullAccess because this would grant SnapShooter permission for every S3 bucket in your account, which is not necessary.

Click **Next: Review**, then click **Create user**.

In **View Details**, save the secret key. This is the only time the secret key is visible.

Next, in **IAM**, find the user list and click the new user. In the **Permissions** tab, under **Permissions policies**, click **\+ Add inline policy**.

![](https://docs.digitalocean.com/screenshots/snapshooter/aws/iam-inline-policy.28c74f3750df4ef252bce32f6cf0082795a3676aef738229f54367b6d5f675ba.png)

Choose **JSON Editor** and paste the following JSON:

```json
{
  "Version": "2012-10-17",
  "Statement": [\
    {\
      "Effect": "Allow",\
      "Action": [\
        "s3:ListBucket",\
        "s3:DeleteObject",\
        "s3:GetObject",\
        "s3:PutObject",\
        "s3:PutObjectAcl"\
      ],\
      "Resource": [\
        "arn:aws:s3:::USE_YOUR_BUCKET_NAME/*",\
        "arn:aws:s3:::USE_YOUR_BUCKET_NAME"\
      ]\
    }\
  ]
}
```

Replace `USE_YOUR_BUCKET_NAME` on the indicated lines with the bucket name. The two lines should look like this, as an example:

```
"arn:aws:s3:::example.com/*",
"arn:aws:s3:::example.com"
```

Finally, click **Create Policy**.

### Connect Bucket to SnapShooter

From the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **My Resources**, click **External Storage**.

On the **Storage** page, click **Connect S3 Based Storage**. Fill in the following fields:

- **Friendly Name**: A name of your choice for this storage option

- **Storage Provider**: AWS - Amazon Web Services S3

- **Provider Region**: The region where you created the bucket

- **Bucket Name**: The name you chose for the bucket when you created it

- **Access Key** and **Secret Access Key**: The keys you copied when you created the bucket


After you fill in all of the fields, click **Attach External Storage**.

Backblaze B2

## Set Up Backblaze B2 Object Storage

To add a Backblaze B2 bucket to SnapShooter, you need to create a new bucket, create a new application key, and then add those details to SnapShooter.

### Create a New Bucket

First, [log in to Backblaze](https://secure.backblaze.com/user_signin.htm) and go to [B2 Cloud Storage](https://secure.backblaze.com/b2_buckets.htm).

Create a bucket or reuse an existing one. Make sure you select **private**. Note the endpoint, which looks like `s3.us-west-002.backblazeb2.com`, depending on the region and the date of creation.

### Create a New Application Key

In the left menu of Backblaze, click [**App Keys**](https://secure.backblaze.com/app_keys.htm). Click **Add a New Application Key**. Master keys do not work with SnapShooter.

Name the key. We recommend restricting the key to a single bucket. Then click **Create New Key**. Save the application keys because this is the only time they are visible.

### Connect Bucket to SnapShooter

From the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **My Resources**, click **External Storage**.

On the **Storage** page, click **Connect S3 Based Storage**. Fill in the following fields:

- **Friendly Name**: A name of your choice for this storage option

- **Storage Provider**: Backblaze B2

- **Provider Region**: The region where you created the bucket

- **Bucket Name**: The name you chose for the bucket when you created it

- **Access Key**: The `appId` from Backblaze

- **Secret Access Key**: The `applicationKey` from Backblaze


After you fill in all of the fields, click **Attach External Storage**.

UpCloud

## Set Up UpCloud Object Storage

To add an UpCloud bucket to SnapShooter, you need to create a new bucket and then add its details to SnapShooter.

### Create a New Bucket

First, log in to UpCloud and go to [**Object Storage**](https://hub.upcloud.com/object-storage).

Click **New Object Storage**, then choose a region and plan. Enable public network access (which is on by default). Choose a name, which is a custom endpoint. You can leave it black or set a custom URL, like `snapshooter-companyname-backups`. Then choose a bucket name, like `backups`.

Click **Create Object Storage**. Copy the access key and secret. This is the only time they are visible.

### Connect Bucket to SnapShooter

From the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **My Resources**, click **External Storage**.

On the **Storage** page, click **Connect S3 Based Storage**. Fill in the following fields:

- **Friendly Name**: A name of your choice for this storage option

- **Storage Provider**: UpCloud

- **Provider Region**: The region where you created the bucket

- **Bucket Name**: The name you chose for the bucket when you created it in the format `BUCKET_NAME.OBJECT_STORAGE_NAME`. In the example above, this would be `backups.snapshooter-companyname-backups`.

- **Access Key** and **Secret Access Key**: The keys you copied when you created the bucket


After you fill in all of the fields, click **Attach External Storage**.

Custom S3

## Set Up Custom S3 Object Storage

If you use a custom S3 provider, you need to provide the endpoint (the URL where the host is available), the bucket name, the access key, and the secret key.

Note
Your custom S3 endpoint must respond to requests within 1000 milliseconds. Longer response times can create reliability issues during backup and restore operations.

From the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **My Resources**, click **External Storage**.

On the **Storage** page, click **Connect S3 Based Storage**. Fill in the following fields:

- **Friendly Name**: A name of your choice for this storage option

- **Storage Provider**: Custom

- **S3 Endpoint**: The URL where the host is available

- **Bucket Name**: The name you chose for the bucket

- **Access Key** and **Secret Access Key**


After you fill in all of the fields, click **Attach External Storage**.

Google Drive

## Set Up Google Drive

Note
SnapShooter accounts created after 19 October 2023 cannot use Google Drive or Dropbox as a SnapShooter storage provider. See [the release note](https://docs.digitalocean.com/notes/2023/snapshooter-storage-deprecation/) for alternatives.

To use Google Drive as a storage provider for SnapShooter, you need to allow SnapShooter to have access to your Google Drive.

From the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **My Resources**, click **External Storage**.

Click **Connect Google Drive**, then choose a Google account and follow the authorization flow to grant SnapShooter access.

Once Google Drive is connected to SnapShooter, it is listed as a storage provider option.

Dropbox

## Set Up Dropbox

Note
SnapShooter accounts created after 19 October 2023 cannot use Dropbox or Google Drive as a SnapShooter storage provider. See [the release note](https://docs.digitalocean.com/notes/2023/snapshooter-storage-deprecation/) for alternatives.

To use Dropbox as a storage provider for SnapShooter, you need to allow SnapShooter to have access to your Dropbox account.

From the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **My Resources**, click **External Storage**.

Click **Connect Dropbox**, then log in to your Dropbox account and follow the authorization flow to grant SnapShooter access.

Once Dropbox is connected to SnapShooter, it is listed as a storage provider option.

In this article...

[How to Use Other Storage Providers with SnapShooter](https://docs.digitalocean.com/products/snapshooter/how-to/use-other-storage-providers/)

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