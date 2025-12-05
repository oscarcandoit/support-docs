---
url: "https://docs.digitalocean.com/products/snapshooter/how-to/add-an-encryption-key/"
title: "How to Add an Encryption Key | DigitalOcean Documentation"
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
- Add an Encryption Key

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Add an Encryption Key

Validated on 16 Oct 2023 • Last edited on 9 Apr 2025

SnapShooter is a cloud backup and recovery solution. Use SnapShooter to back up servers, volumes, databases, and applications from DigitalOcean and other cloud providers.

You can use encryption keys to secure your files before SnapShooter stores them. You must generate a public and private key pair on your local machine, then add the public key to SnapShooter. This ensures that only you, the private key holder, have access to your encrypted backups.

## Create an Encryption Key

macOS

To create a key on macOS, use the `Terminal` app to access your Mac’s command line, then create a directory to store your keys. This example uses a directory called `snapshooter` in your home directory:

```shell
mkdir ~/snapshooter
```

Use the `cd` command to move into the `snapshooter` directory:

```shell
cd ~/snapshooter
```

Run the `openssl` command to generate a 4096-bit private key:

```shell
openssl genrsa -aes256 -out snapshooter.pem 4096
```

The command prompts you to set a passphrase. Enter a strong passphrase and press `Enter`. Enter the passphrase a second time to verify, if prompted to do so. You cannot access your backups without both the private key and this passphrase, so keep them safe.

Next, generate the public key using `openssl` and your private key:

```shell
openssl rsa -in snapshooter.pem -outform PEM -pubout -out snapshooter.pub
```

Enter the private key’s passphrase when prompted.

You now have a private key `snapshooter.pem`, and a public key `snapshooter.pub`. Copy the public key to your clipboard using `pbcopy`:

```shell
cat snapshoot.pub | pbcopy
```

Use this public key to paste into the SnapShooter dashboard. See the next section for more details.

Linux

To create a key on Linux, use a local terminal application or SSH connection to access your machine’s command line, then create a directory to store your keys. This example uses a directory called `snapshooter` in your home directory:

```shell
mkdir ~/snapshooter
```

Use the `cd` command to move into the `snapshooter` directory:

```shell
cd ~/snapshooter
```

Run the `openssl` command to generate a 4096-bit private key:

```shell
openssl genrsa -aes256 -out snapshooter.pem 4096
```

The command prompts you to set a passphrase. Enter a strong passphrase and press `Enter`. Enter the passphrase a second time to verify, if prompted to do so. You cannot access your backups without both the private key and this passphrase, so keep them safe.

Next, generate the public key using `openssl` and your private key:

```shell
openssl rsa -in snapshooter.pem -outform PEM -pubout -out snapshooter.pub
```

Enter the private key’s passphrase when prompted.

You now have a private key, `snapshooter.pem`, and a public key, `snapshooter.pub`. Display the public key using `cat`:

```shell
cat snapshooter.pub
```

Copy the resulting text to your clipboard, then paste it into the SnapShooter dashboard. See the next section for more details.

Windows

To create a key on Windows, you need to download and install OpenSSL.

### Install OpenSSL

In a web browser, open the [OpenSSL download page](https://slproweb.com/products/Win32OpenSSL.html). Scroll to the list of downloads and choose the latest OpenSSL version to download to your computer.

Double click the downloaded file to start the installation and proceed through the installation steps. You can choose the default settings throughout unless you have reason to customize the installation.

Click the final **Install** button to complete the installation.

### Generate Keys

After you install OpenSSL, you need to generate public and private keys.

On your Windows Desktop, search for **OpenSSL**:

![screenshot of the Windows search results for the query 'OpenSSL'. The results show 'Win64 OpenSSL Command Prompt'](https://docs.digitalocean.com/screenshots/snapshooter/windows-openssl-search.e3ecdadc0afdd2ca6c175d8a92c8ef73d24c6f7b4f8630a1cebc92a685bfbd6f.png)

Click the **Win64 OpenSSL Command Prompt** result to open the OpenSSL command prompt:

![screenshot of the Win64 OpenSSL Command Prompt, which is a Windows command line prompt with some OpenSSL information printed at the top, and a C:\Users\Administrator> prompt](https://docs.digitalocean.com/screenshots/snapshooter/windows-openssl-prompt.22589b08e49d23161639a73c1b92a1a109ff6e3075fd95edccfa3a33058b4356.png)

Run the `openssl` command to generate a 4096-bit private key:

```shell
openssl genrsa -aes256 -out snapshooter.pem 4096
```

The command prompts you to set a passphrase. Enter a strong passphrase and press `Enter`. Enter the passphrase a second time to verify, if prompted to do so. You cannot access your backups without both the private key and this passphrase, so keep them safe.

Generate the public key using `openssl` and your private key:

```shell
openssl rsa -in snapshooter.pem -outform PEM -pubout -out snapshooter.pub
```

Enter the private key’s passphrase when prompted. You now have a private key `snapshooter.pem`, and a public key `snapshooter.pub`.

Open your generated `snapshooter.pub` file using a text editor like Notepad and copy the contents to your clipboard. Use this public key to paste into the SnapShooter dashboard. See the next section for more details.

## Add Encryption Keys to SnapShooter

To add your public key to SnapShooter, open the [SnapShooter new encryption key page](https://app.snapshooter.com/settings/encryption/create).

Enter a name for your key under **Key Name**, then paste your key into the **Public Key Content** text area.

Click **Save Key** to save your key.

In this article...

- [Create an Encryption Key](https://docs.digitalocean.com/products/snapshooter/how-to/add-an-encryption-key/#create-an-encryption-key)
- [Add Encryption Keys to SnapShooter](https://docs.digitalocean.com/products/snapshooter/how-to/add-an-encryption-key/#add-encryption-keys-to-snapshooter)

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