---
url: "https://docs.digitalocean.com/products/snapshooter/how-to/back-up-other-servers/"
title: "How to Back Up Servers from Other Cloud Providers with SnapShooter | DigitalOcean Documentation"
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
- Back Up Other Servers

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Back Up Servers from Other Cloud Providers with SnapShooter

Validated on 26 Sep 2023 • Last edited on 9 Apr 2025

SnapShooter is a cloud backup and recovery solution. Use SnapShooter to back up servers, volumes, databases, and applications from DigitalOcean and other cloud providers.

Note
This feature is deprecated. New users cannot connect accounts from other cloud providers. Existing SnapShooter accounts that are already connected to another cloud provider may continue to use this feature.

Use SnapShooter to manage daily or hourly native backups for servers from other supported cloud providers, like Amazon, Exoscale, and Hetzner.

## Configure Automatic Server Backups

From the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **Snapshots**, click the name of the provider with the server you want to back up.

Any servers on your account are listed on this page. To activate backups for a server, click the **Activate** button to the right of the server you want to back up to go to the configuration page.

![](https://docs.digitalocean.com/screenshots/snapshooter/server-backup.b07d76282ffaf2156bbcf3f59646e09d1639408d2b4575936863164328cbaaf5.png)

Fill out the fields for backup frequency, backup time, and time zone. If you create backups more than once per day, we count your time zone and daily backup time as the tag for the daily backup.

After you fill out the fields, click **Continue** to go to the **Retention Policy** page.

![](https://docs.digitalocean.com/screenshots/snapshooter/server-backup-retention-policy.be4ae134459340de1eb38649679c76ca7093c64c1357fcae72cb0bfd083056a0.png)

When we take a backup, we tag them daily, weekly, and monthly. On this page, you can choose how many of each to keep. We recommend 7 days, 4 weeks, and 12 months respectively as a starting point.

Region replication lets you transfer your server backups to a second region. If your plan supports region replication, you can choose from a list of regions to duplicate backups to.

After you set up automatic backups for a server, you can view the status of the server’s backups by clicking the server in the **Active** tab. This page lists the following information:

- **Server details**, including its IP address and datacenter.
- **Backup details**, including it’s frequency, backup retention, and cost.
- **Snapshots**, which is a table of all completed backups with information on its status (completed or expired), the start time and duration, tags (manual, daily, weekly, or monthly), regions, and size. You can also manually delete snapshots here by clicking the **Delete** button.

## Manually Back Up Servers

You can manually back up any servers with automatic backups enabled.

From the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **Snapshots**, click the name of the cloud provider with the server you want to back up, then click the server in the **Active** list to go to the SnapShooter server page.

On the SnapShooter server page, in the **Backup Details** section, click **Snapshot Now**. This immediately starts a backup.

In this article...

- [Configure Automatic Server Backups](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-other-servers/#configure-automatic-server-backups)
- [Manually Back Up Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-other-servers/#manually-back-up-servers)

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