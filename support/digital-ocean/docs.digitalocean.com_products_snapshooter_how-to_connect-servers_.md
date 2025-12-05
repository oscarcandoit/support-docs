---
url: "https://docs.digitalocean.com/products/snapshooter/how-to/connect-servers/"
title: "How to Connect Servers Using SSH | DigitalOcean Documentation"
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
- Connect Server Using SSH

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Connect Servers Using SSH

Validated on 26 Sep 2023 • Last edited on 17 Jun 2025

SnapShooter is a cloud backup and recovery solution. Use SnapShooter to back up servers, volumes, databases, and applications from DigitalOcean and other cloud providers.

Connect servers directly to SnapShooter to set up backup jobs, which run using SnapShooter’s custom engine to back up hosted resources (like files, databases, and applications) to your chosen S3-based storage provider.

## About SnapShooter Backups

SnapShooter supports two kinds of backups: native backups and backup jobs.

- _Native backups_ use your cloud provider’s backup product. These products are called different names depending on the provider, like [DigitalOcean Snapshots](https://docs.digitalocean.com/products/snapshots/) or Amazon Machine Images (AMIs).

SnapShooter creates and manages these backups on your behalf by using the provider’s API, which allows you to take more frequent backups with finer control over retention than the cloud providers themselves offer.

- _Backup jobs_ run using SnapShooter’s custom engine to back up hosted resources (like files, application servers, or database servers) to your chosen S3-based storage provider. You can use backup jobs with any server that you can add to SnapShooter.

You can use SnapShooter as your storage provider with [SnapShooter Simple Storage](https://docs.digitalocean.com/products/snapshooter/details/features/), which lets you store backup data without setting up your own storage. Alternatively, you can [set up DigitalOcean Spaces Object Storage](https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/) or [other storage providers](https://docs.digitalocean.com/products/snapshooter/how-to/use-other-storage-providers/), like AWS S3.


## Add Servers Directly to SnapShooter

To use SnapShooter backup jobs, you need to add servers directly to SnapShooter.

From the [SnapShooter app](https://app.snapshooter.com/), in the left menu under **My resources**, click **Servers**. In the top right, click the green **Connect Server +** button.

There are two ways to add the server: by using our setup script, or by entering the server details manually.

Using our setup script

Choose the SnapShooter SSH key that you want to use, or click **Generate New Key** to create a new one.

[SSH into your server](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) as root, then copy and paste the provided `curl [...] | bash` command to run our setup script. The output looks like this:

```
Welcome to SnapShooter Server Setup
Environment Detected: OS: linux, OS Type: amd64
Installing SSH public key
Creating temp SSH key file
grep: /root/.ssh/authorized_keys: No such file or directory
cp: cannot stat '/root/.ssh/authorized_keys': No such file or directory
Creating authorized_keys backup /root/.ssh/authorized_keys.bak-1658892360
Key Installed /root/.ssh/authorized_keys
Removing temp SSH key file
Scanning SSH config
Checking 22
matched (22)
SSH test confirmed, Server Added to SnapShooter ...
```

SnapShooter scans for the server response and adds the server to your account.

Entering server details manually

To enter server details manually, in the top right, click the **Manual Setup** button. Choose the SnapShooter SSH key that you want to use, or click **Generate New Key** to create a new one.

[SSH into your server](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/), then paste the provided SSH public key into `~/.ssh/authorized_keys`.

Next, provide the server details: the name, host (IP address or domain name), username, and port. Click **Test Connection** to confirm the configuration and add the server to SnapShooter.

Once the server is added, you can configure backup jobs for it.

## Debug Common Issues

### Firewall Restrictions

We use SSH to access to your servers. If you restrict access to your server using a firewall, you need to allow SnapShooter’s IP addresses to access your server in order for SnapShooter to function.

![](https://docs.digitalocean.com/images/icons/snapshooter.svg)

SnapShooter SSH IP Address Allowlist

These IP addresses must have SSH access to your server for SnapShooter to function.

### Root Connection

If SSH remote root login is disabled on your server, you may see a “Root does not permit root connection” error when connecting your server to SnapShooter.

To enable SSH remote root login, SSH into your server, then edit the `/etc/ssh/sshd_config` configuration file. Find the `PermitRootLogin no` line, change it to `PermitRootLogin yes`, then save the file.

Restart the SSH service for the changes to take effect:

```command
systemctl restart sshd
```

### NAT Gateway

If your server is behind a NAT gateway, you need to configure your router to forward port 22/TCP to your server’s internal IP address.

In this article...

- [About SnapShooter Backups](https://docs.digitalocean.com/products/snapshooter/how-to/connect-servers/#about-snapshooter-backups)
- [Add Servers Directly to SnapShooter](https://docs.digitalocean.com/products/snapshooter/how-to/connect-servers/#add-servers-directly-to-snapshooter)
- [Debug Common Issues](https://docs.digitalocean.com/products/snapshooter/how-to/connect-servers/#debug-common-issues)
  - [Firewall Restrictions](https://docs.digitalocean.com/products/snapshooter/how-to/connect-servers/#firewall-restrictions)
  - [Root Connection](https://docs.digitalocean.com/products/snapshooter/how-to/connect-servers/#root-connection)
  - [NAT Gateway](https://docs.digitalocean.com/products/snapshooter/how-to/connect-servers/#nat-gateway)

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