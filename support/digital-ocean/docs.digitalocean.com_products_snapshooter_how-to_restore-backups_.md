---
url: "https://docs.digitalocean.com/products/snapshooter/how-to/restore-backups/"
title: "How to Restore Backups | DigitalOcean Documentation"
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
- Restore Backups

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Restore Backups

Validated on 26 Sep 2023 • Last edited on 9 Apr 2025

SnapShooter is a cloud backup and recovery solution. Use SnapShooter to back up servers, volumes, databases, and applications from DigitalOcean and other cloud providers.

Use SnapShooter to restore data backed up by SnapShooter backup jobs. A _restore wizard_ helps you configure and start the restoration process.

You must restore SnapShooter native backups, or _snapshots_, through your cloud provider’s interface or API. You can restore _backups_ found on the **Backup Jobs** page through SnapShooter directly.

## Restore Data from a Backup Job

Navigate to [the **Backup Jobs** page of SnapShooter](https://app.snapshooter.com/jobs). The page lists all of your backup jobs:

![A screenshot of the SnapShooter backup jobs page, with a list of jobs including columns for name, job type, server name, status, last run time, and action buttons for viewing more details](https://docs.digitalocean.com/screenshots/snapshooter/backup-jobs-list.abdbd3de1c7cafac30c5ac84f500fa0e606c03c7e77c5fbbc4f1d1d7bf36de92.png)

Click **View** next to the job you want to restore to load the job page, which displays configuration and scheduling details:

![A screenshot of a backup job's details page. The header includes the server name, job name, and action buttons for 'Restore Wizard', 'Settings', and a pause button. There are tables for viewing and updating 'Backup Configuration' and 'Backup Schedule & Retention'](https://docs.digitalocean.com/screenshots/snapshooter/backup-job-view.c3a34be3b08463f5fb28de0956e8977507250269bdf94064e20e8456f5029838.png)

Click **Restore Wizard** to begin setting up the restore. The configuration process is different for each backup type. Follow the directions to complete the setup, then click **Start Restore**.

The restore begins immediately. Your restoration jobs and their statuses are listed on [the SnapShooter **Restoration Jobs** page](https://app.snapshooter.com/restore).

## Cancel a Restoration Job

Navigate to [the SnapShooter **Restoration Jobs** page](https://app.snapshooter.com/restore):

![A screenshot of the 'Restoration Jobs' page with two jobs listed in a table. There are columns for status, name, job type, number of files, restoration date, and a 'View' action button. The status of the first job listed is a rotating yellow circle, showing the job is still in progress. The second job has a white checkmark inside a green circle, indicating the job is done.](https://docs.digitalocean.com/screenshots/snapshooter/restoration-jobs-list.44e7edef821f556bd316a5d8076b9ad748a5ecb23267d73f3393fecab4255812.png)

Click **View** on the restoration job you want to cancel to load the job details page:

![A screenshot of a restoration job details page, showing the tile of the job and the date of the backup being restored, along with an 'elapsed time' display and a red 'Abort Backup Restore' button.](https://docs.digitalocean.com/screenshots/snapshooter/abort-backup-restore.ea6330bb271d12b5108090c6ee0ea1f2f366ce3bf45dedc1a8cbc7823977043e.png)

Click **Abort Backup Restore** to cancel the job.

In this article...

- [Restore Data from a Backup Job](https://docs.digitalocean.com/products/snapshooter/how-to/restore-backups/#restore-data-from-a-backup-job)
- [Cancel a Restoration Job](https://docs.digitalocean.com/products/snapshooter/how-to/restore-backups/#cancel-a-restoration-job)

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