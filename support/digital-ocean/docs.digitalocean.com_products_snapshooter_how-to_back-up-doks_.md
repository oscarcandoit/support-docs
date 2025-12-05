---
url: "https://docs.digitalocean.com/products/snapshooter/how-to/back-up-doks/"
title: "How to Back Up Resources on DigitalOcean Kubernetes with SnapShooter | DigitalOcean Documentation"
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
- Back Up Managed Kubernetes Resources

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Back Up Resources on DigitalOcean Kubernetes with SnapShooter

Validated on 13 Sep 2024 • Last edited on 9 Apr 2025

SnapShooter is a cloud backup and recovery solution. Use SnapShooter to back up servers, volumes, databases, and applications from DigitalOcean and other cloud providers.

Back up resources such as databases on DigitalOcean Kubernetes (DOKS) clusters with SnapShooter. SnapShooter uses the DigitalOcean API to install a backup agent into your cluster with one click, then manages backups, retention, and data restoration for cluster-internal resources.

Backup agents are available for the following resources:

- MySQL 5+
- PostgreSQL 14+
- MongoDB 4.2+

## Configure Automatic Managed Backups

First, [connect your DigitalOcean team to your SnapShooter account](https://docs.digitalocean.com/products/snapshooter/how-to/connect-digitalocean-teams/). Then, from the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **Snapshots**, select **DigitalOcean**, then **Kubernetes**.

Any managed Kubernetes clusters on your team are visible in the **Kubernetes Clusters** table. To backup resources on a cluster, first click its **Install Agent** button.

![Choose cluster page](https://docs.digitalocean.com/screenshots/snapshooter/doks-cluster-install-agent.b6b18c49efd37c19be24e19bbd27a7f6b70dac856e4a9fae342cacb3d0ed0395.png)

On the next page, select the **Agent Container** type to install. Each SnapShooter agent container provides only the tools necessary to back up a specific type of resource, such as MySQL or PostgreSQL databases.

Select the **Namespace** to install the agent container into.

Click **Auto Install Agent** to install the agent into your cluster and go to the job creation page. This page lists all the backup job types the agent can handle. Here is the list for the **MySQL** agent:

![Create job page for the MySQL agent](https://docs.digitalocean.com/screenshots/snapshooter/doks-mysql-job-create.be207879134db2e1e7853467257f002022da53c4f0c186e7ca384c3e69140220.png)

Select the job type you’d like to use, optionally give the backup job a name, and click **Continue** at the bottom of the page.

This takes you to the job configuration page. Fill out the backup configuration details, click **Test** to verify the information is correct, then **Save and continue**.

Next, select the storage provider used to store the backups. You can also [add DigitalOcean Spaces as a storage provider](https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/) or [use other storage providers](https://docs.digitalocean.com/products/snapshooter/how-to/use-other-storage-providers/).

![Choose storage page](https://docs.digitalocean.com/screenshots/snapshooter/doks-choose-storage.5cbce3c7fb36e1448a5c30d07052032d1a2e3d55ea764797b929aec5f62b1caf.png)

Click **Set Storage** to continue.

On the final page, fill out the fields for backup frequency, backup time, time zone, and retention policy. If you create backups more than once per day, we count your time zone and daily backup time as the tag for the daily backup.

After you fill out the fields, click **Set Schedule and Finish** to finish.

Your backup job is now created and you’re taken to its overview page. This page shows the status of your backup job and its configuration options. You can update the configuration and start a manual backup from this page.

To return to this page in the future, in the left menu click **Backup Jobs**, Find the job in the **Backup Jobs** list and click **View** to go to the SnapShooter backup job page.

## Manually Back Up Cluster Resources

You can manually run any backup job that’s set up with automatic backups.

First, navigate to the job’s overview page: in the left menu click **Backup Jobs**, Find the job in the **Backup Jobs** list and click **View**.

On the job page, in the **Backup Schedule & Retention** section, click **Backup Now**. This immediately starts a backup.

In this article...

- [Configure Automatic Managed Backups](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-doks/#configure-automatic-managed-backups)
- [Manually Back Up Cluster Resources](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-doks/#manually-back-up-cluster-resources)

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