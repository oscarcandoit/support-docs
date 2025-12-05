---
url: "https://docs.digitalocean.com/products/snapshooter/how-to/connect-other-accounts/"
title: "How to Connect Other Cloud Provider Accounts to a SnapShooter Account | DigitalOcean Documentation"
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
- Connect Other Accounts

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Connect Other Cloud Provider Accounts to a SnapShooter Account

Validated on 26 Sep 2023 • Last edited on 17 Jun 2025

SnapShooter is a cloud backup and recovery solution. Use SnapShooter to back up servers, volumes, databases, and applications from DigitalOcean and other cloud providers.

Note
This feature is deprecated. New users cannot connect accounts from other cloud providers. Existing SnapShooter accounts that are already connected to another cloud provider may continue to add more accounts from that same provider.

Connect accounts from other cloud providers (like Amazon, Google, Hetzner, Exoscale, and Vultr) to SnapShooter to set up daily or hourly backups for servers and other resources.

## About SnapShooter Backups

SnapShooter supports two kinds of backups: native backups and backup jobs.

- _Native backups_ use your cloud provider’s backup product. These products are called different names depending on the provider, like [DigitalOcean Snapshots](https://docs.digitalocean.com/products/snapshots/) or Amazon Machine Images (AMIs).

SnapShooter creates and manages these backups on your behalf by using the provider’s API, which allows you to take more frequent backups with finer control over retention than the cloud providers themselves offer.

- _Backup jobs_ run using SnapShooter’s custom engine to back up hosted resources (like files, application servers, or database servers) to your chosen S3-based storage provider. You can use backup jobs with any server that you can add to SnapShooter.

You can use SnapShooter as your storage provider with [SnapShooter Simple Storage](https://docs.digitalocean.com/products/snapshooter/details/features/), which lets you store backup data without setting up your own storage. Alternatively, you can [set up DigitalOcean Spaces Object Storage](https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/) or [other storage providers](https://docs.digitalocean.com/products/snapshooter/how-to/use-other-storage-providers/), like AWS S3.


To use SnapShooter to manage native backups on other cloud providers, you need to connect your account with a supported cloud provider to your SnapShooter account.

AWS

## Connect an Amazon Web Services Account

We use [AWS IAM](https://aws.amazon.com/iam/) to grant access to your AWS account so you can restrict the permissions to only what is necessary for SnapShooter to function.

From the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **Snapshots**, click **\+ Connect Provider**.

To add a new AWS account to back up EC2 instances, under **Snapshots**, click **AWS**. To add a new AWS account to back up Lightsail instances, under **Snapshots**, click **AWS Lightsail**.

This takes you to the **Connect New Account** page for AWS or AWS Lightsail, respectively. Next, you need to create a new IAM user in your AWS account, and then fill in this page with the account information.

For EC2 instance backups, use the following permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [\
    {\
      "Sid": "snapshooter",\
      "Effect": "Allow",\
      "Action": [\
        "ec2:DescribeImages",\
        "ec2:DeregisterImage",\
        "ec2:DescribeInstances",\
        "ec2:DeleteSnapshot",\
        "ec2:CreateTags",\
        "ec2:DescribeVolumes",\
        "ec2:CreateSnapshot",\
        "ec2:CreateImage",\
        "ec2:DescribeSnapshots"\
      ],\
      "Resource": [\
        "*"\
      ]\
    }\
  ]
}
```

For Lightsail backups, use the following permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [\
    {\
      "Sid": "VisualEditor0",\
      "Effect": "Allow",\
      "Action": [\
        "lightsail:GetInstanceSnapshot",\
        "lightsail:GetInstances",\
        "lightsail:DeleteInstanceSnapshot",\
        "lightsail:GetOperation",\
        "lightsail:GetInstanceSnapshots",\
        "lightsail:GetInstance",\
        "lightsail:GetInstanceState",\
        "lightsail:CreateInstanceSnapshot",\
        "lightsail:TagResource"\
      ],\
      "Resource": "*"\
    }\
  ]
}
```

Once you create the new user, copy the following information from AWS and paste it into SnapShooter:

- Account name
- Access key
- Secret access key
- Region

We encrypt your keys to keep them secure.

After you enter the information, click **Connect AWS Account** or **Connect AWS Lightsail Account**. Once the account is connected, you can start [backing up EC2 and Lightsail instances](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-other-servers/).

You can only configure one region at a time. To back up in more than one region, add a second account and select a different region.

GCP

## Connect a Google Cloud Platform Account

To connect your GCP account to SnapShooter, we use [GCP IAM to grant permissions to a service account](https://cloud.google.com/iam/docs/service-accounts-create) that SnapShooter can use.

### Create a Service Account

First, [log in to Google Cloud Platform](https://console.cloud.google.com/home/dashboard) and navigate to the correct project.

In the left menu, click **IAM & Admin**. Then, in the menu that opens, click **Service Accounts**. At the top of the page, click **+Create Service Account**.

In the **Service account details** page that opens, give the account a name, ID, and a description, then click **Create**.

On the next page, in **Service account permissions**, in the **Role** field, select **Compute Admin**. Accept the defaults for the remaining options to finish creating the account.

This returns you to the list of service accounts. Open the **Actions** menu to the right of the service account, then click **Create key**. Choose JSON, which downloads a file with the service account JSON. Copy the contents of the file.

Finally, from the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **Snapshots**, click **\+ Connect Provider**. Click **Google Cloud Platform**.

This takes you to the **Connect New Account** page for GCP. Enter the account name and zone, then paste the JSON into the **Service Account JSON** field. Click **Connect GCP Account**.

Once the account is connected, you can [back up GCP servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-other-servers/).

Hetzner

## Connect a Hetzner Account

To connect your Hetzner Account to SnapShooter, we use a token generated in your Hetzner account. This grants us read and write access to list instances, as well as create and delete snapshots. We only delete snapshots created by SnapShooter.

Note
You can only connect a Hetzner account to a single SnapShooter account. If you add the same Hetzner account to a second SnapShooter account, the second account does not import servers. You can add any number of Hetzner accounts to your SnapsShooter account.

First, log in to your Hetzner account. Open your project workspace, then click the key in the left menu. From here, click **API Tokens** in the top menu, then click the red **Generate API Token** button in the top right.

![](https://docs.digitalocean.com/screenshots/snapshooter/hetzner/generate-api-token.c981de614c6938fbe241d4dd9e9f8b3562c6cc61a177b071f71d2c04a7a561f3.png)

In the window that opens, enter a name for the token (like “SnapShooter”) in the **Description** box, then click **Generate API Token**.

![](https://docs.digitalocean.com/screenshots/snapshooter/hetzner/generate-token-window.95f949f8c10580f5121b0f4426c39de83b1ffebaa2f063df135f85b4384a9952.png)

The page shows an **API token was added** confirmation message and displays the token. Copy the token.

From the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **Snapshots**, click **\+ Connect Provider**.

Under **Snapshots**, click **Hetzner** to go to the **Connect New Account** page. Enter your credentials, which are the account name and the secret access key (token), then click **Connect Hetzner Account**.

Once the account is connected, you can [back up Hetzner servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-other-servers/).

Exoscale

## Connect an Exoscale Account

YouTube

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

Video unavailable

This video is unavailable

[Visit YouTube to search for more videos](https://www.youtube.com/)

## More videos on YouTube

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=06kAdbzoaGM&embeds_referring_euri=https%3A%2F%2Fdocs.digitalocean.com%2F)

0:00

0:00 / 0:00

•Live

•

Vultr

## Connect a Vultr Account

To connect your Vultr account to SnapShooter, log in to your Vultr account. In the left menu, click **Account** to go to **Account Settings**.

![](https://docs.digitalocean.com/screenshots/snapshooter/vultr/account-settings.3c28a90c708ca6137255902d8ea0ea089aa3563c37602a044abf4e750b1e7d8a.png)

In the top menu, click **API** to go to the **API** page. In the **Personal Access Token** section, copy the generated API key.

![](https://docs.digitalocean.com/screenshots/snapshooter/vultr/personal-access-token.ba467d0367bfcc5ac0087b731cdb13696395fa2acf31a838170422edc81aa05b.png)

Next, in the **Access Control** section, allow [SnapShooter’s IP addresses](https://docs.digitalocean.com/products/snapshooter/details/ip-address-allowlist/).

![](https://docs.digitalocean.com/screenshots/snapshooter/vultr/access-control.2a2df26a9596e54214f0d649ca30332f56ffe9249b05837b5902b7817d00baf9.png)

From the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **Snapshots**, click **\+ Connect Provider**.

Under **Snapshots**, click **Vultr** to go to the **Connect New Account** page. Enter your credentials, which are the account name and the API key (token), then click **Connect Vultr Account**.

Once your account is connected to SnapShooter, you can begin setting up backups.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

How to Back Up Servers from Other Cloud Providers with SnapShooter

This feature is deprecated. Use SnapShooter to manage daily or hourly native backups for servers from other supported cloud providers, like Amazon, Exoscale, and Hetzner.

In this article...

- [About SnapShooter Backups](https://docs.digitalocean.com/products/snapshooter/how-to/connect-other-accounts/#about-snapshooter-backups)

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