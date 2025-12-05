---
url: "https://docs.digitalocean.com/products/droplets/how-to/transfer-files/"
title: "How to Transfer Files to Droplets With FileZilla | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/droplets.f4877fc574e6b07f8fb9608e252be4160ebecd65569acea11775a046b9370c6f.svg)Droplets](https://docs.digitalocean.com/products/droplets/)
- [Getting Started](https://docs.digitalocean.com/products/droplets/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/droplets/getting-started/quickstart/)
  - [Recommended Droplet Setup](https://docs.digitalocean.com/products/droplets/getting-started/recommended-droplet-setup/)
  - [Recommended GPU Setup](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/)
- [How-Tos](https://docs.digitalocean.com/products/droplets/how-to/)
  - [Create Droplets](https://docs.digitalocean.com/products/droplets/how-to/create/)
  - [Use GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/)
  - [Provide User Data](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/)
  - [Connect with SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/)
  - [Add SSH Keys to Droplets](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/)
  - [Connect with the Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/)
  - [Transfer Files with FileZilla](https://docs.digitalocean.com/products/droplets/how-to/transfer-files/)
  - [Tag Droplets](https://docs.digitalocean.com/products/droplets/how-to/tag/)
  - [Track Performance](https://docs.digitalocean.com/products/droplets/how-to/track-performance/)
  - [Resize Droplets](https://docs.digitalocean.com/products/droplets/how-to/resize/)
  - [Use Autoscale Pools](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/)
  - [Access Metadata](https://docs.digitalocean.com/products/droplets/how-to/access-metadata/)
  - [Rebuild Droplets](https://docs.digitalocean.com/products/droplets/how-to/rebuild/)
  - [Manage the Droplet Agent](https://docs.digitalocean.com/products/droplets/how-to/manage-agent/)
  - [Manage the Kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/)
  - [Recover Access or Data](https://docs.digitalocean.com/products/droplets/how-to/recovery/)
  - [Destroy Droplets](https://docs.digitalocean.com/products/droplets/how-to/destroy/)
- [Reference](https://docs.digitalocean.com/products/droplets/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Droplets)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/)
- [Concepts](https://docs.digitalocean.com/products/droplets/concepts/)
  - [Choosing a Plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/)
  - [Tips on Downsizing Droplets](https://docs.digitalocean.com/products/droplets/concepts/downsizing-considerations/)
  - [Autoscale Pools](https://docs.digitalocean.com/products/droplets/concepts/autoscale-pools/)
  - [Glossary](https://docs.digitalocean.com/glossary/droplets/)
- [Details](https://docs.digitalocean.com/products/droplets/details/)
  - [Features](https://docs.digitalocean.com/products/droplets/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/droplets/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/droplets/details/availability/)
  - [Images](https://docs.digitalocean.com/products/droplets/details/images/)
  - [Limits](https://docs.digitalocean.com/products/droplets/details/limits/)
  - [Image Deprecation Policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/)
  - [Droplet Policies](https://docs.digitalocean.com/products/droplets/details/policies/)
  - [Live Migrations](https://docs.digitalocean.com/products/droplets/details/live-migration/)
  - [CPU Droplet SLA](https://www.digitalocean.com/sla/cpu-droplets)
  - [GPU Droplet SLA](https://www.digitalocean.com/sla/gpu-droplets)
  - [GPU Droplets](https://docs.digitalocean.com/products/gpu-droplets/)
- [Support](https://docs.digitalocean.com/products/droplets/support/)

- [How-Tos](https://docs.digitalocean.com/products/droplets/how-to/)
- Transfer Files with FileZilla

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Transfer Files to Droplets With FileZilla

Validated on 13 Nov 2019 • Last edited on 18 Dec 2024

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

You can transfer files from a local computer to a Droplet using a variety of different protocols and file transfer clients. We recommend using SFTP (SSH File Transfer Protocol) with FileZilla because it is a free, open source, cross-platform tool with a user interface that supports newer users. If you’re comfortable using the command line, you can also use tools like [`rsync`](https://rsync.samba.org/) and [OpenSSH’s `sftp` and `scp`](https://www.openssh.com/manual.html). This tutorial walks you through the initial installation of FileZilla and how to transfer files to your Droplet using an SSH connection.

For security, we recommend using SSH keys with SFTP. If you aren’t already using SSH keys to connect to your Droplet, set them up using [How-to Add SSH Keys to New or Existing Droplets](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/).

## Install FileZilla

On the machine from which you want to transfer files, [download and install FileZilla](https://filezilla-project.org/download.php?show_all=1). Choose the version for your operating system.

On Debian-based Linux distributions, like Ubuntu, you can alternatively install FileZilla using the APT package manager:

```shell
sudo apt-get update
sudo apt-get install filezilla
```

## Configure FileZilla

After you install FileZilla, you need to configure it to connect to the Droplet.

Open FileZilla and then click **Settings** in the **Edit** drop-down menu.

In the **Connection** section, click **SFTP**. This is where you add your Droplet’s private SSH key. Click **Add key file…**, then locate your Droplet’s private SSH key on your local machine. If FileZilla prompts you to convert the file into a supported format, click **Yes**.

![Settings menu](https://docs.digitalocean.com/screenshots/droplets/droplets-filezilla-settings.ef12126a2c69277fef03da31f0e451e74031601b05019ff52b9f75dd76e58411.png)

After you add the SSH key, open the **File** drop-down menu and click **Site Manager**. The site manager lets you add, remove, and manage servers and devices that you want to connect to using FileZilla.

Click **New Site** and enter the name of the Droplet. In the protocol field, select **SFTP** from the drop-down menu. Enter information for the following fields:

- **Host:** The IP address of your Droplet.
- **Port:** Enter the port you use to connect to the Droplet (port `22` is the default).
- **Logon Type:** Select **Interactive**.
- **User**: Enter the username you are connecting to the Droplet with (`root` is the default user on most Droplets).

![New site menu](https://docs.digitalocean.com/screenshots/droplets/droplets-filezilla-new-site.b3be3ec19f55ddfa6f313433a7016234fdcde9356465f87189f4f68681e49386.png)

Once you have entered your settings, click **Connect**. The status field in the top window displays the status of the connection.

If you receive the error `Disconnected: No supported authentication methods available (server sent: publickey)`, the Droplet could not locate the correct private SSH key file to authorize access for your local machine. Learn more about [troubleshooting your SSH keys](https://docs.digitalocean.com/support/how-to-troubleshoot-ssh-connectivity-issues/).

## Transfer Files with FileZilla

Once connected to the Droplet, use the **Local site** windows to navigate the directories of your local machine and locate the files you want to upload. Right-click the file you want to transfer to the Droplet, then click **Upload**.

![File transfer window](https://docs.digitalocean.com/screenshots/droplets/droplets-filezilla-transfer.c23e97fe8d3311035c6f973e93441506a66474c714fc32cf4a14ccb9f6154a3b.png)

To transfer files from the Droplet to your local machine, use the **Remote site** windows to navigate the directories of your Droplet and locate the files you want to download to your local machine. Right-click the file you want to transfer from the Droplet, then click **Download**.

In this article...

- [Install FileZilla](https://docs.digitalocean.com/products/droplets/how-to/transfer-files/#install-filezilla)
- [Configure FileZilla](https://docs.digitalocean.com/products/droplets/how-to/transfer-files/#configure-filezilla)
- [Transfer Files with FileZilla](https://docs.digitalocean.com/products/droplets/how-to/transfer-files/#transfer-files-with-filezilla)

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